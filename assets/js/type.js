$(document).ready(function () {
  "use strict";

  var typed = $(".typed");

  $(function () {
    typed.typed({
      strings: [
        "Dico Aji Prasetyo.,",
        "Web Developer.",
        "Freelancer.",
        "Web Designer.",
      ],
      typeSpeed: 100,
      loop: true,
    });
  });
});
