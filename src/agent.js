import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://conduit.productionready.io/api';
const API_ROOT_PULLFLOW = 'http://localhost:9000/api';
const dataContent = res=>res.body.content;

const responseBody = res => res.body;

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody)
};
const pullflowRequests = {
  get: url =>
    superagent.get(`${API_ROOT_PULLFLOW}${url}`).then(dataContent)
};

const Products = {
  all: page =>
  pullflowRequests.get(`/products`)
};
const Articles = {
  all: page =>
    requests.get(`/articles?limit=10`)
};

export default {
  Articles,
  Products
};