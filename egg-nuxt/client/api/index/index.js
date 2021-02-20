'use strict'
import qs from 'qs'

const index = {
  getNavCard({ $axios }, params) {
    return $axios({
      method: 'get',
      url: '/index/navCard',
      params,
    })
  },
}

export default index
