function showSection(sectionId) {
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
}

function likePost(button) {
    const likesSpan = button.nextElementSibling;
    let likes = parseInt(likesSpan.innerText);
    likes++;
    likesSpan.innerText = likes;
}

function downloadImage(button) {
    const img = button.closest(".post").querySelector("img");
    const link = document.createElement("a");
    link.href = img.src;
    link.download = "image.jpg";
    link.click();
}

function generateCaption() {
    const captions = [
        "Chasing dreams one goal at a time ⚽",
        "Football is life ❤️",
        "Hard work, sweat, repeat 💪",
        "Moments that matter 📸"
    ];

    const randomCaption = captions[Math.floor(Math.random() * captions.length)];
    document.getElementById("generatedCaption").innerText = randomCaption;
}
