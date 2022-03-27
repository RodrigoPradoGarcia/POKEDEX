import styled, { css } from 'styled-components';

export const Texto = styled.p`
  ${({ as }) => css`

    ${as === 'h1' && css`
      font-size:42px;
      color:black;
    `}

    ${as === 'p' && css`
      font-size:20px;
    `}

  `}
`;
