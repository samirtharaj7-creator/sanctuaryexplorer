export const STUDY_PATHS = {
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

export const CINEMATIC_PATHS = {
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
