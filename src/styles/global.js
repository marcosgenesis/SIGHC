import { createGlobalStyle } from 'styled-components';

import CamptonBold from '../assets/fonts/Campton-Bold.otf';
import CamptonBook from '../assets/fonts/Campton-Book.otf';
import CamptonLight from '../assets/fonts/Campton-Light.otf';
import CamptonMedium from '../assets/fonts/Campton-Medium.otf';
import CamptonSemiBold from '../assets/fonts/Campton-SemiBold.otf';

export default createGlobalStyle`
  @font-face {
      font-family: 'Campton';
      src: local('Campton'),
      url(${CamptonBold}) format('otf');
      font-weight: 600;
      font-style: normal;
  }
  @font-face {
      font-family: 'Campton';
      src: local('CamptonBook'),
      url(${CamptonBook}) format('otf');
      font-weight: 600;
      font-style: normal;
  }

  @font-face {
      font-family: 'Campton';
      src: local('CamptonLight'),
      url(${CamptonLight}) format('otf');
      font-weight: 600;
      font-style: normal;
  }
  @font-face {
      font-family: 'Campton';
      src: local('CamptonMedium'),
      url(${CamptonMedium}) format('otf');
      font-weight: 600;
      font-style: normal;
  }
  @font-face {
      font-family: 'Campton';
      src: local('CamptonSemiBold'),
      url(${CamptonSemiBold}) format('otf');
      font-weight: 600;
      font-style: normal;
  }
*{
  margin: 0;
  padding: 0;
  outline:none;
  box-sizing:border-box;
}
*:focus{
  outline:none;
}
html,body,#root{
  height: 100%;
}
body{
  -webkit-font-smoothing:antialiased;
  background:#fff;
}
body,input,button{
  font: 14px 'Campton',sans-serif;
}
a{
  text-decoration:none;
}
ul{
  list-style:none;
}
button{
  cursor:pointer;
}
`;
