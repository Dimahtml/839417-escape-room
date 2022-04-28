import { QuestsGenres, NameSpace } from '../const';

export const getQuests = ((state) => state[NameSpace.Data].quests);

export const getDetailedQuest = ((state) => state[NameSpace.Data].detailedQuest);

export const getActiveGenre = ((state) => state[NameSpace.Data].genre);

export const getErrorMessage = ((state) => state[NameSpace.Error].error);

export const getQuestsByActiveGenre = (state) => {
  const genre = getActiveGenre(state);
  const quests = getQuests(state);

  if (genre === QuestsGenres.AllQuests) {
    return quests;
  }

  return quests.filter((quest) => quest.type === state[NameSpace.Data].genre);
};
