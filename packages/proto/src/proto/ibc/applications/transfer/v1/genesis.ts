// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.8.0
 * source: ibc/applications/transfer/v1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./transfer";
import * as dependency_2 from "./../../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace ibc.applications.transfer.v1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            port_id?: string;
            denom_traces?: dependency_1.ibc.applications.transfer.v1.DenomTrace[];
            params?: dependency_1.ibc.applications.transfer.v1.Params;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("port_id" in data && data.port_id != undefined) {
                    this.port_id = data.port_id;
                }
                if ("denom_traces" in data && data.denom_traces != undefined) {
                    this.denom_traces = data.denom_traces;
                }
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
            }
        }
        get port_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set port_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get denom_traces() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ibc.applications.transfer.v1.DenomTrace, 2) as dependency_1.ibc.applications.transfer.v1.DenomTrace[];
        }
        set denom_traces(value: dependency_1.ibc.applications.transfer.v1.DenomTrace[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_1.ibc.applications.transfer.v1.Params, 3) as dependency_1.ibc.applications.transfer.v1.Params;
        }
        set params(value: dependency_1.ibc.applications.transfer.v1.Params) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_params() {
            return pb_1.Message.getField(this, 3) != null;
        }
        static fromObject(data: {
            port_id?: string;
            denom_traces?: ReturnType<typeof dependency_1.ibc.applications.transfer.v1.DenomTrace.prototype.toObject>[];
            params?: ReturnType<typeof dependency_1.ibc.applications.transfer.v1.Params.prototype.toObject>;
        }): GenesisState {
            const message = new GenesisState({});
            if (data.port_id != null) {
                message.port_id = data.port_id;
            }
            if (data.denom_traces != null) {
                message.denom_traces = data.denom_traces.map(item => dependency_1.ibc.applications.transfer.v1.DenomTrace.fromObject(item));
            }
            if (data.params != null) {
                message.params = dependency_1.ibc.applications.transfer.v1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                port_id?: string;
                denom_traces?: ReturnType<typeof dependency_1.ibc.applications.transfer.v1.DenomTrace.prototype.toObject>[];
                params?: ReturnType<typeof dependency_1.ibc.applications.transfer.v1.Params.prototype.toObject>;
            } = {};
            if (this.port_id != null) {
                data.port_id = this.port_id;
            }
            if (this.denom_traces != null) {
                data.denom_traces = this.denom_traces.map((item: dependency_1.ibc.applications.transfer.v1.DenomTrace) => item.toObject());
            }
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.port_id.length)
                writer.writeString(1, this.port_id);
            if (this.denom_traces.length)
                writer.writeRepeatedMessage(2, this.denom_traces, (item: dependency_1.ibc.applications.transfer.v1.DenomTrace) => item.serialize(writer));
            if (this.has_params)
                writer.writeMessage(3, this.params, () => this.params.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.port_id = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.denom_traces, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.ibc.applications.transfer.v1.DenomTrace.deserialize(reader), dependency_1.ibc.applications.transfer.v1.DenomTrace));
                        break;
                    case 3:
                        reader.readMessage(message.params, () => message.params = dependency_1.ibc.applications.transfer.v1.Params.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenesisState {
            return GenesisState.deserialize(bytes);
        }
    }
}
