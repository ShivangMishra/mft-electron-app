/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: local/LocalStorageService.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./LocalStorage";
import * as grpc_1 from "@grpc/grpc-js";
export namespace org.apache.airavata.mft.resource.service.local {
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
    export abstract class UnimplementedLocalStorageServiceService {
        static definition = {
            listLocalStorage: {
                path: "/org.apache.airavata.mft.resource.service.local.LocalStorageService/listLocalStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageListRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageListRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageListResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageListResponse.deserialize(new Uint8Array(bytes))
            },
            getLocalStorage: {
                path: "/org.apache.airavata.mft.resource.service.local.LocalStorageService/getLocalStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageGetRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageGetRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage.deserialize(new Uint8Array(bytes))
            },
            createLocalStorage: {
                path: "/org.apache.airavata.mft.resource.service.local.LocalStorageService/createLocalStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageCreateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageCreateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage.deserialize(new Uint8Array(bytes))
            },
            updateLocalStorage: {
                path: "/org.apache.airavata.mft.resource.service.local.LocalStorageService/updateLocalStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageUpdateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageUpdateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageUpdateResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageUpdateResponse.deserialize(new Uint8Array(bytes))
            },
            deleteLocalStorage: {
                path: "/org.apache.airavata.mft.resource.service.local.LocalStorageService/deleteLocalStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageDeleteRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageDeleteRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageDeleteResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageDeleteResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract listLocalStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageListRequest, dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageListResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageListResponse>): void;
        abstract getLocalStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageGetRequest, dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage>): void;
        abstract createLocalStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageCreateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage>): void;
        abstract updateLocalStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageUpdateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageUpdateResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageUpdateResponse>): void;
        abstract deleteLocalStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageDeleteRequest, dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageDeleteResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageDeleteResponse>): void;
    }
    export class LocalStorageServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedLocalStorageServiceService.definition, "LocalStorageService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        listLocalStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageListRequest, dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageListResponse> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageListRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageListResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageListResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageListResponse>): grpc_1.ClientUnaryCall => {
            return super.listLocalStorage(message, metadata, options, callback);
        };
        getLocalStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageGetRequest, dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageGetRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage>): grpc_1.ClientUnaryCall => {
            return super.getLocalStorage(message, metadata, options, callback);
        };
        createLocalStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageCreateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageCreateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage>): grpc_1.ClientUnaryCall => {
            return super.createLocalStorage(message, metadata, options, callback);
        };
        updateLocalStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageUpdateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageUpdateResponse> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageUpdateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageUpdateResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageUpdateResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageUpdateResponse>): grpc_1.ClientUnaryCall => {
            return super.updateLocalStorage(message, metadata, options, callback);
        };
        deleteLocalStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageDeleteRequest, dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageDeleteResponse> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageDeleteRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageDeleteResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageDeleteResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageDeleteResponse>): grpc_1.ClientUnaryCall => {
            return super.deleteLocalStorage(message, metadata, options, callback);
        };
    }
}
