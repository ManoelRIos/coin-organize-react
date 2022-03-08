import {Item} from '../../types/Item'

type Props = {
  item: Item
}

export const TableItem = ({item}: Props) =>{
  return(

    <tr>
      <td>...</td>
      <td>{item.category}</td>
      <td>{item.title}</td>
      <td>{item.value}</td>
    </tr>
  );
}