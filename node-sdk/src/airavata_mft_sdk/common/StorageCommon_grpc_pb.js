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
var common_StorageCommon_pb = require('../common/StorageCommon_pb.js');

function serialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorage(arg) {
  if (!(arg instanceof common_StorageCommon_pb.SecretForStorage)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.storage.common.SecretForStorage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorage(buffer_arg) {
  return common_StorageCommon_pb.SecretForStorage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorageDeleteRequest(arg) {
  if (!(arg instanceof common_StorageCommon_pb.SecretForStorageDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.storage.common.SecretForStorageDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorageDeleteRequest(buffer_arg) {
  return common_StorageCommon_pb.SecretForStorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorageDeleteResponse(arg) {
  if (!(arg instanceof common_StorageCommon_pb.SecretForStorageDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.storage.common.SecretForStorageDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorageDeleteResponse(buffer_arg) {
  return common_StorageCommon_pb.SecretForStorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorageGetRequest(arg) {
  if (!(arg instanceof common_StorageCommon_pb.SecretForStorageGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.storage.common.SecretForStorageGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorageGetRequest(buffer_arg) {
  return common_StorageCommon_pb.SecretForStorageGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageListRequest(arg) {
  if (!(arg instanceof common_StorageCommon_pb.StorageListRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.storage.common.StorageListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageListRequest(buffer_arg) {
  return common_StorageCommon_pb.StorageListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageListResponse(arg) {
  if (!(arg instanceof common_StorageCommon_pb.StorageListResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.storage.common.StorageListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageListResponse(buffer_arg) {
  return common_StorageCommon_pb.StorageListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageSearchRequest(arg) {
  if (!(arg instanceof common_StorageCommon_pb.StorageSearchRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.storage.common.StorageSearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageSearchRequest(buffer_arg) {
  return common_StorageCommon_pb.StorageSearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageTypeResolveRequest(arg) {
  if (!(arg instanceof common_StorageCommon_pb.StorageTypeResolveRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.storage.common.StorageTypeResolveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageTypeResolveRequest(buffer_arg) {
  return common_StorageCommon_pb.StorageTypeResolveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageTypeResolveResponse(arg) {
  if (!(arg instanceof common_StorageCommon_pb.StorageTypeResolveResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.storage.common.StorageTypeResolveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageTypeResolveResponse(buffer_arg) {
  return common_StorageCommon_pb.StorageTypeResolveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var StorageCommonServiceService = exports.StorageCommonServiceService = {
  resolveStorageType: {
    path: '/org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonService/resolveStorageType',
    requestStream: false,
    responseStream: false,
    requestType: common_StorageCommon_pb.StorageTypeResolveRequest,
    responseType: common_StorageCommon_pb.StorageTypeResolveResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageTypeResolveRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageTypeResolveRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageTypeResolveResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageTypeResolveResponse,
  },
  registerSecretForStorage: {
    path: '/org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonService/registerSecretForStorage',
    requestStream: false,
    responseStream: false,
    requestType: common_StorageCommon_pb.SecretForStorage,
    responseType: common_StorageCommon_pb.SecretForStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorage,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorage,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorage,
  },
  getSecretForStorage: {
    path: '/org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonService/getSecretForStorage',
    requestStream: false,
    responseStream: false,
    requestType: common_StorageCommon_pb.SecretForStorageGetRequest,
    responseType: common_StorageCommon_pb.SecretForStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorageGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorageGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorage,
  },
  deleteSecretsForStorage: {
    path: '/org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonService/deleteSecretsForStorage',
    requestStream: false,
    responseStream: false,
    requestType: common_StorageCommon_pb.SecretForStorageDeleteRequest,
    responseType: common_StorageCommon_pb.SecretForStorageDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorageDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorageDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorageDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_storage_common_SecretForStorageDeleteResponse,
  },
  searchStorages: {
    path: '/org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonService/searchStorages',
    requestStream: false,
    responseStream: false,
    requestType: common_StorageCommon_pb.StorageSearchRequest,
    responseType: common_StorageCommon_pb.StorageListResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageSearchRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageSearchRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageListResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageListResponse,
  },
  listStorages: {
    path: '/org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonService/listStorages',
    requestStream: false,
    responseStream: false,
    requestType: common_StorageCommon_pb.StorageListRequest,
    responseType: common_StorageCommon_pb.StorageListResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageListRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageListRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageListResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_storage_common_StorageListResponse,
  },
};

exports.StorageCommonServiceClient = grpc.makeGenericClientConstructor(StorageCommonServiceService);
