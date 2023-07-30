const url="http://localhost:3000/view";

fetch(url)           
  .then(response => response.json())
  .then(data => {
    var ul = document.createElement('ul');
    data.posts.forEach(post => {
      var li = document.createElement('li');
      li.className = 'viewBlogBox';
      li.innerHTML = `
        <div class="blogBox">
          <h1>${post.Title}</h1>
          <h2>${post.Category}</h2>
        </div>
        <div class="blogContent">
          ${post.Content}
        </div>
        <div class="votes">
            <span>${post.Votes} likes &nbsp <a><i class="fa vote">&#xf087;</i></a> &nbsp <a><i class="fa vote">&#xf088;</i></a></span>
        </div>
      `
    ul.appendChild(li);
    });
    var div = document.getElementById("viewBlog");
    div.appendChild(ul);
  });
































