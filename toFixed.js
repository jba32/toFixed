function toFixed(num, precision) {
  num = num.toString();
  if (precision !== 0) {
    precision = precision ? precision : 2;
  }
  var decimalIndex = num.indexOf('.') > -1 ? num.indexOf('.') : undefined,
      decimal = decimalIndex ? num[decimalIndex] : '.',
      rightOfDecimalPlusRoundingIndex = decimalIndex ? num.substr(decimalIndex + 1, precision + 1) : '',
      // The number to determine if `num` is rounded up or down
      roundingValue = rightOfDecimalPlusRoundingIndex[precision] || undefined,
      leftOfDecimal = decimalIndex ? num.substr(0, decimalIndex) : num,
      rightOfDecimal = decimalIndex ? num.substr(decimalIndex + 1, precision) : '';
  if (roundingValue && roundingValue > 4) {
    // Add 1 to the truncated value to round.
    // Also, add a temporary '1' to the beginning of the substring to prevent e.g. '00' from being converted to 0 by parseInt.
    rightOfDecimal = (parseInt('1' + rightOfDecimal, 10) + 1).toString().replace(/^1/g, '');
  }
  // Add '0's to the end while precision is longer than the length of the right of the decimal point
  while (rightOfDecimal.length < precision) {
    rightOfDecimal = rightOfDecimal.concat('0');
  }
  if (precision !== 0) {
    num = leftOfDecimal + decimal + rightOfDecimal;
  } else {
    // If precision is 0, no string manipulation needed, just round.
    num = Math.round(num);
  }
  return num || 'Number invalid';
}
