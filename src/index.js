const descendingOrder = (input) => {
  return Number(input.toString().split("").sort((a, b) => b - a).join(''));
};
  
module.exports = {
  descendingOrder,
};