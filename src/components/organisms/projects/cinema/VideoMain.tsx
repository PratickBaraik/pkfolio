import React from "react";

/* ================================
   Types (Scalable + Strict)
================================ */

type Video = {
  id: string;
  title: string;
  url: string;
};

type Section = {
  id: string;
  title: string;
  videos: Video[];
};

/* ================================
   Reusable Video Card
================================ */

const VideoCard: React.FC<Video> = ({ title, url }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Video Frame */}
      <div
        className="
          aspect-video
          overflow-hidden
          rounded-2xl
          bg-surface
          border border-border
          shadow-soft
          hover:shadow-medium
          transition-shadow duration-300
        "
      >
        <iframe
          src={url}
          title={title}
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Title */}
      <h3
        className="
          text-lg
          font-semibold
          text-primary
          text-center
          tracking-tight
        "
      >
        {title}
      </h3>
    </div>
  );
};

/* ================================
   Reusable Section Component
================================ */

const VideoSection: React.FC<Section> = ({ title, videos }) => {
  return (
    <section className="w-full py-16">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <h2
          className="
            text-2xl
            font-bold
            mb-10
            text-primary
            tracking-tight
          "
        >
          {title}
        </h2>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================================
   Main Component
================================ */

const VideoSections: React.FC = () => {
  const sections: Section[] = [
    {
      id: "section-1",
      title: "Documentaries",
      videos: [
        {
          id: "v1",
          title: "The Love of Birth Place",
          url: "https://www.youtube.com/embed/LDeO4wemfJ4?si=1i2dQQipEGQRKHvF",
        },
        {
          id: "v2",
          title: "The Art of Making Chyosam",
          url: "https://www.youtube.com/embed/ZkTMdSoaOb4?si=0ltEJeWUWJWr18xX",
        },
      ],
    },
    {
      id: "section-2",
      title: "Music Videos",
      videos: [
        {
          id: "v3",
          title: "Need Your Love",
          url: "https://www.youtube.com/embed/6tK6V5ZkyAU?si=iX6dcThJCgp2f4qc",
        },
        {
          id: "v4",
          title: "Soft Lips",
          url: "https://www.youtube.com/embed/SMdfmuRl_v0?si=Dcls-sfOm5QB0P55",
        },
      ],
    },
    {
      id: "section-3",
      title: "Passion Projects",
      videos: [
        {
          id: "v5",
          title: "Inside My Creative Workspace",
          url: "https://www.youtube.com/embed/JmV4lXwZ8PY?si=KWejhXW-ki6ohMs5",
        },
        {
          id: "v6",
          title: "Starting Again",
          url: "https://www.youtube.com/embed/_eXcw4FKubI?si=X-JLUEnwGbZ3R_SZ",
        },
      ],
    },
    {
      id: "section-4",
      title: "Weddings",
      videos: [
        {
          id: "v7",
          title: "Sunit & Nancy",
          url: "https://www.youtube.com/embed/YpFOkyiyToE?si=hAIWpDqiuNbc0d4A",
        },
        {
          id: "v8",
          title: "Juliet & Stephen",
          url: "https://www.youtube.com/embed/7JpvYrWKNH4?si=4iej-vtEZbgIeDjs",
        },
      ],
    },
  ];

  return (
    <div className="bg-primary transition-colors duration-300">
      {sections.map((section) => (
        <VideoSection key={section.id} {...section} />
      ))}
    </div>
  );
};

export default VideoSections;
