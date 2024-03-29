// package: org.apache.airavata.mft.credential.service.ftp
// file: ftp/FTPSecretService.proto

import * as grpc from '@grpc/grpc-js';
import * as ftp_FTPSecretService_pb from '../ftp/FTPSecretService_pb';
import * as ftp_FTPCredential_pb from '../ftp/FTPCredential_pb';

interface IFTPSecretServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getFTPSecret: IFTPSecretServiceService_IgetFTPSecret;
  createFTPSecret: IFTPSecretServiceService_IcreateFTPSecret;
  updateFTPSecret: IFTPSecretServiceService_IupdateFTPSecret;
  deleteFTPSecret: IFTPSecretServiceService_IdeleteFTPSecret;
}

interface IFTPSecretServiceService_IgetFTPSecret extends grpc.MethodDefinition<ftp_FTPCredential_pb.FTPSecretGetRequest, ftp_FTPCredential_pb.FTPSecret> {
  path: '/org.apache.airavata.mft.credential.service.ftp.FTPSecretService/getFTPSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<ftp_FTPCredential_pb.FTPSecretGetRequest>;
  requestDeserialize: grpc.deserialize<ftp_FTPCredential_pb.FTPSecretGetRequest>;
  responseSerialize: grpc.serialize<ftp_FTPCredential_pb.FTPSecret>;
  responseDeserialize: grpc.deserialize<ftp_FTPCredential_pb.FTPSecret>;
}

interface IFTPSecretServiceService_IcreateFTPSecret extends grpc.MethodDefinition<ftp_FTPCredential_pb.FTPSecretCreateRequest, ftp_FTPCredential_pb.FTPSecret> {
  path: '/org.apache.airavata.mft.credential.service.ftp.FTPSecretService/createFTPSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<ftp_FTPCredential_pb.FTPSecretCreateRequest>;
  requestDeserialize: grpc.deserialize<ftp_FTPCredential_pb.FTPSecretCreateRequest>;
  responseSerialize: grpc.serialize<ftp_FTPCredential_pb.FTPSecret>;
  responseDeserialize: grpc.deserialize<ftp_FTPCredential_pb.FTPSecret>;
}

interface IFTPSecretServiceService_IupdateFTPSecret extends grpc.MethodDefinition<ftp_FTPCredential_pb.FTPSecretUpdateRequest, ftp_FTPCredential_pb.FTPSecretUpdateResponse> {
  path: '/org.apache.airavata.mft.credential.service.ftp.FTPSecretService/updateFTPSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<ftp_FTPCredential_pb.FTPSecretUpdateRequest>;
  requestDeserialize: grpc.deserialize<ftp_FTPCredential_pb.FTPSecretUpdateRequest>;
  responseSerialize: grpc.serialize<ftp_FTPCredential_pb.FTPSecretUpdateResponse>;
  responseDeserialize: grpc.deserialize<ftp_FTPCredential_pb.FTPSecretUpdateResponse>;
}

interface IFTPSecretServiceService_IdeleteFTPSecret extends grpc.MethodDefinition<ftp_FTPCredential_pb.FTPSecretDeleteRequest, ftp_FTPCredential_pb.FTPSecretDeleteResponse> {
  path: '/org.apache.airavata.mft.credential.service.ftp.FTPSecretService/deleteFTPSecret'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<ftp_FTPCredential_pb.FTPSecretDeleteRequest>;
  requestDeserialize: grpc.deserialize<ftp_FTPCredential_pb.FTPSecretDeleteRequest>;
  responseSerialize: grpc.serialize<ftp_FTPCredential_pb.FTPSecretDeleteResponse>;
  responseDeserialize: grpc.deserialize<ftp_FTPCredential_pb.FTPSecretDeleteResponse>;
}

export const FTPSecretServiceService: IFTPSecretServiceService;
export interface IFTPSecretServiceServer extends grpc.UntypedServiceImplementation {
  getFTPSecret: grpc.handleUnaryCall<ftp_FTPCredential_pb.FTPSecretGetRequest, ftp_FTPCredential_pb.FTPSecret>;
  createFTPSecret: grpc.handleUnaryCall<ftp_FTPCredential_pb.FTPSecretCreateRequest, ftp_FTPCredential_pb.FTPSecret>;
  updateFTPSecret: grpc.handleUnaryCall<ftp_FTPCredential_pb.FTPSecretUpdateRequest, ftp_FTPCredential_pb.FTPSecretUpdateResponse>;
  deleteFTPSecret: grpc.handleUnaryCall<ftp_FTPCredential_pb.FTPSecretDeleteRequest, ftp_FTPCredential_pb.FTPSecretDeleteResponse>;
}

export interface IFTPSecretServiceClient {
  getFTPSecret(request: ftp_FTPCredential_pb.FTPSecretGetRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecret) => void): grpc.ClientUnaryCall;
  getFTPSecret(request: ftp_FTPCredential_pb.FTPSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecret) => void): grpc.ClientUnaryCall;
  getFTPSecret(request: ftp_FTPCredential_pb.FTPSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecret) => void): grpc.ClientUnaryCall;
  createFTPSecret(request: ftp_FTPCredential_pb.FTPSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecret) => void): grpc.ClientUnaryCall;
  createFTPSecret(request: ftp_FTPCredential_pb.FTPSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecret) => void): grpc.ClientUnaryCall;
  createFTPSecret(request: ftp_FTPCredential_pb.FTPSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecret) => void): grpc.ClientUnaryCall;
  updateFTPSecret(request: ftp_FTPCredential_pb.FTPSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateFTPSecret(request: ftp_FTPCredential_pb.FTPSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  updateFTPSecret(request: ftp_FTPCredential_pb.FTPSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteFTPSecret(request: ftp_FTPCredential_pb.FTPSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteFTPSecret(request: ftp_FTPCredential_pb.FTPSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteFTPSecret(request: ftp_FTPCredential_pb.FTPSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class FTPSecretServiceClient extends grpc.Client implements IFTPSecretServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getFTPSecret(request: ftp_FTPCredential_pb.FTPSecretGetRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecret) => void): grpc.ClientUnaryCall;
  public getFTPSecret(request: ftp_FTPCredential_pb.FTPSecretGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecret) => void): grpc.ClientUnaryCall;
  public getFTPSecret(request: ftp_FTPCredential_pb.FTPSecretGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecret) => void): grpc.ClientUnaryCall;
  public createFTPSecret(request: ftp_FTPCredential_pb.FTPSecretCreateRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecret) => void): grpc.ClientUnaryCall;
  public createFTPSecret(request: ftp_FTPCredential_pb.FTPSecretCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecret) => void): grpc.ClientUnaryCall;
  public createFTPSecret(request: ftp_FTPCredential_pb.FTPSecretCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecret) => void): grpc.ClientUnaryCall;
  public updateFTPSecret(request: ftp_FTPCredential_pb.FTPSecretUpdateRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateFTPSecret(request: ftp_FTPCredential_pb.FTPSecretUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateFTPSecret(request: ftp_FTPCredential_pb.FTPSecretUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecretUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteFTPSecret(request: ftp_FTPCredential_pb.FTPSecretDeleteRequest, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteFTPSecret(request: ftp_FTPCredential_pb.FTPSecretDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteFTPSecret(request: ftp_FTPCredential_pb.FTPSecretDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ftp_FTPCredential_pb.FTPSecretDeleteResponse) => void): grpc.ClientUnaryCall;
}

