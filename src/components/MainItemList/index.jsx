import styled from "@emotion/styled";
import MainItem from "./MainItem";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/compat/firestore";
import { db } from "src/firebase/firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeLoginAtom, selectedMainAtom } from "@atoms/dataAtom";

const MainItemList = () => {
  const activeLogin = useRecoilValue(activeLoginAtom);
  const [mainUrl, setMainUrl] = useState();
  const [selectedMain, setSelectedMain] = useRecoilState(selectedMainAtom);
  const a = async () => {
    const docRef = doc(db, activeLogin, `${"image_" + selectedMain}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setMainUrl(docSnap.data()["sub"]);
    } else {
    }
  };
  useEffect(() => {
    a();
  }, []);

  let key = 0;

  return (
    <Container>
      {mainUrl ? (
        mainUrl.map((it) => {
          key = key + 1;
          return <MainItem num={it} key={key} id={key.toString()} />;
        })
      ) : (
        <>로딩중</>
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 117px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  margin-bottom: 64px;
`;

export default MainItemList;
