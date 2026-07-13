export const STUDY_PATHS = {
  sinner: [
    {
      id: "gate",
      text:
        "The sinner enters through the one open gate. He cannot climb the fence or devise a private route to God. The entrance welcomes him, while its singleness teaches that God Himself provides the way home."
    },
    {
      id: "altar",
      text:
        "The altar is the first thing he meets. An innocent life stands in his place, carrying what he cannot bear. Here mercy is offered freely, but the blood and fire keep anyone from calling it cheap."
    },
    {
      id: "laver",
      text:
        "Water follows sacrifice. At the laver, forgiveness opens into a cleansed life. God does more than remove guilt; He begins to wash the hands that serve and the feet that walk."
    },
    {
      id: "entranceVeil",
      text:
        "The worshiper cannot force his way into the Holy Place. The priest carries the ministry beyond him, applying blood at the altar and, in appointed offerings, before the veil."
    },
    {
      id: "lampstand",
      text:
        "Within the tent, the lamps keep burning. Salvation is more than release from yesterday's guilt. God gives light for the road ahead."
    },
    {
      id: "shewbread",
      text:
        "Bread remains before the Lord as a sign of covenant fellowship and daily provision. The restored life must be nourished by what God gives, not by its former hunger."
    },
    {
      id: "incense",
      text:
        "Near the veil, incense rises with prayer. The priest stands where the worshiper cannot, showing that confessed sin is carried through mediation rather than pushed aside."
    },
    {
      id: "innerVeil",
      text:
        "The inner curtain marks the distance sin has made between humanity and unveiled glory. Yet the boundary itself holds a promise: God is opening a way toward His throne."
    },
    {
      id: "ark",
      text:
        "The ark is hidden during the daily service, but it gives meaning to everything outside it: God's law beneath the mercy seat, justice met by atoning blood, and a final cleansing still to come."
    }
  ],
  daily: [
    { id: "altar", text: "Morning and evening, the continual offering kept God's mercy before the camp." },
    { id: "laver", text: "Before serving, the priest washed, joining holy ministry with a cleansed life." },
    { id: "lampstand", text: "He tended the lampstand so the Holy Place never stood in darkness." },
    { id: "shewbread", text: "Bread remained before the Lord, a quiet sign of covenant fellowship and daily care." },
    { id: "incense", text: "Incense rose at dawn and dusk, carrying the people's prayers into God's presence." },
    { id: "priest", text: "Day after day, the priest's work taught Israel to depend on a mediator." }
  ],
  atonement: [
    { id: "priest", text: "On the Day of Atonement, the high priest carried the solemn needs of the whole camp." },
    { id: "altar", text: "Sacrificial blood was prepared before he entered within the veil." },
    { id: "incense", text: "A cloud of incense covered the mercy seat as he approached." },
    { id: "innerVeil", text: "Only on this day, and only by the high priest, was the inner veil crossed." },
    { id: "ark", text: "Before the ark, judgment, cleansing, and mercy met." },
    { id: "gate", text: "Outside, the camp waited for the promise of sin removed and fellowship restored." }
  ],
  christ: [
    { id: "gate", text: "Jesus is the living way into the Father's presence." },
    { id: "altar", text: "Jesus is the Lamb who gives His life for sinners." },
    { id: "laver", text: "Jesus washes His people through the Spirit and the Word." },
    { id: "lampstand", text: "Jesus is the Light who shines in and through His people." },
    { id: "shewbread", text: "Jesus is the living Bread who sustains the covenant family." },
    { id: "incense", text: "Jesus is the interceding Priest through whom our prayers are welcomed." },
    { id: "innerVeil", text: "Jesus opens the new and living way through the veil." },
    { id: "ark", text: "Jesus ministers before the throne where mercy upholds, rather than cancels, God's law." }
  ]
};

export const CINEMATIC_PATHS = {
  sinner: {
    transition: 3.25,
    hold: 10400,
    steps: [
      {
        title: "The Sinner Enters the Gate",
        text:
          "A worshiper approaches from the camp with a lamb at his side. His pace slows near the entrance. The gate is open, but beyond it stands the altar. God has made a way back, and that way begins with sacrifice.",
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
          "He passes through the woven gate, leaving the open wilderness behind for the ordered court within. The movement makes the lesson physical: access to God is not achieved; it is received through the entrance He provides.",
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
          "Beside the altar, the worshiper leans over the lamb and rests his hand on its head. The scene is still and restrained. No violence is needed on screen for the meaning to be felt: guilt has been confessed, and an innocent substitute now stands in the sinner's place.",
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
          "The priest comes forward and takes up the ministry. The worshiper has confessed, but he cannot carry the service to its end. From here, he must trust the mediator God has appointed.",
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
          "Smoke rises from the bronze altar as the priest ministers with a basin nearby. The lamb is no longer shown. Blood at the altar and fire on the offering speak together: pardon costs the sinner nothing because God has accepted the cost of a substitute.",
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
          "Before moving toward the tent, the priest stops at the laver. Sacrifice has opened the way; washing prepares him for holy service. The same grace that forgives also cleanses.",
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
          "The worshiper remains in the court while the priest approaches the veil. Much of the ministry now passes beyond his sight. He must learn to trust what God is doing through the mediator he can no longer follow.",
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
          "In some purification offerings, blood was carried into the Holy Place, sprinkled before the inner veil, and placed on the incense altar. In many personal cases it remained at the bronze altar while the priest bore the worshiper's culpability through the appointed rite. In either form, sin was not dismissed. God placed it within a ministry that moved toward final cleansing.",
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
          "Incense rises close to the inner veil. The sinner waiting outside has not been forgotten. Confession, sacrifice, and prayer are gathered into the priest's ministry, and mercy continues where human eyes cannot follow.",
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
          "The priest ministers before the inner curtain but does not cross it in the daily service. The closed veil holds two truths together: the worshiper is truly forgiven, and the sanctuary still awaits its appointed cleansing.",
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
          "The worshiper turns back toward the camp with an easier step. He has not seen behind the curtain, but he has seen enough to trust God's promise. Sin has not been minimized; mercy has become larger. He leaves because God has accepted the sacrifice He provided.",
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
          "Before sunrise, the priest enters the quiet court. He comes not as a hero, but as a servant standing each morning where a needy people depend on mercy.",
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
          "He tends the altar fire and ministers the morning lamb. Blood and flame tell the camp that grace is not an occasional interruption. Before Israel's day has fully begun, God's provision is already there.",
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
          "At the laver, the priest washes his hands and feet again. Holy work calls for more than eagerness. It asks for clean actions, careful steps, and continuing dependence on God.",
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
          "He draws aside the entrance curtain and passes into the Holy Place. The people remain outside, yet his movement assures them that the ministry continues in God's presence.",
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
          "Inside the tent, he trims and tends the lamps. God does not leave His people in the darkness He has forgiven. He keeps light burning before Him.",
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
          "He turns toward the table, where the bread remains before the Lord. It is a quiet testimony that Israel lives from God's provision, not its own strength.",
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
          "At the golden altar, incense curls upward near the veil. Prayer does not arrive in God's presence on the strength of human words. It comes wrapped in the fragrance of accepted mediation.",
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
          "At evening the priest returns to the bronze altar. The second offering closes the day as the first one opened it. Israel lies down with sacrifice on both horizons and mercy around its hours.",
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
          "The high priest begins by bathing and putting on plain linen. He approaches without display, knowing that before he can represent the camp, he too must stand under God's mercy.",
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
          "The bull is offered for the high priest and his household. He does not enter as a self-sufficient mediator. He first receives the mercy he is about to carry on behalf of others.",
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
          "Two goats are presented before the Lord and the lots are cast. One will supply sacrificial blood; the other will later carry the confessed sins away. Together they show that God means not only to forgive sin, but to remove it.",
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
          "Carrying coals and incense, the high priest crosses the inner veil. A fragrant cloud forms over the mercy seat before blood is sprinkled, reminding him that no one approaches the Holy One on personal merit.",
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
          "Within the Most Holy Place, he sprinkles the bull's blood on and before the mercy seat. Mercy must first cover the priestly household before he can represent the people.",
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
          "The goat chosen for the Lord is offered for Israel. The camera remains reverent: a basin, the altar, the priest's measured movements. The scene communicates the essential truth without gore - the people's cleansing depends on a life God has provided.",
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
          "The high priest brings the Lord's goat blood within the veil and sprinkles it as he did the bull's blood. This is the blood that makes atonement for the people. The live goat has no part in supplying it.",
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
          "The ministry now extends from the ark to the Holy Place and the tent itself. Israel's impurities, transgressions, and sins have touched the sanctuary through God's work of forgiveness. The cleansing joins mercy with truthful judgment.",
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
          "Back in the court, the high priest places blood on the altar's horns and sprinkles it seven times. What the sanctuary has carried through the year will not remain there forever. The service points toward an end to sin's record and presence.",
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
          "Only after atonement has been completed for the sanctuary and altar is the live goat brought forward. It supplies no cleansing blood. It receives the confessed sins for removal from the camp.",
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
          "The high priest rests both hands on the live goat and confesses Israel's iniquities, transgressions, and sins. The animal is not a savior. It bears away what sacrificial blood has already answered before God.",
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
          "An appointed man leads the goat beyond the tents and into the wilderness. The action is simple, almost silent, but the meaning is unmistakable: the confessed sins are carried away from God's dwelling and His people.",
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
          "After the goat has gone, the high priest bathes, changes garments, and returns to offer burnt offerings. The day closes not with an empty court, but with a people newly devoted to God.",
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
          "At last the camp hears the promise of the day: before the Lord, they are clean from all their sins. Leviticus 16 neither softens evil nor leaves people beneath it. God forgives, cleanses, removes, and restores.",
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
