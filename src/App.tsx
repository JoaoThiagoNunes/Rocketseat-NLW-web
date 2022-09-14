// JSX: JS + XML (HTMl)
// Componentes / propriedades = function com letra maiuscula que retorna conjunto de html

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
     {props.title}
    </button>
  )
}


function App() {
  return (
    <div>
      <Button title='send1'/>
      <Button title='endpoint'/>
    </div>
  )
  
}

export default App
