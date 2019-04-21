import React from 'react';
import { StyleSheet, View, WebView } from 'react-native';
import { SafeAreaView } from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, margin: 0, padding: 0}}>
          <WebView useWebKit={true} source={{url: 'http://dimiwords.tk:39991/#/'}} style={{flex: 1}}/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  webview: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
