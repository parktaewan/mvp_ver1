"use strict";
exports.id = 208;
exports.ids = [208];
exports.modules = {

/***/ 501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const Header = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                onClick: ()=>router.push("/"),
                children: "SIMPLZ"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubTitle, {
                onClick: ()=>router.push("/mypage"),
                children: "마이페이지"
            })
        ]
    });
};
const Container = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  width: 100vw;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
`;
const Title = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  width: 160px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'NanumGothic';
  font-weight: 900;
  font-size: 26px;
`;
const SubTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(Title)`
  width: 130;

  font-size: 16px;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* unused harmony export app */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(324);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
// Import the functions you need from the SDKs you need


let app;
const firebaseConfig = {
    apiKey: "AIzaSyB55_8ne7msr90Ici6L3mUH7BzBpgTOeBI",
    authDomain: "simplz-mvp.firebaseapp.com",
    projectId: "simplz-mvp",
    storageBucket: "simplz-mvp.appspot.com",
    messagingSenderId: "400687742775",
    appId: "1:400687742775:web:485b9d0a5dacfa419b64b2",
    measurementId: "G-N153C4SE0W"
};
try {
    app = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().getApp("app");
} catch (e) {
    app = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig, "app");
}
const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore(app);


/***/ })

};
;