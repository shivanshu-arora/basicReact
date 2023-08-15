const url="http://localhost:3000/view";

fetch(url)           
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    var ul = document.createElement('ul');
    data.posts.forEach(post => {
      var li = document.createElement('li');
      li.className = 'viewBlogBox';
      li.innerHTML = `
        <div class="blogBox">
          <h1>${post.title}</h1>
          <h2>${post.category}</h2>
        </div>
        <div class="blogContent">
          ${post.text}
        </div>
        <div class="votes">
            <span>1 likes &nbsp <a><i class="fa vote">&#xf087;</i></a> &nbsp <a><i class="fa vote">&#xf088;</i></a></span>
        </div>
      `
    ul.appendChild(li);
    });
    var div = document.getElementById("viewBlog");
    div.appendChild(ul);
  });

  function routeToCreate(){
    location.assign("CreateBlog.html");
  }

































