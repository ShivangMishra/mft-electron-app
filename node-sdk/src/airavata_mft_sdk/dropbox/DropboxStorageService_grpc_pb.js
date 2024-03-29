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
var dropbox_DropboxStorage_pb = require('../dropbox/DropboxStorage_pb.js');

function serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorage(arg) {
  if (!(arg instanceof dropbox_DropboxStorage_pb.DropboxStorage)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.dropbox.storage.DropboxStorage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorage(buffer_arg) {
  return dropbox_DropboxStorage_pb.DropboxStorage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageCreateRequest(arg) {
  if (!(arg instanceof dropbox_DropboxStorage_pb.DropboxStorageCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.dropbox.storage.DropboxStorageCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageCreateRequest(buffer_arg) {
  return dropbox_DropboxStorage_pb.DropboxStorageCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageDeleteRequest(arg) {
  if (!(arg instanceof dropbox_DropboxStorage_pb.DropboxStorageDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.dropbox.storage.DropboxStorageDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageDeleteRequest(buffer_arg) {
  return dropbox_DropboxStorage_pb.DropboxStorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageDeleteResponse(arg) {
  if (!(arg instanceof dropbox_DropboxStorage_pb.DropboxStorageDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.dropbox.storage.DropboxStorageDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageDeleteResponse(buffer_arg) {
  return dropbox_DropboxStorage_pb.DropboxStorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageGetRequest(arg) {
  if (!(arg instanceof dropbox_DropboxStorage_pb.DropboxStorageGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.dropbox.storage.DropboxStorageGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageGetRequest(buffer_arg) {
  return dropbox_DropboxStorage_pb.DropboxStorageGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageListRequest(arg) {
  if (!(arg instanceof dropbox_DropboxStorage_pb.DropboxStorageListRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.dropbox.storage.DropboxStorageListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageListRequest(buffer_arg) {
  return dropbox_DropboxStorage_pb.DropboxStorageListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageListResponse(arg) {
  if (!(arg instanceof dropbox_DropboxStorage_pb.DropboxStorageListResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.dropbox.storage.DropboxStorageListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageListResponse(buffer_arg) {
  return dropbox_DropboxStorage_pb.DropboxStorageListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageUpdateRequest(arg) {
  if (!(arg instanceof dropbox_DropboxStorage_pb.DropboxStorageUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.dropbox.storage.DropboxStorageUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageUpdateRequest(buffer_arg) {
  return dropbox_DropboxStorage_pb.DropboxStorageUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageUpdateResponse(arg) {
  if (!(arg instanceof dropbox_DropboxStorage_pb.DropboxStorageUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.dropbox.storage.DropboxStorageUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageUpdateResponse(buffer_arg) {
  return dropbox_DropboxStorage_pb.DropboxStorageUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DropboxStorageServiceService = exports.DropboxStorageServiceService = {
  // Storage
listDropboxStorage: {
    path: '/org.apache.airavata.mft.resource.service.dropbox.DropboxStorageService/listDropboxStorage',
    requestStream: false,
    responseStream: false,
    requestType: dropbox_DropboxStorage_pb.DropboxStorageListRequest,
    responseType: dropbox_DropboxStorage_pb.DropboxStorageListResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageListRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageListRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageListResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageListResponse,
  },
  getDropboxStorage: {
    path: '/org.apache.airavata.mft.resource.service.dropbox.DropboxStorageService/getDropboxStorage',
    requestStream: false,
    responseStream: false,
    requestType: dropbox_DropboxStorage_pb.DropboxStorageGetRequest,
    responseType: dropbox_DropboxStorage_pb.DropboxStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorage,
  },
  createDropboxStorage: {
    path: '/org.apache.airavata.mft.resource.service.dropbox.DropboxStorageService/createDropboxStorage',
    requestStream: false,
    responseStream: false,
    requestType: dropbox_DropboxStorage_pb.DropboxStorageCreateRequest,
    responseType: dropbox_DropboxStorage_pb.DropboxStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorage,
  },
  updateDropboxStorage: {
    path: '/org.apache.airavata.mft.resource.service.dropbox.DropboxStorageService/updateDropboxStorage',
    requestStream: false,
    responseStream: false,
    requestType: dropbox_DropboxStorage_pb.DropboxStorageUpdateRequest,
    responseType: dropbox_DropboxStorage_pb.DropboxStorageUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageUpdateResponse,
  },
  deleteDropboxStorage: {
    path: '/org.apache.airavata.mft.resource.service.dropbox.DropboxStorageService/deleteDropboxStorage',
    requestStream: false,
    responseStream: false,
    requestType: dropbox_DropboxStorage_pb.DropboxStorageDeleteRequest,
    responseType: dropbox_DropboxStorage_pb.DropboxStorageDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_dropbox_storage_DropboxStorageDeleteResponse,
  },
};

exports.DropboxStorageServiceClient = grpc.makeGenericClientConstructor(DropboxStorageServiceService);
