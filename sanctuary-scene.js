import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const MODEL = {
  court: { length: 100, width: 50, height: 5, gateWidth: 20 },
  tabernacle: { length: 30, width: 10, height: 10, holyLength: 20, mostHolyLength: 10 },
  altar: { length: 5, width: 5, height: 3 },
  ark: { length: 2.5, width: 1.5, height: 1.5 },
  table: { length: 2, width: 1, height: 1.5 },
  incense: { length: 1, width: 1, height: 2 },
  laver: { diameter: 2.2, height: 1.2 },
  lampstand: { width: 1.4, depth: 1.1, height: 2.8 }
};

const BOUNDS = {
  court: { west: -50, east: 50, north: -25, south: 25 },
  tabernacle: { west: -45, east: -15, north: -5, south: 5, veil: -35 }
};

const LAYERS = ["court", "furniture", "priest", "veils", "coverings", "camp"];

const INTERIOR_ARTICLE_IDS = new Set(["lampstand", "shewbread", "incense", "ark"]);
const VEIL_ARTICLE_IDS = new Set(["entranceVeil", "innerVeil"]);

const VIEW_PRESETS = {
  side: {
    label: "Side Cutaway",
    camera: [42, 32, 54],
    target: [-15, 3, 0],
    zoom: null
  },
  top: {
    label: "Top View",
    camera: [0, 105, 0.01],
    target: [0, 0, 0],
    zoom: null
  },
  walk: {
    label: "Walkthrough",
    camera: [57, 5.2, 7.5],
    target: [25, 2.8, 0],
    zoom: null
  },
  holy: {
    label: "Holy Place",
    camera: [-13, 6.5, 8.8],
    target: [-28, 3.2, 0],
    zoom: null
  },
  mostHoly: {
    label: "Most Holy",
    camera: [-30, 6.4, 6.6],
    target: [-40, 3.2, 0],
    zoom: null
  }
};

const OBJECT_FOCUS_VIEWS = {
  lampstand: {
    cameraOffset: [4.6, 3.8, 10.4],
    targetOffset: [0, 1.6, -0.1],
    minDistance: 9.5
  },
  shewbread: {
    cameraOffset: [4.8, 3.9, 11.2],
    targetOffset: [0, 1.45, 0.18],
    minDistance: 10
  },
  incense: {
    cameraOffset: [3.4, 4.1, 9.2],
    targetOffset: [0, 1.7, 0],
    minDistance: 8.8
  },
  ark: {
    cameraOffset: [-0.7, 4.0, 9.4],
    targetOffset: [0, 1.45, 0],
    minDistance: 8.8
  },
  innerVeil: {
    cameraOffset: [4.3, 4.0, 10.2],
    targetOffset: [0, 1.7, 0],
    minDistance: 9.5
  },
  entranceVeil: {
    cameraOffset: [4.8, 4.1, 10.8],
    targetOffset: [0, 1.8, 0],
    minDistance: 10.2
  },
  coverings: {
    cameraOffset: [8.5, 4.9, 12.5],
    targetOffset: [-2.5, 2.6, 0],
    minDistance: 13
  }
};

const STUDY_PATHS = {
  sinner: [
    {
      id: "gate",
      text:
        "The sinner does not climb over the fence or invent a private way in. He enters through the one open gate, learning that access to God is welcomed, but only through the way God provides."
    },
    {
      id: "altar",
      text:
        "The first furniture he meets is the altar. The innocent substitute bears what the worshiper cannot carry. Forgiveness is real, but the fire and blood teach that mercy is never cheap."
    },
    {
      id: "laver",
      text:
        "After sacrifice comes cleansing. The laver shows that God does not merely cancel guilt while leaving the life untouched; the forgiven person is called into a washed, renewed walk."
    },
    {
      id: "entranceVeil",
      text:
        "The worshiper cannot push himself into the Holy Place. The veil marks a deeper ministry carried forward by the priest: blood is ministered at the altar, and in appointed sin-offering cases blood is carried before the veil."
    },
    {
      id: "lampstand",
      text:
        "Inside, light is kept burning. The path of salvation is not only pardon from the past; God gives illumination so His people can live by the Spirit's light."
    },
    {
      id: "shewbread",
      text:
        "The bread stands before the Lord as a sign of covenant fellowship and daily nourishment. The restored life must be fed by God's provision, not by its old wilderness hunger."
    },
    {
      id: "incense",
      text:
        "At the altar of incense, prayer rises near the veil. In the daily ministry the priest stands where the sinner cannot, teaching that confessed sin is dealt with through mediation, not ignored."
    },
    {
      id: "innerVeil",
      text:
        "The inner veil reminds the worshiper that sin has created distance from unveiled glory. Yet even this boundary is a promise: God is making a way toward His throne."
    },
    {
      id: "ark",
      text:
        "The ark remains unseen behind the inner veil during the daily service, yet it gives meaning to the whole path: law beneath mercy, justice answered by blood, and a final cleansing still promised."
    }
  ],
  daily: [
    { id: "altar", text: "Morning and evening, the continual offering kept grace visibly before Israel." },
    { id: "laver", text: "The priest washed before holy service, joining ministry with purity." },
    { id: "lampstand", text: "The lampstand was tended so light never failed inside the Holy Place." },
    { id: "shewbread", text: "Bread stood before the Lord as covenant fellowship and daily provision." },
    { id: "incense", text: "Incense rose morning and evening, carrying the prayers of the people near to God." },
    { id: "priest", text: "The priest's daily labor taught Israel to trust a mediator they could not replace." }
  ],
  atonement: [
    { id: "priest", text: "On the Day of Atonement, the high priest bore the solemn weight of the camp." },
    { id: "altar", text: "Blood was provided before entrance within the veil." },
    { id: "incense", text: "Incense formed a covering cloud before the ark." },
    { id: "innerVeil", text: "The veil marked the boundary only the high priest crossed on that day." },
    { id: "ark", text: "Before the mercy seat, sanctuary cleansing, judgment, and mercy came together." },
    { id: "gate", text: "The cleansed camp waited for sin's final removal and restored fellowship." }
  ],
  christ: [
    { id: "gate", text: "Christ is the true way into the Father's presence." },
    { id: "altar", text: "Christ is the Lamb whose sacrifice bears sin." },
    { id: "laver", text: "Christ cleanses His people by water and the Spirit." },
    { id: "lampstand", text: "Christ is the Light, shining through His Spirit-filled people." },
    { id: "shewbread", text: "Christ is the living Bread who sustains the covenant community." },
    { id: "incense", text: "Christ is the interceding Priest whose merits make prayer acceptable." },
    { id: "innerVeil", text: "Christ opens the living way through the veil." },
    { id: "ark", text: "Christ ministers before the throne where mercy answers the law." }
  ]
};

const STUDY_PATH_SETTINGS = {
  default: {
    transition: 1.25,
    hold: 5200
  },
  sinner: {
    transition: 3.25,
    hold: 10800
  }
};

const CINEMATIC_PATHS = {
  sinner: {
    transition: 3.25,
    hold: 10400,
    steps: [
      {
        title: "The Sinner Enters the Gate",
        text:
          "A worshiper comes from the camp with a lamb beside him. He does not rush. The open gate teaches him that God has made a way back, but the way back passes through sacrifice.",
        scripture: "Leviticus 1:3; John 10:9",
        camera: [68, 8, 13],
        target: [49, 2.2, 0],
        focusId: "gate",
        actors: ["sinner", "lamb", "familyA", "familyB"],
        actorStates: {
          sinner: { position: [57, 0, 1.8], lookAt: [49, 0, 0], pose: "walk" },
          lamb: { position: [54.5, 0, 2.2], lookAt: [49, 0, 0], pose: "stand" },
          familyA: { position: [60, 0, -3.8], lookAt: [49, 0, 0], pose: "reverent" },
          familyB: { position: [61.4, 0, -2.2], lookAt: [49, 0, 0], pose: "reverent" }
        }
      },
      {
        title: "He Walks Through the Appointed Way",
        text:
          "The colored gate closes the wilderness behind him and opens the court before him. He learns in his body what his heart needs to know: access to God is not self-made; it is received.",
        scripture: "Exodus 27:16",
        camera: [55, 6.2, 9],
        target: [41, 1.8, 0],
        focusId: "gate",
        actors: ["sinner", "lamb", "priestActor", "familyA", "familyB"],
        actorStates: {
          sinner: { position: [44, 0, 1.2], lookAt: [27, 0, 0], pose: "walk" },
          lamb: { position: [41.8, 0, 1.4], lookAt: [27, 0, 0], pose: "stand" },
          priestActor: { position: [30.4, 0, -4.1], lookAt: [42, 0, 1], pose: "stand" },
          familyA: { position: [54.5, 0, -3.8], lookAt: [44, 0, 0], pose: "reverent" },
          familyB: { position: [56, 0, -2.4], lookAt: [44, 0, 0], pose: "reverent" }
        }
      },
      {
        title: "Hands Rest on the Substitute",
        text:
          "Near the altar, the sinner bends over the lamb. No blood is shown; only the solemn pause is shown. The gesture says what words cannot carry: guilt is real, and God has provided another to stand in the sinner's place.",
        scripture: "Leviticus 1:4; Isaiah 53:6",
        camera: [37, 6.8, 10.4],
        target: [29.5, 1.5, 3.3],
        focusId: "altar",
        actors: ["sinner", "lamb", "priestActor"],
        hold: 11600,
        actorStates: {
          sinner: { position: [33.5, 0, 4.6], lookAt: [31.3, 0, 4], pose: "handsOn" },
          lamb: { position: [31.1, 0, 4], lookAt: [25, 0, 0], pose: "bow" },
          priestActor: { position: [23.7, 0, -5], lookAt: [31, 0, 4], pose: "reverent" }
        }
      },
      {
        title: "The Priest Receives the Ministry",
        text:
          "The worshiper cannot carry the service farther. The priest steps forward with quiet care. The sinner has confessed; now mediation continues where his own hands must stop.",
        scripture: "Leviticus 4:5-7; Hebrews 5:1",
        camera: [34, 7.2, -8.8],
        target: [28.6, 1.9, 1.7],
        focusId: "altar",
        actors: ["sinner", "priestActor", "lamb"],
        actorStates: {
          sinner: { position: [34, 0, 4.9], lookAt: [31, 0, 3.9], pose: "reverent" },
          priestActor: { position: [30.8, 0, -4.6], lookAt: [31, 0, 3.9], pose: "receive" },
          lamb: { position: [31, 0, 3.9], lookAt: [30.8, 0, -4.6], pose: "stand" }
        }
      },
      {
        title: "Blood and Fire Speak of Costly Mercy",
        text:
          "The lamb is no longer the focus. The priest stands by the bronze altar with a basin, and smoke rises. In the ordinary offering, blood is ministered at the altar where sacrifice is accepted. The scene remains symbolic, but the meaning is plain: forgiveness is free to the sinner because God bears its cost.",
        scripture: "Leviticus 1:5; Romans 3:24-25",
        camera: [31, 8.3, 10.2],
        target: [25, 2.4, 0],
        focusId: "altar",
        actors: ["sinner", "priestActor"],
        hold: 11200,
        actorStates: {
          sinner: { position: [35, 0, 4.9], lookAt: [25, 0, 0], pose: "reverent" },
          priestActor: { position: [20, 0, -4.2], lookAt: [25, 0, 0], pose: "carryBasin" }
        }
      },
      {
        title: "The Priest Washes for Holy Work",
        text:
          "Before the ministry moves inward, the priest pauses at the laver. Sacrifice has opened the way, and cleansing keeps the servant fit for holy work. Grace forgives and also washes.",
        scripture: "Exodus 30:18-21; Titus 3:5",
        camera: [15, 6.4, 8.6],
        target: [5, 1.7, 0],
        focusId: "laver",
        actors: ["sinner", "priestActor"],
        actorStates: {
          sinner: { position: [34.5, 0, 4.2], lookAt: [5, 0, 0], pose: "stand" },
          priestActor: { position: [6.2, 0, 1.3], lookAt: [5, 0, 0], pose: "wash" }
        }
      },
      {
        title: "The Ministry Continues Beyond Sight",
        text:
          "The sinner remains in the court while the priest approaches the veil. He cannot see everything that is done for him. The sanctuary teaches him to trust the appointed mediator when the work passes beyond his sight.",
        scripture: "Hebrews 8:1-2; Hebrews 9:6",
        camera: [-7, 6.6, 10.2],
        target: [-15, 2.8, 0],
        focusId: "entranceVeil",
        actors: ["sinner", "priestActor"],
        actorStates: {
          sinner: { position: [34.5, 0, 4.2], lookAt: [-15, 0, 0], pose: "reverent" },
          priestActor: { position: [-12.3, 0, 1.4], lookAt: [-15, 0, 0], pose: "reverent" }
        }
      },
      {
        title: "Blood Is Brought Before God",
        text:
          "In appointed sin-offering cases, the priest took blood into the Holy Place, sprinkled it before the inner veil, and touched the horns of the incense altar. In many personal offerings, the blood remained at the bronze altar while the priest bore the confessed guilt through the appointed service. Either way, sin was not brushed aside; it was carried by mediation until God's final cleansing.",
        scripture: "Leviticus 4:6-7; Leviticus 10:17",
        camera: [-26.2, 5.9, 7.7],
        target: [-33.8, 2.6, 0],
        focusId: "incense",
        actors: ["sinner", "priestActor"],
        hold: 13200,
        actorStates: {
          sinner: { position: [34.5, 0, 4.2], lookAt: [-33, 0, 0], pose: "reverent" },
          priestActor: { position: [-32.1, 0, 1.35], lookAt: [-33.8, 0, 0], pose: "carryBasin" }
        }
      },
      {
        title: "Prayer Rises Where He Cannot Follow",
        text:
          "Inside the Holy Place, incense rises near the inner veil. The sinner is not forgotten outside. Confession, blood, and prayer are gathered into priestly ministry, teaching him that mercy keeps working even where his eyes cannot go.",
        scripture: "Exodus 30:7-8; Revelation 8:3-4",
        camera: [-26.5, 5.8, 7.4],
        target: [-33.8, 2.6, 0],
        focusId: "incense",
        actors: ["sinner", "priestActor"],
        hold: 11600,
        actorStates: {
          sinner: { position: [34.5, 0, 4.2], lookAt: [-33, 0, 0], pose: "reverent" },
          priestActor: { position: [-32.1, 0, 1.4], lookAt: [-33.8, 0, 0], pose: "reverent" }
        }
      },
      {
        title: "The Priest Stops Before the Curtain",
        text:
          "In the daily service, the priest did not pass this curtain. He ministered before it, and the closed veil taught the sinner that forgiveness was real while the final cleansing still waited for God's appointed day.",
        scripture: "Exodus 30:6-8; Hebrews 9:6-7",
        camera: [-28.2, 5.8, 6.8],
        target: [-34.4, 2.5, 0],
        focusId: "innerVeil",
        actors: ["sinner", "priestActor"],
        hold: 12000,
        actorStates: {
          sinner: { position: [34.5, 0, 4.2], lookAt: [-34, 0, 0], pose: "reverent" },
          priestActor: { position: [-32.4, 0, 1.2], lookAt: [-34.4, 0, 0], pose: "reverent" }
        }
      },
      {
        title: "He Leaves Under Promise",
        text:
          "The worshiper turns back toward the camp with a lighter step. He has not seen behind the inner curtain, but he has learned enough to trust God's appointed ministry. The sanctuary has not made sin small; it has made mercy large. He is safe because God has accepted the sacrifice He provided.",
        scripture: "Leviticus 4:31; 1 John 1:9",
        camera: [51, 7.4, 12.5],
        target: [39, 2.2, 1.2],
        focusId: "gate",
        actors: ["sinner", "familyA", "familyB", "priestActor"],
        hold: 12400,
        actorStates: {
          sinner: { position: [44.5, 0, 1.5], lookAt: [57, 0, 0], pose: "walk" },
          familyA: { position: [52.6, 0, -3.8], lookAt: [44, 0, 1], pose: "stand" },
          familyB: { position: [54.2, 0, -2.4], lookAt: [44, 0, 1], pose: "stand" },
          priestActor: { position: [8, 0, 2.2], lookAt: [44, 0, 1], pose: "reverent" }
        }
      }
    ]
  },
  daily: {
    transition: 2.15,
    hold: 6800,
    steps: [
      {
        title: "The Priest Comes Before Dawn",
        text:
          "The court is quiet as the priest enters his work. He is not a hero in himself; he is a servant standing where the people need mercy every morning.",
        scripture: "Exodus 29:38-39",
        camera: [52, 6.4, 11],
        target: [26, 2, 0],
        focusId: "altar",
        actors: ["priestActor"],
        actorStates: {
          priestActor: { position: [43, 0, 2.8], lookAt: [25, 0, 0], pose: "walk" }
        }
      },
      {
        title: "The Continual Fire Is Tended",
        text:
          "He approaches the altar, tends the fire, and ministers the morning lamb. Blood at the altar and fire upon the bronze teach Israel that grace is not occasional. Before the day grows loud, God has already provided.",
        scripture: "Exodus 29:38-42; Leviticus 6:12-13",
        camera: [34, 6.8, 8.4],
        target: [25, 2.4, 0],
        focusId: "altar",
        actors: ["priestActor", "lamb"],
        actorStates: {
          priestActor: { position: [20.4, 0, -4.1], lookAt: [25, 0, 0], pose: "carryBasin" },
          lamb: { position: [31.4, 0, 4.2], lookAt: [25, 0, 0], pose: "stand" }
        }
      },
      {
        title: "Hands and Feet Are Washed",
        text:
          "At the laver, the priest washes again. Holy service requires more than zeal; it requires clean hands, clean steps, and dependence on God's provision.",
        scripture: "Exodus 30:20",
        camera: [14, 6.6, 8.6],
        target: [5, 1.8, 0],
        focusId: "laver",
        actors: ["priestActor"],
        actorStates: {
          priestActor: { position: [6.2, 0, 1.25], lookAt: [5, 0, 0], pose: "wash" }
        }
      },
      {
        title: "He Passes the Entrance Veil",
        text:
          "The priest moves toward the Holy Place. The people outside cannot follow him, but his movement teaches them that mediation continues in the presence of God.",
        scripture: "Exodus 28:35; Hebrews 9:6",
        camera: [-7, 6.8, 10.5],
        target: [-15, 2.8, 0],
        focusId: "entranceVeil",
        actors: ["priestActor"],
        actorStates: {
          priestActor: { position: [-13.2, 0, 1.2], lookAt: [-18, 0, 0], pose: "reverent" }
        }
      },
      {
        title: "The Lampstand Is Kept Burning",
        text:
          "Inside, he tends the light. The sanctuary does not only forgive darkness; it keeps light alive before God, pointing to the Spirit's steady work among His people.",
        scripture: "Exodus 27:20-21; John 8:12",
        camera: [-18.8, 5.4, 8.4],
        target: [-24, 2.2, 3.15],
        focusId: "lampstand",
        actors: ["priestActor"],
        actorStates: {
          priestActor: { position: [-22.1, 0, 1.9], lookAt: [-24, 0, 3.2], pose: "tend" }
        }
      },
      {
        title: "Bread Remains Before the Lord",
        text:
          "He turns toward the table. The bread is a quiet witness that the covenant people live from God's table, not from their own strength.",
        scripture: "Leviticus 24:5-9; John 6:35",
        camera: [-19.2, 5.5, 8.2],
        target: [-24, 2, -2.8],
        focusId: "shewbread",
        actors: ["priestActor"],
        actorStates: {
          priestActor: { position: [-22.1, 0, -1.9], lookAt: [-24, 0, -3.2], pose: "receive" }
        }
      },
      {
        title: "Incense Rises Near the Veil",
        text:
          "The priest stands near the veil as incense rises morning and evening. Prayer is not left to climb by itself; it is carried in the fragrance of accepted mediation.",
        scripture: "Exodus 30:7-8; Revelation 8:3-4",
        camera: [-26.8, 5.8, 7.2],
        target: [-33.8, 2.6, 0],
        focusId: "incense",
        actors: ["priestActor"],
        actorStates: {
          priestActor: { position: [-32.1, 0, 1.4], lookAt: [-33.8, 0, 0], pose: "reverent" }
        }
      },
      {
        title: "Evening Grace Closes the Day",
        text:
          "As evening comes, the priest returns to the altar. Morning and evening, God surrounds the day with sacrifice, teaching His people to sleep under mercy.",
        scripture: "Exodus 29:41-42",
        camera: [36, 7, -8.5],
        target: [25, 2.3, 0],
        focusId: "altar",
        actors: ["priestActor"],
        hold: 7800,
        actorStates: {
          priestActor: { position: [20.4, 0, -4.2], lookAt: [25, 0, 0], pose: "reverent" }
        }
      }
    ]
  },
  atonement: {
    transition: 2.55,
    hold: 9600,
    steps: [
      {
        title: "The High Priest Washes and Dresses in Linen",
        text:
          "The day begins with washing and plain linen. The high priest does not approach God in display. He comes in humility, aware that he also needs mercy before he can minister for the camp.",
        scripture: "Leviticus 16:4",
        camera: [16, 6.4, 8.4],
        target: [5, 1.8, 0],
        focusId: "laver",
        actors: ["highPriest", "goatA", "liveGoat"],
        hold: 9800,
        actorStates: {
          highPriest: { position: [6.2, 0, 1.25], lookAt: [5, 0, 0], pose: "wash" },
          goatA: { position: [34, 0, -4.1], lookAt: [25, 0, 0], pose: "stand" },
          liveGoat: { position: [36, 0, 4.2], lookAt: [25, 0, 0], pose: "stand" }
        }
      },
      {
        title: "A Bull Is Offered for the Priest",
        text:
          "Before he acts for Israel, the high priest offers the bull for himself and his house. The mediator is not casual or self-sufficient; he stands under mercy before he carries mercy to others.",
        scripture: "Leviticus 16:6, 11",
        camera: [31, 6.8, 8.5],
        target: [25, 2.4, 0],
        focusId: "altar",
        actors: ["highPriest", "goatA", "liveGoat"],
        actorStates: {
          highPriest: { position: [20.6, 0, -3.9], lookAt: [25, 0, 0], pose: "carryBasin" },
          goatA: { position: [34, 0, -4.1], lookAt: [25, 0, 0], pose: "stand" },
          liveGoat: { position: [36, 0, 4.2], lookAt: [25, 0, 0], pose: "stand" }
        }
      },
      {
        title: "Two Goats Are Presented",
        text:
          "The goats stand before the Lord, and lots are cast. One will represent the blood of cleansing; the other will bear away confessed sin. Israel sees that sin must be both forgiven and finally removed.",
        scripture: "Leviticus 16:7-10",
        camera: [41, 6.2, 9.2],
        target: [31, 1.5, 0],
        focusId: "gate",
        actors: ["highPriest", "goatA", "liveGoat"],
        actorStates: {
          highPriest: { position: [30.5, 0, 0], lookAt: [35, 0, 0], pose: "receive" },
          goatA: { position: [34, 0, -4], lookAt: [30, 0, 0], pose: "stand" },
          liveGoat: { position: [34, 0, 4], lookAt: [30, 0, 0], pose: "stand" }
        }
      },
      {
        title: "Incense Covers the Approach Within the Veil",
        text:
          "Before blood is sprinkled, the high priest carries coals and incense past the inner veil. The cloud rises before the mercy seat, reminding him that no one enters God's presence on personal worth.",
        scripture: "Leviticus 16:12-13",
        camera: [-32.5, 5.8, 6.6],
        target: [-39.2, 2.3, 0],
        focusId: "ark",
        actors: ["highPriest"],
        actorStates: {
          highPriest: { position: [-37.2, 0, 1.15], lookAt: [-40, 0, 0], pose: "carryBasin" }
        }
      },
      {
        title: "Bull Blood Before the Mercy Seat",
        text:
          "He passes where no ordinary step may go and sprinkles the bull's blood upon and before the mercy seat. The priestly house must be covered before the people can be represented.",
        scripture: "Leviticus 16:14; Hebrews 9:7",
        camera: [-34, 5.7, 5.7],
        target: [-40, 2.1, 0],
        focusId: "ark",
        hold: 9800,
        actors: ["highPriest"],
        actorStates: {
          highPriest: { position: [-38.1, 0, 1.1], lookAt: [-40, 0, 0], pose: "reverent" }
        }
      },
      {
        title: "The Lord's Goat Is Given for the People",
        text:
          "The goat for the Lord is now the sin offering for the people. The scene remains symbolic and reverent: no gore is shown, only the basin, the altar, and the solemn truth that Israel's cleansing depends on life given by God's provision.",
        scripture: "Leviticus 16:15; Hebrews 9:22",
        camera: [34, 6.8, -8.6],
        target: [25, 2.4, 0],
        focusId: "altar",
        actors: ["highPriest", "goatA", "liveGoat"],
        hold: 10400,
        actorStates: {
          highPriest: { position: [20.6, 0, -3.9], lookAt: [25, 0, 0], pose: "carryBasin" },
          goatA: { position: [31.2, 0, -4.2], lookAt: [25, 0, 0], pose: "stand" },
          liveGoat: { position: [38, 0, 4.2], lookAt: [30, 0, 0], pose: "stand" }
        }
      },
      {
        title: "The Lord's Goat Blood Is Brought Within",
        text:
          "The high priest brings the Lord's goat blood inside the veil and sprinkles it as he did the bull's blood. This blood cleanses for the people; the live goat has not yet entered the work.",
        scripture: "Leviticus 16:15-16; Hebrews 9:23-24",
        camera: [-34, 5.7, 5.9],
        target: [-40, 2.1, 0],
        focusId: "ark",
        actors: ["highPriest"],
        hold: 10400,
        actorStates: {
          highPriest: { position: [-38.1, 0, 1.1], lookAt: [-40, 0, 0], pose: "carryBasin" }
        }
      },
      {
        title: "The Holy Place Is Cleansed",
        text:
          "The work does not stop at the ark. The high priest makes atonement for the Holy Place and the tent because Israel's uncleanness, transgressions, and sins have affected the sanctuary. Cleansing is judgment and mercy together.",
        scripture: "Leviticus 16:16-17; Daniel 8:14",
        camera: [-26.2, 5.9, 7.7],
        target: [-33.8, 2.6, 0],
        focusId: "incense",
        actors: ["highPriest"],
        hold: 10600,
        actorStates: {
          highPriest: { position: [-32.1, 0, 1.35], lookAt: [-33.8, 0, 0], pose: "carryBasin" }
        }
      },
      {
        title: "The Altar Is Cleansed",
        text:
          "The priest returns to cleanse the altar, touching blood to its horns and sprinkling seven times. The record of sin is not left in God's house forever. The sanctuary promises a day when sin itself will be removed.",
        scripture: "Leviticus 16:18-19, 30",
        camera: [34, 7.4, -8.4],
        target: [25, 2.4, 0],
        focusId: "altar",
        actors: ["highPriest", "liveGoat"],
        actorStates: {
          highPriest: { position: [20.6, 0, 3.9], lookAt: [25, 0, 0], pose: "carryBasin" },
          liveGoat: { position: [38, 0, 3], lookAt: [50, 0, 0], pose: "stand" }
        }
      },
      {
        title: "The Live Goat Is Brought After Atonement",
        text:
          "Only after atonement has been made for the sanctuary, the tent, and the altar is the live goat brought near. It does not provide the cleansing blood. It receives the confessed sins for final removal.",
        scripture: "Leviticus 16:20",
        camera: [48, 6.8, 9.8],
        target: [38, 1.8, 2],
        focusId: "gate",
        actors: ["highPriest", "liveGoat", "fitMan", "familyA", "familyB"],
        hold: 10800,
        actorStates: {
          highPriest: { position: [39, 0, 2.3], lookAt: [42, 0, 2], pose: "reverent" },
          liveGoat: { position: [42.6, 0, 2.1], lookAt: [39, 0, 2.2], pose: "stand" },
          fitMan: { position: [45.5, 0, 1.4], lookAt: [42.6, 0, 2.1], pose: "stand" },
          familyA: { position: [47, 0, -4], lookAt: [42.6, 0, 2], pose: "stand" },
          familyB: { position: [48.5, 0, -2.5], lookAt: [42.6, 0, 2], pose: "stand" }
        }
      },
      {
        title: "Both Hands Confess the Sins of Israel",
        text:
          "The high priest places both hands on the live goat and confesses Israel's iniquities, transgressions, and sins. The goat is not a savior; it bears away what the sacrificial blood has already answered.",
        scripture: "Leviticus 16:21",
        camera: [48, 6.4, 8.8],
        target: [41.5, 1.7, 2],
        focusId: "gate",
        actors: ["highPriest", "liveGoat", "fitMan", "familyA", "familyB"],
        hold: 11600,
        actorStates: {
          highPriest: { position: [39.6, 0, 2.2], lookAt: [42.4, 0, 2.1], pose: "handsOn" },
          liveGoat: { position: [42.4, 0, 2.1], lookAt: [39.6, 0, 2.2], pose: "bow" },
          fitMan: { position: [45.6, 0, 1.4], lookAt: [42.4, 0, 2.1], pose: "reverent" },
          familyA: { position: [47, 0, -4], lookAt: [42.4, 0, 2.1], pose: "reverent" },
          familyB: { position: [48.5, 0, -2.5], lookAt: [42.4, 0, 2.1], pose: "reverent" }
        }
      },
      {
        title: "A Fit Man Leads the Goat Away",
        text:
          "A fit man leads the goat into the wilderness, away from the camp. The movement is quiet but powerful: confessed sin is removed from God's dwelling and from God's people.",
        scripture: "Leviticus 16:21-22",
        camera: [61, 7.2, 12],
        target: [50, 2.2, 1.8],
        focusId: "gate",
        actors: ["highPriest", "liveGoat", "fitMan", "familyA", "familyB"],
        hold: 10800,
        actorStates: {
          highPriest: { position: [39, 0, 1.8], lookAt: [54, 0, 1.5], pose: "reverent" },
          fitMan: { position: [54, 0, 1.3], lookAt: [70, 0, 0], pose: "walk" },
          liveGoat: { position: [56.2, 0, 1.6], lookAt: [70, 0, 0], pose: "walk" },
          familyA: { position: [46.5, 0, -4], lookAt: [54, 0, 1], pose: "stand" },
          familyB: { position: [48, 0, -2.5], lookAt: [54, 0, 1], pose: "stand" }
        }
      },
      {
        title: "The Priest Washes, Changes, and Offers Burnt Offerings",
        text:
          "After the live goat is sent away, the high priest washes, changes garments, and returns to offer burnt offerings. The day ends not in emptiness, but in renewed dedication to God.",
        scripture: "Leviticus 16:23-25",
        camera: [34, 7, -8.5],
        target: [25, 2.3, 0],
        focusId: "altar",
        actors: ["highPriest"],
        hold: 10200,
        actorStates: {
          highPriest: { position: [20.4, 0, -4.2], lookAt: [25, 0, 0], pose: "reverent" }
        }
      },
      {
        title: "The Camp Breathes Under Cleansing",
        text:
          "The people hear the meaning of the day: before the Lord, they are clean from all their sins. Leviticus 16 does not make sin small. It shows that God can forgive, cleanse, remove, and restore.",
        scripture: "Leviticus 16:30; Revelation 21:4",
        camera: [58, 7.4, 12.5],
        target: [42, 2.2, 0],
        focusId: "gate",
        actors: ["highPriest", "familyA", "familyB"],
        hold: 11200,
        actorStates: {
          highPriest: { position: [39, 0, 1.8], lookAt: [46, 0, -2], pose: "reverent" },
          familyA: { position: [46.5, 0, -4], lookAt: [39, 0, 1.8], pose: "stand" },
          familyB: { position: [48, 0, -2.5], lookAt: [39, 0, 1.8], pose: "stand" }
        }
      }
    ]
  }
};

const COLORS = {
  sand: 0xe8c991,
  sandLight: 0xf4dfad,
  bronze: 0xb16a2d,
  bronzeDark: 0x7f3f18,
  gold: 0xd6a73d,
  goldLight: 0xffdd77,
  linen: 0xf7f2e4,
  linenDim: 0xded9ca,
  blue: 0x3869b7,
  purple: 0x7b4a92,
  scarlet: 0xc45439,
  redSkin: 0x91372f,
  goatHair: 0x2e2823,
  badger: 0x6f685c,
  wood: 0x8b582c,
  shadow: 0x5f3b1b
};

function makeMaterial(color, options = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: options.roughness ?? 0.74,
    metalness: options.metalness ?? 0.05,
    transparent: options.transparent ?? false,
    opacity: options.opacity ?? 1,
    side: options.side ?? THREE.FrontSide,
    emissive: options.emissive ?? 0x000000,
    emissiveIntensity: options.emissiveIntensity ?? 0
  });
}

function vector(values) {
  return new THREE.Vector3(values[0], values[1], values[2]);
}

function labelFor(id) {
  const labels = {
    altar: "Altar of Burnt Offering",
    laver: "The Laver",
    lampstand: "Golden Lampstand",
    shewbread: "Table of Shewbread",
    incense: "Altar of Incense",
    ark: "Ark of the Covenant",
    gate: "The Courtyard Gate",
    posts: "Courtyard Posts and Linen Fence",
    priest: "The Priest in the Sanctuary",
    entranceVeil: "The Entrance Veil",
    innerVeil: "The Inner Veil",
    coverings: "Tabernacle Coverings"
  };
  return labels[id] || id;
}

export class SanctuaryThreeScene {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.openArticle = options.openArticle || (() => {});
    this.isActive = options.isActive || (() => true);
    this.frame = canvas.closest(".scene-frame");
    this.caption = document.querySelector("#scene-path-caption");
    this.viewButtons = [...document.querySelectorAll("[data-scene-view]")];
    this.layerButtons = [...document.querySelectorAll("[data-scene-layer]")];
    this.pathButtons = [...document.querySelectorAll("[data-scene-path]")];
    this.sceneControlButtons = [...document.querySelectorAll("[data-scene-control]")];
    this.clock = new THREE.Clock();
    this.selectables = [];
    this.selectableObjects = new Map();
    this.layers = new Map();
    this.activeLayers = new Set(LAYERS);
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.cameraTween = null;
    this.needsRender = true;
    this.pathTimer = null;
    this.currentPath = null;
    this.currentCinematicPath = null;
    this.currentPathSettings = null;
    this.pathStep = 0;
    this.currentDisplayedStep = -1;
    this.actors = new Map();
    this.actorTweens = [];
    this.pointerStart = null;
    this.dragExceeded = false;

    this.init();
    this.bind();
    this.resize();
    this.applyView("side", false);
    this.animate();
  }

  init() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xd8b176);
    this.scene.fog = new THREE.Fog(0xd8b176, 95, 235);

    this.camera = new THREE.PerspectiveCamera(48, 1, 0.1, 600);
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = false;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 3.2;
    this.controls.maxDistance = 185;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.025;
    this.controls.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.PAN
    };
    this.controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN
    };
    this.controls.addEventListener("change", () => {
      this.needsRender = true;
    });
    this.controls.addEventListener("start", () => this.handleManualNavigation());

    LAYERS.forEach(id => {
      const group = new THREE.Group();
      group.name = `layer-${id}`;
      this.layers.set(id, group);
      this.scene.add(group);
    });

    this.addLights();
    this.buildScene();
  }

  addLights() {
    const hemi = new THREE.HemisphereLight(0xfff6de, 0x80592e, 1.45);
    this.scene.add(hemi);

    const sun = new THREE.DirectionalLight(0xffead1, 2.2);
    sun.position.set(42, 76, 34);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -90;
    sun.shadow.camera.right = 90;
    sun.shadow.camera.top = 90;
    sun.shadow.camera.bottom = -90;
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 190;
    this.scene.add(sun);

    const warm = new THREE.PointLight(0xffb45d, 1.6, 40);
    warm.position.set(25, 6, 0);
    this.scene.add(warm);
  }

  buildScene() {
    this.addGround();
    this.addCamp();
    this.addCourt();
    this.addTabernacle();
    this.addCourtyardFurniture();
    this.addHolyFurniture();
    this.addPriest();
    this.addCinematicActors();
  }

  bind() {
    window.addEventListener("resize", () => this.resize());
    window.addEventListener("keydown", event => this.key(event));
    this.canvas.addEventListener("pointerdown", event => this.pointerDown(event));
    this.canvas.addEventListener("pointermove", event => this.pointerMove(event));
    this.canvas.addEventListener("pointerleave", () => {
      this.pointerStart = null;
      this.dragExceeded = false;
    });
    this.canvas.addEventListener("wheel", () => this.handleManualNavigation(), { passive: true });
    this.canvas.addEventListener("click", event => this.click(event));
    this.canvas.addEventListener("contextmenu", event => event.preventDefault());
    this.caption?.addEventListener("click", event => {
      const button = event.target.closest("[data-path-step]");
      if (!button) return;
      event.preventDefault();
      this.goGuidedStep(button.dataset.pathStep === "next" ? 1 : -1);
    });

    document.querySelector("#reset-scene")?.addEventListener("click", () => this.applyView("side"));
    document.querySelector("#fullscreen-scene")?.addEventListener("click", () => this.frame?.requestFullscreen?.());

    this.viewButtons.forEach(button => {
      button.addEventListener("click", () => this.applyView(button.dataset.sceneView));
    });

    this.layerButtons.forEach(button => {
      button.addEventListener("click", () => this.toggleLayer(button.dataset.sceneLayer, button));
    });

    this.pathButtons.forEach(button => {
      button.addEventListener("click", () => {
        const pathId = button.dataset.scenePath;
        if (pathId === "stop") this.stopPath();
        else this.runPath(pathId);
      });
    });

    this.sceneControlButtons.forEach(button => {
      button.addEventListener("pointerdown", event => event.preventDefault());
      button.addEventListener("click", () => {
        this.handleSceneControl(button.dataset.sceneControl);
        button.blur();
      });
    });
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
    this.needsRender = true;
  }

  animate() {
    const delta = this.clock.getDelta();
    const tweening = Boolean(this.cameraTween);
    this.updateTween(delta);
    const actorAnimating = this.updateActorTweens(delta);
    const controlsChanged = this.controls.update();
    if (this.needsRender || tweening || actorAnimating || controlsChanged) {
      this.renderer.render(this.scene, this.camera);
      this.needsRender = false;
    }
    requestAnimationFrame(() => this.animate());
  }

  addGround() {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(240, 180),
      makeMaterial(COLORS.sand, { roughness: 0.95 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    const court = new THREE.Mesh(
      new THREE.PlaneGeometry(MODEL.court.length, MODEL.court.width),
      makeMaterial(COLORS.sandLight, { roughness: 0.9 })
    );
    court.position.y = 0.025;
    court.rotation.x = -Math.PI / 2;
    court.receiveShadow = true;
    this.layers.get("court").add(court);

    const border = this.makeBox(102, 0.08, 52, 0xd4a767);
    border.position.set(0, 0.04, 0);
    border.material.transparent = true;
    border.material.opacity = 0.22;
    this.layers.get("court").add(border);
  }

  addCamp() {
    const group = this.layers.get("camp");
    const rows = [
      { startX: -42, startZ: -58, cols: 12, rows: 8, dx: 7, dz: -4.4, rot: 0 },
      { startX: -42, startZ: 58, cols: 12, rows: 8, dx: 7, dz: 4.4, rot: Math.PI },
      { startX: -74, startZ: -28, cols: 5, rows: 12, dx: -5.2, dz: 5.2, rot: Math.PI / 2 },
      { startX: 74, startZ: -28, cols: 5, rows: 12, dx: 5.2, dz: 5.2, rot: -Math.PI / 2 }
    ];

    rows.forEach(block => {
      for (let row = 0; row < block.rows; row += 1) {
        for (let col = 0; col < block.cols; col += 1) {
          const tent = this.makeTent(2.7, 2.4, 1.5);
          tent.position.set(block.startX + col * block.dx, 0.04, block.startZ + row * block.dz);
          tent.rotation.y = block.rot;
          group.add(tent);
        }
      }
    });
  }

  addCourt() {
    const group = this.layers.get("court");
    const { west, east, north, south } = BOUNDS.court;
    const gateHalf = MODEL.court.gateWidth / 2;
    const postKeys = new Set();

    const addPost = (x, z, selectable = true) => {
      const key = `${x.toFixed(2)}:${z.toFixed(2)}`;
      if (postKeys.has(key)) return;
      postKeys.add(key);

      const post = new THREE.Mesh(
        new THREE.CylinderGeometry(0.09, 0.12, MODEL.court.height, 12),
        makeMaterial(COLORS.bronze, { metalness: 0.22, roughness: 0.58 })
      );
      post.position.set(x, MODEL.court.height / 2, z);
      post.castShadow = true;
      post.receiveShadow = true;
      group.add(post);

      const cap = new THREE.Mesh(
        new THREE.BoxGeometry(0.42, 0.12, 0.42),
        makeMaterial(COLORS.linenDim, { metalness: 0.05 })
      );
      cap.position.set(x, MODEL.court.height + 0.08, z);
      cap.castShadow = true;
      group.add(cap);

      if (selectable) this.registerSelectable("posts", post);
    };

    const addLinePosts = (count, getPoint) => {
      for (let index = 0; index < count; index += 1) {
        const t = count === 1 ? 0 : index / (count - 1);
        const point = getPoint(t);
        addPost(point.x, point.z);
      }
    };

    addLinePosts(20, t => ({ x: west + (east - west) * t, z: north }));
    addLinePosts(20, t => ({ x: west + (east - west) * t, z: south }));
    addLinePosts(10, t => ({ x: west, z: north + (south - north) * t }));
    [north, (north - gateHalf) / 2, -gateHalf, gateHalf, (gateHalf + south) / 2, south].forEach(z => addPost(east, z));

    this.addFencePanel(west, east, north, north, "posts");
    this.addFencePanel(east, west, south, south, "posts");
    this.addFencePanel(west, west, south, north, "posts");
    this.addFencePanel(east, east, north, -gateHalf, "posts");
    this.addFencePanel(east, east, gateHalf, south, "posts");
    this.addGate(east, gateHalf);
  }

  addFencePanel(x1, x2, z1, z2, id) {
    const length = Math.hypot(x2 - x1, z2 - z1);
    const panel = new THREE.Mesh(
      new THREE.BoxGeometry(length, MODEL.court.height * 0.84, 0.08),
      makeMaterial(0xffffff, { transparent: true, opacity: 0.35, side: THREE.DoubleSide })
    );
    panel.position.set((x1 + x2) / 2, MODEL.court.height * 0.48, (z1 + z2) / 2);
    panel.rotation.y = Math.atan2(z2 - z1, x2 - x1);
    panel.castShadow = false;
    panel.receiveShadow = true;
    this.layers.get("court").add(panel);
    this.registerSelectable(id, panel);

    for (let stripe = 1; stripe <= 5; stripe += 1) {
      const cord = new THREE.Mesh(
        new THREE.BoxGeometry(length, 0.035, 0.045),
        makeMaterial(COLORS.linen, { roughness: 0.9 })
      );
      cord.position.copy(panel.position);
      cord.position.y = 0.85 + stripe * 0.72;
      cord.rotation.y = panel.rotation.y;
      this.layers.get("court").add(cord);
    }
  }

  addGate(x, gateHalf) {
    const group = new THREE.Group();
    group.name = "courtyard-gate";

    const colors = [COLORS.linen, COLORS.blue, COLORS.purple, COLORS.scarlet, COLORS.linen, COLORS.blue, COLORS.purple, COLORS.scarlet];
    const openingHalf = 1.8;
    const curtainRanges = [
      [-gateHalf, -openingHalf],
      [openingHalf, gateHalf]
    ];
    const gatePostPositions = [-7.5, -2.5, 2.5, 7.5];

    curtainRanges.forEach(([start, end], sideIndex) => {
      const totalWidth = end - start;
      const stripeWidth = totalWidth / 4;
      for (let i = 0; i < 4; i += 1) {
        const z0 = start + i * stripeWidth;
        const z1 = z0 + stripeWidth;
        const color = colors[i + sideIndex * 4];
        const panel = this.makeCurtainPanel(stripeWidth, MODEL.court.height * 0.88, color, 0.5);
        panel.position.set(x + 0.05, MODEL.court.height * 0.47, z0 + stripeWidth / 2);
        panel.rotation.y = Math.PI / 2;
        panel.castShadow = true;
        panel.receiveShadow = true;
        group.add(panel);
        this.registerSelectable("gate", panel);
      }
    });

    gatePostPositions.forEach(z => {
      const pillar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.09, 0.12, MODEL.court.height + 0.1, 14),
        makeMaterial(COLORS.bronze, { metalness: 0.18, roughness: 0.5 })
      );
      pillar.position.set(x + 0.04, (MODEL.court.height + 0.1) / 2, z);
      pillar.castShadow = true;
      group.add(pillar);
      this.registerSelectable("gate", pillar);

      const cap = this.makeBox(0.42, 0.12, 0.42, COLORS.linenDim);
      cap.position.set(x + 0.04, MODEL.court.height + 0.12, z);
      group.add(cap);
      this.registerSelectable("gate", cap);
    });

    const lintel = this.makeBox(0.1, 0.08, gateHalf * 2, COLORS.bronze);
    lintel.position.set(x + 0.05, MODEL.court.height - 0.04, 0);
    group.add(lintel);
    this.registerSelectable("gate", lintel);

    this.layers.get("court").add(group);
  }

  makeCurtainPanel(width, height, color, opacity = 0.7) {
    const geometry = new THREE.PlaneGeometry(width, height, 10, 5);
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i += 1) {
      const px = position.getX(i);
      const py = position.getY(i);
      const fold = Math.sin(((px / width) + 0.5) * Math.PI * 5) * 0.16;
      const sag = Math.max(0, -py / height) * 0.08;
      position.setZ(i, fold + sag);
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
    return new THREE.Mesh(
      geometry,
      makeMaterial(color, {
        transparent: true,
        opacity,
        roughness: 0.9,
        side: THREE.DoubleSide
      })
    );
  }

  addTabernacle() {
    const court = this.layers.get("court");
    const coverings = this.layers.get("coverings");
    const veils = this.layers.get("veils");
    const { west, east, north, south, veil } = BOUNDS.tabernacle;
    const centerX = (west + east) / 2;
    const height = MODEL.tabernacle.height;

    const floor = this.makeBox(MODEL.tabernacle.length, 0.2, MODEL.tabernacle.width, 0xb9904f);
    floor.position.set(centerX, 0.12, 0);
    floor.receiveShadow = true;
    court.add(floor);

    const northWall = this.makeBox(MODEL.tabernacle.length, height, 0.24, 0xd3a239);
    northWall.position.set(centerX, height / 2, north);
    northWall.castShadow = true;
    northWall.receiveShadow = true;
    court.add(northWall);

    const westWall = this.makeBox(0.24, height, MODEL.tabernacle.width, 0xc18b35);
    westWall.position.set(west, height / 2, 0);
    westWall.castShadow = true;
    court.add(westWall);

    for (let x = west + 1; x <= east; x += 2) {
      const board = this.makeBox(0.12, height * 0.98, 0.16, 0xb1782d);
      board.position.set(x, height / 2, north + 0.2);
      court.add(board);
    }

    this.addLayeredCoverings(coverings);
    this.addVeil(veils, east + 0.06, "entranceVeil");
    this.addVeil(veils, veil, "innerVeil");
  }

  addLayeredCoverings(group) {
    const { west, east } = BOUNDS.tabernacle;
    const layerData = [
      { name: "fine linen", y: 10.18, color: COLORS.linen, backOverhang: 0.12, northEdge: -6.95, southEdge: 6.8, sideDrop: 9.65 },
      { name: "goat hair", y: 10.5, color: COLORS.goatHair, backOverhang: 0.45, northEdge: -6.95, southEdge: 6.15, sideDrop: 10 },
      { name: "ram skins dyed red", y: 10.82, color: COLORS.redSkin, backOverhang: 0.78, northEdge: -6.95, southEdge: 5.48, sideDrop: 10.35 },
      { name: "outer protective skin", y: 11.14, color: COLORS.badger, backOverhang: 1.1, northEdge: -6.95, southEdge: 4.82, sideDrop: 10.7 }
    ];

    layerData.forEach((layer, index) => {
      const frontEdge = east + 0.04;
      const backEdge = west - layer.backOverhang;
      const length = frontEdge - backEdge;
      const centerX = (frontEdge + backEdge) / 2;
      const width = layer.southEdge - layer.northEdge;
      const centerZ = (layer.southEdge + layer.northEdge) / 2;

      const roof = this.makeRoofCloth(length, width, layer.color, index);
      roof.position.set(centerX, layer.y, centerZ);
      group.add(roof);
      this.registerSelectable("coverings", roof);

      const openSideEdge = this.makeBox(length, 0.11, 0.16, layer.color);
      openSideEdge.position.set(centerX, layer.y - 0.2 - index * 0.03, layer.southEdge + 0.03);
      openSideEdge.castShadow = true;
      group.add(openSideEdge);
      this.registerSelectable("coverings", openSideEdge);

      const frontFlap = this.makeFrontCoveringFlap(width, 0.9, layer.color, index);
      frontFlap.position.set(frontEdge + 0.02, layer.y - 0.48, centerZ);
      group.add(frontFlap);
      this.registerSelectable("coverings", frontFlap);

      const frontRoll = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, width, 16),
        makeMaterial(layer.color, { roughness: 0.88, side: THREE.DoubleSide })
      );
      frontRoll.position.set(frontEdge + 0.02, layer.y - 0.08, centerZ);
      frontRoll.rotation.x = Math.PI / 2;
      frontRoll.castShadow = true;
      group.add(frontRoll);
      this.registerSelectable("coverings", frontRoll);
    });

    const outerLayer = layerData[layerData.length - 1];
    const sideFrontEdge = east + 0.04;
    const sideBackEdge = west - 0.55;
    const sideLength = sideFrontEdge - sideBackEdge;
    const sideCenterX = (sideFrontEdge + sideBackEdge) / 2;
    const northDrape = this.makeDrapeCloth(sideLength, outerLayer.sideDrop, outerLayer.color, layerData.length - 1);
    northDrape.position.set(sideCenterX, outerLayer.y - outerLayer.sideDrop / 2 - 0.08, outerLayer.northEdge - 0.03);
    group.add(northDrape);
    this.registerSelectable("coverings", northDrape);
  }

  makeRoofCloth(length, width, color, layerIndex) {
    const geometry = new THREE.PlaneGeometry(length, width, 44, 18);
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i += 1) {
      const px = position.getX(i);
      const py = position.getY(i);
      const across = Math.abs(py) / (width / 2);
      const lengthWave = Math.sin(((px / length) + 0.5) * Math.PI * 8 + layerIndex * 0.45) * 0.05;
      const crossWave = Math.cos(((py / width) + 0.5) * Math.PI * 7) * 0.035;
      const edgeSag = Math.pow(across, 1.8) * (0.24 + layerIndex * 0.035);
      position.setZ(i, lengthWave + crossWave - edgeSag);
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
    const cloth = new THREE.Mesh(
      geometry,
      makeMaterial(color, { roughness: 0.92, side: THREE.DoubleSide })
    );
    cloth.rotation.x = -Math.PI / 2;
    cloth.castShadow = true;
    cloth.receiveShadow = true;
    return cloth;
  }

  makeDrapeCloth(length, height, color, layerIndex) {
    const geometry = new THREE.PlaneGeometry(length, height, 42, 14);
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i += 1) {
      const px = position.getX(i);
      const py = position.getY(i);
      const vertical = (py / height) + 0.5;
      const fold = Math.sin(((px / length) + 0.5) * Math.PI * 16 + layerIndex * 0.8) * (0.12 + layerIndex * 0.025);
      const lowerSwing = Math.sin(((px / length) + 0.5) * Math.PI * 5) * (1 - vertical) * 0.08;
      position.setZ(i, fold + lowerSwing);
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
    const cloth = new THREE.Mesh(
      geometry,
      makeMaterial(color, { roughness: 0.94, side: THREE.DoubleSide })
    );
    cloth.castShadow = true;
    cloth.receiveShadow = true;
    return cloth;
  }

  makeFrontCoveringFlap(width, height, color, layerIndex) {
    const geometry = new THREE.PlaneGeometry(width, height, 16, 6);
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i += 1) {
      const px = position.getX(i);
      const py = position.getY(i);
      const fold = Math.sin(((px / width) + 0.5) * Math.PI * 10 + layerIndex) * 0.08;
      const bottomCurl = Math.max(0, -py / height) * 0.12;
      position.setZ(i, fold + bottomCurl);
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
    const cloth = new THREE.Mesh(
      geometry,
      makeMaterial(color, { roughness: 0.9, side: THREE.DoubleSide })
    );
    cloth.rotation.y = Math.PI / 2;
    cloth.castShadow = true;
    cloth.receiveShadow = true;
    return cloth;
  }

  addVeil(parent, x, id) {
    const group = new THREE.Group();
    group.name = id;
    const colors = [COLORS.linen, COLORS.scarlet, COLORS.purple, COLORS.blue];
    const stripeDepth = MODEL.tabernacle.width / colors.length;
    const curtainHeight = MODEL.tabernacle.height * 0.86;
    const topY = MODEL.tabernacle.height * 0.92;
    const bottomLift = id === "entranceVeil" ? 0.16 : 0.08;
    const pillarPositions = id === "entranceVeil"
      ? [-5, -2.5, 0, 2.5, 5]
      : [-3.75, -1.25, 1.25, 3.75];

    colors.forEach((color, index) => {
      const panel = this.makeCurtainPanel(stripeDepth + 0.22, curtainHeight, color, id === "entranceVeil" ? 0.68 : 0.74);
      const z = BOUNDS.tabernacle.north + stripeDepth / 2 + index * stripeDepth;
      panel.position.set(x + 0.08, bottomLift + curtainHeight / 2, z);
      panel.rotation.y = Math.PI / 2;
      panel.castShadow = true;
      panel.receiveShadow = true;
      panel.userData.isVeilCloth = true;
      group.add(panel);
      this.registerSelectable(id, panel);

      const seam = new THREE.Mesh(
        new THREE.CylinderGeometry(0.035, 0.035, curtainHeight * 0.95, 8),
        makeMaterial(COLORS.gold, { metalness: 0.2, roughness: 0.45 })
      );
      seam.position.set(x + 0.02, bottomLift + curtainHeight / 2, z - stripeDepth / 2);
      seam.castShadow = true;
      group.add(seam);
      this.registerSelectable(id, seam);
    });

    const finalSeam = new THREE.Mesh(
      new THREE.CylinderGeometry(0.035, 0.035, curtainHeight * 0.95, 8),
      makeMaterial(COLORS.gold, { metalness: 0.2, roughness: 0.45 })
    );
    finalSeam.position.set(x + 0.02, bottomLift + curtainHeight / 2, BOUNDS.tabernacle.south);
    finalSeam.castShadow = true;
    group.add(finalSeam);
    this.registerSelectable(id, finalSeam);

    pillarPositions.forEach(z => {
      const pillar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.11, 0.14, MODEL.tabernacle.height, 14),
        makeMaterial(COLORS.gold, { metalness: 0.25, roughness: 0.38 })
      );
      pillar.position.set(x - 0.08, MODEL.tabernacle.height / 2, z);
      pillar.castShadow = true;
      group.add(pillar);
      this.registerSelectable(id, pillar);

      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.26, 0.16, 14),
        makeMaterial(COLORS.bronze, { metalness: 0.18, roughness: 0.48 })
      );
      base.position.set(x - 0.08, 0.08, z);
      base.castShadow = true;
      group.add(base);
      this.registerSelectable(id, base);
    });

    const rod = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, MODEL.tabernacle.width + 0.6, 16),
      makeMaterial(COLORS.gold, { metalness: 0.28, roughness: 0.42 })
    );
    rod.position.set(x - 0.04, topY, 0);
    rod.rotation.x = Math.PI / 2;
    rod.castShadow = true;
    group.add(rod);
    this.registerSelectable(id, rod);

    parent.add(group);
  }

  addCourtyardFurniture() {
    const group = this.layers.get("furniture");
    const tablePositions = [
      [15, -9],
      [15, 9],
      [33, -11],
      [33, 11],
      [41, -6],
      [41, 6]
    ];
    tablePositions.forEach(([x, z]) => {
      const table = this.makeBox(3.8, 0.24, 1.65, 0xc49449);
      table.position.set(x, 0.62, z);
      table.castShadow = true;
      group.add(table);
      [-1, 1].forEach(dx => {
        [-1, 1].forEach(dz => {
          const leg = this.makeBox(0.18, 0.72, 0.18, 0x8b5b2b);
          leg.position.set(x + dx * 1.45, 0.36, z + dz * 0.58);
          group.add(leg);
        });
      });
    });

    this.addBurntAltar(group);
    this.addLaver(group);
  }

  addBurntAltar(group) {
    const x = 25;
    const z = 0;
    const altar = this.makeBox(MODEL.altar.length, MODEL.altar.height, MODEL.altar.width, COLORS.bronze);
    altar.position.set(x, MODEL.altar.height / 2, z);
    altar.castShadow = true;
    altar.receiveShadow = true;
    group.add(altar);
    this.registerSelectable("altar", altar);

    const grate = this.makeBox(3.7, 0.12, 3.7, COLORS.bronzeDark);
    grate.position.set(x, MODEL.altar.height + 0.08, z);
    group.add(grate);
    this.registerSelectable("altar", grate);

    [-1, 1].forEach(dx => {
      [-1, 1].forEach(dz => {
        const horn = new THREE.Mesh(
          new THREE.ConeGeometry(0.28, 0.72, 10),
          makeMaterial(0xcd7c39, { metalness: 0.18 })
        );
        horn.position.set(x + dx * 2.08, MODEL.altar.height + 0.36, z + dz * 2.08);
        horn.castShadow = true;
        group.add(horn);
        this.registerSelectable("altar", horn);
      });
    });

    const fireLight = new THREE.PointLight(0xff7b25, 2.1, 24);
    fireLight.position.set(x, MODEL.altar.height + 1.5, z);
    group.add(fireLight);

    [0, 0.5, -0.5].forEach((offset, index) => {
      const flame = new THREE.Mesh(
        new THREE.ConeGeometry(0.72 - index * 0.1, 1.9 - index * 0.2, 16),
        makeMaterial(index === 1 ? 0xffdc55 : 0xff6f2c, { emissive: index === 1 ? 0xffd35b : 0xff5b1f, emissiveIntensity: 1.1 })
      );
      flame.position.set(x + offset, MODEL.altar.height + 0.95, z + (index - 1) * 0.24);
      flame.rotation.x = 0.12 * index;
      group.add(flame);
      this.registerSelectable("altar", flame);
    });

    this.addSmoke(group, x, z, MODEL.altar.height + 1.6, 9, 0.52);
  }

  addLaver(group) {
    const x = 5;
    const z = 0;
    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(0.42, 0.55, 0.82, 24),
      makeMaterial(COLORS.bronze, { metalness: 0.28, roughness: 0.42 })
    );
    base.position.set(x, 0.41, z);
    base.castShadow = true;
    group.add(base);
    this.registerSelectable("laver", base);

    const bowl = new THREE.Mesh(
      new THREE.SphereGeometry(MODEL.laver.diameter / 2, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.56),
      makeMaterial(COLORS.bronze, { metalness: 0.35, roughness: 0.36, side: THREE.DoubleSide })
    );
    bowl.scale.y = 0.48;
    bowl.rotation.x = Math.PI;
    bowl.position.set(x, 1.15, z);
    bowl.castShadow = true;
    group.add(bowl);
    this.registerSelectable("laver", bowl);

    const water = new THREE.Mesh(
      new THREE.CircleGeometry(MODEL.laver.diameter * 0.45, 48),
      makeMaterial(0x80c7de, { transparent: true, opacity: 0.72, metalness: 0.04, roughness: 0.18, side: THREE.DoubleSide })
    );
    water.rotation.x = -Math.PI / 2;
    water.position.set(x, 1.19, z);
    group.add(water);
    this.registerSelectable("laver", water);
  }

  addHolyFurniture() {
    const group = this.layers.get("furniture");
    this.addLampstand(group, -24, 3.25);
    this.addShewbreadTable(group, -24, -3.25);
    this.addIncenseAltar(group, BOUNDS.tabernacle.veil + 1.2, 0);
    this.addArk(group, BOUNDS.tabernacle.west + MODEL.tabernacle.mostHolyLength / 2, 0);
  }

  addLampstand(group, x, z) {
    const gold = makeMaterial(COLORS.goldLight, { metalness: 0.38, roughness: 0.32, emissive: 0x332100, emissiveIntensity: 0.1 });
    const base = this.makeBox(0.95, 0.18, 0.65, COLORS.gold);
    base.position.set(x, 0.1, z);
    group.add(base);
    this.registerSelectable("lampstand", base);

    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.075, MODEL.lampstand.height, 12), gold);
    stem.position.set(x, MODEL.lampstand.height / 2, z);
    group.add(stem);
    this.registerSelectable("lampstand", stem);

    const makeBranch = offset => {
      const side = Math.sign(offset);
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(x, 1.0 + Math.abs(offset) * 0.2, z),
        new THREE.Vector3(x + side * Math.abs(offset) * 0.34, 1.65 + Math.abs(offset) * 0.24, z),
        new THREE.Vector3(x + offset, MODEL.lampstand.height - Math.abs(offset) * 0.08, z)
      ]);
      const branch = new THREE.Mesh(new THREE.TubeGeometry(curve, 18, 0.045, 8, false), gold);
      group.add(branch);
      this.registerSelectable("lampstand", branch);
    };

    [-0.68, -0.46, -0.24, 0.24, 0.46, 0.68].forEach(makeBranch);
    [-0.72, -0.48, -0.24, 0, 0.24, 0.48, 0.72].forEach(offset => {
      const cup = new THREE.Mesh(new THREE.SphereGeometry(0.14, 14, 8), gold);
      cup.scale.y = 0.55;
      cup.position.set(x + offset, MODEL.lampstand.height + 0.05, z);
      group.add(cup);
      this.registerSelectable("lampstand", cup);

      const flame = new THREE.Mesh(
        new THREE.ConeGeometry(0.08, 0.22, 10),
        makeMaterial(0xffe68a, { emissive: 0xffb52a, emissiveIntensity: 1 })
      );
      flame.position.set(x + offset, MODEL.lampstand.height + 0.28, z);
      group.add(flame);
      this.registerSelectable("lampstand", flame);
    });
  }

  addShewbreadTable(group, x, z) {
    const table = this.makeBox(MODEL.table.length, 0.18, MODEL.table.width, 0xb5792c);
    table.position.set(x, MODEL.table.height, z);
    group.add(table);
    this.registerSelectable("shewbread", table);

    [-1, 1].forEach(dx => {
      [-1, 1].forEach(dz => {
        const leg = this.makeBox(0.12, MODEL.table.height, 0.12, 0x8c571f);
        leg.position.set(x + dx * 0.78, MODEL.table.height / 2, z + dz * 0.34);
        group.add(leg);
        this.registerSelectable("shewbread", leg);
      });
    });

    for (let i = 0; i < 6; i += 1) {
      [-0.22, 0.22].forEach(row => {
        const loaf = new THREE.Mesh(
          new THREE.SphereGeometry(0.13, 14, 8),
          makeMaterial(i % 2 ? 0xf2d283 : 0xf8df9e)
        );
        loaf.scale.set(1.5, 0.36, 0.8);
        loaf.position.set(x - 0.72 + i * 0.28, MODEL.table.height + 0.18, z + row);
        group.add(loaf);
        this.registerSelectable("shewbread", loaf);
      });
    }
  }

  addIncenseAltar(group, x, z) {
    const altar = this.makeBox(MODEL.incense.length, MODEL.incense.height, MODEL.incense.width, COLORS.gold);
    altar.position.set(x, MODEL.incense.height / 2, z);
    altar.castShadow = true;
    group.add(altar);
    this.registerSelectable("incense", altar);

    [-1, 1].forEach(dx => {
      [-1, 1].forEach(dz => {
        const horn = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.28, 10), makeMaterial(COLORS.goldLight));
        horn.position.set(x + dx * 0.42, MODEL.incense.height + 0.14, z + dz * 0.42);
        group.add(horn);
        this.registerSelectable("incense", horn);
      });
    });

    this.addSmoke(group, x, z, MODEL.incense.height + 0.2, 7, 0.22);
  }

  addArk(group, x, z) {
    const ark = this.makeBox(MODEL.ark.length, MODEL.ark.height, MODEL.ark.width, COLORS.gold);
    ark.position.set(x, MODEL.ark.height / 2, z);
    ark.castShadow = true;
    group.add(ark);
    this.registerSelectable("ark", ark);

    const mercySeat = this.makeBox(MODEL.ark.length + 0.22, 0.16, MODEL.ark.width + 0.18, COLORS.goldLight);
    mercySeat.position.set(x, MODEL.ark.height + 0.13, z);
    group.add(mercySeat);
    this.registerSelectable("ark", mercySeat);

    [-0.58, 0.58].forEach(side => {
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.16, 14, 8), makeMaterial(COLORS.goldLight, { metalness: 0.35 }));
      body.position.set(x + side, MODEL.ark.height + 0.36, z);
      group.add(body);
      this.registerSelectable("ark", body);

      const wing = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.72, 3), makeMaterial(COLORS.goldLight, { metalness: 0.35 }));
      wing.position.set(x + side * 0.56, MODEL.ark.height + 0.62, z);
      wing.rotation.z = side > 0 ? -0.92 : 0.92;
      wing.rotation.y = Math.PI / 2;
      group.add(wing);
      this.registerSelectable("ark", wing);
    });
  }

  addPriest() {
    const group = this.layers.get("priest");
    const x = 10.5;
    const z = 3.6;
    const add = mesh => {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      this.registerSelectable("priest", mesh);
      return mesh;
    };

    const skin = makeMaterial(0xb97743, { roughness: 0.62 });
    const linen = makeMaterial(0xf7f1df, { roughness: 0.86 });
    const linenShadow = makeMaterial(0xe2d6bf, { roughness: 0.9 });
    const gold = makeMaterial(COLORS.goldLight, { metalness: 0.24, roughness: 0.36 });
    const blue = makeMaterial(COLORS.blue, { roughness: 0.58 });
    const purple = makeMaterial(COLORS.purple, { roughness: 0.62 });
    const scarlet = makeMaterial(COLORS.scarlet, { roughness: 0.62 });

    const robe = add(new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.62, 2.1, 26, 1, true), linen));
    robe.position.set(x, 1.18, z);

    const lowerHem = add(new THREE.Mesh(new THREE.TorusGeometry(0.51, 0.035, 8, 32), linenShadow));
    lowerHem.position.set(x, 0.16, z);
    lowerHem.rotation.x = Math.PI / 2;

    const torso = add(new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.48, 0.98, 24), linen));
    torso.position.set(x, 2.3, z);

    const shoulders = add(new THREE.Mesh(new THREE.CylinderGeometry(0.51, 0.42, 0.22, 24), linenShadow));
    shoulders.position.set(x, 2.88, z);
    shoulders.scale.z = 0.75;

    const neck = add(new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.24, 16), skin));
    neck.position.set(x, 3.16, z);

    const head = add(new THREE.Mesh(new THREE.SphereGeometry(0.32, 24, 16), skin));
    head.position.set(x, 3.46, z);
    head.scale.set(0.92, 1.08, 0.9);

    const nose = add(new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.16, 10), skin));
    nose.position.set(x, 3.47, z + 0.3);
    nose.rotation.x = Math.PI / 2;

    const beard = add(new THREE.Mesh(new THREE.SphereGeometry(0.18, 14, 8), makeMaterial(0x4f2c1b, { roughness: 0.8 })));
    beard.position.set(x, 3.24, z + 0.2);
    beard.scale.set(0.9, 0.8, 0.48);

    const turbanBand = add(new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.075, 8, 28), linen));
    turbanBand.position.set(x, 3.7, z);
    turbanBand.rotation.x = Math.PI / 2;

    const turbanCap = add(new THREE.Mesh(new THREE.SphereGeometry(0.28, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), linen));
    turbanCap.position.set(x, 3.72, z);

    const sash = add(this.makeBox(0.98, 0.13, 0.16, COLORS.blue));
    sash.position.set(x, 1.92, z + 0.47);

    const sashDrop = add(this.makeBox(0.16, 0.9, 0.12, COLORS.blue));
    sashDrop.position.set(x - 0.18, 1.48, z + 0.52);

    const breastplate = add(this.makeBox(0.42, 0.46, 0.08, COLORS.gold));
    breastplate.position.set(x, 2.52, z + 0.45);
    [
      [-0.12, 0.12, COLORS.scarlet],
      [0.12, 0.12, COLORS.blue],
      [-0.12, -0.12, COLORS.purple],
      [0.12, -0.12, COLORS.goldLight]
    ].forEach(([dx, dy, color]) => {
      const gem = add(this.makeBox(0.13, 0.13, 0.035, color));
      gem.position.set(x + dx, 2.52 + dy, z + 0.505);
    });

    const makeArm = (side, lifted = false) => {
      const shoulder = new THREE.Vector3(x + side * 0.45, 2.72, z + 0.02);
      const elbow = new THREE.Vector3(x + side * 0.7, lifted ? 2.2 : 2.06, z + 0.24);
      const handPoint = new THREE.Vector3(x + side * 0.48, lifted ? 1.78 : 1.5, z + 0.45);
      const sleeveCurve = new THREE.CatmullRomCurve3([shoulder, elbow, handPoint]);
      const sleeve = add(new THREE.Mesh(new THREE.TubeGeometry(sleeveCurve, 16, 0.105, 10, false), linen));
      sleeve.receiveShadow = true;

      const forearmCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(x + side * 0.56, lifted ? 1.95 : 1.72, z + 0.36),
        handPoint
      ]);
      add(new THREE.Mesh(new THREE.TubeGeometry(forearmCurve, 8, 0.052, 8, false), skin));
      const hand = add(new THREE.Mesh(new THREE.SphereGeometry(0.085, 12, 8), skin));
      hand.position.copy(handPoint);
    };

    makeArm(-1, true);
    makeArm(1, false);

    [-0.22, 0.22].forEach(side => {
      const foot = add(this.makeBox(0.2, 0.08, 0.38, 0x6f4221));
      foot.position.set(x + side, 0.07, z + 0.16);
    });
  }

  addCinematicActors() {
    this.actorsGroup = new THREE.Group();
    this.actorsGroup.name = "cinematic-actors";
    this.actorsGroup.visible = false;
    this.scene.add(this.actorsGroup);

    const actorEntries = [
      ["sinner", this.createHumanActor({ robeColor: 0xcf9a67, sashColor: 0x9c5830, headCoverColor: 0xf2ddba, scale: 1.08 })],
      ["priestActor", this.createHumanActor({ robeColor: COLORS.linen, sashColor: COLORS.blue, headCoverColor: COLORS.linen, scale: 1.06, priest: true })],
      ["highPriest", this.createHumanActor({ robeColor: COLORS.linen, sashColor: 0xd6b45a, headCoverColor: COLORS.linen, scale: 1.08, priest: true, highPriest: true })],
      ["fitMan", this.createHumanActor({ robeColor: 0xb98755, sashColor: 0x6f4221, headCoverColor: 0xf2ddba, scale: 1 })],
      ["familyA", this.createHumanActor({ robeColor: 0xd7b078, sashColor: 0x85573a, headCoverColor: 0xf2ddba, scale: 0.92 })],
      ["familyB", this.createHumanActor({ robeColor: 0xc78b6d, sashColor: 0x6e4c7e, headCoverColor: 0xf0dfc1, scale: 0.82 })],
      ["lamb", this.createAnimalActor({ color: 0xf5ecd8, headColor: 0xe8dcc7, scale: 1 })],
      ["goatA", this.createAnimalActor({ color: 0xf1e4ca, headColor: 0xd8c4a5, scale: 1.04, horns: true })],
      ["liveGoat", this.createAnimalActor({ color: 0xf7efdd, headColor: 0xe6d6bd, scale: 1.04, horns: true })]
    ];

    actorEntries.forEach(([id, actor]) => {
      actor.name = `cinematic-${id}`;
      actor.visible = false;
      actor.userData.actorId = id;
      actor.userData.defaultScale = actor.scale.clone();
      this.actors.set(id, actor);
      this.actorsGroup.add(actor);
    });
  }

  createHumanActor({
    robeColor = COLORS.linen,
    sashColor = COLORS.blue,
    headCoverColor = COLORS.linen,
    scale = 1,
    priest = false,
    highPriest = false
  } = {}) {
    const actor = new THREE.Group();
    actor.scale.setScalar(scale);
    const body = new THREE.Group();
    actor.add(body);

    const parts = { body };
    const skin = makeMaterial(0xa96f42, { roughness: 0.68 });
    const robe = makeMaterial(robeColor, { roughness: 0.84 });
    const robeShadow = makeMaterial(0xdfd3bd, { roughness: 0.9 });
    const sash = makeMaterial(sashColor, { roughness: 0.62 });
    const gold = makeMaterial(COLORS.goldLight, { metalness: 0.3, roughness: 0.34 });

    const add = (mesh, parent = body) => {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      parent.add(mesh);
      return mesh;
    };

    const lowerRobe = add(new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.64, 1.72, 24, 1, true), robe));
    lowerRobe.position.y = 0.98;

    const torso = add(new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.48, 0.92, 24), robe));
    torso.position.y = 2.08;

    const shoulderWrap = add(new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.48, 0.22, 24), robeShadow));
    shoulderWrap.position.y = 2.62;
    shoulderWrap.scale.z = 0.76;

    if (priest) {
      const frontPanel = add(this.makeBox(0.58, 1.28, 0.08, highPriest ? COLORS.linenDim : COLORS.blue));
      frontPanel.position.set(0, 1.92, 0.44);
      frontPanel.material.transparent = true;
      frontPanel.material.opacity = highPriest ? 0.42 : 0.62;

      if (highPriest) {
        const goldPlate = add(this.makeBox(0.44, 0.1, 0.055, COLORS.goldLight));
        goldPlate.position.set(0, 3.58, 0.28);
      }
    }

    const neck = add(new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.22, 16), skin));
    neck.position.y = 2.94;

    const head = add(new THREE.Mesh(new THREE.SphereGeometry(0.3, 24, 14), skin));
    head.position.y = 3.22;
    head.scale.set(0.92, 1.08, 0.9);
    head.userData.baseY = 3.22;
    parts.head = head;

    const nose = add(new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.14, 10), skin));
    nose.position.set(0, 3.23, 0.28);
    nose.rotation.x = Math.PI / 2;

    const beard = add(new THREE.Mesh(new THREE.SphereGeometry(0.18, 14, 8), makeMaterial(0x3e2115, { roughness: 0.85 })));
    beard.position.set(0, 3.02, 0.18);
    beard.scale.set(0.92, 0.78, 0.5);

    const turbanBand = add(new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.072, 8, 32), makeMaterial(headCoverColor, { roughness: 0.9 })));
    turbanBand.position.y = 3.46;
    turbanBand.rotation.x = Math.PI / 2;

    const turbanCap = add(new THREE.Mesh(new THREE.SphereGeometry(0.3, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), makeMaterial(headCoverColor, { roughness: 0.9 })));
    turbanCap.position.y = 3.48;

    const belt = add(new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.055, 8, 32), sash));
    belt.position.y = 1.62;
    belt.rotation.x = Math.PI / 2;
    belt.scale.z = 0.56;

    const beltFall = add(this.makeBox(0.16, 0.72, 0.09, sashColor));
    beltFall.position.set(-0.12, 1.22, 0.47);

    const basin = add(new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 0.13, 18), makeMaterial(COLORS.bronze, { metalness: 0.28, roughness: 0.42 })));
    basin.position.set(0, 1.42, 0.54);
    basin.rotation.x = Math.PI / 2;
    basin.visible = false;
    parts.basin = basin;

    const makeArm = side => {
      const arm = new THREE.Group();
      arm.position.set(side * 0.48, 2.47, 0.04);
      body.add(arm);

      const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.115, 0.92, 12), robe);
      sleeve.position.y = -0.43;
      sleeve.castShadow = true;
      sleeve.receiveShadow = true;
      arm.add(sleeve);

      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 8), skin);
      hand.position.set(0, -0.96, 0.06);
      hand.castShadow = true;
      arm.add(hand);
      return arm;
    };

    parts.leftArm = makeArm(-1);
    parts.rightArm = makeArm(1);

    [-0.22, 0.22].forEach(side => {
      const foot = add(this.makeBox(0.2, 0.07, 0.34, 0x70431f));
      foot.position.set(side, 0.04, 0.14);
    });

    this.setActorPoseForParts(parts, "stand");
    actor.userData.parts = parts;
    return actor;
  }

  createAnimalActor({ color = 0xf5ecd8, headColor = 0xe8dcc7, scale = 1, horns = false } = {}) {
    const animal = new THREE.Group();
    animal.scale.setScalar(scale);
    const body = new THREE.Group();
    animal.add(body);
    const parts = { body };
    const wool = makeMaterial(color, { roughness: 0.92 });
    const headMat = makeMaterial(headColor, { roughness: 0.86 });

    const add = mesh => {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      body.add(mesh);
      return mesh;
    };

    const torso = add(new THREE.Mesh(new THREE.SphereGeometry(0.42, 18, 10), wool));
    torso.position.set(0, 0.62, 0);
    torso.scale.set(1.25, 0.72, 1.72);

    const head = add(new THREE.Mesh(new THREE.SphereGeometry(0.23, 16, 10), headMat));
    head.position.set(0, 0.78, 0.72);
    head.scale.set(0.92, 0.95, 1.1);
    head.userData.baseY = 0.78;
    parts.head = head;

    [-0.18, 0.18].forEach(side => {
      const ear = add(new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.22, 8), headMat));
      ear.position.set(side, 0.98, 0.68);
      ear.rotation.x = -0.45;
      ear.rotation.z = side * 0.55;
    });

    if (horns) {
      [-0.09, 0.09].forEach(side => {
        const horn = add(new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.24, 8), makeMaterial(0xe8d8ab, { roughness: 0.72 })));
        horn.position.set(side, 1.02, 0.72);
        horn.rotation.x = -0.75;
      });
    }

    [-0.24, 0.24].forEach(x => {
      [-0.42, 0.42].forEach(z => {
        const leg = add(new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 0.58, 8), headMat));
        leg.position.set(x, 0.28, z);
      });
    });

    this.setActorPoseForParts(parts, "stand");
    animal.userData.parts = parts;
    return animal;
  }

  setActorPose(actorId, pose = "stand") {
    const actor = this.actors.get(actorId);
    const parts = actor?.userData?.parts;
    if (!parts) return;
    this.setActorPoseForParts(parts, pose);
  }

  setActorPoseForParts(parts, pose = "stand") {
    const body = parts.body;
    if (body) {
      body.position.set(0, 0, 0);
      body.rotation.set(0, 0, 0);
      body.scale.set(1, 1, 1);
    }

    if (parts.head) {
      parts.head.position.y = parts.head.userData.baseY ?? parts.head.position.y;
      parts.head.rotation.set(0, 0, 0);
    }

    if (parts.basin) parts.basin.visible = pose === "carryBasin";

    const left = parts.leftArm;
    const right = parts.rightArm;
    const setArms = (leftX = 0, rightX = 0, leftZ = 0.18, rightZ = -0.18) => {
      if (left) left.rotation.set(leftX, 0, leftZ);
      if (right) right.rotation.set(rightX, 0, rightZ);
    };

    if (pose === "walk") {
      setArms(-0.28, 0.28, 0.16, -0.16);
      return;
    }
    if (pose === "handsOn") {
      if (body) body.rotation.x = 0.16;
      setArms(-1.08, -1.08, 0.08, -0.08);
      return;
    }
    if (pose === "receive") {
      setArms(-0.86, -0.86, 0.06, -0.06);
      return;
    }
    if (pose === "carryBasin") {
      if (parts.basin) parts.basin.visible = true;
      setArms(-1.0, -1.0, 0.02, -0.02);
      return;
    }
    if (pose === "wash") {
      if (body) body.rotation.x = 0.12;
      setArms(-0.95, -0.95, 0.02, -0.02);
      return;
    }
    if (pose === "tend") {
      setArms(-0.25, -1.08, 0.14, -0.04);
      return;
    }
    if (pose === "reverent") {
      if (body) body.rotation.x = 0.1;
      setArms(0.05, 0.05, 0.18, -0.18);
      return;
    }
    if (pose === "bow") {
      if (body) {
        body.rotation.x = 0.2;
        body.position.y = -0.06;
      }
      if (parts.head) parts.head.position.y = 0.62;
      return;
    }

    setArms();
  }

  showActors(ids = []) {
    const visible = new Set(ids);
    let anyVisible = false;
    this.actors.forEach((actor, id) => {
      const shouldShow = visible.has(id);
      actor.userData.wasVisible = actor.visible && shouldShow;
      actor.visible = shouldShow;
      if (actor.visible) anyVisible = true;
    });
    if (this.actorsGroup) this.actorsGroup.visible = anyVisible;
    this.needsRender = true;
  }

  keepActorClearOfAltar(position) {
    const clearance = 1.05;
    const minX = 25 - MODEL.altar.length / 2 - clearance;
    const maxX = 25 + MODEL.altar.length / 2 + clearance;
    const minZ = -MODEL.altar.width / 2 - clearance;
    const maxZ = MODEL.altar.width / 2 + clearance;
    if (position.x <= minX || position.x >= maxX || position.z <= minZ || position.z >= maxZ) {
      return position;
    }

    const distances = [
      { axis: "x", value: minX, distance: Math.abs(position.x - minX) },
      { axis: "x", value: maxX, distance: Math.abs(maxX - position.x) },
      { axis: "z", value: minZ, distance: Math.abs(position.z - minZ) },
      { axis: "z", value: maxZ, distance: Math.abs(maxZ - position.z) }
    ].sort((a, b) => a.distance - b.distance);

    const nearest = distances[0];
    if (nearest.axis === "x") position.x = nearest.value;
    if (nearest.axis === "z") position.z = nearest.value;
    return position;
  }

  applyActorState(actorId, state = {}, duration = 0) {
    const actor = this.actors.get(actorId);
    if (!actor) return;
    actor.visible = true;
    if (this.actorsGroup) this.actorsGroup.visible = true;

    const endPosition = state.position ? this.keepActorClearOfAltar(vector(state.position)) : actor.position.clone();
    const endRotationY = state.rotationY ?? this.rotationToward(endPosition, state.lookAt);
    const shouldTween = duration > 0.05 && actor.userData.wasVisible;

    this.setActorPose(actorId, state.pose || "stand");
    if (!shouldTween) {
      actor.position.copy(endPosition);
      if (Number.isFinite(endRotationY)) actor.rotation.y = endRotationY;
      this.needsRender = true;
      return;
    }

    this.actorTweens = this.actorTweens.filter(tween => tween.actor !== actor);
    this.actorTweens.push({
      actor,
      elapsed: 0,
      duration,
      startPosition: actor.position.clone(),
      endPosition,
      startRotationY: actor.rotation.y,
      endRotationY: Number.isFinite(endRotationY) ? endRotationY : actor.rotation.y
    });
    this.needsRender = true;
  }

  rotationToward(position, lookAt) {
    if (!lookAt) return undefined;
    const target = vector(lookAt);
    const dx = target.x - position.x;
    const dz = target.z - position.z;
    if (Math.hypot(dx, dz) < 0.001) return undefined;
    return Math.atan2(dx, dz);
  }

  updateActorTweens(delta) {
    if (!this.actorTweens.length) return false;
    this.actorTweens.forEach(tween => {
      tween.elapsed += delta;
      const t = Math.min(1, tween.elapsed / tween.duration);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      tween.actor.position.lerpVectors(tween.startPosition, tween.endPosition, eased);
      tween.actor.rotation.y = THREE.MathUtils.lerp(tween.startRotationY, tween.endRotationY, eased);
    });
    this.actorTweens = this.actorTweens.filter(tween => tween.elapsed < tween.duration);
    this.needsRender = true;
    return true;
  }

  resetCinematicState() {
    this.actorTweens = [];
    this.actors.forEach(actor => {
      actor.visible = false;
      actor.userData.wasVisible = false;
      const scale = actor.userData.defaultScale;
      if (scale) actor.scale.copy(scale);
      const parts = actor.userData.parts;
      if (parts) this.setActorPoseForParts(parts, "stand");
    });
    if (this.actorsGroup) this.actorsGroup.visible = false;
    this.setCinematicActorMode(false);
    this.needsRender = true;
  }

  setCinematicActorMode(enabled) {
    const priestLayer = this.layers.get("priest");
    if (!priestLayer) return;
    priestLayer.visible = enabled ? false : this.activeLayers.has("priest");
  }

  addSmoke(group, x, z, baseY, count, scale) {
    for (let i = 0; i < count; i += 1) {
      const puff = new THREE.Mesh(
        new THREE.SphereGeometry(scale + i * scale * 0.16, 16, 8),
        makeMaterial(0xf3ecdd, { transparent: true, opacity: Math.max(0.08, 0.24 - i * 0.018), roughness: 0.96 })
      );
      puff.position.set(x + i * 0.16, baseY + i * 0.8, z - i * 0.1);
      puff.scale.set(1.4, 0.5, 0.9);
      group.add(puff);
    }
  }

  makeBox(width, height, depth, color) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(width, height, depth),
      makeMaterial(color, { metalness: color === COLORS.gold || color === COLORS.goldLight ? 0.28 : 0.06 })
    );
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }

  makeTent(width, depth, height) {
    const halfW = width / 2;
    const halfD = depth / 2;
    const vertices = new Float32Array([
      -halfW, 0, -halfD,
      halfW, 0, -halfD,
      0, height, -halfD,
      -halfW, 0, halfD,
      halfW, 0, halfD,
      0, height, halfD
    ]);
    const indices = [
      0, 1, 2,
      3, 5, 4,
      0, 3, 4, 0, 4, 1,
      1, 4, 5, 1, 5, 2,
      2, 5, 3, 2, 3, 0
    ];
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const tent = new THREE.Mesh(geometry, makeMaterial(0xf5ead0, { roughness: 0.92 }));
    tent.castShadow = false;
    tent.receiveShadow = false;
    return tent;
  }

  registerSelectable(articleId, object) {
    object.userData.articleId = articleId;
    object.userData.articleLabel = labelFor(articleId);
    this.selectables.push(object);
    if (!this.selectableObjects.has(articleId)) this.selectableObjects.set(articleId, []);
    this.selectableObjects.get(articleId).push(object);
  }

  toggleLayer(layer, button) {
    const group = this.layers.get(layer);
    if (!group) return;
    group.visible = !group.visible;
    if (group.visible) this.activeLayers.add(layer);
    else this.activeLayers.delete(layer);
    button?.classList.toggle("active", group.visible);
    this.needsRender = true;
  }

  applyView(viewId, animate = true) {
    const preset = VIEW_PRESETS[viewId] || VIEW_PRESETS.side;
    this.stopPath();
    this.setVeilFocusMode(null);
    this.viewButtons.forEach(button => button.classList.toggle("active", button.dataset.sceneView === viewId));
    this.moveCamera(vector(preset.camera), vector(preset.target), animate ? 0.7 : 0);
  }

  moveCamera(position, target, duration = 0.65) {
    if (!duration) {
      this.camera.position.copy(position);
      this.controls.target.copy(target);
      this.controls.update();
      this.needsRender = true;
      return;
    }
    this.cameraTween = {
      elapsed: 0,
      duration,
      startPosition: this.camera.position.clone(),
      startTarget: this.controls.target.clone(),
      endPosition: position.clone(),
      endTarget: target.clone()
    };
    this.needsRender = true;
  }

  updateTween(delta) {
    if (!this.cameraTween) return;
    const tween = this.cameraTween;
    tween.elapsed += delta;
    const t = Math.min(1, tween.elapsed / tween.duration);
    const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    this.camera.position.lerpVectors(tween.startPosition, tween.endPosition, eased);
    this.controls.target.lerpVectors(tween.startTarget, tween.endTarget, eased);
    if (t >= 1) this.cameraTween = null;
    this.needsRender = true;
  }

  handleManualNavigation() {
    if (this.cameraTween) {
      this.cameraTween = null;
      this.needsRender = true;
    }
    this.setVeilFocusMode(null);
    if (this.currentPath || this.currentCinematicPath) this.stopPath();
  }

  key(event) {
    if (!this.isActive()) return;
    const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (!keys.includes(event.key)) return;
    const target = event.target;
    if (target && ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(target.tagName)) return;
    event.preventDefault();
    this.handleManualNavigation();

    const angle = event.shiftKey ? 0.035 : 0.075;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      this.orbitCameraHorizontal(event.key === "ArrowRight" ? angle : -angle);
      return;
    }

    this.orbitCameraVertical(event.key === "ArrowUp" ? -angle : angle);
    this.needsRender = true;
  }

  orbitCameraHorizontal(angle) {
    const offset = this.camera.position.clone().sub(this.controls.target);
    if (offset.lengthSq() < 0.001) return;
    offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);
    this.camera.position.copy(this.controls.target.clone().add(offset));
    this.controls.update();
    this.needsRender = true;
  }

  orbitCameraVertical(angle) {
    const offset = this.camera.position.clone().sub(this.controls.target);
    if (offset.lengthSq() < 0.001) return;
    const spherical = new THREE.Spherical().setFromVector3(offset);
    const lowestAngle = 0.18;
    const groundLevelAngle = Math.PI / 2 - 0.035;
    spherical.phi = THREE.MathUtils.clamp(spherical.phi + angle, lowestAngle, groundLevelAngle);
    offset.setFromSpherical(spherical);
    this.camera.position.copy(this.controls.target.clone().add(offset));
    this.controls.update();
    this.needsRender = true;
  }

  handleSceneControl(command) {
    if (!this.isActive()) return;
    this.handleManualNavigation();
    const angle = 0.075;
    if (command === "orbitLeft") this.orbitCameraHorizontal(-angle);
    if (command === "orbitRight") this.orbitCameraHorizontal(angle);
    if (command === "orbitUp") this.orbitCameraVertical(-angle);
    if (command === "orbitDown") this.orbitCameraVertical(angle);
    if (command === "zoomIn") this.zoomCamera(0.84);
    if (command === "zoomOut") this.zoomCamera(1.19);
  }

  zoomCamera(factor) {
    const offset = this.camera.position.clone().sub(this.controls.target);
    const currentDistance = offset.length();
    if (currentDistance < 0.01) return;
    const nextDistance = THREE.MathUtils.clamp(
      currentDistance * factor,
      this.controls.minDistance,
      this.controls.maxDistance
    );
    offset.normalize().multiplyScalar(nextDistance);
    this.camera.position.copy(this.controls.target.clone().add(offset));
    this.controls.update();
    this.needsRender = true;
  }

  pointerDown(event) {
    if (event.button !== 0) return;
    this.handleManualNavigation();
    this.pointerStart = { x: event.clientX, y: event.clientY };
    this.dragExceeded = false;
  }

  pointerMove(event) {
    if (this.pointerStart) {
      const dx = event.clientX - this.pointerStart.x;
      const dy = event.clientY - this.pointerStart.y;
      if (Math.hypot(dx, dy) > 8) this.dragExceeded = true;
    }
    const hit = this.pick(event);
    this.canvas.style.cursor = hit ? "pointer" : "grab";
  }

  click(event) {
    if (this.dragExceeded) {
      this.pointerStart = null;
      this.dragExceeded = false;
      return;
    }
    this.pointerStart = null;
    const hit = this.pick(event);
    if (!hit) return;
    const id = hit.object.userData.articleId;
    if (!id) return;
    if (id === "posts") {
      this.focusPoint(id, hit.point, true);
      return;
    }
    this.focusObject(id, true);
  }

  pick(event) {
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.selectables.filter(object => this.isVisibleDeep(object)), false);
    const visibleInteriorHit = hits.find(hit => INTERIOR_ARTICLE_IDS.has(hit.object.userData.articleId));
    const frontHitId = hits[0]?.object.userData.articleId;
    if (visibleInteriorHit && VEIL_ARTICLE_IDS.has(frontHitId)) return visibleInteriorHit;
    return hits[0] || null;
  }

  isVisibleDeep(object) {
    let current = object;
    while (current) {
      if (!current.visible) return false;
      current = current.parent;
    }
    return true;
  }

  focusObject(id, openAfter = false, duration = 0.62) {
    const objects = this.selectableObjects.get(id);
    if (!objects?.length) return;
    this.setVeilFocusMode(id);
    this.highlight(id);
    const box = new THREE.Box3();
    objects.forEach(object => box.expandByObject(object));
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const radius = Math.max(size.x, size.y, size.z, 4);
    const focusView = OBJECT_FOCUS_VIEWS[id];
    let position;
    let target;

    if (focusView) {
      const offset = vector(focusView.cameraOffset);
      const distanceScale = Math.max(1, focusView.minDistance / Math.max(offset.length(), 0.001), radius / 4);
      position = center.clone().add(offset.multiplyScalar(distanceScale));
      target = center.clone().add(vector(focusView.targetOffset));
    } else {
      const direction = new THREE.Vector3(1.8, 1.1, 1.35).normalize();
      position = center.clone().add(direction.multiplyScalar(radius * 4.1));
      target = center.clone().add(new THREE.Vector3(0, Math.min(2.4, radius * 0.2), 0));
    }

    position.y = Math.max(position.y, 2.7);
    this.moveCamera(position, target, duration);
    if (openAfter) {
      window.setTimeout(() => this.openArticle(id), Math.min(850, duration * 1000));
    }
  }

  focusPoint(id, point, openAfter = false, duration = 0.42) {
    if (!point) return;
    this.setVeilFocusMode(null);
    this.highlightPoint(point);
    const target = point.clone();
    target.y = Math.max(2.6, point.y + 1.25);

    const currentDirection = this.camera.position.clone().sub(this.controls.target);
    if (currentDirection.lengthSq() < 0.001) currentDirection.set(1.6, 0.8, 1.2);
    currentDirection.normalize();

    const position = target.clone().add(currentDirection.multiplyScalar(12));
    position.y = Math.max(position.y, 3.8);
    this.moveCamera(position, target, duration);
    if (openAfter) {
      window.setTimeout(() => this.openArticle(id), Math.min(700, duration * 1000 + 80));
    }
  }

  highlight(id) {
    if (this.highlightHelper) {
      this.scene.remove(this.highlightHelper);
      this.highlightHelper = null;
    }
    const objects = this.selectableObjects.get(id);
    if (!objects?.length) return;
    const box = new THREE.Box3();
    objects.forEach(object => box.expandByObject(object));
    box.expandByScalar(0.18);
    this.highlightHelper = new THREE.Box3Helper(box, 0xd68a1f);
    this.scene.add(this.highlightHelper);
    this.needsRender = true;
  }

  setVeilFocusMode(activeId) {
    const shouldRevealInterior = INTERIOR_ARTICLE_IDS.has(activeId);
    const veils = this.layers.get("veils");
    if (!veils) return;
    veils.traverse(object => {
      if (!object.userData?.isVeilCloth || !object.material) return;
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach(material => {
        if (material.userData.originalOpacity === undefined) {
          material.userData.originalOpacity = material.opacity;
          material.userData.originalTransparent = material.transparent;
        }
        if (shouldRevealInterior) {
          material.transparent = true;
          material.opacity = Math.min(material.userData.originalOpacity, 0.22);
        } else {
          material.opacity = material.userData.originalOpacity;
          material.transparent = material.userData.originalTransparent;
        }
        material.needsUpdate = true;
      });
    });
    this.needsRender = true;
  }

  highlightPoint(point) {
    if (this.highlightHelper) {
      this.scene.remove(this.highlightHelper);
      this.highlightHelper = null;
    }
    const box = new THREE.Box3().setFromCenterAndSize(
      point.clone().add(new THREE.Vector3(0, 1.8, 0)),
      new THREE.Vector3(4.4, 4.8, 4.4)
    );
    this.highlightHelper = new THREE.Box3Helper(box, 0xd68a1f);
    this.scene.add(this.highlightHelper);
    this.needsRender = true;
  }

  runPath(pathId) {
    if (CINEMATIC_PATHS[pathId]) {
      this.runCinematicPath(pathId);
      return;
    }
    const path = STUDY_PATHS[pathId];
    if (!path) return;
    this.stopPath(false);
    this.pathButtons.forEach(button => button.classList.toggle("active", button.dataset.scenePath === pathId));
    this.currentPath = path;
    this.currentPathSettings = STUDY_PATH_SETTINGS[pathId] || STUDY_PATH_SETTINGS.default;
    this.pathStep = 0;
    this.setGuidedCaptionMode(true);
    this.advancePath();
  }

  advancePath() {
    if (!this.currentPath) return;
    const step = this.currentPath[this.pathStep];
    if (!step) {
      this.stopPath();
      return;
    }
    const transition = step.transition ?? this.currentPathSettings?.transition ?? STUDY_PATH_SETTINGS.default.transition;
    const hold = step.hold ?? this.currentPathSettings?.hold ?? STUDY_PATH_SETTINGS.default.hold;
    this.focusObject(step.id, false, transition);
    this.currentDisplayedStep = this.pathStep;
    this.setPathCaption(labelFor(step.id), step.text, "", {
      index: this.currentDisplayedStep,
      total: this.currentPath.length
    });
    this.pathStep += 1;
    this.pathTimer = window.setTimeout(() => this.advancePath(), hold);
  }

  runCinematicPath(pathId) {
    const cinematic = CINEMATIC_PATHS[pathId];
    if (!cinematic) return;
    this.stopPath(false);
    this.pathButtons.forEach(button => button.classList.toggle("active", button.dataset.scenePath === pathId));
    this.currentCinematicPath = cinematic.steps;
    this.currentPathSettings = cinematic;
    this.pathStep = 0;
    this.setCinematicActorMode(true);
    this.setGuidedCaptionMode(true);
    this.advanceCinematicPath();
  }

  advanceCinematicPath() {
    if (!this.currentCinematicPath) return;
    const step = this.currentCinematicPath[this.pathStep];
    if (!step) {
      this.stopPath();
      return;
    }

    const transition = step.transition ?? this.currentPathSettings?.transition ?? STUDY_PATH_SETTINGS.default.transition;
    const hold = step.hold ?? this.currentPathSettings?.hold ?? STUDY_PATH_SETTINGS.default.hold;
    this.showActors(step.actors || []);
    Object.entries(step.actorStates || {}).forEach(([actorId, state]) => {
      this.applyActorState(actorId, state, transition);
    });

    if (step.focusId) {
      this.setVeilFocusMode(step.focusId);
      this.highlight(step.focusId);
    }

    if (step.camera && step.target) {
      this.moveCamera(vector(step.camera), vector(step.target), transition);
    } else if (step.focusId) {
      this.focusObject(step.focusId, false, transition);
    }

    this.currentDisplayedStep = this.pathStep;
    this.setPathCaption(step.title, step.text, step.scripture, {
      index: this.currentDisplayedStep,
      total: this.currentCinematicPath.length
    });
    this.pathStep += 1;
    this.pathTimer = window.setTimeout(() => this.advanceCinematicPath(), hold);
  }

  goGuidedStep(direction) {
    const path = this.currentCinematicPath || this.currentPath;
    if (!path?.length) return;
    const current = this.currentDisplayedStep >= 0 ? this.currentDisplayedStep : Math.max(0, this.pathStep - 1);
    const next = Math.max(0, Math.min(path.length - 1, current + direction));
    if (next === current) return;
    if (this.pathTimer) window.clearTimeout(this.pathTimer);
    this.pathTimer = null;
    this.pathStep = next;
    if (this.currentCinematicPath) this.advanceCinematicPath();
    else this.advancePath();
  }

  setPathCaption(title, text, scripture, meta = {}) {
    if (!this.caption) return;
    const hasProgress = Number.isInteger(meta.index) && Number.isInteger(meta.total) && meta.total > 0;
    const isFirst = hasProgress ? meta.index <= 0 : true;
    const isLast = hasProgress ? meta.index >= meta.total - 1 : true;
    const progress = hasProgress ? `<em>${meta.index + 1} / ${meta.total}</em>` : "";
    const scriptureLine = scripture ? `<small>${scripture}</small>` : "";
    this.caption.hidden = false;
    this.caption.innerHTML = `
      <button class="scene-path-arrow scene-path-arrow--back" type="button" data-path-step="prev" aria-label="Previous scene" ${isFirst ? "disabled" : ""}>&#8592;</button>
      <div class="scene-path-copy">
        ${progress}
        <strong>${title}</strong>
        <span class="scene-path-text">${text}</span>
        ${scriptureLine}
      </div>
      <button class="scene-path-arrow scene-path-arrow--front" type="button" data-path-step="next" aria-label="Next scene" ${isLast ? "disabled" : ""}>&#8594;</button>
    `;
  }

  setGuidedCaptionMode(enabled) {
    this.frame?.classList.toggle("scene-frame--guided", enabled);
  }

  stopPath(clearCaption = true) {
    if (this.pathTimer) window.clearTimeout(this.pathTimer);
    this.pathTimer = null;
    this.currentPath = null;
    this.currentCinematicPath = null;
    this.currentPathSettings = null;
    this.currentDisplayedStep = -1;
    this.actorTweens = [];
    this.resetCinematicState();
    this.setGuidedCaptionMode(false);
    this.setVeilFocusMode(null);
    if (this.highlightHelper) {
      this.scene.remove(this.highlightHelper);
      this.highlightHelper = null;
    }
    this.pathButtons.forEach(button => button.classList.remove("active"));
    if (clearCaption && this.caption) {
      this.caption.hidden = true;
      this.caption.innerHTML = "";
    }
  }
}
