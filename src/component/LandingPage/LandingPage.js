import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./LandingPage.css";
import LandingPageList from "./LandingPageList";
import LandingPageList_right from "./LandingPageList_right";
import { Parallax } from "react-parallax";
import Image9 from "../../Images/9.jpg";
import Image10 from "../../Images/10.jpg";
import Image11 from "../../Images/11.jpg";
import Image12 from "../../Images/12.jpg";
import Image13 from "../../Images/13.jpg";
import Image14 from "../../Images/14.jpg";

const LandingPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const parallaxImage3 = {
    bgImageStyle: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  };
  const ListRight = [
    [
      "9",
      "MAD Lions",
      "2W-3L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631819614211_mad-2021-worlds.png",
      "1",
      "0",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643056732785_INTZ_Logo_Principal_2022.png",
      "INTS",
      "1W-4L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight2 = [
    [
      "10",
      "PSG Talon",
      "4W-1L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1644501567410_PSG_3.png",
      "1",
      "0",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1652849458142_LOGOR7_AJUSTE2022_Mesadetrabajo1.png",
      "Rainbow7",
      "2W-2L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight3 = [
    [
      "11",
      "Legacy Esports",
      "3W-2L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FLegacyEsportsLGC-01-FullonDark.png",
      "1",
      "0",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643056732785_INTZ_Logo_Principal_2022.png",
      "INTZ",
      "1W-4L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight4 = [
    [
      "12",
      "LGD Gaming",
      "2W-3L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FLGD-FullonDark-1.png",
      "0",
      "1",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1644501567410_PSG_3.png",
      "PSG Talon",
      "4W-1L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight5 = [
    [
      "13",
      "Team Liquid Honda",
      "4W-1L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631820014208_tl-2021-worlds.png",
      "1",
      "0",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631819614211_mad-2021-worlds.png",
      "MAD Lions",
      "2W-3L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight6 = [
    [
      "9",
      "Rainbow7",
      "2W-2L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1652849458142_LOGOR7_AJUSTE2022_Mesadetrabajo1.png",
      "0",
      "1",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2Fv3_500x500.png",
      "V3 Esports",
      "1W-4L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight7 = [
    [
      "10",
      "INTZ",
      "1W-4L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643056732785_INTZ_Logo_Principal_2022.png",
      "0",
      "1",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1628521976539_SMBA_WHITE.png",
      "Papara SuperMassive Blaze",
      "2W-2L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight8 = [
    [
      "11",
      "V3 Esports",
      "1W-4L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2Fv3_500x500.png",
      "0",
      "1",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643705940342_UOL_pink.png",
      "Unicorns of Love",
      "3W-2L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight9 = [
    [
      "12",
      "LGD Gaming",
      "2W-3L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FLGD-FullonDark-1.png",
      "0",
      "1",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1652849458142_LOGOR7_AJUSTE2022_Mesadetrabajo1.png",
      "Rainbow7",
      "2W-2L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight10 = [
    [
      "13",
      "Unicorns of Love",
      "3W-2L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643705940342_UOL_pink.png",
      "0",
      "1",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1644501567410_PSG_3.png",
      "PSG Talon",
      "4W-1L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight11 = [
    [
      "14",
      "Papara SuperMassive Blaze",
      "2W-2L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1628521976539_SMBA_WHITE.png",
      "0",
      "1",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631819614211_mad-2021-worlds.png",
      "MAD Lions",
      "2W-3L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight12 = [
    [
      "15",
      "Team Liquid Honda",
      "4W-1L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631820014208_tl-2021-worlds.png",
      "1",
      "0",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FLegacyEsportsLGC-01-FullonDark.png",
      "Legacy Esports",
      "3W-2L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight13 = [
    [
      "9",
      "V3 Esports",
      "1W-4L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2Fv3_500x500.png",
      "0",
      "1",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FLGD-FullonDark-1.png",
      "LGD Gaming",
      "2W-3L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight14 = [
    [
      "10",
      "Rainbow7",
      "2W-2L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2Fv3_500x500.png",
      "0",
      "1",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643705940342_UOL_pink.png",
      "Unicorns of Love",
      "3W-2L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight15 = [
    [
      "11",
      "PSG Talon",
      "4W-1L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1644501567410_PSG_3.png",
      "1",
      "0",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2Fv3_500x500.png",
      "V3 Esports",
      "1W-4L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight16 = [
    [
      "12",
      "Unicorns of Love",
      "3W-2L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643705940342_UOL_pink.png",
      "1",
      "0",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FLGD-FullonDark-1.png",
      "LGD Gaming",
      "2W-3L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight17 = [
    [
      "13",
      "Unicorns of Love",
      "3W-2L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643705940342_UOL_pink.png",
      "1",
      "0",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1644501567410_PSG_3.png",
      "PSG Talon",
      "4W-1L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRight18 = [
    [
      "14",
      "LGD Gaming",
      "2W-3L",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FLGD-FullonDark-1.png",
      "1",
      "0",
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2Fv3_500x500.png",
      "V3 Esports",
      "1W-4L",
      "WORLDS",
      "BEST OF 1",
    ],
  ];
  const ListRightt = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592594612171_WorldsDarkBG.png",
      "Worlds",
      "INTERNATIONAL",
    ],
  ];
  const ListRightt1 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592516184297_LEC-01-FullonDark.png",
      "LEC",
      "EMEA",
    ],
  ];
  const ListRightt2 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1669375535108_EM_Icon_Green1.png",
      "EMEA Masters",
      "EMEA",
    ],
  ];
  const ListRightt3 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1641490922073_nlc_logo.png",
      "NLC",
      "EUROPE",
    ],
  ];
  const ListRightt4 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1641287979138_EliteSeriesMarkWhite.png",
      "Elite Series",
      "EUROPE",
    ],
  ];
  const ListRightt5 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1625735031226_ebl_crest-whitePNG.png",
      "Esports Balkan League",
      "EUROPE",
    ],
  ];
  const ListRightt6 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2Fcblol-logo-symbol-offwhite.png",
      "CBLOL",
      "BRAZIL",
    ],
  ];
  const ListRightt7 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2Flck-color-on-black.png",
      "LCK",
      "KOREA",
    ],
  ];
  const ListRightt8 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1593016885758_LCL-01-FullonDark.png",
      "LCL",
      "COMMONWEALTH",
    ],
  ];
  const ListRightt9 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2Flco-color-white.png",
      "LCO",
      "OCEANIA",
    ],
  ];
  const ListRightt10 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592516354053_LJL-01-FullonDark.png",
      "LJL",
      "JAPAN",
    ],
  ];
  const ListRightt11 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592516315279_LLA-01-FullonDark.png",
      "LLA",
      "LATIN AMERICA",
    ],
  ];
  const ListRightt12 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592516115322_LPL-01-FullonDark.png",
      "LPL",
      "CHINA",
    ],
  ];
  const ListRightt13 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592515942679_PCS-01-FullonDark.png",
      "PCS",
      "HONG KONG, MACAU, TAIWAN",
    ],
  ];
  const ListRightt14 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=https%3A%2F%2Flolstatic-a.akamaihd.net%2Fesports-assets%2Fproduction%2Fleague%2Fturkiye-sampiyonluk-ligi-8r9ofb9.png",
      "TCL",
      "TURKEY",
    ],
  ];
  const ListRightt15 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592594737227_ASEDarkBG.png",
      "ALL-Star Event",
      "INTERNATIONAL",
    ],
  ];
  const ListRightt16 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1649884876085_LPLOL_2021_ISO_G-c389e9ae85c243e4f76a8028bbd9ca1609c2d12bc47c3709a9250d1b3ca43f58.png",
      "Liga Portuguesa",
      "EUROPE",
    ],
  ];
  const ListRightt17 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2FLFL_Logo_2020_black1.png",
      "La Ligue Francaise",
      "EUROPE",
    ],
  ];
  const ListRightt18 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2FGLL_LOGO_WHITE.png",
      "Greek Legends League",
      "EUROPE",
    ],
  ];
  const ListRightt19 = [
    [
      "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1641465237186_HM_white.png",
      "Hitpoint Masters",
      "EUROPE",
    ],
  ];
  return (
    <div className="LandingPage_main">
      <Parallax {...parallaxImage3} strength={500} bgImage={Image10}>
        <section className="Images-6-section">
          <div className="waviy-Page4">
            <h1 className="Game_name">LEAGUE OF LEGENDS</h1>
          </div>
        </section>
      </Parallax>
      <Parallax {...parallaxImage3} strength={200} bgImage={Image11}>
        <section className="Images-6-section">
          <div className="waviy-Page4">
            <h1 className="Game_name">VALORANT</h1>
          </div>
        </section>
      </Parallax>
      <Parallax {...parallaxImage3} strength={200} bgImage={Image12}>
        <section className="Images-6-section">
          <div className="waviy-Page4">
            <h1 className="Game_name">CALL OF DUTY</h1>
          </div>
        </section>
      </Parallax>
      <Parallax {...parallaxImage3} strength={200} bgImage={Image13}>
        <section className="Images-6-section">
          <div className="waviy-Page4"></div>
        </section>
      </Parallax>
      <Parallax {...parallaxImage3} strength={200} bgImage={Image14}>
        <section className="Images-6-section">
          <div className="waviy-Page4">
            <h1 className="Game_name">Rocket LEAGUE</h1>
          </div>
        </section>
      </Parallax>
      <div className="Left_right">
        <div className="LandingPage_left">
          <h2>Friday–25 September</h2>
          <LandingPageList List={ListRight} />
          <LandingPageList List={ListRight2} />
          <LandingPageList List={ListRight3} />
          <LandingPageList List={ListRight4} />
          <LandingPageList List={ListRight5} />
          <h2>Saturday–26 September</h2>
          <LandingPageList List={ListRight6} />
          <LandingPageList List={ListRight7} />
          <LandingPageList List={ListRight8} />
          <LandingPageList List={ListRight9} />
          <LandingPageList List={ListRight10} />
          <LandingPageList List={ListRight11} />
          <LandingPageList List={ListRight12} />
          <h2>Saturday–26 September</h2>
          <LandingPageList List={ListRight13} />
          <LandingPageList List={ListRight14} />
          <LandingPageList List={ListRight15} />
          <LandingPageList List={ListRight16} />
          <LandingPageList List={ListRight17} />
          <LandingPageList List={ListRight18} />
        </div>
        <div className="LandingPage_right">
          <h3 className="FILTER">FILTER</h3>
          <LandingPageList_right Listright={ListRightt} />
          <LandingPageList_right Listright={ListRightt1} />
          <LandingPageList_right Listright={ListRightt2} />
          <LandingPageList_right Listright={ListRightt3} />
          <LandingPageList_right Listright={ListRightt4} />
          <LandingPageList_right Listright={ListRightt5} />
          <LandingPageList_right Listright={ListRightt6} />
          <LandingPageList_right Listright={ListRightt7} />
          <LandingPageList_right Listright={ListRightt8} />
          <LandingPageList_right Listright={ListRightt9} />
          <LandingPageList_right Listright={ListRightt10} />
          <LandingPageList_right Listright={ListRightt11} />
          <LandingPageList_right Listright={ListRightt12} />
          <LandingPageList_right Listright={ListRightt13} />
          <LandingPageList_right Listright={ListRightt14} />
          <LandingPageList_right Listright={ListRightt15} />
          <LandingPageList_right Listright={ListRightt16} />
          <LandingPageList_right Listright={ListRightt17} />
          <LandingPageList_right Listright={ListRightt18} />
          <LandingPageList_right Listright={ListRightt19} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
