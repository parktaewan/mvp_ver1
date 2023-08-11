import {
  activeLoginAtom,
  activeOrderListAtom,
  orderDataAtom,
} from "@atoms/dataAtom";
import DeliveryCompleted from "@components/DeliveryCompleted";
import Header from "@components/Header";
import OrderItmeList from "@components/OrderItemList";
import OrderList from "@components/OrderList";
import PurchaseCompleted from "@components/PurchaseCompleted";
import Shipping from "@components/Shipping";
import styled from "@emotion/styled";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { db } from "src/firebase/firebase";

export default function mypage() {
  const activeLogin = useRecoilValue(activeLoginAtom);
  const router = useRouter();
  const [orderCount, setOrderCount] = useRecoilState(orderDataAtom);
  const activeOrderList = useRecoilValue(activeOrderListAtom);
  const a = async () => {
    const docRef = doc(db, activeLogin, "order");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setOrderCount(docSnap.data()["orderList"]);
    } else {
    }
  };
  useEffect(() => {
    if (activeLogin === "") router.push("/login");
    else a();
  }, []);

  if (activeLogin === "") return <>로딩중</>;
  else {
    return (
      <>
        <Container>
          <Header />
          <OrderList />
          {activeOrderList === "1" ? (
            <OrderItmeList />
          ) : activeOrderList === "2" ? (
            <Shipping />
          ) : activeOrderList === "3" ? (
            <DeliveryCompleted />
          ) : activeOrderList === "4" ? (
            <PurchaseCompleted />
          ) : (
            <></>
          )}
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
