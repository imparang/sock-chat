// csv 파일을 작업하는 곳
// 이 결과물을 club.js가 받도록 할 것
const fs = require('fs');

module.exports = (filePath) => {
  const dataToRead = fs.readFileSync(
    filePath,
    {encoding: 'utf-8'}
  );

  const rows = dataToRead.split('\n');
  rows.pop();
  const headers = rows[0].split(',');

  const rowsData = [];
  rows.slice(1).forEach(row => {
    let rowData = {};

    for (let headerIndex=0; headerIndex < headers.length; headerIndex++){
      const header = headers[headerIndex];
      rowData[header] = row.split(',')[headerIndex];
    };

    rowsData.push(rowData);
  });
  return rowsData;
};
