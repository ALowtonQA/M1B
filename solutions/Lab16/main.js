$(document).ready(function () {

    //$('input').change(function (e) {
    //    if ($.isNumeric($(e.target).val())) {
    //        $(e.target).removeClass('invalid');
    //    } else {
    //        $(e.target).addClass('invalid');
    //    }
    //}); // end of change

    $('input').keypress(function (e) {
        if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 45) {
            $('#message').html('Only number 0 to 9 and a - are allowed');
            return false;
        }
        $('#message').html('');

    }); // end of keypress

    // validation
    $('[numeric]').change(function (e) {
        console.log("hello");
        if ($.isNumeric($(e.target).val()) && ($.isNumeric($('#age').val()))) {
            var age = parseInt($('#age').val());
            var quant = parseInt($(e.target).val());

            if (age < 18 && quant > 5) {
                $(e.target).addClass('invalid');
            } else {
                $(e.target).removeClass('invalid');
            }
        }
    }); // end of change

}); // end of ready