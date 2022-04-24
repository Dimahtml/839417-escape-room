import * as S from '../quests-catalog/quests-catalog.styled';

import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getActiveGenre } from '../../../../store/selectors';
import { changeGenre } from '../../../../store/action';
import { getQuestIcon, getQuestType } from '../../../../utils';

const TabItem = ({type}) => {
  const genre = useAppSelector(getActiveGenre);
  const dispatch = useAppDispatch();

  return (
    <S.TabItem>
      <S.TabBtn
        isActive={genre === type}
        onClick={() => {
          dispatch(changeGenre(type));
        }}
      >
        {getQuestIcon(type)}
        <S.TabTitle>{getQuestType(type)}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  );
};

export default TabItem;
