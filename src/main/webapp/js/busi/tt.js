/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function () {
    $("#nav li").hover(
            function () {
                $(this).children('ul').hide();
                $(this).children('ul').slideDown('fast');
            },
            function () {
                $('ul', this).slideUp('fast');
            });
});


