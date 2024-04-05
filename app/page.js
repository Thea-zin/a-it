import Link from "next/link";
import MainCategories from "./pages/mainCategories/page";
export default function Home() {
  return (
    <main>
      {/* <a href='/pages/vendors'>Vendor</a> */}
      <MainCategories />
    </main>
  );
}
