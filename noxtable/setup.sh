#!/bin/bash

update=0

if [ "$1" == "--update" ]; then
    update=1
    echo "Starting Update..."
else 
    echo "Starting Setup..."
    echo "You can run 'npm run update' to only update lovable component files."
    echo "layout, provider, package and config files will not be modified."
fi

BUILD_DIR=./nextjs
CLIENT_DIR=$BUILD_DIR/src/client
APP_DIR=$BUILD_DIR/src/app

# Cleanup
rm -rf .$BUILD_DIR/src/client

# Setup
npm i
mkdir $BUILD_DIR
mkdir $BUILD_DIR/src
mkdir $CLIENT_DIR
mkdir .$BUILD_DIR
mkdir .$CLIENT_DIR

# Copy resources
cp -rf ./src $BUILD_DIR
cp -rf ../src/* $CLIENT_DIR

if [ "$update" = 0 ]; then
    # Merge package files
    npx package-json-merge ../package.json noxtable-package.json  > $BUILD_DIR/package.json

    cp .gitignore $BUILD_DIR
    cp next.config.ts $BUILD_DIR
    cp ../postcss* $BUILD_DIR
    cp ../tailwind* $BUILD_DIR
    cp ../eslint* $BUILD_DIR
    cp ../components.json $BUILD_DIR

    # Copy tsconfig
    cp ../tsconfig* $BUILD_DIR
    mv $BUILD_DIR/tsconfig.json $BUILD_DIR/tsconfig-vite.json 
    cp ./tsconfig.json $BUILD_DIR/tsconfig-nextjs.json
    cp ./noxtable-tsconfig.json $BUILD_DIR/tsconfig.json

    # Setup layout.tsx and providers.tsx
    cp './templates/layout.tsx' $APP_DIR
    cp '../src/App.tsx' $APP_DIR/providers.tsx
    node scripts/create-layout.js

    # Change a few paths
    sed -i '' -e 's/src\//client\//g' $BUILD_DIR/tailwind.config.ts
    sed -i '' -e 's/src\//client\//g'  $BUILD_DIR/components.json 
fi

# Add "use client"
find $CLIENT_DIR -type f -name "*.tsx"  | while read i; do
    echo '"use client";' > temp_file && cat "$i" >> temp_file && mv temp_file "$i"
done

# Create the Next pages
node scripts/create-pages.js

# Cleanup some resources
rm $CLIENT_DIR/*vite*
rm $CLIENT_DIR/App.tsx
rm $CLIENT_DIR/main.tsx

# Change a few imports
grep "react-router-dom" $CLIENT_DIR -lr | xargs sed -i '' -e 's/react-router-dom/@App\/useRouter/g'

# Cleanup
npx eslint ./nextjs/src/app/ --fix

# Move nextjs folder
cp -rf $BUILD_DIR/. .$BUILD_DIR/
rm -rf $BUILD_DIR/

# Package install
cd .$BUILD_DIR
npm i
