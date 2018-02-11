$(window).load(function() {
var linkl_list2 = [
    'http://ytbapi.com/dl.php?link=[drive-id2]' + '&amp;format=mp4&amp;text=fff&amp;color=ff5722'
  ];
  var update = function() {
    if (update_html) {
      var html = '';
      var drive_id2 = $('#driveID2').val();

      $.each(linkl_list2, function() {
        var drive_url2 = this.replace('[drive-id2]', drive_id2);
        html = html + '<div class="btn-group"><button type="button" class="btn btn-primary"><strong>Ready:</strong></button><a target="_blank" href="' + drive_url2 + '"><button type="button" class="btn btn-default"  contenteditable="false">Download MP4</button></a></div>';
      });
      $('#link_container').html(html);
    }
    update_html = false;
  }
  var update_html = true;

  $('#driveID').on('change', function() {
    update_html = true;
  });
  setInterval(update, 1000);
  update();
});

function getmp4() {
  var e = document.getElementById("container");
  e.style.display = "block";
  var e = document.getElementById("get-button");
  e.style.display = "none";
};
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})
