$(document).ready(function() {
  $(document).on("keyup", function(event) {
    var userMarkdown = $("textarea").val();
    
    userMarkdown = userMarkdown.replace(/\*\*\b/gi, " <strong>");
    userMarkdown = userMarkdown.replace(/\b\*\*/gi, "</strong>");

    $(".generated-text").html(userMarkdown);
  });
});
