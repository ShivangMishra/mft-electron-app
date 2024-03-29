// package: org.apache.airavata.mft.api.service
// file: MFTTransferApi.proto

import * as grpc from '@grpc/grpc-js';
import * as MFTTransferApi_pb from './MFTTransferApi_pb';
import * as CredCommon_pb from './CredCommon_pb';
import * as MFTAgentStubs_pb from './MFTAgentStubs_pb';

interface IMFTTransferServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  submitTransfer: IMFTTransferServiceService_IsubmitTransfer;
  getAllTransferStates: IMFTTransferServiceService_IgetAllTransferStates;
  getTransferStateSummary: IMFTTransferServiceService_IgetTransferStateSummary;
  getResourceAvailability: IMFTTransferServiceService_IgetResourceAvailability;
  resourceMetadata: IMFTTransferServiceService_IresourceMetadata;
  removeTransfer: IMFTTransferServiceService_IremoveTransfer;
}

interface IMFTTransferServiceService_IsubmitTransfer extends grpc.MethodDefinition<MFTTransferApi_pb.TransferApiRequest, MFTTransferApi_pb.TransferApiResponse> {
  path: '/org.apache.airavata.mft.api.service.MFTTransferService/submitTransfer'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<MFTTransferApi_pb.TransferApiRequest>;
  requestDeserialize: grpc.deserialize<MFTTransferApi_pb.TransferApiRequest>;
  responseSerialize: grpc.serialize<MFTTransferApi_pb.TransferApiResponse>;
  responseDeserialize: grpc.deserialize<MFTTransferApi_pb.TransferApiResponse>;
}

interface IMFTTransferServiceService_IgetAllTransferStates extends grpc.MethodDefinition<MFTTransferApi_pb.TransferStateApiRequest, MFTTransferApi_pb.TransferStateResponse> {
  path: '/org.apache.airavata.mft.api.service.MFTTransferService/getAllTransferStates'
  requestStream: false
  responseStream: true
  requestSerialize: grpc.serialize<MFTTransferApi_pb.TransferStateApiRequest>;
  requestDeserialize: grpc.deserialize<MFTTransferApi_pb.TransferStateApiRequest>;
  responseSerialize: grpc.serialize<MFTTransferApi_pb.TransferStateResponse>;
  responseDeserialize: grpc.deserialize<MFTTransferApi_pb.TransferStateResponse>;
}

interface IMFTTransferServiceService_IgetTransferStateSummary extends grpc.MethodDefinition<MFTTransferApi_pb.TransferStateApiRequest, MFTTransferApi_pb.TransferStateSummaryResponse> {
  path: '/org.apache.airavata.mft.api.service.MFTTransferService/getTransferStateSummary'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<MFTTransferApi_pb.TransferStateApiRequest>;
  requestDeserialize: grpc.deserialize<MFTTransferApi_pb.TransferStateApiRequest>;
  responseSerialize: grpc.serialize<MFTTransferApi_pb.TransferStateSummaryResponse>;
  responseDeserialize: grpc.deserialize<MFTTransferApi_pb.TransferStateSummaryResponse>;
}

interface IMFTTransferServiceService_IgetResourceAvailability extends grpc.MethodDefinition<MFTTransferApi_pb.FetchResourceMetadataRequest, MFTTransferApi_pb.ResourceAvailabilityResponse> {
  path: '/org.apache.airavata.mft.api.service.MFTTransferService/getResourceAvailability'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<MFTTransferApi_pb.FetchResourceMetadataRequest>;
  requestDeserialize: grpc.deserialize<MFTTransferApi_pb.FetchResourceMetadataRequest>;
  responseSerialize: grpc.serialize<MFTTransferApi_pb.ResourceAvailabilityResponse>;
  responseDeserialize: grpc.deserialize<MFTTransferApi_pb.ResourceAvailabilityResponse>;
}

interface IMFTTransferServiceService_IresourceMetadata extends grpc.MethodDefinition<MFTTransferApi_pb.FetchResourceMetadataRequest, MFTAgentStubs_pb.ResourceMetadata> {
  path: '/org.apache.airavata.mft.api.service.MFTTransferService/resourceMetadata'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<MFTTransferApi_pb.FetchResourceMetadataRequest>;
  requestDeserialize: grpc.deserialize<MFTTransferApi_pb.FetchResourceMetadataRequest>;
  responseSerialize: grpc.serialize<MFTAgentStubs_pb.ResourceMetadata>;
  responseDeserialize: grpc.deserialize<MFTAgentStubs_pb.ResourceMetadata>;
}

interface IMFTTransferServiceService_IremoveTransfer extends grpc.MethodDefinition<MFTTransferApi_pb.TransferRemoveRequest, MFTTransferApi_pb.TransferRemoveResponse> {
  path: '/org.apache.airavata.mft.api.service.MFTTransferService/removeTransfer'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<MFTTransferApi_pb.TransferRemoveRequest>;
  requestDeserialize: grpc.deserialize<MFTTransferApi_pb.TransferRemoveRequest>;
  responseSerialize: grpc.serialize<MFTTransferApi_pb.TransferRemoveResponse>;
  responseDeserialize: grpc.deserialize<MFTTransferApi_pb.TransferRemoveResponse>;
}

export const MFTTransferServiceService: IMFTTransferServiceService;
export interface IMFTTransferServiceServer extends grpc.UntypedServiceImplementation {
  submitTransfer: grpc.handleUnaryCall<MFTTransferApi_pb.TransferApiRequest, MFTTransferApi_pb.TransferApiResponse>;
  getAllTransferStates: grpc.handleServerStreamingCall<MFTTransferApi_pb.TransferStateApiRequest, MFTTransferApi_pb.TransferStateResponse>;
  getTransferStateSummary: grpc.handleUnaryCall<MFTTransferApi_pb.TransferStateApiRequest, MFTTransferApi_pb.TransferStateSummaryResponse>;
  getResourceAvailability: grpc.handleUnaryCall<MFTTransferApi_pb.FetchResourceMetadataRequest, MFTTransferApi_pb.ResourceAvailabilityResponse>;
  resourceMetadata: grpc.handleUnaryCall<MFTTransferApi_pb.FetchResourceMetadataRequest, MFTAgentStubs_pb.ResourceMetadata>;
  removeTransfer: grpc.handleUnaryCall<MFTTransferApi_pb.TransferRemoveRequest, MFTTransferApi_pb.TransferRemoveResponse>;
}

export interface IMFTTransferServiceClient {
  submitTransfer(request: MFTTransferApi_pb.TransferApiRequest, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferApiResponse) => void): grpc.ClientUnaryCall;
  submitTransfer(request: MFTTransferApi_pb.TransferApiRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferApiResponse) => void): grpc.ClientUnaryCall;
  submitTransfer(request: MFTTransferApi_pb.TransferApiRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferApiResponse) => void): grpc.ClientUnaryCall;
  getAllTransferStates(request: MFTTransferApi_pb.TransferStateApiRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MFTTransferApi_pb.TransferStateResponse>;
  getAllTransferStates(request: MFTTransferApi_pb.TransferStateApiRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MFTTransferApi_pb.TransferStateResponse>;
  getTransferStateSummary(request: MFTTransferApi_pb.TransferStateApiRequest, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferStateSummaryResponse) => void): grpc.ClientUnaryCall;
  getTransferStateSummary(request: MFTTransferApi_pb.TransferStateApiRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferStateSummaryResponse) => void): grpc.ClientUnaryCall;
  getTransferStateSummary(request: MFTTransferApi_pb.TransferStateApiRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferStateSummaryResponse) => void): grpc.ClientUnaryCall;
  getResourceAvailability(request: MFTTransferApi_pb.FetchResourceMetadataRequest, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.ResourceAvailabilityResponse) => void): grpc.ClientUnaryCall;
  getResourceAvailability(request: MFTTransferApi_pb.FetchResourceMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.ResourceAvailabilityResponse) => void): grpc.ClientUnaryCall;
  getResourceAvailability(request: MFTTransferApi_pb.FetchResourceMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.ResourceAvailabilityResponse) => void): grpc.ClientUnaryCall;
  resourceMetadata(request: MFTTransferApi_pb.FetchResourceMetadataRequest, callback: (error: grpc.ServiceError | null, response: MFTAgentStubs_pb.ResourceMetadata) => void): grpc.ClientUnaryCall;
  resourceMetadata(request: MFTTransferApi_pb.FetchResourceMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MFTAgentStubs_pb.ResourceMetadata) => void): grpc.ClientUnaryCall;
  resourceMetadata(request: MFTTransferApi_pb.FetchResourceMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MFTAgentStubs_pb.ResourceMetadata) => void): grpc.ClientUnaryCall;
  removeTransfer(request: MFTTransferApi_pb.TransferRemoveRequest, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferRemoveResponse) => void): grpc.ClientUnaryCall;
  removeTransfer(request: MFTTransferApi_pb.TransferRemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferRemoveResponse) => void): grpc.ClientUnaryCall;
  removeTransfer(request: MFTTransferApi_pb.TransferRemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferRemoveResponse) => void): grpc.ClientUnaryCall;
}

export class MFTTransferServiceClient extends grpc.Client implements IMFTTransferServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public submitTransfer(request: MFTTransferApi_pb.TransferApiRequest, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferApiResponse) => void): grpc.ClientUnaryCall;
  public submitTransfer(request: MFTTransferApi_pb.TransferApiRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferApiResponse) => void): grpc.ClientUnaryCall;
  public submitTransfer(request: MFTTransferApi_pb.TransferApiRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferApiResponse) => void): grpc.ClientUnaryCall;
  public getAllTransferStates(request: MFTTransferApi_pb.TransferStateApiRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MFTTransferApi_pb.TransferStateResponse>;
  public getAllTransferStates(request: MFTTransferApi_pb.TransferStateApiRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MFTTransferApi_pb.TransferStateResponse>;
  public getTransferStateSummary(request: MFTTransferApi_pb.TransferStateApiRequest, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferStateSummaryResponse) => void): grpc.ClientUnaryCall;
  public getTransferStateSummary(request: MFTTransferApi_pb.TransferStateApiRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferStateSummaryResponse) => void): grpc.ClientUnaryCall;
  public getTransferStateSummary(request: MFTTransferApi_pb.TransferStateApiRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferStateSummaryResponse) => void): grpc.ClientUnaryCall;
  public getResourceAvailability(request: MFTTransferApi_pb.FetchResourceMetadataRequest, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.ResourceAvailabilityResponse) => void): grpc.ClientUnaryCall;
  public getResourceAvailability(request: MFTTransferApi_pb.FetchResourceMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.ResourceAvailabilityResponse) => void): grpc.ClientUnaryCall;
  public getResourceAvailability(request: MFTTransferApi_pb.FetchResourceMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.ResourceAvailabilityResponse) => void): grpc.ClientUnaryCall;
  public resourceMetadata(request: MFTTransferApi_pb.FetchResourceMetadataRequest, callback: (error: grpc.ServiceError | null, response: MFTAgentStubs_pb.ResourceMetadata) => void): grpc.ClientUnaryCall;
  public resourceMetadata(request: MFTTransferApi_pb.FetchResourceMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MFTAgentStubs_pb.ResourceMetadata) => void): grpc.ClientUnaryCall;
  public resourceMetadata(request: MFTTransferApi_pb.FetchResourceMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MFTAgentStubs_pb.ResourceMetadata) => void): grpc.ClientUnaryCall;
  public removeTransfer(request: MFTTransferApi_pb.TransferRemoveRequest, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferRemoveResponse) => void): grpc.ClientUnaryCall;
  public removeTransfer(request: MFTTransferApi_pb.TransferRemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferRemoveResponse) => void): grpc.ClientUnaryCall;
  public removeTransfer(request: MFTTransferApi_pb.TransferRemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MFTTransferApi_pb.TransferRemoveResponse) => void): grpc.ClientUnaryCall;
}

