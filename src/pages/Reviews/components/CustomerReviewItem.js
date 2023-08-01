import { Rate } from "antd";
import { StyledCustomerReviewItem } from "../styled";

const CustomerReviewItem = ({ isRight }) => {
  return (
    <StyledCustomerReviewItem>
      {!isRight && (
        <div className="mr-16">
          <div>
            "Very satisfied working with proactive team at Heart and Virtue Pty Ltd,
            they are very detailed with their service delivery and provided
            exceptional services to its participants." <b>Ms. Wanda</b> said
          </div>
          <div>
            <Rate value={5} allowHalf disabled />
            <span style={{ fontSize: "12px" }}> (5.0)</span>
          </div>
        </div>
      )}
      <div>
        <img
          src="https://d.newsweek.com/en/full/2150657/grandmother-smells-sharing-room-visit-reddit-aita.jpg?w=1600&h=1200&q=88&f=e8f7b0e476befadcdf7b9155e4670e7a"
          alt=""
        />
        <div></div>
      </div>
      {!!isRight && (
        <div className="ml-16">
          <div>
            "Very satisfied working with proactive team at Heart and Virtue Pty Ltd,
            they are very detailed with their service delivery and provided
            exceptional services to its participants." <b>Ms. Wanda</b> said
          </div>
          <div>
            <Rate value={5} allowHalf disabled />
            <span style={{ fontSize: "12px" }}> (5.0)</span>
          </div>
        </div>
      )}
    </StyledCustomerReviewItem>
  );
};
export default CustomerReviewItem;
