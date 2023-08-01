import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"
import appGlobalReducer from "./appGlobal"
import roleReducer from "./role"
import activeKeyReducer from "./activeKey"
import customerDirectoryReducer from "./customerDirectory"
import courseReducer from "./course"
import commonReducer from "./common"
import cartReducer from "./cart"
import topicPostReducer from "./topicPost"
import packageReducer from "./package"
import requestOrderReducer from "./requestOrder"
import menuPostReducer from "./menupost"
import bannerReducer from "./banner"

export default configureStore({
  reducer: {
    counter: counterReducer,
    appGlobal: appGlobalReducer,
    role: roleReducer,
    activeKey: activeKeyReducer,
    customerDirectory: customerDirectoryReducer,
    common: commonReducer,
    course: courseReducer,
    cart: cartReducer,
    topicPost: topicPostReducer,
    requestOrder: requestOrderReducer,
    package: packageReducer,
    menuPost: menuPostReducer,
    banner: bannerReducer,
  },
})
