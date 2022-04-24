import { createAction } from '@reduxjs/toolkit';

export const loadQuests = createAction('data/loadQuests');

export const loadDetailedQuest = createAction('data/loadDetailedQuest');

export const removeDetailedQuest = createAction('quests/removeDetailedQuest');

export const changeGenre = createAction('quests/changeGenre');
