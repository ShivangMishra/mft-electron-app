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
var swift_SwiftCredential_pb = require('../swift/SwiftCredential_pb.js');

function serialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecret(arg) {
  if (!(arg instanceof swift_SwiftCredential_pb.SwiftSecret)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.swift.SwiftSecret');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecret(buffer_arg) {
  return swift_SwiftCredential_pb.SwiftSecret.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretCreateRequest(arg) {
  if (!(arg instanceof swift_SwiftCredential_pb.SwiftSecretCreateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.swift.SwiftSecretCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretCreateRequest(buffer_arg) {
  return swift_SwiftCredential_pb.SwiftSecretCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretDeleteRequest(arg) {
  if (!(arg instanceof swift_SwiftCredential_pb.SwiftSecretDeleteRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.swift.SwiftSecretDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretDeleteRequest(buffer_arg) {
  return swift_SwiftCredential_pb.SwiftSecretDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretDeleteResponse(arg) {
  if (!(arg instanceof swift_SwiftCredential_pb.SwiftSecretDeleteResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.swift.SwiftSecretDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretDeleteResponse(buffer_arg) {
  return swift_SwiftCredential_pb.SwiftSecretDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretGetRequest(arg) {
  if (!(arg instanceof swift_SwiftCredential_pb.SwiftSecretGetRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.swift.SwiftSecretGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretGetRequest(buffer_arg) {
  return swift_SwiftCredential_pb.SwiftSecretGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretUpdateRequest(arg) {
  if (!(arg instanceof swift_SwiftCredential_pb.SwiftSecretUpdateRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.swift.SwiftSecretUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretUpdateRequest(buffer_arg) {
  return swift_SwiftCredential_pb.SwiftSecretUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretUpdateResponse(arg) {
  if (!(arg instanceof swift_SwiftCredential_pb.SwiftSecretUpdateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.credential.stubs.swift.SwiftSecretUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretUpdateResponse(buffer_arg) {
  return swift_SwiftCredential_pb.SwiftSecretUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SwiftSecretServiceService = exports.SwiftSecretServiceService = {
  getSwiftSecret: {
    path: '/org.apache.airavata.mft.credential.service.swift.SwiftSecretService/getSwiftSecret',
    requestStream: false,
    responseStream: false,
    requestType: swift_SwiftCredential_pb.SwiftSecretGetRequest,
    responseType: swift_SwiftCredential_pb.SwiftSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretGetRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretGetRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecret,
  },
  createSwiftSecret: {
    path: '/org.apache.airavata.mft.credential.service.swift.SwiftSecretService/createSwiftSecret',
    requestStream: false,
    responseStream: false,
    requestType: swift_SwiftCredential_pb.SwiftSecretCreateRequest,
    responseType: swift_SwiftCredential_pb.SwiftSecret,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretCreateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretCreateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecret,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecret,
  },
  updateSwiftSecret: {
    path: '/org.apache.airavata.mft.credential.service.swift.SwiftSecretService/updateSwiftSecret',
    requestStream: false,
    responseStream: false,
    requestType: swift_SwiftCredential_pb.SwiftSecretUpdateRequest,
    responseType: swift_SwiftCredential_pb.SwiftSecretUpdateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretUpdateRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretUpdateRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretUpdateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretUpdateResponse,
  },
  deleteSwiftSecret: {
    path: '/org.apache.airavata.mft.credential.service.swift.SwiftSecretService/deleteSwiftSecret',
    requestStream: false,
    responseStream: false,
    requestType: swift_SwiftCredential_pb.SwiftSecretDeleteRequest,
    responseType: swift_SwiftCredential_pb.SwiftSecretDeleteResponse,
    requestSerialize: serialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretDeleteRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretDeleteRequest,
    responseSerialize: serialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretDeleteResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_credential_stubs_swift_SwiftSecretDeleteResponse,
  },
};

exports.SwiftSecretServiceClient = grpc.makeGenericClientConstructor(SwiftSecretServiceService);
