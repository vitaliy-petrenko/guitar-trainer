(this["webpackJsonpreact-redux"]=this["webpackJsonpreact-redux"]||[]).push([[0],{81:function(e,t,n){e.exports=n(98)},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"switchMic",(function(){return L})),n.d(a,"setPlayingNote",(function(){return T})),n.d(a,"selectScale",(function(){return U})),n.d(a,"selectScaleKey",(function(){return B}));var r=n(0),i=n.n(r),c=n(8),o=n.n(c),l=n(11),s=(n(90),n(36)),u=n(44),d=n(45),m=n(51),v=n(46),p=n(52),f=(n(91),n(68)),y=n.n(f),b=["C","C\u266f","D","D\u266f","E","F","F\u266f","G","G\u266f","A","A\u266f","B"],h={ALL:Array(12).fill(1),MAJOR:[2,2,1,2,2,2,1],HARMONIC_MAJOR:[2,2,1,2,1,3,1],MELODIC_MAJOR:[2,2,1,2,1,2,2],MAJOR_PENTATONIC:[2,2,3,2,3],MAJOR_BLUES:[2,1,1,3,2,3],MINOR:[2,1,2,2,1,2,2],HARMONIC_MINOR:[2,1,2,2,1,3,1],MELODIC_MINOR:[2,1,2,2,2,2,1],MINOR_PENTATONIC:[3,2,2,3,2],MINOR_BLUES:[3,2,1,1,3,2],MIXOLYDIAN:[2,2,1,2,2,1,2],IONIAN:[2,2,1,2,2,2,1],DORIAN:[2,1,2,2,2,1,2],PHRIGIAN:[1,2,2,2,1,2,2],LYDIAN:[2,2,2,1,2,2,1],AEOLIAN:[2,1,2,2,1,2,2],LOCRIAN:[1,2,2,1,2,2,2]},g=Object.keys(h).reduce((function(e,t){return e[t]=t,e}),{}),O=Object.keys(h).reduce((function(e,t){return e[t]=t.split("_").map((function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()})).join(" "),e}),{}),E="SET_PLAYING_NOTE",N="SET_MIC_LISTEN",j="SET_SCALE",S="SET_SCALE_KEY",w=new(function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(v.a)(t).call(this))).middleA=440,e.semitone=69,e.bufferSize=8192,e._initGetUserMedia(),e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"_initGetUserMedia",value:function(){if(window.AudioContext=window.AudioContext||window.webkitAudioContext,!window.AudioContext)return alert("AudioContext not supported");void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t||alert("getUserMedia is not implemented in this browser"),new Promise((function(n,a){t.call(navigator,e,n,a)}))})}},{key:"startRecord",value:function(){var e=this;navigator.mediaDevices.getUserMedia({audio:!0}).then((function(t){e.audioContext.createMediaStreamSource(t).connect(e.analyser),e.analyser.connect(e.scriptProcessor),e.scriptProcessor.connect(e.audioContext.destination),e.scriptProcessor.addEventListener("audioprocess",(function(t){var n=e.pitchDetector.do(t.inputBuffer.getChannelData(0));if(n){var a=e.getNote(n),r={name:b[a%12],value:a,cents:e.getCents(n,a),octave:Math.floor(a/12)-1,frequency:n};a>=30&&e.emit("notesDetected",[r])}}))})).catch((function(e){alert(e.name+": "+e.message)}))}},{key:"init",value:function(){var e=this;this.audioContext=new window.AudioContext,this.analyser=this.audioContext.createAnalyser(),this.scriptProcessor=this.audioContext.createScriptProcessor(this.bufferSize),window.Aubio().then((function(t){e.pitchDetector=new t.Pitch("default",e.bufferSize,1,e.audioContext.sampleRate),e.startRecord()}))}},{key:"getNote",value:function(e){var t=Math.log(e/this.middleA)/Math.log(2)*12;return Math.round(t)+this.semitone}},{key:"getStandardFrequency",value:function(e){return this.middleA*Math.pow(2,(e-this.semitone)/12)}},{key:"getCents",value:function(e,t){return Math.floor(1200*Math.log(e/this.getStandardFrequency(t))/Math.log(2))}},{key:"play",value:function(e){this.oscillator||(this.oscillator=this.audioContext.createOscillator(),this.oscillator.connect(this.audioContext.destination),this.oscillator.start()),this.oscillator.frequency.value=e}},{key:"stop",value:function(){this.oscillator.stop(),this.oscillator=null}}]),t}(y.a)),A=function(e,t){var n=h[e];if(!n)return null;for(var a=[t],r=1;r<n.length;r++){var i=(b.indexOf(a[r-1])+n[r-1])%b.length;a.push(b[i])}return a},M=n(17),k=(n(92),n(130)),_=n(131),P=n(128),C=n(132),D=n(140),x=n(127),I=n(139),R=n(135),L=function(e){return{type:N,payload:e}},T=function(e){return{type:E,payload:e}},U=function(e){return{type:j,payload:e}},B=function(e){return{type:S,payload:e}},G=Object(l.b)((function(e){return{selectedScale:e.selectedScale}}),(function(e){return{onSelect:function(t){return e(B(t))}}}))((function(e){var t=e.selectedScale,n=e.onSelect,a=void 0===n?function(e){return e}:n,r=b.map((function(e){return i.a.createElement(D.a,{key:e,value:e},e)}));return i.a.createElement(x.a,{fullWidth:!0},i.a.createElement(I.a,{htmlFor:"sidebar-select-scale-key"},"Scale Key"),i.a.createElement(R.a,{value:t.key,inputProps:{id:"sidebar-select-scale-key"},onChange:function(e){return a(e.target.value)}},r))})),z=Object(l.b)((function(e){return{selectedScale:e.selectedScale}}),(function(e){return{onSelect:function(t){return e(U(t))}}}))((function(e){var t=e.selectedScale,n=e.onSelect,a=void 0===n?function(e){return e}:n,r=Object.entries(O).map((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return i.a.createElement(D.a,{key:n,value:n},a)}));return i.a.createElement(x.a,{fullWidth:!0},i.a.createElement(I.a,{htmlFor:"sidebar-select-scale"},"Scale"),i.a.createElement(R.a,{value:t.name,inputProps:{id:"sidebar-select-scale"},onChange:function(e){return a(e.target.value)}},r))})),J=(n(93),n(94),function(e){var t=e.name,n=void 0===t?"C#":t,a=e.octave,r=void 0===a?1:a,c=e.isSimilar,o=void 0!==c&&c,l=e.isActive,s=void 0===l||l,u=e.isInScale,d=void 0===u||u,m=e.isKey,v=void 0!==m&&m,p=["note","note--".concat(n[0].toLowerCase())],f="".concat(n).concat(r||"");return o&&p.push("is-similar"),s&&p.push("is-active"),d||p.push("is-disabled"),v&&p.push("is-key"),i.a.createElement("div",{className:p.join(" ")},f)}),K=function(e){var t=["tuner__arrow"];return e.isActive&&t.push("is-active"),i.a.createElement("div",{className:t.join(" ")})},F=Object(l.b)((function(e){return{playingNote:e.playingNote}}))((function(e){var t=e.playingNote;return i.a.createElement("div",{className:"tuner"},i.a.createElement("div",{className:"tuner__col"},i.a.createElement(K,{isActive:t.cents<-10})),i.a.createElement("div",{className:"tuner__col tuner__note"},i.a.createElement(J,{isActive:t.cents>=-10&&t.cents<=10,name:t.name,note:t,octave:t.octave})),i.a.createElement("div",{className:"tuner__col"},i.a.createElement(K,{isActive:t.cents>10})))})),W=n(129),q=function(e){var t=e.start,n=void 0===t?function(e){return e}:t;return i.a.createElement(W.a,{fullWidth:!0,variant:"contained",color:"secondary",onClick:n},i.a.createElement("span",{"aria-label":"microphone",role:"img"},"\ud83c\udfa4"),"\xa0Enable Recording")},Y=Object(k.a)((function(e){return{paper:{padding:e.spacing(2),color:e.palette.text.secondary}}})),H=function(e){var t=e.children;return i.a.createElement(_.a,{variant:"h6",gutterBottom:!0},t)},X=function(e){var t=e.title,n=e.children,a=Y();return i.a.createElement("div",{className:"sidebar__item"},i.a.createElement(P.a,{className:a.paper},i.a.createElement(H,null,t),n))},$=n(20);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(n,!0).forEach((function(t){Object(M.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=Object(l.b)((function(e){return{playingNote:e.playingNote,isMicActive:e.isMicActive,selectedScaleKey:e.selectedScale.key}}),(function(e){return{actions:Object($.bindActionCreators)(V({},a),e)}}))((function(e){var t=e.actions,n=e.isMicActive,a=(e.selectedScaleKey,t.switchMic),r=void 0===a?function(e){return e}:a;return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__in"},i.a.createElement(X,{title:"Mini Tuner"},n?i.a.createElement(F,null):i.a.createElement(q,{start:function(){r(!0),w.init()}})),i.a.createElement(X,{title:"Scale Settings"},i.a.createElement(C.a,{container:!0,spacing:2},i.a.createElement(C.a,{item:!0,xs:12},i.a.createElement(G,null)),i.a.createElement(C.a,{item:!0,xs:12},i.a.createElement(z,null))))))})),ee=(n(95),Object(l.b)((function(e,t){var n=e.playingNote,a=e.selectedScale,r=e.isMicActive,i=t.name,c=t.octave,o=r&&n&&n.name===i;return{isSimilar:o,isActive:o&&(null===c||n.octave===c),isInScale:a.scale.includes(i),isKey:a.key===i}}))(J)),te=function(e){var t=e.children;return i.a.createElement("div",{className:"guitar__string"},t)},ne=function(e){var t=e.note;return i.a.createElement("div",{className:"guitar__cell"},i.a.createElement("div",{className:"guitar__note"},i.a.createElement(ee,t)))},ae=function(e){var t=e.note;return i.a.createElement("div",{className:"guitar__zero"},i.a.createElement("div",{className:"guitar__note"},i.a.createElement(ee,t)))},re=function(e){for(var t=e.frets,n=e.startNotes,a=[],r=0;r<6;r++){for(var c=[],o=n[r],l=b.indexOf(o.name),s=t+1,u=o.octave,d=0;d<s;d++){var m=(d+l)%b.length,v={name:b[m],octave:0===m?++u:u};0===d?c.push(i.a.createElement(ae,{note:v,key:d})):c.push(i.a.createElement(ne,{note:v,key:d}))}a.push(i.a.createElement(te,{key:r},c))}return i.a.createElement("div",{className:"guitar"},a)};n(96);function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ce=function(e){var t=e.name,n=void 0===t?"C#":t,a=e.octave,r={name:n,octave:void 0===a?2:a};return i.a.createElement("div",{className:"piano__key"},i.a.createElement("div",{className:"piano__note"},i.a.createElement(ee,r)))},oe=function(e){for(var t=e.octaves,n=void 0===t?3:t,a=[],r=12*n,c=0,o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(n,!0).forEach((function(t){Object(M.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.startNote);c<r;c++){var l=b.indexOf(o.name);if(a.push(i.a.createElement(ce,{key:c,name:o.name,octave:1===n?null:o.octave})),~l){var s=(l+1)%b.length;0===s&&o.octave++,o.name=b[s]}}return i.a.createElement("div",{className:"piano"},a)},le=Object(l.b)((function(e){return{guitarStringsStartNotes:e.guitarStringsStartNotes,pianoStartNote:e.pianoStartNote}}))((function(e){var t=e.guitarStringsStartNotes,n=e.pianoStartNote;return i.a.createElement("div",{className:"application__main"},i.a.createElement("div",{className:"board-container"},i.a.createElement(re,{frets:18,startNotes:t})),i.a.createElement("div",{className:"board-container"},i.a.createElement(oe,{octaves:4,startNote:n})))})),se=n(134),ue=n(74),de=Object(ue.a)({palette:{type:"dark"}}),me=n(133),ve=n(137),pe=n(138),fe=n(71),ye=n.n(fe),be=n(70),he=n.n(be),ge=Object(k.a)((function(e){return{root:{display:"flex"},drawer:Object(M.a)({},e.breakpoints.up("md"),{width:300,flexShrink:0}),menuButton:Object(M.a)({left:e.spacing(2),top:e.spacing(2),position:"fixed",zIndex:e.zIndex.modal+1},e.breakpoints.up("md"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:Object(M.a)({background:"#212121",border:0,width:300},e.breakpoints.down("md"),{paddingTop:e.spacing(8)}),content:Object(M.a)({flexGrow:1,minWidth:1100},e.breakpoints.down("md"),{paddingTop:e.spacing(6)})}})),Oe=function(e){var t=e.Sidebar,n=e.Main,a=ge(),r=i.a.useState(!1),c=Object(s.a)(r,2),o=c[0],l=c[1],u=function(){l(!o)},d=i.a.createElement(t,null);return i.a.createElement("div",{className:a.root},i.a.createElement("div",{className:a.menuButton},i.a.createElement(me.a,{size:"small",color:o?"default":"secondary",onClick:u,"aria-label":"edit"},o?i.a.createElement(he.a,null):i.a.createElement(ye.a,null))),i.a.createElement("nav",{className:a.drawer},i.a.createElement(ve.a,{mdUp:!0,implementation:"css"},i.a.createElement(pe.a,{variant:"temporary",anchor:"left",open:o,onClose:u,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},d)),i.a.createElement(ve.a,{smDown:!0,implementation:"css"},i.a.createElement(pe.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},d))),i.a.createElement("main",{className:a.content},i.a.createElement(n,null)))},Ee=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.on("notesDetected",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=Object(s.a)(t,1),a=n[0],r=e.props.setPlayingNote;"function"===typeof r&&r(a)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"application"},i.a.createElement(se.a,{theme:de},i.a.createElement(Oe,{Sidebar:Z,Main:le})))}}]),t}(i.a.Component),Ne=Object(l.b)(null,(function(e){return{setPlayingNote:function(t){return e(T(t))}}}))(Ee);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=n(72),Se=n(58),we=n.n(Se);n(73);function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(n,!0).forEach((function(t){Object(M.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ke={playingNote:{name:"C",octave:3,cents:0},isMicActive:!1,scale:{name:g.MAJOR,key:b[0]}};ke.scale.scale=A(ke.scale.name,ke.scale.key);var _e=[{name:"E",octave:4},{name:"B",octave:3},{name:"G",octave:3},{name:"D",octave:3},{name:"A",octave:2},{name:"E",octave:2}],Pe={name:"C",octave:2},Ce=Object($.combineReducers)({playingNote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke.playingNote,t=arguments.length>1?arguments[1]:void 0;return t.type===E?t.payload:e},isMicActive:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke.isMicActive,t=arguments.length>1?arguments[1]:void 0;return t.type===N?t.payload:e},guitarStringsStartNotes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e;arguments.length>1&&arguments[1];return e},pianoStartNote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe;arguments.length>1&&arguments[1];return e},selectedScale:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me({},ke.scale),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var n=e.key,a=t.payload;return{key:n,name:a,scale:A(a,n)};case S:var r=e.name,i=t.payload;return{key:i,name:r,scale:A(r,i)};default:return e}}}),De=[we.a,je.a];var xe=$.applyMiddleware.apply(void 0,De);var Ie=xe($.createStore)(Ce),Re=function(){o.a.render(i.a.createElement(l.a,{store:Ie},i.a.createElement(Ne,null)),document.getElementById("root"))};Ie.subscribe(Re),Re(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[81,1,2]]]);
//# sourceMappingURL=main.20620215.chunk.js.map