/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: swift/SwiftStorageService.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./SwiftStorage";
import * as grpc_1 from "@grpc/grpc-js";
export namespace org.apache.airavata.mft.resource.service.swift {
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
    export abstract class UnimplementedSwiftStorageServiceService {
        static definition = {
            listSwiftStorage: {
                path: "/org.apache.airavata.mft.resource.service.swift.SwiftStorageService/listSwiftStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageListRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageListRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageListResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageListResponse.deserialize(new Uint8Array(bytes))
            },
            getSwiftStorage: {
                path: "/org.apache.airavata.mft.resource.service.swift.SwiftStorageService/getSwiftStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageGetRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageGetRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage.deserialize(new Uint8Array(bytes))
            },
            createSwiftStorage: {
                path: "/org.apache.airavata.mft.resource.service.swift.SwiftStorageService/createSwiftStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageCreateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageCreateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage.deserialize(new Uint8Array(bytes))
            },
            updateSwiftStorage: {
                path: "/org.apache.airavata.mft.resource.service.swift.SwiftStorageService/updateSwiftStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageUpdateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageUpdateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageUpdateResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageUpdateResponse.deserialize(new Uint8Array(bytes))
            },
            deleteSwiftStorage: {
                path: "/org.apache.airavata.mft.resource.service.swift.SwiftStorageService/deleteSwiftStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageDeleteRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageDeleteRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageDeleteResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageDeleteResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract listSwiftStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageListRequest, dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageListResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageListResponse>): void;
        abstract getSwiftStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageGetRequest, dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage>): void;
        abstract createSwiftStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageCreateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage>): void;
        abstract updateSwiftStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageUpdateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageUpdateResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageUpdateResponse>): void;
        abstract deleteSwiftStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageDeleteRequest, dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageDeleteResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageDeleteResponse>): void;
    }
    export class SwiftStorageServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedSwiftStorageServiceService.definition, "SwiftStorageService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        listSwiftStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageListRequest, dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageListResponse> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageListRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageListResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageListResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageListResponse>): grpc_1.ClientUnaryCall => {
            return super.listSwiftStorage(message, metadata, options, callback);
        };
        getSwiftStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageGetRequest, dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageGetRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage>): grpc_1.ClientUnaryCall => {
            return super.getSwiftStorage(message, metadata, options, callback);
        };
        createSwiftStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageCreateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageCreateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage>): grpc_1.ClientUnaryCall => {
            return super.createSwiftStorage(message, metadata, options, callback);
        };
        updateSwiftStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageUpdateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageUpdateResponse> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageUpdateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageUpdateResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageUpdateResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageUpdateResponse>): grpc_1.ClientUnaryCall => {
            return super.updateSwiftStorage(message, metadata, options, callback);
        };
        deleteSwiftStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageDeleteRequest, dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageDeleteResponse> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageDeleteRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageDeleteResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageDeleteResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageDeleteResponse>): grpc_1.ClientUnaryCall => {
            return super.deleteSwiftStorage(message, metadata, options, callback);
        };
    }
}
