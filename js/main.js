var post = [
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

]

 const loadPage=()=>{
     $("#allContent").load("newPost.html",printForm)
 }
const printForm=()=>{
    $("#allContent").append(`
    <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
    <form>
    <div class="form-group">
      <label for="autor">autor</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">      
    </div>
    <div class="form-group">
      <label for="autor">autor</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">      
    </div>
    <div class="form-group">
      <label for="autor">autor</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">      
    </div>
    <div class="form-group">
      <label for="descripcion">descripcion</label>
      <textarea type="text" class="form-control"></textarea>
      </div>
      <button type="button" class="btn btn-success" data-toggle="modal" data-target="#confirmModal">Subir post</button>
      </div>
    </div>
    </div>`)
}

