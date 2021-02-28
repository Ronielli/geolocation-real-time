import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: #f5f5f5;
  color: #434343;
  width: 80%;
  margin: 10px;
  border-radius: 8px;
  text-align: left;

  .message-info {
    display: flex;
    align-items: center;
    justify-content: left;
    color: #99999c;
    width: 100%;
    text-align: left;
    font-size: 13px;

    span {
      color: #f36161;
      margin-right: 8px;
      font-size: 15px;
    }
  }

  .message-text {
    width: 100%;
  }
`;
