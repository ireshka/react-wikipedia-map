/* eslint-disable unicorn/prevent-abbreviations */
import createDebug from 'debug';
import ky from 'ky';

const debug = createDebug('wikipedia-map:services:wikipedia');

const client = ky.create({
  prefixUrl: 'https://en.wikipedia.org/w/',
  headers: {
    'content-type': 'application/json',
  },
});

const getArticles = async ({ coords, radius = 10000, limit = 15 }) => {
  const params = {
    action: 'query',
    list: 'geosearch',
    format: 'json',
    origin: '*',
  };
  if (!coords) {
    debug('Wikipedia API: no coords passed');
  }

  const response = await client
    .get('api.php?', {
      searchParams: {
        ...params,
        gscoord: `${coords.lat}|${coords.lng}`,
        gsradius: radius,
        gslimit: limit,
      },
    })
    .json();
  const {
    query: { geosearch: articles },
  } = response;
  return articles;
};

const api = {
  getArticles,
};

export default api;
