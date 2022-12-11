import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-parallax";
import Image8 from "../../Images/8.jpg";
import "./styles/Tournament.css";
import To_list from "./To_list";
import To_listPast from "./To_listPast";
import { Link } from "react-router-dom";
const Tournament = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const textScrollVariantsright = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };

  const controls1 = useAnimation();
  const [ref1, inView1] = useInView();

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls1, inView1]);

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView();

  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    }
  }, [controls3, inView3]);

  const [Past, setPast] = useState(false);
  const To_Listt = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1669892531.png&w=1920&q=50",
      "FIFA",
      "FIFA 23 Seasons Playstation 5",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "1st Dec 2022",
    ],
  ];
  const To_Listt1 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1669892629.png&w=1920&q=50",
      "FIFA",
      "FIFA 23 Seasons Playstation 4",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "1st Dec 2022",
    ],
  ];
  const To_Listt2 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1640020653.png&w=1920&q=50",
      "LEAGUE OF LEGEND",
      "LEAGUE OF LEGEND 1VS1 Daily Tournament 6",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "7th Dec 2022",
    ],
  ];
  const To_Listt3 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1649699353.png&w=1920&q=50",
      "COD MOBILE",
      "COD Mobile Daily Tournament 8",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "3rd Dec 2022",
    ],
  ];
  const To_Listt4 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1658011366.png&w=1920&q=50",
      "ROCKET LEAGUE",
      "Rocket League Daily Tournament 8",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "5th Dec 2022",
    ],
  ];
  const To_Listt5 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1659970329.png&w=1920&q=50",
      "APEX LEGENDS",
      "Apex Legends Daily Tournament 8",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "6th Dec 2022",
    ],
  ];
  const To_Listt7 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1659970877.png&w=1920&q=50",
      "MOBILE LEGENDS",
      "Mobile Legends: Bang Bang Daily Tournament 7",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "9th Dec 2022",
    ],
  ];
  const To_Listt6 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1628533787.png&w=1920&q=50",
      "COUNTER STRIKE",
      "CS:GO 1v1 Daily Tournament 7",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "8th Dec 2022",
    ],
  ];
  const past = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1661365826.png&w=1920&q=50",
      "SUPER SMASH BROS",
      "Super Smash Bros. Winter Edition 3",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "26th Nov 2022",
    ],
  ];
  const past1 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1639584423.png&w=1920&q=50",
      "LUDO",
      "LUDO Daily Tournament 9",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "26th Nov 2022",
    ],
  ];
  const past2 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1658346166.png&w=1920&q=50",
      "BRAWL STARS",
      "Brawl Stars Bounty Daily Tournaments 6",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "26th Nov 2022",
    ],
  ];
  const past3 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1638886184.png&w=1920&q=50",
      "UNO",
      "Uno 1v1 Winter Cup 2",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "26th Nov 2022",
    ],
  ];
  const past4 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1649702534.png&w=1920&q=50",
      "8 BALL POOL",
      "8 Ball Pool Daily Tournament 8",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "1st Dec 2022",
    ],
  ];
  const past5 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1656107375.png&w=1920&q=50",
      "CLASH ROYALE",
      "Clash Royale Draft Battle Daily Tournament 2",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "30th Nov 2022",
    ],
  ];
  const past6 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1654713451.png&w=1920&q=50",
      "PUBG",
      "PUBG Battle Royale Daily Tournament 8",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "29th Nov 2022",
    ],
  ];
  const past7 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1638884894.png&w=1920&q=50",
      "FORTNITE",
      "Fortnite BoxFight Daily Tournament 8",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "29th Nov 2022",
    ],
  ];
  const past8 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1666960133.png&w=1920&q=50",
      "FIFA",
      "FIFA Seasons 2023 Daily Tournament 2",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "28th Nov 2022",
    ],
  ];
  const past9 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1658346166.png&w=1920&q=50",
      "BRAWL STARS",
      "Brawl Stars Autumn Edition",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "19th Nov 2022",
    ],
  ];
  const past10 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1658011366.png&w=1920&q=50",
      "ROCKET LEAGUE",
      "Rocket League 1v1 Autumn Edition",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "19th Nov 2022",
    ],
  ];
  const past11 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1638886184.png&w=1920&q=50",
      "UNO",
      "Uno 1v1 Daily Tournament 3",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "24th Nov 2022",
    ],
  ];
  const past12 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1659970877.png&w=1920&q=50",
      "MOBILE LEGENDS",
      "Mobile Legends: Bang Bang Daily Tournament 6",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "22nd Nov 2022",
    ],
  ];
  const past13 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1638884894.png&w=1920&q=50",
      "FORTNITE",
      "Fortnite BoxFight Daily Tournament 7",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "19th Nov 2022",
    ],
  ];
  const past14 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1652886544.jpg&w=1920&q=50",
      "NEWSTATE",
      "NewState Battle Royale Autumn Edition",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "12th Nov 2022",
    ],
  ];
  const past15 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1638884894.png&w=1920&q=50",
      "FORTNITE",
      "Fortnite BoxFight Autumn Edition",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "12th Nov 2022",
    ],
  ];
  const past16 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1666960133.png&w=1920&q=50",
      "FIFA",
      "FIFA FUT 2023 Daily Tournament",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "17th Nov 2022",
    ],
  ];
  const past17 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1649699353.png&w=1920&q=50",
      "COD MOBILE",
      "COD Mobile Daily Tournament 7",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "16th Nov 2022",
    ],
  ];
  const past18 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1649702534.png&w=1920&q=50",
      "8 BALL POOL",
      "8 Ball Pool Daily Tournament 7",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "14th Nov 2022",
    ],
  ];
  const past19 = [
    [
      "https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fcard1656107375.png&w=1920&q=50",
      "CLASH ROYALE",
      "Clash Royale Double Elixer Daily Tournament",
      "https://kafugames.com/_next/image?url=%2Fimages%2Fdate.png&w=32&q=75",
      "Registration Starts",
      "14th Nov 2022",
    ],
  ];
  const parallaxImage3 = {
    bgImageStyle: {
      height: "100%",
      width: "100%",
    },
  };
  return (
    <div className="To_main">
      <div className="To_2nd">
        <motion.div
          ref={ref3}
          variants={textScrollVariantsright}
          initial="hidden"
          className="To_4rd"
          animate={controls3}
        >
          <Parallax {...parallaxImage3} strength={600} bgImage={Image8}>
            <section className="Images-5-section">
              <div class="waviy-Page4"></div>
            </section>
          </Parallax>
        </motion.div>
        <motion.div
          ref={ref1}
          variants={textScrollVariantsright}
          initial="hidden"
          className="To_3rd"
          animate={controls1}
        >
          <h1 className="STRATEGIZE">STRATEGIZE. PLAY. CONQUER.</h1>
          <h1 className="UNLEASH">UNLEASH YOUR INNER CHAMPION</h1>
        </motion.div>
      </div>
      <div className="To_4rd">
        <h1 className="FEATUREDd">FEATURED TOURNAMENTS</h1>
        <div className="To_5rd">
          <Link to="/FIFA">
            <To_list ToList={To_Listt} />
          </Link>
          <Link to="/FIFAPs">
            <To_list ToList={To_Listt1} />
          </Link>
          <Link to="/Lol">
            <To_list ToList={To_Listt2} />
          </Link>
          <Link to="/Cod">
            <To_list ToList={To_Listt3} />
          </Link>
          <Link to="/Rocket">
            <To_list ToList={To_Listt4} />
          </Link>
          <Link to="/Cssgo">
            <To_list ToList={To_Listt6} />
          </Link>
          <Link to="/Mb_lol">
            <To_list ToList={To_Listt7} />
          </Link>
        </div>
        <div className="Past_flex">
          <div className="contenttt">
            <h1 className="YieShop">PAST TOURNAMENTS</h1>
          </div>
          <svg
            onClick={() => {
              setPast(true);
            }}
            className="fi"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 860.000000 1060.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,1060.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path
                d="M852 10191 l-93 -6 303 -345 c814 -930 2916 -3282 3161 -3538 39 -40
75 -71 82 -68 16 6 161 164 688 749 1203 1337 2837 3179 2837 3198 0 13 -284
19 -890 19 l-635 -1 -640 -715 c-689 -771 -1198 -1337 -1303 -1448 l-65 -70
-36 41 c-20 22 -218 242 -441 489 -697 772 -1351 1510 -1460 1646 l-45 57
-685 -1 c-377 -1 -727 -4 -778 -7z"
              />
              <path
                d="M828 7283 c-32 -2 -58 -7 -58 -11 1 -35 3372 -3816 3517 -3945 20
-17 21 -17 59 26 22 24 163 180 314 348 775 855 2703 3024 3080 3464 l94 110
-64 6 c-36 4 -380 7 -765 7 l-700 1 -335 -376 c-1014 -1138 -1657 -1846 -1674
-1840 -32 10 -1531 1674 -1860 2065 l-129 152 -711 -2 c-391 -1 -737 -3 -768
-5z"
              />
              <path
                d="M870 4363 c-41 -2 -79 -8 -84 -13 -4 -4 101 -133 240 -292 897 -1024
3117 -3505 3243 -3622 l31 -30 36 35 c54 50 486 526 919 1009 786 879 2568
2887 2573 2901 2 5 -127 9 -306 9 -170 0 -511 3 -758 6 l-449 6 -290 -328
c-341 -385 -793 -890 -1235 -1379 -423 -468 -480 -529 -490 -533 -25 -9 -1715
1888 -1907 2141 l-74 97 -687 -2 c-378 -1 -721 -4 -762 -5z"
              />
            </g>
          </svg>
        </div>
        {Past && (
          <>
            <div className="To_5rd">
              <To_listPast ToList={past} />
              <To_listPast ToList={past1} />
              <To_listPast ToList={past2} />
              <To_listPast ToList={past3} />
              <To_listPast ToList={past4} />
              <To_listPast ToList={past5} />
              <To_listPast ToList={past6} />
              <To_listPast ToList={past7} />
              <To_listPast ToList={past8} />
              <To_listPast ToList={past9} />
              <To_listPast ToList={past10} />
              <To_listPast ToList={past11} />
              <To_listPast ToList={past12} />
              <To_listPast ToList={past13} />
              <To_listPast ToList={past14} />
              <To_listPast ToList={past15} />
              <To_listPast ToList={past16} />
              <To_listPast ToList={past17} />
              <To_listPast ToList={past18} />
              <To_listPast ToList={past19} />
            </div>
            <div className="Past_flex">
              <h1 className="PAST">SHOW LESS</h1>
              <svg
                onClick={() => {
                  setPast(false);
                }}
                className="fi"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 256 256"
              >
                <defs></defs>
                <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                  <path
                    d="M 43.779 0.434 L 12.722 25.685 c -0.452 0.368 -0.714 0.92 -0.714 1.502 v 19.521 c 0 0.747 0.43 1.427 1.104 1.748 c 0.674 0.321 1.473 0.225 2.053 -0.246 L 45 23.951 l 29.836 24.258 c 0.579 0.471 1.378 0.567 2.053 0.246 c 0.674 -0.321 1.104 -1.001 1.104 -1.748 V 27.187 c 0 -0.582 -0.263 -1.134 -0.714 -1.502 L 46.221 0.434 C 45.51 -0.145 44.49 -0.145 43.779 0.434 z"
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                  />
                  <path
                    d="M 43.779 41.792 l -31.057 25.25 c -0.452 0.368 -0.714 0.919 -0.714 1.502 v 19.52 c 0 0.747 0.43 1.427 1.104 1.748 c 0.674 0.321 1.473 0.225 2.053 -0.246 L 45 65.308 l 29.836 24.258 c 0.579 0.471 1.378 0.567 2.053 0.246 c 0.674 -0.321 1.104 -1.001 1.104 -1.748 V 68.544 c 0 -0.583 -0.263 -1.134 -0.714 -1.502 l -31.057 -25.25 C 45.51 41.214 44.49 41.214 43.779 41.792 z"
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                  />
                </g>
              </svg>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tournament;
