# Pattern Generator

Generate sprites suitable for Mapbox

## Usage

Install and run with -

```bash
npm install pattern-generator
npm start
```

Use the [pattern designer](https://p3tecracknell.github.io/pattern-generator) to generate the pattern identifier.

Use it in layers with `fill-pattern` and load it into your MapboxGL application with `generateImageData`:

```javascript
import { generateImageData } from 'pattern-generator'

const map = new mapboxgl.Map({...})

map.on('styleimagemissing', (event) => {
    const data = generateImageData(event.id)
    map.addImage(event.id, data)
})

map.addLayer({
    ...
    type: 'fill',
    paint: {
        'fill-pattern': 'd1-16-15-0-0-255-100-255-0-0-10'
    }
})

```

## Specification

Patterns are defined using the following layout:

```javascript
[direction]-[size]-[lineWidth]-[strokeRed]-[strokeGreen]-[strokeBlue]-[strokeAlpha]-[backgroundRed]-[backgroundGreen]-[backgroundBlue]-[backgroundAlpha]
```
