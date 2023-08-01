import QueueAnim from "rc-queue-anim";
import PropTypes from "prop-types";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
import { CloseOutlined } from "@ant-design/icons";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import { StyledSevices } from "./styled";
import { Button, Tooltip } from "antd";
import { dataArrayImg, textData } from "../data";
import { useTranslation } from "react-i18next";

let dataArray = dataArrayImg.map((item, i) => ({ ...item, ...textData[i] }));

const PicDetailsDemo = ({ className = "pic-details-demo" }) => {
  const [picOpen, setPicOpen] = useState({});
  const { t } = useTranslation("service");

  const onImgClick = (e, i) => {
    const newPicOpen = {};
    Object.keys(picOpen).forEach((key) => {
      if (key !== i && picOpen[key]) {
        newPicOpen[key] = false;
      }
    });
    newPicOpen[i] = true;
    setPicOpen(newPicOpen);
  };

  const onClose = (e, i) => {
    const newPicOpen = { ...picOpen };
    newPicOpen[i] = false;
    setPicOpen(newPicOpen);
  };

  const onTweenEnd = (i) => {
    const newPicOpen = { ...picOpen };
    delete newPicOpen[i];
    setPicOpen({ ...newPicOpen });
  };

  const getDelay = (e) => {
    const i = e.index + (dataArray.length % 3);
    return (i % 3) * 100 + Math.floor(i / 3) * 100 + 200;
  };

  const getLiChildren = () => {
    const imgWidth = 293;
    const imgHeight = 203;
    const imgBoxWidth = 347;
    const imgBoxHeight = 256;

    return dataArray.map((item, i) => {
      const { image } = item;
      const title = t(item.title);
      const content = t(item.content);
      const isEnter = typeof picOpen[i] === "boolean";
      const isOpen = picOpen[i];

      const left = isEnter ? 0 : imgBoxWidth * (i % 3);
      const imgLeft = isEnter ? imgBoxWidth * (i % 3) : 0;
      const isRight = !!Math.floor((i % 3) / 2);
      const isTop = Math.floor(i / 3);
      let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
      top = isEnter ? top : imgBoxHeight * isTop;
      let imgTop = isTop ? imgBoxHeight : 0;
      imgTop = isEnter ? imgTop : 0;

      const liStyle = isEnter
        ? { width: "100%", height: 350, zIndex: 1000 }
        : null;
      const liAnimation = isOpen
        ? { boxShadow: "0 2px 8px rgba(140, 140, 140, .35)" }
        : { boxShadow: "0 0px 0px rgba(140, 140, 140, 0)" };
      let aAnimation = isEnter
        ? {
            delay: 400,
            ease: "easeInOutCubic",
            width: imgWidth,
            height: imgHeight,
            onComplete: onTweenEnd.bind(this, i),
            left: imgBoxWidth * (i % 3),
            top: isTop ? imgBoxHeight : 0,
          }
        : null;
      aAnimation = isOpen
        ? {
            ease: "easeInOutCubic",
            left: isRight ? "unset" : 0,
            right: isRight ? 0 : "unset",
            width: "50%",
            height: 350,
            top: 0,
          }
        : aAnimation;

      return (
        <TweenOne
          key={i}
          style={{
            left,
            top,
            ...liStyle,
          }}
          component="li"
          className={isOpen ? "open isFix" : ""}
          animation={liAnimation}
        >
          <TweenOne
            component="a"
            onClick={(e) => {
              isOpen ? onClose(e, i) : onImgClick(e, i);
            }}
            style={{
              left: imgLeft,
              top: imgTop,
            }}
            animation={aAnimation}
          >
            {!isOpen && (
              <>
                <Tooltip title={title}>
                  <div className="max-line1 div-img-title">
                    <b className="img-title" style={{ paddingBottom: "8px" }}>
                      {title}
                    </b>
                  </div>
                </Tooltip>
              </>
            )}
            <div className="div-img-hover">
              <img
                // className="img-item-hover"
                src={image}
                alt={""}
                width="100%"
                height="100%"
                style={{
                  cursor: "pointer",
                  objectFit: "cover",
                  borderRadius: isOpen ? "0px" : "5px",
                }}
              />
            </div>
          </TweenOne>
          <TweenOneGroup
            enter={[
              {
                opacity: 0,
                duration: 0,
                type: "from",
                delay: 400,
              },
              {
                ease: "easeOutCubic",
                type: "from",
                left: isRight ? "50%" : "0%",
              },
            ]}
            leave={{ ease: "easeInOutCubic", left: isRight ? "50%" : "0%" }}
            component=""
          >
            {isOpen && (
              <div
                className={`${className}-text-wrapper `}
                key="text"
                style={{
                  left: isRight ? "0%" : "50%",
                }}
              >
                <div className="content-title ">
                  <Tooltip title={title}>
                    <h1 style={{ fontSize: "24px" }} className="max-line1">
                      {title}
                    </h1>
                  </Tooltip>
                  <CloseOutlined onClick={(e) => onClose(e, i)} />
                </div>
                <em />
                <div className="content-service scrollbar style-1">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                  />
                </div>
              </div>
            )}
          </TweenOneGroup>
        </TweenOne>
      );
    });
  };

  return (
    <StyledSevices>
      <div>
        <div className={`${className}-wrapper`}>
          <div className={className}>
            <QueueAnim type="bottom" className={`${className}-title`}>
              <h1 key="h1">SERVICES WE PROVIDE</h1>
              <p key="p">Provided by Our Caring Professionals</p>
            </QueueAnim>
            <QueueAnim
              delay={getDelay}
              component="ul"
              className={`${className}-image-wrapper`}
              interval={0}
              type="bottom"
            >
              {getLiChildren()}
            </QueueAnim>
          </div>
        </div>
      </div>
    </StyledSevices>
  );
};

PicDetailsDemo.propTypes = {
  className: PropTypes.string,
};

export default PicDetailsDemo;
