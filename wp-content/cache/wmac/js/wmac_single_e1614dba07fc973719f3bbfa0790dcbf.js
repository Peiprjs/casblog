(function($){'use strict';var
$breakpoints=('undefined'!==typeof $nanospaceBreakpoints)?($nanospaceBreakpoints):({'xl':1280}),$introMedia=$(document.getElementById('intro-media')),$compactLayoutProjects=$('.portfolio-style-compact .posts .type-wm_projects');$('.no-js').removeClass('no-js');$('.widget_recent_comments ul').attr('id','');if($().fitVids){$(document.getElementById('page')).fitVids();}
$compactLayoutProjects.on('focus.aria mouseenter.aria','a',function(e){$(this).closest('.type-wm_projects').addClass('focus');}).on('blur.aria mouseleave.aria','a',function(e){$(this).closest('.type-wm_projects').removeClass('focus');});if($introMedia.length){$introMedia.parent('.intro-special').addClass('intro-special-has-media');}
$(document).on('wp-custom-header-video-loaded',function(){$introMedia.addClass('has-header-video');});if($().scrollWatch&&$('body').hasClass('has-sticky-header')){$(document.getElementById('masthead')).scrollWatch({offset:50,});}
var $window=$(window);var $to_top=jQuery('.back-to-top');$window.on('scroll',function(){if($to_top.length>0){if(jQuery(window).scrollTop()>80)$to_top.stop().animate({bottom:17,opacity:1},700);else $to_top.stop().animate({bottom:-17,opacity:0},700);}
if(jQuery(window).scrollTop()>(jQuery(window).height()/8)){jQuery('body').addClass('site-scrolled');}else{jQuery('body').removeClass('site-scrolled');}});$to_top.click(function(e){e.preventDefault();jQuery('html, body').animate({scrollTop:0},800);return false;});})(jQuery);