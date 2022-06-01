// ------ Function ------
const findPair = (values = [], desired_sum) => {
  const parsedDesiredNum = Number(desired_sum);
  if(
    !desired_sum ||
    isNaN(desired_sum) ||
    parsedDesiredNum < 1 ||
    values.length < 2
  ) {
    return null
  };

  let validValues = true;
  const foundPairs = [];

  const noValidValue = (valueToValidate) => {
    if(
      isNaN(valueToValidate) ||
      Number(valueToValidate) < 1
    ) {
      return true;
    };
    return false;
  }

  for(let indx1 = 0; indx1 < values.length; indx1 ++) {
    const value1 = Number(values[indx1]);
    if(
      noValidValue(values[indx1]) ||
      !validValues
    ) {
      validValues = false;
      break;
    };
    if(value1 < parsedDesiredNum) {
      for(let indx2 = indx1 + 1; indx2 < values.length; indx2 ++) {
        const value2 = Number(values[indx2]);
        if(
          noValidValue(values[indx2]) ||
          value1 === value2
        ) {
          validValues = false;
          break;
        };
        if(
          (value1 + value2) === parsedDesiredNum
        ) {
          if(value1 < value2) {
            foundPairs.push([value1, value2])
          } else {
            foundPairs.push([value2, value1])
          }
        }
      }
    }
  }

  if(
    !validValues ||
    foundPairs.length === 0
  ) {
    return null;
  };
  let smallerValue;
  let finalPair;

  foundPairs.forEach(val => {
    if(val[0] < smallerValue || !smallerValue) {
      smallerValue = val[0];
      finalPair = val;
    }
  });

  return finalPair;
};

// ------ Test ------
const testValues = [];
for(var i = 1; i <= 100000; i++) {
  testValues.push(i);
}
const testDesiredSum = 20001;

console.log('---Function is called---');
const result = findPair(testValues, testDesiredSum);
console.log('RESULT::: ', result);
