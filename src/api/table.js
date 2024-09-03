import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/saylo',
    method: 'get',
    params
  })
}
