// package: org.apache.airavata.mft.credential.service.http
// file: http/HttpSecretService.proto

import * as grpc from '@grpc/grpc-js';
import * as http_HttpSecretService_pb from '../http/HttpSecretService_pb';
import * as http_HttpCredential_pb from '../http/HttpCredential_pb';

interface IHTTPSecretServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getHTTPSecret: IHTTPSecretServiceService_IgetHTTPSecret;
  createHTTPSecret: IHTTPSecretServiceService_IcreateHTTPSecret;
  updateHTTPSecret: IHTTPSecretServiceService_IupdateHTTPSecret;
  deleteHTTPSecret: IHTTPSecretServiceService_IdeleteHTTPSecret;
}

interface IHTTPSecretServiceService_IgetHTTPSecret extends grpc.MethodDefinition<http_HttpCredential_pb.HTTPSecretGetRequest, http_HttpCredential_pb.HTTPSecret> {
  path: '/org.apache.airavata.mft.credential.service.http.HTTPSecretService/getHTTPSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<http_HttpCredential_pb.HTTPSecretGetRequest>;
  requestDeserialize: grpc.deserialize<http_HttpCredential_pb.HTTPSecretGetRequest>;
  responseSerialize: grpc.serialize<http_HttpCredential_pb.HTTPSecret>;
  responseDeserialize: grpc.deserialize<http_HttpCredential_pb.HTTPSecret>;
}

interface IHTTPSecretServiceService_IcreateHTTPSecret extends grpc.MethodDefinition<http_HttpCredential_pb.HTTPSecretCreateRequest, http_HttpCredential_pb.HTTPSecret> {
  path: '/org.apache.airavata.mft.credential.service.http.HTTPSecretService/createHTTPSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<http_HttpCredential_pb.HTTPSecretCreateRequest>;
  requestDeserialize: grpc.deserialize<http_HttpCredential_pb.HTTPSecretCreateRequest>;
  responseSerialize: grpc.serialize<http_HttpCredential_pb.HTTPSecret>;
  responseDeserialize: grpc.deserialize<http_HttpCredential_pb.HTTPSecret>;
}

interface IHTTPSecretServiceService_IupdateHTTPSecret extends grpc.MethodDefinition<http_HttpCredential_pb.HTTPSecretUpdateRequest, http_HttpCredential_pb.HTTPSecretUpdateResponse> {
  path: '/org.apache.airavata.mft.credential.service.http.HTTPSecretService/updateHTTPSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<http_HttpCredential_pb.HTTPSecretUpdateRequest>;
  requestDeserialize: grpc.deserialize<http_HttpCredential_pb.HTTPSecretUpdateRequest>;
  responseSerialize: grpc.serialize<http_HttpCredential_pb.HTTPSecretUpdateResponse>;
  responseDeserialize: grpc.deserialize<http_HttpCredential_pb.HTTPSecretUpdateResponse>;
}

interface IHTTPSecretServiceService_IdeleteHTTPSecret extends grpc.MethodDefinition<http_HttpCredential_pb.HTTPSecretDeleteRequest, http_HttpCredential_pb.HTTPSecretDeleteResponse> {
  path: '/org.apache.airavata.mft.credential.service.http.HTTPSecretService/deleteHTTPSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<http_HttpCredential_pb.HTTPSecretDeleteRequest>;
  requestDeserialize: grpc.deserialize<http_HttpCredential_pb.HTTPSecretDeleteRequest>;
  responseSerialize: grpc.serialize<http_HttpCredential_pb.HTTPSecretDeleteResponse>;
  responseDeserialize: grpc.deserialize<http_HttpCredential_pb.HTTPSecretDeleteResponse>;
}

export const HTTPSecretServiceService: IHTTPSecretServiceService;
export interface IHTTPSecretServiceServer extends grpc.UntypedServiceImplementation {
  getHTTPSecret: grpc.handleUnaryCall<http_HttpCredential_pb.HTTPSecretGetRequest, http_HttpCredential_pb.HTTPSecret>;
  createHTTPSecret: grpc.handleUnaryCall<http_HttpCredential_pb.HTTPSecretCreateRequest, http_HttpCredential_pb.HTTPSecret>;
  updateHTTPSecret: grpc.handleUnaryCall<http_HttpCredential_pb.HTTPSecretUpdateRequest, http_HttpCredential_pb.HTTPSecretUpdateResponse>;
  deleteHTTPSecret: grpc.handleUnaryCall<http_HttpCredential_pb.HTTPSecretDeleteRequest, http_HttpCredential_pb.HTTPSecretDeleteResponse>;
}

export interface IHTTPSecretServiceClient {
  getHTTPSecret(request: http_HttpCredential_pb.HTTPSecretGetRequest, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecret) => void): grpc.ClientUnaryCall;
  getHTTPSecret(request: http_HttpCredential_pb.HTTPSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecret) => void): grpc.ClientUnaryCall;
  getHTTPSecret(request: http_HttpCredential_pb.HTTPSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecret) => void): grpc.ClientUnaryCall;
  createHTTPSecret(request: http_HttpCredential_pb.HTTPSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecret) => void): grpc.ClientUnaryCall;
  createHTTPSecret(request: http_HttpCredential_pb.HTTPSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecret) => void): grpc.ClientUnaryCall;
  createHTTPSecret(request: http_HttpCredential_pb.HTTPSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecret) => void): grpc.ClientUnaryCall;
  updateHTTPSecret(request: http_HttpCredential_pb.HTTPSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateHTTPSecret(request: http_HttpCredential_pb.HTTPSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateHTTPSecret(request: http_HttpCredential_pb.HTTPSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteHTTPSecret(request: http_HttpCredential_pb.HTTPSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteHTTPSecret(request: http_HttpCredential_pb.HTTPSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteHTTPSecret(request: http_HttpCredential_pb.HTTPSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class HTTPSecretServiceClient extends grpc.Client implements IHTTPSecretServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getHTTPSecret(request: http_HttpCredential_pb.HTTPSecretGetRequest, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecret) => void): grpc.ClientUnaryCall;
  public getHTTPSecret(request: http_HttpCredential_pb.HTTPSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecret) => void): grpc.ClientUnaryCall;
  public getHTTPSecret(request: http_HttpCredential_pb.HTTPSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecret) => void): grpc.ClientUnaryCall;
  public createHTTPSecret(request: http_HttpCredential_pb.HTTPSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecret) => void): grpc.ClientUnaryCall;
  public createHTTPSecret(request: http_HttpCredential_pb.HTTPSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecret) => void): grpc.ClientUnaryCall;
  public createHTTPSecret(request: http_HttpCredential_pb.HTTPSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecret) => void): grpc.ClientUnaryCall;
  public updateHTTPSecret(request: http_HttpCredential_pb.HTTPSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateHTTPSecret(request: http_HttpCredential_pb.HTTPSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateHTTPSecret(request: http_HttpCredential_pb.HTTPSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteHTTPSecret(request: http_HttpCredential_pb.HTTPSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteHTTPSecret(request: http_HttpCredential_pb.HTTPSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteHTTPSecret(request: http_HttpCredential_pb.HTTPSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: http_HttpCredential_pb.HTTPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

