"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Menu } from 'lib/shopify/types';
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
                                <div className="flex justify-center items-center">
                                    <NavigationMenuContent className="border flex justify-center items-center border-blue-500 " >

                                        <div className={navigationMenuTriggerStyle()}>
                                            {item.items?.map((collection: any, i) => {
                                                return (
                                                    <div key={i} className="-400 flex gap-10 flex-col  ">

                                                        <div>{collection.title} </div>

                                                    </div>
                                                )
                                            })}

                                        </div>

                                        {/* <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>WOMEN 11111111 2 22 2 2 22 2 22 2 2 2</NavigationMenuLink>
                                    </Link> */}
                                    </NavigationMenuContent>
                                </div>
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