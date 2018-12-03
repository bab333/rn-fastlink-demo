/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

import Webview from './Webview';

type Props = {};
type State = {
  rsession: string,
  token: string,
  redirectReq: string,
  app: string,
  callback: string,
  siteAccountId: string,
  flow: string,
  renderWebView: boolean,
  fastlinkUrl: string,
};

const { width, height } = Dimensions.get('window');

function Input({ name, value, onChange }) {
  return (
    <TextInput
      style={styles.input}
      name={name}
      onChangeText={(text) => onChange(name, text)}
      value={value} />
  );
}

export default class FastlinkLaunch extends Component<Props, State> {
  state = {
    app: '',
    redirectReq: 'true',
    rsession: '',
    token: '',
    callback: '',
    siteAccountId: '',
    flow: 'edit',
    fastlinkUrl: '',
    renderWebView: false,
  };

  handleChange = (name: string, value: string) => {
    this.setState({
      [name]: value,
    });
  };

  toggleWebview = () => {
    this.setState({ renderWebView: !this.state.renderWebView });
  };

  render() {
    const {
      app,
      redirectReq,
      rsession,
      token,
      callback,
      siteAccountId,
      flow,
      fastlinkUrl,
      renderWebView,
    } = this.state;

    return (
      <View style={styles.main}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.message}>
            (Scroll down if submit button is not visible, and make sure you are DEBUGGING JS REMOTELY.)
          </Text>

          <View style={styles.container}>
            <Text>fastlink url</Text>
            <Input
              name="fastlinkUrl"
              onChange={this.handleChange}
              value={fastlinkUrl} />
            <Text>app</Text>
            <Input
              name="app"
              onChange={this.handleChange}
              value={app} />
            <Text>token</Text>
            <Input
              name="token"
              onChange={this.handleChange}
              value={token} />
            <Text>rsession</Text>
            <Input
              name="rsession"
              onChange={this.handleChange}
              value={rsession} />
            <Text>redirectReq</Text>
            <Input
              name="redirectReq"
              onChange={this.handleChange}
              value={redirectReq} />
            <Text>callback</Text>
            <Input
              name="callback"
              onChange={this.handleChange}
              value={callback} />
            <Text>siteAccountId</Text>
            <Input
              name="siteAccountId"
              onChange={this.handleChange}
              value={siteAccountId} />
            <Text>flow</Text>
            <Input
              name="flow"
              onChange={this.handleChange}
              value={flow} />
            <TouchableOpacity
              style={styles.button}
              onPress={this.toggleWebview}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Webview
          handleBack={this.toggleWebview}
          show={renderWebView}
          fastlinkUrl={fastlinkUrl}
          redirectReq={redirectReq}
          rsession={rsession}
          token={token}
          callback={callback}
          siteAccountId={siteAccountId}
          flow={flow}
          app={app} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
  },
  container: {
    paddingLeft: 16,
  },
  input: {
    fontSize: 17,
    height: 52,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
    width: width - 32,
    marginBottom: 4,
    paddingLeft: 4,
  },
  text: {
    fontWeight: 'normal',
    fontSize: 17,
    width: width - 32,
  },
  button: {
    height: 52,
    marginTop: 10,
    backgroundColor: '#67b9f6',
    width: width - 32,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    lineHeight: 52,
    width: '100%',
    textAlign: 'center',
    borderRadius: 2,
  },
  scroll: {
    position: 'absolute',
    top: 80,
    left: 0,
    width,
    height,
  },
  message: {
    textAlign: 'center',
    marginBottom: 8,
  },
});
