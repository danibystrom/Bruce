import BestSellerSection from "./components/BestSellerSection";
import HeaderImage from "./components/HeaderImage";
import HowItWorks from "./components/HowItWorks";
import ProductsSection from "./components/ProductsSection";
import SustainabilitySection from "./components/SustainabilitySection";

export default function Home() {
  return (
    <>
      <HeaderImage />
      <BestSellerSection />
      <HowItWorks />
      <ProductsSection />
      <SustainabilitySection />
    </>
  );
}
