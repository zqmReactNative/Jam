import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  // TabBarItemIOS,
  NavigatorIOS,
} from 'react-native';

var ReactART = React.ART;
var {
    Group,
    Shape,
    // Circle,
    Surface,
    Transform,
    Rectangle,
} = ReactART;

import Recommend from './Recommend';
import Merchant  from './Merchant';
// var Recommend = require('./Recommend');
import SVGIcon from './SVGIcon';

// var rec = Recommend;
// const iconOfRecommend = {<Surface
//   width = {30}
//   height = {30}
//   style = {{margin: 40,}}
//   >
//
//   <Group scale = {1.0}>
//
//     <Shape
//       fill={`${this.props.active ? '#ff5942' : '#ccc'}`}
//
//       d={'M21.9,13.2c-1.1-0.3-1.3-0.7-1.2-1.7c0-2.4-1.2-3.6-3.5-3.7c-0.7,0-1.4,0-2.3,0c1-1.2,1.9-2.1,2.6-3.1c1-1.4,0.9-2.6,0-3.6c-1-1.1-2.3-1.2-3.7-0.2c-0.5,0.4-0.7,0.4-1.2,0c-1.4-1-2.7-0.9-3.7,0.2c-1,1-1,2.2,0,3.7c0.7,1.1,1.6,1.9,2.7,3.1c-0.7,0-1.2,0-1.6,0c-3.4,0-4.3,0.9-4.4,4.3c0,0.8-0.4,0.8-1,1c-3.1,0.8-5.1,3.9-3.8,6.7c0.8,1.7,0.9,3.3,0.9,5.1c0,1,0.4,1.2,1.2,1.2c6.8,0,13.6,0,20.4,0c1.1,0,1.2-0.4,1.2-1.3c0-1.3-0.3-2.6,0.4-3.9C26.7,17.7,25.3,14,21.9,13.2z M8.1,11c0-0.5,0.5-0.5,0.9-0.5c1.4,0,2.7,0,4.1,0c1.4,0,2.7,0,4.1,0c0.4,0,0.9,0,0.9,0.5c0,0.6-0.4,0.7-0.9,0.7c-2.7,0-5.4,0-8.2,0C8.5,11.7,8,11.6,8.1,11z M23.1,18.6c-0.2,1.2-1.3,2.2-2.6,2.2c-1.7-0.1-2.8-1-3.7-2.4c-2.9,3.2-5,3.2-7.7-0.1c-0.8,1.3-1.8,2.2-3.2,2.4c-1.5,0.2-2.8-0.7-3-2.1c-0.2-1.5,0.6-2.7,2.2-3c0.3-0.1,0.6-0.1,0.9-0.1c4.7,0,9.3,0,14,0c0.4,0,0.9,0.1,1.3,0.2C22.7,16.1,23.3,17.2,23.1,18.6z'}
//       />
//
//   </Group>
// </Surface>};
// export default class Root extends Component
export default class Root extends Component
{


  // getInitialState(){
  //   return {
  //     selectedTab: "recommend"
  //   };
  // }

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tk',
    };
  }



  // 进行渲染页面内容
  // _renderContent(color: string, pageText: string, num?: number) {
  //   return (
  //     <Recommend />
  //   );
  // }


  // 进行渲染页面内容
  _renderContent(title: ?string) {
    return (
      // 千万别忘了 flex:1, 否则无界面显示
      <NavigatorIOS
        style={{flex:1}}
        initialRoute={{
          translucent: false,
          component:Recommend,
          title:title,
        }}
        />

    );
  }

  render(){
    return (
      //  { /* TabBarIOS */ }
       <TabBarIOS tintColor={"#ff5942"}
         barTintColor={"white"}
         >
         <TabBarIOS.Item
           title="推荐"
           onPress={()=> {
             this.setState({
               selectedTab: "recommend",
             });
           }}
           selected = {this.state.selectedTab === 'recommend'}
           >
           {/*{this._renderContent('推荐标题')}*/}
           {/*
             <NavigatorIOS
               style={{backgroundColor:'green'}}
               initialRoute={{
                 translucent: false,
                 component:Recommend,
                 title:'xxx',
               }}
               />
             */}
            {this._renderContent('推荐')}
         </TabBarIOS.Item>

         <TabBarIOS.Item
           title="图库"
           onPress={() => {
             this.setState({
               selectedTab: 'tk',
             });
           }}
           selected = {this.state.selectedTab === 'tk'}
           >
           {this._renderContent("图库")}
         </TabBarIOS.Item>

         <TabBarIOS.Item
           title="商家"
           onPress={() => {
             this.setState({
               selectedTab: 'merchant',
             });
           }}
           selected = {this.state.selectedTab === 'merchant'}
           >

           <Merchant/>
         </TabBarIOS.Item>


       </TabBarIOS>

    );
  }

};




// module.exports = Root;
