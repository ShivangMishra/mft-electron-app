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
var ftp_FTPCredential_pb = require('../ftp/FTPCredential_pb.js');

function serialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecret(arg) {
  if (!(arg instanceof ftp_FTPCredential_pb.FTPSecret)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.ftp.FTPSecret');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecret(buffer_arg) {
  return ftp_FTPCredential_pb.FTPSecret.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretCreateRequest(arg) {
  if (!(arg instanceof ftp_FTPCredential_pb.FTPSecretCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.ftp.FTPSecretCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretCreateRequest(buffer_arg) {
  return ftp_FTPCredential_pb.FTPSecretCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretDeleteRequest(arg) {
  if (!(arg instanceof ftp_FTPCredential_pb.FTPSecretDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.ftp.FTPSecretDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretDeleteRequest(buffer_arg) {
  return ftp_FTPCredential_pb.FTPSecretDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretDeleteResponse(arg) {
  if (!(arg instanceof ftp_FTPCredential_pb.FTPSecretDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.ftp.FTPSecretDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretDeleteResponse(buffer_arg) {
  return ftp_FTPCredential_pb.FTPSecretDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretGetRequest(arg) {
  if (!(arg instanceof ftp_FTPCredential_pb.FTPSecretGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.ftp.FTPSecretGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretGetRequest(buffer_arg) {
  return ftp_FTPCredential_pb.FTPSecretGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretUpdateRequest(arg) {
  if (!(arg instanceof ftp_FTPCredential_pb.FTPSecretUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.ftp.FTPSecretUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretUpdateRequest(buffer_arg) {
  return ftp_FTPCredential_pb.FTPSecretUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretUpdateResponse(arg) {
  if (!(arg instanceof ftp_FTPCredential_pb.FTPSecretUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.ftp.FTPSecretUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretUpdateResponse(buffer_arg) {
  return ftp_FTPCredential_pb.FTPSecretUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FTPSecretServiceService = exports.FTPSecretServiceService = {
  getFTPSecret: {
    path: '/org.apache.airavata.mft.credential.service.ftp.FTPSecretService/getFTPSecret',
    requestStream: false,
    responseStream: false,
    requestType: ftp_FTPCredential_pb.FTPSecretGetRequest,
    responseType: ftp_FTPCredential_pb.FTPSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecret,
  },
  createFTPSecret: {
    path: '/org.apache.airavata.mft.credential.service.ftp.FTPSecretService/createFTPSecret',
    requestStream: false,
    responseStream: false,
    requestType: ftp_FTPCredential_pb.FTPSecretCreateRequest,
    responseType: ftp_FTPCredential_pb.FTPSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecret,
  },
  updateFTPSecret: {
    path: '/org.apache.airavata.mft.credential.service.ftp.FTPSecretService/updateFTPSecret',
    requestStream: false,
    responseStream: false,
    requestType: ftp_FTPCredential_pb.FTPSecretUpdateRequest,
    responseType: ftp_FTPCredential_pb.FTPSecretUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretUpdateResponse,
  },
  deleteFTPSecret: {
    path: '/org.apache.airavata.mft.credential.service.ftp.FTPSecretService/deleteFTPSecret',
    requestStream: false,
    responseStream: false,
    requestType: ftp_FTPCredential_pb.FTPSecretDeleteRequest,
    responseType: ftp_FTPCredential_pb.FTPSecretDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_ftp_FTPSecretDeleteResponse,
  },
};

exports.FTPSecretServiceClient = grpc.makeGenericClientConstructor(FTPSecretServiceService);
