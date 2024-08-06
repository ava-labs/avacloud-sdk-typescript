#!/bin/bash

# Install the speakeasy CLI
curl -fsSL https://raw.githubusercontent.com/speakeasy-api/speakeasy/main/install.sh | sh

# Setup samples directory
rmdir samples || true
mkdir samples

npm install
npm install -g ts-node
npm link
npm link @avalabs/glacier-sdk
TS_CONFIG_CONTENT=$(cat <<EOL
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "openapi": ["../src/index"],
      "openapi/*": ["../src/*"]
    }
  },
  "include": ["./**/*.ts"]
}
EOL
)
echo "$TS_CONFIG_CONTENT" > samples/tsconfig.json

# Generate starter usage sample with speakeasy
speakeasy generate usage -s https://ad39-2405-201-3027-2887-d9b-fc28-c7ec-5133.ngrok-free.app/api-json -l typescript -o samples/root.ts