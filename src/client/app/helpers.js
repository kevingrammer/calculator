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
};

