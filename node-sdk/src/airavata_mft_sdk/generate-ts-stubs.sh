#!/bin/bash

RESOURCE_DIR=.
SECRET_DIR=.
COMMON_DIR=.
TRANSFER_DIR=.

mkdir -p $RESOURCE_DIR
mkdir -p $SECRET_DIR
mkdir -p $COMMON_DIR
mkdir -p $TRANSFER_DIR

echo "Building Common Stubs........."
# protoc-gen-grpc \
#           --js_out=import_style=commonjs,binary:$COMMON_DIR \
#           -I ../../../common/mft-common-proto/src/main/proto/ \
#           ../../../common/mft-common-proto/src/main/proto/CredCommon.proto
protoc \
          --ts_out=grpc_js:$COMMON_DIR \
          -I ../../../common/mft-common-proto/src/main/proto/ \
          ../../../common/mft-common-proto/src/main/proto/CredCommon.proto

echo "Building Resource Stubs........."
# protoc-gen-grpc \
        #   --js_out=import_style=commonjs,binary:$RESOURCE_DIR \
        #   -I ../../../services/resource-service/stub/src/main/proto \
        #   -I ../../../common/mft-common-proto/src/main/proto/ \
        #   --grpc_out=grpc_js:$RESOURCE_DIR \
        #   ../../../services/resource-service/stub/src/main/proto/s3/S3StorageService.proto \
        #   ../../../services/resource-service/stub/src/main/proto/s3/S3Storage.proto \
        #   ../../../services/resource-service/stub/src/main/proto/scp/SCPStorage.proto \
        #   ../../../services/resource-service/stub/src/main/proto/scp/SCPStorageService.proto \
        #   ../../../services/resource-service/stub/src/main/proto/local/LocalStorageService.proto \
        #   ../../../services/resource-service/stub/src/main/proto/local/LocalStorage.proto \
        #   ../../../services/resource-service/stub/src/main/proto/gcs/GCSStorageService.proto \
        #   ../../../services/resource-service/stub/src/main/proto/gcs/GCSStorage.proto \
        #   ../../../services/resource-service/stub/src/main/proto/ftp/FTPStorageService.proto \
        #   ../../../services/resource-service/stub/src/main/proto/ftp/FTPStorage.proto \
        #   ../../../services/resource-service/stub/src/main/proto/dropbox/DropboxStorageService.proto \
        #   ../../../services/resource-service/stub/src/main/proto/dropbox/DropboxStorage.proto \
        #   ../../../services/resource-service/stub/src/main/proto/box/BoxStorageService.proto \
        #   ../../../services/resource-service/stub/src/main/proto/box/BoxStorage.proto \
        #   ../../../services/resource-service/stub/src/main/proto/azure/AzureStorageService.proto \
        #   ../../../services/resource-service/stub/src/main/proto/azure/AzureStorage.proto \
        #   ../../../services/resource-service/stub/src/main/proto/swift/SwiftStorageService.proto \
        #   ../../../services/resource-service/stub/src/main/proto/swift/SwiftStorage.proto \
        #   ../../../services/resource-service/stub/src/main/proto/odata/ODataStorageService.proto \
        #   ../../../services/resource-service/stub/src/main/proto/odata/ODataStorage.proto \
        #   ../../../services/resource-service/stub/src/main/proto/http/HTTPStorageService.proto \
        #   ../../../services/resource-service/stub/src/main/proto/http/HTTPStorage.proto \
        #   ../../../services/resource-service/stub/src/main/proto/common/StorageCommon.proto



protoc \
          --ts_out=grpc_js:$RESOURCE_DIR \
          -I ../../../services/resource-service/stub/src/main/proto \
          -I ../../../common/mft-common-proto/src/main/proto/ \
          ../../../services/resource-service/stub/src/main/proto/s3/S3StorageService.proto \
          ../../../services/resource-service/stub/src/main/proto/s3/S3Storage.proto \
          ../../../services/resource-service/stub/src/main/proto/scp/SCPStorage.proto \
          ../../../services/resource-service/stub/src/main/proto/scp/SCPStorageService.proto \
          ../../../services/resource-service/stub/src/main/proto/local/LocalStorageService.proto \
          ../../../services/resource-service/stub/src/main/proto/local/LocalStorage.proto \
          ../../../services/resource-service/stub/src/main/proto/gcs/GCSStorageService.proto \
          ../../../services/resource-service/stub/src/main/proto/gcs/GCSStorage.proto \
          ../../../services/resource-service/stub/src/main/proto/ftp/FTPStorageService.proto \
          ../../../services/resource-service/stub/src/main/proto/ftp/FTPStorage.proto \
          ../../../services/resource-service/stub/src/main/proto/dropbox/DropboxStorageService.proto \
          ../../../services/resource-service/stub/src/main/proto/dropbox/DropboxStorage.proto \
          ../../../services/resource-service/stub/src/main/proto/box/BoxStorageService.proto \
          ../../../services/resource-service/stub/src/main/proto/box/BoxStorage.proto \
          ../../../services/resource-service/stub/src/main/proto/azure/AzureStorageService.proto \
          ../../../services/resource-service/stub/src/main/proto/azure/AzureStorage.proto \
          ../../../services/resource-service/stub/src/main/proto/swift/SwiftStorageService.proto \
          ../../../services/resource-service/stub/src/main/proto/swift/SwiftStorage.proto \
          ../../../services/resource-service/stub/src/main/proto/odata/ODataStorageService.proto \
          ../../../services/resource-service/stub/src/main/proto/odata/ODataStorage.proto \
          ../../../services/resource-service/stub/src/main/proto/http/HTTPStorageService.proto \
          ../../../services/resource-service/stub/src/main/proto/http/HTTPStorage.proto \
          ../../../services/resource-service/stub/src/main/proto/common/StorageCommon.proto




echo "Building Secret Stubs........."
# protoc-gen-grpc \
        #   --js_out=import_style=commonjs,binary:$SECRET_DIR \
        #   -I ../../../services/secret-service/stub/src/main/proto \
        #   -I ../../../common/mft-common-proto/src/main/proto/ \
        #   --grpc_out=grpc_js:$SECRET_DIR \
        #   ../../../services/secret-service/stub/src/main/proto/azure/AzureCredential.proto \
        #   ../../../services/secret-service/stub/src/main/proto/azure/AzureSecretService.proto \
        #   ../../../services/secret-service/stub/src/main/proto/box/BoxCredential.proto \
        #   ../../../services/secret-service/stub/src/main/proto/box/BoxSecretService.proto \
        #   ../../../services/secret-service/stub/src/main/proto/dropbox/DropboxCredential.proto \
        #   ../../../services/secret-service/stub/src/main/proto/dropbox/DropboxSecretService.proto \
        #   ../../../services/secret-service/stub/src/main/proto/ftp/FTPCredential.proto \
        #   ../../../services/secret-service/stub/src/main/proto/ftp/FTPSecretService.proto \
        #   ../../../services/secret-service/stub/src/main/proto/gcs/GCSCredential.proto \
        #   ../../../services/secret-service/stub/src/main/proto/gcs/GCSSecretService.proto \
        #   ../../../services/secret-service/stub/src/main/proto/s3/S3Credential.proto \
        #   ../../../services/secret-service/stub/src/main/proto/s3/S3SecretService.proto \
        #   ../../../services/secret-service/stub/src/main/proto/scp/SCPCredential.proto \
        #   ../../../services/secret-service/stub/src/main/proto/scp/SCPSecretService.proto \
        #   ../../../services/secret-service/stub/src/main/proto/swift/SwiftCredential.proto \
        #   ../../../services/secret-service/stub/src/main/proto/swift/SwiftSecretService.proto \
        #   ../../../services/secret-service/stub/src/main/proto/odata/ODataCredential.proto \
        #   ../../../services/secret-service/stub/src/main/proto/odata/ODataSecretService.proto \
        #   ../../../services/secret-service/stub/src/main/proto/http/HttpCredential.proto \
        #   ../../../services/secret-service/stub/src/main/proto/http/HttpSecretService.proto

protoc \
          --ts_out=grpc_js:$SECRET_DIR \
          -I ../../../services/secret-service/stub/src/main/proto \
          -I ../../../common/mft-common-proto/src/main/proto/ \
          ../../../services/secret-service/stub/src/main/proto/azure/AzureCredential.proto \
          ../../../services/secret-service/stub/src/main/proto/azure/AzureSecretService.proto \
          ../../../services/secret-service/stub/src/main/proto/box/BoxCredential.proto \
          ../../../services/secret-service/stub/src/main/proto/box/BoxSecretService.proto \
          ../../../services/secret-service/stub/src/main/proto/dropbox/DropboxCredential.proto \
          ../../../services/secret-service/stub/src/main/proto/dropbox/DropboxSecretService.proto \
          ../../../services/secret-service/stub/src/main/proto/ftp/FTPCredential.proto \
          ../../../services/secret-service/stub/src/main/proto/ftp/FTPSecretService.proto \
          ../../../services/secret-service/stub/src/main/proto/gcs/GCSCredential.proto \
          ../../../services/secret-service/stub/src/main/proto/gcs/GCSSecretService.proto \
          ../../../services/secret-service/stub/src/main/proto/s3/S3Credential.proto \
          ../../../services/secret-service/stub/src/main/proto/s3/S3SecretService.proto \
          ../../../services/secret-service/stub/src/main/proto/scp/SCPCredential.proto \
          ../../../services/secret-service/stub/src/main/proto/scp/SCPSecretService.proto \
          ../../../services/secret-service/stub/src/main/proto/swift/SwiftCredential.proto \
          ../../../services/secret-service/stub/src/main/proto/swift/SwiftSecretService.proto \
          ../../../services/secret-service/stub/src/main/proto/odata/ODataCredential.proto \
          ../../../services/secret-service/stub/src/main/proto/odata/ODataSecretService.proto \
          ../../../services/secret-service/stub/src/main/proto/http/HttpCredential.proto \
          ../../../services/secret-service/stub/src/main/proto/http/HttpSecretService.proto


echo "Building Agent Stubs........."
# protoc-gen-grpc \
#           --js_out=import_style=commonjs,binary:. \
#           -I ../../../agent/stub/src/main/proto/ \
#           -I ../../../common/mft-common-proto/src/main/proto/ \
#           -I ../../../services/resource-service/stub/src/main/proto \
#           -I ../../../services/secret-service/stub/src/main/proto \
#           --grpc_out=grpc_js:. \
#           ../../../agent/stub/src/main/proto/MFTAgentStubs.proto
protoc \
          --ts_out=grpc_js:. \
          -I ../../../agent/stub/src/main/proto/ \
          -I ../../../common/mft-common-proto/src/main/proto/ \
          -I ../../../services/resource-service/stub/src/main/proto \
          -I ../../../services/secret-service/stub/src/main/proto \
          ../../../agent/stub/src/main/proto/MFTAgentStubs.proto

echo "Building API Stubs........."
# protoc-gen-grpc  \
#           --js_out=import_style=commonjs,binary:$TRANSFER_DIR \
#           -I ../../../api/stub/src/main/proto \
#           -I ../../../common/mft-common-proto/src/main/proto/ \
#           -I ../../../services/resource-service/stub/src/main/proto \
#           -I ../../../services/secret-service/stub/src/main/proto \
#           -I ../../../agent/stub/src/main/proto/ \
#           --grpc_out=grpc_js:$TRANSFER_DIR \
#           ../../../api/stub/src/main/proto/MFTTransferApi.proto

protoc  \
          --ts_out=grpc_js:$TRANSFER_DIR \
          -I ../../../api/stub/src/main/proto \
          -I ../../../common/mft-common-proto/src/main/proto/ \
          -I ../../../services/resource-service/stub/src/main/proto \
          -I ../../../services/secret-service/stub/src/main/proto \
          -I ../../../agent/stub/src/main/proto/ \
          ../../../api/stub/src/main/proto/MFTTransferApi.proto


# # Modify import statements in generated files
# sed -i'.bak' -e 's/^import \([^;]*\)pb2/from \1airavata_mft_sdk.\1pb2/' *pb2_grpc.d.ts

# Remove backup files
find . -name "*.bak" -type f -delete
