import Item from "../../write_review_page/components/item_component";

export default function PopularProduct() {
  return (
    <div className="p-5 bg-white rounded-2xl">
      <p className="text-2xl font-bold">Popular products</p>
      <p className="mt-1 text-darkgray">
        Popular Content Analytics products used by Content Marketing
        professionals
      </p>
      <div className="grid grid-cols-4 mt-3 w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
          return Item(index, "Trello", item);
        })}
      </div>
    </div>
  );
}
