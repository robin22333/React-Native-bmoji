'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import AgreeCardList from './bm-AgreeCardList';

export default class Piazza extends Component {
  render() {
    return (
      <ScrollableTabView
        tabBarUnderlineColor='#009999'
        tabBarActiveTextColor='#009999'
      >
        <View tabLabel='热门' style={{flex: 1}}>
          <AgreeCardList type={1}>
          </AgreeCardList>
        </View>
        <View tabLabel='最新' style={{flex: 1}}>
          <AgreeCardList type={2}>
          </AgreeCardList>
        </View>
      </ScrollableTabView>
    );
  }
}
