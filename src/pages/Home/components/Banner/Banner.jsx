import { CheckOutlined } from "@ant-design/icons";
import BannerAnim, { Arrow, Element, Thumb } from "rc-banner-anim";
import "rc-banner-anim/assets/index.css";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
import { useState } from "react";
import { BannerStyled } from "./styled";
//npm install rc-banner-anim

const BannerTitle = ({ text, label }) => {
  return (
    <>
      {/* <div className="title" dangerouslySetInnerHTML={{ __html: text }} /> */}
      <TweenOne
        className="banner-user-title"
        animation={{ y: 30, opacity: 0, type: "from" }}
      >
        <div
          className="banner-user-title-item"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </TweenOne>
      {label?.map((item, index) => {
        return (
          <div key={`listimg2${index}`} className="banner-user-text mt-16">
            <TweenOne
              animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
            >
              <div
                className="d-flex justify-content-flex-start text-item"
                style={{ alignItems: "flex-start" }}
              >
                <CheckOutlined style={{ marginTop: "2px" }} />
                <div className="ml-10 fz-22" style={{ fontWeight: "200" }}>
                  {item}
                </div>
              </div>
            </TweenOne>
          </div>
        );
      })}
    </>
  );
};

const Banner = ({ imgArray }) => {
  const [intShow, setIntShow] = useState(0);
  const [prevEnter, setPrevEnter] = useState(false);
  const [nextEnter, setNextEnter] = useState(false);
  const [thumbEnter, setThumbEnter] = useState(false);

  const onChange = (type, i) => {
    if (type === "before") {
      setIntShow(i);
    }
  };

  const getNextPrevNumber = () => {
    let nextInt = intShow + 1;
    let prevInt = intShow - 1;
    if (nextInt >= imgArray.length) {
      nextInt = 0;
    }
    if (prevInt < 0) {
      prevInt = imgArray.length - 1;
    }

    return [prevInt, nextInt];
  };

  const prevLeave = () => {
    setPrevEnter(false);
  };

  const nextLeave = () => {
    setNextEnter(false);
  };

  const onMouseEnter = () => {
    setThumbEnter(true);
  };

  const onMouseLeave = () => {
    setThumbEnter(false);
  };

  const intArray = getNextPrevNumber();
  const thumbChildren = imgArray.map((item, i) => (
    <span key={i}>
      <i style={{ backgroundImage: `url(${item?.img})` }} />
    </span>
  ));
  return (
    <BannerStyled>
      <BannerAnim
        onChange={onChange}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        prefixCls="custom-arrow-thumb"
        autoPlay={true}
      >
        {imgArray &&
          imgArray?.length &&
          imgArray?.map((item, idx) => (
            <Element key={`Element${idx}`} prefixCls="banner-user-elem">
              <Element.BgElement
                key="bg"
                className="bg cover-sheet"
                style={{
                  backgroundImage: `url(${item?.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <BannerTitle
                key={`BannerTitle${idx}`}
                text={item?.text}
                label={item?.content}
              />
            </Element>
          ))}
        <Arrow
          arrowType="prev"
          key="prev"
          prefixCls="user-arrow"
          component={TweenOne}
          onMouseEnter={() => {
            setPrevEnter(true);
          }}
          onMouseLeave={prevLeave}
          animation={{ left: prevEnter ? 0 : -120 }}
        >
          <div className="arrow"></div>
          <TweenOneGroup
            enter={{ opacity: 0, type: "from" }}
            leave={{ opacity: 0 }}
            appear={false}
            className="img-wrapper"
            component="ul"
          >
            <li
              style={{ backgroundImage: `url(${imgArray[intArray[0]]?.img})` }}
              key={intArray[0]}
            />
          </TweenOneGroup>
        </Arrow>
        <Arrow
          arrowType="next"
          key="next"
          prefixCls="user-arrow"
          component={TweenOne}
          onMouseEnter={() => {
            setNextEnter(true);
          }}
          onMouseLeave={nextLeave}
          animation={{ right: nextEnter ? 0 : -120 }}
        >
          <div className="arrow"></div>
          <TweenOneGroup
            enter={{ opacity: 0, type: "from" }}
            leave={{ opacity: 0 }}
            appear={false}
            className="img-wrapper"
            component="ul"
          >
            <li
              style={{ backgroundImage: `url(${imgArray[intArray[1]]?.img})` }}
              key={intArray[1]}
            />
          </TweenOneGroup>
        </Arrow>
        <Thumb
          prefixCls="user-thumb"
          key="thumb"
          component={TweenOne}
          animation={{ bottom: thumbEnter ? 0 : -70 }}
        >
          {thumbChildren}
        </Thumb>
      </BannerAnim>
    </BannerStyled>
  );
};
export default Banner;
