import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";
import "@smastrom/react-rating/style.css";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

import "../Review/Review.css";
import { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <div>

        <div className="text-center">
          <div className="section_heading_one">
            <p>
              <i>---What Our Clients Say---</i>
            </p>
          </div>

          <div className="section_heading_two">
            <span>TESTIMONIALS</span>
          </div>
        </div>

      </div>

      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <div>
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex items-center justify-center gap-2 text-4xl text-[#CD9003] cursor-pointer">
                  <div>
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={review.rating}
                      readOnly
                    />
                  </div>
                </div>

                <div className="text-8xl text-[#151515] flex justify-center py-5">
                  <FaQuoteLeft />
                </div>

                <div className="review_container">
                  <p>{review.details}</p>
                  <h3>{review.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
