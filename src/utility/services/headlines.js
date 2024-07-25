import { callApi } from '../apiUtils';

const getHeadlines = async () => {
  const response = await callApi.get('/headlines');
  return response;
};
const getArticles = async ({ start }) => {
  let filter = ``;
  if (start) {
    filter = `?start=${start}`;
  }
  const response = await callApi.get('/post' + filter);
  return response;
};

const getArticleById = async ({ id }) => {
  const response = await callApi.get('/post/' + id);
  return response;
};

export { getHeadlines, getArticles, getArticleById };
