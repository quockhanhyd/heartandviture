import { Col, Divider, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SvgIcon from "src/components/SvgIcon";
import { formatDateAndTime } from "src/lib/dateFormatters";
import GuestServices from "src/services/GuestServices";
import { RelateNewsStyled } from "../styled";

const RelateToNews = () => {
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();

  const getCategoryPost = () => {
    setLoading(true);
    GuestServices.getCategoryPost()
      .then((res) => {
        if (res.isOk) setListData(res.Object);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getCategoryPost();
  }, []);

  return (
    <RelateNewsStyled>
      <Spin spinning={loading}>
        <div className="relate-news-header">
          <div className="relate-news-header-text">Danh mục bài viết</div>
          <div className="relate-news-header-space" />
        </div>
        <div className="relate-news-content pt-16 pb-16 pl-30 pr-30">
          <div className="relate-news-text-care mb-10 mt-10">
            Nhiều người quan tâm
          </div>
          {listData?.ListMostInterested?.map((i, idx) => (
            <div
              key={`RelateToNews${idx}`}
              className="relate-news-box-care pointer"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0 });
                navigate(`/news/${i?.PostID}`);
              }}
            >
              <div className="relate-news-box-care-title">{i?.Title}</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="relate-news-box-care-time">
                  {formatDateAndTime(i?.PublicationTime)}
                </div>
                <div className="d-flex">
                  {/* <SvgIcon
                    name="mode-comment"
                    style={{ margin: "0 6px 0 10px" }}
                  />
                  <div className="number-comment">{i?.NumberComment}</div> */}
                  <div className="d-flex">
                    <SvgIcon name="view" style={{ margin: "3px 6px 0 10px" }} />
                    <div className="number-comment">
                      {/* {!!item?.NumberOfViewers ? item?.NumberOfViewers : 0} */}
                      {i?.NumberOfViewers}
                    </div>
                  </div>
                </div>
              </div>

              <Divider
                className="mt-5 mb-5"
                style={{ borderTopWidth: idx === 2 ? 4 : 1 }}
              />
            </div>
          ))}
          <div className="relate-news-text-care">Tags phổ biến</div>
          <Row gutter={[12, 24]} className="mt-24">
            {listData?.ListPopularTags?.map((i, idx) => (
              <Col
                key={`tag123123${idx}`}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0 });
                  navigate(`/tim-kiem?TagId=${i?.TagsID}`, {
                    state: i,
                  });
                }}
              >
                <div className="relate-news-tag pointer"> {i?.TagsName}</div>
              </Col>
            ))}
          </Row>
          <Divider style={{ borderTopWidth: 4 }} />
        </div>
      </Spin>
    </RelateNewsStyled>
  );
};

export default RelateToNews;
