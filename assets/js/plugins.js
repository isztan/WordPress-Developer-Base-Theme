// Modernizr test for HTML5 Placeholder support and polyfill
(function(){if(!Modernizr.input.placeholder){$(this).find('[placeholder]').each(function(){$(this).val($(this).attr('placeholder'))});$('[placeholder]').focus(function(){if($(this).val()==$(this).attr('placeholder')){$(this).val('');$(this).removeClass('placeholder')}}).blur(function(){if($(this).val()==''||$(this).val()==$(this).attr('placeholder')){$(this).val($(this).attr('placeholder'));$(this).addClass('placeholder')}});$('[placeholder]').closest('form').submit(function(){$(this).find('[placeholder]').each(function(){if($(this).val()==$(this).attr('placeholder')){$(this).val('')}})})}});
  