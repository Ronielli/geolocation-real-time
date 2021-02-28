import styled from "styled-components";

export const Container = styled.div`
  background-color: #121214;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;

  h1 {
    color: #f5f5f5;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;

  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 8px;
    padding: 8px;

    input {
      border-radius: 8px;
      border: 0;
      width: 100%;
      height: 40px;
      padding: 8px;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 40px;
      margin-top: 8px;
      border: 0;
      border-radius: 8px;
    }
  }
`;
