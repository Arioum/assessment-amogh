import { useState } from 'react';

const InputList = ({ createList }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    createList(inputValue);
    setInputValue('');
    e.preventDefault();
  };

  return (
    <div className='my-[1em] px-1 flex gap-[1em] sm:text-[.8rem] sm:my-[2em] sm:flex-col sm:gap-[.5em]'>
      <textarea
        type='text'
        className='flex-1 border-[2px] border-[#202020] p-[.6em] rounded-[5px] font-[600]'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Type anything...'
      />
      <button
        className='bg-[#202020] text-white p-[.6em_2em] rounded-[5px]'
        onClick={handleSubmit}
      >
        Create new Item
      </button>
    </div>
  );
};

export default InputList;
