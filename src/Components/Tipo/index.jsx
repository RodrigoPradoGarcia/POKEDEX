import * as S from './styled';

function Tipo({ tipo }) {
  return (
    <S.TipoStyled tipo={tipo}>{tipo || 'Rodrigo'}</S.TipoStyled>
  );
}

export default Tipo;
