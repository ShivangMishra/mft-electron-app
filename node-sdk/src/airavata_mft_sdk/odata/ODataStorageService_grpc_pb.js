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
var odata_ODataStorage_pb = require('../odata/ODataStorage_pb.js');

function serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorage(arg) {
  if (!(arg instanceof odata_ODataStorage_pb.ODataStorage)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorage(buffer_arg) {
  return odata_ODataStorage_pb.ODataStorage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageCreateRequest(arg) {
  if (!(arg instanceof odata_ODataStorage_pb.ODataStorageCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageCreateRequest(buffer_arg) {
  return odata_ODataStorage_pb.ODataStorageCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageDeleteRequest(arg) {
  if (!(arg instanceof odata_ODataStorage_pb.ODataStorageDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageDeleteRequest(buffer_arg) {
  return odata_ODataStorage_pb.ODataStorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageDeleteResponse(arg) {
  if (!(arg instanceof odata_ODataStorage_pb.ODataStorageDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageDeleteResponse(buffer_arg) {
  return odata_ODataStorage_pb.ODataStorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageGetRequest(arg) {
  if (!(arg instanceof odata_ODataStorage_pb.ODataStorageGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageGetRequest(buffer_arg) {
  return odata_ODataStorage_pb.ODataStorageGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageListRequest(arg) {
  if (!(arg instanceof odata_ODataStorage_pb.ODataStorageListRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageListRequest(buffer_arg) {
  return odata_ODataStorage_pb.ODataStorageListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageListResponse(arg) {
  if (!(arg instanceof odata_ODataStorage_pb.ODataStorageListResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageListResponse(buffer_arg) {
  return odata_ODataStorage_pb.ODataStorageListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageUpdateRequest(arg) {
  if (!(arg instanceof odata_ODataStorage_pb.ODataStorageUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageUpdateRequest(buffer_arg) {
  return odata_ODataStorage_pb.ODataStorageUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageUpdateResponse(arg) {
  if (!(arg instanceof odata_ODataStorage_pb.ODataStorageUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.odata.storage.ODataStorageUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageUpdateResponse(buffer_arg) {
  return odata_ODataStorage_pb.ODataStorageUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ODataStorageServiceService = exports.ODataStorageServiceService = {
  // Storage
//
listODataStorage: {
    path: '/org.apache.airavata.mft.resource.service.odata.ODataStorageService/listODataStorage',
    requestStream: false,
    responseStream: false,
    requestType: odata_ODataStorage_pb.ODataStorageListRequest,
    responseType: odata_ODataStorage_pb.ODataStorageListResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageListRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageListRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageListResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageListResponse,
  },
  getODataStorage: {
    path: '/org.apache.airavata.mft.resource.service.odata.ODataStorageService/getODataStorage',
    requestStream: false,
    responseStream: false,
    requestType: odata_ODataStorage_pb.ODataStorageGetRequest,
    responseType: odata_ODataStorage_pb.ODataStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorage,
  },
  createODataStorage: {
    path: '/org.apache.airavata.mft.resource.service.odata.ODataStorageService/createODataStorage',
    requestStream: false,
    responseStream: false,
    requestType: odata_ODataStorage_pb.ODataStorageCreateRequest,
    responseType: odata_ODataStorage_pb.ODataStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorage,
  },
  updateODataStorage: {
    path: '/org.apache.airavata.mft.resource.service.odata.ODataStorageService/updateODataStorage',
    requestStream: false,
    responseStream: false,
    requestType: odata_ODataStorage_pb.ODataStorageUpdateRequest,
    responseType: odata_ODataStorage_pb.ODataStorageUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageUpdateResponse,
  },
  deleteODataStorage: {
    path: '/org.apache.airavata.mft.resource.service.odata.ODataStorageService/deleteODataStorage',
    requestStream: false,
    responseStream: false,
    requestType: odata_ODataStorage_pb.ODataStorageDeleteRequest,
    responseType: odata_ODataStorage_pb.ODataStorageDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_odata_storage_ODataStorageDeleteResponse,
  },
};

exports.ODataStorageServiceClient = grpc.makeGenericClientConstructor(ODataStorageServiceService);
