import styled, { css } from 'styled-components';

const Carta = styled.div`
  min-height:180px;
  min-width:90%;
  max-width:400px;
  border-radius:20px;
  margin:20px;
  background:${(props) => props.fundo || '#888'};
  padding-bottom:20px;

  ${({ tipos, hoverable }) => css`

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'rock' && css`
      background:rgb(120,120,120);
    `}
    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'normal' && css`
      background:rgb(180,180,180);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'fighting' && css`
      background:rgb(225,173,173);
    `}
    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'flying' && css`
      background:rgb(72, 125, 157);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'grass' && css`
      background:rgb(104,152,103);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'fire' && css`
      background:rgb(185,128,75);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'water' && css`
      background:rgb(103, 191, 203);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'bug' && css`
      background:rgb(92, 148, 76);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'ghost' && css`
      background:rgb(199, 199, 199);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'psychic' && css`
      background:rgb(146, 63, 75);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'poison' && css`
      background:rgb(206, 165, 207);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'electric' && css`
      background:rgb(234, 215, 98);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'ground' && css`
      background:rgb(151, 132, 114);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'fairy' && css`
      background:rgb(236, 160, 238);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'steel' && css`
      background:rgb(76, 92, 103);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'ice' && css`
      background:rgb(185, 208, 223);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'dragon' && css`
      background:rgb(109, 49, 29);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'dark' && css`
      background:rgb(51, 51, 51);
    `}

    ${(tipos?.length ? tipos[0].type.name : 'unknown') === 'shadow' && css`
      background:rgba(51, 51, 51);
    `}

    ${hoverable && css`
      :hover
      {
        background:rgba(255,255,255,.3);
        cursor:pointer;
      }
    `}
  `}
`;

const CardWrapper = styled.div`
  display:grid;
  grid-template-columns:1fr;
  grid-template-rows:1fr;
`;

export { Carta, CardWrapper };
