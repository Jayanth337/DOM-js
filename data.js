function userdata(username) {
    // Fetch user data
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('userData').innerHTML = `
                <div style="text-align:center;">
                    <img src="${data.avatar_url}" alt="Profile Picture" width="200" style="border-radius: 50%;">
                    <h1 style="font-size: 24px; text-decoration: underline;">Login id: ${data.login}</h1>
                    <p>Data Name: ${data.name}</p>
                    <p>Data Bio: ${data.bio}</p>
                    <p>Followers: ${data.followers}</p>
                    <p>Following: ${data.following}</p>
                    <p>Your Repositories:</p>
                </div>
            `;
        })
        .then(() => {
            return fetch(`https://api.github.com/users/${username}/repos`);
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.length > 0) {
                data.forEach(repo => {
                    document.getElementById('userData').innerHTML += `
                        <p id="reposs" style="text-align:center; font-size: 18px;">${repo.name}</p>
                    `;
                });
            } else {
                document.getElementById('userData').innerHTML += `
                    <p id="reposs" style="text-align:center; font-size: 18px;">No repositories found.</p>
                `;
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });
}
