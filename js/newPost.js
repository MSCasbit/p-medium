

$("#buttonS").click(function(){        
    var newProfile=$("#newPostForm").serializeArray(); // missing # for id selector
    console.log(newProfile); 
    $("#confirmModal").modal('hide')                   
});

const printCards =()=>{
    newProfile.forEach(datos=>{  
        ("#cardsPost").append(`<div class="card-mb-3">
        <div class="row no-gutters d-flex">
            <div class="col-mb-4">
                <img class="imageess"
                    src="${newProfile.imageurl}"
                    alt="atardecer">
            </div>
            <div class="col-8 ml-4">
                <div class="textos">
                    <p class="card-title font-weight-bold">${newProfile.title}</p>
                    <p class="text-card">${newProfile.description}
                    </p>
                </div>
                <div class="row">
                    <div class="col-9 p-0">
                        <a class="text-dark user ml-3" href="https://medium.com/">${newProfile.author}</a>
                        <span class="text-dark user"> in </span>
                        <a class="text-dark user" href="https://medium.com/">${newProfile.category}</a>
                        <br><time class=" text-muted user ml-3">${newProfile.date}
                            </time><span class="text-muted small"> <img width="6px"
                                src="images/primitive-dot (2).svg" alt="doot"> 3 min read
                            read </span><span> <img width="8px" src="images/star (3).svg" alt=""> </span>
                    </div>
                    <div class="col-3 p-0 d-flex justify-content-end">
                        <img class="d-md-none" width="23px" src="images/guardar1.svg" alt="guardar">

                        <img class="mr-2 menu" width="23px" src="images/more_horiz-24px (1).svg" alt="dotts">
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
<div class="col-12 col-md-4">
    <div id="second-card" class="card mb-3">
        <div class="row no-gutters d-flex align-items-center  flex-row-reverse flex-md-row">
            <div class="col-4">
                <img width="100%"
                    src="https://www.dzoom.org.es/wp-content/uploads/2011/08/insp-cuadradas-3.jpg"
                    class="card-img mb-3" alt="">
            </div>
            <div class="col-8">
                <div class="card-body pr-0 pt-0">
                    <h5 class="card-title font-weight-bold">Field Of Violets,The Best Photo Of The Year</h5>
                    <div class="btn-group2 d-flex align-items-center justify-content-between">
                        <div>
                            <a class="text-dark user" href="https://medium.com/">Richard Mcgiver</a>
                            <span class="text-dark user">in</span>
                            <a class="text-dark user" href="https://medium.com/">PShare</a>
                            <br><time class=" text-muted user">a few hours
                                ago</time><span class="text-muted user"> <img width="6px"
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
            <div class="col-4">
                <img width="100%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXz9DEH62QgeoeVp1yxH-lId7GR9FS0tFB2jYX1fBpZv6fApoZ&usqp=CAU"
                    class="card-img mb-3" alt="">
            </div>
            <div class="col-8">
                <div class="card-body pr-0 pt-0">
                    <h5 class="card-title font-weight-bold">Most Expensive Chandeliers In The World</h5>
                    <div class="btn-group2 d-flex align-items-center justify-content-between">
                        <div>
                            <a class="text-dark user" href="https://medium.com/">McArton Grey</a>
                            <span class="text-dark user">in</span>
                            <a class="text-dark user" href="https://medium.com/">ChandeliersWorld</a>
                            <br><time class=" text-muted user">a few hours
                                ago</time><span class="text-muted user"> <img width="6px"
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
            <div class="col-4">
                <img width="100%"
                    src="https://i.pinimg.com/originals/8e/66/c4/8e66c4c72d42955b21b6a5ab81ef101b.jpg"
                    class="card-img mb-3" alt="">
            </div>
            <div class="col-8">
                <div class="card-body pr-0 pt-0">
                    <h5 class="card-title font-weight-bold">Kitchen Make´s The Great Labor In Our Live</h5>
                    <div class="btn-group2 d-flex align-items-center justify-content-between">
                        <div>
                            <a class="text-dark user" href="https://medium.com/">Rosela Birton</a>
                            <span class="text-dark user">in</span>
                            <a class="text-dark user" href="https://medium.com/">KitchenHouse</a>
                            <br><time class=" text-muted user">a few hours
                                ago</time><span class="text-muted user"> <img width="6px"
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
        </div>
    </div>
</div>
<div class="d-none d-md-inline col-md-4">
    <div class="card-mb-3">
        <div class="row no-gutters">
            <div class="col-mb-4">
                <img class="imageess"
                    src="https://images.unsplash.com/photo-1589842209202-ed0e1a766411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt="atardecer 2">
            </div>
            <div class="col-mb-8 ml-4">
                <div class="textos">
                    <p class="card-title font-weight-bold">10 Daily Habits That Are Drastically Improving My
                        Life</p>
                    <p class="text-card">These place will be the future...</p>
                </div>
                <a class="text-dark user" href="https://medium.com/">Robert Spencer</a><span
                    class="text-dark small">
                    in </span>
                <a class="text-dark user" href="https://medium.com/">ClassView</a>
                <br><time class=" text-muted user">a few hours ago</time><span
                    class="text-muted small"> <img width="6px" src="images/primitive-dot (2).svg"
                        alt="doot"> 3 min
                    read </span><span> <img width="8px" src="images/star (3).svg" alt=""> </span>
                <div class="btn-group">
                    <img class="d-md-none" width="23px" src="images/guardar1.svg" alt="guardar">
                    <img width="23px" src="images/more_horiz-24px (1).svg" alt="dotts">
                </div>
            </div>
        </div>
    </div>
</div>
</div>`)
    })
}