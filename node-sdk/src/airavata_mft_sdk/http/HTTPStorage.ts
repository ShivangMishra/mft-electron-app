/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: http/HTTPStorage.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace org.apache.airavata.mft.resource.stubs.http.storage {
    export class HTTPStorage extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            storageId?: string;
            name?: string;
            baseUrl?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("storageId" in data && data.storageId != undefined) {
                    this.storageId = data.storageId;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("baseUrl" in data && data.baseUrl != undefined) {
                    this.baseUrl = data.baseUrl;
                }
            }
        }
        get storageId() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set storageId(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get baseUrl() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set baseUrl(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            storageId?: string;
            name?: string;
            baseUrl?: string;
        }): HTTPStorage {
            const message = new HTTPStorage({});
            if (data.storageId != null) {
                message.storageId = data.storageId;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.baseUrl != null) {
                message.baseUrl = data.baseUrl;
            }
            return message;
        }
        toObject() {
            const data: {
                storageId?: string;
                name?: string;
                baseUrl?: string;
            } = {};
            if (this.storageId != null) {
                data.storageId = this.storageId;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.baseUrl != null) {
                data.baseUrl = this.baseUrl;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.storageId.length)
                writer.writeString(1, this.storageId);
            if (this.name.length)
                writer.writeString(2, this.name);
            if (this.baseUrl.length)
                writer.writeString(3, this.baseUrl);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HTTPStorage {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HTTPStorage();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.storageId = reader.readString();
                        break;
                    case 2:
                        message.name = reader.readString();
                        break;
                    case 3:
                        message.baseUrl = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): HTTPStorage {
            return HTTPStorage.deserialize(bytes);
        }
    }
    export class HTTPStorageListRequest extends pb_1.Message {
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
        }): HTTPStorageListRequest {
            const message = new HTTPStorageListRequest({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HTTPStorageListRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HTTPStorageListRequest();
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
        static deserializeBinary(bytes: Uint8Array): HTTPStorageListRequest {
            return HTTPStorageListRequest.deserialize(bytes);
        }
    }
    export class HTTPStorageListResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            storages?: HTTPStorage[];
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
            return pb_1.Message.getRepeatedWrapperField(this, HTTPStorage, 1) as HTTPStorage[];
        }
        set storages(value: HTTPStorage[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            storages?: ReturnType<typeof HTTPStorage.prototype.toObject>[];
        }): HTTPStorageListResponse {
            const message = new HTTPStorageListResponse({});
            if (data.storages != null) {
                message.storages = data.storages.map(item => HTTPStorage.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                storages?: ReturnType<typeof HTTPStorage.prototype.toObject>[];
            } = {};
            if (this.storages != null) {
                data.storages = this.storages.map((item: HTTPStorage) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.storages.length)
                writer.writeRepeatedMessage(1, this.storages, (item: HTTPStorage) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HTTPStorageListResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HTTPStorageListResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.storages, () => pb_1.Message.addToRepeatedWrapperField(message, 1, HTTPStorage.deserialize(reader), HTTPStorage));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): HTTPStorageListResponse {
            return HTTPStorageListResponse.deserialize(bytes);
        }
    }
    export class HTTPStorageGetRequest extends pb_1.Message {
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
        }): HTTPStorageGetRequest {
            const message = new HTTPStorageGetRequest({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HTTPStorageGetRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HTTPStorageGetRequest();
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
        static deserializeBinary(bytes: Uint8Array): HTTPStorageGetRequest {
            return HTTPStorageGetRequest.deserialize(bytes);
        }
    }
    export class HTTPStorageCreateRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
            baseUrl?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("baseUrl" in data && data.baseUrl != undefined) {
                    this.baseUrl = data.baseUrl;
                }
            }
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get baseUrl() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set baseUrl(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            name?: string;
            baseUrl?: string;
        }): HTTPStorageCreateRequest {
            const message = new HTTPStorageCreateRequest({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.baseUrl != null) {
                message.baseUrl = data.baseUrl;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                baseUrl?: string;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.baseUrl != null) {
                data.baseUrl = this.baseUrl;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(1, this.name);
            if (this.baseUrl.length)
                writer.writeString(2, this.baseUrl);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HTTPStorageCreateRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HTTPStorageCreateRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.baseUrl = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): HTTPStorageCreateRequest {
            return HTTPStorageCreateRequest.deserialize(bytes);
        }
    }
    export class HTTPStorageUpdateRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            storageId?: string;
            name?: string;
            baseUrl?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("storageId" in data && data.storageId != undefined) {
                    this.storageId = data.storageId;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("baseUrl" in data && data.baseUrl != undefined) {
                    this.baseUrl = data.baseUrl;
                }
            }
        }
        get storageId() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set storageId(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get baseUrl() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set baseUrl(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            storageId?: string;
            name?: string;
            baseUrl?: string;
        }): HTTPStorageUpdateRequest {
            const message = new HTTPStorageUpdateRequest({});
            if (data.storageId != null) {
                message.storageId = data.storageId;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.baseUrl != null) {
                message.baseUrl = data.baseUrl;
            }
            return message;
        }
        toObject() {
            const data: {
                storageId?: string;
                name?: string;
                baseUrl?: string;
            } = {};
            if (this.storageId != null) {
                data.storageId = this.storageId;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.baseUrl != null) {
                data.baseUrl = this.baseUrl;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.storageId.length)
                writer.writeString(1, this.storageId);
            if (this.name.length)
                writer.writeString(2, this.name);
            if (this.baseUrl.length)
                writer.writeString(3, this.baseUrl);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HTTPStorageUpdateRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HTTPStorageUpdateRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.storageId = reader.readString();
                        break;
                    case 2:
                        message.name = reader.readString();
                        break;
                    case 3:
                        message.baseUrl = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): HTTPStorageUpdateRequest {
            return HTTPStorageUpdateRequest.deserialize(bytes);
        }
    }
    export class HTTPStorageUpdateResponse extends pb_1.Message {
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
        }): HTTPStorageUpdateResponse {
            const message = new HTTPStorageUpdateResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HTTPStorageUpdateResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HTTPStorageUpdateResponse();
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
        static deserializeBinary(bytes: Uint8Array): HTTPStorageUpdateResponse {
            return HTTPStorageUpdateResponse.deserialize(bytes);
        }
    }
    export class HTTPStorageDeleteRequest extends pb_1.Message {
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
        }): HTTPStorageDeleteRequest {
            const message = new HTTPStorageDeleteRequest({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HTTPStorageDeleteRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HTTPStorageDeleteRequest();
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
        static deserializeBinary(bytes: Uint8Array): HTTPStorageDeleteRequest {
            return HTTPStorageDeleteRequest.deserialize(bytes);
        }
    }
    export class HTTPStorageDeleteResponse extends pb_1.Message {
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
        }): HTTPStorageDeleteResponse {
            const message = new HTTPStorageDeleteResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HTTPStorageDeleteResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HTTPStorageDeleteResponse();
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
        static deserializeBinary(bytes: Uint8Array): HTTPStorageDeleteResponse {
            return HTTPStorageDeleteResponse.deserialize(bytes);
        }
    }
}
