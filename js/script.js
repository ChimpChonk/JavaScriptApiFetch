
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
        const label = document.createElement("label");
        const label2 = document.createElement("label");
        label.textContent = item.first_name + " " + item.last_name;
        userList.textContent = item.email
        img.src = item.avatar;
        label2.textContent = item.id;
        list.appendChild(userList);
        list.appendChild(img);
        list.appendChild(label);
        list.appendChild(label2);
      });
    })
    .catch(error => console.log("Error: ", error));

