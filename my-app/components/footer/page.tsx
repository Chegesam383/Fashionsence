/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bKMSfl2Y5NJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 text-sm">
        <div className="flex flex-col gap-3">
          <Link className="flex items-center gap-2" href="#">
            <h1 className="font-bold">Fashionist</h1>
          </Link>
          <p className="text-gray-500 dark:text-gray-400">
            Discover the latest fashion trends and styles.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Quick Links</h3>
          <Link className="hover:underline" href="#">
            Shop
          </Link>
          <Link className="hover:underline" href="#">
            New Arrivals
          </Link>
          <Link className="hover:underline" href="#">
            Sale
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <Link className="hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="hover:underline" href="#">
            Privacy Policy
          </Link>
          <Link className="hover:underline" href="#">
            Returns & Exchanges
          </Link>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <p>© 2024 Fashionist. All rights reserved.</p>
        <div className="flex gap-4">
          <Link className="hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="hover:underline" href="#">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
