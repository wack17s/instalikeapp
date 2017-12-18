Here you can see app for Android & IOS to load and see photos written with [react-native](https://facebook.github.io/react-native/), [typescript](https://www.typescriptlang.org/) & [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree)

Used RN libs:
- [react-native-image-picker](https://github.com/react-community/react-native-image-picker)
- [react-native-photo-view](https://github.com/alwx/react-native-photo-view)
- [react-native-modal](https://github.com/react-native-community/react-native-modal)

Useful links:
- https://github.com/Microsoft/TypeScript-React-Native-Starter

Summary:
- React Native just take your index.js and doesn't know about typestcript, so you need all these things in `package.json`:
```json
"tsc": "gulp && tsc",
"clean": "rm -rf build",
"build": "npm run clean && kill-rn-types && npm run tsc --",
"watch": "npm run build -- -w",
"kill-rn-types": "./killRnTypes.sh",
"start:ios": "npm run build && concurrently -r 'npm run watch' 'react-native run-ios'",
"start:android": "npm run build && concurrently -r 'npm run watch' 'react-native run-android'"
```
1. tsc to compile ts --> js
2. gulp to copy png files from src to build (because ts can't do that)
3. ./killRnTypes.sh because @types/node conflicts with @types/react-native

NOTE!: If you want to run `ios` from XCode, you have to `npm run watch` to have re-build of ts using `cmd+R/R+R`.

P.S. It's my experiment with new for me technologies, so i will very appreciate any help, criticism, suggestions, etc.
