"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { VerticalAnimationContainer } from "../global/animation-container";
import MaxWidthWrapper from "../global/max-width-wrapper";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 inset-x-0 h-14 w-full border-b border-transparent z-[99999] select-none",
        scroll && "border-background/80 bg-background/40 backdrop-blur-md"
      )}
    >
      <VerticalAnimationContainer reverse delay={0.1} className="size-full">
        <MaxWidthWrapper className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link href="/">
              <span className="text-lg font-medium  !leading-none">
                {siteConfig.name}
              </span>
            </Link>
          </div>
        </MaxWidthWrapper>
      </VerticalAnimationContainer>
    </header>
  );
};

export default Navbar;
