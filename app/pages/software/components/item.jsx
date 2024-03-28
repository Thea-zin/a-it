import Link from "next/link";

export default function Item({ id, software }) {
  return (
    <div
      className="m-3 p-2 border-[1px] rounded-md overflow-clip"
      key={id}
    >
      <Link
        href={{
          pathname: "/pages/software",
          query: { id: software.id },
        }}
      >
        <p className="font-semibold text-sm xm:text-[1rem]">{software.name}</p>
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
            <img src={software.icon} alt="" className="w-32 p-5" />
          </div>
        </div>
      </Link>
    </div>
  );
}
