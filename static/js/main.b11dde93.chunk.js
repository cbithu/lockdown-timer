(this["webpackJsonplockdown-timer"]=this["webpackJsonplockdown-timer"]||[]).push([[0],{26:function(e,a,t){e.exports=t(36)},31:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(18),c=t.n(r),l=(t(31),t(19)),i=t(10),s=t(21),m=t(22),d=t(9),u=t(50),h=t(51),v=t(52);var f=Object(d.a)({root:{flexGrow:1,width:"90%"},barRoot:{height:"10vh",borderRadius:"2vh"}})((function(e){var a=e.classes,t=e.percentage;return o.a.createElement("div",{className:a.root},o.a.createElement(v.a,{classes:{root:a.barRoot},color:"secondary",variant:"determinate",value:t}))})),p=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={day:null,hour:null,minute:null,second:null,percentage_complete:null},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){var a=Date.now(),t=((a-15849882e5)/1900799e3*100).toFixed(4),n=Math.abs(1586888999e3-a)/1e3,o=Math.floor(n/86400);n-=86400*o;var r=Math.floor(n/3600)%24;n-=3600*r;var c=Math.floor(n/60)%60;n-=60*c;var l=Math.round(n%60);e.setState({day:o,hour:r,minute:c,second:l,percentage_complete:t})}),1e3)}},{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.day,n=a.hour,r=a.minute,c=a.second,l=a.percentage_complete;return o.a.createElement("div",{className:e.app},o.a.createElement(u.a,{variant:"h1",component:"h2",className:e.heading},"INDIA LOCKDOWN TIMER"),o.a.createElement(u.a,{variant:"h4",className:e.subHeading},"Lockdown will be over in ..."),o.a.createElement(h.a,{elevation:3,className:e.paperRoot},o.a.createElement("div",{className:e.countdownTime},o.a.createElement(u.a,{variant:"h3",className:e.countdownTimeVal},t),o.a.createElement(u.a,{variant:"h3",className:e.countdownTimeVal},"days")),o.a.createElement("div",{className:e.countdownTime},o.a.createElement(u.a,{variant:"h3",className:e.countdownTimeVal},n),o.a.createElement(u.a,{variant:"h3",className:e.countdownTimeVal},"hrs")),o.a.createElement("div",{className:e.countdownTime},o.a.createElement(u.a,{variant:"h3",className:e.countdownTimeVal},r),o.a.createElement(u.a,{variant:"h3",className:e.countdownTimeVal},"mins")),o.a.createElement("div",{className:e.countdownTime},o.a.createElement(u.a,{variant:"h3",className:e.countdownTimeVal},c),o.a.createElement(u.a,{variant:"h3",className:e.countdownTimeVal},"secs"))),o.a.createElement(u.a,{variant:"h4",className:e.subHeading},"Percentage completed ..."),o.a.createElement(h.a,{elevation:3,className:e.paperRootTwo},o.a.createElement(u.a,{variant:"h3",className:e.countdownTimeVal},l+" %")),o.a.createElement(f,{percentage:l}))}}]),t}(o.a.Component),w=Object(d.a)((function(){return{app:{display:"flex",alignItems:"center",flexDirection:"column",flexGrow:1},heading:{color:"#ffffff",fontWeight:"bold",marginBottom:"10vh",textDecoration:"underline"},subHeading:{color:"#ffffff",fontWeight:500,marginBottom:"1vh"},paperRoot:{backgroundColor:"#d3062b",padding:"5vh 7vh",display:"flex",flexDirection:"row",justifyContent:"space-around",width:"90%",marginBottom:"10vh"},paperRootTwo:{backgroundColor:"#d3062b",padding:"1vh 2vh",display:"flex",flexDirection:"row",justifyContent:"space-around",width:"15%",marginBottom:"10vh"},countdownTime:{display:"flex",flexDirection:"column",alignItems:"center"},countdownTimeVal:{color:"#ffffff",fontWeight:900}}}))(p);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.b11dde93.chunk.js.map