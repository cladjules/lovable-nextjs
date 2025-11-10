#!/bin/bash

echo "Watching changes..."

BUILD_DIR=./nextjs
CLIENT_DIR=$BUILD_DIR/src/client

mkdir $BUILD_DIR
mkdir $BUILD_DIR/src
mkdir $CLIENT_DIR

cp -rf ../src/* $CLIENT_DIR
cp -rf ../public $BUILD_DIR

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

# Move nextjs folder
cp -rf $BUILD_DIR/. .$BUILD_DIR/
rm -rf $BUILD_DIR/
