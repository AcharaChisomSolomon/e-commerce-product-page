import React from 'react'
import Header from './Header'
import MainImage from './MainImage'
import UnstyledButton from './utils/UnstyledButton'

import IconPlus from './images/icon-plus.svg'
import IconMinus from './images/icon-minus.svg'
import styled from '@emotion/styled'
import { QUERIES } from './utils/constants'
import WidthUtil from './utils/WidthUtil'

function App() {
  const [itemCount, setItemCount] = React.useState(0)
  const [updater, setUpdater] = React.useState(0)

  const handleAddToCart = () => {
    setItemCount(updater)
    setUpdater(0)
  }

  return (
    <div>
      <Header 
        count={itemCount} 
        setItemCount={setItemCount}
      />
      <Wrapper>
        <MainImage />
        <TextContainer>
          <Company>SNEAKER COMPANY</Company>
          <Title>Fall Limited Edition Sneakers</Title>
          <Text>
            These low-profile sneakers are your perfect casual 
            wear companion. Featuring a durable rubber outer sole, 
            they’ll withstand everything the weather can offer.
          </Text>
          <Prices>
            <Discounts>
              <DiscountPrice>$125.00</DiscountPrice>
              <Discount>50%</Discount>
            </Discounts>
            <OriginalPrice>$250.00</OriginalPrice>
          </Prices>
          <Buttons>
            <Updater>
              <UnstyledButton 
                onClick={() => setUpdater(u => u === 0 ? u : u - 1)}>
                <img src={IconMinus} alt="" />
              </UnstyledButton>
              <span>{updater}</span>
              <UnstyledButton
               onClick={() => setUpdater(u => u + 1)}>
                <img src={IconPlus} alt="" />
              </UnstyledButton>
            </Updater>
            <CartBtn onClick={handleAddToCart}>
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#1d2025ff" />
              </svg>
              <span>Add to cart</span>
            </CartBtn>
          </Buttons>
        </TextContainer>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.main`
  display: grid;
  padding-block-end: clamp(2.5rem, 16.667vw + -6.667rem, 5rem);
  gap: clamp(1.75rem, 6.573vw + -0.715rem, 8.75rem);

  @media ${QUERIES.laptopAndLarger} {
    grid-template-columns: 1fr 1fr;
    max-width: calc(1440 / 16 * 1rem);
    margin: 0 auto;
    padding-inline: clamp(1.5rem, 75vw + -39.75rem, 12.75rem);
  }
`;

const TextContainer = styled(WidthUtil)`
  @media ${QUERIES.laptopAndLarger} {
    align-content: center;
    max-width: revert;
    margin: revert;
    padding-inline: revert;
  }
`;

const Company = styled.p`
  font-size: var(--fs-13);
  color: var(--grey-500);
  letter-spacing: 2px;
  font-weight: var(--fw-bold);
`;

const Title = styled.h1`
  font-size: clamp(1.75rem, 8vw + -1.25rem, 2.75rem);
  margin-block-start: clamp(1.25rem, 1.176vw + 0.809rem, 1.75rem);
  margin-block-end: clamp(1.75rem, 2.353vw + 0.868rem, 2.75rem);
`;

const Text = styled.p`
  font-size: var(--fs-16);
  color: var(--grey-500);
`;

const Prices = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-0100);
  margin-block: var(--spacing-0300);

  @media ${QUERIES.tabletAndLarger} {
    flex-direction: column;
    align-items: revert;
  }
`;

const Discounts = styled.div`
  display: flex;
  gap: var(--spacing-0300);
  align-items: center;
`;

const DiscountPrice = styled.span`
  display: inline-block;
  font-size: var(--fs-28);
  font-weight: var(--fw-bold);
  color: var(--grey-950);
`;

const Discount = styled.span`
  display: inline-block;
  font-size: var(--fs-16);
  background-color: var(--black);
  color: var(--white);
  font-weight: var(--fw-bold);
  padding: 6px 8px;
  border-radius: 8px;
`;

const OriginalPrice = styled.span`
  display: inline-block;
  font-weight: var(--fw-bold);
  color: var(--grey-500);
  text-decoration: line-through;
`;

const Buttons = styled.div`
  display: grid;
  gap: var(--spacing-0200);

  @media ${QUERIES.tabletAndLarger} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Updater = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-0100) var(--spacing-0200);
  background-color: var(--grey-050);
  border-radius: 10px;

  button {
    padding: 16px;
  }

  span {
    font-size: var(--fs-16);
    font-weight: var(--fw-bold);
    color: var(--grey-950);
  }
`;

const CartBtn = styled(UnstyledButton)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--orange-500);
  color: var(--grey-950);
  gap: var(--spacing-0200);
  border-radius: 10px;
  font-size: var(--fs-16);
  font-weight: var(--fw-bold);
  padding-block: var(--spacing-0300);

  &:hover {
    background-color: var(--orange-300);
  }
`;

export default App