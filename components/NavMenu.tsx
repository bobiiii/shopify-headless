"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Menu } from 'lib/shopify/types';
import Image from "next/image";
import Link from "next/link";




const NavMenu = async ({ menu }: { menu: Menu[] }) => {



    return (
        <div className="hidden  md:flex justify-center items-center md:pb-2 border border-green-500">
            <NavigationMenu>
                <NavigationMenuList className="border ">
                    {menu.length ? (
                        <>{menu.map((item: Menu) => (
                            <NavigationMenuItem key={item.title} >
                                <NavigationMenuTrigger className="">

                                    <Link
                                        href={item.path}
                                        className={item.tags?.includes('blink') ? 'text-red-500 animate-pulse' : ''}
                                    >
                                        {item.title}
                                    </Link>
                                </NavigationMenuTrigger>

                                <NavigationMenuContent className="border flex justify-between border-blue-500  h-[50vh]" >

                                    <div className={`  w-full grid auto-cols-auto  border border-green-600	 rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 `}>
                                        {item.items?.map((collection: any, i) => {
                                            return (
                                                <div key={i} className=" border border-blue-600  ">

                                                    <div>{collection.title} </div>
                                                </div>
                                            )
                                        })}
                                        

                                    </div>

                                    {item.images &&
                                        <Image
                                            src={item.images[0]?.url}
                                            width={100}
                                            height={100}
                                            alt="abc"
                                        />}

                                    {/* <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>WOMEN 11111111 2 22 2 2 22 2 22 2 2 2</NavigationMenuLink>
                                    </Link> */}
                                </NavigationMenuContent>

                            </NavigationMenuItem>

                        ))}
                        </>
                    ) : null}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )

}
export default NavMenu