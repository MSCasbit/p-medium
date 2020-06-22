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



let currentDate = new Date()
let counter = 0

const getPost = () => {
  $.get(
    "https://ajaxclass-1ca34.firebaseio.com/medium-equipo1/posts/.json",
    function(respuesta) {
        const dataArray = [];
        for(let key in respuesta){
            const postRecent ={
                id: key,
                ...respuesta[key],
            }
            dataArray.push(postRecent)  
        }   
        console.log(dataArray)
        const sortedArticle = dataArray.sort(function (a,b){
            const aDate = a.date 
            const bDate = b.date 
        
            if(aDate>bDate){
                return -1
            }else{
                return 1
            }
        })
        const postRecent=sortedArticle.slice(0,5)
        const generalPosts= sortedArticle.slice(5)

        sortedArticle.map(post=>{
            if (counter<1){
                $("#cardLeftPost").append (`<div class="card-mb-3">
                <div class="row no-gutters d-flex">
                    <div class="col-mb-4">
                        <img class="imageess"
                            src="${post.imageurl}"
                            alt="atardecer">
                    </div>
                    <div class="col-8 ml-4">
                        <div class="textos">
                            <p class="card-title font-weight-bold">${post.title}</p>
                            <p class="text-card">${post.description}
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-9 p-0">
                                <a class="text-dark user ml-3" href="https://medium.com/">${post.author}</a>
                                <span class="text-dark user">in </span>
                                <a class="text-dark user" href="https://medium.com/">${post.category}</a>
                                <br><time class=" text-muted user ml-3">${post.date}</time><span class="text-muted small"> <img width="6px"
                                        src="images/primitive-dot (2).svg" alt="doot"> 3 min
                                    read </span><span> <img width="8px" src="images/star (3).svg" alt=""> </span>
                            </div>
                            <div class="col-3 p-0 d-flex justify-content-end">
                                <img class="d-md-none" width="23px" src="images/guardar1.svg" alt="guardar">
            
                                <img class="mr-2 menu" width="23px" src="images/more_horiz-24px (1).svg" alt="dotts">
                            </div>
                        </div>
            
                    </div>
                </div>`)
            } else if (counter>3){
                $("#rightCard").append(`<div class="card-mb-3">
                <div class="row no-gutters">
                    <div class="col-mb-4">
                        <img class="imageess"
                            src="${post.imageurl}"
                            alt="atardecer 2">
                    </div>
                    <div class="col-md-8 ml-4">
                        <div class="textos">
                            <p class="card-title font-weight-bold">${post.title}</p>
                            <p class="text-card">${post.description}</p>
                        </div>
                        <a class="text-dark user" href="https://medium.com/">${post.author}</a><span
                            class="text-dark small">
                            in </span>
                        <a class="text-dark user" href="https://medium.com/">${post.category}</a>
                        <br><time class=" text-muted user">${post.date}</time><span
                            class="text-muted small"> <img width="6px" src="images/primitive-dot (2).svg"
                                alt="doot"> 3 min
                            read </span><span> <img width="8px" src="images/star (3).svg" alt=""> </span>
                        <div class="btn-group">
                            <img class="d-md-none" width="23px" src="images/guardar1.svg" alt="guardar">
                            <img width="23px" src="images/more_horiz-24px (1).svg" alt="dotts">
                        </div>
                    </div>
                </div>
            </div>`)
                
            } else if (counter >= 1 && counter <= 3){
                $("#cardsCenter").append (`<div id="second-card" class="card mb-3">
                <div class="row no-gutters d-flex align-items-center  flex-row-reverse flex-md-row">
                    <div class="col-4">
                        <img width="100%"
                            src="${post.imageurl}"
                            class="card-img mb-3" alt="">
                    </div>
                    <div class="col-8">
                        <div class="card-body pr-0 pt-0">
                            <h5 class="card-title font-weight-bold">${post.title}</h5>
                            <div class="btn-group2 d-flex align-items-center justify-content-between">
                                <div>
                                    <a class="text-dark user" href="https://medium.com/">${post.author}</a>
                                    <span class="text-dark user">in</span>
                                    <a class="text-dark user" href="https://medium.com/">${post.category}</a>
                                    <br><time class=" text-muted user">${post.date}</time><span class="text-muted user"> <img width="6px"
                                            src="images/primitive-dot (2).svg" alt=""> 3 min
                                        read </span><span> <img width="8px" src="images/star (3).svg" alt="">
                                    </span>
                                </div>
                                <div>
                                    <img class="d-md-none" width="23px" src="images/guardar1.svg" alt="guardar">
                                    <img class="dotts m-0" src="images/more_horiz-24px (1).svg" alt="dotts">
                                </div>
                            </div>
                        </div>
                    </div>       
            `)
            } else {console.log ("aqui va a ir en medio")}
            counter ++
        })
    })
}

$(window).on("load", getPost);


       /* if(postRecent.category === "Coronavirus"||leftCounter<1){                
                printLeftCardRecent(postRecent) 
                leftCounter++ 
            }else if(postRecent.category ==="OneZero"||rightCounter<1){
                printRightCards(postRecent)
                rightCounter++
            }
            else{
                printCenterCards(postRecent)
            }
        }

    }
})
} 
const printLeftCardRecent =(post)=>{
    $("#cardLeftPost").append(`<div class="card-mb-3">
    <div class="row no-gutters d-flex">
        <div class="col-mb-4">
            <img class="imageess"
                src="${post.imageurl}"
                alt="atardecer">
        </div>
        <div class="col-8 ml-4">
            <div class="textos">
                <p class="card-title font-weight-bold">${post.title}</p>
                <p class="text-card">${post.description}
                </p>
            </div>
            <div class="row">
                <div class="col-9 p-0">
                    <a class="text-dark user ml-3" href="https://medium.com/">${post.author}</a>
                    <span class="text-dark user">in </span>
                    <a class="text-dark user" href="https://medium.com/">${post.category}</a>
                    <br><time class=" text-muted user ml-3">${post.date}</time><span class="text-muted small"> <img width="6px"
                            src="images/primitive-dot (2).svg" alt="doot"> 3 min
                        read </span><span> <img width="8px" src="images/star (3).svg" alt=""> </span>
                </div>
                <div class="col-3 p-0 d-flex justify-content-end">
                    <img class="d-md-none" width="23px" src="images/guardar1.svg" alt="guardar">

                    <img class="mr-2 menu" width="23px" src="images/more_horiz-24px (1).svg" alt="dotts">
                </div>
            </div>

        </div>
    </div>`)
}
const printCenterCards =(post)=>{
    $("#cardsCenter").append(`<div id="second-card" class="card mb-3">
    <div class="row no-gutters d-flex align-items-center  flex-row-reverse flex-md-row">
        <div class="col-4">
            <img width="100%"
                src="${post.imageurl}"
                class="card-img mb-3" alt="">
        </div>
        <div class="col-8">
            <div class="card-body pr-0 pt-0">
                <h5 class="card-title font-weight-bold">${post.title}</h5>
                <div class="btn-group2 d-flex align-items-center justify-content-between">
                    <div>
                        <a class="text-dark user" href="https://medium.com/">${post.author}</a>
                        <span class="text-dark user">in</span>
                        <a class="text-dark user" href="https://medium.com/">${post.category}</a>
                        <br><time class=" text-muted user">${post.date}</time><span class="text-muted user"> <img width="6px"
                                src="images/primitive-dot (2).svg" alt=""> 3 min
                            read </span><span> <img width="8px" src="images/star (3).svg" alt="">
                        </span>
                    </div>
                    <div>
                        <img class="d-md-none" width="23px" src="images/guardar1.svg" alt="guardar">
                        <img class="dotts m-0" src="images/more_horiz-24px (1).svg" alt="dotts">
                    </div>
                </div>
            </div>
        </div>       
`)
}
const printRightCards =(post)=>{
    $("#rightCard").append(`<div class="card-mb-3">
    <div class="row no-gutters">
        <div class="col-mb-4">
            <img class="imageess"
                src="${post.imageurl}"
                alt="atardecer 2">
        </div>
        <div class="col-md-8 ml-4">
            <div class="textos">
                <p class="card-title font-weight-bold">${post.title}</p>
                <p class="text-card">${post.description}</p>
            </div>
            <a class="text-dark user" href="https://medium.com/">${post.author}</a><span
                class="text-dark small">
                in </span>
            <a class="text-dark user" href="https://medium.com/">${post.category}</a>
            <br><time class=" text-muted user">${post.date}</time><span
                class="text-muted small"> <img width="6px" src="images/primitive-dot (2).svg"
                    alt="doot"> 3 min
                read </span><span> <img width="8px" src="images/star (3).svg" alt=""> </span>
            <div class="btn-group">
                <img class="d-md-none" width="23px" src="images/guardar1.svg" alt="guardar">
                <img width="23px" src="images/more_horiz-24px (1).svg" alt="dotts">
            </div>
        </div>
    </div>
</div>`)
}
*/