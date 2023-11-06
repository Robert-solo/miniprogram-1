import { config, cdnBase } from '../../config/index';

/** 获取首页数据 */
function mockFetchHome() {
  const { delay } = require('../_utils/delay');
  const { genSwiperImageList } = require('../../model/swiper');
  return delay().then(() => {
    return {
      swiper: genSwiperImageList(),
      tabList: [
        {
          text: '设备概况',
          key: 0,
        },
        {
          text: '组态应用',
          key: 1,
        },
        {
          text: '定位轨迹',
          key: 2,
        },
        {
          text: '设备地图',
          key: 3,
        },
        {
          text: '设备信息',
          key: 4,
        },
        {
          text: '变量概况',
          key: 5,
        },
        {
          text: '设备管理',
          key: 6,
        },
      ],
      activityImg: `${cdnBase}/activity/banner.png`,
    };
  });
}

/** 获取首页数据 */
export function fetchHome() {
  if (config.useMock) {
    return mockFetchHome();
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}
