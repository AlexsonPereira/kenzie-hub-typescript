import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   :root{
      --color-primary: #FF577F;
      --color-primary-50: #FF427F;
      --color-black:#000000;
      --color-black-secundary: #121214;
      --color-grey: #212529;
      --color-grey-2:#343B41;
      --color-grey-3:#212529;
      --color-white: #FFFFFF;
      --color-grey-1:#868E96;
      --color-grey-0: #F8F9FA;
      --color-primary-disable: #59323F;

   }

   form, div, input, h1, h2, h3, img, p, button, select, option, html, body, ul, li, h4, span, svg{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      font-family: 'Inter', sans-serif;
   }
`
