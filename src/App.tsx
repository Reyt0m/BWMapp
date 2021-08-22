import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import { WebView } from 'react-native-webview';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <WebView source={{uri: "https://wsdmoodle.waseda.jp/my/"}} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;