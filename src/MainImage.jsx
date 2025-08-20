import React from 'react'
import styled from '@emotion/styled'
import { QUERIES } from './utils/constants'
import UnstyledButton from './utils/UnstyledButton'
import { IMAGES } from './utils/constants'
import LightBox from './LightBox'

export default function MainImage() {
  const [tag, setTag] = React.useState(1)
  const [showLightBox, setShowLightBox] = React.useState(false)

  const handleSetPrevImg = () => {
    setTag(u => {
      if (u === 1) {
        return 4
      } else {
        return u - 1
      }
    })
  }
  const handleSetNextImg = () => {
    setTag(u => {
      if (u === 4) {
        return 1
      } else {
        return u + 1
      }
    })
  }
  const updateTag = t => setTag(t)


  return (
    <Wrapper>
      <MainImgContainer>
        <img className='small' src={IMAGES[tag]['large']} alt="" />
        <UnstyledButton onClick={() => setShowLightBox(true)} className='large'>
          <img src={IMAGES[tag]['large']} alt="" />
        </UnstyledButton>
        <RightNavigator onClick={handleSetNextImg}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </RightNavigator>
        <LeftNavigator onClick={handleSetPrevImg}>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </LeftNavigator>
      </MainImgContainer>
      <SubImages>
        <SubImage onClick={() => updateTag(1)} isactive={tag === 1}>
          <img src={IMAGES[1]['small']} alt="" />
        </SubImage>
        <SubImage onClick={() => updateTag(2)} isactive={tag === 2}>
          <img src={IMAGES[2]['small']} alt="" />
        </SubImage>
        <SubImage onClick={() => updateTag(3)} isactive={tag === 3}>
          <img src={IMAGES[3]['small']} alt="" />
        </SubImage>
        <SubImage onClick={() => updateTag(4)} isactive={tag === 4}>
          <img src={IMAGES[4]['small']} alt="" />
        </SubImage>
      </SubImages>
      <LightBox 
        isOpen={showLightBox}
        onDismiss={() => setShowLightBox(false)}
        tag={tag}
        updateTag={updateTag}
        handleSetNextImg={handleSetNextImg}
        handleSetPrevImg={handleSetPrevImg}
      />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .large {
    display: none;
  }

  @media ${QUERIES.tabletAndLarger} {
    max-width: calc(1440 / 16 * 1rem);
    margin: 0 auto;
    padding-inline: clamp(1.5rem, 20.588vw + -6.221rem, 10.25rem);
  }

  @media ${QUERIES.laptopAndLarger} {
    align-content: center;
    max-width: revert;
    margin: revert;
    padding-inline: revert;

    .small {
      display: none;
    }

    .large {
      display: revert;
      cursor: pointer;
    }
  }
`;

const MainImgContainer = styled.div`
  isolation: isolate;
  position: relative;
  overflow: hidden;

  img {
    aspect-ratio: 1 / 1;
  }

  @media ${QUERIES.tabletAndLarger} {
    border-radius: 1rem;

    img {
      border-radius: 1rem;
      aspect-ratio: 2 / 1;
      object-fit: cover;
      object-position: center;
    }
  }

  @media ${QUERIES.laptopAndLarger} {
    img {
      aspect-ratio: 1 / 1;
      object-position: revert revert;
      transition: transform 250ms;
    }

    img:hover {
      transform: scale(1.05);
    }
  }
`;

const Navigator = styled(UnstyledButton)`
  width: 40px;
  height: 40px;
  background-color: var(--white);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  @media ${QUERIES.laptopAndLarger} {
    display: none;
  }
`
const LeftNavigator = styled(Navigator)`
  left: var(--spacing-0200);
`;

const RightNavigator = styled(Navigator)`
  right: var(--spacing-0200);
`;

const SubImages = styled.div`
  display: none;
  gap: var(--spacing-0400);
  margin-block-start: var(--spacing-0400);

  @media ${QUERIES.laptopAndLarger} {
    display: flex;
  }
`;

const SubImage = styled(UnstyledButton)`
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid transparent;
  border-color: ${p => p.isactive && 'var(--orange-500)'};

  img {
    opacity: ${p => p.isactive && '0.5'};
  }

  &:hover {
    opacity: ${p => !p.isactive && '0.5'};
  }
`;