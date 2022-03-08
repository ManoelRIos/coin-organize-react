import { useState, useEffect } from 'react';

import {TableArea} from './components/TableArea'

import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter'

import './App.css'

import {Item} from './types/Item';
import {Category} from './types/Category';

import {items} from './db/items';
import {categories} from './db/categories';

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() =>{
    setFilteredList( filterListByMonth(list, currentMonth))

  }, [list, currentMonth])

  return(
    <div className="container">
      <header>
        <h2 className='header-text'>Coin.Organize</h2>
      </header>

      <body>
        {/* Área de informação*/}    

        {/* Área de inserção de dados*/}      

        {/* Tabela de dados*/}
        <TableArea list={filteredList}/>
      </body>
      
    </div>
    

  );
}

export default App;