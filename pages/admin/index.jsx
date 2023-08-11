import { adminAtom, loginIdListAtom } from "@atoms/dataAtom";
import styled from "@emotion/styled";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { db } from "src/firebase/firebase";

export default function admin() {
  let name = "";
  const [shipping, setShipping] = useState();
  const [DC, setDC] = useState();
  const [b, setB] = useState("");
  const idList = useRecoilValue(loginIdListAtom);
  const admin = useRecoilValue(adminAtom);
  const router = useRouter();

  const a = async () => {
    const docRef = doc(db, name, `order`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
      setShipping(docSnap.data());
    } else {
    }
  };

  const aa = async () => {
    const docRef = doc(db, name, `shipping`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
      setDC(docSnap.data());
    } else {
    }
  };

  const setUpdateDocShipping = async () => {
    const refundRef = collection(db, b);
    console.log(shipping);

    await updateDoc(doc(refundRef, `${"shipping"}`), {
      active: shipping.active,
      orderList: shipping.orderList,
    });

    let list = [];
    shipping.active.map((it) => {
      list.push(`${it.split(".")[0] + ".none"}`);
    });

    await updateDoc(doc(refundRef, "order"), {
      active: list,
      orderList: shipping.orderList,
    });
  };

  const setUpdateDocDC = async () => {
    const refundRef = collection(db, b);
    console.log(DC);

    await updateDoc(doc(refundRef, "DC"), {
      active: DC.active,
      orderList: DC.orderList,
    });

    let list = [];
    shipping.active.map((it) => {
      list.push(`${it.split(".")[0] + ".none"}`);
    });

    await updateDoc(doc(refundRef, "shipping"), {
      active: list,
      orderList: DC.orderList,
    });
  };

  useEffect(() => {
    if (!admin) router.push("admin/login");
  });

  return (
    <Container>
      <Title>대상 선택</Title>
      <>{b}</>
      <InputBox>
        {idList ? (
          idList.map((it) => {
            return (
              <Buttom
                onClick={() => {
                  name = it.id;
                  a();
                  aa();
                  setB(name);
                  console.log(shipping);
                  console.log(DC);
                }}
              >
                {it.id}
              </Buttom>
            );
          })
        ) : (
          <></>
        )}
      </InputBox>
      <Buttom
        onClick={() => {
          setUpdateDocShipping();
          setB("재선택하세요");
          console.log("한번");
        }}
      >
        배송중
      </Buttom>
      <Buttom
        onClick={() => {
          setUpdateDocDC();
          setB("재선택하세요");
          console.log("두번");
        }}
      >
        배송 완료
      </Buttom>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;

  width: 100vw;
  height: 100vh;

  padding: 30px;
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const Form = styled.form``;

const Title = styled.div`
  margin-bottom: 16px;
`;

const InputBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Buttom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 50px;

  border: 1px solid #000;
`;
