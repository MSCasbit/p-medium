$("#buttonS").click(function () {
  const newProfile = $("#newPostForm").serializeArray(); // missing # for id selector

  const postObject = {};
  newProfile.map(function (value) {
    postObject[value.name] = value.value;
 }); 
$.post("https://ajaxclass-1ca34.firebaseio.com/medium-equipo1/posts/.json", JSON.stringify(postObject), function (data){console.log (data)})

  $("#confirmModal").modal("show");
});    