// For images with different sizes
import Image from "next/image";

// Services icons
import user_research from "./assets/user_research.png";
import design_strategy from "./assets/design_strategy.png";
import wireframing from "./assets/wireframing.png";

// Works images
import welcome_screen from "./assets/Welcome Screen.png";
import splash_screen from "./assets/Splash Screen.png";
import component from "./assets/component 1.png";
import homepage from "./assets/Home Page 3.png";

// Tools Icons
import adobe_xd from "./assets/adobe_xd.png";
import illustrator from "./assets/illustrator.png";
import after_effect from "./assets/after_effect.png";
import figma from "./assets/figma.png";
import slack from "./assets/slack.png";
import zeplin from "./assets/zeplin.png";

// Publications Images
import publication1 from "./assets/publication1.png";
import publication2 from "./assets/publication2.png";

export const services = [
  {
    id: 1,
    icon: user_research,
    title: "User Research",
    info: "Through the use of a suitable user  research  method, I strive to understand how users go about performing tasks and achieving goals",
  },
  {
    id: 1,
    icon: design_strategy,
    title: "Design Strategy",
    info: "I iteratively seek to redefine problems in an  attempt to identify better alternative strategies and solutions that might not be  instantly apparent.",
  },
  {
    id: 1,
    icon: wireframing,
    title: "Wireframing & Prototyping",
    info: "I ensure useful and usable user interfaces that work across multiple devices is an important part of the work we do on today's work",
  },
];

export const works = [
  {
    id: 1,
    app: "Mobile",
    app_styles: {
      background: "rgba(206, 211, 255, 1)",
      color: "rgba(51, 71, 255, 1)",
      fontSize: "0.8rem",
      borderRadius: "50px",
      padding: "0.5rem 1.5rem",
    },
    title: "EduSponsor",
    info: "EduSponsor is born out of a simple but empathetic idea that every deserving academic candidate irrespective of their social and financial status deserves a shot at their desired conventional exam.",
    case_styles: {
      background: "rgba(240, 71, 112, 1)",
      color: "white",
    },
    img1: <Image src={welcome_screen} height={526} width={246} alt="" />,
    img2: <Image src={splash_screen} height={509} width={242} alt="" />,
    img1_styles: {
      transform: "scaleX(2.5)",
      position: "absolute",
      right: "130px",
      bottom: "-7rem",
      width: "186px",
      height: "504px",
    },
    img2_styles: {
      position: "absolute",
      top: "0",
      right: "0",
      width: "170px",
    },
  },
  {
    id: 2,
    app: "Web",
    app_styles: {
      background: "rgba(255, 241, 251, 1)",
      color: "rgba(255, 107, 107, 1)",
      fontSize: "0.8rem",
      borderRadius: "50px",
      padding: "0.5rem 1.5rem",
    },
    title: "Rent4Less",
    info: "Rent4less is a rental scheme designed to provide a flexible way to rent homes. With this scheme, you can now spread out the payment for apartments in choice locations, by on a monthly basis",
    case_styles: {
      background: "rgba(3, 182, 107, 1)",
      color: "white",
    },
    img1: <Image src={component} height={186} width={318} alt="" />,
    img2: <Image src={homepage} height={550} width={450} alt="" />,
    img1_styles: {
      position: "absolute",
      top: "0",
      right: "6rem",
    },
    img2_styles: {
      transform: "scaleX(1.5)",
      position: "absolute",
      right: " 4rem",
      height: "440px",
      width: "338px",
      bottom: " -2rem",
    },
  },
];

export const tools = [
  {
    id: 1,
    icon: adobe_xd,
    tool: "Adobe XD",
    icon_styles: {
      width: "20px",
      height: "19.6px",
    },
  },
  {
    id: 2,
    icon: illustrator,
    tool: "Adobe Illustrator",
    icon_styles: {
      width: "20px",
      height: "20px",
    },
  },
  {
    id: 3,
    icon: after_effect,
    tool: "Adobe After-Effect",
    icon_styles: {
      width: "20px",
      height: "19.5px",
    },
  },
  {
    id: 4,
    icon: figma,
    tool: "Figma",
    icon_styles: {
      width: "34px",
      height: "34px",
    },
  },
  {
    id: 5,
    icon: slack,
    tool: "Slack",
    icon_styles: {
      width: "22px",
      height: "22px",
    },
  },
  {
    id: 6,
    icon: zeplin,
    tool: "Zeplin",
    icon_styles: {
      width: "25px",
      height: "25px",
    },
  },
];

export const publications = [
  {
    id: 1,
    img: publication1,
    title: "Designing Better Interface",
    content:
      "Design is the process of creating machines, interactive systems, buildings, vehicles, software, objects, etc. It user-centered, i.e. users are at the heart of the design. It is about creating solutions for people, physical items, or abstract systems to address a need or a problem. Simply put, Design is a science of creating things: from inception to delivery.",
  },
  {
    id: 2,
    img: publication2,
    title: "UI, UX:What's the difference?",
    content:
      "The line between UX and UI is a pretty thin one; it is indeed so thin that it is arguably one of the most discussed issues in recent times. Although there is a plethora of information on the internet seeking to shed more light on the UX and UI and corresponding job descriptions and requirements of these fields, the boundary between UI and",
  },
];
