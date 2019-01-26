
== Todo ==

* Implement one more test
* Let's finish the homepage
* let's finish every page

== Done ==

* let's spread links on menu 
* our process - white background, not transparent
* Let's make every panel
* Implement one test

== Setup ==

 npm install --save react-native-gesture-handler
 react-native link react-native-gesture-handler
 react-native link react-native-vector-icons

== Develop ==

 react-native run-android
 react-native run-ios
 react-native run-ios --simulator="iPhone 4s"

== Test ==

 npm run test
 
== Build / Deploy ==

From: https://facebook.github.io/react-native/docs/signed-apk-android

 keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

key password: simple_password
 keytool -list -v -keystore ~/.android/debug.keystore
 adb uninstall "com.wasya_native2"
 
 ./gradlew assembleRelease



== Troubleshooting ==
=== xcrun: error: unable to find utility "instruments", not a developer tool or in PATH ===
https://stackoverflow.com/questions/39778607/error-running-react-native-app-from-terminal-ios

