import { Divider } from "antd";
import { RxDoubleArrowRight } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import ROUTER from "src/routers/router";
import styled from "styled-components";
// Import Swiper React components
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { StyledNews } from "./styled";
import { WrapAboutPage } from "src/pages/About/styled";
import { WrapHeader } from "src/layouts/header/styled";
// import required modules
const NewsItem = () => {
  return (
    <div className="div-new-item">
      <div className="new-item">
        <div className="new-img">
          <img
            src="https://img.freepik.com/premium-photo/woman-mediacal-nurse-doctor-uniform-sick-online-video-call-webcam_754108-449.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="new-sumary">
          <div className="new-title max-line1">
            <span>How redefining autism could improve research...</span>
          </div>
          <div className="new-date ">Wednesday, 20.07.2022</div>
          <div className="new-content max-line3">
            Autism is typically thought of as a collection of traits: restricted
            interests, repetitive behaviors and difficulty with social
            communication. But by the time those traits can be detected and a
            child diagnosed...
          </div>
        </div>
      </div>
    </div>
  );
};
const News = () => {
  return (
    <StyledNews>
      <div className="new-title">
        <div className="new-title-content">NEWS</div>
        <NavLink to={ROUTER.NEWS} className=" d-flex align-items-center link">
          See more <RxDoubleArrowRight className="ml-5" />
        </NavLink>
      </div>
      <Divider style={{ marginTop: "8px" }} />
      {/* <Row gutter={[16, 16]}>
        <Col span={6}>
          <NewsItem />
        </Col>
        <Col span={6}>
          <NewsItem />
        </Col>{" "}
        <Col span={6}>
          <NewsItem />
        </Col>{" "}
        <Col span={6}>
          <NewsItem />
        </Col>
      </Row> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
      </Swiper>
    </StyledNews>
  );
};

export default News;
