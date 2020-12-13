import React from 'react';
import { mount } from 'enzyme';
import Carousel from '../src/components/carousel';
import Slide from 'react-reveal/Slide';

describe('Carousel Component', () => {
  let wrapper;

  beforeEach(() => {
    const mockLeftArrow = () => <div/>;
    const mockRightArrot = () => <div/>;
    const mockSlides = [
      <div>Text 1</div>,
      <div>Text 2</div>,
      <div>Text 3</div>
    ];
  
    wrapper = mount(
      <Carousel
        source={mockSlides}
        leftArrow={mockLeftArrow}
        rightArrow={mockRightArrot}
      />
    );
  });

  it('should rezise the viewport and view only one slide in the viewport', () => {
    global.innerWidth = 480;
    global.dispatchEvent(new Event('resize'));

    expect(wrapper.find(Slide)).toHaveLength(1);
  });

  it('should rezise the viewport and view two slides in the viewport', () => {
    global.innerWidth = 850;
    global.dispatchEvent(new Event('resize'));

    expect(wrapper.find(Slide)).toHaveLength(2);
  });

  it('should rezise the viewport and view three slides in the viewport', () => {
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));

    expect(wrapper.find(Slide)).toHaveLength(3);
  });
});