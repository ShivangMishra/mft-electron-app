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
var gcs_GCSCredential_pb = require('../gcs/GCSCredential_pb.js');

function serialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecret(arg) {
  if (!(arg instanceof gcs_GCSCredential_pb.GCSSecret)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.gcs.GCSSecret');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecret(buffer_arg) {
  return gcs_GCSCredential_pb.GCSSecret.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretCreateRequest(arg) {
  if (!(arg instanceof gcs_GCSCredential_pb.GCSSecretCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.gcs.GCSSecretCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretCreateRequest(buffer_arg) {
  return gcs_GCSCredential_pb.GCSSecretCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretDeleteRequest(arg) {
  if (!(arg instanceof gcs_GCSCredential_pb.GCSSecretDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.gcs.GCSSecretDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretDeleteRequest(buffer_arg) {
  return gcs_GCSCredential_pb.GCSSecretDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretDeleteResponse(arg) {
  if (!(arg instanceof gcs_GCSCredential_pb.GCSSecretDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.gcs.GCSSecretDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretDeleteResponse(buffer_arg) {
  return gcs_GCSCredential_pb.GCSSecretDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretGetRequest(arg) {
  if (!(arg instanceof gcs_GCSCredential_pb.GCSSecretGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.gcs.GCSSecretGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretGetRequest(buffer_arg) {
  return gcs_GCSCredential_pb.GCSSecretGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretUpdateRequest(arg) {
  if (!(arg instanceof gcs_GCSCredential_pb.GCSSecretUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.gcs.GCSSecretUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretUpdateRequest(buffer_arg) {
  return gcs_GCSCredential_pb.GCSSecretUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretUpdateResponse(arg) {
  if (!(arg instanceof gcs_GCSCredential_pb.GCSSecretUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.gcs.GCSSecretUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretUpdateResponse(buffer_arg) {
  return gcs_GCSCredential_pb.GCSSecretUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GCSSecretServiceService = exports.GCSSecretServiceService = {
  getGCSSecret: {
    path: '/org.apache.airavata.mft.credential.service.gcs.GCSSecretService/getGCSSecret',
    requestStream: false,
    responseStream: false,
    requestType: gcs_GCSCredential_pb.GCSSecretGetRequest,
    responseType: gcs_GCSCredential_pb.GCSSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecret,
  },
  createGCSSecret: {
    path: '/org.apache.airavata.mft.credential.service.gcs.GCSSecretService/createGCSSecret',
    requestStream: false,
    responseStream: false,
    requestType: gcs_GCSCredential_pb.GCSSecretCreateRequest,
    responseType: gcs_GCSCredential_pb.GCSSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecret,
  },
  updateGCSSecret: {
    path: '/org.apache.airavata.mft.credential.service.gcs.GCSSecretService/updateGCSSecret',
    requestStream: false,
    responseStream: false,
    requestType: gcs_GCSCredential_pb.GCSSecretUpdateRequest,
    responseType: gcs_GCSCredential_pb.GCSSecretUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretUpdateResponse,
  },
  deleteGCSSecret: {
    path: '/org.apache.airavata.mft.credential.service.gcs.GCSSecretService/deleteGCSSecret',
    requestStream: false,
    responseStream: false,
    requestType: gcs_GCSCredential_pb.GCSSecretDeleteRequest,
    responseType: gcs_GCSCredential_pb.GCSSecretDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_gcs_GCSSecretDeleteResponse,
  },
};

exports.GCSSecretServiceClient = grpc.makeGenericClientConstructor(GCSSecretServiceService);
