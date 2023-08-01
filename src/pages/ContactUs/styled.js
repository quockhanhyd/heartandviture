import styled from "styled-components";

export const ContactPageStyle = styled.div`
  .title {
    color: ${({ theme }) => theme.primaryColor};
    font-size: 40px;
    font-weight: 500;
    line-height: 2;
    margin-bottom: 28px;
  }
  .sub-title {
    color: ${({ theme }) => theme.primaryColor};
    font-size: 30px;
    font-weight: 500;
    line-height: 2;
    margin-bottom: 16px;
  }
  .content {
    font-size: 16px;
    letter-spacing: 0.8px;
  }
  .content-contact {
    font-size: 18px;
    letter-spacing: 0.8px;
  }
  .link-contact {
    cursor: pointer;
    &:hover {
      color: #237804;
    }
  }
  svg.icon-contact {
    background: ${({ theme }) => theme.primaryColor};
    border-radius: 50%;
    color: #fff;
    width: 30px;
    height: 30px;
    padding: 6px;
    margin-right: 8px;
  }
  .input-info {
    height: 40px;
    border-radius: 12px;
    padding: 7px 12px;
    color: ${({ theme }) => theme.textBlandColor};
    input {
      color: ${({ theme }) => theme.textBlandColor};
    }
    &:hover {
      border-color: #d9d9d9;
    }
    &:focus {
      border-color: #4096ff;
    }
  }
  .select-time {
    &:hover {
      .ant-select-selector {
        border-color: #d9d9d9;
      }
    }
    &:focus {
      .ant-select-selector {
        border-color: #4096ff !important;
      }
    }
    .ant-select-selector {
      height: 40px;
      border-radius: 12px;
    }
    .ant-select-selection-placeholder,
    .ant-select-selection-item {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.textBlandColor};
    }
  }
  .btn-send {
    background: ${({ theme }) => theme.primaryColor};
    border-color: ${({ theme }) => theme.primaryColor};
    height: 40px;
    color: #fff;
    padding: 4px 30px;
    border-radius: 6px;
    cursor: pointer;
  }
`;
