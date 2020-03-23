(this["webpackJsonpwikidata-live-changes"]=this["webpackJsonpwikidata-live-changes"]||[]).push([[0],{290:function(t,e,a){t.exports=a(440)},295:function(t,e,a){},303:function(t,e,a){},439:function(t,e,a){},440:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),i=a(113),s=a.n(i),c=(a(295),a(53)),o=a(55),l=a(10),u=a(11),h=a(15),p=a(14),m=a(16),d=function(t){function e(){return Object(l.a)(this,e),Object(h.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 text-left"},r.a.createElement("h1",{className:"text-left  display-3"},r.a.createElement("b",null,this.props.title)),r.a.createElement("h4",null,this.props.subtitle))}}]),e}(r.a.Component),f=(a(68),a(471)),b=a(472),v=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).state={history:a.props.history},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=window.location.href;return r.a.createElement(f.a,null,r.a.createElement(f.a.Collapse,null,r.a.createElement(b.a,null,r.a.createElement(b.a.Link,{as:c.b,to:"/",className:t.endsWith("/")?"nav-link--active":"nav-link"},"Home"),r.a.createElement(b.a.Link,{as:c.b,to:"/page",className:t.endsWith("/page")?"nav-link--active":"nav-link"},"Page"),r.a.createElement(b.a.Link,{as:c.b,to:"/feed",className:t.endsWith("/feed")?"nav-link--active":"nav-link"},"Feed"))))}}]),e}(n.Component),g=function(t){function e(){return Object(l.a)(this,e),Object(h.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-2 inline"},r.a.createElement("h1",null,this.props.btnImage),r.a.createElement("p",{className:"font-weight-bold"},this.props.btnTitle),r.a.createElement(c.b,{to:this.props.btnLink},r.a.createElement("button",{type:"button",className:"align-bottom btn btn-outline-primary"},this.props.btnText)))}}]),e}(n.Component),y=a(31),x=a.n(y),k=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={text:"something",errorCode:""},a.updateStats=function(){x.a.ajax({url:"https://cors-anywhere.herokuapp.com/https://www.wikidata.org/wiki/Special:Statistics",type:"GET",success:function(t){x()("#div1").html(x()(x()(t).find(".mw-statistics-articles")).find(".mw-statistics-numbers")),x()("#div2").html(x()(x()(t).find(".mw-statistics-edits")).find(".mw-statistics-numbers")),x()("#div3").html(x()(x()(t).find(".mw-statistics-users")).find(".mw-statistics-numbers")),x()("#div4").html(x()(x()(t).find(".mw-statistics-users-active")).find(".mw-statistics-numbers"))},error:a.setState({errorCode:"Could not fetch data"})})},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.updateStats(),this.intervalID=setInterval((function(){return t.updateStats()}),1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 text-left"},r.a.createElement("p",{id:"div1"},this.state.errorCode),"Items"),r.a.createElement("div",{className:"col-md-3 text-left"},r.a.createElement("p",{id:"div2"},this.state.errorCode),"Edits"),r.a.createElement("div",{className:"col-md-3 text-left"},r.a.createElement("p",{id:"div3"},this.state.errorCode),"Users"),r.a.createElement("div",{className:"col-md-3 text-left"},r.a.createElement("p",{id:"div4"},this.state.errorCode),"Active Users"))}}]),e}(n.Component),w=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).state={history:a.props.history},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(v,{history:this.state.history}),r.a.createElement("div",{className:"row margin-right: -15px margin-left: -15px"},r.a.createElement(d,{title:"Wikidata Live",subtitle:"A web app to visualise recent changes to Wikidata in quasi real time."}),r.a.createElement(g,{btnImage:"W",btnTitle:"Wikidata Feed",btnText:"Wikidata",btnLink:"/feed"}),r.a.createElement(g,{btnImage:"M",btnTitle:"Graph Data",btnText:"Graphs",btnLink:"/page"}),r.a.createElement(g,{btnImage:"\ud83d\udc64",btnTitle:"User Data",btnText:"Users",btnLink:"/"})),r.a.createElement(k,null))}}]),e}(n.Component),E=a(30),O=Object(E.a)(),j=a(19),C=a(9),S=a.n(C),N=function(){function t(e){var a=this;Object(l.a)(this,t),this.eventSource=new EventSource("https://stream.wikimedia.org/v2/stream/recentchange"),this.changes=[],this.maxItems=e,this.eventSource.addEventListener("message",(function(t){return a.handleMessage(t)}))}return Object(u.a)(t,[{key:"handleMessage",value:function(t){var e;return S.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e=JSON.parse(t.data),this.changes.unshift(e),this.changes.length>this.maxItems&&this.changes.pop();case 3:case"end":return a.stop()}}),null,this)}}]),t}();a(303);var D=function(t){return Math.round(Math.abs((new Date).getTime()/1e3-t))},L=function(){var t=Object(n.useState)(new N(30)),e=Object(j.a)(t,1)[0],a=Object(n.useState)({items:e.changes}),i=Object(j.a)(a,2),s=i[0],c=i[1];return Object(n.useEffect)((function(){setInterval((function(){return c({items:e.changes})}),1e3)}),[e.changes]),r.a.createElement("div",null,r.a.createElement("h3",{class:"text-blue text-left"},"Most Recent Activity"),r.a.createElement("ul",{class:"list-group"},s.items.map((function(t,e){return r.a.createElement("li",{class:"list-group-item text-left",key:e},"User ".concat(t.user," did action ").concat(t.type," ").concat(t.title," ").concat(D(t.timestamp)," seconds ago"))}))))},T=a(122),A=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).onClick=function(){a.state.history.push(a.state.pageLink)},a.state={history:a.props.history,title:a.props.title,pageLink:a.props.pageLink,graph:a.props.graph},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(T.a,{onClick:this.onClick,tag:"a",className:"graph-card"},r.a.createElement(T.a.Body,null,r.a.createElement(T.a.Title,{className:"card-title"},this.state.title),this.state.graph))}}]),e}(n.Component),I=a(175),G=a(241),M=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(h.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(i)))).render=function(){return r.a.createElement("div",{className:"Graph-Container-Card"},r.a.createElement(G.a,{data:P,margin:{top:5,right:55,bottom:25,left:30},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1},axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"transportation",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"count",legendOffset:-40,legendPosition:"middle"},colors:{scheme:"accent"},pointSize:5,pointColor:{theme:"background"},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabel:"y",pointLabelYOffset:-12,useMesh:!0,legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:100,translateY:0,itemsSpacing:0,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)",effects:[{on:"hover",style:{itemBackground:"rgba(0, 0, 0, .03)",itemOpacity:1}}]}]}))},a}return Object(m.a)(e,t),e}(n.Component),P=[{id:"japan",color:"hsl(187, 70%, 50%)",data:[{x:"plane",y:200},{x:"helicopter",y:90},{x:"boat",y:112},{x:"train",y:2},{x:"subway",y:271},{x:"bus",y:300},{x:"car",y:142},{x:"moto",y:197},{x:"bicycle",y:107},{x:"horse",y:140},{x:"skateboard",y:279},{x:"others",y:229}]}],U=M,W=a(114),B=a(251),R=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).tooltip=function(t,e){return r.a.createElement("div",{className:"iframe-container"},r.a.createElement("iframe",{src:e+t.indexValue,className:"iframe",title:"tooltip-option-2"}))},a.loadData=function(){var t,e,n;return S.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=a.props.settings.getData.bind(Object(W.a)(a)),r.next=3,S.a.awrap(t());case 3:e=r.sent,n=e.slice(0,a.state.fullGraph?30:10),a.setState({loaded:!0,data:n});case 6:case"end":return r.stop()}}))},a.state={loaded:!1,data:null,fullGraph:a.props.fullGraph},a.loadData(),a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.refreshInterval=setInterval((function(){var e;return S.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=t.props.settings.refreshMethod.bind(t),a.next=3,S.a.awrap(e());case 3:case"end":return a.stop()}}))}),this.props.settings.refreshTime)}},{key:"render",value:function(){var t={},e=null,a="",n=null,i=!1,s=null;return this.state.fullGraph?(t={top:5,right:30,bottom:80,left:80},e=!0,a="full-graph-container",this.props.settings.onClick&&(n=this.props.settings.onClick,i=!0),this.props.settings.tooltip&&(s=this.props.settings.tooltip.bind(this))):(t={top:0,right:0,bottom:0,left:0},e=!1,a="Graph-Container-Card"),r.a.createElement("div",null,this.state.loaded?r.a.createElement("div",{className:a},r.a.createElement(B.a,{data:this.state.data,keys:this.props.settings.keys,indexBy:this.props.settings.index,margin:t,padding:.3,colors:{scheme:this.props.settings.colors},colorBy:"index",borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:30,legend:this.props.settings.xAxis,legendPosition:"start",legendOffset:40},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:this.props.settings.yAxis,legendPosition:"middle",legendOffset:-60},enableLabel:e,onClick:i?n:function(){},animate:e,isInteractive:e,motionStiffness:90,motionDamping:15,tooltip:s})):"Loading...")}}]),e}(n.Component),q=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).state={history:a.props.history,graph:a.props.graph,title:a.props.name},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(v,{history:this.state.history}),r.a.createElement(d,{title:"",subtitle:this.props.name}),this.state.graph)}}]),e}(n.Component),z=function(){var t,e;return S.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(t,e){return e.editcount-t.editcount},e=V({action:"query",format:"json",list:"allusers",auprop:"editcount|groups",aulimit:"max",auwitheditsonly:"1",auactiveusers:"1"},5).then((function(t){return t.query.allusers})).then((function(e){return e.sort(t)})),a.abrupt("return",e);case 4:case"end":return a.stop()}}))},H=function(){var t,e;return S.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(t,e){return e.recentactions-t.recentactions},e=V({action:"query",format:"json",list:"allusers",auprop:"editcount|groups",aulimit:"max",auwitheditsonly:"1",auactiveusers:"1"},5).then((function(t){return t.query.allusers})).then((function(e){return e.sort(t)})),a.abrupt("return",e);case 4:case"end":return a.stop()}}))},J=function(t){var e,a,n,r,i;return S.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e=Y(t),a=Object(j.a)(e,2),n=a[0],r=a[1],i=n.then((function(t){return X(t)})).then((function(t){var e=t.map((function(t){return t.id}));return F(e).then((function(e){t.forEach((function(t){t.title=e[t.id]}))})),t})),s.next=4,S.a.awrap(i);case 4:return s.t0=s.sent,s.t1=r,s.abrupt("return",[s.t0,s.t1]);case 7:case"end":return s.stop()}}))},F=function(t){var e,a,n;return S.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e={},a=null,a=t instanceof Array?$(t,50):[[t]],n=a.map((function(t){var a,n;return S.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=t.join("|"),n={action:"wbgetentities",format:"json",ids:a,props:"labels",languages:"en"},r.abrupt("return",V(n,5).then((function(t){return t})).then((function(t){return t.entities})).then((function(a){t.forEach((function(t){var n=a[t].labels;n&&n.en&&(e[t]=n.en.value)}))})).catch((function(t){return null})));case 3:case"end":return r.stop()}}))})),r.next=6,S.a.awrap(Promise.all(n));case 6:return r.abrupt("return",e);case 7:case"end":return r.stop()}}))},V=function t(e,a){var n,r;return S.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,n=new URLSearchParams(e).toString(),r="https://www.wikidata.org/w/api.php?"+n+"&origin=*",i.next=5,S.a.awrap(fetch(r).then((function(t){return t.json()})));case 5:return i.abrupt("return",i.sent);case 8:if(i.prev=8,i.t0=i.catch(0),1!==a){i.next=12;break}throw i.t0;case 12:return i.next=14,S.a.awrap(t(e,a-1));case 14:return i.abrupt("return",i.sent);case 15:case"end":return i.stop()}}),null,null,[[0,8]])},Y=function(t){var e=new Date,a=e.toISOString();return e-=1e3,e=new Date(e).toISOString(),[V({action:"query",format:"json",list:"recentchanges",rcprop:"title|ids|timestamp|user",rclimit:"max",rcstart:e,rcend:t},5).then((function(t){return t.query.recentchanges})),a]},X=function(t){var e={};t.forEach((function(t){var a=e[t.title]||0;e[t.title]=a+1}));var a=Object.entries(e).map((function(t){var e=Object(j.a)(t,2);return{id:e[0],actions:e[1]}}));return a.sort((function(t,e){return e.actions-t.actions})),a},$=function(t,e){for(var a=[];t.length>0;)a.push(t.splice(0,e));return a},_={getData:function(){var t;return S.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.awrap(H());case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}))},refreshTime:2e3,refreshMethod:function(){this.loadData()},keys:["recentactions"],index:"name",xAxis:"users",yAxis:"recent actions",colors:"set3",tooltip:function(t){return this.tooltip(t,"https://www.wikidata.org/wiki/User:")}},K=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).state={history:a.props.history},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(q,{graph:r.a.createElement(R,{fullGraph:!0,settings:_}),name:"Most Active Users"})}}]),e}(n.Component),Q={getData:function(){var t,e,a,n;return S.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.awrap(J((new Date).toISOString()));case 2:return t=r.sent,e=Object(j.a)(t,2),a=e[0],n=e[1],a=a.slice(0,50),this.setState({fullData:a,prevTimestamp:n}),r.abrupt("return",a);case 9:case"end":return r.stop()}}),null,this)},refreshTime:2e3,refreshMethod:function(){var t,e,a,n,r,i,s;return S.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,S.a.awrap(J(this.state.prevTimestamp));case 2:t=c.sent,e=Object(j.a)(t,2),a=e[0],n=e[1],this.setState({prevTimestamp:n}),a=a.slice(0,50),this.state.fullData?(r=this.state.fullData,a.forEach((function(t){for(var e=-1,a=0;a<r.length;a+=1)r[a].id===t.id&&(e=a);-1!==e?r[e].actions+=t.actions:r.push(t)})),r.sort((function(t,e){return e.actions-t.actions})),r.slice(0,50),i=r.slice(0,this.state.fullGraph?30:10),this.setState({fullData:r,data:i})):(s=a.slice(0,this.state.fullGraph?30:10),this.setState({data:s}));case 9:case"end":return c.stop()}}),null,this)},keys:["actions"],index:"id",xAxis:"pages",yAxis:"actions",colors:"pastel1",onClick:function(t){window.open("https://www.wikidata.org/wiki/"+t.indexValue,"_blank")},tooltip:function(t){return this.tooltip(t,"https://www.wikidata.org/wiki/")}},Z=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).state={history:a.props.history},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(q,{graph:r.a.createElement(R,{fullGraph:!0,settings:Q}),name:"Most Active Pages"})}}]),e}(n.Component),tt={getData:function(){var t;return S.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.awrap(z());case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}))},refreshTime:2e3,refreshMethod:function(){this.loadData()},keys:["editcount"],index:"name",xAxis:"users",yAxis:"edit count",colors:"paired",tooltip:function(t){return this.tooltip(t,"https://www.wikidata.org/wiki/User:")}},et=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).state={history:a.props.history},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(q,{graph:r.a.createElement(R,{fullGraph:!0,settings:tt}),name:"Users By Most Edits"})}}]),e}(n.Component),at=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).state={history:a.props.history},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(v,null),r.a.createElement("div",{class:"row justify-content-left text-dark"},r.a.createElement("div",{class:"col-xs-12 col-sm-12 col-md-12 col-lg-4"},r.a.createElement("div",{class:"feedContainer"},r.a.createElement(L,null))),r.a.createElement("div",{class:"col-xs-12 col-sm-12 col-md-12 col-lg-8"},r.a.createElement("div",{className:"deck-container"},r.a.createElement(I.a,{className:"deck"},r.a.createElement(A,{title:"Users by most edits",pageLink:"users-by-most-edits",history:this.state.history,graph:r.a.createElement(R,{fullGraph:!1,settings:tt})}),r.a.createElement(A,{title:"Most Active Users",pageLink:"most-active-users",history:this.state.history,graph:r.a.createElement(R,{fullGraph:!1,settings:_})})),r.a.createElement(I.a,{className:"deck"},r.a.createElement(A,{title:"Most Active Pages",pageLink:"most-active-pages",history:this.state.history,graph:r.a.createElement(R,{fullGraph:!1,settings:Q})}),r.a.createElement(A,{title:"Sample Graph: link to home",pageLink:"",history:this.state.history,graph:r.a.createElement(U,null)}))))))}}]),e}(n.Component);a(439);var nt=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{history:O},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:w}),r.a.createElement(o.a,{exact:!0,path:"/page",component:at}),r.a.createElement(o.a,{exact:!0,path:"/users-by-most-edits",component:et}),r.a.createElement(o.a,{exact:!0,path:"/most-active-users",component:K}),r.a.createElement(o.a,{exact:!0,path:"/most-active-pages",component:Z}),r.a.createElement(o.a,{exact:!0,path:"/feed",component:L}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(nt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[290,1,2]]]);
//# sourceMappingURL=main.b10320e6.chunk.js.map