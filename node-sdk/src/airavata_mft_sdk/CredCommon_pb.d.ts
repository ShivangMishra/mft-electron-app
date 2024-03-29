// package: org.apache.airavata.mft.common
// file: CredCommon.proto

import * as jspb from 'google-protobuf';

export class UserTokenAuth extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserTokenAuth.AsObject;
  static toObject(includeInstance: boolean, msg: UserTokenAuth): UserTokenAuth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserTokenAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserTokenAuth;
  static deserializeBinaryFromReader(message: UserTokenAuth, reader: jspb.BinaryReader): UserTokenAuth;
}

export namespace UserTokenAuth {
  export type AsObject = {
    token: string,
  }
}

export class PasswordAuth extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordAuth.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordAuth): PasswordAuth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PasswordAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordAuth;
  static deserializeBinaryFromReader(message: PasswordAuth, reader: jspb.BinaryReader): PasswordAuth;
}

export namespace PasswordAuth {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class AgentAuth extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getAgentid(): string;
  setAgentid(value: string): void;

  getAgentsecret(): string;
  setAgentsecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentAuth.AsObject;
  static toObject(includeInstance: boolean, msg: AgentAuth): AgentAuth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentAuth;
  static deserializeBinaryFromReader(message: AgentAuth, reader: jspb.BinaryReader): AgentAuth;
}

export namespace AgentAuth {
  export type AsObject = {
    token: string,
    agentid: string,
    agentsecret: string,
  }
}

export class DelegateAuth extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getClientid(): string;
  setClientid(value: string): void;

  getClientsecret(): string;
  setClientsecret(value: string): void;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegateAuth.AsObject;
  static toObject(includeInstance: boolean, msg: DelegateAuth): DelegateAuth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DelegateAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelegateAuth;
  static deserializeBinaryFromReader(message: DelegateAuth, reader: jspb.BinaryReader): DelegateAuth;
}

export namespace DelegateAuth {
  export type AsObject = {
    userid: string,
    clientid: string,
    clientsecret: string,
    propertiesMap: Array<[string, string]>,
  }
}

export class AuthToken extends jspb.Message {
  hasUsertokenauth(): boolean;
  clearUsertokenauth(): void;
  getUsertokenauth(): UserTokenAuth | undefined;
  setUsertokenauth(value?: UserTokenAuth): void;

  hasAgentauth(): boolean;
  clearAgentauth(): void;
  getAgentauth(): AgentAuth | undefined;
  setAgentauth(value?: AgentAuth): void;

  hasDelegateauth(): boolean;
  clearDelegateauth(): void;
  getDelegateauth(): DelegateAuth | undefined;
  setDelegateauth(value?: DelegateAuth): void;

  hasPasswordauth(): boolean;
  clearPasswordauth(): void;
  getPasswordauth(): PasswordAuth | undefined;
  setPasswordauth(value?: PasswordAuth): void;

  getAuthMechanismCase(): AuthToken.AuthMechanismCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthToken.AsObject;
  static toObject(includeInstance: boolean, msg: AuthToken): AuthToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthToken;
  static deserializeBinaryFromReader(message: AuthToken, reader: jspb.BinaryReader): AuthToken;
}

export namespace AuthToken {
  export type AsObject = {
    usertokenauth?: UserTokenAuth.AsObject,
    agentauth?: AgentAuth.AsObject,
    delegateauth?: DelegateAuth.AsObject,
    passwordauth?: PasswordAuth.AsObject,
  }

  export enum AuthMechanismCase {
    AUTHMECHANISM_NOT_SET = 0,
    USERTOKENAUTH = 1,
    AGENTAUTH = 2,
    DELEGATEAUTH = 3,
    PASSWORDAUTH = 4,
  }
}

