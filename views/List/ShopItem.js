__d("marry/views/List/ShopItem.js",
function(e,t,n,r){
  Object.defineProperty(r,"__esModule",{value:!0});
  var i=t("react-native/Libraries/react-native/react-native.js"),
  o=babelHelpers.interopRequireDefault(i),
  a=t("react-native-lazyload/index.js"),
  s=t("marry/components/Link.js"),
  u=babelHelpers.interopRequireDefault(s),
  l=t("marry/components/Img.js"),
  c=babelHelpers.interopRequireDefault(l),
  p=t("marry/views/Stars.js"),
  f=babelHelpers.interopRequireDefault(p),
  h=i.StyleSheet.create({container:{flex:1,height:103,borderBottomWidth:1/px,borderBottomColor:"#ebebeb",backgroundColor:"#fff"},item:{padding:12,flexDirection:"row"},cover:{height:79,width:79,marginRight:11,borderRadius:3},coverContainer:{marginRight:11,backgroundColor:"#dedede"},titleContainer:{marginLeft:-4,paddingHorizontal:4},title:{paddingTop:e.ios?2:0,fontSize:15,color:"#151515"},info:{flexDirection:"row",marginTop:e.ios?7:5},infoText:{marginRight:10,fontSize:11,color:"#666"},infoCount:{color:"#ff5942"},stars:{marginLeft:1}}),
  d=function(e){function t(){
    var e,n,r,a;
    babelHelpers.classCallCheck(this,t);
    for(var s=arguments.length,u=Array(s),l=0;s>l;l++)
      u[l]=arguments[l];
    return n=r=babelHelpers.possibleConstructorReturn(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),
    r.shouldComponentUpdate=function(){
      return!1
    },
    r._getTags=function(e){
      return e.map(function(e,t){
        return o["default"].createElement(i.Text,{style:h.infoText,key:"tag-"+t},e)
      })
    },
    a=n,babelHelpers.possibleConstructorReturn(r,a)
  }
  return babelHelpers.inherits(t,e),
  babelHelpers.createClass(t,[{key:"render",value:function(){
    var e=this.props.data;
    return o["default"].createElement(a.LazyloadView,{style:h.container,host:this.props.host,initialVisibility:this.props.initialVisibility,animation:!1},
      o["default"].createElement(u["default"],{contentContainerStyle:h.item,key:"shop-"+e.shopId,underlayColor:"#ebebeb",activeOpacity:1,href:{component:"Shop",title:e.shopName,passProps:{data:{id:e.shopId,name:e.shopName}}}},
      o["default"].createElement(c["default"],{source:{uri:e.logo},style:h.cover}),
      o["default"].createElement(i.View,null,
        o["default"].createElement(i.View,{style:h.titleContainer},
          o["default"].createElement(i.Text,{style:h.title},e.shopName)),
        o["default"].createElement(i.View,{style:[h.info,h.stars]},
          o["default"].createElement(f["default"],{count:e.level})),
          o["default"].createElement(i.View,{style:h.info},this._getTags(e.tags)),
          o["default"].createElement(i.View,{style:h.info},
            o["default"].createElement(i.Text,{style:[h.infoText,h.infoCount]},"\u56fe\u5e93",e.goods),
            o["default"].createElement(i.Text,{style:[h.infoText,h.infoCount]},"\u4f18\u60e0",e.sales)))))}}]),t}(i.Component);d.displayName="ShopItem",r["default"]=d})



import React,{
  Component,
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
  PixelRatio,
  PropTypes,

} from 'react-native';

import Link from '../../components/Link.js';
import Img from '../../components/Img.js';
import Stars from '../Stars.js';

export default class ShopItem extends Component{

  static propTypes = {
    ...View.propTypes,
    onPress:PropTypes.func,
    source:Image.propTypes.source,
    logo:PropTypes.string,//商品图片地址
    shopName:PropTypes.string,//商品名,注意JSON里面为shopname
    catname:PropTypes.string,//分类
    level:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//星级
    cases:PropTypes.string,//图库
    activities:PropTypes.string,//优惠

  };

  static defaultProps = {
    onPress:()=>{},
    level:0,
    catname:"",
    cases:"",
    activities:"",

  };


  _didSelectedCell = ()=>{
    if (this.props.onPress)
    {
      this.props.onPress();
    }
    // else //defaultProps定义了onPress,所以this.props.onPress 为真
    // {
    //   alert('还未定义Cell点击事件');
    // }
  }
  _renderCell = ()=>{
    const {logo, shopName, catname, level, cases, activities} = this.props;
    return (
      <View style={styles.container}>
        <Link
          style={{flex:1}}
          underlayColor={"#ebebeb"}
          activeOpacity={1}
          onPress={this._didSelectedCell}
          contentContainerStyle={[{flex:1}, styles.item]}
          renderCellContent={()=>{
            return (
              <View style={[{flex:1},  {flexDirection:"row"}]}>
                {/*不能实现想要的效果，需要嵌套在View中*/}
                {/*<Img style={styles.cover} source={{uri:'http:\/\/jiehun.deyi.com\/uploads\/2016\/02\/16\/cc985b361823f9669574e7302ddac0c4.jpg'}}/>*/}

                <View style={styles.cover}>
                  {/*<Img source={{uri:'http:\/\/jiehun.deyi.com\/uploads\/2016\/02\/16\/cc985b361823f9669574e7302ddac0c4.jpg'}}/>*/}
                  {/*<Img style={styles.cover} source={this.props.source}/>*/}
                  <Img style={styles.cover} source={{uri:logo}}/>

                </View>

                <View style={[styles.coverContainer, ]}>
                  <View style={[styles.titleContainer, styles.info, ]}>
                    <Text style={[styles.title]}>{shopName}</Text>
                  </View>
                  <View style={[styles.stars, styles.info, ]}>
                    <Stars count={Number(level)}/>
                  </View>
                  <View style={[styles.info, ]}>
                    <Text style={[styles.infoText]}>{catname}</Text>
                  </View>
                  <View style={[styles.info, ]}>
                    <Text style={[styles.infoText, styles.infoCount]}>{"图库"+cases}</Text>
                    <Text style={[styles.infoText, styles.infoCount]}>{"优惠"+activities}</Text>
                  </View>
                </View>
              </View>


            );
          }
          }
          />

      </View>
    );

  };

  render(){
    return this._renderCell();
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:103,
    borderBottomWidth:1/PixelRatio.get(),
    borderBottomColor:"#ebebeb",
    backgroundColor:"#fff"
  },
  item:{
    padding:12,
    flexDirection:"row"
  },
  cover:{
    height:79,
    width:79,
    marginRight:11,
    borderRadius:3
  },
  coverContainer:{
    marginRight:11,
    // backgroundColor:"#dedede"
  },
  titleContainer:{
    marginLeft:-4,
    paddingHorizontal:4
  },
  title:{
    paddingTop:Platform.os === 'iOS'?2:0,
    fontSize:15,
    color:"#151515"
  },
  info:{
    flexDirection:"row",
    marginTop:Platform.os === 'iOS'?7:5
  },
  infoText:{
    marginRight:10,
    fontSize:11,
    color:"#666"
  },
  infoCount:{
    color:"#ff5942"
  },
  stars:{
    marginLeft:1
  }
});
