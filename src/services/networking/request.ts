

import request from 'superagent';

const backendBaseUrl = process.env.REACT_APP_API_BASE_URL || '';

export const makeGetRequest = async (endpoint: string, data: {} | null = null) => {
  if (data === null) {
    return request.get(`${backendBaseUrl}${endpoint}`).set('Accept', 'application/json');
  }

  return request
    .get(`${backendBaseUrl}${endpoint}`)
    .query(data)
    .set('Accept', 'application/json');
};
