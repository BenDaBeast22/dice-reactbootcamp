(this["webpackJsonpdice-app"]=this["webpackJsonpdice-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(7),r=n.n(i),l=(n(13),n(1)),s=n(2),c=n(3),u=n(5),h=n(4),d=(n(14),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("i",{className:"Die-icon fas fa-dice-".concat(this.props.num," \n            ").concat(this.props.rolling&&"shaking")})}}]),n}(o.Component)),m=(n(15),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).state={die1:"one",die2:"two",rolling:!1},o.roll=o.roll.bind(Object(c.a)(o)),o}return Object(s.a)(n,[{key:"roll",value:function(){var e=this,t=this.props.sides[Math.floor(Math.random()*this.props.sides.length)],n=this.props.sides[Math.floor(Math.random()*this.props.sides.length)];this.setState({die1:t,die2:n,rolling:!0}),setTimeout((function(){e.setState({rolling:!1})}),1500)}},{key:"render",value:function(){return a.a.createElement("div",{className:"RollDice"},a.a.createElement(d,{num:this.state.die1,rolling:this.state.rolling}),a.a.createElement(d,{num:this.state.die2,rolling:this.state.rolling}),a.a.createElement("div",{className:"RollDice-button-container"},a.a.createElement("button",{onClick:this.roll,className:"RollDice-button",disabled:this.state.rolling},this.state.rolling?"Rolling...":"Roll Dice!")))}}]),n}(o.Component));m.defaultProps={sides:["one","two","three","four","five","six"]};var p=m;n(16);var f=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.744c894b.chunk.js.map