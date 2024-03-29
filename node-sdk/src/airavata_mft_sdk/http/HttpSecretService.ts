/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: http/HttpSecretService.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./HttpCredential";
import * as grpc_1 from "@grpc/grpc-js";
export namespace org.apache.airavata.mft.credential.service.http {
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
    export abstract class UnimplementedHTTPSecretServiceService {
        static definition = {
            getHTTPSecret: {
                path: "/org.apache.airavata.mft.credential.service.http.HTTPSecretService/getHTTPSecret",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretGetRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretGetRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret.deserialize(new Uint8Array(bytes))
            },
            createHTTPSecret: {
                path: "/org.apache.airavata.mft.credential.service.http.HTTPSecretService/createHTTPSecret",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretCreateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretCreateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret.deserialize(new Uint8Array(bytes))
            },
            updateHTTPSecret: {
                path: "/org.apache.airavata.mft.credential.service.http.HTTPSecretService/updateHTTPSecret",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretUpdateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretUpdateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretUpdateResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretUpdateResponse.deserialize(new Uint8Array(bytes))
            },
            deleteHTTPSecret: {
                path: "/org.apache.airavata.mft.credential.service.http.HTTPSecretService/deleteHTTPSecret",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretDeleteRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretDeleteRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretDeleteResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretDeleteResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract getHTTPSecret(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretGetRequest, dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret>): void;
        abstract createHTTPSecret(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretCreateRequest, dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret>): void;
        abstract updateHTTPSecret(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretUpdateRequest, dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretUpdateResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretUpdateResponse>): void;
        abstract deleteHTTPSecret(call: grpc_1.ServerUnaryCall<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretDeleteRequest, dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretDeleteResponse>, callback: grpc_1.sendUnaryData<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretDeleteResponse>): void;
    }
    export class HTTPSecretServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedHTTPSecretServiceService.definition, "HTTPSecretService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        getHTTPSecret: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretGetRequest, dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret> = (message: dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretGetRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret>): grpc_1.ClientUnaryCall => {
            return super.getHTTPSecret(message, metadata, options, callback);
        };
        createHTTPSecret: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretCreateRequest, dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret> = (message: dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretCreateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecret>): grpc_1.ClientUnaryCall => {
            return super.createHTTPSecret(message, metadata, options, callback);
        };
        updateHTTPSecret: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretUpdateRequest, dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretUpdateResponse> = (message: dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretUpdateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretUpdateResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretUpdateResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretUpdateResponse>): grpc_1.ClientUnaryCall => {
            return super.updateHTTPSecret(message, metadata, options, callback);
        };
        deleteHTTPSecret: GrpcUnaryServiceInterface<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretDeleteRequest, dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretDeleteResponse> = (message: dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretDeleteRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretDeleteResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretDeleteResponse>, callback?: grpc_1.requestCallback<dependency_1.org.apache.airavata.mft.credential.stubs.http.HTTPSecretDeleteResponse>): grpc_1.ClientUnaryCall => {
            return super.deleteHTTPSecret(message, metadata, options, callback);
        };
    }
}
