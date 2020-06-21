const tableBody = $("table tbody");

let counter= 0

const loadPosts = () => {
  $.get(
    "https://ajaxclass-1ca34.firebaseio.com/medium-equipo1/posts/.json",
    function (data) {
      const postsArray = [];
      for (let key in data) {
        const post = {
            id: key,
            ...data[key],
        };

        postsArray.push(post);
      }
      console.log (postsArray)
      const sortedPosts= postsArray.sort (function (a,b){
          const aDate= a.date
          const bDate= b.date

          if (aDate>bDate){
              return -1
        
          }else {
              return 1
          }
      })

      const recentPost= sortedPosts.slice(0,5)
      const generalPosts= sortedPosts.slice(5)

      recentPost.map(post=>{ 
          let rowClass = "table-primary"
          if (counter<1){
              rowClass= "table-danger"
          }else if (counter>3){
              rowClass= "table-success"
          }
        tableBody.append(`
        <tr class= "${rowClass}">
            <td>${post.title}</td>
            <td>${post.category}</td>
            <td>${post.date}</td>
            <td>
                <button data-id="${post.id}" class="delete btn btn-danger">Delete</button>
            </td>
        </tr>
    `);
    counter ++
      })
    }
  );
};

const deletePost = (postId) => {
  $.ajax({
    url: `https://ajaxclass-1ca34.firebaseio.com/medium-equipo1/posts/${postId}/.json`,
    method: "DELETE",
  });
};

$(document).ready(function () {
  loadPosts();

  $("table").on("click", ".delete", function () {
    const postId = $(this).data("id"); 

    deletePost(postId);

    $(this).parent().parent().remove();
  });
});
