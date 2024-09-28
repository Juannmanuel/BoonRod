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
        <Louder />
      ) : (
        <section className={style.home_main}>
          <LaNavbar />
          <section data-section={sections[0].sectionName}>
            <FeaturedGallery sections={sections[0]} />
            <LedBanner text={ledBanner[0].text} />
            <FeatureBlock
              section={featuredBlock[0].section}
              title={featuredBlock[0].title}
              description={featuredBlock[0].description}
              sectionProducs={products.slice(4, 9)}
            />
          </section>
          <section data-section="¿Quienes somos?">
            <About />
          </section>
          <section data-section={sections[1].sectionName}>
            <FeaturedGallery sections={sections[1]} />
          </section>
          <LedBanner text={ledBanner[1].text} />
          <section data-section={sections[2].sectionName}>
            <FeaturedGallery sections={sections[2]} />
          </section>
          <FeatureBlock
            section={featuredBlock[1].section}
            title={featuredBlock[1].title}
            description={featuredBlock[1].description}
            sectionProducs={products.slice(9, 15)}
          />
          <section data-section="Contactenos">
            <CustomerSupport />
          </section>
          <Footer />
        </section>
      )}
    </section>
  );
}

export default Home;
