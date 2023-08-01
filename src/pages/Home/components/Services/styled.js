import styled from "styled-components";

export const StyledSevices = styled.div`
  .isFix {
    position: fixed !important;
    top: 100px !important;
    width: 90% !important;
    left: 5% !important;
    right: 5% !important;
  }
  .div-img-hover {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .img-item-hover {
    cursor: pointer;
    transition: all 1s ease-in;
    :hover {
      transform: scale(1.3);
    }
  }
  .scrollbar {
    float: left;
    overflow-y: scroll;
  }
  .style-1::-webkit-scrollbar-thumb {
    background-color: #5b5b5b;
    border-radius: 1px;
  }
  /* .style-1::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
    background-color: #f5f5f5;
  } */
  .style-1::-webkit-scrollbar {
    width: 3px;
    /* background-color: #f5f5f5; */
    border-radius: 1px;
  }
  .force-overflow {
    min-height: 450px;
  }
  .content-service {
    padding: 8px 8px 0 0;
    font-size: 16px;
    line-height: 30px;
    text-align: justify;
    height: 80%;
    div p {
      font-size: 16px;
      line-height: 30px;
      margin: 0px;
    }
    li {
      position: relative !important;
      width: 95% !important;
      height: unset !important;

      list-style-type: disc !important;
      margin-left: 15px;
    }
  }
  .div-img-title {
    margin-top: -10px;
    margin-bottom: 8px;
    background: #fff;
    color: ${({ theme }) => theme.primaryColor};
  }
  .content-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin-left: 0px !important;
    }
  }
  .pic-details-demo-wrapper {
    position: relative;
    background: #fff;
    overflow: hidden;
    /* height: calc(100vh - 20px); */
    /* ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: url(https://muslimaid.storage.googleapis.com/upload/img_cache/file-2187-71b626e….jpg);
      filter: blur(3px);
    } */
  }

  .pic-details-demo {
    margin: 40px 20px;
    box-shadow: 0 10px 40px #c7d7b5;
    min-width: 550px;
    /* height: calc(100vh - 80px); */
    height: 866px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
  }

  .pic-details-demo-header {
    height: 32px;
    line-height: 32px;
    background: #000;
  }

  .pic-details-demo-header ul li {
    list-style: none;
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 4px;
    margin: 0 5px 0 0;
  }

  .pic-details-demo-header ul li:nth-child(1) {
    background: #cf3333;
    margin-left: 3%;
  }

  .pic-details-demo-header ul li:nth-child(2) {
    background: #dec811;
  }

  .pic-details-demo-header ul li:nth-child(3) {
    background: #28c026;
  }

  .pic-details-demo-header ul li:nth-child(4) {
    background: #fff;
    width: 80%;
    height: 16px;
    vertical-align: middle;
    margin: 0 10px;
  }

  .pic-details-demo-header ul li:nth-child(5),
  .pic-details-demo-header ul li:nth-child(5):before,
  .pic-details-demo-header ul li:nth-child(5):after {
    width: 20px;
    height: 2px;
    background: #bababa;
    border-radius: 2px;
  }

  .pic-details-demo-header ul li:nth-child(5) {
    vertical-align: middle;
    margin-left: 5px;
    position: relative;
  }

  .pic-details-demo-header ul li:nth-child(5):before,
  .pic-details-demo-header ul li:nth-child(5):after {
    content: "";
    display: block;
    position: absolute;
  }

  .pic-details-demo-header ul li:nth-child(5):before {
    top: -6px;
  }

  .pic-details-demo-header ul li:nth-child(5):after {
    top: 6px;
  }

  /* 外壳 end */
  /* 标题 */
  .pic-details-demo-title {
    width: 95%;
    margin: 20px auto;
    text-align: center;
  }

  .pic-details-demo-title h1 {
    color: #007eb9;
    font-size: 26px;
  }

  .pic-details-demo-title p {
    color: #878787;
    font-size: 12px;
  }

  /* 图片 */
  .pic-details-demo-image-wrapper {
    position: relative;
    list-style: none;
    width: 1000px;
    /* height: 290px; */
    height: 84%;
    margin: auto;
  }

  .pic-details-demo-image-wrapper li {
    width: 305px;
    height: 203px;
    position: absolute;
    z-index: 0;
    /* background: #fff; */
  }

  .pic-details-demo-image-box-shadow {
    box-shadow: 0 0 0 rgba(140, 140, 140, 0);
    height: 100%;
    transition: box-shadow 0.3s;
  }

  .pic-details-demo-image-wrapper li.open .pic-details-demo-image-box-shadow {
    box-shadow: 0 2px 8px rgba(140, 140, 140, 50);
  }

  .pic-details-demo-image-wrapper li a {
    width: 305px;
    bottom: 0;
    right: 0;
    z-index: 1;
    display: inline-block;
    position: absolute;
  }

  .pic-details-demo-image-wrapper li a,
  .pic-details-demo-image-wrapper li a img {
    display: block;
  }

  .pic-details-demo-text-wrapper {
    width: 50%;
    height: 100%;
    background: #fff;
    padding: 10px 15px;
    vertical-align: top;
    display: inline-block;
    position: absolute;
  }

  .pic-details-demo-text-wrapper h1 {
    font-size: 18px;
    margin: 5px auto;
  }

  .pic-details-demo-text-wrapper i {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  .pic-details-demo-text-wrapper em {
    height: 2px;
    width: 60px;
    background: #fa1f4e;
    border-radius: 2px;
    display: block;
  }

  .pic-details-demo-text-wrapper p {
    font-size: 12px;
    margin-top: 10px;
    line-height: 16px;
  }
  @media screen and (max-width: 414px) {
    .pic-details-demo {
      transform: scale(0.65) translateX(12px);
      transform-origin: left center;
    }
  }
  @media screen and (max-width: 375px) {
    .pic-details-demo {
      transform: scale(0.6) translateX(7px);
    }
  }
  @media screen and (max-width: 320px) {
    .pic-details-demo {
      transform: scale(0.5) translateX(12px);
    }
  }
`;
