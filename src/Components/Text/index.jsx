import * as S from './styled';

function Text({ children, as }) {
  return (
    <S.Texto as={as}>
      {children}
    </S.Texto>
  );
}

export default Text;
