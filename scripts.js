document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = [
        {
            title: "My First Blog Post",
            content: "This is the content of my first blog post.",
        },
        {
            title: "Another Blog Post",
            content: "This is the content of another blog post.",
        },
        {
            title: "Yet Another Blog Post",
            content: "This is the content of yet another blog post.",
        },
    ];

    const blogPostsContainer = document.getElementById("blog-posts");

    blogPosts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.className = "post";
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
});
