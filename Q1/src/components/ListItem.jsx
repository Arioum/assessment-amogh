const ListItem = ({ item, deleteItem }) => {
  return (
    <article className='flex gap-[2em] justify-between items-center border-[#adadad] border-[2px] rounded-[10px] p-[.5em] sm:flex-col sm:gap-[1em]'>
      <span className='text-[1rem] font-[500] sm:text-[.9rem] '>
        {item.content}
      </span>
      <button
        className='bg-[#202020] text-white p-[.6em_2em] rounded-[5px] sm:w-[100%] sm:text-[.8rem]'
        onClick={() => deleteItem(item.id)}
      >
        Delete
      </button>
    </article>
  );
};

export default ListItem;
