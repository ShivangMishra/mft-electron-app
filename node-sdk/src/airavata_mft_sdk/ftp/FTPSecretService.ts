/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: ftp/FTPSecretService.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./FTPCredential";
import * as grpc_1 from "@grpc/grpc-js";
export namespace org.apache.airavata.mft.credential.service.ftp {
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
    export abstract class UnimplementedFTPSecretServiceService {
        static definition = {
            getFTPSecret: {
                path: "/org.apache.airavata.mft.credential.service.ftp.FTPSecretService/getFTPSecret",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretGetRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretGetRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret.deserialize(new Uint8Array(bytes))
            },
            createFTPSecret: {
                path: "/org.apache.airavata.mft.credential.service.ftp.FTPSecretService/createFTPSecret",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretCreateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretCreateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret.deserialize(new Uint8Array(bytes))
            },
            updateFTPSecret: {
                path: "/org.apache.airavata.mft.credential.service.ftp.FTPSecretService/updateFTPSecret",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretUpdateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretUpdateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretUpdateResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretUpdateResponse.deserialize(new Uint8Array(bytes))
            },
            deleteFTPSecret: {
                path: "/org.apache.airavata.mft.credential.service.ftp.FTPSecretService/deleteFTPSecret",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretDeleteRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretDeleteRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretDeleteResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretDeleteResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract getFTPSecret(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretGetRequest, dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret>): void;
        abstract createFTPSecret(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretCreateRequest, dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret>): void;
        abstract updateFTPSecret(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretUpdateRequest, dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretUpdateResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretUpdateResponse>): void;
        abstract deleteFTPSecret(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretDeleteRequest, dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretDeleteResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretDeleteResponse>): void;
    }
    export class FTPSecretServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedFTPSecretServiceService.definition, "FTPSecretService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        getFTPSecret: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretGetRequest, dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret> = (message: dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretGetRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret>): grpc_1.ClientUnaryCall => {
            return super.getFTPSecret(message, metadata, options, callback);
        };
        createFTPSecret: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretCreateRequest, dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret> = (message: dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretCreateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecret>): grpc_1.ClientUnaryCall => {
            return super.createFTPSecret(message, metadata, options, callback);
        };
        updateFTPSecret: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretUpdateRequest, dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretUpdateResponse> = (message: dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretUpdateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretUpdateResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretUpdateResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretUpdateResponse>): grpc_1.ClientUnaryCall => {
            return super.updateFTPSecret(message, metadata, options, callback);
        };
        deleteFTPSecret: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretDeleteRequest, dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretDeleteResponse> = (message: dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretDeleteRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretDeleteResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretDeleteResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.ftp.FTPSecretDeleteResponse>): grpc_1.ClientUnaryCall => {
            return super.deleteFTPSecret(message, metadata, options, callback);
        };
    }
}