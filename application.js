$(document).ready(function() {
  $(document).on("keyup", function(event) {
    var userMarkdown = $("textarea").val();

    userMarkdown = userMarkdown.replace(/\*\*\b/gi, "<strong>");
    userMarkdown = userMarkdown.replace(/\b\*\*/gi, "</strong>");

    userMarkdown = userMarkdown.replace(/\*{1}\b/gi, "<em>");
    userMarkdown = userMarkdown.replace(/\b\*{1}/gi, "</em>");

    userMarkdown = userMarkdown.replace("_", "<em>");
    userMarkdown = userMarkdown.replace("_", "</em>");

    $(".generated-text").html(userMarkdown);
  });
});
