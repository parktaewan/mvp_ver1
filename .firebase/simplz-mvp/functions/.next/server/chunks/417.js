"use strict";
exports.id = 417;
exports.ids = [417];
exports.modules = {

/***/ 417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_dataAtom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(486);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(260);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);






const DCItem = (props)=>{
    const setRefundData = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useSetRecoilState)(_atoms_dataAtom__WEBPACK_IMPORTED_MODULE_1__/* .activeRefundAtom */ .fO);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const onClick = (title)=>{
        setRefundData({
            title: title,
            url: props.url,
            brand: props.brand,
            name: props.title
        });
        router.push("/mypage/refund");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LeftWrapper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    src: props.url,
                    alt: "이미지",
                    width: 0,
                    height: 0,
                    sizes: "100vh",
                    style: {
                        width: "auto",
                        height: "100%"
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RightWrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BrandText, {
                        children: props.brand
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TitleText, {
                        children: props.title
                    }),
                    props.refund === "환불" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SizeBox, {
                        style: {
                            backgroundColor: "#000",
                            color: "#fff"
                        },
                        children: "환불"
                    }) : props.refund === "교환" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SizeBox, {
                        style: {
                            backgroundColor: "#000",
                            color: "#fff"
                        },
                        children: "교환"
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SizeWrapper, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SizeBox, {
                                onClick: ()=>{
                                    onClick("환불");
                                },
                                children: "환불"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SizeBox, {
                                onClick: ()=>{
                                    onClick("교환");
                                },
                                children: "교환"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SizeBox, {
                                children: "확정"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const Container = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  width: 100vw;
  height: 80px;

  border-bottom: 1px solid #d4d4d4;

  display: grid;
  grid-template-columns: 100px 3fr;
`;
const LeftWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80px;
`;
const RightWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  padding: 10px 0px;

  display: flex;
  flex-direction: column;
  gap: 6px;

  overflow: hidden;
`;
const BrandText = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  font-family: "NanumGothic";
  font-weight: 400;
  font-size: 12px;
`;
const TitleText = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(BrandText)`
  font-size: 14px;
  font-weight: 700;
  height: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const SizeWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  gap: 6px;
`;
const SizeBox = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  font-family: "NanumGothic";
  font-weight: 400;
  color: #000;
  width: 50px;
  height: 21px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #000;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DCItem);


/***/ })

};
;