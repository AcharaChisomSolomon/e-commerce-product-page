import * as Dialog from "@radix-ui/react-dialog";
import { IMAGES, QUERIES } from "./utils/constants";
import styled from "@emotion/styled";
import UnstyledButton from "./utils/UnstyledButton";
import VisuallyHidden from "./utils/VisuallyHedden";
import IconClose from './images/icon-close.svg'

export default function LightBox({
  isOpen,
  onDismiss,
  tag,
  updateTag,
  handleSetNextImg,
  handleSetPrevImg
}) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <Dialog.Title asChild>
            <VisuallyHidden>Product Image Gallery</VisuallyHidden>
          </Dialog.Title>
          <Dialog.Description asChild>
            <VisuallyHidden>
              A gallery view of product images with navigation controls
            </VisuallyHidden>
          </Dialog.Description>
          
          <CloseButton onClick={onDismiss}>
            <img src={IconClose} alt="Close gallery" />
          </CloseButton>
          
          <MainImgContainer>
            <div>
              <img src={IMAGES[tag]['large']} alt="" />
            </div>
            <RightNavigator onClick={handleSetNextImg}>
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
              </svg>
            </RightNavigator>
            <LeftNavigator onClick={handleSetPrevImg}>
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
              </svg>
            </LeftNavigator>
          </MainImgContainer>
          
          <SubImages>
            {[1, 2, 3, 4].map((num) => (
              <SubImage 
                key={num}
                onClick={() => updateTag(num)} 
                isactive={tag === num}
              >
                <img src={IMAGES[num]['small']} alt="" />
              </SubImage>
            ))}
          </SubImages>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const DialogOverlay = styled(Dialog.Overlay)`
  display: none;

  @media ${QUERIES.laptopAndLarger} {
    display: revert;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 999;
  }
`;

const DialogContent = styled(Dialog.Content)`
  display: none;

  @media ${QUERIES.laptopAndLarger} {
    display: revert;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 606px;
    max-height: 90vh; 
    z-index: 1000;
    padding: 28px;
    
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
    
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
  }
`;

const CloseButton = styled(UnstyledButton)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: sticky;
  top: 0;
  margin-bottom: var(--spacing-0200);
  filter: brightness(0) invert(1);
  
  &:hover {
    filter: brightness(0) saturate(100%) invert(65%) sepia(61%) 
            saturate(2619%) hue-rotate(346deg) brightness(101%) contrast(101%);
  }
`;

const MainImgContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    border-radius: 1rem;
  }
`;

const Navigator = styled(UnstyledButton)`
  width: 56px;
  height: 56px;
  background-color: var(--white);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 45%;
  transform: translateY(-50%);
`
const LeftNavigator = styled(Navigator)`
  left: 0;
  transform: translateX(-50%);
`;

const RightNavigator = styled(Navigator)`
  right: 0;
  transform: translateX(50%);
`;

const SubImages = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  gap: var(--spacing-0400);
  margin-block-start: var(--spacing-0400);
`;

const SubImage = styled(UnstyledButton)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid transparent;
  border-color: ${p => p.isactive && 'var(--orange-500)'};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${p => p.isactive ? 'var(--white)' : 'transparent'};
    opacity: 0.5;
  }

  &:hover {
    &::after {
      background-color: var(--white);
      opacity: ${p => !p.isactive && '0.5'};
    }
  }
`;