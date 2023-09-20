import { useState } from 'react'

function TestUseState() {

  const [count, setCount] = useState(0)
  const [fruit, setFruit] = useState('')

  const handleSelectedFruit = (currentFruit) => {
    setFruit(currentFruit)
  }

  return (
    <div>
      <h1>Hello world</h1>
      <p>Welcome</p>
      <p>{count}</p>
      <button onClick={(e) => setCount(count + 1)}>Increase</button>
      <button onClick={(e) => setCount(count - 1)}>Decrease</button>
      <div>
        {
          fruit && (
            <h1>Você clicou em {fruit}</h1>
          )
        }
        {
          !fruit && (
            <h1>Clique em alguma opção</h1>
          )
        }
        <button onClick={() => handleSelectedFruit('Maçã')}>Maçã</button>
        <button onClick={() => handleSelectedFruit('Pera')}>Pera</button>
        <button onClick={() => handleSelectedFruit('Banana')}>Banana</button>
      </div>
    </div>
  )
}

export default TestUseState
