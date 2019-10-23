(this["webpackJsonpreact-redux"]=this["webpackJsonpreact-redux"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),o=a(20),l=(a(94),a(36)),s=a(45),u=a(46),m=a(52),d=a(47),p=a(53),v=(a(95),a(69)),f=a.n(v),y=a(16);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var O=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],g={LYDIAN:[2,2,2,1,2,2,1],MAJOR:[2,2,1,2,2,2,1],MIXOLYDIAN:[2,2,1,2,2,1,2],DORIAN:[2,1,2,2,2,1,2]},b={MINOR:[2,1,2,2,1,2,2],PHRIGIAN:[1,2,2,2,1,2,2],LOCRIAN:[1,2,2,1,2,2,2]},E=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({SHOW_ALL:Array(12).fill(1)},g,{},b,{HARMONIC_MAJOR:[2,2,1,2,1,3,1],MELODIC_MAJOR:[2,2,1,2,1,2,2],MAJOR_PENTATONIC:[2,2,3,2,3],MAJOR_BLUES:[2,1,1,3,2,3],HARMONIC_MINOR:[2,1,2,2,1,3,1],MELODIC_MINOR:[2,1,2,2,2,2,1],MINOR_PENTATONIC:[3,2,2,3,2],MINOR_BLUES:[3,2,1,1,3,2]}),N=Object.keys(E).reduce((function(e,t){return e[t]=t,e}),{}),w={MAJOR:"Major/Ionian",MINOR:"Minor/Aeolian"},j=Object.keys(E).reduce((function(e,t){return e[t]=w[t]?w[t]:t.split("_").map((function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()})).join(" "),e}),{}),S="SET_PLAYING_NOTE",M="SET_MIC_LISTEN",A="SET_SCALE_NAME",_="SET_SCALE_KEY",k=new(function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).middleA=440,e.semitone=69,e.bufferSize=8192,e._initGetUserMedia(),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"_initGetUserMedia",value:function(){if(window.AudioContext=window.AudioContext||window.webkitAudioContext,!window.AudioContext)return alert("AudioContext not supported");void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t||alert("getUserMedia is not implemented in this browser"),new Promise((function(a,n){t.call(navigator,e,a,n)}))})}},{key:"startRecord",value:function(){var e=this;navigator.mediaDevices.getUserMedia({audio:!0}).then((function(t){e.audioContext.createMediaStreamSource(t).connect(e.analyser),e.analyser.connect(e.scriptProcessor),e.scriptProcessor.connect(e.audioContext.destination),e.scriptProcessor.addEventListener("audioprocess",(function(t){var a=e.pitchDetector.do(t.inputBuffer.getChannelData(0));if(a){var n=e.getNote(a),r={name:O[n%12],value:n,cents:e.getCents(a,n),octave:Math.floor(n/12)-1,frequency:a};n>=30&&e.emit("notesDetected",[r])}}))})).catch((function(e){alert(e.name+": "+e.message)}))}},{key:"init",value:function(){var e=this;this.audioContext=new window.AudioContext,this.analyser=this.audioContext.createAnalyser(),this.scriptProcessor=this.audioContext.createScriptProcessor(this.bufferSize),window.Aubio().then((function(t){e.pitchDetector=new t.Pitch("default",e.bufferSize,1,e.audioContext.sampleRate),e.startRecord()}))}},{key:"getNote",value:function(e){var t=Math.log(e/this.middleA)/Math.log(2)*12;return Math.round(t)+this.semitone}},{key:"getStandardFrequency",value:function(e){return this.middleA*Math.pow(2,(e-this.semitone)/12)}},{key:"getCents",value:function(e,t){return Math.floor(1200*Math.log(e/this.getStandardFrequency(t))/Math.log(2))}},{key:"play",value:function(e){this.oscillator||(this.oscillator=this.audioContext.createOscillator(),this.oscillator.connect(this.audioContext.destination),this.oscillator.start()),this.oscillator.frequency.value=e}},{key:"stop",value:function(){this.oscillator.stop(),this.oscillator=null}}]),t}(f.a)),P=(a(96),a(138)),C=(a(97),a(98),function(e){var t=e.name,a=e.octave,n=e.isSimilar,i=void 0!==n&&n,c=e.isActive,o=void 0===c||c,l=e.isInScale,s=void 0===l||l,u=e.isKey,m=void 0!==u&&u,d=["note","note--".concat(t[0].toLowerCase()).concat("#"===t[1]?"-diez":"")],p="".concat(t).concat(a||"");return i&&d.push("is-similar"),o&&d.push("is-active"),s||d.push("is-disabled"),m&&d.push("is-key"),r.a.createElement("div",{className:d.join(" ")},p)}),D=function(e){var t=["tuner__arrow"];return e.isActive&&t.push("is-active"),r.a.createElement("div",{className:t.join(" ")})},x=function(e){var t=e.playingNote;return r.a.createElement("div",{className:"tuner"},r.a.createElement("div",{className:"tuner__col"},r.a.createElement(D,{isActive:t.cents<-10})),r.a.createElement("div",{className:"tuner__col tuner__note"},r.a.createElement(C,{isActive:t.cents>=-10&&t.cents<=10,name:t.name,octave:t.octave})),r.a.createElement("div",{className:"tuner__col"},r.a.createElement(D,{isActive:t.cents>10})))},I=a(131),R=function(e){var t=e.start;return r.a.createElement(I.a,{fullWidth:!0,variant:"contained",color:"secondary",onClick:t},r.a.createElement("span",{"aria-label":"microphone",role:"img"},"\ud83c\udfa4"),"\xa0Enable Recording")},L=a(135),T=a(136),U=a(134),B=function(e){var t=e.children;return r.a.createElement(U.a,{variant:"h6",gutterBottom:!0},t)},G=Object(L.a)((function(e){return{paper:{padding:e.spacing(2),color:e.palette.text.secondary}}})),J=function(e){var t=e.title,a=e.children,n=G();return r.a.createElement("div",{className:"sidebar__item"},r.a.createElement(T.a,{className:n.paper},r.a.createElement(B,null,t),a))},z=a(146),W=a(137),F=a(147),K=a(141),q=a(71),H=a.n(q),Y=function(e){var t=e.options,a=e.onSelect,n=e.selectedValue,i=e.title,c=t.map((function(e){var t=e.name,a=e.value;return r.a.createElement(z.a,{key:a,value:a},t)})),o=H.a.v4();return r.a.createElement(W.a,{fullWidth:!0,variant:"filled"},r.a.createElement(F.a,{htmlFor:o},i),r.a.createElement(K.a,{value:n,inputProps:{id:o},onChange:function(e){a(e.target.value)}},c))},V=O.map((function(e){return{name:e,value:e}})),X=Object.entries(j).map((function(e){var t=Object(l.a)(e,2),a=t[0];return{name:t[1],value:a}})),$=function(e){var t=e.isMicActive,a=e.selectedScale,n=e.playingNote,i=e.switchMic,c=e.onSelectKey,o=e.onSelectScale;return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"sidebar__in"},r.a.createElement(J,{title:"Mini Tuner"},t?r.a.createElement(x,{playingNote:n}):r.a.createElement(R,{start:function(){i(!0),k.init()}})),r.a.createElement(J,{title:"Scale Settings"},r.a.createElement(P.a,{container:!0,spacing:2},r.a.createElement(P.a,{item:!0,xs:12},r.a.createElement(Y,{selectedValue:a.key,options:V,onSelect:c,title:"Select key"})),r.a.createElement(P.a,{item:!0,xs:12},r.a.createElement(Y,{selectedValue:a.name,options:X,onSelect:o,title:"Select scale"}))))))},Q=Object(o.b)((function(e){return{isMicActive:e.isMicActive,selectedScale:e.selectedScale,playingNote:e.playingNote}}),(function(e){return{onSelectKey:function(t){return e({type:_,payload:t})},onSelectScale:function(t){return e({type:A,payload:t})},switchMic:function(t){return e(function(e){return{type:M,payload:e}}(t))}}}))($),Z=(a(101),Object(o.b)((function(e,t){var a=e.playingNote,n=e.selectedScale,r=e.isMicActive,i=t.name,c=t.octave,o=r&&a&&a.name===i;return{isSimilar:o,isActive:o&&(null===c||a.octave===c),isInScale:n.notes.includes(i),isKey:n.key===i}}))(C)),ee=function(e){var t=e.note;return r.a.createElement("div",{className:"guitar__cell"},r.a.createElement("div",{className:"guitar__note"},r.a.createElement(Z,t)))},te=function(e){var t=e.note;return r.a.createElement("div",{className:"guitar__zero"},r.a.createElement("div",{className:"guitar__note"},r.a.createElement(Z,t)))},ae=function(e){for(var t=e.frets,a=e.startNotes,n=[],i=0;i<6;i++){for(var c=[],o=a[i],l=O.indexOf(o.name),s=t+1,u=o.octave||0,m=0;m<s;m++){var d=(m+l)%O.length,p={name:O[d],octave:0===d?++u:u};0===m?c.push(r.a.createElement(te,{note:p,key:m})):c.push(r.a.createElement(ee,{note:p,key:m}))}n.push(r.a.createElement("div",{key:i,className:"guitar__string"},c))}return r.a.createElement("div",{className:"guitar"},n)};a(102);function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var re=function(e){var t={name:e.name,octave:e.octave};return r.a.createElement("div",{className:"piano__key"},r.a.createElement("div",{className:"piano__note"},r.a.createElement(Z,t)))},ie=function(e){for(var t=e.octaves,a=void 0===t?3:t,n=[],i=12*a,c=0,o=0,l=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.startNote);c<i;c++){var s=O.indexOf(l.name);if(o=l.octave?l.octave:o,n.push(r.a.createElement(re,{key:c,name:l.name,octave:1===a?null:o})),~s){var u=(s+1)%O.length;0===u&&o++,l.name=O[u]}}return r.a.createElement("div",{className:"piano"},n)},ce=function(e){var t=e.guitarOpenStrings,a=e.pianoStartNote;e.selectedScale;return r.a.createElement("div",{className:"application__main"},r.a.createElement("div",{className:"board-container"},r.a.createElement(ae,{frets:18,startNotes:t})),r.a.createElement("div",{className:"board-container"},r.a.createElement(ie,{octaves:4,startNote:a})))},oe=Object(o.b)((function(e){return{guitarOpenStrings:e.guitarOpenStrings,pianoStartNote:e.pianoStartNote,selectedScale:e.selectedScale}}))(ce),le=a(140),se=a(78),ue=Object(se.a)({palette:{type:"dark"}}),me=a(139),de=a(143),pe=a(144),ve=a(74),fe=a.n(ve),ye=a(72),he=a.n(ye),Oe=a(73),ge=a.n(Oe),be=Object(L.a)((function(e){return{root:{display:"flex"},drawer:Object(y.a)({},e.breakpoints.up("md"),{width:240,flexShrink:0}),menuButton:Object(y.a)({left:e.spacing(2),top:e.spacing(2),position:"fixed",zIndex:e.zIndex.modal+1},e.breakpoints.up("md"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:Object(y.a)({background:"#212121",border:0,width:240},e.breakpoints.down("md"),{paddingTop:e.spacing(8)}),content:Object(y.a)({flexGrow:1,minWidth:1100},e.breakpoints.down("md"),{paddingTop:e.spacing(6)})}})),Ee=function(e){var t,a=e.Sidebar,n=e.Main,i=e.isMicActive,c=be(),o=r.a.useState(!1),s=Object(l.a)(o,2),u=s[0],m=s[1],d=function(){return m(!u)},p=r.a.createElement(a,null),v=!1;return u?t=r.a.createElement(he.a,null):i?t=r.a.createElement(fe.a,null):(t=r.a.createElement(ge.a,null),v=!0),r.a.createElement("div",{className:c.root},r.a.createElement("div",{className:c.menuButton},r.a.createElement(me.a,{size:"small",color:u?"default":"secondary",className:"mobile-menu-icon".concat(v?" show-mic":""),onClick:d,"aria-label":"edit"},t)),r.a.createElement("nav",{className:c.drawer},r.a.createElement(de.a,{mdUp:!0,implementation:"css"},r.a.createElement(pe.a,{variant:"temporary",anchor:"left",open:u,onClose:d,classes:{paper:c.drawerPaper},ModalProps:{keepMounted:!0}},p)),r.a.createElement(de.a,{smDown:!0,implementation:"css"},r.a.createElement(pe.a,{classes:{paper:c.drawerPaper},variant:"permanent",open:!0},p))),r.a.createElement("main",{className:c.content},r.a.createElement(n,null)))},Ne=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.on("notesDetected",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=Object(l.a)(t,1),n=a[0],r=e.props.setPlayingNote;"function"===typeof r&&r(n)}))}},{key:"render",value:function(){var e=this.props.isMicActive;return r.a.createElement("div",{className:"application"},r.a.createElement(le.a,{theme:ue},r.a.createElement(Ee,{Sidebar:Q,Main:oe,isMicActive:e})))}}]),t}(r.a.Component),we=Object(o.b)((function(e){return{isMicActive:e.isMicActive}}),(function(e){return{setPlayingNote:function(t){return e(function(e){return{type:S,payload:e}}(t))}}}))(Ne);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=a(24),Se=a(75),Me=(a(76),a(77),function(e,t){for(var a=E[e],n=[t],r=1;r<a.length;r++){var i=(O.indexOf(n[r-1])+a[r-1])%O.length;n.push(O[i])}return n});function Ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _e(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ae(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ae(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ke={playingNote:{name:"C",octave:3,cents:0},isMicActive:!1,scale:{name:N.MAJOR,key:O[0],notes:Me(N.MAJOR,O[0])}},Pe=[{name:"E",octave:4},{name:"B",octave:3},{name:"G",octave:3},{name:"D",octave:3},{name:"A",octave:2},{name:"E",octave:2}],Ce={name:"C",octave:2},De=Object(je.combineReducers)({playingNote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke.playingNote,t=arguments.length>1?arguments[1]:void 0;return t.type===S?t.payload:e},isMicActive:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke.isMicActive,t=arguments.length>1?arguments[1]:void 0;return t.type===M?t.payload:e},guitarOpenStrings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe;arguments.length>1&&arguments[1];return e},pianoStartNote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce;arguments.length>1&&arguments[1];return e},selectedScale:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e({},ke.scale),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:var a=e.key,n=t.payload;return{key:a,name:n,notes:Me(n,a)};case _:var r=e.name,i=t.payload;return{key:i,name:r,notes:Me(r,i)};default:return e}}}),xe=[Se.a];var Ie=je.applyMiddleware.apply(void 0,xe);var Re=Ie(je.createStore)(De),Le=function(){c.a.render(r.a.createElement(o.a,{store:Re},r.a.createElement(we,null)),document.getElementById("root"))};Re.subscribe(Le),Le(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},85:function(e,t,a){e.exports=a(104)},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.7c9b65ac.chunk.js.map