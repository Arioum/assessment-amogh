import { useState } from 'react';
import { InputList } from './components/InputList';
import listData from './randomData.json';
import ListItem from './components/ListItem';

const App = () => {
  const [listItems, setListItems] = useState(listData);

  function createListItem(content) {
    const id = Math.floor(Math.random() * 5000 + 1);
    setListItems((prevItems) => [{ id, content }, ...prevItems]);
  }

  function deleteListItem(id) {
    setListItems((prevItems) => prevItems.filter((items) => items.id !== id));
  }

  return (
    <div className='container p-[2em] sm:p-[1em]'>
      <header className='bg-[#202020] rounded-[10px] text-[#fff] p-[2rem]'>
        <h1 className='text-[3rem] font-[700] sm:text-[1.6rem]'>Amogh Rao</h1>
        <h2 className='text-[1.2rem] font-[500] text-[#bbb] sm:text-[.8rem]'>
          amoghrao20.work@gmail.com
        </h2>
        <h2 className='text-[1.2rem] font-[500] text-[#bbb] sm:text-[.8rem]'>
          +91 9964022680
        </h2>
      </header>
      <main>
        <InputList createList={createListItem} />
        <section className='flex flex-col gap-[1em]'>
          {listItems?.map((item) => (
            <ListItem key={item.id} item={item} deleteItem={deleteListItem} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
