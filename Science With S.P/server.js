// Hardcoded admin credentials
const adminEmail = 'admin@sciencewithsp.com';
const adminPassword = 'admin123';

// Elements
const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');
const addVideoForm = document.getElementById('addVideoForm');
const addVideoSection = document.getElementById('addVideoSection');
const videoList = document.getElementById('video-list');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Manage user authentication
let currentUser = null;

function renderUserInterface() {
    const signInForm = document.getElementById('signInForm');
    const userDetails = document.getElementById('userDetails');
    const userEmailSpan = document.getElementById('userEmail');

    if (currentUser) {
        signInForm.style.display = 'none';
        userDetails.style.display = 'block';
        userEmailSpan.textContent = currentUser.email;
        videoList.style.display = 'block';

        // If admin is logged in, show the video upload form
        if (currentUser.email === adminEmail) {
            addVideoSection.style.display = 'block';
        }
    } else {
        signInForm.style.display = 'block';
        userDetails.style.display = 'none';
        addVideoSection.style.display = 'none';
        videoList.style.display = 'none';
    }
}

// Sign in
signInBtn.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Simple authentication check
    if (email === adminEmail && password === adminPassword) {
        currentUser = { email, role: 'admin' };
        alert('Logged in as Admin');
    } else {
        currentUser = { email, role: 'user' };
        alert('Logged in as User');
    }

    renderUserInterface();
});

// Sign out
signOutBtn.addEventListener('click', () => {
    currentUser = null;
    renderUserInterface();
});

// Load videos from local storage
function loadVideos() {
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    videoList.innerHTML = '';

    storedVideos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');

        videoItem.innerHTML = `
            <video controls>
                <source src="${video.url}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
            </div>
        `;

        videoList.appendChild(videoItem);
    });
}

// Add new video
addVideoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const videoTitle = document.getElementById('videoTitle').value;
    const videoDescription = document.getElementById('videoDescription').value;
    const videoUrl = document.getElementById('videoUrl').value;

    const newVideo = {
        title: videoTitle,
        description: videoDescription,
        url: videoUrl
    };

    // Save videos in local storage
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    storedVideos.push(newVideo);
    localStorage.setItem('videos', JSON.stringify(storedVideos));

    loadVideos();
    addVideoForm.reset();
});

// Initial render
renderUserInterface();
loadVideos();
