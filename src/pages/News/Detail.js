import { Col, Divider, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import linkIcon from "src/access/img/link-icon.png";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { dataNew } from ".";
import { WrapAboutPage } from "../About/styled";
import { WrapHeader } from "src/layouts/header/styled";
import logo from "src/access/img/news.jpg";
import RelateToNews from "./RelateToNew/RelateToNews";
import GuestServices from "src/services/GuestServices";
// import {
//   LocalizationContext,
//   ThemeContext,
//   Viewer,
//   Worker,
// } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
// import vi_VN from "./vi_VN.json";
import SvgIcon from "src/components/SvgIcon";
import moment from "moment";
// import { ViewPDFStyle } from "./styled";
const DetailNewStyle = styled.div`
  .button-back {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .new-detail {
    /* position: relative;
    top: -220px; */
    padding: 24px 50px;
    color: #000;
    .new-title {
      font-size: 24px;
      font-weight: bold;
      /* margin-bottom: 24px; */
    }
    .fl {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .new-img {
        flex: 1;
        position: relative;
        height: 250px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .div-link {
          height: 100%;
          width: 0%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background: #007eb9a8;
          position: absolute;
          display: none;
          top: 0;
          left: 0;
          bottom: 0;
          overflow: hidden;
          .link {
            width: 25px;
            height: 25px;
            border: 1px solid #fff;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 15px;
              height: 15px;
            }
          }
          .new-name {
            color: #fff;
            font-size: 12px;
            font-weight: 600;
          }
        }
        :hover {
          .div-link {
            display: flex;
            animation: mymove 0.5s linear 0s alternate forwards;
          }
        }
        @keyframes mymove {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      }
      .new-content {
        flex: 2;
      }
    }
  }
`;
const NewDetail = () => {
  const PostID = useParams()?.id;
  const [loading, setLoading] = useState(false);
  const [detailNews, setDetailNews] = useState();
  const [listPostRelate, setListPostRelate] = useState();
  const navigate = useNavigate();

  const getDetailPost = async () => {
    try {
      setLoading(true);
      const res = await GuestServices.getDetail({ PostID });
      if (res?.isOk) setDetailNews(res?.Object);
      else setDetailNews(undefined);
    } finally {
      setLoading(false);
    }
  };
  const getListPostRelate = async () => {
    try {
      setLoading(true);
      const res = await GuestServices.getListPostRelate({
        CategoryPostID: detailNews?.CategoryPostID,
      });
      if (res?.isError) return;
      setListPostRelate(res?.Object);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (PostID) getDetailPost();
  }, [PostID]);

  useEffect(() => {
    if (detailNews) getListPostRelate();
  }, [detailNews]);

  // const toolbarPluginInstance = toolbarPlugin();
  // const { Toolbar } = toolbarPluginInstance;
  // const [currentTheme, setCurrentTheme] = useState("light");
  // const [l10n, setL10n] = useState(vi_VN);

  // const localizationContext = { l10n, setL10n };
  // const themeContext = { currentTheme, setCurrentTheme };
  return (
    <Spin spinning={loading}>
      <div className="new-detail">
        <div className="new-title">{detailNews?.Title}</div>

        <Row
          gutter={10}
          className="align-items-center new-detail-sub-header mt-8"
        >
          <Col className="">
            <SvgIcon name="author" />
          </Col>
          <Col className="new-detail-sub-text">{detailNews?.Author}</Col>
          <Col>
            <SvgIcon name="access-time" />
          </Col>
          <Col className="new-detail-sub-text">
            {detailNews?.PublishDate &&
              moment(detailNews?.PublishDate).format("LLLL")}
          </Col>

          <Col>
            <div className="d-flex">
              <SvgIcon name="view" style={{ margin: "3px 6px 0 10px" }} />
              <div className="number-comment">
                {!!detailNews?.NumberOfViewers
                  ? detailNews?.NumberOfViewers
                  : 0}
                {/* {detailNews?.NumberOfViewers} */}
              </div>
            </div>
          </Col>
        </Row>
        <Divider />

        <Row gutter={[24, 24]} className="mt-24">
          <Col xs={24} md={16}>
            <div className="fl">
              <div className="new-content">
                <div
                  className="new-content"
                  dangerouslySetInnerHTML={{
                    __html: detailNews?.Content,
                  }}
                />

                {/* {!!detailNews?.ListFile?.length &&
          detailNews?.ListFile?.map((item, id) =>
            item?.FileUrl ? (
              <ViewPDFStyle>
                <div className="pdf-container ">
                  <ThemeContext.Provider value={themeContext}>
                    <LocalizationContext.Provider value={localizationContext}>
                      <div
                        className={`rpv-core__viewer rpv-core__viewer--${currentTheme}`}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            overflow: "hidden",
                          }}
                        >
                          <Worker
                            workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js"
                            className="custom"
                          >
                            <Viewer
                              fileUrl={item?.FileUrl ? item?.FileUrl : ""}
                              plugins={[toolbarPluginInstance]}
                            />
                          </Worker>
                        </div>
                      </div>
                    </LocalizationContext.Provider>
                  </ThemeContext.Provider>
                </div>
              </ViewPDFStyle>
            ) : (
              ""
            )
          )} */}
                <Divider className="m-0 mt-10 mb-10" />
                <Row gutter={20} style={{ marginBottom: "10px" }}>
                  {detailNews?.ListTags?.map((i, idx) => (
                    <Col key={`tag${idx}`}>
                      <div className="news-detail-box-tags">{i?.TagsName}</div>
                    </Col>
                  ))}
                </Row>
                <div
                  className="button-back"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    window.history.back();
                  }}
                >
                  <SvgIcon
                    name="arrow-back-red"
                    style={{ marginRight: "5px" }}
                  />
                  <span style={{ fontWeight: "400" }}>Trở về</span>
                </div>

                <div className="title-type-1">Bài viết liên quan</div>
                {listPostRelate?.length > 0 &&
                  listPostRelate?.map((item) => (
                    <div
                      style={{ cursor: "pointer" }}
                      key={`news-relate-to${item?.PostID}`}
                      className="primary-color text-ellipsis mb-12 fw-600"
                      onClick={() => {
                        window.scrollTo({ top: 0, left: 0 });
                        navigate(`/news/${item?.PostID}`);
                      }}
                    >
                      {item?.Title}
                    </div>
                  ))}
              </div>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <RelateToNews />
          </Col>
        </Row>
      </div>
    </Spin>
  );
};
const Detail = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { id } = useParams();
  console.log(id);
  let item = dataNew?.find((i) => i?.id === id);
  console.log(item);
  return (
    <DetailNewStyle>
      <WrapHeader>
        <div
          className="slogan d-flex align-items-center justify-content-center"
          style={{ backgroundImage: `url(${logo})` }}
        >
          <h2>NEWS</h2>
        </div>
      </WrapHeader>
      <NewDetail />
      <WrapAboutPage className="page-common"></WrapAboutPage>
    </DetailNewStyle>
  );
};

export default Detail;
