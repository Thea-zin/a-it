import Link from "next/link";
import MainCategories from "./pages/mainCategories/page";
import Categories from "./pages/categories/page";
export default function Home() {
  return (
    <main>
      {/* <a href='/pages/vendors'>Vendor</a> */}
      <Categories />
    </main>
  );
}
