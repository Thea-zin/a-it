export default function Item(id, name, iconid) {
  return (
    <div className="m-3 p-2 border-[1px] rounded-md" key={id}>
      <p className="font-semibold text-sm xm:text-[1rem]">{name}</p>
      <div className="flex text-[#F3B146] relative z-10 text-sm xm:text-[1rem] place-items-center">
        <iconify-icon icon="clarity:star-solid"></iconify-icon>
        <iconify-icon icon="clarity:star-solid"></iconify-icon>
        <iconify-icon icon="clarity:star-solid"></iconify-icon>
        <iconify-icon icon="clarity:star-solid"></iconify-icon>
        <iconify-icon icon="clarity:star-solid"></iconify-icon>
        <p>(2134)</p>
      </div>
      <div className="w-full h-28 grid place-content-center relative z-0">
        <div>
          <img src={`/write_review/icons/${iconid}.png`} alt="" />
        </div>
      </div>
    </div>
  );
}
