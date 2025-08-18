import React from 'react'
import Header from './Header'

function App() {
  const [itemCount, setItemCount] = React.useState(2)

  return (
    <div>
      <Header 
        count={itemCount} 
        setItemCount={setItemCount}
      />
    </div>
  )
}

export default App