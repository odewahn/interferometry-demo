var thebe;
$(function(){
    thebe = new Thebe({
      url:"https://tmp34.tmpnb.org/",
      tmpnb_mode: true,
      append_kernel_controls_to: 'body'
    });
    $('section[data-type=chapter]').addClass('page');
});
