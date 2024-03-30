import { ServiceError, credentials } from '@grpc/grpc-js';
import { org } from '../../../node-sdk/src/airavata_mft_sdk/common/StorageCommon';
import StorageListResponse = org.apache.airavata.mft.resource.stubs.storage.common.StorageListResponse;

import StorageCommonServiceClient = org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonServiceClient;

import StorageListRequest = org.apache.airavata.mft.resource.stubs.storage.common.StorageListRequest;
import StorageSearchRequest = org.apache.airavata.mft.resource.stubs.storage.common.StorageSearchRequest;
import SecretForStorageGetRequest = org.apache.airavata.mft.resource.stubs.storage.common.SecretForStorageGetRequest;
import SecretForStorage = org.apache.airavata.mft.resource.stubs.storage.common.SecretForStorage;
import StorageType = org.apache.airavata.mft.resource.stubs.storage.common.StorageType;

const client = new StorageCommonServiceClient('localhost:7003', credentials.createInsecure());

const listStoragesRpc = (): Promise<StorageListResponse> => {
    return new Promise((resolve, reject) => {
        const request = new StorageListRequest();
        client.listStorages(request, (error: ServiceError | null, response: StorageListResponse) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(response);
        });
    });
}

const getSecretForStorage = (storageId: string): Promise<SecretForStorage> => {
    return new Promise((resolve, reject) => {
        const request = new SecretForStorageGetRequest({ storageId });
        client.getSecretForStorage(request, (error: ServiceError | null, response: SecretForStorage) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(response);
        });
    });
}

const searchStoragesRpc = (storageName: string): Promise<StorageListResponse> => {
    return new Promise((resolve, reject) => {
        const request = new StorageSearchRequest({ storageName });
        client.searchStorages(request, (error: ServiceError | null, response: StorageListResponse) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(response);
        });
    });
}

export { listStoragesRpc, searchStoragesRpc, getSecretForStorage, SecretForStorage, StorageCommonServiceClient, StorageListRequest, StorageListResponse, StorageSearchRequest, SecretForStorageGetRequest, StorageType, };
