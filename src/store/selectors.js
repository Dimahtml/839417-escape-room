import { QuestsGenres } from '../const';

export const getQuests = ((state) => state.quests);

export const getActiveGenre = ((state) => state.genre);

export const getQuestsByActiveGenre = (state) => {
  const genre = getActiveGenre(state);
  const quests = getQuests(state);

  if (genre === QuestsGenres.AllQuests) {
    return quests;
  }

  return quests.filter((quest) => quest.type === state.genre);
};
