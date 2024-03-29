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
var local_LocalStorage_pb = require('../local/LocalStorage_pb.js');

function serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorage(arg) {
  if (!(arg instanceof local_LocalStorage_pb.LocalStorage)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.local.storage.LocalStorage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorage(buffer_arg) {
  return local_LocalStorage_pb.LocalStorage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageCreateRequest(arg) {
  if (!(arg instanceof local_LocalStorage_pb.LocalStorageCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageCreateRequest(buffer_arg) {
  return local_LocalStorage_pb.LocalStorageCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageDeleteRequest(arg) {
  if (!(arg instanceof local_LocalStorage_pb.LocalStorageDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageDeleteRequest(buffer_arg) {
  return local_LocalStorage_pb.LocalStorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageDeleteResponse(arg) {
  if (!(arg instanceof local_LocalStorage_pb.LocalStorageDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageDeleteResponse(buffer_arg) {
  return local_LocalStorage_pb.LocalStorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageGetRequest(arg) {
  if (!(arg instanceof local_LocalStorage_pb.LocalStorageGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageGetRequest(buffer_arg) {
  return local_LocalStorage_pb.LocalStorageGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageListRequest(arg) {
  if (!(arg instanceof local_LocalStorage_pb.LocalStorageListRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageListRequest(buffer_arg) {
  return local_LocalStorage_pb.LocalStorageListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageListResponse(arg) {
  if (!(arg instanceof local_LocalStorage_pb.LocalStorageListResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageListResponse(buffer_arg) {
  return local_LocalStorage_pb.LocalStorageListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageUpdateRequest(arg) {
  if (!(arg instanceof local_LocalStorage_pb.LocalStorageUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageUpdateRequest(buffer_arg) {
  return local_LocalStorage_pb.LocalStorageUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageUpdateResponse(arg) {
  if (!(arg instanceof local_LocalStorage_pb.LocalStorageUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.local.storage.LocalStorageUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageUpdateResponse(buffer_arg) {
  return local_LocalStorage_pb.LocalStorageUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LocalStorageServiceService = exports.LocalStorageServiceService = {
  // Storage
listLocalStorage: {
    path: '/org.apache.airavata.mft.resource.service.local.LocalStorageService/listLocalStorage',
    requestStream: false,
    responseStream: false,
    requestType: local_LocalStorage_pb.LocalStorageListRequest,
    responseType: local_LocalStorage_pb.LocalStorageListResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageListRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageListRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageListResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageListResponse,
  },
  getLocalStorage: {
    path: '/org.apache.airavata.mft.resource.service.local.LocalStorageService/getLocalStorage',
    requestStream: false,
    responseStream: false,
    requestType: local_LocalStorage_pb.LocalStorageGetRequest,
    responseType: local_LocalStorage_pb.LocalStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorage,
  },
  createLocalStorage: {
    path: '/org.apache.airavata.mft.resource.service.local.LocalStorageService/createLocalStorage',
    requestStream: false,
    responseStream: false,
    requestType: local_LocalStorage_pb.LocalStorageCreateRequest,
    responseType: local_LocalStorage_pb.LocalStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorage,
  },
  updateLocalStorage: {
    path: '/org.apache.airavata.mft.resource.service.local.LocalStorageService/updateLocalStorage',
    requestStream: false,
    responseStream: false,
    requestType: local_LocalStorage_pb.LocalStorageUpdateRequest,
    responseType: local_LocalStorage_pb.LocalStorageUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageUpdateResponse,
  },
  deleteLocalStorage: {
    path: '/org.apache.airavata.mft.resource.service.local.LocalStorageService/deleteLocalStorage',
    requestStream: false,
    responseStream: false,
    requestType: local_LocalStorage_pb.LocalStorageDeleteRequest,
    responseType: local_LocalStorage_pb.LocalStorageDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_local_storage_LocalStorageDeleteResponse,
  },
};

exports.LocalStorageServiceClient = grpc.makeGenericClientConstructor(LocalStorageServiceService);
