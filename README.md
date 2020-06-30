# Svgs to React and Icon font

Convert a folder of `.svg` files into React components and an icon font

## Processes

- Optimize all svgs using `svgo`
- Generate React components from svgs by running `yarn to:react`
- Generate an icon font from svgs by running `yarn to:font`
- Build all assets (react and icon fonts) by running `yarn build`

## To-Do

Consider converting to:

- pngs: using `node-svg2img`
- svg sprites: using `svg-sprite`
