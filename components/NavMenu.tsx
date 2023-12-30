"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Menu } from 'lib/shopify/types';
import Link from "next/link";




const NavMenu = async ({ menu }: { menu: Menu[] }) => {

    console.log(menu)

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

                                <NavigationMenuContent className="border border-blue-600   " >
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>WOMEN 11111111 2 22 2 2 22 2 22 2 2 2</NavigationMenuLink>
                                    </Link>
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