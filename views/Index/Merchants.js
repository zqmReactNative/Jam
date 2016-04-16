__d("marry/views/Index/Merchants.js",
function(e,t,n,r){
  Object.defineProperty(r,"__esModule",{value:!0});
  var i=t("react-native/Libraries/react-native/react-native.js"),
  o=babelHelpers.interopRequireDefault(i),a=t("lodash/index.js"),
  s=babelHelpers.interopRequireDefault(a),u=t("marry/components/Link.js"),
  l=babelHelpers.interopRequireDefault(u),c=t("marry/components/Img.js"),
  p=babelHelpers.interopRequireDefault(c),f=t("marry/views/Index/Header.js"),
  h=babelHelpers.interopRequireDefault(f),d=t("react-native-baidu-mob-stat/index.js"),
  v=i.StyleSheet.create({container:{paddingHorizontal:10},listContainer:{marginRight:-15},list:{flexDirection:"row",paddingHorizontal:10},item:{marginRight:15,width:75},logo:{width:75,height:75,borderRadius:3},text:{marginVertical:10,color:"#151515",fontSize:12,height:14,textAlign:"center"}}),
  g=s["default"].fill(Array(4),{}),
  y=function(e){function t(){
    babelHelpers.classCallCheck(this,t);
    var e=babelHelpers.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments));
    return e.shouldComponentUpdate=function(t){
      var n=t.data;
      return n?e.state.data?e.state.data.length!==n.length||!s["default"].every(n,function(t,n){
        return t.id===e.state.data[n].id}):!0:!1},
        e.componentWillReceiveProps=function(t){
          var n=t.data,r=void 0===n?g:n;e.state.data!==r&&e.setState({data:r})},
          e._renderRow=function(e){
            return o["default"].createElement(l["default"],{style:v.item,underlayColor:"transparent",href:{component:"Shop",title:e.name,passProps:{data:s["default"].cloneDeep(e)}},onPress:function(){return(0,d.logEvent)("10003",""+e.id)}},
            o["default"].createElement(i.View,{style:v.logo},o["default"].createElement(p["default"],{style:v.logo,source:{uri:e.logo}})),
            o["default"].createElement(i.Text,{numberOfLines:1,style:v.text},e.name))},
            e._ds=new i.ListView.DataSource({rowHasChanged:function(e,t){return e.id!==t.id}}),
            e.state={data:e.props.data||g},e
          }
          return babelHelpers.inherits(t,e),
          babelHelpers.createClass(t,[{key:"render",value:function(){
            return o["default"].createElement(i.View,{style:this.props.style},
              o["default"].createElement(h["default"],{style:v.container},"\u63a8\u8350\u5546\u5bb6"),
              o["default"].createElement(i.ListView,{horizontal:!0,style:v.listContainer,contentContainerStyle:v.list,dataSource:this._ds.cloneWithRows(this.state.data),renderRow:this._renderRow,initialListSize:5,pageSize:1}))}}]),t}(i.Component);y.displayName="Merchants",r["default"]=y}),
