'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import Confirm from './bm-ConfirmPage.js';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: ''
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F0F0F0'}}>
        <TextInput
          style={styles.input}
          placeholder='写下你的目标或承诺，如每天夜跑3公里'
          multiline={true}
          onChangeText={(val) => {
            this.setState({
              goal: val
            });
          }}
        >
        </TextInput>
        <TouchableHighlight style={styles.button}
          underlayColor='#009999'
          activeOpacity={0.5}
          onPress={() => {
            let state = this.state;
            this.props.navigator.push({
              title: '确认期限',
              component: Confirm,
              passProps: {val: state.goal}
            });
          }}
        >
          <Text style={styles.buttonText}>确认目标</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 150,
    margin: 20,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
  button: {
    height: 40,
    margin: 20,
    backgroundColor: '#009999',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center',
  }
});
