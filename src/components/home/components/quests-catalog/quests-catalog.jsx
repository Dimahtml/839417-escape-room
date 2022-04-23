import * as S from './quests-catalog.styled';

import QuestItem from '../quest-item/quest-item';
import TabItem from '../tab-item/tab-item';
import { getQuests } from '../../../../store/selectors';
import { useAppSelector } from '../../../../hooks';
import { QuestsTabs } from 'const';

const QuestsCatalog = () => {
  const quests = useAppSelector(getQuests);

  return (
    <>
      <S.Tabs>
        {Object.keys(QuestsTabs).map((type) => <TabItem type={QuestsTabs[type]} key={type} />)}
      </S.Tabs>

      <S.QuestsList>
        {quests.map((quest) => <QuestItem quest={quest} key={quest.id} />)}
      </S.QuestsList>
    </>
  )
};

export default QuestsCatalog;
