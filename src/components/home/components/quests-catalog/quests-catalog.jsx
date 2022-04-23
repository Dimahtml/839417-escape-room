import * as S from './quests-catalog.styled';

import QuestItem from '../quest-item/quest-item';
import TabItem from '../tab-item/tab-item';
import { getQuestsByActiveGenre, } from '../../../../store/selectors';
import { useAppSelector } from '../../../../hooks';
import { QuestsGenres } from 'const';

const QuestsCatalog = () => {
  const activeQuests = useAppSelector(getQuestsByActiveGenre);

  return (
    <>
      <S.Tabs>
        {Object.keys(QuestsGenres).map((type) => <TabItem type={QuestsGenres[type]} key={type} />)}
      </S.Tabs>

      <S.QuestsList>
        {activeQuests.map((quest) => <QuestItem quest={quest} key={quest.id} />)}
      </S.QuestsList>
    </>
  )
};

export default QuestsCatalog;
