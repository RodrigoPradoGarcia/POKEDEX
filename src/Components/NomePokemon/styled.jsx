import styled from 'styled-components';

const Nomepok = styled.h2`
  color:white;
  font-size:${(props) => props.font || '2em'};
  max-width:${(props) => props.mWidth || '150px'};
  font-weight:700;
  text-transform:capitalize;
`;

export default Nomepok;
