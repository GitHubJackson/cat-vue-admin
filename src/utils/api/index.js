import request from '../request'

/* 登录模块 */
/**
 * @desc   登录
 * @param  {object} data
 * @param  {string} account 账号
 * @param  {string} password 密码
 */
export function login (data) {
  return request({
    url: `/login`,
    method: 'post',
    data
  })
}

/* 用户模块 */
/**
 * @desc   获取用户信息
 * @param  {object} params
 * @param  {string} params.account 账号
 */
export function getUser (params) {
  return request({
    url: `/user`,
    method: 'get',
    params
  })
}

/**
 * @desc   更新用户信息
 * @param  {object} data
 * @param  {string} account 账号
 * @param  {string} password 密码
 */
export function updateUser (data) {
  return request({
    url: `/user`,
    method: 'post',
    data
  })
}

/**
 * @desc   删除用户
 * @param  {object} params
 * @param  {string} params._id
 */
export function delUser (params) {
  return request({
    url: `/user`,
    method: 'delete',
    params
  })
}
