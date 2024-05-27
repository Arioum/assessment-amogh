const Note = ({ item, deleteItem }) => {
  return (
    <article className='flex gap-[2em] justify-between items-center bg-[#fff] border-[#adadad] border-[2px] rounded-[10px] p-[.5em] md:flex-col md:gap-[1em] md:items-start'>
      <span className='text-[1rem] font-[500] sm:text-[.9rem] break-word max-w-[75vw] overflow-hidden'>
        {item.content}
      </span>
      <button
        className='bg-[#202020] text-white p-[.6em_2em] rounded-[5px] md:w-[100%] sm:text-[.8rem] hover:bg-[#202020]/80'
        onClick={() => deleteItem(item.id)}
      >
        Delete
      </button>
    </article>
  );
};

export default Note;
