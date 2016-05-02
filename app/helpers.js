export function getButtonType(buttonId) {

  switch(buttonId) {
    case '/':
    case '*':
    case '-':
    case '+':
      return 'operator';
    case '=':
      return 'evaluate';
    default:
      return 'digit';
  }
};