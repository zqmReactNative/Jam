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
  Image,
} from 'react-native';

import ZQMSVGButton from '../components/ZQMSVGButton';

import Channels from './Channels';

export default class Home extends Component {

  render(){
    return (
      <View style={[styles.container, {backgroundColor:'white'}]}>
        <ScrollView >
          {/*
            <View style={[{backgroundColor:'pink',justifyContent:'center', flexDirection:'row'}]}>
              <Channels style={[{flex:1, }]}/>
            </View>
            */}

          <Channels style={[{flex:1, }, styles.section]}/>
          <View style={[{flex:1, height: 70, backgroundColor:'pink'}]}>
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
