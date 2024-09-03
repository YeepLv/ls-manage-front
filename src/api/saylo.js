import request from '@/utils/request'

export function getLabelAmount(params) {
  return request({
    url: '/saylo/getLabelAmount',
    method: 'get',
    params
  })
}

export function getLabelDetails(params) {
  return request({
    url: '/saylo/getLabelDetails',
    method: 'get',
    params
  })
}

export function getProjectQI(params) {
  return request({
    url: '/saylo/getProjectQI',
    method: 'get',
    params
  })
}