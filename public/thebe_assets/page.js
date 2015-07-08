var thebe;
$(function(){
    thebe = new Thebe({
	  url:"https://tmp33.tmpnb.org",
      tmpnb_mode: false,
      append_kernel_controls_to: 'body'
    });
    $('section[data-type=chapter]').addClass('page');
});
