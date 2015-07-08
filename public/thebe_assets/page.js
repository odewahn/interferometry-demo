var thebe;
$(function(){
    thebe = new Thebe({
      url:"http://192.168.59.103:8888/",
      tmpnb_mode: false,
      append_kernel_controls_to: 'body'
    });
    $('section[data-type=chapter]').addClass('page');
});
