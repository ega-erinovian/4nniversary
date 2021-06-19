$(document).ready(function () {
  $("#button-love").click(function () {
    let love = confirm("Do you love me?");
    if (love) {
      alert("LOVE U TOO <3 !");
    } else {
      var no = confirm("Are you sure?");
      if (no) {
        while (no) {
          no = confirm("Are you sure?");
        }
        alert("LOVE U TOO <3 !");
      } else {
        alert("LOVE U TOO <3 !");
      }
    }
  });
});
