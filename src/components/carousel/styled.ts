import styled from 'styled-components';

export const StyledCarouselContainer = styled.div<{ width: number }>`
  position: relative;
  overflow: hidden;
  width: ${props => props.width}px;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
`;

export const StyledPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

