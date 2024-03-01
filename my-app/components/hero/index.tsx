import Link from "next/link";
import Container from "../container";

export default function () {
  return (
    <section className="w-full py-6 md:py-12">
      <Container>
        <div className="container px-4 mt-5 md:mt-3 rounded-xl md:px-6 bg-gradient-to-b from-slate-300 to-transparent">
          <div className="grid gap-4 items-center justify-center h-[27vh] lg:h-[40vh]">
            <div className="space-y-4">
              <h1 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-[100rem]">
                Explore men & women clothing <br></br> and more
              </h1>
              <p className="text-center">
                All types of women cloths, men cloths and house appliances
                available
              </p>
              <div className="flex gap-2 lg:gap-4 justify-center">
                <Link
                  className=" inline-flex no-wrap h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Start shopping
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-5 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Exprole
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
