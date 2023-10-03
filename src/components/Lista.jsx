import { Item } from './Item'

export function Lista() {

  return (
    <>
      <h1>Lista de componentes</h1>
      <ul>
        <Item title='Item 1' color='#FF0000' />
        <Item title='Item 2' color='#00FF00' />
        <Item title='Item 3' color='#0000FF' />
      </ul>
    </>
  )
}