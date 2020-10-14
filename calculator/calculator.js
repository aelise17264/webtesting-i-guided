module.exports = {
  add,
  multiply,
};

function add(...args) {
  return args.reduce((sum, num) => {
    return sum + num
  }, 0);
}

function multiply(...args){
 return args.reduce((prod, num) => {
   return prod * num
 }, 1)
}