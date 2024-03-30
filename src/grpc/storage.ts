import { credentials } from "@grpc/grpc-js";

import { searchStoragesRpc, getSecretForStorage } from "./common/storageCommon";
import { FetchResourceMetadataRequest, GetResourceMetadataFromIDsRequest, MFTTransferServiceClient } from "./mftTransferApi";
import { ResourceMetadata } from "./mftAgentStubs";

const client = new MFTTransferServiceClient('localhost:7003', credentials.createInsecure());

const lsStorage = async (storageId: string, resourcePath?: string): Promise<ResourceMetadata> => {
    const secretId = (await getSecretForStorage(storageId)).secretId;
    const request = new GetResourceMetadataFromIDsRequest({ storageId, secretId, resourcePath });
    const resourceMetadataRequest = new FetchResourceMetadataRequest({ idRequest: request });
    return new Promise((resolve, reject) => {
        client.resourceMetadata(resourceMetadataRequest, (error, response) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(response);
        });
    });
}


export { lsStorage };