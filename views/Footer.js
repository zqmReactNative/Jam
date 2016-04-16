__d("marry/views/Footer.js",
function(e,t,n,r){
  Object.defineProperty(r,"__esModule",{value:!0});
  var i=t("react-native/Libraries/react-native/react-native.js")
  o=babelHelpers.interopRequireDefault(i),
  a=t("marry/lib/fetchRemote.js"),
  s=(babelHelpers.interopRequireDefault(a),t("marry/components/Link.js")),
  u=babelHelpers.interopRequireDefault(s),
  l=t("marry/views/Footer/FooterModal.js"),
  c=babelHelpers.interopRequireDefault(l),
  p=i.StyleSheet.create({container:{position:"absolute",height:49,bottom:0,left:0,right:0,flexDirection:"row",backgroundColor:"#000"},ButtonLink:{flex:1,backgroundColor:"#ff5942",borderTopWidth:1/px,borderTopColor:"#ff5942"},ButtonDisabled:{opacity:.8,backgroundColor:"#ccc",borderTopColor:"#ccc"},ButtonText:{color:"#fff",fontSize:16},buttonContainer:{flex:1,alignItems:"center",justifyContent:"center"}}),
  f=["免 费 咨 询","马 上 报 名","免 费 咨 询"],h=["已  咨  询","已  报  名","已  咨  询"],
  d=function(e){
    function t(){
      var e=this;babelHelpers.classCallCheck(this,t);
      var n=babelHelpers.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments));
      return n.componentWillMount=function(){
        var t,r,o,a;
        return regeneratorRuntime.async(function(e){
          for(;;)
          switch(e.prev=e.next){
            case 0:return e.next=2,regeneratorRuntime.awrap(i.AsyncStorage.multiGet(["signed-form-"+n.props.type+"-"+n.props.id,"signed-username","signed-mobile"]));
            case 2:t=e.sent,t[0][1]||(r={disabled:!1},o=t[1][1],o&&(r.username=o),a=t[2][1],a&&(r.mobile=a),n.setState(r));
            case 4:
            case"end":return e.stop()}},null,e)
          },
          n.componentWillUnmount=function(){
            n._unmounted=!0
          }
          ,n.shouldComponentUpdate=function(e,t){
            return t.disabled!==n.state.disabled
          },
          n._unmounted=!1,
          n._onSucceed=function(){
            n.setState({disabled:!0})
          },
          n.state={disabled:!0},
          n
        }
        return babelHelpers.inherits(t,e),
        babelHelpers.createClass(t,[{key:"render",value:function(){
          var e=this;
          return o["default"].createElement(i.View,{style:p.container},
            o["default"].createElement(u["default"],{style:[p.ButtonLink,this.state.disabled&&p.ButtonDisabled],activeOpacity:.8,onPress:function(){return e._modal.open()},disabled:this.state.disabled},
            o["default"].createElement(i.View,{style:p.buttonContainer},
              o["default"].createElement(i.Text,{style:p.ButtonText},this.state.disabled?h[this.props.type-1]:f[this.props.type-1]))),
              o["default"].createElement(c["default"],babelHelpers["extends"]({},this.props,{username:this.state.username,mobile:this.state.mobile,ref:function(t){return e._modal=t},onSucceed:this._onSucceed})))}}]),t}(i.Component);d.displayName="Footer",r["default"]=d})




import React,{
  Component,
  View,
  Text,
  Image,
  ListView,
  PixelRatio,
  RefreshControl,
  StyleSheet,
} from 'react-native';

export default class Footer extends Component{
  render(){
    return (
      <View style={styles.container}>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container:{
    position:"absolute",
    height:49,
    bottom:0,
    left:0,
    right:0,
    flexDirection:"row",
    backgroundColor:"#000"
  },
  ButtonLink:{
    flex:1,
    backgroundColor:"#ff5942",
    borderTopWidth:1/PixelRatio.get(),
    borderTopColor:"#ff5942"
  },
  ButtonDisabled:{
    opacity:.8,
    backgroundColor:"#ccc",
    borderTopColor:"#ccc"
  },
  ButtonText:{
    color:"#fff",
    fontSize:16
  },
  buttonContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
});
