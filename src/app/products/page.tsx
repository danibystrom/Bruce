import ProductGrid from "../components/ProductGrid";
import ProductsPageHero from "../components/ProductsPageHero";
import SuggestedRefills from "../components/SuggestedRefills";

export default function AllProductsPage() {
  return (
    <>
      <ProductsPageHero />
      <ProductGrid />
      <SuggestedRefills />
    </>
  );
}
