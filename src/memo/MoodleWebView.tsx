import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Modal,
  SafeAreaView,
  } from 'react-native';
import { WebView } from "react-native-webview";
import {
  initAutoLogin,
  doLogin,
  logout,
  ensureLogin,
} from "../components/auto-login/auto-login";


export default class MoodleWebView extends Component {
  render() {
    const runFirst = `
      document.body.style.backgroundColor = 'white';
      setTimeout(function() { window.alert('hi') }, 2000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;
    return (
      <>
        <View style={{ flex: 0.8 }}>
          <WebView
            source={{
              uri: 'https://wsdmoodle.waseda.jp/my/',
            }}
            onMessage={(event) => {}}
            injectedJavaScript={runFirst}
          />
        </View>
      </>
    );
  }
}



// ボタンをいくつか用意し、moodle画面の他にも、履歴書を書き込む場所への繊維と、設定画面を用意する。s
