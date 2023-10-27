// You can add JavaScript code here for interactivity and functionality.
// For example, to add videos to the featured-videos section:
const featuredVideos = document.getElementById('featured-videos');

const video1 = document.createElement('iframe');
video1.setAttribute('src', 'https://www.youtube.com/embed/your-video-id-1');
video1.setAttribute('frameborder', '0');
video1.setAttribute('allowfullscreen', 'true');
featuredVideos.appendChild(video1);

const video2 = document.createElement('iframe');
video2.setAttribute('src', 'https://www.youtube.com/embed/your-video-id-2');
video2.setAttribute('frameborder', '0');
video2.setAttribute('allowfullscreen', 'true');
featuredVideos.appendChild(video2);
// JavaScript for adding videos to the "featured-videos" section
const featuredVideos = document.getElementById('featured-videos');

// Sample video sources, replace with your actual video sources
const videoSources = [
    'https://www.youtube.com/embed/your-video-id-1',
    'https://www.youtube.com/embed/your-video-id-2'
];

videoSources.forEach(source => {
    const video = document.createElement('iframe');
    video.setAttribute('src', source);
    video.setAttribute('frameborder', '0');
    video.setAttribute('allowfullscreen', 'true');
    featuredVideos.appendChild(video);
});
