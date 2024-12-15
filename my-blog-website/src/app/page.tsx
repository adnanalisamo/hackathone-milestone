import Header from "./components/HeaderTop";
import Hero from "./components/Hero";
import Karachi from "./components/Karachi";
import Hyderabad from "./Hyderabad";
import Sukkur from "./components/Sukkur"
import Lahore from "./components/Lahore";
import Islamabad from "./components/Islamabad";
import Footer from "./components/Footer";

function Homepage(){
  return(
    <div>
      {/* <Header/> */}
      <Hero/>
      <Karachi/>
      <Hyderabad/>
      <Sukkur/>
      <Lahore/>
      <Islamabad/>
      <Footer/>

      
    </div>
  )
}
export default Homepage