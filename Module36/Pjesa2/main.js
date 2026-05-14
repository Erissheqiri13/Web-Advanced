$('#btn2').click(function(){
    $('.hidden').hide('slow')
})

$('#btn1').click(function(){
    $('.hidden').show(200)
})

$('#mySquare').click(function(){
    $('#mySquare').animate({
        height:200,
        width:200
    })
})

$('#mySquare').dblclick(function(){
    $('#mySquare').animate({
        height:100,
        width:100
    })
})

$('.testing').click(function(){
    $(this).animate({
        'left':'+=50px',
        opacity:0.25,
        fontSize:30
    })
})