import styled from 'styled-components';

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Round = styled.div`
  overflow: hidden;
  border: 20px #fff solid;
  cursor: pointer;
`;

const Img = styled.img`
  width: 200px;
`;

export { Content, Img, Round };