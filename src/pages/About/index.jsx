import { useTranslation } from "react-i18next";
import { WrapHeader } from "../../layouts/header/styled";
import { WrapAboutPage } from "./styled";
import bgr from "src/access/img/about_us.png";

const AboutPage = () => {
  const { t } = useTranslation("about_us");
  return (
    <div className="">
      <WrapHeader>
        <div
          className="slogan d-flex align-items-center justify-content-center"
          style={{ backgroundImage: `url(${bgr})` }}
        >
          <h2 className="title-page">{t("ABOUT US")}</h2>
        </div>
      </WrapHeader>
      <WrapAboutPage className="page-common">
        <div className="title-main">Heart and Virtue Pty Ltd</div>
        <div className="subtitle">{t("ABOUT US")}:</div>
        <div className="content indented-paragraph">
          {t("ABOUT US CONTENT")}
        </div>
        <div className="subtitle mt-20">{t("OUR VISION")}:</div>
        <div className="content indented-paragraph">
          {t("OUR VISION CONTENT")}
        </div>
        <div className="subtitle mt-20">{t("OUR COMMITMENT")}:</div>
        <div className="content indented-paragraph">
          {t("OUR COMMITMENT CONTENT")}
        </div>
        <div className="subtitle mt-20">{t("OUR GUEST")}</div>
        <div className="content indented-paragraph">
          {t("OUR GUEST CONTENT 1")}
        </div>
        <div className="content indented-paragraph">
          {t("OUR GUEST CONTENT 2")}
        </div>
      </WrapAboutPage>
    </div>
  );
};
export default AboutPage;
