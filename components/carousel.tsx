"use client"

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";




// export async function Carousel() {
//   // Collections that start with `hidden-*` are hidden from the search page.
//   const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });
//   if (!products?.length) return null;
//   // console.log(products);


//   // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
//   const carouselProducts = [...products, ...products, ...products];

//   return (
//     <>
//       {/* // <div className=" w-full overflow-x-auto pb-6 pt-1">
//     //   <ul className="flex animate-carousel gap-4">
//     //     {carouselProducts.map((product, i) => (
//     //       <li
//     //         key={`${product.handle}${i}`}
//     //         className="relative aspect-square h-[80vh]  w-full max-w-full flex-none "
//     //       >
//     //         <Link href={`/product/${product.handle}`} className="relative h-full w-full">
//     //           <GridTileImage
//     //             alt={product.title}
//     //             label={{
//     //               title: product.title,
//     //               amount: product.priceRange.maxVariantPrice.amount,
//     //               currencyCode: product.priceRange.maxVariantPrice.currencyCode
//     //             }}
//     //             src={product.featuredImage?.url}
//     //             fill
//     //             sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
//     //           />
//     //       </Link>
//     //       </li>
//     //     ))}
//     // </ul>
//     // </div > */}

// {/* 
// <Carousel>
//   <CarouselContent>
//     <CarouselItem>...</CarouselItem>
//     <CarouselItem>...</CarouselItem>
//     <CarouselItem>...</CarouselItem>
//   </CarouselContent>
//   <CarouselPrevious />
//   <CarouselNext />
// </Carousel> */}


//     </>
//   );
// }






export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
