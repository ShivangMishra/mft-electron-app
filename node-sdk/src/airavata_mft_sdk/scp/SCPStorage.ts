/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: scp/SCPStorage.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace org.apache.airavata.mft.resource.stubs.scp.storage {
    export class SCPStorage extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            storageId?: string;
            host?: string;
            port?: number;
            name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("storageId" in data && data.storageId != undefined) {
                    this.storageId = data.storageId;
                }
                if ("host" in data && data.host != undefined) {
                    this.host = data.host;
                }
                if ("port" in data && data.port != undefined) {
                    this.port = data.port;
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
        get host() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set host(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get port() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set port(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            storageId?: string;
            host?: string;
            port?: number;
            name?: string;
        }): SCPStorage {
            const message = new SCPStorage({});
            if (data.storageId != null) {
                message.storageId = data.storageId;
            }
            if (data.host != null) {
                message.host = data.host;
            }
            if (data.port != null) {
                message.port = data.port;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            return message;
        }
        toObject() {
            const data: {
                storageId?: string;
                host?: string;
                port?: number;
                name?: string;
            } = {};
            if (this.storageId != null) {
                data.storageId = this.storageId;
            }
            if (this.host != null) {
                data.host = this.host;
            }
            if (this.port != null) {
                data.port = this.port;
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
            if (this.host.length)
                writer.writeString(2, this.host);
            if (this.port != 0)
                writer.writeInt32(3, this.port);
            if (this.name.length)
                writer.writeString(4, this.name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SCPStorage {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SCPStorage();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.storageId = reader.readString();
                        break;
                    case 2:
                        message.host = reader.readString();
                        break;
                    case 3:
                        message.port = reader.readInt32();
                        break;
                    case 4:
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
        static deserializeBinary(bytes: Uint8Array): SCPStorage {
            return SCPStorage.deserialize(bytes);
        }
    }
    export class SCPStorageListRequest extends pb_1.Message {
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
        }): SCPStorageListRequest {
            const message = new SCPStorageListRequest({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SCPStorageListRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SCPStorageListRequest();
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
        static deserializeBinary(bytes: Uint8Array): SCPStorageListRequest {
            return SCPStorageListRequest.deserialize(bytes);
        }
    }
    export class SCPStorageListResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            storages?: SCPStorage[];
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
            return pb_1.Message.getRepeatedWrapperField(this, SCPStorage, 1) as SCPStorage[];
        }
        set storages(value: SCPStorage[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            storages?: ReturnType<typeof SCPStorage.prototype.toObject>[];
        }): SCPStorageListResponse {
            const message = new SCPStorageListResponse({});
            if (data.storages != null) {
                message.storages = data.storages.map(item => SCPStorage.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                storages?: ReturnType<typeof SCPStorage.prototype.toObject>[];
            } = {};
            if (this.storages != null) {
                data.storages = this.storages.map((item: SCPStorage) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.storages.length)
                writer.writeRepeatedMessage(1, this.storages, (item: SCPStorage) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SCPStorageListResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SCPStorageListResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.storages, () => pb_1.Message.addToRepeatedWrapperField(message, 1, SCPStorage.deserialize(reader), SCPStorage));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SCPStorageListResponse {
            return SCPStorageListResponse.deserialize(bytes);
        }
    }
    export class SCPStorageGetRequest extends pb_1.Message {
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
        }): SCPStorageGetRequest {
            const message = new SCPStorageGetRequest({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SCPStorageGetRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SCPStorageGetRequest();
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
        static deserializeBinary(bytes: Uint8Array): SCPStorageGetRequest {
            return SCPStorageGetRequest.deserialize(bytes);
        }
    }
    export class SCPStorageCreateRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            host?: string;
            port?: number;
            storageId?: string;
            name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("host" in data && data.host != undefined) {
                    this.host = data.host;
                }
                if ("port" in data && data.port != undefined) {
                    this.port = data.port;
                }
                if ("storageId" in data && data.storageId != undefined) {
                    this.storageId = data.storageId;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
            }
        }
        get host() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set host(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get port() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set port(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get storageId() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set storageId(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            host?: string;
            port?: number;
            storageId?: string;
            name?: string;
        }): SCPStorageCreateRequest {
            const message = new SCPStorageCreateRequest({});
            if (data.host != null) {
                message.host = data.host;
            }
            if (data.port != null) {
                message.port = data.port;
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
                host?: string;
                port?: number;
                storageId?: string;
                name?: string;
            } = {};
            if (this.host != null) {
                data.host = this.host;
            }
            if (this.port != null) {
                data.port = this.port;
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
            if (this.host.length)
                writer.writeString(1, this.host);
            if (this.port != 0)
                writer.writeInt32(2, this.port);
            if (this.storageId.length)
                writer.writeString(4, this.storageId);
            if (this.name.length)
                writer.writeString(5, this.name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SCPStorageCreateRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SCPStorageCreateRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.host = reader.readString();
                        break;
                    case 2:
                        message.port = reader.readInt32();
                        break;
                    case 4:
                        message.storageId = reader.readString();
                        break;
                    case 5:
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
        static deserializeBinary(bytes: Uint8Array): SCPStorageCreateRequest {
            return SCPStorageCreateRequest.deserialize(bytes);
        }
    }
    export class SCPStorageUpdateRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            storageId?: string;
            host?: string;
            port?: number;
            name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("storageId" in data && data.storageId != undefined) {
                    this.storageId = data.storageId;
                }
                if ("host" in data && data.host != undefined) {
                    this.host = data.host;
                }
                if ("port" in data && data.port != undefined) {
                    this.port = data.port;
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
        get host() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set host(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get port() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set port(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            storageId?: string;
            host?: string;
            port?: number;
            name?: string;
        }): SCPStorageUpdateRequest {
            const message = new SCPStorageUpdateRequest({});
            if (data.storageId != null) {
                message.storageId = data.storageId;
            }
            if (data.host != null) {
                message.host = data.host;
            }
            if (data.port != null) {
                message.port = data.port;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            return message;
        }
        toObject() {
            const data: {
                storageId?: string;
                host?: string;
                port?: number;
                name?: string;
            } = {};
            if (this.storageId != null) {
                data.storageId = this.storageId;
            }
            if (this.host != null) {
                data.host = this.host;
            }
            if (this.port != null) {
                data.port = this.port;
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
            if (this.host.length)
                writer.writeString(2, this.host);
            if (this.port != 0)
                writer.writeInt32(3, this.port);
            if (this.name.length)
                writer.writeString(4, this.name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SCPStorageUpdateRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SCPStorageUpdateRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.storageId = reader.readString();
                        break;
                    case 2:
                        message.host = reader.readString();
                        break;
                    case 3:
                        message.port = reader.readInt32();
                        break;
                    case 4:
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
        static deserializeBinary(bytes: Uint8Array): SCPStorageUpdateRequest {
            return SCPStorageUpdateRequest.deserialize(bytes);
        }
    }
    export class SCPStorageUpdateResponse extends pb_1.Message {
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
        }): SCPStorageUpdateResponse {
            const message = new SCPStorageUpdateResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SCPStorageUpdateResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SCPStorageUpdateResponse();
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
        static deserializeBinary(bytes: Uint8Array): SCPStorageUpdateResponse {
            return SCPStorageUpdateResponse.deserialize(bytes);
        }
    }
    export class SCPStorageDeleteRequest extends pb_1.Message {
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
        }): SCPStorageDeleteRequest {
            const message = new SCPStorageDeleteRequest({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SCPStorageDeleteRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SCPStorageDeleteRequest();
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
        static deserializeBinary(bytes: Uint8Array): SCPStorageDeleteRequest {
            return SCPStorageDeleteRequest.deserialize(bytes);
        }
    }
    export class SCPStorageDeleteResponse extends pb_1.Message {
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
        }): SCPStorageDeleteResponse {
            const message = new SCPStorageDeleteResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SCPStorageDeleteResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SCPStorageDeleteResponse();
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
        static deserializeBinary(bytes: Uint8Array): SCPStorageDeleteResponse {
            return SCPStorageDeleteResponse.deserialize(bytes);
        }
    }
}
