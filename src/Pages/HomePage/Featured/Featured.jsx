import "../Featured/Featured.css";
import feturedImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="main_featured_container">
      <div className="inner_featured_bg_container">

        <div>
          <div className="text-center">
            <div id="featured_heading_one" className="section_heading_one">
              <p>
                <i>---Check it out---</i>
              </p>
            </div>

            <div id="featured_heading_two" className="section_heading_two">
              <span>ORDER ONLINE</span>
            </div>
          </div>
        </div>

        <div className="main_featured_text_container">

          <div className="featured_image_container">
            <img src={feturedImg} alt="" />
          </div>

          <div className="featured_text_container">
            <h3>March 20, 2023 <br />WHERE CAN I GET SOME?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sapiente minus itaque deleniti quae nihil repellat veniam explicabo odio, beatae consequatur nisi, quasi voluptate quidem ipsa consectetur ea sed.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Featured;