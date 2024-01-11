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




const NavMenu = async ({ menu }: { menu: any }) => {
    return (
        <div className="hidden  md:flex justify-center items-center md:pb-2">
            <NavigationMenu>
                <NavigationMenuList >
                    {menu.length ? (
                        <>{menu.map((item: Menu) => (
                            <NavigationMenuItem key={item.title} >
                                <NavigationMenuTrigger >

                                    <Link
                                        href={item.path}
                                        className={item.tags?.includes('blink') ? 'text-red-500 dark:text-slate-100 animate-pulse' : ''}
                                    >
                                        {item.title}
                                    </Link>
                                </NavigationMenuTrigger>

                                <NavigationMenuContent className="px-10 dark:border dark:border-slate-300  flex justify-evenly  h-[50vh] " >

                                    <div className={`${item.tags?.includes('blink') && 'text-red-500'} dark:text-slate-100  pt-6 flex-1 flex flex-col flex-wrap  rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors   focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}>
                                        {item.items?.map((collection: any, i) => {

                                            return (
                                                <div key={i} className="uppercase ">
                                                    <div className="py-2 dark:hover:text-yellow-200 hover:text-red-700">
                                                        <Link href={"/"}>
                                                            {collection.title}
                                                        </Link>
                                                    </div>
                                                    {collection.items.length > 0 &&
                                                        <div>
                                                            {collection.items.map((item: any, i: any) => {

                                                                return (
                                                                    <div key={i} className="font-normal py-2 dark:hover:text-yellow-200 hover:text-red-700">
                                                                        <Link href={"/"}>
                                                                            {item.title}
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {item.images && item.images[0]?.url && (
                                        <div className="grid place-items-center md:py-6 lg:py-2 ">
                                            <Image
                                                src={item.images[0].url}
                                                width={200}
                                                height={300}
                                                alt="abc"
                                            />
                                        </div>
                                    )}


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