import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';
import LogoSquare from '../logo-square';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";


const { COMPANY_NAME, SITE_NAME } = process.env;
export default async function Footer2() {
    return (
        <footer className=" py-6 bg-[#f0f0f0]">
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 border border-green-400 '>
                {/* logo adn adress */}
                <div className='border border-red-400 text-xs'>
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
                {/* Information */}
                <div className='border border-red-400 text-xs'>
                    <div className="hidden md:block ">
                        <span className="text-sm lg:text-base font-semibold block mb-2">INFORMATION</span>
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
                {/* Collection*/}
                <div className='border border-red-400 text-xs'>
                    <div className="hidden md:block ">
                        <span className="text-xs lg:text-base font-semibold block mb-2">CUSTOMER SUPPORT</span>
                        <ul className="">
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
                {/* newsletter */}
                <div className='border border-red-400 text-xs'>
                    <span className="text-xs lg:text-base font-semibold block mb-4">NEWSLETTER </span>
                    <Label htmlFor="email-box">Receive our latest updates</Label>
                    <div className="flex"><Input id={"email-box"} />
                        <Button variant="outline" className="bg-customYellow text-white">Button</Button></div>

                </div>

            </div>
        </footer>
    )
}

