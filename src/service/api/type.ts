/*
 * @Autor: GeekMzy
 * @Date: 2022-04-18 09:42:13
 * @LastEditors: GeekMzy
 * @LastEditTime: 2022-04-18 09:42:14
 * @FilePath: \vite_vue3_ts\src\service\api\type.ts
 * @Author: desktop-1llkr2o
 */
export interface ILoginParams {
  userName: string
  passWord: string | number
}
export interface ILoginApi {
  login: (params: ILoginParams) => Promise<any>
}
