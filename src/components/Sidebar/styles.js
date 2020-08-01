import styled from 'styled-components';

export const Container = styled.div`
  width: 20vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-right: 1px solid #b7bfd6;
  #logo {
    font-size: 38px;
    color: #6633ff;
  }
`;

export const Search = styled.div`
  width: 308px;
  height: 68px;
  background: #f8f9f8;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 250px;
    height: 68px;
    background: transparent;
    border: none;
  }
`;
export const Menu = styled.ul`
  width: 308px;
  height: 421px;
  background: #f8f9f8;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  svg {
    margin-left: 20px;
    color: ${(props) => (props.isSelected ? '#6633ff' : '#B7BFD6')};
  }
  h2 {
    margin-left: 15px;
    font-weight: 500;
    color: ${(props) => (props.isSelected ? '#333' : '#B7BFD6')};
  }
  ${(props) =>
    !props.isSelected &&
    `&:hover {
    transform: translateX(5px);
    transition: .7s;
  }`}

  ${(props) =>
    props.isSelected &&
    `
    svg{
      margin-left:13px;
    }
    &:before {
    content: '';
    width: 7px;
    height: 35px;
    background: #b7bfd6;
    border-bottom-right-radius: 7px;
    border-top-right-radius: 7px;
  }`}
`;
export const Status = styled.div`
  width: 308px;
  min-height: 86px;
  background: #f8f9f8;
  border-radius: 16px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  svg {
    color: #d57ea6;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      color: #b7bfd6;
    }
  }
`;
export const Profile = styled.div`
  width: 308px;
  height: 99px;
  background: #f8f9f8;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div p {
    color: #b7bfd6;
  }
`;
