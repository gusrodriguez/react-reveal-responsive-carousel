import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme';
import Carousel from '../src/components/carousel';

describe('Carousel Component', () => {
  let wrapper: ShallowWrapper;
  let props: any;

  beforeEach(() => {
    const MockComponent = () => <div/>;
    props = {
      leftArrow: <MockComponent />,
      rightArrow: <MockComponent />,
      source: [
        <MockComponent />,
        <MockComponent />,
        <MockComponent />,
      ],
    };
    
    wrapper = shallow(<Carousel {...props} />);
  });
  
  it('should contain 1 card for a 400x400 viewport size', () => {
    wrapper.instance().setState({ width: 400, height: 400});
    expect(wrapper.instance().numberOfCards).toEqual(1);
  });

  it('should contain 2 cards for a 900x400 viewport size', () => {
    wrapper.instance().setState({ width: 900, height: 400});
    expect(wrapper.instance().numberOfCards).toEqual(2);
  });

  it('should contain 3 cards for a 1400x400 viewport size', () => {
    wrapper.instance().setState({ width: 1400, height: 400});
    expect(wrapper.instance().numberOfCards).toEqual(3);
  });
});