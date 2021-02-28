import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: #fff;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  width: 80%;
  height: 70vh;
  border-radius: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px 15px;
    background: #ea4949;
    border-radius: 8px 8px 0 0;

    button {
      border: 0;
      padding: 8px 15px;
      border-radius: 8px;
      width: 6rem;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      color: #f6f6f6;
    }
  }

  .chat {
    display: grid;
    grid-template-columns: 25% 75%;
    width: 100%;
    height: 100%;

    .sidebar {
      background: #ef5353;
      list-style: none;
      padding: 15px;

      li {
        display: flex;
        align-items: center;

        & + li {
          margin-top: 8px;
        }

        svg {
          margin-right: 5px;
        }
      }

      .room {
        display: flex;
        align-items: center;
        background-color: #dc4e4e;
        padding: 6px 10px;
        margin-bottom: 20px;
        border-radius: 8px;
      }

      .user-name {
        font-size: 14px;
      }
    }

    .chat-window {
      background: #f36161;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-height: 562px;
      overflow-y: scroll;
      scroll-behavior: smooth;

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-track {
        background: #fff;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #ea4949;
        border-radius: 20px;
        border: 3px solid #f5f5f5;
      }
    }
  }

  .user-input {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ea4949;
    width: 100%;
    padding: 10px;
    border-radius: 0 0 8px 8px;

    input {
      display: flex;
      align-items: center;
      width: 90%;
      height: 90%;
      border: 0;
      border-radius: 8px;
      padding: 10px;
    }
  }
`;
