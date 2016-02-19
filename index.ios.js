/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View
} from 'react-native';
import App from './components/bm-App';

class bmoji extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App></App>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('bmoji', () => bmoji);
