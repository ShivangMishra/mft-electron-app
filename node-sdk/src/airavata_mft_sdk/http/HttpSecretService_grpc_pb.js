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
var http_HttpCredential_pb = require('../http/HttpCredential_pb.js');

function serialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecret(arg) {
  if (!(arg instanceof http_HttpCredential_pb.HTTPSecret)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.http.HTTPSecret');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecret(buffer_arg) {
  return http_HttpCredential_pb.HTTPSecret.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretCreateRequest(arg) {
  if (!(arg instanceof http_HttpCredential_pb.HTTPSecretCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.http.HTTPSecretCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretCreateRequest(buffer_arg) {
  return http_HttpCredential_pb.HTTPSecretCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretDeleteRequest(arg) {
  if (!(arg instanceof http_HttpCredential_pb.HTTPSecretDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.http.HTTPSecretDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretDeleteRequest(buffer_arg) {
  return http_HttpCredential_pb.HTTPSecretDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretDeleteResponse(arg) {
  if (!(arg instanceof http_HttpCredential_pb.HTTPSecretDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.http.HTTPSecretDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretDeleteResponse(buffer_arg) {
  return http_HttpCredential_pb.HTTPSecretDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretGetRequest(arg) {
  if (!(arg instanceof http_HttpCredential_pb.HTTPSecretGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.http.HTTPSecretGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretGetRequest(buffer_arg) {
  return http_HttpCredential_pb.HTTPSecretGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretUpdateRequest(arg) {
  if (!(arg instanceof http_HttpCredential_pb.HTTPSecretUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.http.HTTPSecretUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretUpdateRequest(buffer_arg) {
  return http_HttpCredential_pb.HTTPSecretUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretUpdateResponse(arg) {
  if (!(arg instanceof http_HttpCredential_pb.HTTPSecretUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.http.HTTPSecretUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretUpdateResponse(buffer_arg) {
  return http_HttpCredential_pb.HTTPSecretUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HTTPSecretServiceService = exports.HTTPSecretServiceService = {
  getHTTPSecret: {
    path: '/org.apache.airavata.mft.credential.service.http.HTTPSecretService/getHTTPSecret',
    requestStream: false,
    responseStream: false,
    requestType: http_HttpCredential_pb.HTTPSecretGetRequest,
    responseType: http_HttpCredential_pb.HTTPSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecret,
  },
  createHTTPSecret: {
    path: '/org.apache.airavata.mft.credential.service.http.HTTPSecretService/createHTTPSecret',
    requestStream: false,
    responseStream: false,
    requestType: http_HttpCredential_pb.HTTPSecretCreateRequest,
    responseType: http_HttpCredential_pb.HTTPSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecret,
  },
  updateHTTPSecret: {
    path: '/org.apache.airavata.mft.credential.service.http.HTTPSecretService/updateHTTPSecret',
    requestStream: false,
    responseStream: false,
    requestType: http_HttpCredential_pb.HTTPSecretUpdateRequest,
    responseType: http_HttpCredential_pb.HTTPSecretUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretUpdateResponse,
  },
  deleteHTTPSecret: {
    path: '/org.apache.airavata.mft.credential.service.http.HTTPSecretService/deleteHTTPSecret',
    requestStream: false,
    responseStream: false,
    requestType: http_HttpCredential_pb.HTTPSecretDeleteRequest,
    responseType: http_HttpCredential_pb.HTTPSecretDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_http_HTTPSecretDeleteResponse,
  },
};

exports.HTTPSecretServiceClient = grpc.makeGenericClientConstructor(HTTPSecretServiceService);
