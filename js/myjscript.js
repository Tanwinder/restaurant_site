var tsidhu = new function(){
    $(window).scroll(function () {
        var scrollTop, headerTopHeight, diff;

        scrollTop = $('window').scrollTop();
        headerTopHeight = $('#header-nav').offset().top();
        diff = headerTopHeight - scrollTop;

        if(diff <= 0){
            $('#header-nav').css({"position" : "fixed","top" : "0"});
        } else {
            $('#header-nav').css('position' , 'relative');
        }
    });
}
