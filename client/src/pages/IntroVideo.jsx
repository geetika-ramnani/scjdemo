import React from "react";

export default function IntroVideo({ onVideoEnd }) {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <video
        className="w-full h-full object-cover"
        src="/scj-intro.mp4"
        autoPlay
        muted
        onEnded={onVideoEnd}
        playsInline
        preload="auto"
      />
    </div>
  );
}
