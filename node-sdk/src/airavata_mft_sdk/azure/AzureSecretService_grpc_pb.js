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
var azure_AzureCredential_pb = require('../azure/AzureCredential_pb.js');

function serialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecret(arg) {
  if (!(arg instanceof azure_AzureCredential_pb.AzureSecret)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.azure.AzureSecret');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecret(buffer_arg) {
  return azure_AzureCredential_pb.AzureSecret.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretCreateRequest(arg) {
  if (!(arg instanceof azure_AzureCredential_pb.AzureSecretCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.azure.AzureSecretCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretCreateRequest(buffer_arg) {
  return azure_AzureCredential_pb.AzureSecretCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretDeleteRequest(arg) {
  if (!(arg instanceof azure_AzureCredential_pb.AzureSecretDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.azure.AzureSecretDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretDeleteRequest(buffer_arg) {
  return azure_AzureCredential_pb.AzureSecretDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretDeleteResponse(arg) {
  if (!(arg instanceof azure_AzureCredential_pb.AzureSecretDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.azure.AzureSecretDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretDeleteResponse(buffer_arg) {
  return azure_AzureCredential_pb.AzureSecretDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretGetRequest(arg) {
  if (!(arg instanceof azure_AzureCredential_pb.AzureSecretGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.azure.AzureSecretGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretGetRequest(buffer_arg) {
  return azure_AzureCredential_pb.AzureSecretGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretUpdateRequest(arg) {
  if (!(arg instanceof azure_AzureCredential_pb.AzureSecretUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.azure.AzureSecretUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretUpdateRequest(buffer_arg) {
  return azure_AzureCredential_pb.AzureSecretUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretUpdateResponse(arg) {
  if (!(arg instanceof azure_AzureCredential_pb.AzureSecretUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.azure.AzureSecretUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretUpdateResponse(buffer_arg) {
  return azure_AzureCredential_pb.AzureSecretUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AzureSecretServiceService = exports.AzureSecretServiceService = {
  getAzureSecret: {
    path: '/org.apache.airavata.mft.credential.service.azure.AzureSecretService/getAzureSecret',
    requestStream: false,
    responseStream: false,
    requestType: azure_AzureCredential_pb.AzureSecretGetRequest,
    responseType: azure_AzureCredential_pb.AzureSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecret,
  },
  createAzureSecret: {
    path: '/org.apache.airavata.mft.credential.service.azure.AzureSecretService/createAzureSecret',
    requestStream: false,
    responseStream: false,
    requestType: azure_AzureCredential_pb.AzureSecretCreateRequest,
    responseType: azure_AzureCredential_pb.AzureSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecret,
  },
  updateAzureSecret: {
    path: '/org.apache.airavata.mft.credential.service.azure.AzureSecretService/updateAzureSecret',
    requestStream: false,
    responseStream: false,
    requestType: azure_AzureCredential_pb.AzureSecretUpdateRequest,
    responseType: azure_AzureCredential_pb.AzureSecretUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretUpdateResponse,
  },
  deleteAzureSecret: {
    path: '/org.apache.airavata.mft.credential.service.azure.AzureSecretService/deleteAzureSecret',
    requestStream: false,
    responseStream: false,
    requestType: azure_AzureCredential_pb.AzureSecretDeleteRequest,
    responseType: azure_AzureCredential_pb.AzureSecretDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_azure_AzureSecretDeleteResponse,
  },
};

exports.AzureSecretServiceClient = grpc.makeGenericClientConstructor(AzureSecretServiceService);
