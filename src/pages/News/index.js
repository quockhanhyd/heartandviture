import { Col, Divider, Pagination, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { WrapHeader } from "src/layouts/header/styled";
import styled from "styled-components";
import { WrapAboutPage } from "../About/styled";
import { StyledNews } from "../Home/components/News/styled";
import NewsItem from "./components/NewsItem";
import { StyledNewList, WrapHeaderNews } from "./styled";
import MELBOURNE from "src/access/img/new/MELBOURNE.png";
import Moomba from "src/access/img/new/Moonba.png";
import pet from "src/access/img/new/pet.png";
import vocher from "src/access/img/new/vocher.jpg";
import logo from "src/access/img/news.jpg";
import GuestServices from "src/services/GuestServices";
export const dataNew = [
  {
    id: "1",
    title: "MELBOURNE PIZZA RUN IN 2023!",
    date: "Wednesday, 22.12.2023",
    content: `Nếu các bạn nhà anh chị yêu thích thể thao? Nếu anh chị muốn giáo dục các bạn tầm quan trọng của tập thể dục thể thao hay đóng góp một phần nhỏ để gây quỹ giúp đỡ các trường hợp khó khăn?...
    <br/>
    HÃY THAM GIA VUI VẺ TẠI MELBOURNE PIZZA RUN IN 2023!
    <br/>
    Thử thách bản thân để có một ngày tuyệt vời bắt đầu bằng một cuộc chạy vui vẻ và kết thúc bằng một vài chiếc bánh pizza ngon lành ở vạch đích! Với cự ly dành cho tất cả mọi người (đường đua 10 km, 5 km hoặc 2 km), Pizza Run là một ngày thú vị để đưa gia đình và bạn bè của bạn đi cùng.
    <br/>
    Chương trình sẽ diễn ra tại:
    <br/>
    Palms Lawn, Albert Park Lake, Melbourne, Victoria 3206
    <br/>
    Vào ngày Chủ nhật, 4 tháng 6 năm 2023.`,
    img: MELBOURNE,
    linknew:
      "https://www.pizzarun.com.au/melbourne?fbclid=IwAR1apAHaRicyOOmOl_barZDEhmmmEZHk6jiUSNIQ8sYbJhHdi2TiYRy9bw8",
  },
  {
    id: "2",
    title:
      "Lễ hội Moomba đã quay trở lại vào dịp Long weekend trong tháng 3 này.",
    date: "Wednesday, 22.12.2023",
    content: `Lễ hội Moomba được tổ chức hàng năm tại Melbourne, Úc. Được điều hành bởi Thành phố Melbourne, đây là lễ hội cộng đồng tự do lớn nhất của Úc. Moomba có tầm quan trọng về mặt văn hóa đối với Melbourne, đã được tổ chức từ năm 1955 và thường xuyên thu hút rất nhiều người tham dự.
    <br/>Các sự kiện truyền thống bao gồm cuộc diễu hành Moomba, lễ trao vương miện của các vị vua Moomba, bắn pháo hoa, các hoạt động trên sông bao gồm thể thao dưới nước, thả phao nước và Birdman Rally, cũng như nhạc sống...
    <br/>Anh chị có thể xem các chương trình cụ thể trong link đính kèm dưới đây:`,
    img: Moomba,
    linknew:
      "https://moomba.melbourne.vic.gov.au/program/?fbclid=IwAR1jRG2O6DniFkZ30ZKKbb85K-5uPaZf9qYwoGQxfESINrlUw2Zv0GpukhM",
  },
  {
    id: "3",
    title: "Buổi biểu diễn thú cưng tại Melbourne vào ngày 25-26 tháng 3/2023",
    date: "Wednesday, 22.12.2023",
    content: `
    <div>Nếu các bạn nhà mình yêu thích các con thú thì đây sẽ là 1 chương trình dành cho bạn ấy.</div>
    <div>Chương trình sẽ mang lại những trải nghiệm hoàn hảo cho chủ sở hữu thú cưng kết hợp giáo dục, giải trí và các sản phẩm dành cho chó, mèo, cá, chim, bò sát và động vật nhỏ.
    </div> <ul>
    <li> Giáo dục bản thân với các cuộc trò chuyện với bác sĩ thú y nổi tiếng 
    </li>
    <li> Giải trí với các chương trình sân khấu và hoạt động suốt cả ngày
    </li>
    <li> Tương tác với nhiều loại vật nuôi và người nuôi
    </li>
    <li> Nơi vỗ về cho chó con và khu vực âu yếm mèo con
    </li>
    <li> Cơ hội chụp ảnh
    </li>
    </ul>`,
    img: pet,
    linknew:
      "https://thepetshow.com.au/?fbclid=IwAR2lWFsm41Ib61GTGhMDCwwAYhNsT35NrBVd93S1Ao3oMhcFpYQ_NqaO8Ec",
  },
  {
    id: "4",
    title:
      "Voucher $200 cho các bạn có từ 0-18 tuổi và có thẻ Health Care Card or Pensioner Concession Card and Medicare card!",
    date: "Wednesday, 22.12.2023",
    content: `
    Voucher này có thể sử dụng để đăng ký các chương trình thể thao, nghệ thuật có đăng ký với chương trình.
    Anh Chị kiểm tra xem các bạn nhà mình có đủ điều kiện để claim voucher này tại trang website: www.getactive.vic.gov.au/vouchers.
    <br/>
    We’re excited to announce that applications for Round 6 of the Get Active Kids Voucher Program are now open! 
    <br/>
    Eligible families can apply for $200 vouchers and use them at their registered Get Active Kids Voucher Activity Provider without having to worry about upfront costs. Children aged 0-18 and named on a Health Care Card or Pensioner Concession Card and Medicare card are eligible. Apply now at www.getactive.vic.gov.au/vouchers to receive your voucher to use with an approved activity provider. Present the voucher code to your activity provider and get up to $200 off the registration and membership fee (as well as any included uniforms and/or equipment).
    <br/>
    If you have already paid for your child’s activity, you can apply for a reimbursement.  You can only apply for either one voucher or reimbursement for each child in Round 6.
    <br/>
    Important Dates:
    <br/>
    21 February to 10 May 2023: Round open for parents, carers or guardians to apply for a Voucher or Reimbursement 
    <br/>
    28 November 2022 to 10 May 2023: Period that you can seek a reimbursement for eligible expenditure 
    <br/>
    21 May 2023: Last day for vouchers to be presented to activity providers.
    `,
    img: vocher,
    linknew: "https://www.getactive.vic.gov.au/vouchers",
  },
];
const NewList = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [dataPost, setDataPost] = useState();
  const [pagination, setPagination] = useState({
    CurrentPage: 1,
    PageSize: 20,
  });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location, pagination?.CurrentPage]);

  useEffect(() => {
    if (pagination) getListPost();
  }, [pagination]);

  const getListPost = async () => {
    try {
      setLoading(true);
      const res = await GuestServices.getListPost({
        ...pagination,
      });
      if (res?.isError) return;
      setDataPost(res?.Object);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Spin spinning={loading}>
      <StyledNewList>
        <WrapHeader>
          <div
            className="slogan d-flex align-items-center justify-content-center"
            style={{ backgroundImage: `url(${logo})` }}
          >
            <h2>NEWS</h2>
          </div>
        </WrapHeader>

        <WrapAboutPage className="page-common">
          <div className="news-re">
            <div className="news-ab">
              {/* <div className="news-one">
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
                    <span>
                      How redefining autism could improve research on the
                      condition
                    </span>
                  </div>
                  <div className="new-date ">Wednesday, 20.07.2022</div>
                  <div className="new-content max-line3">
                    Autism is typically thought of as a collection of traits:
                    restricted interests, repetitive behaviors and difficulty
                    with social communication. But by the time those traits can
                    be detected and a child diagnosed with autism — around the
                    age of 4, on average, in the United States — she has missed
                    out on months, if not years, of therapy when her brain is
                    most flexible. Despite more than a decade of research aimed
                    at improving early detection, the average age of autism
                    diagnosis has not budged. Part of the problem lies with how
                    the condition is defined, says Ami Klin, director of the
                    Marcus Autism Center in Atlanta, Georgia. In a paper
                    published in September, Klin and his colleagues call for
                    autism to be redefined based on the latest scientific
                    evidence, which indicates that it is highly heritable and
                    present from birth. Rather than thinking of autism as a
                    collection of traits, Klin says, researchers, clinicians and
                    policymakers should think about it as a genetic condition
                    that alters how a child perceives and interacts with others,
                    one in which early life experiences can shape the severity
                    of its core traits.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
              <Row gutter={[16, 16]} style={{ padding: "0px 24px" }}>
                {dataPost?.LastestPost?.map((item, idx) => (
                  <Col span={8}>
                    <NewsItem key={idx} item={item} />
                  </Col>
                ))}
                <Col span={24}>
                  <div className="d-flex-end " style={{ marginTop: "32px" }}>
                    <Pagination
                      className="d-flex"
                      total={dataPost?.Total}
                      hideOnSinglePage={dataPost?.Total <= 10}
                      current={pagination?.CurrentPage}
                      pageSize={pagination?.PageSize || 1}
                      responsive
                      locale={{ items_per_page: "" }}
                      showSizeChanger={dataPost?.Total > 10}
                      onChange={(CurrentPage, PageSize) =>
                        setPagination({
                          ...pagination,
                          CurrentPage,
                          PageSize,
                        })
                      }
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </WrapAboutPage>
      </StyledNewList>
    </Spin>
  );
};

export default NewList;
