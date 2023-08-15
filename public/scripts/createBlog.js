function createBlog(){
  let categorySelected = document.getElementById("categories").value;
  console.log("category selected: ", categorySelected);

  let titleSelected = document.getElementById("title").value;
  console.log("title selected: ", titleSelected);

  let textSelected = document.getElementById("content").value;
  console.log("content: ",textSelected );

  const url = "http://localhost:3000/create";
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      title: titleSelected,
      text: textSelected,
      category: categorySelected
    }),
    headers: {
      "content-type" : "application/json"
    }
  }).then(response => {
    console.log("Created Successfully");
    location.assign("ViewBlog.html");
  });
}

console.log("Hi you are here in js");