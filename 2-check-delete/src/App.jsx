import { useState } from 'react'

import './App.css'

function App () {
  const arr = ['🍎 Apple', '🍊 Orange', '🍌 Banana', '🍇 Grapes']
  const [fruits, setFruits] = useState(arr)
  const [value, setValue] = useState('')
  const [showBtn, setShowBtn] = useState(false)

  const handleCheck = fruit => {
    setValue(fruit)
    setShowBtn(true)

    // if (e.target.checked) {
    //   setShowBtn(true)
    // } else {
    //   setShowBtn(false)
    // }
  }

  const deleteByValue = value => {
    setFruits(oldValues => {
      return oldValues.filter(fruit => fruit !== value)
    })
  }

  return (
    <div className='App'>
      <ul>
        {fruits.map(fruit => {
          return (
            <li key={fruit}>
              {/* <input
                type='checkbox'
                onClick={e => handleCheck(e, fruit, index)}
                value={index}
              /> */}

              {showBtn && value === fruit ? (
                <span className='check active'></span>
              ) : (
                <span
                  className='check'
                  onClick={() => handleCheck(fruit)}
                ></span>
              )}

              <span>{fruit}</span>

              {value === fruit && showBtn && (
                <button onClick={() => deleteByValue(fruit)}>Delete</button>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
