// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.8.0
 * source: cosmos/evidence/v1beta1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../../google/protobuf/any";
import * as dependency_3 from "./../../../cosmos_proto/cosmos";
import * as dependency_4 from "./../../msg/v1/msg";
import * as pb_1 from "google-protobuf";
export namespace cosmos.evidence.v1beta1 {
    export class MsgSubmitEvidence extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            submitter?: string;
            evidence?: dependency_2.google.protobuf.Any;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("submitter" in data && data.submitter != undefined) {
                    this.submitter = data.submitter;
                }
                if ("evidence" in data && data.evidence != undefined) {
                    this.evidence = data.evidence;
                }
            }
        }
        get submitter() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set submitter(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get evidence() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2) as dependency_2.google.protobuf.Any;
        }
        set evidence(value: dependency_2.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_evidence() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            submitter?: string;
            evidence?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        }): MsgSubmitEvidence {
            const message = new MsgSubmitEvidence({});
            if (data.submitter != null) {
                message.submitter = data.submitter;
            }
            if (data.evidence != null) {
                message.evidence = dependency_2.google.protobuf.Any.fromObject(data.evidence);
            }
            return message;
        }
        toObject() {
            const data: {
                submitter?: string;
                evidence?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            } = {};
            if (this.submitter != null) {
                data.submitter = this.submitter;
            }
            if (this.evidence != null) {
                data.evidence = this.evidence.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.submitter.length)
                writer.writeString(1, this.submitter);
            if (this.has_evidence)
                writer.writeMessage(2, this.evidence, () => this.evidence.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSubmitEvidence {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSubmitEvidence();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.submitter = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.evidence, () => message.evidence = dependency_2.google.protobuf.Any.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgSubmitEvidence {
            return MsgSubmitEvidence.deserialize(bytes);
        }
    }
    export class MsgSubmitEvidenceResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            hash?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("hash" in data && data.hash != undefined) {
                    this.hash = data.hash;
                }
            }
        }
        get hash() {
            return pb_1.Message.getFieldWithDefault(this, 4, new Uint8Array()) as Uint8Array;
        }
        set hash(value: Uint8Array) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            hash?: Uint8Array;
        }): MsgSubmitEvidenceResponse {
            const message = new MsgSubmitEvidenceResponse({});
            if (data.hash != null) {
                message.hash = data.hash;
            }
            return message;
        }
        toObject() {
            const data: {
                hash?: Uint8Array;
            } = {};
            if (this.hash != null) {
                data.hash = this.hash;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.hash.length)
                writer.writeBytes(4, this.hash);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSubmitEvidenceResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSubmitEvidenceResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 4:
                        message.hash = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgSubmitEvidenceResponse {
            return MsgSubmitEvidenceResponse.deserialize(bytes);
        }
    }
}
