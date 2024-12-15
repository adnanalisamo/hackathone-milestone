import Header from "./components/HeaderTop";
import Hero from "./components/Hero";
import Sale from "./components/Sale";
import Product from "./components/products";
import Footer from "./components/Footer";

function Homepage(){
  return(
    <div>
      {/* <Header/> */}
      <Hero/>
      <Sale/>
      <Product/>
      <Footer/>
      
    </div>
  )
}
export default Homepage