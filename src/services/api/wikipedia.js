/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable no-console */
import ky from 'ky';

const client = ky.create({
  prefixUrl: 'https://en.wikipedia.org/w/',
  headers: {
    'content-type': 'application/json',
  },
});

const getArticles = ({ coords, radius = 10000, limit = 15 }) => {
  const params = {
    action: 'query',
    list: 'geosearch',
    format: 'json',
    origin: '*',
  };
  if (!coords) {
    console.error('Wikipedia API: no coords passed');
  }
  return client
    .get('api.php?', {
      searchParams: {
        ...params,
        gscoord: `${coords.lat}|${coords.lng}`,
        gsradius: radius,
        gslimit: limit,
      },
    })
    .json();
};

const api = {
  getArticles,
};

export default api;
