// 图库
__d("marry/views/Album.js",
function(e,t,n,r){
  Object.defineProperty(r,"__esModule",{value:!0});
  var i=t("react-native/Libraries/react-native/react-native.js"),
  o=babelHelpers.interopRequireDefault(i),a=t("lodash/index.js"),
  s=babelHelpers.interopRequireDefault(a),u=t("marry/components/Remote.js"),
  l=(babelHelpers.interopRequireDefault(u),t("marry/components/Link.js")),
  c=(babelHelpers.interopRequireDefault(l),t("marry/data/categories.js")),
  p=babelHelpers.interopRequireDefault(c),f=t("marry/data/sortBys.js"),
  h=babelHelpers.interopRequireDefault(f),d=t("marry/lib/fetchRemote.js"),
  v=babelHelpers.interopRequireDefault(d),g=t("marry/views/Filters.js"),
  y=babelHelpers.interopRequireDefault(g),m=t("marry/views/List.js"),
  b=babelHelpers.interopRequireDefault(m),_=t("marry/views/PageList.js"),
  S=babelHelpers.interopRequireDefault(_),w=t("marry/data/channels.js"),
  C=babelHelpers.interopRequireDefault(w),R=t("marry/views/Filters/FiltersCategory.js"),
  E=babelHelpers.interopRequireDefault(R),x=t("marry/views/Filters/FiltersList.js"),
  T=babelHelpers.interopRequireDefault(x),
  O=i.StyleSheet.create({
    container:{flex:1,backgroundColor:"#f6f6f6"},
    contentContainer:{flexDirection:"row",flexWrap:"wrap"}
  }),
  k=function(t){
    function n(){
      babelHelpers.classCallCheck(this,n);
      var t=babelHelpers.possibleConstructorReturn(this,Object.getPrototypeOf(n).apply(this,arguments));
      return t.componentDidMount=function(){
        var t;
        return regeneratorRuntime.async(function(n){
          for(;;)
          switch(n.prev=n.next)
          {case 0:return n.next=2,regeneratorRuntime.awrap((0,v["default"])("casecondition"));
            case 2:return t=n.sent,n.next=5,regeneratorRuntime.awrap(i.InteractionManager.runAfterInteractions());
            case 5:return n.next=7,regeneratorRuntime.awrap(e.requestAnimationFrameAsync());
            case 7:!this._unmounted&&t&&this.setState(t);
            case 8:
            case"end":return n.stop()}},null,this)},
          t.componentWillUnmount=function(){
            t._unmounted=!0
          },
          t._renderRow=function(e,n,r){
            var i=b["default"][s["default"].capitalize(t.state.render)];
            return o["default"].createElement(i,{data:e,index:r,host:"album",key:"shop-"+e.id})},
          t._onCategoryChange=function(e,n){t.setState({catId:n,catTitle:e,render:t._getRender(n)})},
          t._onSortChange=function(e,n){t.setState({type:n,sortTitle:e})},
          t._getRender=function(e){return e=e||c.defaultId,s["default"].every(t.state.categories,function(t){var n=t.id,r=t.children;return n===e||s["default"].find(r,{id:e})?(e=n,!1):!0}),s["default"].find(C["default"],{id:e}).type},t.state={sortBys:h["default"],categories:p["default"]},t.state.render=t._getRender(),t}return babelHelpers.inherits(n,t),babelHelpers.createClass(n,[{key:"render",value:function(){return o["default"].createElement(i.View,{style:O.container,collapsable:!1},o["default"].createElement(y["default"],null,o["default"].createElement(E["default"],{title:this.state.catTitle||c.defaultTitle,id:this.state.catId||c.defaultId,data:this.state.categories,onChange:this._onCategoryChange}),o["default"].createElement(T["default"],{title:this.state.sortTitle||f.defaultTitle,id:this.state.type||f.defaultId,data:this.state.sortBys,onChange:this._onSortChange})),o["default"].createElement(S["default"],{api:"caselist",name:"album",style:O.container,contentContainerStyle:O.contentContainer,renderRow:this._renderRow,data:{type:this.state.type,catid:this.state.catId},initialListSize:8,pageSize:2,key:this.state.catId+":"+this.state.type}))}}]),n}(i.Component);
k.displayName="Album",r["default"]=k}),
