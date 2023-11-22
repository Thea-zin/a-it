export default function ReviewBox({imgs, name, title}) {
  return (
    <div className="px-4">
      <div className="flex place-items-center">
        <div className="w-12 h-12 flex place-items-center">
          <img
            src={imgs}
            alt=""
            className="rounded-full"
          />
        </div>
        <div>
          <p>{name}</p>
          <p className="text-xs">{title}</p>
        </div>
      </div>
      <p className="text-xl font-semibold mt-5 text-black">
        My favorite AI tools for designers
      </p>
      <div className="mt-1 line-clamp-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A incidunt
        ratione dicta quibusdam quas, excepturi similique numquam esse ipsum
        dolorum ut ex impedit, doloribus sit? Beatae cupiditate inventore a
        quam.
      </div>
      <button className="mt-3 text-xs text-blue-700 font-bold">Read full review {">"}</button>
    </div>
  );
}
