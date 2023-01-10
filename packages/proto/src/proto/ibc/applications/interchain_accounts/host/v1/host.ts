// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.8.0
 * source: ibc/applications/interchain_accounts/host/v1/host.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace ibc.applications.interchain_accounts.host.v1 {
    export class Params extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            host_enabled?: boolean;
            allow_messages?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("host_enabled" in data && data.host_enabled != undefined) {
                    this.host_enabled = data.host_enabled;
                }
                if ("allow_messages" in data && data.allow_messages != undefined) {
                    this.allow_messages = data.allow_messages;
                }
            }
        }
        get host_enabled() {
            return pb_1.Message.getFieldWithDefault(this, 1, false) as boolean;
        }
        set host_enabled(value: boolean) {
            pb_1.Message.setField(this, 1, value);
        }
        get allow_messages() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as string[];
        }
        set allow_messages(value: string[]) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            host_enabled?: boolean;
            allow_messages?: string[];
        }): Params {
            const message = new Params({});
            if (data.host_enabled != null) {
                message.host_enabled = data.host_enabled;
            }
            if (data.allow_messages != null) {
                message.allow_messages = data.allow_messages;
            }
            return message;
        }
        toObject() {
            const data: {
                host_enabled?: boolean;
                allow_messages?: string[];
            } = {};
            if (this.host_enabled != null) {
                data.host_enabled = this.host_enabled;
            }
            if (this.allow_messages != null) {
                data.allow_messages = this.allow_messages;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.host_enabled != false)
                writer.writeBool(1, this.host_enabled);
            if (this.allow_messages.length)
                writer.writeRepeatedString(2, this.allow_messages);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Params();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.host_enabled = reader.readBool();
                        break;
                    case 2:
                        pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Params {
            return Params.deserialize(bytes);
        }
    }
}
