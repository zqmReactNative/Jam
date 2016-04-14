

import React, {
  Component,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Logo from '../SVG/Logo.js';

export default class CustomeNavigatorBar extends Component {

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}/>
        <View style={styles.barStyle}>
          <View style={styles.leftNavBarButtonStyle}>
            <Text style={styles.title}>
              武汉
            </Text>
          </View>

          <View style={styles.centerViewStyle}>
            <Logo />
          </View>
          <Text style={styles.rightNavBarButtonStyle}>
          </Text>
        </View>
        <View style={styles.divider}/>

      </View>
    );
  }

}


const styles = StyleSheet.create({
  container:{
    height:64,
    backgroundColor:'#ccc',
  },
  statusBar:{
    height:20,
    backgroundColor:'white',
  },
  barStyle:{
    // flex:1,
    height:43,
    // marginTop:10,
    backgroundColor:'white',
    // marginBottom:2,
    flexDirection:'row',
    // flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',

  },
  leftNavBarButtonStyle:{
    flex:1,
  },
  centerViewStyle:{
    flex:4,
    // justifyContent:'center',
    // marginTop:20,
    alignItems:'center',
    // marginBottom:20,
  },
  rightNavBarButtonStyle:{
    flex:1,
  },
  dividerStyle:{
    height:1,
    backgroundColor:'#b2b2b2',
  },
  title:{
    // color:"#ff5942",
    // fontSize:17,
    margin:10,
    // marginTop:14,
    // fontWeight:"600",
    textAlign:"center",
    alignItems:"center"
  },



});
