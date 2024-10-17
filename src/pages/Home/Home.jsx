import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScrollDirection, setCurrentSection } from "../../redux/actions";
import style from "./Home.module.css";
import { products } from "../../data";
import FeaturedGallery from "../../components/FeaturedGallery/FeaturedGallery";
import FeatureBlock from "../../components/FeatureBlock/FeatureBlock";
import Footer from "../../components/Footer/Footer";
import About from "../About/About";
import CustomerSupport from "../../components/CustomerSupport/CustomerSupport";
import LaNavbar from "../../components/LaNavbar/LaNavbar";
import { getProductsByCategory, getAllSections } from "../../redux/actions";
import Louder from "../../components/Louder/Louder";
import LedBanner from "../../components/LedBanner/LedBanner";
import { featuredBlock } from "../../data";
import { ledBanner } from "../../data";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import gifSale from "../../assets/images/Flyer/saleGif.gif";
import gifSale2 from "../../assets/images/Flyer/saleGif2.gif";
import gifSale3 from "../../assets/images/Flyer/saleGif3.gif";

function Home({}) {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.backUpSections);
  const sectionRef = useRef(null);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    // dispatch(getProductsByCategory());
    // dispatch(getAllSections());
    setTimeout(() => {
      setIsLoader(false);
    }, 4000);
  }, []);

  return (
    <section className={style.home_main}>
      {isLoader ? (
        <LoadingScreen />
      ) : (
        <section className={style.home_main}>
          <LaNavbar />
          <FeaturedGallery sections={sections[0]} />
          <img className={style.gifSale} src={gifSale} alt="" />
          <LedBanner text={ledBanner[0].text} />
          <FeatureBlock
            section={featuredBlock[0].section}
            title={featuredBlock[0].title}
            description={featuredBlock[0].description}
            sectionProducs={products.slice(0, 5)}
          />
          <About />
          <FeaturedGallery sections={sections[1]} />
          <img className={style.gifSale} src={gifSale3} alt="" />
          <LedBanner text={ledBanner[0].text} />
          <FeatureBlock
            section={featuredBlock[0].section}
            title={featuredBlock[0].title}
            description={featuredBlock[0].description}
            sectionProducs={products.slice(6, 11)}
          />
          <CustomerSupport />
          <FeaturedGallery sections={sections[2]} />
          <LedBanner text={ledBanner[1].text} />
          <FeatureBlock
            section={featuredBlock[1].section}
            title={featuredBlock[1].title}
            description={featuredBlock[1].description}
            sectionProducs={products.slice(11, 17)}
          />
          <img className={style.gifSale} src={gifSale2} alt="" />

          <Footer />
        </section>
      )}
    </section>
  );
}

export default Home;
