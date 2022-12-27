let url = new URL(window.location.href);
let btn = document.createElement("button");
btn.innerHTML = "元画質でダウンロード";

btn.onclick = function () {
    let l = document.links;
    for (let i = 0; i < l.length; i++) {
        if (l[i].href.indexOf("Source.mp4") > -1) {
            let target = l[i].href

            let video_title = document.title.replace(" | Iwara", "")
            let author_class = document.querySelector('.username')
            let author = author_class.innerHTML
            let file_name = (author + " - " + video_title + ".mp4").replaceAll("/", "／")

            browser.runtime.sendMessage({
                "action": "download_file",
                "fileName": file_name,
                "remoteUrl": target,
            });

            break;
        }
    }
}

let parent = document.querySelector('.node-buttons')
parent.appendChild(btn);