function produceDrivingRange(blockRange) {
  return function eightBlockRange(initial, final) {
    let dif = Math.abs(parseInt(initial, 10) - parseInt(final, 10))
    if ((dif - blockRange) < 0)
      return `within range by ${Math.abs(dif - blockRange)}`;
    else {
      return `${Math.abs(dif - blockRange)} blocks out of range`;
    }
  }
}

function produceTipCalculator(tip){
  return function(money) {
    return money * tip;
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
