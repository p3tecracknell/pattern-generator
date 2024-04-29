# Pattern Generator

Generate sprites suitable for Mapbox

## Usage

Install and run with -

```bash
npm install pattern-generator
npm start
```

Use [https://p3tecracknell.github.io/pattern-generator] to design your pattern. Modify the hash value with the following parameters:

```javascript
[direction]-[size]-[lineWidth]-[strokeRed]-[strokeGreen]-[strokeBlue]-[strokeAlpha]-[backgroundRed]-[backgroundGreen]-[backgroundBlue]-[backgroundAlpha]
```

Load it into your MapboxGL application using `generateImageData` to load in a style requested in a layer using `fill-pattern`:

```javascript
import { generateImageData } from 'pattern-generator'

const sampleFillPattern = 'd1-16-15-0-0-255-100-255-0-0-10'
const map = new mapboxgl.Map({...})

map.on('styleimagemissing', (event) => {
    const data = generateImageData(event.id)
    map.addImage(event.id, data)
})

map.addLayer({
    ...
    type: 'fill',
    paint: {
        'fill-pattern': sampleFillPattern
    }
})

```
