import styled from "@emotion/styled";
import { activeLoginAtom, selectedMainAtom } from "@atoms/dataAtom";
import "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { db } from "src/firebase/firebase";
import PurchaseActive from "./PurchaseActive";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

const Purchase = () => {
  const activeLogin = useRecoilValue(activeLoginAtom);
  const [isClick, setIsClick] = useState("false");

  const [updateArray, setUpdateArray] = useState([""]);

  const selectedMain = useRecoilValue(selectedMainAtom);

  const a = async () => {
    const docRef = doc(db, activeLogin, `${"size" + selectedMain}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUpdateArray(docSnap.data()["SizeTitle"]);
    } else {
    }
  };

  const onSetUpdateArray = (id, sizeTitle) => {
    let result = [];

    for (let i = 0; i < updateArray.length; i++) {
      if (i === id) {
        result.push(sizeTitle);
      } else {
        result.push(updateArray[i]);
      }
    }

    setUpdateArray(result);
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

  useEffect(() => {
    // b();
    a();
  }, []);

  let key = 0;

  return (
    <>
      {isClick === "false" ? (
        <Container
          onClick={() => {
            a().then(() => setIsClick("true"));
          }}
        >
          구매하기
        </Container>
      ) : (
        <BoxContainer>
          <OptionBoxContainer>
            <AllCheckout>사이즈 선택</AllCheckout>
          </OptionBoxContainer>
          {updateArray ? (
            updateArray.map((it) => {
              key = key + 1;
              return (
                <PurchaseActive
                  title={it}
                  key={key}
                  id={key}
                  onClick={onSetUpdateArray}
                />
              );
            })
          ) : (
            <></>
          )}
          <Container_2>
            <Wrapper
              onClick={() => {
                setUpdateDoc(updateArray);
                setIsClick("false");
              }}
              style={{ backgroundColor: "#000", color: "#fff" }}
            >
              장바구니 담기
            </Wrapper>
            <Wrapper
              style={{ backgroundColor: "#fff" }}
              onClick={() => {
                setIsClick("false");
              }}
            >
              취소
            </Wrapper>
          </Container_2>
        </BoxContainer>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  background-color: #fff;

  bottom: 0;

  border-top: 1px solid #000;

  width: 100vw;
  height: 58px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container_2 = styled.div`
  border-top: 1px solid #000;

  width: 100vw;
  height: 58px;

  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NanumGothic";
  font-weight: 400;
`;

const BoxContainer = styled.div`
  background-color: #fff;
  position: fixed;
  bottom: 0;

  width: 100vw;
  border-top: 1px solid #000;
`;

const OptionBoxContainer = styled.div`
  width: 100vw;
  height: 36px;

  margin-top: 1px;
`;

const OptionBox = styled.div`
  width: 60px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NanumGothic";
  font-weight: 400;
`;

const AllCheckout = styled(OptionBox)`
  width: 110px;
`;

const OptionTitle = styled(OptionBox)`
  background-color: #000;
  color: #fff;
`;

export default Purchase;
