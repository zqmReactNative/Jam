import React, {
  Component,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default ZQMSVGButton extends Component {


  render() {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Image/>
          <Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  }


}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  },
  button:{
    overflow:'hidden',
  },
  buttonText:{
    textAlign:'center',
  },
});
