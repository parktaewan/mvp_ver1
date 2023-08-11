"use strict";
exports.id = 486;
exports.ids = [486];
exports.modules = {

/***/ 486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IU": () => (/* binding */ selectedSubAtom),
/* harmony export */   "Yf": () => (/* binding */ orderCountAtom),
/* harmony export */   "cJ": () => (/* binding */ activeOrderListAtom),
/* harmony export */   "fO": () => (/* binding */ activeRefundAtom),
/* harmony export */   "j1": () => (/* binding */ loginIdListAtom),
/* harmony export */   "jO": () => (/* binding */ selectedMainAtom),
/* harmony export */   "md": () => (/* binding */ shippingCountAtom),
/* harmony export */   "mk": () => (/* binding */ adminAtom),
/* harmony export */   "nM": () => (/* binding */ activeLoginAtom),
/* harmony export */   "u1": () => (/* binding */ orderDataAtom),
/* harmony export */   "zD": () => (/* binding */ dcCountAtom)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const selectedMainAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "selectedMainAtom",
    default: "1"
});
const selectedSubAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "selectedSubAtom",
    default: ""
});
const orderDataAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "orderDataAtom",
    default: []
});
const activeOrderListAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "activeOrderListAtom",
    default: "1"
});
const orderCountAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "orderCountAtom",
    default: []
});
const shippingCountAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "shippingCountAtom",
    default: []
});
const dcCountAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "dcCountAtom",
    default: []
});
const loginIdListAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "loginIdListAtom",
    default: [
        {
            id: "sanghyeon",
            pw: "sh123"
        }
    ]
});
const activeLoginAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "activeLoginAtom",
    default: ""
});
const adminAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "adminAtom",
    default: false
});
const activeRefundAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "activeRefundAtom",
    default: {}
});



/***/ })

};
;