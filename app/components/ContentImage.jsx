import SectionContainer from "./SectionContainer";
import { v4 as uuid } from "uuid";

const ContentImageData = [
  {
    id: uuid(),
    title: "Build Fast like your life depends on it (it could)",
    content:
      "Next.js boilerplate in 4 themes with pre-setup auth, payments and database. Still can't launch? You belong to the no code tools 😑",
    align: "right",
    video:
      "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/CodeFiles.mp4",
    poster:
      "https://via.placeholder.com/640x360.png?text=Build+Fast+like+your+life+depends+on+it", // Replace with actual poster image URL
    bgColor: "#1a1b26",
  },
  {
    id: uuid(),
    title: "A highly useful Google sheet? - rare but true!",
    content:
      "Curated list of tools and knowledge to save you search time, so you can focus on centering a <div> and changing button colors.",
    align: "left",
    video:
      "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/resource.mp4",
    poster:
      "https://via.placeholder.com/640x360.png?text=A+highly+useful+Google+sheet", // Replace with actual poster image URL
    bgColor: "#ffffff",
  },
  {
    id: uuid(),
    title: "Closest you come to creating a second brain",
    content:
      "Manage your workflow and access the knowledge center to put the product cycle in the right direction, unlike your life.",
    align: "right",
    video:
      "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/notionVideo.mp4",
    poster:
      "https://via.placeholder.com/640x360.png?text=Creating+a+second+brain", // Replace with actual poster image URL
    bgColor: "#202020",
  },
];

const ContentImage = () => {
  return (
    <SectionContainer className="process-items mt-16 space-y-16">
      {ContentImageData.map((item) => (
        <div
          id={item.id}
          key={item.id}
          className="process-item--container grid md:grid-cols-2 gap-y-8"
        >
          <div
            className={`process-item--image rounded-3xl ${
              item.align === "left" ? "md:order-1" : ""
            }`}
          >
            <div
              className="order-2 lg:order-1 flex overflow-hidden flex-1 justify-center rounded-xl shadow-xl ring-1 ring-gray-400/10 items-center h-[24rem] lg:h-auto"
              style={{ backgroundColor: item.bgColor }}
            >
              <video
                src={item.video}
                autoPlay
                loop
                muted
                preload="auto"
                poster={item.poster}
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div
            className={`process-item--content ${
              item.align === "left"
                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                : "md:pl-16 lg:pl-24 xl:pl-32 mr-auto"
            } my-auto content text-black/60`}
          >
            <h3 className="mb-6 h4 md:h3 font-semibold text-black">
              {item.title}
            </h3>
            <p className="">{item.content}</p>
            <ul className="process-item--list space-y-3">
              {item.listItems?.length &&
                item.listItems.map((listItem) => (
                  <li
                    id={listItem.id}
                    key={listItem.id}
                    className="inline-grid grid-flow-col-dense"
                  >
                    {listItem.content}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </SectionContainer>
  );
};

export default ContentImage;
