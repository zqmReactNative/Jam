
import React,{
  Component,
  Text,
  View,
  StyleSheet,
  PropTypes,
} from 'react-native';


export default class Header extends Component{

  static propTypes = {
    ...View.propTypes,
    title:PropTypes.string,
  };

  render(){
    return (
      <View style={[styles.header]}>
        <View style={styles.headerBorder}>
        </View>
        <Text style={styles.headerText}>
          {this.props.title}
        </Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  header:{
    paddingHorizontal:10,
    height:35,
    alignItems:"center",
    flexDirection:"row"
  },
  headerBorder:{
    height:14,
    width:5,
    marginRight:8,
    borderRadius:1,
    backgroundColor:"#ff5942"
  },
  headerText:{
    color:"#151515",
    fontSize:15
  },
});
