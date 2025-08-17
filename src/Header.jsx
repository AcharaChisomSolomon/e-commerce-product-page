import styled from "@emotion/styled"

import MobileMenu from "./MobileMenu";
import WidthUtil from "./utils/WidthUtil";
import React from "react";

export default function Header() {
  const [showMObileMenu, handleShowMobileMenu] = React.useState(false)

  return (
    <header>
      <WidthUtil>
        <MainHeader></MainHeader>
        <MobileMenu 
          isOpen={showMObileMenu}
          onDismiss={handleShowMobileMenu}
        />
      </WidthUtil>
    </header>
  )
}

const MainHeader = styled.div`

`;