import QueryString from "qs";
import {
  apiGetCategoryPost,
  apiGetDetailByG,
  apiGetListPostByCategoryPostID,
  apiGetListPostRelate,
  apiGetListStaticNavbar,
} from "./apiRouter";
import http from "./index";

const getStaticNav = (params) =>
  http.get(`${apiGetListStaticNavbar}?${QueryString.stringify(params)}`);

const getDetail = (body) => {
  const params = QueryString.stringify(body);
  return http.get(`${apiGetDetailByG}?${params}`);
};
const getListPost = (body) => http.post(apiGetListPostByCategoryPostID, body);

const getListPostRelate = (params) =>
  http.get(apiGetListPostRelate, { params });

const getCategoryPost = () => http.get(apiGetCategoryPost);
const GuestServices = {
  getStaticNav,
  getListPost,
  getDetail,
  getListPostRelate,
  getCategoryPost,
};
export default GuestServices;
