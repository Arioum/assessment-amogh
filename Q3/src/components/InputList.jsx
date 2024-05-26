import { useState } from 'react';

const InputList = ({ createList }) => {
  const [inputValue, setInputValue] = useState('');
  const [alertActive, setAlertActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length < 1) {
      setAlertActive(true);
      setTimeout(() => {
        setAlertActive(false);
      }, 1000);
      return;
    }
    createList(inputValue);
    setInputValue('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='my-[1em] px-1 flex gap-[1em] sm:text-[.8rem] md:mb-[2em] sm:flex-col sm:gap-[.5em] md:flex-col'
    >
      <div className='relative flex flex-1'>
        <textarea
          className='flex-1 border-[2px] border-[#202020] p-[.6em] rounded-[5px] font-[600]'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Type anything...'
          maxLength={150}
          wrap='hard'
        />
        {alertActive && (
          <span className='text-[red] absolute bottom-2 right-4'>
            Note cannot be empty
          </span>
        )}
      </div>
      <button className='bg-[#202020] text-white p-[.6em_2em] rounded-[5px] hover:bg-[#202020]/80'>
        Create new Item
      </button>
    </form>
  );
};

export default InputList;
