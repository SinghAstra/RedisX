import FadeIn from "@/components/global/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <div className="border-b border-dashed h-16 sticky top-0 z-50  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center px-4 ">
      <FadeIn delay={0.1} className="flex items-center w-full">
        <MobileNav />
        <MainNav />

        <div className=" ml-auto flex items-center gap-3 ">
          <div className="flex items-center justify-between sm:gap-2">
            <div className="flex ml-4 sm:ml-0">
              <a
                href={siteConfig.links.githubRepo}
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href={siteConfig.links.twitter}
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
                target="_blank"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
