(this.webpackJsonpexuo=this.webpackJsonpexuo||[]).push([[0],{147:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(17),o=n(0),r=n.n(o),c=n(61),i=n(307),l=n(303),d=n(305),u=n(29),s=n(57),p=n(22),m=n(19),f=function(e){var t=e.id,n=r.a.useState(null),o=Object(a.a)(n,2),f=o[0],g=o[1],b=r.a.useState(!1),v=Object(a.a)(b,2),h=v[0],E=v[1],y=Object(u.c)();return Object(m.l)((function(e){return r.a.createElement(s.a,null,r.a.createElement(c.a,{align:"center"},"Someone wants to share content with you.",r.a.createElement("br",null),"Do not accept if you do not trust them."),r.a.createElement(i.a,{mt:1,textAlign:"center"},f?r.a.createElement(c.a,{color:"error"},f):r.a.createElement(l.a,{disabled:h,onClick:function(){E(!0),e.seekPeerConnection(t).then((function(e){y(Object(p.b)("/node/".concat(e.id)))})).catch((function(e){g(e)}))},color:"primary"},h?r.a.createElement(d.a,{size:24}):"Accept")))}))}},148:function(e,t){},163:function(e,t,n){"use strict";var a=n(147);n.d(t,"PeerConnector",(function(){return a.a}));n(148)},188:function(e,t,n){e.exports=n(299)},19:function(e,t,n){"use strict";n.d(t,"l",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"k",(function(){return d})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return g})),n.d(t,"d",(function(){return ie})),n.d(t,"b",(function(){return ce})),n.d(t,"c",(function(){return Ne})),n.d(t,"e",(function(){return Ce})),n.d(t,"f",(function(){return tt})),n.d(t,"g",(function(){return rt})),n.d(t,"h",(function(){return ct}));var a=n(0),o=n.n(a),r=n(89),c=function(e){return Object(r.c)((function(t){return e(t.graph)}))},i=o.a.createContext(null),l=i.Provider,d=function(){return o.a.useContext(i)},u=n(46),s=n(182),p=n(5),m=n(346),f=function(e){return p.i.model("EdgeMap",{edgeMap:p.i.map(p.i.array(p.i.safeReference(p.i.late(e),{acceptsUndefined:!1})))}).actions((function(e){return{hasEdge:function(t,n){var a,o;return n?Boolean(null===(a=e.edgeMap.get(t))||void 0===a?void 0:a.includes(n)):Boolean(null===(o=e.edgeMap.get(t))||void 0===o?void 0:o.length)}}})).actions((function(e){return{addEdge:function(t,n){var a;e.edgeMap.has(t)||e.edgeMap.set(t,[]),null===(a=e.edgeMap.get(t))||void 0===a||a.push(n)},removeEdge:function(t,n){var a;null===(a=e.edgeMap.get(t))||void 0===a||a.remove(n)}}})).views((function(e){return{getEdgeTag:function(t){return e.edgeMap.get(t)}}}))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return p.i.compose.apply(p.i,Object(s.a)([p.i.model({id:p.i.identifier})].concat(e))).named("Node")},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p.i.model("Graph",Object.fromEntries(Object.keys(e).map((function(t){var n=e[t];if(Object(p.f)(n)&&Object(p.e)(n.properties.id))return[t,p.i.map(e[t])];throw Error("Model '".concat(t,"' requires 'id' identifier"))})))).actions((function(n){return{createNode:function(){var a,o,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Node",c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e[r])throw Error("No model named '".concat(r,"'"));var i=e[r].create(Object(u.a)({id:null!==(a=null===(o=t.getId)||void 0===o?void 0:o.call(t))&&void 0!==a?a:Object(m.a)()},c));return n[r].put(i),i}}}))},v=g(f((function(){return v}))),h=(b({Node:v}),n(17)),E=n(34),y=n(81),j=p.i.model("Note",{label:p.i.string,summary:p.i.maybe(p.i.string),rawContentState:p.i.maybe(p.i.string)}).actions((function(e){return{setLabel:function(t){e.label=t},setSummary:function(t){e.summary=t},setRawContentState:function(t){e.rawContentState=JSON.stringify(t)}}})),N=g(j),k=n(329),O=n(303),C=n(330),w=n(349),x=n(18),S=n(350),M=n(331),B=n(332),T=n(157),R=n.n(T),A=n(156),I=n.n(A),L=n(158),F=n.n(L),P=n(159),D=n.n(P),z=n(160),W=n.n(z),K=n(161),U=n.n(K),G=n(151),q=n.n(G),J=n(155),V=n.n(J),X=n(30),H=(n(291),[{label:"UL",style:"unordered-list-item",icon:o.a.createElement(q.a,null)},{label:"OL",style:"ordered-list-item",icon:o.a.createElement(V.a,null)},{label:"Blockquote",style:"blockquote",icon:o.a.createElement(I.a,null)},{label:"Code Block",style:"code-block",icon:o.a.createElement(R.a,null)}]),Y=[{label:"Bold",style:"BOLD",icon:o.a.createElement(F.a,null)},{label:"Italic",style:"ITALIC",icon:o.a.createElement(D.a,null)},{label:"Underline",style:"UNDERLINE",icon:o.a.createElement(W.a,null)},{label:"Monospace",style:"CODE",icon:o.a.createElement(U.a,null)}],$=function(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";default:return""}},Q=function(e){var t=e.onToggle,n=e.style,a=e.active,r=e.label,c=e.icon,i=function(e){e.preventDefault(),t(n)},l="RichEditor-styleButton";return a&&(l+=" RichEditor-activeButton"),c?o.a.createElement(k.a,{size:"small",onMouseDown:i,className:l},c):o.a.createElement(O.a,{size:"small",startIcon:c||void 0,onMouseDown:i,className:l},c?"":r)},Z=function(e){var t=e.editorState,n=e.onToggle,a=t.getSelection(),r=t.getCurrentContent().getBlockForKey(a.getStartKey()).getType();return o.a.createElement("div",null,H.map((function(e){return o.a.createElement(Q,{key:e.label,active:e.style===r,label:e.label,icon:e.icon,onToggle:n,style:e.style})})))},_=function(e){var t=e.editorState,n=e.onToggle,a=t.getCurrentInlineStyle();return o.a.createElement("div",null,Y.map((function(e){return o.a.createElement(Q,{key:e.label,active:a.has(e.style),label:e.label,icon:e.icon,onToggle:n,style:e.style})})))},ee=Object(C.a)((function(e){return Object(w.a)({root:{width:"100%"},backdrop:{cursor:"default",backdropFilter:"blur(3px) saturate(0%)",backgroundColor:Object(x.c)(e.palette.background.default,.8)},wrapper:{outline:"none","& .DraftEditor-editorContainer":{maxHeight:"70vh",overflowY:"auto",border:0,padding:e.spacing(1,2,1,2),"& [data-contents=true] > [data-block=true]":Object(u.a)(Object(u.a)({},e.typography.body2),{},{"&:first-child":Object(u.a)({},e.typography.body1)})}},toolbar:{justifyContent:"center",background:"\n        linear-gradient(\n          to bottom,\n          ".concat(e.palette.background.default," 30%,\n          ").concat(Object(x.c)(e.palette.background.default,0),"\n        )\n      "),"&>div:first-child":{marginRight:e.spacing(4)}}})})),te=o.a.forwardRef((function(e,t){var n=e.note,a=e.text,r=e.placeholder,c=e.autoFocus,i=e.showBackdrop,l=e.showControls,d=e.showRichTextControls,u=e.className,s=e.inputClassName,p=e.onValue,m=ee(),f=o.a.useRef(null),g=o.a.useRef(null),b=o.a.useState(!1),v=Object(h.a)(b,2),E=v[0],y=v[1],j=null===n||void 0===n?void 0:n.rawContentState,N=o.a.useMemo((function(){return j&&Object(X.convertFromRaw)(JSON.parse(j))}),[j]),k=o.a.useState((function(){var e;return X.EditorState.createWithContent(N||X.ContentState.createFromText(null!==(e=null!==a&&void 0!==a?a:null===n||void 0===n?void 0:n.label)&&void 0!==e?e:""))})),O=Object(h.a)(k,2),C=O[0],w=O[1];o.a.useEffect((function(){!E&&c&&g.current&&(y(!0),w(X.EditorState.moveFocusToEnd(C)))}),[c,E,w,C]);var x=function(e){var t=C.getCurrentContent(),a=Object(X.convertToRaw)(t);n&&(n.setRawContentState(a),n.setLabel(t.getFirstBlock().getText())),p&&p(n,e)},T=C.getCurrentContent().getBlocksAsArray().length;return o.a.createElement("div",{ref:t,className:[m.root,u].join(" ")},T>1&&i&&o.a.createElement(S.a,{open:Boolean(i),className:m.backdrop}),o.a.createElement(M.a,{onClickAway:function(e){x()},mouseEvent:"onMouseDown",touchEvent:"onTouchStart"},o.a.createElement("div",{ref:f},o.a.createElement("div",{tabIndex:-1,className:[m.wrapper,s].join(" ")},o.a.createElement(X.Editor,{ref:g,blockStyleFn:$,editorState:C,handleKeyCommand:function(e,t){var n=X.RichUtils.handleKeyCommand(t,e);return n?(w(n),"handled"):"not-handled"},keyBindingFn:function(e){return 13===e.keyCode&&e.shiftKey?(x(),null):Object(X.getDefaultKeyBinding)(e)},onChange:w,placeholder:r,spellCheck:!0})),T>1&&l&&o.a.createElement(B.a,{variant:"dense",className:m.toolbar},d&&o.a.createElement(o.a.Fragment,null,o.a.createElement(Z,{editorState:C,onToggle:function(e){w(X.RichUtils.toggleBlockType(C,e))}}),o.a.createElement(_,{editorState:C,onToggle:function(e){w(X.RichUtils.toggleInlineStyle(C,e))}}))))))}));te.defaultProps={showBackdrop:!0,showControls:!0,showRichTextControls:!0};var ne=n(23),ae=g([f((function(){return p.i.union(p.i.late((function(){return ae})),ce,N)}))]).props({label:p.i.optional(p.i.string,"")}).actions((function(e){return{setLabel:function(t){e.label=t},graphRoot:function(){return Object(p.c)(e,ie)},getConfig:function(){var t,n;if(null===(t=e.edgeMap.get("config"))||void 0===t?void 0:t.length)return null===(n=e.edgeMap.get("config"))||void 0===n?void 0:n[0];var a=e.graphRoot().createNode("Config",{});return e.addEdge("config",a),a},toggleExpand:function(e,t){},isExpanded:function(e,t){return!1}}})).views((function(e){return{get childCount(){var t,n;return null!==(t=null===(n=e.edgeMap.get("child"))||void 0===n?void 0:n.length)&&void 0!==t?t:0},get expandedNodes(){return e.getConfig().get("expandedNodes")}}})),oe=p.i.union(p.i.null,p.i.boolean,p.i.string,p.i.number,p.i.array(p.i.late((function(){return oe}))),p.i.map(p.i.late((function(){return oe})))),re=p.i.model("Config",{name:p.i.maybe(p.i.string),items:p.i.map(oe)}).actions((function(e){return{set:function(t,n){return e.items.set(t,n)}}})).views((function(e){return{get:function(t){return e.items.get(t)}}})),ce=g(re),ie=b({Node:ae,Config:ce,Note:N}).actions((function(e){return{setActiveMode:function(t){var n=e.activeModes;(null===n||void 0===n?void 0:n.includes(t))||(n.push(t),"select"===t&&n.remove("edit"),"edit"===t&&(n.remove("select"),e.clearSelectedNodes()))},unsetActiveMode:function(t){var n=e.activeModes;(null===n||void 0===n?void 0:n.includes(t))&&n.remove(t)},toggleActiveMode:function(t){var n=e.activeModes;n&&(n.includes(t)?(n.remove(t),"select"===t&&e.clearSelectedNodes()):(n.push(t),"select"===t&&n.remove("edit"),"edit"===t&&(n.remove("select"),e.clearSelectedNodes())))}}})).actions((function(e){return{toggleSelectNode:function(t,n){var a=e.Config.get("system").get("selectedNodes");if(a){var o=a.get(n.id);o?o.includes(t.id)?(o.remove(t.id),0===o.length&&a.delete(n.id)):o.push(t.id):a.set(n.id,[t.id])}},clearSelectedNodes:function(){var t;null===(t=e.Config.get("system").get("selectedNodes"))||void 0===t||t.clear(),0===e.selectedNodes.size&&e.unsetActiveMode("select")},deleteSelectedNodes:function(){e.selectedNodes.forEach((function(t){return t.forEach((function(t){return e.Node.delete(t)}))})),e.clearSelectedNodes()},moveSelectedNodes:function(t){var n,a=Object(E.a)(e.selectedNodes);try{for(a.s();!(n=a.n()).done;){var o,r=Object(h.a)(n.value,2),c=r[0],i=r[1],l=e.Node.get(c),d=Object(E.a)(i);try{for(d.s();!(o=d.n()).done;){var u=o.value,s=e.Node.get(u);s&&(s.removeEdge("parent",l),l.removeEdge("child",s),s.addEdge("parent",t),t.addEdge("child",s))}}catch(p){d.e(p)}finally{d.f()}}}catch(p){a.e(p)}finally{a.f()}e.clearSelectedNodes()},copySelectedNodes:function(){},linkSelectedNodes:function(t){var n,a=Object(E.a)(e.selectedNodes.values());try{for(a.s();!(n=a.n()).done;){var o,r=n.value,c=Object(E.a)(r);try{for(c.s();!(o=c.n()).done;){var i=o.value,l=e.Node.get(i);l&&(l.addEdge("parent",t),t.addEdge("child",l))}}catch(d){c.e(d)}finally{c.f()}}}catch(d){a.e(d)}finally{a.f()}e.clearSelectedNodes()},unlinkSelectedNodes:function(){var t,n=Object(E.a)(e.selectedNodes);try{for(n.s();!(t=n.n()).done;){var a,o=Object(h.a)(t.value,2),r=o[0],c=o[1],i=e.Node.get(r),l=Object(E.a)(c);try{for(l.s();!(a=l.n()).done;){var d=a.value,u=e.Node.get(d);u&&(u.removeEdge("parent",i),i.removeEdge("child",u))}}catch(s){l.e(s)}finally{l.f()}}}catch(s){n.e(s)}finally{n.f()}e.clearSelectedNodes()},removeSelectedNodes:function(){var t,n=Object(E.a)(e.selectedNodes);try{for(n.s();!(t=n.n()).done;){var a,o=Object(h.a)(t.value,2),r=o[0],c=o[1],i=e.Node.get(r),l=Object(E.a)(c);try{for(l.s();!(a=l.n()).done;){var d=a.value,u=e.Node.get(d);u&&(u.removeEdge("parent",i),i.removeEdge("child",u),0===u.edgeMap.get("parent").size&&e.deleteNode(u))}}catch(s){l.e(s)}finally{l.f()}}}catch(s){n.e(s)}finally{n.f()}e.clearSelectedNodes()}}})).actions((function(e){return{afterCreate:function(){Object(y.a)(e).catch((function(e){console.error("Persist error",e)})).then((function(){if(!e.rootNode){var t=e.createNode("Node",{label:"Exuo"});Object(p.a)(e.Config,{system:{id:"system",items:{rootNodeId:t.id,selectedNodes:{},activeModes:[]}}})}}))},createChild:function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Node",o=e.createNode(a,n);return t.addEdge("child",o),o.addEdge("parent",t),o},deleteNode:function(t){e.Node.delete(t.id)}}})).views((function(e){return{get rootNode(){var t=e.Config.get("system");return e.Node.get(null===t||void 0===t?void 0:t.get("rootNodeId"))},get activeModes(){var t=e.Config.get("system");return null===t||void 0===t?void 0:t.get("activeModes")},get selectedNodes(){var t=e.Config.get("system");return null===t||void 0===t?void 0:t.get("selectedNodes")},get selectedNodeCount(){var t,n=0,a=Object(E.a)(e.selectedNodes);try{for(a.s();!(t=a.n()).done;){n+=t.value[1].length}}catch(o){a.e(o)}finally{a.f()}return n}}})),le=n(334),de=n(308),ue=n(337),se=n(338),pe=n(339),me=n(169),fe=n.n(me),ge=n(168),be=n.n(ge),ve=n(29),he=n(22),Ee=Object(C.a)((function(e){return Object(w.a)({itemContainer:{"&.isExpanded":{}},listItem:{position:"relative",cursor:"pointer",transition:e.transitions.create(["color"],{duration:e.transitions.duration.shortest}),"&:hover, &:focus":{color:e.palette.primary.main},"&.editMode":{cursor:"text",color:"unset"},"&.selectMode":{cursor:"default",color:"unset"},"&.isEditing, &.isEditing + li":{borderColor:"transparent"},"&.Mui-selected":{background:"\n          linear-gradient(\n            to top,\n            ".concat(Object(x.c)(e.palette.background.default,0),",\n            ").concat(Object(x.c)(e.palette.background.default,.9),"               ").concat(e.spacing(1)/2,"px calc(100% - ").concat(e.spacing(1)/2,"px),\n            ").concat(Object(x.c)(e.palette.background.default,0),"\n          ),\n          linear-gradient(\n            to right,\n            ").concat(e.palette.primary.main,",\n            ").concat(e.palette.secondary.main," \n          )\n        "),"&:hover":{color:"unset"},"& a:hover":{color:"unset"}}},childList:{marginLeft:e.spacing(3),padding:0},itemText:{margin:0,overflowX:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis","& .MuiListItemText-primary":{display:"inline"},"& .MuiListItemText-secondary":{display:"inline",paddingLeft:e.spacing(1)},"&.expand":{"& .MuiListItemText-secondary":{display:"block",paddingLeft:0}}},listItemSelectCheckbox:{padding:e.spacing(0,1,0,1),"&:hover, &.Mui-checked:hover":{backgroundColor:"unset"}},listItemIcon:{minWidth:"auto"},noteEditor:{cursor:"default",zIndex:e.zIndex.appBar+10,position:"absolute",top:0,left:0},noteEditorInput:{cursor:"text",background:"\n        linear-gradient(\n          to top,\n          ".concat(Object(x.c)(e.palette.background.default,0),",\n          ").concat(Object(x.c)(e.palette.background.default,1),"             ").concat(e.spacing(1)/2,"px calc(100% - ").concat(e.spacing(1)/2,"px),\n          ").concat(Object(x.c)(e.palette.background.default,0),"\n        ),\n        linear-gradient(\n          to right,\n          ").concat(e.palette.primary.main,",\n          ").concat(e.palette.secondary.main," \n        )\n      ")},secondaryActions:{right:0},childButton:{cursor:"pointer",color:e.palette.text.primary,transition:e.transitions.create(["color"],{duration:e.transitions.duration.shortest}),minWidth:"unset",paddingRight:e.spacing(2),paddingLeft:e.spacing(2),"&:hover, &:focus":{color:e.palette.primary.main,background:"inherit"}}})})),ye=function(e){var t=e.node,n=e.parentNode,a=e.expandSecondaryTypography,r=(e.expanded,e.className),i=Ee(),l=Object(ve.c)(),u=o.a.useState(!1),s=Object(h.a)(u,2),p=s[0],m=s[1],f=d();return c((function(e){var c,d,u=null!==(c=null===f||void 0===f?void 0:f.isExpanded(t,n))&&void 0!==c&&c,s=function(){f.toggleExpand(t,n),console.log("expanded nodes",f.expandedNodes)},g=null===(d=e.selectedNodes.get(n.id))||void 0===d?void 0:d.includes(t.id),b=t.label.indexOf("\n");return o.a.createElement(o.a.Fragment,null,o.a.createElement(de.a,{onClick:function(a){a.preventDefault(),a.altKey?s():a.metaKey||a.ctrlKey?(m(!1),e.setActiveMode("select"),e.toggleSelectNode(t,n)):e.activeModes.includes("select")?e.toggleSelectNode(t,n):e.activeModes.includes("edit")?m(!0):l(Object(he.b)("/node/".concat(t.id,"/")))},selected:g,component:"li",ContainerProps:{className:[i.itemContainer,t.childCount>0&&u?"isExpanded":"",r].join(" ")},className:[i.listItem,e.activeModes.includes("edit")?"editMode":"",e.activeModes.includes("select")?"selectMode":"",p?"isEditing":""].join(" ")},p&&o.a.createElement(te,{autoFocus:!0,text:t.label,className:i.noteEditor,inputClassName:i.noteEditorInput,onValue:function(e){m(!1),e&&console.log({value:e})}}),o.a.createElement(ue.a,{primary:b>0?t.label.slice(0,b):t.label,secondary:b>0?t.label.slice(b+1):void 0,className:[i.itemText,a?"expand":""].join(" ")}),!p&&o.a.createElement(se.a,{className:i.secondaryActions},(t.childCount>0||e.activeModes.includes("select")||e.activeModes.includes("edit"))&&o.a.createElement(O.a,{to:Object(he.b)("/node/".concat(t.id,"/")),component:ve.a,onClick:function(e){if(e.altKey)return e.preventDefault(),void s()},className:i.childButton,endIcon:t.childCount>0&&u?o.a.createElement(be.a,null):o.a.createElement(fe.a,null),size:"small"},t.childCount>0&&t.childCount))),t.childCount>0&&o.a.createElement(pe.a,{in:u,timeout:"auto",unmountOnExit:!0},o.a.createElement(Ne,{inner:!0,node:t,edgeTag:"child",className:i.childList})))}))};ye.defaultProps={expandSecondaryTypography:!0};var je=Object(C.a)((function(e){return Object(w.a)({list:{padding:0,"&>li":{borderTop:".01px solid ".concat(e.palette.divider),"&:first-child":{borderTop:"unset"}},borderBottom:".01px solid ".concat(e.palette.divider),"&.inner":{borderBottom:"unset"}}})})),Ne=function(e){var t=e.node,n=e.edgeTag,a=e.inner,r=e.className,i=je();return c((function(e){var c;return o.a.createElement(le.a,{"aria-label":"edge list",className:[i.list,a?"inner":"",r].join(" ")},null===(c=t.edgeMap.get(n))||void 0===c?void 0:c.map((function(e){return o.a.createElement(ye,{node:e,parentNode:t,key:"".concat(t.id,"-").concat(n,"-").concat(e.id)})})))}))},ke=n(345),Oe=Object(C.a)((function(e){return Object(w.a)({root:Object(u.a)({display:"inline-block",margin:0,padding:e.spacing(1,2,1,2),overflowX:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},e.typography.body1)})})),Ce=function(e){var t=e.label,n=e.placeholder,a=e.autoFocus,r=e.className,i=e.onValue,l=o.a.useRef(),d=Oe(),u=o.a.useState(null!==t&&void 0!==t?t:""),s=Object(h.a)(u,2),p=s[0],m=s[1],f=o.a.useState(!1),g=Object(h.a)(f,2),b=g[0],v=g[1];return o.a.useEffect((function(){var e;b||(null===(e=l.current)||void 0===e||e.setSelectionRange(p.length,p.length),v(!0))}),[b,p.length]),c((function(e){var t=function(e){i&&(m(""),i(p,e))};return o.a.createElement(M.a,{onClickAway:function(e){""===p&&t()}},o.a.createElement(ke.a,{fullWidth:!0,multiline:!0,autoFocus:a,inputRef:l,placeholder:n,value:p,onKeyDown:function(e){13!==e.keyCode||e.shiftKey?e.keyCode:(e.preventDefault(),t(e))},onChange:function(e){m(e.target.value)},inputProps:{"aria-label":"label"},className:[d.root,r].join(" ")}))}))};Ce.defaultProps={placeholder:"Label"};var we=n(307),xe=n(179),Se=n.n(xe),Me=n(178),Be=n.n(Me),Te=n(177),Re=n.n(Te),Ae=n(180),Ie=n.n(Ae),Le=n(90),Fe=n(348),Pe=n(304),De=n(351),ze=n(340),We=n(172),Ke=n.n(We),Ue=n(173),Ge=n.n(Ue),qe=n(176),Je=n.n(qe),Ve=n(175),Xe=n.n(Ve),He=n(174),Ye=n.n(He),$e=n(170),Qe=n.n($e),Ze=Object(C.a)((function(e){return Object(w.a)({root:{display:"inherit",position:"relative"},buttonGroup:{"& .MuiButtonGroup-groupedTextHorizontal":{borderRight:"unset"},"& .MuiButtonGroup-grouped":{minWidth:"unset"}},selectCount:{color:e.palette.primary.main,fontSize:12,position:"absolute",width:"100%",bottom:-e.spacing(1)},selectButton:{},deleteButton:{color:e.palette.error.main},popper:{"& svg":{marginRight:e.spacing(1)}},paper:{border:".01px solid ".concat(e.palette.divider)},selectMenu:{outline:0}})})),_e=function(e){e.node;var t=e.className,n=e.onClick,a=Object(Le.a)(e,["node","className","onClick"]),r=Ze(),i=o.a.useState(!1),l=Object(h.a)(i,2),u=l[0],s=l[1],p=o.a.useRef(null),m=d();return c((function(e){var c=e.selectedNodeCount;return o.a.createElement("div",{className:[r.root,t].join(" ")},c>0&&o.a.createElement("span",{className:r.selectCount},c),o.a.createElement(k.a,Object.assign({color:"primary",ref:p,onClick:e.selectedNodes.size?function(){return s((function(e){return!e}))}:n,className:r.selectButton},a),o.a.createElement(Qe.a,null)),o.a.createElement(Fe.a,{open:u,anchorEl:p.current,role:void 0,disablePortal:!0,className:r.popper},(function(t){t.placement;return o.a.createElement(M.a,{onClickAway:function(e){e.preventDefault(),s(!1)}},o.a.createElement(Pe.a,{elevation:0,className:r.paper},o.a.createElement(De.a,{dense:!0,className:r.selectMenu},o.a.createElement(ze.a,{divider:!0,onClick:function(){e.removeSelectedNodes(),s(!1)},className:r.deleteButton},o.a.createElement(Ke.a,null),"Remove"),o.a.createElement(ze.a,{onClick:function(){e.linkSelectedNodes(m),s(!1)}},o.a.createElement(Ge.a,null),"Link here"),o.a.createElement(ze.a,{disabled:!0,onClick:function(){s(!1)}},o.a.createElement(Ye.a,null),"Copy here"),o.a.createElement(ze.a,{divider:!0,onClick:function(){e.moveSelectedNodes(m),s(!1)}},o.a.createElement(Xe.a,null),"Move here"),o.a.createElement(ze.a,{onClick:function(){e.clearSelectedNodes(),s(!1)}},o.a.createElement(Je.a,null),"Clear selection"))))})))}))},et=Object(C.a)((function(e){var t;return Object(w.a)({root:{},toolbar:(t={justifyContent:"space-evenly"},Object(ne.a)(t,e.breakpoints.up("sm"),{justifyContent:"center"}),Object(ne.a)(t,"backdropFilter","blur(3px)"),Object(ne.a)(t,"background","\n        linear-gradient(\n          to bottom,\n          ".concat(Object(x.c)(e.palette.background.default,.9),",\n          ").concat(Object(x.c)(e.palette.background.default,1)," 90%\n        )")),Object(ne.a)(t,"paddingTop",e.spacing(1)),Object(ne.a)(t,"paddingBottom",e.spacing(1)),t),insertButton:{color:e.palette.background.default,boxShadow:"unset",margin:e.spacing(0,1,0,1),background:"\n        radial-gradient(\n          circle at bottom,\n          ".concat(e.palette.secondary.main,",\n          ").concat(e.palette.primary.main," 75%\n        )"),"&:hover, &:focus":{boxShadow:"unset",background:"\n        radial-gradient(\n          circle at bottom,\n          ".concat(Object(x.b)(e.palette.secondary.main,.3),",\n          ").concat(e.palette.primary.main," 75%\n        )")},"&:active":{boxShadow:"unset",background:"\n        radial-gradient(\n          circle at bottom,\n          ".concat(Object(x.b)(e.palette.secondary.main,.3),",\n          ").concat(e.palette.primary.main," 75%\n        )")}},labelEditor:{background:"\n        linear-gradient(\n          to top,\n          ".concat(Object(x.c)(e.palette.background.default,0),",\n          ").concat(Object(x.c)(e.palette.background.default,1),"             ").concat(e.spacing(1)/2,"px calc(100% - ").concat(e.spacing(1)/2,"px),\n          ").concat(Object(x.c)(e.palette.background.default,0),"\n        ),\n        linear-gradient(\n          to right,\n          ").concat(e.palette.primary.main,",\n          ").concat(e.palette.secondary.main," \n        )\n      ")}})})),tt=function(e){var t=e.node,n=e.className,a=et(),r=Object(ve.c)();return c((function(e){var c,i=t.childCount>0,l=null!==(c=e.selectedNodes.size)&&void 0!==c?c:0;return o.a.createElement(we.a,{className:[a.root,n].join(" ")},e.activeModes.includes("insert")&&o.a.createElement(Ce,{className:a.labelEditor,placeholder:"Label",autoFocus:!0,onValue:function(n,a){if(n){var o=e.createChild(t,{label:n});(null===a||void 0===a?void 0:a.ctrlKey)&&r(Object(he.b)("/node/".concat(o.id,"/")))}else e.toggleActiveMode("insert")}}),o.a.createElement(B.a,{className:a.toolbar},o.a.createElement(k.a,{disabled:!0,color:e.activeModes.includes("edit")?"primary":void 0,onClick:function(){return e.toggleActiveMode("edit")}},o.a.createElement(Re.a,null)),o.a.createElement(k.a,{disabled:!i,color:e.activeModes.includes("edit")?"primary":void 0,onClick:function(){return e.toggleActiveMode("edit")}},o.a.createElement(Be.a,null)),o.a.createElement(k.a,{color:"primary",onClick:function(){e.setActiveMode("insert")},className:a.insertButton},o.a.createElement(Se.a,null)),o.a.createElement(_e,{disabled:!(i||l>0),node:t,color:e.activeModes.includes("select")?"primary":void 0,onClick:function(){e.toggleActiveMode("select")}}),o.a.createElement(k.a,{disabled:!0,color:e.activeModes.includes("edit")?"primary":void 0,onClick:function(){return e.toggleActiveMode("edit")}},o.a.createElement(Ie.a,null)),!1))}))},nt=n(333),at=n(57),ot=Object(C.a)((function(e){return Object(w.a)({root:{textAlign:"center",position:"relative",paddingBottom:e.spacing(9)},appBar:{position:"sticky",borderBottom:".01px solid ".concat(e.palette.divider),backdropFilter:"blur(3px)",background:"\n        linear-gradient(\n          to top,\n          ".concat(Object(x.c)(e.palette.background.default,.9),",\n          ").concat(Object(x.c)(e.palette.background.default,1)," 90%\n        )")},titleBar:{background:"unset"},children:{},actions:Object(ne.a)({borderTop:".01px solid ".concat(e.palette.divider),zIndex:e.zIndex.appBar,position:"fixed",bottom:0,left:"50%",width:"100%",transform:"translateX(-50%)"},e.breakpoints.up("sm"),{width:"600px"})})})),rt=function(e){var t=e.node,n=e.className,a=e.children,r=ot();return c((function(e){return o.a.createElement(we.a,{className:[r.root,n].join(" ")},o.a.createElement(nt.a,{elevation:0,className:r.appBar},o.a.createElement(at.c,{title:t.label,className:r.titleBar})),o.a.createElement(we.a,{className:[r.children,e.activeModes.includes("insert")?"fade":""].join(" ")},a),o.a.createElement(tt,{node:t,className:[r.actions,e.activeModes.includes("insert")?"fade":""].join(" ")}))}))},ct=function(e){var t=e.id;return c((function(e){var n=e.Node.get(t),a=null!==n&&void 0!==n?n:e.rootNode;return a?o.a.createElement(l,{value:a},o.a.createElement(rt,{node:a},o.a.createElement(Ne,{node:a,edgeTag:"child"}))):null}))}},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return p}));var a=n(90),o=n(0),r=n.n(o),c=n(29),i=n(19),l=n(163),d=n(57);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"/exuo"+e}var s=function(e){var t=e.component,n=Object(a.a)(e,["component"]);return r.a.createElement(t,n)},p=function(){return Object(i.l)((function(e){return e.rootNode?r.a.createElement(c.b,{basepath:"/exuo"},r.a.createElement(s,{path:"/",component:i.h}),r.a.createElement(s,{path:":type/:id",component:i.h}),r.a.createElement(s,{path:"peer/:id",component:l.PeerConnector}),r.a.createElement(s,{path:"settings",component:d.b})):null}))}},299:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),c=n.n(r),i=(n(193),n(89)),l=n(342),d=n(18),u=n(343),s=n(341),p=n(344),m=(Object(l.a)(),function(e){var t=e.children,n=Object(s.a)("(prefers-color-scheme: dark)"),a=o.a.useMemo((function(){var e={type:n?"dark":"light",primary:{main:"#FF2EA2"},secondary:{main:"#FF8F00"},background:{default:n?"#000000":"#ffffff"},text:{primary:n?"#dddddd":"#212121",secondary:n?"#aaaaaa":"#454545"}};return Object(l.a)({typography:{fontSize:16,fontFamily:["-apple-system","system-ui","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(", ")},palette:e,shape:{borderRadius:6},props:{MuiButton:{disableElevation:!0},MuiButtonGroup:{disableElevation:!0}},overrides:{MuiButtonBase:{root:{cursor:"default"}},MuiCssBaseline:{"@global":{"*::selection":{backgroundColor:Object(d.c)(e.primary.main,.2)},html:{userSelect:"none",overscrollBehavior:"none","-webkit-touch-callout":"none",maxWidth:"600px",margin:"auto","&, & body":{height:"100%"}}}}}})}),[n]);return o.a.createElement(u.a,{theme:a},o.a.createElement(p.a,null),t)}),f=n(22),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,null,o.a.createElement(m,null,o.a.createElement(f.a,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/exuo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/exuo","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(t,e)}))}}()},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return F})),n.d(t,"d",(function(){return P}));var a=n(0),o=n.n(a),r=n(307),c=n(333),i=n(330),l=n(349),d=Object(i.a)((function(e){return Object(l.a)({root:{},appBar:{},actions:{width:"100%",color:e.palette.text.secondary,backgroundColor:e.palette.background.default,padding:e.spacing(0,2,0,2)},children:{}})})),u=function(e){var t=e.title,n=e.actions,a=e.className,i=e.children,l=d();return o.a.createElement(r.a,{className:[l.root,a].join(" ")},o.a.createElement(c.a,{elevation:0,position:"sticky",className:l.appBar},o.a.createElement(j,{title:t}),n),o.a.createElement(r.a,{className:l.children},i))},s=n(332),p=n(329),m=n(61),f=n(164),g=n.n(f),b=n(165),v=n.n(b),h=n(29),E=n(22),y=Object(i.a)((function(e){return Object(l.a)({root:{color:e.palette.text.secondary,backgroundColor:e.palette.background.default,padding:e.spacing(0,2,0,2)},backButton:{cursor:"pointer","&[disabled]":{visibility:"hidden",pointerEvents:"none"}},hide:{visibility:"hidden",mouseEvents:"none"},settingsButton:{},title:{flexGrow:1,textAlign:"center",overflowX:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",color:e.palette.text.primary}})})),j=function(e){var t,n=e.title,a=e.showBackButton,r=e.showSettingsButton,c=e.className,i=(e.children,y()),l=null!==(t=null===n||void 0===n?void 0:n.indexOf("\n"))&&void 0!==t?t:-1;return o.a.createElement(s.a,{className:[i.root,c].join(" ")},o.a.createElement(p.a,{disabled:P(),edge:"start","aria-label":"back",onClick:function(){return window.history.back()},className:[i.backButton,a?"":i.hide].join(" ")},o.a.createElement(g.a,null)),n&&o.a.createElement(m.a,{variant:"h5",component:"h1",className:i.title},l>0?n.slice(0,n.indexOf("\n")):n),o.a.createElement(p.a,{disabled:!0,edge:"end",component:h.a,to:Object(E.b)("/settings"),"aria-label":"settings",className:[i.settingsButton,r?"":i.hide].join(" ")},o.a.createElement(v.a,{fontSize:"small"})))};j.defaultProps={title:"Exuo",showBackButton:!0,showSettingsButton:!1};var N=n(334),k=n(335),O=n(308),C=n(336),w=n(337),x=n(338),S=n(347),M=n(166),B=n.n(M),T=n(102),R=n.n(T),A=n(167),I=n.n(A),L=n(19),F=function(){return Object(L.l)((function(e){var t;return o.a.createElement(u,null,o.a.createElement(N.a,{subheader:o.a.createElement(k.a,null,"Global")},o.a.createElement(O.a,null,o.a.createElement(C.a,null,o.a.createElement(R.a,null)),o.a.createElement(w.a,{id:"switch-list-label-dividers",primary:"Dividers"}),o.a.createElement(x.a,null,o.a.createElement(S.a,{disabled:!0,edge:"end",inputProps:{"aria-labelledby":"switch-list-label-list-dividers"}})))),o.a.createElement(N.a,{subheader:o.a.createElement(k.a,null,"Lists")},o.a.createElement(O.a,null,o.a.createElement(C.a,null,o.a.createElement(B.a,null)),o.a.createElement(w.a,{id:"switch-list-label-checkboxes",primary:"Checkboxes"}),o.a.createElement(x.a,null,o.a.createElement(S.a,{checked:null!==(t=e.listCheckboxSetting)&&void 0!==t&&t,onChange:function(){return e.toggleListCheckboxSetting()},edge:"end",inputProps:{"aria-labelledby":"switch-list-label-list-checkboxes"}}))),o.a.createElement(O.a,null,o.a.createElement(C.a,null,o.a.createElement(R.a,null)),o.a.createElement(w.a,{id:"switch-list-label-dividers",primary:"Dividers"}),o.a.createElement(x.a,null,o.a.createElement(S.a,{disabled:!0,edge:"end",inputProps:{"aria-labelledby":"switch-list-label-list-dividers"}}))),o.a.createElement(O.a,null,o.a.createElement(C.a,null,o.a.createElement(I.a,null)),o.a.createElement(w.a,{id:"switch-list-label-bluetooth",primary:"Show Extra Edge Types"}),o.a.createElement(x.a,null,o.a.createElement(S.a,{disabled:!0,edge:"end",inputProps:{"aria-labelledby":"switch-list-label-bluetooth"}})))))}))},P=function(){return window.location.pathname===Object(E.b)("/")||window.location.pathname===Object(E.b)()}},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(101),o=n.n(a),r=n(23),c=n(17),i=n(149),l=n(5),d=n(150);function u(e){return s.apply(this,arguments)}function s(){return(s=Object(i.a)(o.a.mark((function e(t){var n,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new d.a("default"),a=Object.keys(Object(l.b)(t).properties),i=Object.fromEntries(a.map((function(e){return[e,"id"]}))),n.version(1).stores(i),e.abrupt("return",Promise.all(a.map((function(e){return n.table(e).toArray().then((function(t){return[e,Object.fromEntries(t.map((function(e){return[e.id,e]})))]}))}))).then((function(e){Object(l.a)(t,Object.fromEntries(e));var a,o=[];Object(l.h)(t,(function(e){o.push(e),a&&clearTimeout(a),a=setTimeout((function(){o.forEach((function(e){var a=e.path.split("/").slice(1),o=Object(c.a)(a,3),i=o[0],d=o[1],u=o[2];if("add"===e.op)n.table(i).put(Object(l.d)(t[i].get(d)));else{if("replace"!==e.op&&"remove"!==e.op)throw Error("Unknown patch op '".concat(e.op,"'"));if(u){var s=t[i].get(d)[u];Object(l.g)(s)&&(s=Object(l.d)(s)),n.table(i).update(d,Object(r.a)({},u,s))}else n.table(i).delete(d)}})),o=[]}),1e3)}))})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},89:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return m}));var a=n(0),o=n.n(a),r=n(19),c=(n(334),n(308),n(337),n(330)),i=n(349),l=n(5),d=(Object(c.a)((function(e){return Object(i.a)({root:{},item:{},itemText:{}})})),l.i.model("Store",{graph:r.d,location:l.i.optional(l.i.string,"/")}).actions((function(e){return{setLocation:function(t){e.location=t}}})).create({graph:r.d.create()})),u=o.a.createContext(d),s=function(e){var t=e.children;return o.a.createElement(u.Provider,{value:d},t)},p=n(181);function m(e){var t=o.a.useContext(u);if(t)return Object(p.a)((function(){return e(t)}));throw Error("Cannot use store before setup")}n(81)}},[[188,1,2]]]);
//# sourceMappingURL=main.98eb9e68.chunk.js.map