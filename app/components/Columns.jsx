import { FaStar } from "react-icons/fa";
import SectionContainer from "./SectionContainer";
import { v4 as uuid } from "uuid";
import { PiFinnTheHumanLight } from "react-icons/pi";
const ColumnData = [
  {
    id: uuid(),
    title: "Bonnie Green",
    icon: "carbon:user-avatar-filled-alt",
    content:
      "Indie Hacker Kit is a game-changer for developers like me. It provides an exceptional collection of templates, roadmaps, and boilerplate code that has transformed the way I approach SaaS development.",
    Image: "https://randomuser.me/api/portraits/women/44.jpg",
    designation: "Developer at Open AI",
  },
  {
    id: uuid(),
    title: "John Doe",
    icon: "carbon:user-avatar-filled-alt",
    content:
      "Indie Hacker Kit is a game-changer! It provides a complete set of templates, roadmaps, and boilerplate code that streamlined our SaaS development process. We launched our product in just 30 minutes.",
    Image: "https://randomuser.me/api/portraits/men/1.jpg",
    designation: "Product Manager at XYZ Corp",
  },
  {
    id: uuid(),
    title: "Alice Smith",
    icon: "carbon:user-avatar-filled-alt",
    content:
      "I'm amazed by Indie Hacker Kit's versatility. As a designer, I appreciate the beautifully designed templates it offers, which allowed me to create stunning UIs for our SaaS product in no time.",
    Image: "https://randomuser.me/api/portraits/women/12.jpg",
    designation: "Designer at Creative Solutions",
  },
  {
    id: uuid(),
    title: "Bob Johnson",
    icon: "carbon:user-avatar-filled-alt",
    content:
      "Our SaaS startup wouldn't have come this far without Indie Hacker Kit. It saved us countless hours by providing ready-made roadmaps and boilerplate code. Highly recommended!",
    Image: "https://randomuser.me/api/portraits/men/25.jpg",
    designation: "CEO at Tech Innovators",
  },
];
const Columns = () => {
  return (
    <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
      {ColumnData.map((item) => (
        <div
          id={item.id}
          key={item.id}
          className="benefits-list--item text-[#737373] text-left"
        >
          <PiFinnTheHumanLight className="mb-4 w-10 h-10 my-2" />
          <h3 className="text-xl mb-2 font-medium text-black">{item.title}</h3>
          <p>{item.content}</p>
          <o className="flex">
            <FaStar className="h-10 mr-1 text-secondary-500" />
            <FaStar className="h-10 mr-1 text-secondary-500" />
            <FaStar className="h-10 mr-1 text-secondary-500" />
            <FaStar className="h-10 mr-1 text-secondary-500" />
            <FaStar className="h-10 mr-1 text-secondary-500" />
          </o>
        </div>
      ))}
    </SectionContainer>
  );
};

export default Columns;
