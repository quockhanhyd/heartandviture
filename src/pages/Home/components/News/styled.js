import styled from "styled-components";

export const StyledNews = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    border: 1 solid #000;
    :after {
      --swiper-navigation-size: 25px;
    }
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    right: 0;
  }
  padding: 24px;
  .new-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .new-title-content {
      font-size: 24px;
      font-weight: bold;
      color: ${({ theme }) => theme.primaryColor};
    }
    .new-title-see {
      cursor: pointer;
      :hover {
        font-weight: bold;
        color: #007aff;
      }
    }
  }
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
    :hover {
      transform: translateY(-10px);
    }
    box-shadow: -1px 1px 4px 1px rgb(0 0 0 / 5%);
    border-radius: 10px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 270px;
    .new-img {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 170px;
        border-radius: 10px;
        object-fit: cover;
      }
    }
    .new-sumary {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      padding: 16px;
      .new-title {
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
      }
      .new-date {
        font-size: 12px;
        line-height: 16px;
        color: #5f6574;
        margin: 5px 0px 16px 0px;
      }
      .new-content {
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
`;
