const CardItem = ({
  name,
  imgURL,
  isVisited,
  children,
  id,
  remove,
  isDefault,
}) => {
  return (
    <div className="relative rounded-md bg-zinc-950 w-64 hover:scale-110">
      <img src={imgURL} alt={`City ${id}`} className="rounded-md" />
      {(isDefault === false || isDefault === undefined) && (
        <button
          className="absolute top-3 right-3 opacity-0 hover:bg-blue-500 hover:opacity-100 w-20 h-8 rounded-md"
          onClick={() => remove(id)}
        >
          Remove
        </button>
      )}
      <div className="flex flex-col p-4">
        <h2 className="text-2xl text-red-600 font-bold">{name}</h2>
        <p className="text-gray-500">{children}</p>
        {isVisited ? <span>✔️ visitata</span> : <span>✖️ non visitata</span>}
      </div>
    </div>
  );
};

export default CardItem;




