import { Item } from './Item'

export function Lista() {

  return (
    <>
      <h1>Lista de componentes</h1>
      <ul>
        <Item title='Componente Vermelho' color='#FF0000' />
        <Item title='Componente Verde' color='#00FF00' />
        <Item title='Componente Azul' color='#0000FF' />
      </ul>
    </>
  )
}