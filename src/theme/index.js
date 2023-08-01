import React from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import themes from "./abstracts/_theme";

const ThemeProvider = ({ children }) => {
  return <ThemeProviderStyled theme={themes}>{children}</ThemeProviderStyled>;
};

export default ThemeProvider;
