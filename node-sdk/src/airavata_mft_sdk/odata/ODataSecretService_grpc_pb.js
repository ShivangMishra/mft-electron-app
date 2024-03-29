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
var odata_ODataCredential_pb = require('../odata/ODataCredential_pb.js');

function serialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecret(arg) {
  if (!(arg instanceof odata_ODataCredential_pb.ODataSecret)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.odata.ODataSecret');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecret(buffer_arg) {
  return odata_ODataCredential_pb.ODataSecret.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretCreateRequest(arg) {
  if (!(arg instanceof odata_ODataCredential_pb.ODataSecretCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.odata.ODataSecretCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretCreateRequest(buffer_arg) {
  return odata_ODataCredential_pb.ODataSecretCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretDeleteRequest(arg) {
  if (!(arg instanceof odata_ODataCredential_pb.ODataSecretDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.odata.ODataSecretDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretDeleteRequest(buffer_arg) {
  return odata_ODataCredential_pb.ODataSecretDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretDeleteResponse(arg) {
  if (!(arg instanceof odata_ODataCredential_pb.ODataSecretDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.odata.ODataSecretDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretDeleteResponse(buffer_arg) {
  return odata_ODataCredential_pb.ODataSecretDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretGetRequest(arg) {
  if (!(arg instanceof odata_ODataCredential_pb.ODataSecretGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.odata.ODataSecretGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretGetRequest(buffer_arg) {
  return odata_ODataCredential_pb.ODataSecretGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretUpdateRequest(arg) {
  if (!(arg instanceof odata_ODataCredential_pb.ODataSecretUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.odata.ODataSecretUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretUpdateRequest(buffer_arg) {
  return odata_ODataCredential_pb.ODataSecretUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretUpdateResponse(arg) {
  if (!(arg instanceof odata_ODataCredential_pb.ODataSecretUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.odata.ODataSecretUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretUpdateResponse(buffer_arg) {
  return odata_ODataCredential_pb.ODataSecretUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ODataSecretServiceService = exports.ODataSecretServiceService = {
  getODataSecret: {
    path: '/org.apache.airavata.mft.credential.service.odata.ODataSecretService/getODataSecret',
    requestStream: false,
    responseStream: false,
    requestType: odata_ODataCredential_pb.ODataSecretGetRequest,
    responseType: odata_ODataCredential_pb.ODataSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecret,
  },
  createODataSecret: {
    path: '/org.apache.airavata.mft.credential.service.odata.ODataSecretService/createODataSecret',
    requestStream: false,
    responseStream: false,
    requestType: odata_ODataCredential_pb.ODataSecretCreateRequest,
    responseType: odata_ODataCredential_pb.ODataSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecret,
  },
  updateODataSecret: {
    path: '/org.apache.airavata.mft.credential.service.odata.ODataSecretService/updateODataSecret',
    requestStream: false,
    responseStream: false,
    requestType: odata_ODataCredential_pb.ODataSecretUpdateRequest,
    responseType: odata_ODataCredential_pb.ODataSecretUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretUpdateResponse,
  },
  deleteODataSecret: {
    path: '/org.apache.airavata.mft.credential.service.odata.ODataSecretService/deleteODataSecret',
    requestStream: false,
    responseStream: false,
    requestType: odata_ODataCredential_pb.ODataSecretDeleteRequest,
    responseType: odata_ODataCredential_pb.ODataSecretDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_odata_ODataSecretDeleteResponse,
  },
};

exports.ODataSecretServiceClient = grpc.makeGenericClientConstructor(ODataSecretServiceService);
