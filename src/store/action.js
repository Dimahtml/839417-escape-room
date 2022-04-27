import { createAction } from '@reduxjs/toolkit';

export const redirectToRoute = createAction('app/redirectToRoute');

export const loadQuests = createAction('data/loadQuests');

export const loadDetailedQuest = createAction('data/loadDetailedQuest');

export const sendOrder = createAction('data/sendOrder');

export const removeDetailedQuest = createAction('quests/removeDetailedQuest');

export const changeGenre = createAction('quests/changeGenre');

export const setError = createAction('app/setError');
