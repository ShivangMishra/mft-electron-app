import { credentials } from "@grpc/grpc-js";

import { searchStoragesRpc, getSecretForStorage, SecretForStorage, StorageType, StorageCommonServiceClient } from "./common/storageCommon";
import { FetchResourceMetadataRequest, GetResourceMetadataFromIDsRequest, MFTTransferServiceClient } from "./mftTransferApi";
import { GetResourceMetadataRequest, ResourceMetadata, SecretWrapper, StorageWrapper } from "./mftAgentStubs";
import { S3Secret, S3SecretCreateRequest } from "./s3/s3Credential";
import { S3Storage, S3StorageCreateRequest } from "./s3/s3Storage";
import { S3SecretServiceClient } from "./s3/s3SecretService";
import { S3StorageServiceClient } from "./s3/s3StorageService";

const mftTransferServiceClient = new MFTTransferServiceClient('localhost:7003', credentials.createInsecure());
const s3SecretApiClient = new S3SecretServiceClient('localhost:7003', credentials.createInsecure());
const s3StorageServiceClient = new S3StorageServiceClient('localhost:7003', credentials.createInsecure());
const storageCommonServiceClient = new StorageCommonServiceClient('localhost:7003', credentials.createInsecure());

const lsStorage = async (storageId: string, resourcePath?: string): Promise<ResourceMetadata> => {
    const secretId = (await getSecretForStorage(storageId)).secretId;
    const request = new GetResourceMetadataFromIDsRequest({ storageId, secretId, resourcePath });
    const resourceMetadataRequest = new FetchResourceMetadataRequest({ idRequest: request });
    return new Promise((resolve, reject) => {
        mftTransferServiceClient.resourceMetadata(resourceMetadataRequest, (error, response) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(response);
        });
    });
}

const fetchAwsS3BucketList = async (
    data: {
        accessKey: string,
        secretKey: string,
        sessionToken?: string,
        region: string,
    }
): Promise<ResourceMetadata> => {
    const { accessKey, secretKey, sessionToken, region } = data;
    const endpoint = "https://s3." + data.region + ".amazonaws.com";

    const s3Secret = new S3Secret({ accessKey, secretKey, sessionToken });
    const secretWrapper = new SecretWrapper({ s3: s3Secret });

    const s3Storage = new S3Storage({ endpoint, region, enablePathStyleAccess: false });
    const storageWrapper = new StorageWrapper({ s3: s3Storage });

    const directRequest = new GetResourceMetadataRequest({ resourcePath: "", secret: secretWrapper, storage: storageWrapper });
    const resourceMetadataRequest = new FetchResourceMetadataRequest({ directRequest: directRequest });

    return new Promise((resolve, reject) => {
        mftTransferServiceClient.resourceMetadata(resourceMetadataRequest, (error, response) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(response);
        });
    });

}

const addAwsS3Storage = async (data: {
    accessKey: string,
    secretKey: string,
    sessionToken?: string,
    region: string,
    bucketName: string,
    storageName: string,
}): Promise<SecretForStorage> => {
    const { accessKey, secretKey, sessionToken, region, bucketName, storageName } = data;
    const endpoint = "https://s3." + data.region + ".amazonaws.com";

    const storageCreateRequest = new S3StorageCreateRequest({
        endpoint,
        region,
        bucketName,
        name: storageName,
    });
    const createdStorage = await new Promise<S3Storage>((resolve, reject) => {
        s3StorageServiceClient.createS3Storage(storageCreateRequest, (error, response) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(response);
        });
    });
    const secretCreateRequest = new S3SecretCreateRequest({ accessKey, secretKey });
    const createdSecret = await new Promise<S3Secret>((resolve, reject) => {
        s3SecretApiClient.createS3Secret(secretCreateRequest, (error, response) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(response);
        });
    });
    const secretForStorageRequest = new SecretForStorage({
        storageId: createdStorage.storageId,
        secretId: createdSecret.secretId,
        storageType: StorageType.S3
    });
    return new Promise((resolve, reject) => {
        storageCommonServiceClient.registerSecretForStorage(secretForStorageRequest, (error, response) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(response);
        });
    });
}
export { lsStorage, fetchAwsS3BucketList, addAwsS3Storage };