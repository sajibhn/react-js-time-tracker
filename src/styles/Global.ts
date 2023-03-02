import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

.react-datepicker__tab-loop {
      position: absolute;
      top: 0;
    }
    
    .react-datepicker__triangle {
      display: none !important;
    }

    .react-datepicker-wrapper {
    display: inline-block;
    padding: 0;
    border: 0;
    width: 90px;
}
`;

export default GlobalStyles;
