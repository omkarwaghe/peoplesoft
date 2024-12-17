document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = [
        {
            title: "Integration Broker",
            content: "Synchronous and Asynchronous method <br> import PS_PT:Integration:IRequestHandler",
        },
        {
            title: "Component Interface",
            content: "Component Interface functions",
        },
        {
            title: "Peoplecode Development",
            content: "Learnings",
        },
        {
            title: "PeopleSoft Architecture",
            content: "Browser <-> Web Server <-> Application Server -> process Scheduler services -> RDBMS"
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
