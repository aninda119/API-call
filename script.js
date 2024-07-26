$(document).ready(function () {
  $("#getData").click(function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      type: "GET",
      datatype: "json",
      success: function (data) {
        console.log("Success:", data);
        renderTable(data);
      },
      error: function (xhr, status, error) {
        console.error("Error:", status, error);
        $("#result").html("An error occured:" + error);
      },
    });
  });
});
function renderTable(data) {
  $("#result").empty();
  let table = $("<table></table>");
  let header = $("<tr></tr>");
  header.append("<th>USER-ID</th>");
  header.append("<th>ID</th>");
  header.append("<th>TITLE</th>");
  header.append("<th>BODY</th>");
  table.append(header);
  data.forEach((item) => {
    let row = $("<tr></tr>");
    row.append(`<td>${item.userId}</td>`);
    row.append(`<td>${item.id}</td>`);
    row.append(`<td>${item.title}</td>`);
    row.append(`<td>${item.body}</td>`);
    table.append(row);
  });
  $("#result").append(table);
}
