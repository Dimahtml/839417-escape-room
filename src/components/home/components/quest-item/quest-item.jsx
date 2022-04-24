import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from '../quests-catalog/quests-catalog.styled';

import { getQuestLevel } from 'utils';

const QuestItem = ({quest}) => (
  <S.QuestItem>
    <S.QuestItemLink to={`/detailed-quest/${quest.id}`}>
      <S.Quest>
        <S.QuestImage
          src={quest.coverImg}
          width="344"
          height="232"
          alt={`квест ${quest.title}`}
        />

        <S.QuestContent>
          <S.QuestTitle>{quest.title}</S.QuestTitle>

          <S.QuestFeatures>
            <S.QuestFeatureItem>
              <IconPerson />
              {`${quest.peopleCount[0]} - ${quest.peopleCount[1]} чел`}
            </S.QuestFeatureItem>
            <S.QuestFeatureItem>
              <IconPuzzle />
              {getQuestLevel(quest.level)}
            </S.QuestFeatureItem>
          </S.QuestFeatures>
        </S.QuestContent>
      </S.Quest>
    </S.QuestItemLink>
  </S.QuestItem>
);

export default QuestItem;
