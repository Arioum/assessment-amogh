const Card = ({ data }) => {
  return (
    <div className='min-w-[200px] flex flex-col flex-1 p-[1em] border rounded-[10px] shadow-[0px_0px_8px_1px_#e2e8f0]'>
      <h3>{data.title}</h3>
      <span className="text-[2rem] font-[800] leading-[1]">{data.value}</span>
    </div>
  );
};

export default Card;
