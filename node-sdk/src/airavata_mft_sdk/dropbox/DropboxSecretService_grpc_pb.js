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
var dropbox_DropboxCredential_pb = require('../dropbox/DropboxCredential_pb.js');

function serialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecret(arg) {
  if (!(arg instanceof dropbox_DropboxCredential_pb.DropboxSecret)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecret');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecret(buffer_arg) {
  return dropbox_DropboxCredential_pb.DropboxSecret.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretCreateRequest(arg) {
  if (!(arg instanceof dropbox_DropboxCredential_pb.DropboxSecretCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretCreateRequest(buffer_arg) {
  return dropbox_DropboxCredential_pb.DropboxSecretCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretDeleteRequest(arg) {
  if (!(arg instanceof dropbox_DropboxCredential_pb.DropboxSecretDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretDeleteRequest(buffer_arg) {
  return dropbox_DropboxCredential_pb.DropboxSecretDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretDeleteResponse(arg) {
  if (!(arg instanceof dropbox_DropboxCredential_pb.DropboxSecretDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretDeleteResponse(buffer_arg) {
  return dropbox_DropboxCredential_pb.DropboxSecretDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretGetRequest(arg) {
  if (!(arg instanceof dropbox_DropboxCredential_pb.DropboxSecretGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretGetRequest(buffer_arg) {
  return dropbox_DropboxCredential_pb.DropboxSecretGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretUpdateRequest(arg) {
  if (!(arg instanceof dropbox_DropboxCredential_pb.DropboxSecretUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretUpdateRequest(buffer_arg) {
  return dropbox_DropboxCredential_pb.DropboxSecretUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretUpdateResponse(arg) {
  if (!(arg instanceof dropbox_DropboxCredential_pb.DropboxSecretUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.dropbox.DropboxSecretUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretUpdateResponse(buffer_arg) {
  return dropbox_DropboxCredential_pb.DropboxSecretUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DropboxSecretServiceService = exports.DropboxSecretServiceService = {
  getDropboxSecret: {
    path: '/org.apache.airavata.mft.credential.service.dropbox.DropboxSecretService/getDropboxSecret',
    requestStream: false,
    responseStream: false,
    requestType: dropbox_DropboxCredential_pb.DropboxSecretGetRequest,
    responseType: dropbox_DropboxCredential_pb.DropboxSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecret,
  },
  createDropboxSecret: {
    path: '/org.apache.airavata.mft.credential.service.dropbox.DropboxSecretService/createDropboxSecret',
    requestStream: false,
    responseStream: false,
    requestType: dropbox_DropboxCredential_pb.DropboxSecretCreateRequest,
    responseType: dropbox_DropboxCredential_pb.DropboxSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecret,
  },
  updateDropboxSecret: {
    path: '/org.apache.airavata.mft.credential.service.dropbox.DropboxSecretService/updateDropboxSecret',
    requestStream: false,
    responseStream: false,
    requestType: dropbox_DropboxCredential_pb.DropboxSecretUpdateRequest,
    responseType: dropbox_DropboxCredential_pb.DropboxSecretUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretUpdateResponse,
  },
  deleteDropboxSecret: {
    path: '/org.apache.airavata.mft.credential.service.dropbox.DropboxSecretService/deleteDropboxSecret',
    requestStream: false,
    responseStream: false,
    requestType: dropbox_DropboxCredential_pb.DropboxSecretDeleteRequest,
    responseType: dropbox_DropboxCredential_pb.DropboxSecretDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_dropbox_DropboxSecretDeleteResponse,
  },
};

exports.DropboxSecretServiceClient = grpc.makeGenericClientConstructor(DropboxSecretServiceService);
