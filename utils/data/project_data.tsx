import minehut from "../../public/assets/img/minehut.jpg";
import skript from "../../public/assets/img/skript.jpg";
const imgproject1 = [minehut, skript];
import rstudio from "../../public/assets/img/studio.png";
import lua from "../../public/assets/img/lua.png";
const imgproject2 = [rstudio, lua];
import ubuntu from "../../public/assets/img/ubuntu-logo.jpg";
import putty from "../../public/assets/img/putty.png";
const imgproject3 = [ubuntu, putty];
import unity from "../../public/assets/img/unity.png";
import game from "../../public/assets/img/game.png";
const imgproject4 = [unity, game];
import hcj from "../../public/assets/img/hcj.jpg";
import snekk from "../../public/assets/img/snekk.png";
const imgproject5 = [hcj, snekk];
import node from "../../public/assets/img/node.svg";
import next from "../../public/assets/img/next.png";
import bootstrap from "../../public/assets/img/bootstrap.svg";
const imgproject6 = [node, next, bootstrap];
import skyblock from "../../public/assets/img/skyblock.png";
import hypskyapi from "../../public/assets/img/hypskyapi.png";
import apidoc from "../../public/assets/img/api.png";
const imgproject7 = [skyblock, hypskyapi, apidoc];
import arduinoide from "../../public/assets/img/arduinoide.png";
import esp32 from "../../public/assets/img/esp32.png";
const imgproject8 = [arduinoide, esp32];

export const projectsData = [
  {
    id: 1,
    name: "Custom minecraft commands using Skript",
    description:
      "My first programming language is Skript, which is a Minecraft plugin that allows you to create custom commands and features for your Minecraft server. When I first started, I didn't know how to write a Minecraft plugin in Java, so I turned to a tutorial to simplify it. This led me to discover and use Skript. With Skript, I created custom commands that allowed me to use special items, save coordinates, and teleport back to those saved coordinates",
    tools: ["Spigot", "Skript"],
    date: "01/12/2017-ish",
    repo: "",
    demo: "",
    image: imgproject1,
  },
  {
    id: 2,
    name: "Game development with Roblox Studio",
    description:
      "As a kid with a lot of free time, I enjoyed playing with Nerf guns, playing football, and gaming. One of the games I played was Roblox, which also offered an advanced game engine for developing games. This naturally sparked my interest in game development. After focusing my creativity on developing smaller games, I became better in modeling game objects and scripting in Lua. This experience helped me understand other programming languages more quickly, such as JavaScript and PHP",
    tools: ["Roblox studio", "Lua"],
    date: "26/09/2017 - 12/05/2018",
    repo: "",
    demo: "",
    image: imgproject2,
  },
  {
    id: 3,
    name: "Server Hosting",
    description:
      "To host servers for different games (Minecraft, Terraria, TF2), I decided to use a bare-bones PC my father gave me instead of relying on free, crappy hosting services. This decision led me to install and learn Linux Ubuntu as the operating system to optimize performance. This also helped me to host my own website in the future",
    tools: ["Linux", "Putty"],
    date: "23/12/2020 - now",
    repo: "",
    demo: "",
    image: imgproject3,
  },
  {
    id: 4,
    name: "Unity 2D Platformer",
    description:
      "For a school project, I created a 2D platformer using the Unity engine. This project allowed me to apply my existing game development knowledge and make progress in learning C#",
    tools: ["Unity"],
    date: "07/06/2021 - 11/06/2021",
    repo: "",
    demo: "",
    image: imgproject4,
  },
  {
    id: 5,
    name: "Javascript Snake",
    description:
      "During my studies at KW1C, I learned more about web development, learning HTML, CSS, and JavaScript. This led me to create my own websites, moving further than goofing around on W3Schools. To further enhance my skills, I followed a YouTube series to create a Snake game using these tools",
    tools: ["Html", "Css", "Javascript"],
    date: "09/09/2022 - 10/09/2022",
    repo: "",
    demo: "Javascript Snake demo",
    image: imgproject5,
  },
  {
    id: 6,
    name: "Portfolio website",
    description:
      "For internships, I created and hosted this portfolio website to showcase my knowledge and skills to recruiters. I initially launched this website on October 20, 2023. Later, I reworked it into a newer, nicer, (and more responsive) version on August 6, 2024",
    tools: [
      "Html",
      "Css",
      "Javascript",
      "Node.js",
      "Next.js",
      "Bootstrap 5",
      "Bootstrap studio",
    ],
    date: "20/10/2023 - 06/08/2024",
    repo: "",
    demo: "",
    image: imgproject6,
  },
  {
    id: 7,
    name: "HypSkyApi",
    description:
      "For the game Hypixel Skyblock, I created a website that called the public Skyblock API to fetch all the auction data of items sold in the game's economy. I used this data to make a profit in game. The project started with a large Excel file that my friends and I made. The file grew so big that it took over 5 minutes to load all the new data when opened. To address this, I volunteered to create a separate tool with new features, outside of the Excel file. I later reworked this project to learn React and Bootstrap, which you can visit when clicking on the Repo link or see the demo on said demo link",
    tools: [
      "Html",
      "Javascript",
      "Typescript",
      "Node.js",
      "React.js",
      "Bootstrap 5",
    ],
    date: "22/10/2023 - 10/06/2024",
    repo: "Github Hypskyapi-react",
    demo: "hypskyapi",
    image: imgproject7,
  },
  {
    id: 8,
    name: "Rubber ducky USB",
    description:
      "Long before I started programming, I heard about hacking, which sparked my interest. When I revisited this interest, I began by creating a simple hacking tool using an Arduino ESP32. This initial project led me to develop a device that could communicate without sending suspicious activity. I put this project on hold until I got a Raspberry Pi Pico to continue the work",
    tools: ["Arduino IDE", "C++"],
    date: "23/05/2024 - 25/05/2024 (Or the future)",
    repo: "",
    demo: "",
    image: imgproject8,
  },
];
