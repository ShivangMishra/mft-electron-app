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
var s3_S3Credential_pb = require('../s3/S3Credential_pb.js');

function serialize_org_apache_airavata_mft_credential_stubs_s3_S3Secret(arg) {
  if (!(arg instanceof s3_S3Credential_pb.S3Secret)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.s3.S3Secret');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_s3_S3Secret(buffer_arg) {
  return s3_S3Credential_pb.S3Secret.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretCreateRequest(arg) {
  if (!(arg instanceof s3_S3Credential_pb.S3SecretCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.s3.S3SecretCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretCreateRequest(buffer_arg) {
  return s3_S3Credential_pb.S3SecretCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretDeleteRequest(arg) {
  if (!(arg instanceof s3_S3Credential_pb.S3SecretDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.s3.S3SecretDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretDeleteRequest(buffer_arg) {
  return s3_S3Credential_pb.S3SecretDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretDeleteResponse(arg) {
  if (!(arg instanceof s3_S3Credential_pb.S3SecretDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.s3.S3SecretDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretDeleteResponse(buffer_arg) {
  return s3_S3Credential_pb.S3SecretDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretGetRequest(arg) {
  if (!(arg instanceof s3_S3Credential_pb.S3SecretGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.s3.S3SecretGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretGetRequest(buffer_arg) {
  return s3_S3Credential_pb.S3SecretGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretUpdateRequest(arg) {
  if (!(arg instanceof s3_S3Credential_pb.S3SecretUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.s3.S3SecretUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretUpdateRequest(buffer_arg) {
  return s3_S3Credential_pb.S3SecretUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretUpdateResponse(arg) {
  if (!(arg instanceof s3_S3Credential_pb.S3SecretUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.s3.S3SecretUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretUpdateResponse(buffer_arg) {
  return s3_S3Credential_pb.S3SecretUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var S3SecretServiceService = exports.S3SecretServiceService = {
  getS3Secret: {
    path: '/org.apache.airavata.mft.credential.service.s3.S3SecretService/getS3Secret',
    requestStream: false,
    responseStream: false,
    requestType: s3_S3Credential_pb.S3SecretGetRequest,
    responseType: s3_S3Credential_pb.S3Secret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_s3_S3Secret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_s3_S3Secret,
  },
  createS3Secret: {
    path: '/org.apache.airavata.mft.credential.service.s3.S3SecretService/createS3Secret',
    requestStream: false,
    responseStream: false,
    requestType: s3_S3Credential_pb.S3SecretCreateRequest,
    responseType: s3_S3Credential_pb.S3Secret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_s3_S3Secret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_s3_S3Secret,
  },
  updateS3Secret: {
    path: '/org.apache.airavata.mft.credential.service.s3.S3SecretService/updateS3Secret',
    requestStream: false,
    responseStream: false,
    requestType: s3_S3Credential_pb.S3SecretUpdateRequest,
    responseType: s3_S3Credential_pb.S3SecretUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretUpdateResponse,
  },
  deleteS3Secret: {
    path: '/org.apache.airavata.mft.credential.service.s3.S3SecretService/deleteS3Secret',
    requestStream: false,
    responseStream: false,
    requestType: s3_S3Credential_pb.S3SecretDeleteRequest,
    responseType: s3_S3Credential_pb.S3SecretDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_s3_S3SecretDeleteResponse,
  },
};

exports.S3SecretServiceClient = grpc.makeGenericClientConstructor(S3SecretServiceService);
