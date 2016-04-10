/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

// var {
//   width,
//   height
// } = Dimensions.get('window');

// import Svg, {
//     Circle,
//     Ellipse,
//     G,
//     LinearGradient,
//     RadialGradient,
//     Line,
//     Path,
//     Polygon,
//     Polyline,
//     Rect,
//     Symbol,
//     Use,
//     Defs,
//     Stop
// } from 'react-native-art-svg';

import Svg, {
    Circle,
    G,
    Path,
} from 'react-native-art-svg';

import SVGIcon from './views/SVGIcon';

import Root from './views/Root';
import TabBarIOSDemo from './views/TabBarIOSDemo';

var ReactART = React.ART;
var {
    Group,
    Shape,
    // Circle,
    Surface,
    Transform,
    Rectangle,
} = ReactART;

// var VectorWidget = require('./VectorWidget');



var imagePath = require('./images/loading.gif');
// class Jam extends Component {
//   render() {
//     return (
//       <View style={[styles.container,]}>
//
//         <View style={[styles.part_0, styles.row]}>
//           <View style={styles.part_0_left}>
//           </View>
//           <View style={styles.part_0_right}>
//           </View>
//         </View>
//
//         <View style={styles.part_1}>
//         </View>
//
//         <View style={styles.part_2}>
//           <VectorWidget style = {styles.vector}>
//           </VectorWidget>
//         </View>
//
//       </View>
//
//
//     );
//   }
// }




// <Svg
//   width = "30"
//   height = "30"
//   >
//   <Circle
//     r="15"
//     cx="30"
//     cy="30"
//     stroke="green"
//     fill="pink"
//   />
//
// </Svg>

// <Circle
//   radius={10}
//   stroke="green"
//   fill="pink"
//   strokeWidth={3}
// />



class Jam extends Component {
  render() {
    return (

      <View style={styles.row}>

        <View style={[styles.items, {borderRadius: 50, backgroundColor: 'pink'}, ]}>
          <Surface
            width = {30}
            height = {30}
            style = {{margin: 40,}}
            >

            <Group scale = {1.0}>

              <Shape
                fill={`${this.props.active ? '#ff5942' : '#ccc'}`}

                d={'M21.9,13.2c-1.1-0.3-1.3-0.7-1.2-1.7c0-2.4-1.2-3.6-3.5-3.7c-0.7,0-1.4,0-2.3,0c1-1.2,1.9-2.1,2.6-3.1c1-1.4,0.9-2.6,0-3.6c-1-1.1-2.3-1.2-3.7-0.2c-0.5,0.4-0.7,0.4-1.2,0c-1.4-1-2.7-0.9-3.7,0.2c-1,1-1,2.2,0,3.7c0.7,1.1,1.6,1.9,2.7,3.1c-0.7,0-1.2,0-1.6,0c-3.4,0-4.3,0.9-4.4,4.3c0,0.8-0.4,0.8-1,1c-3.1,0.8-5.1,3.9-3.8,6.7c0.8,1.7,0.9,3.3,0.9,5.1c0,1,0.4,1.2,1.2,1.2c6.8,0,13.6,0,20.4,0c1.1,0,1.2-0.4,1.2-1.3c0-1.3-0.3-2.6,0.4-3.9C26.7,17.7,25.3,14,21.9,13.2z M8.1,11c0-0.5,0.5-0.5,0.9-0.5c1.4,0,2.7,0,4.1,0c1.4,0,2.7,0,4.1,0c0.4,0,0.9,0,0.9,0.5c0,0.6-0.4,0.7-0.9,0.7c-2.7,0-5.4,0-8.2,0C8.5,11.7,8,11.6,8.1,11z M23.1,18.6c-0.2,1.2-1.3,2.2-2.6,2.2c-1.7-0.1-2.8-1-3.7-2.4c-2.9,3.2-5,3.2-7.7-0.1c-0.8,1.3-1.8,2.2-3.2,2.4c-1.5,0.2-2.8-0.7-3-2.1c-0.2-1.5,0.6-2.7,2.2-3c0.3-0.1,0.6-0.1,0.9-0.1c4.7,0,9.3,0,14,0c0.4,0,0.9,0.1,1.3,0.2C22.7,16.1,23.3,17.2,23.1,18.6z'}
                />

            </Group>
          </Surface>
        </View>
        <View style={styles.items}>
          <Surface
            width = {30}
            height = {30}
            style = {{margin:40}}
            >
            <Group scale = {1.0}>
              <Shape
                fill={`${this.props.active ? '#ff5942' : '#ccc'}`}
                d={'M13.3,0C7.6,0,2.9,4.7,2.9,10.5c0,1,0.1,2,0.4,3c1.4,5.7,9.2,11.8,9.5,12.1l0.6,0.4l0.5-0.4 c0.4-0.3,9.2-7.2,9.8-13.3v-0.2c0.1-0.5,0.1-1.1,0.1-1.6C23.8,4.7,19.1,0,13.3,0z M21.9,12.1l-0.1,0.9c-1,4.3-6.6,9.2-8.4,10.8	c-1.7-1.5-7.2-6.4-8.3-10.8c-0.2-0.8-0.4-1.6-0.4-2.5c0-4.8,3.9-8.7,8.7-8.7c4.8,0,8.7,3.9,8.7,8.7C22,11,21.9,11.6,21.9,12.1z'}
                />
              <Shape
                fill={`${this.props.active ? '#ff5942' : '#ccc'}`}
                d={'M16,6.4c-1.3,0-2.1,0.5-2.7,1.1c-0.6-0.6-1.4-1.1-2.7-1.1c-2,0-3.5,1.4-3.5,3.4c0,1.2,0.6,2.4,1.6,3.4 l3.9,3.8c0.1,0.2,0.4,0.3,0.6,0.3c0.2,0,0.5-0.1,0.7-0.3l3.9-3.8c1-1,1.6-2.2,1.6-3.4C19.5,7.8,18,6.4,16,6.4z M16.6,11.9	c0,0-2.5,2.5-3.3,3.2c-0.8-0.8-3.2-3.2-3.2-3.2c-0.7-0.7-1-1.4-1-2c0-0.9,0.6-1.5,1.7-1.5c0.9,0,1.1,0.3,1.8,1.1l0.1,0.1 c0.2,0.1,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l0.1-0.1c0.6-0.8,0.9-1.1,1.8-1.1c0.9,0,1.5,0.6,1.5,1.5 C17.6,10.5,17.2,11.3,16.6,11.9z'}
                />
            </Group>
          </Surface>
        </View>

        <View style={styles.items}>
          <Surface
            width={30}
            height={30}
            style = {{margin: 40}}
            >
            <Group scale={1.0}>
                <Shape
                    fill={`${this.props.active ? '#ff5942' : '#ccc'}`}

                    d={'M23.2,1H7C5.4,1,4.2,2.3,4.2,3.8V3L1.9,3.6C0.5,4-0.3,5.4,0.1,6.8l4.2,15.3v0.1c0,1.6,1.3,2.8,2.8,2.8h16.2	c1.5,0,2.8-1.3,2.7-2.9v-1.4v-1.4V3.8C26,2.3,24.7,1,23.2,1z M4.2,17L1.7,7.8C1.3,6.4,2.2,4.9,3.6,4.5l0.6-0.2l0,0V17z M24.7,20.8	c0,1.6-1.3,2.8-2.8,2.8H8.5c-1.5,0-2.8-1.3-2.8-2.8v-0.1L24.7,20.8L24.7,20.8L24.7,20.8z M24.7,19.4h-19V5.2c0-1.6,1.3-2.8,2.8-2.8 h13.4c1.6,0,2.8,1.3,2.8,2.8V19.4L24.7,19.4z'}

                />
                <Shape
                    fill={`${this.props.active ? '#ff5942' : '#ccc'}`}

                    d={'M10.9,10.9c1.8,0,3.2-1.4,3.2-3.2s-1.4-3.2-3.2-3.2S7.7,6,7.7,7.8S9.1,10.9,10.9,10.9z M10.9,6	c1,0,1.8,0.8,1.8,1.8s-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8S9.9,6,10.9,6z'}

                />

                <Shape
                    fill={`${this.props.active ? '#ff5942' : '#ccc'}`}
                    d={'M18.2,10.8c-0.1,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.1-0.2-0.1-0.2c-0.3-0.3-0.7-0.3-1,0l-3.7,3.7l-1-1.1	C12,13,11.7,13,11.6,13l-0.1-0.1c-0.3-0.3-0.7-0.3-1,0l-2.3,2.5c-0.3,0.3-0.3,0.7,0,1c0.3,0.3,0.7,0.3,0.9,0l2.1-2.1l1.4,1.4 c0.3,0.3,0.7,0.3,1,0c0.1,0,0.2-0.1,0.3-0.1l3.4-3.4l4.2,4.2c0.3,0.3,0.7,0.3,1,0c0.3-0.3,0.3-0.7,0-1L18.2,10.8z'}

                />

            </Group>
          </Surface>
        </View>

        <View style={styles.items}>
          <Surface
            width = {30}
            height = {30}
            style = {{margin:40}}
            >
            <Group scale = {1.0}>
              <Shape
                fill={`${this.props.active ? '#ff5942' : '#ccc'}`}
                d={'M26,6c0-1.6-1.3-2.9-2.9-2.9h-5.9C16.7,1.4,15,0.2,13,0.2c-2,0-3.6,1.3-4.1,2.9h-6C1.3,3.1,0,4.4,0,6v5h1.8	c-0.2,0.4-0.4,0.9-0.4,1.4v10.2c0,1.6,1.3,2.9,2.9,2.9h17.4c1.6,0,2.9-1.3,2.9-2.9V12.4c0-0.5-0.1-1-0.4-1.4H26V6z M12.9,1.7	c1.1,0,2,0.6,2.4,1.5h-4.8C10.9,2.3,11.9,1.7,12.9,1.7z M23.1,21.4c0,1.5-1.3,2.7-2.9,2.7H5.7c-1.6,0-2.9-1.2-2.9-2.7v-7.5	c0-1.5,1.3-2.7,2.9-2.7h14.5c1.6,0,2.9,1.2,2.9,2.7V21.4z M24.5,9.6H1.3V7.5c0-1.6,1.3-2.9,2.9-2.9h17.4c1.6,0,2.9,1.3,2.9,2.9V9.6	z'}
                />

              <Shape
                fill={`${this.props.active ? '#ff5942' : '#ccc'}`}
                d={'M15.3,12.9c-0.9,0-1.8,0.4-2.4,1.2c-0.6-0.7-1.4-1.2-2.4-1.2c-1.7,0-3,1.4-3,3.2c0,0.5,0.1,1,0.4,1.4 c1,1.6,4.6,5.3,4.8,5.5c0.1,0.1,0.2,0.1,0.2,0.1c0.1,0,0.1,0,0.2-0.1c0.2-0.2,3.8-3.9,4.8-5.5c0.2-0.4,0.4-0.8,0.4-1.4	C18.4,14.4,17,12.9,15.3,12.9z M16.8,16.8c-0.6,1-2.8,3.3-3.9,4.5C11.7,20,9.6,17.7,9,16.8c-0.1-0.2-0.2-0.4-0.2-0.6	c0-1,0.7-1.8,1.7-1.8c0.7,0,1.2,0.3,1.5,1c0.2,0.3,0.5,0.6,0.9,0.6c0.4,0,0.8-0.2,0.9-0.6c0.4-0.6,0.9-1,1.5-1 c0.9,0,1.8,0.8,1.8,1.8C17,16.3,17,16.6,16.8,16.8z'}
                />
            </Group>
          </Surface>
        </View>
      </View>








    );
  }
}


// <Surface
//   width={30}
//   height={30}
//   >
//   <Circle
//     radius={10}
//     stroke="green"
//     fill="pink"
//     strokeWidth={3}
//   />
// </Surface>

const circleRadius = 41;
const kWidth = 26;
const kHeight = 26;

// class Jam extends Component {
//   render() {
//     return (
//       <View style={[{marginTop:64, width:375*0.25, height: 350*0.5, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center'}]}>
//         <SVGIcon>
//         </SVGIcon>
//       </View>
//
//     );
//   }
// }

const styles = StyleSheet.create({
  vector: {
      width: 100,
      height: 100
    },
  row:{
    flexDirection:'row',
  },

  part_0: {
    flex: 1,
    // flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'green',
  },
  part_0_left: {
    flex:1,
    backgroundColor : 'gray',
  },
  part_0_right: {
    flex:2,
    backgroundColor : '#fccb46',
  },


  part_1:{
    flex:1,
    backgroundColor:'#757575',
  },
  part_2:{
    flex:1,
    backgroundColor:'#454545',
  },

  items:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },


  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('Jam', () => TabBarIOSDemo);
AppRegistry.registerComponent('Jam', () => Root);
