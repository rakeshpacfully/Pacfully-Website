import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import ProductCategory from "@/pages/ProductCategory";
import CustomPackaging from "@/pages/CustomPackaging";
import Industries from "@/pages/Industries";
import PlantCapacity from "@/pages/PlantCapacity";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import GetQuote from "@/pages/GetQuote";

function App() {
  return (
    <div className="App font-body">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductCategory />} />
            <Route path="/custom-packaging" element={<CustomPackaging />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/plant-capacity" element={<PlantCapacity />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-quote" element={<GetQuote />} />
          </Routes>
        </Layout>
        <Toaster position="top-right" theme="dark" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
