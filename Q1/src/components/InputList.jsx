import { useState } from 'react';

export const InputList = ({ createList }) => {
  const [inputValue, setInputValue] = useState('');
  const [alertActive, setAlertActive] = useState(false); // This flag is used to display a user prompt

  const handleSubmit = (e) => {
    e.preventDefault();
    // This condition handles the case where the user tries to create a note with no content
    if (inputValue.length < 1) {
      setAlertActive(true);
      // This displays a prompt message for the user for 1000ms
      setTimeout(() => {
        setAlertActive(false);
      }, 1000);
      return;
    }
    createList(inputValue);
    setInputValue('');
  };

  return (
    <form className='my-[2em] flex gap-[1em] sm:text-[.8rem] sm:my-[2em] sm:flex-col sm:gap-[.5em]'>
      <div className='relative flex flex-1'>
        <textarea
          type='text'
          className='flex-1 border-[2px] border-[#202020] p-[.6em] rounded-[5px] font-[600]'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Type anything...'
          wrap='hard'
        />
        {/* This is the prompt that will be displayed when the user tires submitting an empty note */}
        {alertActive && (
          <span className='text-[red] absolute bottom-2 right-4'>
            Note cannot be empty
          </span>
        )}
      </div>
      <button
        className='bg-[#202020] text-white p-[.6em_2em] rounded-[5px] hover:bg-[#202020]/80'
        onClick={handleSubmit}
      >
        Create new Item
      </button>
    </form>
  );
};
