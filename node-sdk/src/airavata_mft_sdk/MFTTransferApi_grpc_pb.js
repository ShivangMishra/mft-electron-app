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
var MFTTransferApi_pb = require('./MFTTransferApi_pb.js');
var CredCommon_pb = require('./CredCommon_pb.js');
var MFTAgentStubs_pb = require('./MFTAgentStubs_pb.js');

function serialize_org_apache_airavata_mft_agent_stub_ResourceMetadata(arg) {
  if (!(arg instanceof MFTAgentStubs_pb.ResourceMetadata)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.agent.stub.ResourceMetadata');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_agent_stub_ResourceMetadata(buffer_arg) {
  return MFTAgentStubs_pb.ResourceMetadata.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_api_service_FetchResourceMetadataRequest(arg) {
  if (!(arg instanceof MFTTransferApi_pb.FetchResourceMetadataRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.api.service.FetchResourceMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_api_service_FetchResourceMetadataRequest(buffer_arg) {
  return MFTTransferApi_pb.FetchResourceMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_api_service_ResourceAvailabilityResponse(arg) {
  if (!(arg instanceof MFTTransferApi_pb.ResourceAvailabilityResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.api.service.ResourceAvailabilityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_api_service_ResourceAvailabilityResponse(buffer_arg) {
  return MFTTransferApi_pb.ResourceAvailabilityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_api_service_TransferApiRequest(arg) {
  if (!(arg instanceof MFTTransferApi_pb.TransferApiRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.api.service.TransferApiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_api_service_TransferApiRequest(buffer_arg) {
  return MFTTransferApi_pb.TransferApiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_api_service_TransferApiResponse(arg) {
  if (!(arg instanceof MFTTransferApi_pb.TransferApiResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.api.service.TransferApiResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_api_service_TransferApiResponse(buffer_arg) {
  return MFTTransferApi_pb.TransferApiResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_api_service_TransferRemoveRequest(arg) {
  if (!(arg instanceof MFTTransferApi_pb.TransferRemoveRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.api.service.TransferRemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_api_service_TransferRemoveRequest(buffer_arg) {
  return MFTTransferApi_pb.TransferRemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_api_service_TransferRemoveResponse(arg) {
  if (!(arg instanceof MFTTransferApi_pb.TransferRemoveResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.api.service.TransferRemoveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_api_service_TransferRemoveResponse(buffer_arg) {
  return MFTTransferApi_pb.TransferRemoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_api_service_TransferStateApiRequest(arg) {
  if (!(arg instanceof MFTTransferApi_pb.TransferStateApiRequest)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.api.service.TransferStateApiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_api_service_TransferStateApiRequest(buffer_arg) {
  return MFTTransferApi_pb.TransferStateApiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_api_service_TransferStateResponse(arg) {
  if (!(arg instanceof MFTTransferApi_pb.TransferStateResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.api.service.TransferStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_api_service_TransferStateResponse(buffer_arg) {
  return MFTTransferApi_pb.TransferStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_airavata_mft_api_service_TransferStateSummaryResponse(arg) {
  if (!(arg instanceof MFTTransferApi_pb.TransferStateSummaryResponse)) {
    throw new Error('Expected argument of type org.apache.airavata.mft.api.service.TransferStateSummaryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_airavata_mft_api_service_TransferStateSummaryResponse(buffer_arg) {
  return MFTTransferApi_pb.TransferStateSummaryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MFTTransferServiceService = exports.MFTTransferServiceService = {
  submitTransfer: {
    path: '/org.apache.airavata.mft.api.service.MFTTransferService/submitTransfer',
    requestStream: false,
    responseStream: false,
    requestType: MFTTransferApi_pb.TransferApiRequest,
    responseType: MFTTransferApi_pb.TransferApiResponse,
    requestSerialize: serialize_org_apache_airavata_mft_api_service_TransferApiRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_api_service_TransferApiRequest,
    responseSerialize: serialize_org_apache_airavata_mft_api_service_TransferApiResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_api_service_TransferApiResponse,
  },
  getAllTransferStates: {
    path: '/org.apache.airavata.mft.api.service.MFTTransferService/getAllTransferStates',
    requestStream: false,
    responseStream: true,
    requestType: MFTTransferApi_pb.TransferStateApiRequest,
    responseType: MFTTransferApi_pb.TransferStateResponse,
    requestSerialize: serialize_org_apache_airavata_mft_api_service_TransferStateApiRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_api_service_TransferStateApiRequest,
    responseSerialize: serialize_org_apache_airavata_mft_api_service_TransferStateResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_api_service_TransferStateResponse,
  },
  getTransferStateSummary: {
    path: '/org.apache.airavata.mft.api.service.MFTTransferService/getTransferStateSummary',
    requestStream: false,
    responseStream: false,
    requestType: MFTTransferApi_pb.TransferStateApiRequest,
    responseType: MFTTransferApi_pb.TransferStateSummaryResponse,
    requestSerialize: serialize_org_apache_airavata_mft_api_service_TransferStateApiRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_api_service_TransferStateApiRequest,
    responseSerialize: serialize_org_apache_airavata_mft_api_service_TransferStateSummaryResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_api_service_TransferStateSummaryResponse,
  },
  getResourceAvailability: {
    path: '/org.apache.airavata.mft.api.service.MFTTransferService/getResourceAvailability',
    requestStream: false,
    responseStream: false,
    requestType: MFTTransferApi_pb.FetchResourceMetadataRequest,
    responseType: MFTTransferApi_pb.ResourceAvailabilityResponse,
    requestSerialize: serialize_org_apache_airavata_mft_api_service_FetchResourceMetadataRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_api_service_FetchResourceMetadataRequest,
    responseSerialize: serialize_org_apache_airavata_mft_api_service_ResourceAvailabilityResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_api_service_ResourceAvailabilityResponse,
  },
  resourceMetadata: {
    path: '/org.apache.airavata.mft.api.service.MFTTransferService/resourceMetadata',
    requestStream: false,
    responseStream: false,
    requestType: MFTTransferApi_pb.FetchResourceMetadataRequest,
    responseType: MFTAgentStubs_pb.ResourceMetadata,
    requestSerialize: serialize_org_apache_airavata_mft_api_service_FetchResourceMetadataRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_api_service_FetchResourceMetadataRequest,
    responseSerialize: serialize_org_apache_airavata_mft_agent_stub_ResourceMetadata,
    responseDeserialize: deserialize_org_apache_airavata_mft_agent_stub_ResourceMetadata,
  },
  removeTransfer: {
    path: '/org.apache.airavata.mft.api.service.MFTTransferService/removeTransfer',
    requestStream: false,
    responseStream: false,
    requestType: MFTTransferApi_pb.TransferRemoveRequest,
    responseType: MFTTransferApi_pb.TransferRemoveResponse,
    requestSerialize: serialize_org_apache_airavata_mft_api_service_TransferRemoveRequest,
    requestDeserialize: deserialize_org_apache_airavata_mft_api_service_TransferRemoveRequest,
    responseSerialize: serialize_org_apache_airavata_mft_api_service_TransferRemoveResponse,
    responseDeserialize: deserialize_org_apache_airavata_mft_api_service_TransferRemoveResponse,
  },
};

exports.MFTTransferServiceClient = grpc.makeGenericClientConstructor(MFTTransferServiceService);
