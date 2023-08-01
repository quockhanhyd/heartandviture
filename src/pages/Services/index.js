import React from "react";
import { WrapHeader } from "src/layouts/header/styled";
import { WrapAboutPage } from "../About/styled";
import PicDetailsDemo from "../Home/components/Services/Service";
import { WrapHeaderServices } from "./styled";
import logo from "src/access/img/bgr1.jpg";

const Services = () => {
  return (
    <div>
      <WrapHeader>
        <div
          className="slogan d-flex align-items-center justify-content-center"
          style={{ backgroundImage: `url(${logo})` }}
        >
          <h2>Services</h2>
        </div>
      </WrapHeader>

      <WrapAboutPage className="page-common">
        <div>
          <PicDetailsDemo />
        </div>
      </WrapAboutPage>
    </div>
  );
};

export default Services;
