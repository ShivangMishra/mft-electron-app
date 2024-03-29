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
var s3_S3Storage_pb = require('../s3/S3Storage_pb.js');

function serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3Storage(arg) {
  if (!(arg instanceof s3_S3Storage_pb.S3Storage)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.s3.storage.S3Storage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3Storage(buffer_arg) {
  return s3_S3Storage_pb.S3Storage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageCreateRequest(arg) {
  if (!(arg instanceof s3_S3Storage_pb.S3StorageCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.s3.storage.S3StorageCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageCreateRequest(buffer_arg) {
  return s3_S3Storage_pb.S3StorageCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageDeleteRequest(arg) {
  if (!(arg instanceof s3_S3Storage_pb.S3StorageDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.s3.storage.S3StorageDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageDeleteRequest(buffer_arg) {
  return s3_S3Storage_pb.S3StorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageDeleteResponse(arg) {
  if (!(arg instanceof s3_S3Storage_pb.S3StorageDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.s3.storage.S3StorageDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageDeleteResponse(buffer_arg) {
  return s3_S3Storage_pb.S3StorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageGetRequest(arg) {
  if (!(arg instanceof s3_S3Storage_pb.S3StorageGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.s3.storage.S3StorageGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageGetRequest(buffer_arg) {
  return s3_S3Storage_pb.S3StorageGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageListRequest(arg) {
  if (!(arg instanceof s3_S3Storage_pb.S3StorageListRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.s3.storage.S3StorageListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageListRequest(buffer_arg) {
  return s3_S3Storage_pb.S3StorageListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageListResponse(arg) {
  if (!(arg instanceof s3_S3Storage_pb.S3StorageListResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.s3.storage.S3StorageListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageListResponse(buffer_arg) {
  return s3_S3Storage_pb.S3StorageListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageUpdateRequest(arg) {
  if (!(arg instanceof s3_S3Storage_pb.S3StorageUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.s3.storage.S3StorageUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageUpdateRequest(buffer_arg) {
  return s3_S3Storage_pb.S3StorageUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageUpdateResponse(arg) {
  if (!(arg instanceof s3_S3Storage_pb.S3StorageUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.s3.storage.S3StorageUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageUpdateResponse(buffer_arg) {
  return s3_S3Storage_pb.S3StorageUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var S3StorageServiceService = exports.S3StorageServiceService = {
  // Storage
listS3Storage: {
    path: '/org.apache.airavata.mft.resource.service.s3.S3StorageService/listS3Storage',
    requestStream: false,
    responseStream: false,
    requestType: s3_S3Storage_pb.S3StorageListRequest,
    responseType: s3_S3Storage_pb.S3StorageListResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageListRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageListRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageListResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageListResponse,
  },
  getS3Storage: {
    path: '/org.apache.airavata.mft.resource.service.s3.S3StorageService/getS3Storage',
    requestStream: false,
    responseStream: false,
    requestType: s3_S3Storage_pb.S3StorageGetRequest,
    responseType: s3_S3Storage_pb.S3Storage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3Storage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3Storage,
  },
  createS3Storage: {
    path: '/org.apache.airavata.mft.resource.service.s3.S3StorageService/createS3Storage',
    requestStream: false,
    responseStream: false,
    requestType: s3_S3Storage_pb.S3StorageCreateRequest,
    responseType: s3_S3Storage_pb.S3Storage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3Storage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3Storage,
  },
  updateS3Storage: {
    path: '/org.apache.airavata.mft.resource.service.s3.S3StorageService/updateS3Storage',
    requestStream: false,
    responseStream: false,
    requestType: s3_S3Storage_pb.S3StorageUpdateRequest,
    responseType: s3_S3Storage_pb.S3StorageUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageUpdateResponse,
  },
  deleteS3Storage: {
    path: '/org.apache.airavata.mft.resource.service.s3.S3StorageService/deleteS3Storage',
    requestStream: false,
    responseStream: false,
    requestType: s3_S3Storage_pb.S3StorageDeleteRequest,
    responseType: s3_S3Storage_pb.S3StorageDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_s3_storage_S3StorageDeleteResponse,
  },
};

exports.S3StorageServiceClient = grpc.makeGenericClientConstructor(S3StorageServiceService);
