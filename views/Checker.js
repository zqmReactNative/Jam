// __d("marry/views/Checker.js",
// function(e,t,n,r){
//   Object.defineProperty(r,"__esModule",{value:!0});
//   var i=t("react-native/Libraries/react-native/react-native.js"),
//   o=babelHelpers.interopRequireDefault(i),
//   a=t("react-native-art-svg/index.js"),
//   s=t("onlyChild"),u=babelHelpers.interopRequireDefault(s),
//   l=t("marry/components/Link.js"),
//   c=babelHelpers.interopRequireDefault(l),
//   p=t("marry/views/images/404.png"),
//   f=t("marry/views/images/loading.gif"),
//   h=i.StyleSheet.create({
//     container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"},
//     text:{fontSize:13,color:"#aaa"},
//     error:{alignItems:"center",justifyContent:"center"},
//     errorText:{fontSize:13,color:"#aaa"},
//     warningImage:{marginVertical:15},
//     refresh:{height:30,width:133.5,marginTop:25,borderRadius:4.5,borderWidth:1,borderColor:"#ff5942"},
//     refreshContent:{flexDirection:"row",alignItems:"center",justifyContent:"center"},
//     refreshText:{color:"#ff5942",fontSize:13}}),
//     d=function(e){function t(){
//       var e,n,r,i;
//       babelHelpers.classCallCheck(this,t);
//       for(var o=arguments.length,a=Array(o),s=0;o>s;s++)a[s]=arguments[s];return n=r=babelHelpers.possibleConstructorReturn(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),
//       r._reload=function(){r.props.onReload&&r.props.onReload()},
//       i=n,babelHelpers.possibleConstructorReturn(r,i)}
//       return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){
//         switch(this.props.state){
//         case 1:return
//         (0,u["default"])(this.props.children);
//         case 0:return
//         o["default"].createElement(i.View,{style:[h.error,this.props.style]},
//         o["default"].createElement(a.Svg,{style:h.warningImage,height:"100",width:"100"},
//         o["default"].createElement(a.Circle,{stroke:"#DCDBDB",strokeWidth:"1.2",strokeJoin:"round",fill:"none",cx:"50.4",cy:"49.8",r:"39.2"}),
//         o["default"].createElement(a.Circle,{stroke:"#DCDBDB",strokeWidth:"1.2",fill:"none",cx:"50.4",cy:"69",r:"4.3"}),
//         o["default"].createElement(a.Path,{stroke:"#DCDBDB",strokeWidth:"1.2",fill:"none",d:"M50.4,29.8c-2.9,0-5.7,2.9-5,6.4l1.4,22.1 c0,1.4,2.1,2.9,3.6,2.9c2.1,0,3.6-1.4,3.6-2.9l1.4-22.1C55.4,32.6,53.2,29.8,50.4,29.8L50.4,29.8z"})),
//         o["default"].createElement(i.Text,{style:h.errorText},"哎唷出错啦~刷新试试~"),o["default"].createElement(c["default"],{style:h.refresh,contentContainerStyle:h.refreshContent,underlayColor:"rgba(222, 222, 222, 0.5)",onPress:this._reload},
//         o["default"].createElement(a.Svg,{height:"20",width:"20"},
//         o["default"].createElement(a.Path,{stroke:"#ff5942",strokeWidth:"1.2",strokeCap:"round",strokeJoin:"round",d:"M14.8,6.5c1.1,1.2,1.8,2.8,1.8,4.5c0,3.6-2.9,6.6-6.6,6.6S3.5,14.7,3.5,11S6.4,4.5,10,4.5c0.2,0,0.4,0,0.6,0.1",fill:"none"}),
//         o["default"].createElement(a.Polyline,{stroke:"#ff5942",strokeWidth:"1.2",strokeCap:"round",strokeJoin:"round",fill:"none",points:"8.7,2.4 11.3,4.5 9.1,7.1"})),
//         o["default"].createElement(i.Text,{style:h.refreshText},"点我刷新")));
//         case-1:return
//         o["default"].createElement(i.View,{style:[h.container,this.props.style],key:"load-container"},
//         o["default"].createElement(i.Image,{source:f}));
//         case-2:return
//         o["default"].createElement(i.View,{style:[h.container,this.props.style],key:"empty-container"},
//         o["default"].createElement(i.Image,{source:p}),
//         o["default"].createElement(i.Text,{style:h.text},"内容还在筹备中哦，敬请期待~"));
//         default:return null}}}]),t}(i.Component);d.displayName="Checker",d.propTypes={onReload:i.PropTypes.func,state:i.PropTypes.number.isRequired},r["default"]=d}),

import React,{
  Component,
  View,
  StyleSheet,
  PropTypes,
  Text,
  Image,
} from 'react-native';

import Svg, {
    Circle,
    G,
    Path,
    Polygon,
    Polyline,
} from 'react-native-art-svg';

import Link from '../components/Link.js';

const uriOfEmptyImage   = require('../images/404.png');
const uriOfLoadingImage = require('../images/loading.gif');

export default class Checker extends Component {

  static propTypes = {
    // ...View.propTypes,
    onReload:PropTypes.func,
    state:PropTypes.number.isRequired,
  };




  _onload = ()=>{
    if (onReload) {
      onReload();
    }
  };

  _renderContent = ()=> {

  };

  render() {




    // 解构
    const {onReload, state} = this.props;

    const defaultProps = {
      state: 0,
    };

    switch (state) {
      case 1:
      // return (0,u["default"])(this.props.children);
        return (
          <View>
          </View>
        );

        break;
      case 0:
        return (
          <View style={[styles.error, this.props.styles]}>
            <Svg
              style={styles.warningImage}
              height="100"
              width="100"
              >
              <Circle
                stroke="#DCDBDB"
                strokeWidth="1.2"
                strokeJoin="round"
                fill="none"
                cx="50.4"
                cy="49.8"
                r="39.2"
                />
              <Circle
                stroke="#DCDBDB"
                strokeWidth="1.2"
                fill="none"
                cx="50.4"
                cy="69"
                r="4.3"
                />
              <Path stroke="#DCDBDB"
                strokeWidth="1.2"
                fill="none"
                d="M50.4,29.8c-2.9,0-5.7,2.9-5,6.4l1.4,22.1 c0,1.4,2.1,2.9,3.6,2.9c2.1,0,3.6-1.4,3.6-2.9l1.4-22.1C55.4,32.6,53.2,29.8,50.4,29.8L50.4,29.8z"
                />



              {/*

                */}
              {/*
                <Svg
                  height="20"
                  width="20"
                  >
                  <Path
                    stroke="#ff5942"
                    strokeWidth="1.2"
                    strokeCap="round"
                    strokeJoin="round"
                    d="M14.8,6.5c1.1,1.2,1.8,2.8,1.8,4.5c0,3.6-2.9,6.6-6.6,6.6S3.5,14.7,3.5,11S6.4,4.5,10,4.5c0.2,0,0.4,0,0.6,0.1"
                    fill="none"
                    />
                  <Polyline
                    stroke="#ff5942"
                    strokeWidth="1.2"
                    strokeCap="round"
                    strokeJoin="round"
                    fill="none"
                    points="8.7,2.4 11.3,4.5 9.1,7.1"
                    />

                  <Text style={styles.refreshText}>点我刷新</Text>

                </Svg>
                */}



            </Svg>

            <Text style={styles.errorText}>哎唷出错啦~刷新试试~</Text>
            {/*
              <Link
                style={styles.refresh}
                contentContainerStyle={styles.refreshContent}
                underlayColor={"rgba(222, 222, 222, 0.5)"}
                onPress={this._reload}
                >
                <Svg
                  height="20"
                  width="20"
                  >
                  <Path
                    stroke="#ff5942"
                    strokeWidth="1.2"
                    strokeCap="round"
                    strokeJoin="round"
                    d="M14.8,6.5c1.1,1.2,1.8,2.8,1.8,4.5c0,3.6-2.9,6.6-6.6,6.6S3.5,14.7,3.5,11S6.4,4.5,10,4.5c0.2,0,0.4,0,0.6,0.1"
                    fill="none"
                    />
                  <Polyline
                    stroke="#ff5942"
                    strokeWidth="1.2"
                    strokeCap="round"
                    strokeJoin="round"
                    fill="none"
                    points="8.7,2.4 11.3,4.5 9.1,7.1"
                    />

                </Svg>

                <Text style={styles.refreshText}>点我刷新</Text>


              </Link>
              */}

              <View style={[styles.refresh, styles.refreshContent]}>
                <Svg
                  height="20"
                  width="20"
                  >
                  <Path
                    stroke="#ff5942"
                    strokeWidth="1.2"
                    strokeCap="round"
                    strokeJoin="round"
                    d="M14.8,6.5c1.1,1.2,1.8,2.8,1.8,4.5c0,3.6-2.9,6.6-6.6,6.6S3.5,14.7,3.5,11S6.4,4.5,10,4.5c0.2,0,0.4,0,0.6,0.1"
                    fill="none"
                    />
                  <Polyline
                    stroke="#ff5942"
                    strokeWidth="1.2"
                    strokeCap="round"
                    strokeJoin="round"
                    fill="none"
                    points="8.7,2.4 11.3,4.5 9.1,7.1"
                    />

                </Svg>

                <Text style={styles.refreshText}>点我刷新</Text>
              </View>






          </View>
        );

        break;
      case -1:
        return (
          <View style={[styles.container, this.props.styles]} key="load-container">
            <Image source={uriOfLoadingImage}/>
          </View>
        );


        break;
      case -2:
        return (
          <View style={[styles.container, this.props.styles]} key="empty-container">
            <Image source={uriOfEmptyImage}/>
            <Text style={styles.text}>内容还在筹备中哦，敬请期待~</Text>
          </View>
        );
        break;
      default:
      return (null);
    }

  }

  // render(){
  //   return (
  //     <View style={[styles.container, this.props.styles]} >
  //       {/*<Image source={uriOfLoadingImage}/>*/}
  //       <Image source={uriOfLoadingImage}/>
  //     </View>
  //   );
  // }

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff"
  },
  text:{
    fontSize:13,
    color:"#aaa"
  },
  error:{
    alignItems:"center",
    justifyContent:"center"
  },
  errorText:{
    fontSize:13,
    color:"#aaa"
  },
  warningImage:{
    marginVertical:15
  },
  refresh:{
    height:30,
    width:133.5,
    marginTop:25,
    borderRadius:4.5,
    borderWidth:1,
    borderColor:"#ff5942"
  },
  refreshContent:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  },
  refreshText:{
    color:"#ff5942",
    fontSize:13
  }
});
