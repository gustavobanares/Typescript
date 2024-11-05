

function App() {

  // 1 - variaveis
  const name: string = 'Gustavo'
  const age: number = 20
  const isWorking = true
  
  return (
    
      <div>
       <h1>Typescript com React</h1>
       <h2>Nome: {name}</h2>
       <p>Age: {age}</p>
       {isWorking && (
        <p>Está trabalhando!</p>
       )}
      </div>
      
  )
}

export default App
