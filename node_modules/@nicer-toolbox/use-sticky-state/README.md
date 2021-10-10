# Nicer Toolbox

## Use Sticky State

Persisting React State in localStorage

[![NPM](https://img.shields.io/npm/v/@nicer-toolbox/use-sticky-state.svg)](https://www.npmjs.com/package/@nicer-toolbox/use-sticky-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage

```jsx
function App() {
  const [count, setCount] = useStickyState(0, 'count')

  return (
    <div className='App'>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
```

## Code Behind The Scenes

```jsx
function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key)
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
  })
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue]
}
```
