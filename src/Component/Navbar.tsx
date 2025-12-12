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
  import { Github } from "lucide-react";

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
            <a
              href="https://github.com/immohitsen/Dreamify"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-30 ml-auto text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors p-2 cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
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
                <a
                  href="https://github.com/immohitsen/Dreamify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </ResizableNavbar>
        {/* <DummyContent /> */}

        {/* Navbar */}
      </div>
    );
  }

