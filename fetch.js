const getData = () => {
    fetch("https://api.github.com/users/Kamyakushwaha")
      .then((res) => res.json())
      .then((data) => {
        display(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  
  
  const display = (data) => {
    const parentDiv = document.getElementById("parent");
    const avatarImg = document.getElementById("avtar");
    avatarImg.style.display = "none";
    parentDiv.innerHTML = `
      <h2>${data.name}</h2>
      <p><strong>Username:</strong> ${data.login}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Public Repos:</strong> ${data.public_repos}</p>
      <img src="${data.avatar_url}" alt="Avatar" width="150" />
    `;
  };