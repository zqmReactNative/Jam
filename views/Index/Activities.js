__d("marry/views/Index/Activities.js",
function(e,t,n,r){
  Object.defineProperty(r,"__esModule",{value:!0});
  var i=t("react-native/Libraries/react-native/react-native.js"),
  o=babelHelpers.interopRequireDefault(i),
  a=t("lodash/index.js"),
  s=babelHelpers.interopRequireDefault(a),
  u=t("marry/views/List/Activity.js"),
  l=babelHelpers.interopRequireDefault(u),
  c=t("marry/components/Link.js"),
  p=(babelHelpers.interopRequireDefault(c),
  t("marry/components/Img.js")),
  f=(babelHelpers.interopRequireDefault(p),
  t("marry/components/LoopView.js")),
  h=babelHelpers.interopRequireDefault(f),
  d=t("marry/views/Index/Header.js"),
  v=babelHelpers.interopRequireDefault(d),
  g=t("react-native-baidu-mob-stat/index.js"),
  y=function(e){function t(){
    babelHelpers.classCallCheck(this,t);
    var e=babelHelpers.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments));
    return e.shouldComponentUpdate=function(t){
      var n=t.data;
      return e.state.data.length!==n.length||!s["default"].every(e.state.data,function(e,t){
        return e.id===n[t].id})},
        e.componentWillReceiveProps=function(t){
          var n=t.data;e.state.data!==n&&e.setState({data:n})},
          e._renderRow=function(e){return o["default"].createElement(l["default"],{data:e,onPress:function(){return(0,g.logEvent)("10002",""+e.id)}})},e.state={data:e.props.data||s["default"].fill(Array(3),{})},e}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){return o["default"].createElement(i.View,{style:this.props.style},o["default"].createElement(v["default"],null,"\u4f18\u60e0\u6d3b\u52a8"),o["default"].createElement(h["default"],{data:this.state.data,renderRow:this._renderRow}))}}]),t}(i.Component);y.displayName="Activities",r["default"]=y}),
