/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: CredCommon.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace org.apache.airavata.mft.common {
    export class UserTokenAuth extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            token?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("token" in data && data.token != undefined) {
                    this.token = data.token;
                }
            }
        }
        get token() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set token(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            token?: string;
        }): UserTokenAuth {
            const message = new UserTokenAuth({});
            if (data.token != null) {
                message.token = data.token;
            }
            return message;
        }
        toObject() {
            const data: {
                token?: string;
            } = {};
            if (this.token != null) {
                data.token = this.token;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.token.length)
                writer.writeString(1, this.token);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UserTokenAuth {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new UserTokenAuth();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.token = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): UserTokenAuth {
            return UserTokenAuth.deserialize(bytes);
        }
    }
    export class PasswordAuth extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            userName?: string;
            password?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("userName" in data && data.userName != undefined) {
                    this.userName = data.userName;
                }
                if ("password" in data && data.password != undefined) {
                    this.password = data.password;
                }
            }
        }
        get userName() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set userName(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get password() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set password(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            userName?: string;
            password?: string;
        }): PasswordAuth {
            const message = new PasswordAuth({});
            if (data.userName != null) {
                message.userName = data.userName;
            }
            if (data.password != null) {
                message.password = data.password;
            }
            return message;
        }
        toObject() {
            const data: {
                userName?: string;
                password?: string;
            } = {};
            if (this.userName != null) {
                data.userName = this.userName;
            }
            if (this.password != null) {
                data.password = this.password;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.userName.length)
                writer.writeString(1, this.userName);
            if (this.password.length)
                writer.writeString(2, this.password);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PasswordAuth {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PasswordAuth();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.userName = reader.readString();
                        break;
                    case 2:
                        message.password = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PasswordAuth {
            return PasswordAuth.deserialize(bytes);
        }
    }
    export class AgentAuth extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            token?: string;
            agentId?: string;
            agentSecret?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("token" in data && data.token != undefined) {
                    this.token = data.token;
                }
                if ("agentId" in data && data.agentId != undefined) {
                    this.agentId = data.agentId;
                }
                if ("agentSecret" in data && data.agentSecret != undefined) {
                    this.agentSecret = data.agentSecret;
                }
            }
        }
        get token() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set token(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get agentId() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set agentId(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get agentSecret() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set agentSecret(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            token?: string;
            agentId?: string;
            agentSecret?: string;
        }): AgentAuth {
            const message = new AgentAuth({});
            if (data.token != null) {
                message.token = data.token;
            }
            if (data.agentId != null) {
                message.agentId = data.agentId;
            }
            if (data.agentSecret != null) {
                message.agentSecret = data.agentSecret;
            }
            return message;
        }
        toObject() {
            const data: {
                token?: string;
                agentId?: string;
                agentSecret?: string;
            } = {};
            if (this.token != null) {
                data.token = this.token;
            }
            if (this.agentId != null) {
                data.agentId = this.agentId;
            }
            if (this.agentSecret != null) {
                data.agentSecret = this.agentSecret;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.token.length)
                writer.writeString(1, this.token);
            if (this.agentId.length)
                writer.writeString(2, this.agentId);
            if (this.agentSecret.length)
                writer.writeString(3, this.agentSecret);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AgentAuth {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AgentAuth();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.token = reader.readString();
                        break;
                    case 2:
                        message.agentId = reader.readString();
                        break;
                    case 3:
                        message.agentSecret = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AgentAuth {
            return AgentAuth.deserialize(bytes);
        }
    }
    export class DelegateAuth extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            userId?: string;
            clientId?: string;
            clientSecret?: string;
            properties?: Map<string, string>;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("userId" in data && data.userId != undefined) {
                    this.userId = data.userId;
                }
                if ("clientId" in data && data.clientId != undefined) {
                    this.clientId = data.clientId;
                }
                if ("clientSecret" in data && data.clientSecret != undefined) {
                    this.clientSecret = data.clientSecret;
                }
                if ("properties" in data && data.properties != undefined) {
                    this.properties = data.properties;
                }
            }
            if (!this.properties)
                this.properties = new Map();
        }
        get userId() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set userId(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get clientId() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set clientId(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get clientSecret() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set clientSecret(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get properties() {
            return pb_1.Message.getField(this, 4) as any as Map<string, string>;
        }
        set properties(value: Map<string, string>) {
            pb_1.Message.setField(this, 4, value as any);
        }
        static fromObject(data: {
            userId?: string;
            clientId?: string;
            clientSecret?: string;
            properties?: {
                [key: string]: string;
            };
        }): DelegateAuth {
            const message = new DelegateAuth({});
            if (data.userId != null) {
                message.userId = data.userId;
            }
            if (data.clientId != null) {
                message.clientId = data.clientId;
            }
            if (data.clientSecret != null) {
                message.clientSecret = data.clientSecret;
            }
            if (typeof data.properties == "object") {
                message.properties = new Map(Object.entries(data.properties));
            }
            return message;
        }
        toObject() {
            const data: {
                userId?: string;
                clientId?: string;
                clientSecret?: string;
                properties?: {
                    [key: string]: string;
                };
            } = {};
            if (this.userId != null) {
                data.userId = this.userId;
            }
            if (this.clientId != null) {
                data.clientId = this.clientId;
            }
            if (this.clientSecret != null) {
                data.clientSecret = this.clientSecret;
            }
            if (this.properties != null) {
                data.properties = (Object.fromEntries)(this.properties);
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.userId.length)
                writer.writeString(1, this.userId);
            if (this.clientId.length)
                writer.writeString(2, this.clientId);
            if (this.clientSecret.length)
                writer.writeString(3, this.clientSecret);
            for (const [key, value] of this.properties) {
                writer.writeMessage(4, this.properties, () => {
                    writer.writeString(1, key);
                    writer.writeString(2, value);
                });
            }
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DelegateAuth {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DelegateAuth();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.userId = reader.readString();
                        break;
                    case 2:
                        message.clientId = reader.readString();
                        break;
                    case 3:
                        message.clientSecret = reader.readString();
                        break;
                    case 4:
                        reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.properties as any, reader, reader.readString, reader.readString));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): DelegateAuth {
            return DelegateAuth.deserialize(bytes);
        }
    }
    export class AuthToken extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2, 3, 4]];
        constructor(data?: any[] | ({} & (({
            userTokenAuth?: UserTokenAuth;
            agentAuth?: never;
            delegateAuth?: never;
            passwordAuth?: never;
        } | {
            userTokenAuth?: never;
            agentAuth?: AgentAuth;
            delegateAuth?: never;
            passwordAuth?: never;
        } | {
            userTokenAuth?: never;
            agentAuth?: never;
            delegateAuth?: DelegateAuth;
            passwordAuth?: never;
        } | {
            userTokenAuth?: never;
            agentAuth?: never;
            delegateAuth?: never;
            passwordAuth?: PasswordAuth;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("userTokenAuth" in data && data.userTokenAuth != undefined) {
                    this.userTokenAuth = data.userTokenAuth;
                }
                if ("agentAuth" in data && data.agentAuth != undefined) {
                    this.agentAuth = data.agentAuth;
                }
                if ("delegateAuth" in data && data.delegateAuth != undefined) {
                    this.delegateAuth = data.delegateAuth;
                }
                if ("passwordAuth" in data && data.passwordAuth != undefined) {
                    this.passwordAuth = data.passwordAuth;
                }
            }
        }
        get userTokenAuth() {
            return pb_1.Message.getWrapperField(this, UserTokenAuth, 1) as UserTokenAuth;
        }
        set userTokenAuth(value: UserTokenAuth) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_userTokenAuth() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get agentAuth() {
            return pb_1.Message.getWrapperField(this, AgentAuth, 2) as AgentAuth;
        }
        set agentAuth(value: AgentAuth) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_agentAuth() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get delegateAuth() {
            return pb_1.Message.getWrapperField(this, DelegateAuth, 3) as DelegateAuth;
        }
        set delegateAuth(value: DelegateAuth) {
            pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
        }
        get has_delegateAuth() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get passwordAuth() {
            return pb_1.Message.getWrapperField(this, PasswordAuth, 4) as PasswordAuth;
        }
        set passwordAuth(value: PasswordAuth) {
            pb_1.Message.setOneofWrapperField(this, 4, this.#one_of_decls[0], value);
        }
        get has_passwordAuth() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get authMechanism() {
            const cases: {
                [index: number]: "none" | "userTokenAuth" | "agentAuth" | "delegateAuth" | "passwordAuth";
            } = {
                0: "none",
                1: "userTokenAuth",
                2: "agentAuth",
                3: "delegateAuth",
                4: "passwordAuth"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3, 4])];
        }
        static fromObject(data: {
            userTokenAuth?: ReturnType<typeof UserTokenAuth.prototype.toObject>;
            agentAuth?: ReturnType<typeof AgentAuth.prototype.toObject>;
            delegateAuth?: ReturnType<typeof DelegateAuth.prototype.toObject>;
            passwordAuth?: ReturnType<typeof PasswordAuth.prototype.toObject>;
        }): AuthToken {
            const message = new AuthToken({});
            if (data.userTokenAuth != null) {
                message.userTokenAuth = UserTokenAuth.fromObject(data.userTokenAuth);
            }
            if (data.agentAuth != null) {
                message.agentAuth = AgentAuth.fromObject(data.agentAuth);
            }
            if (data.delegateAuth != null) {
                message.delegateAuth = DelegateAuth.fromObject(data.delegateAuth);
            }
            if (data.passwordAuth != null) {
                message.passwordAuth = PasswordAuth.fromObject(data.passwordAuth);
            }
            return message;
        }
        toObject() {
            const data: {
                userTokenAuth?: ReturnType<typeof UserTokenAuth.prototype.toObject>;
                agentAuth?: ReturnType<typeof AgentAuth.prototype.toObject>;
                delegateAuth?: ReturnType<typeof DelegateAuth.prototype.toObject>;
                passwordAuth?: ReturnType<typeof PasswordAuth.prototype.toObject>;
            } = {};
            if (this.userTokenAuth != null) {
                data.userTokenAuth = this.userTokenAuth.toObject();
            }
            if (this.agentAuth != null) {
                data.agentAuth = this.agentAuth.toObject();
            }
            if (this.delegateAuth != null) {
                data.delegateAuth = this.delegateAuth.toObject();
            }
            if (this.passwordAuth != null) {
                data.passwordAuth = this.passwordAuth.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_userTokenAuth)
                writer.writeMessage(1, this.userTokenAuth, () => this.userTokenAuth.serialize(writer));
            if (this.has_agentAuth)
                writer.writeMessage(2, this.agentAuth, () => this.agentAuth.serialize(writer));
            if (this.has_delegateAuth)
                writer.writeMessage(3, this.delegateAuth, () => this.delegateAuth.serialize(writer));
            if (this.has_passwordAuth)
                writer.writeMessage(4, this.passwordAuth, () => this.passwordAuth.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AuthToken {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthToken();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.userTokenAuth, () => message.userTokenAuth = UserTokenAuth.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.agentAuth, () => message.agentAuth = AgentAuth.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.delegateAuth, () => message.delegateAuth = DelegateAuth.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.passwordAuth, () => message.passwordAuth = PasswordAuth.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AuthToken {
            return AuthToken.deserialize(bytes);
        }
    }
}