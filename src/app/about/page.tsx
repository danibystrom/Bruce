import SuggestedProducts from "../components/SuggestedProducts";
import SustainabilitySection from "../components/SustainabilitySection";
import AboutSection from "./components/AboutSection";
import AboutUsHeader from "./components/AboutUsHeader";

export default function AboutPage() {
  return (
    <>
      <AboutUsHeader />
      <AboutSection />
      <SuggestedProducts />
      <SustainabilitySection />
    </>
  );
}
