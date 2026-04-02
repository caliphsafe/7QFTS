import { celebrityVideos } from "@/lib/celebrityVideos";

function getEmbedUrl(url: string) {
  if (url.includes("youtube.com/shorts/")) {
    const id = url.split("shorts/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  return url;
}

export default function CelebrityVideoGrid() {
  return (
    <div id="featured-videos" className="video-grid">
      {celebrityVideos.map((video) => (
        <article key={video.name} className="video-card">
          <div className="video-frame">
            <iframe
              src={getEmbedUrl(video.url)}
              title={video.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="video-meta">
            <p className="video-label">Featured Response</p>
            <h3 className="video-name">{video.name}</h3>
            <a
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="video-link"
            >
              Watch on YouTube
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
