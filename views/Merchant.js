import React,{
  Component,
  View,
  Text,
  Image,
  ListView,
  RefreshControl,
  StyleSheet,
} from 'react-native';

import CustomeNavigatorBar from '../components/CustomeNavigatorBar.js';
import ShopItem from './List/ShopItem.js';
import Header from './Index/Header.js';

import Checker from './Checker.js';

const url_shoplist = "http://newapi.deyi.com/wedding/api/shoplist";
const body_shoplist = {
  method: 'POST',
  body:JSON.stringify({
    "areaid": 0,
  	"catid": 366,
  	"page": 1
  })
}

var resultsCache = {
  shoplist:[],
};

export default class Merchant extends Component{


  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      isFirstLoading:true,
      isLoading:true,
      isLoadingTail:false,
      isRefreshing: false,
      isNetworkError:false,
      isNoData:false,
      dataSource: ds.cloneWithRows([]),
    };
  }

  // _onRefresh() {
  //   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  //   this.setState({
  //      refreshing: false,
  //      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3'])
  //    });
  //   // fetchData().then(() => {
  //   //   // this.setState({refreshing: false, dataSource: ds.cloneWithRows(['row 1', 'row 2']),});
  //   // });
  // }

  _onRefresh = ()=> {
    this.setState({
      //  isLoading:true,
       isRefreshing:true,
     });
    this._getShopListData();
  };

  _renderHeader=()=>{
    return (
      <Header title='优惠' style={{height:40}}/>
    );
  }

  _didSelectedCell = ()=> {
    alert(0);
  };

  componentWillMount() {
    this._getShopListData()
  }

  _getShopListData=()=>{
    // 加载网络数据
    fetch(url_shoplist, body_shoplist)
    .then((response)=>response.json())
    // .catch( (error)=>{
    //   resultsCache.shoplist = [];
    //   this.setState({
    //     isLoading:false,
    //     isNetworkError:true,
    //     isFirstLoading:false,
    //     isNetworkError:true,
    //     dataSource:this.state.dataSource.cloneWithRows([])
    //   });
    // })
    .then((responseData)=>{
      resultsCache.shoplist = responseData.data.shoplist;
      this.setState({
        isLoading:false,
        isFirstLoading:false,
        isNetworkError:false,
        isRefreshing:false,
        dataSource:this._getShopListDataSource(resultsCache.shoplist),
      });
    })
    .catch( (error)=>{
      resultsCache.shoplist = [];
      this.setState({
        isLoading:false,
        isNetworkError:true,
        isFirstLoading:false,
        isNetworkError:true,
        isRefreshing:false,
        dataSource:this._getShopListDataSource([])
      });
    })
    .done();
  }

  _getShopListDataSource = (shopList: Array<any>)=>{
    // if (shopList.length === 0) {
    //   this.setState({
    //     isNoData:true,
    //   });
    // }
    return this.state.dataSource.cloneWithRows(shopList);
  }




  render() {
    // var contentView = this.state.isLoading === true?
    // <Checker state={-1}/> :
    // <ListView
    //   dataSource={this.state.dataSource}
    //   renderRow={(rowData) => <ShopItem onPress={this._didSelectedCell} source={{uri:rowData.logo}}/>}
    //   initialListSize={10}
    //   //contentInset={{bottom:0, top: 30}}//偏移
    //   //renderHeader={this._renderHeader}//设置HeaderView
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={this.state.isRefreshing}
    //       onRefresh={this._onRefresh}
    //       tintColor='red'
    //     />
    //   }
    // >
    // </ListView>


    var contentView;

    if (this.state.isLoading) {
      contentView = <Checker state={-1}/>;
    }
    else
    {
      if (this.state.isNetworkError)
      {
        contentView = <Checker state={0} onPress={this._onRefresh} />;
      }
      else if (this.state.dataSource.getRowCount() === 0)
      {
        contentView = <Checker state={-2}/>;
      }
      else
      {
        contentView =
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <ShopItem onPress={this._didSelectedCell} source={{uri:rowData.logo}} logo={rowData.logo} shopName={rowData.shopname} level={rowData.level} catname={rowData.catname} cases={rowData.cases} activities={rowData.activities}/>}
            initialListSize={10}
            //contentInset={{bottom:0, top: 30}}//偏移
            //renderHeader={this._renderHeader}//设置HeaderView
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this._onRefresh}
                tintColor='red'
              />
            }
          >
          </ListView>
      }

    }

    return (
      <View style={styles.container}>
        <CustomeNavigatorBar title="商家"/>
        <View style={{height:39, backgroundColor:'pink'}}></View>
          {contentView}
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});
