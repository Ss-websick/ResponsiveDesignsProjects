
let videosHTML = '';

videos.forEach((video) => {
  videosHTML += `
  <div class="channel-preview">

    <div class="video-thumbnail"><a href="https://www.youtube.com/watch?v=n2RNcPRtAiY">
      <img class="thumbnail" src="${video.thumbnail}" alt=""></a>
      <div class="video-time">${video.videoTime}</div>
    </div>
    <div class="video-preview">
      <div class="channel-profile"><a href="https://www.youtube.com/c/mkbhd"><img class="channel-profile-image" src="${video.profilePicture}"></a></div>
      <div class="video-description">
        <div class="content-info">
          <p class="video-title">${video.videoTitle}</p></div>
        <div class="channel-name">${video.videoAuthor}</div>
        <div class="channel-stats">${video.videoStats}</div>
      </div>
    </div>

  </div>
  `;
});

document.querySelector('.js-youtube-grid').innerHTML = videosHTML;