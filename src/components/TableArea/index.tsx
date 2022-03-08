import {Item} from '../../types/Item'
import {TableItem} from '../TableItem'
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
          <TableItem key={index} item={item}/>
        ))}
      </tbody>
    </table>    
  );
}