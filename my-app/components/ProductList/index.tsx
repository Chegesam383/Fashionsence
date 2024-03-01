import { products } from "@/lib/utils";
import ProductCard from "../ProductCard";
import Container from "../container";
import { Button } from "../ui/button";
import Link from "next/link";

export const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return data;
};

export default async function ({ title = "" }) {
  let products = await getData();

  if (title == "Best selling")
    products = products.sort((a, b) => b.rating.count - a.rating.count);
  if (title === "Trending")
    products = products.sort((a, b) => a.rating.count - b.rating.count);
  return (
    <section id={title}>
      <Container className="max-w-7xl rounded-sm bg-white my-4 p-4">
        <div className="flex justify-between  items-center">
          <h3 className="mt-4 mb-8  text-2xl tracking-widest text-green-900 font-bold text-leading">
            {title}
          </h3>
          <Link href="ghost" className="mb-1">
            view all
          </Link>
        </div>

        <div className="sm:grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 ">
          {products.slice(0, 4).map((product) => (
            <ProductCard {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
