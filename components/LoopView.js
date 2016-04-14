__d("marry/components/LoopView.js",function(e,t,n,r){
  Object.defineProperty(r,"__esModule",{value:!0});
  var i=t("react-native/Libraries/react-native/react-native.js"),
  o=babelHelpers.interopRequireDefault(i),
  a=t("lodash/index.js"),
  s=babelHelpers.interopRequireDefault(a),
  u=function(e){function t(){
    babelHelpers.classCallCheck(this,t);
    var e=babelHelpers.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments));
    return e.id=s["default"].uniqueId("loop-view-"),e}
    return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){
      var e=this;
      return o["default"].createElement(i.View,this.props,s["default"].map(this.props.data,
        function(t,n){
          return(0,i.cloneElement)(e.props.renderRow(t,n),{key:"loop-"+e.id+"-"+n})}))}}]),t}(i.Component);u.displayName="LoopView",
          u.propTypes=babelHelpers["extends"]({},i.View.propTypes,{data:i.PropTypes.array.isRequired,renderRow:i.PropTypes.func.isRequired}),
          r["default"]=u})


import React,{
  Component,
  StyleSheet,
  RefreshControl,
  View,
  ListView,
  PropTypes,
} from 'react-native';


export default class LoopView extends Component{

  static propTypes = {
    ...View.propTypes,
    data:PropTypes.array.isRequired,
    renderRow:PropTypes.func.isRequired,
  };




  render(){
    return (
      <View>
        {
          this.data.map(
            (item, index)=>{
              return (this.renderRow());
            }
          );
        }
      </View>
    );
  }
}
