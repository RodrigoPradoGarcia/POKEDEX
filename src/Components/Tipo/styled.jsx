import styled, { css } from 'styled-components';

export const TipoStyled = styled.span`
  box-shadow: 3px 3px 5px #00000088;
  padding:5px 10px;
  border-radius:4px;
  color:white;
  font-size:20px;
  margin-right:8px;
  text-transform:capitalize;

  &:last-child
  {
    margin-right:0;
  }

  ${({ tipo }) => css`
    ${tipo === 'grass' && css`
      background:rgb(31,147,39);
    `}

    ${tipo === 'fire' && css`
      background:rgb(219,97,15);
    `}

    ${tipo === 'water' && css`
      background:rgb(88,184,243);
    `}

    ${tipo === 'bug' && css`
      background:rgb(36,106,11);
    `}

    ${tipo === 'normal' && css`
      background:rgb(158,158,158);
    `}

    ${tipo === 'poison' && css`
      background:rgb(131,47,109);
    `}

    ${tipo === 'electric' && css`
      background:rgb(224,176,0);
    `}

    ${tipo === 'ground' && css`
      background:rgb(100,57,17);
    `}

    ${tipo === 'fairy' && css`
      background:rgb(180,60,180);
    `}

    ${tipo === 'fighting' && css`
      background:rgb(193,31,31);
    `}

    ${tipo === 'psychic' && css`
      background:rgb(143, 91, 143);
    `}

    ${tipo === 'rock' && css`
      background:rgb(56,56,56);
    `}

    ${tipo === 'ghost' && css`
      background:rgb(205,198,198);
      color:black;
    `}

    ${tipo === 'ice' && css`
      background:rgb(138,183,193);
    `}

    ${tipo === 'dragon' && css`
      background:rgb(173,73,31);
    `}

    ${tipo === 'dark' && css`
      background:rgb(0,0,0);
    `}

    ${tipo === 'steel' && css`
      background:rgb(118,116,123);
    `}

    ${tipo === 'flying' && css`
      background:rgb(122,167,209);
    `}

    ${tipo === 'unknown' && css`
      background:rgb(158,158,158);
    `}

    ${tipo === 'shadow' && css`
      background:rgb(0,0,0);
    `}
  `}
`;
