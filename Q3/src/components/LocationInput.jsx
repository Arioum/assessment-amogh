import { useState } from 'react';

const LocationInput = ({ setLocation }) => {
  const [inputValue, setInputValue] = useState('Manipal');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length < 1) return;
    setLocation(inputValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='my-[1em] flex gap-[1em] sm:text-[.8rem] md:mb-[2em] sm:flex-col sm:gap-[.5em] md:flex-col'
    >
      <input
        type='text'
        className='flex-1 border-[2px] border-[#202020] p-[.6em] rounded-[5px] font-[600]'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Enter city name (ex: Mumbai)'
        maxLength={150}
      />
      <button className='bg-[#202020] text-white p-[.6em_2em] rounded-[5px] hover:bg-[#202020]/80'>
        Search
      </button>
    </form>
  );
};

export default LocationInput;
