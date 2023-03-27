const unReadMessages = document.querySelectorAll(".active");
const unread = document.getElementById("notifications");
const markRead = document.getElementById("mark-read");

unread.innerText = unReadMessages.length;

unReadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("active");
        const newUnreadMessages = document.querySelectorAll(".active");
        unread.innerText = newUnreadMessages.length;
    })
})

markRead.addEventListener("click", () => {
    unReadMessages.forEach((message) => {
        message.classList.remove("active")
    })
    const newUnreadMessages = document.querySelectorAll(".active");
    unread.innerText = newUnreadMessages.length;
})