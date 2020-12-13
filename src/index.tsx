import React, { ReactElement } from 'react';
import Slide from 'react-reveal/Slide';
import makeCarousel from 'react-reveal/makeCarousel';
import debounce from 'lodash.debounce';
import chunk from 'lodash/chunk';
import shortid from 'shortid';
import {
  StyledCarouselContainer,
  StyledPage,
} from './components/carousel/styled';
import { DEFAULT_CARD_WIDTH, DEFAULT_CARD_SEPARATION } from './components/carousel/constants';

type CarouselProps = {
  source: Array<JSX.Element>,
  leftArrow: JSX.Element,
  rightArrow: JSX.Element,
  cardWidth?: number,
  cardSeparation?: number;
}

type CarouselUIProps = {
  position: number,
  handleClick: () => void,
  children: ReactElement,
}

class Carousel extends React.Component {
  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  updateWidthAndHeight = (e: UIEvent) => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  componentDidMount() {
    // subscribe to resize
    // @ts-ignore
    window.addEventListener("resize", debounce(this.updateWidthAndHeight, 500));

    // on unmount, deattach event listener
    return () => window.removeEventListener("resize", this.updateWidthAndHeight);
  };

  render() {
    const {
      source,
      leftArrow,
      rightArrow,
      cardWidth,
      cardSeparation,
    } = this.props as CarouselProps;
  
    // Calculate how many slides will fit per page depending on the viewport width
    const innerCardWith = cardWidth || DEFAULT_CARD_WIDTH;
    const innerCardSeparation = cardSeparation || DEFAULT_CARD_SEPARATION;
    //@ts-ignore
    const availableWidth = this.state.width - innerCardSeparation;
    const cardsNumber = Math.floor(availableWidth / innerCardWith);
  
    let slides: Array<JSX.Element> = [];
  
    if (source && source.length) {
      const pages = chunk(source, cardsNumber);
  
      // Balance the last page with placeholders
      const lastPage = pages[pages.length - 1];
      if (lastPage && (lastPage.length < cardsNumber)) {
        const gap = cardsNumber - lastPage.length;
        for (let i = 0; i < gap; i++) {
          lastPage.push(<div key={`card_${shortid.generate()}`} />)
        }
      }
  
      // Map the pages to slides components
      slides = pages.map(page => (
        <Slide key={shortid.generate()} right>
          <StyledPage>
            {page}
          </StyledPage>
        </Slide>
      ));
    }
  
    const CarouselUI = ({ position, handleClick, children }: CarouselUIProps) => {
      return (
      <StyledCarouselContainer width={cardsNumber * innerCardWith}>
        {children}
        {React.cloneElement(leftArrow, { onClick:handleClick, 'data-position': position - 1 })}
        {React.cloneElement(rightArrow, { onClick:handleClick, 'data-position': position + 1 })}
      </StyledCarouselContainer>
    )};
  
    const Carousel = makeCarousel(CarouselUI);
  
    return (
      <Carousel defaultWait={0}>
        {slides}
      </Carousel>
    );
  }
}

export default Carousel;
