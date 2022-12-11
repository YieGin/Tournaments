import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Parallax } from "react-parallax";
import Image7 from "../../../Images/7.png";

const Mb_lol = () => {
  const [seconds, setSeconds] = useState(60);
  const [minutes, setMinutes] = useState(0);
  const [Hours, setHours] = useState(7);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(60);
      }
      if (minutes === 0) {
        setHours(Hours - 1);
        setMinutes(minutes - 1);
        setSeconds(seconds - 1);
        setMinutes(59);
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  const parallaxImage3 = {
    bgImageStyle: {
      height: "500px",
      width: "100%",
      objectFit: "cover",
    },
  };
  return (
    <div>
      <div className="League_1">
        <Parallax {...parallaxImage3} strength={600} bgImage={Image7}>
          <section className="Images-2-section">
            <div class="waviy-Page4"></div>
          </section>
        </Parallax>
        <div className="League_2">
          <div className="League_3">
            <h1>Mobile Legends: Bang Bang Daily Tournament 7</h1>
            <h1>Tournament 6</h1>
          </div>
          <div className="League_4">
            <p>Tournament prize pool</p>
            <div class="btn-group4">
              <a class="btn4">
                <span className="Spann"></span>
                <span className="Spann"></span>
                <span className="Spann"></span>
                <span className="Spann"></span>
                <p>20 SAR</p>
              </a>
            </div>
            <p className="View">VIEW PRIZES</p>
          </div>
          <div className="League_4">
            <p>Boosted prize pool</p>
            <div class="btn-group4">
              <a class="btn4">
                <span className="Spann"></span>
                <span className="Spann"></span>
                <span className="Spann"></span>
                <span className="Spann"></span>
                <p>0 SAR</p>
              </a>
            </div>
            <p className="VieWw">VIEW PRIZES</p>
          </div>
          <div className="League_5">
            <div className="League_6">
              <p>JOIN NOW</p>
            </div>
            <h1 className="Timer">
              {Hours} <span>:</span> {minutes}
              <span>:</span>
              {seconds}
            </h1>
            <div className="Timer_text">
              <p>HOURS</p>
              <p>MINUTES</p>
              <p>SECONDS</p>
            </div>
            <p className="ends">Registration ends in 8Hours</p>
          </div>
        </div>
        <div className="Main_left_right">
          <div className="League_7">
            <div className="Leagu_div1">
              <img
                className="Image7"
                src="https://kafugames.com/_next/image?url=https%3A%2F%2Fadmin.kafugames.com%2Fuploads%2Fcompetitions%2Fcards%2Fcard1658241153.png&w=1920&q=75"
                alt=""
              />
              <div className="Leagu_div2">
                <p>Game</p>
                <h4>Mobile Legends</h4>
              </div>
              <div className="Leagu_div2">
                <p>Game Mode</p>
                <h4>Solos</h4>
              </div>
            </div>
            <div className="Leagu_div3">
              <h2 className="TIMELINE">TIMELINE</h2>
              <div className="Leagu_div4">
                <svg
                  className="fill"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M3.5 3.75a.25.25 0 01.25-.25h13.5a.25.25 0 01.25.25v10a.75.75 0 001.5 0v-10A1.75 1.75 0 0017.25 2H3.75A1.75 1.75 0 002 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 000-1.5h-7a.25.25 0 01-.25-.25V3.75z"></path>
                  <path d="M6.25 7a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm-.75 4.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm16.28 4.53a.75.75 0 10-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l5.5-5.5z"></path>
                </svg>
                <div class="btn-group5">
                  <a class="btn5">
                    <span className="Spann"></span>
                    <span className="Spann"></span>
                    <span className="Spann"></span>
                    <span className="Spann"></span>
                  </a>
                </div>
                <svg
                  className="fil"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.09 10.121A5.252 5.252 0 011 5V3.75C1 2.784 1.784 2 2.75 2h2.364c.236-.586.81-1 1.48-1h10.812c.67 0 1.244.414 1.48 1h2.489c.966 0 1.75.784 1.75 1.75V5a5.252 5.252 0 01-4.219 5.149 7.01 7.01 0 01-4.644 5.478l.231 3.003a.326.326 0 00.034.031c.079.065.303.203.836.282.838.124 1.637.81 1.637 1.807v.75h2.25a.75.75 0 010 1.5H4.75a.75.75 0 010-1.5H7v-.75c0-.996.8-1.683 1.637-1.807.533-.08.757-.217.836-.282a.334.334 0 00.034-.031l.231-3.003A7.01 7.01 0 015.09 10.12zM5 3.5H2.75a.25.25 0 00-.25.25V5A3.752 3.752 0 005 8.537V3.5zm6.217 12.457l-.215 2.793-.001.021-.003.043a1.203 1.203 0 01-.022.147c-.05.237-.194.567-.553.86-.348.286-.853.5-1.566.605a.482.482 0 00-.274.136.265.265 0 00-.083.188v.75h7v-.75a.265.265 0 00-.083-.188.483.483 0 00-.274-.136c-.713-.105-1.218-.32-1.567-.604-.358-.294-.502-.624-.552-.86a1.203 1.203 0 01-.025-.19l-.001-.022-.215-2.793a7.076 7.076 0 01-1.566 0zM19 8.578V3.5h2.375a.25.25 0 01.25.25V5c0 1.68-1.104 3.1-2.625 3.578zM6.5 2.594c0-.052.042-.094.094-.094h10.812c.052 0 .094.042.094.094V9a5.5 5.5 0 11-11 0V2.594z"
                  ></path>
                </svg>
              </div>

              <div className="Winner">
                <div className="Winner1">
                  <p>Registration End Date</p>
                  <p>ends in 8Hours</p>
                </div>
                <div className="Winner2">
                  <p className="Start">Tournament Start Date</p>
                  <p> Start in 2Days</p>
                </div>
              </div>
              <div className="League_6">
                <p>JOIN NOW</p>
              </div>
            </div>
            <div className="Leagu_div5">
              <h2 className="About_Game">
                ABOUT MOBILE LEGENDS: BANG BANG DAILY TOURNAMENT 7
              </h2>
              <a
                className="Flames"
                target="_blank"
                href="https://www.youtube.com/channel/UCrNJbBaZRGNY0b980dIUDMw"
              >
                Discord Link:(https://discord.gg/FlamesMoreFlames)
              </a>
              <p>
                Please contact the Tournament Organizer on Discord for any
                questions and issues regarding gameplay, scores, match
                schedules, registration status, Game ID, and more.
              </p>
              <h2>PLATFORMS:</h2>
              <h4>MOBILE</h4>
              <h2>TOURNAMENT RULES:</h2>
              <ul className="ul">
                <li>• Add your opponent Through Mobile Legends ID</li>
                <li>
                  • Communication between both players is through the Mobile
                  Legends client
                </li>
                <li>• Best of 1 for all rounds best of 3 finals</li>
                <li>
                  • Having a different Game ID on Kafu Games will disqualify you
                </li>
                <li>
                  • Players who are late for more than 15 minutes will be
                  disqualified
                </li>
                <li>
                  • Match should be played at a specified time that is aligned
                  with the tournament schedule. It is possible to play before
                  the specified time if both parties agree
                </li>
                <li>
                  • If the opponent declines your invite for a match, you must
                  submit a screenshot as proof showing the time
                </li>
                <li>• No spectators will be allowed</li>
                <li>
                  • Every participant has to show respect towards other
                  participants. Insults or disrespectful behavior towards others
                  are not tolerated and will be punished
                </li>
                <li>
                  • Lack of attaching your score image may expose your match to
                  be canceled even after it’s approved
                </li>
                <li>
                  • You can’t claim the result after the match has been deleted
                  or recorded for the opponent, due to your delay in clarifying
                  your complaint
                </li>
                <li>
                  • In the event the attendance no result is transmitted by both
                  parties, one of them will randomly qualify
                </li>
              </ul>
              <h2>GAME SETTINGS:</h2>
              <ul className="ul">
                <li>
                  Each 1v1 must be played in a Custom Lobby with the following
                  settings:
                </li>
                <li>• Map: CLASSIC</li>
              </ul>
              <h2>WIN CONDITION:</h2>
              <li>• Destroy enemy base</li>
              <h2>SCORE SUBMISSION RULES:</h2>
              <ul className="ul">
                <li>
                  • You must send a photo proving your victory and clarify the
                  name of the competitor when recording the results
                </li>
                <li>
                  • Lack of attaching your score image may attempt you to lose
                  the match
                </li>
                <li>
                  • Players who are late for more than 15 minutes will be
                  disqualified
                </li>
                <li>
                  • If the opponent didn't accept your Friend Request, you must
                  submit a screenshot as proof showing the time 15 mins after
                  the match starts and the Friend request of the opponent
                </li>
                <li>
                  • if you have the player as a friend from previous tournaments
                  please provide a picture of the chat showing the time of the
                  last message of his absence(time as to be 15 minutes after the
                  match time)
                </li>
                <li>
                  • In the event, the opponent does not respond, you must
                  register attendance at the official time allotted to the
                  match. The button appears in your matches list after 15 mins
                  from when the match started
                </li>
                <li>
                  • Waiting time is 15 minutes. In case of no-response, the
                  player is considered withdrawn from the match
                </li>
                <li>
                  • In the event the attendance no result is transmitted by both
                  parties, one of the Parties will randomly qualify
                </li>
              </ul>
              <h2>HERE ARE THE STEPS TO SUBMIT SCORES:</h2>
              <ul className="ul">
                <li>• Login to Kafu Games & go to “My Tournaments”</li>
                <li>• Select your Tournament</li>
                <li>• Click on the “Matches” tab</li>
                <li>• Click on “Submit Scores”</li>
                <li>
                  • Enter your score, upload the screenshot and click “Done”
                </li>
                <li>
                  • Submitting the score will be available after 15 minutes of
                  your match time for 60 minutes
                </li>
              </ul>
            </div>
          </div>
          <idv class="League_Right">
            <div className="Organized">
              <div className="Flex_Right">
                <p>Organized by</p>
                <h4>Yalla Yie</h4>
              </div>
              <div className="Social">
                <img
                  src="https://kafugames.com/_next/image?url=%2Fimages%2Fsocial%2Fdiscord.svg&w=48&q=75"
                  alt=""
                />
                <img
                  src="https://kafugames.com/_next/image?url=%2Fimages%2Fsocial%2FFb.svg&w=48&q=75"
                  alt=""
                />
                <img
                  src="https://kafugames.com/_next/image?url=%2Fimages%2Fsocial%2FTwitch.svg&w=48&q=75"
                  alt=""
                />
                <img
                  src="https://kafugames.com/_next/image?url=%2Fimages%2Fsocial%2FTwitter.svg&w=48&q=75"
                  alt=""
                />
              </div>
            </div>
            <div className="Boost_price">
              <h2>⚡️ BOOST THE PRIZE POOL</h2>
              <p>
                Boost and increase the prize pool by any amount. The boosted
                prize pool can only be won by the highest ranking booster.
              </p>
              <ul className="menu2">
                <li class="li-text2">
                  <a class="A-text2">Learn More</a>
                </li>
              </ul>
              <div className="League_8">
                <p>BOOST NOW</p>
              </div>
            </div>
            <div className="Boost_price">
              <h2>PARTICIPANTS</h2>
              <p>1 joined</p>
              <img
                className="Image7"
                src="https://kafugames.com/_next/image?url=%2Fimages%2Fdefault-fallback.png&w=1920&q=75"
                alt=""
              />
              <a>Louay</a>
              <div className="League_10">
                <p>INVITE PLAYERS</p>
              </div>
            </div>
          </idv>
        </div>
      </div>
    </div>
  );
};

export default Mb_lol;
