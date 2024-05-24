const Card = ({ data }) => {
  return (
    <div className='min-w-[200px] p-[1em] border rounded-[10px] shadow-[0px_0px_8px_1px_#e2e8f0] flex flex-col gap-2 xl:flex-row xl:items-center lg:flex-col md:flex-row sm:flex-col sm:items-start'>
      <h3 className="flex-1 sm:text-[1rem]">{data.title}</h3>
      <p className='text-[1.6rem] font-[800] leading-[1] sm:text-[1.4rem]'>
        <span>{data.icon}</span>
        <span>{data.value}</span>
      </p>
    </div>
  );
};

export default Card;
