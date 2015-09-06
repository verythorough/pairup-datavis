// Papa Parse may not work below IE 10; Object.keys requires IE 9+
// es5-shim should cover all backwards compatibility if needed

//Customize header field selection (optional)
var headerArr = [
  'Product',
  'Sub-product',
  'Issue',
  'Sub-issue',
  'State',
  'ZIP code',
  'Company',
  'Company response',
  'Timely response?',
  'Consumer disputed?'
];

//Look for custom header array, or use all data object keys as default
function defineHeaders(data) {
  if ( typeof headerArr !== 'undefined' && headerArr.length > 0 ) {
    return headerArr;
  } else {
    return Object.keys(data[0]);
  }
}

//Create the table
function drawTable(data) {
  
  var myTable = document.createElement('table');
  document.getElementById('content').appendChild(myTable);
  
  var headers = defineHeaders(data);
  
  //Create the table header and insert header row
  var head = myTable.createTHead(),
      headRow = head.insertRow(0);
  //Insert and fill the header cells
  for ( var i = 0, len = headers.length; i < len; i++ ) {
    var hcell = headRow.appendChild(document.createElement('th'));
    //Add scope for accessibility
    hcell.setAttribute('scope', 'col');
    hcell.innerHTML = headers[i];
  }

  //Create and append the table body
  var body = myTable.appendChild(document.createElement('tbody'));
  //Create rows for each data object
  for ( var i=0, len = data.length; i < len; i++ ) {
    var row = body.insertRow(i),
        rowData = data[i];
    //Insert and fill cells for each row
    for ( var j=0, rlen = headers.length; j < rlen; j++ ) {
      row.insertCell(j).innerHTML = rowData[headers[j]];
    }
  }

};

var config = {
  download: true,
  header: true,
  dynamicTyping: true,
  complete: function(results) {
    drawTable(results.data);
  }
};

Papa.parse('data.csv', config);
