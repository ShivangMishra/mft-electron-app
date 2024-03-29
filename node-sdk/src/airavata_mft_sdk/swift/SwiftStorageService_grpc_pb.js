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
var swift_SwiftStorage_pb = require('../swift/SwiftStorage_pb.js');

function serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorage(arg) {
  if (!(arg instanceof swift_SwiftStorage_pb.SwiftStorage)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorage(buffer_arg) {
  return swift_SwiftStorage_pb.SwiftStorage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageCreateRequest(arg) {
  if (!(arg instanceof swift_SwiftStorage_pb.SwiftStorageCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageCreateRequest(buffer_arg) {
  return swift_SwiftStorage_pb.SwiftStorageCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageDeleteRequest(arg) {
  if (!(arg instanceof swift_SwiftStorage_pb.SwiftStorageDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageDeleteRequest(buffer_arg) {
  return swift_SwiftStorage_pb.SwiftStorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageDeleteResponse(arg) {
  if (!(arg instanceof swift_SwiftStorage_pb.SwiftStorageDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageDeleteResponse(buffer_arg) {
  return swift_SwiftStorage_pb.SwiftStorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageGetRequest(arg) {
  if (!(arg instanceof swift_SwiftStorage_pb.SwiftStorageGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageGetRequest(buffer_arg) {
  return swift_SwiftStorage_pb.SwiftStorageGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageListRequest(arg) {
  if (!(arg instanceof swift_SwiftStorage_pb.SwiftStorageListRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageListRequest(buffer_arg) {
  return swift_SwiftStorage_pb.SwiftStorageListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageListResponse(arg) {
  if (!(arg instanceof swift_SwiftStorage_pb.SwiftStorageListResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageListResponse(buffer_arg) {
  return swift_SwiftStorage_pb.SwiftStorageListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageUpdateRequest(arg) {
  if (!(arg instanceof swift_SwiftStorage_pb.SwiftStorageUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageUpdateRequest(buffer_arg) {
  return swift_SwiftStorage_pb.SwiftStorageUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageUpdateResponse(arg) {
  if (!(arg instanceof swift_SwiftStorage_pb.SwiftStorageUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.swift.storage.SwiftStorageUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageUpdateResponse(buffer_arg) {
  return swift_SwiftStorage_pb.SwiftStorageUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SwiftStorageServiceService = exports.SwiftStorageServiceService = {
  // Storage
//
listSwiftStorage: {
    path: '/org.apache.airavata.mft.resource.service.swift.SwiftStorageService/listSwiftStorage',
    requestStream: false,
    responseStream: false,
    requestType: swift_SwiftStorage_pb.SwiftStorageListRequest,
    responseType: swift_SwiftStorage_pb.SwiftStorageListResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageListRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageListRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageListResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageListResponse,
  },
  getSwiftStorage: {
    path: '/org.apache.airavata.mft.resource.service.swift.SwiftStorageService/getSwiftStorage',
    requestStream: false,
    responseStream: false,
    requestType: swift_SwiftStorage_pb.SwiftStorageGetRequest,
    responseType: swift_SwiftStorage_pb.SwiftStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorage,
  },
  createSwiftStorage: {
    path: '/org.apache.airavata.mft.resource.service.swift.SwiftStorageService/createSwiftStorage',
    requestStream: false,
    responseStream: false,
    requestType: swift_SwiftStorage_pb.SwiftStorageCreateRequest,
    responseType: swift_SwiftStorage_pb.SwiftStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorage,
  },
  updateSwiftStorage: {
    path: '/org.apache.airavata.mft.resource.service.swift.SwiftStorageService/updateSwiftStorage',
    requestStream: false,
    responseStream: false,
    requestType: swift_SwiftStorage_pb.SwiftStorageUpdateRequest,
    responseType: swift_SwiftStorage_pb.SwiftStorageUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageUpdateResponse,
  },
  deleteSwiftStorage: {
    path: '/org.apache.airavata.mft.resource.service.swift.SwiftStorageService/deleteSwiftStorage',
    requestStream: false,
    responseStream: false,
    requestType: swift_SwiftStorage_pb.SwiftStorageDeleteRequest,
    responseType: swift_SwiftStorage_pb.SwiftStorageDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_swift_storage_SwiftStorageDeleteResponse,
  },
};

exports.SwiftStorageServiceClient = grpc.makeGenericClientConstructor(SwiftStorageServiceService);
