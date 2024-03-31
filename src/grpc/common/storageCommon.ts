import { ServiceError, credentials } from '@grpc/grpc-js';
import { org } from '../../../node-sdk/src/airavata_mft_sdk/common/StorageCommon';
import StorageListResponse = org.apache.airavata.mft.resource.stubs.storage.common.StorageListResponse;

import StorageCommonServiceClient = org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonServiceClient;

import StorageListRequest = org.apache.airavata.mft.resource.stubs.storage.common.StorageListRequest;
import StorageSearchRequest = org.apache.airavata.mft.resource.stubs.storage.common.StorageSearchRequest;
import SecretForStorageGetRequest = org.apache.airavata.mft.resource.stubs.storage.common.SecretForStorageGetRequest;
import SecretForStorage = org.apache.airavata.mft.resource.stubs.storage.common.SecretForStorage;
import SecretForStorageDeleteRequest = org.apache.airavata.mft.resource.stubs.storage.common.SecretForStorageDeleteRequest;
import SecretForStorageDeleteResponse = org.apache.airavata.mft.resource.stubs.storage.common.SecretForStorageDeleteResponse;

import StorageType = org.apache.airavata.mft.resource.stubs.storage.common.StorageType;

const storageCommonServiceClient = new StorageCommonServiceClient('localhost:7003', credentials.createInsecure());

const listStoragesRpc = (): Promise<StorageListResponse> => {
    return new Promise((resolve, reject) => {
        const request = new StorageListRequest();
        storageCommonServiceClient.listStorages(request, (error: ServiceError | null, response: StorageListResponse) => {
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
        storageCommonServiceClient.getSecretForStorage(request, (error: ServiceError | null, response: SecretForStorage) => {
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
        storageCommonServiceClient.searchStorages(request, (error: ServiceError | null, response: StorageListResponse) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(response);
        });
    });
}

const removeSecretForStorage = (storageId: string): Promise<SecretForStorageDeleteResponse> => {
    return new Promise((resolve, reject) => {
        const request = new SecretForStorageDeleteRequest({ storageId });
        storageCommonServiceClient.deleteSecretsForStorage(request, (error: ServiceError | null, response: SecretForStorageDeleteResponse) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(response);
        });
    });
}

export {
    listStoragesRpc, searchStoragesRpc, getSecretForStorage, SecretForStorage,
    StorageCommonServiceClient, StorageListRequest, StorageListResponse, StorageSearchRequest,
    SecretForStorageGetRequest, removeSecretForStorage, StorageType,
};
