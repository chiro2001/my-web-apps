(this["webpackJsonpad-news"]=this["webpackJsonpad-news"]||[]).push([[0],{117:function(e,t,a){e.exports=a(146)},122:function(e,t,a){},123:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),i=(a(122),a(20)),s=a(14),c=a(36),d=a(34),h=(a(123),a(105)),m=a(171),u=a(63),p=function e(){Object(i.a)(this,e)};p.theme=Object(h.a)({palette:{primary:{main:m.a[500]},secondary:{main:u.a[500]}}});var g=a(13),f=a(29),v=a(18),y=a(179),E=a(180),w=a(148),b=a(64),T=a(72),k=a.n(T),O=a(181),_=a(147),S=a(183),C=a(191),D=a(182),x=a(184),N=a(49),H=a.n(N),I=a(41),j=a.n(I),L=a(45),M=a.n(L),Y=a(175),P=a(176),B=a(192),W=a(177),A=a(178),J=a(70),R=a.n(J),F=a(71),G=a.n(F),Q=a(74),U=a.n(Q),q=a(73),z=a.n(q),V=a(188),$=a(173),K=a(190),X=a(189),Z=a(185),ee=a(75),te=a.n(ee),ae=a(104),ne=a.n(ae),re=a(174),oe=a(30),le=a.n(oe),ie=(a(67),a(68),a(76)),se=a.n(ie),ce=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"getThreadList",value:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return se.a.get(e.API_SHOWF+"?id="+t+"&page="+a)}},{key:"getTheard",value:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return se.a.get(e.API_THREAD+"?id="+t+"&page="+a)}}]),e}();ce.NMB_HOST="https://adnmb.com/Api",ce.HOST=ce.NMB_HOST,ce.API_GET_FORUM_LIST=ce.NMB_HOST+"/getForumList/",ce.API_THREAD=ce.NMB_HOST+"/thread/",ce.API_SHOWF=ce.NMB_HOST+"/showf/",ce.API_SEARCH=ce.NMB_HOST+"/Search/",ce.CDN_IMG="https://nmbimg.fastmirror.org/image/",ce.CDN_THUMB="https://nmbimg.fastmirror.org/thumb/";var de=a(77),he=a.n(de),me=function(){he.a.locale("zh-cn",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74MM\u6708DD\u65e5",LLL:"YYYY\u5e74MM\u6708DD\u65e5Ah\u70b9mm\u5206",LLLL:"YYYY\u5e74MM\u6708DD\u65e5ddddAh\u70b9mm\u5206",l:"YYYY/M/D",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,t){return 12===e&&(e=0),"\u51cc\u6668"===t||"\u65e9\u4e0a"===t||"\u4e0a\u5348"===t?e:"\u4e0b\u5348"===t||"\u665a\u4e0a"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,a){var n=100*e+t;return n<600?"\u51cc\u6668":n<900?"\u65e9\u4e0a":n<1130?"\u4e0a\u5348":n<1230?"\u4e2d\u5348":n<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[]LTS",nextDay:"[\u660e\u5929]LTS",nextWeek:"[\u4e0b]ddddLTS",lastDay:"[\u6628\u5929]LTS",lastWeek:"[\u4e0a]ddddLTS",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u5468)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u5468";default:return e}},relativeTime:{future:"%s\u5185",past:"%s\u524d",s:"\u51e0\u79d2",ss:"%d\u79d2",m:"1\u5206\u949f",mm:"%d\u5206\u949f",h:"1\u5c0f\u65f6",hh:"%d\u5c0f\u65f6",d:"1\u5929",dd:"%d\u5929",M:"1\u4e2a\u6708",MM:"%d\u4e2a\u6708",y:"1\u5e74",yy:"%d\u5e74"},week:{dow:1,doy:4}})},ue=function(e){return he()(e).calendar()},pe=function(e){var t=e;if(/^(rgb|RGB)/.test(t)){for(var a="#",n=t.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),r=0;r<n.length;r++){var o=Number(n[r]).toString(16);"0"===o&&(o+=o),a+=o}return a}return String(t)};function ge(e){return r.a.createElement(K.a,Object.assign({elevation:6,variant:"filled"},e))}function fe(e){return r.a.createElement(B.a,Object.assign({button:!0,component:"a"},e))}function ve(e){var t=e.children,a=e.window,n=Object($.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return r.a.createElement(re.a,{in:n},r.a.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",style:{position:"fixed",bottom:"3%",right:"3%"}},t))}var ye=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),n=t.call(this,e),me(),n.toggleDrawer=n.toggleDrawer.bind(Object(v.a)(n)),n.addOldThreads=n.addOldThreads.bind(Object(v.a)(n)),n.saveNowThreads=n.saveNowThreads.bind(Object(v.a)(n)),n.fetchDone=n.fetchDone.bind(Object(v.a)(n)),n.addChosedOldThreads=n.addChosedOldThreads.bind(Object(v.a)(n)),n.state={drawerOpen:!1,isLoading:!0,isImageOpen:!1,threads:[],localNowThreads:{},imageLoaded:{},muiChoise:!1},n.checkedThreads={},n.styles={cardHead:{display:"flex",width:"100%",flexWrap:"nowrap",justifyContent:"space-between",color:j.a[600]},cardHeadCookie:{display:"inline-block"},cardHeadTime:{display:"inline-block",marginLeft:"5px"},cardContentImage:{marginRight:"5px"},cardImage:{maxWidth:"100px",maxHeight:"250px",display:"inline-block"},cardContent:{display:"flex"},cardText:{},menuButton:{marginRight:0},title:{flexGrow:1}},n.oldThreads=JSON.parse(localStorage.getItem("oldThreads")),void 0!==n.oldThreads&&null!==n.oldThreads||(n.oldThreads={},localStorage.setItem("oldThreads",JSON.stringify({}))),localStorage.getItem("nowThreads")||localStorage.setItem("nowThreads",JSON.stringify([])),n}return Object(s.a)(a,[{key:"toggleDrawer",value:function(){this.setState((function(e){return{drawerOpen:!e.drawerOpen}}))}},{key:"addOldThreads",value:function(){var e,t=this,a=Object(f.a)(this.state.threads);try{for(a.s();!(e=a.n()).done;){var n=e.value;this.oldThreads[""+n.id]=n}}catch(r){a.e(r)}finally{a.f()}localStorage.setItem("oldThreads",JSON.stringify(this.oldThreads)),this.setState({threads:[]},(function(){localStorage.setItem("nowThreads",JSON.stringify(t.state.threads))}))}},{key:"addChosedOldThreads",value:function(){var e=this,t=le.a.cloneDeep(this.state.threads);Object.keys(this.checkedThreads).forEach((function(a){if(!0===e.checkedThreads[a]){var n,r=Object(f.a)(t);try{for(r.s();!(n=r.n()).done;){var o=n.value;if(o.id===a)return t.remove(o),void(e.oldThreads[o.id]=o)}}catch(l){r.e(l)}finally{r.f()}}})),localStorage.setItem("oldThreads",JSON.stringify(this.oldThreads)),this.setState({threads:t},(function(){localStorage.setItem("nowThreads",JSON.stringify(e.state.threads))}))}},{key:"addToOldThreads",value:function(e){this.oldThreads[""+e.id]=e,localStorage.setItem("oldThreads",JSON.stringify(this.oldThreads))}},{key:"saveNowThreads",value:function(){localStorage.setItem("nowThreads",JSON.stringify(this.state.threads))}},{key:"deleteOldThreads",value:function(){localStorage.setItem("nowThreads","[]"),localStorage.setItem("oldThreads","{}")}},{key:"componentDidMount",value:function(){var e,t=JSON.parse(localStorage.getItem("nowThreads")),a={},n=Object(f.a)(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;a[r.id]=r.id}}catch(o){n.e(o)}finally{n.f()}this.setState({threads:t,localNowThreads:a}),this.fetchData(1)}},{key:"preParse",value:function(e){return e.now=Date.parse(e.now),e}},{key:"sortNowThreads",value:function(){var e=this;this.setState((function(e){return{threads:le.a.cloneDeep(e.threads).sort((function(e,t){return t.id<e.id?-1:1}))}}),(function(){e.saveNowThreads()}))}},{key:"fetchDone",value:function(){var e=this;this.setState((function(e){return{isLoading:!1,threads:le.a.cloneDeep(e.threads).sort((function(e,t){return t.now<e.now}))}}),(function(){e.saveNowThreads()}))}},{key:"fetchData",value:function(e){var t=this;ce.getThreadList(121,e).then((function(a){console.log("fetched page",e,"got",a.data.length,"thread(s)"),t.setState((function(e){var n,r=e.threads,o={},l=Object(f.a)(t.state.threads);try{for(l.s();!(n=l.n()).done;){var i=n.value;o[i.id]=!0}}catch(h){l.e(h)}finally{l.f()}var s,c=Object(f.a)(a.data);try{var d=function(){var e=s.value;if(void 0!==t.oldThreads[""+e.id])return"continue";if(o[""+e.id])for(var a=function(a){if(t.state.threads[a].id===e.id)return t.setState((function(t){var n=le.a.cloneDeep(t.threads);return n[a]=e,{threads:n}})),"break"},n=0;n<t.state.threads.length;n++){if("break"===a(n))break}else r.push(t.preParse(e))};for(c.s();!(s=c.n()).done;)d()}catch(h){c.e(h)}finally{c.f()}return{threads:r}})),t.sortNowThreads(),20===a.data.length?t.fetchData(e+1):t.fetchDone()}))}},{key:"createThreadCard",value:function(e){var t=this,a=le.a.cloneDeep(this.styles);"0"!==e.admin&&(a.cardHeadCookie.color=M.a[600]);var n=void 0!==e.img&&""!==e.img?r.a.createElement("img",Object(g.a)({alt:"",style:a.cardImage,src:ce.CDN_THUMB+e.img+e.ext,onClick:function(a){a.stopPropagation(),console.log("Image Clicked!"),t.props.history.push("./image-viewer/"+window.btoa(ce.CDN_IMG+e.img+e.ext))},className:"img"+window.btoa(e.img)},"style",a.cardContentImage)):void 0;void 0===this.checkedThreads[e.id]&&(this.checkedThreads[e.id]=!1);var o=this.state.muiChoise&&!e.maxWidth?r.a.createElement(X.a,{defaultChecked:!1,onClick:function(e){e.stopPropagation()},onChange:function(a){t.checkedThreads[e.id]=a.target.checked}}):void 0;return r.a.createElement(_.a,{elevation:3,style:{padding:"10px",width:e.maxWidth?"100%":void 0},onClick:function(){console.log("Thread Clicked!"),t.props.history.push("./thread/"+e.id)}},r.a.createElement("div",{style:a.cardHead},r.a.createElement("div",null,r.a.createElement("div",{style:a.cardHeadCookie},e.userid),r.a.createElement("div",{style:a.cardHeadTime},ue(e.now))),r.a.createElement("div",{className:"card-head-count"},e.replyCount),o),r.a.createElement("div",{style:a.cardContent},r.a.createElement("div",null,n),r.a.createElement("div",{style:a.cardText,dangerouslySetInnerHTML:{__html:e.content}})))}},{key:"render",value:function(){var e,t=this,a=[],n=this.state.isLoading?r.a.createElement(Y.a,{color:"secondary"}):r.a.createElement("div",null),o=Object(f.a)(this.state.threads);try{for(o.s();!(e=o.n()).done;){var l=e.value;a.push(r.a.createElement("div",{key:this.state.threads.indexOf(l)},this.createThreadCard(l),r.a.createElement("br",null)))}}catch(c){o.e(c)}finally{o.f()}var i=0===this.state.threads.length?r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(ge,{severity:"info"},"\u4f60\u6ca1\u6709\u672a\u770b\u8fc7\u7684\u4e32\uff0c\u4f60\u6ca1\u6709\u81f4\u3002")):r.a.createElement("div",null),s=[];return Object.keys(this.oldThreads).forEach((function(e){var a=le.a.cloneDeep(t.oldThreads[e]);a.maxWidth=!0,s.push(r.a.createElement("div",{key:a.now},t.createThreadCard(a),r.a.createElement("br",null)))})),s.reverse(),r.a.createElement("div",{className:"root-main"},r.a.createElement(V.a,{open:this.state.drawerOpen,onClose:this.toggleDrawer},r.a.createElement("div",{style:{width:"240px"}},r.a.createElement(P.a,{component:"nav","aria-label":"main mailbox folders"},r.a.createElement(fe,{button:!0,href:"https://adnmb.com/"},r.a.createElement(W.a,null,r.a.createElement(R.a,null)),r.a.createElement(A.a,{primary:"\u4e3b\u7ad9"})),r.a.createElement(fe,{button:!0,href:"https://gitee.com/chiro2001/ADNews"},r.a.createElement(W.a,null,r.a.createElement(G.a,null)),r.a.createElement(A.a,{primary:"\u5173\u4e8e"}))))),r.a.createElement(y.a,null,n,r.a.createElement(E.a,null,r.a.createElement(w.a,{edge:"start",style:this.styles.menuButton,color:"inherit","aria-label":"menu",onClick:this.toggleDrawer},r.a.createElement(k.a,null)),r.a.createElement(b.a,{variant:"h6",style:this.styles.title},"\u901f\u62a5\u89c2\u5bdf"),r.a.createElement(w.a,{edge:"start",color:"inherit",onClick:function(){t.deleteOldThreads(),window.location.reload()}},r.a.createElement(ne.a,null)),r.a.createElement(w.a,{edge:"start",color:"inherit",onClick:function(){t.setState((function(e){return{muiChoise:!e.muiChoise}}))}},r.a.createElement(z.a,null)),r.a.createElement(w.a,{edge:"start",color:"inherit",onClick:function(){window.location.reload()}},r.a.createElement(U.a,null)))),r.a.createElement("div",{style:{marginTop:"64px"},id:"back-to-top-anchor"}),r.a.createElement("div",{className:"container-main"},r.a.createElement(O.a,{className:"thread"},i,r.a.createElement("br",null),a,r.a.createElement(C.a,null,r.a.createElement(D.a,{expandIcon:r.a.createElement(H.a,null),"aria-controls":"panel1a-content","aria-label":"Expand",id:"panel1a-header"},r.a.createElement("div",null,r.a.createElement(b.a,{style:this.styles.heading,color:"primary"},"\u81f4\u95fb"),r.a.createElement(S.a,{"aria-label":"Acknowledge",color:"primary",onClick:function(e){e.stopPropagation(),t.addOldThreads()},onFocus:function(e){return e.stopPropagation()}},"\u628a\u4e0a\u9762\u6240\u6709\u4e32\u52a0\u5165\u81f4\u95fb"),r.a.createElement(S.a,{"aria-label":"Acknowledge",color:"primary",onClick:function(e){e.stopPropagation(),t.addChosedOldThreads()},onFocus:function(e){return e.stopPropagation()},style:{display:this.state.muiChoise?"block":"none"}},"\u5c06\u52fe\u9009\u4e32\u52a0\u5165\u81f4\u95fb"))),r.a.createElement(x.a,null,r.a.createElement(O.a,null,s))))),r.a.createElement(ve,this.props,r.a.createElement(Z.a,{color:"secondary",size:"small","aria-label":"scroll back to top"},r.a.createElement(te.a,null))))}}]),a}(r.a.Component),Ee=a(62),we=a.n(Ee),be=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),n=t.call(this,e),console.log(e),console.log(n.props),console.log(n.props.routeParams),n.url=window.atob(e.match.params._url),console.log("url",n.url),n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(y.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement(w.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){e.props.history.go(-1)}},r.a.createElement(we.a,null)))),r.a.createElement("br",null),r.a.createElement(O.a,null,r.a.createElement("div",{style:{height:"100%",margin:"auto"}},r.a.createElement("img",{id:"image",alt:"",src:this.url,style:{width:"100%"}}))))}}]),a}(r.a.Component),Te=(r.a.Component,a(50)),ke=a(10),Oe=a(187),_e=a(186),Se=a(16),Ce=a.n(Se);var De=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).fetchData=n.fetchData.bind(Object(v.a)(n)),n.id=e.match.params.id,void 0===n.id&&n.props.history.go(-1),n.styles={cardHead:{display:"flex",width:"100%",flexWrap:"nowrap",justifyContent:"space-between",color:j.a[600]},cardHeadCookie:{display:"inline-block"},cardHeadTime:{display:"inline-block",marginLeft:"5px"},cardContentImage:{marginRight:"5px"},cardImage:{maxWidth:"150px",maxHeight:"350px",display:"inline-block"},cardContent:{display:"flex"},cardText:{width:"100%"},menuButton:{marginRight:0},title:{flexGrow:1,lineHeight:1.5},subTitle:{color:j.a[300],lineHeight:1}},n.state={isLoading:!0,replys:[]},n.fetchData(1),n.replys={},n}return Object(s.a)(a,[{key:"parseQuote",value:function(e){for(;">"===e[0]&&e.length>0;)e=e.replace(">","");return e.startsWith("No.")?e=e.replace("No.",""):"0"}},{key:"createNativeQuote",value:function(e,t){t||(t={});var a={borderLeft:"5px solid "+pe("rgb(99,190,183)"),background:pe("rgb(224,242,242)"),margin:"0px 0px 0px 15px",color:"black"},n=r.a.createElement("blockquote",{style:a},this.createReply(e,{noShowDivider:!0,noShowId:!0,showJump:t.showJump})),o=Ce()("<div></div>");return l.a.render(n,o[0]),Ce()(o).html()}},{key:"fetchData",value:function(e){var t=this;ce.getTheard(this.id,e).then((function(e){var a=e.data;if(t.po=a,!a.replys)return console.log("data.replys undefined",a),void t.setState({isLoading:!1});console.log("getTheard",t.id,"fertched",a.replys.length,"reply(s)"),t.setState((function(e){var n,r=le.a.cloneDeep(e.replys),o=Object(f.a)(a.replys);try{for(o.s();!(n=o.n()).done;){var l=n.value;r.push(l),t.replys[l.id]=l}}catch(i){o.e(i)}finally{o.f()}return{replys:r}}),(function(){Ce()("font").click((function(e){if("FONT"===e.target.nodeName){var a=Ce()(e.target).text(),n=""+t.parseQuote(a);if(t.replys[n]){var r=t.replys[n];Ce()(e.target).html(Ce()(e.target).html()+t.createNativeQuote(r))}else Ce()(e.target).off("click"),ce.getTheard(n,1).then((function(a){a.data.content?Ce()(e.target).html(Ce()(e.target).html()+t.createNativeQuote(a.data,{showJump:!0})):Ce()(e.target).html('<span style="color: red">(\u8be5\u4e3b\u9898\u4e0d\u5b58\u5728)</span>')}))}}))})),a.replys.length<=20&&t.setState({isLoading:!1}),setTimeout((function(){Ce()("font").click()}),500)}))}},{key:"createReply",value:function(e,t){var a=this;if(void 0===t&&(t={noShowId:!1,noShowDivider:!1,showJump:!1}),void 0!==e&&9999999!=e.id){var n=le.a.cloneDeep(this.styles);"0"!==e.admin&&(n.cardHeadCookie.color=M.a[600],n.cardHeadCookie.fontWeight=600),e.userid==this.po.userid&&(n.cardHeadCookie.color="black",n.cardHeadCookie.fontWeight=600);var o=void 0!==e.img&&""!==e.img?r.a.createElement("img",Object(g.a)({alt:"",style:n.cardImage,src:ce.CDN_THUMB+e.img+e.ext,onClick:function(t){t.stopPropagation(),a.props.history.push("../image-viewer/"+window.btoa(ce.CDN_IMG+e.img+e.ext))},className:"img"+window.btoa(e.img)},"style",n.cardContentImage)):void 0,l=void 0;if(e.content){var i=e.content.replace(/<\/font><br \/>/g,"</font>");l=Ce()("<div>"+i+"</div>"),Ce()("font",l).length}else console.log("content undefined",e),l=Ce()("<div>"+e.content+"</div>");var s=r.a.createElement("div",{style:n.cardText,dangerouslySetInnerHTML:{__html:Ce()(l).html()}}),c=t.noShowId?void 0:"No."+e.id,d=t.noShowDivider?void 0:r.a.createElement(_e.a,{light:!0});return r.a.createElement("div",null,r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("div",{style:n.cardHead},r.a.createElement("div",null,r.a.createElement("div",{style:n.cardHeadCookie},e.userid),r.a.createElement("div",{style:n.cardHeadTime},ue(e.now))),r.a.createElement("div",null,c,void 0)),r.a.createElement("div",{style:n.cardContent},r.a.createElement("div",null,o),s)),d)}}},{key:"render",value:function(){var e,t=this,a=this.state.isLoading?r.a.createElement(Y.a,{color:"secondary"}):r.a.createElement("div",null),n=[this.createReply(this.po)],o=Object(f.a)(this.state.replys);try{for(o.s();!(e=o.n()).done;){var l=e.value;n.push(r.a.createElement("div",{key:l.id},this.createReply(l)))}}catch(i){o.e(i)}finally{o.f()}return r.a.createElement("div",{className:"root-thread"},r.a.createElement(y.a,null,a,r.a.createElement(E.a,{id:"back-to-top-anchor"},r.a.createElement(w.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){t.props.history.go(-1)}},r.a.createElement(we.a,null)),r.a.createElement("div",null,r.a.createElement(b.a,{variant:"h6",style:this.styles.title},"\u901f\u62a5\u89c2\u5bdf"),r.a.createElement(b.a,{variant:"caption",display:"block",gutterBottom:!0,style:this.styles.subTitle},">>No."+this.id)))),r.a.createElement("div",{style:{marginTop:"64px"}}),r.a.createElement("div",{className:"container-main"},r.a.createElement("div",null,n)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Array.prototype.remove=function(e){var t=this.indexOf(e);t>-1&&this.splice(t,1)};l.a.render(r.a.createElement(Oe.a,{theme:p.theme},r.a.createElement(Te.a,null,r.a.createElement(ke.a,{path:"/android_asset/www/adnews/thread/:id",component:De}),r.a.createElement(ke.a,{path:"/android_asset/www/adnews/image-viewer/:_url",component:be}),r.a.createElement(ke.a,{path:"/android_asset/www/adnews/index.html",component:ye}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[117,1,2]]]);
//# sourceMappingURL=main.9881309e.chunk.js.map