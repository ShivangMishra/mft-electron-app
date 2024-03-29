// package: org.apache.airavata.mft.credential.service.box
// file: box/BoxSecretService.proto

import * as grpc from '@grpc/grpc-js';
import * as box_BoxSecretService_pb from '../box/BoxSecretService_pb';
import * as box_BoxCredential_pb from '../box/BoxCredential_pb';

interface IBoxSecretServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getBoxSecret: IBoxSecretServiceService_IgetBoxSecret;
  createBoxSecret: IBoxSecretServiceService_IcreateBoxSecret;
  updateBoxSecret: IBoxSecretServiceService_IupdateBoxSecret;
  deleteBoxSecret: IBoxSecretServiceService_IdeleteBoxSecret;
}

interface IBoxSecretServiceService_IgetBoxSecret extends grpc.MethodDefinition<box_BoxCredential_pb.BoxSecretGetRequest, box_BoxCredential_pb.BoxSecret> {
  path: '/org.apache.airavata.mft.credential.service.box.BoxSecretService/getBoxSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<box_BoxCredential_pb.BoxSecretGetRequest>;
  requestDeserialize: grpc.deserialize<box_BoxCredential_pb.BoxSecretGetRequest>;
  responseSerialize: grpc.serialize<box_BoxCredential_pb.BoxSecret>;
  responseDeserialize: grpc.deserialize<box_BoxCredential_pb.BoxSecret>;
}

interface IBoxSecretServiceService_IcreateBoxSecret extends grpc.MethodDefinition<box_BoxCredential_pb.BoxSecretCreateRequest, box_BoxCredential_pb.BoxSecret> {
  path: '/org.apache.airavata.mft.credential.service.box.BoxSecretService/createBoxSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<box_BoxCredential_pb.BoxSecretCreateRequest>;
  requestDeserialize: grpc.deserialize<box_BoxCredential_pb.BoxSecretCreateRequest>;
  responseSerialize: grpc.serialize<box_BoxCredential_pb.BoxSecret>;
  responseDeserialize: grpc.deserialize<box_BoxCredential_pb.BoxSecret>;
}

interface IBoxSecretServiceService_IupdateBoxSecret extends grpc.MethodDefinition<box_BoxCredential_pb.BoxSecretUpdateRequest, box_BoxCredential_pb.BoxSecretUpdateResponse> {
  path: '/org.apache.airavata.mft.credential.service.box.BoxSecretService/updateBoxSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<box_BoxCredential_pb.BoxSecretUpdateRequest>;
  requestDeserialize: grpc.deserialize<box_BoxCredential_pb.BoxSecretUpdateRequest>;
  responseSerialize: grpc.serialize<box_BoxCredential_pb.BoxSecretUpdateResponse>;
  responseDeserialize: grpc.deserialize<box_BoxCredential_pb.BoxSecretUpdateResponse>;
}

interface IBoxSecretServiceService_IdeleteBoxSecret extends grpc.MethodDefinition<box_BoxCredential_pb.BoxSecretDeleteRequest, box_BoxCredential_pb.BoxSecretDeleteResponse> {
  path: '/org.apache.airavata.mft.credential.service.box.BoxSecretService/deleteBoxSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<box_BoxCredential_pb.BoxSecretDeleteRequest>;
  requestDeserialize: grpc.deserialize<box_BoxCredential_pb.BoxSecretDeleteRequest>;
  responseSerialize: grpc.serialize<box_BoxCredential_pb.BoxSecretDeleteResponse>;
  responseDeserialize: grpc.deserialize<box_BoxCredential_pb.BoxSecretDeleteResponse>;
}

export const BoxSecretServiceService: IBoxSecretServiceService;
export interface IBoxSecretServiceServer extends grpc.UntypedServiceImplementation {
  getBoxSecret: grpc.handleUnaryCall<box_BoxCredential_pb.BoxSecretGetRequest, box_BoxCredential_pb.BoxSecret>;
  createBoxSecret: grpc.handleUnaryCall<box_BoxCredential_pb.BoxSecretCreateRequest, box_BoxCredential_pb.BoxSecret>;
  updateBoxSecret: grpc.handleUnaryCall<box_BoxCredential_pb.BoxSecretUpdateRequest, box_BoxCredential_pb.BoxSecretUpdateResponse>;
  deleteBoxSecret: grpc.handleUnaryCall<box_BoxCredential_pb.BoxSecretDeleteRequest, box_BoxCredential_pb.BoxSecretDeleteResponse>;
}

export interface IBoxSecretServiceClient {
  getBoxSecret(request: box_BoxCredential_pb.BoxSecretGetRequest, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecret) => void): grpc.ClientUnaryCall;
  getBoxSecret(request: box_BoxCredential_pb.BoxSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecret) => void): grpc.ClientUnaryCall;
  getBoxSecret(request: box_BoxCredential_pb.BoxSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecret) => void): grpc.ClientUnaryCall;
  createBoxSecret(request: box_BoxCredential_pb.BoxSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecret) => void): grpc.ClientUnaryCall;
  createBoxSecret(request: box_BoxCredential_pb.BoxSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecret) => void): grpc.ClientUnaryCall;
  createBoxSecret(request: box_BoxCredential_pb.BoxSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecret) => void): grpc.ClientUnaryCall;
  updateBoxSecret(request: box_BoxCredential_pb.BoxSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateBoxSecret(request: box_BoxCredential_pb.BoxSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateBoxSecret(request: box_BoxCredential_pb.BoxSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteBoxSecret(request: box_BoxCredential_pb.BoxSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteBoxSecret(request: box_BoxCredential_pb.BoxSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteBoxSecret(request: box_BoxCredential_pb.BoxSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class BoxSecretServiceClient extends grpc.Client implements IBoxSecretServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getBoxSecret(request: box_BoxCredential_pb.BoxSecretGetRequest, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecret) => void): grpc.ClientUnaryCall;
  public getBoxSecret(request: box_BoxCredential_pb.BoxSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecret) => void): grpc.ClientUnaryCall;
  public getBoxSecret(request: box_BoxCredential_pb.BoxSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecret) => void): grpc.ClientUnaryCall;
  public createBoxSecret(request: box_BoxCredential_pb.BoxSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecret) => void): grpc.ClientUnaryCall;
  public createBoxSecret(request: box_BoxCredential_pb.BoxSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecret) => void): grpc.ClientUnaryCall;
  public createBoxSecret(request: box_BoxCredential_pb.BoxSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecret) => void): grpc.ClientUnaryCall;
  public updateBoxSecret(request: box_BoxCredential_pb.BoxSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateBoxSecret(request: box_BoxCredential_pb.BoxSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateBoxSecret(request: box_BoxCredential_pb.BoxSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteBoxSecret(request: box_BoxCredential_pb.BoxSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteBoxSecret(request: box_BoxCredential_pb.BoxSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteBoxSecret(request: box_BoxCredential_pb.BoxSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: box_BoxCredential_pb.BoxSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

