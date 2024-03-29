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
var gcs_GCSStorage_pb = require('../gcs/GCSStorage_pb.js');

function serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorage(arg) {
  if (!(arg instanceof gcs_GCSStorage_pb.GCSStorage)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.gcs.storage.GCSStorage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorage(buffer_arg) {
  return gcs_GCSStorage_pb.GCSStorage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageCreateRequest(arg) {
  if (!(arg instanceof gcs_GCSStorage_pb.GCSStorageCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.gcs.storage.GCSStorageCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageCreateRequest(buffer_arg) {
  return gcs_GCSStorage_pb.GCSStorageCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageDeleteRequest(arg) {
  if (!(arg instanceof gcs_GCSStorage_pb.GCSStorageDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.gcs.storage.GCSStorageDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageDeleteRequest(buffer_arg) {
  return gcs_GCSStorage_pb.GCSStorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageDeleteResponse(arg) {
  if (!(arg instanceof gcs_GCSStorage_pb.GCSStorageDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.gcs.storage.GCSStorageDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageDeleteResponse(buffer_arg) {
  return gcs_GCSStorage_pb.GCSStorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageGetRequest(arg) {
  if (!(arg instanceof gcs_GCSStorage_pb.GCSStorageGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.gcs.storage.GCSStorageGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageGetRequest(buffer_arg) {
  return gcs_GCSStorage_pb.GCSStorageGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageListRequest(arg) {
  if (!(arg instanceof gcs_GCSStorage_pb.GCSStorageListRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.gcs.storage.GCSStorageListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageListRequest(buffer_arg) {
  return gcs_GCSStorage_pb.GCSStorageListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageListResponse(arg) {
  if (!(arg instanceof gcs_GCSStorage_pb.GCSStorageListResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.gcs.storage.GCSStorageListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageListResponse(buffer_arg) {
  return gcs_GCSStorage_pb.GCSStorageListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageUpdateRequest(arg) {
  if (!(arg instanceof gcs_GCSStorage_pb.GCSStorageUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.gcs.storage.GCSStorageUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageUpdateRequest(buffer_arg) {
  return gcs_GCSStorage_pb.GCSStorageUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageUpdateResponse(arg) {
  if (!(arg instanceof gcs_GCSStorage_pb.GCSStorageUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.gcs.storage.GCSStorageUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageUpdateResponse(buffer_arg) {
  return gcs_GCSStorage_pb.GCSStorageUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GCSStorageServiceService = exports.GCSStorageServiceService = {
  listGCSStorage: {
    path: '/org.apache.airavata.mft.resource.service.gcs.GCSStorageService/listGCSStorage',
    requestStream: false,
    responseStream: false,
    requestType: gcs_GCSStorage_pb.GCSStorageListRequest,
    responseType: gcs_GCSStorage_pb.GCSStorageListResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageListRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageListRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageListResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageListResponse,
  },
  getGCSStorage: {
    path: '/org.apache.airavata.mft.resource.service.gcs.GCSStorageService/getGCSStorage',
    requestStream: false,
    responseStream: false,
    requestType: gcs_GCSStorage_pb.GCSStorageGetRequest,
    responseType: gcs_GCSStorage_pb.GCSStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorage,
  },
  createGCSStorage: {
    path: '/org.apache.airavata.mft.resource.service.gcs.GCSStorageService/createGCSStorage',
    requestStream: false,
    responseStream: false,
    requestType: gcs_GCSStorage_pb.GCSStorageCreateRequest,
    responseType: gcs_GCSStorage_pb.GCSStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorage,
  },
  updateGCSStorage: {
    path: '/org.apache.airavata.mft.resource.service.gcs.GCSStorageService/updateGCSStorage',
    requestStream: false,
    responseStream: false,
    requestType: gcs_GCSStorage_pb.GCSStorageUpdateRequest,
    responseType: gcs_GCSStorage_pb.GCSStorageUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageUpdateResponse,
  },
  deleteGCSStorage: {
    path: '/org.apache.airavata.mft.resource.service.gcs.GCSStorageService/deleteGCSStorage',
    requestStream: false,
    responseStream: false,
    requestType: gcs_GCSStorage_pb.GCSStorageDeleteRequest,
    responseType: gcs_GCSStorage_pb.GCSStorageDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_gcs_storage_GCSStorageDeleteResponse,
  },
};

exports.GCSStorageServiceClient = grpc.makeGenericClientConstructor(GCSStorageServiceService);
