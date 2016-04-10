import React,{
  Component,
  View,
  Text,
  Image,
  ListView,
  RefreshControl,
} from 'react-native';

export default class Merchant extends Component{


  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      refreshing: false,
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  _onRefresh() {
    this.setState({refreshing: true});
    fetchData().then(() => {
      // this.setState({refreshing: false, dataSource: ds.cloneWithRows(['row 1', 'row 2']),});
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >
      </ListView>
    );
  }

}
