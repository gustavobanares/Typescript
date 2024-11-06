
// 4 - importacao de componentes
import FirstComponent from "./components/FirstComponent"

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent"
import Destructuring from "./components/Destructuring"

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
       <FirstComponent />
       <SecondComponent name='Segundo' />
       <Destructuring title='Primeiro post' content="Algum conteudo" commentsQty={10} tags={['ts', 'js']} />
       <Destructuring title='Segundo post' content="Mais outro conteudo" commentsQty={5} tags={['python']} />
      </div>
      
  )
}

export default App
