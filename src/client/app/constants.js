export const BUTTON_MAP = [
  [ '1', '2', '3', '/' ],
  [ '4', '5', '6', '*' ],
  [ '7', '8', '9', '-' ],
  [ '0', '.', '=', '+' ]];

export function getButtonDetails(buttonId) {
  switch(buttonId) {
    case '/':
    case '*':
    case '-':
    case '+':
      return {
        id: buttonId,
        type: 'operator'
      };
    case '=':
      return {
        id: buttonId,
        type: 'evaluate'
      };
    default:
      return {
        id: buttonId,
        type: 'digit'
      };
  }
}