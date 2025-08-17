import React from 'react'
import Header from './Header'

function App() {
  const [itemCount, setItemCount] = React.useState(0)

  return (
    <div>
      <Header count={itemCount} />
    </div>
  )
}

export default App