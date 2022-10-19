document.getElementById("insertbtn").addEventListener("click", async () => {
    const title = document.getElementById("titleinput").value;
    const isbn = document.getElementById("isbninput").value;
    const pageCount = document.getElementById("pcinput").value;
    const publishedDate = document.getElementById("pdateinput").value;
    const shortDescription = document.getElementById("sdinput").value;
    const authors = document.getElementById("authorsinput").value;
    const categories = document.getElementById("categoryinput").value;

    const fd = new Date(publishedDate).toISOString();

    let arrauth = authors.split(', ');
    let carr = categories.split(', '); 


    console.log(title, isbn, pageCount, fd, shortDescription, typeof arrauth, arrauth, categories);

    const body = {
        "title": title, 
        "isbn": isbn, 
        "pageCount": pageCount, 
        "publishedDate": fd, 
        "shortDescription": shortDescription, 
        "status": "PUBLISH", 
        "authors": arrauth, 
        "categories": carr
    }

    console.log("passing body: ", body);

    const result = await fetch("http://localhost:3000/books", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await result.json()

    console.log("post result: ", data)

    window.location.href = "/"
});