import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  // TabBarItemIOS,
  NavigatorIOS,
} from 'react-native';

export default class TabBarIOSDemo extends Component {
  constructor(props){
    super(props);
    this.state={
         selectedTab: '历史',
       notifCount: 0,
       presses: 0,
    };
  }
  //进行渲染页面内容
  _renderContent(color: string, pageText: string, num?: number) {
    return (
      <NavigatorIOS
        tintColor='green'
        barTintColor="green"
        style={{backgroundColor:'green'}}
        initialRoute={{
          translucent: false,
          tintColor:"red",
          component:Recommend,
          title:pageText,
        }}
        />
      // <Recommend></Recommend>
    );
  }
  render() {
    return (

        <TabBarIOS
        style={{flex:1,alignItems:"flex-end"}}
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="自定义"

          selected={this.state.selectedTab === '自定义'}
          onPress={() => {
            this.setState({
              selectedTab: '自定义',
            });
          }}
          >
          {this._renderContent('#414A8C', '自定义界面')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          selected={this.state.selectedTab === '历史'}
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          onPress={() => {
            this.setState({
              selectedTab: '历史',
              notifCount: this.state.notifCount + 1,
            });
          }}
          >
          {this._renderContent('#783E33', '历史记录', this.state.notifCount)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
           systemIcon="downloads"
           selected={this.state.selectedTab === '下载'}
            onPress={() => {
            this.setState({
              selectedTab: '下载',
              presses: this.state.presses + 1
            });
          }}>
           {this._renderContent('#21551C', '下载页面', this.state.presses)}
        </TabBarIOS.Item>

      </TabBarIOS>

    );
  }
}
const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});
