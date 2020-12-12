import Mock from "mockjs";

import address from "@/mock/datas/address";
import allGood from "@/mock/datas/allGood";
import carousel from "@/mock/datas/carousel";
import city from "@/mock/datas/city";
import freight from "@/mock/datas/freight";
import goodsCategory from "@/mock/datas/goodsCategory";
import hotSearch from "@/mock/datas/hotSearch";
import notice from "@/mock/datas/notice";
import order from "@/mock/datas/order";
import spuInfo from "@/mock/datas/spuInfo";
import trademark from "@/mock/datas/trademark";
import userInfo from "@/mock/datas/userInfo";

Mock.mock("/mock/address", { code: 200, data: address });
Mock.mock("/mock/allgoods", { code: 200, data: allGood });
Mock.mock("/mock/carousel", { code: 200, data: carousel });
Mock.mock("/mock/city", { code: 200, data: city });
Mock.mock("/mock/reight", { code: 200, data: freight });
Mock.mock("/mock/goodscategory", { code: 200, data: goodsCategory });
Mock.mock("/mock/hotsearch", { code: 200, data: hotSearch });
Mock.mock("/mock/notice", { code: 200, data: notice });
Mock.mock("/mock/order", { code: 200, data: order });
Mock.mock("/mock/spu", { code: 200, data: spuInfo });
Mock.mock("/mock/trademark", { code: 200, data: trademark });
Mock.mock("/mock/userinfo", { code: 200, data: userInfo });
