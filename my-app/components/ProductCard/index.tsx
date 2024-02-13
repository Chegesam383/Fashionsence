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
    <div>
      bazien
      <div className="w-full max-w-sm bg-white flex flex-col gap-4 rounded-xl  dark:bg-gray-800  dark:border-gray-700">
        <div className="p-8 rounded-t-sm flex items-center justify-center bg-gray-100 relative">
          <Button variant="ghost" className="absolute top-0 right-0">
            <Heart fill="primary" strokeWidth={0} />
          </Button>
          <a href="#">
            <img
              className=" object-contain w-full min-h-[200px] max-h-[200px]"
              src={image}
              alt="product image"
            />
          </a>
        </div>

        <div className="">
          <div className="min-h-16">
            <Link
              href=""
              className="line-clamp-2 text-lg  tracking-tight text-gray-900 dark:text-white text-ellipsis"
            >
              {title}
            </Link>
          </div>
          <div className=" flex justify-between items-center">
            <h3 className="font-bold text-xl text-left">
              <small>$</small>
              {price}
            </h3>
            <div className="flex ">
              <Rating rating={rating.rate} />
              <div>
                <small className="ml-1 self-baseline">({rating.rate})</small>
              </div>
            </div>
          </div>

          <div className=" min-h-[70px]">
            <small className="text-xs line-clamp-3  text-ellipsis">
              {description}
            </small>
          </div>

          <div className="flex items-center justify-between gap-4">
            <Button
              variant="outline"
              className="rounded border border-primary  btn-sm mt-3 h-8 font-bold border-lg "
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
