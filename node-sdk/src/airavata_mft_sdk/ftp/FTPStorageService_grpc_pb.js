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
var ftp_FTPStorage_pb = require('../ftp/FTPStorage_pb.js');

function serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorage(arg) {
  if (!(arg instanceof ftp_FTPStorage_pb.FTPStorage)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorage(buffer_arg) {
  return ftp_FTPStorage_pb.FTPStorage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageCreateRequest(arg) {
  if (!(arg instanceof ftp_FTPStorage_pb.FTPStorageCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageCreateRequest(buffer_arg) {
  return ftp_FTPStorage_pb.FTPStorageCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageDeleteRequest(arg) {
  if (!(arg instanceof ftp_FTPStorage_pb.FTPStorageDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageDeleteRequest(buffer_arg) {
  return ftp_FTPStorage_pb.FTPStorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageDeleteResponse(arg) {
  if (!(arg instanceof ftp_FTPStorage_pb.FTPStorageDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageDeleteResponse(buffer_arg) {
  return ftp_FTPStorage_pb.FTPStorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageGetRequest(arg) {
  if (!(arg instanceof ftp_FTPStorage_pb.FTPStorageGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageGetRequest(buffer_arg) {
  return ftp_FTPStorage_pb.FTPStorageGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageListRequest(arg) {
  if (!(arg instanceof ftp_FTPStorage_pb.FTPStorageListRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageListRequest(buffer_arg) {
  return ftp_FTPStorage_pb.FTPStorageListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageListResponse(arg) {
  if (!(arg instanceof ftp_FTPStorage_pb.FTPStorageListResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageListResponse(buffer_arg) {
  return ftp_FTPStorage_pb.FTPStorageListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageUpdateRequest(arg) {
  if (!(arg instanceof ftp_FTPStorage_pb.FTPStorageUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageUpdateRequest(buffer_arg) {
  return ftp_FTPStorage_pb.FTPStorageUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageUpdateResponse(arg) {
  if (!(arg instanceof ftp_FTPStorage_pb.FTPStorageUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.ftp.storage.FTPStorageUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageUpdateResponse(buffer_arg) {
  return ftp_FTPStorage_pb.FTPStorageUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FTPStorageServiceService = exports.FTPStorageServiceService = {
  listFTPStorage: {
    path: '/org.apache.airavata.mft.resource.service.ftp.FTPStorageService/listFTPStorage',
    requestStream: false,
    responseStream: false,
    requestType: ftp_FTPStorage_pb.FTPStorageListRequest,
    responseType: ftp_FTPStorage_pb.FTPStorageListResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageListRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageListRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageListResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageListResponse,
  },
  getFTPStorage: {
    path: '/org.apache.airavata.mft.resource.service.ftp.FTPStorageService/getFTPStorage',
    requestStream: false,
    responseStream: false,
    requestType: ftp_FTPStorage_pb.FTPStorageGetRequest,
    responseType: ftp_FTPStorage_pb.FTPStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorage,
  },
  createFTPStorage: {
    path: '/org.apache.airavata.mft.resource.service.ftp.FTPStorageService/createFTPStorage',
    requestStream: false,
    responseStream: false,
    requestType: ftp_FTPStorage_pb.FTPStorageCreateRequest,
    responseType: ftp_FTPStorage_pb.FTPStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorage,
  },
  updateFTPStorage: {
    path: '/org.apache.airavata.mft.resource.service.ftp.FTPStorageService/updateFTPStorage',
    requestStream: false,
    responseStream: false,
    requestType: ftp_FTPStorage_pb.FTPStorageUpdateRequest,
    responseType: ftp_FTPStorage_pb.FTPStorageUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageUpdateResponse,
  },
  deleteFTPStorage: {
    path: '/org.apache.airavata.mft.resource.service.ftp.FTPStorageService/deleteFTPStorage',
    requestStream: false,
    responseStream: false,
    requestType: ftp_FTPStorage_pb.FTPStorageDeleteRequest,
    responseType: ftp_FTPStorage_pb.FTPStorageDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_ftp_storage_FTPStorageDeleteResponse,
  },
};

exports.FTPStorageServiceClient = grpc.makeGenericClientConstructor(FTPStorageServiceService);
