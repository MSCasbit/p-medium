/*var post = [
    {
        imgUrl:"",
        name:"title post",
        description:"",
        autor:"",
        section:"",
        date:"",
        readTime:"",
        type: "",
}

]*/
var viewportHeight = window.innerHeight

 window.addEventListener("scroll", (event)=>{     
    if( $(window).scrollTop() > $(document).height() - $(window).height() -100 ) {
        loadMorePost()
        
    }
})

const loadMorePost =()=>{
    //$("#containeer").append()
    console.log("lo que quieras")
    $.ajax({
        url: "js/posts.json",        
        success: function(data){
            data.map(post=>{
                $("#containeer").append(` <div id="second-card" class="card mb-3">
                <div class="row no-gutters d-flex align-items-center  flex-row-reverse">
                    <div class="col-4">
                        <img src="https://d2kdyl1ietngbg.cloudfront.net/ProductThumbnails/yGtPHJ-683765271504_1.png"
                            class="card-img mb-3 w-75" alt="">
                    </div>
                    <div class="col-8">
                        <div class="card-body pr-0 pt-0">
                            <h5 class="card-title font-weight-bold">${post.title}</h5>
                            <div class="btn-group2 d-flex align-items-center justify-content-between">
                                <div>
                                    <p class="text muted">The Important Of Art Pictures, Try It. This weekend was a
                                        bit different, though. </p>
                                    <a class="text-dark user" href="https://medium.com/">veccilin</a>
                                    <span class="text-dark user">in</span>
                                    <a class="text-dark user" href="https://medium.com/">PaintLove</a>
                                    <br><time class=" text-muted user">a few hours
                                        ago</time><span class="text-muted user"> <img width="6px"
                                            src="images/primitive-dot (2).svg" alt=""> 3 min
                                        read </span><span> <img width="8px" src="images/star (3).svg" alt="">
                                    </span>
                                </div>
                                <div class="d-flex mr-2">
                                    <img class="menu" width="23px" src="images/guardar1.svg" alt="guardar">
                                    <img class="menu" width="20px" src="images/more_horiz-24px (1).svg" alt="dotts">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`)
            })
        },
        dataType: "json",
        cache: false
      });
    }