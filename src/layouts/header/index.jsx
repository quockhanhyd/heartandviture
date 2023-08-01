import { Select } from "antd";
import React, { useRef, useEffect } from "react";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";
import { WrapHeader } from "./styled";
import ROUTER from "./../../routers/router";
import { NavLink, useLocation } from "react-router-dom";
import logoImg from "../../access/img/logo.png";
import { useTranslation } from "react-i18next";

export const listMenu = [
  {
    name: "HOME",
    path: ROUTER.HOME,
  },
  {
    name: "ABOUT US",
    path: ROUTER.ABOUT,
  },
  {
    name: "SERVICES",
    path: ROUTER.SERVICES,
    // submenu: [
    //   { name: "Supported Independent Living", path: ROUTER.ABOUT },
    //   { name: "Respite Accommodation", path: ROUTER.ABOUT },
    //   { name: "Support Coordination", path: ROUTER.ABOUT },
    //   { name: "Support Coordination", path: ROUTER.ABOUT },
    //   { name: "Group & Centre-Based Activities", path: ROUTER.ABOUT },
    //   { name: "Household Tasks", path: ROUTER.ABOUT },
    //   { name: "Medication Management", path: ROUTER.ABOUT },
    //   { name: "Travel & Transport", path: ROUTER.ABOUT },
    //   { name: "Personal Care", path: ROUTER.ABOUT },
    //   { name: "Development Skilled", path: ROUTER.ABOUT },
    // ],
  },
  {
    name: "CUSTOMER REVIEWS",
    path: ROUTER.CUSTOMER_REVIEWS,
  },
  {
    name: "NEWS",
    path: ROUTER.NEWS,
  },
  {
    name: "MAKE A REFERRAL",
    path: ROUTER.MAKE_A_REFERRAL,
  },
  {
    name: "JOBS",
    path: ROUTER.JOBS,
  },
  {
    name: "CONTACT US",
    path: ROUTER.CONTACT_US,
  },
];

const Header = () => {
  const headerRef = useRef();
  const location = useLocation();
  const { t, i18n } = useTranslation(["header"]);
  const currentLanguage = i18n.language;
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("language") || "en");
  }, [localStorage.getItem("language")]);

  return (
    <WrapHeader>
      <div className="top-header d-flex justify-content-between align-items-center padding-app">
        <div className="top-header_slogan" style={{ fontWeight: 700 }}>
          HEART AND VIRTUE PTY LTD
        </div>
        <div className="top-header_contact d-flex align-items-center">
          {/* <div className="mr-12 divider" /> */}
          <a
            href="mailto:info@heartandvirtue.com.au"
            className="contact-info d-flex align-items-center"
          >
            <AiOutlineMail className="mr-8" /> info@heartandvirtue.com.au
          </a>
          <a
            href="tel: +610426126879"
            className="phone-contact d-flex align-items-center"
          >
            <HiDevicePhoneMobile className="mr-8" />
            <div className="phone-contact_number">(+61) 426 126 879</div>
          </a>
          <Select
            value={currentLanguage}
            className="ml-16 select-languages"
            onChange={(val) => {
              localStorage.setItem("language", val);
              i18n.changeLanguage(val);
            }}
          >
            <Select.Option value="en" bordered={false}>
              <div className="d-flex algin-items-center h-100">
                <img src={""} alt="" />
                <span className="ml-6 h-100 d-flex align-items-center">
                  English
                </span>
              </div>
            </Select.Option>
            <Select.Option value="vi">
              <div className="d-flex algin-items-center h-100">
                <span className="ml-6 h-100 d-flex align-items-center">
                  Tiếng Việt
                </span>
              </div>
            </Select.Option>
          </Select>
        </div>
      </div>
      <div className="header-content">
        <div
          className="header-content_menu d-flex justify-content-between padding-app"
          ref={headerRef}
        >
          <div className="logo-web">
            <img src={logoImg} alt="" />
          </div>
          <div
            className="menu-list d-flex align-items-center"
            style={{ textTransform: "uppercase" }}
          >
            {listMenu.map((item, idx) =>
              item.submenu ? (
                <div
                  className={`menu-list_item ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  <div className="menu-list_item_value">{t(item.name)}</div>
                  {item.submenu ? (
                    <div className="submenu">
                      {item.submenu.map((i, idx) => (
                        <div className="submenu_item">
                          <div className="text">{t(i.name)}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={`menu-list_item ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  <div className="menu-list_item_value">{t(item.name)}</div>
                </NavLink>
              )
            )}
          </div>
        </div>
      </div>
    </WrapHeader>
  );
};
export default Header;
