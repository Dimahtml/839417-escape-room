import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import * as S from '../quests-catalog/quests-catalog.styled';
import { QuestsTabs } from 'const';

const getIcon = (type) => {
  let result = '';

  switch (type) {
    case QuestsTabs.Adventures:
      result = <IconAdventures />;
      break;
    case QuestsTabs.Detective:
      result = <IconDetective />;
      break;
    case QuestsTabs.Horror:
      result = <IconHorrors />;
      break;
    case QuestsTabs.Mystic:
      result = <IconMystic />;
      break;
    case QuestsTabs.Scifi:
      result = <IconScifi />;
      break;
    case QuestsTabs.AllQuests:
    default:
      result = <IconAllQuests />;
      break;
  }

  return result;
}

const TabItem = ({type}) => (
  <S.TabItem>
    <S.TabBtn isActive>
      {getIcon(type)}
      <S.TabTitle>{type}</S.TabTitle>
    </S.TabBtn>
  </S.TabItem>
);

export default TabItem;
