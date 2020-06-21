var post = [
    {
        imgUrl:"",
        name:"title post",
        description:"",
        autor:"",
        category:"",
        date:"",
        readTime:"",
}

]


const createPost = ()=>{
    $( "#savePost" ).click(function( event ) {
        console.log( $("form" ).serializeArray() );
        event.preventDefault();
      });
}
/*
$("#savePost").click(() => {
    $("#exampleModal").modal("hide");
});
      
*/
const loadPage = () =>{
    $('#formPost').load('newPost.html #post-form')
}

// navbar animada 
$("#horizon-prev").click(function(){
    event.preventDefault();
    $(".lix").animate({
        scrollLeft: "-=100"
      }, "slow");
    });


$("#horizon-next").click(function() {
    event.preventDefault();
    $(".lix").animate({
     scrollLeft: "+=100"
    }, "slow");
  });
