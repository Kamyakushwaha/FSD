function getData(){
    fetch("https://api.github.com/users/Kamyakushwaha").then
    ((response) => {
        const data = response.json();
        console.log(data);
        return data;
    }).then((response) => {
        const div = document.getElementById("parent");
        div.innerHTML = response.login;
        
        // console.log(response)
    })
}