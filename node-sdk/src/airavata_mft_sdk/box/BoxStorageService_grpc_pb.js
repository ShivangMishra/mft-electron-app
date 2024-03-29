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
var box_BoxStorage_pb = require('../box/BoxStorage_pb.js');

function serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorage(arg) {
  if (!(arg instanceof box_BoxStorage_pb.BoxStorage)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.box.storage.BoxStorage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorage(buffer_arg) {
  return box_BoxStorage_pb.BoxStorage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageCreateRequest(arg) {
  if (!(arg instanceof box_BoxStorage_pb.BoxStorageCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.box.storage.BoxStorageCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageCreateRequest(buffer_arg) {
  return box_BoxStorage_pb.BoxStorageCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageDeleteRequest(arg) {
  if (!(arg instanceof box_BoxStorage_pb.BoxStorageDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.box.storage.BoxStorageDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageDeleteRequest(buffer_arg) {
  return box_BoxStorage_pb.BoxStorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageDeleteResponse(arg) {
  if (!(arg instanceof box_BoxStorage_pb.BoxStorageDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.box.storage.BoxStorageDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageDeleteResponse(buffer_arg) {
  return box_BoxStorage_pb.BoxStorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageGetRequest(arg) {
  if (!(arg instanceof box_BoxStorage_pb.BoxStorageGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.box.storage.BoxStorageGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageGetRequest(buffer_arg) {
  return box_BoxStorage_pb.BoxStorageGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageListRequest(arg) {
  if (!(arg instanceof box_BoxStorage_pb.BoxStorageListRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.box.storage.BoxStorageListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageListRequest(buffer_arg) {
  return box_BoxStorage_pb.BoxStorageListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageListResponse(arg) {
  if (!(arg instanceof box_BoxStorage_pb.BoxStorageListResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.box.storage.BoxStorageListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageListResponse(buffer_arg) {
  return box_BoxStorage_pb.BoxStorageListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageUpdateRequest(arg) {
  if (!(arg instanceof box_BoxStorage_pb.BoxStorageUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.box.storage.BoxStorageUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageUpdateRequest(buffer_arg) {
  return box_BoxStorage_pb.BoxStorageUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageUpdateResponse(arg) {
  if (!(arg instanceof box_BoxStorage_pb.BoxStorageUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.box.storage.BoxStorageUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageUpdateResponse(buffer_arg) {
  return box_BoxStorage_pb.BoxStorageUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BoxStorageServiceService = exports.BoxStorageServiceService = {
  // Storage
listBoxStorage: {
    path: '/org.apache.airavata.mft.resource.service.box.BoxStorageService/listBoxStorage',
    requestStream: false,
    responseStream: false,
    requestType: box_BoxStorage_pb.BoxStorageListRequest,
    responseType: box_BoxStorage_pb.BoxStorageListResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageListRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageListRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageListResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageListResponse,
  },
  getBoxStorage: {
    path: '/org.apache.airavata.mft.resource.service.box.BoxStorageService/getBoxStorage',
    requestStream: false,
    responseStream: false,
    requestType: box_BoxStorage_pb.BoxStorageGetRequest,
    responseType: box_BoxStorage_pb.BoxStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorage,
  },
  createBoxStorage: {
    path: '/org.apache.airavata.mft.resource.service.box.BoxStorageService/createBoxStorage',
    requestStream: false,
    responseStream: false,
    requestType: box_BoxStorage_pb.BoxStorageCreateRequest,
    responseType: box_BoxStorage_pb.BoxStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorage,
  },
  updateBoxStorage: {
    path: '/org.apache.airavata.mft.resource.service.box.BoxStorageService/updateBoxStorage',
    requestStream: false,
    responseStream: false,
    requestType: box_BoxStorage_pb.BoxStorageUpdateRequest,
    responseType: box_BoxStorage_pb.BoxStorageUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageUpdateResponse,
  },
  deleteBoxStorage: {
    path: '/org.apache.airavata.mft.resource.service.box.BoxStorageService/deleteBoxStorage',
    requestStream: false,
    responseStream: false,
    requestType: box_BoxStorage_pb.BoxStorageDeleteRequest,
    responseType: box_BoxStorage_pb.BoxStorageDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_box_storage_BoxStorageDeleteResponse,
  },
};

exports.BoxStorageServiceClient = grpc.makeGenericClientConstructor(BoxStorageServiceService);
