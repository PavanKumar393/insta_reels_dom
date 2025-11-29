let reelData = [
  {
    videoUrl: "./newReels/vid-8.mp4",
    profilePicUrl: "https://i.pravatar.cc/300?img=1",
    likesCount: 19828,
    isLiked: false,
    isFollowed: false,
    shareCount: 120,
    commentCount: 56,
    repostCount: 18,
    username: "tech_pavan",
    description: `Building a clean UI\nUsing React JS\nDay 1 Progress`,
  },
  {
    videoUrl: "./newReels/vid-1.mp4",
    profilePicUrl: "https://example.com/profile2.jpg",
    isLiked: true,
    likesCount: 1928,
    isFollowed: true,
    shareCount: 340,
    commentCount: 88,
    repostCount: 42,
    username: "dev_daily",
    description: `Coding morning vibes\nFull-stack learning\nConsistency wins`,
  },
  {
    videoUrl: "./newReels/vid-3.mp4",
    profilePicUrl: "https://example.com/profile3.jpg",
    isLiked: false,
    likesCount: 1428,
    isFollowed: true,
    shareCount: 89,
    commentCount: 31,
    repostCount: 10,
    username: "ui_works",
    description: `Smooth animations\nModern design\nReact magic`,
  },
  {
    videoUrl: "./newReels/vid-4.mp4",
    profilePicUrl: "https://example.com/profile4.jpg",
    likesCount: 768,
    isLiked: true,
    isFollowed: false,
    shareCount: 210,
    commentCount: 47,
    repostCount: 27,
    username: "frontend_x",
    description: `CSS mastery\nFlex vs Grid\nPerfect layout`,
  },
  {
    videoUrl: "./newReels/vid-5.mp4",
    profilePicUrl: "https://example.com/profile5.jpg",
    likesCount: 555,
    isLiked: false,
    isFollowed: false,
    shareCount: 55,
    commentCount: 12,
    repostCount: 6,
    username: "code_with_art",
    description: `Creative coding\nSmooth transitions\nUI that pops`,
  },
  {
    videoUrl: "./newReels/vid-6.mp4",
    profilePicUrl: "https://example.com/profile6.jpg",
    likesCount: 73892,
    isLiked: true,
    isFollowed: true,
    shareCount: 410,
    commentCount: 102,
    repostCount: 51,
    username: "daily_logic",
    description: `JavaScript tips\nArrow functions\nClean code`,
  },
  {
    videoUrl: "./newReels/vid-7.mp4",
    profilePicUrl: "https://example.com/profile7.jpg",
    likesCount: 182856,
    isLiked: false,
    isFollowed: true,
    shareCount: 1176,
    commentCount: 2783,
    repostCount: 792,
    username: "design_flow",
    description: `Color harmony\nSpacing balance\nAesthetic UI`,
  },
  {
    videoUrl: "./newReels/vid-2.mp4",
    profilePicUrl: "https://example.com/profile8.jpg",
    likesCount: 6828,
    isLiked: true,
    isFollowed: false,
    shareCount: 134,
    commentCount: 45,
    repostCount: 19,
    username: "react_wizard",
    description: `Hooks explained\nuseEffect magic\nReal examples`,
  },
  {
    videoUrl: "./newReels/vid-9.mp4",
    profilePicUrl: "https://example.com/profile9.jpg",
    likesCount: 928,
    isLiked: false,
    isFollowed: false,
    shareCount: 99,
    commentCount: 17,
    repostCount: 9,
    username: "devmotion",
    description: `Motion effects\nSmooth UI\nPro level`,
  },
  {
    videoUrl: "./newReels/vid-10.mp4",
    profilePicUrl: "https://example.com/profile10.jpg",
    likesCount: 828,
    isLiked: true,
    isFollowed: true,
    shareCount: 520,
    commentCount: 210,
    repostCount: 66,
    username: "pavan_builds",
    description: `Day 10 streak\nBuilding apps\nNever give up`,
  },
];

let allReels = document.querySelector("#all-reels");

let reels = document.querySelector(".reels");

function reelsFun() {
  let addReels = "";
  reelData.forEach((elem, index) => {
    let reelUi = `<div class="reels">
          <video src=${elem.videoUrl} autoplay loop muted></video>
          <div class="left-part">
            <div id = ${index} class="like">
              <h1>${
                elem.isLiked
                  ? '<i class="ri-heart-fill"></i>'
                  : '<i class="ri-heart-line"></i>'
              }</h1>
              <h3>${elem.likesCount}</h3>
            </div>
            <div class="comment">
              <h1><i class="ri-chat-1-line"></i></h1>
              <h3>${elem.commentCount}</h3>
            </div>
            <div class="repost">
              <h1><i class="ri-recycle-line"></i></h1>
              <h3>${elem.repostCount}</h3>
            </div>
            <div class="share">
              <h1><i class="ri-share-forward-line"></i></h1>
              <h3>${elem.shareCount}</h3>
            </div>
          </div>

          <div class="bottom-part">
            <div class="bottom-top">
              <div>
                <div class="photo">
                </div>
                <h1>${elem.username}</h1>
                <button id = ${index} class ='follow'>
                ${elem.isFollowed ? "Following" : "Follow"}</button>
              </div>
              <h1><i class="ri-more-2-line"></i></h1>
            </div>

            <h1>${elem.description}
             
            </h1>
          </div>
        </div>`;

    addReels = addReels + reelUi;

    allReels.innerHTML = addReels;

    // allReels.innerHTML = reelUi;
    // console.log(addReels ,"_______________________________",index)
  });
}

reelsFun();

allReels.addEventListener("click", (dets) => {
  if (dets.target.className == "like") {
    console.log("like success");

    if (!reelData[dets.target.id].isLiked) {
      reelData[dets.target.id].isLiked = true;
      reelData[dets.target.id].likesCount++;
    } else {
      reelData[dets.target.id].isLiked = false;
      reelData[dets.target.id].likesCount--;
    }

    console.log(reelData[dets.target.id].isLiked);
  }

  if (dets.target.className == "follow") {
    if (!reelData[dets.target.id].isFollowed) {
      reelData[dets.target.id].isFollowed = true;
    } else {
      reelData[dets.target.id].isFollowed = false;
    }
  }
  reelsFun();
});
