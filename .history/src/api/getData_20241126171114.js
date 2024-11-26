import base from './index'
let axios = base.axios
let baseUrl = base.baseUrl

// 获取好友
export const getFriend = params => {
    return axios({
      method: 'post',
      baseURL: `${baseUrl}/friend/friendList`,
      data: params
    }).then(res => res.data)
  }

  // 获取聊天信息
export const getChatMsg = params => {
  return axios({
    method: 'post',
    baseURL: `${baseUrl}/friend/chatMsg`,
    data: params
  }).then(res => res.data)
}

  // 获取聊天信息
  export const chatgpt = params => {
    return axios({
      method: 'post',
      url: `https://api.openai.com/v1/completions`,
      data: params,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${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}`,
      }
    }).then(res => res.data)
  }
