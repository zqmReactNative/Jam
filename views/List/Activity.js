// __d("marry/views/List/Activity.js",
// function(e,t,n,r){
//   Object.defineProperty(r,"__esModule",{value:!0});
//   var i=t("react-native/Libraries/react-native/react-native.js"),
//   o=babelHelpers.interopRequireDefault(i),
//   a=t("marry/components/Link.js"),
//   s=babelHelpers.interopRequireDefault(a),
//   u=t("marry/components/Img.js"),
//   l=babelHelpers.interopRequireDefault(u),
//   c=i.,p=function(e){function t(){
//     return babelHelpers.classCallCheck(this,t),
//     babelHelpers.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}
//     return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){
//       var e=this.props,t=e.data,n=e.simple;
//       return o["default"].createElement(i.View,{style:[c.container,n&&c.gap]},
//         o["default"].createElement(
//           Lin["default"],{
//             contentContainerStyle:c.contentContainerStyle,
//             activeOpacity:.7,
//             href:{
//               component:"Detail",
//               title:"活动详情",
//               passProps:{
//                 data:{cover:t.cover,title:t.title,shopName:t.shopName,shopId:t.shopId,id:t.id}
//               }
//             },
//             onPress:this.props.onPress
//           },
//           o["default"].createElement(i.View,{style:c.cover},
//             o["default"].createElement(Img["default"],{style:c.cover,source:{uri:t.cover},resizeMode:"stretch"})),
//         o["default"].createElement(i.View,{style:c.content},
//           o["default"].createElement(i.Text,{numberOfLines:2,style:[c.title,n?c.simpleTitle:c.additionalTitle]},t.title),!n&&
//           o["default"].createElement(i.Text,{style:c.shopName},t.shopName),
//           o["default"].createElement(i.View,{style:c.button},
//             o["default"].createElement(i.Text,{style:c.buttonText},"\u9a6c\u4e0a\u62a5\u540d")))))}}]),t}(i.Component);
//             p.displayName="Activity",r["default"]=p})

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


export default class Activity extends Component{

  static propTypes = {
    ...View.propTypes,
    onPress:PropTypes.func,
    source:Image.propTypes.source,
    title:PropTypes.string,
    cover:PropTypes.string,//商品图片地址
    shopname:PropTypes.string,//商品名,注意JSON里面为shopname
    shopId:PropTypes.string,
  };


  _didSelectedCell = ()=>{
    const {shopId} = this.props;
    if (shopId && shopId !== "")
    {
      this.props.onPress(shopId);
    }else {
      alert(1);
    }
  }

  _renderCell=()=>{
    return (
      <View style={[]}>
        <Link
          style={{flex:1}}
          // underlayColor={"#ebebeb"}
          activeOpacity={1}
          onPress={this._didSelectedCell}
          contentContainerStyle={[{flex:1}, styles.item]}
          renderCellContent={()=>{
            return (
              <View style={[{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}, styles.container, styles.gap ]}>
                <View style={styles.cover}>
                  {/*<Img source={{uri:'http:\/\/jiehun.deyi.com\/uploads\/2016\/02\/16\/cc985b361823f9669574e7302ddac0c4.jpg'}}/>*/}
                  {/*<Img style={styles.cover} source={this.props.source}/>*/}
                  <Img style={styles.cover} source={{uri:this.props.cover}}/>

                </View>

                <View style={[styles.coverContainer, styles.content]}>

                  {/*
                    (i.Text,{numberOfLines:2,style:[c.title,n?c.simpleTitle:c.additionalTitle]},t.title),!n&&
                    (i.Text,{style:c.shopName},t.shopName),
                    */}
                  <View>
                    <Text numberOfLines={2} style={[styles.title, ]}>{this.props.title}</Text>
                    <Text numberOfLines={1} style={[styles.shopName]}>{this.props.shopname}</Text>
                  </View>


                  <View style={styles.button}>
                    <Text style={styles.buttonText}>马上报名</Text>
                  </View>


                </View>










              </View>
            );
          }}
          />
      </View>
    );
  }




  render(){
    return this._renderCell();
  }
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10,
    paddingVertical:10,
    // marginBottom:7.5,
    // width:win.width
  },
  gap:{
    backgroundColor:"#fff",
    shadowColor:"#e0e0e0",
    // shadowOpacity:1,
    shadowRadius:2,
    shadowOffset:{
      width:0,
      height:0
    }
  },
  contentContainerStyle:{
    flex:1,
    flexDirection:"row"
  },
  cover:{
    width:148,
    height:90,
    borderRadius:3
  },
  content:{
    flex:1,
    marginLeft:9.5
  },
  title:{
    height:40,
    color:"#151515",
    fontSize:15,
    lineHeight:20
  },
  simpleTitle:{
    marginTop:4,
    marginBottom:17,
    height:44,
    lineHeight:Platform.OS === "ios"? 20:22
  },
  additionalTitle:{
    marginTop:Platform.OS === "ios"? -2:0//-4:0
  },
  shopName:{
    color:"#8a8888",
    fontSize:12,
    height:Platform.OS === "ios"? 16:14,//12:14
    marginVertical:Platform.OS === "ios"? 9:6
  },
  button:{
    height:24,
    width:77,
    backgroundColor:"#ff5942",
    borderRadius:4,
    alignItems:"center",
    justifyContent:"center"
  },
  buttonText:{
    color:"#fff",
    fontSize:12
  }
});
