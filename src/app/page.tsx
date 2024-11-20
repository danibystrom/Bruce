import BestSellerSlider from "./components/BestSellerSlider";
import HeaderImage from "./components/HeaderImage";
import HowItWorks from "./components/HowItWorks";
import ProductsSlider from "./components/ProductsSlider";
import SustainabilitySection from "./components/SustainabilitySection";

export default function Home() {
  return (
    <>
      <HeaderImage />
      <BestSellerSlider />
      <HowItWorks />
      <ProductsSlider />
      <SustainabilitySection />
    </>
  );
}
