import Image from "next/image";
import Link from "next/link";
import videosData from "@/data/videos.json";
import channelsData from "@/data/channels.json";
import { Videos } from "@/app/types/videos";
import { Channels } from "@/app/types/channel";
import Thumbnail from "../components/Thumbnail";

export default function Page() {
  const videos: Videos = videosData || [];
  const channels: Channels = channelsData || [];

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pb-10">
      {Object.entries(videos).map(([url, { title, preview, channel }]) => (
        <Link href={`/watch?v=${url}`} key={url} title={title}>
          <Thumbnail url={url} preview={preview} />
          <div className="flex mt-3 gap-3">
            <Link href={channel} className="z-10" title="">
              <div className="size-9">
                <Image
                  src={`${channels[channel]["img"]}`}
                  alt={`${channels[channel]["title"]} logo`}
                  width={36}
                  height={36}
                  className="rounded-full"
                  priority
                />
              </div>
            </Link>
            <div>
              <h2 className="font-semibold text-sm line-clamp-2">{title}</h2>
              <Link href={channel} title={channels[channel]["title"]} className="z-10">
                <span className="text-xs text-neutral-500">{channels[channel]["title"]}</span>
              </Link>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
