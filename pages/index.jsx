import styled from "@emotion/styled";
import { db } from "src/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import ItemDetail from "../src/components/ItemDetail";
import { useRouter } from "next/router";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Purchase from "../src/components/Purchase";
import MainItemList from "@components/MainItemList";
import {
  activeLoginAtom,
  selectedMainAtom,
  selectedSubAtom,
} from "../src/atoms/dataAtom";

export default function Home() {
  const activeLogin = useRecoilValue(activeLoginAtom);
  const router = useRouter();
  const activeId = useRecoilValue(activeLoginAtom);
  const [mainUrl, setMainUrl] = useState("");
  const [selectedMain, setSelectedMain] = useRecoilState(selectedMainAtom);
  const selectedSub = useRecoilValue(selectedSubAtom);
  const a = async (activeId) => {
    const docRef = doc(db, activeId, `${"image_" + selectedMain}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setMainUrl(docSnap.data()["main"]);
    } else {
    }
  };
  useEffect(() => {
    if (activeLogin === "") router.push("/login");
    else a(activeId);
  }, []);

  if (activeLogin === "")
    return (
      <div style={{ backgroundColor: "#000", width: "100vw", height: "100vh" }}>
        로딩중
      </div>
    );
  else {
    return (
      <>
        <Header />
        <Main url={mainUrl} />
        <MainItemList />
        {selectedSub === "" ? <></> : <ItemDetail id={selectedSub} />}
        <Purchase />
      </>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  height: 60px;

  display: flex;
`;
