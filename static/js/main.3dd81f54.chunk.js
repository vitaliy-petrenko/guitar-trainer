(this["webpackJsonpreact-redux"]=this["webpackJsonpreact-redux"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),c=a(14),s=(a(96),a(42)),l=a(25),u=a(26),p=a(30),m=a(27),d=a(31),v=(a(97),a(71)),f=a.n(v),O=a(17);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var b,g,h,E,j=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],N={LYDIAN:[2,2,2,1,2,2,1],MAJOR:[2,2,1,2,2,2,1],MIXOLYDIAN:[2,2,1,2,2,1,2],DORIAN:[2,1,2,2,2,1,2]},M={MINOR:[2,1,2,2,1,2,2],PHRIGIAN:[1,2,2,2,1,2,2],LOCRIAN:[1,2,2,1,2,2,2]},w=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({SHOW_ALL:Array(12).fill(1)},N,{},M,{HARMONIC_MAJOR:[2,2,1,2,1,3,1],MELODIC_MAJOR:[2,2,1,2,1,2,2],MAJOR_PENTATONIC:[2,2,3,2,3],MAJOR_BLUES:[2,1,1,3,2,3],HARMONIC_MINOR:[2,1,2,2,1,3,1],MELODIC_MINOR:[2,1,2,2,2,2,1],MINOR_PENTATONIC:[3,2,2,3,2],MINOR_BLUES:[3,2,1,1,3,2]}),S=Object.keys(w).reduce((function(e,t){return e[t]=t,e}),{}),k={MAJOR:"Major/Ionian",MINOR:"Minor/Aeolian"},A=Object.keys(w).reduce((function(e,t){return e[t]=k[t]?k[t]:t.split("_").map((function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()})).join(" "),e}),{}),_="SET_PLAYING_NOTE",P="SET_MIC_LISTEN",C="SET_SCALE_NAME",D="SET_SCALE_KEY",x=new(function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).middleA=440,e.semitone=69,e.bufferSize=8192,e._initGetUserMedia(),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"_initGetUserMedia",value:function(){if(window.AudioContext=window.AudioContext||window.webkitAudioContext,!window.AudioContext)return alert("AudioContext not supported");void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t||alert("getUserMedia is not implemented in this browser"),new Promise((function(a,n){t.call(navigator,e,a,n)}))})}},{key:"startRecord",value:function(){var e=this;navigator.mediaDevices.getUserMedia({audio:!0}).then((function(t){e.audioContext.createMediaStreamSource(t).connect(e.analyser),e.analyser.connect(e.scriptProcessor),e.scriptProcessor.connect(e.audioContext.destination),e.scriptProcessor.addEventListener("audioprocess",(function(t){var a=e.pitchDetector.do(t.inputBuffer.getChannelData(0));if(a){var n=e.getNote(a),r={name:j[n%12],value:n,cents:e.getCents(a,n),octave:Math.floor(n/12)-1,frequency:a};n>=30&&e.emit("notesDetected",[r])}}))})).catch((function(e){alert(e.name+": "+e.message)}))}},{key:"init",value:function(){var e=this;this.audioContext=new window.AudioContext,this.analyser=this.audioContext.createAnalyser(),this.scriptProcessor=this.audioContext.createScriptProcessor(this.bufferSize),window.Aubio().then((function(t){e.pitchDetector=new t.Pitch("default",e.bufferSize,1,e.audioContext.sampleRate),e.startRecord()}))}},{key:"getNote",value:function(e){var t=Math.log(e/this.middleA)/Math.log(2)*12;return Math.round(t)+this.semitone}},{key:"getStandardFrequency",value:function(e){return this.middleA*Math.pow(2,(e-this.semitone)/12)}},{key:"getCents",value:function(e,t){return Math.floor(1200*Math.log(e/this.getStandardFrequency(t))/Math.log(2))}},{key:"play",value:function(e){this.oscillator||(this.oscillator=this.audioContext.createOscillator(),this.oscillator.connect(this.audioContext.destination),this.oscillator.start()),this.oscillator.frequency.value=e}},{key:"stop",value:function(){this.oscillator.stop(),this.oscillator=null}}]),t}(f.a)),I=(a(98),a(137)),R=a(148),L=a(135),T=a(147),z=a(143),U=a(72),B=a.n(U),G=function(e){var t=e.options,a=e.onSelect,n=e.selectedValue,i=e.title,o=t.map((function(e){var t=e.name,a=e.value;return r.a.createElement(R.a,{key:a,value:a},t)})),c=B.a.v4();return r.a.createElement(L.a,{fullWidth:!0,variant:"filled"},r.a.createElement(T.a,{htmlFor:c},i),r.a.createElement(z.a,{value:n,inputProps:{id:c},onChange:function(e){a(e.target.value)}},o))},J=j.map((function(e){return{name:e,value:e}})),W=Object.entries(A).map((function(e){var t=Object(s.a)(e,2),a=t[0];return{name:t[1],value:a}})),F=function(e){var t=e.selectedScale,a=e.onSelectKey,n=e.onSelectScale;return r.a.createElement(I.a,{container:!0,spacing:2},r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(G,{selectedValue:t.key,options:J,onSelect:a,title:"Select key"})),r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(G,{selectedValue:t.name,options:W,onSelect:n,title:"Select scale"})))},K=Object(c.b)((function(e){return{selectedScale:e.selectedScale}}),(function(e){return{onSelectKey:function(t){return e({type:D,payload:t})},onSelectScale:function(t){return e({type:C,payload:t})}}}))(F),q=(a(101),a(102),function(e){var t=e.name,a=e.octave,n=e.isSimilar,i=void 0!==n&&n,o=e.isActive,c=void 0===o||o,s=e.isInScale,l=void 0===s||s,u=e.isKey,p=void 0!==u&&u,m=["note","note--".concat(t[0].toLowerCase()).concat("#"===t[1]?"-diez":"")],d="".concat(t).concat(a||"");return i&&m.push("is-similar"),c&&m.push("is-active"),l||m.push("is-disabled"),p&&m.push("is-key"),r.a.createElement("div",{className:m.join(" ")},d)}),H=function(e){var t=["tuner__arrow"];return e.isActive&&t.push("is-active"),r.a.createElement("div",{className:t.join(" ")})},Y=function(e){var t=e.playingNote;return r.a.createElement("div",{className:"tuner"},r.a.createElement("div",{className:"tuner__col"},r.a.createElement(H,{isActive:t.cents<-6})),r.a.createElement("div",{className:"tuner__col tuner__note"},r.a.createElement(q,{isActive:t.cents>=-6&&t.cents<=6,name:t.name,octave:t.octave})),r.a.createElement("div",{className:"tuner__col"},r.a.createElement(H,{isActive:t.cents>6})))},V=a(138),X=function(e){var t=e.start;return r.a.createElement(V.a,{fullWidth:!0,variant:"contained",color:"secondary",size:"large",onClick:t},r.a.createElement("span",{"aria-label":"microphone",role:"img"},"\ud83c\udfa4"),"\xa0Enable Recording")},$=a(140),Q=a(136),Z=a(139),ee=function(e){var t=e.children;return r.a.createElement(Z.a,{variant:"h6",gutterBottom:!0},t)},te=Object($.a)((function(e){return{paper:{padding:e.spacing(2),color:e.palette.text.secondary}}})),ae=function(e){var t=e.title,a=e.children,n=te();return r.a.createElement("div",{className:"sidebar__item"},r.a.createElement(Q.a,{className:n.paper},t&&r.a.createElement(ee,null,t),a))},ne=function(e){var t=e.isMicActive,a=e.playingNote,n=e.switchMic;return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"sidebar__in"},!t&&r.a.createElement(X,{start:function(){n(!0),x.init()}}),r.a.createElement(ae,{title:"Mini Tuner"},t?r.a.createElement(Y,{playingNote:a}):r.a.createElement(Z.a,{variant:"subtitle2",color:"error"},"Enable recording to use tuner")),r.a.createElement(ae,{title:"Scale Settings"},r.a.createElement(K,null))))},re=Object(c.b)((function(e){return{isMicActive:e.isMicActive,playingNote:e.playingNote}}),(function(e){return{switchMic:function(t){return e(function(e){return{type:P,payload:e}}(t))}}}))(ne),ie=a(54),oe=(a(103),Object(c.b)((function(e,t){var a=e.playingNote,n=e.selectedScale,r=e.isMicActive,i=t.name,o=t.octave,c=r&&a&&a.name===i;return{isSimilar:c,isActive:c&&(null===o||a.octave===o),isInScale:n.notes.includes(i),isKey:n.key===i}}))(q)),ce=a(55),se=function(e){var t=e.note;return r.a.createElement("div",{className:"guitar__cell"},r.a.createElement("div",{className:"guitar__note"},r.a.createElement(oe,t)))},le=function(e){var t=e.note;return r.a.createElement("div",{className:"guitar__zero"},r.a.createElement("div",{className:"guitar__note"},r.a.createElement(oe,t)))},ue=(h=g=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getMarkup",value:function(e){for(var t=e.frets,a=e.startNotes,n=[],i=0;i<6;i++){for(var o=[],c=a[i],s=j.indexOf(c.name),l=t+1,u=c.octave||0,p=0;p<l;p++){var m=(p+s)%j.length,d={name:j[m],octave:0===m?++u:u};0===p?o.push(r.a.createElement(le,{note:d,key:p})):o.push(r.a.createElement(se,{note:d,key:p}))}n.push(r.a.createElement("div",{key:i,className:"guitar__string"},o))}return n}},{key:"render",value:function(){var e=this.props,t=e.frets,a=e.startNotes,n=this.getMarkup({frets:t,startNotes:a});return r.a.createElement("div",{className:"guitar"},n)}}]),t}(r.a.Component),g.defaultProps={octaves:3},b=h,Object(ie.a)(b.prototype,"getMarkup",[ce.memoize],Object.getOwnPropertyDescriptor(b.prototype,"getMarkup"),b.prototype),b);a(104);function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var me=function(e){var t=e.name,a={name:t,octave:e.octave};return r.a.createElement("div",{className:"piano__key","data-name":t},r.a.createElement("div",{className:"piano__note"},r.a.createElement(oe,a)))},de=(E=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getMarkup",value:function(e){for(var t=e.startNote,a=e.octaves,n=[],i=12*a,o=t.octave||2,c=0,s=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t);c<i;c++){var l=j.indexOf(s.name);if(n.push(r.a.createElement(me,{key:c,name:s.name,octave:1===a?null:o})),~l){var u=(l+1)%j.length;0===u&&o++,s.name=j[u]}}return n}},{key:"render",value:function(){var e=this.props,t=e.octaves,a=e.startNote,n=this.getMarkup({octaves:t,startNote:a});return r.a.createElement("div",{className:"piano"},n)}}]),t}(r.a.Component),Object(ie.a)(E.prototype,"getMarkup",[ce.memoize],Object.getOwnPropertyDescriptor(E.prototype,"getMarkup"),E.prototype),E),ve=function(e){var t=e.guitarOpenStrings,a=e.pianoStartNote;e.selectedScale;return r.a.createElement("div",{className:"application__main"},r.a.createElement("div",{className:"board-container"},r.a.createElement(ue,{frets:18,startNotes:t})),r.a.createElement("div",{className:"board-container"},r.a.createElement(de,{octaves:4,startNote:a})))},fe=Object(c.b)((function(e){return{guitarOpenStrings:e.guitarOpenStrings,pianoStartNote:e.pianoStartNote,selectedScale:e.selectedScale}}))(ve),Oe=a(142),ye=a(80),be=Object(ye.a)({palette:{type:"dark"}}),ge=a(141),he=a(145),Ee=a(146),je=a(76),Ne=a.n(je),Me=a(74),we=a.n(Me),Se=a(75),ke=a.n(Se),Ae=Object($.a)((function(e){return{root:{display:"flex"},drawer:Object(O.a)({},e.breakpoints.up("md"),{width:240,flexShrink:0}),menuButton:Object(O.a)({left:e.spacing(2),top:e.spacing(2),position:"fixed",zIndex:e.zIndex.modal+1},e.breakpoints.up("md"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:Object(O.a)({background:"#212121",border:0,width:240},e.breakpoints.down("md"),{paddingTop:e.spacing(8)}),content:Object(O.a)({flexGrow:1,minWidth:1100},e.breakpoints.down("md"),{paddingTop:e.spacing(6)})}})),_e=function(e){var t,a=e.Sidebar,n=e.Main,i=e.isMicActive,o=Ae(),c=r.a.useState(!1),l=Object(s.a)(c,2),u=l[0],p=l[1],m=function(){return p(!u)},d=r.a.createElement(a,null),v=!1;return u?t=r.a.createElement(we.a,null):i?t=r.a.createElement(Ne.a,null):(t=r.a.createElement(ke.a,null),v=!0),r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.menuButton},r.a.createElement(ge.a,{size:"small",color:u?"default":"secondary",className:"mobile-menu-icon".concat(v?" show-mic":""),onClick:m,"aria-label":"edit"},t)),r.a.createElement("nav",{className:o.drawer},r.a.createElement(he.a,{mdUp:!0,implementation:"css"},r.a.createElement(Ee.a,{variant:"temporary",anchor:"left",open:u,onClose:m,classes:{paper:o.drawerPaper},ModalProps:{keepMounted:!0}},d)),r.a.createElement(he.a,{smDown:!0,implementation:"css"},r.a.createElement(Ee.a,{classes:{paper:o.drawerPaper},variant:"permanent",open:!0},d))),r.a.createElement("main",{className:o.content},r.a.createElement(n,null)))},Pe=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.on("notesDetected",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=Object(s.a)(t,1),n=a[0],r=e.props.setPlayingNote;"function"===typeof r&&r(n)}))}},{key:"render",value:function(){var e=this.props.isMicActive;return r.a.createElement("div",{className:"application"},r.a.createElement(Oe.a,{theme:be},r.a.createElement(_e,{Sidebar:re,Main:fe,isMicActive:e})))}}]),t}(r.a.Component),Ce=Object(c.b)((function(e){return{isMicActive:e.isMicActive}}),(function(e){return{setPlayingNote:function(t){return e(function(e){return{type:_,payload:e}}(t))}}}))(Pe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var De=a(24),xe=a(77),Ie=(a(78),a(79),function(e,t){for(var a=w[e],n=[t],r=1;r<a.length;r++){var i=(j.indexOf(n[r-1])+a[r-1])%j.length;n.push(j[i])}return n});function Re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Le(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Re(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Re(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Te={playingNote:{name:"C",octave:3,cents:0},isMicActive:!1,scale:{name:S.MAJOR,key:j[0],notes:Ie(S.MAJOR,j[0])},pianoStartNote:{name:"C",octave:2},guitarOpenStrings:[{name:"E",octave:4},{name:"B",octave:3},{name:"G",octave:3},{name:"D",octave:3},{name:"A",octave:2},{name:"E",octave:2}]},ze=Object(De.combineReducers)({playingNote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te.playingNote,t=arguments.length>1?arguments[1]:void 0;return t.type===_?t.payload:e},isMicActive:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te.isMicActive,t=arguments.length>1?arguments[1]:void 0;return t.type===P?t.payload:e},guitarOpenStrings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te.guitarOpenStrings;return e},pianoStartNote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te.pianoStartNote;return e},selectedScale:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le({},Te.scale),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:var a=e.key,n=t.payload;return{key:a,name:n,notes:Ie(n,a)};case D:var r=e.name,i=t.payload;return{key:i,name:r,notes:Ie(r,i)};default:return e}}}),Ue=[xe.a];var Be=De.applyMiddleware.apply(void 0,Ue);var Ge=Be(De.createStore)(ze),Je=function(){o.a.render(r.a.createElement(c.a,{store:Ge},r.a.createElement(Ce,null)),document.getElementById("root"))};Ge.subscribe(Je),Je(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},87:function(e,t,a){e.exports=a(106)},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.3dd81f54.chunk.js.map