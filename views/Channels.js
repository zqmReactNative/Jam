// 首页中的8个图标
import React,{
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import ZQMSVGButton from '../components/ZQMSVGButton';


// 婚宴酒店  #f88     id:268,type:"wide"
const SVG_PATH_HYJD = 'M21.9,13.2c-1.1-0.3-1.3-0.7-1.2-1.7c0-2.4-1.2-3.6-3.5-3.7c-0.7,0-1.4,0-2.3,0c1-1.2,1.9-2.1,2.6-3.1 c1-1.4,0.9-2.6,0-3.6c-1-1.1-2.3-1.2-3.7-0.2c-0.5,0.4-0.7,0.4-1.2,0c-1.4-1-2.7-0.9-3.7,0.2c-1,1-1,2.2,0,3.7 c0.7,1.1,1.6,1.9,2.7,3.1c-0.7,0-1.2,0-1.6,0c-3.4,0-4.3,0.9-4.4,4.3c0,0.8-0.4,0.8-1,1c-3.1,0.8-5.1,3.9-3.8,6.7 c0.8,1.7,0.9,3.3,0.9,5.1c0,1,0.4,1.2,1.2,1.2c6.8,0,13.6,0,20.4,0c1.1,0,1.2-0.4,1.2-1.3c0-1.3-0.3-2.6,0.4-3.9 C26.7,17.7,25.3,14,21.9,13.2z M8.1,11c0-0.5,0.5-0.5,0.9-0.5c1.4,0,2.7,0,4.1,0c1.4,0,2.7,0,4.1,0c0.4,0,0.9,0,0.9,0.5 c0,0.6-0.4,0.7-0.9,0.7c-2.7,0-5.4,0-8.2,0C8.5,11.7,8,11.6,8.1,11z M23.1,18.6c-0.2,1.2-1.3,2.2-2.6,2.2c-1.7-0.1-2.8-1-3.7-2.4 c-2.9,3.2-5,3.2-7.7-0.1c-0.8,1.3-1.8,2.2-3.2,2.4c-1.5,0.2-2.8-0.7-3-2.1c-0.2-1.5,0.6-2.7,2.2-3c0.3-0.1,0.6-0.1,0.9-0.1 c4.7,0,9.3,0,14,0c0.4,0,0.9,0.1,1.3,0.2C22.7,16.1,23.3,17.2,23.1,18.6z';
// 婚纱摄影  #fccb46  id:366,type:"tall"
const SVG_PATH_HSSY = 'M22.8,23.3H3.2c-1.8,0-3.2-1.4-3.2-3.2V7.5c0-1.8,1.4-3.2,3.2-3.2h6.9l1.8-2.8c0.1-0.2,0.4-0.3,0.6-0.3h7.1 c0.2,0,0.5,0.2,0.6,0.3l1.8,2.8h0.7c1.8,0,3.2,1.4,3.2,3.2v12.7C26,21.9,24.6,23.3,22.8,23.3z M15.5,5.9c-4.4,0-7.9,3.5-7.9,7.9 c0,4.4,3.5,7.9,7.9,7.9c4.4,0,7.9-3.5,7.9-7.9C23.5,9.5,19.9,5.9,15.5,5.9z M15.5,19.1c-2.9,0-5.3-2.4-5.3-5.3 c0-2.9,2.4-5.3,5.3-5.3c2.9,0,5.3,2.4,5.3,5.3C20.8,16.8,18.5,19.1,15.5,19.1z M7.6,3.7H2.5c-0.4,0-0.6-0.3-0.6-0.6V2.4 c0-0.4,0.3-0.6,0.6-0.6h5.1c0.4,0,0.6,0.3,0.6,0.6v0.6C8.2,3.4,8,3.7,7.6,3.7z';
// 珠宝钻戒  #87c5fb  id:359,type:"standard"
const SVG_PATH_ZBZJ = 'M22.7,26H3.3C1.5,26,0,24.5,0,22.7V3.3C0,1.5,1.5,0,3.3,0h19.3C24.5,0,26,1.5,26,3.3v19.3 C26,24.5,24.5,26,22.7,26z M23.8,3.2c0-0.4-0.3-0.7-0.7-0.7H2.9c-0.4,0-0.7,0.3-0.7,0.7v13.9c0,0.4,0.3,0.7,0.7,0.7h20.2 c0.4,0,0.7-0.3,0.7-0.7L23.8,3.2L23.8,3.2z M13,26c-4,0-7.3-3.3-7.3-7.3S9,11.5,13,11.5s7.3,3.2,7.3,7.3C20.3,22.7,17,26,13,26z M13,14.1 c-2.6,0-4.7,2.1-4.7,4.7c0,2.6,2.1,4.7,4.7,4.7c2.6,0,4.7-2.1,4.7-4.7C17.7,16.1,15.6,14.1,13,14.1z M14.3,8.3c-0.7,0-0.9,0.3-1.3,0.7c-0.3-0.4-0.6-0.7-1.3-0.7c-0.7,0-1.3,0.5-1.3,1.3c0,0.5,0.2,0.9,0.7,1.3 l1.8,1.8H13h0.1l1.8-1.8c0.4-0.4,0.7-0.9,0.7-1.3C15.5,8.8,15,8.3,14.3,8.3z';
// 婚礼策划  #fe8dc0  id:296,type:"wide"
const SVG_PATH_HLCH = 'M25.3,25.3c-0.8,0.8-1.8,1-2.3,0.5l0,0l0,0l-10.2-7.4l5.6-5.6l7.4,10.2l0,0C26.2,23.4,26,24.5,25.3,25.3z M8.5,17c-2.1,0-4-0.8-5.5-2L15,3c1.3,1.5,2,3.4,2,5.5C17,13.2,13.2,17,8.5,17z M0,8.5C0,3.8,3.8,0,8.5,0c2.1,0,4,0.8,5.5,2.1 l-12,12C0.8,12.6,0,10.6,0,8.5z';

const Section_0_SVG_Paths = [{title:'婚宴酒店', id:'268',type:'wide', fillColor:'#f88', path:SVG_PATH_HYJD},
                             {title:'婚纱摄影', id:'366',type:'tall', fillColor:'#fccb46', path:SVG_PATH_HSSY},
                             {title:'珠宝钻戒', id:'359',type:'standard', fillColor:'#87c5fb', path:SVG_PATH_ZBZJ},
                             {title:'婚礼策划', id:'296',type:'wide', fillColor:'#fe8dc0', path:SVG_PATH_HLCH},];



// 新娘跟妆  #87c5fb  id:374,type:"tall"
const SVG_PATH_XNGZ = 'M20.4,26h-6.3c-1,0-1.7-0.8-1.7-1.7v-8c0-0.9,0.6-1.6,1.5-1.7v-4.4C13.8,9.5,14.4,9,15,9h4.5 c0.6,0,1.2,0.5,1.2,1.2v4.4c0.8,0.1,1.5,0.8,1.5,1.7v8C22.2,25.2,21.4,26,20.4,26z M20.7,17.2c0-0.4-0.3-0.7-0.7-0.7 c-0.4,0-0.7,0.3-0.7,0.7v6.5c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7V17.2z M20.2,6.9C20.2,7.5,19.7,8,19,8H16 c-0.6,0-1.2-0.5-1.2-1.2V3.7c0-0.1,0-0.1,0-0.2l0,0c0,0-0.2-1.1,1-2C17,0.7,18.3,0.1,18.7,0c0,0,1.5-0.2,1.5,1s0,4,0,4l0,0V6.9z M6.6,17.5c-1.6,0-2.9-0.4-2.9-0.8c0-0.4,1-0.7,2.3-0.8v-8C5.7,7.6,5.4,7.3,5.4,6.9V2.2c0-0.6,0.5-1.1,1.1-1.1h0.2 c0.6,0,1.1,0.5,1.1,1.1v4.6c0,0.4-0.2,0.8-0.6,0.9v8c1.3,0.1,2.3,0.4,2.3,0.8C9.5,17.1,8.2,17.5,6.6,17.5z M6.6,18.8 c1,0,1.9-0.3,2.5-0.8c0.1,0.3,0.2,0.7,0.2,1.1l-0.7,6C8.5,25.6,8.1,26,7.7,26H5.5c-0.4,0-0.8-0.4-0.8-0.8l-0.7-6 c-0.1-0.4,0-0.8,0.2-1.1C4.7,18.5,5.6,18.8,6.6,18.8z';
// 主持跟拍  #a7e173  id:375,type:"standard"
const SVG_PATH_ZCGP = 'M24.8,23.3c-2.4,0.8-5,0.8-7.4,0c-0.2-0.1-0.4-0.2-0.5-0.3c-1.6,0.9-3.5,1.4-5.5,1.4C5.1,24.5,0,19.4,0,13.1 C0,6.8,5.1,1.8,11.4,1.8c6.3,0,11.3,5.1,11.3,11.3c0,3.1-1.3,5.9-3.3,8c1.5,0.3,3.1,0.2,4.5-0.3c0.7-0.2,1.5,0,1.9,0.6 C26.2,22.1,25.8,23,24.8,23.3z M11.4,22.3c1.8,0,3.2-1.5,3.2-3.2s-1.5-3.2-3.2-3.2S8.1,17.3,8.1,19S9.6,22.3,11.4,22.3z M13,13.1 c0-0.9-0.7-1.6-1.6-1.6c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6C12.3,14.7,13,14,13,13.1z M5.4,9.9c-1.8,0-3.2,1.5-3.2,3.2 c0,1.8,1.5,3.2,3.2,3.2s3.2-1.5,3.2-3.2C8.7,11.3,7.2,9.9,5.4,9.9z M11.4,3.9c-1.8,0-3.2,1.5-3.2,3.2c0,1.8,1.5,3.2,3.2,3.2 s3.2-1.5,3.2-3.2C14.6,5.4,13.2,3.9,11.4,3.9z M20.6,13.1c0-1.8-1.5-3.2-3.2-3.2s-3.2,1.5-3.2,3.2c0,1.8,1.5,3.2,3.2,3.2 S20.6,14.9,20.6,13.1z';
// 婚纱礼服  #fccb46  id:380,type:"tall"
const SVG_PATH_HSLF = 'M25.5,21.4c0,0-0.1,0.9-1.6,1.6c-1.5,0.7-3.9,1.3-4.2,1c-0.2-0.2-0.2-7-2.1-8.8c0,0-1.1-0.6-1,0.5 s2,1.7,2.1,8.8c0,0.1-0.1,0.2-0.1,0.2c-0.1,0.1-0.4,0.2-1,0.4c-1.4,0.4-3.3,0.6-4.7,0.5c-1.4,0-3.3-0.1-4.7-0.5 c-0.6-0.2-0.9-0.3-1-0.4c0,0-0.1,0-0.1-0.2c0-7.1,2-7.8,2.1-8.8c0-1.1-1-0.5-1-0.5c-1.9,1.8-1.9,8.6-2.1,8.8c-0.2,0.2-2.7-0.3-4.2-1 c-1.5-0.7-1.6-1.6-1.6-1.6c0.3-8.4,8.9-13,8.9-13c0.2-0.3-0.6-0.8-1.6-2.6c-0.9-1.7-0.1-2.5,1.7-3C9.4,2.7,9.3,2.5,9.3,2.4V0.8 C9.3,0.4,9.7,0,10.1,0s0.8,0.4,0.8,0.8v1.6c0,0.1,0,0.2-0.1,0.3C12.2,2.7,13,3.7,13,3.8c0-0.1,0.8-1,2.1-1.1c0-0.1-0.1-0.2-0.1-0.3 V0.8c0-0.4,0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8v1.6c0,0.2-0.1,0.3-0.2,0.5c1.8,0.5,2.6,1.4,1.7,3c-0.9,1.8-1.8,2.3-1.6,2.6 C16.6,8.5,25.2,13,25.5,21.4z';
// 结婚图库  #ae93e5  id:0
const SVG_PATH_JHTK = 'M23.5,24h-21C1.1,24,0,22.9,0,21.5V4c0-1.4,1.1-2.5,2.5-2.5h21C24.9,1.5,26,2.6,26,4v17.5 C26,22.9,24.9,24,23.5,24z M13,3.4c-5.2,0-9.4,4.2-9.4,9.4c0,5.2,4.2,9.4,9.4,9.4c5.2,0,9.4-4.2,9.4-9.4C22.4,7.6,18.2,3.4,13,3.4z M13.7,15.9c-0.6-1-0.2-2.2,0.7-2.8c1.3-0.7,2.1,0,2.7,0.9c1-0.5,2.1-0.7,2.8,0.6c0.6,1,0.2,2.2-0.8,2.8c-3.4,1.7-3.4,1.7-3.4,1.7 S15.7,19.1,13.7,15.9z M11.6,15.9c0,0,0,0-4.6-2.3c-1.3-0.7-1.8-2.4-1-3.7c1-1.6,2.4-1.4,3.7-0.7C10.5,8,11.6,7.1,13.3,8 c1.3,0.8,1.8,2.4,1,3.7C11.6,15.9,11.6,15.9,11.6,15.9z';


const Section_1_SVG_Paths = [{title:'新娘跟妆', id:'374',type:'tall', fillColor:'#87c5fb', path:SVG_PATH_XNGZ},
                             {title:'主持跟拍', id:'375',type:'standard', fillColor:'#a7e173', path:SVG_PATH_ZCGP},
                             {title:'婚纱礼服', id:'380',type:'tall', fillColor:'#fccb46', path:SVG_PATH_HSLF},
                             {title:'结婚图库', id:'0',type:'', fillColor:'#ae93e5', path:SVG_PATH_JHTK},];


// 推荐页的8个选项
export default class Channels extends Component {
  static propTypes = {
    ...View.propTypes,
  };



  _renderButton(){
    return (
      <ZQMSVGButton>
      </ZQMSVGButton>
    );
  }




  render() {
    return (
      <View style={this.props.style}>
        <View style={[styles.menu]}>

          {
            Section_0_SVG_Paths.map(
              (item, index)=>{
                return (
                  <ZQMSVGButton key={index} title={item.title} colorOfCircle={item.fillColor} onPress={()=>{alert(item.id)}} containerStyle={styles.entry} svgPath={item.path}/>
                );
              }
            )
          }

        </View>
        <View style={[styles.menu]}>
          {
            Section_1_SVG_Paths.map(
              (item, index)=>{
                return (
                  <ZQMSVGButton key={index} title={item.title} colorOfCircle={item.fillColor} onPress={()=>{alert(item.id)}} containerStyle={styles.entry} svgPath={item.path}/>
                );
              }
            )
          }
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  menu:{
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
    // backgroundColor:'gray',
    // alignItems:'center',
    // justifyContent:'center',
  },
  entry:{
    flex:1,
    // width:375/4.0,
    height:88,
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor:'green',
  },
  text:{
    fontSize:12,
    color:"#222"
  },
  icon:{
    width:40,
    height:40,
    borderRadius:20,
    marginBottom:12,
    alignItems:"center",
    justifyContent:"center"
  },
});
