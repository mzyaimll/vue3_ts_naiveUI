/*
 * @Autor: GeekMzy
 * @Date: 2022-04-18 09:42:04
 * @LastEditors: GeekMzy
 * @LastEditTime: 2022-04-18 09:50:30
 * @FilePath: \vite_vue3_ts\src\service\api\login.ts
 * @Author: desktop-1llkr2o
 */
import http from '@/service/http'
import * as T from './type'

const loginApi: T.ILoginApi = {
  login(params) {
    return http.post('/login', params)
  },
}
export default loginApi
