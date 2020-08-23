const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  const record = records.find(({result}) => result === 'W');

  return !!record ? record.year:undefined;
}