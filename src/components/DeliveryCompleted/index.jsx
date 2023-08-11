import { activeLoginAtom } from "@atoms/dataAtom";
import styled from "@emotion/styled";
import { doc, getDoc } from "firebase/compat/firestore";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { db } from "src/firebase/firebase";
import DCItem from "./DCItem";

const DeliveryCompleted = () => {
  const [loading, setLoading] = useState(true);
  const activeLogin = useRecoilValue(activeLoginAtom);
  const [tmp, setTmp] = useState([]);
  const [dcCount, setShippingCount] = useState([]);
  const [dcArray, setShippingArray] = useState([]);
  const a = async () => {
    console.log(loading);
    const docRef = doc(db, activeLogin, `DC`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setShippingCount(docSnap.data()["active"]);
      setShippingArray(docSnap.data()["orderList"]);
    } else {
    }

    const docRRef = doc(db, activeLogin, `refund`);
    const docSSnap = await getDoc(docRRef);
    if (docSSnap.exists()) {
      setTmp(docSSnap.data()["tmp"]);
    }
  };
  let i = -1;

  useEffect(() => {
    const start = async () => {
      a().then(() => {
        setLoading(false);
        console.log(loading);
      });
    };
    start();
  }, []);
  return loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        width: "100vw",
        height: "100vh",
      }}
    >
      로딩중
    </div>
  ) : (
    <Container>
      {dcCount ? (
        dcCount.map((it) => {
          i = i + 1;
          if (it.split(".")[1] === "none") return <></>;
          else {
            let refund = "";
            if (!tmp || tmp.length <= 0) {
            } else {
              tmp.map((that) => {
                console.log(it.item, that["상품"]);
                if (dcArray[i][it.split(".")[0]].name === that["상품"]) {
                  refund = that["종류"];
                }
              });
            }
            return (
              <DCItem
                url={dcArray[i][it.split(".")[0]].image}
                brand={dcArray[i][it.split(".")[0]].brand}
                title={dcArray[i][it.split(".")[0]].name}
                refund={refund}
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

export default DeliveryCompleted;
