import Slider from "react-slick";
import { Signin1Slider } from "./assets/svg/Icons";


const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black", fontSize: "30px", cursor: "pointer" }}
      onClick={onClick}
    >
      Next
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black", fontSize: "30px", cursor: "pointer" }}
      onClick={onClick}
    >
      Prev
    </div>
  );
};

function CustomSlider({ numberOfCards }) {
  const settings = {
    className: "center",
    centerMode: false,
    autoplay: false,
    infinite: true,
    dots: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    arrows: false, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <div
        style={{
          width: "0.7cqi",
          height: "0.3cqi",
          background: "#9C3C4054",
        //   borderRadius: "50%",
          margin: "0.3cqi",
          cursor: "pointer",
        }}
      ></div>
    ),
    appendDots: (dots) => (
      <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
        <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {numberOfCards.map((index) => (
          <div className="d-flex flex-column align-items-center" key={index} style={{ padding: "20px", textAlign: "center", background: "#f0f0f0" }}>
            <Signin1Slider/>
            <p className="mg-t-1 w-30 text_p text-center">Revolutionising the way you discover
            & buy your dream home</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomSlider;
