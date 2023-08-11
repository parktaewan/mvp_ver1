import {
  activeLoginAtom,
  selectedMainAtom,
  selectedSubAtom,
} from "@atoms/dataAtom";
import styled from "@emotion/styled";
import { doc, getDoc } from "firebase/compat/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { db } from "src/firebase/firebase";

const ItemDetail = (props) => {
  const activeLogin = useRecoilValue(activeLoginAtom);
  const [selectedMain, setSelectedMain] = useRecoilState(selectedMainAtom);
  const selectedSub = useRecoilValue(selectedSubAtom);
  const [url, setUrl] = useState([]);
  const a = async () => {
    const docRef = doc(db, activeLogin, `${"detail" + selectedMain}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUrl(docSnap.data()[`${"sub" + selectedSub}`]);
    } else {
    }
  };

  useEffect(() => {
    // b();
    a();
  }, [selectedSub]);

  return (
    <Container>
      {url ? (
        url.map((it) => {
          return (
            <Image
              src={it}
              alt="이미지"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          );
        })
      ) : (
        <>로딩중</>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;

export default ItemDetail;
