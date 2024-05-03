"use client"

import { HomeModernIcon } from "@heroicons/react/16/solid";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { ReactNode, useState } from "react";
// import Link from 'next/link'

interface Props {
    children: ReactNode;
}

const Appbar = ({ children }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];
    return (
        <Navbar className="shadow-md" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link
                        href={"/"}
                        className="flex items-center text:primary-400 hover:text-primary-400 transition-colors">
                        <HomeModernIcon className="w-16" />
                        <p className="font-bold text-inherit">Sk Real Estate</p>
                    </Link>

                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center"></NavbarContent>
            <NavbarContent justify="end">{children}</NavbarContent>
            <NavbarMenu></NavbarMenu>
        </Navbar>
    );
}

export default Appbar;