import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #6633ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  background: #fff;
  width: 1200px;
  height: 720px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 30px;
  #inputsFields {
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    h2 {
      color: #6633ff;
      font-size: 32px;
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      input {
        width: 386px;
        height: 68px;
        border: none;
        border-radius: 16px;
        background: #f8f9f8;
        padding: 14px;
        font-size: 16px;
        margin-bottom: 10px;
        &::placeholder {
          color: #b7bfd6;
        }
      }
      a {
        height: 68px;
        border: none;
        background: #6633ff;
        border-radius: 16px;
        font-size: 28px;
        font-weight: 600;
        color: white;
        text-align: center;
        line-height: 60px;
      }
    }
  }
`;
