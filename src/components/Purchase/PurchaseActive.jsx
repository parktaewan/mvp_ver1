import { activeLoginAtom, selectedMainAtom } from "@atoms/dataAtom";
import styled from "@emotion/styled";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { db } from "src/firebase/firebase";
import OptionBox from "./OptionBox";

const PurchaseActive = (props) => {
  const activeLogin = useRecoilValue(activeLoginAtom);
  const onClick = (title, id = props.id - 1) => {
    setSelectedSize(title);
    props.onClick(id, `${props.title.split(".")[0] + "." + title}`);
  };
  const selectedMain = useRecoilValue(selectedMainAtom);
  const [size, setSize] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const a = async () => {
    const docRef = doc(db, activeLogin, `${"size" + selectedMain}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setSize(docSnap.data()[props.title.split(".")[0]]);
    } else {
    }
  };
  useEffect(() => {
    // b();
    a();
    setSelectedSize(props.title.split(".")[1]);
  }, []);

  return (
    <OptionBoxContainer>
      {props.title.split(".")[1] === "none" ? (
        <OptionTitle style={{ backgroundColor: "#fff", color: "#000" }}>
          {props.title.split(".")[0]}
        </OptionTitle>
      ) : (
        <OptionTitle>{props.title.split(".")[0]}</OptionTitle>
      )}

      {size ? (
        size.map((it) => {
          return (
            <OptionBox title={it} theme={selectedSize} onClick={onClick} />
          );
        })
      ) : (
        <></>
      )}
    </OptionBoxContainer>
  );
};

const OptionBoxContainer = styled.div`
  width: 100vw;
  height: 36px;

  margin-top: 1px;

  display: flex;
`;

const OptionTitle = styled.div`
  width: 60px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NanumGothic";
  font-weight: 400;

  background-color: #000;
  color: #fff;

  margin-right: 1px;
`;

export default PurchaseActive;
