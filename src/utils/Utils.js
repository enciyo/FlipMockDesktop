const prettyJson = (dummyJsonData: string) => {
  var ugly = dummyJsonData;
  var obj = JSON.parse(ugly);
  var pretty = JSON.stringify(obj, undefined, 4);
  return pretty;
};

export {
  prettyJson,
}