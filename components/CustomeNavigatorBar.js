

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  PropTypes,
} from 'react-native';

import Logo from '../SVG/Logo.js';

export default class CustomeNavigatorBar extends Component {

  static propTypes = {
    ...View.propTypes,
    title:PropTypes.string,
    titleView:PropTypes.func,
    leftBarButtonItem:PropTypes.func,
    rightBarButtonItems:PropTypes.func,
    isBelongTopNavigator:PropTypes.bool,

  };

  static defaultProps = {
    title:"",
    // leftBarButtonItem:()=>{
    //   return (
    //     <Text style={styles.title}>
    //       武汉
    //     </Text>
    //   );
    // },
    // titleView:()=>(<Text style={styles.title}>{this.props.title}</Text>),//undefined is not an object (evaluating '_this2.props.title')
    // titleView:()=>(<Text style={styles.title}>{title}</Text>),//Error:Can't find variable:title
    leftBarButtonItem:()=>(<Text style={styles.leftTitle}>武汉</Text>),
    isBelongTopNavigator:false,
    rightBarButtonItems:()=>(<Text style={styles.rightNavBarButtonStyle}></Text>),

  }




  render(){
    const {leftBarButtonItem, title, titleView, rightBarButtonItems, isBelongTopNavigator} = this.props;

    // Error:OnlyRead
    // if (isBelongTopNavigator) {
    //   this.props.titleView = ()=>(<Logo />);//OnlyRead
    // }
    // else {
    //   this.props.titleView = ()=><View style={{backgroundColor:'pink'}}/>;//OnlyRead
    // }
    // Error:OnlyRead
    // if (titleView) {
    //   this.props.titleView = ()=>(<Logo />);//OnlyRead
    // }else {
    //   this.props.titleView = ()=>(<Logo />);//OnlyRead
    // }
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}/>
        <View style={styles.barStyle}>
          <View style={styles.leftNavBarButtonStyle}>
            {/*<Text style={styles.title}>
              武汉
            </Text>*/}
            {this.props.leftBarButtonItem()}
          </View>

          <View style={styles.centerViewStyle}>
            {/*<Logo />*/}
            {titleView? titleView():(<Text style={styles.title}>{this.props.title}</Text>)}
          </View>
          {/*
            <Text style={styles.rightNavBarButtonStyle}>
            </Text>
            */}
          {/*{rightBarButtonItems? rightBarButtonItems():(<Text style={styles.rightNavBarButtonStyle}></Text>)}*/}
          {rightBarButtonItems()}
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
  leftTitle:{
    margin:10,
    textAlign:"center",
    alignItems:"center"
  },
  title:{
    color:"#ff5942",
    fontSize:17,
    margin:10,
    // marginTop:14,
    // fontWeight:"600",
    textAlign:"center",
    alignItems:"center"
  },



});
