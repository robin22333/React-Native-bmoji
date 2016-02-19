'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

export default class AgreeCardList extends Component {
  render() {
    let item = this.props.AgreeItem;
    return (
      <View style={styles.agreeCard}>
        <View style={{flex: 1}}>
          <Image style={styles.headImg}
            source={{uri: item.headImgUrl}}
          ></Image>
        </View>
        <TouchableHighlight style={{flex:5}}
          activeOpacity={0.8}
        >
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.textView}>
              <Text style={styles.userText}>{item.nickname}</Text>
              <Text style={styles.userText}>目标：{item.goal}</Text>
            </View>
            <View style={styles.textView}>
              <View style={styles.depositView}>
                <Text style={styles.depositText}>押金：<Text style={{color: 'red'}}>{item.deposit}</Text>元</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardBottom}>
            <View style={{flex: 1, marginTop:10}}>
              <Text style={styles.userText}>{item.evolveMsg}</Text>
            </View>
            <View style={{flex: 3, flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Image style={styles.evolveImg}
                  source={{uri: item.evolveImgUrl}}
                >
                </Image>
              </View>
              <View style={styles.textView}>
                <Text style={styles.evolveText}>{item.evolveDay}/{item.allDay}天</Text>
                <Text style={styles.evolveText}>坚挺持续中!</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  agreeCard: {
    height: 200,
    flexDirection: 'row',
    margin: 20
  },
  headImg: {
    height: 40,
    borderRadius: 20,
    width: 40
  },
  card: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    padding: 10
  },
  cardTop: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth:0.5,
    borderColor: '#A9A9A9'
  },
  textView: {
    flex: 1,
    justifyContent:'center'
  },
  userText: {
    color: '#808080',
    fontSize: 12
  },
  depositView: {
    borderRadius: 10,
    borderColor: '#009999',
    borderWidth: 3,
    width: 100,
    height: 30,
    alignSelf: 'center',
    justifyContent:'center'
  },
  depositText: {
    fontSize: 12,
    alignSelf: 'center'
  },
  cardBottom: {
    flex: 3,
    flexDirection: 'column'
  },
  evolveImg: {
    flex: 1,
    width: 120
  },
  evolveText: {
    alignSelf: 'center',
    color: '#FF4500',
    fontWeight: 'bold'
  }
});
