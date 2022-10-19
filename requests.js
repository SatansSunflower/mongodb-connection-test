const btn = document
  .getElementById("getbooksbutton")
  .addEventListener("click", async () => {
    const id = document.getElementById("bookidinput").value;
    console.log("ID", typeof id)
    console.log("indiferee");
    const books = await fetch("http://localhost:3000/books?title=" + id);
    // console.log("result: ", await books.json());
    const data = await books.json()

    buildTable(data)
  });


function buildTable(data) {
    var t = document.getElementById("table")
    t.style.visibility = "visible"
    var table = document.getElementById("myTableBody");
    
    for (let i = 0; i < data.length; i++) {
        const row = `
            <tr>
                <td>${data[i].title}</td>
                <td>${data[i].pageCount}</td>
                <td>${data[i].shortDescription}</td>
                <td>${data[i].publishedDate}</td>
                <td>${data[i].status}</td>
            </tr>
        `
        table.innerHTML += row;
        
    }
    
}
