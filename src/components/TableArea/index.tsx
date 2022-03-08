import {Item} from '../../types/Item'
import './styles.css'

type Props = {
  list: Item[]
}

export const TableArea = ({list}: Props) => {
  return(
    <table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Categoria</th>
          <th>Título</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {/*não está funcionando*/}
        {list.map((item, index)=>( 
          <tr key={index}>
            <td></td>
            <td></td>
            <td>{item.title}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>    
  );
}