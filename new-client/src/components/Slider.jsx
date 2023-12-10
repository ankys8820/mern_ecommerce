import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <>
      {/* Opening and Closing of <Carousel></Carousel> */}
      <Carousel
        dynamicHeight={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/sepatf23/unrec/one/upd/WA_WW_3000._CB595840558_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/outdoor-pc-2x-canara._CB571987381_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/lshruthi/Jupiter/GW/P3B/D101948131_Phase3_PC_Hero_1500x600._CB573748686_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Sept/Onecard/Sports/Sports_3000._CB595761830_.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
