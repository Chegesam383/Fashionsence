import Link from "next/link";
import ProductList from "@/components/ProductList";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Hero />

      <ProductList title="Best selling" />
      <ProductList title="Trending" />
    </main>
  );
}
