#!/bin/bash
SCRIPT_PATH="./sh/ios-remove-old-build.sh"
bash "$SCRIPT_PATH"

echo "old build removed"

react-native bundle --platform ios --dev true --entry-file index.js  --bundle-output ios/main.jsbundle --assets-dest ios/b/
cd ios 
pod install
xcodebuild clean archive -workspace ../ios/LoginRegistrationAppReactNative.xcworkspace -scheme LoginRegistrationAppReactNative -archivePath ../ios/build/LoginRegistrationAppReactNative.xcarchive | xcpretty
xcodebuild -exportArchive -archivePath ../ios/build/LoginRegistrationAppReactNative.xcarchive -exportPath ../ios/builds/ -exportOptionsPlist ../ios/builds2/LoginRegistrationAppReactNative.plist | xcpretty
