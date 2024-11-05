

function App() {

  // 1 - variaveis
  const name: string = 'Gustavo'
  const age: number = 20
  const isWorking = true

  // 2 - funcoes
 const userGreeting = (name: string) =>{
  return `Olá, ${name}!`
 }
  
  return (
    
      <div>
       <h1>Typescript com React</h1>
       <h2>Nome: {name}</h2>
       <p>Age: {age}</p>
       {isWorking && (
        <p>Está trabalhando!</p>
       )}
       <h3>{userGreeting(name)}</h3>
      </div>
      
  )
}

export default App
