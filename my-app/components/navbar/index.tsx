/**
 * v0 by Vercel.
 * @see https://v0.dev/t/b3UKMNej4Ax
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Container from "@/components/container";
import { Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border border-gray-100 border-t-0 border-l-0 border-r-0 border-b-1 pt-1 backdrop-filter backdrop-blur-[100px] fixed top-0 right-0 w-full z-50 ">
      <Container className="flex items-center justify-between">
        <Link className="font-bold flex gap-2 text-xl" href="#">
          <ShoppingCart />
          <h3>
            F<span className="text-primary">sence</span>
          </h3>
        </Link>
        <div className=" hidden md:flex lg:space-x-10 md:space-x-7">
          <Link className="text-sm text-primary hover:text-primary " href="#">
            Home
          </Link>
          <Link className="text-sm hover:text-primary font-small" href="#">
            Categories
          </Link>
          <Link className="text-sm hover:text-primary font-sm" href="#">
            Shop
          </Link>
          <Link className="text-sm hover:text-primary font-sm" href="#">
            Top selling
          </Link>
        </div>

        <div className="flex gap-8 items-center">
          <form className="hidden lg:flex">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                className="w-full rounded-full flex h-9 border-input bg-transparent px-3 py-1 text-sm  transition-colors border bg-gray-200  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                placeholder="Search"
              />
            </div>
          </form>
          <div className="flex gap-x-2">
            <User />
            <h4 className="hidden lg:flex">Account</h4>
          </div>
          <div className="flex gap-6 items-center">
            <div className="relative">
              <Badge className="absolute -top-2 left-4">13</Badge>
              <ShoppingCart />
            </div>
            <h4 className="hidden lg:flex">Cart</h4>
          </div>
        </div>
      </Container>
    </nav>
  );
}
