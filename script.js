var config = {
  download: true,
  header: true,
  dynamicTyping: true,
  complete: function(results) {
    var rows = results.data;
    console.log(rows);
    drawTable(rows);
  }
};

Papa.parse('data.csv', config);

var drawTable = function(data) {
  var dtable = $('<table>');
  var hrow = $('<tr>');
  hrow.append('<th>Company</th><th>Company Response</th>');
  dtable.append(hrow);
  $('body').append(dtable);
  var i=0,
      len = data.length;
      console.log(len);
  for ( i; i < len; i++ ) {
    var row = $('<tr>');
    row.append('<td>' + data[i].Company + '</td><td>' + data[i]['Company response'] + '</td>');
    dtable.append(row);
  }
}
