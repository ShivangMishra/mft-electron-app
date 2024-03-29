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
var scp_SCPStorage_pb = require('../scp/SCPStorage_pb.js');

function serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorage(arg) {
  if (!(arg instanceof scp_SCPStorage_pb.SCPStorage)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.scp.storage.SCPStorage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorage(buffer_arg) {
  return scp_SCPStorage_pb.SCPStorage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageCreateRequest(arg) {
  if (!(arg instanceof scp_SCPStorage_pb.SCPStorageCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.scp.storage.SCPStorageCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageCreateRequest(buffer_arg) {
  return scp_SCPStorage_pb.SCPStorageCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageDeleteRequest(arg) {
  if (!(arg instanceof scp_SCPStorage_pb.SCPStorageDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.scp.storage.SCPStorageDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageDeleteRequest(buffer_arg) {
  return scp_SCPStorage_pb.SCPStorageDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageDeleteResponse(arg) {
  if (!(arg instanceof scp_SCPStorage_pb.SCPStorageDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.scp.storage.SCPStorageDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageDeleteResponse(buffer_arg) {
  return scp_SCPStorage_pb.SCPStorageDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageGetRequest(arg) {
  if (!(arg instanceof scp_SCPStorage_pb.SCPStorageGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.scp.storage.SCPStorageGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageGetRequest(buffer_arg) {
  return scp_SCPStorage_pb.SCPStorageGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageListRequest(arg) {
  if (!(arg instanceof scp_SCPStorage_pb.SCPStorageListRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.scp.storage.SCPStorageListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageListRequest(buffer_arg) {
  return scp_SCPStorage_pb.SCPStorageListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageListResponse(arg) {
  if (!(arg instanceof scp_SCPStorage_pb.SCPStorageListResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.scp.storage.SCPStorageListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageListResponse(buffer_arg) {
  return scp_SCPStorage_pb.SCPStorageListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageUpdateRequest(arg) {
  if (!(arg instanceof scp_SCPStorage_pb.SCPStorageUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.scp.storage.SCPStorageUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageUpdateRequest(buffer_arg) {
  return scp_SCPStorage_pb.SCPStorageUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageUpdateResponse(arg) {
  if (!(arg instanceof scp_SCPStorage_pb.SCPStorageUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.resource.stubs.scp.storage.SCPStorageUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageUpdateResponse(buffer_arg) {
  return scp_SCPStorage_pb.SCPStorageUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SCPStorageServiceService = exports.SCPStorageServiceService = {
  listSCPStorage: {
    path: '/org.apache.airavata.mft.resource.service.scp.SCPStorageService/listSCPStorage',
    requestStream: false,
    responseStream: false,
    requestType: scp_SCPStorage_pb.SCPStorageListRequest,
    responseType: scp_SCPStorage_pb.SCPStorageListResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageListRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageListRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageListResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageListResponse,
  },
  getSCPStorage: {
    path: '/org.apache.airavata.mft.resource.service.scp.SCPStorageService/getSCPStorage',
    requestStream: false,
    responseStream: false,
    requestType: scp_SCPStorage_pb.SCPStorageGetRequest,
    responseType: scp_SCPStorage_pb.SCPStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorage,
  },
  createSCPStorage: {
    path: '/org.apache.airavata.mft.resource.service.scp.SCPStorageService/createSCPStorage',
    requestStream: false,
    responseStream: false,
    requestType: scp_SCPStorage_pb.SCPStorageCreateRequest,
    responseType: scp_SCPStorage_pb.SCPStorage,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorage,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorage,
  },
  updateSCPStorage: {
    path: '/org.apache.airavata.mft.resource.service.scp.SCPStorageService/updateSCPStorage',
    requestStream: false,
    responseStream: false,
    requestType: scp_SCPStorage_pb.SCPStorageUpdateRequest,
    responseType: scp_SCPStorage_pb.SCPStorageUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageUpdateResponse,
  },
  deleteSCPStorage: {
    path: '/org.apache.airavata.mft.resource.service.scp.SCPStorageService/deleteSCPStorage',
    requestStream: false,
    responseStream: false,
    requestType: scp_SCPStorage_pb.SCPStorageDeleteRequest,
    responseType: scp_SCPStorage_pb.SCPStorageDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_resource_stubs_scp_storage_SCPStorageDeleteResponse,
  },
};

exports.SCPStorageServiceClient = grpc.makeGenericClientConstructor(SCPStorageServiceService);
