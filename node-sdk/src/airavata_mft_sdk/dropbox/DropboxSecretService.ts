/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: dropbox/DropboxSecretService.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./DropboxCredential";
import * as grpc_1 from "@grpc/grpc-js";
export namespace org.apache.airavata.mft.credential.service.dropbox {
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
    export abstract class UnimplementedDropboxSecretServiceService {
        static definition = {
            getDropboxSecret: {
                path: "/org.apache.airavata.mft.credential.service.dropbox.DropboxSecretService/getDropboxSecret",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretGetRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretGetRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret.deserialize(new Uint8Array(bytes))
            },
            createDropboxSecret: {
                path: "/org.apache.airavata.mft.credential.service.dropbox.DropboxSecretService/createDropboxSecret",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretCreateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretCreateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret.deserialize(new Uint8Array(bytes))
            },
            updateDropboxSecret: {
                path: "/org.apache.airavata.mft.credential.service.dropbox.DropboxSecretService/updateDropboxSecret",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretUpdateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretUpdateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretUpdateResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretUpdateResponse.deserialize(new Uint8Array(bytes))
            },
            deleteDropboxSecret: {
                path: "/org.apache.airavata.mft.credential.service.dropbox.DropboxSecretService/deleteDropboxSecret",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretDeleteRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretDeleteRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretDeleteResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretDeleteResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract getDropboxSecret(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretGetRequest, dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret>): void;
        abstract createDropboxSecret(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretCreateRequest, dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret>): void;
        abstract updateDropboxSecret(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretUpdateRequest, dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretUpdateResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretUpdateResponse>): void;
        abstract deleteDropboxSecret(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretDeleteRequest, dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretDeleteResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretDeleteResponse>): void;
    }
    export class DropboxSecretServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedDropboxSecretServiceService.definition, "DropboxSecretService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        getDropboxSecret: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretGetRequest, dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret> = (message: dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretGetRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret>): grpc_1.ClientUnaryCall => {
            return super.getDropboxSecret(message, metadata, options, callback);
        };
        createDropboxSecret: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretCreateRequest, dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret> = (message: dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretCreateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret>): grpc_1.ClientUnaryCall => {
            return super.createDropboxSecret(message, metadata, options, callback);
        };
        updateDropboxSecret: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretUpdateRequest, dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretUpdateResponse> = (message: dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretUpdateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretUpdateResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretUpdateResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretUpdateResponse>): grpc_1.ClientUnaryCall => {
            return super.updateDropboxSecret(message, metadata, options, callback);
        };
        deleteDropboxSecret: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretDeleteRequest, dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretDeleteResponse> = (message: dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretDeleteRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretDeleteResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretDeleteResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretDeleteResponse>): grpc_1.ClientUnaryCall => {
            return super.deleteDropboxSecret(message, metadata, options, callback);
        };
    }
}
