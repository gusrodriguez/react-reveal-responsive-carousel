# React Reveal Responsive Carousel
![npm](https://img.shields.io/npm/v/react-reveal-responsive-carousel)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-reveal-responsive-carousel?color=r)
![Travis (.org) branch](https://img.shields.io/travis/gusrodriguez/react-reveal-responsive-carousel/develop)

:movie_camera: An animated and responsive carousel based on [React-Reveal](https://www.react-reveal.com/) animation library. It allows to render any component as a slide.

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

### Peer dependencies
The component has the following peer dependencies, that need to be installed by the consumer app.
```
  "react": "^16.14.0",
  "react-dom": "^16.14.0",
  "react-reveal": "^1.2.2", 
  "styled-components": "^4.4.0"
```

### Pending features
- The carousel should provide default arrows if they are not sent as props.

### Example
[This application](https://mockflix.netlify.app/search) shows a working example of an implementation of the component.
