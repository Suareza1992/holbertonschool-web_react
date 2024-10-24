var student1 = {
    firstName: "Luffy",
    lastName: 'Monkey D',
    age: 19,
    location: "Elbaf"
};
var student2 = {
    firstName: 'Roronoa',
    lastName: 'Zoro',
    age: 19,
    location: 'Elbaf'
};
var studentList = [student1, student2];
var table = document.createElement('table');
var headerRow = document.createElement('tr');
var headers = ['First Name', 'Location'];
headers.forEach(function (headerText) {
    var header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
});
table.appendChild(headerRow);
studentList.forEach(function (student) {
    var row = document.createElement('tr');
    var fisrtNameCell = document.createElement('td');
    fisrtNameCell.textContent = student.firstName;
    row.appendChild(fisrtNameCell);
    var locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.getElementById('table-container').appendChild(table);
