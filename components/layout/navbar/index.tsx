import { ModeToggle } from '@/components/mode-toggle';
import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileSearchBar from './MobileSearchBar';
import MobileMenu from './mobile-menu';
import Search from './search';
const { SITE_NAME } = process.env;

export default async function Navbar() {

  const menu = await getMenu('next-js-frontend-header-menu');

  return (

    <nav className=" relative flex items-center justify-between p-4 lg:px-6 ">
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>

      <div className="flex justify-between   w-full items-center ">
        <div className="md:flex w-full md:w-1/3 hidden ">
          <span className='hidden md:block text-base font-thin '>  + 92(21)-36-111-685(MTJ)</span>


        </div>
        <div className=" md:hidden  flex h-full items-center">
          <MobileSearchBar menu={menu} />
        </div>
        <div className=" justify-center items-center md:flex md:w-1/3 ">
          <Link href="/" className=" mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
        </div>
        <div className="flex gap-2  justify-end md:w-1/3 ">
          <div className='hidden md:block'>
            <Search />
          </div>
          <ModeToggle />
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>

  );
}
