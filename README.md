# ReactNative Fastlink Demo app

[Pre-Requisites](#prerequisites)
[Demo App Setup](#setup)
[Resources](#resources)

## prerequisites

install [xcode](https://developer.apple.com/xcode).

**note:** xcode version 9.4 is highly recommended. there may be fatal bugs if using xcode 10.

install [nodejs](https://nodejs.org/en/download/).

install [watchman](https://facebook.github.io/watchman/).

install [react-native-cli](https://github.com/facebook/react-native#readme).

**notes:**

for node and watchman-- on a mac with [homebrew](http://brew.sh/) installed, you can simply run:

`brew install node` and `brew install watchman`

## setup

```
git clone https://github.com/medeanfinance/rn-fastlink-demo
cd rn-fastlink-demo
yarn setup
```

this should launch a simulator automatically.

**note:**

before submitting the fastlink inputs form, please press `ctrl D` (or `cmd D` on a mac) and make sure you are debugging JS remotely, as this is the only way you can view the output logs.

## resources

[react native getting started guide](https://facebook.github.io/react-native/docs/getting-started)

[docs for react native's webview component](https://facebook.github.io/react-native/docs/webview)
