
// 4 - importacao de componentes
import FirstComponent from "./components/FirstComponent"

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent"
import Destructuring, {Category} from "./components/Desestructuring"

// 6 - useState
import State from "./components/State"

// 9 - type
type textOrNull = string | null

type fixed = 'Isso' | 'Ou' | 'Aquilo'

function App() {

  // 1 - variaveis
  const name: string = 'Gustavo'
  const age: number = 20
  const isWorking = true

  // 2 - funcoes
 const userGreeting = (name: string) =>{
  return `Olá, ${name}!`
 }

//  9 - type
const myText:textOrNull = 'Tem algum texto aqui'
let mySecondText:textOrNull = null

// mySecondText = 'opa'

const testandoFixed:fixed = 'Isso'
  
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
       <Destructuring title='Primeiro post' content="Algum conteudo" commentsQty={10} tags={['ts', 'js']} category={Category.TS} />
       <Destructuring title='Segundo post' content="Mais outro conteudo" commentsQty={5} tags={['python']} category={Category.P} />
       <State />
       {myText && <p>Tem texto na variavel</p>}
       {mySecondText && <p>Tem texto na variavel</p>}
      </div>
      
  )
}

export default App
