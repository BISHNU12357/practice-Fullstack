import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState( 0 );
  return <div>
    <button onClick={ () => {
      setCounter( counter + 1 )
    } }>
      { counter }
    </button>
  </div>
}

export default App;