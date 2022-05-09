import { h } from 'preact'

const App = () => {
  return (
    <div className="hi">
      <h1>Hello React {new Date().toString()}</h1>
    </div>
  )
}

export default App
