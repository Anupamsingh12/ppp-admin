import { callApi } from '../apiUtils';

const addCms = async ({ body }) => {
  const response = await callApi.post(`/post`, body);
  return response;
};

const getAllCms = async ({ start, limit }) => {
  const response = await callApi.get(`/post?start=${start || 0}&limit=${limit || 10}`);
  return response;
};

const getSingleCms = async ({ id }) => {
  const response = await callApi.get(`/post/${id}`);
  return response;
};

const updateCms = async ({ id, body }) => {
  const response = await callApi.put(`/post/${id}`, body);
  return response;
};

const deleteCms = async ({ id }) => {
  const response = await callApi.delete(`/post/${id}`);
  return response;
};

export { addCms, getAllCms, getSingleCms, updateCms, deleteCms };
