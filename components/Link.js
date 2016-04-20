__d("marry/components/Link.js",
function(e,t,n,r){
  function i(t){
    var n,r,i,s,u,l;
    return regeneratorRuntime.async(function(p){
      for(;;)
      switch(p.prev=p.next)
      {
        case 0:
        if(!t){
          p.next=20;break
        }
        if(n=void 0,"string"==typeof t?n=a(t):"function"==typeof t?n={type:"function",callback:t}:"event"===t.type?n={type:"event",name:t.name,data:t.data,condition:t.condition}:(r=t.component,i=t.path,s=t.title,"string"==typeof r&&(i=i||r,r=c["default"].get(f["default"],r.replace(/\//,"."))),u={title:s,component:r},i&&c["default"].defaults(u,o(i)),u=c["default"].assign({passProps:t.passProps},u),n={type:"component",route:u,condition:t.condition}),!n.condition){p.next=11;break}
        if(l=n.condition(n),!c["default"].isFunction(l.then))
        {
          p.next=9;break
        }
        return p.next=8,regeneratorRuntime.awrap(l);
        case 8:l=p.sent;
        case 9:
        if(l!==!1){
          p.next=11;break
        }
        return p.abrupt("return");
        case 11:
        p.t0=n.type,p.next="event"===p.t0?14:"function"===p.t0?16:"component"===p.t0?18:20;break;
        case 14:return d["default"].publish(n.name,n.data),p.abrupt("break",20);
        case 16:return n.callback(e.navigatorContext),p.abrupt("break",20);
        case 18:return e.navigatorContext.push(n.route),p.abrupt("break",20);
        case 20:case"end":return p.stop()}},null,this)}
        function o(e){
          var n=t("marry/app/routes.js")["default"];return n[e]}function a(e){if("#"===e[0])
          return{type:"event",name:"navigator.title",data:e.slice(1)};
          if("@"!==e[0]){
            var t=e.split(/\//g);
            return t.unshift(),{type:"component",route:c["default"].defaults({component:c["default"].get(f["default"],e.split(/\//g).map(function(e){
              return c["default"].capitalize(e)}).join("."))},o(e))}}}
              Object.defineProperty(r,"__esModule",{value:!0});
              var s=t("react-native/Libraries/react-native/react-native.js"),
              u=babelHelpers.interopRequireDefault(s),l=t("lodash/index.js"),
              c=babelHelpers.interopRequireDefault(l),p=t("marry/views/index.js"),
              f=babelHelpers.interopRequireDefault(p),h=t("marry/lib/agent.js"),
              d=babelHelpers.interopRequireDefault(h),v=s.TouchableHighlight.propTypes,
              g=s.StyleSheet.create({viewContainer:{flex:1,alignSelf:"stretch",backgroundColor:"transparent"}}),
              y=function(e){function t(){
                var e,n,r,o;babelHelpers.classCallCheck(this,t);
                for(var a=arguments.length,l=Array(a),c=0;a>c;c++)
                l[c]=arguments[c];
                return n=r=babelHelpers.possibleConstructorReturn(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),
                r._pressHandler=function(e){
                  var t=r.props,n=t.onPress,o=t.href;n&&n(e),i(o)},
            r._getContent=function(){var e=r,t=e.props;
              return u["default"].createElement(s.View,{style:[g.viewContainer,t.contentContainerStyle],onStartShouldSetResponder:function(){
                return t.disabled}},t.children)},
                o=n,babelHelpers.possibleConstructorReturn(r,o)}
                return babelHelpers.inherits(t,e),
                babelHelpers.createClass(t,[{key:"render",value:function(){
                  var e=this.props;
                  return e.underlayColor?u["default"].createElement(s.TouchableHighlight,babelHelpers["extends"]({},e,{onPress:this._pressHandler}),
                  this._getContent()):e.activeOpacity?u["default"].createElement(s.TouchableOpacity,babelHelpers["extends"]({},e,{onPress:this._pressHandler}),
                  this._getContent()):u["default"].createElement(s.TouchableWithoutFeedback,babelHelpers["extends"]({},e,{onPress:this._pressHandler}),
                  this._getContent())}}]),t}(s.Component);
                  y.displayName="Link",y.propTypes=babelHelpers["extends"]({style:s.TouchableHighlight.propTypes.style,onPressIn:s.PropTypes.func,onPressOut:s.PropTypes.func,onPress:s.PropTypes.func,disabled:s.PropTypes.bool,contentContainerStyle:s.View.propTypes.style},v),y.defaultProps={disabled:!1},r["default"]=y})


import React,{
  Component,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  PropTypes,
} from 'react-native';

export default class Link extends Component{
  static propTypes = {
    ...View.propTypes.style,
    ...TouchableHighlight.propTypes.style,
    // ...TouchableOpacity.propTypes.style,
    // ...TouchableWithoutFeedback.propTypes.style,
    renderCellContent:PropTypes.func.isRequired,
    onPressIn:PropTypes.func,
    onPressOut:PropTypes.func,
    onPress:PropTypes.func,
    disabled:PropTypes.bool,
    contentContainerStyle:View.propTypes.style
  };
  static defaultProps = {
    onPress:()=>{alert(1)},
    renderCellContent:()=><View />,
  };

  _getContent = ()=>{
    // TouchableHighlight拥有underlayColor属性
    if(this.props.underlayColor){

      return (
        <TouchableHighlight
          style={[this.props.styles, this.props.contentContainerStyle]}
          onPress={this._pressHandler}
          underlayColor={this.props.underlayColor}
          activeOpacity={this.props.activeOpacity}
          >
          {this.props.renderCellContent()}
        </TouchableHighlight>
      );
    }
    else {
      // TouchableHighlight,TouchableOpacity都有activeOpacity属性
      if (this.props.activeOpacity) {
        return (
          <TouchableOpacity
            style={[this.props.styles, this.props.contentContainerStyle]}
            onPress={this._pressHandler}
            activeOpacity={this.props.activeOpacity}
            >
            {this.props.renderCellContent()}
          </TouchableOpacity>
        );
      }
      else {
        return (
          <TouchableOpacity
            style={[this.props.styles, this.props.contentContainerStyle]}
            onPress={this._pressHandler}
            >
            {this.props.renderCellContent()}
          </TouchableOpacity>
        );
      }
    }

  };

  _pressHandler = ()=>{
    if (this.props.onPress) {
      this.props.onPress();
    }
  };



  render(){
    return (
      this._getContent()
    );
  }
}
