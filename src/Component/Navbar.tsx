  "use client";
  import {
    Navbar as ResizableNavbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
  } from "@/components/ui/resizable-navbar";
  import React from 'react';
  import { useState } from "react";

  export default function Navbar() {
    const navItems = [
      {
        name: "Dashboard",
        link: "/Dashboard",
      },
      {
        name: "About",
        link: "/About",
      },
    ];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <div className="relative w-full">
        <ResizableNavbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
              </div>
            </MobileNavMenu>
          </MobileNav>
        </ResizableNavbar>
        {/* <DummyContent /> */}

        {/* Navbar */}
      </div>
    );
  }

