$(window).load(function() {
var linkl_list = [
    'http://ytbapi.com/dl.php?link=[drive-id]' + '&amp;format=mp4&amp;text=fff&amp;color=ff5722'
  ];
  var update = function() {
    if (update_html) {
      var html = '';
      var drive_id = $('#driveID').val();

      $.each(linkl_list, function() {
        var drive_url = this.replace('[drive-id]', drive_id);
        html = html + '<div class="btn-group"><button type="button" class="btn btn-primary"><strong>Ready:</strong></button><a target="_blank" href="http://oke.io/st/?api=1b777cff0d565586e5ca50eb50e9a461073feeac&url=' + drive_url + '"><button type="button" class="btn btn-default"  contenteditable="false">Download MP4</button></a></div>';
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

function getLink() {
  var e = document.getElementById("container");
  e.style.display = "block";
  var e = document.getElementById("get-button");
  e.style.display = "none";
};
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})
