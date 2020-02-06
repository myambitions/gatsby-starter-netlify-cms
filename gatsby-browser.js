import React from "react";
import ApiProvider from "./src/components/api";
export const wrapRootElement = ({ element }) => (
  <ApiProvider>{element}</ApiProvider>
);
