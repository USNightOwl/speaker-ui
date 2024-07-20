"use client";
import React from "react";
import Logo from "../logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/cn";
import { Menu, Moon, Sun, TabletSmartphone } from "lucide-react";
import NavbarActions from "../navbar-actions";

const navItems = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Sản phẩm",
    href: "/products",
    items: [
      {
        title: "Loa dã ngoại - Xám",
        href: "/products/loa-da-ngoai-xam-t-288",
        description: "📟LOA XÁCH TAY Màu xám - GIÁ TẠI XƯỞNG - ĐÂU DÙNG CŨNG HAY📟",
      },
      {
        title: "Loa dã ngoại - Đỏ",
        href: "/products/loa-da-ngoai-do-t-288",
        description: "📟LOA XÁCH TAY Màu đỏ - GIÁ TẠI XƯỞNG - ĐÂU DÙNG CŨNG HAY📟",
      },
      {
        title: "Loa dã ngoại - Xanh lá",
        href: "/products/loa-da-ngoai-xanh-la-t-288",
        description: "📟LOA XÁCH TAY Màu xanh lá - GIÁ TẠI XƯỞNG - ĐÂU DÙNG CŨNG HAY📟",
      },
    ],
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Liên hệ",
    href: "/contact",
  },
];

const Header = () => {
  const currentPathname = usePathname();
  const { setTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl p-1 md:p-4">
      <div className="flex items-center justify-between rounded-lg bg-neutral-50/50 p-2 md:p-4 dark:bg-neutral-950/30 backdrop-blur-md">
        <Logo />
        <div className="hidden w-fit gap-2 lg:flex mx-auto z-10">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map(({ title, href, items }, index) => (
                <NavigationMenuItem key={`navItems_${index}`}>
                  {items ? (
                    <>
                      <Link href={href} legacyBehavior passHref>
                        <NavigationMenuTrigger
                          className={buttonVariants({
                            variant: currentPathname === href ? "outline" : "link",
                            className:
                              currentPathname === href
                                ? "text-lg !bg-background hover:!bg-accent hover:!text-accent-foreground"
                                : "text-lg !bg-transparent",
                          })}
                        >
                          {title}
                        </NavigationMenuTrigger>
                      </Link>
                      <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {items.map((subItem, index) => (
                            <ListItem key={`subItems_${index}`} title={subItem.title} href={subItem.href}>
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={buttonVariants({
                          variant: currentPathname === href ? "outline" : "link",
                          className: "!text-lg dark:text-neutral-50 text-black",
                        })}
                      >
                        {title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex ml-auto gap-2 z-10">
          <NavbarActions />
          <Sheet>
            <SheetTrigger
              className={buttonVariants({
                variant: "ghost",
                className: "lg:hidden",
              })}
            >
              <span className="sr-only">Menu</span>
              <Menu className="h-6 w-6 cursor-pointer dark:text-neutral-50 lg:hidden" />
            </SheetTrigger>
            <SheetContent className="h-dvh bg-white dark:bg-black">
              <SheetHeader>
                <Logo hasText />
              </SheetHeader>
              <div className="!mt-4 h-[calc(100dvh-200px)] space-y-2">
                <span className="font-semibold">Chủ đề:</span>
                <ScrollArea className="-mx-4 !-mt-4">
                  <div className="flex gap-1 p-4 w-max space-x-2">
                    <Button variant={theme === "light" ? "secondary" : "ghost"} onClick={() => setTheme("light")}>
                      <Sun size={20} className="mr-1" /> Sáng
                    </Button>
                    <Button variant={theme === "dark" ? "secondary" : "ghost"} onClick={() => setTheme("dark")}>
                      <Moon size={20} className="mr-1" /> Tối
                    </Button>
                    <Button variant={theme === "system" ? "secondary" : "ghost"} onClick={() => setTheme("system")}>
                      <TabletSmartphone size={20} className="mr-1" /> Hệ thống
                    </Button>
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
                <ScrollArea className="h-full">
                  <div className="-mr-2 h-full pr-3">
                    {navItems.map(({ title, href, items }, index) => (
                      <div key={`navItems__${index}`} className="flex flex-col items-start gap-2">
                        <Link
                          className={buttonVariants({
                            variant: currentPathname === href ? "outline" : "link",
                            className: "w-fit !text-lg dark:text-neutral-50",
                          })}
                          href={href}
                        >
                          {title}
                        </Link>
                        {items && (
                          <div className="flex flex-col gap-3 pl-4">
                            {items.map((subItem, index) => (
                              <div key={`navItems__${index}`} className="border-l-2 pl-1 text-left">
                                <Link
                                  href={subItem.href}
                                  passHref
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <span className="block text-lg font-medium leading-none">{subItem.title}</span>
                                  <span className="line-clamp-2 text-base leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </span>
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  // eslint-disable-next-line react/prop-types
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-lg font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-base leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
