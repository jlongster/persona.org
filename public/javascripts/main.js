$(function() {
  // Browser ID login
  $('#login').click(function() {
    navigator.id.getVerifiedEmail(function(assertion) {
      if(assertion) {
        $('form input[name="bid_assertion"]').val(assertion);
        $('form').submit();
      }
    });
  });
});