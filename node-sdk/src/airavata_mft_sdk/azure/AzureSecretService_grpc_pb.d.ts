// package: org.apache.airavata.mft.credential.service.azure
// file: azure/AzureSecretService.proto

import * as grpc from '@grpc/grpc-js';
import * as azure_AzureSecretService_pb from '../azure/AzureSecretService_pb';
import * as azure_AzureCredential_pb from '../azure/AzureCredential_pb';

interface IAzureSecretServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAzureSecret: IAzureSecretServiceService_IgetAzureSecret;
  createAzureSecret: IAzureSecretServiceService_IcreateAzureSecret;
  updateAzureSecret: IAzureSecretServiceService_IupdateAzureSecret;
  deleteAzureSecret: IAzureSecretServiceService_IdeleteAzureSecret;
}

interface IAzureSecretServiceService_IgetAzureSecret extends grpc.MethodDefinition<azure_AzureCredential_pb.AzureSecretGetRequest, azure_AzureCredential_pb.AzureSecret> {
  path: '/org.apache.airavata.mft.credential.service.azure.AzureSecretService/getAzureSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<azure_AzureCredential_pb.AzureSecretGetRequest>;
  requestDeserialize: grpc.deserialize<azure_AzureCredential_pb.AzureSecretGetRequest>;
  responseSerialize: grpc.serialize<azure_AzureCredential_pb.AzureSecret>;
  responseDeserialize: grpc.deserialize<azure_AzureCredential_pb.AzureSecret>;
}

interface IAzureSecretServiceService_IcreateAzureSecret extends grpc.MethodDefinition<azure_AzureCredential_pb.AzureSecretCreateRequest, azure_AzureCredential_pb.AzureSecret> {
  path: '/org.apache.airavata.mft.credential.service.azure.AzureSecretService/createAzureSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<azure_AzureCredential_pb.AzureSecretCreateRequest>;
  requestDeserialize: grpc.deserialize<azure_AzureCredential_pb.AzureSecretCreateRequest>;
  responseSerialize: grpc.serialize<azure_AzureCredential_pb.AzureSecret>;
  responseDeserialize: grpc.deserialize<azure_AzureCredential_pb.AzureSecret>;
}

interface IAzureSecretServiceService_IupdateAzureSecret extends grpc.MethodDefinition<azure_AzureCredential_pb.AzureSecretUpdateRequest, azure_AzureCredential_pb.AzureSecretUpdateResponse> {
  path: '/org.apache.airavata.mft.credential.service.azure.AzureSecretService/updateAzureSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<azure_AzureCredential_pb.AzureSecretUpdateRequest>;
  requestDeserialize: grpc.deserialize<azure_AzureCredential_pb.AzureSecretUpdateRequest>;
  responseSerialize: grpc.serialize<azure_AzureCredential_pb.AzureSecretUpdateResponse>;
  responseDeserialize: grpc.deserialize<azure_AzureCredential_pb.AzureSecretUpdateResponse>;
}

interface IAzureSecretServiceService_IdeleteAzureSecret extends grpc.MethodDefinition<azure_AzureCredential_pb.AzureSecretDeleteRequest, azure_AzureCredential_pb.AzureSecretDeleteResponse> {
  path: '/org.apache.airavata.mft.credential.service.azure.AzureSecretService/deleteAzureSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<azure_AzureCredential_pb.AzureSecretDeleteRequest>;
  requestDeserialize: grpc.deserialize<azure_AzureCredential_pb.AzureSecretDeleteRequest>;
  responseSerialize: grpc.serialize<azure_AzureCredential_pb.AzureSecretDeleteResponse>;
  responseDeserialize: grpc.deserialize<azure_AzureCredential_pb.AzureSecretDeleteResponse>;
}

export const AzureSecretServiceService: IAzureSecretServiceService;
export interface IAzureSecretServiceServer extends grpc.UntypedServiceImplementation {
  getAzureSecret: grpc.handleUnaryCall<azure_AzureCredential_pb.AzureSecretGetRequest, azure_AzureCredential_pb.AzureSecret>;
  createAzureSecret: grpc.handleUnaryCall<azure_AzureCredential_pb.AzureSecretCreateRequest, azure_AzureCredential_pb.AzureSecret>;
  updateAzureSecret: grpc.handleUnaryCall<azure_AzureCredential_pb.AzureSecretUpdateRequest, azure_AzureCredential_pb.AzureSecretUpdateResponse>;
  deleteAzureSecret: grpc.handleUnaryCall<azure_AzureCredential_pb.AzureSecretDeleteRequest, azure_AzureCredential_pb.AzureSecretDeleteResponse>;
}

export interface IAzureSecretServiceClient {
  getAzureSecret(request: azure_AzureCredential_pb.AzureSecretGetRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecret) => void): grpc.ClientUnaryCall;
  getAzureSecret(request: azure_AzureCredential_pb.AzureSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecret) => void): grpc.ClientUnaryCall;
  getAzureSecret(request: azure_AzureCredential_pb.AzureSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecret) => void): grpc.ClientUnaryCall;
  createAzureSecret(request: azure_AzureCredential_pb.AzureSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecret) => void): grpc.ClientUnaryCall;
  createAzureSecret(request: azure_AzureCredential_pb.AzureSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecret) => void): grpc.ClientUnaryCall;
  createAzureSecret(request: azure_AzureCredential_pb.AzureSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecret) => void): grpc.ClientUnaryCall;
  updateAzureSecret(request: azure_AzureCredential_pb.AzureSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateAzureSecret(request: azure_AzureCredential_pb.AzureSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateAzureSecret(request: azure_AzureCredential_pb.AzureSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteAzureSecret(request: azure_AzureCredential_pb.AzureSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteAzureSecret(request: azure_AzureCredential_pb.AzureSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteAzureSecret(request: azure_AzureCredential_pb.AzureSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class AzureSecretServiceClient extends grpc.Client implements IAzureSecretServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getAzureSecret(request: azure_AzureCredential_pb.AzureSecretGetRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecret) => void): grpc.ClientUnaryCall;
  public getAzureSecret(request: azure_AzureCredential_pb.AzureSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecret) => void): grpc.ClientUnaryCall;
  public getAzureSecret(request: azure_AzureCredential_pb.AzureSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecret) => void): grpc.ClientUnaryCall;
  public createAzureSecret(request: azure_AzureCredential_pb.AzureSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecret) => void): grpc.ClientUnaryCall;
  public createAzureSecret(request: azure_AzureCredential_pb.AzureSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecret) => void): grpc.ClientUnaryCall;
  public createAzureSecret(request: azure_AzureCredential_pb.AzureSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecret) => void): grpc.ClientUnaryCall;
  public updateAzureSecret(request: azure_AzureCredential_pb.AzureSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateAzureSecret(request: azure_AzureCredential_pb.AzureSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateAzureSecret(request: azure_AzureCredential_pb.AzureSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteAzureSecret(request: azure_AzureCredential_pb.AzureSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteAzureSecret(request: azure_AzureCredential_pb.AzureSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteAzureSecret(request: azure_AzureCredential_pb.AzureSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: azure_AzureCredential_pb.AzureSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

