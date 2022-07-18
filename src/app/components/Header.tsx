import { HeaderContainer } from "./StyledComponents";
import React from "react";

type Props = {
  children: React.ReactNode | undefined;
};

const Header = ({ children }: Props) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
