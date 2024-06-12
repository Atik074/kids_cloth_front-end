import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Navbar from "@/components/Shared/Navbar/Navbar";
import FlashSale from "@/components/UI/HomePage/FlashSale/FlashSale";
import TopCategories from "@/components/UI/HomePage/TopCategories/TopCategories";

export default function Home() {
  return (
        <>
         <Navbar/>
         <HeroSection/>
         <FlashSale/>
         <TopCategories/>
        </>
  )
}
