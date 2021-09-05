#!/bin/bash
SCRIPT_PATH="./sh/remove-old-build.sh"
bash "$SCRIPT_PATH"

echo "old build removed"

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res 
cd android 
./gradlew clean 
./gradlew assembleDebug