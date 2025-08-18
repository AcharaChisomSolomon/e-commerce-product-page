import styled from '@emotion/styled'
import * as Dialog from '@radix-ui/react-dialog'
import UnstyledButton from "./utils/UnstyledButton"
import VisuallyHidden from './utils/VisuallyHedden'
import IconClose from './images/icon-close.svg'
import { QUERIES } from './utils/constants'

export default function MobileMenu({ isOpen, onDismiss }) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <Dialog.Title asChild>
            <VisuallyHidden>Navigation Menu</VisuallyHidden>
          </Dialog.Title>
          <Dialog.Description asChild>
            <VisuallyHidden>
              Main navigation links for the website
            </VisuallyHidden>
          </Dialog.Description>
          <CloseButton onClick={onDismiss}>
            <img src={IconClose} alt="Close menu" />
          </CloseButton>
          <nav>
            <MenuList>
              <MenuItem><MenuLink href="#">Collections</MenuLink></MenuItem>
              <MenuItem><MenuLink href="#">Men</MenuLink></MenuItem>
              <MenuItem><MenuLink href="#">Women</MenuLink></MenuItem>
              <MenuItem><MenuLink href="#">About</MenuLink></MenuItem>
              <MenuItem><MenuLink href="#">Contact</MenuLink></MenuItem>
            </MenuList>
          </nav>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const DialogOverlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  inset: 0;

  @media ${QUERIES.laptopAndLarger} {
    display: none;
  }
`

const DialogContent = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: min(clamp(15.625rem, 9.615vw + 12.019rem, 18.75rem), 75%);
  background: var(--white);
  padding: var(--spacing-0300);
  padding-inline-start: clamp(1.5rem, 28vw + -9rem, 5rem);
  padding-block-start: clamp(1.5rem, 12vw + -3rem, 3rem);

  @media ${QUERIES.laptopAndLarger} {
    display: none;
  }
`

const CloseButton = styled(UnstyledButton)`
  margin-block-end: var(--spacing-0400);
`

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`

const MenuItem = styled.li`
  margin-block-end: var(--spacing-0400);
`

const MenuLink = styled.a`
  text-decoration: none;
  color: var(--grey-950);
  font-weight: var(--fw-bold);
  font-size: var(--fs-18);
`