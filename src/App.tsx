import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import {
  initAutoLogin,
  doLogin,
  logout,
  ensureLogin,
} from "./components/auto-login/auto-login";

const  App: React.FC = () => {
  const loginInfo = initAutoLogin();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          source={{
            uri: "https://wsdmoodle.waseda.jp/auth/saml2/login.php?wants=https%3A%2F%2Fwsdmoodle.waseda.jp%2F&idp=fcc52c5d2e034b1803ea1932ae2678b0&passive=off",
          }}
        />
        <WebView source={{ uri: "https://wsdmoodle.waseda.jp/my/" }} />
      </SafeAreaView>
    </>
  );
};

// const styles = StyleSheet.create({});

// export default App;

// import React, { Component } from 'react';
// import { View } from 'react-native';
// import { WebView } from 'react-native-webview';

// export default class App extends Component {
//   render() {
//     const runFirst = `
//       document.body.style.backgroundColor = 'white';
//       setTimeout(function() { window.alert('hi') }, 2000);
//       true; // note: this is required, or you'll sometimes get silent failures
//     `;
//     return (
//       <>
//         <View style={{ flex: 0.8 }}>
//           <WebView
//             source={{
//               uri: 'https://wsdmoodle.waseda.jp/my/',
//             }}
//             onMessage={(event) => {}}
//             injectedJavaScript={runFirst}
//           />
//         </View>
//       </>
//     );
//   }
// }

// import React from 'react';
// import { WebView } from 'react-native-webview';
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Button,
//   Modal,
//   SafeAreaView,
//   } from 'react-native';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isShowWebView: false,
//       accessURL: '',
//       isLengthExists: false,
//     }
//   }

//   toggleGoButton(text) {
//     if (0 !== text.length) {
//       this.setState({isLengthExists: true});
//     } else {
//       this.setState({isLengthExists: false});
//     }
//     this.setState({accessURL: text});
//   }

//   toggleModalDisplay(visible) {
//     this.setState({
//       isShowWebView: visible
//     });
//   }

//   render() {

//     return (
//       <SafeAreaView style={styles.container}>
//         <View style={[styles.viewURLInput]}>
//           <TextInput
//             autoCapitalize='none'
//             keyboardType='url'
//             placeholder='Enter URL'
//             placeholderTextColor='#888888'
//             returnKeyType='go'
//             onSubmitEditing={(e) => this.toggleModalDisplay(!this.state.isShowWebView)}
//             onChangeText={(text) => this.toggleGoButton(text)}
//             clearButtonMode='while-editing'
//             style={styles.viewURLInput__url}
//             autoFocus={true}
//           />
//           <View style={styles.viewURLInput__button}>
//             <Button
//               disabled={!this.state.isLengthExists}
//               title='Go!'
//               accessibilityLabel='Access to inputed URL'
//               onPress={() => {this.toggleModalDisplay(!this.state.isShowWebView)}}
//             />
//           </View>
//         </View>
//         <Modal
//           style={styles.container}
//           visible={this.state.isShowWebView}
//           animationType='slide'>
//           <SafeAreaView style={styles.viewModal}>
//             <WebView
//               source={{uri: this.state.accessURL}}
//               useWebKit={true}
//             />
//             <View style={styles.viewModal__aside}>
//               <Button
//                 title='Close'
//                 onPress={() => {this.toggleModalDisplay(!this.state.isShowWebView)}}
//               />
//             </View>
//           </SafeAreaView>
//         </Modal>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   viewURLInput: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'stretch',
//     padding: 16,
//   },
//   viewURLInput__url: {
//     textAlign: 'left',
//     borderBottomWidth: 1,
//     paddingVertical: 8,
//   },
//   viewURLInput__button: {
//     top: 16,
//   },
//   viewModal: {
//     flex: 1,
//   },
//   viewModal__aside: {
//     paddingBottom: 24,
//   },
// });
