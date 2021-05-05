$(function(){

    var input = $('.input');
    var button = $('.btn');
    var result = $('.seikei');

    button.on('click', function(){

        var inputVal = input.val();

        // 改行を「\n」に置換する
        var str = inputVal.replace(/\r?\n/g, '\\n')
        result.val(str);

        // 範囲選択する
        result.select();
    })

});
