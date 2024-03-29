// package: org.apache.airavata.mft.credential.service.odata
// file: odata/ODataSecretService.proto

import * as grpc from '@grpc/grpc-js';
import * as odata_ODataSecretService_pb from '../odata/ODataSecretService_pb';
import * as odata_ODataCredential_pb from '../odata/ODataCredential_pb';

interface IODataSecretServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getODataSecret: IODataSecretServiceService_IgetODataSecret;
  createODataSecret: IODataSecretServiceService_IcreateODataSecret;
  updateODataSecret: IODataSecretServiceService_IupdateODataSecret;
  deleteODataSecret: IODataSecretServiceService_IdeleteODataSecret;
}

interface IODataSecretServiceService_IgetODataSecret extends grpc.MethodDefinition<odata_ODataCredential_pb.ODataSecretGetRequest, odata_ODataCredential_pb.ODataSecret> {
  path: '/org.apache.airavata.mft.credential.service.odata.ODataSecretService/getODataSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<odata_ODataCredential_pb.ODataSecretGetRequest>;
  requestDeserialize: grpc.deserialize<odata_ODataCredential_pb.ODataSecretGetRequest>;
  responseSerialize: grpc.serialize<odata_ODataCredential_pb.ODataSecret>;
  responseDeserialize: grpc.deserialize<odata_ODataCredential_pb.ODataSecret>;
}

interface IODataSecretServiceService_IcreateODataSecret extends grpc.MethodDefinition<odata_ODataCredential_pb.ODataSecretCreateRequest, odata_ODataCredential_pb.ODataSecret> {
  path: '/org.apache.airavata.mft.credential.service.odata.ODataSecretService/createODataSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<odata_ODataCredential_pb.ODataSecretCreateRequest>;
  requestDeserialize: grpc.deserialize<odata_ODataCredential_pb.ODataSecretCreateRequest>;
  responseSerialize: grpc.serialize<odata_ODataCredential_pb.ODataSecret>;
  responseDeserialize: grpc.deserialize<odata_ODataCredential_pb.ODataSecret>;
}

interface IODataSecretServiceService_IupdateODataSecret extends grpc.MethodDefinition<odata_ODataCredential_pb.ODataSecretUpdateRequest, odata_ODataCredential_pb.ODataSecretUpdateResponse> {
  path: '/org.apache.airavata.mft.credential.service.odata.ODataSecretService/updateODataSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<odata_ODataCredential_pb.ODataSecretUpdateRequest>;
  requestDeserialize: grpc.deserialize<odata_ODataCredential_pb.ODataSecretUpdateRequest>;
  responseSerialize: grpc.serialize<odata_ODataCredential_pb.ODataSecretUpdateResponse>;
  responseDeserialize: grpc.deserialize<odata_ODataCredential_pb.ODataSecretUpdateResponse>;
}

interface IODataSecretServiceService_IdeleteODataSecret extends grpc.MethodDefinition<odata_ODataCredential_pb.ODataSecretDeleteRequest, odata_ODataCredential_pb.ODataSecretDeleteResponse> {
  path: '/org.apache.airavata.mft.credential.service.odata.ODataSecretService/deleteODataSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<odata_ODataCredential_pb.ODataSecretDeleteRequest>;
  requestDeserialize: grpc.deserialize<odata_ODataCredential_pb.ODataSecretDeleteRequest>;
  responseSerialize: grpc.serialize<odata_ODataCredential_pb.ODataSecretDeleteResponse>;
  responseDeserialize: grpc.deserialize<odata_ODataCredential_pb.ODataSecretDeleteResponse>;
}

export const ODataSecretServiceService: IODataSecretServiceService;
export interface IODataSecretServiceServer extends grpc.UntypedServiceImplementation {
  getODataSecret: grpc.handleUnaryCall<odata_ODataCredential_pb.ODataSecretGetRequest, odata_ODataCredential_pb.ODataSecret>;
  createODataSecret: grpc.handleUnaryCall<odata_ODataCredential_pb.ODataSecretCreateRequest, odata_ODataCredential_pb.ODataSecret>;
  updateODataSecret: grpc.handleUnaryCall<odata_ODataCredential_pb.ODataSecretUpdateRequest, odata_ODataCredential_pb.ODataSecretUpdateResponse>;
  deleteODataSecret: grpc.handleUnaryCall<odata_ODataCredential_pb.ODataSecretDeleteRequest, odata_ODataCredential_pb.ODataSecretDeleteResponse>;
}

export interface IODataSecretServiceClient {
  getODataSecret(request: odata_ODataCredential_pb.ODataSecretGetRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecret) => void): grpc.ClientUnaryCall;
  getODataSecret(request: odata_ODataCredential_pb.ODataSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecret) => void): grpc.ClientUnaryCall;
  getODataSecret(request: odata_ODataCredential_pb.ODataSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecret) => void): grpc.ClientUnaryCall;
  createODataSecret(request: odata_ODataCredential_pb.ODataSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecret) => void): grpc.ClientUnaryCall;
  createODataSecret(request: odata_ODataCredential_pb.ODataSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecret) => void): grpc.ClientUnaryCall;
  createODataSecret(request: odata_ODataCredential_pb.ODataSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecret) => void): grpc.ClientUnaryCall;
  updateODataSecret(request: odata_ODataCredential_pb.ODataSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateODataSecret(request: odata_ODataCredential_pb.ODataSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateODataSecret(request: odata_ODataCredential_pb.ODataSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteODataSecret(request: odata_ODataCredential_pb.ODataSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteODataSecret(request: odata_ODataCredential_pb.ODataSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteODataSecret(request: odata_ODataCredential_pb.ODataSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class ODataSecretServiceClient extends grpc.Client implements IODataSecretServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getODataSecret(request: odata_ODataCredential_pb.ODataSecretGetRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecret) => void): grpc.ClientUnaryCall;
  public getODataSecret(request: odata_ODataCredential_pb.ODataSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecret) => void): grpc.ClientUnaryCall;
  public getODataSecret(request: odata_ODataCredential_pb.ODataSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecret) => void): grpc.ClientUnaryCall;
  public createODataSecret(request: odata_ODataCredential_pb.ODataSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecret) => void): grpc.ClientUnaryCall;
  public createODataSecret(request: odata_ODataCredential_pb.ODataSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecret) => void): grpc.ClientUnaryCall;
  public createODataSecret(request: odata_ODataCredential_pb.ODataSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecret) => void): grpc.ClientUnaryCall;
  public updateODataSecret(request: odata_ODataCredential_pb.ODataSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateODataSecret(request: odata_ODataCredential_pb.ODataSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateODataSecret(request: odata_ODataCredential_pb.ODataSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteODataSecret(request: odata_ODataCredential_pb.ODataSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteODataSecret(request: odata_ODataCredential_pb.ODataSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteODataSecret(request: odata_ODataCredential_pb.ODataSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: odata_ODataCredential_pb.ODataSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

