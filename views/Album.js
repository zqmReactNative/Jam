// 图库
/*
__d("marry/views/Album.js",
function(e,t,n,r){
  Object.defineProperty(r,"__esModule",{value:!0});
  var i=t("react-native/Libraries/react-native/react-native.js"),
  o=babelHelpers.interopRequireDefault(i),a=t("lodash/index.js"),
  s=babelHelpers.interopRequireDefault(a),u=t("marry/components/Remote.js"),
  l=(babelHelpers.interopRequireDefault(u),t("marry/components/Link.js")),
  c=(babelHelpers.interopRequireDefault(l),t("marry/data/categories.js")),
  p=babelHelpers.interopRequireDefault(c),f=t("marry/data/sortBys.js"),
  h=babelHelpers.interopRequireDefault(f),d=t("marry/lib/fetchRemote.js"),
  v=babelHelpers.interopRequireDefault(d),g=t("marry/views/Filters.js"),
  y=babelHelpers.interopRequireDefault(g),m=t("marry/views/List.js"),
  b=babelHelpers.interopRequireDefault(m),_=t("marry/views/PageList.js"),
  S=babelHelpers.interopRequireDefault(_),w=t("marry/data/channels.js"),
  C=babelHelpers.interopRequireDefault(w),R=t("marry/views/Filters/FiltersCategory.js"),
  E=babelHelpers.interopRequireDefault(R),x=t("marry/views/Filters/FiltersList.js"),
  T=babelHelpers.interopRequireDefault(x),
  O=i.StyleSheet.create({
    container:{flex:1,backgroundColor:"#f6f6f6"},
    contentContainer:{flexDirection:"row",flexWrap:"wrap"}
  }),
  k=function(t){
    function n(){
      babelHelpers.classCallCheck(this,n);
      var t=babelHelpers.possibleConstructorReturn(this,Object.getPrototypeOf(n).apply(this,arguments));
      return t.componentDidMount=function(){
        var t;
        return regeneratorRuntime.async(function(n){
          for(;;)
          switch(n.prev=n.next)
          {case 0:return n.next=2,regeneratorRuntime.awrap((0,v["default"])("casecondition"));
            case 2:return t=n.sent,n.next=5,regeneratorRuntime.awrap(i.InteractionManager.runAfterInteractions());
            case 5:return n.next=7,regeneratorRuntime.awrap(e.requestAnimationFrameAsync());
            case 7:!this._unmounted&&t&&this.setState(t);
            case 8:
            case"end":return n.stop()}},null,this)},
          t.componentWillUnmount=function(){
            t._unmounted=!0
          },
          t._renderRow=function(e,n,r){
            var i=b["default"][s["default"].capitalize(t.state.render)];
            return o["default"].createElement(i,{data:e,index:r,host:"album",key:"shop-"+e.id})},
          t._onCategoryChange=function(e,n){t.setState({catId:n,catTitle:e,render:t._getRender(n)})},
          t._onSortChange=function(e,n){t.setState({type:n,sortTitle:e})},
          t._getRender=function(e){return e=e||c.defaultId,s["default"].every(t.state.categories,function(t){var n=t.id,r=t.children;return n===e||s["default"].find(r,{id:e})?(e=n,!1):!0}),s["default"].find(C["default"],{id:e}).type},t.state={sortBys:h["default"],categories:p["default"]},t.state.render=t._getRender(),t}return babelHelpers.inherits(n,t),babelHelpers.createClass(n,[{key:"render",value:function(){return o["default"].createElement(i.View,{style:O.container,collapsable:!1},o["default"].createElement(y["default"],null,o["default"].createElement(E["default"],{title:this.state.catTitle||c.defaultTitle,id:this.state.catId||c.defaultId,data:this.state.categories,onChange:this._onCategoryChange}),o["default"].createElement(T["default"],{title:this.state.sortTitle||f.defaultTitle,id:this.state.type||f.defaultId,data:this.state.sortBys,onChange:this._onSortChange})),o["default"].createElement(S["default"],{api:"caselist",name:"album",style:O.container,contentContainerStyle:O.contentContainer,renderRow:this._renderRow,data:{type:this.state.type,catid:this.state.catId},initialListSize:8,pageSize:2,key:this.state.catId+":"+this.state.type}))}}]),n}(i.Component);
k.displayName="Album",r["default"]=k}),


*/

import React,{
  Component,
  StyleSheet,
  RefreshControl,
  View,
  Text,
  ListView,
} from 'react-native';

import CustomeNavigatorBar from '../components/CustomeNavigatorBar.js';

import Checker from './Checker.js';

// // 图库默认数据请求URL
// const kDefaultUrl = "http://newapi.deyi.com/wedding/api/caselist";
// // 排序URL
// const kSortUrl = "http://newapi.deyi.com/wedding/api/casecondition";
// const kHostAlbumUrl = kDefaultUrl;



export default class Album extends Component {

  // getInitialState: function() {
  //   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   return {
  //     dataSource: ds.cloneWithRows(['row 1', 'row 2']),
  //   };
  // },

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=>r1 !==r2
    });
    // return (
    //   {
    //     // isLoading: false,
    //     // isLoadingTail :false,
    //     // dataSource:ds.cloneWithRows([{title:'row1'},{title:'row2'}]),
    //     dataSource:
    //   }
    // );
    this.state = {
      isLoading:false,
      isFirstLoading:false,
      isNetworkError:false,
      isRefreshing:false,
      dataSource:ds.cloneWithRows([{title:'row1'},{title:'row2'}]),
    }
  }

  _getNetworkData = (urlString=kDefaultUrl)=>{
    this.setState({
      isLoading: true,
      isLoadingTail: false,
    });

    fetch(urlString, {
      headers:{
        "page":1,
      }
    })
    .then((response) => response.json())
    .catch((error) => {
      this.setState({
        // dataSource:this.getDataSource(),
        isLoading:false,
      });
    })
    .then((responseData) =>{
      this.setState({
        isLoading:false,
        // dataSource:
      })
    })

  };

  _renderRow = (rowData)=>{
    return (
      <View style={{height:44, backgroundColor:'green'}}>
        <Text>
          {rowData.title}
        </Text>
      </View>
    );
  };

  // _renderRow = (rowData)=>{
  //   <View style={{height:44, backgroundColor:'green'}}>
  //     <Text>
  //       {rowData.title}
  //     </Text>
  //   </View>
  // }

  // _renderRow: function(rowData: string, sectionID: number, rowID: number) {
  //   return (
  //     <Text>
  //       rowData
  //     </Text>
  //   );
  // }



  render(){
    return (
      <View
        style={styles.container}
        >
        <CustomeNavigatorBar title="图库" />
        {/*过滤器View*/}
        <View style={{height:39, backgroundColor:'gray'}}/>
        {/*Error*/}
        {/*<Checker style={{state:-2}}/>*/}
        {/*<Checker state={-2}/>*/}

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});
