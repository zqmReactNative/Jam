
import React, {
  StyleSheet,
  View,
  Component,
  PropTypes,
  Text,
} from 'react-native';

import Link from '../../components/Link.js';
import Img from '../../components/Img.js';

import Header from '../Index/Header.js';


export default class ShopCell extends Component {

  static propTypes = {
    ...View.propTypes,
    shopname:PropTypes.string,
    logo:PropTypes.string,
    // shop:PropTypes.array,
  };

  render(){
    const {shopname, logo} = this.props;
    return (
      <View>
        <Link
          style={styles.item}
          underlayColor="transparent"
          // href={{
          //   component:"Shop",
          //   title:name,
          //   passProps:{
          //     data:rowData
          //   }
          // }}
          onPress={()=>{alert(2)}}
          activeOpacity={1}
          renderCellContent={()=>{
            return (
              <View style={{backgroundColor:'white', paddingHorizontal:5, width:75,}}>
                <View style={styles.logo}>
                  <Img style={styles.logo} source={{uri:logo}}/>
                </View>
                <View style={{width:75,}}>
                  <Text  style={[styles.text, ]}>
                    {shopname}
                  </Text>
                </View>
              </View>

            );
          }}
          >
        </Link>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10
  },
  listContainer:{
    marginRight:-15
  },
  list:{
    flexDirection:"row",
    paddingHorizontal:10
  },
  item:{
    marginRight:15,
    width:75
  },
  logo:{
    width:75,
    height:75,
    borderRadius:3
  },
  text:{
    marginVertical:10,
    color:"#151515",
    fontSize:12,
    height:14,
    lineHeight:14,
    textAlign:"center"
  }
});
