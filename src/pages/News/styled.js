import styled from "styled-components";

export const RelateNewsStyled = styled.div`
  .subHeader {
  }
  .relate-news-header {
    background: #007eb9;
    padding: 30px;
  }
  .relate-news-header-text {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
  }
  .relate-news-header-space {
    margin-top: 20px;
    border: 2px solid #fff;
  }
  .relate-news-content {
    padding: 40px 30px;
    background: #f7f7f7;
  }
  .relate-news-text-care {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }
  .relate-news-box-care {
    margin-top: 30px;
  }
  .relate-news-box-care-title {
    font-weight: 600;
    color: #154398;
  }
  .relate-news-box-care-time {
    color: #838383;
    font-size: 12px;
    margin: 15px 0px;
  }
  .relate-news-tag {
    border: 1px solid #dddddd;
    border-radius: 4px;
    padding: 10px 8px;
    font-size: 10px;
    color: #000000;
  }
`;

export const ViewPDFStyle = styled.div`
  .pdf-container {
    height: auto !important;
    border: none;
  }
  .ant-modal-body {
    padding: 0;
    overflow: hidden hidden;
  }
  .ant-modal-header {
    &::after {
      content: unset;
    }
  }
  .pdf-container {
    height: calc(100vh - 20px);
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .rpv-default-layout__toolbar {
      position: sticky;
      top: 0;
    }
  }
`;
export const StyledNewList = styled.div`
  .news-re {
    /* position: relative;
    top: -220px; */
  }
  .news-one {
    .list-new {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16;
    }
    .div-new-item {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin: 10px auto 30px auto;
    }
    .new-item {
      margin-right: 230px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      height: 320px;
      .new-img {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        img {
          /* :hover {
            transform: translateY(-20px);
          } */

          box-shadow: -1px 3px 4px 1px rgb(0 0 0 / 30%);
          width: 80%;
          height: 100%;
          object-fit: cover;
        }
      }
      .new-sumary {
        max-width: 666px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        padding: 16px;
        .new-title {
          font-weight: 600;
          line-height: 27px;
          color: #fff;
          span {
            font-size: 24px !important;
          }
        }
        .new-date {
          font-size: 12px;
          line-height: 16px;
          color: #5f6574;
          margin: 5px 0px 16px 0px;
          color: #fff;
        }
        .new-content {
          font-size: 14px;
          line-height: 16px;
          color: #5f6574;
          color: #fff;
        }
      }
    }
  }
`;
