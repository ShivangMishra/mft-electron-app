import { Client, ClientUnaryCall, ServiceError, credentials } from '@grpc/grpc-js';
import { org } from '../../node-sdk/src/airavata_mft_sdk/common/StorageCommon';
import StorageListResponse = org.apache.airavata.mft.resource.stubs.storage.common.StorageListResponse;

import StorageCommonServiceClient = org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonServiceClient;
import StorageListRequest = org.apache.airavata.mft.resource.stubs.storage.common.StorageListRequest;

const client = new StorageCommonServiceClient('localhost:7003', credentials.createInsecure());
const request = new StorageListRequest();

const listStoragesRpc = (): Promise<StorageListResponse> => {
    return new Promise((resolve, reject) => {
        client.listStorages(request, (error: ServiceError | null, response: StorageListResponse) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(response);
        });
    });
}

export { listStoragesRpc };