jQuery(document).on( 'wbk_on_form_rendered', function(){
    jQuery('#wbk-booking-form-container').find('.wbk-details-sub-title').siblings().not('#wbk-book_appointment').remove();
});
