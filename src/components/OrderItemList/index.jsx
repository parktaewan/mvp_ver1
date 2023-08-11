import styled from "@emotion/styled";
import OrderItem from "./OrderItem";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeLoginAtom,
  orderCountAtom,
  orderDataAtom,
  selectedMainAtom,
} from "@atoms/dataAtom";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "src/firebase/firebase";
import { useEffect, useState } from "react";

const OrderItmeList = () => {
  const activeLogin = useRecoilValue(activeLoginAtom);

  const [onClick, setOnClick] = useState(false);
  const [updateArray, setUpdateArray] = useState([""]);

  const ssetUpdateArray = async (result) => {
    setUpdateArray(result);
    console.log("server", result);
  };

  const selectedMain = useRecoilValue(selectedMainAtom);

  const a = async () => {
    const docRef = doc(db, activeLogin, `${"size" + selectedMain}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUpdateArray(docSnap.data()["SizeTitle"]);
    } else {
    }
  };

  const onSetUpdateArray = async (id, sizeTitle) => {
    let result = [];
    for (let i = 0; i < updateArray.length; i++) {
      if (i === id) {
        result.push(sizeTitle);
      } else {
        result.push(updateArray[i]);
      }
    }
    ssetUpdateArray(result).then(() => {
      console.log("여기", updateArray);
      setUpdateDoc(result);
    });
  };

  const setUpdateDoc = async (array) => {
    const refundRef = collection(db, activeLogin);

    await updateDoc(doc(refundRef, `${"size" + selectedMain}`), {
      SizeTitle: array,
    });
    await updateDoc(doc(refundRef, `order`), {
      active: array,
    });
  };

  const onClickUpdate = (id, sizeTitle) => {
    onSetUpdateArray(id, sizeTitle);
  };

  useEffect(() => {
    // b();
    a().then(() => setOnClick(true));
  }, []);

  const title = useRecoilValue(orderCountAtom);

  let count = -1;
  const [orderCount, setOrderCount] = useRecoilState(orderDataAtom);
  return (
    <Container>
      {orderCount.length !== 0 && title && onClick ? (
        orderCount.map((it) => {
          count = count + 1;
          console.log(count);
          if (title[count].split(".")[1] === "none") {
            return <></>;
          } else {
            console.log(it);
            return title[count].split(".")[0] && updateArray ? (
              <OrderItem
                sizeTitle={updateArray[count]}
                id={count}
                key={count}
                onClick={onClickUpdate}
                url={it[title[count].split(".")[0]].image}
                title={it[title[count].split(".")[0]].name}
                brand={it[title[count].split(".")[0]].brand}
              />
            ) : (
              <></>
            );
          }
        })
      ) : (
        <></>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 266px);

  background-color: #fff;

  display: flex;
  flex-direction: column;
`;

export default OrderItmeList;
