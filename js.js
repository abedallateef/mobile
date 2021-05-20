$(document).ready(function() {

    var wow = new WOW({
        mobile: false
    });
    wow.init();
    

     // التحقق من إدخال البيانات الصحيحة في نموذج الإرسال
    $(function () {
        $("#emailForm").validate();
    });
});    