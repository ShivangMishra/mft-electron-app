// package: org.apache.airavata.mft.credential.service.gcs
// file: gcs/GCSSecretService.proto

import * as grpc from '@grpc/grpc-js';
import * as gcs_GCSSecretService_pb from '../gcs/GCSSecretService_pb';
import * as gcs_GCSCredential_pb from '../gcs/GCSCredential_pb';

interface IGCSSecretServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getGCSSecret: IGCSSecretServiceService_IgetGCSSecret;
  createGCSSecret: IGCSSecretServiceService_IcreateGCSSecret;
  updateGCSSecret: IGCSSecretServiceService_IupdateGCSSecret;
  deleteGCSSecret: IGCSSecretServiceService_IdeleteGCSSecret;
}

interface IGCSSecretServiceService_IgetGCSSecret extends grpc.MethodDefinition<gcs_GCSCredential_pb.GCSSecretGetRequest, gcs_GCSCredential_pb.GCSSecret> {
  path: '/org.apache.airavata.mft.credential.service.gcs.GCSSecretService/getGCSSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<gcs_GCSCredential_pb.GCSSecretGetRequest>;
  requestDeserialize: grpc.deserialize<gcs_GCSCredential_pb.GCSSecretGetRequest>;
  responseSerialize: grpc.serialize<gcs_GCSCredential_pb.GCSSecret>;
  responseDeserialize: grpc.deserialize<gcs_GCSCredential_pb.GCSSecret>;
}

interface IGCSSecretServiceService_IcreateGCSSecret extends grpc.MethodDefinition<gcs_GCSCredential_pb.GCSSecretCreateRequest, gcs_GCSCredential_pb.GCSSecret> {
  path: '/org.apache.airavata.mft.credential.service.gcs.GCSSecretService/createGCSSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<gcs_GCSCredential_pb.GCSSecretCreateRequest>;
  requestDeserialize: grpc.deserialize<gcs_GCSCredential_pb.GCSSecretCreateRequest>;
  responseSerialize: grpc.serialize<gcs_GCSCredential_pb.GCSSecret>;
  responseDeserialize: grpc.deserialize<gcs_GCSCredential_pb.GCSSecret>;
}

interface IGCSSecretServiceService_IupdateGCSSecret extends grpc.MethodDefinition<gcs_GCSCredential_pb.GCSSecretUpdateRequest, gcs_GCSCredential_pb.GCSSecretUpdateResponse> {
  path: '/org.apache.airavata.mft.credential.service.gcs.GCSSecretService/updateGCSSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<gcs_GCSCredential_pb.GCSSecretUpdateRequest>;
  requestDeserialize: grpc.deserialize<gcs_GCSCredential_pb.GCSSecretUpdateRequest>;
  responseSerialize: grpc.serialize<gcs_GCSCredential_pb.GCSSecretUpdateResponse>;
  responseDeserialize: grpc.deserialize<gcs_GCSCredential_pb.GCSSecretUpdateResponse>;
}

interface IGCSSecretServiceService_IdeleteGCSSecret extends grpc.MethodDefinition<gcs_GCSCredential_pb.GCSSecretDeleteRequest, gcs_GCSCredential_pb.GCSSecretDeleteResponse> {
  path: '/org.apache.airavata.mft.credential.service.gcs.GCSSecretService/deleteGCSSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<gcs_GCSCredential_pb.GCSSecretDeleteRequest>;
  requestDeserialize: grpc.deserialize<gcs_GCSCredential_pb.GCSSecretDeleteRequest>;
  responseSerialize: grpc.serialize<gcs_GCSCredential_pb.GCSSecretDeleteResponse>;
  responseDeserialize: grpc.deserialize<gcs_GCSCredential_pb.GCSSecretDeleteResponse>;
}

export const GCSSecretServiceService: IGCSSecretServiceService;
export interface IGCSSecretServiceServer extends grpc.UntypedServiceImplementation {
  getGCSSecret: grpc.handleUnaryCall<gcs_GCSCredential_pb.GCSSecretGetRequest, gcs_GCSCredential_pb.GCSSecret>;
  createGCSSecret: grpc.handleUnaryCall<gcs_GCSCredential_pb.GCSSecretCreateRequest, gcs_GCSCredential_pb.GCSSecret>;
  updateGCSSecret: grpc.handleUnaryCall<gcs_GCSCredential_pb.GCSSecretUpdateRequest, gcs_GCSCredential_pb.GCSSecretUpdateResponse>;
  deleteGCSSecret: grpc.handleUnaryCall<gcs_GCSCredential_pb.GCSSecretDeleteRequest, gcs_GCSCredential_pb.GCSSecretDeleteResponse>;
}

export interface IGCSSecretServiceClient {
  getGCSSecret(request: gcs_GCSCredential_pb.GCSSecretGetRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecret) => void): grpc.ClientUnaryCall;
  getGCSSecret(request: gcs_GCSCredential_pb.GCSSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecret) => void): grpc.ClientUnaryCall;
  getGCSSecret(request: gcs_GCSCredential_pb.GCSSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecret) => void): grpc.ClientUnaryCall;
  createGCSSecret(request: gcs_GCSCredential_pb.GCSSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecret) => void): grpc.ClientUnaryCall;
  createGCSSecret(request: gcs_GCSCredential_pb.GCSSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecret) => void): grpc.ClientUnaryCall;
  createGCSSecret(request: gcs_GCSCredential_pb.GCSSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecret) => void): grpc.ClientUnaryCall;
  updateGCSSecret(request: gcs_GCSCredential_pb.GCSSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateGCSSecret(request: gcs_GCSCredential_pb.GCSSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateGCSSecret(request: gcs_GCSCredential_pb.GCSSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteGCSSecret(request: gcs_GCSCredential_pb.GCSSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteGCSSecret(request: gcs_GCSCredential_pb.GCSSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteGCSSecret(request: gcs_GCSCredential_pb.GCSSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class GCSSecretServiceClient extends grpc.Client implements IGCSSecretServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getGCSSecret(request: gcs_GCSCredential_pb.GCSSecretGetRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecret) => void): grpc.ClientUnaryCall;
  public getGCSSecret(request: gcs_GCSCredential_pb.GCSSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecret) => void): grpc.ClientUnaryCall;
  public getGCSSecret(request: gcs_GCSCredential_pb.GCSSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecret) => void): grpc.ClientUnaryCall;
  public createGCSSecret(request: gcs_GCSCredential_pb.GCSSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecret) => void): grpc.ClientUnaryCall;
  public createGCSSecret(request: gcs_GCSCredential_pb.GCSSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecret) => void): grpc.ClientUnaryCall;
  public createGCSSecret(request: gcs_GCSCredential_pb.GCSSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecret) => void): grpc.ClientUnaryCall;
  public updateGCSSecret(request: gcs_GCSCredential_pb.GCSSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateGCSSecret(request: gcs_GCSCredential_pb.GCSSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateGCSSecret(request: gcs_GCSCredential_pb.GCSSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteGCSSecret(request: gcs_GCSCredential_pb.GCSSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteGCSSecret(request: gcs_GCSCredential_pb.GCSSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteGCSSecret(request: gcs_GCSCredential_pb.GCSSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: gcs_GCSCredential_pb.GCSSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

