import { createGlobalStyle } from "styled-components";
import { shade } from "polished";

export default createGlobalStyle`
  *  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
    
    body {
      
      -webkit-font-smoothing: antialiased;

    } 
    
    body, input, textarea, button {
      font-family: 'Roboto Slab', serif;
      font-size: 16px;
    }

   

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
    }
    button {
      cursor: pointer;
      background:  #f36161;
      font-weight: 500;
      transition: background-color 0.2s;
      color: #fff;
    }

    button:hover {
      background-color: ${shade(0.08, "#f36161")};
    }
`;
