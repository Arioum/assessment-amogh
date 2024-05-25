import { useState } from 'react';

const InputList = ({ createList }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length < 1) return;
    createList(inputValue);
    setInputValue('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='my-[1em] px-1 flex gap-[1em] sm:text-[.8rem] md:mb-[2em] sm:flex-col sm:gap-[.5em] md:flex-col'
    >
      <textarea
        className='flex-1 border-[2px] border-[#202020] p-[.6em] rounded-[5px] font-[600]'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Type anything...'
        maxLength={150}
      />
      <button className='bg-[#202020] text-white p-[.6em_2em] rounded-[5px]'>
        Create new Item
      </button>
    </form>
  );
};

export default InputList;