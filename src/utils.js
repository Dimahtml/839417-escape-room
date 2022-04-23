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
