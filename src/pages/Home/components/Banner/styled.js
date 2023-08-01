import styled from "styled-components";

export const BannerStyled = styled.div`
  .cover-sheet {
    position: relative;
    ::before {
      content: "";
      width: 50%;
      opacity: 0.67;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;

      background-repeat: no-repeat !important;
      background-size: cover !important;
      background-position: center !important;
    }
    ::after {
      content: "";
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;

      background: linear-gradient(
        101.5deg,
        #113575,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      );
    }
  }
  .custom-arrow-thumb {
    height: calc(100vh - 330px);
    z-index: 5;
  }
  .banner-anim-elem .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .banner-user {
    height: 220px;
  }
  .banner-user-elem {
    text-align: center;
    color: #fff;
    position: relative;
    overflow: hidden;
  }
  .banner-user-elem .banner-user-title {
    width: 100%;
    top: 10%;
    left: 10%;
    .banner-user-title-item {
      width: 40%;
      font-size: 40px;
      font-weight: 600;
      text-align: left;
    }
  }
  .banner-user-elem .banner-user-text {
    width: 40%;
    top: 10%;
    left: 10%;
    font-weight: 600;
    .text-item {
      width: 100%;
    }
  }
  .fz-22 {
    font-size: 16px;
    text-align: left;
  }
  .custom-arrow-thumb .user-arrow {
    top: 50%;
    margin-top: -40px;
  }
  .custom-arrow-thumb .user-arrow .img-wrapper {
    width: 120px;
    height: 80px;
    float: left;
    position: relative;
    margin: 0;
    padding: 0;
  }
  .custom-arrow-thumb .user-arrow .img-wrapper li {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: absolute;
    list-style: none;
  }
  .custom-arrow-thumb .user-arrow .arrow {
    width: 20px;
    height: 80px;
    background: rgba(0, 0, 0, 0.3);
    position: relative;
  }
  .custom-arrow-thumb .user-arrow .arrow:before,
  .custom-arrow-thumb .user-arrow .arrow:after {
    width: 2px;
    height: 15px;
    background: #fff;
    display: block;
    content: " ";
    position: absolute;
  }
  .custom-arrow-thumb .user-arrow.next {
    right: -120px;
  }
  .custom-arrow-thumb .user-arrow.next .arrow {
    float: left;
  }
  .custom-arrow-thumb .user-arrow.next .arrow:before {
    -webkit-transform: rotate(-40deg);
    transform: rotate(-40deg);
    top: 28px;
    left: 10px;
  }
  .custom-arrow-thumb .user-arrow.next .arrow:after {
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
    bottom: 27px;
    left: 10px;
  }
  .custom-arrow-thumb .user-arrow.prev {
    left: -120px;
  }
  .custom-arrow-thumb .user-arrow.prev .arrow {
    float: right;
  }
  .custom-arrow-thumb .user-arrow.prev .arrow:before {
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
    top: 28px;
    left: 8px;
  }
  .custom-arrow-thumb .user-arrow.prev .arrow:after {
    -webkit-transform: rotate(-40deg);
    transform: rotate(-40deg);
    bottom: 27px;
    left: 8px;
  }
  .custom-arrow-thumb .user-thumb {
    overflow: hidden;
    background: rgba(255, 255, 255, 0.15);
    height: 40px;
  }
  .custom-arrow-thumb .user-thumb > span {
    width: 50px;
    height: 30px;
    margin: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    -webkit-transition: background-image 0.3s;
    transition: background-image 0.3s;
    background: transparent;
  }
  .custom-arrow-thumb .user-thumb > span.active {
    background: rgba(255, 255, 255, 0.45);
  }
  .custom-arrow-thumb .user-thumb > span i {
    display: block;
    width: 46px;
    height: 26px;
    margin: 2px;
    background-size: cover;
    background-position: center;
  }
`;
