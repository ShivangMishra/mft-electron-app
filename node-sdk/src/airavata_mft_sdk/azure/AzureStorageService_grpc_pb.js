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
var azure_AzureStorage_pb = require('../azure/AzureStorage_pb.js');

function serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorage(arg) {
  if (!(arg instanceof azure_AzureStorage_pb.AzureStorage)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.azure.storage.AzureStorage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorage(buffer_arg) {
  return azure_AzureStorage_pb.AzureStorage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageCreateRequest(arg) {
  if (!(arg instanceof azure_AzureStorage_pb.AzureStorageCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.azure.storage.AzureStorageCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageCreateRequest(buffer_arg) {
  return azure_AzureStorage_pb.AzureStorageCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageDeleteRequest(arg) {
  if (!(arg instanceof azure_AzureStorage_pb.AzureStorageDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.azure.storage.AzureStorageDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageDeleteRequest(buffer_arg) {
  return azure_AzureStorage_pb.AzureStorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageDeleteResponse(arg) {
  if (!(arg instanceof azure_AzureStorage_pb.AzureStorageDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.azure.storage.AzureStorageDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageDeleteResponse(buffer_arg) {
  return azure_AzureStorage_pb.AzureStorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageGetRequest(arg) {
  if (!(arg instanceof azure_AzureStorage_pb.AzureStorageGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.azure.storage.AzureStorageGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageGetRequest(buffer_arg) {
  return azure_AzureStorage_pb.AzureStorageGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageListRequest(arg) {
  if (!(arg instanceof azure_AzureStorage_pb.AzureStorageListRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.azure.storage.AzureStorageListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageListRequest(buffer_arg) {
  return azure_AzureStorage_pb.AzureStorageListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageListResponse(arg) {
  if (!(arg instanceof azure_AzureStorage_pb.AzureStorageListResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.azure.storage.AzureStorageListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageListResponse(buffer_arg) {
  return azure_AzureStorage_pb.AzureStorageListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageUpdateRequest(arg) {
  if (!(arg instanceof azure_AzureStorage_pb.AzureStorageUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.azure.storage.AzureStorageUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageUpdateRequest(buffer_arg) {
  return azure_AzureStorage_pb.AzureStorageUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageUpdateResponse(arg) {
  if (!(arg instanceof azure_AzureStorage_pb.AzureStorageUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.azure.storage.AzureStorageUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageUpdateResponse(buffer_arg) {
  return azure_AzureStorage_pb.AzureStorageUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AzureStorageServiceService = exports.AzureStorageServiceService = {
  // Storage
//
listAzureStorage: {
    path: '/org.apache.airavata.mft.resource.service.azure.AzureStorageService/listAzureStorage',
    requestStream: false,
    responseStream: false,
    requestType: azure_AzureStorage_pb.AzureStorageListRequest,
    responseType: azure_AzureStorage_pb.AzureStorageListResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageListRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageListRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageListResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageListResponse,
  },
  getAzureStorage: {
    path: '/org.apache.airavata.mft.resource.service.azure.AzureStorageService/getAzureStorage',
    requestStream: false,
    responseStream: false,
    requestType: azure_AzureStorage_pb.AzureStorageGetRequest,
    responseType: azure_AzureStorage_pb.AzureStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorage,
  },
  createAzureStorage: {
    path: '/org.apache.airavata.mft.resource.service.azure.AzureStorageService/createAzureStorage',
    requestStream: false,
    responseStream: false,
    requestType: azure_AzureStorage_pb.AzureStorageCreateRequest,
    responseType: azure_AzureStorage_pb.AzureStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorage,
  },
  updateAzureStorage: {
    path: '/org.apache.airavata.mft.resource.service.azure.AzureStorageService/updateAzureStorage',
    requestStream: false,
    responseStream: false,
    requestType: azure_AzureStorage_pb.AzureStorageUpdateRequest,
    responseType: azure_AzureStorage_pb.AzureStorageUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageUpdateResponse,
  },
  deleteAzureStorage: {
    path: '/org.apache.airavata.mft.resource.service.azure.AzureStorageService/deleteAzureStorage',
    requestStream: false,
    responseStream: false,
    requestType: azure_AzureStorage_pb.AzureStorageDeleteRequest,
    responseType: azure_AzureStorage_pb.AzureStorageDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_azure_storage_AzureStorageDeleteResponse,
  },
};

exports.AzureStorageServiceClient = grpc.makeGenericClientConstructor(AzureStorageServiceService);
