// navbar animada 
 
 
 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }            
$("#closed").click(function(){
    $(this).closest("#cardPublisher").remove()
})
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
//this is de infinity content
window.addEventListener("scroll", (event) => {
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 400) {
        loadMorePost()

    }
})
const loadMorePost = () => {    
    console.log("lo que quieras")
    $.get({
        url: "https://ajaxclass-1ca34.firebaseio.com/medium-equipo1/posts/.json",
        success: function (data) {
            const dataArray = [];
            for (let key in data) {
                const postRecent = {
                    id: key,
                    ...data[key],
                }
                dataArray.push(postRecent)
            }
           
            dataArray.map(post => {
                let randomAge = getRandomInt(2000,2020)
                let randomNumber = getRandomInt(3,10)
                
                $("#containeer").append(` <div id="second-card" class="card mb-3">                
                <div class="row no-gutters d-flex align-items-center  flex-row-reverse">                
                    <div class="col-4">
                        <img src="${post.imageurl}"
                            class="card-img mb-3 w-75" alt="">
                    </div>
                    <div class="col-8">
                        <div class="card-body pr-0 pt-0">
                            <h5 class="card-title font-weight-bold">${post.title}</h5>
                            <div class="btn-group2 d-flex align-items-center justify-content-between">
                                <div>
                                    <p class="text muted"data-toggle="popover3" data-placement="top" data-description="${post.description} ">${post.description} </p>
                                    <a class="text-dark user"data-toggle="popover" data-placement="top" data-author="${post.author}" data-age="${randomAge}" href="#">${post.author}</a>
                                    <span class="text-dark user">in</span>
                                    <a class="text-dark user" href="#"data-toggle="popover2" data-placement="top" data-category="${post.category}">${post.category}</a>
                                    <br><time class=" text-muted user" >${post.date}</time><span class="text-muted user"data-toggle="tooltip" data-placement="bottom" title="${randomNumber} min read"> <img width="6px"
                                            src="images/primitive-dot (2).svg" alt=""> ${randomNumber} min
                                        read </span><span> <img width="8px" src="images/star (3).svg" alt="">
                                    </span>
                                </div>
                                <div class="d-flex mr-2">
                                    <img class="menu" width="23px" src="images/guardar1.svg" alt="guardar"data-toggle="tooltip" data-placement="bottom" title="Guardar">
                                    <img class="menu" width="20px" src="images/more_horiz-24px (1).svg" alt="dotts"data-toggle="popoverdott" data-placement="bottom" data-menu="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`)
            })
            // se agregan tooltips y popover para el scope de la funcion.
            $('[data-toggle="tooltip"]').tooltip()
            $('[data-toggle="popover"]').popover({
                container: "body",
                trigger: "hover",
                html: true,
                content: function () {
                    const author = $(this).data("author")
                    const age = $(this).data("age")
                    console.log(author)
                    return `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${author}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Medium member since ${age}</h6>
                      <p class="card-text">Developer, accidental wordsmith. OneZero columnist trying to debug the why behind tech.</p>
                    </div>
                  </div>`
                }
            });
            $('[data-toggle="popoverdott"]').popover({
                container: "body",
                trigger: "click",
                html: true,
                content: function () {
                    const menu = $(this).data("menu")
                    console.log(menu)
                    return `<div>
                    <ul class="p-0">
                    <li id="menu" class=" mb-2">Dissmis this history</li>
                    <li id="menu" class=" mb-2">Mute this author</li>
                    <li id="menu" class=" mb-2">Mute this publication</li>
                    </ul>
                    </div>`
                }
            });
            $('[data-toggle="popover3"]').popover({
                container: "body",
                trigger: "hover",
                html: true,
                content: function () {
                    const description = $(this).data("description")
                    console.log(description)
                    return `<div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${description}</h5>
                  
                </div>
              </div>`
                }
            });
            $('[data-toggle="popover2"]').popover({
                container: "body",
                trigger: "hover",
                html: true,
                content: function () {
                    const category = $(this).data("category")
                    console.log(category)
                    return `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${category}</h5>
                      <p>Higher Learning. A new Medium publication.</p>
                    </div>
                  </div>`
                }
            });
        },
        dataType: "json",
        cache: false
    });
}

//finish infinity content
// recent cards
let currentDate = new Date()
let counter = 0
let popularCounter = 0

const getPost = () => {
    $.get(
        "https://ajaxclass-1ca34.firebaseio.com/medium-equipo1/posts/.json",
        function (respuesta) {
            //devolvemos un objeto a un array para usar metodos de array 
            const dataArray = [];
            for (let key in respuesta) {
                const postRecent = {
                    id: key,
                    ...respuesta[key],
                }
                dataArray.push(postRecent)
            }
            console.log(dataArray)
            const sortedArticle = dataArray.sort(function (a, b) {
                const aDate = a.date
                const bDate = b.date

                if (aDate > bDate) {
                    return -1
                } else {
                    return 1
                }
            })

         //iteramos dentro del data array e imprimimos cards.
            sortedArticle.map(post => {
                let randomNumber = getRandomInt(3,10)
                let randomAge = getRandomInt(2000,2020)
               
                if (counter < 1) {
                    //card principal izquierda
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
                            <p class="text-card"data-toggle="popover3" data-placement="top" data-description="${post.description} ">${post.description}
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-9 p-0">
                                <a class="text-dark user ml-3" href="#" data-toggle="popover" data-placement="top" data-author="${post.author}" data-age="${randomAge}">${post.author}</a>
                                <span class="text-dark user">in </span>
                                <a class="text-dark user" href="#"data-toggle="popover2" data-placement="top" data-category="${post.category}">${post.category}</a>
                                <br><time class=" text-muted user ml-3" data-toggle="tooltip" data-placement="top" title= "Updated ${post.date}">${post.date}</time><span class="text-muted small"data-toggle="tooltip" data-placement="top" title= " ${randomNumber} min read"> <img width="6px"
                                        src="images/primitive-dot (2).svg" alt="doot"> ${randomNumber} min
                                    read </span><span> <img width="8px" src="images/star (3).svg" alt=""> </span>
                            </div>
                            <div class="col-3 p-0 d-flex justify-content-end">
                                <img class="d-md-none" width="23px" src="images/guardar1.svg" alt="guardar"data-toggle="tooltip" data-placement="bottom" title="Guardar">
            
                                <img class="mr-2 menu" width="23px" src="images/more_horiz-24px (1).svg" alt="dotts"data-toggle="popoverdott" data-placement="bottom" data-menu="">
                            </div>
                        </div>
            
                    </div>
                </div>`)
                } else if (counter === 4) {
                    //card principal derecha 
                    $("#rightCard").append(`<div class="card-mb-3">
                <div class="row no-gutters">
                    <div class="col-mb-4">
                        <img class="imageess2"
                            src="${post.imageurl}"
                            alt="atardecer 2">
                    </div>
                    <div class="col-md-8 ml-4">
                        <div class="textos">
                            <p class="card-title font-weight-bold">${post.title}</p>
                            <p class="text-card"data-toggle="popover3" data-placement="top" data-description="${post.description} ">${post.description}</p>
                        </div>
                        <a class="text-dark user" href="#" data-toggle="popover" data-placement="top" data-author="${post.author}" data-age="${randomAge}">${post.author}</a><span
                            class="text-dark small">
                            in </span>
                        <a class="text-dark user" href="#"data-toggle="popover2" data-placement="top" data-category="${post.category}">${post.category}</a>
                        <br><time class=" text-muted user" data-toggle="tooltip" data-placement="top" title= "Updated ${post.date}">${post.date}</time><span
                            class="text-muted small"data-toggle="tooltip" data-placement="top" title= " ${randomNumber} min read"> <img width="6px" src="images/primitive-dot (2).svg"
                                alt="doot"> ${randomNumber} min
                            read </span><span> <img width="8px" src="images/star (3).svg" alt=""> </span>
                        <div class="btn-group">
                            <img class="d-md-none" width="23px" src="images/guardar1.svg" alt="guardar"data-toggle="tooltip" data-placement="bottom" title="Guardar">
                            <img width="23px" src="images/more_horiz-24px (1).svg" alt="dotts"data-toggle="popoverdott" data-placement="bottom" data-menu="">
                        </div>
                    </div>
                </div>
            </div>`)

                } else if (counter >= 1 && counter <= 3) {
                    //cards principal centro 
                    $("#cardsCenter").append(`<div id="second-card" class="card mb-3">
                <div class="row no-gutters d-flex align-items-center  flex-row-reverse flex-md-row">
                    <div class="col-4">
                        <img width="100%"
                            src="${post.imageurl}"
                            class="card-img mb-3" alt="">
                    </div>
                    <div class="col-8">
                        <div class="card-body pr-0 pt-0">
                            <h5 class="card-title2 font-weight-bold"data-toggle="popover3" data-placement="top" data-description="${post.description} ">${post.title}</h5>
                            <div class="btn-group2 d-flex align-items-center justify-content-between">
                                <div>
                                    <a class="text-dark user" href="#" data-toggle="popover" data-placement="top" data-author="${post.author}" data-age="${randomAge}" >${post.author}</a>
                                    <span class="text-dark user">in</span>
                                    <a class="text-dark user" href="https://medium.com/" data-toggle="popover2" data-placement="top" data-category="${post.category}">${post.category}</a>
                                    <br><time class=" text-muted user" data-toggle="tooltip" data-placement="top" title="Updated ${post.date}">${post.date}</time><span class="text-muted user"data-toggle="tooltip" data-placement="top" title= " ${randomNumber} min read"> <img width="6px"
                                            src="images/primitive-dot (2).svg" alt="" > ${randomNumber} min
                                        read </span><span> <img width="8px" src="images/star (3).svg" alt="">
                                    </span>
                                </div>
                                <div>
                                    <img class="d-md-none" width="23px" src="images/guardar1.svg" alt="guardar" data-toggle="tooltip" data-placement="bottom" title="Guardar">
                                    <img class="dotts m-0" src="images/more_horiz-24px (1).svg" alt="dotts"data-toggle="popoverdott" data-placement="bottom" data-menu="">
                                </div>
                            </div>
                        </div>
                    </div>       
            `)
                }
            //se agrega condicional para los mas populares con un nuevo contador interno.
                if (popularCounter < 4 && post.category === "Coronavirus") {
                    $("#popularPost").append(`<li class="mb-5">
                <div class="col-3 col-md-4 p-0">
                    <h2 class="text-muted text-right">0${popularCounter + 1}</h2>
                </div>
                <div class="col-9 col-md-8">
                    <h6 class="textA"data-toggle="popover3" data-placement="top" data-description="${post.description} ">${post.title}</h6>
                    <div>
                    <span><a class="text-dark user" href="#"data-toggle="popover" data-placement="top" data-author="${post.author}" data-age="${randomAge}">${post.author}</a>
                    </span> In <span><a class="text-dark user" href="#"data-toggle="popover2" data-placement="top" data-category="${post.category}">${post.category}</a></span>
                    <br><time class=" text-muted user" data-toggle="tooltip" data-placement="top" title="Updated ${post.date}">${post.date}</time><span class="text-muted user"data-toggle="tooltip" data-placement="bottom" title="${randomNumber} min read"> <img width="6px"
                                            src="images/primitive-dot (2).svg" alt=""> ${randomNumber} min
                                        read </span><span> <img width="8px" src="images/star (3).svg" alt="">
                                    </span>
                    </div>
                </div>
            </li>`)
                    popularCounter++
                }
                counter++
            })
            let randomAge = getRandomInt(2000,2020)//se agregan tooltips y popover dentro del scope para el alcance detntro de la funcion.
            $('[data-toggle="tooltip"]').tooltip()
            $('[data-toggle="popover"]').popover({
                container: "body",
                trigger: "hover",
                html: true,
                content: function () {
                    const author = $(this).data("author")
                    const age = $(this).data("age")
                    console.log(author)
                    return `<div class="card">
                <div id="cardPopover" class="card-body">
                  <h2 class="card-title">${author}</h2>
                  <hr>
                  <h6 class="card-subtitle mb-2 text-muted">Medium member since ${age}</h6>
                  <p class="card-text">Developer, accidental wordsmith. OneZero columnist trying to debug the why behind tech.</p>
                </div>
              </div>`
                }
            });
            $('[data-toggle="popover3"]').popover({
                container: "body",
                trigger: "hover",
                html: true,
                content: function () {
                    const description = $(this).data("description")
                    console.log(description)
                    return `<div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${description}</h5>
                  
                </div>
              </div>`
                }
            });
            $('[data-toggle="popoverdott"]').popover({
                container: "body",
                trigger: "click",
                html: true,
                content: function () {
                    const menu = $(this).data("menu")
                    console.log(menu)
                    return `<div class="d-flex align-content-center">
                    <ul class="p-0">
                    <li id="menu" class=" mb-2">Dissmis this history</li>
                    <li id="menu" class=" mb-2">Mute this author</li>
                    <li id="menu" class=" mb-2">Mute this publication</li>
                    </ul>
                    </div>`
                }
            });

            $('[data-toggle="popover2"]').popover({
                container: "body",
                trigger: "hover",
                html: true,
                content: function () {
                    const category = $(this).data("category")
                    console.log(category)
                    return `<div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${category}</h5>
                  <p>Higher Learning. A new Medium publication.</p>
                </div>
              </div>`
                }
            });
            
        })
}
$(window).on("load", getPost);


