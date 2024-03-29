// package: org.apache.airavata.mft.resource.service.s3
// file: s3/S3StorageService.proto

import * as grpc from '@grpc/grpc-js';
import * as s3_S3StorageService_pb from '../s3/S3StorageService_pb';
import * as s3_S3Storage_pb from '../s3/S3Storage_pb';

interface IS3StorageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listS3Storage: IS3StorageServiceService_IlistS3Storage;
  getS3Storage: IS3StorageServiceService_IgetS3Storage;
  createS3Storage: IS3StorageServiceService_IcreateS3Storage;
  updateS3Storage: IS3StorageServiceService_IupdateS3Storage;
  deleteS3Storage: IS3StorageServiceService_IdeleteS3Storage;
}

interface IS3StorageServiceService_IlistS3Storage extends grpc.MethodDefinition<s3_S3Storage_pb.S3StorageListRequest, s3_S3Storage_pb.S3StorageListResponse> {
  path: '/org.apache.airavata.mft.resource.service.s3.S3StorageService/listS3Storage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<s3_S3Storage_pb.S3StorageListRequest>;
  requestDeserialize: grpc.deserialize<s3_S3Storage_pb.S3StorageListRequest>;
  responseSerialize: grpc.serialize<s3_S3Storage_pb.S3StorageListResponse>;
  responseDeserialize: grpc.deserialize<s3_S3Storage_pb.S3StorageListResponse>;
}

interface IS3StorageServiceService_IgetS3Storage extends grpc.MethodDefinition<s3_S3Storage_pb.S3StorageGetRequest, s3_S3Storage_pb.S3Storage> {
  path: '/org.apache.airavata.mft.resource.service.s3.S3StorageService/getS3Storage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<s3_S3Storage_pb.S3StorageGetRequest>;
  requestDeserialize: grpc.deserialize<s3_S3Storage_pb.S3StorageGetRequest>;
  responseSerialize: grpc.serialize<s3_S3Storage_pb.S3Storage>;
  responseDeserialize: grpc.deserialize<s3_S3Storage_pb.S3Storage>;
}

interface IS3StorageServiceService_IcreateS3Storage extends grpc.MethodDefinition<s3_S3Storage_pb.S3StorageCreateRequest, s3_S3Storage_pb.S3Storage> {
  path: '/org.apache.airavata.mft.resource.service.s3.S3StorageService/createS3Storage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<s3_S3Storage_pb.S3StorageCreateRequest>;
  requestDeserialize: grpc.deserialize<s3_S3Storage_pb.S3StorageCreateRequest>;
  responseSerialize: grpc.serialize<s3_S3Storage_pb.S3Storage>;
  responseDeserialize: grpc.deserialize<s3_S3Storage_pb.S3Storage>;
}

interface IS3StorageServiceService_IupdateS3Storage extends grpc.MethodDefinition<s3_S3Storage_pb.S3StorageUpdateRequest, s3_S3Storage_pb.S3StorageUpdateResponse> {
  path: '/org.apache.airavata.mft.resource.service.s3.S3StorageService/updateS3Storage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<s3_S3Storage_pb.S3StorageUpdateRequest>;
  requestDeserialize: grpc.deserialize<s3_S3Storage_pb.S3StorageUpdateRequest>;
  responseSerialize: grpc.serialize<s3_S3Storage_pb.S3StorageUpdateResponse>;
  responseDeserialize: grpc.deserialize<s3_S3Storage_pb.S3StorageUpdateResponse>;
}

interface IS3StorageServiceService_IdeleteS3Storage extends grpc.MethodDefinition<s3_S3Storage_pb.S3StorageDeleteRequest, s3_S3Storage_pb.S3StorageDeleteResponse> {
  path: '/org.apache.airavata.mft.resource.service.s3.S3StorageService/deleteS3Storage'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<s3_S3Storage_pb.S3StorageDeleteRequest>;
  requestDeserialize: grpc.deserialize<s3_S3Storage_pb.S3StorageDeleteRequest>;
  responseSerialize: grpc.serialize<s3_S3Storage_pb.S3StorageDeleteResponse>;
  responseDeserialize: grpc.deserialize<s3_S3Storage_pb.S3StorageDeleteResponse>;
}

export const S3StorageServiceService: IS3StorageServiceService;
export interface IS3StorageServiceServer extends grpc.UntypedServiceImplementation {
  listS3Storage: grpc.handleUnaryCall<s3_S3Storage_pb.S3StorageListRequest, s3_S3Storage_pb.S3StorageListResponse>;
  getS3Storage: grpc.handleUnaryCall<s3_S3Storage_pb.S3StorageGetRequest, s3_S3Storage_pb.S3Storage>;
  createS3Storage: grpc.handleUnaryCall<s3_S3Storage_pb.S3StorageCreateRequest, s3_S3Storage_pb.S3Storage>;
  updateS3Storage: grpc.handleUnaryCall<s3_S3Storage_pb.S3StorageUpdateRequest, s3_S3Storage_pb.S3StorageUpdateResponse>;
  deleteS3Storage: grpc.handleUnaryCall<s3_S3Storage_pb.S3StorageDeleteRequest, s3_S3Storage_pb.S3StorageDeleteResponse>;
}

export interface IS3StorageServiceClient {
  listS3Storage(request: s3_S3Storage_pb.S3StorageListRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageListResponse) => void): grpc.ClientUnaryCall;
  listS3Storage(request: s3_S3Storage_pb.S3StorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageListResponse) => void): grpc.ClientUnaryCall;
  listS3Storage(request: s3_S3Storage_pb.S3StorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageListResponse) => void): grpc.ClientUnaryCall;
  getS3Storage(request: s3_S3Storage_pb.S3StorageGetRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3Storage) => void): grpc.ClientUnaryCall;
  getS3Storage(request: s3_S3Storage_pb.S3StorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3Storage) => void): grpc.ClientUnaryCall;
  getS3Storage(request: s3_S3Storage_pb.S3StorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3Storage) => void): grpc.ClientUnaryCall;
  createS3Storage(request: s3_S3Storage_pb.S3StorageCreateRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3Storage) => void): grpc.ClientUnaryCall;
  createS3Storage(request: s3_S3Storage_pb.S3StorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3Storage) => void): grpc.ClientUnaryCall;
  createS3Storage(request: s3_S3Storage_pb.S3StorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3Storage) => void): grpc.ClientUnaryCall;
  updateS3Storage(request: s3_S3Storage_pb.S3StorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateS3Storage(request: s3_S3Storage_pb.S3StorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageUpdateResponse) => void): grpc.ClientUnaryCall;
  updateS3Storage(request: s3_S3Storage_pb.S3StorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageUpdateResponse) => void): grpc.ClientUnaryCall;
  deleteS3Storage(request: s3_S3Storage_pb.S3StorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteS3Storage(request: s3_S3Storage_pb.S3StorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageDeleteResponse) => void): grpc.ClientUnaryCall;
  deleteS3Storage(request: s3_S3Storage_pb.S3StorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class S3StorageServiceClient extends grpc.Client implements IS3StorageServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public listS3Storage(request: s3_S3Storage_pb.S3StorageListRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageListResponse) => void): grpc.ClientUnaryCall;
  public listS3Storage(request: s3_S3Storage_pb.S3StorageListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageListResponse) => void): grpc.ClientUnaryCall;
  public listS3Storage(request: s3_S3Storage_pb.S3StorageListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageListResponse) => void): grpc.ClientUnaryCall;
  public getS3Storage(request: s3_S3Storage_pb.S3StorageGetRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3Storage) => void): grpc.ClientUnaryCall;
  public getS3Storage(request: s3_S3Storage_pb.S3StorageGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3Storage) => void): grpc.ClientUnaryCall;
  public getS3Storage(request: s3_S3Storage_pb.S3StorageGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3Storage) => void): grpc.ClientUnaryCall;
  public createS3Storage(request: s3_S3Storage_pb.S3StorageCreateRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3Storage) => void): grpc.ClientUnaryCall;
  public createS3Storage(request: s3_S3Storage_pb.S3StorageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3Storage) => void): grpc.ClientUnaryCall;
  public createS3Storage(request: s3_S3Storage_pb.S3StorageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3Storage) => void): grpc.ClientUnaryCall;
  public updateS3Storage(request: s3_S3Storage_pb.S3StorageUpdateRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateS3Storage(request: s3_S3Storage_pb.S3StorageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public updateS3Storage(request: s3_S3Storage_pb.S3StorageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageUpdateResponse) => void): grpc.ClientUnaryCall;
  public deleteS3Storage(request: s3_S3Storage_pb.S3StorageDeleteRequest, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteS3Storage(request: s3_S3Storage_pb.S3StorageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageDeleteResponse) => void): grpc.ClientUnaryCall;
  public deleteS3Storage(request: s3_S3Storage_pb.S3StorageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: s3_S3Storage_pb.S3StorageDeleteResponse) => void): grpc.ClientUnaryCall;
}

