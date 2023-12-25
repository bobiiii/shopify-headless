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



    return (
        <NavigationMenu>
            <NavigationMenuList>
                {menu.length ? (
                    <>{menu.map((item: Menu) => (
                        <NavigationMenuItem key={item.title}>
                            <NavigationMenuTrigger >

                                <Link
                                    href={item.path}
                                    className=""
                                >
                                    {item.title}
                                </Link>
                            </NavigationMenuTrigger>

                            <NavigationMenuContent>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>WOMEN</NavigationMenuLink>
                                </Link>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                    ))}
                    </>
                ) : null}
            </NavigationMenuList>
        </NavigationMenu>
    )

}
export default NavMenu