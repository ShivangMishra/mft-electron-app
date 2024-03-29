// package: org.apache.airavata.mft.resource.service.scp
// file: scp/SCPStorageService.proto

import * as grpc from '@grpc/grpc-js';
import * as scp_SCPStorageService_pb from '../scp/SCPStorageService_pb';
import * as scp_SCPStorage_pb from '../scp/SCPStorage_pb';

interface ISCPStorageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listSCPStorage: ISCPStorageServiceService_IlistSCPStorage;
  getSCPStorage: ISCPStorageServiceService_IgetSCPStorage;
  createSCPStorage: ISCPStorageServiceService_IcreateSCPStorage;
  updateSCPStorage: ISCPStorageServiceService_IupdateSCPStorage;
  deleteSCPStorage: ISCPStorageServiceService_IdeleteSCPStorage;
}

interface ISCPStorageServiceService_IlistSCPStorage extends grpc.MethodDefinition<scp_SCPStorage_pb.SCPStorageListRequest, scp_SCPStorage_pb.SCPStorageListResponse> {
  path: '/org.apache.airavata.mft.resource.service.scp.SCPStorageService/listSCPStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scp_SCPStorage_pb.SCPStorageListRequest>;
  requestDeserialize: grpc.deserialize<scp_SCPStorage_pb.SCPStorageListRequest>;
  responseSerialize: grpc.serialize<scp_SCPStorage_pb.SCPStorageListResponse>;
  responseDeserialize: grpc.deserialize<scp_SCPStorage_pb.SCPStorageListResponse>;
}

interface ISCPStorageServiceService_IgetSCPStorage extends grpc.MethodDefinition<scp_SCPStorage_pb.SCPStorageGetRequest, scp_SCPStorage_pb.SCPStorage> {
  path: '/org.apache.airavata.mft.resource.service.scp.SCPStorageService/getSCPStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scp_SCPStorage_pb.SCPStorageGetRequest>;
  requestDeserialize: grpc.deserialize<scp_SCPStorage_pb.SCPStorageGetRequest>;
  responseSerialize: grpc.serialize<scp_SCPStorage_pb.SCPStorage>;
  responseDeserialize: grpc.deserialize<scp_SCPStorage_pb.SCPStorage>;
}

interface ISCPStorageServiceService_IcreateSCPStorage extends grpc.MethodDefinition<scp_SCPStorage_pb.SCPStorageCreateRequest, scp_SCPStorage_pb.SCPStorage> {
  path: '/org.apache.airavata.mft.resource.service.scp.SCPStorageService/createSCPStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scp_SCPStorage_pb.SCPStorageCreateRequest>;
  requestDeserialize: grpc.deserialize<scp_SCPStorage_pb.SCPStorageCreateRequest>;
  responseSerialize: grpc.serialize<scp_SCPStorage_pb.SCPStorage>;
  responseDeserialize: grpc.deserialize<scp_SCPStorage_pb.SCPStorage>;
}

interface ISCPStorageServiceService_IupdateSCPStorage extends grpc.MethodDefinition<scp_SCPStorage_pb.SCPStorageUpdateRequest, scp_SCPStorage_pb.SCPStorageUpdateResponse> {
  path: '/org.apache.airavata.mft.resource.service.scp.SCPStorageService/updateSCPStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scp_SCPStorage_pb.SCPStorageUpdateRequest>;
  requestDeserialize: grpc.deserialize<scp_SCPStorage_pb.SCPStorageUpdateRequest>;
  responseSerialize: grpc.serialize<scp_SCPStorage_pb.SCPStorageUpdateResponse>;
  responseDeserialize: grpc.deserialize<scp_SCPStorage_pb.SCPStorageUpdateResponse>;
}

interface ISCPStorageServiceService_IdeleteSCPStorage extends grpc.MethodDefinition<scp_SCPStorage_pb.SCPStorageDeleteRequest, scp_SCPStorage_pb.SCPStorageDeleteResponse> {
  path: '/org.apache.airavata.mft.resource.service.scp.SCPStorageService/deleteSCPStorage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<scp_SCPStorage_pb.SCPStorageDeleteRequest>;
  requestDeserialize: grpc.deserialize<scp_SCPStorage_pb.SCPStorageDeleteRequest>;
  responseSerialize: grpc.serialize<scp_SCPStorage_pb.SCPStorageDeleteResponse>;
  responseDeserialize: grpc.deserialize<scp_SCPStorage_pb.SCPStorageDeleteResponse>;
}

export const SCPStorageServiceService: ISCPStorageServiceService;
export interface ISCPStorageServiceServer extends grpc.UntypedServiceImplementation {
  listSCPStorage: grpc.handleUnaryCall<scp_SCPStorage_pb.SCPStorageListRequest, scp_SCPStorage_pb.SCPStorageListResponse>;
  getSCPStorage: grpc.handleUnaryCall<scp_SCPStorage_pb.SCPStorageGetRequest, scp_SCPStorage_pb.SCPStorage>;
  createSCPStorage: grpc.handleUnaryCall<scp_SCPStorage_pb.SCPStorageCreateRequest, scp_SCPStorage_pb.SCPStorage>;
  updateSCPStorage: grpc.handleUnaryCall<scp_SCPStorage_pb.SCPStorageUpdateRequest, scp_SCPStorage_pb.SCPStorageUpdateResponse>;
  deleteSCPStorage: grpc.handleUnaryCall<scp_SCPStorage_pb.SCPStorageDeleteRequest, scp_SCPStorage_pb.SCPStorageDeleteResponse>;
}

export interface ISCPStorageServiceClient {
  listSCPStorage(request: scp_SCPStorage_pb.SCPStorageListRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageListResponse) => void): grpc.ClientUnaryCall;
  listSCPStorage(request: scp_SCPStorage_pb.SCPStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageListResponse) => void): grpc.ClientUnaryCall;
  listSCPStorage(request: scp_SCPStorage_pb.SCPStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageListResponse) => void): grpc.ClientUnaryCall;
  getSCPStorage(request: scp_SCPStorage_pb.SCPStorageGetRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorage) => void): grpc.ClientUnaryCall;
  getSCPStorage(request: scp_SCPStorage_pb.SCPStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorage) => void): grpc.ClientUnaryCall;
  getSCPStorage(request: scp_SCPStorage_pb.SCPStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorage) => void): grpc.ClientUnaryCall;
  createSCPStorage(request: scp_SCPStorage_pb.SCPStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorage) => void): grpc.ClientUnaryCall;
  createSCPStorage(request: scp_SCPStorage_pb.SCPStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorage) => void): grpc.ClientUnaryCall;
  createSCPStorage(request: scp_SCPStorage_pb.SCPStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorage) => void): grpc.ClientUnaryCall;
  updateSCPStorage(request: scp_SCPStorage_pb.SCPStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateSCPStorage(request: scp_SCPStorage_pb.SCPStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateSCPStorage(request: scp_SCPStorage_pb.SCPStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteSCPStorage(request: scp_SCPStorage_pb.SCPStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteSCPStorage(request: scp_SCPStorage_pb.SCPStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteSCPStorage(request: scp_SCPStorage_pb.SCPStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class SCPStorageServiceClient extends grpc.Client implements ISCPStorageServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public listSCPStorage(request: scp_SCPStorage_pb.SCPStorageListRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageListResponse) => void): grpc.ClientUnaryCall;
  public listSCPStorage(request: scp_SCPStorage_pb.SCPStorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageListResponse) => void): grpc.ClientUnaryCall;
  public listSCPStorage(request: scp_SCPStorage_pb.SCPStorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageListResponse) => void): grpc.ClientUnaryCall;
  public getSCPStorage(request: scp_SCPStorage_pb.SCPStorageGetRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorage) => void): grpc.ClientUnaryCall;
  public getSCPStorage(request: scp_SCPStorage_pb.SCPStorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorage) => void): grpc.ClientUnaryCall;
  public getSCPStorage(request: scp_SCPStorage_pb.SCPStorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorage) => void): grpc.ClientUnaryCall;
  public createSCPStorage(request: scp_SCPStorage_pb.SCPStorageCreateRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorage) => void): grpc.ClientUnaryCall;
  public createSCPStorage(request: scp_SCPStorage_pb.SCPStorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorage) => void): grpc.ClientUnaryCall;
  public createSCPStorage(request: scp_SCPStorage_pb.SCPStorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorage) => void): grpc.ClientUnaryCall;
  public updateSCPStorage(request: scp_SCPStorage_pb.SCPStorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateSCPStorage(request: scp_SCPStorage_pb.SCPStorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateSCPStorage(request: scp_SCPStorage_pb.SCPStorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteSCPStorage(request: scp_SCPStorage_pb.SCPStorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteSCPStorage(request: scp_SCPStorage_pb.SCPStorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteSCPStorage(request: scp_SCPStorage_pb.SCPStorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scp_SCPStorage_pb.SCPStorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

