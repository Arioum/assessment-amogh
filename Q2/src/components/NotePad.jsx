import { useState } from 'react';
import Note from './Note';
import InputList from './InputList';
import listData from './randomData.json';

const NotePad = () => {
  const [listItems, setListItems] = useState(listData);

  function createListItem(content) {
    const id = Math.floor(Math.random() * 5000 + 1); // Creates a random note ID
    setListItems((prevItems) => [{ id, content }, ...prevItems]);
  }

  function deleteListItem(id) {
    setListItems((prevItems) => prevItems.filter((items) => items.id !== id));
  }
  return (
    <div className='flex-1 flex flex-col max-h-[500px] p-[1em] border rounded-[10px] shadow-[0px_0px_8px_1px_#e2e8f0] md:max-h-[1000px]'>
      <h3 className='px-1 text-[1.8rem] font-[800] xl:text-[1.6rem] sm:text-[1.2rem]'>
        NotePad
      </h3>
      <InputList createList={createListItem} />
      <section className='flex-1 flex flex-col gap-[1em] min-h-max overflow-y-auto scrollbar px-1'>
        {listItems?.map((item) => (
          <Note key={item.id} item={item} deleteItem={deleteListItem} />
        ))}
      </section>
    </div>
  );
};

export default NotePad;
