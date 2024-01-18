function userdata(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('userData').innerHTML = `
            <img style="  height: 200px; width: 200px; padding:50px ;
  margin: 0;
  display: flex;
  align-items: center; 
  justify-content: center;" src="${data.avatar_url}" alt="Profile Picture" width="150" >    
            <h1  style="text-align:center; font-size: 40px; text-decoration: underline">Login id:-${data.login}</h1>
                <p style="text-align:center;">Data Name:${data.name}</p>
                <p style="text-align:center;">Data Bio:${data.bio}</p>
                <p style="text-align:center;">Followers: ${data.followers}</p>
                <p style="text-align:center;">Following: ${data.following}</p>
                <p style="text align: center;">Your Repositories:</p>
            `;
        })
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(data => {
            console.log(data);
            for(var i=0;i<=data.length;i++){
                document.getElementById('userData').innerHTML += `
                <p style="text-align:center;">"${data[i].name}\n"</p>
                `;
            }
        })

        .catch(error => {
            console.log('Error:', error);
        });
}
