// package: org.apache.airavata.mft.api.service
// file: MFTTransferApi.proto

import * as jspb from 'google-protobuf';
import * as CredCommon_pb from './CredCommon_pb';
import * as MFTAgentStubs_pb from './MFTAgentStubs_pb';

export class CallbackEndpoint extends jspb.Message {
  getType(): CallbackEndpoint.CallbackType;
  setType(value: CallbackEndpoint.CallbackType): void;

  getEndpoint(): string;
  setEndpoint(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallbackEndpoint.AsObject;
  static toObject(includeInstance: boolean, msg: CallbackEndpoint): CallbackEndpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallbackEndpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallbackEndpoint;
  static deserializeBinaryFromReader(message: CallbackEndpoint, reader: jspb.BinaryReader): CallbackEndpoint;
}

export namespace CallbackEndpoint {
  export type AsObject = {
    type: CallbackEndpoint.CallbackType,
    endpoint: string,
  }

  export enum CallbackType {
    HTTP = 0,
    KAFKA = 1,
  }
}

export class EndpointPaths extends jspb.Message {
  getSourcepath(): string;
  setSourcepath(value: string): void;

  getDestinationpath(): string;
  setDestinationpath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointPaths.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointPaths): EndpointPaths.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointPaths, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointPaths;
  static deserializeBinaryFromReader(message: EndpointPaths, reader: jspb.BinaryReader): EndpointPaths;
}

export namespace EndpointPaths {
  export type AsObject = {
    sourcepath: string,
    destinationpath: string,
  }
}

export class TransferApiRequest extends jspb.Message {
  clearEndpointpathsList(): void;
  getEndpointpathsList(): Array<EndpointPaths>;
  setEndpointpathsList(value: Array<EndpointPaths>): void;
  addEndpointpaths(value?: EndpointPaths, index?: number): EndpointPaths;

  getSourcestorageid(): string;
  setSourcestorageid(value: string): void;

  getSourcesecretid(): string;
  setSourcesecretid(value: string): void;

  getDestinationstorageid(): string;
  setDestinationstorageid(value: string): void;

  getDestinationsecretid(): string;
  setDestinationsecretid(value: string): void;

  getOptimizetransferpath(): boolean;
  setOptimizetransferpath(value: boolean): void;

  getTargetagentsMap(): jspb.Map<string, number>;
  clearTargetagentsMap(): void;
  hasMftauthorizationtoken(): boolean;
  clearMftauthorizationtoken(): void;
  getMftauthorizationtoken(): CredCommon_pb.AuthToken | undefined;
  setMftauthorizationtoken(value?: CredCommon_pb.AuthToken): void;

  clearCallbackendpointsList(): void;
  getCallbackendpointsList(): Array<CallbackEndpoint>;
  setCallbackendpointsList(value: Array<CallbackEndpoint>): void;
  addCallbackendpoints(value?: CallbackEndpoint, index?: number): CallbackEndpoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferApiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferApiRequest): TransferApiRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferApiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferApiRequest;
  static deserializeBinaryFromReader(message: TransferApiRequest, reader: jspb.BinaryReader): TransferApiRequest;
}

export namespace TransferApiRequest {
  export type AsObject = {
    endpointpathsList: Array<EndpointPaths.AsObject>,
    sourcestorageid: string,
    sourcesecretid: string,
    destinationstorageid: string,
    destinationsecretid: string,
    optimizetransferpath: boolean,
    targetagentsMap: Array<[string, number]>,
    mftauthorizationtoken?: CredCommon_pb.AuthToken.AsObject,
    callbackendpointsList: Array<CallbackEndpoint.AsObject>,
  }
}

export class TransferApiResponse extends jspb.Message {
  getTransferid(): string;
  setTransferid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferApiResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferApiResponse): TransferApiResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferApiResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferApiResponse;
  static deserializeBinaryFromReader(message: TransferApiResponse, reader: jspb.BinaryReader): TransferApiResponse;
}

export namespace TransferApiResponse {
  export type AsObject = {
    transferid: string,
  }
}

export class TransferStateApiRequest extends jspb.Message {
  getTransferid(): string;
  setTransferid(value: string): void;

  hasMftauthorizationtoken(): boolean;
  clearMftauthorizationtoken(): void;
  getMftauthorizationtoken(): CredCommon_pb.AuthToken | undefined;
  setMftauthorizationtoken(value?: CredCommon_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferStateApiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferStateApiRequest): TransferStateApiRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferStateApiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferStateApiRequest;
  static deserializeBinaryFromReader(message: TransferStateApiRequest, reader: jspb.BinaryReader): TransferStateApiRequest;
}

export namespace TransferStateApiRequest {
  export type AsObject = {
    transferid: string,
    mftauthorizationtoken?: CredCommon_pb.AuthToken.AsObject,
  }
}

export class TransferStateResponse extends jspb.Message {
  getState(): string;
  setState(value: string): void;

  getUpdatetimemils(): number;
  setUpdatetimemils(value: number): void;

  getPercentage(): number;
  setPercentage(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferStateResponse): TransferStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferStateResponse;
  static deserializeBinaryFromReader(message: TransferStateResponse, reader: jspb.BinaryReader): TransferStateResponse;
}

export namespace TransferStateResponse {
  export type AsObject = {
    state: string,
    updatetimemils: number,
    percentage: number,
    description: string,
  }
}

export class TransferStateSummaryResponse extends jspb.Message {
  getState(): string;
  setState(value: string): void;

  getUpdatetimemils(): number;
  setUpdatetimemils(value: number): void;

  getPercentage(): number;
  setPercentage(value: number): void;

  clearCompletedList(): void;
  getCompletedList(): Array<string>;
  setCompletedList(value: Array<string>): void;
  addCompleted(value: string, index?: number): string;

  clearFailedList(): void;
  getFailedList(): Array<string>;
  setFailedList(value: Array<string>): void;
  addFailed(value: string, index?: number): string;

  clearProcessingList(): void;
  getProcessingList(): Array<string>;
  setProcessingList(value: Array<string>): void;
  addProcessing(value: string, index?: number): string;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferStateSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferStateSummaryResponse): TransferStateSummaryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferStateSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferStateSummaryResponse;
  static deserializeBinaryFromReader(message: TransferStateSummaryResponse, reader: jspb.BinaryReader): TransferStateSummaryResponse;
}

export namespace TransferStateSummaryResponse {
  export type AsObject = {
    state: string,
    updatetimemils: number,
    percentage: number,
    completedList: Array<string>,
    failedList: Array<string>,
    processingList: Array<string>,
    description: string,
  }
}

export class ResourceAvailabilityResponse extends jspb.Message {
  getAvailable(): boolean;
  setAvailable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceAvailabilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceAvailabilityResponse): ResourceAvailabilityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceAvailabilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceAvailabilityResponse;
  static deserializeBinaryFromReader(message: ResourceAvailabilityResponse, reader: jspb.BinaryReader): ResourceAvailabilityResponse;
}

export namespace ResourceAvailabilityResponse {
  export type AsObject = {
    available: boolean,
  }
}

export class GetResourceMetadataFromIDsRequest extends jspb.Message {
  getResourcepath(): string;
  setResourcepath(value: string): void;

  getStorageid(): string;
  setStorageid(value: string): void;

  getSecretid(): string;
  setSecretid(value: string): void;

  getRecursivesearch(): boolean;
  setRecursivesearch(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResourceMetadataFromIDsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetResourceMetadataFromIDsRequest): GetResourceMetadataFromIDsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResourceMetadataFromIDsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResourceMetadataFromIDsRequest;
  static deserializeBinaryFromReader(message: GetResourceMetadataFromIDsRequest, reader: jspb.BinaryReader): GetResourceMetadataFromIDsRequest;
}

export namespace GetResourceMetadataFromIDsRequest {
  export type AsObject = {
    resourcepath: string,
    storageid: string,
    secretid: string,
    recursivesearch: boolean,
  }
}

export class FetchResourceMetadataRequest extends jspb.Message {
  hasDirectrequest(): boolean;
  clearDirectrequest(): void;
  getDirectrequest(): MFTAgentStubs_pb.GetResourceMetadataRequest | undefined;
  setDirectrequest(value?: MFTAgentStubs_pb.GetResourceMetadataRequest): void;

  hasIdrequest(): boolean;
  clearIdrequest(): void;
  getIdrequest(): GetResourceMetadataFromIDsRequest | undefined;
  setIdrequest(value?: GetResourceMetadataFromIDsRequest): void;

  hasMftauthorizationtoken(): boolean;
  clearMftauthorizationtoken(): void;
  getMftauthorizationtoken(): CredCommon_pb.AuthToken | undefined;
  setMftauthorizationtoken(value?: CredCommon_pb.AuthToken): void;

  getRequestCase(): FetchResourceMetadataRequest.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchResourceMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchResourceMetadataRequest): FetchResourceMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchResourceMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchResourceMetadataRequest;
  static deserializeBinaryFromReader(message: FetchResourceMetadataRequest, reader: jspb.BinaryReader): FetchResourceMetadataRequest;
}

export namespace FetchResourceMetadataRequest {
  export type AsObject = {
    directrequest?: MFTAgentStubs_pb.GetResourceMetadataRequest.AsObject,
    idrequest?: GetResourceMetadataFromIDsRequest.AsObject,
    mftauthorizationtoken?: CredCommon_pb.AuthToken.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    DIRECTREQUEST = 1,
    IDREQUEST = 2,
  }
}

export class TransferRemoveRequest extends jspb.Message {
  getTransferid(): string;
  setTransferid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferRemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferRemoveRequest): TransferRemoveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferRemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferRemoveRequest;
  static deserializeBinaryFromReader(message: TransferRemoveRequest, reader: jspb.BinaryReader): TransferRemoveRequest;
}

export namespace TransferRemoveRequest {
  export type AsObject = {
    transferid: string,
  }
}

export class TransferRemoveResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferRemoveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferRemoveResponse): TransferRemoveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferRemoveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferRemoveResponse;
  static deserializeBinaryFromReader(message: TransferRemoveResponse, reader: jspb.BinaryReader): TransferRemoveResponse;
}

export namespace TransferRemoveResponse {
  export type AsObject = {
    success: boolean,
  }
}

