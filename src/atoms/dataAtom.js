import { atom } from "recoil";

const selectedMainAtom = atom({
  key: "selectedMainAtom",
  default: "1",
});

const selectedSubAtom = atom({
  key: "selectedSubAtom",
  default: "",
});

const orderDataAtom = atom({
  key: "orderDataAtom",
  default: [],
});

const activeOrderListAtom = atom({
  key: "activeOrderListAtom",
  default: "1",
});

const orderCountAtom = atom({
  key: "orderCountAtom",
  default: [],
});

const shippingCountAtom = atom({
  key: "shippingCountAtom",
  default: [],
});

const dcCountAtom = atom({
  key: "dcCountAtom",
  default: [],
});

const loginIdListAtom = atom({
  key: "loginIdListAtom",
  default: [{ id: "sanghyeon", pw: "sh123" }],
});

const activeLoginAtom = atom({
  key: "activeLoginAtom",
  default: "",
});

const adminAtom = atom({
  key: "adminAtom",
  default: false,
});

const activeRefundAtom = atom({
  key: "activeRefundAtom",
  default: {},
});

export {
  activeRefundAtom,
  adminAtom,
  selectedMainAtom,
  selectedSubAtom,
  orderDataAtom,
  activeOrderListAtom,
  orderCountAtom,
  shippingCountAtom,
  loginIdListAtom,
  activeLoginAtom,
  dcCountAtom,
};
