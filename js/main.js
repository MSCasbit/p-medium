// navbar animada 
$("#horizon-prev").click(function () {
    event.preventDefault();
    $(".lix").animate({
        scrollLeft: "-=800"
    }, "slow");
});


$("#horizon-next").click(function () {
    event.preventDefault();
    $(".lix").animate({
        scrollLeft: "+=800"
    }, "slow");
});

window.addEventListener("scroll", (event) => {
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 100) {
        loadMorePost()

    }
})


$(window).on("load", getPost);

function getPost () {
  $.ajax({
    url: 'https://ajaxclass-1ca34.firebaseio.com/medium-equipo1/posts/.json',
    success: function(respuesta) {

        for(let key in respuesta){
            let postRecent = respuesta[key]

            console.log(postRecent)
        }

    }
})
} 

