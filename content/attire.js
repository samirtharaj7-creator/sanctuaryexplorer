export const attireGroups = [
  {
    id: "ordinary",
    label: "Ordinary Priest",
    summary: "Simple white linen marked the ordinary priest for clean, consecrated service.",
    defaultGarment: "linen-tunic"
  },
  {
    id: "high",
    label: "High Priest",
    summary: "In garments of beauty and dignity, the high priest carried the names and concerns of Israel before God.",
    defaultGarment: "breastplate"
  },
  {
    id: "atonement",
    label: "Day of Atonement Linen",
    summary: "On the Day of Atonement, the high priest set aside the ornate garments and served in plain, holy linen.",
    defaultGarment: "holy-linen-garments"
  }
];

export const priestlyAttire = [
  {
    id: "linen-tunic",
    group: "ordinary",
    name: "Linen Tunic",
    zone: "tunic",
    accent: "#efe6cf",
    scripture: "KJV references: Exodus 28:39-40; Exodus 39:27; Leviticus 8:7.",
    shortMeaning: "A clean garment for holy service.",
    description:
      "The ordinary priest's basic garment was a woven linen tunic. It covered him simply and cleanly, without the splendor of the high priest's outer garments.",
    meaning:
      "He did not enter holy service in everyday clothes. The tunic visibly marked him as someone cleansed and set apart for work in God's presence.",
    typology:
      "The clean linen naturally directs Christian thought to the sinless righteousness of Jesus, who serves before the Father without stain.",
    application:
      "We begin service with what Christ gives, not with our own importance. His righteousness covers us, and from that gift grows a quiet, holy life.",
  },
  {
    id: "linen-breeches",
    group: "ordinary",
    name: "Linen Breeches",
    zone: "breeches",
    accent: "#e6dcc4",
    scripture: "KJV references: Exodus 28:42-43; Exodus 39:28.",
    shortMeaning: "Reverence and modesty before God's presence.",
    description:
      "The linen breeches were undergarments extending from the waist to the thighs. They prevented exposure as the priest moved and worked around the altar.",
    meaning:
      "The garment protected modesty as the priest served. God cared about what was hidden as well as what everyone could see.",
    typology:
      "Nothing secret or shameful mars Christ's priesthood. His ministry for us is pure through and through.",
    application:
      "Holiness reaches private life. Integrity before God matters when no one is looking as much as it does in public ministry.",
  },
  {
    id: "ordinary-sash",
    group: "ordinary",
    name: "Sash or Girdle",
    zone: "sash",
    accent: "#b87931",
    scripture: "KJV references: Exodus 28:39-40; Exodus 39:29; Leviticus 8:7.",
    shortMeaning: "Readiness for ordered service.",
    description:
      "The sash secured the tunic and made the priest ready to move and work. It was woven with fine linen and colored thread.",
    meaning:
      "A girded priest was prepared for service. The beauty of the garment was matched by discipline, order, and readiness.",
    typology:
      "Jesus is the ready Servant and High Priest. He came to do the Father's will and remains active for His people.",
    application:
      "Grace does not produce carelessness. It gathers our scattered attention and trains us for useful, faithful service.",
  },
  {
    id: "head-covering",
    group: "ordinary",
    name: "Linen Head Covering",
    zone: "head",
    accent: "#f7efe0",
    scripture: "KJV references: Exodus 28:40; Exodus 39:28.",
    shortMeaning: "The mind set apart for holy duty.",
    description:
      "The ordinary priests also wore linen caps, part of the garments God appointed for dignity and beauty.",
    meaning:
      "The head covering identified the priest as a man whose attention and judgment were given to sacred duty. Scripture does not assign a separate symbolic meaning to it, but its place in the uniform speaks of whole-person consecration.",
    typology:
      "The mind of Christ is completely devoted to the Father's will and saving purpose.",
    application:
      "Priestly living includes our inner life. Thoughts, plans, and imagination need to be brought under God's care along with visible actions.",
  },
  {
    id: "ephod",
    group: "high",
    name: "Ephod",
    zone: "ephod",
    accent: "#c78b32",
    scripture: "KJV references: Exodus 28:6-14; Exodus 39:2-7.",
    shortMeaning: "A garment of representation and priestly authority.",
    description:
      "The ephod was skillfully woven from gold, blue, purple, scarlet, and fine linen. Shoulder pieces joined it, and a matching band held it in place.",
    meaning:
      "Worn only by the high priest, it marked his representative office and gave his service royal dignity and beauty.",
    typology:
      "Jesus does not sympathize from a distance. As our High Priest, He has taken responsibility to represent His people before the Father.",
    application:
      "We stand before God in Someone stronger and better than ourselves. That truth humbles self-reliance and gives real assurance.",
  },
  {
    id: "shoulder-stones",
    group: "high",
    name: "Shoulder Stones",
    zone: "shoulders",
    accent: "#d4ab48",
    scripture: "KJV references: Exodus 28:9-12; Exodus 39:6-7.",
    shortMeaning: "The tribes carried on the priest's strength.",
    description:
      "Two onyx stones were mounted on the shoulders of the ephod, each engraved with six of Israel's tribal names.",
    meaning:
      "Whenever the high priest entered, he carried the names of all Israel before the Lord. Their place on his shoulders naturally conveys the burden and strength of representation.",
    typology:
      "Jesus does not forget the people He represents. The true High Priest carries His own with strength that never fails.",
    application:
      "We can pray and serve without pretending to carry everything ourselves. Christ bears the weight that would crush us.",
  },
  {
    id: "breastplate",
    group: "high",
    name: "Breastplate of Judgment",
    zone: "breastplate",
    accent: "#d19a2e",
    scripture: "KJV references: Exodus 28:15-30; Exodus 39:8-21.",
    shortMeaning: "Israel carried over the heart before God.",
    description:
      "The breastpiece was a folded square set with twelve precious stones, one for each tribe. It was fastened securely to the ephod and rested over the high priest's heart.",
    meaning:
      "The names of the tribes were carried on his shoulders and over his heart. In matters of judgment, God's people were represented with both responsibility and care.",
    typology:
      "Jesus carries His people in judgment with perfect knowledge, justice, and love. The One who represents us is the One who gave Himself for us.",
    application:
      "Judgment is good news for those who are in Christ. We can live honestly before God because our High Priest knows us and remains for us.",
  },
  {
    id: "urim-thummim",
    group: "high",
    name: "Urim and Thummim",
    zone: "urim",
    accent: "#f0d36a",
    scripture: "KJV references: Exodus 28:30; Numbers 27:21; Deuteronomy 33:8.",
    shortMeaning: "Guidance sought through appointed mediation.",
    description:
      "The Urim and Thummim were kept in the breastpiece and used when Israel sought God's direction. The Bible does not describe their form; this visualization presents them as two small stones within the breastpiece pouch.",
    meaning:
      "Israel was not expected to invent its own course in moments of national decision. Guidance was sought through the priestly means God had appointed.",
    typology:
      "Jesus is God's clearest and final revelation. In Him we see the truth, wisdom, and character needed to walk faithfully.",
    application:
      "We seek direction through Christ, Scripture, prayer, wise counsel, and the Spirit's guidance, not through impulse dressed up as certainty.",
  },
  {
    id: "blue-robe",
    group: "high",
    name: "Blue Robe",
    zone: "robe",
    accent: "#396aa2",
    scripture: "KJV references: Exodus 28:31-35; Exodus 39:22-26.",
    shortMeaning: "Heavenly-colored ministry beneath the ephod.",
    description:
      "The robe worn under the ephod was entirely blue. Bells and woven pomegranates lined its hem.",
    meaning:
      "Blue dominated the garment and gave the high priest's service a color associated with the tabernacle and the things of God. Christian readers have often seen in it a reminder of the heavenly ministry to which the earthly service pointed.",
    typology:
      "Hebrews presents Jesus as the minister of the true sanctuary in heaven. He carries human need into the presence of God.",
    application:
      "Faith looks beyond visible ceremonies to the living Christ who now ministers for us in heaven.",
  },
  {
    id: "bells-pomegranates",
    group: "high",
    name: "Bells and Pomegranates",
    zone: "hem",
    accent: "#b84b3a",
    scripture: "KJV references: Exodus 28:33-35; Exodus 39:24-26.",
    shortMeaning: "Audible ministry and fruitful service.",
    description:
      "Small golden bells alternated with woven pomegranates in blue, purple, and scarlet along the robe's hem.",
    meaning:
      "The bells made the high priest's movement audible. The pomegranate forms added color and the appearance of fruitfulness, though Scripture does not explain a separate symbolism for them.",
    typology:
      "Christ's priesthood is neither hidden nor barren. Its good news is proclaimed, and its fruit appears in lives He changes.",
    application:
      "Healthy service has a voice and fruit: a clear witness joined to a life that bears the marks of grace.",
  },
  {
    id: "embroidered-tunic",
    group: "high",
    name: "Embroidered Tunic",
    zone: "embroidered",
    accent: "#f5ead2",
    scripture: "KJV references: Exodus 28:39; Exodus 39:27.",
    shortMeaning: "Purity enriched with beauty.",
    description:
      "Beneath the colored garments, the high priest wore a finely woven linen tunic like the other priests.",
    meaning:
      "The linen base showed that splendor never replaced purity. Every visible sign of honor rested on consecration.",
    typology:
      "The glory of Jesus cannot be separated from His holiness. His majesty is the beauty of perfect obedience and self-giving love.",
    application:
      "Spiritual beauty is not a performance for others. It grows out of faithfulness and hidden consecration.",
  },
  {
    id: "high-priest-sash",
    group: "high",
    name: "Curious Girdle or Sash",
    zone: "sash",
    accent: "#a35a2c",
    scripture: "KJV references: Exodus 28:8; Exodus 39:5.",
    shortMeaning: "Glory bound into active service.",
    description:
      "A skillfully woven band, made from the same materials as the ephod, held the garment firmly around the high priest.",
    meaning:
      "Its purpose was practical as well as beautiful. The high priest's dignity was bound to active service.",
    typology:
      "Christ's glory is the glory of the One who serves and saves. His exaltation does not remove Him from His people.",
    application:
      "Gifts, position, and honor are safest when they are fastened to service rather than display.",
  },
  {
    id: "mitre",
    group: "high",
    name: "Mitre or Turban",
    zone: "mitre",
    accent: "#f4ead8",
    scripture: "KJV references: Exodus 28:39; Exodus 39:28; Leviticus 8:9.",
    shortMeaning: "The head set apart for holy judgment.",
    description:
      "The high priest wore a linen turban. A blue cord secured the gold plate across its front.",
    meaning:
      "The turban completed the dress of a man whose identity and authority were consecrated to God. His judgments were exercised as a servant of the covenant.",
    typology:
      "Jesus leads, judges, and intercedes with a mind wholly set on the Father's will.",
    application:
      "Consecration includes how we think and decide. Holiness must shape speech, judgment, and leadership.",
  },
  {
    id: "golden-plate",
    group: "high",
    name: "Golden Plate: Holiness to the Lord",
    zone: "plate",
    accent: "#d5aa3a",
    scripture: "KJV references: Exodus 28:36-38; Exodus 39:30-31.",
    shortMeaning: "Holiness borne on behalf of the people.",
    description:
      "A plate of pure gold, engraved with the words \"HOLINESS TO THE LORD,\" was fastened across the high priest's forehead.",
    meaning:
      "According to Exodus, the plate enabled the high priest to bear the guilt connected with Israel's holy gifts so that they could be accepted before the Lord.",
    typology:
      "Jesus bears the defects even of our worship and presents His people acceptable in His own holiness.",
    application:
      "Our best devotion still needs grace. Confidence rests in Christ's holiness, not in the flawless quality of our prayers or service.",
  },
  {
    id: "holy-linen-garments",
    group: "atonement",
    name: "Plain Holy Linen Garments",
    zone: "atonement",
    accent: "#f8f2e5",
    scripture: "KJV references: Leviticus 16:4, 23-24; Hebrews 9:7-14.",
    shortMeaning: "Humility in the final work of cleansing.",
    description:
      "For the Day of Atonement, the high priest set aside the full garments of glory and wore plain, holy linen. After washing, he entered the day's solemn ministry of cleansing.",
    meaning:
      "The simple linen kept attention on purity, humility, blood, confession, and the removal of sin. Splendor did not dominate the day of judgment.",
    typology:
      "Christ carries out His final priestly work with perfect holiness and on the basis of His own sacrifice.",
    application:
      "The antitypical Day of Atonement calls us to humility, honest confession, confidence in Christ, and a willingness to let Him remove the sin we are tempted merely to excuse.",
  }
];
