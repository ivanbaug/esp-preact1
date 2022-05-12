import { h, render } from 'preact'

import App from './App'

// root holds our app's root DOM Element:
let root

// render(<App />, document.querySelector('#root'))
function init() {
  root = render(<App />, document.body, root)
}
init()

// example: Re-render on Webpack HMR update:
if (module.hot) module.hot.accept('./App', init)
