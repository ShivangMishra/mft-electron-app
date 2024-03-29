/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: odata/ODataStorageService.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./ODataStorage";
import * as grpc_1 from "@grpc/grpc-js";
export namespace org.apache.airavata.mft.resource.service.odata {
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedODataStorageServiceService {
        static definition = {
            listODataStorage: {
                path: "/org.apache.airavata.mft.resource.service.odata.ODataStorageService/listODataStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageListRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageListRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageListResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageListResponse.deserialize(new Uint8Array(bytes))
            },
            getODataStorage: {
                path: "/org.apache.airavata.mft.resource.service.odata.ODataStorageService/getODataStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageGetRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageGetRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage.deserialize(new Uint8Array(bytes))
            },
            createODataStorage: {
                path: "/org.apache.airavata.mft.resource.service.odata.ODataStorageService/createODataStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageCreateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageCreateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage.deserialize(new Uint8Array(bytes))
            },
            updateODataStorage: {
                path: "/org.apache.airavata.mft.resource.service.odata.ODataStorageService/updateODataStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageUpdateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageUpdateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageUpdateResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageUpdateResponse.deserialize(new Uint8Array(bytes))
            },
            deleteODataStorage: {
                path: "/org.apache.airavata.mft.resource.service.odata.ODataStorageService/deleteODataStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageDeleteRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageDeleteRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageDeleteResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageDeleteResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract listODataStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageListRequest, dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageListResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageListResponse>): void;
        abstract getODataStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageGetRequest, dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage>): void;
        abstract createODataStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageCreateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage>): void;
        abstract updateODataStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageUpdateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageUpdateResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageUpdateResponse>): void;
        abstract deleteODataStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageDeleteRequest, dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageDeleteResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageDeleteResponse>): void;
    }
    export class ODataStorageServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedODataStorageServiceService.definition, "ODataStorageService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        listODataStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageListRequest, dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageListResponse> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageListRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageListResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageListResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageListResponse>): grpc_1.ClientUnaryCall => {
            return super.listODataStorage(message, metadata, options, callback);
        };
        getODataStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageGetRequest, dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageGetRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage>): grpc_1.ClientUnaryCall => {
            return super.getODataStorage(message, metadata, options, callback);
        };
        createODataStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageCreateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageCreateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage>): grpc_1.ClientUnaryCall => {
            return super.createODataStorage(message, metadata, options, callback);
        };
        updateODataStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageUpdateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageUpdateResponse> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageUpdateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageUpdateResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageUpdateResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageUpdateResponse>): grpc_1.ClientUnaryCall => {
            return super.updateODataStorage(message, metadata, options, callback);
        };
        deleteODataStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageDeleteRequest, dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageDeleteResponse> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageDeleteRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageDeleteResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageDeleteResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageDeleteResponse>): grpc_1.ClientUnaryCall => {
            return super.deleteODataStorage(message, metadata, options, callback);
        };
    }
}