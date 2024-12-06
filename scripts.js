document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = [
        {
            title: "Integration Broker",
            content: "Rest API Development",
        },
        {
            title: "Component Interface",
            content: "Component Interface functions",
        },
        {
            title: "Peoplecode Development",
            content: "Learnings",
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
