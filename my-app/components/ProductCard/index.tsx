import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Heart, ShoppingCart } from "lucide-react";
import Rating from "../rating";

export default function ({
  id = 0,
  image = "",
  price = 0,
  title = "",
  description = "",
  rating = { rate: 0, count: 0 },
}) {
  return (
    <div
      className="max-w-md  rounded-xl  border  p-2 md:p-4 border-gray-300 mb-5"
      id={title}
    >
      <div className="pt-1 px-5 rounded-t-sm flex items-center justify-center  relative">
        <Button
          variant="ghost"
          className="absolute -top-4 right-0 -p-15 rounded-full "
        >
          <Heart fill="white" strokeWidth={1} />
        </Button>
        <a href="#">
          <img
            loading="lazy"
            className=" object-contain w-full min-h-[170px] max-h-[170px] hover:scale-110 hover:duration-75"
            src={image}
            alt="product image"
          />
        </a>
      </div>

      <div className="">
        <div className="min-h-16" title={title}>
          <Link
            href=""
            className="line-clamp-2 text-lg  tracking-tight text-gray-900 dark:text-white text-ellipsis"
          >
            {title}
          </Link>
        </div>
        <div className=" flex flex-wrap justify-between items-center">
          <h3 className="font-bold text-xl text-left">
            <small>$</small>
            {price}
            <s className="text-sm text-gray-400"> $300</s>
          </h3>

          <div className="flex ">
            <Rating rating={rating.rate} />
            <div>
              <small className="ml-1 self-baseline">({rating.count})</small>
            </div>
          </div>
        </div>

        <div className=" min-h-[40px]" title={description}>
          <small className="text-xs line-clamp-3  text-ellipsis">
            {description}
          </small>
        </div>

        <div className="flex flex-wrap items-center mt-3 gap-1  lg:gap-4">
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
  );
}
