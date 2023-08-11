import { adminAtom } from "@atoms/dataAtom";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

export default function login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const setAdmin = useSetRecoilState(adminAtom);

  const router = useRouter();

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  useEffect(() => {
    if ("admin" === id && "aaa123123" === pw) {
      router.push("/admin");
      setAdmin(true);
    }
  }, [id, pw]);
  return (
    <Container>
      <Wrapper>
        <Title>SIMPLZ</Title>
        <Form>
          <Input placeholder="ID" onChange={(e) => onChangeId(e)}></Input>
          <Input placeholder="Password" onChange={(e) => onChangePw(e)}></Input>
        </Form>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 180px;
  padding: 0px 35px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  font-family: "NanumGothic";
  font-weight: 900;
  font-size: 36px;
  color: #fff;

  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding-left: 12px;
  width: 100%;
  height: 40px;

  ::placeholder {
    color: #9a9a9a;
  }
`;
