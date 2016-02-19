'use strict'
import React, {
  Component,
  StyleSheet,
  ListView,
  View,
  Text,
  ActivityIndicatorIOS
} from 'react-native';
import RefreshableListView from 'react-native-refreshable-listview';
import AgreeCard from './bm-AgreeCard';
import { fetchAgreeWithPage } from './API';

export default class AgreeCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false,
      pageNow: 0,
      agreeList: []
    };
  }

  componentDidMount() {
    this.fetchAgreeData(0);
  }

  _reload() {
    this.fetchAgreeData(0);
  }

  _loadMore() {
    this.fetchAgreeData(this.state.pageNow + 1, this.state.agreeList);
  }

  fetchAgreeData(pageNow, agreeList = []) {
    setTimeout(() => {
      agreeList = agreeList.concat(fetchAgreeWithPage(this.props.type, pageNow));
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(agreeList),
        loaded: true,
        pageNow: pageNow,
        agreeList: agreeList
      });
    }, 1000);
  }

  renderAgreeItem(item) {
    return (
      <AgreeCard
        AgreeItem={item}
      >
      </AgreeCard>
    )
  }

  render() {
    return (
      !this.state.loaded ?
      <View style={styles.loading}>
        <ActivityIndicatorIOS
            size="small"
            color="#333333"
        />
        <Text style={styles.loadingTip}>加载中...</Text>
      </View> :
      <RefreshableListView
        initialListSize={20}
        pageSize={20}
        onEndReached={this._loadMore.bind(this)}
        dataSource={this.state.dataSource}
        renderRow={this.renderAgreeItem.bind(this)}
        style={styles.agreeListView}
        removeClippedSubviews={true}
        onEndReachedThreshold={0}
        loadData={this._reload.bind(this)}
        refreshDescription='正在刷新...'
        refreshingIndictatorComponent={
          <RefreshableListView.RefreshingIndicator stylesheet={indicatorStylesheet} />
        }
        minDisplayTime={500}
        minPulldownDistance={80}
        minBetweenTime={2000}
      />
    )
  }
}

const indicatorStylesheet = StyleSheet.create({
  wrapper: {
    height: 80,
    marginTop: 10,
    marginBottom: 10
  },
  content: {
    marginTop: 10,
    marginBottom: 10,
    height: 60
  }
});

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingTip: {
    color: '#333333',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 12
  },
  agreeListView: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    overflow: 'hidden'
  }
});
