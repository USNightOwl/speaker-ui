import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { getOneProduct } from "@/utils/fetch-products";
import Image from "next/image";
import Currency from "../ui/currentcy";

const Hero = async () => {
  const dataProduct = await getOneProduct("loa-da-ngoai-xam-t-288");
  return (
    <div className="relative z-[5] mx-auto grid h-full min-h-[calc(100dvh-104px)] max-w-7xl grid-cols-1 items-center gap-6 px-4 lg:grid-cols-2 lg:px-8">
      <div className="z-10 flex flex-col gap-4 text-center lg:text-left">
        <div className="bg-gradient-to-r from-neutral-500 to-neutral-950 bg-clip-text text-5xl font-bold !leading-normal text-transparent dark:from-neutral-700 dark:to-neutral-100 md:from-neutral-700 md:to-neutral-100 md:text-7xl">
          Loa Tại Xưởng giá như ở nhà
        </div>
        <div className="py-4 text-base font-medium dark:text-neutral-200 md:text-xl md:text-neutral-200">
          Sản xuất tại xưởng - Giá cả ổn định - Miễn phí vận chuyện nội thành - Bảo hành toàn quốc
        </div>
        <div className="mx-auto mt-8 lg:mx-0">
          <Link
            href="products/"
            className={cn(
              buttonVariants(),
              "focus-within:animate-click-button relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50",
            )}
          >
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#555555_50%,#ffffff_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#555555_50%,#000000_100%)]" />
            <span className="z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(110deg,#000000,25%,#3d444e,55%,#000000)] hover:bg-[length:100%_150%] transition-all bg-[length:200%_100%] px-8 py-4 text-lg font-medium text-white backdrop-blur-lg hover:bg-neutral-900/70 dark:bg-neutral-50/50 hover:dark:bg-neutral-950/70">
              Xem thêm
            </span>
          </Link>
        </div>
      </div>
      <div className="z-10 mb-20 grid h-full w-full items-center gap-2 md:mt-0 lg:gap-16">
        <Link href={`products/${dataProduct.slug}`} className="relative mx-auto aspect-[4/3] w-full md:max-w-md">
          <Image
            className="!h-auto w-full object-cover m-auto rounded-lg hover:scale-105 transition-all duration-300"
            src={dataProduct.images[0]}
            alt={dataProduct.productName}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            priority
          />
        </Link>
        <div className="flex flex-col items-center space-y-2 text-center md:hidden md:items-start lg:text-left">
          <div className="bg-gradient-to-r from-neutral-900 via-neutral-500 via-80% to-neutral-200 bg-clip-text text-4xl font-bold text-transparent dark:to-neutral-800 dark:from-neutral-50 md:text-5xl lg:text-6xl">
            <Currency value={dataProduct.price} />
          </div>
          <div className="bg-gradient-to-r from-neutral-900 via-neutral-500 via-80% to-neutral-200 bg-clip-text text-4xl text-transparent dark:from-neutral-50 dark:to-neutral-800 lg:text-6xl animate-in">
            {dataProduct.productName}
          </div>
          <div className="py-4 text-base font-normal text-neutral-600 dark:text-neutral-200 lg:text-xl">
            {dataProduct.description}...
            <Link href={"#"} className="!text-neutral-950 underline hover:text-neutral-50 dark:!text-neutral-50">
              Xem thêm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
