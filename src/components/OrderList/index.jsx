import styled from '@emotion/styled';
import OrderMenu from './OrderMenu';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  activeLoginAtom,
  dcCountAtom,
  orderCountAtom,
  orderDataAtom,
  shippingCountAtom,
} from '@atoms/dataAtom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'src/firebase/firebase';
import { useEffect, useState } from 'react';

const OrderList = () => {
  const activeLogin = useRecoilValue(activeLoginAtom);

  const [orderCount, setOrderCount] = useRecoilState(orderCountAtom);
  const [shippingCount, setShippingCount] = useRecoilState(shippingCountAtom);
  const [dCCount, setDCCount] = useRecoilState(dcCountAtom);

  const a = async () => {
    const docRef = doc(db, activeLogin, `order`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setOrderCount(docSnap.data()['active']);
    } else {
    }
  };
  const b = async () => {
    const docRef = doc(db, activeLogin, `shipping`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setShippingCount(docSnap.data()['active']);
    } else {
    }
  };
  const c = async () => {
    const docRef = doc(db, activeLogin, `DC`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setDCCount(docSnap.data()['active']);
    } else {
    }
  };
  useEffect(() => {
    // b();
    a();
    b();
    c();
  }, []);
  let oCount = 0;
  if (orderCount) {
    orderCount.map((it) => {
      if (it.split('.')[1] !== 'none') oCount++;
    });
  }
  let sCount = 0;
  if (shippingCount) {
    shippingCount.map((it) => {
      console.log(it);
      if (it.split('.')[1] !== 'none') sCount++;
    });
  }
  let dCount = 0;
  if (dCCount) {
    dCCount.map((it) => {
      if (it.split('.')[1] !== 'none') dCount++;
    });
  }

  console.log('hi', sCount);

  return (
    <Container>
      <Title>주문 목록</Title>
      <Wrapper>
        <OrderMenu title={oCount} subtitle="구매예정" id="1" />
        <OrderMenu title={sCount} subtitle="배송중" id="2" />
        <OrderMenu title={dCount} subtitle="배송완료" id="3" />
        <OrderMenu title="0" subtitle="구매내역" id="4" />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 170px;

  background-color: #fff;
`;

const Title = styled.div`
  height: 48px;
  display: flex;
  align-items: center;

  padding-left: 15px;
  font-family: 'NanumGothic';
  font-size: 16;
  font-weight: 700;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 120px;
  border-top: 1px solid #e5e5e5;

  display: flex;
`;

export default OrderList;
