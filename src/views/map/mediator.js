import createDebug from 'debug';
import WikipediaApi from '../../services/api/wikipedia';

const debug = createDebug('wikipedia-map:view-map:mediator');

const mapEvents = {
  mapDragged: 'mapDragged',
  mapFirstLoaded: 'mapFirstLoaded',
};

const listeners = {};

const emit = (event, ...arguments_) => {
  listeners[event](...arguments_);
};

const attachListener = (eventName, listener) => {
  listeners[eventName] = listener;
};

const mapDragged = async (center) => {
  debug('drag end');
  const articles = await WikipediaApi.getArticles({ coords: center });
  debug(articles);
};

const mapFirstLoaded = async (center) => {
  debug('first load');
  const articles = await WikipediaApi.getArticles({ coords: center });
  debug(articles);
};

const useMapMediator = () => {
  attachListener(mapEvents.mapFirstLoaded, mapFirstLoaded);
  attachListener(mapEvents.mapDragged, mapDragged);
};

const MapMediator = () => {
  useMapMediator();

  return null;
};

export { emit, MapMediator, mapEvents };
