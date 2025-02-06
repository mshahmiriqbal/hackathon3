
import Some from "./home";
import Newarival from "./newarival";
import Footer from "./footer";
import ProductsPage from "./pages/products";

export default function Home() {
  

  return (
    <div>
      <Some />
      <h1 className="text-3xl font-bold text-center mt-3 mb-4">TOP PICKS FOR YOU</h1>
      
      <ProductsPage  /> {/* Pass searchQuery to ProductsPage */}
      <Newarival />
      <Footer />
    </div>
  );
}
