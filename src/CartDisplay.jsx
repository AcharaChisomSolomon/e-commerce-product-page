import * as Dialog from "@radix-ui/react-dialog";
import styled from "@emotion/styled";
import React from "react";
import { QUERIES } from "./utils/constants";

import UnstyledButton from "./utils/UnstyledButton";
import VisuallyHidden from "./utils/VisuallyHedden";

import IconCart from './images/icon-cart.svg'
import IconDelete from './images/icon-delete.svg'
import CartImg from './images/image-product-1-thumbnail.jpg'

export default function CartDisplay({ count, setItemCount, isOpen, onOpenChange }) {
  const [container, setContainer] = React.useState(null);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Root ref={setContainer}>
        <Dialog.Trigger asChild>
          <Cart>
            <img src={IconCart} alt="" />
            {count > 0 && <ItemCount>{count}</ItemCount>}
          </Cart>
        </Dialog.Trigger>
        <Dialog.Portal container={container}>
          <Content>
            <Header>
              <Title>Cart</Title>
            </Header>
            <Body isGrid={count === 0}>
              <Dialog.Description>
                <VisuallyHidden as="span">
                  Your shopping cart containing selected items for purchase
                </VisuallyHidden>
              </Dialog.Description>
              {count <= 0 && <EmptyMessage>Your cart is empty.</EmptyMessage>}
              {count > 0 && (
                <Checkout>
                  <CheckoutMain>
                    <CartImgContainer><img src={CartImg} alt="" /></CartImgContainer>
                    <div>
                      <p>Fall Limited Edition Sneakers</p>
                      <p>$125.00 * {count} <TotalPrice>${125 * count}</TotalPrice></p>
                    </div>
                    <CheckoutDeleteButton
                      onClick={() => setItemCount(0)}
                    ><img src={IconDelete} alt="" /></CheckoutDeleteButton>
                  </CheckoutMain>
                  <CheckoutBtn>Checkout</CheckoutBtn>
                </Checkout>
              )}
            </Body>
          </Content>
        </Dialog.Portal>
      </Root>
    </Dialog.Root>
  )
}

const Cart = styled(UnstyledButton)`
  position: relative;
`;

const ItemCount = styled.span`
  font-size: calc(10 / 16 * 1rem);
  font-weight: var(--fw-bold);
  color: var(--white);
  background-color: var(--orange-500);
  padding: 2px var(--spacing-0100);
  border-radius: 10px;

  position: absolute;
  top: -50%;
  left: 50%;
`;

const Root = styled.div`
  position: relative;
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: clamp(5.5rem, 6.154vw + 3.192rem, 7.5rem);
  right: 0;
  width: min(calc(360 / 16 * 1rem), calc(100vw - (var(--spacing-0200) * 2)));
  margin-inline: var(--spacing-0200);
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.50);

  @media ${QUERIES.laptopAndLarger} {
    position: absolute;
    top: calc(100% + var(--spacing-0400));
    left: 50%;
    right: revert;
    transform: translateX(-50%);
  }
`

const Header = styled.header`
  padding: var(--spacing-0200);
  border-bottom: 1px solid var(--grey-100);
`

const Title = styled(Dialog.Title)`
  font-weight: var(--fw-bold);
  font-size: var(--fs-16);
`

const Body = styled.div`
  padding: var(--spacing-0300);
  min-height: ${p => p.isGrid && '188px'};
  display: ${p => p.isGrid && 'grid'};
  place-content: center;
`

const EmptyMessage = styled.p`
  color: var(--grey-500);
  font-weight: var(--fw-bold);
`;

const Checkout = styled.div`
  font-size: var(--fs-16);
  font-weight: var(--fw-regular);
  color: var(--grey-500);
`

const CheckoutMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-0200);
`;

const CartImgContainer = styled.div`
  flex-shrink: 0;
  width: calc(50 / 16 * 1rem);
  border-radius: calc(4 / 16 * 1rem);
  overflow: hidden;
`;

const TotalPrice = styled.span`
  font-weight: var(--fw-bold);
  color: var(--grey-950);
`;

const CheckoutDeleteButton = styled(UnstyledButton)`
  flex-shrink: 0;
`;

const CheckoutBtn = styled(UnstyledButton)`
  width: 100%;
  display: block;
  text-align: center;
  background-color: var(--orange-500);
  padding-block: var(--spacing-0300);
  border-radius: calc(10 / 16 * 1rem);
  font-weight: var(--fw-bold);
  color: var(--grey-950);
  margin-block-start: var(--spacing-0300);

  &:hover {
    background-color: var(--orange-300);
  }
`;