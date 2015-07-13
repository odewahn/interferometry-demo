var thebe;
$(function(){
    thebe = new Thebe({
      url:"http://tmp33.tmpnb.org/",
      tmpnb_mode: true,
      append_kernel_controls_to: 'body'
    });
    $('section[data-type=chapter]').addClass('page');
});
