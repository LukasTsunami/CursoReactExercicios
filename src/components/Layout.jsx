import React from "react";
import BarraDeNavegacao from "./BarraDeNavegacao";

const Layout = ({ children }) => {
  return (
    <>
      <BarraDeNavegacao></BarraDeNavegacao>
      {children}
    </>
  );
}

export default Layout