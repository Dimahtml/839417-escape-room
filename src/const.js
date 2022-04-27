export const TIMEOUT_SHOW_ERROR = 3000;

export const AppRoute = {
  Contacts: '/contacts',
  DetailedQuest: '/detailed-quest/:id',
  Main: '/',
  NotFound: '/404',
}

export const APIRoute = {
  Quests: '/quests',
  DetailedQuest: 'http://localhost:3001/quests/:id',
  Order: 'http://localhost:3001/orders',
}

export const QuestsGenres = {
  AllQuests: 'all quests',
  Adventures: 'adventures',
  Horror: 'horror',
  Mystic: 'mystic',
  Detective: 'detective',
  Scifi: 'sci-fi',
}

export const HttpCode = {
  BadRequest: 400,
  Unauthorized: 401,
  NotFound: 404,
  ServerError: 500,
}
