const Card = ({ data, title, icon }) => {
  return (
    <div className='min-w-[200px] p-[1em] glassmorph border rounded-[10px] flex flex-col gap-2 xl:flex-row xl:items-center lg:flex-col md:flex-row sm:flex-col sm:items-start'>
      <h3 className='flex-1 sm:text-[1rem]'>{title}</h3>
      <p className='text-[1.6rem] font-[800] leading-[1] sm:text-[1.4rem]'>
        <span>{icon}</span>
        <span>{data}</span>
      </p>
    </div>
  );
};

export default Card;
