// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.8.0
 * source: evmos/claims/v1/claims.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace evmos.claims.v1 {
    export enum Action {
        ACTION_UNSPECIFIED = 0,
        ACTION_VOTE = 1,
        ACTION_DELEGATE = 2,
        ACTION_EVM = 3,
        ACTION_IBC_TRANSFER = 4
    }
    export class Claim extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            action?: Action;
            completed?: boolean;
            claimable_amount?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("action" in data && data.action != undefined) {
                    this.action = data.action;
                }
                if ("completed" in data && data.completed != undefined) {
                    this.completed = data.completed;
                }
                if ("claimable_amount" in data && data.claimable_amount != undefined) {
                    this.claimable_amount = data.claimable_amount;
                }
            }
        }
        get action() {
            return pb_1.Message.getFieldWithDefault(this, 1, Action.ACTION_UNSPECIFIED) as Action;
        }
        set action(value: Action) {
            pb_1.Message.setField(this, 1, value);
        }
        get completed() {
            return pb_1.Message.getFieldWithDefault(this, 2, false) as boolean;
        }
        set completed(value: boolean) {
            pb_1.Message.setField(this, 2, value);
        }
        get claimable_amount() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set claimable_amount(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            action?: Action;
            completed?: boolean;
            claimable_amount?: string;
        }): Claim {
            const message = new Claim({});
            if (data.action != null) {
                message.action = data.action;
            }
            if (data.completed != null) {
                message.completed = data.completed;
            }
            if (data.claimable_amount != null) {
                message.claimable_amount = data.claimable_amount;
            }
            return message;
        }
        toObject() {
            const data: {
                action?: Action;
                completed?: boolean;
                claimable_amount?: string;
            } = {};
            if (this.action != null) {
                data.action = this.action;
            }
            if (this.completed != null) {
                data.completed = this.completed;
            }
            if (this.claimable_amount != null) {
                data.claimable_amount = this.claimable_amount;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.action != Action.ACTION_UNSPECIFIED)
                writer.writeEnum(1, this.action);
            if (this.completed != false)
                writer.writeBool(2, this.completed);
            if (this.claimable_amount.length)
                writer.writeString(3, this.claimable_amount);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Claim {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Claim();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.action = reader.readEnum();
                        break;
                    case 2:
                        message.completed = reader.readBool();
                        break;
                    case 3:
                        message.claimable_amount = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Claim {
            return Claim.deserialize(bytes);
        }
    }
    export class ClaimsRecordAddress extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            address?: string;
            initial_claimable_amount?: string;
            actions_completed?: boolean[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("initial_claimable_amount" in data && data.initial_claimable_amount != undefined) {
                    this.initial_claimable_amount = data.initial_claimable_amount;
                }
                if ("actions_completed" in data && data.actions_completed != undefined) {
                    this.actions_completed = data.actions_completed;
                }
            }
        }
        get address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get initial_claimable_amount() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set initial_claimable_amount(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get actions_completed() {
            return pb_1.Message.getFieldWithDefault(this, 3, []) as boolean[];
        }
        set actions_completed(value: boolean[]) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            address?: string;
            initial_claimable_amount?: string;
            actions_completed?: boolean[];
        }): ClaimsRecordAddress {
            const message = new ClaimsRecordAddress({});
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.initial_claimable_amount != null) {
                message.initial_claimable_amount = data.initial_claimable_amount;
            }
            if (data.actions_completed != null) {
                message.actions_completed = data.actions_completed;
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
                initial_claimable_amount?: string;
                actions_completed?: boolean[];
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.initial_claimable_amount != null) {
                data.initial_claimable_amount = this.initial_claimable_amount;
            }
            if (this.actions_completed != null) {
                data.actions_completed = this.actions_completed;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.address.length)
                writer.writeString(1, this.address);
            if (this.initial_claimable_amount.length)
                writer.writeString(2, this.initial_claimable_amount);
            if (this.actions_completed.length)
                writer.writePackedBool(3, this.actions_completed);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ClaimsRecordAddress {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClaimsRecordAddress();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    case 2:
                        message.initial_claimable_amount = reader.readString();
                        break;
                    case 3:
                        message.actions_completed = reader.readPackedBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ClaimsRecordAddress {
            return ClaimsRecordAddress.deserialize(bytes);
        }
    }
    export class ClaimsRecord extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            initial_claimable_amount?: string;
            actions_completed?: boolean[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("initial_claimable_amount" in data && data.initial_claimable_amount != undefined) {
                    this.initial_claimable_amount = data.initial_claimable_amount;
                }
                if ("actions_completed" in data && data.actions_completed != undefined) {
                    this.actions_completed = data.actions_completed;
                }
            }
        }
        get initial_claimable_amount() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set initial_claimable_amount(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get actions_completed() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as boolean[];
        }
        set actions_completed(value: boolean[]) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            initial_claimable_amount?: string;
            actions_completed?: boolean[];
        }): ClaimsRecord {
            const message = new ClaimsRecord({});
            if (data.initial_claimable_amount != null) {
                message.initial_claimable_amount = data.initial_claimable_amount;
            }
            if (data.actions_completed != null) {
                message.actions_completed = data.actions_completed;
            }
            return message;
        }
        toObject() {
            const data: {
                initial_claimable_amount?: string;
                actions_completed?: boolean[];
            } = {};
            if (this.initial_claimable_amount != null) {
                data.initial_claimable_amount = this.initial_claimable_amount;
            }
            if (this.actions_completed != null) {
                data.actions_completed = this.actions_completed;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.initial_claimable_amount.length)
                writer.writeString(1, this.initial_claimable_amount);
            if (this.actions_completed.length)
                writer.writePackedBool(2, this.actions_completed);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ClaimsRecord {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClaimsRecord();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.initial_claimable_amount = reader.readString();
                        break;
                    case 2:
                        message.actions_completed = reader.readPackedBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ClaimsRecord {
            return ClaimsRecord.deserialize(bytes);
        }
    }
}
