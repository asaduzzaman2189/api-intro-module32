function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
loadPosts();

function displayPosts(posts) {
    const postContainer = document.getElementById('posts')
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
        console.log(post);
    }
}

// 404 error দেখানোর জন্য এই ফাংশন তৈরি- http link ভুল দেয়া আছে। 
function addAPost2() {
    fetch('https://jsonplaceholder.typicode.com/pusts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'my new post',
            body: 'This is my posts',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',//এটা কপি করে আনলেই হবে। 
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

// post 
function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'my new post',
            body: 'This is my posts',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',//এটা কপি করে আনলেই হবে। 
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

