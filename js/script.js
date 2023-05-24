
fetch('https://reqres.in/api/users?page=2')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
            throw new Error(`Something went wrong ... ${response.status}`)
            }
      })
      .then(data =>{
        console.log(data);
      const list = document.getElementById("data-list");
      data.data.forEach(item => {
        const userList = document.createElement("li");
        const img = document.createElement("img");
        const name = document.createElement("label");
        const id = document.createElement("label");
        const br = document.createElement("br");
        name.textContent = "Name: " + item.first_name + " " + item.last_name;
        userList.textContent = "Email: " + item.email
        img.src = item.avatar;
        id.textContent = "Id: " + item.id;
        list.appendChild(userList);
        list.appendChild(id);
        list.appendChild(br);
        list.appendChild(name);
        list.appendChild(br);
        list.appendChild(img);
      });
    })
    .catch(error => console.log("Error: ", error));

