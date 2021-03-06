console.log("Let's get this party started!");


// async function getData() {
//     const response = await axios.get('http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym')
//     console.log(response.data.data[0].images.original.url)
//     const url = response.data.data[0].images.original.url
//     $("#test").attr("src", url)
// }

async function getGif(searchParam) {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchParam}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)


    let resultsLength = response.data.data.length
    let randomIndex = Math.floor(Math.random() * resultsLength + 1)

    let url = response.data.data[randomIndex].images.original.url

    $("#gifs-go-here").append(`<img src=${url}>`)
}

$("#submitter").on("submit", (e) => {
    e.preventDefault()
    let searchParam = $('#giffy').val()
    getGif(searchParam)
    $('#giffy').val("")
})

$("#remover").on("click", () => {
    $("#gifs-go-here").empty()
})

