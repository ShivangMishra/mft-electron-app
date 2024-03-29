// package: org.apache.airavata.mft.credential.service.swift
// file: swift/SwiftSecretService.proto

import * as grpc from '@grpc/grpc-js';
import * as swift_SwiftSecretService_pb from '../swift/SwiftSecretService_pb';
import * as swift_SwiftCredential_pb from '../swift/SwiftCredential_pb';

interface ISwiftSecretServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getSwiftSecret: ISwiftSecretServiceService_IgetSwiftSecret;
  createSwiftSecret: ISwiftSecretServiceService_IcreateSwiftSecret;
  updateSwiftSecret: ISwiftSecretServiceService_IupdateSwiftSecret;
  deleteSwiftSecret: ISwiftSecretServiceService_IdeleteSwiftSecret;
}

interface ISwiftSecretServiceService_IgetSwiftSecret extends grpc.MethodDefinition<swift_SwiftCredential_pb.SwiftSecretGetRequest, swift_SwiftCredential_pb.SwiftSecret> {
  path: '/org.apache.airavata.mft.credential.service.swift.SwiftSecretService/getSwiftSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<swift_SwiftCredential_pb.SwiftSecretGetRequest>;
  requestDeserialize: grpc.deserialize<swift_SwiftCredential_pb.SwiftSecretGetRequest>;
  responseSerialize: grpc.serialize<swift_SwiftCredential_pb.SwiftSecret>;
  responseDeserialize: grpc.deserialize<swift_SwiftCredential_pb.SwiftSecret>;
}

interface ISwiftSecretServiceService_IcreateSwiftSecret extends grpc.MethodDefinition<swift_SwiftCredential_pb.SwiftSecretCreateRequest, swift_SwiftCredential_pb.SwiftSecret> {
  path: '/org.apache.airavata.mft.credential.service.swift.SwiftSecretService/createSwiftSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<swift_SwiftCredential_pb.SwiftSecretCreateRequest>;
  requestDeserialize: grpc.deserialize<swift_SwiftCredential_pb.SwiftSecretCreateRequest>;
  responseSerialize: grpc.serialize<swift_SwiftCredential_pb.SwiftSecret>;
  responseDeserialize: grpc.deserialize<swift_SwiftCredential_pb.SwiftSecret>;
}

interface ISwiftSecretServiceService_IupdateSwiftSecret extends grpc.MethodDefinition<swift_SwiftCredential_pb.SwiftSecretUpdateRequest, swift_SwiftCredential_pb.SwiftSecretUpdateResponse> {
  path: '/org.apache.airavata.mft.credential.service.swift.SwiftSecretService/updateSwiftSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<swift_SwiftCredential_pb.SwiftSecretUpdateRequest>;
  requestDeserialize: grpc.deserialize<swift_SwiftCredential_pb.SwiftSecretUpdateRequest>;
  responseSerialize: grpc.serialize<swift_SwiftCredential_pb.SwiftSecretUpdateResponse>;
  responseDeserialize: grpc.deserialize<swift_SwiftCredential_pb.SwiftSecretUpdateResponse>;
}

interface ISwiftSecretServiceService_IdeleteSwiftSecret extends grpc.MethodDefinition<swift_SwiftCredential_pb.SwiftSecretDeleteRequest, swift_SwiftCredential_pb.SwiftSecretDeleteResponse> {
  path: '/org.apache.airavata.mft.credential.service.swift.SwiftSecretService/deleteSwiftSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<swift_SwiftCredential_pb.SwiftSecretDeleteRequest>;
  requestDeserialize: grpc.deserialize<swift_SwiftCredential_pb.SwiftSecretDeleteRequest>;
  responseSerialize: grpc.serialize<swift_SwiftCredential_pb.SwiftSecretDeleteResponse>;
  responseDeserialize: grpc.deserialize<swift_SwiftCredential_pb.SwiftSecretDeleteResponse>;
}

export const SwiftSecretServiceService: ISwiftSecretServiceService;
export interface ISwiftSecretServiceServer extends grpc.UntypedServiceImplementation {
  getSwiftSecret: grpc.handleUnaryCall<swift_SwiftCredential_pb.SwiftSecretGetRequest, swift_SwiftCredential_pb.SwiftSecret>;
  createSwiftSecret: grpc.handleUnaryCall<swift_SwiftCredential_pb.SwiftSecretCreateRequest, swift_SwiftCredential_pb.SwiftSecret>;
  updateSwiftSecret: grpc.handleUnaryCall<swift_SwiftCredential_pb.SwiftSecretUpdateRequest, swift_SwiftCredential_pb.SwiftSecretUpdateResponse>;
  deleteSwiftSecret: grpc.handleUnaryCall<swift_SwiftCredential_pb.SwiftSecretDeleteRequest, swift_SwiftCredential_pb.SwiftSecretDeleteResponse>;
}

export interface ISwiftSecretServiceClient {
  getSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretGetRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecret) => void): grpc.ClientUnaryCall;
  getSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecret) => void): grpc.ClientUnaryCall;
  getSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecret) => void): grpc.ClientUnaryCall;
  createSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecret) => void): grpc.ClientUnaryCall;
  createSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecret) => void): grpc.ClientUnaryCall;
  createSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecret) => void): grpc.ClientUnaryCall;
  updateSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class SwiftSecretServiceClient extends grpc.Client implements ISwiftSecretServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretGetRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecret) => void): grpc.ClientUnaryCall;
  public getSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecret) => void): grpc.ClientUnaryCall;
  public getSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecret) => void): grpc.ClientUnaryCall;
  public createSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecret) => void): grpc.ClientUnaryCall;
  public createSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecret) => void): grpc.ClientUnaryCall;
  public createSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecret) => void): grpc.ClientUnaryCall;
  public updateSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteSwiftSecret(request: swift_SwiftCredential_pb.SwiftSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: swift_SwiftCredential_pb.SwiftSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

