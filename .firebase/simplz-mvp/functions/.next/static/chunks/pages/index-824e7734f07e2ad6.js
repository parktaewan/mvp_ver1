(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(8653)}])},8653:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return $}});var i=e(7297),r=e(5893),o=e(3030),c=e(285),l=e(6257),u=e(7294),s=e(4480),f=e(4486),a=e(5675),d=e.n(a);function h(){let n=(0,i.Z)(["\n  width: 100vw;\n"]);return h=function(){return n},n}let p=n=>{let t=(0,s.sJ)(f.nM),[e,i]=(0,s.FV)(f.jO),o=(0,s.sJ)(f.IU),[a,h]=(0,u.useState)([]),p=async()=>{let n=(0,l.JU)(c.db,t,"".concat("detail"+e)),i=await (0,l.QT)(n);i.exists()&&h(i.data()["".concat("sub"+o)])};return(0,u.useEffect)(()=>{p()},[o]),(0,r.jsx)(x,{children:a?a.map(n=>(0,r.jsx)(d(),{src:n,alt:"이미지",width:0,height:0,sizes:"100vw",style:{width:"100%",height:"auto"}})):(0,r.jsx)(r.Fragment,{children:"로딩중"})})},x=o.Z.div(h());var g=e(1163),m=e(501);function w(){let n=(0,i.Z)(["\n  width: 100vw;\n  height: calc(100vw / 10000 * 13231);\n\n  display: flex;\n  align-items: center;\n"]);return w=function(){return n},n}function y(n){return(0,r.jsx)(j,{children:(0,r.jsx)(d(),{src:n.url,alt:"이미지",width:0,height:0,sizes:"100vw",style:{width:"100%",height:"auto"}})})}let j=o.Z.div(w());var Z=e(5143);function v(){let n=(0,i.Z)(['\n  width: 60px;\n  height: 36px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-family: "NanumGothic";\n  font-weight: 400;\n']);return v=function(){return n},n}let k=n=>n.title===n.theme?(0,r.jsx)(b,{onClick:()=>{n.onClick("none")},style:{backgroundColor:"#000",color:"#fff"},children:n.title}):(0,r.jsx)(b,{onClick:()=>{n.onClick(n.title)},children:n.title}),b=o.Z.div(v());function C(){let n=(0,i.Z)(["\n  width: 100vw;\n  height: 36px;\n\n  margin-top: 1px;\n\n  display: flex;\n"]);return C=function(){return n},n}function z(){let n=(0,i.Z)(['\n  width: 60px;\n  height: 36px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-family: "NanumGothic";\n  font-weight: 400;\n\n  background-color: #000;\n  color: #fff;\n\n  margin-right: 1px;\n']);return z=function(){return n},n}let J=n=>{let t=(0,s.sJ)(f.nM),e=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.id-1;h(t),n.onClick(e,"".concat(n.title.split(".")[0]+"."+t))},i=(0,s.sJ)(f.jO),[o,a]=(0,u.useState)([]),[d,h]=(0,u.useState)(""),p=async()=>{let e=(0,l.JU)(c.db,t,"".concat("size"+i)),r=await (0,l.QT)(e);r.exists()&&a(r.data()[n.title.split(".")[0]])};return(0,u.useEffect)(()=>{p(),h(n.title.split(".")[1])},[]),(0,r.jsxs)(S,{children:["none"===n.title.split(".")[1]?(0,r.jsx)(_,{style:{backgroundColor:"#fff",color:"#000"},children:n.title.split(".")[0]}):(0,r.jsx)(_,{children:n.title.split(".")[0]}),o?o.map(n=>(0,r.jsx)(k,{title:n,theme:d,onClick:e})):(0,r.jsx)(r.Fragment,{})]})},S=o.Z.div(C()),_=o.Z.div(z());function A(){let n=(0,i.Z)(["\n  position: fixed;\n  background-color: #fff;\n\n  bottom: 0;\n\n  border-top: 1px solid #000;\n\n  width: 100vw;\n  height: 58px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return A=function(){return n},n}function I(){let n=(0,i.Z)(["\n  border-top: 1px solid #000;\n\n  width: 100vw;\n  height: 58px;\n\n  display: flex;\n  align-items: center;\n"]);return I=function(){return n},n}function E(){let n=(0,i.Z)(['\n  width: 100vw;\n  height: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-family: "NanumGothic";\n  font-weight: 400;\n']);return E=function(){return n},n}function F(){let n=(0,i.Z)(["\n  background-color: #fff;\n  position: fixed;\n  bottom: 0;\n\n  width: 100vw;\n  border-top: 1px solid #000;\n"]);return F=function(){return n},n}function N(){let n=(0,i.Z)(["\n  width: 100vw;\n  height: 36px;\n\n  margin-top: 1px;\n"]);return N=function(){return n},n}function O(){let n=(0,i.Z)(['\n  width: 60px;\n  height: 36px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-family: "NanumGothic";\n  font-weight: 400;\n']);return O=function(){return n},n}function M(){let n=(0,i.Z)(["\n  width: 110px;\n"]);return M=function(){return n},n}function T(){let n=(0,i.Z)(["\n  background-color: #000;\n  color: #fff;\n"]);return T=function(){return n},n}let U=()=>{let n=(0,s.sJ)(f.nM),[t,e]=(0,u.useState)("false"),[i,o]=(0,u.useState)([""]),l=(0,s.sJ)(f.jO),a=async()=>{let t=Z.Z.firestore.doc(c.db,n,"".concat("size"+l)),e=await Z.Z.firestore.getDoc(t);e.exists()&&o(e.data().SizeTitle)},d=(n,t)=>{let e=[];for(let r=0;r<i.length;r++)r===n?e.push(t):e.push(i[r]);o(e)},h=async t=>{let e=Z.Z.firestore.collection(c.db,n);await Z.Z.firestore.updateDoc(Z.Z.firestore.doc(e,"".concat("size"+l)),{SizeTitle:t}),await Z.Z.firestore.updateDoc(Z.Z.firestore.doc(e,"order"),{active:t})};(0,u.useEffect)(()=>{a()},[]);let p=0;return(0,r.jsx)(r.Fragment,{children:"false"===t?(0,r.jsx)(D,{onClick:()=>{a().then(()=>e("true"))},children:"구매하기"}):(0,r.jsxs)(L,{children:[(0,r.jsx)(Q,{children:(0,r.jsx)(P,{children:"사이즈 선택"})}),i?i.map(n=>(p+=1,(0,r.jsx)(J,{title:n,id:p,onClick:d},p))):(0,r.jsx)(r.Fragment,{}),(0,r.jsxs)(G,{children:[(0,r.jsx)(B,{onClick:()=>{h(i),e("false")},style:{backgroundColor:"#000",color:"#fff"},children:"장바구니 담기"}),(0,r.jsx)(B,{style:{backgroundColor:"#fff"},onClick:()=>{e("false")},children:"취소"})]})]})})},D=o.Z.div(A()),G=o.Z.div(I()),B=o.Z.div(E()),L=o.Z.div(F()),Q=o.Z.div(N()),V=o.Z.div(O()),P=(0,o.Z)(V)(M());function R(){let n=(0,i.Z)(["\n  display: inline-block;\n\n  width: 107px;\n  height: 100%;\n\n  background-color: #fff;\n"]);return R=function(){return n},n}(0,o.Z)(V)(T());let X=n=>{let[t,e]=(0,s.FV)(f.IU);return(0,r.jsx)(H,{onClick:()=>{e(n.id),console.log(t)},children:(0,r.jsx)(d(),{src:n.num,alt:"이미지",width:0,height:0,sizes:"100vw",style:{width:"100%",height:"auto"}})})},H=o.Z.div(R());function K(){let n=(0,i.Z)(["\n  height: 117px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n\n  margin-bottom: 64px;\n"]);return K=function(){return n},n}let W=()=>{let n=(0,s.sJ)(f.nM),[t,e]=(0,u.useState)(),[i,o]=(0,s.FV)(f.jO),a=async()=>{let t=(0,l.JU)(c.db,n,"".concat("image_"+i)),r=await (0,l.QT)(t);r.exists()&&e(r.data().sub)};(0,u.useEffect)(()=>{a()},[]);let d=0;return(0,r.jsx)(Y,{children:t?t.map(n=>(d+=1,(0,r.jsx)(X,{num:n,id:d.toString()},d))):(0,r.jsx)(r.Fragment,{children:"로딩중"})})},Y=o.Z.div(K());function q(){let n=(0,i.Z)(["\n  width: 100vw;\n  height: 60px;\n\n  display: flex;\n"]);return q=function(){return n},n}function $(){let n=(0,s.sJ)(f.nM),t=(0,g.useRouter)(),e=(0,s.sJ)(f.nM),[i,o]=(0,u.useState)(""),[a,d]=(0,s.FV)(f.jO),h=(0,s.sJ)(f.IU),x=async n=>{let t=(0,l.JU)(c.db,n,"".concat("image_"+a)),e=await (0,l.QT)(t);e.exists()&&o(e.data().main)};return((0,u.useEffect)(()=>{""===n?t.push("/login"):x(e)},[]),""===n)?(0,r.jsx)("div",{style:{backgroundColor:"#000",width:"100vw",height:"100vh"},children:"로딩중"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{}),(0,r.jsx)(y,{url:i}),(0,r.jsx)(W,{}),""===h?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(p,{id:h}),(0,r.jsx)(U,{})]})}o.Z.div(q())},4486:function(n,t,e){"use strict";e.d(t,{IU:function(){return o},Yf:function(){return u},cJ:function(){return l},fO:function(){return p},j1:function(){return a},jO:function(){return r},md:function(){return s},mk:function(){return h},nM:function(){return d},u1:function(){return c},zD:function(){return f}});var i=e(4480);let r=(0,i.cn)({key:"selectedMainAtom",default:"1"}),o=(0,i.cn)({key:"selectedSubAtom",default:""}),c=(0,i.cn)({key:"orderDataAtom",default:[]}),l=(0,i.cn)({key:"activeOrderListAtom",default:"1"}),u=(0,i.cn)({key:"orderCountAtom",default:[]}),s=(0,i.cn)({key:"shippingCountAtom",default:[]}),f=(0,i.cn)({key:"dcCountAtom",default:[]}),a=(0,i.cn)({key:"loginIdListAtom",default:[{id:"sanghyeon",pw:"sh123"}]}),d=(0,i.cn)({key:"activeLoginAtom",default:""}),h=(0,i.cn)({key:"adminAtom",default:!1}),p=(0,i.cn)({key:"activeRefundAtom",default:{}})},501:function(n,t,e){"use strict";var i=e(7297),r=e(5893),o=e(3030),c=e(1163);function l(){let n=(0,i.Z)(["\n  width: 100vw;\n  height: 60px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  background-color: #fff;\n"]);return l=function(){return n},n}function u(){let n=(0,i.Z)(["\n  width: 160px;\n  height: 60px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-family: 'NanumGothic';\n  font-weight: 900;\n  font-size: 26px;\n"]);return u=function(){return n},n}function s(){let n=(0,i.Z)(["\n  width: 130;\n\n  font-size: 16px;\n"]);return s=function(){return n},n}let f=()=>{let n=(0,c.useRouter)();return(0,r.jsxs)(a,{children:[(0,r.jsx)(d,{onClick:()=>n.push("/"),children:"SIMPLZ"}),(0,r.jsx)(h,{onClick:()=>n.push("/mypage"),children:"마이페이지"})]})},a=o.Z.div(l()),d=o.Z.div(u()),h=(0,o.Z)(d)(s());t.Z=f},285:function(n,t,e){"use strict";let i;e.d(t,{db:function(){return o}});var r=e(5503);e(6257);try{i=r.Z.getApp("app")}catch(n){i=r.Z.initializeApp({apiKey:"AIzaSyB55_8ne7msr90Ici6L3mUH7BzBpgTOeBI",authDomain:"simplz-mvp.firebaseapp.com",projectId:"simplz-mvp",storageBucket:"simplz-mvp.appspot.com",messagingSenderId:"400687742775",appId:"1:400687742775:web:485b9d0a5dacfa419b64b2",measurementId:"G-N153C4SE0W"},"app")}let o=r.Z.firestore(i)}},function(n){n.O(0,[972,724,834,292,782,675,143,774,888,179],function(){return n(n.s=5728)}),_N_E=n.O()}]);