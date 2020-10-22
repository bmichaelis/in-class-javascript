function findNumbers(...strings) {
  const resultArray = [];
  strings.forEach((string) => {
    if (!isNaN(Number(string)) && string != '') {
      resultArray.push(Number(string));
    }
  });
  return resultArray;
}
