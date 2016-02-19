'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import { getUser } from './API';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: getUser()
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F0F0F0'}}>
        <View style={styles.myView}>
          <Image style={styles.backgroundImg}
            source={{uri: 'http://imglf2.nosdn.127.net/img/Rnllckgyb0FBY29UTGgzSEFzaFZYNTcxcEUyNlpWOWx3T0t6clVrMHd0RFZOT1VzS3BoNmpnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg'}}>
            <View style={styles.head}>
              <Image style={styles.headImg}
                source={{uri: this.state.user.headImgUrl}}
              >
              </Image>
            </View>
          </Image>
          <View style={styles.usermsg}>
            <Text style={styles.userText}>{this.state.user.nickname}</Text>
            <Text style={styles.userText}>{this.state.user.province}，{this.state.user.city}</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text style={{color: 'red', alignSelf: 'center'}}>0</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={{color: 'red', alignSelf: 'center'}}>0</Text>
              </View>
            </View>
            <ScrollableTabView
              tabBarUnderlineColor='#009999'
              tabBarActiveTextColor='#808080'
              tabBarInactiveTextColor='#808080'
            >
              <View tabLabel='我发布的' style={{flex: 1}}>
              </View>
              <View tabLabel='我监督的' style={{flex: 1}}>
              </View>
            </ScrollableTabView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    margin: 20,
    backgroundColor: '#FFF'
  },
  backgroundImg: {
    height: 150
  },
  head: {
    backgroundColor: '#FFF',
    marginTop: 10,
    height: 80,
    width: 80,
    borderRadius: 40,
    alignSelf: 'center'
  },
  headImg: {
    margin: 5,
    height: 70,
    borderRadius: 35
  },
  usermsg: {
    marginTop: 10,
    alignSelf: 'center'
  },
  userText: {
    alignSelf: 'center',
    color: '#808080'
  }
});
