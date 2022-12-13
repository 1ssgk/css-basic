import styled, { css } from "styled-components";

const Container = styled.div`
  display : flex;
  background-color:red;
`;

const Button = styled.button`
  background: transparent;
  border-radius : 3px;
  border: 2px solid #3c5b69;
  color : #b9eaff;
  margin: 0 1em;
  padding: 0,25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `}
`;

export default function StyleComponent() {
  return (
    <>
      <Container>ddd</Container>
      <Button>111</Button>
      <Button primary>Primary Button</Button>
    </>
  );
}
