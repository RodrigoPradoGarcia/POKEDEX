import styled, { css } from 'styled-components';

const ModalBackground = styled.div`
  position:sticky;
  top:0px;
  left:0px;
  height:100%;
  overflow-y:scroll;
  width:100vw;
  word-break:break-all;
  background:#00000088;
  display:flex;
  justify-content:center;
  align-items:flex-start;
  z-index:1000000;
  min-width:280px;
  amination-name: Ani;
  animation-duration:3s;

  @keyframes Ani
  {
    from
    {
      background:red;
    }

    to
    {
      background:blue;
    }
  }
`;

const ModalIntern = styled.div`
  min-height:400px;
  width:100%;
  max-width:500px;
  background:white;
  border-radius:40px;
  display:flex;
  flex-direction:column;
`;

const LeftModal = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  min-width:100%;
  max-width:100%;
  padding-bottom:30px;

  ${({ tipos }) => css`

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
  `}
`;

const AbilitiesTitle = styled.h2`
  margin-bottom:20px;
  color:white;
`;

const Ability = styled.h3`
  box-shadow:1px 1px 10px #00000088;
  margin:5px 0;
  padding:3px 5px;
  font-size:16px;
  background:white;
  color:#333;
  cursor:default;
`;

const BaseStatus = styled.h3`
  text-align:center;
  margin:10px 0;
  font-size:25px;
  color:rgb(46, 122, 194);
`;

const Stats = styled.table`
  margin:50px 20px;
  font-size:18px;

  & tr td:first-child
  {
    color:rgb(209, 80, 63);
    text-transform:capitalize;
  }

  & tr td:last-child
  {
    color:rgb(205, 168, 81);
  }
`;

const BotaoFechar = styled.button`
  margin:20px 0;
  background:#FF4444;
  color:white;
  border:0;
  box-shadow: 2px 2px 5px #00000088;

  &:hover
  {
    background:#FF6666;
    cursor:pointer;
  }
`;

export {
  ModalBackground,
  ModalIntern,
  LeftModal,
  AbilitiesTitle,
  Ability,
  BaseStatus,
  Stats,
  BotaoFechar,
};
