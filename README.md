# evmosjs

JS and TS libs for Evmos.

## Installation

evmosjs uses [buf.build](https://buf.build/) to manage [Evmos Protobuf dependencies](https://buf.build/evmos). To install evmosjs packages in your project,
follow the instructions corresponding to your package manager.

### NPM

Add the following line to an `.npmrc` file in your project root:

```ini
@buf:registry=https://buf.build/gen/npm/v1
```

Then run:

```bash
npm install evmosjs
```

Or:

```bash
npm install @evmos/[package]
```

### Yarn v2.x or v3.x

Add the following to an `.yarnrc.yml` file in your project root:

```yaml
npmScopes:
  buf:
    npmRegistryServer: "https://buf.build/gen/npm/v1"
```

Then run:

```bash
yarn add evmosjs
```

Or:

```bash
yarn add @evmos/[package]
```

Note that Yarn v1 is not supported ([see explanation](https://docs.buf.build/bsr/remote-packages/npm#other-package-managers)).

## Usage and Examples

### Query an Account

Query the account number, sequence, and pubkey for a given address.

```ts
import { generateEndpointAccount } from '@evmos/provider'

const address = 'evmos1...'

// Find node urls for either mainnet or testnet here:
// https://docs.evmos.org/develop/api/networks.
const nodeUrl = '...'
const queryEndpoint = `${nodeUrl}${generateEndpointAccount(address)}`

const restOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
}

// Note that the node will return a 400 status code if the account does not exist.
const rawResult = await fetch(
  queryEndpoint,
  restOptions,
)

const result = await rawResult.json()

// The response format is available at @evmos/provider/rest/account/AccountResponse.
// Note that the `pub_key` will be `null` if the address has not sent any transactions.
/*
  account: {
    '@type': string
    base_account: {
      address: string
      pub_key?: {
        '@type': string
        key: string
      }
      account_number: string
      sequence: string
    }
    code_hash: string
  }
*/
```

### Create a Signable Transaction

Create a transaction payload which can be signed using either Metamask or Keplr.

This example uses `MsgSend`. View all signable transaction payloads in the [Transaction Docs](https://github.com/evmos/evmosjs/tree/main/docs/transactions).

```ts
import {
  Chain,
  Sender,
  Fee,
  TxContext,
  MsgSendParams,
  createTxMsgSend,
  TxPayload,
} from '@evmos/transactions'

const chain: Chain = {
  chainId: 9001,
  cosmosChainId: 'evmos_9001-2',
}

// Populate the transaction sender parameters using the
// query API.
const sender: Sender = {
  accountAddress: [sender_account_address],
  sequence: [sender_sequence],
  accountNumber: [sender_account_number],
  // Use an empty string if the pubkey is unknown.
  pubkey: [sender_pub_key],
}

const fee: Fee = {
  amount: '4000000000000000',
  denom: 'aevmos',
  gas: '200000',
}

const memo = ''

const context: TxContext = {
  chain,
  sender,
  fee,
  memo,
}

const params: MsgSendParams = {
  destinationAddress: [destination_address],
  amount: [transaction_amount],
  denom: 'aevmos',
}

const tx: TxPayload = createTxMsgSend(context, params)
```

### Sign the Transaction with MetaMask

Evmos supports EIP-712 signatures for Cosmos payloads to be signed using Ethereum wallets such as MetaMask.

```ts
import { createTxRaw } from '@evmos/proto'
import { evmosToEth } from '@evmos/address-converter'

// First, populate a TxContext object and create a signable Tx payload.
// (See 'Create a Signable Transaction' to learn how to create these).
const context = ...
const tx = ...

const { sender } = context

// Initialize MetaMask and sign the EIP-712 payload.
await window.ethereum.enable()

const senderHexAddress = evmosToEth(sender.accountAddress)
const eip712Payload = JSON.stringify(tx.eipToSign)

const signature = await window.ethereum.request({
  method: 'eth_signTypedData_v4',
  params: [senderHexAddress, eip712Payload],
})

// Create a signed Tx payload that can be broadcast to a node.
const signatureBytes = Buffer.from(signature.replace('0x', ''), 'hex')

const { signDirect } = tx
const bodyBytes = signDirect.body.toBinary()
const authInfoBytes = signDirect.authInfo.toBinary()

const signedTx = createTxRaw(
  bodyBytes,
  authInfoBytes,
  [signatureBytes],
)
```

### Sign the Transaction with Keplr (SignDirect)

EvmosJS supports Cosmos SDK `SignDirect` payloads that can be signed using Keplr.

```ts
import { createTxRaw } from '@evmos/proto'

// First, populate a TxContext object and create a signable Tx payload.
// (See 'Create a Signable Transaction' to learn how to create these).
const context = ...
const tx = ...

const { chain, sender } = context
const { signDirect } = tx

const signResponse = await window?.keplr?.signDirect(
  chain.cosmosChainId,
  sender.accountAddress,
  {
    bodyBytes: signDirect.body.toBinary(),
    authInfoBytes: signDirect.authInfo.toBinary(),
    chainId: chain.cosmosChainId,
    accountNumber: new Long(sender.accountNumber),
  },
)

if (!signResponse) {
  // Handle signature failure here.
}

const signatures = [
  new Uint8Array(Buffer.from(signResponse.signature.signature, 'base64')),
]

const { signed } = signResponse

const signedTx = createTxRaw(
  signed.bodyBytes,
  signed.authInfoBytes,
  signatures,
)
```

### Sign the Transaction with Keplr (EIP-712)

EvmosJS also supports signing [EIP-712](https://eips.ethereum.org/EIPS/eip-712) payloads using Keplr. This is necessary for Ledger users on Keplr, since the Ledger device cannot sign `SignDirect` payloads.

```ts
import { EthSignType } from '@keplr-wallet/types';
import { createTxRaw } from '@evmos/proto'

// First, populate a TxContext object and create a signable Tx payload.
// (See 'Create a Signable Transaction' to learn how to create these).
const context = ...
const tx = ...

const { chain, sender } = context

const eip712Payload = JSON.stringify(tx.eipToSign)
const signature = await window?.keplr?.signEthereum(
  chain.cosmosChainId,
  sender.accountAddress,
  eip712Payload,
  EthSignType.EIP712,
)

if (!signature) {
  // Handle signature failure here.
}

const { signDirect } = tx
const bodyBytes = signDirect.body.toBinary()
const authInfoBytes = signDirect.authInfo.toBinary()

const signedTx = createTxRaw(
  bodyBytes,
  authInfoBytes,
  [signature],
)
```

### Broadcast the Signed Transaction

Regardless of how the transaction is signed, broadcasting takes place the same way.

```ts
import {
  generateEndpointBroadcast,
  generatePostBodyBroadcast,
} from '@evmos/provider'

// First, sign a transaction using MetaMask or Keplr.
const signedTx = createTxRaw(...)

// Find a node URL from a network endpoint:
// https://docs.evmos.org/develop/api/networks.
const nodeUrl = ...

const postOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: generatePostBodyBroadcast(signedTx),
}

const broadcastEndpoint = `${nodeUrl}${generateEndpointBroadcast()}`
const broadcastPost = await fetch(
  broadcastEndpoint,
  postOptions,
)

const response = await broadcastPost.json()
```
