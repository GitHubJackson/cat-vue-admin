import request from './request'

/* 登录模块 */
/**
 * @desc   登录
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

/* 学生作业相关接口 */
/**
 * @desc   学生获取作业详情
 * @param  {String} requestId 题目id
 * @param  {String} studentId 学生id
 */
export function getDetailOfStu (requestId, studentId) {
  return request({
    url: `/homework/${requestId}/${studentId}`,
    method: 'get'
  })
}
