// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.8.0
 * source: cosmos/slashing/v1beta1/slashing.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../../google/protobuf/duration";
import * as dependency_3 from "./../../../google/protobuf/timestamp";
import * as dependency_4 from "./../../../cosmos_proto/cosmos";
import * as pb_1 from "google-protobuf";
export namespace cosmos.slashing.v1beta1 {
    export class ValidatorSigningInfo extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            address?: string;
            start_height?: number;
            index_offset?: number;
            jailed_until?: dependency_3.google.protobuf.Timestamp;
            tombstoned?: boolean;
            missed_blocks_counter?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("start_height" in data && data.start_height != undefined) {
                    this.start_height = data.start_height;
                }
                if ("index_offset" in data && data.index_offset != undefined) {
                    this.index_offset = data.index_offset;
                }
                if ("jailed_until" in data && data.jailed_until != undefined) {
                    this.jailed_until = data.jailed_until;
                }
                if ("tombstoned" in data && data.tombstoned != undefined) {
                    this.tombstoned = data.tombstoned;
                }
                if ("missed_blocks_counter" in data && data.missed_blocks_counter != undefined) {
                    this.missed_blocks_counter = data.missed_blocks_counter;
                }
            }
        }
        get address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get start_height() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set start_height(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get index_offset() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set index_offset(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get jailed_until() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 4) as dependency_3.google.protobuf.Timestamp;
        }
        set jailed_until(value: dependency_3.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_jailed_until() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get tombstoned() {
            return pb_1.Message.getFieldWithDefault(this, 5, false) as boolean;
        }
        set tombstoned(value: boolean) {
            pb_1.Message.setField(this, 5, value);
        }
        get missed_blocks_counter() {
            return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
        }
        set missed_blocks_counter(value: number) {
            pb_1.Message.setField(this, 6, value);
        }
        static fromObject(data: {
            address?: string;
            start_height?: number;
            index_offset?: number;
            jailed_until?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            tombstoned?: boolean;
            missed_blocks_counter?: number;
        }): ValidatorSigningInfo {
            const message = new ValidatorSigningInfo({});
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.start_height != null) {
                message.start_height = data.start_height;
            }
            if (data.index_offset != null) {
                message.index_offset = data.index_offset;
            }
            if (data.jailed_until != null) {
                message.jailed_until = dependency_3.google.protobuf.Timestamp.fromObject(data.jailed_until);
            }
            if (data.tombstoned != null) {
                message.tombstoned = data.tombstoned;
            }
            if (data.missed_blocks_counter != null) {
                message.missed_blocks_counter = data.missed_blocks_counter;
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
                start_height?: number;
                index_offset?: number;
                jailed_until?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
                tombstoned?: boolean;
                missed_blocks_counter?: number;
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.start_height != null) {
                data.start_height = this.start_height;
            }
            if (this.index_offset != null) {
                data.index_offset = this.index_offset;
            }
            if (this.jailed_until != null) {
                data.jailed_until = this.jailed_until.toObject();
            }
            if (this.tombstoned != null) {
                data.tombstoned = this.tombstoned;
            }
            if (this.missed_blocks_counter != null) {
                data.missed_blocks_counter = this.missed_blocks_counter;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.address.length)
                writer.writeString(1, this.address);
            if (this.start_height != 0)
                writer.writeInt64(2, this.start_height);
            if (this.index_offset != 0)
                writer.writeInt64(3, this.index_offset);
            if (this.has_jailed_until)
                writer.writeMessage(4, this.jailed_until, () => this.jailed_until.serialize(writer));
            if (this.tombstoned != false)
                writer.writeBool(5, this.tombstoned);
            if (this.missed_blocks_counter != 0)
                writer.writeInt64(6, this.missed_blocks_counter);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ValidatorSigningInfo {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ValidatorSigningInfo();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    case 2:
                        message.start_height = reader.readInt64();
                        break;
                    case 3:
                        message.index_offset = reader.readInt64();
                        break;
                    case 4:
                        reader.readMessage(message.jailed_until, () => message.jailed_until = dependency_3.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 5:
                        message.tombstoned = reader.readBool();
                        break;
                    case 6:
                        message.missed_blocks_counter = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ValidatorSigningInfo {
            return ValidatorSigningInfo.deserialize(bytes);
        }
    }
    export class Params extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            signed_blocks_window?: number;
            min_signed_per_window?: Uint8Array;
            downtime_jail_duration?: dependency_2.google.protobuf.Duration;
            slash_fraction_double_sign?: Uint8Array;
            slash_fraction_downtime?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("signed_blocks_window" in data && data.signed_blocks_window != undefined) {
                    this.signed_blocks_window = data.signed_blocks_window;
                }
                if ("min_signed_per_window" in data && data.min_signed_per_window != undefined) {
                    this.min_signed_per_window = data.min_signed_per_window;
                }
                if ("downtime_jail_duration" in data && data.downtime_jail_duration != undefined) {
                    this.downtime_jail_duration = data.downtime_jail_duration;
                }
                if ("slash_fraction_double_sign" in data && data.slash_fraction_double_sign != undefined) {
                    this.slash_fraction_double_sign = data.slash_fraction_double_sign;
                }
                if ("slash_fraction_downtime" in data && data.slash_fraction_downtime != undefined) {
                    this.slash_fraction_downtime = data.slash_fraction_downtime;
                }
            }
        }
        get signed_blocks_window() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set signed_blocks_window(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get min_signed_per_window() {
            return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array()) as Uint8Array;
        }
        set min_signed_per_window(value: Uint8Array) {
            pb_1.Message.setField(this, 2, value);
        }
        get downtime_jail_duration() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Duration, 3) as dependency_2.google.protobuf.Duration;
        }
        set downtime_jail_duration(value: dependency_2.google.protobuf.Duration) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_downtime_jail_duration() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get slash_fraction_double_sign() {
            return pb_1.Message.getFieldWithDefault(this, 4, new Uint8Array()) as Uint8Array;
        }
        set slash_fraction_double_sign(value: Uint8Array) {
            pb_1.Message.setField(this, 4, value);
        }
        get slash_fraction_downtime() {
            return pb_1.Message.getFieldWithDefault(this, 5, new Uint8Array()) as Uint8Array;
        }
        set slash_fraction_downtime(value: Uint8Array) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            signed_blocks_window?: number;
            min_signed_per_window?: Uint8Array;
            downtime_jail_duration?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
            slash_fraction_double_sign?: Uint8Array;
            slash_fraction_downtime?: Uint8Array;
        }): Params {
            const message = new Params({});
            if (data.signed_blocks_window != null) {
                message.signed_blocks_window = data.signed_blocks_window;
            }
            if (data.min_signed_per_window != null) {
                message.min_signed_per_window = data.min_signed_per_window;
            }
            if (data.downtime_jail_duration != null) {
                message.downtime_jail_duration = dependency_2.google.protobuf.Duration.fromObject(data.downtime_jail_duration);
            }
            if (data.slash_fraction_double_sign != null) {
                message.slash_fraction_double_sign = data.slash_fraction_double_sign;
            }
            if (data.slash_fraction_downtime != null) {
                message.slash_fraction_downtime = data.slash_fraction_downtime;
            }
            return message;
        }
        toObject() {
            const data: {
                signed_blocks_window?: number;
                min_signed_per_window?: Uint8Array;
                downtime_jail_duration?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
                slash_fraction_double_sign?: Uint8Array;
                slash_fraction_downtime?: Uint8Array;
            } = {};
            if (this.signed_blocks_window != null) {
                data.signed_blocks_window = this.signed_blocks_window;
            }
            if (this.min_signed_per_window != null) {
                data.min_signed_per_window = this.min_signed_per_window;
            }
            if (this.downtime_jail_duration != null) {
                data.downtime_jail_duration = this.downtime_jail_duration.toObject();
            }
            if (this.slash_fraction_double_sign != null) {
                data.slash_fraction_double_sign = this.slash_fraction_double_sign;
            }
            if (this.slash_fraction_downtime != null) {
                data.slash_fraction_downtime = this.slash_fraction_downtime;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.signed_blocks_window != 0)
                writer.writeInt64(1, this.signed_blocks_window);
            if (this.min_signed_per_window.length)
                writer.writeBytes(2, this.min_signed_per_window);
            if (this.has_downtime_jail_duration)
                writer.writeMessage(3, this.downtime_jail_duration, () => this.downtime_jail_duration.serialize(writer));
            if (this.slash_fraction_double_sign.length)
                writer.writeBytes(4, this.slash_fraction_double_sign);
            if (this.slash_fraction_downtime.length)
                writer.writeBytes(5, this.slash_fraction_downtime);
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
                        message.signed_blocks_window = reader.readInt64();
                        break;
                    case 2:
                        message.min_signed_per_window = reader.readBytes();
                        break;
                    case 3:
                        reader.readMessage(message.downtime_jail_duration, () => message.downtime_jail_duration = dependency_2.google.protobuf.Duration.deserialize(reader));
                        break;
                    case 4:
                        message.slash_fraction_double_sign = reader.readBytes();
                        break;
                    case 5:
                        message.slash_fraction_downtime = reader.readBytes();
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
