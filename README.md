# React Reveal Responsive Carousel

:movie_camera: An animated and responsive carousel based on React-Reveal. It allows render any component as a slide.

## Features
- Animation on enter the viewport.
- Render any component as slides.
- Configure sizes of the slides.
- Custom arrows as separated components.
- Recalculate the number of slides per page on resize the browser, and adapt to the viewport.
- Animation on resize.

### How does it look?
![alt example](https://user-images.githubusercontent.com/2318870/102021253-dd207e80-3d7e-11eb-9ce1-1a70ca3848a4.gif)


## Installation
```
npm install react-reveal-responsive-carousel --save
```

### Usage

```js
import Carousel from 'react-reveal-responsive-carousel'

const slides = [
  <div>Text 1</div>,
  <div>Text 2</div>,
  <div>Text 3</div>
];

const leftArrow = (
  <div>
    <LeftArrow fillColor="#000" />
  </div>
);
const rightArrow = (
  <div>
    <RightArrow fillColor="#000" />
  </div>
);

return (
  <div>
    <Carousel
      source={slides}
      leftArrow={leftArrow}
      rightArrow={rightArrow}
    />
  </div>
);
```

### Props
|  prop       |  type                  | purpose                                             |  required  |
|-------------|------------------------|-----------------------------------------------------|-----------|
|  source     |  Array of ReactElement | Total of slides tha will be render in the carousel  |      x    |
|  leftArrow  |  ReactElement          | Component to represent the left arrow               |      x    |
|  rightArrow |  ReactElement          | Component to represent the righ arrow               |      x    |


- The arrows component are expected to be SVG react components, but they can be any component. The arrows can be wrapped on a parent component for styling and positioning.
- The carousel component can be wrapped in a container, and it will automatically adapt to the size of the container.

### Pending features
- The carousel should provide default arrows if they are not sent as props.

### Example
[This application](https://mockflix.netlify.app/search) shows an example of the implementation of the component.
