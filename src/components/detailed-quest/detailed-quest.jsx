import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { store } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getDetailedQuest } from '../../store/selectors';
import { getQuestLevel, getQuestType } from '../../utils';

import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { removeDetailedQuest } from '../../store/data-process/data-process';
import { fetchDetailedQuestAction } from '../../store/api-actions';

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const handleOpenBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const handleCloseBtnClick = () => {
    setIsBookingModalOpened(false);
  };

  useEffect(() => {
    dispatch(fetchDetailedQuestAction(id));
    return () => {
      store.dispatch(removeDetailedQuest());
    };
  }, [id, dispatch]);

  const detailedQuest = useAppSelector(getDetailedQuest);

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${detailedQuest?.coverImg}`}
          alt={`Квест ${detailedQuest?.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{detailedQuest?.title}</S.PageTitle>
            <S.PageSubtitle>{getQuestType(detailedQuest?.type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{detailedQuest?.duration}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{detailedQuest?.peopleCount[0]}–{detailedQuest?.peopleCount[1]} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{getQuestLevel(detailedQuest?.level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {detailedQuest?.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={handleOpenBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {
          isBookingModalOpened &&
          <BookingModal onCloseBtnClick={handleCloseBtnClick} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
