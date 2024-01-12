import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';
import LogoSquare from '../logo-square';


const { COMPANY_NAME, SITE_NAME } = process.env;
export default async function Footer2() {
    return (
        <footer className=" py-6 bg-[#f0f0f0]">
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 border border-green-400 '>
                <div className='border border-red-400 '>
                    <Link className="h-24 border border-black flex items-center gap-2 text-black dark:text-white md:pt-1" href="/">
                        <LogoSquare />

                    </Link>
                    <span className="block">Call Us: +92(21)-36-111-685(MTJ)</span>
                    <span>Email:cs@mtjonline.com</span>
                    <div>
                        <span>Fb</span>
                        <span>Insta</span>
                    </div>

                </div>
                <div className='border border-red-400'>
                    <div className="hidden md:block ">
                        <span className="text-base lg:text-lg font-semibold block mb-4">INFORMATION</span>
                        <ul>
                            <li>
                                About Us
                            </li>
                            <li>
                                Shipping & Information                            </li>
                            <li>
                                Store Locator                            </li>
                            <li>
                                Terms & Conditions
                            </li>
                        </ul>

                    </div>

                    <Accordion type="single" collapsible className="md:hidden">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>INFORMATION</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>
                                        About Us
                                    </li>
                                    <li>
                                        Shipping & Information                            </li>
                                    <li>
                                        Store Locator                            </li>
                                    <li>
                                        Terms & Conditions
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                </div>
                <div className='border border-red-400'>
                    <div className="hidden md:block ">
                        <span className="text-base lg:text-lg font-semibold block mb-4">CUSTOMER SUPPORT</span>
                        <ul>
                            <li>
                                Contact Us
                            </li>
                            <li>
                                Privacy Policy
                            </li>
                            <li>
                                Return & Exchange
                            </li>
                            <li>
                                FAQ's
                            </li>
                        </ul>

                    </div>

                    <Accordion type="single" collapsible className="md:hidden">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>CUSTOMER SUPPORT</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>
                                        Contact Us
                                    </li>
                                    <li>
                                        Privacy Policy
                                    </li>
                                    <li>
                                        Return & Exchange
                                    </li>
                                    <li>
                                        FAQ's
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                </div>
                <div className='border border-red-400'>

                    <span className="text-base lg:text-lg font-semibold block mb-4">NEWSLETTER SIGNUP</span>
                </div>

            </div>
        </footer>
    )
}

