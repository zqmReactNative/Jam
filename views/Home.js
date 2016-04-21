__d("marry/views/Home.js",function(e,t,n,r)
{Object.defineProperty(r,"__esModule",{value:!0});
var i=t("react-native/Libraries/react-native/react-native.js"),
o=babelHelpers.interopRequireDefault(i),
a=t("lodash/index.js"),
s=(babelHelpers.interopRequireDefault(a),
t("marry/components/Remote.js")),
u=babelHelpers.interopRequireDefault(s),
l=t("marry/components/Link.js"),
c=(babelHelpers.interopRequireDefault(l),t("marry/views/Index/Entries.js")),
p=babelHelpers.interopRequireDefault(c),
f=t("marry/views/Index/Activities.js"),
h=babelHelpers.interopRequireDefault(f),
d=t("marry/views/Index/Merchants.js"),
v=babelHelpers.interopRequireDefault(d),
g=t("marry/views/Index/Cases.js"),
y=babelHelpers.interopRequireDefault(g),
m=i.StyleSheet.create({}),
b=function(t){
  function n(){
    babelHelpers.classCallCheck(this,n);
    var t=babelHelpers.possibleConstructorReturn(this,Object.getPrototypeOf(n).apply(this,arguments));
    return t._onFetchDone=function(t){
      var n;
      return regeneratorRuntime.async(
        function(r){
          for(;;)
          switch(r.prev=r.next){
            case 0:return n=this.state,n.data.activities=t.activities,this.forceUpdate(),r.next=5,regeneratorRuntime.awrap(e.requestAnimationFrameAsync());
            case 5:return n.data.merchants=t.merchants,this.forceUpdate(),r.next=9,regeneratorRuntime.awrap(e.requestAnimationFrameAsync());
            case 9:n.data.cases=t.cases,this.forceUpdate();
            case 11:
            case"end":return r.stop()}},null,this)
          },
          t.state={data:{}},t}
          return babelHelpers.inherits(n,t),
          babelHelpers.createClass(n,[{key:"render",value:function(){var e=this.state.data;return o["default"].createElement(u["default"],{style:m.container,api:"index",cache:!0,onFetchDone:this._onFetchDone.bind(this),name:"home",renderDistance:200},
o["default"].createElement(p["default"],{style:m.section}),
o["default"].createElement(h["default"],{style:m.section,data:e.activities}),
o["default"].createElement(v["default"],{style:m.section,data:e.merchants}),
o["default"].createElement(y["default"],{style:m.last,data:e.cases})
)}}]),n}(i.Component);b.displayName="Home",r["default"]=b})

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  ListView,
  Image,
} from 'react-native';

import ZQMSVGButton from '../components/ZQMSVGButton';

import Channels from './Channels';
import Logo from '../SVG/Logo.js';
import Back from '../SVG/Back.js';

import Img from '../components/Img.js';

import Header from './Index/Header.js';
import Merchants from './Index/Merchants.js';

import Activity from './List/Activity.js';
import ShopCell from './List/ShopCell.js';

import CustomeNavigatorBar from '../components/CustomeNavigatorBar.js';

var resultsCache = {
  activity:[],
  shop:[],
  cases:[],
};
const url_home = "http://newapi.deyi.com/wedding/api/index";
const url_request = {
  method:'POST',
  body:JSON.stringify({

  }),
}

export default class Home extends Component {

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var dsShop = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      isRefreshing:true,
      isLoading:false,
      dataSource:ds.cloneWithRows(Array(2)),
      dataSourceOfShop:dsShop.cloneWithRows(Array(4)),

    };
  }

  componentDidMount() {
    // this.setState = {
    //   isRefreshing:true,
    // };
    this._onRefresh();
  }

  _onRefresh = ()=>{
    this._getNetworkData();
  };

  _getNetworkData = ()=>{





    fetch(url_home,url_request)
    .then((response)=>response.json())
    .then((responseData)=>{

      resultsCache.activity = responseData.data.activity;
      resultsCache.shop = responseData.data.shop;
      resultsCache.cases = responseData.data.cases;
      // ERROR!错误!
      // this.setState = {
      //   isRefreshing:false,
      //   dataSource:this.state.dataSource.cloneWithRows(["r 0", "r 1", "r2", "r3", "r4"]),
      // };
      this.setState({
        isRefreshing:false,
        dataSource:this.state.dataSource.cloneWithRows(resultsCache.activity),
        dataSourceOfShop:this.state.dataSourceOfShop.cloneWithRows(resultsCache.shop),
      });
    })
    .catch((error)=>{
      resultsCache.activity = Array(2);
      resultsCache.shop = Array(4);
      resultsCache.cases = [];
      this.setState({
        isRefreshing:false,
        dataSource:this.state.dataSource.cloneWithRows(resultsCache.activity),
        dataSourceOfShop:this.state.dataSourceOfShop.cloneWithRows(resultsCache.shop),
      });
    })
  }

  render(){
    return (
      <View style={[styles.container, ]}>
        <CustomeNavigatorBar title={"首页"} titleView={()=><Logo />}/>
        <ScrollView style={{marginBottom:0}}
          refreshControl={
            <RefreshControl
              refreshing = {this.state.isRefreshing}
              onRefresh={this._onRefresh}
              tintColor='red'
              />
          }
          >

          {/*
            <View style={[{backgroundColor:'pink',justifyContent:'center', flexDirection:'row'}]}>
              <Channels style={[{flex:1, }]}/>
            </View>
            */}

          <Channels style={[{flex:1, }, styles.section]} navigator={this.props.navigator}/>


          <View style={[{flex:1, height: 0, backgroundColor:'#fff'}]}>

            {/*<Img />*/}

            {/*<Img style={{width:148, height:90}} source={{uri:'http://jiehun.deyi.com/uploads/2014/07/22/53919e03e914c1f6b96a7d0c0185e3cd.jpg'}}/>*/}
            {/*<Img style={{width:148, height:90}} source={{uri:'http://jiehun.deyi.com/uploads/2016/03/28/8ec4e04e8ead581016e2941137b8dea0.jpg'}}/>*/}

            {/*<Img style={{width:148, height:90}}/>*/}
            {/*<Header title='优惠活动'/>*/}

            {/*<Img style={{width:148, height:90}} source={{uri:'http:\/\/jiehun.deyi.com\/uploads\/2016\/02\/16\/cc985b361823f9669574e7302ddac0c4.jpg'}}/>*/}

          </View>



          {/*活动*/}
          <ListView
            style={[{flex:1, }, styles.section]}
            dataSource={this.state.dataSource}
            renderRow={(rowData)=><Activity title={rowData.title} cover={rowData.cover} shopname={rowData.shopname}/>}
            renderHeader={()=><Header title="优惠活动" />}
            />
          {/*推荐商家*/}
          {/*
          <View style={[styles.sectio, {shadowColor:'white'}]}>
            <Header title="推荐商家" style={{backgroundColor:'white'}}/>
            <ListView
              style={[{flex:1, backgroundColor:'white'}]}
              horizontal={true}
              dataSource={this.state.dataSource}
              renderRow={(rowData)=><Activity />}
              />
          </View>
          */}
          {/*<Merchants />*/}


          <View style={{backgroundColor:'white'}} >
              <Header title="推荐商家"  />
              <ListView
                dataSource={this.state.dataSourceOfShop}
                horizontal={true}
                renderRow={(rowData)=><ShopCell shopname={rowData.shopname} logo={rowData.logo}/>}
                />
            </View>








        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#f6f6f6"
  },
  section: {
    backgroundColor:"#fff",
    marginBottom:13,
    shadowColor:"#e0e0e0",
    shadowOffset:{
      width:0,
      height:0
    },
    shadowOpacity:1,
    shadowRadius:2
  },
  last: {
    backgroundColor:"#fff",
  }
});
