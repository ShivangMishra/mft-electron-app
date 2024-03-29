/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: ftp/FTPStorageService.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./FTPStorage";
import * as grpc_1 from "@grpc/grpc-js";
export namespace org.apache.airavata.mft.resource.service.ftp {
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
    export abstract class UnimplementedFTPStorageServiceService {
        static definition = {
            listFTPStorage: {
                path: "/org.apache.airavata.mft.resource.service.ftp.FTPStorageService/listFTPStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageListRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageListRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageListResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageListResponse.deserialize(new Uint8Array(bytes))
            },
            getFTPStorage: {
                path: "/org.apache.airavata.mft.resource.service.ftp.FTPStorageService/getFTPStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageGetRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageGetRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage.deserialize(new Uint8Array(bytes))
            },
            createFTPStorage: {
                path: "/org.apache.airavata.mft.resource.service.ftp.FTPStorageService/createFTPStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageCreateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageCreateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage.deserialize(new Uint8Array(bytes))
            },
            updateFTPStorage: {
                path: "/org.apache.airavata.mft.resource.service.ftp.FTPStorageService/updateFTPStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageUpdateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageUpdateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageUpdateResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageUpdateResponse.deserialize(new Uint8Array(bytes))
            },
            deleteFTPStorage: {
                path: "/org.apache.airavata.mft.resource.service.ftp.FTPStorageService/deleteFTPStorage",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageDeleteRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageDeleteRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageDeleteResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageDeleteResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract listFTPStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageListRequest, dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageListResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageListResponse>): void;
        abstract getFTPStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageGetRequest, dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage>): void;
        abstract createFTPStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageCreateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage>): void;
        abstract updateFTPStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageUpdateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageUpdateResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageUpdateResponse>): void;
        abstract deleteFTPStorage(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageDeleteRequest, dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageDeleteResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageDeleteResponse>): void;
    }
    export class FTPStorageServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedFTPStorageServiceService.definition, "FTPStorageService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        listFTPStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageListRequest, dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageListResponse> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageListRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageListResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageListResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageListResponse>): grpc_1.ClientUnaryCall => {
            return super.listFTPStorage(message, metadata, options, callback);
        };
        getFTPStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageGetRequest, dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageGetRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage>): grpc_1.ClientUnaryCall => {
            return super.getFTPStorage(message, metadata, options, callback);
        };
        createFTPStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageCreateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageCreateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage>): grpc_1.ClientUnaryCall => {
            return super.createFTPStorage(message, metadata, options, callback);
        };
        updateFTPStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageUpdateRequest, dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageUpdateResponse> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageUpdateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageUpdateResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageUpdateResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageUpdateResponse>): grpc_1.ClientUnaryCall => {
            return super.updateFTPStorage(message, metadata, options, callback);
        };
        deleteFTPStorage: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageDeleteRequest, dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageDeleteResponse> = (message: dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageDeleteRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageDeleteResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageDeleteResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageDeleteResponse>): grpc_1.ClientUnaryCall => {
            return super.deleteFTPStorage(message, metadata, options, callback);
        };
    }
}
