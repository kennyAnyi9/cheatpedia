import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  //   const interSemiBold = fetch(
  //     new URL("./Inter-SemiBold.ttf", import.meta.url)
  //   ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="mt-2 mb-4 text-3xl  font-bold">
          Cheat⿳
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-blue-600 via-pink-600 to-yellow-400">
            ⌘
          </span>
          pedia.xyz
        </h1>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      //   fonts: [
      //     {
      //       name: 'Inter',
      //       data: await interSemiBold,
      //       style: 'normal',
      //       weight: 400,
      //     },
      //   ],
    }
  );
}
