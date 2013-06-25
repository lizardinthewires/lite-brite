//BOARD CODE
var $src = $('#board');
var $wrap = $('<div id="board-overlay"></div>');
var $gsize = 15;

var $cols = 45;
var $rows = 25;

// Table
var $tbl = $('<table></table>');
for (var y = 1; y <= $rows; y++) {
    var $tr = $('<tr></tr>');
    for (var x = 1; x <= $cols; x++) {
        var $td = $('<td></td>');
        $td.css('width', $gsize+'px').css('height', $gsize+'px');
        $tr.append($td);
    }
    $tbl.append($tr);
}

// Overlay
$wrap.append($tbl);
$src.after($wrap);
$('#board-overlay td').addClass('on');


//Clear
$('#clear').on('click', function(){
    $('#board-overlay td').attr('class', 'on');
});

//COLOR SELECTOR

// Show current in current swatch

$('.swatch').on('click', function(){
    var color = $(this).attr('id');
    switch (color) {
        case 'red':
        $('#current').removeClass().addClass('red');
        break;

        case 'yellow':
        $('#current').removeClass().addClass('yellow');
        break;

        case 'blue':
        $('#current').removeClass().addClass('blue');
        break;

        case 'green':
        $('#current').removeClass().addClass('green');
        break;

        case 'purple':
        $('#current').removeClass().addClass('purple');
        break;

        case 'brown':
        $('#current').removeClass().addClass('brown');
        break;

        case 'white':
        $('#current').removeClass().addClass('white');
        break;

        case 'grey':
        $('#current').removeClass().addClass('grey');
        break;

        case 'remove':
        $('#current').removeClass().addClass('remove-sign');
        break;
    }

//Add Color to Board

    $('#board-overlay td').on('click', function(){        
        switch (color) {

        case 'red':
        $(this).removeClass().addClass('red');
        break;

        case 'yellow':
        $(this).removeClass().addClass('yellow');
        break;

        case 'blue':
        $(this).removeClass().addClass('blue');
        break;

        case 'green':
        $(this).removeClass().addClass('green');
        break;

        case 'purple':
        $(this).removeClass().addClass('purple');
        break;

        case 'brown':
        $(this).removeClass().addClass('brown');
        break;

        case 'white':
        $(this).removeClass().addClass('white');
        break;

        case 'grey':
        $(this).removeClass().addClass('grey');
        break;

        case 'remove':
        $(this).removeClass();

    }

    });
});