import { Col, Row } from "antd";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import logoImg from "../../access/img/logo.png";
import { listMenu } from "../header";
import ROUTER from "./../../routers/router";
import { WrapFooter } from "./styled";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const location = useLocation();
  const { t } = useTranslation(["footer"]);

  return (
    <WrapFooter
      className={location.pathname === ROUTER.HOME ? "pt-36" : "pt-36 mt-20"}
    >
      {/* {location.pathname === ROUTER.HOME && (
        <div className="logo d-flex align-items-center justify-content-center">
          <img src={logoImg} alt="" width={300} />
        </div>
      )} */}
      <Row gutter={24}>
        <Col xs={24} sm={24} lg={12} xl={8}>
          {/* <div className="footer_content">
            Anytime Care acknowledges the traditional owners of the lands we
            work on and would like to pay our respects to their Elders past and
            present.
          </div>
          <img src={FgImg} alt="" width={300} /> */}
          <div className="footer_content fw-500 mt-16">
            {t("Subscribe to Our Newsletter")}
          </div>
          <div className="send-email d-flex align-items-center">
            <input
              type="Email"
              className="send-email_input"
              placeholder="Email"
            />
            <button className="send-email_button">{t("SEND")}</button>
          </div>
          <div className="footer_content fw-600">ABN: 13 656 767 761</div>
          {/* <div className="footer_content fw-600">
            NDIS Registration: 4050091419
          </div> */}
        </Col>
        <Col xs={24} sm={24} lg={12} xl={8}>
          <div className="title">{t("QUICK LINKS")}</div>
          {listMenu
            .filter((i) => !i.submenu)
            .map((item, idx) => (
              <NavLink to={item.path} className="footer_content">
                <div className="footer_content d-flex align-items-center">
                  <BsFillArrowRightCircleFill />
                  <div className="ml-5">{t(item.name)}</div>
                </div>
              </NavLink>
            ))}
          {/* <div className="d-flex align-items-center mt-8">
            <Tooltip title="Facebook">
              <div className="mr-12 item-social fb">
                <FaFacebookF />
              </div>
            </Tooltip>
            <Tooltip title="Email">
              <div className="item-social mail">
                <HiOutlineMail />
              </div>
            </Tooltip>
          </div> */}
        </Col>
        <Col xs={24} sm={24} lg={12} xl={8}>
          {/* <div className="title">MELBOURNE BRANCH</div> */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573.8863710536734!2d144.73976765113542!3d-37.91237427500442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6862d3ef3361d%3A0x137b7dd85a80b314!2s12%20Airlie%20Ave%2C%20Point%20Cook%20VIC%203030%2C%20%C3%9Ac!5e0!3m2!1svi!2s!4v1678006863358!5m2!1svi!2s"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="mb-24"
            ></iframe>
          </div>
          {/* <a
            href="mailto:info@heartandvirtue.com.au"
            className="footer_content fw-500 d-flex align-items-center"
          >
            <FaEnvelopeOpenText className="mr-8" />
            info@heartandvitue.com.au
          </a>
          <a
            href="tel: +61 042 6126 879"
            className="footer_content fw-500 d-flex align-items-center"
          >
            <BsFillTelephoneFill className="mr-8" />
            +61 042 6126 879
          </a>
          <div className="footer_content fw-500 d-flex align-items-center">
            <IoLocationSharp className="mr-8" />
            <div className="phone-contact_number">
              12 Airlie Avenue, Point Cook, 3030 VIC
            </div>
          </div>
          <div className="footer_content fw-500 d-flex align-items-center">
            <AiFillClockCircle className="mr-8" />
            <div className="phone-contact_number">
              Mon – Fri 9:00 AM – 5:00 PM
            </div>
          </div> */}
        </Col>
        {/* <Col span={24} className="footer_content last-info">
          Copyright 2012 - 2022 | Anytime Care | All Rights Reserved
        </Col> */}
      </Row>
    </WrapFooter>
  );
};
export default Footer;
