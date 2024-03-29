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
var box_BoxCredential_pb = require('../box/BoxCredential_pb.js');

function serialize_org_apache_airavata_mft_credential_stubs_box_BoxSecret(arg) {
  if (!(arg instanceof box_BoxCredential_pb.BoxSecret)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.box.BoxSecret');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_box_BoxSecret(buffer_arg) {
  return box_BoxCredential_pb.BoxSecret.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretCreateRequest(arg) {
  if (!(arg instanceof box_BoxCredential_pb.BoxSecretCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.box.BoxSecretCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretCreateRequest(buffer_arg) {
  return box_BoxCredential_pb.BoxSecretCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretDeleteRequest(arg) {
  if (!(arg instanceof box_BoxCredential_pb.BoxSecretDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.box.BoxSecretDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretDeleteRequest(buffer_arg) {
  return box_BoxCredential_pb.BoxSecretDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretDeleteResponse(arg) {
  if (!(arg instanceof box_BoxCredential_pb.BoxSecretDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.box.BoxSecretDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretDeleteResponse(buffer_arg) {
  return box_BoxCredential_pb.BoxSecretDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretGetRequest(arg) {
  if (!(arg instanceof box_BoxCredential_pb.BoxSecretGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.box.BoxSecretGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretGetRequest(buffer_arg) {
  return box_BoxCredential_pb.BoxSecretGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretUpdateRequest(arg) {
  if (!(arg instanceof box_BoxCredential_pb.BoxSecretUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.box.BoxSecretUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretUpdateRequest(buffer_arg) {
  return box_BoxCredential_pb.BoxSecretUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretUpdateResponse(arg) {
  if (!(arg instanceof box_BoxCredential_pb.BoxSecretUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.box.BoxSecretUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretUpdateResponse(buffer_arg) {
  return box_BoxCredential_pb.BoxSecretUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BoxSecretServiceService = exports.BoxSecretServiceService = {
  getBoxSecret: {
    path: '/org.apache.airavata.mft.credential.service.box.BoxSecretService/getBoxSecret',
    requestStream: false,
    responseStream: false,
    requestType: box_BoxCredential_pb.BoxSecretGetRequest,
    responseType: box_BoxCredential_pb.BoxSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_box_BoxSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_box_BoxSecret,
  },
  createBoxSecret: {
    path: '/org.apache.airavata.mft.credential.service.box.BoxSecretService/createBoxSecret',
    requestStream: false,
    responseStream: false,
    requestType: box_BoxCredential_pb.BoxSecretCreateRequest,
    responseType: box_BoxCredential_pb.BoxSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_box_BoxSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_box_BoxSecret,
  },
  updateBoxSecret: {
    path: '/org.apache.airavata.mft.credential.service.box.BoxSecretService/updateBoxSecret',
    requestStream: false,
    responseStream: false,
    requestType: box_BoxCredential_pb.BoxSecretUpdateRequest,
    responseType: box_BoxCredential_pb.BoxSecretUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretUpdateResponse,
  },
  deleteBoxSecret: {
    path: '/org.apache.airavata.mft.credential.service.box.BoxSecretService/deleteBoxSecret',
    requestStream: false,
    responseStream: false,
    requestType: box_BoxCredential_pb.BoxSecretDeleteRequest,
    responseType: box_BoxCredential_pb.BoxSecretDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_box_BoxSecretDeleteResponse,
  },
};

exports.BoxSecretServiceClient = grpc.makeGenericClientConstructor(BoxSecretServiceService);
