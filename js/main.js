$(document).ready(function(){

  $(".js-trackemail").click(function() {
    var email = $("#mce-EMAIL").val();
    var team = $("#mce-TEAM").val();
    mixpanel.track("Create Team", {"email": email,"team": team});
    console.log(email,team);
  });

});
