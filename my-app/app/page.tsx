import Image from "next/image";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductList from "@/components/ProductList";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Navbar />
      <Hero />

      <ProductList title="Best selling" />
      <ProductList title="Trending" />
    </main>
  );
}
