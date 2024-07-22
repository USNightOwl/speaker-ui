import Image from "next/image";
import Loading from "./loading";
import { Suspense } from "react";
import Hero from "@/components/home/hero";
import Story from "@/components/home/story";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 z-[1] hidden h-lvh w-full md:block lg:top-[104px] lg:h-[calc(100lvh-104px)]">
        <Image className="h-full w-full object-cover" src="/speaker-ui/hero_banner.jpg" alt="hero_bg" fill priority />
      </div>
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <Story />
    </>
  );
}
