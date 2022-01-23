const api_url = "https://type.fit/api/quotes"

async function getapi(url){
    const response = await fetch(url);
    var data = await response.json();
    
    //error handling?
    show(data);

    }

    
function show(data){
    let quoteObj =  data[Math.floor(Math.random() * data.length)]
    quote = quoteObj["text"]
    let author = quoteObj["author"]
    if(author===null){
        author = "Unknown"
    }

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("quote_author").innerHTML = "-"+ author;
}
getapi(api_url);