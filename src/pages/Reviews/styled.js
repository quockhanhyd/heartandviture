import styled from "styled-components";
export const StyledCustomerReviewItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 24px;
  .ml-16 {
    margin-left: 16px;
  }
  .mr-16 {
    margin-right: 16px;
  }
  img {
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: rgb(0 0 0 / 12%) 0 1px 3px;
  }
  .video-bg {
    video {
      width: 100%;
      height: calc(100vh - 44px);
      object-fit: cover;
    }
    .content-bg {
      position: absolute;
      left: 10%;
      top: 40%;
      .ant-btn {
        padding: 10px 15px;
        text-align: center;
        height: 50px !important;
        background: #000064;
        :hover {
          background: #015ee1;
          transform: translateY(-10px);
          box-shadow: 0px 5px 30px rgba(0, 174, 255, 0.692);
        }
      }
      .content-bg-title {
        font-size: 50px;
        font-weight: 600;
        color: #fff;
        margin-bottom: 24px;
      }
      .content-bg-label {
        width: 40%;
        font-size: 20px;
        color: #fff;
        margin-bottom: 24px;
      }
    }
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #0000004d;
    }
  }
`;
