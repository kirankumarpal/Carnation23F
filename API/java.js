async function search() {
    var words1 = document.getElementById('fn').value;
    var result = await fetch("https://dummyjson.com/products/" + words1 , {method: 'GET'});
    var finResult = await result.json();
    document.getElementById('result').innerText = "Title: " + finResult.title;
    document.getElementById('result1').innerText = "Description: "+ finResult.description;
}