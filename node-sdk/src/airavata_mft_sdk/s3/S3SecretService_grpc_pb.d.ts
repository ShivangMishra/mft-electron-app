// package: org.apache.airavata.mft.credential.service.s3
// file: s3/S3SecretService.proto

import * as grpc from '@grpc/grpc-js';
import * as s3_S3SecretService_pb from '../s3/S3SecretService_pb';
import * as s3_S3Credential_pb from '../s3/S3Credential_pb';

interface IS3SecretServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getS3Secret: IS3SecretServiceService_IgetS3Secret;
  createS3Secret: IS3SecretServiceService_IcreateS3Secret;
  updateS3Secret: IS3SecretServiceService_IupdateS3Secret;
  deleteS3Secret: IS3SecretServiceService_IdeleteS3Secret;
}

interface IS3SecretServiceService_IgetS3Secret extends grpc.MethodDefinition<s3_S3Credential_pb.S3SecretGetRequest, s3_S3Credential_pb.S3Secret> {
  path: '/org.apache.airavata.mft.credential.service.s3.S3SecretService/getS3Secret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<s3_S3Credential_pb.S3SecretGetRequest>;
  requestDeserialize: grpc.deserialize<s3_S3Credential_pb.S3SecretGetRequest>;
  responseSerialize: grpc.serialize<s3_S3Credential_pb.S3Secret>;
  responseDeserialize: grpc.deserialize<s3_S3Credential_pb.S3Secret>;
}

interface IS3SecretServiceService_IcreateS3Secret extends grpc.MethodDefinition<s3_S3Credential_pb.S3SecretCreateRequest, s3_S3Credential_pb.S3Secret> {
  path: '/org.apache.airavata.mft.credential.service.s3.S3SecretService/createS3Secret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<s3_S3Credential_pb.S3SecretCreateRequest>;
  requestDeserialize: grpc.deserialize<s3_S3Credential_pb.S3SecretCreateRequest>;
  responseSerialize: grpc.serialize<s3_S3Credential_pb.S3Secret>;
  responseDeserialize: grpc.deserialize<s3_S3Credential_pb.S3Secret>;
}

interface IS3SecretServiceService_IupdateS3Secret extends grpc.MethodDefinition<s3_S3Credential_pb.S3SecretUpdateRequest, s3_S3Credential_pb.S3SecretUpdateResponse> {
  path: '/org.apache.airavata.mft.credential.service.s3.S3SecretService/updateS3Secret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<s3_S3Credential_pb.S3SecretUpdateRequest>;
  requestDeserialize: grpc.deserialize<s3_S3Credential_pb.S3SecretUpdateRequest>;
  responseSerialize: grpc.serialize<s3_S3Credential_pb.S3SecretUpdateResponse>;
  responseDeserialize: grpc.deserialize<s3_S3Credential_pb.S3SecretUpdateResponse>;
}

interface IS3SecretServiceService_IdeleteS3Secret extends grpc.MethodDefinition<s3_S3Credential_pb.S3SecretDeleteRequest, s3_S3Credential_pb.S3SecretDeleteResponse> {
  path: '/org.apache.airavata.mft.credential.service.s3.S3SecretService/deleteS3Secret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<s3_S3Credential_pb.S3SecretDeleteRequest>;
  requestDeserialize: grpc.deserialize<s3_S3Credential_pb.S3SecretDeleteRequest>;
  responseSerialize: grpc.serialize<s3_S3Credential_pb.S3SecretDeleteResponse>;
  responseDeserialize: grpc.deserialize<s3_S3Credential_pb.S3SecretDeleteResponse>;
}

export const S3SecretServiceService: IS3SecretServiceService;
export interface IS3SecretServiceServer extends grpc.UntypedServiceImplementation {
  getS3Secret: grpc.handleUnaryCall<s3_S3Credential_pb.S3SecretGetRequest, s3_S3Credential_pb.S3Secret>;
  createS3Secret: grpc.handleUnaryCall<s3_S3Credential_pb.S3SecretCreateRequest, s3_S3Credential_pb.S3Secret>;
  updateS3Secret: grpc.handleUnaryCall<s3_S3Credential_pb.S3SecretUpdateRequest, s3_S3Credential_pb.S3SecretUpdateResponse>;
  deleteS3Secret: grpc.handleUnaryCall<s3_S3Credential_pb.S3SecretDeleteRequest, s3_S3Credential_pb.S3SecretDeleteResponse>;
}

export interface IS3SecretServiceClient {
  getS3Secret(request: s3_S3Credential_pb.S3SecretGetRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3Secret) => void): grpc.ClientUnaryCall;
  getS3Secret(request: s3_S3Credential_pb.S3SecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3Secret) => void): grpc.ClientUnaryCall;
  getS3Secret(request: s3_S3Credential_pb.S3SecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3Secret) => void): grpc.ClientUnaryCall;
  createS3Secret(request: s3_S3Credential_pb.S3SecretCreateRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3Secret) => void): grpc.ClientUnaryCall;
  createS3Secret(request: s3_S3Credential_pb.S3SecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3Secret) => void): grpc.ClientUnaryCall;
  createS3Secret(request: s3_S3Credential_pb.S3SecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3Secret) => void): grpc.ClientUnaryCall;
  updateS3Secret(request: s3_S3Credential_pb.S3SecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3SecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateS3Secret(request: s3_S3Credential_pb.S3SecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3SecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateS3Secret(request: s3_S3Credential_pb.S3SecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3SecretUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteS3Secret(request: s3_S3Credential_pb.S3SecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3SecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteS3Secret(request: s3_S3Credential_pb.S3SecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3SecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteS3Secret(request: s3_S3Credential_pb.S3SecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3SecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class S3SecretServiceClient extends grpc.Client implements IS3SecretServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getS3Secret(request: s3_S3Credential_pb.S3SecretGetRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3Secret) => void): grpc.ClientUnaryCall;
  public getS3Secret(request: s3_S3Credential_pb.S3SecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3Secret) => void): grpc.ClientUnaryCall;
  public getS3Secret(request: s3_S3Credential_pb.S3SecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3Secret) => void): grpc.ClientUnaryCall;
  public createS3Secret(request: s3_S3Credential_pb.S3SecretCreateRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3Secret) => void): grpc.ClientUnaryCall;
  public createS3Secret(request: s3_S3Credential_pb.S3SecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3Secret) => void): grpc.ClientUnaryCall;
  public createS3Secret(request: s3_S3Credential_pb.S3SecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3Secret) => void): grpc.ClientUnaryCall;
  public updateS3Secret(request: s3_S3Credential_pb.S3SecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3SecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateS3Secret(request: s3_S3Credential_pb.S3SecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3SecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateS3Secret(request: s3_S3Credential_pb.S3SecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3SecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteS3Secret(request: s3_S3Credential_pb.S3SecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3SecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteS3Secret(request: s3_S3Credential_pb.S3SecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3SecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteS3Secret(request: s3_S3Credential_pb.S3SecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Credential_pb.S3SecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

