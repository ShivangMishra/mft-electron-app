// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Licensed to the Apache Software Foundation (ASF) under one or more
// contributor license agreements.  See the NOTICE file distributed with
// this work for additional information regarding copyright ownership.
// The ASF licenses this file to You under the Apache License, Version 2.0
// (the "License"); you may not use this file except in compliance with
// the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var http_HTTPStorage_pb = require('../http/HTTPStorage_pb.js');

function serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorage(arg) {
  if (!(arg instanceof http_HTTPStorage_pb.HTTPStorage)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.http.storage.HTTPStorage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorage(buffer_arg) {
  return http_HTTPStorage_pb.HTTPStorage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageCreateRequest(arg) {
  if (!(arg instanceof http_HTTPStorage_pb.HTTPStorageCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.http.storage.HTTPStorageCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageCreateRequest(buffer_arg) {
  return http_HTTPStorage_pb.HTTPStorageCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageDeleteRequest(arg) {
  if (!(arg instanceof http_HTTPStorage_pb.HTTPStorageDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.http.storage.HTTPStorageDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageDeleteRequest(buffer_arg) {
  return http_HTTPStorage_pb.HTTPStorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageDeleteResponse(arg) {
  if (!(arg instanceof http_HTTPStorage_pb.HTTPStorageDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.http.storage.HTTPStorageDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageDeleteResponse(buffer_arg) {
  return http_HTTPStorage_pb.HTTPStorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageGetRequest(arg) {
  if (!(arg instanceof http_HTTPStorage_pb.HTTPStorageGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.http.storage.HTTPStorageGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageGetRequest(buffer_arg) {
  return http_HTTPStorage_pb.HTTPStorageGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageListRequest(arg) {
  if (!(arg instanceof http_HTTPStorage_pb.HTTPStorageListRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.http.storage.HTTPStorageListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageListRequest(buffer_arg) {
  return http_HTTPStorage_pb.HTTPStorageListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageListResponse(arg) {
  if (!(arg instanceof http_HTTPStorage_pb.HTTPStorageListResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.http.storage.HTTPStorageListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageListResponse(buffer_arg) {
  return http_HTTPStorage_pb.HTTPStorageListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageUpdateRequest(arg) {
  if (!(arg instanceof http_HTTPStorage_pb.HTTPStorageUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.http.storage.HTTPStorageUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageUpdateRequest(buffer_arg) {
  return http_HTTPStorage_pb.HTTPStorageUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageUpdateResponse(arg) {
  if (!(arg instanceof http_HTTPStorage_pb.HTTPStorageUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.http.storage.HTTPStorageUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageUpdateResponse(buffer_arg) {
  return http_HTTPStorage_pb.HTTPStorageUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HTTPStorageServiceService = exports.HTTPStorageServiceService = {
  // Storage
listHTTPStorage: {
    path: '/org.apache.airavata.mft.resource.service.http.HTTPStorageService/listHTTPStorage',
    requestStream: false,
    responseStream: false,
    requestType: http_HTTPStorage_pb.HTTPStorageListRequest,
    responseType: http_HTTPStorage_pb.HTTPStorageListResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageListRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageListRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageListResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageListResponse,
  },
  getHTTPStorage: {
    path: '/org.apache.airavata.mft.resource.service.http.HTTPStorageService/getHTTPStorage',
    requestStream: false,
    responseStream: false,
    requestType: http_HTTPStorage_pb.HTTPStorageGetRequest,
    responseType: http_HTTPStorage_pb.HTTPStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorage,
  },
  createHTTPStorage: {
    path: '/org.apache.airavata.mft.resource.service.http.HTTPStorageService/createHTTPStorage',
    requestStream: false,
    responseStream: false,
    requestType: http_HTTPStorage_pb.HTTPStorageCreateRequest,
    responseType: http_HTTPStorage_pb.HTTPStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorage,
  },
  updateHTTPStorage: {
    path: '/org.apache.airavata.mft.resource.service.http.HTTPStorageService/updateHTTPStorage',
    requestStream: false,
    responseStream: false,
    requestType: http_HTTPStorage_pb.HTTPStorageUpdateRequest,
    responseType: http_HTTPStorage_pb.HTTPStorageUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageUpdateResponse,
  },
  deleteHTTPStorage: {
    path: '/org.apache.airavata.mft.resource.service.http.HTTPStorageService/deleteHTTPStorage',
    requestStream: false,
    responseStream: false,
    requestType: http_HTTPStorage_pb.HTTPStorageDeleteRequest,
    responseType: http_HTTPStorage_pb.HTTPStorageDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_http_storage_HTTPStorageDeleteResponse,
  },
};

exports.HTTPStorageServiceClient = grpc.makeGenericClientConstructor(HTTPStorageServiceService);
