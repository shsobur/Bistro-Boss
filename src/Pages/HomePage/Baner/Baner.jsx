// Carousel file
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Carousel Image
import img1 from "../../../assets/home/img1.jpg";
import img2 from "../../../assets/home/img2.jpg";
import img3 from "../../../assets/home/img3.png";
import img4 from "../../../assets/home/img4.jpg";
import img5 from "../../../assets/home/img5.png";
import img6 from "../../../assets/home/img6.png";

const Baner = () => {
  return (
    <div>

      <Carousel>

        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>

      </Carousel>

    </div>
  );
};

export default Baner;
