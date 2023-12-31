"use client"

import { Menu } from "@/lib/shopify/types";
import { Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from 'react';
import Search from './search';

export default function MobileSearchBar({ menu }: { menu: Menu[] }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false)
    const openSearchBar = () => setIsOpen(true)
    const closeSearchBar = () => setIsOpen(false)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname, searchParams]);


    return (<>


        <button
            onClick={openSearchBar}
            aria-label="Open mobile menu"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white md:hidden"
        >
            <MagnifyingGlassIcon className="h-4" />
        </button>
        <Transition show={isOpen}>
            <Dialog onClose={closeSearchBar} className="relative z-50 ">
                <Transition.Child
                    as={Fragment}
                    enter="transition-all ease-in-out duration-300"
                    enterFrom="opacity-0 backdrop-blur-none"
                    enterTo="opacity-100 backdrop-blur-[.5px]"
                    leave="transition-all ease-in-out duration-200"
                    leaveFrom="opacity-100 backdrop-blur-[.5px]"
                    leaveTo="opacity-0 backdrop-blur-none"
                >
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="transition-all ease-in-out duration-300"
                    enterFrom="translate-x-[-100%]"
                    enterTo="translate-x-0"
                    leave="transition-all ease-in-out duration-200"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-[-100%]"
                >
                    <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
                        <div className="p-4 flex flex-col ">
                            <button
                                className="self-end mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
                                onClick={closeSearchBar}
                                aria-label="Close mobile menu"
                            >
                                <XMarkIcon className="h-6" />
                            </button>

                            <div className="mb-4 w-full">
                                <Search />
                            </div>
                            {menu.length ? (
                                <ul className="flex w-full flex-col">
                                    {menu.map((item: Menu) => (
                                        <li
                                            className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                                            key={item.title}
                                        >
                                            <Link href={item.path} onClick={closeSearchBar}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    </>)

}