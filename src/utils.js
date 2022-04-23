import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { QuestsGenres } from './const';

export const getQuestLevel = (inputLevel) => {
  let result = '';

  switch (inputLevel) {
    case 'easy':
      result = 'простой';
      break;
    case 'medium':
      result = 'средний';
      break;
    case 'hard':
      result = 'сложный';
      break;
    default:
      result = 'секретная сложность';
      break;
  }

  return result;
};

export const getQuestTitle = (type) => {
  let result = '';

  switch (type) {
    case QuestsGenres.Adventures:
      result = 'Приключения';
      break;
    case QuestsGenres.Detective:
      result = 'Детектив';
      break;
    case QuestsGenres.Horror:
      result = 'Ужасы';
      break;
    case QuestsGenres.Mystic:
      result = 'Мистика';
      break;
    case QuestsGenres.Scifi:
      result = 'Sci-fi';
      break;
    case QuestsGenres.AllQuests:
    default:
      result = 'Все квесты';
      break;
  }

  return result;
}

export const getQuestIcon = (type) => {
  let result = '';

  switch (type) {
    case QuestsGenres.Adventures:
      result = <IconAdventures />;
      break;
    case QuestsGenres.Detective:
      result = <IconDetective />;
      break;
    case QuestsGenres.Horror:
      result = <IconHorrors />;
      break;
    case QuestsGenres.Mystic:
      result = <IconMystic />;
      break;
    case QuestsGenres.Scifi:
      result = <IconScifi />;
      break;
    case QuestsGenres.AllQuests:
    default:
      result = <IconAllQuests />;
      break;
  }

  return result;
}
