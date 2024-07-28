import { callApi } from '../apiUtils';

const getHeadlines = async () => {
  const response = await callApi.get('/headlines');
  return response;
};
const getArticles = async ({ start, category }) => {
  let filter = `?`;
  if (start) {
    filter = `&start=${start}`;
  }
  if (category) {
    filter += `&category=${category}`;
  }
  const response = await callApi.get('/post' + filter);
  return response;
};

const getArticleById = async ({ id }) => {
  const response = await callApi.get('/post/' + id);
  return response;
};
function getRelativeTime(date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now - new Date(date)) / 1000);

  const secondsInMinute = 60;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;

  if (diffInSeconds < secondsInMinute) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < secondsInHour) {
    const minutes = Math.floor(diffInSeconds / secondsInMinute);
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else {
    const days = Math.floor(diffInSeconds / secondsInDay);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  }
}

export { getHeadlines, getArticles, getArticleById, getRelativeTime };
