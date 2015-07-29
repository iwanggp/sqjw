/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
    var $dialog = $.pdialog.getCurrent();
    $("#csList li a",$dialog).click(function(){
        hy=$(this).attr('name');
    });
}).call();

