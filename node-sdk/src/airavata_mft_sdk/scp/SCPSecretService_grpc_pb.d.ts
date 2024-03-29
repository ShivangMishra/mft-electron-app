// package: org.apache.airavata.mft.credential.service.scp
// file: scp/SCPSecretService.proto

import * as grpc from '@grpc/grpc-js';
import * as scp_SCPSecretService_pb from '../scp/SCPSecretService_pb';
import * as scp_SCPCredential_pb from '../scp/SCPCredential_pb';

interface ISCPSecretServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getSCPSecret: ISCPSecretServiceService_IgetSCPSecret;
  createSCPSecret: ISCPSecretServiceService_IcreateSCPSecret;
  updateSCPSecret: ISCPSecretServiceService_IupdateSCPSecret;
  deleteSCPSecret: ISCPSecretServiceService_IdeleteSCPSecret;
}

interface ISCPSecretServiceService_IgetSCPSecret extends grpc.MethodDefinition<scp_SCPCredential_pb.SCPSecretGetRequest, scp_SCPCredential_pb.SCPSecret> {
  path: '/org.apache.airavata.mft.credential.service.scp.SCPSecretService/getSCPSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scp_SCPCredential_pb.SCPSecretGetRequest>;
  requestDeserialize: grpc.deserialize<scp_SCPCredential_pb.SCPSecretGetRequest>;
  responseSerialize: grpc.serialize<scp_SCPCredential_pb.SCPSecret>;
  responseDeserialize: grpc.deserialize<scp_SCPCredential_pb.SCPSecret>;
}

interface ISCPSecretServiceService_IcreateSCPSecret extends grpc.MethodDefinition<scp_SCPCredential_pb.SCPSecretCreateRequest, scp_SCPCredential_pb.SCPSecret> {
  path: '/org.apache.airavata.mft.credential.service.scp.SCPSecretService/createSCPSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scp_SCPCredential_pb.SCPSecretCreateRequest>;
  requestDeserialize: grpc.deserialize<scp_SCPCredential_pb.SCPSecretCreateRequest>;
  responseSerialize: grpc.serialize<scp_SCPCredential_pb.SCPSecret>;
  responseDeserialize: grpc.deserialize<scp_SCPCredential_pb.SCPSecret>;
}

interface ISCPSecretServiceService_IupdateSCPSecret extends grpc.MethodDefinition<scp_SCPCredential_pb.SCPSecretUpdateRequest, scp_SCPCredential_pb.SCPSecretUpdateResponse> {
  path: '/org.apache.airavata.mft.credential.service.scp.SCPSecretService/updateSCPSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scp_SCPCredential_pb.SCPSecretUpdateRequest>;
  requestDeserialize: grpc.deserialize<scp_SCPCredential_pb.SCPSecretUpdateRequest>;
  responseSerialize: grpc.serialize<scp_SCPCredential_pb.SCPSecretUpdateResponse>;
  responseDeserialize: grpc.deserialize<scp_SCPCredential_pb.SCPSecretUpdateResponse>;
}

interface ISCPSecretServiceService_IdeleteSCPSecret extends grpc.MethodDefinition<scp_SCPCredential_pb.SCPSecretDeleteRequest, scp_SCPCredential_pb.SCPSecretDeleteResponse> {
  path: '/org.apache.airavata.mft.credential.service.scp.SCPSecretService/deleteSCPSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scp_SCPCredential_pb.SCPSecretDeleteRequest>;
  requestDeserialize: grpc.deserialize<scp_SCPCredential_pb.SCPSecretDeleteRequest>;
  responseSerialize: grpc.serialize<scp_SCPCredential_pb.SCPSecretDeleteResponse>;
  responseDeserialize: grpc.deserialize<scp_SCPCredential_pb.SCPSecretDeleteResponse>;
}

export const SCPSecretServiceService: ISCPSecretServiceService;
export interface ISCPSecretServiceServer extends grpc.UntypedServiceImplementation {
  getSCPSecret: grpc.handleUnaryCall<scp_SCPCredential_pb.SCPSecretGetRequest, scp_SCPCredential_pb.SCPSecret>;
  createSCPSecret: grpc.handleUnaryCall<scp_SCPCredential_pb.SCPSecretCreateRequest, scp_SCPCredential_pb.SCPSecret>;
  updateSCPSecret: grpc.handleUnaryCall<scp_SCPCredential_pb.SCPSecretUpdateRequest, scp_SCPCredential_pb.SCPSecretUpdateResponse>;
  deleteSCPSecret: grpc.handleUnaryCall<scp_SCPCredential_pb.SCPSecretDeleteRequest, scp_SCPCredential_pb.SCPSecretDeleteResponse>;
}

export interface ISCPSecretServiceClient {
  getSCPSecret(request: scp_SCPCredential_pb.SCPSecretGetRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecret) => void): grpc.ClientUnaryCall;
  getSCPSecret(request: scp_SCPCredential_pb.SCPSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecret) => void): grpc.ClientUnaryCall;
  getSCPSecret(request: scp_SCPCredential_pb.SCPSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecret) => void): grpc.ClientUnaryCall;
  createSCPSecret(request: scp_SCPCredential_pb.SCPSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecret) => void): grpc.ClientUnaryCall;
  createSCPSecret(request: scp_SCPCredential_pb.SCPSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecret) => void): grpc.ClientUnaryCall;
  createSCPSecret(request: scp_SCPCredential_pb.SCPSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecret) => void): grpc.ClientUnaryCall;
  updateSCPSecret(request: scp_SCPCredential_pb.SCPSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateSCPSecret(request: scp_SCPCredential_pb.SCPSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateSCPSecret(request: scp_SCPCredential_pb.SCPSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteSCPSecret(request: scp_SCPCredential_pb.SCPSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteSCPSecret(request: scp_SCPCredential_pb.SCPSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteSCPSecret(request: scp_SCPCredential_pb.SCPSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class SCPSecretServiceClient extends grpc.Client implements ISCPSecretServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getSCPSecret(request: scp_SCPCredential_pb.SCPSecretGetRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecret) => void): grpc.ClientUnaryCall;
  public getSCPSecret(request: scp_SCPCredential_pb.SCPSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecret) => void): grpc.ClientUnaryCall;
  public getSCPSecret(request: scp_SCPCredential_pb.SCPSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecret) => void): grpc.ClientUnaryCall;
  public createSCPSecret(request: scp_SCPCredential_pb.SCPSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecret) => void): grpc.ClientUnaryCall;
  public createSCPSecret(request: scp_SCPCredential_pb.SCPSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecret) => void): grpc.ClientUnaryCall;
  public createSCPSecret(request: scp_SCPCredential_pb.SCPSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecret) => void): grpc.ClientUnaryCall;
  public updateSCPSecret(request: scp_SCPCredential_pb.SCPSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateSCPSecret(request: scp_SCPCredential_pb.SCPSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateSCPSecret(request: scp_SCPCredential_pb.SCPSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteSCPSecret(request: scp_SCPCredential_pb.SCPSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteSCPSecret(request: scp_SCPCredential_pb.SCPSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteSCPSecret(request: scp_SCPCredential_pb.SCPSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPCredential_pb.SCPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

