/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: azure/AzureStorage.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace org.apache.airavata.mft.resource.stubs.azure.storage {
    export class AzureStorage extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            storageId?: string;
            container?: string;
            name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("storageId" in data && data.storageId != undefined) {
                    this.storageId = data.storageId;
                }
                if ("container" in data && data.container != undefined) {
                    this.container = data.container;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
            }
        }
        get storageId() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set storageId(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get container() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set container(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            storageId?: string;
            container?: string;
            name?: string;
        }): AzureStorage {
            const message = new AzureStorage({});
            if (data.storageId != null) {
                message.storageId = data.storageId;
            }
            if (data.container != null) {
                message.container = data.container;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            return message;
        }
        toObject() {
            const data: {
                storageId?: string;
                container?: string;
                name?: string;
            } = {};
            if (this.storageId != null) {
                data.storageId = this.storageId;
            }
            if (this.container != null) {
                data.container = this.container;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.storageId.length)
                writer.writeString(1, this.storageId);
            if (this.container.length)
                writer.writeString(2, this.container);
            if (this.name.length)
                writer.writeString(3, this.name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AzureStorage {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AzureStorage();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.storageId = reader.readString();
                        break;
                    case 2:
                        message.container = reader.readString();
                        break;
                    case 3:
                        message.name = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AzureStorage {
            return AzureStorage.deserialize(bytes);
        }
    }
    export class AzureStorageListRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            offset?: number;
            limit?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("offset" in data && data.offset != undefined) {
                    this.offset = data.offset;
                }
                if ("limit" in data && data.limit != undefined) {
                    this.limit = data.limit;
                }
            }
        }
        get offset() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set offset(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get limit() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set limit(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            offset?: number;
            limit?: number;
        }): AzureStorageListRequest {
            const message = new AzureStorageListRequest({});
            if (data.offset != null) {
                message.offset = data.offset;
            }
            if (data.limit != null) {
                message.limit = data.limit;
            }
            return message;
        }
        toObject() {
            const data: {
                offset?: number;
                limit?: number;
            } = {};
            if (this.offset != null) {
                data.offset = this.offset;
            }
            if (this.limit != null) {
                data.limit = this.limit;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.offset != 0)
                writer.writeInt32(1, this.offset);
            if (this.limit != 0)
                writer.writeInt32(2, this.limit);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AzureStorageListRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AzureStorageListRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.offset = reader.readInt32();
                        break;
                    case 2:
                        message.limit = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AzureStorageListRequest {
            return AzureStorageListRequest.deserialize(bytes);
        }
    }
    export class AzureStorageListResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            storages?: AzureStorage[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("storages" in data && data.storages != undefined) {
                    this.storages = data.storages;
                }
            }
        }
        get storages() {
            return pb_1.Message.getRepeatedWrapperField(this, AzureStorage, 1) as AzureStorage[];
        }
        set storages(value: AzureStorage[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            storages?: ReturnType<typeof AzureStorage.prototype.toObject>[];
        }): AzureStorageListResponse {
            const message = new AzureStorageListResponse({});
            if (data.storages != null) {
                message.storages = data.storages.map(item => AzureStorage.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                storages?: ReturnType<typeof AzureStorage.prototype.toObject>[];
            } = {};
            if (this.storages != null) {
                data.storages = this.storages.map((item: AzureStorage) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.storages.length)
                writer.writeRepeatedMessage(1, this.storages, (item: AzureStorage) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AzureStorageListResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AzureStorageListResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.storages, () => pb_1.Message.addToRepeatedWrapperField(message, 1, AzureStorage.deserialize(reader), AzureStorage));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AzureStorageListResponse {
            return AzureStorageListResponse.deserialize(bytes);
        }
    }
    export class AzureStorageGetRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            storageId?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("storageId" in data && data.storageId != undefined) {
                    this.storageId = data.storageId;
                }
            }
        }
        get storageId() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set storageId(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            storageId?: string;
        }): AzureStorageGetRequest {
            const message = new AzureStorageGetRequest({});
            if (data.storageId != null) {
                message.storageId = data.storageId;
            }
            return message;
        }
        toObject() {
            const data: {
                storageId?: string;
            } = {};
            if (this.storageId != null) {
                data.storageId = this.storageId;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.storageId.length)
                writer.writeString(1, this.storageId);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AzureStorageGetRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AzureStorageGetRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.storageId = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AzureStorageGetRequest {
            return AzureStorageGetRequest.deserialize(bytes);
        }
    }
    export class AzureStorageCreateRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            container?: string;
            storageId?: string;
            name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("container" in data && data.container != undefined) {
                    this.container = data.container;
                }
                if ("storageId" in data && data.storageId != undefined) {
                    this.storageId = data.storageId;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
            }
        }
        get container() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set container(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get storageId() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set storageId(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            container?: string;
            storageId?: string;
            name?: string;
        }): AzureStorageCreateRequest {
            const message = new AzureStorageCreateRequest({});
            if (data.container != null) {
                message.container = data.container;
            }
            if (data.storageId != null) {
                message.storageId = data.storageId;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            return message;
        }
        toObject() {
            const data: {
                container?: string;
                storageId?: string;
                name?: string;
            } = {};
            if (this.container != null) {
                data.container = this.container;
            }
            if (this.storageId != null) {
                data.storageId = this.storageId;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.container.length)
                writer.writeString(1, this.container);
            if (this.storageId.length)
                writer.writeString(2, this.storageId);
            if (this.name.length)
                writer.writeString(3, this.name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AzureStorageCreateRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AzureStorageCreateRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.container = reader.readString();
                        break;
                    case 2:
                        message.storageId = reader.readString();
                        break;
                    case 3:
                        message.name = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AzureStorageCreateRequest {
            return AzureStorageCreateRequest.deserialize(bytes);
        }
    }
    export class AzureStorageUpdateRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            storageId?: string;
            container?: string;
            name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("storageId" in data && data.storageId != undefined) {
                    this.storageId = data.storageId;
                }
                if ("container" in data && data.container != undefined) {
                    this.container = data.container;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
            }
        }
        get storageId() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set storageId(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get container() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set container(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            storageId?: string;
            container?: string;
            name?: string;
        }): AzureStorageUpdateRequest {
            const message = new AzureStorageUpdateRequest({});
            if (data.storageId != null) {
                message.storageId = data.storageId;
            }
            if (data.container != null) {
                message.container = data.container;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            return message;
        }
        toObject() {
            const data: {
                storageId?: string;
                container?: string;
                name?: string;
            } = {};
            if (this.storageId != null) {
                data.storageId = this.storageId;
            }
            if (this.container != null) {
                data.container = this.container;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.storageId.length)
                writer.writeString(1, this.storageId);
            if (this.container.length)
                writer.writeString(2, this.container);
            if (this.name.length)
                writer.writeString(3, this.name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AzureStorageUpdateRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AzureStorageUpdateRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.storageId = reader.readString();
                        break;
                    case 2:
                        message.container = reader.readString();
                        break;
                    case 3:
                        message.name = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AzureStorageUpdateRequest {
            return AzureStorageUpdateRequest.deserialize(bytes);
        }
    }
    export class AzureStorageUpdateResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            storageId?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("storageId" in data && data.storageId != undefined) {
                    this.storageId = data.storageId;
                }
            }
        }
        get storageId() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set storageId(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            storageId?: string;
        }): AzureStorageUpdateResponse {
            const message = new AzureStorageUpdateResponse({});
            if (data.storageId != null) {
                message.storageId = data.storageId;
            }
            return message;
        }
        toObject() {
            const data: {
                storageId?: string;
            } = {};
            if (this.storageId != null) {
                data.storageId = this.storageId;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.storageId.length)
                writer.writeString(1, this.storageId);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AzureStorageUpdateResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AzureStorageUpdateResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.storageId = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AzureStorageUpdateResponse {
            return AzureStorageUpdateResponse.deserialize(bytes);
        }
    }
    export class AzureStorageDeleteRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            storageId?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("storageId" in data && data.storageId != undefined) {
                    this.storageId = data.storageId;
                }
            }
        }
        get storageId() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set storageId(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            storageId?: string;
        }): AzureStorageDeleteRequest {
            const message = new AzureStorageDeleteRequest({});
            if (data.storageId != null) {
                message.storageId = data.storageId;
            }
            return message;
        }
        toObject() {
            const data: {
                storageId?: string;
            } = {};
            if (this.storageId != null) {
                data.storageId = this.storageId;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.storageId.length)
                writer.writeString(1, this.storageId);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AzureStorageDeleteRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AzureStorageDeleteRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.storageId = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AzureStorageDeleteRequest {
            return AzureStorageDeleteRequest.deserialize(bytes);
        }
    }
    export class AzureStorageDeleteResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            status?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("status" in data && data.status != undefined) {
                    this.status = data.status;
                }
            }
        }
        get status() {
            return pb_1.Message.getFieldWithDefault(this, 1, false) as boolean;
        }
        set status(value: boolean) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            status?: boolean;
        }): AzureStorageDeleteResponse {
            const message = new AzureStorageDeleteResponse({});
            if (data.status != null) {
                message.status = data.status;
            }
            return message;
        }
        toObject() {
            const data: {
                status?: boolean;
            } = {};
            if (this.status != null) {
                data.status = this.status;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.status != false)
                writer.writeBool(1, this.status);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AzureStorageDeleteResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AzureStorageDeleteResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.status = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AzureStorageDeleteResponse {
            return AzureStorageDeleteResponse.deserialize(bytes);
        }
    }
}