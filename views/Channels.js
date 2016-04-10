// 首页中的8个图标
import React,{
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  win,
} from 'react-native';

// MainTab/
export default class Channels extends Component {

  render() {
    return (
      <View>
      </View>
    );
  }
}

const styles = StyleSheet.creact({
  menu:{
    flexDirection:"row",
    flexWrap:"wrap",
  },
  entry:{
    width:win.width/4,
    height:88,
    alignItems:"center",
    justifyContent:"center",
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
