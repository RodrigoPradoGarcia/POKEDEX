````npm install eslint --save-dev````
````npm init @eslint/config````

# tópicos da mentoria
+ arquiteruta inicial do projeto(instalação e configuração)
+ estilização
+ componentização
+ gerenciamento de estado
+ cliclo de vida
+ data fetching
+ roteamento

# IMPORTANTE PORQUE VOCÊ ESQUECEU

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body
  {
    background:#ddd;
  }

  *
  {
    margin:0;
    padding:0;
    outline:0;
    font-family:'Roboto', sans-serif;
    box-sizing:border-box;
  }
;`

export default GlobalStyle;

# #####################################3

Material UI (pesquisar sobre)

componentes não dependem de lógica
componentes recebem props e renderizam com base nas props

BrowserRouter
HashRouter
MemoryRouter

# mais informação nova hein?

<S.Texto as={as}>
        {children}
</S.Texto>
//o atributo as indica qual a tag o componente irá utilizar(componente polimórfico)

# ##########################

aspas simples para js e aspas duplas para html/jsx

# Mais informação nova

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


# ######################


# coisas que dava pra fazer e eu não sabia
 
  + Colocar funções dentro do useEffect para que elas sejam declaradas apenas na primeira renderização

  + utilizar o useCallback em funções que sempre são passadas como callback para componentes filhos para evitar recriações desnecessárias


# #######################################

# Biblioteca Axios

import axios from 'axios';

const API = axios.create({
  baseURL:"https://pokeapi.co/api/v2/"
});

export default API;

import APi from 'blabla';

async function getItem() {
  const { data } = await API.get('/pokemon');
  console.log(data);
}

getItem();

+ o axios sempre retorna os dados dentro de um objeto com um atributo data
{data:<resposta da API>}
portanto deve ser desestruturado

# ################