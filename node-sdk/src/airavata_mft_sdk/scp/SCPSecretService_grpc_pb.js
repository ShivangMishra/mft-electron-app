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
var scp_SCPCredential_pb = require('../scp/SCPCredential_pb.js');

function serialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecret(arg) {
  if (!(arg instanceof scp_SCPCredential_pb.SCPSecret)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.scp.SCPSecret');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecret(buffer_arg) {
  return scp_SCPCredential_pb.SCPSecret.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretCreateRequest(arg) {
  if (!(arg instanceof scp_SCPCredential_pb.SCPSecretCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.scp.SCPSecretCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretCreateRequest(buffer_arg) {
  return scp_SCPCredential_pb.SCPSecretCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretDeleteRequest(arg) {
  if (!(arg instanceof scp_SCPCredential_pb.SCPSecretDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.scp.SCPSecretDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretDeleteRequest(buffer_arg) {
  return scp_SCPCredential_pb.SCPSecretDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretDeleteResponse(arg) {
  if (!(arg instanceof scp_SCPCredential_pb.SCPSecretDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.scp.SCPSecretDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretDeleteResponse(buffer_arg) {
  return scp_SCPCredential_pb.SCPSecretDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretGetRequest(arg) {
  if (!(arg instanceof scp_SCPCredential_pb.SCPSecretGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.scp.SCPSecretGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretGetRequest(buffer_arg) {
  return scp_SCPCredential_pb.SCPSecretGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretUpdateRequest(arg) {
  if (!(arg instanceof scp_SCPCredential_pb.SCPSecretUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.scp.SCPSecretUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretUpdateRequest(buffer_arg) {
  return scp_SCPCredential_pb.SCPSecretUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretUpdateResponse(arg) {
  if (!(arg instanceof scp_SCPCredential_pb.SCPSecretUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.scp.SCPSecretUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretUpdateResponse(buffer_arg) {
  return scp_SCPCredential_pb.SCPSecretUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SCPSecretServiceService = exports.SCPSecretServiceService = {
  getSCPSecret: {
    path: '/org.apache.airavata.mft.credential.service.scp.SCPSecretService/getSCPSecret',
    requestStream: false,
    responseStream: false,
    requestType: scp_SCPCredential_pb.SCPSecretGetRequest,
    responseType: scp_SCPCredential_pb.SCPSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecret,
  },
  createSCPSecret: {
    path: '/org.apache.airavata.mft.credential.service.scp.SCPSecretService/createSCPSecret',
    requestStream: false,
    responseStream: false,
    requestType: scp_SCPCredential_pb.SCPSecretCreateRequest,
    responseType: scp_SCPCredential_pb.SCPSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecret,
  },
  updateSCPSecret: {
    path: '/org.apache.airavata.mft.credential.service.scp.SCPSecretService/updateSCPSecret',
    requestStream: false,
    responseStream: false,
    requestType: scp_SCPCredential_pb.SCPSecretUpdateRequest,
    responseType: scp_SCPCredential_pb.SCPSecretUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretUpdateResponse,
  },
  deleteSCPSecret: {
    path: '/org.apache.airavata.mft.credential.service.scp.SCPSecretService/deleteSCPSecret',
    requestStream: false,
    responseStream: false,
    requestType: scp_SCPCredential_pb.SCPSecretDeleteRequest,
    responseType: scp_SCPCredential_pb.SCPSecretDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_scp_SCPSecretDeleteResponse,
  },
};

exports.SCPSecretServiceClient = grpc.makeGenericClientConstructor(SCPSecretServiceService);
