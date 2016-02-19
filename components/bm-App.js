'use strict';
import React, {
  Component,
  StyleSheet,
  TabBarIOS,
  NavigatorIOS,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Piazza from './bm-PiazzaPage';
import Create from './bm-CreatePage';
import My from './bm-MyPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'index'
    };
  }

  _renderPage(title, routeComponent) {
    return (
      <NavigatorIOS
        style={styles.container}
        ref='INDEX_NAV'
        initialRoute={{
          component: routeComponent,
          title: title,
          passProps: {
          }
        }}
        shadowHidden={true}
        translucent={false}
        barTintColor='#009999'
        titleTextColor='#FFF'
        tintColor='#FFF'
        />
    );
  }

  render() {
    return (
      <TabBarIOS
        tintColor='#009999'
        barTintColor='#F9F9F9'
        translucent={false}
      >
        <TabBarIOS.Item
          title='约定广场'
          icon={require('image!iconfont-index')}
          selected={this.state.selectedTab === 'index'}
          onPress={() => {
            this.setState({
              selectedTab: 'index'
            });
          }}
        >
        {this._renderPage('约定广场', Piazza)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='创建约定'
          icon={require('image!iconfont-hot')}
          selected={this.state.selectedTab === 'create'}
          onPress={() => {
            this.setState({
              selectedTab: 'create'
            });
          }}
        >
        {this._renderPage('创建约定', Create)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='我的约定'
          icon={require('image!iconfont-shafa')}
          selected={this.state.selectedTab === 'my'}
          onPress={() => {
            this.setState({
              selectedTab: 'my'
            });
          }}
        >
        {this._renderPage('我的约定', My)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  }
});
