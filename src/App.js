import React from 'react'

function App() {
  const debounceFun = (callback, delay) => {
    let timer
    return function(...agrs){
      if(timer) clearTimeout(timer)

      timer = setTimeout(() => callback(...agrs), delay)
    }
  }

  let handleChange = debounceFun((e) => console.log(e.target.value), 1000)

  return (
    <div>
      <h1>Debounce Fun </h1>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default App
