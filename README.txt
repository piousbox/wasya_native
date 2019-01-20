
== Setup ==

 npm install --save react-native-gesture-handler
 react-native link react-native-gesture-handler
 react-native link react-native-vector-icons
 
== Develop ==

 react-native run-android
 react-native run-ios
 react-native run-ios --simulator="iPhone 4s"

== Build / Deploy ==

 ./gradlew assembleRelease



== Troubleshooting ==
=== xcrun: error: unable to find utility "instruments", not a developer tool or in PATH ===
https://stackoverflow.com/questions/39778607/error-running-react-native-app-from-terminal-ios