import { activeLoginAtom } from "@atoms/dataAtom";
import styled from "@emotion/styled";
import firebase from "firebase/compat/app";
import { doc, getDoc } from "firebase/compat/firestore";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { db } from "src/firebase/firebase";
import ShippingItem from "./ShippingItem";

const Shipping = () => {
  const activeLogin = useRecoilValue(activeLoginAtom);
  const [shippingCount, setShippingCount] = useState([]);
  const [shippingArray, setShippingArray] = useState([]);
  const a = async () => {
    const docRef = doc(db, activeLogin, `shipping`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setShippingCount(docSnap.data()["active"]);
      setShippingArray(docSnap.data()["orderList"]);
    } else {
    }
  };
  let i = -1;

  useEffect(() => {
    a();
  }, []);
  return (
    <Container>
      {shippingCount ? (
        shippingCount.map((it) => {
          i = i + 1;
          if (it.split(".")[1] === "none") return <></>;
          else {
            console.log(shippingArray);
            return (
              <ShippingItem
                url={shippingArray[i][it.split(".")[0]].image}
                brand={shippingArray[i][it.split(".")[0]].brand}
                title={shippingArray[i][it.split(".")[0]].name}
                sizeTitle={it.split(".")[1]}
              />
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

export default Shipping;
