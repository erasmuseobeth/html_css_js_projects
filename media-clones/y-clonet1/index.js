const videoCardcontainer = document.querySelector('.video-container');

let api_key = "";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'mostPopular',
    maxResult: 1,
    regionCode:'NG'
}))
.then(res => res.json())
.then(data => {
    // console.log(data);
    data.items.forEach(item  => {
        getChannelIcon(item);  
    });
})
.catch(err => console.log(err));


const getChannelIcon = (video_data) => {
    
    fetch(video_http + new URLSearchParams({
        key: api_key,
        part: 'mostPopular',
        id: video_data.snippet.channelId,
    }))
.then(res => res.json())
.then(data => {
    video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
    makeVideoCard(video_data);
})
}

const makeVideoCard = (data) => {
    videoCardcontainer.innerHTML += `
    <div class="video" onclick="location.href= 'https://youtube.com/watch?v=${data.id}'">
            <img src="${data.snippet.thumbnails.high.url}" alt="video" class="thumbnail">
            <div class="content">
                <img src="${data.channelThumbnail}" alt="" class="channel-icon">
                <div class="info">
                    <h4 class="title">${data.snippet.title}</h4>
                    <p class="channel-name">d${ata.snippet.channelTitle}</p>
                </div>
            </div>
        </div>
   ` ;
}


// searc bar functionality

const searchInput = document.querrySelector('search-bar');
const searchBtn = document.querySelector('.search_btn');
let searchLink = "https://www.youtube.com/results?search-query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})