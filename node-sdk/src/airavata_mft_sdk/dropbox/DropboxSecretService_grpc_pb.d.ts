// package: org.apache.airavata.mft.credential.service.dropbox
// file: dropbox/DropboxSecretService.proto

import * as grpc from '@grpc/grpc-js';
import * as dropbox_DropboxSecretService_pb from '../dropbox/DropboxSecretService_pb';
import * as dropbox_DropboxCredential_pb from '../dropbox/DropboxCredential_pb';

interface IDropboxSecretServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getDropboxSecret: IDropboxSecretServiceService_IgetDropboxSecret;
  createDropboxSecret: IDropboxSecretServiceService_IcreateDropboxSecret;
  updateDropboxSecret: IDropboxSecretServiceService_IupdateDropboxSecret;
  deleteDropboxSecret: IDropboxSecretServiceService_IdeleteDropboxSecret;
}

interface IDropboxSecretServiceService_IgetDropboxSecret extends grpc.MethodDefinition<dropbox_DropboxCredential_pb.DropboxSecretGetRequest, dropbox_DropboxCredential_pb.DropboxSecret> {
  path: '/org.apache.airavata.mft.credential.service.dropbox.DropboxSecretService/getDropboxSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<dropbox_DropboxCredential_pb.DropboxSecretGetRequest>;
  requestDeserialize: grpc.deserialize<dropbox_DropboxCredential_pb.DropboxSecretGetRequest>;
  responseSerialize: grpc.serialize<dropbox_DropboxCredential_pb.DropboxSecret>;
  responseDeserialize: grpc.deserialize<dropbox_DropboxCredential_pb.DropboxSecret>;
}

interface IDropboxSecretServiceService_IcreateDropboxSecret extends grpc.MethodDefinition<dropbox_DropboxCredential_pb.DropboxSecretCreateRequest, dropbox_DropboxCredential_pb.DropboxSecret> {
  path: '/org.apache.airavata.mft.credential.service.dropbox.DropboxSecretService/createDropboxSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<dropbox_DropboxCredential_pb.DropboxSecretCreateRequest>;
  requestDeserialize: grpc.deserialize<dropbox_DropboxCredential_pb.DropboxSecretCreateRequest>;
  responseSerialize: grpc.serialize<dropbox_DropboxCredential_pb.DropboxSecret>;
  responseDeserialize: grpc.deserialize<dropbox_DropboxCredential_pb.DropboxSecret>;
}

interface IDropboxSecretServiceService_IupdateDropboxSecret extends grpc.MethodDefinition<dropbox_DropboxCredential_pb.DropboxSecretUpdateRequest, dropbox_DropboxCredential_pb.DropboxSecretUpdateResponse> {
  path: '/org.apache.airavata.mft.credential.service.dropbox.DropboxSecretService/updateDropboxSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<dropbox_DropboxCredential_pb.DropboxSecretUpdateRequest>;
  requestDeserialize: grpc.deserialize<dropbox_DropboxCredential_pb.DropboxSecretUpdateRequest>;
  responseSerialize: grpc.serialize<dropbox_DropboxCredential_pb.DropboxSecretUpdateResponse>;
  responseDeserialize: grpc.deserialize<dropbox_DropboxCredential_pb.DropboxSecretUpdateResponse>;
}

interface IDropboxSecretServiceService_IdeleteDropboxSecret extends grpc.MethodDefinition<dropbox_DropboxCredential_pb.DropboxSecretDeleteRequest, dropbox_DropboxCredential_pb.DropboxSecretDeleteResponse> {
  path: '/org.apache.airavata.mft.credential.service.dropbox.DropboxSecretService/deleteDropboxSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<dropbox_DropboxCredential_pb.DropboxSecretDeleteRequest>;
  requestDeserialize: grpc.deserialize<dropbox_DropboxCredential_pb.DropboxSecretDeleteRequest>;
  responseSerialize: grpc.serialize<dropbox_DropboxCredential_pb.DropboxSecretDeleteResponse>;
  responseDeserialize: grpc.deserialize<dropbox_DropboxCredential_pb.DropboxSecretDeleteResponse>;
}

export const DropboxSecretServiceService: IDropboxSecretServiceService;
export interface IDropboxSecretServiceServer extends grpc.UntypedServiceImplementation {
  getDropboxSecret: grpc.handleUnaryCall<dropbox_DropboxCredential_pb.DropboxSecretGetRequest, dropbox_DropboxCredential_pb.DropboxSecret>;
  createDropboxSecret: grpc.handleUnaryCall<dropbox_DropboxCredential_pb.DropboxSecretCreateRequest, dropbox_DropboxCredential_pb.DropboxSecret>;
  updateDropboxSecret: grpc.handleUnaryCall<dropbox_DropboxCredential_pb.DropboxSecretUpdateRequest, dropbox_DropboxCredential_pb.DropboxSecretUpdateResponse>;
  deleteDropboxSecret: grpc.handleUnaryCall<dropbox_DropboxCredential_pb.DropboxSecretDeleteRequest, dropbox_DropboxCredential_pb.DropboxSecretDeleteResponse>;
}

export interface IDropboxSecretServiceClient {
  getDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretGetRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecret) => void): grpc.ClientUnaryCall;
  getDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecret) => void): grpc.ClientUnaryCall;
  getDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecret) => void): grpc.ClientUnaryCall;
  createDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecret) => void): grpc.ClientUnaryCall;
  createDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecret) => void): grpc.ClientUnaryCall;
  createDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecret) => void): grpc.ClientUnaryCall;
  updateDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class DropboxSecretServiceClient extends grpc.Client implements IDropboxSecretServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretGetRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecret) => void): grpc.ClientUnaryCall;
  public getDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecret) => void): grpc.ClientUnaryCall;
  public getDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecret) => void): grpc.ClientUnaryCall;
  public createDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecret) => void): grpc.ClientUnaryCall;
  public createDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecret) => void): grpc.ClientUnaryCall;
  public createDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecret) => void): grpc.ClientUnaryCall;
  public updateDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteDropboxSecret(request: dropbox_DropboxCredential_pb.DropboxSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dropbox_DropboxCredential_pb.DropboxSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

