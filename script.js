// Animação ao rolar a página
const fadeElements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    fadeElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// --- SISTEMA DE COMENTÁRIOS POR POST ---

function loadComments() {
    const commentBox = document.querySelector("#comments");
    const commentList = document.querySelector("#comment-list");
    const postId = document.body.dataset.post;

    if (!commentBox) return;

    const saved = JSON.parse(localStorage.getItem("comments_" + postId)) || [];

    saved.forEach(c => {
        const li = document.createElement("li");
        li.textContent = c;
        commentList.appendChild(li);
    });
}

function saveComment() {
    const input = document.querySelector("#comment-input");
    const postId = document.body.dataset.post;

    if (input.value.trim() === "") return;

    const saved = JSON.parse(localStorage.getItem("comments_" + postId)) || [];
    saved.push(input.value);
    localStorage.setItem("comments_" + postId, JSON.stringify(saved));

    location.reload();
}

window.addEventListener("DOMContentLoaded", loadComments);