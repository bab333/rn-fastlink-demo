/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, WebView, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import moment from 'moment';

type Props = {
  rsession: string,
  token: string,
  redirectReq: string,
  app: string,
  callback: string,
  siteAccountId: string,
  flow: string,
  fastlinkUrl: string,
  show: boolean,
  handleBack: Function,
};

const { width, height } = Dimensions.get('window');

export default class FastlinkWebView extends Component<Props> {
  render() {
    const {
      app,
      redirectReq, // default: 'true'
      rsession,
      token,
      callback,
      siteAccountId,
      flow, // default: 'edit'
      fastlinkUrl,
      show,
      handleBack,
    } = this.props;

    if (!show) return null;

    const method = 'POST';
    const uri = fastlinkUrl;
    const extraParams = `callback=${callback}&siteAccountId=${siteAccountId}&flow=${flow}`;
    const body = `rsession=${rsession}&token=${token}&app=${app}&redirectReq=${redirectReq}&extraParams=${extraParams}`;

    const timestamp = Date.now();
    const datestring = moment(timestamp).format('MMMM DD, YYYY HH:mm:ss+Z');

    console.log('timestamp date string:', datestring);
    console.log('request method: ', method);
    console.log('fastlink url: ', uri);
    console.log('all request params: ', body);

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBack}>
          <Text>{'< Go Back'}</Text>
        </TouchableOpacity>

        <Text
          style={styles.message}>
          Please open your browser console (in the ReactNative debugger tab, which should have launched automatically) to see output logs.
        </Text>

        <WebView
          source={{
            uri,
            method,
            body,
          }}
          style={styles.webView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 80,
    left: 0,
    bottom: 0,
    right: 0,
    width,
    height,
    backgroundColor: 'white',
  },
  message: {
    height: 100,
    textAlign: 'center',
    width,
    paddingLeft: 16,
    paddingRight: 16,
  },
  webView: {
    width,
    height: 300,
  },
});
