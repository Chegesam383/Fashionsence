import Link from "next/link";
import Container from "../container";
import Rating from "../rating";
import { Button } from "../ui/button";

export const getData = async () => {
  let x = Math.floor(Math.random() * 20 + 1);
  const res = await fetch("https://fakestoreapi.com/products/" + x);
  const data = await res.json();

  return data;
};

export default async function () {
  let { image, title, description, price, rating } = await getData();

  return (
    <section className="w-full p-3 rounded-lg  bg-gradient-to-r from-white to-slate-50 translate-x-10my-12 md:my-12">
      <Container>
        <div className="md:flex  py-12 flex-wrap ">
          <div className="flex-1">
            {" "}
            <a href="#">
              <img
                width={"100%"}
                height={"100%"}
                loading="lazy"
                className="object-contain w-full min-h-[270px] max-h-[270px] hover:scale-110 hover:duration-75"
                src={image}
                alt={title}
              />
            </a>
          </div>
          <div className="flex-1">
            <h1 className="font-bold mb-2 text-3xl">{title}</h1>
            <h1 className="line-clamp-5 text-muted-foreground">
              {description}
            </h1>
            <h3 className="font-bold text-xl text-left">
              <small>$</small>
              {price}
              <s className="text-sm text-gray-400"> $300</s>
            </h3>
            <Rating rating={rating.rate} long={true} />

            <div className="flex flex-wrap items-center mt-8 gap-1  lg:gap-4">
              <Button
                variant="outline"
                className="rounded border border-primary  btn-sm  h-8 font-bold border-lg "
              >
                Add to cart
              </Button>
              <Button className="rounded border border-primary  btn-sm  h-8 font-bold border-lg ">
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
