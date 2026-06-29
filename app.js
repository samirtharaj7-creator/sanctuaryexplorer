import { SanctuaryThreeScene } from "./sanctuary-scene.js?v=focus-glow-4";

const iconSvg = {
  flame:
    '<svg viewBox="0 0 24 24"><path d="M12 22c4.4 0 7-2.8 7-6.5 0-2.9-1.7-5.1-4.8-7.6.2 2.5-.8 3.8-2 4.8.2-3.6-1.7-6.2-4.2-8.7.3 4.3-3 6.1-3 10.9C5 19.1 7.9 22 12 22Z"/></svg>',
  water:
    '<svg viewBox="0 0 24 24"><path d="M7.5 14.5c0 3 2.4 5.5 5.5 5.5s5.5-2.5 5.5-5.5c0-2.7-3.4-6.1-5.5-9.5-2.1 3.4-5.5 6.8-5.5 9.5Z"/><path d="M4.3 13.2c-1.1 1.5-1.8 2.9-1.8 4.1 0 2 1.6 3.7 3.7 3.7.9 0 1.7-.3 2.4-.8"/><path d="M16.4 20.2c.7.5 1.5.8 2.4.8 2 0 3.7-1.6 3.7-3.7 0-1.2-.7-2.6-1.8-4.1"/></svg>',
  lamp:
    '<svg viewBox="0 0 24 24"><path d="M12 7.5v-3"/><path d="M12 19.5v-3"/><path d="M7.5 12h-3"/><path d="M19.5 12h-3"/><path d="m8.8 8.8-2.1-2.1"/><path d="m17.3 17.3-2.1-2.1"/><path d="m15.2 8.8 2.1-2.1"/><path d="m6.7 17.3 2.1-2.1"/><circle cx="12" cy="12" r="3.6"/></svg>',
  bread:
    '<svg viewBox="0 0 24 24"><path d="M7 6v12"/><path d="M12 6v12"/><path d="M17 6v12"/><path d="M5 8c1.5 0 2.5-1 2.5-2"/><path d="M10 8c1.5 0 2.5-1 2.5-2"/><path d="M15 8c1.5 0 2.5-1 2.5-2"/></svg>',
  cloud:
    '<svg viewBox="0 0 24 24"><path d="M7.3 18h9.5a4.2 4.2 0 0 0 .5-8.4A6.4 6.4 0 0 0 5.1 12 3.1 3.1 0 0 0 7.3 18Z"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24"><path d="M12 3.2 20 6v5.8c0 5-3.4 8.3-8 9.8-4.6-1.5-8-4.8-8-9.8V6l8-2.8Z"/></svg>',
  priest:
    '<svg viewBox="0 0 24 24"><path d="M12 3.5a2.6 2.6 0 0 1 2.6 2.6A2.6 2.6 0 0 1 12 8.7a2.6 2.6 0 0 1-2.6-2.6A2.6 2.6 0 0 1 12 3.5Z"/><path d="M7.5 21 9 10h6l1.5 11"/><path d="M9.5 10 12 14l2.5-4"/><path d="M6.2 13.5 9 11.3"/><path d="M17.8 13.5 15 11.3"/></svg>',
  users:
    '<svg viewBox="0 0 24 24"><path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M17 10a2.4 2.4 0 1 0 0-4.8A2.4 2.4 0 0 0 17 10Z"/><path d="M3.8 20v-1.7A5.2 5.2 0 0 1 9 13.1a5.2 5.2 0 0 1 5.2 5.2V20"/><path d="M15.2 13.4c2.8.2 5 2.4 5 5.2V20"/></svg>',
  sun:
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5"/><path d="M12 2.5v3"/><path d="M12 18.5v3"/><path d="M2.5 12h3"/><path d="M18.5 12h3"/><path d="m5.3 5.3 2.1 2.1"/><path d="m16.6 16.6 2.1 2.1"/><path d="m18.7 5.3-2.1 2.1"/><path d="m7.4 16.6-2.1 2.1"/></svg>',
  clock:
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.4 2"/></svg>',
  chevronLeft:
    '<svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>',
  chevronRight:
    '<svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>'
};

const feastProcedureIcons = {
  lamb: iconSvg.shield,
  blood: iconSvg.water,
  meal: iconSvg.bread,
  depart: iconSvg.chevronRight,
  purge: iconSvg.shield,
  assembly: iconSvg.users,
  days: iconSvg.clock,
  harvest: iconSvg.sun,
  offering: iconSvg.flame,
  spirit: iconSvg.cloud,
  priest: iconSvg.priest,
  cleansing: iconSvg.shield,
  trumpet:
    '<svg viewBox="0 0 24 24"><path d="M4 11h4l8-4v10l-8-4H4z"/><path d="M8 13v4"/><path d="M18 9.5c1 .6 1.6 1.5 1.6 2.5S19 13.9 18 14.5"/></svg>',
  shelter:
    '<svg viewBox="0 0 24 24"><path d="M4 19 12 5l8 14"/><path d="M8 19V9.8"/><path d="M16 19V9.8"/><path d="M6.2 15.2h11.6"/></svg>'
};

const articles = {
  altar: {
    title: "Altar of Burnt Offering",
    subtitle: "The Cross / Substitution",
    phase: "Outer Court",
    color: "linear-gradient(135deg, #cf5636, #812d1e)",
    icon: iconSvg.flame,
    structure: [
      "The altar was the first object a worshiper met after entering the court. Before he saw the tent, the lamp, the bread, or the ark, he saw fire and blood. The order matters: God begins the journey back with mercy provided at terrible cost.",
      "Its bronze-covered wood stood in the open court where every sacrifice was visible. The sinner could not pretend that guilt was harmless; the altar made sin concrete, public, and costly.",
      "The horns at the four corners suggested strength, refuge, and the reach of atonement. Blood touched the altar because God was teaching that life must answer death, and that the answer would be supplied through a substitute."
    ],
    process: [
      "The worshiper brought an unblemished animal and laid his hands on its head. In that quiet gesture he stopped defending himself and identified with the substitute God had provided.",
      "The animal was slain, and the priest applied the blood according to the offering. The worshiper did not manage his own guilt after confession; priestly ministry carried the sacrifice forward before God.",
      "Fire consumed the offering, and the smoke rose from the court. What had been a scene of guilt became a sign of acceptance: the sinner could leave knowing God had received the substitute."
    ],
    fulfillment: [
      "The altar points most directly to Christ's cross. Jesus did not merely teach about sacrifice; He became the Lamb who bore sin in the sinner's place.",
      "Every flame on the altar declared that forgiveness is free to the sinner because it is costly to the Substitute. The cross preserves both truths: God is merciful, and sin is not treated lightly.",
      "The altar also explains why Christian surrender is a response, not a payment. Believers offer themselves to God because Christ has already offered Himself for them."
    ],
    applications: [
      "When guilt feels heavy, begin where the sanctuary begins: with the sacrifice God has provided.",
      "Confession is not humiliation for its own sake; it is letting God place your sin on the Substitute instead of leaving it on you.",
      "A life given to God grows naturally out of a heart that knows it has been spared.",
      "The altar keeps every other spiritual lesson rooted in mercy."
    ],
    citations: "Exodus 27:1-8; Leviticus 1; John 1:29; Romans 12:1"
  },
  laver: {
    title: "The Laver",
    subtitle: "Baptism / Regeneration",
    phase: "Outer Court",
    color: "linear-gradient(135deg, #4b7cf0, #2448a5)",
    icon: iconSvg.water,
    structure: [
      "The laver stood between the altar and the tabernacle entrance. A priest could not move from sacrifice into holy service without stopping at water.",
      "Scripture gives no exact dimensions for the laver, but it gives its purpose clearly: priests washed their hands and feet before altar ministry or before entering the tent.",
      "Its placement is gentle and searching. Forgiveness at the altar is not the end of God's work in a person; grace also cleanses the hands that serve and the feet that walk."
    ],
    process: [
      "The priest washed repeatedly, not because the altar had failed, but because holy service required a continually cleansed life.",
      "Hands and feet are practical symbols. God was not speaking only about religious feeling; He was claiming the priest's actions, habits, movement, and daily work.",
      "The washing came after the sacrifice. That order matters: cleansing does not replace atonement; it flows from it."
    ],
    fulfillment: [
      "The laver points to Christ's cleansing ministry through the Spirit. He does not only forgive the record; He begins renewing the person.",
      "Baptism gathers this meaning into a visible act: the old life is buried with Christ, and a washed life rises to walk with Him.",
      "The laver keeps transformation in its proper place. We are not cleansed in order to persuade God to love us; we are cleansed because His sacrifice has already opened the way."
    ],
    applications: [
      "Ask God to wash what your words, hands, and feet actually touch each day.",
      "Let baptism remain a living memory, not merely a past ceremony.",
      "Do not separate pardon from renewal; the same grace that accepts you also restores you.",
      "When you stumble after forgiveness, return to the cleansing Christ provides instead of hiding in shame."
    ],
    citations: "Exodus 30:17-21; Titus 3:5; Romans 6:3-4; Hebrews 10:22"
  },
  lampstand: {
    title: "Golden Lampstand",
    subtitle: "Holy Spirit / Church Witness",
    phase: "Holy Place",
    color: "linear-gradient(135deg, #f2be3f, #b87820)",
    icon: iconSvg.lamp,
    structure: [
      "The lampstand stood on the south side of the Holy Place, giving light where there was no ordinary window.",
      "It was made from beaten pure gold, shaped into branches, bowls, blossoms, and lamps. Its beauty was not decorative excess; it taught that God's light is living, ordered, and fruitful.",
      "The Holy Place ministry depended on this light. Without it, the table, the incense altar, and the priestly work would be hidden in darkness."
    ],
    process: [
      "The priests tended the lamps morning and evening. Light in the sanctuary was not left to chance; it was guarded as part of daily ministry.",
      "Oil supplied the flame, teaching that true spiritual light is received, not manufactured. Human cleverness cannot replace the Spirit's illumination.",
      "The lampstand shone on bread and incense, joining three experiences that belong together: seeing, being fed, and praying in God's presence."
    ],
    fulfillment: [
      "Jesus is the Light of the world, and He gives the Spirit so His people can see truth and bear witness without pretending to be the source of light.",
      "The lampstand helps explain Christian witness. The church shines only as it remains supplied by Christ; disconnected from Him, the most polished witness grows dim.",
      "Revelation's lampstands show that this symbol continues after the cross: Christ still walks among His people, tending their light and calling them to faithful witness."
    ],
    applications: [
      "Ask for the Spirit before you open Scripture, make decisions, or try to help someone else.",
      "Do not confuse brightness with noise. Sanctuary light is steady, tended, and useful.",
      "Let your witness be supplied by communion with Christ rather than pressure to appear impressive.",
      "When life feels dark, look for the daily tending of God rather than a sudden display."
    ],
    citations: "Exodus 25:31-40; Zechariah 4:1-6; John 8:12; Revelation 1:12-20"
  },
  shewbread: {
    title: "Table of Shewbread",
    subtitle: "Word / Jesus the Bread",
    phase: "Holy Place",
    color: "linear-gradient(135deg, #b47834, #3d3021)",
    icon: iconSvg.bread,
    structure: [
      "The table stood on the north side of the Holy Place, opposite the lampstand. It held twelve loaves before the Lord, one for each tribe of Israel.",
      "The bread was not placed there because God needed food. It was a covenant sign that His people lived continually before His face and depended on His provision.",
      "Its golden table, crown-like border, and regular renewal made ordinary bread speak of holy fellowship: God feeds, remembers, and sustains His people."
    ],
    process: [
      "Every Sabbath the bread was arranged before the Lord, and the old bread was eaten by the priests in a holy place.",
      "The twelve loaves kept all Israel symbolically present before God. No tribe was forgotten, and no tribe sustained itself.",
      "The bread connected worship with daily dependence. Israel did not live by harvest alone, but by the word and care of the God who gave the harvest."
    ],
    fulfillment: [
      "Jesus calls Himself the Bread of Life. He is not only the sacrifice that removes guilt; He is the living nourishment that keeps the soul alive.",
      "Scripture feeds believers because it brings them to Christ. The Word is not a pantry of religious facts; it is bread for people who cannot live by themselves.",
      "The table shows that sanctification is more than avoiding sin. It is being steadily nourished in God's presence until the heart learns to trust His provision."
    ],
    applications: [
      "Come to Scripture as a hungry person, not merely as a researcher.",
      "Remember that God's people stand before Him together; faith is personal, but never isolated.",
      "Let Christ feed your endurance, imagination, obedience, and hope.",
      "When the soul feels thin, return to the table instead of trying to live on yesterday's strength."
    ],
    citations: "Exodus 25:23-30; Leviticus 24:5-9; Deuteronomy 8:3; John 6:35"
  },
  incense: {
    title: "Altar of Incense",
    subtitle: "Prayer / Intercession",
    phase: "Holy Place",
    color: "linear-gradient(135deg, #f3d96f, #c79329)",
    icon: iconSvg.cloud,
    structure: [
      "The incense altar stood directly before the inner veil, closer to the ark than any other object in the Holy Place.",
      "It was smaller than the bronze altar, but its location gave it great weight. The fragrance rose at the boundary of the throne room.",
      "This altar taught Israel that prayer is not a casual religious impulse. Prayer comes near to God through priestly mediation and on the basis of atoning blood."
    ],
    process: [
      "Morning and evening, when the lamps were tended, incense was burned before the Lord. Light and prayer rose together in the daily rhythm of the sanctuary.",
      "The incense was specially prepared and not treated as common perfume. God was teaching that worship must be received on His terms, not reshaped into personal preference.",
      "On the Day of Atonement, incense entered within the veil before the blood was sprinkled, forming a protective cloud before the mercy seat."
    ],
    fulfillment: [
      "The incense altar points to Christ's intercession. Our prayers rise because the living High Priest represents us, not because our words are strong enough on their own.",
      "Revelation pictures incense with the prayers of the saints, showing that heaven treats the prayers of God's people as precious when they are brought through Christ.",
      "The altar teaches bold nearness without casual presumption. We may come close, but we come through the Mediator."
    ],
    applications: [
      "Bring weak prayers to a strong Mediator; do not wait until your words feel worthy.",
      "Let prayer become a morning-and-evening rhythm, not only an emergency exit.",
      "Pray for others as part of priestly love, carrying their names before God.",
      "Hold reverence and intimacy together: the throne is holy, and Christ has made it approachable."
    ],
    citations: "Exodus 30:1-10; Leviticus 16:12-13; Psalm 141:2; Revelation 8:3-4"
  },
  ark: {
    title: "Ark of the Covenant",
    subtitle: "God's Throne / The Law",
    phase: "Most Holy Place",
    color: "linear-gradient(135deg, #d9ad38, #8d541e)",
    icon: iconSvg.shield,
    structure: [
      "The ark stood in the Most Holy Place as the throne-room center of the sanctuary. It was acacia wood overlaid with gold, combining durability, beauty, and covenant permanence.",
      "Inside the ark were the testimony of God's law, and later reminders of His provision and priestly authority. The ark did not hide God's government; it placed His law at the heart of His dwelling.",
      "Above the law was the mercy seat, the golden cover where blood was applied on the Day of Atonement. The arrangement is the gospel in furniture: God's law is not ignored, but mercy stands above the broken law through atoning blood.",
      "The cherubim over the mercy seat marked this as throne imagery. The sanctuary was not merely a religious classroom; it was the place where the King chose to dwell with His people."
    ],
    process: [
      "No ordinary priest entered the Most Holy Place. The high priest entered only on the Day of Atonement, and only with incense and blood.",
      "Blood was sprinkled before and upon the mercy seat, teaching that the final answer to sin had to reach the very throne of God's government.",
      "The Day of Atonement did not create forgiveness for the first time; it cleansed the sanctuary from the accumulated problem of confessed sin.",
      "At the ark, judgment and mercy were not enemies. God's throne revealed both the seriousness of sin and the depth of His saving grace."
    ],
    fulfillment: [
      "The ark points beyond the earthly tent to the heavenly throne where Christ ministers as Priest and King.",
      "Law and blood meet in Jesus. He does not save by lowering God's righteousness; He saves by bearing sin and upholding the truth of God's character.",
      "The manna, the law, and Aaron's rod find their deepest meaning in Christ: He is the living Bread, the embodied Word, and the risen Priest whose life cannot be overthrown.",
      "The final cleansing of the sanctuary points to Christ's closing work before His return, when sin is not only forgiven but finally removed from the universe."
    ],
    applications: [
      "Do not be afraid of God's throne when you come through Christ. The mercy seat is not decoration; it is the place where grace speaks.",
      "Let God's law become a promise of restored life rather than a weapon of despair.",
      "Read judgment through the mercy seat: truth is revealed, sin is answered, and Christ's people are defended by His blood.",
      "Trust the God who can bring life out of dead wood, dry places, and hopeless histories."
    ],
    citations: "Exodus 25:10-22; Leviticus 16; Hebrews 8-9; Daniel 8:14; Revelation 11:19"
  },
  gate: {
    title: "The Courtyard Gate",
    subtitle: "Access / Invitation",
    phase: "Outer Court",
    color: "linear-gradient(135deg, #e69b2d, #71431d)",
    icon: iconSvg.shield,
    structure: [
      "The courtyard gate was the only entrance into the sanctuary court. A worshiper did not climb over the linen fence or choose a private opening; he entered through the way God provided.",
      "Its colored curtain - blue, purple, scarlet, and fine linen - announced the sanctuary story before a word was spoken: heaven, kingship, sacrifice, and righteousness were all gathered at the entrance.",
      "The gate was broad enough to welcome the repentant, but specific enough to teach that access to God is not self-invented. Grace is generous, yet it has a defined way."
    ],
    process: [
      "The worshiper entered carrying a sacrifice. He did not come as a tourist or a detached observer, but as someone seeking mercy.",
      "Crossing the threshold moved him from ordinary camp life into a space ordered by God's plan of reconciliation.",
      "The first sight inside was the altar. The gate welcomed the sinner, but it did not flatter him; it led him immediately to the place where sin and mercy meet."
    ],
    fulfillment: [
      "Jesus called Himself the door. That image is not narrow in spirit; it is full of invitation. Whoever enters by Him finds salvation.",
      "The gate's colors gather around Christ: He is the heavenly Son, royal Messiah, suffering Substitute, and righteous One.",
      "The gate reminds us that Christianity is not vague spirituality. God has opened a real way, and that way is centered in Christ."
    ],
    applications: [
      "Enter by invitation, not entitlement.",
      "Let Christ define the way to God instead of inventing a private route.",
      "Keep the gospel entrance wide in invitation and clear in direction.",
      "Remember that the first step toward God is not achievement, but coming through the open gate with the sacrifice He has provided."
    ],
    citations: "Exodus 27:16; John 10:7-9; John 14:6; Hebrews 10:19-22"
  },
  posts: {
    title: "Courtyard Posts and Linen Fence",
    subtitle: "Boundary / Righteousness",
    phase: "Outer Court",
    color: "linear-gradient(135deg, #ece4d5, #8b806e)",
    icon: iconSvg.bread,
    structure: [
      "The linen fence formed the outer boundary of the sanctuary court. It separated sacred space from the camp without removing the sanctuary from the people's life.",
      "The white linen suggested purity, while the bronze bases connected the court to judgment and sacrifice. Holiness and atonement stood together from the outside edge of the sanctuary.",
      "The posts gave the court order and visibility. Israel could see that God had made a distinct place for approach, but they could also see where the entrance stood."
    ],
    process: [
      "The worshiper moved from the camp toward a boundary that asked him to take holiness seriously.",
      "Inside the fence, priests maintained the altar, laver, and tabernacle service. The boundary protected the meaning of the ministry taking place within.",
      "The fence did not contradict the gate. Together they taught that God welcomes sinners, but He welcomes them into a holy and healing order."
    ],
    fulfillment: [
      "The linen boundary points to the righteousness God gives and the holy life He forms in His people.",
      "Christ does not merely bring sinners near; He creates a community shaped by His presence.",
      "The court reminds us that salvation restores order. Mercy opens the way, and holiness teaches us how to live near God."
    ],
    applications: [
      "Respect holiness without turning it into cold exclusion.",
      "Let grace create a changed environment around your life: cleaner habits, truer speech, and more reverent worship.",
      "Hold welcome and reverence together; the sanctuary needs both the open gate and the linen boundary.",
      "Receive God's boundaries as restorative, not arbitrary."
    ],
    citations: "Exodus 27:9-19; Revelation 19:8; 1 Peter 2:9"
  },
  priest: {
    title: "The Priest in the Sanctuary",
    subtitle: "Mediation / Representation",
    phase: "Sanctuary Service",
    color: "linear-gradient(135deg, #f4efe2, #9b6a32)",
    icon: iconSvg.priest,
    structure: [
      "The priest stood in a place the worshiper could not take for himself. He did not replace God, and he did not erase the sinner's confession; he carried the ministry forward according to God's command.",
      "His garments, washing, anointing, and consecration taught that mediation is holy work. A priest served people, but he served them before God.",
      "In the court he handled sacrifice and cleansing. In the Holy Place he tended light, bread, and incense. On the Day of Atonement, the high priest alone entered the Most Holy Place with blood and incense.",
      "The priestly office joined tenderness and trembling. He worked for guilty people, yet he knew he also needed mercy."
    ],
    process: [
      "The worshiper brought the offering and confessed over the victim. Then the priest applied the blood according to the kind of sacrifice, showing that guilt was not left in the sinner's hands.",
      "The priest maintained the daily ministry: altar fire, lampstand light, bread before the Lord, and incense morning and evening.",
      "Before holy service, priests washed at the laver. The act said plainly that mediation required cleansed hands, feet, motives, and movement.",
      "Once a year, the high priest carried blood and incense within the veil, representing the whole congregation in the cleansing of the sanctuary."
    ],
    fulfillment: [
      "Christ is the true Priest and High Priest. He does not merely point to atonement; He offers Himself, rises, and ministers the merits of His own sacrifice.",
      "The earthly priest could sympathize, but he also needed sacrifice for himself. Christ sympathizes fully, yet He is sinless and able to save completely.",
      "The priest's movement through the sanctuary gives a living outline of Christ's work: sacrifice, intercession, judgment, cleansing, and final restoration.",
      "Because Christ represents humanity before God, believers may approach the throne with reverence, confidence, and assurance."
    ],
    applications: [
      "Come through mediation. Prayer, confession, and worship are received because Christ stands for us.",
      "Trust the whole ministry of Christ, not only His death, but also His living intercession.",
      "Let priestly ministry shape Christian service: compassion for sinners, reverence for holiness, and faithfulness in daily duties.",
      "Remember that God does not leave guilt unmanaged. He provides a Priest who bears, cleanses, intercedes, and restores."
    ],
    citations: "Exodus 28-29; Exodus 30:17-21; Leviticus 8-10; Leviticus 16; Hebrews 4:14-16; Hebrews 7:25-28; Hebrews 8-9"
  },
  entranceVeil: {
    title: "The Entrance Veil",
    subtitle: "Access into the Holy Place",
    phase: "Tabernacle",
    color: "linear-gradient(135deg, #4169b4, #c9573a)",
    icon: iconSvg.shield,
    structure: [
      "The entrance veil stood at the doorway of the tabernacle itself. The altar and laver were behind the worshiper now; this was the threshold into the Holy Place.",
      "It was woven of blue, purple, scarlet, and fine twined linen, and hung on five pillars. The colors made the entrance beautiful, but also serious.",
      "Unlike the courtyard gate, this veil did not admit every Israelite. It marked the transition from public atonement in the court to priestly ministry inside the tent.",
      "The veil said that nearness continues beyond forgiveness, but it continues through cleansing, priestly service, and God's appointed way."
    ],
    meaning: [
      {
        term: "Blue",
        text: "Blue lifted the priest's mind upward. In the sanctuary pattern, it belongs to the heavenly direction of the service: the worshiper is not moving into human religious imagination, but toward God's own dwelling and government."
      },
      {
        term: "Purple",
        text: "Purple joined blue and scarlet visually, making it a fitting royal color. At the entrance to the Holy Place, it teaches that the One who gives access is not only a victim, but also King, Priest, and covenant Lord."
      },
      {
        term: "Scarlet",
        text: "Scarlet pressed the meaning of blood and sacrifice into the doorway itself. The priest entered daily ministry through a color that kept the cost of access before his eyes."
      },
      {
        term: "Fine Twined Linen",
        text: "Fine linen carried the idea of purity, ordered beauty, and priestly righteousness. It reminded Israel that nearness to God is graciously opened, but never morally casual."
      },
      {
        term: "Gold and Bronze",
        text: "The gold-covered pillars faced the Holy Place, while bronze sockets touched the courtyard ground. Together they join glory with judgment: priestly fellowship is upheld by both divine beauty and atoning sacrifice."
      }
    ],
    process: [
      "After sacrifice at the altar and washing at the laver, the priest passed through this entrance to tend the lampstand, table, and incense altar.",
      "The veil taught that nearness to God is progressive: sacrifice opens the way, cleansing prepares the servant, and priestly mediation carries the worship forward.",
      "The five pillars created a visible threshold. The priest was entering the chamber of continual light, bread, and prayer, not an ordinary room."
    ],
    fulfillment: [
      "The entrance veil points to Christ as the true access into fellowship with God.",
      "Through Christ, believers move beyond the altar of forgiveness into the life of sanctification: Spirit-given light, daily bread, and intercessory prayer.",
      "The colors of the veil converge in Jesus: the heavenly Son, royal Messiah, suffering Substitute, righteous Mediator, and living doorway into fellowship with God.",
      "The veil reminds us that Christ does not merely pardon from a distance; He brings His people into a life of daily communion and priestly care."
    ],
    applications: [
      "Do not stop at forgiveness; enter the daily fellowship God has opened.",
      "Approach holy things through Christ, not through familiarity or religious self-confidence.",
      "Let cleansing at the laver shape service inside the sanctuary: clean hands, clean feet, clean ministry.",
      "See sanctification as access to God's provision, not merely pressure to improve."
    ],
    citations: "Exodus 26:36-37; Exodus 36:37-38; John 10:9; Hebrews 10:19-22"
  },
  innerVeil: {
    title: "The Inner Veil",
    subtitle: "Separation / Access to the Throne",
    phase: "Most Holy Place",
    color: "linear-gradient(135deg, #315db2, #7c448a)",
    icon: iconSvg.cloud,
    structure: [
      "The inner veil separated the Holy Place from the Most Holy Place, guarding the chamber of the ark and the visible glory of God.",
      "It was woven with blue, purple, scarlet, fine linen, and cherubim. The design spoke of heaven, royalty, sacrifice, purity, and guarded throne-room holiness.",
      "The veil was not a denial of mercy. It was mercy ordered by holiness, teaching that God's presence is approached through mediation.",
      "Only the high priest passed beyond this veil, and only on the Day of Atonement, with incense and blood."
    ],
    meaning: [
      {
        term: "Blue",
        text: "At the inner veil, blue does more than decorate. It marks the boundary of heavenly reality, because the Most Holy Place represented God's throne room rather than ordinary sacred architecture."
      },
      {
        term: "Purple",
        text: "Purple belongs naturally near the ark, where law, throne, mercy seat, and judgment meet. It points to God's royal authority, and in Christian fulfillment to Christ's kingly-priestly mediation."
      },
      {
        term: "Scarlet",
        text: "Scarlet beside the throne reminds the reader that access to the Most Holy Place is never achieved by curiosity, rank, or religious courage. The way inside is opened by blood."
      },
      {
        term: "Fine Linen",
        text: "Fine linen keeps purity before the reader. The veil does not suggest that God is distant because He is unwilling, but that sin cannot simply walk into holy presence unchanged."
      },
      {
        term: "Cherubim",
        text: "The cherubim woven into the veil connected the curtain with throne imagery, Eden's guarded way, and the ark's cherubim over the mercy seat. The veil guarded holiness while also promising that God had made an ordered way of approach."
      }
    ],
    process: [
      "In the daily service, the priest ministered before the veil at the altar of incense, bringing the prayers of Israel near to the throne.",
      "On the Day of Atonement, the high priest entered within the veil with incense and blood to cleanse the sanctuary.",
      "The veil held two truths together: God truly dwelt with His people, and sin still required mediated access until final cleansing."
    ],
    fulfillment: [
      "At Christ's death, the temple veil was torn, announcing that access to God rests on His completed sacrifice.",
      "Hebrews uses veil imagery to show that the crucified and risen Jesus opens the living way to God.",
      "The inner veil also preserves the sanctuary sequence: Christ's sacrifice opens access, His priesthood ministers that access, and His final work brings cleansing and restoration.",
      "The torn veil does not make God less holy; it shows that Christ has truly answered the barrier sin created."
    ],
    applications: [
      "Approach God boldly because Christ has opened the way.",
      "Keep reverence alive: access is intimate, but it was purchased by blood.",
      "Let prayer rise before the veil with confidence in Christ's mediation.",
      "Read judgment through the torn veil: God's throne is holy, and the Mediator is for His people."
    ],
    citations: "Exodus 26:31-35; Leviticus 16:2, 12-16; Matthew 27:51; Hebrews 6:19-20; Hebrews 9:3-8; Hebrews 10:19-22"
  },
  coverings: {
    title: "Tabernacle Coverings",
    subtitle: "Glory Hidden / Protection",
    phase: "Tabernacle",
    color: "linear-gradient(135deg, #f1dfb8, #5a382b)",
    icon: iconSvg.shield,
    structure: [
      "The tabernacle was covered by layers: fine linen with cherubim, goat hair, ram skins dyed red, and an outer protective covering.",
      "The innermost layer was beautiful and priestly, seen from within. The outer layer was plain and durable, built for sun, dust, travel, and wilderness life.",
      "The contrast is important. God's glory was truly present, but it was veiled in a humble tent that could travel with His people.",
      "The coverings turned the tabernacle into both throne room and shelter. Heaven's pattern was present in the wilderness."
    ],
    meaning: [
      {
        term: "Fine Linen with Cherubim",
        text: "The innermost layer was the glory layer, seen from within by priestly eyes. Its linen purity and cherubim imagery linked the tent to Eden, throne, and heavenly worship, teaching that the sanctuary was God's ordered dwelling among His people."
      },
      {
        term: "Goat Hair",
        text: "The goat-hair tent was a practical sheltering layer. Its darker, rougher texture shifted the meaning from interior glory to wilderness durability: holiness was protected while God traveled with His people."
      },
      {
        term: "Ram Skins Dyed Red",
        text: "The red-dyed ram-skin covering naturally evokes consecration and sacrifice. It sits between hidden beauty and outward protection, suggesting that the dwelling of God among sinners is secured through costly devotion and blood-marked mediation."
      },
      {
        term: "Outer Protective Covering",
        text: "The outer layer was plain and weather-resistant. This contrast is important: from outside, the tabernacle did not advertise splendor; its glory was hidden, protected, and discovered only through God's appointed way."
      },
      {
        term: "Layered Theology",
        text: "The coverings teach revelation by layers. God is truly present, yet veiled; beautiful within, humble without; near enough to dwell with Israel, holy enough to require ordered access."
      }
    ],
    process: [
      "The coverings were spread over the tabernacle frame, forming a sacred tent over the Holy Place and Most Holy Place.",
      "The innermost linen covering belonged to the interior world of worship, where priestly eyes saw embroidered beauty and cherubic throne imagery.",
      "The outer layers shielded the dwelling from sun, dust, and weather, preserving the holy structure during wilderness travel.",
      "The order of the layers mattered: beauty was not absent, but it was protected beneath coverings that served the journey."
    ],
    fulfillment: [
      "The coverings point to Christ's incarnation: divine glory hidden under humble humanity, yet full of grace and truth.",
      "The red ram-skin layer naturally draws the mind to sacrifice and consecration, while the protective outer layer suggests Christ's ability to preserve His people.",
      "The contrast between inner beauty and outward plainness reminds us that God's deepest glory is often veiled beneath humility.",
      "In Christ, God came near enough to dwell with us, humble enough to be overlooked, and strong enough to shelter His people through the wilderness."
    ],
    applications: [
      "Look for glory beneath humility; God's presence is not always wrapped in outward spectacle.",
      "Trust God's protection over the journey, not only His forgiveness at the altar.",
      "Let the coverings teach reverent hiddenness: some holy things are protected before they are displayed.",
      "Remember that Christ tabernacled among us, bringing God's presence into the dust of human life."
    ],
    citations: "Exodus 26:1-14; Exodus 36:8-19; John 1:14; Hebrews 9:11"
  }
};

const articleEnhancements = {
  altar: {
    summary:
      "The altar is where the sanctuary stops speaking in abstractions. Sin is not treated as a small mistake or a private regret; it costs life. Yet the first great lesson is not despair, but mercy: God provides a substitute, receives the blood, and opens the way for the sinner to stand forgiven instead of condemned.",
    keyTexts: "Exodus 27:1-8; Leviticus 1; Leviticus 6:8-13; John 1:29; Romans 12:1.",
    atAGlance: [
      { label: "Location", value: "Inside the gate, before every other sanctuary object." },
      { label: "Material", value: "Bronze-covered wood, built to receive fire and blood." },
      { label: "Main Lesson", value: "Substitution, surrender, and accepted life." }
    ]
  },
  laver: {
    summary:
      "The laver teaches that God does not merely pardon people and leave them unchanged. After sacrifice, the priest still washed his hands and feet, because forgiven life must become clean life in daily movement, service, speech, and desire. It is a gentle but searching reminder that grace reaches the whole person, not only the record of guilt.",
    keyTexts: "Exodus 30:17-21; Exodus 38:8; Titus 3:5; Romans 6:3-4; Hebrews 10:22.",
    atAGlance: [
      { label: "Location", value: "Between the altar and the tabernacle entrance." },
      { label: "Function", value: "Priestly washing before altar and holy-place service." },
      { label: "Main Lesson", value: "Cleansing flows from atonement into daily life." }
    ]
  },
  lampstand: {
    summary:
      "Inside the Holy Place, the lampstand gave light where no ordinary window could. That matters because spiritual sight is not something God's people manufacture by effort or cleverness. The flame had to be tended, supplied, and protected, just as a believing life needs the Spirit's steady light to understand Scripture, endure darkness, and shine without pretending to be the source.",
    keyTexts: "Exodus 25:31-40; Exodus 27:20-21; Zechariah 4:1-6; John 8:12; Revelation 1:12-20.",
    atAGlance: [
      { label: "Location", value: "South side of the Holy Place." },
      { label: "Material", value: "Beaten pure gold, with seven lamps supplied by oil." },
      { label: "Main Lesson", value: "The Spirit sustains light, witness, and holy perception." }
    ]
  },
  shewbread: {
    summary:
      "The table of shewbread makes God's presence feel almost domestic: bread is set before Him, and His people are remembered tribe by tribe. It says that covenant life is not sustained by occasional religious intensity, but by daily provision. God does not only forgive His people at the altar; He feeds them, keeps them before Him, and teaches them to live by every word that comes from Him.",
    keyTexts: "Exodus 25:23-30; Leviticus 24:5-9; Deuteronomy 8:3; John 6:35.",
    atAGlance: [
      { label: "Location", value: "North side of the Holy Place, opposite the lampstand." },
      { label: "Contents", value: "Twelve loaves, renewed before the Lord." },
      { label: "Main Lesson", value: "Covenant fellowship, nourishment, and dependence." }
    ]
  },
  incense: {
    summary:
      "The incense altar brings the sanctuary close to the inner life of prayer. Its fragrance rose near the veil, teaching that weak, trembling, and ordinary prayers can come near the throne because sacrifice and mediation stand beneath them. This article matters because it turns prayer from anxious self-persuasion into trust: the worshiper is heard through the merits of the Priest.",
    keyTexts: "Exodus 30:1-10; Leviticus 16:12-13; Psalm 141:2; Luke 1:9-10; Revelation 8:3-4.",
    atAGlance: [
      { label: "Location", value: "Before the inner veil, closest to the Most Holy Place." },
      { label: "Rhythm", value: "Incense morning and evening with the tending of the lamps." },
      { label: "Main Lesson", value: "Prayer rises through mediation and accepted merits." }
    ]
  },
  ark: {
    summary:
      "The ark is the sanctuary's throne-room center, where law, mercy, judgment, covenant, and God's presence meet. The law inside the ark shows that God's government is not built on sentiment or compromise. But the mercy seat above the law shows something just as beautiful: sinners are not crushed by the throne when blood and grace speak for them.",
    keyTexts: "Exodus 25:10-22; Leviticus 16; Hebrews 8-9; Daniel 8:14; Revelation 11:19.",
    atAGlance: [
      { label: "Location", value: "Most Holy Place, beyond the inner veil." },
      { label: "Contents", value: "Law, manna, and Aaron's rod as covenant witnesses." },
      { label: "Main Lesson", value: "Mercy, judgment, covenant, and final cleansing." }
    ]
  },
  gate: {
    summary:
      "The gate tells the sinner that God has made a way back. It is open, but it is not vague; the worshiper does not climb the fence, invent a private route, or enter on his own terms. He comes through the doorway God provides and immediately meets the altar, learning that welcome is real and that reconciliation still rests on sacrifice.",
    keyTexts: "Exodus 27:16; John 10:7-9; John 14:6; Hebrews 10:19-22.",
    atAGlance: [
      { label: "Location", value: "East side of the courtyard." },
      { label: "Colors", value: "Blue, purple, scarlet, and fine linen." },
      { label: "Main Lesson", value: "Access is gracious, specific, and Christ-centered." }
    ]
  },
  posts: {
    summary:
      "The linen fence gave the sanctuary a holy boundary without hiding the invitation of the gate. It matters because God's mercy is not casual nearness; it is ordered nearness, protected by holiness and opened through sacrifice. The fence teaches that grace welcomes the sinner in, then patiently reshapes the life around purity, reverence, and belonging.",
    keyTexts: "Exodus 27:9-19; Revelation 19:8; 1 Peter 2:9.",
    atAGlance: [
      { label: "Dimensions", value: "A 100 by 50 cubit court with linen hangings." },
      { label: "Materials", value: "Linen, posts, bronze sockets, and silver hooks or bands." },
      { label: "Main Lesson", value: "Grace welcomes sinners into ordered holiness." }
    ]
  },
  priest: {
    summary:
      "The priest shows that the sinner is not left alone with guilt after confession. Someone appointed by God receives the offering, handles the blood, carries the ministry forward, and stands between the worshiper and holy things. His weakness makes the lesson even clearer: human priests could only point ahead to the One Priest who would truly bear, cleanse, intercede, and restore.",
    keyTexts: "Exodus 28-29; Leviticus 8-10; Leviticus 16; Hebrews 4:14-16; Hebrews 7:25-28; Hebrews 8-9.",
    atAGlance: [
      { label: "Role", value: "Mediator, representative, teacher, and servant of holy things." },
      { label: "Daily Work", value: "Blood, washing, lamp, bread, incense, and blessing." },
      { label: "Main Lesson", value: "Christ is the complete Priest who saves to the uttermost." }
    ]
  },
  entranceVeil: {
    summary:
      "The entrance veil is the threshold between forgiveness in the court and ongoing fellowship in the Holy Place. Its colors make access feel beautiful, but also serious: heaven, royalty, sacrifice, and purity meet at the doorway. It teaches that God does not call His people to stop at pardon; He draws them onward into light, bread, prayer, and priestly communion.",
    keyTexts: "Exodus 26:36-37; Exodus 36:37-38; John 10:9; Hebrews 10:19-22.",
    atAGlance: [
      { label: "Location", value: "Doorway from the court into the Holy Place." },
      { label: "Support", value: "Five gold-covered pillars set in bronze sockets." },
      { label: "Main Lesson", value: "Forgiveness leads into priestly fellowship with God." }
    ]
  },
  innerVeil: {
    summary:
      "The inner veil guarded the room of the ark, not because God was unwilling to dwell with His people, but because His presence is holy. It taught Israel to desire nearness without becoming careless with it. Blood, incense, and priestly mediation stood between sin and the throne until God Himself provided the deeper access and final cleansing pictured in the sanctuary.",
    keyTexts: "Exodus 26:31-35; Leviticus 16:2, 12-16; Matthew 27:51; Hebrews 6:19-20; Hebrews 10:19-22.",
    atAGlance: [
      { label: "Location", value: "Between Holy Place and Most Holy Place." },
      { label: "Design", value: "Cherubim woven into blue, purple, scarlet, and fine linen." },
      { label: "Main Lesson", value: "The throne is holy, and Christ opens the living way." }
    ]
  },
  coverings: {
    summary:
      "The coverings make the tabernacle feel like a holy mystery wrapped for a wilderness journey. From outside, the dwelling looked plain and protected; from within, it held beauty, color, and cherubim. The layers matter because they teach how God comes near: His glory is real, but veiled; His presence is beautiful, but protected; His dwelling is holy, yet willing to travel with His pilgrim people.",
    keyTexts: "Exodus 26:1-14; Exodus 36:8-19; John 1:14; Hebrews 9:11.",
    atAGlance: [
      { label: "Layers", value: "Fine linen, goat hair, red ram skins, and outer protection." },
      { label: "Purpose", value: "To reveal, veil, protect, and make the dwelling portable." },
      { label: "Main Lesson", value: "God's glory is present, protected, and humbly hidden." }
    ]
  }
};

Object.entries(articleEnhancements).forEach(([id, enhancement]) => {
  if (articles[id]) {
    Object.assign(articles[id], enhancement);
  }
});

const phases = [
  {
    id: "phase-outer",
    layout: "outer",
    label: "Justification",
    title: "Phase I: The Outer Court",
    summary:
      "Justification is what God does for us. Through the substitutionary sacrifice of Christ, we are forgiven, legally declared righteous, and freed from the penalty of sin. The altar and laver show sacrifice, cleansing, and the visible acceptance of a new life.",
    articles: ["altar", "laver"]
  },
  {
    id: "phase-holy",
    layout: "holy",
    label: "Sanctification",
    title: "Phase II: The Holy Place",
    summary:
      "Sanctification is what God does in us. It is the daily, transformative process of being freed from sin's power through the Spirit's light, the nourishment of the Word, and the constant breath of prayer.",
    articles: ["lampstand", "shewbread", "incense"]
  },
  {
    id: "phase-most",
    layout: "most",
    label: "Glorification",
    title: "Phase III: The Most Holy Place",
    summary:
      "Glorification is the final restoration. The ark, law, mercy seat, and judgment point to Christ's closing work, where God's justice and mercy are fully vindicated and His people are brought home to unveiled communion.",
    articles: ["ark"]
  }
];

const offerings = [
  {
    id: "burnt",
    tab: "The Burnt Offering",
    badge: "Total Dedication",
    title: "The Burnt Offering",
    text: "Leviticus 1; 6:8-13",
    icon: "♨",
    summary:
      "The burnt offering was the whole-life offering. It did not focus on a shared meal or repayment, but on complete surrender to God through substitutionary death.",
    columns: [
      ["Practical Procedure", "The worshiper brought an unblemished male from the herd, flock, or birds according to ability. After hand-laying and slaughter at the entrance, the priest applied the blood around the altar. The animal was skinned, divided, washed, arranged, and wholly consumed by fire."],
      ["Sanctuary Meaning", "Because the whole animal ascended to God, this offering emphasized complete consecration. It was not a partial gift but an entire life placed on the altar, accepted through substitutionary blood and ascending as a pleasing aroma."],
      ["Fulfillment in Christ", "Christ gave Himself wholly to the Father. His obedience was not partial, reluctant, or symbolic; He offered a complete life and a complete death, making acceptance with God possible for the believer."],
      ["Devotional Response", "Romans 12:1 applies burnt-offering logic to Christian life: because mercy has been given, the whole person becomes a living sacrifice. Dedication is not payment for salvation, but the shape gratitude takes."]
    ],
    ritualForm: [
      ["Totality", "The distinctive form is wholeness: nothing is held back for the worshiper. The entire victim belongs to God, so the rite teaches full surrender rather than selective devotion."],
      ["Ascent", "The Hebrew idea behind the offering is movement upward. The sacrifice is transformed by altar fire into smoke that ascends, portraying accepted life rising toward God."],
      ["Continual Rhythm", "The morning and evening burnt offerings made this surrender the daily frame of sanctuary life. Israel woke and slept under the sign of accepted substitution."]
    ],
    sourceInsights: [
      {
        author: "Davidson",
        quote: "the blood of an innocent victim is shed instead of theirs",
        text: "Davidson's sanctuary typology makes substitution painfully concrete: the worshiper is not saved by admiration of sacrifice, but by a life given in the worshiper's place."
      },
      {
        author: "Andreasen",
        quote: "On every ceremony and on every service was stamped the lesson: Sin means death.",
        text: "Andreasen presses the moral gravity of the altar. The fire is not religious theater; it teaches that sin is costly before it teaches that grace is free."
      },
      {
        author: "Gane",
        quote: "only in the burnt offering did all of the flesh go to the Lord",
        text: "Gane's ritual observation explains the offering's unique force: it is not merely forgiveness, but total surrender through accepted substitution."
      }
    ],
    scholar:
      "Scholarly synthesis: The burnt offering is best read as a ritual of total surrender through substitution. It combines expiation, dedication, and acceptance, showing that restored fellowship begins with a life yielded completely to God."
  },
  {
    id: "grain",
    tab: "The Grain Offering",
    badge: "Consecrated Gratitude",
    title: "The Grain Offering",
    text: "Leviticus 2; 6:14-23",
    icon: "✦",
    summary:
      "The grain offering was a bloodless tribute of worship. It placed the produce of ordinary labor into God's hands and confessed that daily bread comes from Him.",
    columns: [
      ["Practical Procedure", "Fine flour was mixed with oil and frankincense, or prepared as baked cakes or wafers. A memorial portion was burned on the altar, while the remainder belonged to the priests. It was seasoned with salt, but leaven and honey were excluded from altar portions."],
      ["Sanctuary Meaning", "This offering did not replace blood atonement. It followed and accompanied sacrifice as grateful tribute. Flour, oil, frankincense, and salt taught purity, Spirit-enabled service, fragrance before God, and covenant permanence."],
      ["Fulfillment in Christ", "Christ's humanity was perfectly balanced, like fine flour without coarse unevenness. He was anointed by the Spirit, fragrant in obedience, and incorrupt in covenant faithfulness."],
      ["Devotional Response", "The grain offering dignifies ordinary life. Work, food, resources, skill, and daily routines can become worship when they are returned to God in gratitude and purified from self-display."]
    ],
    ritualForm: [
      ["Tribute", "Its form is gift and homage rather than slaughter. The worshiper returns cultivated life to God, confessing that harvest and labor are covenant gifts."],
      ["Memorial Portion", "Only a representative portion ascends on the altar. The part stands for the whole, teaching that God claims the entire life even when only a memorial portion is burned."],
      ["Holy Remainder", "The priestly portion shows that what is given to God may also sustain ministry. Worship, livelihood, and service are held together in the sanctuary economy."]
    ],
    sourceInsights: [
      {
        author: "Davidson",
        quote: "The normal grain offering did not bring atonement for sin",
        text: "Davidson's point keeps the offering in its proper place. Grain does not replace blood; it teaches what a forgiven life gives back to God."
      },
      {
        author: "Andreasen",
        quote: "salt is a vital part of each sacrifice",
        text: "Andreasen notices the covenant texture of the rite. The offering is not raw religious enthusiasm, but life seasoned with permanence, fidelity, and worshipful order."
      },
      {
        author: "Gane",
        quote: "the grain offering is not even expiatory",
        text: "Gane's precision matters devotionally: the worshiper brings labor and harvest because grace has already opened the way, not to buy the way open."
      }
    ],
    scholar:
      "Scholarly synthesis: The grain offering functions as a tribute offering. It assumes atonement and then teaches covenant gratitude, showing that redemption claims not only the sinner's guilt but also the worshiper's labor and livelihood."
  },
  {
    id: "peace",
    tab: "The Peace Offering",
    badge: "Fellowship Restored",
    title: "The Peace Offering",
    text: "Leviticus 3; 7:11-21",
    icon: "♡",
    summary:
      "The peace offering celebrated restored fellowship. It was the sanctuary meal of thanksgiving, vow fulfillment, and freewill joy before God.",
    columns: [
      ["Practical Procedure", "The worshiper brought an animal without blemish, laid hands on it, and slaughtered it. The priest applied the blood, burned the fat portions for God, received the priestly portion, and the worshiper ate the remaining meat in a sacred meal."],
      ["Sanctuary Meaning", "This was not casual dining. Blood had already made peace possible, and the shared meal dramatized communion among God, priest, worshiper, and community. Thanksgiving became embodied fellowship."],
      ["Fulfillment in Christ", "Christ makes peace through the blood of His cross. In Him, reconciliation is not merely legal pardon; it becomes restored table fellowship with God and with the redeemed community."],
      ["Devotional Response", "The peace offering calls believers to gratitude, reconciliation, and joy. A forgiven person becomes a hospitable person, making room for restored relationships and shared praise."]
    ],
    ritualForm: [
      ["Shared Portions", "The distinctive form is distribution: God's portion, the priestly portion, and the worshiper's meal. Atonement opens fellowship rather than ending with bare acquittal."],
      ["Sacred Meal", "Eating before God makes the theology visible. Peace is not only a status recorded in heaven; it becomes communion, gratitude, and restored community."],
      ["Joy With Boundaries", "The meal is joyful, but it remains holy. The rite rejects both anxious religion and careless familiarity by placing celebration inside covenant order."]
    ],
    sourceInsights: [
      {
        author: "Davidson",
        quote: "shalom is not just absence of war, but connotes total well-being",
        text: "Davidson's insight widens the peace offering beyond a truce with God. It is wholeness, restored relationship, and covenant life enjoyed at God's table."
      },
      {
        author: "Andreasen",
        quote: "God, priest, and offerer partake",
        text: "Andreasen sees the meal as theology in motion. The altar leads to communion, and the worshiper is invited into fellowship made possible by blood."
      },
      {
        author: "Gane",
        quote: "was eaten by the person who brought the sacrifice",
        text: "Gane's concrete ritual detail is easy to miss: the worshiper does not simply watch peace happen; he receives it, tastes it, and shares it."
      }
    ],
    scholar:
      "Scholarly synthesis: The peace offering is a communion sacrifice. It moves beyond the removal of guilt to the celebration of wholeness, embodying the biblical idea that atonement restores fellowship."
  },
  {
    id: "sin",
    tab: "The Sin Offering",
    badge: "Purification",
    title: "The Sin Offering",
    text: "Leviticus 4; 6:24-30",
    icon: "○",
    summary:
      "The sin offering addressed purification from sin and ritual defilement. It showed that sin pollutes persons, community, and sanctuary, and that God provides cleansing through blood.",
    columns: [
      ["Practical Procedure", "The required animal varied by responsibility: priest, congregation, leader, or common person. After hand-laying and slaughter, blood was applied to the appropriate sanctuary location, and selected fat was burned on the altar."],
      ["Sanctuary Meaning", "Sin was not treated as a private mistake. Its effects reached God's dwelling among His people. The blood both brought forgiveness to the sinner and transferred the record of confessed sin into the sanctuary system for final resolution."],
      ["Fulfillment in Christ", "Christ bears sin and cleanses from unrighteousness. His blood is sufficient not only to pardon the sinner but also to answer the larger problem of sin's defilement before God's universe."],
      ["Devotional Response", "Confession is hopeful because God has provided purification. The worshiper does not hide sin, minimize it, or manage it privately; he brings it to the place where God removes guilt and begins cleansing."]
    ],
    ritualForm: [
      ["Purification", "The form is cleansing, not merely punishment transferred. Blood reaches the altar or sanctuary space because sin contaminates relationship, worship, and the dwelling place of God."],
      ["Ranked Responsibility", "The blood application changes with the offender's role. Priests and the congregation create wider contamination, so the ritual shows that responsibility increases with influence."],
      ["Daily to Yearly", "Forgiveness is real in the daily service, yet the sanctuary still awaits final cleansing. The rite plants the logic that leads to the Day of Atonement."]
    ],
    sourceInsights: [
      {
        author: "Davidson",
        quote: "confessed sins were transferred from the sinner to the sanctuary throughout the year",
        text: "Davidson gives the key logic for the whole sanctuary cycle: daily forgiveness is real, yet the sanctuary still awaits final cleansing."
      },
      {
        author: "Andreasen",
        quote: "Forgiveness of sin can be obtained only through confession and the ministration of blood.",
        text: "Andreasen holds together two things modern readers often separate: honest confession and priestly blood-ministry. Sin is named, then borne away."
      },
      {
        author: "Gane",
        quote: "remedy moral faults and physical ritual impurities",
        text: "Gane's phrase explains why this offering is called purification. It handles sin's pollution, not merely the sinner's feelings of regret."
      }
    ],
    scholar:
      "Scholarly synthesis: The sin offering is better called a purification offering. Its concern is not only moral guilt, but also the contamination caused by sin, which explains why Leviticus connects forgiveness with sanctuary cleansing."
  },
  {
    id: "guilt",
    tab: "The Guilt Offering",
    badge: "Restitution",
    title: "The Guilt Offering",
    text: "Leviticus 5:14-6:7; 7:1-10",
    icon: "↺",
    summary:
      "The guilt offering addressed sacrilege, breach of trust, and reparable wrong. It joined sacrifice with restitution so that forgiveness did not bypass repair.",
    columns: [
      ["Practical Procedure", "The worshiper brought a ram as a guilt offering and made restitution for the wrong, adding a fifth. The priest made atonement, and the guilty person was forgiven."],
      ["Sanctuary Meaning", "This offering teaches that sin creates debt and damage. When the wrong involved holy things or another person's property, atonement included concrete repair, not only inward remorse."],
      ["Fulfillment in Christ", "Christ is the One who restores what sin has ruined. He pays the debt humanity cannot pay and reconciles sinners to God without ignoring the real harm sin has caused."],
      ["Devotional Response", "Grace creates integrity. A forgiven person seeks restoration: confession to God, honesty with people, repayment where possible, and a changed pattern of life."]
    ],
    ritualForm: [
      ["Reparation", "The distinctive form is sacrifice plus repayment. The rite refuses a spirituality that wants forgiveness while leaving damage unrepaired."],
      ["Added Fifth", "The added twenty percent turns restitution into more than replacement. It acknowledges loss, responsibility, and the worshiper's renewed commitment to covenant justice."],
      ["Holy Trust", "Wrongs against holy things and neighbors are treated as covenant breaches. Sin is theft from God's order, and grace restores that order concretely."]
    ],
    sourceInsights: [
      {
        author: "Davidson",
        quote: "dealing with particular offenses",
        text: "Davidson's framing helps distinguish this offering from general confession. The rite addresses concrete covenant breaches that require concrete repair."
      },
      {
        author: "Andreasen",
        quote: "not only is it to be confessed, but restitution is to be made",
        text: "Andreasen's emphasis makes grace ethically serious. Forgiveness does not bypass harmed people; it sends the forgiven person back to repair what can be repaired."
      },
      {
        author: "Gane",
        quote: "sin creates debt that must be paid by Christ's sacrifice",
        text: "Gane connects restitution to the gospel's deepest debt. Human repayment can restore damaged trust, but only Christ can answer sin's ultimate liability."
      }
    ],
    scholar:
      "Scholarly synthesis: The guilt offering shows that biblical atonement is morally concrete. It reconciles the sinner to God while also requiring repair of damaged relationships and violated trust."
  }
];

const specialCeremonies = [
  {
    id: "leper",
    tab: "Leper Cleansing",
    badge: "Restoration",
    title: "Cleansing of the Leper",
    text: "Leviticus 14:1-32; Mark 1:40-45; Luke 17:11-19",
    icon: "✚",
    summary:
      "The cleansing of the leper restored a person from exclusion to worship, home, and community. It joined death and release, washing, shaving, waiting, blood, oil, and sacrifice into one careful drama of restoration.",
    columns: [
      ["Practical Procedure", "The priest went outside the camp to inspect the healed person. Two clean birds, cedar wood, scarlet, and hyssop were used: one bird was killed over running water, and the living bird was released. The person washed, shaved, waited seven days, shaved again, then brought offerings. Blood and oil were placed on the right ear, thumb, and great toe."],
      ["Sanctuary Meaning", "This rite moved the healed person from death-like exclusion back to covenant life. The living bird announced release, the washings marked cleansing, and the blood-and-oil application restored the whole person to hearing, serving, and walking before God."],
      ["Fulfillment in Christ", "Christ touches the unclean without becoming polluted by sin. He bears exclusion outside the camp and brings the outcast home. His blood cleanses, and His Spirit consecrates the restored life for obedient listening, service, and walk."],
      ["Devotional Response", "Grace does not merely forgive from a distance; it restores belonging. The healed person returns with humility, gratitude, and a life re-dedicated to God in every faculty."]
    ],
    ritualForm: [
      ["Outside the Camp", "The priest meets the person where exclusion has placed him. Restoration begins with God's representative going out to the one who cannot yet come in."],
      ["Death and Release", "The slain bird and released bird hold two truths together: cleansing requires life given, and restoration means freedom into renewed life."],
      ["Blood and Oil", "The ear, thumb, and toe show whole-person consecration. The restored person is cleansed for hearing God's voice, doing God's will, and walking in God's path."]
    ],
    sourceInsights: [],
  },
  {
    id: "red-heifer",
    tab: "Red Heifer",
    badge: "Death Cleansed",
    title: "Red Heifer Purification",
    text: "Numbers 19; Hebrews 9:13-14",
    icon: "☄",
    summary:
      "The red heifer rite provided purification from corpse impurity, one of Israel's most serious forms of uncleanness because death is the visible fruit of sin in God's world.",
    columns: [
      ["Practical Procedure", "A red heifer without defect was taken outside the camp and slaughtered before the priest. Its blood was sprinkled toward the sanctuary, and the animal was burned with cedar wood, hyssop, and scarlet. The ashes were stored and later mixed with running water for sprinkling on those defiled by contact with death."],
      ["Sanctuary Meaning", "The rite taught that death defiles because it contradicts the life of the holy God who dwells among Israel. The ashes made cleansing available beyond the sanctuary courtyard, extending God's purifying provision into homes, travel, graves, and daily contact with mortality."],
      ["Fulfillment in Christ", "Hebrews points from heifer ashes to the blood of Christ, whose offering cleanses the conscience from dead works. Jesus suffers outside the gate and provides a cleansing deeper than ritual washing: He answers death itself by resurrection life."],
      ["Devotional Response", "Believers do not treat death, sin, or dead works lightly. They bring contamination to Christ, trusting that His sacrifice cleanses the conscience and calls them into living service."]
    ],
    ritualForm: [
      ["Outside-Camp Burning", "The victim is consumed outside the camp, placing the rite at the boundary between holy presence and death's defilement."],
      ["Stored Ashes", "One sacrifice supplies repeated cleansing water. The rite made purification portable for the people as they encountered death in ordinary life."],
      ["Running Water", "Ashes joined to living water show that cleansing is not only the removal of defilement, but also the return toward life."]
    ],
    sourceInsights: [],
  },
  {
    id: "priestly-consecration",
    tab: "Priest Consecration",
    badge: "Mediation Set Apart",
    title: "Priestly Consecration",
    text: "Exodus 29; Leviticus 8; Hebrews 7:26-28",
    icon: "♕",
    summary:
      "Priestly consecration set Aaron and his sons apart for holy mediation through washing, garments, anointing, sacrifices, blood application, and a consecration meal.",
    columns: [
      ["Practical Procedure", "Moses washed the priests, clothed them in holy garments, anointed the tabernacle, altar, and priesthood, and offered a sin offering, burnt offering, and ram of consecration. Blood was placed on the right ear, thumb, and great toe, and portions of the offering were waved and eaten in a holy meal."],
      ["Sanctuary Meaning", "Mediation required cleansing, covering, anointing, blood, and food from the altar. The priest's ear, hand, and foot were marked because his hearing, action, and walk now belonged to God's service."],
      ["Fulfillment in Christ", "Christ is the consecrated High Priest who needs no sacrifice for His own sin. He is washed in no moral uncleanness, clothed in perfect righteousness, anointed by the Spirit, and qualified to represent humanity forever."],
      ["Devotional Response", "Christian service is not casual religious activity. Those who serve God need cleansed lives, consecrated faculties, Spirit dependence, and the humility to minister from sacrifice already provided."]
    ],
    ritualForm: [
      ["Washed and Clothed", "The priest does not dress himself into holiness. God provides cleansing and garments before ministry begins."],
      ["Marked by Blood", "The blood on ear, thumb, and toe makes mediation bodily and practical. Priesthood claims listening, labor, and direction."],
      ["Seven-Day Ordination", "Consecration is not rushed. The repeated time frame teaches settled dedication before public ministry."]
    ],
    sourceInsights: [],
  },
  {
    id: "levite-dedication",
    tab: "Levite Dedication",
    badge: "Substitutional Service",
    title: "Dedication of the Levites",
    text: "Numbers 8:5-22; Numbers 3:11-13",
    icon: "✦",
    summary:
      "The Levites were cleansed and presented to serve as substitutes for Israel's firstborn, showing that worship required an ordered community of service around God's dwelling.",
    columns: [
      ["Practical Procedure", "The Levites were sprinkled with water of purification, shaved, washed their clothes, and brought offerings. Israel laid hands on them, and Aaron presented them before the Lord as a wave offering. They were then assigned to assist the priesthood and care for the sanctuary service."],
      ["Sanctuary Meaning", "The Levites stood in place of the firstborn who belonged to God after the Exodus. Their dedication taught substitution, communal representation, and ordered service in support of holy worship."],
      ["Fulfillment in Christ", "Christ is the true Firstborn and the true Servant, giving Himself for His people and forming a serving community around God's presence. In Him, belonging to God becomes worshipful service."],
      ["Devotional Response", "The saved life is a serving life. God redeems people not only from judgment, but also for ordered, humble, practical ministry in the community of faith."]
    ],
    ritualForm: [
      ["People Lay Hands", "The congregation identifies with the Levites, showing that their service represents the whole community before God."],
      ["Wave Offering People", "Unlike ordinary offerings, the Levites themselves are presented. The human servant becomes the gift devoted to sanctuary care."],
      ["Firstborn Substitution", "The rite remembers Exodus deliverance: those spared by grace now belong to God in service."]
    ],
    sourceInsights: [],
  },
  {
    id: "nazirite",
    tab: "Nazirite Vow",
    badge: "Voluntary Dedication",
    title: "Nazirite Vow Completion",
    text: "Numbers 6:1-21; Acts 21:23-26",
    icon: "◎",
    summary:
      "The Nazirite vow was a voluntary period of intensified dedication, marked by separation from wine, uncut hair, and avoidance of corpse impurity until the vow was completed with offerings.",
    columns: [
      ["Practical Procedure", "During the vow, the Nazirite avoided grape products, did not cut the hair, and avoided contact with the dead. At completion, the person brought burnt, sin, and peace offerings with grain and drink offerings. The consecrated hair was shaved and placed in the fire under the peace offering."],
      ["Sanctuary Meaning", "The vow temporarily elevated ordinary life into a special sign of consecration. Hair represented visible dedication, while the closing sacrifices confessed that even devoted service still depends on atonement and fellowship with God."],
      ["Fulfillment in Christ", "Christ is wholly devoted to the Father, not temporarily but perfectly. He embodies the consecrated life and makes imperfect human dedication acceptable through His sacrifice."],
      ["Devotional Response", "Special seasons of dedication can be holy and useful, but they must remain humble. Our vows, disciplines, and sacrifices are responses to grace, not substitutes for grace."]
    ],
    ritualForm: [
      ["Voluntary Separation", "The rite is not imposed on all Israel. It shows that love may choose concentrated devotion for a season."],
      ["Hair Offered", "The visible sign of dedication is finally surrendered at the altar. Consecration itself becomes God's possession."],
      ["Offerings at Completion", "The vow ends with sacrifice, teaching that dedication needs atonement, gratitude, and communion."]
    ],
    sourceInsights: [],
  },
  {
    id: "childbirth",
    tab: "Childbirth Purification",
    badge: "Life Restored",
    title: "Purification After Childbirth",
    text: "Leviticus 12; Luke 2:22-24",
    icon: "◌",
    summary:
      "Purification after childbirth returned the mother to sanctuary access after the blood and vulnerability of birth, treating life as holy while acknowledging human mortality and impurity.",
    columns: [
      ["Practical Procedure", "After a set period following birth, the mother brought a burnt offering and a sin or purification offering. Those who could not afford a lamb brought birds, the option used by Mary and Joseph in Luke 2."],
      ["Sanctuary Meaning", "The rite did not treat childbirth as personal sin. It dealt with blood, mortality, and access to sacred space. The mother was restored to full participation in worship, and new life was received under God's holiness and mercy."],
      ["Fulfillment in Christ", "Luke places Jesus under this law through Mary's offering. The Holy One enters ordinary human poverty, family life, and ritual obligation, identifying with the people He came to redeem."],
      ["Devotional Response", "God meets people in bodily, family, and vulnerable seasons. The ceremony teaches reverence for life, compassion for weakness, and gratitude that Christ entered our condition fully."]
    ],
    ritualForm: [
      ["Birth and Mortality", "The rite holds joy and fragility together. New life is celebrated, yet the realities of blood and mortality still require cleansing before sanctuary access."],
      ["Poor Person's Offering", "The allowance for birds reveals mercy in the law. Access to restoration did not depend on wealth."],
      ["Mary's Participation", "Luke's reference shows the Messiah entering Israel's sanctuary rhythms from infancy."]
    ],
    sourceInsights: [],
  },
  {
    id: "bodily-discharge",
    tab: "Discharge Cleansing",
    badge: "Life-Flow Restored",
    title: "Cleansing After Bodily Discharge",
    text: "Leviticus 15; Mark 5:25-34",
    icon: "≈",
    summary:
      "Leviticus 15 addresses bodily discharges that interrupt ordinary holiness and sanctuary access, showing that the life of the body matters in the presence of a holy God.",
    columns: [
      ["Practical Procedure", "The person with an abnormal discharge washed, waited until the condition ceased, counted seven clean days, washed again, and brought two birds: one for purification and one for burnt offering. Ordinary bodily emissions required washing and waiting before restored cleanness."],
      ["Sanctuary Meaning", "The rite protected the sanctuary from impurity associated with loss of life fluids, disorder, and mortality. It also provided a path back to cleanness, so impurity was not permanent exile."],
      ["Fulfillment in Christ", "Jesus heals the woman with the issue of blood without fear of contamination. His holiness is not fragile; it restores. He brings cleansing, dignity, and peace to the one who has lived under shame and exclusion."],
      ["Devotional Response", "God cares about hidden suffering. The ceremony invites people to bring shame, weakness, and bodily brokenness to the One whose holiness heals rather than humiliates."]
    ],
    ritualForm: [
      ["Waiting and Washing", "The process respects time, bodily reality, and restored order. Cleansing is not rushed or denied."],
      ["Two Birds", "The offerings bring the restored person back through purification and renewed dedication."],
      ["From Shame to Peace", "The gospel fulfillment shows that Christ restores both access and personal dignity."]
    ],
    sourceInsights: [],
  },
  {
    id: "sinai-covenant",
    tab: "Sinai Covenant",
    badge: "Blood Covenant",
    title: "Covenant Ratification at Sinai",
    text: "Exodus 24:1-11; Hebrews 9:18-22",
    icon: "✶",
    summary:
      "At Sinai, blood was applied to altar and people, joining God and Israel in covenant relationship under the words of the book and the mercy of sacrifice.",
    columns: [
      ["Practical Procedure", "Moses built an altar and twelve pillars, offered burnt offerings and peace offerings, read the book of the covenant, and sprinkled blood on the altar and the people. The elders then ascended and ate a covenant meal before God."],
      ["Sanctuary Meaning", "The altar represented God's side of the covenant, and the people received the same blood. Covenant life was founded on sacrifice, word, response, and communion. Israel's obedience was framed by blood before it became national mission."],
      ["Fulfillment in Christ", "Jesus inaugurates the new covenant with His own blood. The covenant meal finds its gospel center in the Lord's Supper, where Christ gives His people participation in the benefits of His sacrifice."],
      ["Devotional Response", "Covenant faith is not vague admiration. It hears the word, says yes to God, receives the blood of the covenant, and comes to the table in grateful communion."]
    ],
    ritualForm: [
      ["Book and Blood", "The covenant is both spoken and sealed. God's word defines the relationship, and blood makes the relationship possible for sinners."],
      ["Altar and People", "The same blood links God's altar and Israel, binding worship, obedience, and mercy together."],
      ["Covenant Meal", "The rite ends in fellowship, showing that sacrificial covenant aims at communion with God."]
    ],
    sourceInsights: [],
  },
  {
    id: "tabernacle-dedication",
    tab: "Tabernacle Dedication",
    badge: "Glory Appears",
    title: "Tabernacle and Altar Dedication",
    text: "Leviticus 9; Numbers 7; Exodus 40:34-38",
    icon: "▰",
    summary:
      "The tabernacle and altar dedication inaugurated sanctuary ministry, culminating in fire from the Lord and the visible glory of God among His people.",
    columns: [
      ["Practical Procedure", "The sanctuary was set up, anointed, and sanctified. Leaders brought dedication offerings, and Aaron offered sacrifices for himself and the people. When the service was completed, the glory of the Lord appeared, and fire came out from before the Lord to consume the offering."],
      ["Sanctuary Meaning", "The dedication showed that the sanctuary was not a human religious project. God accepted the altar, authorized the priesthood, and filled the dwelling with His presence. Ministry began under divine glory and divine fire."],
      ["Fulfillment in Christ", "Christ is the true meeting place between God and humanity. His sacrifice is accepted, His priesthood is authorized by resurrection, and through Him God's presence dwells with His people by the Spirit."],
      ["Devotional Response", "Worship should seek God's acceptance, not human spectacle. Dedication means yielding the whole space of life to God's presence, order, and fire."]
    ],
    ritualForm: [
      ["Anointed Space", "Objects, altar, and priesthood are set apart together. Holy service requires a holy environment and holy mediation."],
      ["Accepted Fire", "The fire from the Lord confirms that God receives the offering and authorizes the sanctuary system."],
      ["Glory Among People", "The goal is presence: sacrifice and priesthood lead to God dwelling with His people."]
    ],
    sourceInsights: [],
  },
  {
    id: "firstborn",
    tab: "Firstborn Redemption",
    badge: "Belonging",
    title: "Redemption of the Firstborn",
    text: "Exodus 13:1-16; Numbers 18:15-17; Luke 2:22-24",
    icon: "⚑",
    summary:
      "The redemption of the firstborn remembered the Exodus, when God spared Israel's firstborn through blood and claimed the firstborn as belonging to Him.",
    columns: [
      ["Practical Procedure", "Israel consecrated the firstborn to the Lord. Clean firstborn animals were offered, while unclean animals and firstborn sons were redeemed according to God's instruction. The rite taught each generation to remember deliverance from Egypt."],
      ["Sanctuary Meaning", "The firstborn belonged to God because God had redeemed Israel by judgment and mercy. Redemption meant substitution: the spared life was not self-owned but returned to God in dedication."],
      ["Fulfillment in Christ", "Jesus is presented in the temple as Mary's firstborn, yet He is also the true Firstborn who redeems others. He belongs wholly to the Father and gives Himself so the redeemed may belong to God."],
      ["Devotional Response", "A redeemed life is not a private possession. God saves in order to claim, dedicate, and send. Remembering deliverance should shape family, worship, and identity."]
    ],
    ritualForm: [
      ["Memory of Exodus", "The rite turns family life into testimony. Children learn that they exist under the mercy of deliverance."],
      ["Substitution", "A life is redeemed because another provision stands in its place. Belonging to God is grounded in rescue."],
      ["Consecrated Identity", "The first and best belong to God, teaching gratitude before self-ownership."]
    ],
    sourceInsights: [],
  }
];

const serviceStudies = [
  {
    id: "daily",
    tab: "Daily Service",
    title: "The Daily Service",
    label: "Continual mediation",
    summary:
      "The daily service formed the foundation of Israel's sanctuary life. It taught that grace was continually available, that confessed sin could be transferred from the sinner, and that priestly mediation sustained covenant fellowship.",
    steps: [
      ["Morning and Evening Burnt Offering", "Each day began and ended with a lamb on the altar, with grain and drink offerings. The fire was kept burning, showing that Israel's relationship with God rested on continual substitution and dedication."],
      ["Individual Sin and Guilt Offerings", "Throughout the year, worshipers brought offerings for specific sins. Through hand-laying, confession, slaughter, and blood application, guilt was removed from the sinner and symbolically borne by the sanctuary system."],
      ["Holy Place Ministry", "Priests trimmed the lampstand, replenished oil, replaced the bread on the appointed rhythm, and burned incense morning and evening. Light, bread, and prayer formed the daily grammar of sanctified life."],
      ["Transfer of Sin", "The daily service solved the sinner's immediate problem through forgiveness, but it also created the need for final cleansing. The record of confessed sin was not ignored; it awaited the Day of Atonement."]
    ],
    typology: [
      ["Christ's Continual Intercession", "The morning and evening sacrifices and ascending incense prefigure Christ's unceasing priestly ministry. The believer does not approach God as though heaven must be persuaded to care; Christ already stands as the living Mediator whose merits are sufficient and whose intercession is constant."],
      ["Daily Sustenance", "The lampstand and shewbread point to Christ as light and bread, continually sustaining the church by the Spirit and the Word. Sanctification is therefore not a burst of occasional religious intensity, but a daily receiving of illumination, nourishment, and prayerful communion."],
      ["Confession With Assurance", "The daily service shows that forgiveness is real now, while the final eradication of sin belongs to the completed work of judgment and cleansing. Confession transfers the burden away from the sinner, but the sanctuary pattern also teaches that God will finally deal with the record, damage, and presence of sin."]
    ],
    texts: "Exodus 29:38-46; Exodus 30:7-10; Leviticus 4; Leviticus 6:8-13; Hebrews 7:25; 1 John 1:9."
  },
  {
    id: "yearly",
    tab: "Yearly Service",
    title: "The Yearly Service",
    label: "Final cleansing",
    summary:
      "The yearly service reached its climax on Yom Kippur, the Day of Atonement. Once a year the sanctuary was cleansed, the accumulated record of confessed sin was removed, and the camp was called to solemn repentance.",
    steps: [
      ["Preparation and Humbling", "Israel was commanded to afflict the soul, cease ordinary work, and gather before God. The issue was not ordinary festivity but searching judgment and covenant loyalty."],
      ["The High Priest Enters Within the Veil", "Only on this day did the high priest enter the Most Holy Place. He brought incense and blood before the ark, approaching the throne under the covering cloud of mediation."],
      ["The Lord's Goat", "The goat for the Lord was slain as a sin offering. Its blood was sprinkled before and upon the mercy seat, cleansing the sanctuary from the sins and impurities of Israel."],
      ["The Scapegoat", "After the sanctuary was cleansed, the high priest confessed Israel's sins over the live goat, which was led into the wilderness. This did not provide atonement by sacrifice; it represented the final removal and disposal of sin."],
      ["A Clean Camp", "The day ended with sanctuary, priesthood, and people ritually cleansed. The yearly service announced that God's plan does not merely forgive sin; it finally removes it."]
    ],
    typology: [
      ["Investigative Judgment", "Daniel 8:14 connects sanctuary cleansing with God's end-time answer to evil. Adventist interpretation sees the antitypical Day of Atonement as Christ's final heavenly ministry, where the claims of the gospel, the reality of faith, and the justice of God's government are openly demonstrated."],
      ["Vindication of God", "The judgment concerns more than human destiny. It also vindicates God's justice, mercy, law, and saving character before the universe. The same throne that exposes sin also reveals that God has acted righteously in forgiving, restoring, and finally cleansing His people."],
      ["Final Removal of Sin", "Azazel represents the final disposal of sin and responsibility after atonement has been completed by the Lord's provision. The live goat does not save; it bears away responsibility after sacrificial atonement has already been made, pointing to the ultimate end of sin's author and sin's effects."]
    ],
    texts: "Leviticus 16; Leviticus 23:26-32; Daniel 7:9-14; Daniel 8:14; Hebrews 8-9; Revelation 11:19."
  }
];

const attireGroups = [
  {
    id: "ordinary",
    label: "Ordinary Priest",
    summary: "White linen garments taught purity, service, and access through consecrated ministry.",
    defaultGarment: "linen-tunic"
  },
  {
    id: "high",
    label: "High Priest",
    summary: "The high priest carried Israel before God in garments of glory, beauty, judgment, and mediation.",
    defaultGarment: "breastplate"
  },
  {
    id: "atonement",
    label: "Day of Atonement Linen",
    summary: "On Yom Kippur the high priest laid aside glory garments and ministered in plain holy linen.",
    defaultGarment: "holy-linen-garments"
  }
];

const priestlyAttire = [
  {
    id: "linen-tunic",
    group: "ordinary",
    name: "Linen Tunic",
    zone: "tunic",
    accent: "#efe6cf",
    scripture: "KJV references: Exodus 28:39-40; Exodus 39:27; Leviticus 8:7.",
    shortMeaning: "A clean garment for holy service.",
    description:
      "The ordinary priest wore a woven linen coat or tunic as the base garment for sanctuary ministry. It covered the body in simplicity and cleanliness rather than display.",
    meaning:
      "The tunic taught that ministry near God required purity supplied by God. Priestly service was not performed in common clothing; the priest was visibly set apart for sacred work.",
    typology:
      "It points to Christ's spotless righteousness. He ministers before the Father with no stain of sin, and His righteousness covers those who come to God through Him.",
    application:
      "Service for God begins with received cleansing, not self-made importance. We come clothed in Christ's righteousness and then serve with quiet holiness.",
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
      "The breeches were linen undergarments worn from the waist to the thighs so the priest would not expose nakedness while ministering at the altar.",
    meaning:
      "They taught reverence in bodily service. God cared about the unseen as well as the visible, and sanctuary worship rejected casual familiarity with holy things.",
    typology:
      "Christ's priesthood is perfectly reverent and undefiled. Nothing shameful or hidden corrupts His ministry for us.",
    application:
      "Holiness reaches private life. God calls His servants to integrity when no one is watching as much as when ministry is public.",
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
      "The sash gathered the garment and prepared the priest for active ministry. Exodus describes skillful needlework with fine linen and colored thread.",
    meaning:
      "The girded priest was ready to serve. Beauty and order belonged together: sanctuary ministry was careful, disciplined, and prepared.",
    typology:
      "Christ is the ready Servant and Priest, wholly prepared to do the Father's will and to minister for His people.",
    application:
      "Grace does not make us careless. It gathers our attention, disciplines our habits, and makes us ready for useful service.",
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
      "Ordinary priests wore linen bonnets or caps as part of the appointed garments for glory and beauty.",
    meaning:
      "The head covering marked the priest as one whose thoughts, judgment, and attention belonged to God's service.",
    typology:
      "Christ's mind is perfectly holy, perfectly obedient, and perfectly devoted to the Father's saving purpose.",
    application:
      "Priestly living includes the mind. Our thoughts, plans, and imagination need consecration, not merely our outward actions.",
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
      "The ephod was a richly worked garment of gold, blue, purple, scarlet, and fine linen. It had shoulder pieces joined together and was bound with a skillfully woven girdle.",
    meaning:
      "It identified the high priest as the representative mediator of Israel. The colors joined royal dignity, heavenly calling, sacrifice, and purity in one garment of service.",
    typology:
      "Christ bears the glory and responsibility of true priesthood. He does not merely sympathize from a distance; He carries His people in His appointed ministry.",
    application:
      "We are represented before God by Someone stronger than ourselves. That gives humility, because we do not stand alone, and assurance, because Christ bears us faithfully.",
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
      "Two onyx stones were set on the high priest's shoulders, engraved with the names of the twelve tribes of Israel.",
    meaning:
      "The priest carried the names of God's people on his shoulders before the Lord. The shoulders suggest strength, burden-bearing, and public representation.",
    typology:
      "Christ carries His people with unfailing strength. Our names are not forgotten in heaven; they rest on the shoulders of the true High Priest.",
    application:
      "Believers can pray and labor with confidence because Christ carries what we cannot carry. Intercession begins with His strength, not ours.",
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
      "The breastplate was a square, folded piece set with twelve precious stones, each associated with a tribe of Israel. It was fastened to the ephod and worn over the high priest's heart.",
    meaning:
      "It taught representation in judgment. The people were not merely carried as a burden on the shoulders; they were carried near the heart in the decisions and concerns of sanctuary mediation.",
    typology:
      "Christ bears His people on His heart in the judgment. His priestly ministry is not cold administration; it is intelligent, lawful, merciful representation by the One who gave Himself for us.",
    application:
      "Judgment becomes good news when we are in Christ. We are invited to live honestly before God, trusting the heart of our High Priest.",
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
      "The Urim and Thummim were placed in the breastplate of judgment and were associated with receiving divine direction for Israel. Scripture does not describe their exact shape, so the wardrobe shows them as two small light-bearing stones within the breastplate pouch.",
    meaning:
      "The nation was not left to guess its way through covenant life. Guidance was sought through the priestly system God appointed.",
    typology:
      "Christ is the full revelation of God's will. In Him are light, truth, wisdom, and the final answer to the direction God's people need.",
    application:
      "We seek guidance through Christ, Scripture, prayer, and Spirit-led wisdom rather than self-confident impulse.",
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
      "The robe of the ephod was entirely blue, worn beneath the ephod. Around its hem were bells and pomegranates.",
    meaning:
      "The blue robe suggested a heavenly dimension to priestly service. The high priest ministered on earth, yet his work pointed upward to God's dwelling and authority.",
    typology:
      "Christ's priesthood is heavenly. Hebrews presents Him as minister of the true sanctuary, bringing earthly need into heavenly reality.",
    application:
      "Our faith must look higher than visible religion. Christian life is sustained by the living ministry of Christ in heaven.",
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
      "Golden bells alternated with blue, purple, and scarlet pomegranates around the hem of the high priest's robe.",
    meaning:
      "The bells made the priest's ministry audible, while the pomegranates suggested fruitfulness and beauty. Priesthood was living service, not silent ornament.",
    typology:
      "Christ's ministry is effective and fruitful. His work is heard in the gospel and seen in transformed lives.",
    application:
      "True service should have both witness and fruit: a clear testimony and a life that bears evidence of grace.",
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
      "The high priest also wore a finely woven tunic under the colored garments, connecting him with the linen purity of the ordinary priesthood.",
    meaning:
      "The garment showed that glory did not replace purity. Beauty in sanctuary service rested on clean consecration.",
    typology:
      "Christ's glory is inseparable from holiness. He is majestic because He is perfectly pure, obedient, and self-giving.",
    application:
      "Spiritual beauty is not performance. It grows from purity, faithfulness, and hidden consecration beneath public service.",
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
      "The ephod's skillfully woven girdle was made of the same materials as the ephod and bound the garment to the high priest.",
    meaning:
      "The sash joined beauty to readiness. The high priest's glory was not decorative only; it was bound to active mediation.",
    typology:
      "Christ's glory is the glory of saving service. He is exalted as the Priest who acts for His people.",
    application:
      "God-given gifts and honor are meant to be bound to service, not used for display.",
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
      "The high priest wore a linen turban, and the golden plate was fastened to it with a blue lace.",
    meaning:
      "The turban marked the high priest's mind, identity, and authority as consecrated to God. His thoughts and judgments were not private property.",
    typology:
      "Christ's mind and authority are wholly holy. He judges, intercedes, and leads with perfect consecration.",
    application:
      "Consecration includes the way we think, decide, speak, and lead. Holiness must govern the mind.",
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
      "A pure gold plate engraved with 'HOLINESS TO THE LORD' was fastened to the high priest's forehead.",
    meaning:
      "The plate taught that the priest bore the iniquity of the holy things, making Israel's worship acceptable through appointed mediation.",
    typology:
      "Christ bears the defect of our worship and presents His people accepted before God. His holiness covers what our best offerings lack.",
    application:
      "Even our worship needs grace. We serve sincerely, but our confidence is Christ's holiness, not the flawless quality of our devotion.",
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
      "On the Day of Atonement the high priest wore holy linen garments rather than the full garments of glory and beauty. He washed, dressed in linen, and entered the solemn service of cleansing.",
    meaning:
      "The plain linen emphasized humility, purity, and the seriousness of atonement. On the day of judgment and cleansing, the focus was not splendor but holiness, blood, confession, and removal of sin.",
    typology:
      "Christ's final priestly work is humble, holy, and complete. The One who is glorious does the work of cleansing by the merit of His own blood.",
    application:
      "The antitypical Day of Atonement calls for humility, confession, confidence in Christ, and willingness to let God remove sin rather than merely excuse it.",
  }
];

const attireById = Object.fromEntries(priestlyAttire.map(item => [item.id, item]));

const feasts = [
  {
    id: "passover",
    name: "Passover",
    season: "Spring feasts - past fulfillment",
    date: "Nisan 14",
    accent: "#c66b2d",
    movement: "Blood covers the house; bondage gives way to pilgrimage.",
    texts: "Exodus 12:1-28; Leviticus 23:4-5; Numbers 28:16; 1 Corinthians 5:7; John 19:36.",
    procedureSteps: [
      {
        icon: "lamb",
        title: "Lamb Chosen",
        detail: "On the tenth day each household selected an unblemished lamb and kept it under observation until the fourteenth."
      },
      {
        icon: "blood",
        title: "Blood Applied",
        detail: "At twilight the lamb was slain, and its blood marked the doorposts and lintel as the sign of shelter under substitution."
      },
      {
        icon: "meal",
        title: "Meal Eaten",
        detail: "The family ate the roasted lamb with unleavened bread and bitter herbs, remembering both bondage and deliverance."
      },
      {
        icon: "depart",
        title: "Ready to Leave",
        detail: "The meal was eaten in readiness for departure, turning salvation into the beginning of pilgrimage with God."
      }
    ],
    procedure:
      "Families selected an unblemished lamb on the tenth day and kept it until the fourteenth, giving time for inspection and identification. At twilight the lamb was slain, its blood was applied to the doorposts and lintel, and the household ate the roasted lamb with unleavened bread and bitter herbs in readiness for departure. The meal was eaten under the sign of blood, with no bone broken, so that deliverance was received as substitution, judgment averted, and pilgrimage begun.",
    significance:
      "Passover commemorated deliverance from Egypt and marked Israel's birth as a redeemed covenant people. It joined household faith, sacrificial blood, judgment, freedom from bondage, and covenant identity in one dramatic rite. The feast taught that salvation is not achieved by Israel's strength, but received through God's appointed substitute and then lived out as a liberated people.",
    fulfillment:
      "Christ is our Passover Lamb. His death occurs in the Passover setting, and His blood delivers believers from condemnation, bondage, and death. The timing, substitution, and unbroken bones all converge in Him: judgment passes over not because sin is ignored, but because a spotless Substitute has died in the sinner's place.",
    scholar: {
      quotes: [
        {
          quote: "The lamb slain at the Passover festival ... symbolized Christ",
          source: "Roy E. Gane",
          insight: "Gane keeps the typology centered on the victim itself: deliverance is not an abstraction, but a slain substitute pointing to Christ."
        },
        {
          quote: "No shelter from the destroyer except under the blood of the Passover lamb.",
          source: "Stephen N. Haskell",
          insight: "This is the sharper sanctuary insight: protection is not self-made spirituality, but life under the sign of the substitute's blood."
        },
        {
          quote: "sacrifice of the Passover Lamb at the sanctuary",
          source: "Richard M. Davidson",
          insight: "Davidson places the Passover within sanctuary logic, so the feast becomes part of the larger movement from sacrifice to priestly mediation and final cleansing."
        }
      ],
    }
  },
  {
    id: "unleavened",
    name: "Unleavened Bread",
    season: "Spring feasts - past fulfillment",
    date: "Nisan 15-21",
    accent: "#b9822d",
    movement: "The saved household removes the old leaven and learns a new life.",
    texts: "Exodus 12:15-20; Leviticus 23:6-8; Numbers 28:17-25; 1 Corinthians 5:8.",
    procedureSteps: [
      {
        icon: "purge",
        title: "Leaven Removed",
        detail: "Israel searched the home and removed leaven, making redemption visible in ordinary household space."
      },
      {
        icon: "meal",
        title: "Bread Eaten",
        detail: "For seven days the people ate unleavened bread, remembering the haste and purity of deliverance."
      },
      {
        icon: "assembly",
        title: "Holy Convocations",
        detail: "The first and seventh days were sacred assemblies, framing the week with worship before the Lord."
      },
      {
        icon: "offering",
        title: "Daily Offerings",
        detail: "Offerings accompanied the feast, showing that separation from corruption rests on continued grace."
      }
    ],
    procedure:
      "For seven days Israel removed leaven from the home and ate unleavened bread. The first and seventh days were sacred assemblies, and daily offerings were presented to the Lord. The search for leaven turned redemption into household practice: the rescued people were to purge the old ferment, remember the haste of deliverance, and live as those who had left Egypt behind.",
    significance:
      "The feast recalled haste in leaving Egypt and symbolized separation from corruption. Leaven became a ritual sign of the old life that must not be carried into redeemed existence. Passover blood delivered Israel from judgment; Unleavened Bread taught that redeemed people must not preserve the habits, bitterness, or hidden corruption of bondage.",
    fulfillment:
      "Christ's sinless body and burial stand at the center of this feast. Believers respond by keeping the feast spiritually with sincerity and truth rather than malice and wickedness. Redemption is not only escape from judgment; it is removal of the old leaven, the beginning of a new household shaped by purity.",
    scholar: {
      quotes: [
        {
          quote: "Unleavened bread represented freedom from malice and wickedness.",
          source: "Stephen N. Haskell",
          insight: "Haskell reads the feast as moral release, not merely ritual diet. The redeemed home must no longer preserve the hidden ferment of Egypt."
        },
        {
          quote: "the messianic implications of the unleavened bread are made clear",
          source: "Richard M. Davidson",
          insight: "Davidson's wording points readers beyond household practice to Christ, whose sinless life and burial give the feast its messianic center."
        },
        {
          quote: "The bread Jesus used was unleavened Passover bread",
          source: "Roy E. Gane",
          insight: "Gane's observation ties the ancient feast to the Lord's Supper, where Christ gives new-covenant meaning to Passover bread."
        }
      ],
    }
  },
  {
    id: "firstfruits",
    name: "Firstfruits",
    season: "Spring feasts - past fulfillment",
    date: "After the Sabbath during Unleavened Bread",
    accent: "#d09a2f",
    movement: "The first sheaf is lifted before God as pledge of the whole harvest.",
    texts: "Leviticus 23:9-14; Numbers 28:26; 1 Corinthians 15:20-23; James 1:18.",
    procedureSteps: [
      {
        icon: "harvest",
        title: "Harvest Begins",
        detail: "The first ripe barley signaled that God had begun to give the field back to His people in abundance."
      },
      {
        icon: "offering",
        title: "Sheaf Presented",
        detail: "The priest waved the first sheaf before the Lord before Israel ate from the new harvest."
      },
      {
        icon: "offering",
        title: "Sacrifices Added",
        detail: "Burnt, grain, and drink offerings accompanied the sheaf, placing the harvest inside worship."
      },
      {
        icon: "cleansing",
        title: "Whole Field Pledged",
        detail: "The first portion represented the whole harvest, trusting that God would complete what He had begun."
      }
    ],
    procedure:
      "The priest waved the first sheaf of the barley harvest before the Lord, accompanied by burnt, grain, and drink offerings. Israel could not eat from the new harvest until the first portion was presented to God. The act consecrated the whole field by offering its beginning, confessing that harvest, land, life, and future abundance belonged first to the Lord.",
    significance:
      "Firstfruits acknowledged God as owner of the harvest and pledged that the first sheaf guaranteed more to come. It was an act of trust at the beginning of harvest, not after all abundance was secured. The feast trained Israel to read the first sign of life as a promise: God who gives the first sheaf is faithful for the full ingathering.",
    fulfillment:
      "Christ is raised as the firstfruits of those who sleep. His resurrection is not an isolated miracle but the pledge that the full resurrection harvest will follow. The first sheaf guarantees the field; Christ's empty tomb guarantees the resurrection of all who belong to Him.",
    scholar: {
      quotes: [
        {
          quote: "The first-fruits were offered the third day after the Passover.",
          source: "Stephen N. Haskell",
          insight: "Haskell's timing makes the resurrection typology vivid: the first sheaf appears after Passover, just as Christ rises after the cross."
        },
        {
          quote: "Jesus arose as the firstfruits of them that sleep",
          source: "Richard M. Davidson",
          insight: "Davidson connects the harvest rite directly to resurrection hope. The firstfruits are not simply gratitude for crops, but a pledge of resurrected people."
        }
      ],
    }
  },
  {
    id: "weeks",
    name: "Weeks / Pentecost",
    season: "Spring feasts - church empowerment",
    date: "Fifty days after Firstfruits",
    accent: "#4fae86",
    movement: "The harvest becomes a gathered people offered to God by grace.",
    texts: "Leviticus 23:15-22; Deuteronomy 16:9-12; Acts 2:1-41; Ephesians 2:14-22.",
    procedureSteps: [
      {
        icon: "days",
        title: "Seven Weeks Counted",
        detail: "Israel counted fifty days from Firstfruits, waiting for the harvest to mature before celebration."
      },
      {
        icon: "meal",
        title: "Two Loaves Presented",
        detail: "Two leavened loaves were waved before the Lord as firstfruits of the wheat harvest."
      },
      {
        icon: "offering",
        title: "Offerings Joined",
        detail: "Sacrifices of dedication, atonement, and fellowship surrounded the loaves with covenant worship."
      },
      {
        icon: "assembly",
        title: "Mercy in the Field",
        detail: "The harvest law protected the poor and stranger, joining worship, gratitude, and mission."
      }
    ],
    procedure:
      "Israel counted seven complete weeks from Firstfruits and then presented two loaves baked with leaven, along with sacrifices of dedication, fellowship, and atonement. The feast celebrated the wheat harvest and included generosity toward the poor and stranger by leaving gleanings in the field. Joy, worship, mission, and covenant responsibility belonged together.",
    significance:
      "Pentecost marked harvest completion and covenant gratitude. The two loaves suggest a people gathered to God from ordinary, imperfect humanity and offered by grace. Unlike the first sheaf, these loaves were baked and communal, showing harvest gathered, formed, and presented before God as the fruit of His blessing.",
    fulfillment:
      "In Acts 2, the Spirit is poured out at Pentecost, empowering witness and gathering a harvest from many nations. The church becomes a Spirit-filled first harvest of the gospel. The two loaves, offered with leaven, beautifully suggest that God receives a real human community, still dependent on grace, yet made acceptable through sacrifice.",
    scholar: {
      quotes: [
        {
          quote: "The antitype of the first-fruits was three thousand souls",
          source: "Stephen N. Haskell",
          insight: "Haskell sees Acts 2 as harvest fulfillment. The Spirit gathers people, not grain, as the first visible crop of the risen Christ's ministry."
        },
        {
          quote: "pouring out of the Holy Spirit on the day of Pentecost",
          source: "Richard M. Davidson",
          insight: "Davidson places Pentecost in the sanctuary's larger prophetic pattern: harvest becomes Spirit-empowered witness after Christ's victory."
        },
        {
          quote: "two wave loaves baked with leaven presented at Pentecost",
          source: "M. L. Andreasen",
          insight: "Andreasen's ritual detail is unusually rich: God receives a gathered human community that is real, imperfect, and acceptable only through sacrifice."
        }
      ],
    }
  },
  {
    id: "trumpets",
    name: "Trumpets",
    season: "Fall feasts - judgment preparation",
    date: "Tishri 1",
    accent: "#6e8b67",
    movement: "A mercy-alarm wakes the camp before the day of cleansing.",
    texts: "Leviticus 23:23-25; Numbers 29:1-6; Joel 2:1; Revelation 14:6-7.",
    procedureSteps: [
      {
        icon: "days",
        title: "Sacred Rest",
        detail: "The seventh month opened with cessation from ordinary work and a renewed sense of holy time."
      },
      {
        icon: "trumpet",
        title: "Trumpets Sounded",
        detail: "The blasts interrupted the camp, calling Israel to attention before the approaching Day of Atonement."
      },
      {
        icon: "offering",
        title: "Offerings Presented",
        detail: "Special offerings placed the alarm inside worship, not panic, because preparation begins with God."
      },
      {
        icon: "cleansing",
        title: "Hearts Prepared",
        detail: "The people were summoned to repentance, humility, and readiness for sanctuary cleansing."
      }
    ],
    procedure:
      "The seventh month opened with a sacred rest, trumpet blasts, and special offerings. The sound interrupted ordinary life and summoned Israel to attention, repentance, and preparation for the approaching Day of Atonement. The trumpet was not empty noise; it was a covenant alarm calling the camp to wakefulness before God.",
    significance:
      "Trumpets functioned as an alarm of grace. Before judgment came a call to wakefulness, confession, and renewed covenant seriousness. The feast showed that God warns before He cleanses, and that His people are not meant to stumble into judgment unaware but to prepare through humility, worship, and renewed allegiance.",
    fulfillment:
      "Trumpets points to God's end-time messages that announce judgment, call the world to worship the Creator, and prepare a people for Christ's final ministry and return. Its typology is a mercy-alarm: God awakens before He judges, giving space for repentance, worship, and renewed covenant attention.",
    scholar: {
      quotes: [
        {
          quote: "warning all of the near approach of the solemn day of atonement",
          source: "Stephen N. Haskell",
          insight: "Haskell's point makes Trumpets a mercy-warning. The alarm is not an end in itself; it prepares the conscience for cleansing."
        },
        {
          quote: "a solemn call to all Israel to prepare to meet their God",
          source: "M. L. Andreasen",
          insight: "Andreasen gives the feast its devotional weight: preparation for judgment is personal, communal, and deeply reverent."
        },
        {
          quote: "the text does not specify the function of this trumpet blast",
          source: "Roy E. Gane",
          insight: "Gane's caution is valuable scholarship. It keeps the interpretation humble while still letting the festival sequence show movement toward Atonement."
        }
      ],
    }
  },
  {
    id: "atonement",
    name: "Day of Atonement",
    season: "Fall feasts - final cleansing",
    date: "Tishri 10",
    accent: "#874f9e",
    movement: "The record of sin is faced, cleansed, and carried away.",
    texts: "Leviticus 16; Leviticus 23:26-32; Daniel 7:9-14; Daniel 8:14; Hebrews 8-9.",
    procedureSteps: [
      {
        icon: "assembly",
        title: "Camp Humbled",
        detail: "Israel ceased work and afflicted the soul, meeting judgment with confession rather than denial."
      },
      {
        icon: "priest",
        title: "High Priest Entered",
        detail: "With incense and blood, the high priest alone entered within the veil before the ark."
      },
      {
        icon: "blood",
        title: "Sanctuary Cleansed",
        detail: "The Lord's goat supplied blood for cleansing the sanctuary from accumulated sin and impurity."
      },
      {
        icon: "cleansing",
        title: "Sin Sent Away",
        detail: "After atonement was completed, confessed sins were placed on the live goat and removed from the camp."
      }
    ],
    procedure:
      "The high priest offered sacrifices for himself and the people, entered the Most Holy Place with incense and blood, and cleansed the sanctuary from the accumulated impurities of Israel. Two goats stood at the center of the ritual: the Lord's goat was slain as the blood of cleansing, and the live goat bore confessed sins away after atonement had been completed. The whole nation ceased work and humbled itself before God.",
    significance:
      "This was the most solemn day of the year. It dealt with the accumulated sin record, cleansed the sanctuary, and called Israel to humility before God's judgment. The daily service assured individual forgiveness; the yearly service revealed that God would also resolve sin's record, pollution, responsibility, and cosmic challenge to His character.",
    fulfillment:
      "The antitypical Day of Atonement points to Christ's final heavenly ministry, the cleansing of the sanctuary, the judgment, and the final removal of sin before restoration is complete. It gathers together intercession, investigation, vindication, and cleansing: God saves His people while also answering the moral history of sin.",
    scholar: {
      quotes: [
        {
          quote: "The Day of Atonement was the most solemn of all the feasts",
          source: "Stephen N. Haskell",
          insight: "Haskell captures the emotional tone of the day: this was not ordinary ritual, but the annual moment when sin's record was faced before God."
        },
        {
          quote: "Freedom and healing come together on the Day of Atonement",
          source: "Roy E. Gane",
          insight: "Gane's line is a strong theological insight: judgment is not merely exposure; rightly understood, it is God's way of bringing cleansing and restoration."
        },
        {
          quote: "the sanctuary was cleansed of these sins by the application of blood",
          source: "Richard M. Davidson",
          insight: "Davidson's phrasing keeps the cleansing grounded in blood. The final service does not bypass atonement; it applies atonement to the sanctuary's accumulated problem."
        }
      ],
    }
  },
  {
    id: "tabernacles",
    name: "Tabernacles",
    season: "Fall feasts - final dwelling",
    date: "Tishri 15-21, with an eighth-day assembly",
    accent: "#c18a2a",
    movement: "After cleansing, the redeemed people rejoice under God's shelter.",
    texts: "Leviticus 23:33-44; Numbers 29:12-38; Zechariah 14:16; John 7:37-39; Revelation 21:3.",
    procedureSteps: [
      {
        icon: "shelter",
        title: "Booths Built",
        detail: "Israel lived in temporary shelters, remembering wilderness dependence under God's care."
      },
      {
        icon: "harvest",
        title: "Branches Rejoiced",
        detail: "The people rejoiced with branches and harvest symbols, celebrating provision after pilgrimage."
      },
      {
        icon: "offering",
        title: "Offerings Abounded",
        detail: "The feast overflowed with sacrifices, turning harvest joy into worship and gratitude."
      },
      {
        icon: "assembly",
        title: "Eighth-Day Assembly",
        detail: "The final assembly gathered the celebration into rest, completion, and hope beyond pilgrimage."
      }
    ],
    procedure:
      "Israel lived in booths for seven days, rejoiced with branches, presented many offerings, and remembered wilderness dependence under God's care. The feast concluded the harvest cycle with communal joy, rest, and gratitude, followed by an eighth-day assembly. It was the great celebration after atonement: a cleansed people rejoicing in God's provision and presence.",
    significance:
      "Tabernacles celebrated God's provision, protection, and presence during pilgrimage. It looked back to wilderness dwelling, gathered up the joy of harvest, and looked forward to secure life with God. Temporary booths taught dependence, while overflowing rejoicing announced that the story of redemption ends with presence, not merely escape.",
    fulfillment:
      "The feast points to the final ingathering, resurrection joy, and God's permanent dwelling with His people in the New Jerusalem. After sacrifice, proclamation, judgment, and cleansing, the goal is not merely acquittal; it is God dwelling with His people in unbroken joy.",
    scholar: {
      quotes: [
        {
          quote: "all Israel were rejoicing in their acceptance with God",
          source: "Stephen N. Haskell",
          insight: "Haskell locates the joy after cleansing. Tabernacles is not shallow celebration; it is the happiness of a people accepted by God."
        },
        {
          quote: "linked with the ultimate celebration in the new earth of the messianic age to come",
          source: "Richard M. Davidson",
          insight: "Davidson pushes the feast toward eschatology. Booths and harvest become a preview of final dwelling with God."
        },
        {
          quote: "celebrates God's goodness at the end of the harvest",
          source: "Roy E. Gane",
          insight: "Gane keeps the feast rooted in gratitude. The final hope is cosmic, but it grows from ordinary gifts: harvest, shelter, memory, and provision."
        }
      ],
    }
  }
];

const chroniclePerspectiveInfo = {
  "priest": {
    "label": "Priest's Perspective",
    "title": "The Ministering Priest",
    "text": "Step close to the holy work of washing, blood, incense, trembling service, and mercy carried for a waiting people."
  },
  "commoner": {
    "label": "Commoner's Perspective",
    "title": "The Commoner of Israel",
    "text": "Walk with families who bring guilt, questions, lambs, silence, tears, and hope to the God who makes a way back."
  }
};

const chronicleScene = (timeLabel, title, narrative, scripture) => ({ timeLabel, title, narrative, scripture });

const chronicleStories = [
  {
    "id": "priest-daily",
    "perspective": "priest",
    "serviceType": "daily",
    "serviceLabel": "Daily Service",
    "title": "Eliab and the Morning Fire",
    "subtitle": "A young priest learns that holy work must never become ordinary.",
    "scenes": [
      {
        "timeLabel": "Before dawn",
        "title": "The Linen Wall in the Dark",
        "narrative": "My name is Eliab. I leave my tent before my little boy wakes. The camp is blue with early morning, and the sanctuary wall looks almost white in the dark. My wife once asked if I still feel afraid when I serve. I told her yes. I hope I always do.",
        "scripture": "KJV: Exodus 27:9-19; Leviticus 6:8-13."
      },
      {
        "timeLabel": "At the gate",
        "title": "Do Not Hurry Holy Things",
        "narrative": "My father served before me. He used to touch my shoulder and say, \"Son, do not hurry holy things.\" I hear him whenever I come to the gate. The work is familiar, but God is not common. If my hands become careless, the people may think sin is small and mercy is cheap.",
        "scripture": "KJV: Leviticus 10:3; Hebrews 12:28."
      },
      {
        "timeLabel": "First light",
        "title": "Water for a Priest",
        "narrative": "At the laver I wash slowly. The water runs over fingers that will soon hold blood. I am a priest, but I am not clean because of my name or my family. The water reminds me first. The servant of mercy must receive mercy too.",
        "scripture": "KJV: Exodus 30:18-21; Hebrews 5:1-3."
      },
      {
        "timeLabel": "Morning embers",
        "title": "The Fire That Stayed Alive",
        "narrative": "The altar fire has not gone out. I stir the coals and feel the heat on my face. Yesterday ended with sacrifice. Today begins with sacrifice. Israel sleeps, wakes, works, and sins inside a mercy God Himself keeps burning.",
        "scripture": "KJV: Leviticus 6:12-13; Exodus 29:38-42."
      },
      {
        "timeLabel": "Sunrise",
        "title": "The Morning Lamb",
        "narrative": "The lamb is brought in quiet. It has done no wrong. Its eyes are clear, and that is what hurts. The daily lamb stands for all of us before anyone has explained himself. God is already saying, \"Come. I have made a way for sinners to live.\"",
        "scripture": "KJV: Exodus 29:38-39; John 1:29."
      },
      {
        "timeLabel": "At the altar",
        "title": "Blood That Tells the Truth",
        "narrative": "When the blood is received, I do not look away. Blood tells the truth better than speeches. Sin takes life. But this blood also tells another truth: the Lord has given life to answer death. The guilty are not safe because guilt is ignored. They are safe because sacrifice has been provided.",
        "scripture": "KJV: Leviticus 17:11; Romans 6:23."
      },
      {
        "timeLabel": "Rising smoke",
        "title": "A Sign Above the Camp",
        "narrative": "The smoke lifts over the linen wall. Some child outside may point to it and ask, \"Mama, what is that?\" I hope she answers, \"That is mercy rising.\" The offering is accepted, and Israel begins the day beneath the kindness of God.",
        "scripture": "KJV: Leviticus 1:9; Ephesians 5:2."
      },
      {
        "timeLabel": "Later morning",
        "title": "A Man at the Gate",
        "narrative": "A man comes with a goat and eyes that will not rise. I know that look. Guilt bends the neck. He whispers, \"I have sinned.\" His wife stands near him, holding a child who does not understand why grown men cry.",
        "scripture": "KJV: Leviticus 4:27-29; Psalm 32:3-5."
      },
      {
        "timeLabel": "Confession",
        "title": "Hands on the Head",
        "narrative": "He lays his hands on the goat. His words come slowly at first, then quickly, as if a door has opened. The animal stands still beneath the weight of another heart. The Lord is teaching us to bring sin into the light, not to bury it where it poisons the soul.",
        "scripture": "KJV: Leviticus 4:29; Proverbs 28:13."
      },
      {
        "timeLabel": "The knife",
        "title": "No One Laughs Here",
        "narrative": "The knife falls. The child hides her face in her mother. I want to comfort her, but the sanctuary must first be honest. Sin hurts the innocent. Sin costs more than the sinner thought. Only when we feel that can forgiveness become beautiful instead of ordinary.",
        "scripture": "KJV: Leviticus 4:33; Isaiah 53:5."
      },
      {
        "timeLabel": "Blood ministry",
        "title": "I Go Where He Cannot",
        "narrative": "I take the blood and do what God commanded. The man stays back. He cannot carry his own guilt into holiness. An appointed priest must move for him. Even while I walk, I know I am only a shadow of the coming Priest who will carry sinners on His own heart.",
        "scripture": "KJV: Leviticus 4:30-31; Hebrews 9:11-14."
      },
      {
        "timeLabel": "Assurance",
        "title": "You May Go in Peace",
        "narrative": "When the service is finished, I tell the man what God has promised. He may go in peace. His face crumples, not with fear now, but relief. He came with a burden he could not undo. He leaves because God received the substitute. That is not small news. That is life.",
        "scripture": "KJV: Leviticus 4:31; Romans 5:1."
      },
      {
        "timeLabel": "Afterward",
        "title": "Small Hands, Heavy Work",
        "narrative": "I look at my own hands and feel their weakness. They have been washed, yet they tremble. I cannot change a heart. I cannot raise the slain. I cannot erase sin by wanting to. The Lord lets me serve so I will know how badly all of us need a better Priest.",
        "scripture": "KJV: Hebrews 7:26-28; Hebrews 10:11-14."
      },
      {
        "timeLabel": "Holy Place",
        "title": "Gold in the Quiet Room",
        "narrative": "Inside the tent the light is soft and golden. The noise of the court fades. Forgiveness is not the end of the story. God brings forgiven people near, feeds them, lights their way, and receives their prayers. The sanctuary is a house of ongoing grace.",
        "scripture": "KJV: Exodus 26:33-35; Hebrews 9:2."
      },
      {
        "timeLabel": "Lampstand",
        "title": "A Flame for Tired Hearts",
        "narrative": "I trim the lamps carefully. A smoking wick makes the room dim. I think of mothers too tired to pray and men ashamed to lift their faces. The Lord keeps light burning for people who cannot make light in themselves. One day the true Light will come near enough to touch.",
        "scripture": "KJV: Exodus 27:20-21; John 8:12."
      },
      {
        "timeLabel": "Table",
        "title": "Bread for Every Tribe",
        "narrative": "The bread rests before the Lord in its place. Twelve tribes, twelve loaves, remembered and represented. I smile when I think of hungry children in the camp. God does not merely pardon His people; He feeds them. A greater Bread will come, and hungry souls will find Him enough.",
        "scripture": "KJV: Leviticus 24:5-9; John 6:35."
      },
      {
        "timeLabel": "Incense",
        "title": "Prayers Made Sweet",
        "narrative": "At the golden altar, incense rises in a cloud. Israel has prayed today with broken words, angry words, frightened words, and almost no words at all. Yet the fragrance rises before God. Prayer is accepted because mercy stands between weak people and the throne.",
        "scripture": "KJV: Exodus 30:7-8; Revelation 8:3-4."
      },
      {
        "timeLabel": "Afternoon",
        "title": "The People Outside",
        "narrative": "When I step outside, faces are waiting. They cannot see the lamp or the bread or the incense, but they trust that ministry is happening for them. I think of all the work God does where His people cannot see. Faith rests because He has spoken.",
        "scripture": "KJV: Luke 1:10; Hebrews 4:14-16."
      },
      {
        "timeLabel": "Evening",
        "title": "The Second Lamb",
        "narrative": "At sunset another lamb is offered. The day closes the way it opened: with life given in the place of the guilty. The children will sleep soon. The weary will lie down. Over every tent the evening smoke says, \"You are kept by mercy.\"",
        "scripture": "KJV: Exodus 29:39; Psalm 4:8."
      },
      {
        "timeLabel": "Nightfall",
        "title": "Enough for Today",
        "narrative": "I return home tired. My little boy asks, \"Papa, did God forgive people today?\" I hold him close and say, \"Yes. And one day He will send the Priest and Lamb who can finish what we only picture.\" My son sleeps. I stay awake a little longer, grateful and small.",
        "scripture": "KJV: Hebrews 7:25; Hebrews 9:24-28."
      }
    ]
  },
  {
    "id": "priest-atonement",
    "perspective": "priest",
    "serviceType": "atonement",
    "serviceLabel": "Day of Atonement",
    "title": "Shalem Behind the Veil",
    "subtitle": "A high priest trembles beneath the mercy of God.",
    "scenes": [
      {
        "timeLabel": "Night before",
        "title": "A Sleepless Tent",
        "narrative": "My name is Shalem. The camp is quiet, but my heart is not. My wife hears me turn again and whispers, \"Are you afraid?\" I answer, \"Yes.\" Tomorrow I go where no man goes lightly. I will stand for Israel, yet I know I need mercy as much as any child outside the gate.",
        "scripture": "KJV: Leviticus 16:2-6; Hebrews 5:1-3."
      },
      {
        "timeLabel": "Before sunrise",
        "title": "Plain Linen",
        "narrative": "The beautiful garments are set aside. No jewels. No bells. No golden plate flashing in the sun. Only linen. It feels almost too simple, but that is the lesson. Before the Holy One, a priest brings no greatness of his own. He comes low, because mercy is the only doorway.",
        "scripture": "KJV: Leviticus 16:4; Philippians 2:5-8."
      },
      {
        "timeLabel": "Washing",
        "title": "Cold Water and Prayer",
        "narrative": "The water is cold. I wash once, then again, with slow hands. A young priest watches me and says nothing. I know what he is thinking: if the high priest trembles, what hope is there? The hope is not in the priest. The hope is in the God who appointed blood and mercy.",
        "scripture": "KJV: Leviticus 16:4; Psalm 24:3-4."
      },
      {
        "timeLabel": "For my house",
        "title": "My Own Offering",
        "narrative": "The bullock is brought for me and my house. I think of impatient words spoken at home, proud thoughts hidden beneath holy garments, prayers said with wandering mind. I cannot carry Israel until mercy has first met me. The altar humbles every priest.",
        "scripture": "KJV: Leviticus 16:6, 11; Hebrews 7:27."
      },
      {
        "timeLabel": "Blood bowl",
        "title": "The Vessel in My Hands",
        "narrative": "The blood rests in the bowl, dark and warm. My fingers tighten around it. This is not a symbol for games or stories only. This is life. If I forget that, I am unfit to serve. Sin has made death necessary, but the Lord has made death speak mercy.",
        "scripture": "KJV: Leviticus 17:11; Hebrews 9:7."
      },
      {
        "timeLabel": "The goats",
        "title": "Two Animals, One Heavy Lesson",
        "narrative": "The goats stand before the Lord. One will die. One will carry away. A boy near the court asks his father why there are two. The father bends low and says, \"Because God will not merely forgive sin. He will remove it.\" I carry those words with me.",
        "scripture": "KJV: Leviticus 16:7-10; Psalm 103:12."
      },
      {
        "timeLabel": "For the Lord",
        "title": "The Goat That Dies",
        "narrative": "The goat for the Lord is slain. The people do not move. Even the children seem to understand that this death is speaking for all of us. The blood will be taken within the veil. Judgment will be met, not by excuses, but by a life God accepts.",
        "scripture": "KJV: Leviticus 16:15; Romans 3:24-26."
      },
      {
        "timeLabel": "Incense",
        "title": "A Cloud to Live In",
        "narrative": "I gather coals and incense. The fragrance rises thick, almost like a wall of kindness. God commands the cloud so I do not die. That mercy steadies me. Even near the throne, He remembers that we are dust.",
        "scripture": "KJV: Leviticus 16:12-13; Psalm 103:13-14."
      },
      {
        "timeLabel": "The veil",
        "title": "The Curtain Before Me",
        "narrative": "The inner veil hangs still. Blue, purple, scarlet, and fine white linen shine in the dimness. I put my hand near it and stop. The law is beyond. The mercy seat is beyond. I am beyond my strength. Only the command and compassion of God move me forward.",
        "scripture": "KJV: Exodus 26:31-34; Hebrews 9:3-5."
      },
      {
        "timeLabel": "Inside",
        "title": "The Silence of Gold",
        "narrative": "I pass through. The room is small, but it feels larger than the desert. There is the ark. There is the mercy seat. Beneath it is the law we have broken. Above it is the place where blood will speak. I am not brave. I am held by obedience and grace.",
        "scripture": "KJV: Exodus 25:21-22; Hebrews 9:4-5."
      },
      {
        "timeLabel": "Sprinkling",
        "title": "Blood Before the Mercy Seat",
        "narrative": "I sprinkle the blood as commanded. Each drop feels like a sentence spoken in heaven: sin is real, law is holy, mercy is stronger. God is not learning what happened in Israel. He is showing how He can cleanse without lying about evil.",
        "scripture": "KJV: Leviticus 16:14-16; Daniel 7:9-10."
      },
      {
        "timeLabel": "The record",
        "title": "What the Sanctuary Has Carried",
        "narrative": "All year forgiven people have gone home lighter. I have seen it on their faces. But the sanctuary has carried the record of confessed sin. Today the Lord deals with what mercy has borne. Forgiveness was never weak. It was moving toward cleansing.",
        "scripture": "KJV: Leviticus 16:16; Daniel 8:14."
      },
      {
        "timeLabel": "Coming out",
        "title": "Still Alive",
        "narrative": "When I come out from behind the veil, my legs nearly fail. I am alive. The people cannot see me yet, but I know they are waiting. I want to tell every mother and every frightened child that God has not rejected His people.",
        "scripture": "KJV: Leviticus 16:17; Hebrews 9:8."
      },
      {
        "timeLabel": "The altar",
        "title": "Mercy Cleans Its Own House",
        "narrative": "I place blood on the horns of the altar. This altar has received the cries of sinners all year. It too must be cleansed. God is making His dwelling right, not because He is tired of us, but because He wants to live with us without sin standing between.",
        "scripture": "KJV: Leviticus 16:18-19; Revelation 21:3."
      },
      {
        "timeLabel": "The live goat",
        "title": "Both Hands",
        "narrative": "The live goat is brought near. I place both hands on its head. My voice names the sins of Israel, and the words are heavy. This is not pretending. This is removal. The Lord is showing the camp that what blood has answered will not stay forever in His house.",
        "scripture": "KJV: Leviticus 16:20-21; Micah 7:19."
      },
      {
        "timeLabel": "Away from camp",
        "title": "The Goat Disappears",
        "narrative": "The chosen man leads the goat away. Children stand on toes to see. Mothers shade their eyes. The goat grows smaller until the desert swallows it. A little girl asks, \"Will it come back?\" Her father says, \"No.\" Around us, hope takes a long breath.",
        "scripture": "KJV: Leviticus 16:22; Psalm 103:12."
      },
      {
        "timeLabel": "The people",
        "title": "Tears Without Terror",
        "narrative": "People begin to weep. Not the hopeless kind. These are tears after fear has been answered. The day has made sin look terrible, but God has looked more wonderful. He has provided sacrifice, priest, cleansing, and removal.",
        "scripture": "KJV: Leviticus 16:30; Romans 8:33-34."
      },
      {
        "timeLabel": "Garments changed",
        "title": "Beauty After Cleansing",
        "narrative": "The linen is laid aside. The garments of glory return, but they feel different now. I know they do not make me worthy. They preach that God can clothe weak people for service after cleansing has done its work.",
        "scripture": "KJV: Leviticus 16:23-24; Revelation 19:8."
      },
      {
        "timeLabel": "Blessing",
        "title": "Hands Over Israel",
        "narrative": "I lift my hands over the people. My voice shakes on the blessing. I am not their savior. I am a witness. The Lord blesses. The Lord keeps. The Lord makes His face shine. If the people go home in peace, it is because mercy has carried the day.",
        "scripture": "KJV: Numbers 6:24-26; Hebrews 9:13-14."
      },
      {
        "timeLabel": "Night",
        "title": "Waiting for the Last Day",
        "narrative": "After sunset I sit outside my tent. The stars look washed. Yet I know sin will rise again in the camp. My heart longs for the final cleansing, for the true High Priest who will finish the work and bring the people into a world where no child asks why blood must be shed.",
        "scripture": "KJV: Hebrews 9:23-28; Revelation 21:3-4."
      }
    ]
  },
  {
    "id": "commoner-daily",
    "perspective": "commoner",
    "serviceType": "daily",
    "serviceLabel": "Daily Service",
    "title": "Liora at the Gate",
    "subtitle": "A family learns the cost of forgiveness and the kindness of substitution.",
    "scenes": [
      {
        "timeLabel": "Morning",
        "title": "The Secret in My Hand",
        "narrative": "My name is Liora. I stole a little bronze pin from my neighbor because it shone in the sun. At first it felt small in my palm. By morning it felt as heavy as a stone. I hid it under my sleeping mat, but I could not hide it from my own heart.",
        "scripture": "KJV: Psalm 32:3-5; Leviticus 5:5."
      },
      {
        "timeLabel": "At home",
        "title": "Mama Knows",
        "narrative": "Mama found me crying before breakfast. She did not ask many questions. She only sat beside me and waited. When I told her, her eyes filled with tears too. \"Sin hurts more than the person who does it,\" she said. \"But the Lord has made a way to bring it back into the light.\"",
        "scripture": "KJV: Proverbs 28:13; 1 John 1:9."
      },
      {
        "timeLabel": "The fold",
        "title": "Not That Lamb",
        "narrative": "Papa chose a lamb from the fold, a small white one that always followed my brother. \"Not that one,\" I whispered. Papa knelt so his eyes were level with mine. \"My child, this is why sin is so sad. The innocent must teach us what guilt really costs.\"",
        "scripture": "KJV: Leviticus 4:27-32; Isaiah 53:6."
      },
      {
        "timeLabel": "The walk",
        "title": "No One Scolds the Lamb",
        "narrative": "We walked toward the sanctuary. The lamb tugged at the rope, stopping to sniff a dry bush. My brother wanted to pet it, then remembered and pulled his hand back. No one scolded the lamb. No one could. It had done nothing wrong.",
        "scripture": "KJV: Leviticus 1:3-4; 1 Peter 1:18-19."
      },
      {
        "timeLabel": "The gate",
        "title": "A Door for Guilty People",
        "narrative": "The colored gate moved in the wind. Blue, purple, scarlet, and white. I thought it would look angry at me, but it looked open. Mama squeezed my hand. \"The Lord does not open the gate because sin is harmless,\" she said. \"He opens it because He is merciful.\"",
        "scripture": "KJV: Exodus 27:16; John 10:9."
      },
      {
        "timeLabel": "Waiting",
        "title": "Not Alone",
        "narrative": "Other people stood near the court. A man held two birds. A woman held a child and looked very tired. I had thought I was the only one with a secret. At the sanctuary I learned that every family needs mercy, and God calls needy people near.",
        "scripture": "KJV: Leviticus 5:7; Romans 3:23-24."
      },
      {
        "timeLabel": "Hands",
        "title": "Telling the Truth",
        "narrative": "Papa put his hand over mine and helped me lay it on the lamb. The wool was warm. I said what I had done. The words tasted bitter, but after they came out, I could breathe. Hiding had made me smaller. Confession brought me where mercy could find me.",
        "scripture": "KJV: Leviticus 5:5-6; Psalm 32:5."
      },
      {
        "timeLabel": "Transfer",
        "title": "The Lamb Stood Still",
        "narrative": "The lamb stood still under my hand. It did not know my shame, but it bore the sign of it. I began to cry harder. Papa did not stop me. \"Remember this feeling,\" he whispered. \"The substitute is innocent. That is why forgiveness is both painful and wonderful.\"",
        "scripture": "KJV: Leviticus 4:29; 2 Corinthians 5:21."
      },
      {
        "timeLabel": "Death",
        "title": "When I Understood a Little",
        "narrative": "I turned my face when the knife came, but I still heard it. My knees shook. The bronze pin had looked so tiny yesterday. Now I saw that sin is never tiny when it reaches the innocent. The lamb died, and my heart learned more than words could teach.",
        "scripture": "KJV: Leviticus 4:33; Romans 6:23."
      },
      {
        "timeLabel": "Blood",
        "title": "Life for Life",
        "narrative": "The priest caught the blood. It was not pretty, but it was precious. Papa said, \"The life is in the blood.\" I held the pin in my fist and wished I could undo everything. I could not. But God had given a life in the place where my guilt stood.",
        "scripture": "KJV: Leviticus 17:11; Ephesians 1:7."
      },
      {
        "timeLabel": "The priest",
        "title": "Someone Went Near for Me",
        "narrative": "The priest carried the blood where I could not go. I watched his careful steps. I was still outside, but mercy was moving for me. Much later, I would understand that the sanctuary was teaching us to trust a greater Priest who would carry sinners closer than any earthly priest could.",
        "scripture": "KJV: Leviticus 4:30-31; Hebrews 9:12."
      },
      {
        "timeLabel": "Smoke",
        "title": "A Smell I Remembered",
        "narrative": "Smoke rose from the altar. I thought it would smell only sad, but it also smelled like the end of hiding. Mama wiped my cheeks. \"The offering is accepted,\" she said softly. The lamb was gone, and yet hope had come nearer.",
        "scripture": "KJV: Leviticus 4:31; Psalm 51:17."
      },
      {
        "timeLabel": "Forgiven",
        "title": "The Word That Opened My Chest",
        "narrative": "The priest spoke kindly. \"The Lord has provided atonement.\" I did not understand every word, but I understood his face. I was not being sent away as a thief. I was being sent home as a forgiven child who must now make wrong things right.",
        "scripture": "KJV: Leviticus 4:31; Romans 5:1."
      },
      {
        "timeLabel": "Restitution",
        "title": "Returning the Pin",
        "narrative": "We went straight to my neighbor. My hand shook as I gave back the pin and the added gift Papa brought. The neighbor looked at me for a long moment, then nodded. Making it right was hard, but it no longer felt impossible. Mercy had given me courage.",
        "scripture": "KJV: Leviticus 6:1-5; Numbers 5:6-7."
      },
      {
        "timeLabel": "Questions",
        "title": "My Brother Asks Why",
        "narrative": "On the way home my brother asked, \"Did the lamb hate Liora?\" Papa stopped walking. \"No,\" he said. \"The lamb did not choose her wrong. But God used the lamb to show that sin can be carried by another.\" My brother took my hand after that.",
        "scripture": "KJV: Isaiah 53:7; John 1:29."
      },
      {
        "timeLabel": "Afternoon",
        "title": "The Mat Feels Different",
        "narrative": "Back in the tent, the place under my mat was empty. I kept looking at it. The secret was gone. My heart still ached for the lamb, but the ache was clean now, not dark. Guilt had made me afraid to be known. Forgiveness let me sit with my family again.",
        "scripture": "KJV: Psalm 32:1; Romans 8:1."
      },
      {
        "timeLabel": "Evening smoke",
        "title": "Mercy for the Whole Camp",
        "narrative": "At sunset the smoke of the evening lamb rose beyond the tents. Papa lifted me so I could see it. \"For all Israel,\" he said. I rested my head on his shoulder. The God who helped one guilty girl was holding the whole camp in mercy.",
        "scripture": "KJV: Exodus 29:38-42; Lamentations 3:22-23."
      },
      {
        "timeLabel": "Night",
        "title": "Safe Enough to Sleep",
        "narrative": "That night Mama tucked the blanket around me. I whispered, \"Will I remember the lamb forever?\" She brushed hair from my face. \"I hope so,\" she said. \"But remember most that the Lord provided it because He wanted you near.\"",
        "scripture": "KJV: Psalm 4:8; Psalm 103:11-12."
      },
      {
        "timeLabel": "Dreaming",
        "title": "A Better Lamb",
        "narrative": "Before sleep took me, I wondered if someday there would be a sacrifice so great that no more lambs would need to die. I did not know His name yet. But the sanctuary had put the hope inside me: God would provide the Lamb.",
        "scripture": "KJV: John 1:29; Revelation 5:12."
      },
      {
        "timeLabel": "Morning after",
        "title": "Light in the Tent",
        "narrative": "The next morning the tent was full of ordinary sounds again: grinding grain, my brother humming, Mama laughing at something Papa said. Ordinary felt like a gift. Sin had trapped me in fear. Mercy had opened the door, and I stepped into the day forgiven.",
        "scripture": "KJV: 2 Corinthians 5:17; Psalm 116:7."
      }
    ]
  },
  {
    "id": "commoner-atonement",
    "perspective": "commoner",
    "serviceType": "atonement",
    "serviceLabel": "Day of Atonement",
    "title": "Noam and the Silent Camp",
    "subtitle": "A family waits while God teaches Israel that forgiven sin will finally be removed.",
    "scenes": [
      {
        "timeLabel": "Before sunrise",
        "title": "No Breakfast Fire",
        "narrative": "My name is Noam. Usually our tent smells like bread in the morning. Today there is no fire. Even my little sister whispers. Papa says this is the Day of Atonement, the solemn day when Israel remembers that sin must not live forever among the people of God.",
        "scripture": "KJV: Leviticus 16:29-31; Leviticus 23:27."
      },
      {
        "timeLabel": "Inside the tent",
        "title": "The Family Talks Low",
        "narrative": "We sit together on the mat. Mama asks if we have anything to confess. Nobody speaks at first. Then my sister says she was angry yesterday. I say I mocked a boy smaller than me. Papa closes his eyes. \"The Lord already knows,\" he says. \"We confess so hiding can end.\"",
        "scripture": "KJV: Psalm 139:23-24; 1 John 1:9."
      },
      {
        "timeLabel": "Papa prays",
        "title": "Even Grown Men Need Mercy",
        "narrative": "Papa prays for us, then for himself. His voice breaks when he says he has been harsh and proud. I stare at him. I thought fathers were mostly strong. Today I learn that strong people need mercy too, and the safest homes are the ones where confession is not feared.",
        "scripture": "KJV: Psalm 130:3-4; James 5:16."
      },
      {
        "timeLabel": "The quiet camp",
        "title": "Walking Without Songs",
        "narrative": "We walk toward the sanctuary with other families. No one sings. No one trades. Sand crunches under many feet. The white wall stands ahead, and I remember all the offerings brought there through the year. Forgiven people went home glad, but the sanctuary carried the record until this day.",
        "scripture": "KJV: Leviticus 16:16; Daniel 8:14."
      },
      {
        "timeLabel": "The high priest",
        "title": "Plain Clothes for a Holy Day",
        "narrative": "The high priest appears in plain linen. I expected glory, but he looks almost ordinary. Mama says, \"Today even the high priest must come low.\" That makes me feel quiet inside. No one enters the presence of God by showing off.",
        "scripture": "KJV: Leviticus 16:4; Hebrews 5:1-3."
      },
      {
        "timeLabel": "His offering",
        "title": "The Priest Is Not the Savior",
        "narrative": "A bullock is offered for the priest and his house. I whisper, \"Does he need forgiveness too?\" Papa nods. \"Yes. That is why we need One greater than every earthly priest.\" The thought stays with me. God uses priests, but only God can save.",
        "scripture": "KJV: Leviticus 16:6, 11; Hebrews 7:27."
      },
      {
        "timeLabel": "Two goats",
        "title": "One for Death, One for Away",
        "narrative": "Two goats are brought. The lots are cast. One is for the Lord. One is for Azazel. My sister asks which one is lucky. Papa shakes his head. \"This is not luck. God is teaching us that sin needs atonement and removal.\"",
        "scripture": "KJV: Leviticus 16:7-10; Psalm 103:12."
      },
      {
        "timeLabel": "The first goat",
        "title": "For All of Us",
        "narrative": "The goat for the Lord dies. Nobody speaks. I think of the boy I mocked and how pleased I felt when others laughed. Now that memory burns. Sin that felt clever yesterday looks cruel today. The blood is for all of us, because all of us need mercy.",
        "scripture": "KJV: Leviticus 16:15; Isaiah 53:6."
      },
      {
        "timeLabel": "The priest disappears",
        "title": "Behind the Curtain",
        "narrative": "The high priest goes inside, beyond where we can see. I stand on my toes until Mama pulls me back. We cannot follow. We cannot help. We wait because God has promised that ministry is happening where our eyes cannot reach.",
        "scripture": "KJV: Leviticus 16:17; Hebrews 9:24."
      },
      {
        "timeLabel": "Waiting",
        "title": "The Long Quiet",
        "narrative": "The quiet grows heavy. I remember more sins than I meant to remember. Mean words. Lazy hands. Secret pride. It feels as if someone has opened a chest I had stuffed full and sat on to keep shut. I want it emptied, but I cannot empty it myself.",
        "scripture": "KJV: Jeremiah 17:9; Romans 3:19."
      },
      {
        "timeLabel": "Mama holds my hand",
        "title": "Still While Mercy Works",
        "narrative": "Mama takes my hand. \"Is he safe?\" my sister whispers. \"The Lord is merciful,\" Mama answers. We wait. I learn that faith is sometimes not doing anything at all, just trusting the work God commanded when we cannot see it.",
        "scripture": "KJV: Exodus 14:13; Hebrews 10:19-22."
      },
      {
        "timeLabel": "The mercy seat",
        "title": "Papa Explains the Ark",
        "narrative": "Papa bends close and tells us about the ark: the law inside, the mercy seat above. \"Blood is sprinkled there,\" he says. \"The law is not thrown away. Mercy answers it.\" I picture blood before gold and understand a little why forgiveness can be safe.",
        "scripture": "KJV: Exodus 25:21-22; Romans 3:25-26."
      },
      {
        "timeLabel": "Cleansing",
        "title": "God Finishes What Forgiveness Began",
        "narrative": "Papa says the sanctuary is being cleansed. \"But were people not already forgiven?\" I ask. \"Yes,\" he says. \"Forgiveness was real. Today God shows that forgiven sin will not stay forever. He is carrying the story toward a clean ending.\"",
        "scripture": "KJV: Leviticus 16:16; Acts 3:19."
      },
      {
        "timeLabel": "Return",
        "title": "He Comes Out Alive",
        "narrative": "At last the high priest comes out. The people breathe all at once, like wind through the tents. My sister laughs, then covers her mouth because the day is still solemn. I feel the laugh inside me too. The priest lives. The blood has spoken. Hope is still with us.",
        "scripture": "KJV: Leviticus 16:20; Hebrews 9:12."
      },
      {
        "timeLabel": "The altar",
        "title": "Even Mercy Places Are Cleansed",
        "narrative": "The altar is cleansed with blood. That surprises me. The altar helped sinners all year. Why must it be cleansed? Papa says, \"Mercy carried our confessed sins. Now God shows He will make His whole dwelling clean.\" I look at the sanctuary and want that clean world.",
        "scripture": "KJV: Leviticus 16:18-19; Revelation 21:27."
      },
      {
        "timeLabel": "The live goat",
        "title": "All the Names of Sin",
        "narrative": "The live goat is brought. The high priest places both hands on its head and confesses over it. I cannot hear every word, but I know some of them belong to me. My chest tightens, then loosens. Sin is being named so it can be sent away.",
        "scripture": "KJV: Leviticus 16:21; Micah 7:19."
      },
      {
        "timeLabel": "Into the desert",
        "title": "Will It Come Back?",
        "narrative": "The goat is led away. My sister asks the question first: \"Will it come back?\" Papa answers, \"No.\" I watch until the goat is only a spot, then nothing. For the first time all day, the desert looks kind.",
        "scripture": "KJV: Leviticus 16:22; Psalm 103:12."
      },
      {
        "timeLabel": "Relief",
        "title": "The Camp Breathes",
        "narrative": "People begin to move and whisper. Some cry. Some hold each other. I feel tired, like after carrying water too far, but I also feel light. The day has shown me the ugliness of sin and the stronger beauty of a God who removes it.",
        "scripture": "KJV: Leviticus 16:30; Romans 8:33-34."
      },
      {
        "timeLabel": "Evening meal",
        "title": "Bread After Silence",
        "narrative": "When the solemn hours pass, Mama lights the fire. The smell of bread returns, and it feels like a promise. We eat slowly. Nobody jokes for a while. Then my sister smiles with flour on her cheek, and Papa laughs softly. Cleansing makes room for joy.",
        "scripture": "KJV: Leviticus 23:32; Psalm 30:5."
      },
      {
        "timeLabel": "Night",
        "title": "A World Without the Burden",
        "narrative": "That night I lie awake and imagine a camp with no stolen things, no cruel jokes, no angry fathers, no frightened children, no goats led away. Papa says one day God will live with His people and nothing unclean will remain. I fall asleep wanting that day more than anything.",
        "scripture": "KJV: Revelation 21:3-4; Hebrews 9:28."
      }
    ]
  }
];
const chronicleStoryMap = Object.fromEntries(chronicleStories.map(story => [story.id, story]));

const chronicleCompanionNotes = {
  "priest-daily": [
    { promise: "God begins the day with mercy before Eliab or Israel has done anything to earn it.", meaning: "The sanctuary court teaches reverent approach: God invites sinners near, but never casually." },
    { promise: "Holy fear is a gift when it keeps the heart tender instead of distant.", meaning: "Priestly service was meant to preserve awe, not turn sacred acts into routine." },
    { promise: "The servant of God is not outside grace; he is held by it first.", meaning: "The laver showed that priests needed cleansing before they could minister cleansing to others." },
    { promise: "Mercy does not flicker out overnight; God keeps the fire alive for His people.", meaning: "The continual altar fire pictured an ongoing provision of atonement and covenant care." },
    { promise: "Before the sinner can explain himself, God has already provided a substitute.", meaning: "The morning lamb framed the whole camp under grace, pointing beyond itself to Christ." },
    { promise: "The blood says sin is deadly, but it also says life has been given for the guilty.", meaning: "Blood ministry taught that forgiveness rests on life surrendered in the sinner's place." },
    { promise: "Accepted sacrifice lets the camp wake beneath the kindness of God.", meaning: "The rising smoke represented an offering received by God, not human effort climbing to Him." },
    { promise: "The guilty are not driven away from the gate; God has named a place for their burden.", meaning: "Individual offerings brought personal guilt into God's appointed process of confession and atonement." },
    { promise: "Confession is not humiliation without hope; it is the doorway where hidden sin meets mercy.", meaning: "Laying hands on the victim showed identification, transfer, and honest repentance." },
    { promise: "God makes sin's cost visible so mercy will not be treated as cheap.", meaning: "The death of the substitute revealed that forgiveness answers real guilt, not imaginary guilt." },
    { promise: "Where the sinner cannot go, appointed mediation moves for him.", meaning: "The priest's action with blood taught representation and pointed to Christ's heavenly ministry." },
    { promise: "Peace is not self-persuasion; it rests on God's accepted provision.", meaning: "The worshiper left forgiven because the sacrifice and priestly ministry had fulfilled God's command." },
    { promise: "Eliab's weakness makes room for hope in a greater Priest.", meaning: "Earthly priests were signs, not saviors; their limits pointed beyond themselves." },
    { promise: "Forgiven people are not left outside; God brings them into light, bread, and prayer.", meaning: "The Holy Place showed that grace sustains the life it forgives." },
    { promise: "Christ keeps light for people who cannot produce their own.", meaning: "The lampstand represented Spirit-given illumination and continual witness." },
    { promise: "The God who pardons also feeds His people with living bread.", meaning: "The shewbread kept Israel represented and nourished before the Lord." },
    { promise: "Weak prayers become acceptable because mercy stands near the throne.", meaning: "Incense pictured prayer received through mediation, not through human eloquence." },
    { promise: "God is working for His people even when they cannot see inside.", meaning: "The hidden ministry taught trust in priestly representation." },
    { promise: "The day closes under the same mercy with which it began.", meaning: "Morning and evening offerings enclosed Israel's daily life in continual atonement." },
    { promise: "A tired priest can rest because the coming Priest and Lamb will finish the work.", meaning: "The whole daily service pointed forward to Christ's complete sacrifice and intercession." }
  ],
  "priest-atonement": [
    { promise: "Even the high priest's fear can become faith when he leans on God's mercy.", meaning: "The Day of Atonement began with human insufficiency before divine provision." },
    { promise: "Before God's throne, humility is safer than splendor.", meaning: "The plain linen garments taught cleansing, lowliness, and dependence on God." },
    { promise: "Hope rests not in the trembling priest, but in the God who made a way.", meaning: "Ritual washing signaled that access to holiness required appointed cleansing." },
    { promise: "The priest who serves sinners must first receive mercy himself.", meaning: "The bullock for the priest showed that earthly mediators were needy and imperfect." },
    { promise: "Life given in blood speaks where human worthiness cannot.", meaning: "The blood carried the logic of atonement into the sanctuary's most solemn service." },
    { promise: "God intends not merely to forgive sin, but also to send it away.", meaning: "The two goats together pictured atonement for sin and its final removal." },
    { promise: "Judgment is met by an accepted life, not by excuses.", meaning: "The Lord's goat supplied the blood for cleansing the sanctuary." },
    { promise: "God covers trembling weakness with the cloud He Himself commands.", meaning: "Incense protected the high priest and symbolized mediation near the throne." },
    { promise: "The veil is fearful, but God has not left it without a way through.", meaning: "The inner veil marked restricted access to God's throne and law." },
    { promise: "At the center of holiness, mercy stands above the broken law.", meaning: "The ark and mercy seat joined God's justice with His saving presence." },
    { promise: "God reveals truth so mercy can be seen as righteous and complete.", meaning: "Blood before the mercy seat pictured cleansing, judgment, and vindication." },
    { promise: "Forgiveness is moving toward a clean ending, not an endless carrying of sin.", meaning: "The sanctuary bore the record of confessed sin until the yearly cleansing." },
    { promise: "The living priest returning announces that God has not rejected His people.", meaning: "The high priest's emergence reassured the waiting congregation." },
    { promise: "God wants His dwelling with His people clean from every trace of sin.", meaning: "The altar cleansing showed that sanctuary pollution itself had to be dealt with." },
    { promise: "What blood has answered will not stay in God's house forever.", meaning: "Confession over the live goat dramatized the transfer of sin for removal." },
    { promise: "The burden God removes is not invited back.", meaning: "The goat sent into the wilderness pictured sin carried away from the camp." },
    { promise: "The deepest tears become relief when fear has been answered by mercy.", meaning: "The congregation experienced cleansing as both solemn judgment and gracious release." },
    { promise: "After cleansing, God clothes His servant for renewed service.", meaning: "The change of garments showed restoration after the atoning work was complete." },
    { promise: "The blessing belongs to God; the priest only witnesses to it.", meaning: "Priestly blessing declared God's favor after atonement and cleansing." },
    { promise: "The final High Priest will end the need for blood and bring His people home clean.", meaning: "The yearly service pointed forward to Christ's final cleansing ministry." }
  ],
  "commoner-daily": [
    { promise: "The secret that feels like a stone can be brought where mercy waits.", meaning: "Personal guilt begins the movement toward confession and sacrifice." },
    { promise: "God's way back lets the sinner tell the truth without being destroyed by it.", meaning: "Confession restored honesty before God and before the harmed community." },
    { promise: "The innocent substitute reveals both the sadness of sin and the tenderness of God.", meaning: "The unblemished victim bore guilt in symbol for the repentant worshiper." },
    { promise: "The lamb's innocence teaches the heart what stolen things cannot teach.", meaning: "The walk to the sanctuary let the cost of sin become personal and visible." },
    { promise: "The open gate says God is merciful before the sinner feels worthy.", meaning: "The gate presented God's appointed access to atonement." },
    { promise: "No guilty family stands alone at the sanctuary.", meaning: "The court gathered many kinds of need under one gracious system." },
    { promise: "Confession opens the heart where hiding had made it small.", meaning: "Laying hands and speaking guilt showed repentance and transfer." },
    { promise: "The innocent one stands still where the guilty one cannot stand.", meaning: "The substitute taught that forgiveness is costly and compassionate." },
    { promise: "Mercy hurts because it tells the truth, then heals because it provides another life.", meaning: "The death of the victim revealed sin's wages and God's provided answer." },
    { promise: "Life is given where guilt stood.", meaning: "Blood represented life and became the means of atonement." },
    { promise: "Mercy can move for the sinner even when the sinner cannot draw near.", meaning: "The priest's ministry carried the sacrifice into God's ordered process." },
    { promise: "Accepted sacrifice turns the smell of smoke into the scent of hope.", meaning: "The altar signaled that the offering had been received." },
    { promise: "The forgiven child is sent home to live truthfully, not fearfully.", meaning: "Atonement brought assurance and called forth a changed life." },
    { promise: "Mercy gives courage to repair what sin damaged.", meaning: "Restitution showed that forgiveness restores relationships as well as conscience." },
    { promise: "A child's hard question becomes a doorway into substitution.", meaning: "The family interprets the rite so the next generation can understand grace." },
    { promise: "When hiding ends, home can feel safe again.", meaning: "Forgiveness restored belonging without pretending the wrong was harmless." },
    { promise: "The same mercy that met one child holds the whole camp.", meaning: "The evening lamb showed corporate grace surrounding Israel." },
    { promise: "The memory of the lamb becomes a tender guard against cheap grace.", meaning: "The sacrifice formed conscience and gratitude after the worshiper returned home." },
    { promise: "God will provide a greater Lamb who ends the long lesson of animal sacrifice.", meaning: "The daily offering pointed forward to Christ as the Lamb of God." },
    { promise: "Forgiveness makes ordinary life feel like a gift again.", meaning: "Atonement returned the worshiper to daily life with assurance and peace." }
  ],
  "commoner-atonement": [
    { promise: "The silent day says sin will not always live among God's people.", meaning: "The Day of Atonement called Israel to solemn rest, self-examination, and hope." },
    { promise: "God is safe enough for families to stop hiding.", meaning: "Afflicting the soul included honest confession before God." },
    { promise: "Mercy is for fathers and children alike.", meaning: "The whole household stood needy before God, not just the obviously guilty." },
    { promise: "Forgiven sin is not ignored; God carries it toward cleansing.", meaning: "The sanctuary record explains why yearly cleansing was needed." },
    { promise: "No one comes to God by display; all come by mercy.", meaning: "The high priest's linen garments taught humility on the cleansing day." },
    { promise: "Earthly priests point beyond themselves to the One who truly saves.", meaning: "The priest's own offering showed the limits of human mediation." },
    { promise: "God has an answer for both guilt's penalty and guilt's removal.", meaning: "The two goats pictured atonement and final banishment of sin." },
    { promise: "The blood is for all of us because all of us need mercy.", meaning: "The Lord's goat supplied cleansing blood for the people and sanctuary." },
    { promise: "God's saving work continues even where anxious eyes cannot follow.", meaning: "The high priest's hidden ministry trained Israel to trust appointed mediation." },
    { promise: "The burden we cannot empty ourselves can still be opened before God.", meaning: "The waiting silence exposed sin so cleansing would be desired." },
    { promise: "Standing still can be faith when mercy is working out of sight.", meaning: "The people waited while the priest performed the central atoning work." },
    { promise: "Mercy does not overthrow the law; it answers it with blood.", meaning: "The ark united God's law with the mercy seat above it." },
    { promise: "God finishes what forgiveness began.", meaning: "The cleansing showed that sin's record would not remain forever." },
    { promise: "The priest's return alive lets the waiting people breathe hope.", meaning: "The return signaled that the ministry inside had been accepted." },
    { promise: "God intends a clean dwelling, not merely relieved consciences.", meaning: "The altar cleansing extended atonement to the sanctuary itself." },
    { promise: "Sin is named so it can be sent away.", meaning: "The live goat received the confessed sins for removal from the camp." },
    { promise: "The sin God sends away will not be welcomed home.", meaning: "The wilderness goat dramatized final separation from confessed sin." },
    { promise: "Relief is holy when it follows truth and cleansing.", meaning: "The camp's release held together judgment, mercy, and assurance." },
    { promise: "Cleansing makes room for joy to return.", meaning: "The end of the solemn day restored ordinary life under renewed assurance." },
    { promise: "God's final plan is a world with no burden left between Him and His people.", meaning: "The Day of Atonement pointed toward final restoration and God's dwelling with humanity." }
  ]
};

function getChronicleCompanion(storyId, sceneIndex) {
  const storyNotes = chronicleCompanionNotes[storyId] || [];
  return storyNotes[sceneIndex] || {
    promise: "God meets the moment with mercy stronger than the burden it reveals.",
    meaning: "The sanctuary scene teaches how God brings sinners from guilt into assurance."
  };
}

const documentChronicleStories = [
  {
    id: "commoner-daily",
    perspective: "commoner",
    serviceType: "daily",
    serviceLabel: "Daily Service",
    title: "The Common Israelite Who Has Sinned",
    subtitle: "A hidden silence becomes confession, sacrifice, and the relief of forgiveness.",
    scenes: [
      chronicleScene(
        "The cloud above us",
        "The Cloud Did Not Comfort Me",
        "Our tents stood around the tent of meeting, each tribe under its banner, and the cloud of the Lord rested above the sanctuary where all could see. On the day my sin found me out, that sign of His nearness did not comfort me at first; it made me afraid, because the God who lived among us had seen what I had hidden.",
        "KJV: Numbers 2; Exodus 40:34-38."
      ),
      chronicleScene(
        "The swallowed testimony",
        "When Fear Closed My Mouth",
        "A man in our camp had cried out for witnesses, and I had heard what others had not. Fear sealed my mouth, and when I refused to speak what I knew, I learned that I had not merely failed my neighbor; I had made myself guilty before the Lord.",
        "KJV: Leviticus 5:1."
      ),
      chronicleScene(
        "The law names me",
        "No Softer Name",
        "I tried to cover it with reasons: I was afraid, I did not want trouble, I meant no harm. But the law spoke plainly. When a man becomes aware of such guilt, he must confess in what way he has sinned.",
        "KJV: Leviticus 5:5."
      ),
      chronicleScene(
        "The goat from my flock",
        "A Whole Life for a Stained One",
        "I was no ruler, and I brought no bull. From my flock I chose a female goat without defect, sound in limb and clear in eye. Her life was whole, and mine was the life stained by sin.",
        "KJV: Leviticus 5:6; Leviticus 4:27-28."
      ),
      chronicleScene(
        "The walk inward",
        "Toward the Gate",
        "I led her through the ordered camp toward the courtyard gate, past families under their standards and toward the altar before the tabernacle. Even before I reached it, I smelled old smoke in the air and saw the place where sacrifice stood at the threshold of approach to God.",
        "KJV: Exodus 27:9-19; Leviticus 1:3."
      ),
      chronicleScene(
        "The court",
        "Blood, Fire, and Waiting People",
        "The altar rose before me with its horns, and the basin stood between altar and tent while priests moved carefully through duties they dared not handle lightly. Around me others waited with offerings, and the air held prayer, bleating, crackling flame, and grief.",
        "KJV: Exodus 27:1-8; Exodus 30:18-21."
      ),
      chronicleScene(
        "The place of slaughter",
        "Sin Does Not End in Talk",
        "The priest brought me to the place where the offering was slain. My fingers tightened on the goat, and I knew with a sharpness I had never felt before that sin does not end in talk; it ends in blood.",
        "KJV: Leviticus 1:11; Leviticus 4:29."
      ),
      chronicleScene(
        "My hand upon her head",
        "The Innocent Beneath My Palm",
        "I laid my hand on her head and felt the warmth of living flesh beneath my palm. She had done no violence, spoken no lie, hidden no witness. I was the guilty one.",
        "KJV: Leviticus 4:29; Isaiah 53:6."
      ),
      chronicleScene(
        "The confession",
        "My Sin Is Mine",
        "I said, \"O Lord, I heard the call for truth, and I kept back what I knew. I feared man more than I feared You; I let another stand exposed while I guarded myself. My sin is mine, and I confess it before You.\"",
        "KJV: Leviticus 5:5; Proverbs 28:13."
      ),
      chronicleScene(
        "The stroke",
        "The Cost Became Visible",
        "Then I killed her there before the Lord. The moment her life ran out because of my sin, shame pierced me more deeply than the knife had pierced her. I had wanted my sin to stay small; the sanctuary would not let me lie.",
        "KJV: Leviticus 4:29; Leviticus 17:11."
      ),
      chronicleScene(
        "The priest's work",
        "Where I Could Not Go",
        "The priest took some of the blood with his finger, placed it on the horns of the altar of burnt offering, and poured the rest at its base. Then he removed the fat and burned it on the altar. I did not go farther than the court; God had appointed another to carry the ministry forward.",
        "KJV: Leviticus 4:30-31; Hebrews 5:1."
      ),
      chronicleScene(
        "The word that held me",
        "Forgiven, Not Hiding",
        "I stood trembling until the rite was complete, and then I clung to the promise appointed for sinners like me: atonement was made, and I was forgiven. I did not leave loving my sin. I left hating it, yet no longer hiding from the God who had opened a way back to Himself.",
        "KJV: Leviticus 4:31; Psalm 32:1-5."
      )
    ]
  },
  {
    id: "commoner-atonement",
    perspective: "commoner",
    serviceType: "atonement",
    serviceLabel: "Day of Atonement",
    title: "The Common Israelite on the Day of Atonement",
    subtitle: "A whole camp waits while confessed sin is cleansed and carried away.",
    scenes: [
      chronicleScene(
        "The evening begins",
        "The Camp Grows Still",
        "From the evening of the ninth day we began the sabbath of affliction, and ordinary work fell still in the camp. This day was not like our other appointed times; it opened with restraint, waiting, and the knowledge that atonement would be made before the Lord our God.",
        "KJV: Leviticus 23:26-32."
      ),
      chronicleScene(
        "A quieter camp",
        "No One Wanted to Trifle",
        "The camp that had known trumpet calls, trade, hammering, and children's cries seemed hushed beneath the cloud. No man wished to trifle on the day when those who refused to humble themselves were cut off from their people.",
        "KJV: Leviticus 23:29-30."
      ),
      chronicleScene(
        "Old sins remembered",
        "Forgiven, Yet Remembering",
        "I remembered the goat I had once brought for my own sin, and I gave thanks that the Lord had not cast me away. Yet this day pressed deeper than one man's offering, for the sanctuary itself, the altar, the priests, and the people were all to be cleansed.",
        "KJV: Leviticus 16:16-19."
      ),
      chronicleScene(
        "Soul laid low",
        "No Proud Words",
        "I denied myself and searched my heart. I spoke no proud words that day, for a man standing near the Holy One learns that even forgiven sin is never a light thing.",
        "KJV: Leviticus 16:29-31; Psalm 139:23-24."
      ),
      chronicleScene(
        "What we knew",
        "He Could Not Enter as He Pleased",
        "We knew what Moses had taught us: the high priest must wash, put on holy linen garments, bring a bull for his own house, and take from the congregation two goats and a ram. He could not enter as he pleased; he could enter only as God commanded.",
        "KJV: Leviticus 16:3-6."
      ),
      chronicleScene(
        "The two goats",
        "One for the Lord, One for Removal",
        "Word passed through the people as the two goats were presented before the Lord at the entrance of the tent of meeting. Lots were cast, one for the Lord and one for the live goat of removal.",
        "KJV: Leviticus 16:7-10."
      ),
      chronicleScene(
        "The Lord's goat",
        "Blood for Cleansing",
        "The goat for the Lord was not spared; it was slain for the people's sin offering. Its blood, not the blood of the live goat, was taken for the cleansing work within the sanctuary.",
        "KJV: Leviticus 16:15-16."
      ),
      chronicleScene(
        "Waiting outside",
        "The Veil Hid the Work",
        "I saw nothing behind the veil, and that ignorance deepened the fear of the hour. We knew only that no one else might be in the tent while the high priest went in to make atonement for the Most Holy Place, the tent, and the altar.",
        "KJV: Leviticus 16:17."
      ),
      chronicleScene(
        "The long silence",
        "The Burden Confronted",
        "The camp waited in a silence broken only by low prayers and the rustle of bowed bodies. If the sanctuary had stood in the midst of our uncleanness all year, then this was the day when the burden of that uncleanness was confronted before God.",
        "KJV: Leviticus 16:16; Daniel 8:14."
      ),
      chronicleScene(
        "The live goat brought near",
        "Nothing Hidden, Everything Named",
        "At last the live goat stood before us, and over it the high priest confessed the wickedness, rebellion, and sins of Israel. Both his hands were laid on its head, and I felt, as all Israel felt, that our evil was being named and not hidden.",
        "KJV: Leviticus 16:20-21."
      ),
      chronicleScene(
        "The wilderness road",
        "Carried Away",
        "Then the appointed man led the goat away into the wilderness, and every step seemed to put distance between the camp and our defilement. The goat was not the blood sacrifice that cleansed the sanctuary, yet by God's command it bore the confessed sins away to a remote place.",
        "KJV: Leviticus 16:21-22."
      ),
      chronicleScene(
        "Clean before the Lord",
        "Relief Like Cool Water",
        "When the service was complete, relief moved through me like cool water after heat. We were still a people who had sinned, but the camp was clean, the sanctuary was cleansed, and the God who had said He would dwell among us had not withdrawn His presence.",
        "KJV: Leviticus 16:30; Exodus 25:8."
      )
    ]
  },
  {
    id: "priest-daily",
    perspective: "priest",
    serviceType: "daily",
    serviceLabel: "Daily Service",
    title: "One Day in the Life of a Priest",
    subtitle: "Ashes, fire, washing, blood, bread, light, and incense in the daily ministry.",
    scenes: [
      chronicleScene(
        "Before dawn",
        "Gift and Burden",
        "I am one of the sons of Aaron, not the high priest, and before dawn I rise to the work given us as both gift and burden. We bear responsibility for the sanctuary, and all of us know that careless nearness to holy things can bring death.",
        "KJV: Numbers 18:1-7; Leviticus 10:1-3."
      ),
      chronicleScene(
        "Ashes first",
        "The Night's Offering",
        "In linen garments I go first to the altar, for the burnt offering has lain there through the night. I lift the ashes, set them beside the altar, then change garments and carry them outside the camp to a clean place.",
        "KJV: Leviticus 6:8-11."
      ),
      chronicleScene(
        "Fire never out",
        "A Mercy Kept Burning",
        "When I return, I lay fresh wood upon the fire. It must not go out; every morning we feed it, and on it we arrange the offerings of the Lord.",
        "KJV: Leviticus 6:12-13."
      ),
      chronicleScene(
        "The morning lamb",
        "The Day Begins With Sacrifice",
        "At the entrance to the tent of meeting the continual burnt offering is made, a lamb in the morning with its grain and drink offerings. The smoke rises where the Lord promised to meet His people and dwell among them.",
        "KJV: Exodus 29:38-46."
      ),
      chronicleScene(
        "Water before blood",
        "Cold Water on Priest's Hands",
        "Before I approach the altar again or enter the tent, I wash my hands and feet at the basin. The water is cold, but it teaches a priest never to touch holy service with common care.",
        "KJV: Exodus 30:18-21; Exodus 40:30-32."
      ),
      chronicleScene(
        "Lamp, bread, and ordered light",
        "Inside the Holy Place",
        "Inside the Holy Place the lampstand stands on the south side and the table on the north, with the bread set before the Lord. The lamps are tended continually, and Sabbath after Sabbath the bread is renewed as a lasting sign before His face.",
        "KJV: Exodus 26:35; Leviticus 24:2-9."
      ),
      chronicleScene(
        "Incense",
        "Fragrance With Fear",
        "Morning and twilight incense rise on the golden altar when the lamps are tended. The fragrance is sweet, yet I never forget that incense offered contrary to God's command once consumed my brothers with judgment.",
        "KJV: Exodus 30:7-8; Leviticus 10:1-2."
      ),
      chronicleScene(
        "The faces of Israel",
        "Tears Before Blood",
        "All day the people come: some with gratitude, some with vows, some with the stunned look of men who have finally stopped arguing with conscience. I learn their tears, their silence, and their shame long before I touch the blood.",
        "KJV: Leviticus 1-7; Psalm 51:17."
      ),
      chronicleScene(
        "A man with a she-goat",
        "The Breaking of Pride",
        "Today a common man came leading a female goat, his face drawn tight as a rope stretched too long. When he laid his hand on the animal and confessed that he had kept back testimony he should have spoken, I heard in his voice the breaking of pride.",
        "KJV: Leviticus 5:1, 5-6."
      ),
      chronicleScene(
        "Blood and fat",
        "Mercy Is Costly Too",
        "He killed the goat at the appointed place, and I took some of its blood to the horns of the altar of burnt offering and poured the rest at its base. I removed the fat and burned it on the altar, and once again I saw that sin is costly, and mercy is costly too.",
        "KJV: Leviticus 4:30-31."
      ),
      chronicleScene(
        "Bearing what is holy",
        "No Light Thing",
        "Because the blood of that offering was not taken into the Holy Place, the holy flesh belonged to the priest who made atonement and was eaten in the sanctuary area. Even this eating is no light thing; God bound it to priestly mediation in ways that keep us humble.",
        "KJV: Leviticus 6:24-30; Leviticus 10:17-18."
      ),
      chronicleScene(
        "Twilight again",
        "Wonder at the End of the Day",
        "By evening I tend the lamps again and smell incense mingling with the day's deep smoke. I am weary in body, but not in wonder, for again and again I have watched the Holy One make room for repentant sinners to remain near Him.",
        "KJV: Exodus 30:7-8; Hebrews 7:25."
      )
    ]
  },
  {
    id: "priest-atonement",
    perspective: "priest",
    serviceType: "atonement",
    serviceLabel: "Day of Atonement",
    title: "The Priest on the Day of Atonement",
    subtitle: "The high priest follows the order of Leviticus 16 with trembling obedience.",
    scenes: [
      chronicleScene(
        "Memory of fire",
        "I May Not Come Whenever I Choose",
        "I speak now as the high priest, and I do not begin this day lightly. The deaths of Nadab and Abihu stand before me whenever I draw near, for the Lord warned me after their death that I may not come whenever I choose behind the veil.",
        "KJV: Leviticus 16:1-2."
      ),
      chronicleScene(
        "Linen and water",
        "Only as God Commands",
        "Before I clothe myself, I bathe. Today I wear the sacred linen garments appointed for this service, not trusting rank, age, or office, but only the command of God.",
        "KJV: Leviticus 16:4."
      ),
      chronicleScene(
        "Animals and lots",
        "Two Goats Before the Lord",
        "A bull and a ram stand ready for me and my house; from the congregation come two goats and a ram. At the entrance to the tent of meeting I cast lots over the goats, one for the Lord and the other for Azazel, the live goat of removal.",
        "KJV: Leviticus 16:3, 5, 7-10."
      ),
      chronicleScene(
        "First for my own house",
        "The Priest Also Needs Atonement",
        "I do not carry Israel before God as though I myself were clean. I slaughter the bull for my own sin offering first, for even the priest nearest the sanctuary is yet a sinner apart from atonement.",
        "KJV: Leviticus 16:6, 11."
      ),
      chronicleScene(
        "Coals and incense",
        "The Cloud Before the Blood",
        "With a censer full of coals from the altar and two handfuls of finely ground incense, I go behind the curtain. No other man is in the tent; all Israel waits outside while I walk where I dare not walk except by command.",
        "KJV: Leviticus 16:12-13, 17."
      ),
      chronicleScene(
        "The covered mercy seat",
        "Fear and Obedience Breathe Together",
        "I place the incense on the fire before the Lord, and the cloud of fragrance covers the atonement cover above the covenant, so that I may not die. In that hidden place, fear and obedience breathe together.",
        "KJV: Leviticus 16:13; Exodus 25:21-22."
      ),
      chronicleScene(
        "Blood for the priesthood",
        "Blood Where Merit Cannot Stand",
        "I sprinkle some of the bull's blood on and before the atonement cover as I was told. Every drop reminds me that blood must go before me where I cannot go in my own merit.",
        "KJV: Leviticus 16:14; Hebrews 9:7."
      ),
      chronicleScene(
        "Blood for the people",
        "The Lord's Goat Within the Veil",
        "Then I slaughter the goat for the people's sin offering and bring its blood behind the curtain, doing with it as with the bull's blood. Thus atonement is made for the Most Holy Place and for the tent because Israel's uncleanness and rebellion have stood in the midst of God's dwelling.",
        "KJV: Leviticus 16:15-16."
      ),
      chronicleScene(
        "The sanctuary and altar cleansed",
        "From Inner Shrine to Altar",
        "When I come out, I place the blood of bull and goat on the horns of the altar and sprinkle it as commanded to cleanse and consecrate it. The movement of this blood outward marks that the whole sanctuary, from inner shrine to altar, is being purged for the sake of a people among whom the Lord still chooses to live.",
        "KJV: Leviticus 16:18-19."
      ),
      chronicleScene(
        "Both hands on the live goat",
        "All the Sins Named",
        "Only after the sanctuary cleansing do I bring forward the living goat. I lay both my hands on its head and confess over it all the wickedness, rebellion, and sins of the children of Israel, naming without softness what God has judged without confusion.",
        "KJV: Leviticus 16:20-21."
      ),
      chronicleScene(
        "Sent away and finished",
        "The Burden Leaves the Camp",
        "The appointed man leads the goat into the wilderness, carrying the burden far from the camp. I remove the linen garments, bathe, put on my regular garments, offer the burnt offerings for myself and the people, and the carcasses of the sin offerings are taken outside the camp to be burned.",
        "KJV: Leviticus 16:21-28."
      ),
      chronicleScene(
        "When evening falls",
        "The Presence Still Rests Among Us",
        "By the end of the day I am spent, humbled, and afraid to remember how near I have come. Yet gratitude rises stronger than exhaustion: the sanctuary is cleansed, the people are dealt with according to mercy rather than abandonment, and the Presence still rests among us.",
        "KJV: Leviticus 16:30; Hebrews 9:23-28."
      )
    ]
  }
];

const documentChronicleCompanionNotes = {
  "commoner-daily": [
    { promise: "God sees hidden guilt and still keeps an appointed way back.", meaning: "The story begins with God's presence in the camp, where hidden sin cannot remain safely hidden." },
    { promise: "Confession begins when fear stops ruling the mouth.", meaning: "Leviticus names failure to testify as real guilt before God, not merely social weakness." },
    { promise: "The Lord's law wounds excuses so mercy can heal the sinner.", meaning: "The sanctuary does not soften sin's name; it brings the sinner into truthful confession." },
    { promise: "The innocent victim teaches what guilt has damaged.", meaning: "The unblemished goat stands in contrast to the worshiper's stained conscience." },
    { promise: "The gate is open, but the approach is still through sacrifice.", meaning: "Access to God is welcomed and ordered; the altar stands at the threshold." },
    { promise: "No sinner comes into an empty system; priests are already serving mercy.", meaning: "The court joins altar, laver, priesthood, and waiting worshipers in one process of return." },
    { promise: "Sin's cost becomes visible before relief is spoken.", meaning: "The place of slaughter teaches that guilt cannot be healed by words alone." },
    { promise: "The guilty hand rests on an innocent life.", meaning: "Hand-laying shows identification, confession, and the burden of substitution." },
    { promise: "God lets the sinner say the truth without being abandoned.", meaning: "Confession is the doorway where guilt comes into God's appointed mercy." },
    { promise: "The substitute dies so the sinner can live and hate the sin.", meaning: "The death is reverent, not graphic; it makes sin's seriousness unmistakable." },
    { promise: "Where the sinner may not go, the priestly service continues.", meaning: "The priest applies blood and burns the fat according to God's command." },
    { promise: "Forgiveness sends the sinner home honest, not hiding.", meaning: "Atonement is completed by God's provision, bringing relief and changed allegiance." }
  ],
  "commoner-atonement": [
    { promise: "The solemn day begins with hope that God will cleanse what sin has touched.", meaning: "The Day of Atonement is rest, affliction of soul, and appointed cleansing." },
    { promise: "Holy quiet helps the heart stop treating sin lightly.", meaning: "Israel's stillness reflects the seriousness of standing before the Holy One." },
    { promise: "Forgiveness was real all year, and cleansing completes the story.", meaning: "The yearly service deals with sanctuary, altar, priests, and people." },
    { promise: "Humility is the right posture when sin and mercy meet.", meaning: "Afflicting the soul is not despair; it is honest dependence on God." },
    { promise: "Even the high priest enters only by command.", meaning: "Leviticus 16 guards the Most Holy Place from casual access." },
    { promise: "God teaches both atonement by blood and final removal.", meaning: "The two goats have distinct ritual roles." },
    { promise: "The Lord's goat supplies cleansing blood.", meaning: "The live goat does not provide blood atonement; the slain goat's blood cleanses." },
    { promise: "God works for His people where they cannot see.", meaning: "The congregation waits while the high priest ministers alone inside." },
    { promise: "The sanctuary bears the burden God has promised to cleanse.", meaning: "The long silence teaches that forgiven sin will not be ignored forever." },
    { promise: "Sin is named so it can be sent away.", meaning: "Both hands on the live goat dramatize confessed sin placed for removal." },
    { promise: "The burden carried away is not welcomed back.", meaning: "The wilderness road pictures final separation from confessed sin." },
    { promise: "Clean before the Lord means mercy has answered guilt and removal.", meaning: "The day ends with assurance that God still dwells among His people." }
  ],
  "priest-daily": [
    { promise: "The priest serves because God permits nearness by mercy.", meaning: "Daily ministry is a gift and burden, not a casual religious task." },
    { promise: "Even ashes belong to holy order.", meaning: "The priest begins with the remains of sacrifice and carries them as God commands." },
    { promise: "Mercy is kept burning before the people wake.", meaning: "The continual fire shows ongoing covenant provision." },
    { promise: "The day opens under an accepted substitute.", meaning: "The morning lamb frames Israel's daily life with atonement." },
    { promise: "Clean hands must serve holy mercy.", meaning: "The laver teaches priestly cleansing before altar or tent ministry." },
    { promise: "Forgiven people are sustained by light and bread.", meaning: "The Holy Place ministry shows that grace feeds and illuminates." },
    { promise: "Sweet incense rises with holy fear.", meaning: "The golden altar links prayer with appointed mediation, not presumption." },
    { promise: "The priest meets people before he handles their offerings.", meaning: "The sanctuary is not abstract; it receives real tears and shame." },
    { promise: "Pride breaks where confession touches the substitute.", meaning: "The individual sin offering brings personal guilt into God's appointed process." },
    { promise: "Sin is costly, and mercy is costly too.", meaning: "Blood and fat are handled exactly because God has made a way for atonement." },
    { promise: "Priestly mediation humbles the one who serves.", meaning: "Eating certain sin offerings belongs to the priestly bearing of holy responsibility." },
    { promise: "The day closes with the same wonder with which it began.", meaning: "Evening lamp and incense keep Israel's life before God." }
  ],
  "priest-atonement": [
    { promise: "Holy access is mercy, never entitlement.", meaning: "The warning after Nadab and Abihu governs the high priest's approach." },
    { promise: "The highest priest comes low before God.", meaning: "Bathing and linen garments teach dependence, cleansing, and humility." },
    { promise: "God's order distinguishes blood atonement from removal.", meaning: "Bull, ram, two goats, and lots establish the Leviticus 16 sequence." },
    { promise: "The mediator himself needs atonement.", meaning: "The bull is first offered for the priest and his house." },
    { promise: "Incense prepares the way before blood is sprinkled.", meaning: "The cloud covers the mercy seat so the priest may live." },
    { promise: "The mercy seat is approached only by God's covering mercy.", meaning: "Fear and obedience meet in the hidden presence of God." },
    { promise: "Blood goes where human merit cannot stand.", meaning: "Bull blood is sprinkled for the priestly house." },
    { promise: "The people's blood ministry cleanses the sanctuary.", meaning: "The Lord's goat blood is brought within the veil for Israel's uncleanness and sins." },
    { promise: "God cleanses His dwelling from the inside outward.", meaning: "The sanctuary and altar are purged according to God's command." },
    { promise: "Only after cleansing is sin placed on the live goat.", meaning: "The live goat bears confessed sins away; it is not the blood sacrifice." },
    { promise: "The burden leaves, and the priest returns to ordinary service.", meaning: "Removal, washing, changing garments, burnt offerings, and burning outside the camp complete the rite." },
    { promise: "God remains with a cleansed people.", meaning: "The day ends in humility, exhaustion, and gratitude for mercy rather than abandonment." }
  ]
};

chronicleStories.splice(0, chronicleStories.length, ...documentChronicleStories);
Object.keys(chronicleStoryMap).forEach(key => delete chronicleStoryMap[key]);
chronicleStories.forEach(story => {
  chronicleStoryMap[story.id] = story;
});
Object.keys(chronicleCompanionNotes).forEach(key => delete chronicleCompanionNotes[key]);
Object.assign(chronicleCompanionNotes, documentChronicleCompanionNotes);

const focusTimeline = [
  {
    id: "457bc",
    date: "457 BC",
    label: "Shared starting point",
    title: "The decree supplies the missing start date",
    scripture: "KJV references: Ezra 7; Daniel 9:25.",
    explanation:
      "Daniel 8 gives the 2,300 days but does not name the starting point. Daniel 9 resumes Gabriel's explanation and gives the missing marker: the command to restore and build Jerusalem. Because the 70 weeks are determined, or cut off, from the larger prophetic period, the 70 weeks and the 2,300 years begin together with the full decree of Artaxerxes in 457 BC.",
    meaning:
      "This keeps the prophecy anchored in history. Daniel 8 gives the long time period, Daniel 9 gives the starting event, and the ministry of Jesus confirms that the same timeline is moving exactly as God said."
  },
  {
    id: "ad27",
    date: "AD 27",
    label: "Messiah appears",
    title: "Jesus is anointed for His ministry",
    scripture: "KJV references: Daniel 9:25; Matthew 3:16-17; Acts 10:38.",
    explanation:
      "After 69 prophetic weeks, Messiah appears. In AD 27 Jesus is baptized and anointed by the Holy Spirit, beginning His public ministry. This confirms that the time prophecy is centered on Christ.",
    meaning:
      "The prophecy is not a puzzle for curiosity; it leads to Jesus. The same timeline that reaches 1844 first proves that God kept His promise about the Messiah."
  },
  {
    id: "ad31",
    date: "AD 31",
    label: "The cross",
    title: "Messiah is cut off in the middle of the week",
    scripture: "KJV references: Daniel 9:26-27; John 19:30; Hebrews 10:10-12.",
    explanation:
      "Daniel says Messiah would be cut off and that sacrifice and oblation would cease in the middle of the final week. Adventist interpretation sees this fulfilled in Christ's death in AD 31, when the sanctuary sacrifices met their true meaning at the cross.",
    meaning:
      "The cross is the center of the prophecy. The cleansing of the sanctuary is never separated from Calvary; Christ's final ministry applies the victory of the sacrifice already completed."
  },
  {
    id: "ad34",
    date: "AD 34",
    label: "The 70 weeks close",
    title: "The gospel mission widens",
    scripture: "KJV references: Daniel 9:24; Acts 7; Acts 8:1-4.",
    explanation:
      "The 70 weeks, or 490 years, were especially allotted to Daniel's people. Around AD 34, the rejection shown in Stephen's martyrdom is followed by the gospel moving powerfully beyond Jerusalem.",
    meaning:
      "God's covenant purpose keeps moving forward. The 70 weeks are the first portion of the 2,300 years, and their fulfillment gives confidence in the rest of the timeline."
  },
  {
    id: "1844",
    date: "1844",
    label: "The sanctuary cleansed",
    title: "The antitypical Day of Atonement begins",
    scripture: "KJV reference: Daniel 8:14 - 'then shall the sanctuary be cleansed.'",
    explanation:
      "Counting 2,300 prophetic years from 457 BC reaches 1844. Daniel 8:14 says that after this period the sanctuary would be cleansed. Since the earthly sanctuary was gone, this points to Christ's ministry in the heavenly sanctuary, entering the final Day-of-Atonement phase.",
    meaning:
      "This is not God becoming willing to forgive in 1844. Forgiveness rests on the cross. 1844 marks the beginning of the final heavenly work that cleanses the record of sin, reveals the truth about God's people, and vindicates God's saving character."
  },
  {
    id: "now",
    date: "Now",
    label: "Christ ministers",
    title: "Our High Priest is doing the final work",
    scripture: "KJV references: Hebrews 8:1-2; Hebrews 9:23-24; Revelation 14:6-7.",
    explanation:
      "We live in the antitypical Day of Atonement. Christ ministers for His people in the heavenly sanctuary, presenting His blood, revealing who has trusted Him, cleansing the record of sin, and preparing the universe for the end of sin.",
    meaning:
      "This truth should produce seriousness, but not panic. Believers have an Advocate. The judgment is good news when Christ is your righteousness and High Priest."
  },
  {
    id: "next",
    date: "Next",
    label: "Restoration",
    title: "Sin removed and communion restored",
    scripture: "KJV references: Acts 3:19-21; Revelation 21:3-4; Revelation 22:3-4.",
    explanation:
      "The sanctuary message ends with restoration. After Christ's final ministry, sin will be removed, God's government vindicated, and His people brought into unveiled communion with Him.",
    meaning:
      "The goal is not a date on a chart. The goal is God dwelling with His people again, with no sin record, no fear, no veil, and no separation."
  }
];

const focusStudyCards = [
  {
    kicker: "The big question",
    title: "What does Daniel 8:14 mean?",
    text:
      "Daniel heard the words, 'Unto two thousand and three hundred days; then shall the sanctuary be cleansed.' In simple language: God gave a long prophetic period, and at its end Christ would begin the final cleansing work connected with the sanctuary. This is sanctuary language, judgment language, and good-news language because the One doing the work is Jesus."
  },
  {
    kicker: "Why cleansing was needed",
    title: "Sin was forgiven, but the sanctuary carried the record",
    text:
      "In the daily service, a sinner confessed over the sacrifice. The animal died as the substitute, and the priest ministered the blood. The sinner went home forgiven, but the sanctuary now bore the ritual record of confessed sin. That is why the sanctuary needed a Day of Atonement cleansing."
  },
  {
    kicker: "Daily vs. yearly",
    title: "Forgiveness was real, and cleansing completed the process",
    text:
      "The daily service showed how a sinner received forgiveness through a substitute and priestly ministry. The yearly Day of Atonement showed what God would finally do with sin's record: cleanse the sanctuary, remove sin, vindicate His mercy and justice, and restore His people fully."
  },
  {
    kicker: "Plain English",
    title: "Daniel 8:14 points to the heavenly sanctuary",
    text:
      "By 1844 there was no earthly sanctuary standing with priests performing Leviticus 16. Hebrews teaches that Christ ministers in the true sanctuary in heaven. So Daniel 8:14 points to the antitypical Day of Atonement: Christ's final phase of heavenly priestly ministry."
  },
  {
    kicker: "How the years are counted",
    title: "2,300 prophetic days equal 2,300 years",
    text:
      "Bible prophecy often uses a day to represent a year. Daniel 8 gives the 2,300 days but not the starting point; Daniel 9 returns to Gabriel's explanation and gives the beginning with the decree to restore Jerusalem. From 457 BC, the 2,300 years reach 1844."
  },
  {
    kicker: "What is happening now",
    title: "Christ is ministering in the final phase",
    text:
      "Since 1844, Christ has been carrying forward the final work pictured by the Day of Atonement. He is not trying to discover facts God did not know; He is cleansing the record of sin, revealing the truth about faith, vindicating God's character, and preparing for final restoration."
  }
];

const focusHeroChain = [
  { title: "Sin confessed", text: "Guilt is brought into the open before God." },
  { title: "Blood ministered", text: "The substitute dies, and the priest carries the blood." },
  { title: "Sanctuary bears record", text: "Forgiveness is real, yet confessed sin is held in the sanctuary story." },
  { title: "Day of Atonement cleanses", text: "The record is removed, judgment is settled, and God is vindicated." },
  { title: "Christ restores", text: "Jesus completes the heavenly reality and brings His people home." }
];

const focusLogicSteps = [
  {
    icon: "users",
    kicker: "Daily service",
    title: "The sinner is forgiven",
    text:
      "A repentant person confesses sin over the sacrifice. The substitute dies in the sinner's place, showing that forgiveness is merciful but never cheap."
  },
  {
    icon: "water",
    kicker: "Priestly ministry",
    title: "Blood carries the confession",
    text:
      "The priest ministers blood connected with the confessed sin. The sinner may leave forgiven, but the sanctuary now bears the ritual record of what grace has covered."
  },
  {
    icon: "shield",
    kicker: "Sanctuary record",
    title: "The sanctuary needs cleansing",
    text:
      "Sin has been dealt with for the worshiper, yet the sanctuary has become the place where the problem of confessed sin is stored until God removes it."
  },
  {
    icon: "clock",
    kicker: "Yearly service",
    title: "The Day of Atonement removes sin",
    text:
      "Once a year the sanctuary was cleansed. This was judgment, cleansing, removal, and vindication, not a denial that daily forgiveness had been real."
  },
  {
    icon: "priest",
    kicker: "Heavenly fulfillment",
    title: "Christ completes the pattern",
    text:
      "Daniel 8:14 points beyond the vanished earthly sanctuary to Jesus, our High Priest, ministering in the heavenly sanctuary's final cleansing phase."
  }
];

const focusDanielLinkSteps = [
  {
    reference: "Daniel 8:14",
    title: "Daniel 8 gives the 2,300 days",
    text:
      "The vision reaches its climax with the question of how long the sanctuary problem will continue. The answer is 2,300 days, then the sanctuary will be cleansed."
  },
  {
    reference: "Daniel 8:16",
    title: "Gabriel is told to explain the vision",
    text:
      "A voice commands Gabriel, 'make this man to understand the vision.' So the angel's task is not finished until Daniel understands what the vision means."
  },
  {
    reference: "Daniel 8:27",
    title: "Daniel faints before the time is explained",
    text:
      "Daniel says he was astonished at the vision and did not understand it. The animals are explained, but the time portion remains unresolved."
  },
  {
    reference: "Daniel 9:21-25",
    title: "Gabriel returns with the starting point",
    text:
      "Gabriel comes back and tells Daniel to 'consider the vision.' Then he gives the 70 weeks and names the decree to restore Jerusalem as the starting event."
  }
];

const focusChartSegments = [
  {
    label: "2,300 prophetic years",
    range: "457 BC -> 1844",
    left: "0%",
    width: "72%",
    fill: "linear-gradient(135deg, #d8993c, #8d4a22)"
  },
  {
    label: "70 weeks / 490 years",
    range: "first portion cut off from the 2,300",
    left: "0%",
    width: "28%",
    fill: "linear-gradient(135deg, #eeb85c, #c56f27)"
  },
  {
    label: "457 BC shared starting point",
    range: "decree to restore and rebuild Jerusalem",
    left: "0%",
    width: "18%",
    fill: "linear-gradient(135deg, #8ab79d, #426f62)"
  }
];

const focusAssuranceCards = [
  {
    icon: "shield",
    title: "What is being cleansed?",
    text:
      "The heavenly sanctuary and the record of confessed sin. Christ's work also concerns His people, because the judgment reveals who has trusted Him and shows that God saves without excusing sin."
  },
  {
    icon: "priest",
    title: "What is Christ doing now?",
    text:
      "He ministers as High Priest in the final Day-of-Atonement phase. He applies the victory of the cross, cleanses the record, reveals truth, and prepares the universe for sin's final removal."
  },
  {
    icon: "sun",
    title: "Why this is good news",
    text:
      "The judgment is not God trying to learn information. It is God revealing truth, vindicating Christ's saving work, and assuring believers that their Advocate is also their righteousness."
  }
];

const faqArticles = [
  {
    id: "feasts-keep",
    category: "Festival Calendar",
    title: "Should Christians Keep the Feasts?",
    subtitle: "A balanced Adventist answer",
    summary:
      "Christians are not required to keep Israel's yearly feasts as covenant law. Still, the feasts are worth studying because they trace the story of redemption and lead the mind to Christ.",
    keyTexts: [
      "Leviticus 23",
      "Colossians 2:16-17",
      "Galatians 4:9-11",
      "Hebrews 8-10",
      "1 Corinthians 5:7-8",
      "Acts 2",
      "Romans 14:5-6",
      "Daniel 8:14",
      "Revelation 14:6-7"
    ],
    featured: true,
    quickAnswer: [
      {
        label: "Not required",
        text:
          "No one should make feast keeping a test of righteousness, fellowship, prophetic insight, or readiness for Christ's return. The New Testament points believers to Christ Himself, the reality to whom the feast shadows pointed."
      },
      {
        label: "Still profitable",
        text:
          "The feasts still teach beautifully. They arrange the gospel story into memorable movements: sacrifice, resurrection, Spirit-filled mission, judgment, cleansing, harvest, and God dwelling with His people."
      },
      {
        label: "Best use",
        text:
          "Use the feasts as Bible study windows. Let Passover lead you to the cross, Pentecost to mission, Trumpets to judgment proclamation, and the Day of Atonement to Christ's final priestly work."
      }
    ],
    sections: [
      {
        heading: "1. The question beneath the question",
        wide: true,
        body:
          "The question is not simply whether Christians may learn from the Hebrew feasts. Of course they may. The deeper question is whether Christians are obligated to keep them as covenant duties, end-time tests, or conditions of faithfulness. A careful Adventist answer needs to hold two truths together: the feasts were appointed by God and full of gospel meaning, but their ritual obligation belonged to the sanctuary system that found its fulfillment in Christ."
      },
      {
        heading: "2. The short answer",
        wide: true,
        body:
          "Christians are not required to keep the feasts as binding religious law. But Christians should not despise them either. They are inspired teaching patterns that help us see Christ's sacrifice, resurrection, priestly ministry, judgment, cleansing of the sanctuary, and final restoration. The right use of the feasts is Christ-centered study; the wrong use is making them a test of salvation."
      },
      {
        heading: "3. What Leviticus 23 actually describes",
        body:
          "Leviticus 23 presents appointed times woven into Israel's worship, work, harvest, memory, sacrifice, and covenant identity. These were not merely inspirational anniversaries. They included holy convocations, offerings, rest days, priestly actions, harvest symbols, and national participation. Israel learned redemption by living inside a calendar that rehearsed what God had done and pointed forward to what He would do."
      },
      {
        heading: "4. The feasts were sanctuary-shaped",
        body:
          "The feasts were attached to the earthly sanctuary system. They involved sacrifices, priestly mediation, blood ministry, altar service, ceremonial rest, and in several cases pilgrimage to the place God chose. That matters because Christians cannot lift the feasts out of the sanctuary system and make them binding while also admitting that Christ has fulfilled the sacrificial and priestly center of that system."
      },
      {
        heading: "5. Why Adventists study them carefully",
        body:
          "Adventists have good reason to study the feasts carefully because the sanctuary is central to our understanding of salvation history. Read typologically, the calendar moves from sacrifice to resurrection, from priestly ministry to judgment, and from cleansing to final restoration."
      },
      {
        heading: "6. Type and antitype",
        body:
          "A type is an earlier God-given pattern; an antitype is the greater reality to which it points. The feasts are not empty customs. They are prophetic shadows. But the shadow must never be treated as equal to the reality. Once Christ has come as sacrifice, risen Lord, heavenly Priest, and coming King, the feasts must be read through Him."
      },
      {
        heading: "7. The spring feasts and Christ's first advent",
        body:
          "Passover points to Christ our sacrifice. Unleavened Bread points to a life freed from the old leaven of sin and hypocrisy. Firstfruits points to Christ's resurrection as the pledge of the coming harvest. Pentecost points to the Spirit-filled gathering of the church for mission. In this sequence, the feasts do not merely remember old events; they teach the gospel pattern fulfilled in Jesus."
      },
      {
        heading: "8. The fall feasts and Christ's final work",
        body:
          "Trumpets announced solemn preparation and warning. The Day of Atonement brought judgment, cleansing, and removal of sin from the sanctuary. Tabernacles celebrated harvest joy and dwelling safely with God. Adventist theology sees in this fall sequence the movement from judgment proclamation to sanctuary cleansing to final restoration, making these feasts especially important for understanding Daniel 8:14 and Revelation 14."
      },
      {
        heading: "9. Colossians 2 and the shadow-substance principle",
        body:
          "Colossians 2 warns believers not to let anyone judge them in food, drink, festival, new moon, or sabbath days connected to the ceremonial calendar. Paul calls these things shadows, while Christ is the substance. This does not mean the shadows were bad. It means their authority as covenant obligations changed because the One to whom they pointed has come."
      },
      {
        heading: "10. Galatians and the danger of calendar obligation",
        body:
          "Galatians is especially serious because Paul is not merely discussing dates. He is confronting a religious system that makes ceremonial observance part of covenant standing. When days, months, times, and years become a way to secure favor with God, the gospel is endangered. The problem is not careful Bible study; the problem is turning fulfilled shadows into a yoke."
      },
      {
        heading: "11. Hebrews and the once-for-all sacrifice",
        body:
          "Hebrews teaches that Christ's sacrifice is final, sufficient, and unrepeatable. The earthly sanctuary system was a copy and shadow; Christ ministers in the true heavenly sanctuary. This means Christians should not rebuild a ceremonial system as though Christ's priesthood has not arrived. The feasts can instruct us, but they cannot function as the old covenant sanctuary calendar once did."
      },
      {
        heading: "12. What about Jesus keeping the feasts?",
        body:
          "Jesus was born under the law and lived faithfully within Israel's covenant world. His attendance at feasts shows His faithfulness as Messiah and His desire to meet Israel in the very symbols that pointed to Him. But Jesus' participation before the cross does not automatically make the feast calendar binding after His death, resurrection, and heavenly priestly ministry."
      },
      {
        heading: "13. What about Paul keeping or mentioning feasts?",
        body:
          "Paul moved within Jewish and Gentile settings as a missionary. He could use feast language, travel near feast seasons, and reason with people who knew the calendar. But Acts and the epistles do not command Gentile believers to keep the feasts. Paul's own letters warn against making calendar observance a basis of judgment or spiritual superiority."
      },
      {
        heading: "14. What does forever mean?",
        body:
          "Some argue that because feast statutes were called lasting or forever, Christians must keep them today. But Scripture uses this language within covenant arrangements that can reach their intended goal. Circumcision, priestly service, sacrifices, and temple rites also had enduring covenant language, yet the New Testament teaches that Christ's fulfillment changes their function."
      },
      {
        heading: "15. The practical problem of restoring biblical feast keeping",
        body:
          "Biblical feast keeping was not simply eating symbolic meals at home. It involved the sanctuary, altar, priesthood, offerings, harvest cycle, holy convocations, and sometimes pilgrimage. Modern feast observance usually selects devotional pieces while leaving out the sacrificial and priestly core. That may be useful as teaching, but it is not the same thing as restoring biblical feast keeping."
      },
      {
        heading: "16. Are voluntary feast-themed gatherings wrong?",
        body:
          "Not necessarily. A church, family, or study group may use Passover, Pentecost, Trumpets, Atonement, or Tabernacles as teaching moments. The key question is what claim is attached to the practice. If it helps people see Christ more clearly, it can be useful. If it becomes a requirement, identity marker, or measure of end-time faithfulness, it has crossed a dangerous line."
      },
      {
        heading: "17. The difference between study and obligation",
        body:
          "A believer may study the Day of Atonement without placing himself under the Levitical calendar. A preacher may explain Passover without requiring Passover observance. A family may use feast themes to teach children the plan of salvation without implying that God demands the feast days. Learning from a fulfilled symbol is different from being bound by the symbol."
      },
      {
        heading: "18. How the feasts help Adventist preaching",
        body:
          "The feasts give Adventists a vivid way to teach the whole sanctuary story. Passover helps explain substitution. Pentecost helps explain mission. Trumpets helps explain judgment announcement. The Day of Atonement helps explain Daniel 8:14. Tabernacles helps explain the final homecoming. Used rightly, the calendar does not distract from Adventist doctrine; it gives the doctrine biblical texture."
      },
      {
        heading: "19. Common mistakes to avoid",
        body:
          "Do not treat feast keeping as the seal of God. Do not claim that Christians who do not keep the feasts are disobedient. Do not use the feasts to weaken the seventh-day Sabbath, which belongs to creation and the moral law rather than the yearly ceremonial cycle. Do not let fascination with dates replace present trust in Christ."
      },
      {
        heading: "20. A pastoral conclusion",
        wide: true,
        body:
          "So should Christians keep the feasts? As binding covenant law, no. As Christ-centered study, yes. The feasts are best handled as fulfilled sanctuary prophecies that teach us to love Christ more deeply. They are not a road back to the old system; they are windows into the One who died, rose, intercedes, judges, cleanses, and will dwell with His people forever."
      }
    ],
    relatedLinks: [
      { label: "Open Festival Calendar", view: "calendar" },
      { label: "Study Daniel 8:14", view: "focus1844" }
    ],
  },
  {
    id: "investigative-judgment",
    category: "1844 Focus",
    title: "Is the Investigative Judgment Biblical?",
    subtitle: "A Bible study in Daniel, Leviticus, Hebrews, and Revelation",
    summary:
      "The investigative judgment is the Bible's pre-Advent judgment scene understood through the sanctuary: Christ reveals the truth, cleanses the record of confessed sin, vindicates His saving work, and prepares for sin's final removal.",
    keyTexts: ["Daniel 7:9-14", "Daniel 8:14", "Daniel 9:24-27", "Leviticus 16", "Hebrews 8:1-2", "Hebrews 9:23-24", "Revelation 14:6-7"],
    featured: true,
    quickAnswer: [
      {
        label: "Yes, if defined biblically",
        text:
          "Yes, when it is defined from the Bible rather than from caricatures. God is not learning facts He did not know; He is opening the record and showing that His decisions in Christ are righteous."
      },
      {
        label: "It is sanctuary-shaped",
        text:
          "It grows out of the Day of Atonement, Daniel's courtroom and sanctuary visions, Hebrews' heavenly sanctuary, and Revelation's announcement that the hour of God's judgment has come."
      },
      {
        label: "It is good news",
        text:
          "The believer does not stand alone. Christ is Advocate, High Priest, Sacrifice, and righteousness. Judgment is safe when the Judge is the One who gave Himself for you."
      }
    ],
    sections: [
      {
        heading: "1. The question we are really asking",
        wide: true,
        body:
          "When people ask whether the investigative judgment is biblical, they are often asking several questions at once. Does the Bible teach a judgment before the Second Coming? Does that judgment involve records? Does it connect with the heavenly sanctuary? Does it begin after the 2,300 days of Daniel 8:14? And most importantly, can a believer have assurance if judgment is real? A good answer must deal with all of these questions, not just defend a date."
      },
      {
        heading: "2. Judgment before reward is biblical",
        body:
          "The Bible often places judgment before final reward. Daniel 7 shows the court sitting before the Son of man receives the kingdom. Revelation 14 announces that the hour of God's judgment has come before the harvest of the earth. Revelation 22 says Christ comes with His reward. If the reward is brought at the coming, then the decision concerning that reward has already been made."
      },
      {
        heading: "3. Daniel 7 gives the courtroom",
        body:
          "Daniel 7 is not merely a prediction of earthly empires. It climaxes in heaven: thrones are placed, books are opened, and judgment sits. The little horn has attacked God, His people, and His law, but the judgment answers those claims. Judgment is given in favor of the saints, which means the judgment is not designed to terrify believers who are in Christ. It vindicates God's people and exposes the rebellion against God."
      },
      {
        heading: "4. The books show that judgment is open and evidential",
        body:
          "Daniel 7 says books are opened. This is not because God forgot something or needs to investigate in order to learn. The opened books show that God's judgment is transparent. Before the watching universe, God reveals the truth about sin, faith, rebellion, repentance, and His own saving decisions."
      },
      {
        heading: "5. Daniel 8 gives the sanctuary cleansing",
        body:
          "Daniel 8:14 says that after the 2,300 days the sanctuary would be cleansed. This is sanctuary language, and especially Day-of-Atonement language. The prophecy is not merely about a political event. It concerns worship, priestly ministry, truth, the sanctuary, and the final cleansing that answers the damage caused by sin."
      },
      {
        heading: "6. The earthly sanctuary was gone by 1844",
        body:
          "By 1844 there was no functioning earthly sanctuary in Jerusalem. Therefore the cleansing of Daniel 8:14 cannot be the annual cleansing of the Levitical sanctuary on earth. Hebrews tells us where to look: Christ ministers in the true sanctuary in heaven. Daniel 8:14 points to the heavenly reality, not to a revived earthly temple system."
      },
      {
        heading: "7. Daniel 8 and 9 give the timeline",
        body:
          "Daniel 8 gives the 2,300 days, but Daniel says he did not understand the vision's time element. In Daniel 9 Gabriel returns and tells him to consider the vision. The 70 weeks are 'determined' for Daniel's people; Adventists understand that period as the first portion marked off from the longer 2,300 years. Daniel 9 also gives the starting event: the decree to restore and rebuild Jerusalem, which places both periods at the same 457 BC starting point."
      },
      {
        heading: "8. Jesus anchors the prophecy",
        body:
          "The 70-week portion of Daniel 9 points to Messiah's appearing, His death in the midst of the week, and the close of the special period for Daniel's people. This means the same prophecy that leads to 1844 first leads to Christ's baptism and cross. The timeline is not an abstract calculation; it is centered in Jesus."
      },
      {
        heading: "9. Leviticus 16 explains why cleansing is needed",
        body:
          "In the daily service, confessed sin was transferred into the sanctuary through sacrifice and priestly blood ministry. The sinner was forgiven, but the sanctuary bore the record of sin until the Day of Atonement. On that day the sanctuary was cleansed, sin was removed, and God's justice and mercy were displayed together."
      },
      {
        heading: "10. Hebrews places Christ in the heavenly sanctuary",
        body:
          "Hebrews does not leave Jesus only at the cross. It presents Him as High Priest in the true sanctuary in heaven. His sacrifice is finished and sufficient, but His priestly ministry applies that sacrifice, represents His people, and brings the sanctuary pattern to its final reality."
      },
      {
        heading: "11. What is being investigated?",
        body:
          "The issue is not God's ignorance. God already knows all things. The judgment opens the record so the universe can see the truth about sin, grace, faith, and God's decisions. It reveals those who have trusted Christ, not because their works save them, but because their lives witness to whether they have received His grace."
      },
      {
        heading: "12. Does this deny the finished work of the cross?",
        body:
          "No. The cross is the once-for-all sacrifice and the unrepeatable foundation of salvation. The investigative judgment does not add to Calvary. It applies, reveals, and vindicates the saving work accomplished there. In sanctuary language, sacrifice and priestly ministry belong together: the victim is slain, and the priest ministers the benefit of the blood."
      },
      {
        heading: "13. Does this make believers insecure?",
        body:
          "It should not. Insecurity comes when the doctrine is separated from Christ. But the Bible places Christ at the center: He is the Lamb, the Advocate, the High Priest, and the righteous Judge. The believer does not stand in the judgment alone. The One who knows the record is the One who died to cleanse it."
      },
      {
        heading: "14. What about works in judgment?",
        body:
          "The judgment considers works as evidence, not as payment. Works reveal whether faith is living or dead. They do not replace Christ's righteousness. The sanctuary teaches that the sinner is accepted through sacrifice, yet genuine faith leads to confession, surrender, and a transformed life."
      },
      {
        heading: "15. Why Revelation 14 matters",
        body:
          "Revelation 14 announces the everlasting gospel and says the hour of God's judgment has come. Adventists understand this as an end-time proclamation of the judgment phase connected to Daniel 8:14. The judgment message is not separate from the gospel; it is part of the everlasting gospel because it announces that God is bringing the controversy to a righteous end."
      },
      {
        heading: "16. The final answer",
        wide: true,
        body:
          "Yes, the investigative judgment is biblical when it is understood through Daniel's courtroom, Daniel's sanctuary cleansing, Leviticus 16, Hebrews' heavenly sanctuary, and Revelation's judgment-hour message. It is not God trying to discover information. It is God revealing truth, cleansing the sanctuary record, vindicating Christ's saving work, and preparing the universe for the final removal of sin."
      }
    ],
    relatedLinks: [
      { label: "Open 1844 Focus", view: "focus1844" },
      { label: "Open Day of Atonement feast", view: "calendar", feast: "atonement" }
    ],
  },
  {
    id: "antitypical-day-of-atonement",
    category: "1844 Focus",
    title: "What Is the Antitypical Day of Atonement?",
    subtitle: "The earthly cleansing day lifted into Christ's heavenly ministry",
    summary:
      "It is the heavenly reality to which Israel's yearly Day of Atonement pointed: Christ brings His priestly ministry to its final cleansing phase, deals with the record of sin, reveals the truth, and prepares His people for restoration.",
    keyTexts: ["Leviticus 16", "Leviticus 23:26-32", "Daniel 7:9-14", "Daniel 8:14", "Hebrews 8:1-2", "Hebrews 9:23-28", "Revelation 14:6-7"],
    sections: [
      {
        heading: "1. The simple definition",
        wide: true,
        body:
          "The antitypical Day of Atonement is the final heavenly reality to which Israel's yearly Day of Atonement pointed. It is not another sacrifice, because Christ's sacrifice was finished at the cross. It is the final priestly phase in which Christ applies the benefits of His completed sacrifice to cleanse the sanctuary record, reveal the truth, vindicate God's saving work, and bring the sin problem to its end."
      },
      {
        heading: "2. What happened on the earthly day",
        body:
          "Leviticus 16 describes the most solemn day of Israel's sanctuary year. The high priest washed, put on holy linen garments, offered sacrifice for himself, took blood into the Most Holy Place, sprinkled before the mercy seat, cleansed the sanctuary, cleansed the altar, and confessed Israel's sins over the live goat. The day taught that forgiven sin still had to be finally removed from God's sanctuary."
      },
      {
        heading: "3. Why cleansing was needed",
        body:
          "Through the daily service, confessed sin was brought into the sanctuary story by sacrifice and priestly blood ministry. The sinner was forgiven, but the sanctuary now bore the record of sin's terrible reality. The Day of Atonement showed that God does not merely forgive sinners while leaving sin permanently lodged in His house. He forgives, cleanses, removes, and restores."
      },
      {
        heading: "4. Why the word antitypical matters",
        body:
          "The earthly Day of Atonement was the type, the teaching pattern. The antitype is the greater fulfillment in Christ's heavenly ministry. Adventist sanctuary theology does not say that the old ritual continues on earth. It says the old ritual pointed forward to the true High Priest, the true sanctuary, the true judgment, and the final cleansing that only Christ can accomplish."
      },
      {
        heading: "5. Daniel 8:14 and the cleansing of the sanctuary",
        body:
          "Daniel 8:14 says that after the 2,300 days the sanctuary would be cleansed. That language naturally points the Bible student back to Leviticus 16. Since the earthly sanctuary no longer existed in 1844, the cleansing cannot be about a temple in Jerusalem. It concerns the heavenly sanctuary, where Christ ministers as High Priest."
      },
      {
        heading: "6. Hebrews and the heavenly sanctuary",
        body:
          "Hebrews says Christ is minister of the sanctuary and true tabernacle, which the Lord pitched, and not man. It also says heavenly things needed cleansing in a higher sense than the earthly copies. This does not mean heaven is morally dirty. It means the record and claims of sin must be resolved in God's government before sin is finally removed forever."
      },
      {
        heading: "7. Judgment is part of cleansing",
        body:
          "The Day of Atonement was not merely private forgiveness repeated on a larger scale. It was a public covenant reckoning. Israel afflicted their souls, the priest entered the Most Holy Place, and the sanctuary was cleansed. In the antitype, judgment reveals who has truly trusted Christ and shows that God is just in saving repentant sinners and ending sin."
      },
      {
        heading: "8. The live goat and final responsibility",
        body:
          "After the sanctuary was cleansed, the high priest placed the sins on the live goat, which was sent away. Adventist interpretation sees this as the final placing of responsibility upon the originator of sin, not as a second savior. Christ alone bears sin redemptively. The scapegoat ritual shows that sin will finally be removed from God's people and God's sanctuary."
      },
      {
        heading: "9. Why this is good news",
        body:
          "The antitypical Day of Atonement is not meant to leave believers trembling in uncertainty. It announces that confessed sin will not remain forever. Christ does not merely pardon; He cleanses. He does not merely cover guilt temporarily; He brings the whole controversy toward final resolution."
      },
      {
        heading: "10. How believers should respond",
        body:
          "The earthly Day of Atonement called Israel to humility, confession, and trust in priestly mediation. The antitypical Day calls believers to the same spirit: honest repentance, deep trust in Christ, freedom from presumption, and assurance that our Advocate is working for us in the presence of God."
      }
    ],
    relatedLinks: [{ label: "Read the full investigative judgment article", faq: "investigative-judgment" }],
  },
  {
    id: "daniel-7-8-9",
    category: "Prophecy",
    title: "How Do Daniel 7, 8, and 9 Connect?",
    subtitle: "Courtroom, sanctuary cleansing, and the starting date",
    summary:
      "Daniel 7 shows the heavenly courtroom, Daniel 8 adds the sanctuary cleansing and the 2,300 days, and Daniel 9 supplies the starting point through the 70-week prophecy.",
    keyTexts: ["Daniel 7:9-14", "Daniel 8:13-14", "Daniel 8:26-27", "Daniel 9:21-27", "Ezra 7", "Mark 1:14-15", "Galatians 4:4"],
    sections: [
      {
        heading: "1. Why these chapters must be read together",
        wide: true,
        body:
          "Daniel 7, 8, and 9 are not isolated prophetic puzzles. They form a connected study. Daniel 7 gives the heavenly courtroom and judgment. Daniel 8 gives the sanctuary attack, the 2,300 days, and the promise that the sanctuary will be cleansed. Daniel 9 returns to Daniel's unanswered concern and supplies the starting point through the 70-week prophecy."
      },
      {
        heading: "2. Daniel 7 gives the courtroom",
        body:
          "Daniel 7 moves through the kingdoms of earth and then lifts the reader into heaven. Thrones are placed, books are opened, judgment sits, and the Son of man receives the kingdom. This chapter shows that end-time judgment is not a human invention. It is part of the prophetic sequence before the saints receive the kingdom."
      },
      {
        heading: "3. Daniel 8 gives the sanctuary issue",
        body:
          "Daniel 8 narrows the focus. Instead of the broad beasts of Daniel 7, it speaks in sanctuary language: ram, goat, horn, daily, sanctuary, host, truth cast down, and finally the cleansing of the sanctuary. The question is not merely who rules politically. The deeper question is what happens to God's sanctuary, truth, people, and worship."
      },
      {
        heading: "4. Daniel 8 gives a time period but no start date",
        body:
          "The 2,300 days are given in Daniel 8, but Daniel is not told when they begin. Gabriel explains parts of the vision, but Daniel faints and says he does not understand. This leaves the time element unresolved. A later explanation is needed if the prophecy is to be anchored in history."
      },
      {
        heading: "5. Gabriel returns in Daniel 9",
        body:
          "Daniel 9 begins with Daniel praying about Jerusalem, desolation, sin, mercy, and restoration. Gabriel then returns and tells Daniel to understand the matter and consider the vision. This language links Daniel 9 back to the unresolved vision of Daniel 8. Gabriel is not starting a random new topic; he is completing the explanation."
      },
      {
        heading: "6. The 70 weeks are cut off",
        body:
          "Daniel 9 says 70 weeks are determined for Daniel's people and holy city. The word carries the idea of being marked off or allotted. Adventists therefore understand the 70 weeks as the first explained portion of the larger 2,300-year prophecy. This is why the two periods share the same starting point."
      },
      {
        heading: "7. Daniel 9 supplies the starting point",
        body:
          "Daniel 9:25 gives the starting event: the commandment to restore and rebuild Jerusalem. The decree associated with Ezra 7 in 457 BC fits this restoration setting because it granted civil and religious authority for Jerusalem's restoration. This is why both the 70 weeks and the 2,300 years begin together in 457 BC."
      },
      {
        heading: "8. The Messiah confirms the timeline",
        body:
          "From 457 BC, the 69 weeks reach the time of Messiah's appearing. Jesus begins His public ministry with the announcement that the time is fulfilled. In the middle of the final prophetic week, Christ is crucified, causing sacrifice and oblation to meet their true meaning in His death. The prophecy is centered on Jesus, not merely on dates."
      },
      {
        heading: "9. AD 34 and the close of the 70 weeks",
        body:
          "The 70 weeks end in AD 34, when the gospel mission decisively widens beyond the Jewish nation. This does not mean God stops loving Jewish people. It means the special probationary period for the covenant nation as the chosen vehicle of Messiah's mission has reached its prophetic close, and the gospel goes to all nations."
      },
      {
        heading: "10. From AD 34 to 1844",
        body:
          "If the 70 weeks are the first 490 years cut from the 2,300, the remaining years continue until 1844. Daniel 8:14 then points to the cleansing of the sanctuary, not on earth, but in heaven. Daniel 7, 8, and 9 therefore fit together: courtroom judgment, sanctuary cleansing, and a Messiah-centered timeline."
      },
      {
        heading: "11. Why the connection matters devotionally",
        body:
          "The Daniel 8-9 link prevents 1844 from becoming an isolated date. It anchors the prophecy in Scripture, in the sanctuary, and in Christ's first advent. The same prophecy that leads to 1844 first leads to Jesus' baptism and cross. That means the final judgment is built on the certainty of the gospel."
      }
    ],
    relatedLinks: [{ label: "Open Daniel 8-9 study", view: "focus1844" }],
  },
  {
    id: "judgment-not-works",
    category: "Assurance",
    title: "Does Judgment Mean Salvation by Works?",
    subtitle: "Why evidence is not the same as earning salvation",
    summary:
      "No. Works never buy salvation. In judgment they serve as evidence of whether a person has actually trusted Christ and allowed His grace to bear fruit.",
    keyTexts: ["Ephesians 2:8-10", "Romans 3:24-26", "James 2:17-18", "Matthew 7:16-23", "2 Corinthians 5:10", "Revelation 22:12"],
    sections: [
      {
        heading: "1. The fear behind the question",
        wide: true,
        body:
          "Many people hear about judgment and immediately fear that God is weighing good deeds against bad deeds to decide whether they have earned salvation. That is not the gospel, and it is not the Adventist sanctuary message at its best. Scripture teaches that sinners are saved by grace through faith, and that Christ alone is the ground of acceptance."
      },
      {
        heading: "2. Grace is the root",
        body:
          "Ephesians 2 is clear: salvation is by grace, through faith, not of works. Good works follow as the fruit of God's saving work, not as the price of admission. The sanctuary begins with sacrifice because sinners do not climb into God's presence by moral achievement. They come by blood, mercy, and priestly mediation."
      },
      {
        heading: "3. Works are evidence, not payment",
        body:
          "In an honest court, evidence matters, but evidence is not the savior. Scripture connects judgment with deeds because deeds reveal allegiance, faith, repentance, and resistance to grace. Works do not purchase salvation; they show whether the heart has received or rejected Christ."
      },
      {
        heading: "4. James and living faith",
        body:
          "James says faith without works is dead. He is not contradicting Paul. Paul rejects works as the basis of salvation; James rejects a lifeless claim to faith that bears no fruit. The judgment does not ask whether works can replace Christ. It reveals whether faith in Christ was real or merely spoken."
      },
      {
        heading: "5. The sanctuary pattern",
        body:
          "In the sanctuary, the sinner did not bring a resume of obedience. He brought a sacrifice. Yet the worshiper also confessed, repented, and returned to covenant life. The same pattern holds in the judgment: the sacrifice saves, but the record reveals whether the sinner truly came to God through that sacrifice."
      },
      {
        heading: "6. Why books are opened",
        body:
          "The opened books in Daniel 7 are not for God's information. God already knows the truth. The books reveal the truth to the universe. They show that God's judgments are righteous, that His grace actually changes lives, and that He is just in saving those who have trusted Christ."
      },
      {
        heading: "7. What about failure after conversion?",
        body:
          "The judgment does not require sinless personal achievement as the basis of acceptance. Believers still need Christ's mercy. The question is not whether a person ever stumbled, but whether they hid from Christ or kept returning to Him in repentance, faith, and surrender."
      },
      {
        heading: "8. Why assurance is possible",
        body:
          "Assurance rests in Christ's righteousness, not in self-confidence. The believer can face judgment because Jesus is Advocate, Sacrifice, High Priest, and Judge. The same One who knows the record also gave Himself to cleanse it."
      },
      {
        heading: "9. The danger of presumption",
        body:
          "Judgment also protects the gospel from cheap grace. God does not save people in their sins while they cling to rebellion. Grace forgives and transforms. The judgment reveals the difference between struggling faith and cherished sin, between repentance and religious appearance."
      },
      {
        heading: "10. The balanced conclusion",
        body:
          "Judgment does not mean salvation by works. It means salvation by Christ is publicly shown to be real, just, and transformative. Works are witnesses, not saviors. The believer's hope is not, 'I have done enough,' but, 'Christ is enough, and His grace has not been empty in me.'"
      }
    ],
    relatedLinks: [{ label: "Read the full judgment article", faq: "investigative-judgment" }],
  },
  {
    id: "sanctuary-cleansing",
    category: "Sanctuary",
    title: "Why Does the Sanctuary Need Cleansing?",
    subtitle: "Forgiveness, record, and final removal",
    summary:
      "Because confessed sin was transferred into the sanctuary through priestly ministry. The sinner was forgiven, but the sanctuary record required final cleansing.",
    keyTexts: ["Leviticus 4", "Leviticus 6:24-30", "Leviticus 10:16-18", "Leviticus 16", "Daniel 8:14", "Hebrews 9:23"],
    sections: [
      {
        heading: "1. The basic idea",
        wide: true,
        body:
          "The sanctuary needs cleansing because it is the place where God chose to deal with sin. In the daily service, confessed sin was not ignored. It was dealt with through sacrifice, blood, priestly mediation, and forgiveness. But the ritual also taught that the sin problem had entered God's sanctuary system and needed final resolution."
      },
      {
        heading: "2. Forgiveness is real",
        body:
          "When the sinner brought the appointed sacrifice in faith, forgiveness was real. The sanctuary message should never make people think forgiveness is uncertain until some later date. The daily service assured the repentant sinner that God had accepted the substitute and provided pardon."
      },
      {
        heading: "3. But forgiveness does not erase the whole controversy immediately",
        body:
          "Forgiveness removes guilt from the sinner, but Scripture also shows that the sin problem has a record, a history, and public consequences. God is doing more than saving individuals; He is answering the accusations raised by sin before the universe. That is why sanctuary cleansing matters."
      },
      {
        heading: "4. Transfer in the daily service",
        body:
          "Leviticus shows several ways sin was ritually moved into the sanctuary sphere: through blood applied in holy places, through priestly mediation, and through the priest bearing iniquity in connection with the offering. The point is not that sin simply vanished at the altar; the case was placed into God's appointed system for final handling."
      },
      {
        heading: "5. Pollution is covenantal, not physical dirt",
        body:
          "When Adventists say the sanctuary was polluted by sin, they do not mean literal grime collected on the furniture. The pollution is covenantal and relational. Sin defiles because it violates God's holiness, damages the covenant relationship, and creates a record that must be judged, cleansed, and removed."
      },
      {
        heading: "6. The Day of Atonement cleansed what daily ministry accumulated",
        body:
          "Leviticus 16 brings the yearly answer. The high priest cleansed the Most Holy Place, the Holy Place, and the altar because of the uncleanness and transgressions of Israel. The sanctuary that had mediated forgiveness all year was itself cleansed from the accumulated burden of confessed sin."
      },
      {
        heading: "7. Why God uses this pattern",
        body:
          "The sanctuary pattern protects two truths. First, God forgives sinners immediately when they come by faith. Second, God does not trivialize sin or leave its record unresolved. Mercy and justice meet in the sanctuary because sin is pardoned through sacrifice and removed through cleansing."
      },
      {
        heading: "8. Daniel 8:14 uses this cleansing logic",
        body:
          "When Daniel 8:14 speaks of the sanctuary being cleansed, the Bible student should hear Day-of-Atonement language. The prophecy is not merely about cleaning a building. It points to God's final work of judgment, vindication, and cleansing in connection with Christ's heavenly ministry."
      },
      {
        heading: "9. Hebrews expands the picture to heaven",
        body:
          "Hebrews says the earthly sanctuary was a copy of heavenly realities. It also says the heavenly things are cleansed with better sacrifices. That means the final sanctuary cleansing is not about animal blood but about Christ's completed sacrifice being applied in the true sanctuary."
      },
      {
        heading: "10. The devotional meaning",
        body:
          "The cleansing of the sanctuary tells believers that confessed sin is not only forgiven, but will also be finally removed. God is not keeping sin forever as a weapon against His people. He is moving history toward a clean universe, a cleansed people, and a restored dwelling with Him."
      }
    ],
    relatedLinks: [{ label: "Open 1844 Focus", view: "focus1844" }],
  },
  {
    id: "feasts-nailed-cross",
    category: "Festival Calendar",
    title: "Were the Feasts Nailed to the Cross?",
    subtitle: "What ended, and what still teaches",
    summary:
      "The feast system as covenant obligation ended because its sacrifices and sanctuary shadows met their substance in Christ. The lessons remain valuable because fulfilled types still teach Christ.",
    keyTexts: ["Colossians 2:14-17", "Ephesians 2:14-16", "Hebrews 8:13", "Hebrews 10:1-14", "1 Corinthians 5:7-8"],
    sections: [
      {
        heading: "1. What the phrase usually means",
        wide: true,
        body:
          "When Christians ask whether the feasts were nailed to the cross, they are usually asking whether feast observance remains a binding covenant requirement. The careful answer is this: the feast system as law, sacrifice, priestly obligation, and yearly ceremonial calendar met its fulfillment in Christ. But the Bible stories, symbols, and gospel lessons of the feasts remain profitable for study."
      },
      {
        heading: "2. Colossians 2 and the written obligation",
        body:
          "Colossians 2 speaks of the handwriting of ordinances and warns believers not to be judged regarding festival, new moon, or sabbath days connected with the ceremonial calendar. Paul calls these things shadows. His point is not that God once gave meaningless rituals, but that believers must not be judged by shadows when Christ the substance has come."
      },
      {
        heading: "3. What ended at the cross",
        body:
          "The sacrificial center of the feast system ended as obligation because Christ is the true Lamb, the true offering, and the true Priest. No Christian should approach the feasts as though animal sacrifices, earthly priesthood, or temple pilgrimage are still required ways to maintain covenant standing with God."
      },
      {
        heading: "4. What did not end",
        body:
          "The Bible did not become useless at the cross. The stories, symbols, and prophetic patterns of the feasts still teach. Passover still helps us understand the Lamb of God. Pentecost still helps us understand mission. The Day of Atonement still helps us understand judgment and cleansing. Fulfilled does not mean forgotten."
      },
      {
        heading: "5. Shadow does not mean worthless",
        body:
          "A shadow is valuable when it leads us to the body. It becomes dangerous when it replaces the body. The feasts are valuable as shadows that reveal the outline of Christ's saving work. They become dangerous only when people make observance of the shadow a test of loyalty after Christ has fulfilled it."
      },
      {
        heading: "6. Hebrews and the better ministry",
        body:
          "Hebrews argues that the old system was provisional because Christ has brought a better sacrifice and a better priesthood. The law had a shadow of good things to come, not the very image. Once the reality has arrived, Christians do not rebuild the old system as a religious requirement."
      },
      {
        heading: "7. Why Adventists still talk about the feasts",
        body:
          "Adventists still talk about the feasts because they illuminate the sanctuary and the plan of salvation. The sequence of the calendar helps trace the movement from Christ's first advent to His final work: sacrifice, resurrection, mission, judgment, cleansing, and restoration. This is study, not re-obligation."
      },
      {
        heading: "8. A practical test",
        body:
          "Ask this question: does this use of the feasts magnify Christ, or does it measure people by calendar observance? If it magnifies Christ, it can be a helpful study tool. If it judges believers, claims superior holiness, or makes feast keeping necessary for end-time readiness, it has drifted from the gospel."
      },
      {
        heading: "9. A balanced answer",
        body:
          "Yes, the feast system as binding ceremonial law ended at the cross. No, the feast chapters should not be ignored. They belong in the Christian Bible because they teach Christ. We should not keep them as if the shadow still rules us, but we should study them because the shadow beautifully reveals the substance."
      }
    ],
    relatedLinks: [{ label: "Read the full feast article", faq: "feasts-keep" }],
  },
  {
    id: "paul-feasts",
    category: "New Testament",
    title: "Did Paul Keep the Feasts, and What Does That Prove?",
    subtitle: "Missionary practice is not the same as covenant requirement",
    summary:
      "Paul's references to feast timing show familiarity and missionary sensitivity, but they do not prove that feast observance is required for Christians.",
    keyTexts: ["Acts 16:3", "Acts 18:21", "Acts 20:16", "Acts 21:20-26", "1 Corinthians 9:19-23", "1 Corinthians 16:8", "Colossians 2:16-17", "Galatians 4:9-11"],
    sections: [
      {
        heading: "1. Why this question matters",
        wide: true,
        body:
          "It is easy to overread Paul's travel schedule. Some argue that because Paul mentioned feast seasons or arranged travel around them, Christians today must keep the feasts. But Paul's missionary life shows cultural sensitivity, Jewish context, and evangelistic strategy. It does not automatically create a universal command for Gentile Christians."
      },
      {
        heading: "2. Paul lived in both Jewish and Gentile worlds",
        body:
          "Paul was a Jew, trained in the Scriptures, deeply familiar with the temple calendar, and passionate about reaching both Jews and Gentiles. He could speak in synagogues, use Jewish time markers, and respect Jewish sensitivities without teaching that feast observance was required for salvation or Christian identity."
      },
      {
        heading: "3. Missionary accommodation is not covenant obligation",
        body:
          "In 1 Corinthians 9, Paul says he became as a Jew to the Jews and as without the law to those without the law, that he might win people. This helps explain many of his actions. Paul could accommodate a setting for mission without turning that accommodation into binding law for every believer."
      },
      {
        heading: "4. Acts records history, not always obligation",
        body:
          "Acts tells us what happened in the early church's transition from Jewish roots to a worldwide Gentile mission. Not every action recorded in Acts is a command for all Christians. Paul circumcised Timothy for missionary reasons, but he fiercely resisted circumcision when it was made a requirement for covenant standing."
      },
      {
        heading: "5. Feast timing in Acts",
        body:
          "Acts 20 says Paul wanted to be in Jerusalem for Pentecost. That shows the calendar still mattered socially and missionally in Jewish settings. It does not say Paul commanded Gentile believers in Asia, Greece, or Rome to keep Pentecost as covenant law."
      },
      {
        heading: "6. Paul's letters clarify his theology",
        body:
          "When Paul's letters address calendar observance as a religious test, his tone changes sharply. Colossians warns against being judged by festival observance. Galatians warns against returning to days, months, times, and years as religious obligation. The letters interpret the historical references."
      },
      {
        heading: "7. Paul used feast language devotionally",
        body:
          "In 1 Corinthians 5, Paul says Christ our Passover is sacrificed for us and then applies unleavened-bread imagery to sincerity and truth. This is a beautiful example of Christian use of feast theology. Paul uses the feast to preach Christ and holiness, not to command a return to the old calendar system."
      },
      {
        heading: "8. What Paul's practice proves",
        body:
          "Paul's practice proves that the feasts remained meaningful as Scripture, memory, and missionary context. It does not prove that the feasts remained binding law. The difference matters because Christians may learn from the feasts without making them tests of obedience."
      },
      {
        heading: "9. What Paul's warnings prove",
        body:
          "Paul's warnings prove that any religious system placing calendar observance between the believer and Christ is spiritually dangerous. The moment feast keeping becomes a badge of superior faithfulness, it contradicts Paul's gospel emphasis."
      },
      {
        heading: "10. The balanced conclusion",
        body:
          "Paul knew the feasts, used their language, and moved wisely in Jewish settings. But his doctrine is clear: Christ is the center. Christians are free to study the feasts as fulfilled gospel symbols, but they are not to judge one another by feast observance."
      }
    ],
    relatedLinks: [{ label: "Read the full feast article", faq: "feasts-keep" }],
  },
  {
    id: "hebrew-calendar-today",
    category: "Practice",
    title: "How Should Christians Use the Hebrew Calendar Today?",
    subtitle: "Study deeply without turning shadows into tests",
    summary:
      "Use the Hebrew calendar as a Christ-centered study map. Do not use it to measure another believer's standing with God.",
    keyTexts: ["Leviticus 23", "Romans 14:5-6", "Colossians 2:16-17", "Hebrews 10:1", "1 Corinthians 5:7-8", "Revelation 14:6-7"],
    sections: [
      {
        heading: "1. A good use begins with Christ",
        wide: true,
        body:
          "The safest Christian use of the Hebrew calendar begins with Christ. The calendar is not a second route to holiness or a hidden requirement for the last generation. It is a Bible study map that helps believers see the order of redemption: sacrifice, resurrection, mission, judgment, cleansing, harvest, and final dwelling with God."
      },
      {
        heading: "2. Use it as a teaching framework",
        body:
          "Pastors, teachers, and families can use the calendar to organize studies on the plan of salvation. Passover can introduce substitution. Firstfruits can introduce resurrection. Pentecost can introduce mission. Trumpets can introduce judgment proclamation. The Day of Atonement can introduce Daniel 8:14. Tabernacles can introduce the final home with God."
      },
      {
        heading: "3. Keep study distinct from obligation",
        body:
          "There is a difference between studying a feast and binding the conscience to observe it. A Christian may preach about Passover without requiring a Passover meal. A family may study Tabernacles without claiming God commands Christians to build booths. Fulfilled symbols can teach without ruling the church calendar."
      },
      {
        heading: "4. Let the weekly Sabbath remain distinct",
        body:
          "The seventh-day Sabbath is rooted in creation and the moral law, while the yearly feasts belong to Israel's ceremonial sanctuary calendar. Confusing these categories can weaken Sabbath theology. Christians should not use the fulfilled feast shadows either to replace the Sabbath or to put the feasts on the same level."
      },
      {
        heading: "5. Use the feasts to enrich, not distract",
        body:
          "The calendar is useful only when it leads the mind to Christ. If people leave a feast study more fascinated with dates than with Jesus, something has gone wrong. The symbols should deepen love for the Lamb, confidence in the Priest, seriousness about judgment, and hope in restoration."
      },
      {
        heading: "6. Avoid spiritual ranking",
        body:
          "Romans 14 warns believers not to despise or judge one another over days when conscience and devotion are involved. No one should imply that Christians who do not observe feast days are less faithful, less enlightened, or less prepared for the end. Christ is the measure of faithfulness, not the calendar."
      },
      {
        heading: "7. A family worship approach",
        body:
          "Families can use feast themes in simple, Christ-centered ways: read the Bible story, explain the sanctuary symbol, connect it to Jesus, pray with gratitude, and avoid acting as though the ritual is being restored. Children should come away feeling the goodness of the gospel, not the pressure of a new rule."
      },
      {
        heading: "8. A church teaching approach",
        body:
          "Churches can teach the feasts through sermons, seminars, visual timelines, sanctuary models, and Bible study guides. The best approach is explanatory rather than performative. The goal is not to recreate ancient Israel's ritual life, but to understand how God used that ritual life to point forward to Christ."
      },
      {
        heading: "9. Warning signs of unhealthy use",
        body:
          "The calendar is being misused when it creates pride, suspicion, date-setting excitement, contempt for other believers, or the idea that feast keeping is necessary for salvation. It is also being misused when it diminishes the sufficiency of Christ's sacrifice or the reality of His heavenly ministry."
      },
      {
        heading: "10. A simple guiding sentence",
        body:
          "Use the Hebrew calendar as a window, not a wall. Let it open the Bible's sanctuary story and show you Christ more clearly. Do not let it become a wall that separates believers from one another or places a fulfilled shadow between the soul and the Savior."
      }
    ],
    relatedLinks: [{ label: "Open Festival Calendar", view: "calendar" }],
  }
];

const polishedFaqArticles = [
  {
    id: "feasts-keep",
    category: "Festival Calendar",
    title: "Should Christians Keep the Feasts?",
    subtitle: "A careful Adventist answer",
    summary:
      "Christians are not under obligation to keep Israel's yearly feast calendar, but the feasts remain a beautiful Bible study map because they point to Christ's sacrifice, resurrection, priestly ministry, judgment, cleansing, and final dwelling with His people.",
    keyTexts: [
      "Leviticus 23",
      "Colossians 2:16-17",
      "Galatians 4:9-11",
      "Hebrews 8-10",
      "1 Corinthians 5:7-8",
      "Romans 14:5-6",
      "Revelation 14:6-7"
    ],
    featured: true,
    quickAnswer: [
      {
        label: "Not a test",
        text:
          "No believer should be judged as less faithful because he or she does not observe the yearly feasts. The New Testament turns our eyes from the shadow to Christ, the living reality."
      },
      {
        label: "Still meaningful",
        text:
          "The feasts are not religious clutter. They are a carefully arranged gospel calendar, teaching sacrifice, deliverance, resurrection, mission, judgment, cleansing, harvest, and homecoming."
      },
      {
        label: "Best use",
        text:
          "Study them as fulfilled sanctuary lessons. Let them deepen your understanding of Jesus without turning them into a new yoke for the conscience."
      }
    ],
    sections: [
      {
        heading: "The real issue",
        wide: true,
        body:
          "The question is not whether the feasts are interesting or whether Christians can learn from them. They are part of Scripture, and Scripture is profitable. The real question is whether the yearly feast calendar still binds Christians as covenant obligation. A balanced answer must honor both sides: God gave the feasts, and they were full of meaning; yet their ritual life belonged to the sanctuary system that pointed forward to Christ."
      },
      {
        heading: "What the feasts were",
        body:
          "Leviticus 23 presents more than a list of religious holidays. The feasts shaped Israel's memory, worship, harvest life, family rhythm, and national identity. They involved holy convocations, rest, offerings, priestly service, and sometimes pilgrimage. Israel did not merely hear about redemption; they rehearsed it year after year in the movement of the calendar."
      },
      {
        heading: "Why they are not binding now",
        body:
          "The feasts were joined to the earthly sanctuary, animal sacrifices, Levitical priesthood, and ceremonial calendar. Once Christ came as the true Lamb and began His priestly ministry in the heavenly sanctuary, the old system could no longer function as covenant requirement in the same way. To make feast observance a test today is to treat the shadow as though the substance has not arrived."
      },
      {
        heading: "What Colossians is protecting",
        body:
          "Colossians 2 does not insult the feasts. It protects believers from being judged by them. Paul calls ceremonial food, drink, festivals, new moons, and sabbath days shadows, while Christ is the body, the substance, the reality. A shadow is useful when it leads you to the person. It becomes harmful when someone insists that standing in the shadow is required after the person has come."
      },
      {
        heading: "What Galatians is warning against",
        body:
          "Galatians warns against turning religious observance into a way of securing covenant standing. Paul is not rebuking thoughtful Bible study; he is resisting a system that makes days, months, times, and years part of spiritual bondage. The danger is subtle. A practice may begin as devotion and then quietly become a badge of superiority or a measure of who is truly faithful."
      },
      {
        heading: "What Hebrews adds",
        body:
          "Hebrews teaches that Christ's sacrifice is once for all and His priesthood is better than the old priesthood. That does not erase the Old Testament; it tells us how to read it. The feasts should now be read through the cross, resurrection, and heavenly ministry of Jesus. They are not a road back to the old sanctuary order, but a window into the Savior who fulfilled it."
      },
      {
        heading: "How each feast teaches Christ",
        body:
          "Passover points to the Lamb of God. Unleavened Bread teaches sincerity and freedom from the old leaven of sin. Firstfruits points to Christ's resurrection. Pentecost points to Spirit-filled mission. Trumpets calls attention to solemn proclamation. The Day of Atonement opens the meaning of judgment and cleansing. Tabernacles looks toward harvest joy and God dwelling with His people forever."
      },
      {
        heading: "Can Christians use feast themes devotionally?",
        body:
          "Yes, if the use remains Christ-centered and voluntary. A family may study Passover to help children understand the cross. A church may teach the Day of Atonement to explain Daniel 8:14. A class may trace the whole calendar as a map of redemption. But the moment the practice becomes a requirement, a spiritual ranking system, or a test of end-time loyalty, it has moved away from the gospel."
      },
      {
        heading: "A pastoral answer",
        wide: true,
        body:
          "So should Christians keep the feasts? Not as binding covenant law. But should Christians study them? Absolutely. The feasts are too rich to ignore and too fulfilled to reimpose. The safest path is to let them do what all sanctuary symbols were meant to do: lead the heart to Jesus, the Lamb who died, the Priest who ministers, the Judge who vindicates, and the King who will dwell with His people."
      }
    ],
    relatedLinks: [
      { label: "Open Festival Calendar", view: "calendar" },
      { label: "Study Daniel 8:14", view: "focus1844" }
    ]
  },
  {
    id: "investigative-judgment",
    category: "1844 Focus",
    title: "Is the Investigative Judgment Biblical?",
    subtitle: "A sanctuary study of judgment, cleansing, and assurance",
    summary:
      "Yes, when it is understood from Scripture rather than caricature. The investigative judgment is the Bible's pre-Advent judgment and sanctuary cleansing, where God reveals the truth, vindicates Christ's saving work, and prepares the universe for the final removal of sin.",
    keyTexts: ["Daniel 7:9-14", "Daniel 8:14", "Daniel 9:24-27", "Leviticus 16", "Hebrews 8:1-2", "Hebrews 9:23-24", "Revelation 14:6-7"],
    featured: true,
    quickAnswer: [
      {
        label: "Not God learning",
        text:
          "God does not investigate because He lacks information. The opened books reveal the truth so His judgments are seen to be righteous."
      },
      {
        label: "Sanctuary logic",
        text:
          "Daily ministry brought forgiveness; the Day of Atonement brought cleansing and removal. Daniel 8:14 lifts that pattern into Christ's heavenly ministry."
      },
      {
        label: "Assurance in Christ",
        text:
          "The believer's safety is not self-confidence. It is Christ, who is sacrifice, priest, advocate, and righteous judge."
      }
    ],
    sections: [
      {
        heading: "Start with the right question",
        wide: true,
        body:
          "The investigative judgment sounds frightening if it is described as God searching for reasons to reject people. That is not the biblical picture. The better question is this: does Scripture show a judgment before the Second Coming, connected with heavenly records, the sanctuary, Christ's priestly ministry, and the final vindication of God's people? When those pieces are allowed to speak together, the doctrine becomes much more biblical, and much more hopeful, than many people expect."
      },
      {
        heading: "Daniel 7 gives the courtroom",
        body:
          "Daniel 7 moves from earthly empires to a heavenly court. Thrones are placed, books are opened, and judgment sits before the Son of man receives the kingdom. This matters because the judgment happens before the kingdom is fully handed to Christ and His saints. It is not an afterthought after the Second Coming; it belongs to the prophetic sequence before the final reward."
      },
      {
        heading: "The books are about transparency",
        body:
          "The opened books do not help God remember. They help the watching universe see. Sin has accused God of being unfair, untrustworthy, and severe. Judgment opens the record so that God's mercy and justice can be seen clearly. The question is not whether God knows the truth, but whether His creatures can see that His saving decisions are righteous."
      },
      {
        heading: "Daniel 8 gives the sanctuary cleansing",
        body:
          "Daniel 8:14 says, 'then shall the sanctuary be cleansed.' That language is not random. It calls the reader back to the Day of Atonement, the yearly service in which the sanctuary was cleansed from the accumulated record of confessed sin. Daniel 8 is therefore not merely about politics. It is about worship, truth, priestly ministry, and the final answer to sin."
      },
      {
        heading: "Daniel 9 anchors the date in Christ",
        body:
          "Daniel 8 gives the 2,300 days but does not give the starting point. Daniel 9 resumes Gabriel's explanation and gives the 70 weeks beginning with the decree to restore and rebuild Jerusalem. That starting point, 457 BC, leads first to Messiah's appearing and death, and then, through the full 2,300 years, to 1844. The timeline is not built around a date alone; it is anchored in Jesus."
      },
      {
        heading: "Leviticus 16 explains the need",
        body:
          "In the daily sanctuary service, repentant sinners were forgiven through sacrifice and priestly ministry. Yet the sanctuary still bore the record of the sins that had been confessed and transferred into God's appointed system. On the Day of Atonement the sanctuary was cleansed, the people were restored, and sin was symbolically removed. Daniel 8:14 uses that same cleansing logic on the level of Christ's heavenly ministry."
      },
      {
        heading: "Hebrews points upward",
        body:
          "Hebrews tells us that Christ ministers in the true sanctuary, not an earthly copy. His sacrifice is complete, but His priestly ministry is real. The cross is the foundation; the heavenly ministry applies and reveals the meaning of the cross. The investigative judgment does not compete with Calvary. It shows the universe what Calvary has accomplished for those who have trusted Christ."
      },
      {
        heading: "Why works appear in judgment",
        body:
          "Scripture connects judgment with works because works reveal the direction of the heart. They do not purchase salvation. They testify whether faith is living or merely claimed. A life may be weak and still belong to Christ, but genuine trust does not cling peacefully to rebellion. Judgment shows the truth about faith, repentance, grace, and transformation."
      },
      {
        heading: "Why this is good news",
        body:
          "The judgment is good news because Christ stands at the center of it. The One who knows the record is the One who died for sinners. The One who opens the books is the One who bears our names before God. The purpose is not to make repentant believers insecure, but to show that no confessed sin will remain forever and no accusation against God's saving work will stand."
      },
      {
        heading: "A simple conclusion",
        wide: true,
        body:
          "The investigative judgment is biblical when it is allowed to arise from Daniel's courtroom, Daniel's sanctuary cleansing, Leviticus 16, Hebrews' heavenly sanctuary, and Revelation's judgment-hour message. It is not God trying to learn something. It is God revealing truth, cleansing the record of sin, vindicating Christ and His people, and preparing the universe for a clean eternity."
      }
    ],
    relatedLinks: [
      { label: "Open 1844 Focus", view: "focus1844" },
      { label: "Open Day of Atonement feast", view: "calendar", feast: "atonement" }
    ]
  },
  {
    id: "antitypical-day-of-atonement",
    category: "1844 Focus",
    title: "What Is the Antitypical Day of Atonement?",
    subtitle: "The earthly cleansing day fulfilled in Christ's final ministry",
    summary:
      "It is the heavenly reality to which Israel's yearly Day of Atonement pointed: Christ's final priestly work of cleansing, judgment, vindication, and preparing His people for the complete removal of sin.",
    keyTexts: ["Leviticus 16", "Leviticus 23:26-32", "Daniel 8:14", "Hebrews 8:1-2", "Hebrews 9:23-28", "Revelation 14:6-7"],
    sections: [
      {
        heading: "The idea in plain language",
        wide: true,
        body:
          "The antitypical Day of Atonement is not another cross and not another sacrifice. Christ's sacrifice was once for all. The antitypical Day of Atonement is the final phase of His heavenly priestly ministry, where the meaning of His sacrifice is applied to the final cleansing of the sanctuary record and the final settling of the controversy over sin."
      },
      {
        heading: "The earthly pattern",
        body:
          "Once a year, Israel entered its most solemn worship day. The high priest washed, wore plain linen garments, offered sacrifice for himself, carried incense within the veil, sprinkled blood before the mercy seat, cleansed the sanctuary and altar, and finally confessed Israel's sins over the live goat. The whole day taught that sin must not only be forgiven; it must finally be removed."
      },
      {
        heading: "Why the antitype matters",
        body:
          "A type is a God-given pattern. An antitype is the greater reality to which the pattern points. The earthly high priest entered an earthly sanctuary with animal blood. Christ ministers in the heavenly sanctuary with the merit of His own sacrifice. The old ritual was a shadow; the antitype is the living ministry of Jesus."
      },
      {
        heading: "What is being cleansed",
        body:
          "The heavenly sanctuary is not dirty in a physical sense. The cleansing deals with the record, claims, and consequences of sin in God's government. Forgiven sin is not ignored, hidden, or left forever unresolved. God brings every case into the light and shows that His mercy is righteous and His judgments are true."
      },
      {
        heading: "The believer's posture",
        body:
          "The Day of Atonement called Israel to humility, confession, and trust. The antitypical Day calls us to the same spirit. This is not a call to panic. It is a call to stop pretending, to bring sin honestly to Christ, and to rest in the High Priest who is able to cleanse completely."
      },
      {
        heading: "The hope at the center",
        body:
          "The best news of the antitypical Day of Atonement is that sin will not always be part of the story. Christ does not merely manage guilt forever. He is bringing history toward a clean sanctuary, a cleansed people, a vindicated God, and a world where sin is gone."
      }
    ],
    relatedLinks: [{ label: "Read the full investigative judgment article", faq: "investigative-judgment" }]
  },
  {
    id: "daniel-7-8-9",
    category: "Prophecy",
    title: "How Do Daniel 7, 8, and 9 Connect?",
    subtitle: "Courtroom, sanctuary, and Messiah in one prophetic flow",
    summary:
      "Daniel 7 shows the heavenly courtroom, Daniel 8 adds the sanctuary cleansing and the 2,300 days, and Daniel 9 supplies the starting point through the Messiah-centered 70-week prophecy.",
    keyTexts: ["Daniel 7:9-14", "Daniel 8:13-14", "Daniel 8:26-27", "Daniel 9:21-27", "Ezra 7", "Mark 1:14-15"],
    sections: [
      {
        heading: "Why the chapters belong together",
        wide: true,
        body:
          "Daniel 7, 8, and 9 are not three unrelated puzzles. They are like three windows into the same end-time sanctuary story. Daniel 7 shows judgment in the heavenly court. Daniel 8 shows the sanctuary under attack and then cleansed. Daniel 9 returns to the unfinished time prophecy and anchors the whole timeline in the coming and death of Messiah."
      },
      {
        heading: "Daniel 7: the court sits",
        body:
          "Daniel 7 begins with kingdoms rising and falling, but it does not end on earth. The scene moves to heaven. Books are opened, judgment sits, and the Son of man receives dominion. This chapter gives the courtroom framework: before the saints receive the kingdom, heaven reviews and answers the claims of the powers that opposed God."
      },
      {
        heading: "Daniel 8: the sanctuary is cleansed",
        body:
          "Daniel 8 uses sanctuary language throughout: ram, goat, horn, daily, sanctuary, truth cast down, and cleansing. The central question becomes, how long will the sanctuary and truth be trampled? The answer is Daniel 8:14: after the 2,300 days, the sanctuary will be cleansed."
      },
      {
        heading: "The missing piece in Daniel 8",
        body:
          "Daniel 8 gives the time period, but Daniel does not receive the full explanation of when it begins. He faints and says he does not understand the vision. That leaves the reader waiting. If God gives a time prophecy but no starting point, the explanation is not complete yet."
      },
      {
        heading: "Gabriel returns in Daniel 9",
        body:
          "Daniel 9 opens with Daniel praying about Jerusalem, forgiveness, and restoration. Gabriel comes back and tells Daniel to understand and consider the vision. That language points back to Daniel 8. Gabriel is not beginning a random new subject; he is continuing the explanation Daniel had not understood."
      },
      {
        heading: "The 70 weeks are the first portion",
        body:
          "Daniel 9 says 70 weeks are determined for Daniel's people and holy city. Adventists understand this as a period marked off from the larger 2,300 years. That is why the 70 weeks and the 2,300 years share the same starting point: the decree to restore and rebuild Jerusalem."
      },
      {
        heading: "Why 457 BC matters",
        body:
          "The decree connected with Ezra 7 in 457 BC fits Daniel's language because it restored Jerusalem's civil and religious life in a meaningful way. From that point the 70 weeks lead to Messiah's appearing, His death in the middle of the final week, and the widening of the gospel mission. The same starting point, carried through the full 2,300 years, reaches 1844."
      },
      {
        heading: "Why this should strengthen faith",
        body:
          "The Daniel timeline does not begin with 1844. It first leads to Jesus. It points to His baptism, His cross, and the gospel going to the world. That means the final judgment message rests on the same prophecy that already proved faithful in the life and death of Christ."
      }
    ],
    relatedLinks: [{ label: "Open Daniel 8-9 study", view: "focus1844" }]
  },
  {
    id: "judgment-not-works",
    category: "Assurance",
    title: "Does Judgment Mean Salvation by Works?",
    subtitle: "Why evidence is not the same as earning salvation",
    summary:
      "No. Judgment does not mean we earn salvation. Works appear in judgment as evidence of living faith, while Christ alone remains the ground of acceptance.",
    keyTexts: ["Ephesians 2:8-10", "Romans 3:24-26", "James 2:17-18", "2 Corinthians 5:10", "Revelation 22:12"],
    sections: [
      {
        heading: "The fear many people feel",
        wide: true,
        body:
          "When people hear that there is a judgment, many imagine God placing good deeds on one side of a scale and sins on the other. If the good outweighs the bad, perhaps they are saved. That is not the gospel. Scripture teaches that sinners are saved by grace, through faith, because of Christ. Judgment does not replace that truth; it reveals whether that truth has been received."
      },
      {
        heading: "Grace comes first",
        body:
          "In the sanctuary, the sinner did not approach God carrying a record of achievement. He came with a sacrifice. That order matters. Acceptance begins with God's provision, not human worthiness. The repentant sinner is safe because God has provided atonement."
      },
      {
        heading: "Works are witnesses",
        body:
          "Works matter in judgment because they tell the truth about the life. They reveal whether faith was alive, whether repentance was real, and whether grace was resisted or welcomed. But a witness is not a savior. Works testify; Christ saves."
      },
      {
        heading: "James and Paul belong together",
        body:
          "Paul rejects works as the basis of salvation. James rejects a dead faith that produces no fruit. They are not fighting each other. Together they tell us that we are saved by grace alone, and that saving grace does not leave the life untouched."
      },
      {
        heading: "What about weak believers?",
        body:
          "The judgment is not looking for flawless self-produced performance. Believers may stumble, grieve, repent, and return. The question is not whether a person ever fell, but whether they kept hiding from Christ or kept coming back to Him. A bruised faith that clings to Jesus is different from cherished rebellion."
      },
      {
        heading: "A sentence worth remembering",
        body:
          "Judgment does not ask, 'Did you save yourself well enough?' It reveals the answer to a different question: 'Did you truly receive the Savior who was given for you?' That is why assurance belongs in Christ, not in our spiritual report card."
      }
    ],
    relatedLinks: [{ label: "Read the full judgment article", faq: "investigative-judgment" }]
  },
  {
    id: "sanctuary-cleansing",
    category: "Sanctuary",
    title: "Why Does the Sanctuary Need Cleansing?",
    subtitle: "Forgiveness, record, and final removal",
    summary:
      "Because the sanctuary is where God chose to handle confessed sin. The sinner was forgiven through sacrifice, but the sanctuary record still required final cleansing and removal.",
    keyTexts: ["Leviticus 4", "Leviticus 6:24-30", "Leviticus 10:16-18", "Leviticus 16", "Daniel 8:14", "Hebrews 9:23"],
    sections: [
      {
        heading: "The question sounds strange at first",
        wide: true,
        body:
          "If the sanctuary is God's dwelling place, why would it need cleansing? The answer is that the sanctuary is not being cleansed from ordinary dust. It is being cleansed from the record and defilement of sin that God has chosen to bear in the process of saving His people."
      },
      {
        heading: "Forgiveness was real",
        body:
          "When a repentant Israelite brought the appointed sacrifice, the message was not, 'Wait until the end of the year to see if God might forgive you.' Forgiveness was real in the daily service. The sinner could leave the court knowing that God had accepted the sacrifice and provided mercy."
      },
      {
        heading: "But sin was not treated lightly",
        body:
          "The sanctuary also taught that sin does not simply disappear as though it never mattered. It wounds relationships, defiles worship, and creates a record that must be dealt with honestly. God forgives without pretending sin is harmless."
      },
      {
        heading: "How sin entered the sanctuary story",
        body:
          "Through blood ministry, priestly mediation, and the priest bearing iniquity in connection with the offering, confessed sin was transferred into the sanctuary system. The guilt left the repentant sinner, but the case now belonged to God's appointed way of handling sin."
      },
      {
        heading: "The Day of Atonement was the yearly answer",
        body:
          "Leviticus 16 shows the sanctuary being cleansed from Israel's uncleanness, transgressions, and sins. This was not a second forgiveness for people who had already confessed. It was the final cleansing of the sanctuary from the accumulated burden of forgiven sin."
      },
      {
        heading: "Why this matters now",
        body:
          "Daniel 8:14 uses the same cleansing language. In Christ's heavenly ministry, God is not merely forgiving individuals; He is bringing the entire sin problem to judgment, cleansing, vindication, and removal. The doctrine says that confessed sin will not remain in God's universe forever."
      },
      {
        heading: "The comfort of cleansing",
        body:
          "The cleansing of the sanctuary is deeply personal. It means God does not keep forgiven sin as a weapon against His people. He carries it toward final removal. The record that once testified against the repentant sinner is answered by the blood and ministry of Christ."
      }
    ],
    relatedLinks: [{ label: "Open 1844 Focus", view: "focus1844" }]
  },
  {
    id: "feasts-nailed-cross",
    category: "Festival Calendar",
    title: "Were the Feasts Nailed to the Cross?",
    subtitle: "What ended, and what still teaches",
    summary:
      "The feast system as binding ceremonial law ended because its sanctuary shadows met their reality in Christ. The lessons remain because fulfilled symbols still teach the Savior.",
    keyTexts: ["Colossians 2:14-17", "Ephesians 2:14-16", "Hebrews 8:13", "Hebrews 10:1-14", "1 Corinthians 5:7-8"],
    sections: [
      {
        heading: "What people usually mean",
        wide: true,
        body:
          "When someone asks whether the feasts were nailed to the cross, they usually mean, 'Are Christians still required to observe them?' The answer is no, not as binding covenant law. But that does not mean the feast chapters should be ignored. The obligation ended; the instruction remains."
      },
      {
        heading: "The shadow and the substance",
        body:
          "Colossians calls the ceremonial calendar a shadow and Christ the substance. A shadow is not evil; it is incomplete. Its purpose is to point beyond itself. Once Christ has come, the Christian does not live under the authority of the shadow, but the shadow can still help us recognize the shape of His saving work."
      },
      {
        heading: "What ended",
        body:
          "The sacrificial, priestly, and ceremonial obligation of the feasts ended as covenant requirement. Christians are not called to restore temple pilgrimage, animal offerings, Levitical ritual, or calendar observance as a test of faithfulness."
      },
      {
        heading: "What remains",
        body:
          "The Bible remains. Passover still preaches substitution. Firstfruits still whispers resurrection. Pentecost still teaches mission. The Day of Atonement still opens judgment and cleansing. Tabernacles still lifts the heart toward the final home with God."
      },
      {
        heading: "The safe balance",
        body:
          "Do not throw away the feasts as if they were meaningless. Do not bind them on Christians as if Christ had not fulfilled them. Study them gratefully, preach them Christ-centeredly, and refuse to let them become a measuring rod for someone else's walk with God."
      }
    ],
    relatedLinks: [{ label: "Read the full feast article", faq: "feasts-keep" }]
  },
  {
    id: "paul-feasts",
    category: "New Testament",
    title: "Did Paul Keep the Feasts, and What Does That Prove?",
    subtitle: "Missionary practice is not the same as covenant requirement",
    summary:
      "Paul's references to feast timing show Jewish context and missionary sensitivity, but they do not make feast observance a Christian requirement.",
    keyTexts: ["Acts 20:16", "Acts 21:20-26", "1 Corinthians 9:19-23", "1 Corinthians 16:8", "Colossians 2:16-17", "Galatians 4:9-11"],
    sections: [
      {
        heading: "Do not overread a travel schedule",
        wide: true,
        body:
          "Paul lived and ministered in a world where Jewish feast seasons still shaped travel, crowds, synagogue life, and conversation. When Acts mentions his desire to be somewhere by a feast, it tells us something about his setting and mission strategy. It does not automatically create a command for every Christian church."
      },
      {
        heading: "Paul was a missionary with Jewish roots",
        body:
          "Paul knew the feasts from the inside. He could speak their language, use their imagery, and move wisely among Jewish people. He also became as a Jew to win Jews and as one outside the law to win Gentiles. His flexibility was missionary love, not a new legal requirement."
      },
      {
        heading: "Acts records transition",
        body:
          "Acts shows the early church moving from a Jewish setting into a worldwide mission. During that transition, Jewish believers still lived near the temple and calendar. But the Jerusalem council did not command Gentile believers to keep the feasts, and Paul's letters warn against being judged by ceremonial observance."
      },
      {
        heading: "Paul's letters clarify Paul",
        body:
          "If we want to know whether Paul made feast keeping obligatory, we should read his letters. Colossians says not to let anyone judge believers regarding festivals. Galatians warns against returning to days and seasons as bondage. Those statements must guide how we read the historical details in Acts."
      },
      {
        heading: "How Paul used feast language",
        body:
          "Paul could say, 'Christ our Passover is sacrificed for us,' and then draw a spiritual lesson about sincerity and truth. That is the healthiest Christian use of feast language: not restoring the old calendar as law, but letting the fulfilled symbol preach Christ and shape the heart."
      },
      {
        heading: "What Paul's practice proves",
        body:
          "Paul's practice proves that the feasts remained meaningful as Scripture, memory, and mission context. It does not prove that feast keeping is required. Christians may learn from the feasts without judging one another by them."
      }
    ],
    relatedLinks: [{ label: "Read the full feast article", faq: "feasts-keep" }]
  },
  {
    id: "hebrew-calendar-today",
    category: "Practice",
    title: "How Should Christians Use the Hebrew Calendar Today?",
    subtitle: "Study deeply without turning shadows into tests",
    summary:
      "Use the Hebrew calendar as a Christ-centered study map, not as a measure of another believer's standing with God.",
    keyTexts: ["Leviticus 23", "Romans 14:5-6", "Colossians 2:16-17", "Hebrews 10:1", "1 Corinthians 5:7-8", "Revelation 14:6-7"],
    sections: [
      {
        heading: "Begin with Jesus",
        wide: true,
        body:
          "The Hebrew calendar is safest in Christian hands when it begins and ends with Jesus. It is not a hidden ladder to holiness or a secret test for the last days. It is a Bible study map that helps us trace the saving work of Christ from sacrifice to final dwelling with God."
      },
      {
        heading: "Use it to teach the story of redemption",
        body:
          "A teacher can use Passover to explain substitution, Firstfruits to explain resurrection, Pentecost to explain mission, Trumpets to explain proclamation, the Day of Atonement to explain judgment and cleansing, and Tabernacles to explain the joy of final restoration."
      },
      {
        heading: "Keep study separate from obligation",
        body:
          "A Christian may study a feast without being bound to observe it. A family may use feast themes in worship without claiming the ancient ritual has been restored. A church may teach the calendar without making it part of membership, righteousness, or end-time readiness."
      },
      {
        heading: "Do not confuse the yearly feasts with the Sabbath",
        body:
          "The seventh-day Sabbath is rooted in creation and the moral law. The yearly feasts belonged to Israel's ceremonial sanctuary calendar. Keeping that distinction clear protects both Sabbath truth and the gospel freedom found in Christ."
      },
      {
        heading: "Watch the fruit",
        body:
          "A healthy study of the Hebrew calendar produces gratitude, humility, deeper love for Christ, and clearer understanding of the sanctuary. An unhealthy use produces pride, suspicion, pressure, date excitement, or judgmental attitudes toward believers who do not observe the feasts."
      },
      {
        heading: "A simple guiding sentence",
        body:
          "Use the Hebrew calendar as a window, not a wall. Let it open the sanctuary story and show you Christ more clearly. Do not let it become a wall between believers or a shadow placed between the soul and the Savior."
      }
    ],
    relatedLinks: [{ label: "Open Festival Calendar", view: "calendar" }]
  }
];

const faqArticleMap = Object.fromEntries(polishedFaqArticles.map(article => [article.id, article]));

const CUBIT_MODEL = {
  court: { length: 100, width: 50, fenceHeight: 5, gateWidth: 20 },
  tabernacle: { length: 30, width: 10, height: 10, holyPlaceLength: 20, mostHolyLength: 10 },
  altar: { length: 5, width: 5, height: 3 },
  ark: { length: 2.5, width: 1.5, height: 1.5 },
  table: { length: 2, width: 1, height: 1.5 },
  incense: { length: 1, width: 1, height: 2 },
  laver: { diameter: 2.2, height: 1.2, approximate: true },
  lampstand: { width: 1.4, depth: 1.1, height: 2.8, approximate: true }
};

const courtBounds = {
  west: -CUBIT_MODEL.court.length / 2,
  east: CUBIT_MODEL.court.length / 2,
  north: -CUBIT_MODEL.court.width / 2,
  south: CUBIT_MODEL.court.width / 2
};

const tabernacleBounds = {
  west: courtBounds.west + 5,
  east: courtBounds.west + 5 + CUBIT_MODEL.tabernacle.length,
  north: -CUBIT_MODEL.tabernacle.width / 2,
  south: CUBIT_MODEL.tabernacle.width / 2
};
tabernacleBounds.veil = tabernacleBounds.west + CUBIT_MODEL.tabernacle.mostHolyLength;

const sceneObjects = [
  { id: "gate", label: "The Courtyard Gate", x: courtBounds.east, z: 0, w: 0.8, d: CUBIT_MODEL.court.gateWidth, h: CUBIT_MODEL.court.fenceHeight, color: "#d98f34", gate: true, exact: true },
  { id: "posts", label: "Courtyard Posts and Linen Fence", x: 0, z: courtBounds.south, w: CUBIT_MODEL.court.length, d: 0.5, h: CUBIT_MODEL.court.fenceHeight, color: "#e8e3d5", hidden: true, exact: true },
  { id: "altar", label: "Altar of Burnt Offering", x: 25, z: 0, w: CUBIT_MODEL.altar.length, d: CUBIT_MODEL.altar.width, h: CUBIT_MODEL.altar.height, color: "#9f5a25", fire: true, exact: true },
  { id: "laver", label: "The Laver", x: 5, z: 0, w: CUBIT_MODEL.laver.diameter, d: CUBIT_MODEL.laver.diameter, h: CUBIT_MODEL.laver.height, color: "#87b8cf", round: true, approximate: true },
  { id: "lampstand", label: "Golden Lampstand", x: -24, z: 2.8, w: CUBIT_MODEL.lampstand.width, d: CUBIT_MODEL.lampstand.depth, h: CUBIT_MODEL.lampstand.height, color: "#e2b83b", approximate: true },
  { id: "shewbread", label: "Table of Shewbread", x: -24, z: -2.8, w: CUBIT_MODEL.table.length, d: CUBIT_MODEL.table.width, h: CUBIT_MODEL.table.height, color: "#c38b37", exact: true },
  { id: "incense", label: "Altar of Incense", x: tabernacleBounds.veil + 1.1, z: 0, w: CUBIT_MODEL.incense.length, d: CUBIT_MODEL.incense.width, h: CUBIT_MODEL.incense.height, color: "#d4a543", exact: true },
  { id: "ark", label: "Ark of the Covenant", x: tabernacleBounds.west + CUBIT_MODEL.tabernacle.mostHolyLength / 2, z: 0, w: CUBIT_MODEL.ark.length, d: CUBIT_MODEL.ark.width, h: CUBIT_MODEL.ark.height, color: "#d6ad39", exact: true }
];

let currentView = "structure";
let scene;
const ministryViews = [
  {
    id: "sacrifices",
    title: "Sacrifices",
    subtitle: "The five major offerings",
    icon: "target"
  },
  {
    id: "specialCeremonies",
    title: "Special Ceremonies",
    subtitle: "Restoration and dedication rites",
    icon: "stack"
  },
  {
    id: "services",
    title: "Services",
    subtitle: "Daily and yearly ministry",
    icon: "flame"
  }
];
const ministryLegacyViews = new Set(ministryViews.map(view => view.id));
let ministryState = {
  active: "sacrifices"
};
let attireState = {
  group: "high",
  garmentId: "breastplate"
};
let chronicleState = {
  perspective: null,
  storyId: null,
  sceneIndex: 0
};
let faqState = {
  articleId: "feasts-keep"
};

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}

function html(strings, ...values) {
  return strings.reduce((out, str, i) => out + str + (values[i] ?? ""), "");
}

function renderPhases() {
  qs("#phase-list").innerHTML = phases
    .map(
      phase => html`
        <section class="phase-section" id="${phase.id}">
          <p class="eyebrow">${phase.label}</p>
          <h2>${phase.title}</h2>
          <p class="phase-summary">${phase.summary}</p>
          <div class="article-card-grid article-card-grid--${phase.layout}">
            ${phase.articles
              .map(id => {
                const article = articles[id];
                return html`
                  <button class="article-card" type="button" data-open-article="${id}">
                    <span class="card-symbol" style="--symbol-bg: ${article.color}">${article.icon}</span>
                    <span>
                      <h3>${article.title}</h3>
                      <p>${article.subtitle}</p>
                    </span>
                  </button>
                `;
              })
              .join("")}
          </div>
        </section>
      `
    )
    .join("");
}

function renderRitualStudyDetail(targetSelector, item) {
  qs(targetSelector).innerHTML = html`
    <header>
      <div>
        <span class="offering-badge">${item.badge}</span>
        <h2>${item.title}</h2>
        <p class="source-line">${item.text}</p>
        <p class="offering-summary">${item.summary}</p>
      </div>
      <span class="offering-icon" aria-hidden="true">${item.icon}</span>
    </header>
    <div class="offering-columns">
      ${item.columns.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
    </div>
    <div class="offering-ritual">
      <h3>Ritual Form: Distinctive Logic</h3>
      <div class="ritual-grid">
        ${item.ritualForm.map(([title, text]) => `<article><strong>${title}</strong><p>${text}</p></article>`).join("")}
      </div>
    </div>
  `;
}

function renderMinistry(activeId = "sacrifices") {
  const activeView = ministryViews.find(view => view.id === activeId) || ministryViews[0];
  ministryState.active = activeView.id;

  qs("#ministry-content").innerHTML = html`
    <div class="ministry-switcher" role="tablist" aria-label="Sanctuary ministry sections">
      ${ministryViews
        .map(view => {
          return html`
            <button
              type="button"
              class="ministry-switch-card ${view.id === activeView.id ? "active" : ""}"
              data-ministry-view="${view.id}"
              role="tab"
              aria-selected="${view.id === activeView.id ? "true" : "false"}"
            >
              <span class="ministry-icon ministry-icon--${view.id}" aria-hidden="true"></span>
              <strong>${view.title}</strong>
              <small>${view.subtitle}</small>
            </button>
          `;
        })
        .join("")}
    </div>

    <div class="ministry-panel" data-active-ministry="${activeView.id}">
      ${
        activeView.id === "sacrifices"
          ? html`
              <div class="ministry-subintro">
                <p class="eyebrow">Leviticus 1-7</p>
                <h2>The Sacrificial System</h2>
                <p>Understanding the types, shadows, and modern application of the five major offerings.</p>
              </div>
              <div id="offering-tabs" class="offering-tabs" role="tablist" aria-label="Sacrificial offerings"></div>
              <article id="offering-detail" class="offering-detail"></article>
            `
          : ""
      }
      ${
        activeView.id === "specialCeremonies"
          ? html`
              <div class="ministry-subintro">
                <p class="eyebrow">Special rites and restorations</p>
                <h2>Special Sacrifices and Ceremonies</h2>
                <p>Unusual sanctuary rites that reveal cleansing, consecration, restoration, covenant identity, and belonging to God.</p>
              </div>
              <div id="special-ceremony-tabs" class="offering-tabs special-ceremony-tabs" role="tablist" aria-label="Special sacrifices and ceremonies"></div>
              <article id="special-ceremony-detail" class="offering-detail special-ceremony-detail"></article>
            `
          : ""
      }
      ${
        activeView.id === "services"
          ? html`
              <div class="ministry-subintro">
                <p class="eyebrow">Daily and yearly ministry</p>
                <h2>Services of the Sanctuary</h2>
                <p>The sanctuary rhythm teaches confession, mediation, transfer of sin, cleansing, judgment, and final restoration.</p>
              </div>
              <div id="services-content"></div>
            `
          : ""
      }
    </div>
  `;

  if (activeView.id === "sacrifices") renderOfferingTabs();
  if (activeView.id === "specialCeremonies") renderSpecialCeremonyTabs();
  if (activeView.id === "services") renderServices();
}

function renderOfferingTabs(activeId = offerings[0].id) {
  qs("#offering-tabs").innerHTML = offerings
    .map(
      offering => `<button type="button" class="${offering.id === activeId ? "active" : ""}" data-offering="${offering.id}">${offering.tab}</button>`
    )
    .join("");
  renderOfferingDetail(activeId);
}

function renderOfferingDetail(id) {
  const offering = offerings.find(item => item.id === id) || offerings[0];
  renderRitualStudyDetail("#offering-detail", offering);
}

function renderSpecialCeremonyTabs(activeId = specialCeremonies[0].id) {
  qs("#special-ceremony-tabs").innerHTML = specialCeremonies
    .map(
      ceremony =>
        `<button type="button" class="${ceremony.id === activeId ? "active" : ""}" data-special-ceremony="${ceremony.id}">${ceremony.tab}</button>`
    )
    .join("");
  renderSpecialCeremonyDetail(activeId);
}

function renderSpecialCeremonyDetail(id) {
  const ceremony = specialCeremonies.find(item => item.id === id) || specialCeremonies[0];
  renderRitualStudyDetail("#special-ceremony-detail", ceremony);
}

function renderServices(activeId = serviceStudies[0].id || "daily") {
  const activeService = serviceStudies.find(service => service.id === activeId) || serviceStudies[0];
  qs("#services-content").innerHTML = html`
    <div class="service-tabs" role="tablist" aria-label="Sanctuary services">
      ${serviceStudies.map(service => `<button type="button" class="${service.id === activeService.id ? "active" : ""}" data-service="${service.id}">${service.tab}</button>`).join("")}
    </div>
    <article class="service-study-card">
      <header>
        <span class="offering-badge">${activeService.label}</span>
        <h2>${activeService.title}</h2>
        <p>${activeService.summary}</p>
      </header>
      <div class="service-study-layout">
        <div class="service-flow">
          <h3>What Happened</h3>
          ${activeService.steps
            .map(([title, text], index) => `<section><span>${String(index + 1).padStart(2, "0")}</span><div><h4>${title}</h4><p>${text}</p></div></section>`)
            .join("")}
        </div>
        <aside class="service-typology">
          <h3>The Typology</h3>
          ${activeService.typology.map(([title, text]) => `<div><h4>${title}</h4><p>${text}</p></div>`).join("")}
          <p class="source-line">${activeService.texts}</p>
        </aside>
      </div>
    </article>
  `;
}

function renderAttireFigure(group, items, activeGarment) {
  return html`
    <div
      class="attire-figure attire-figure--${group.id} attire-figure--active-${activeGarment.zone}"
      style="--active-garment-accent: ${activeGarment.accent};"
      aria-label="${group.label} garment silhouette"
    >
      <div class="attire-selected-chip">
        <span>Selected garment</span>
        <strong>${activeGarment.name}</strong>
      </div>
      <div class="attire-person" aria-hidden="true">
        <span class="attire-person__halo"></span>
        <span class="attire-person__turban"></span>
        <span class="attire-person__plate"></span>
        <span class="attire-person__head"></span>
        <span class="attire-person__face"></span>
        <span class="attire-person__beard"></span>
        <span class="attire-person__neck"></span>
        <span class="attire-person__shoulders"></span>
        <span class="attire-person__arm attire-person__arm--left"></span>
        <span class="attire-person__arm attire-person__arm--right"></span>
        <span class="attire-person__hand attire-person__hand--left"></span>
        <span class="attire-person__hand attire-person__hand--right"></span>
        <span class="attire-person__inner-tunic"></span>
        <span class="attire-person__robe"></span>
        <span class="attire-person__ephod"></span>
        <span class="attire-person__ephod-strap attire-person__ephod-strap--left"></span>
        <span class="attire-person__ephod-strap attire-person__ephod-strap--right"></span>
        <span class="attire-person__shoulder-stone attire-person__shoulder-stone--left"></span>
        <span class="attire-person__shoulder-stone attire-person__shoulder-stone--right"></span>
        <span class="attire-person__breastplate"></span>
        <span class="attire-person__urim-thummim"></span>
        <span class="attire-person__breastplate-cords"></span>
        <span class="attire-person__sash"></span>
        <span class="attire-person__hem"></span>
        <span class="attire-person__legs"></span>
        <span class="attire-person__feet"></span>
      </div>
      <div class="attire-hotspot-layer">
        ${items
          .map(
            garment => html`
              <button
                type="button"
                class="attire-hotspot attire-hotspot--${garment.zone} ${garment.id === activeGarment.id ? "active" : ""}"
                data-attire-garment="${garment.id}"
                style="--garment-accent: ${garment.accent};"
                aria-label="Select ${garment.name}"
              >
                <span>${garment.name}</span>
              </button>
            `
          )
          .join("")}
      </div>
      <p class="attire-figure-hint">Hover or click the garment itself, or use the study list.</p>
    </div>
  `;
}

function renderAttireDetail(garment, group) {
  const detailSections = [
    ["What It Was", garment.description],
    ["What It Meant", garment.meaning],
    ["How It Points to Christ", garment.typology],
    ["Application for Us", garment.application]
  ];

  return html`
    <aside class="attire-detail-panel" aria-live="polite">
      <header>
        <span class="offering-badge">${group.label}</span>
        <h2>${garment.name}</h2>
        <p>${garment.shortMeaning}</p>
      </header>
      <div class="attire-detail-grid">
        ${detailSections
          .map(
            ([title, text]) => html`
              <article>
                <h3>${title}</h3>
                <p>${text}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <section class="attire-source-note">
        <h3>Scripture References</h3>
        <p class="source-line">${garment.scripture}</p>
      </section>
    </aside>
  `;
}

function renderPriestlyAttire(groupId = attireState.group, garmentId = attireState.garmentId) {
  const group = attireGroups.find(item => item.id === groupId) || attireGroups.find(item => item.id === "high") || attireGroups[0];
  const items = priestlyAttire.filter(item => item.group === group.id);
  const activeGarment = items.find(item => item.id === garmentId) || attireById[group.defaultGarment] || items[0];
  attireState = {
    group: group.id,
    garmentId: activeGarment.id
  };

  qs("#attire-content").innerHTML = html`
    <article class="attire-intro-card">
      <div>
        <span class="offering-badge">Why clothing matters</span>
        <h2>Garments were theology, not costume.</h2>
      </div>
      <p>
        Priestly clothing taught Israel how a holy God could be approached: through appointed
        mediation, cleansing, representation, judgment, beauty, service, and consecrated access.
        The garments helped worshipers see that priestly ministry was not casual performance; it was
        a visible sermon about the work Christ would fulfill.
      </p>
    </article>

    <div class="attire-toggle-row" role="tablist" aria-label="Priestly attire groups">
      ${attireGroups
        .map(
          item => html`
            <button
              type="button"
              class="${item.id === group.id ? "active" : ""}"
              data-attire-group="${item.id}"
              aria-pressed="${item.id === group.id ? "true" : "false"}"
            >
              <strong>${item.label}</strong>
              <span>${item.summary}</span>
            </button>
          `
        )
        .join("")}
    </div>

    <div class="attire-layout">
      <section class="attire-wardrobe-card">
        <div class="attire-wardrobe-heading">
          <span>${group.label}</span>
          <h2>Interactive wardrobe</h2>
          <p>Click a garment zone or choose from the list below.</p>
        </div>
        <div class="attire-wardrobe-body">
          ${renderAttireFigure(group, items, activeGarment)}
          <div class="attire-garment-list" role="list" aria-label="${group.label} garments">
            ${items
              .map(
                garment => html`
                  <button
                    type="button"
                    class="${garment.id === activeGarment.id ? "active" : ""}"
                    data-attire-garment="${garment.id}"
                    role="listitem"
                    style="--garment-accent: ${garment.accent};"
                  >
                    <span></span>
                    <strong>${garment.name}</strong>
                    <small>${garment.shortMeaning}</small>
                  </button>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      ${renderAttireDetail(activeGarment, group)}
    </div>
  `;
}

function renderFeastTabs(activeId = feasts[0].id) {
  qs("#feast-tabs").innerHTML = feasts
    .map(feast => `<button type="button" class="${feast.id === activeId ? "active" : ""}" data-feast="${feast.id}">${feast.name}</button>`)
    .join("");
  renderFeastDetail(activeId);
}

function renderFeastProcedure(feast) {
  return html`
    <section class="feast-procedure-visual">
      <div class="feast-section-heading">
        <span>Ritual sequence</span>
        <h3>Procedure Flow</h3>
        <p>${feast.procedure}</p>
      </div>
      <div class="procedure-flow">
        ${feast.procedureSteps
          .map(
            (step, index) => html`
              <article class="procedure-step">
                <span class="procedure-step-number">${String(index + 1).padStart(2, "0")}</span>
                <span class="procedure-step-icon" aria-hidden="true">${feastProcedureIcons[step.icon] || iconSvg.shield}</span>
                <h4>${step.title}</h4>
                <p>${step.detail}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFeastDetail(id) {
  const feast = feasts.find(item => item.id === id) || feasts[0];
  const scholarQuotes = Array.isArray(feast.scholar?.quotes)
    ? feast.scholar.quotes
    : [{ quote: feast.scholar.quote, source: feast.scholar.source, insight: feast.scholar.note }];
  const feastRoot = qs("#feast-detail");
  feastRoot.style.setProperty("--feast-accent", feast.accent || "#d79b2f");

  feastRoot.innerHTML = html`
    <header class="feast-hero">
      <div>
        <span class="feast-season">${feast.season}</span>
        <h2>${feast.name}</h2>
        <p class="feast-movement">${feast.movement}</p>
        <div class="feast-meta">
          <span>${feast.date}</span>
          <span>${feast.texts}</span>
        </div>
      </div>
      <span class="feast-icon" aria-hidden="true">${iconSvg.calendar || iconSvg.clock}</span>
    </header>
    ${renderFaqContextLink(
      "feasts-keep",
      "Should Christians keep the feasts?",
      "Study the balanced Adventist answer: not binding as covenant law, still rich as Christ-centered sanctuary teaching."
    )}
    ${
      feast.id === "atonement"
        ? html`
            ${renderStudyContextLink(
              "1844 Focus",
              "Open the Daniel 8:14 study",
              "See how the Day of Atonement pattern becomes the antitypical cleansing of the heavenly sanctuary.",
              "focus1844"
            )}
            ${renderFaqContextLink(
              "investigative-judgment",
              "How does this connect to the investigative judgment?",
              "Trace the Day of Atonement pattern into Daniel 8:14, Hebrews, and Christ's present heavenly ministry."
            )}
          `
        : ""
    }
    ${renderFeastProcedure(feast)}
    <div class="feast-meaning-grid">
      <section class="feast-meaning-card">
        <span class="feast-card-kicker">Why it mattered</span>
        <h3>Special Significance</h3>
        <p>${feast.significance}</p>
      </section>
      <section class="feast-meaning-card feast-fulfillment">
        <span class="feast-card-kicker">Where it points</span>
        <h3>Typology and Fulfillment</h3>
        <p>${feast.fulfillment}</p>
      </section>
    </div>
    <section class="scholar-note feast-scholar">
      <span class="scholar-kicker">Curated scholarly insights</span>
      <div class="scholar-quote-list">
        ${scholarQuotes
          .map(
            item => html`
              <figure>
                <blockquote>"${item.quote}"</blockquote>
                <figcaption>${item.source}</figcaption>
                <p>${item.insight}</p>
              </figure>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFaqContextLink(id, title, text) {
  return html`
    <aside class="faq-context-link">
      <div>
        <span>Related FAQ</span>
        <strong>${title}</strong>
        <p>${text}</p>
      </div>
      <button type="button" data-faq-open="${id}">Read Study</button>
    </aside>
  `;
}

function renderStudyContextLink(kicker, title, text, view) {
  return html`
    <aside class="faq-context-link">
      <div>
        <span>${kicker}</span>
        <strong>${title}</strong>
        <p>${text}</p>
      </div>
      <button type="button" data-view="${view}">Open Study</button>
    </aside>
  `;
}

function renderFaq(activeId = faqState.articleId || "feasts-keep") {
  const root = qs("#faq-root");
  if (!root) return;
  const activeArticle = faqArticleMap[activeId] || polishedFaqArticles[0];
  faqState.articleId = activeArticle.id;

  root.innerHTML = html`
    <div class="faq-picker" aria-label="FAQ article selector">
      <div class="faq-picker-copy">
        <span>Choose a study</span>
        <strong>${activeArticle.title}</strong>
      </div>
      <label class="faq-picker-control">
        <span>Question</span>
        <select data-faq-select aria-label="Choose FAQ article">
          ${polishedFaqArticles
            .map(
              article => html`
                <option value="${article.id}" ${article.id === activeArticle.id ? "selected" : ""}>
                  ${article.category}: ${article.title}
                </option>
              `
            )
            .join("")}
        </select>
      </label>
    </div>
    <div class="faq-layout faq-layout--dropdown">
      ${renderFaqArticle(activeArticle)}
    </div>
  `;
}

function faqSectionId(articleId, index) {
  return `faq-${articleId}-section-${index + 1}`;
}

function renderFaqArticle(article) {
  const tocItems = article.sections.map((section, index) => ({
    id: faqSectionId(article.id, index),
    number: String(index + 1).padStart(2, "0"),
    heading: section.heading.replace(/^\d+\.\s*/, "")
  }));

  return html`
    <article class="faq-reader faq-article-shell">
      <header class="faq-reader-header">
        <span class="faq-category">${article.category}</span>
        <h2>${article.title}</h2>
        <p>${article.subtitle}</p>
        <div class="faq-key-texts" aria-label="Key Bible passages">
          ${article.keyTexts.map(text => `<span>${text}</span>`).join("")}
        </div>
      </header>

      <section class="faq-short-answer">
        <span>Short answer</span>
        <p>${article.summary}</p>
      </section>

      ${
        article.quickAnswer
          ? html`
              <section class="faq-at-glance" aria-label="At a glance">
                <h3>At a glance</h3>
                <div>
                ${article.quickAnswer
                  .map(
                    point => html`
                      <article>
                        <span>${point.label}</span>
                        <p>${point.text}</p>
                      </article>
                    `
                  )
                  .join("")}
                </div>
              </section>
            `
          : ""
      }

      <div class="faq-article-main">
        <nav class="faq-article-toc" aria-label="In this article">
          <span>In this article</span>
          ${tocItems
            .map(
              item => html`
                <button type="button" data-faq-jump="${item.id}">
                  <small>${item.number}</small>
                  ${item.heading}
                </button>
              `
            )
            .join("")}
        </nav>

        <div class="faq-article-body">
          ${article.sections
            .map(
              (section, index) => html`
                <section class="faq-article-section" id="${faqSectionId(article.id, index)}">
                  <div class="faq-section-marker">${String(index + 1).padStart(2, "0")}</div>
                  <h3>${section.heading.replace(/^\d+\.\s*/, "")}</h3>
                  <p>${section.body}</p>
                </section>
              `
            )
            .join("")}
        </div>
      </div>

      ${renderFaqRelatedLinks(article)}
    </article>
  `;
}

function renderFaqRelatedLinks(article) {
  if (!article.relatedLinks?.length) return "";
  return html`
    <section class="faq-related-links" aria-label="Related study links">
      <span>Related studies</span>
      <div>
        ${article.relatedLinks
          .map(link => {
            const attrs = link.faq
              ? `data-faq-open="${link.faq}"`
              : link.feast
                ? `data-view="${link.view}" data-feast-link="${link.feast}"`
                : `data-view="${link.view}"`;
            return `<button type="button" ${attrs}>${link.label}</button>`;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderChronicles() {
  const root = qs("#chronicles-root");
  if (!root) return;

  if (chronicleState.storyId) {
    renderChronicleDeck(root);
    return;
  }

  if (chronicleState.perspective) {
    renderChronicleServiceChoice(root);
    return;
  }

  renderChroniclePerspectiveChoice(root);
}

function renderChroniclePerspectiveChoice(root) {
  root.innerHTML = html`
    <div class="chronicle-opening chronicle-opening--choices">
      <div class="chronicle-choice-grid chronicle-choice-grid--perspectives">
        ${Object.entries(chroniclePerspectiveInfo)
          .map(
            ([id, item]) => html`
              <button type="button" class="chronicle-choice-card chronicle-choice-card--${id}" data-chronicle-perspective="${id}">
                <span class="chronicle-choice-icon" aria-hidden="true">${id === "priest" ? iconSvg.flame : iconSvg.users}</span>
                <span class="chronicle-card-kicker">${item.label}</span>
                <strong>${item.title}</strong>
                <small>${item.text}</small>
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderChronicleServiceChoice(root) {
  const perspective = chroniclePerspectiveInfo[chronicleState.perspective];
  const stories = chronicleStories.filter(story => story.perspective === chronicleState.perspective);
  root.innerHTML = html`
    <div class="chronicle-service-select">
      <button type="button" class="chronicle-back-link" data-chronicle-back="perspectives">
        <span aria-hidden="true">${iconSvg.chevronLeft}</span>
        Back to perspectives
      </button>
      <div class="chronicle-opening-copy">
        <span class="offering-badge">${perspective.label}</span>
        <h2>Choose the service</h2>
        <p>${perspective.text}</p>
      </div>
      <div class="chronicle-choice-grid chronicle-choice-grid--services">
        ${stories
          .map(story => {
            const isDaily = story.serviceType === "daily";
            const serviceTitle = isDaily ? "The Daily Ministry" : "Yom Kippur";
            const serviceText = isDaily
              ? "The routine of grace and blood."
              : "The Day of Atonement.";
            return html`
              <button type="button" class="chronicle-choice-card chronicle-choice-card--service chronicle-choice-card--${isDaily ? "daily" : "atonement"}" data-chronicle-story="${story.id}">
                <span class="chronicle-choice-icon" aria-hidden="true">${isDaily ? iconSvg.sun : iconSvg.clock}</span>
                <span class="chronicle-card-kicker">${story.serviceLabel}</span>
                <strong>${serviceTitle}</strong>
                <small>${serviceText}</small>
              </button>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderChronicleDeck(root) {
  const story = chronicleStoryMap[chronicleState.storyId];
  if (!story) {
    chronicleState.storyId = null;
    renderChronicles();
    return;
  }

  const index = Math.max(0, Math.min(story.scenes.length - 1, chronicleState.sceneIndex));
  chronicleState.sceneIndex = index;
  const sceneData = story.scenes[index];
  const companion = getChronicleCompanion(story.id, index);
  const progress = Math.round(((index + 1) / story.scenes.length) * 100);
  const previousDisabled = index === 0 ? "disabled" : "";
  const nextDisabled = index === story.scenes.length - 1 ? "disabled" : "";

  root.innerHTML = html`
    <article class="chronicle-deck" style="--chronicle-progress: ${progress}%">
      <header class="chronicle-deck-header">
        <div>
          <span class="offering-badge">${story.serviceLabel}</span>
          <h2>${story.title}</h2>
          <p>${story.subtitle}</p>
        </div>
        <button type="button" class="ghost-button" data-chronicle-back="services">Choose another path</button>
      </header>

      <div class="chronicle-progress-rail" aria-label="Story progress">
        <div class="chronicle-progress-track" aria-hidden="true"></div>
        <div class="chronicle-progress-markers">
          ${story.scenes
            .map(
              (item, markerIndex) => html`
                <button
                  type="button"
                  class="${markerIndex === index ? "active" : ""}"
                  data-chronicle-scene="${markerIndex}"
                  aria-label="Open scene ${markerIndex + 1}: ${item.title}"
                >
                  ${markerIndex + 1}
                </button>
              `
            )
            .join("")}
        </div>
      </div>

      <div class="chronicle-scene-layout">
        <button type="button" class="chronicle-side-arrow chronicle-side-arrow--prev" data-chronicle-prev aria-label="Previous scene" ${previousDisabled}>
          ${iconSvg.chevronLeft}
        </button>
        <section class="chronicle-story-panel chronicle-story-panel--text-only">
          <p class="chronicle-time">${sceneData.timeLabel} <span>Scene ${index + 1} of ${story.scenes.length}</span></p>
          <h3>${sceneData.title}</h3>
          <p class="chronicle-narrative">${sceneData.narrative}</p>
          <div class="chronicle-companion-notes">
            <aside class="chronicle-companion chronicle-companion--promise">
              <strong>Promise in this moment</strong>
              <p>${companion.promise}</p>
            </aside>
            <aside class="chronicle-companion chronicle-companion--meaning">
              <strong>Sanctuary meaning</strong>
              <p>${companion.meaning}</p>
            </aside>
          </div>
          <p class="chronicle-scripture">${sceneData.scripture}</p>
        </section>
        <button type="button" class="chronicle-side-arrow chronicle-side-arrow--next" data-chronicle-next aria-label="Next scene" ${nextDisabled}>
          ${iconSvg.chevronRight}
        </button>
      </div>
    </article>
  `;
}

function setChronicleScene(index) {
  const story = chronicleStoryMap[chronicleState.storyId];
  if (!story) return;
  chronicleState.sceneIndex = Math.max(0, Math.min(story.scenes.length - 1, index));
  renderChronicles();
}

function renderFocusHeroChain() {
  return html`
    <div class="focus-hero-chain" aria-label="Sanctuary cleansing logic chain">
      ${focusHeroChain
        .map(
          (item, index) => html`
            <div class="focus-chain-step">
              <span>${index + 1}</span>
              <strong>${item.title}</strong>
              <small>${item.text}</small>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderFocusLogicFlow() {
  return html`
    <section class="focus-logic-section" aria-labelledby="focus-logic-title">
      <div class="focus-section-heading">
        <span class="offering-badge">Sanctuary logic flow</span>
        <h3 id="focus-logic-title">Why a sanctuary needs cleansing</h3>
        <p>
          The daily service solved the sinner's guilt, but it also taught that sin leaves a record
          that God must finally remove. Daniel 8:14 uses that Day-of-Atonement logic and lifts it
          to Christ's heavenly ministry.
        </p>
      </div>
      <div class="focus-logic-grid">
        ${focusLogicSteps
          .map(
            step => html`
              <article class="focus-logic-card">
                <div class="focus-logic-icon" aria-hidden="true">${iconSvg[step.icon] || iconSvg.shield}</div>
                <span>${step.kicker}</span>
                <h4>${step.title}</h4>
                <p>${step.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFocusDanielLink() {
  return html`
    <section class="focus-daniel-link-section" aria-labelledby="focus-daniel-link-title">
      <div class="focus-section-heading">
        <span class="offering-badge">Daniel 8 and Daniel 9</span>
        <h3 id="focus-daniel-link-title">Why both prophecies begin in 457 BC</h3>
        <p>
          Daniel 8 gives the problem and the long time period. Daniel 9 gives the missing starting
          point. Read together, they form one explanation: the 70 weeks are the first portion cut
          off from the 2,300 years.
        </p>
      </div>

      <div class="focus-daniel-bridge" aria-label="Daniel 8 to Daniel 9 explanation bridge">
        <article>
          <span>Daniel 8</span>
          <h4>Vision given, time unresolved</h4>
          <p>
            Daniel hears about 2,300 days and the cleansing of the sanctuary, but he ends the chapter
            saying he still does not understand the vision.
          </p>
        </article>
        <div class="focus-bridge-connector" aria-hidden="true">
          <span>Gabriel returns</span>
          <strong>same vision explained</strong>
        </div>
        <article>
          <span>Daniel 9</span>
          <h4>Starting point supplied</h4>
          <p>
            Gabriel tells Daniel to consider the vision, then gives the 70 weeks and names the decree
            to restore Jerusalem as the beginning marker.
          </p>
        </article>
      </div>

      <div class="focus-link-grid">
        ${focusDanielLinkSteps
          .map(
            (step, index) => html`
              <article class="focus-link-step">
                <span>${index + 1}</span>
                <small>${step.reference}</small>
                <h4>${step.title}</h4>
                <p>${step.text}</p>
              </article>
            `
          )
          .join("")}
      </div>

      <article class="focus-shared-start-card">
        <span>Same starting date</span>
        <h4>The 70 weeks are the first explained portion of the 2,300 years</h4>
        <p>
          Daniel 9:24 says the 70 weeks are determined for Daniel's people. In this Adventist reading,
          "determined" carries the idea of being cut off or allotted from the larger time vision.
          Since Daniel 9:25 gives the start as the decree to restore and rebuild Jerusalem, that same
          457 BC decree starts both clocks: 490 years to AD 34, and 2,300 years to 1844.
        </p>
      </article>
    </section>
  `;
}

function renderFocusProphecyChart(activeMilestone) {
  return html`
    <section class="focus-timeline-section" aria-labelledby="focus-timeline-title">
      <div class="focus-section-heading">
        <span class="offering-badge">Prophecy date chart</span>
        <h3 id="focus-timeline-title">From 457 BC to Christ's final ministry</h3>
        <p>
          Daniel 8 gives the 2,300 years. Daniel 9 gives the shared starting point. Jesus confirms
          the 70-week portion, giving confidence that the full timeline reaches 1844.
        </p>
      </div>

      <div class="focus-prophecy-chart focus-prophecy-chart--visual" aria-label="Prophecy date chart">
        ${focusChartSegments
          .map(
            segment => html`
              <div class="focus-chart-row">
                <span class="focus-chart-label">${segment.label}</span>
                <div
                  class="focus-chart-bar"
                  style="--bar-left: ${segment.left}; --bar-width: ${segment.width}; --bar-fill: ${segment.fill};"
                >
                  <span>${segment.range}</span>
                </div>
              </div>
            `
          )
          .join("")}
      </div>

      <div class="focus-timeline" role="tablist" aria-label="Daniel 8:14 prophecy timeline">
        ${focusTimeline
          .map(
            item => html`
              <button
                type="button"
                class="${item.id === activeMilestone.id ? "active" : ""}"
                data-focus-milestone="${item.id}"
                role="tab"
                aria-selected="${item.id === activeMilestone.id ? "true" : "false"}"
              >
                <i aria-hidden="true"></i>
                <strong>${item.date}</strong>
                <span>${item.label}</span>
              </button>
            `
          )
          .join("")}
      </div>

      <article class="focus-milestone-detail">
        <span>${activeMilestone.date}</span>
        <h4>${activeMilestone.title}</h4>
        <p>${activeMilestone.explanation}</p>
        <p><strong>Why it matters:</strong> ${activeMilestone.meaning}</p>
        <small>${activeMilestone.scripture}</small>
      </article>
    </section>
  `;
}

function renderFocusAssuranceDashboard() {
  return html`
    <section class="focus-assurance-section" aria-labelledby="focus-assurance-title">
      <div class="focus-section-heading">
        <span class="offering-badge">Assurance dashboard</span>
        <h3 id="focus-assurance-title">The judgment is serious, but it is good news in Christ</h3>
        <p>
          The sanctuary message does not ask beginners to stare at themselves until they are afraid.
          It invites them to look at Jesus, the Lamb who died and the Priest who lives for them.
        </p>
      </div>
      <div class="focus-assurance-grid">
        ${focusAssuranceCards
          .map(
            card => html`
              <article class="focus-aid-card">
                <div class="focus-assurance-icon" aria-hidden="true">${iconSvg[card.icon] || iconSvg.shield}</div>
                <h3>${card.title}</h3>
                <p>${card.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFocus1844(activeId = "1844") {
  const root = qs("#focus-content");
  if (!root) return;

  const activeMilestone = focusTimeline.find(item => item.id === activeId) || focusTimeline.find(item => item.id === "1844") || focusTimeline[0];
  root.innerHTML = html`
    <div class="focus-study-hero focus-study-hero--visual">
      <div class="focus-hero-copy">
        <span class="offering-badge">Beginner study</span>
        <h2>Daniel 8:14 in plain language</h2>
        <p>
          "Then shall the sanctuary be cleansed" means that Jesus is not finished with the sin
          problem at forgiveness alone. The cross provides the sacrifice; His heavenly ministry
          applies that victory, cleanses the record, and prepares His people for restoration.
        </p>
      </div>
      <aside class="focus-verse-card" aria-label="Daniel 8:14 KJV phrase">
        <span>Daniel 8:14</span>
        <strong>"then shall the sanctuary be cleansed."</strong>
        <small>KJV phrase</small>
      </aside>
      ${renderFocusHeroChain()}
    </div>

    ${renderFocusLogicFlow()}
    ${renderFocusDanielLink()}
    ${renderFocusProphecyChart(activeMilestone)}
    ${renderFocusAssuranceDashboard()}
    ${renderFaqContextLink(
      "investigative-judgment",
      "Is the investigative judgment biblical?",
      "See the full Bible study connecting Daniel 7, Daniel 8:14, Daniel 9, Leviticus 16, Hebrews, and Revelation 14."
    )}
  `;
}

function articleKeyTexts(article) {
  if (article.keyTexts) return article.keyTexts;
  return article.citations.trim();
}

function articleGlanceItems(article) {
  return article.atAGlance || [
    { label: "Phase", value: article.phase },
    { label: "Focus", value: article.subtitle },
    { label: "Study", value: "Structure, ritual use, fulfillment, and response." }
  ];
}

function articleSection(title, glyph, content, extraClass = "") {
  return html`
    <section class="article-section ${extraClass}">
      <h2><span class="section-glyph">${glyph}</span>${title}</h2>
      ${content}
    </section>
  `;
}

function articleStepList(items, className = "") {
  return html`
    <ol class="article-step-list ${className}">
      ${items.map((item, index) => `<li><span>${index + 1}</span><p>${item}</p></li>`).join("")}
    </ol>
  `;
}

function articleTemplate(article) {
  const meaningSection = article.meaning
    ? articleSection(
        "Color and Material Meaning",
        "✦",
        html`
        <div class="meaning-grid">
          ${article.meaning
            .map(
              item => html`
                <article class="meaning-card">
                  <strong>${item.term}</strong>
                  <p>${item.text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      `,
        "article-section-wide"
      )
    : "";
  const summary = article.summary || `${article.title} belongs to the ${article.phase} and teaches ${article.subtitle.toLowerCase()} within the sanctuary path.`;
  const glance = articleGlanceItems(article);

  return html`
    <article class="article-reader" style="--article-gradient: ${article.color};">
      <header class="article-compact-header">
        <div class="article-title-lockup">
          <span class="article-header-icon" aria-hidden="true">${article.icon}</span>
          <div>
            <p class="article-eyebrow">${article.phase}</p>
            <h1 id="dialog-title">${article.title}</h1>
            <p class="article-subtitle">${article.subtitle}</p>
          </div>
        </div>
        <p class="article-key-texts"><strong>Key texts:</strong> ${articleKeyTexts(article)}</p>
      </header>

      <div class="article-body">
        <section class="article-summary-row">
          <article class="article-summary-card">
            <span>Why This Article Matters</span>
            <p>${summary}</p>
          </article>
          <div class="article-glance-list" aria-label="At a glance">
            ${glance
              .map(item => `<span><strong>${item.label}</strong>${item.value}</span>`)
              .join("")}
          </div>
        </section>

        <div class="article-study-grid">
      ${articleSection(
        `Structure of ${article.title}`,
        "▰",
        articleStepList(article.structure, "article-detail-list")
      )}
      ${meaningSection}
      ${articleSection(
        "Ritual Process",
        "◷",
        articleStepList(article.process, "process-list")
      )}
      ${articleSection(
        "Typological Fulfillment in Christ",
        "☆",
        html`
        <div class="quote-stack">${article.fulfillment.map(item => `<blockquote class="quote-card">${item}</blockquote>`).join("")}</div>
      `,
        "article-section-wide"
      )}
      ${articleSection(
        "Practical Application",
        "ϟ",
        html`
        <div class="application-grid">
          ${article.applications
            .map((item, index) => `<article class="application-card"><strong>${String(index + 1).padStart(2, "0")}</strong><p>${item}</p></article>`)
            .join("")}
        </div>
      `,
        "article-section-wide"
      )}
        </div>
      </div>
    </article>
  `;
}

function openArticle(id) {
  const article = articles[id];
  if (!article) return;
  qs("#article-content").innerHTML = articleTemplate(article);
  const dialog = qs("#article-dialog");
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeArticle() {
  const dialog = qs("#article-dialog");
  if (dialog.open && typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}

function openFaqArticle(id) {
  if (!faqArticleMap[id]) return;
  faqState.articleId = id;
  setView("faq");
  renderFaq(id);
}

function normalizeViewRequest(view) {
  if (ministryLegacyViews.has(view)) {
    return { view: "ministry", ministryView: view };
  }
  if (view === "ministry") {
    return { view: "ministry", ministryView: "sacrifices" };
  }
  return { view, ministryView: null };
}

function setView(requestedView) {
  const { view, ministryView } = normalizeViewRequest(requestedView);
  if (!qs(`#${view}`)) return;

  if (view === "ministry") {
    renderMinistry(ministryView);
  }
  if (view === "faq") {
    renderFaq(faqState.articleId);
  }

  currentView = view;
  qsa(".view-panel").forEach(panel => panel.classList.toggle("active", panel.id === view));
  qsa(".nav-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.view === view));
  history.replaceState(null, "", `#${view}`);
  window.scrollTo({ top: 0, behavior: "auto" });
  if (view === "map") {
    requestAnimationFrame(() => scene?.resize());
  }
}

function syncViewFromHash() {
  const hashView = location.hash.replace("#", "");
  if (ministryLegacyViews.has(hashView)) {
    setView(hashView);
    return;
  }
  if (hashView && qs(`#${hashView}`) && hashView !== currentView) {
    setView(hashView);
  }
}

function bindUi() {
  document.addEventListener("change", event => {
    const faqSelect = event.target.closest("[data-faq-select]");
    if (faqSelect) {
      openFaqArticle(faqSelect.value);
    }
  });

  document.addEventListener("click", event => {
    const faqTrigger = event.target.closest("[data-faq-open]");
    if (faqTrigger) {
      openFaqArticle(faqTrigger.dataset.faqOpen);
      return;
    }

    const faqJump = event.target.closest("[data-faq-jump]");
    if (faqJump) {
      const target = document.getElementById(faqJump.dataset.faqJump);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    const articleTrigger = event.target.closest("[data-open-article]");
    if (articleTrigger) {
      openArticle(articleTrigger.dataset.openArticle);
      return;
    }

    const chroniclePerspective = event.target.closest("[data-chronicle-perspective]");
    if (chroniclePerspective) {
      chronicleState = {
        perspective: chroniclePerspective.dataset.chroniclePerspective,
        storyId: null,
        sceneIndex: 0
      };
      renderChronicles();
      return;
    }

    const chronicleStory = event.target.closest("[data-chronicle-story]");
    if (chronicleStory) {
      const story = chronicleStoryMap[chronicleStory.dataset.chronicleStory];
      if (story) {
        chronicleState = {
          perspective: story.perspective,
          storyId: story.id,
          sceneIndex: 0
        };
        renderChronicles();
      }
      return;
    }

    const chronicleBack = event.target.closest("[data-chronicle-back]");
    if (chronicleBack) {
      if (chronicleBack.dataset.chronicleBack === "perspectives") {
        chronicleState = { perspective: null, storyId: null, sceneIndex: 0 };
      } else {
        chronicleState = { ...chronicleState, storyId: null, sceneIndex: 0 };
      }
      renderChronicles();
      return;
    }

    const chronicleMarker = event.target.closest("[data-chronicle-scene]");
    if (chronicleMarker) {
      setChronicleScene(Number(chronicleMarker.dataset.chronicleScene));
      return;
    }

    const chroniclePrevious = event.target.closest("[data-chronicle-prev]");
    if (chroniclePrevious) {
      setChronicleScene(chronicleState.sceneIndex - 1);
      return;
    }

    const chronicleNext = event.target.closest("[data-chronicle-next]");
    if (chronicleNext) {
      setChronicleScene(chronicleState.sceneIndex + 1);
      return;
    }

    const focusMilestone = event.target.closest("[data-focus-milestone]");
    if (focusMilestone) {
      renderFocus1844(focusMilestone.dataset.focusMilestone);
      return;
    }

    const feastLink = event.target.closest("[data-feast-link]");
    if (feastLink) {
      setView(feastLink.dataset.view || "calendar");
      renderFeastTabs(feastLink.dataset.feastLink);
      return;
    }

    const navTrigger = event.target.closest("[data-view]");
    if (navTrigger) {
      setView(navTrigger.dataset.view);
      return;
    }

    const ministryTrigger = event.target.closest("[data-ministry-view]");
    if (ministryTrigger) {
      renderMinistry(ministryTrigger.dataset.ministryView);
      currentView = "ministry";
      qsa(".view-panel").forEach(panel => panel.classList.toggle("active", panel.id === "ministry"));
      qsa(".nav-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.view === "ministry"));
      history.replaceState(null, "", "#ministry");
      return;
    }

    const scrollTrigger = event.target.closest("[data-scroll-to]");
    if (scrollTrigger) {
      qs(`#${scrollTrigger.dataset.scrollTo}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const offeringTrigger = event.target.closest("[data-offering]");
    if (offeringTrigger) {
      qsa("#offering-tabs button").forEach(button => button.classList.toggle("active", button === offeringTrigger));
      renderOfferingDetail(offeringTrigger.dataset.offering);
      return;
    }

    const specialCeremonyTrigger = event.target.closest("[data-special-ceremony]");
    if (specialCeremonyTrigger) {
      qsa("#special-ceremony-tabs button").forEach(button => button.classList.toggle("active", button === specialCeremonyTrigger));
      renderSpecialCeremonyDetail(specialCeremonyTrigger.dataset.specialCeremony);
      return;
    }

    const serviceTrigger = event.target.closest("[data-service]");
    if (serviceTrigger) {
      renderServices(serviceTrigger.dataset.service);
      return;
    }

    const attireGroupTrigger = event.target.closest("[data-attire-group]");
    if (attireGroupTrigger) {
      const group = attireGroups.find(item => item.id === attireGroupTrigger.dataset.attireGroup);
      renderPriestlyAttire(group?.id, group?.defaultGarment);
      return;
    }

    const attireGarmentTrigger = event.target.closest("[data-attire-garment]");
    if (attireGarmentTrigger) {
      renderPriestlyAttire(attireState.group, attireGarmentTrigger.dataset.attireGarment);
      return;
    }

    const feastTrigger = event.target.closest("[data-feast]");
    if (feastTrigger) {
      qsa("#feast-tabs button").forEach(button => button.classList.toggle("active", button === feastTrigger));
      renderFeastDetail(feastTrigger.dataset.feast);
    }
  });

  qs(".dialog-close").addEventListener("click", closeArticle);
  qs("#article-dialog").addEventListener("click", event => {
    if (event.target === event.currentTarget) closeArticle();
  });
  window.addEventListener("keydown", event => {
    if (event.key === "Escape") closeArticle();
    if (currentView === "chronicles" && chronicleState.storyId && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
      const target = event.target;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      event.preventDefault();
      setChronicleScene(chronicleState.sceneIndex + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
  window.addEventListener("hashchange", syncViewFromHash);

  syncViewFromHash();
}

function mixColor(hex, amount) {
  const value = hex.replace("#", "");
  const num = parseInt(value, 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 255) + amount));
  const b = Math.max(0, Math.min(255, (num & 255) + amount));
  return `rgb(${r}, ${g}, ${b})`;
}

class SanctuaryScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.tooltip = qs("#scene-tooltip");
    this.setSideView();
    this.pointerMode = null;
    this.pointers = new Map();
    this.hovered = null;
    this.hitRegions = [];
    this.needsDraw = true;
    this.bind();
    this.resize();
    this.animate();
  }

  setSideView() {
    this.yaw = -0.48;
    this.pitch = 0.72;
    this.zoom = 9.1;
    this.panX = 14;
    this.panY = 88;
  }

  minPitch() {
    return 0.14;
  }

  maxPitch() {
    return Math.PI / 2;
  }

  minZoom() {
    return 4.6;
  }

  maxZoom() {
    return 72;
  }

  clampPitch(value) {
    return Math.max(this.minPitch(), Math.min(this.maxPitch(), value));
  }

  clampZoom(value) {
    return Math.max(this.minZoom(), Math.min(this.maxZoom(), value));
  }

  bind() {
    window.addEventListener("resize", () => this.resize());
    this.canvas.addEventListener("contextmenu", event => event.preventDefault());
    this.canvas.addEventListener("pointerdown", event => this.pointerDown(event));
    this.canvas.addEventListener("pointermove", event => this.pointerMove(event));
    this.canvas.addEventListener("pointerup", event => this.pointerUp(event));
    this.canvas.addEventListener("pointercancel", event => this.pointerUp(event));
    this.canvas.addEventListener("wheel", event => this.wheel(event), { passive: false });
    this.canvas.addEventListener("click", event => this.click(event));
    window.addEventListener("keydown", event => this.key(event));
    qs("#reset-scene").addEventListener("click", () => this.reset());
    qs("#fullscreen-scene").addEventListener("click", () => qs(".scene-frame").requestFullscreen?.());
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    this.canvas.width = Math.max(1, Math.round(rect.width * ratio));
    this.canvas.height = Math.max(1, Math.round(rect.height * ratio));
    this.ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    this.needsDraw = true;
  }

  reset() {
    this.setSideView();
    this.needsDraw = true;
  }

  pointerDown(event) {
    this.canvas.setPointerCapture(event.pointerId);
    this.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    this.pointerMode = event.button === 2 || event.shiftKey ? "pan" : "rotate";
  }

  pointerMove(event) {
    const rect = this.canvas.getBoundingClientRect();
    const local = { x: event.clientX - rect.left, y: event.clientY - rect.top };

    if (this.pointers.has(event.pointerId)) {
      const previous = this.pointers.get(event.pointerId);
      this.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

      if (this.pointers.size === 2) {
        const points = [...this.pointers.values()];
        const distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
        if (this.lastPinchDistance) {
          const delta = distance - this.lastPinchDistance;
          this.zoom = this.clampZoom(this.zoom + delta * 0.055);
          if (delta > 0 && this.zoom > 18) this.pitch = this.clampPitch(this.pitch - delta * 0.0009);
        }
        this.lastPinchDistance = distance;
      } else if (this.pointerMode === "pan") {
        this.panX += event.clientX - previous.x;
        this.panY += event.clientY - previous.y;
      } else {
        this.yaw += (event.clientX - previous.x) * 0.008;
        this.pitch = this.clampPitch(this.pitch + (event.clientY - previous.y) * 0.004);
      }
      this.needsDraw = true;
    }

    this.updateHover(local.x, local.y);
  }

  pointerUp(event) {
    this.pointers.delete(event.pointerId);
    this.lastPinchDistance = null;
    if (this.pointers.size === 0) this.pointerMode = null;
  }

  wheel(event) {
    event.preventDefault();
    const previousZoom = this.zoom;
    this.zoom = this.clampZoom(this.zoom - event.deltaY * 0.022);
    if (this.zoom > 18 && this.zoom > previousZoom) {
      const zoomGain = this.zoom - previousZoom;
      this.pitch = this.clampPitch(this.pitch - zoomGain * 0.012);
      this.panY += zoomGain * 1.6;
    }
    this.needsDraw = true;
  }

  key(event) {
    if (currentView !== "map") return;
    const step = 18;
    const moves = {
      ArrowUp: [0, step],
      ArrowDown: [0, -step],
      ArrowLeft: [step, 0],
      ArrowRight: [-step, 0]
    };
    const move = moves[event.key];
    if (!move) return;
    event.preventDefault();
    this.panX += move[0] || 0;
    this.panY += move[1] || 0;
    this.needsDraw = true;
  }

  click(event) {
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const region = this.hitRegionAt(x, y);
    if (region) {
      openArticle(region.id);
      return;
    }

    const priest = this.priestPickRegion;
    if (priest && x >= priest.x && x <= priest.x + priest.w && y >= priest.y && y <= priest.y + priest.h) {
      openArticle("priest");
    }
  }

  updateHover(x, y) {
    const hit = this.hitRegionAt(x, y);
    const priestHit =
      !hit &&
      this.priestPickRegion &&
      x >= this.priestPickRegion.x &&
      x <= this.priestPickRegion.x + this.priestPickRegion.w &&
      y >= this.priestPickRegion.y &&
      y <= this.priestPickRegion.y + this.priestPickRegion.h;
    this.hovered = hit?.id || (priestHit ? "priest" : null);
    if (hit || priestHit) {
      this.tooltip.hidden = true;
      this.canvas.style.cursor = "pointer";
    } else {
      this.tooltip.hidden = true;
      this.canvas.style.cursor = this.pointerMode ? "grabbing" : "grab";
    }
    this.needsDraw = true;
  }

  project(point) {
    const rect = this.canvas.getBoundingClientRect();
    const cos = Math.cos(this.yaw);
    const sin = Math.sin(this.yaw);
    const x = point.x * cos - point.z * sin;
    const z = point.x * sin + point.z * cos;
    const y = point.y || 0;
    const heightScale = 0.34 + (1 - Math.sin(this.pitch)) * 0.68;
    return {
      x: rect.width / 2 + this.panX + x * this.zoom,
      y: rect.height / 2 + this.panY + (z * Math.sin(this.pitch) - y * heightScale) * this.zoom,
      depth: z + y * 0.5
    };
  }

  polygon(points, fill, stroke = null, width = 1) {
    const ctx = this.ctx;
    ctx.beginPath();
    points.forEach((p, index) => {
      if (index === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = width;
      ctx.stroke();
    }
  }

  cuboid({ x, z, y = 0, w, d, h, color, id, label }) {
    const x0 = x - w / 2;
    const x1 = x + w / 2;
    const z0 = z - d / 2;
    const z1 = z + d / 2;
    const p = {
      b1: this.project({ x: x0, y, z: z0 }),
      b2: this.project({ x: x1, y, z: z0 }),
      b3: this.project({ x: x1, y, z: z1 }),
      b4: this.project({ x: x0, y, z: z1 }),
      t1: this.project({ x: x0, y: y + h, z: z0 }),
      t2: this.project({ x: x1, y: y + h, z: z0 }),
      t3: this.project({ x: x1, y: y + h, z: z1 }),
      t4: this.project({ x: x0, y: y + h, z: z1 })
    };
    this.polygon([p.b1, p.b2, p.t2, p.t1], mixColor(color, -42));
    this.polygon([p.b2, p.b3, p.t3, p.t2], mixColor(color, -18));
    this.polygon([p.b3, p.b4, p.t4, p.t3], mixColor(color, -32));
    this.polygon([p.b4, p.b1, p.t1, p.t4], mixColor(color, -56));
    this.polygon([p.t1, p.t2, p.t3, p.t4], mixColor(color, 24), "rgba(255,255,255,.25)", 0.75);

    if (id) {
      const pts = [p.t1, p.t2, p.t3, p.t4, p.b1, p.b2, p.b3, p.b4];
      const minX = Math.min(...pts.map(item => item.x));
      const maxX = Math.max(...pts.map(item => item.x));
      const minY = Math.min(...pts.map(item => item.y));
      const maxY = Math.max(...pts.map(item => item.y));
      this.hitRegions.push({ id, label, x: minX - 10, y: minY - 10, w: maxX - minX + 20, h: maxY - minY + 20, cx: (minX + maxX) / 2 });
    }
  }

  addFlatHitRegion(id, label, corners, pad = 8) {
    const points = corners.map(point => this.project(point));
    const minX = Math.min(...points.map(point => point.x));
    const maxX = Math.max(...points.map(point => point.x));
    const minY = Math.min(...points.map(point => point.y));
    const maxY = Math.max(...points.map(point => point.y));
    this.hitRegions.push({
      id,
      label,
      x: minX - pad,
      y: minY - pad,
      w: maxX - minX + pad * 2,
      h: maxY - minY + pad * 2,
      cx: (minX + maxX) / 2
    });
  }

  addPolygonHitRegion(id, label, corners) {
    const points = corners.map(point => this.project(point));
    const minX = Math.min(...points.map(point => point.x));
    const maxX = Math.max(...points.map(point => point.x));
    const minY = Math.min(...points.map(point => point.y));
    const maxY = Math.max(...points.map(point => point.y));
    this.hitRegions.push({
      id,
      label,
      points,
      x: minX,
      y: minY,
      w: maxX - minX,
      h: maxY - minY,
      cx: (minX + maxX) / 2
    });
  }

  pointInPolygon(x, y, points) {
    let inside = false;
    for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
      const pi = points[i];
      const pj = points[j];
      const intersects = pi.y > y !== pj.y > y && x < ((pj.x - pi.x) * (y - pi.y)) / (pj.y - pi.y) + pi.x;
      if (intersects) inside = !inside;
    }
    return inside;
  }

  containsHit(hit, x, y) {
    if (x < hit.x || x > hit.x + hit.w || y < hit.y || y > hit.y + hit.h) return false;
    return hit.points ? this.pointInPolygon(x, y, hit.points) : true;
  }

  hitRegionAt(x, y) {
    return [...this.hitRegions].reverse().find(hit => this.containsHit(hit, x, y));
  }

  addObjectHitRegion({ id, label, x, z, y = 0, w, d, h = 0 }, pad = 10) {
    const x0 = x - w / 2;
    const x1 = x + w / 2;
    const z0 = z - d / 2;
    const z1 = z + d / 2;
    this.addFlatHitRegion(
      id,
      label,
      [
        { x: x0, y, z: z0 },
        { x: x1, y, z: z0 },
        { x: x1, y: y + h, z: z1 },
        { x: x0, y: y + h, z: z1 }
      ],
      pad
    );
  }

  drawGround() {
    const ctx = this.ctx;
    const rect = this.canvas.getBoundingClientRect();
    const sky = ctx.createLinearGradient(0, 0, 0, rect.height);
    sky.addColorStop(0, "#cba273");
    sky.addColorStop(0.45, "#e2c393");
    sky.addColorStop(1, "#f5e4bb");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, rect.width, rect.height);

    const horizon = ctx.createLinearGradient(0, rect.height * 0.14, 0, rect.height * 0.55);
    horizon.addColorStop(0, "rgba(255,255,255,.22)");
    horizon.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = horizon;
    ctx.fillRect(0, 0, rect.width, rect.height);

    const corners = [
      this.project({ x: courtBounds.west, y: 0, z: courtBounds.north }),
      this.project({ x: courtBounds.east, y: 0, z: courtBounds.north }),
      this.project({ x: courtBounds.east, y: 0, z: courtBounds.south }),
      this.project({ x: courtBounds.west, y: 0, z: courtBounds.south })
    ];
    this.polygon(corners, "rgba(239, 205, 143, .24)", "rgba(137, 95, 46, .16)", 0.7);
  }

  drawTent(x, z, scale = 1) {
    const base = [
      this.project({ x: x - 1.3 * scale, y: 0, z: z - 0.9 * scale }),
      this.project({ x: x + 1.3 * scale, y: 0, z: z - 0.9 * scale }),
      this.project({ x: x + 1.3 * scale, y: 0, z: z + 0.9 * scale }),
      this.project({ x: x - 1.3 * scale, y: 0, z: z + 0.9 * scale })
    ];
    const peak = this.project({ x, y: 1.25 * scale, z });
    this.polygon([base[0], base[1], peak], "rgba(255,255,255,.62)");
    this.polygon([base[1], base[2], peak], "rgba(241,232,211,.72)");
    this.polygon([base[2], base[3], peak], "rgba(226,214,190,.55)");
  }

  drawCampTents() {
    const scale = 0.74;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 10; col++) {
        this.drawTent(-36 + col * 4.1, -52 - row * 3.1, scale);
        this.drawTent(-36 + col * 4.1, 52 + row * 3.1, scale);
      }
    }
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 5; col++) {
        this.drawTent(-74 - col * 3.6, -18 + row * 4, scale);
        this.drawTent(74 + col * 3.6, -18 + row * 4, scale);
      }
    }
  }

  drawFencePanel(a, b, low = 0.2, high = CUBIT_MODEL.court.fenceHeight) {
    const panel = [
      this.project({ x: a.x, y: low, z: a.z }),
      this.project({ x: b.x, y: low, z: b.z }),
      this.project({ x: b.x, y: high, z: b.z }),
      this.project({ x: a.x, y: high, z: a.z })
    ];
    this.polygon(panel, "rgba(255,255,255,.08)", "rgba(248,239,218,.26)", 0.65);

    for (let i = 0; i < 5; i++) {
      const y = 0.9 + i * 0.82;
      const p1 = this.project({ x: a.x, y, z: a.z });
      const p2 = this.project({ x: b.x, y, z: b.z });
      this.ctx.save();
      this.ctx.strokeStyle = "rgba(255,255,255,.72)";
      this.ctx.lineWidth = 1.15;
      this.ctx.lineCap = "round";
      this.ctx.beginPath();
      this.ctx.moveTo(p1.x, p1.y);
      this.ctx.lineTo(p2.x, p2.y);
      this.ctx.stroke();
      this.ctx.restore();
    }

  }

  drawCourtyard() {
    const court = { left: courtBounds.west, right: courtBounds.east, top: courtBounds.north, bottom: courtBounds.south };
    const gateHalf = CUBIT_MODEL.court.gateWidth / 2;
    const posts = [];
    const addPost = (x, z) => {
      const key = `${x.toFixed(3)}:${z.toFixed(3)}`;
      if (!posts.some(post => post.key === key)) posts.push({ key, x, z });
    };
    const addLinePosts = (start, end, count, mapPoint) => {
      for (let index = 0; index < count; index++) {
        const t = count === 1 ? 0 : index / (count - 1);
        const value = start + (end - start) * t;
        const point = mapPoint(value);
        addPost(point.x, point.z);
      }
    };

    // Pillar counts follow Exodus 27: twenty on each long side, ten on the west, and three/four/three around the gate.
    addLinePosts(court.left, court.right, 20, x => ({ x, z: court.top }));
    addLinePosts(court.left, court.right, 20, x => ({ x, z: court.bottom }));
    addLinePosts(court.top, court.bottom, 10, z => ({ x: court.left, z }));
    addLinePosts(court.top, -gateHalf, 3, z => ({ x: court.right, z }));
    addLinePosts(-gateHalf, gateHalf, 4, z => ({ x: court.right, z }));
    addLinePosts(gateHalf, court.bottom, 3, z => ({ x: court.right, z }));
    posts.forEach(post => {
      this.cuboid({
        x: post.x,
        z: post.z,
        w: 0.2,
        d: 0.2,
        h: CUBIT_MODEL.court.fenceHeight,
        color: "#b87836",
        id: "posts",
        label: "Courtyard Posts and Linen Fence"
      });
      this.cuboid({ x: post.x, z: post.z, y: CUBIT_MODEL.court.fenceHeight, w: 0.38, d: 0.38, h: 0.2, color: "#d2d1c8" });
    });

    [
      [{ x: court.left, z: court.top }, { x: court.right, z: court.top }],
      [{ x: court.right, z: court.bottom }, { x: court.left, z: court.bottom }],
      [{ x: court.left, z: court.bottom }, { x: court.left, z: court.top }],
      [{ x: court.right, z: court.top }, { x: court.right, z: -gateHalf }],
      [{ x: court.right, z: gateHalf }, { x: court.right, z: court.bottom }]
    ].forEach(([a, b]) => this.drawFencePanel(a, b));

    [
      { x: court.right, z: -gateHalf },
      { x: court.right, z: gateHalf }
    ].forEach(post => {
      this.cuboid({ x: post.x, z: post.z, w: 0.28, d: 0.28, h: CUBIT_MODEL.court.fenceHeight, color: "#c17a35" });
      this.cuboid({ x: post.x, z: post.z, y: CUBIT_MODEL.court.fenceHeight, w: 0.44, d: 0.44, h: 0.22, color: "#d9d7ce" });
    });

    this.drawGate(court.right, gateHalf);
  }

  drawGate(x, gateHalf) {
    const stripes = [
      { z0: -gateHalf, z1: -gateHalf * 0.33, color: "rgba(70, 105, 190, .72)" },
      { z0: -gateHalf * 0.33, z1: gateHalf * 0.33, color: "rgba(154, 78, 138, .72)" },
      { z0: gateHalf * 0.33, z1: gateHalf, color: "rgba(197, 75, 52, .72)" }
    ];
    stripes.forEach(stripe => {
      const panel = [
        this.project({ x, y: 0.05, z: stripe.z0 }),
        this.project({ x, y: CUBIT_MODEL.court.fenceHeight, z: stripe.z0 }),
        this.project({ x, y: CUBIT_MODEL.court.fenceHeight, z: stripe.z1 }),
        this.project({ x, y: 0.05, z: stripe.z1 })
      ];
      this.polygon(panel, stripe.color, "rgba(255,255,255,.35)", 0.75);
    });
    [-gateHalf, gateHalf].forEach(z => this.cuboid({ x, z, w: 0.2, d: 0.2, h: CUBIT_MODEL.court.fenceHeight, color: "#eadfcf" }));
    this.addFlatHitRegion("gate", "The Courtyard Gate", [
      { x, y: 0, z: -gateHalf },
      { x, y: CUBIT_MODEL.court.fenceHeight, z: -gateHalf },
      { x, y: CUBIT_MODEL.court.fenceHeight, z: gateHalf },
      { x, y: 0, z: gateHalf }
    ], 18);
  }

  drawTabernacle() {
    const tent = {
      left: tabernacleBounds.west,
      right: tabernacleBounds.east,
      top: tabernacleBounds.north,
      bottom: tabernacleBounds.south,
      veil: tabernacleBounds.veil
    };
    const height = CUBIT_MODEL.tabernacle.height;
    const centerX = (tent.left + tent.right) / 2;

    this.cuboid({ x: centerX, z: 0, w: CUBIT_MODEL.tabernacle.length, d: CUBIT_MODEL.tabernacle.width, h: 0.22, color: "#c7a86a" });

    const farWall = { z: tent.top + 0.12, d: 0.24 };
    this.cuboid({ x: centerX, z: farWall.z, w: CUBIT_MODEL.tabernacle.length, d: farWall.d, h: height, color: "#d2a33a" });
    this.cuboid({ x: tent.left, z: 0, w: 0.24, d: CUBIT_MODEL.tabernacle.width, h: height, color: "#b98131" });

    for (let x = tent.left + 0.7; x < tent.right; x += 1.45) {
      this.drawModelLine(
        [
          { x, y: 0.35, z: tent.top + 0.02 },
          { x, y: height - 0.15, z: tent.top + 0.02 }
        ],
        "rgba(120, 75, 23, .34)",
        0.9
      );
    }

    const coveringBack = [
      { x: tent.left - 1.0, y: height + 0.55, z: tent.top - 0.95 },
      { x: tent.right + 1.0, y: height + 0.55, z: tent.top - 0.95 },
      { x: tent.right + 1.0, y: 0.25, z: tent.top - 1.2 },
      { x: tent.left - 1.0, y: 0.25, z: tent.top - 1.2 }
    ];
    this.polygon(coveringBack.map(point => this.project(point)), "rgba(69, 45, 35, .76)", "rgba(38, 26, 22, .35)", 1);
    this.addPolygonHitRegion("coverings", "Tabernacle Coverings", coveringBack);

    const redLayer = [
      { x: tent.left - 0.7, y: height + 0.45, z: tent.top - 0.45 },
      { x: tent.right + 0.7, y: height + 0.45, z: tent.top - 0.45 },
      { x: tent.right + 0.7, y: 1.0, z: tent.top - 0.5 },
      { x: tent.left - 0.7, y: 1.0, z: tent.top - 0.5 }
    ];
    this.polygon(redLayer.map(point => this.project(point)), "rgba(150, 59, 50, .8)", "rgba(255,255,255,.16)", 0.8);
    this.addPolygonHitRegion("coverings", "Tabernacle Coverings", redLayer);

    const linenRoof = [
      { x: tent.left - 0.65, y: height + 0.8, z: tent.top - 0.15 },
      { x: tent.right + 0.65, y: height + 0.8, z: tent.top - 0.15 },
      { x: tent.right + 0.55, y: height + 0.25, z: tent.bottom - 1.2 },
      { x: tent.left - 0.55, y: height + 0.25, z: tent.bottom - 1.2 }
    ];
    this.polygon(linenRoof.map(point => this.project(point)), "rgba(245, 224, 185, .9)", "rgba(92, 55, 30, .2)", 0.9);
    this.addPolygonHitRegion("coverings", "Tabernacle Coverings", linenRoof);

    const blueTrim = [
      { x: tent.left - 0.55, y: height + 0.42, z: tent.bottom - 1.0 },
      { x: tent.right + 0.55, y: height + 0.42, z: tent.bottom - 1.0 },
      { x: tent.right + 0.45, y: height - 0.05, z: tent.bottom - 0.72 },
      { x: tent.left - 0.45, y: height - 0.05, z: tent.bottom - 0.72 }
    ];
    this.polygon(blueTrim.map(point => this.project(point)), "rgba(54, 105, 181, .82)", "rgba(255,255,255,.18)", 0.7);
    this.addPolygonHitRegion("coverings", "Tabernacle Coverings", blueTrim);

    this.drawModelLine(
      [
        { x: tent.left, y: 0.3, z: tent.bottom },
        { x: tent.right, y: 0.3, z: tent.bottom }
      ],
      "rgba(139, 92, 39, .75)",
      2
    );

    for (let x = tent.left + 2; x < tent.right; x += 2) {
      this.cuboid({ x, z: tent.bottom, w: 0.16, d: 0.16, h: height, color: "#d6a33d" });
    }

    const veilStripes = [
      { z0: tent.top, z1: -1.65, color: "rgba(49, 93, 178, .65)" },
      { z0: -1.65, z1: 1.65, color: "rgba(124, 68, 138, .7)" },
      { z0: 1.65, z1: tent.bottom, color: "rgba(181, 72, 50, .68)" }
    ];
    veilStripes.forEach(stripe => {
      const panel = [
        { x: tent.veil, y: 0.15, z: stripe.z0 },
        { x: tent.veil, y: height - 0.2, z: stripe.z0 },
        { x: tent.veil, y: height - 0.2, z: stripe.z1 },
        { x: tent.veil, y: 0.15, z: stripe.z1 }
      ];
      this.polygon(panel.map(point => this.project(point)), stripe.color, "rgba(255,255,255,.2)", 0.5);
    });
    this.addPolygonHitRegion("innerVeil", "The Inner Veil", [
      { x: tent.veil, y: 0.15, z: tent.top },
      { x: tent.veil, y: height - 0.2, z: tent.top },
      { x: tent.veil, y: height - 0.2, z: tent.bottom },
      { x: tent.veil, y: 0.15, z: tent.bottom }
    ]);

    const entranceStripes = [
      { z0: tent.top, z1: -1.65, color: "rgba(55, 103, 184, .72)" },
      { z0: -1.65, z1: 1.65, color: "rgba(146, 82, 139, .75)" },
      { z0: 1.65, z1: tent.bottom, color: "rgba(201, 82, 54, .74)" }
    ];
    entranceStripes.forEach(stripe => {
      const panel = [
        { x: tent.right + 0.1, y: 0, z: stripe.z0 },
        { x: tent.right + 0.1, y: height, z: stripe.z0 },
        { x: tent.right + 0.1, y: height, z: stripe.z1 },
        { x: tent.right + 0.1, y: 0, z: stripe.z1 }
      ];
      this.polygon(panel.map(point => this.project(point)), stripe.color, "rgba(255,255,255,.22)", 0.65);
    });
    this.addPolygonHitRegion("entranceVeil", "The Entrance Veil", [
      { x: tent.right + 0.1, y: 0, z: tent.top },
      { x: tent.right + 0.1, y: height, z: tent.top },
      { x: tent.right + 0.1, y: height, z: tent.bottom },
      { x: tent.right + 0.1, y: 0, z: tent.bottom }
    ]);

    [-4, -2, 0, 2, 4].forEach(z => this.cuboid({ x: tent.right + 0.08, z, w: 0.2, d: 0.2, h: height, color: "#c89036" }));
    [-3.5, -1.2, 1.2, 3.5].forEach(z => this.cuboid({ x: tent.veil, z, w: 0.18, d: 0.18, h: height, color: "#c89036" }));
  }

  drawSmoke(x, z, baseY, drift = 0) {
    const ctx = this.ctx;
    ctx.save();
    for (let i = 0; i < 9; i++) {
      const p = this.project({ x: x + drift * i * 0.18, y: baseY + i * 1.6, z: z - i * 0.3 });
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, 11 + i * 2.6, 7 + i * 1.8, -0.35, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(238, 232, 216, ${0.24 - i * 0.018})`;
      ctx.fill();
    }
    ctx.restore();
  }

  drawFire(x, z) {
    const center = this.project({ x, y: 2.0, z });
    const ctx = this.ctx;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(center.x - 12, center.y + 12);
    ctx.quadraticCurveTo(center.x - 4, center.y - 26, center.x + 4, center.y - 5);
    ctx.quadraticCurveTo(center.x + 15, center.y - 28, center.x + 12, center.y + 12);
    ctx.closePath();
    ctx.fillStyle = "rgba(239, 111, 32, .88)";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(center.x - 5, center.y + 9);
    ctx.quadraticCurveTo(center.x, center.y - 18, center.x + 7, center.y + 9);
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 218, 82, .95)";
    ctx.fill();
    ctx.restore();
  }

  drawModelLine(points, color, width = 2.4) {
    const ctx = this.ctx;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    points.map(point => this.project(point)).forEach((point, index) => {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();
    ctx.restore();
  }

  drawProjectedEllipse(point, rx, ry, fill, stroke = null, width = 1) {
    const center = this.project(point);
    const ctx = this.ctx;
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(center.x, center.y, rx, ry, -this.yaw, 0, Math.PI * 2);
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = width;
      ctx.stroke();
    }
    ctx.restore();
  }

  drawObjectFocusGlow(obj) {
    if (this.hovered !== obj.id) return;

    const baseY = Math.max(0.04, obj.y || 0);
    const topY = baseY + (obj.h || 1.5) + 0.45;
    const center = this.project({ x: obj.x, y: baseY, z: obj.z });
    const top = this.project({ x: obj.x, y: topY, z: obj.z });
    const footprint = Math.max(obj.w || 1, obj.d || 1);
    const floorRx = Math.max(18, this.zoom * footprint * 0.72);
    const floorRy = Math.max(7, this.zoom * Math.max(obj.d || 1, 0.9) * 0.28);
    const bloomRadius = Math.max(22, floorRx * 0.8);
    const ctx = this.ctx;

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.shadowColor = "rgba(255, 201, 96, 0.34)";
    ctx.shadowBlur = Math.max(16, floorRx * 0.28);
    ctx.beginPath();
    ctx.ellipse(center.x, center.y, floorRx, floorRy, -this.yaw, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 216, 128, 0.18)";
    ctx.fill();

    const bloom = ctx.createRadialGradient(top.x, top.y, 2, top.x, top.y, bloomRadius);
    bloom.addColorStop(0, "rgba(255, 239, 178, 0.2)");
    bloom.addColorStop(0.5, "rgba(255, 204, 103, 0.08)");
    bloom.addColorStop(1, "rgba(255, 204, 103, 0)");
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.ellipse(top.x, top.y, bloomRadius * 0.85, bloomRadius * 0.55, -0.12, 0, Math.PI * 2);
    ctx.fillStyle = bloom;
    ctx.fill();
    ctx.restore();
  }

  drawAltar(obj) {
    this.cuboid({ ...obj, color: "#9d542a", id: obj.id, label: obj.label });
    const inset = 0.75;
    const top = [
      this.project({ x: obj.x - obj.w / 2 + inset, y: obj.h + 0.06, z: obj.z - obj.d / 2 + inset }),
      this.project({ x: obj.x + obj.w / 2 - inset, y: obj.h + 0.06, z: obj.z - obj.d / 2 + inset }),
      this.project({ x: obj.x + obj.w / 2 - inset, y: obj.h + 0.06, z: obj.z + obj.d / 2 - inset }),
      this.project({ x: obj.x - obj.w / 2 + inset, y: obj.h + 0.06, z: obj.z + obj.d / 2 - inset })
    ];
    this.polygon(top, "rgba(67, 34, 21, .84)", "rgba(246, 177, 75, .7)", 1.1);
    [-1, 1].forEach(dx => {
      [-1, 1].forEach(dz => {
        this.cuboid({
          x: obj.x + dx * (obj.w / 2 - 0.35),
          z: obj.z + dz * (obj.d / 2 - 0.35),
          y: obj.h,
          w: 0.42,
          d: 0.42,
          h: 0.55,
          color: "#c97634"
        });
      });
    });
    this.drawFire(obj.x, obj.z);
  }

  drawLaver(obj) {
    this.addObjectHitRegion({ ...obj, w: 2.7, d: 2.7, h: 1.6 }, 12);
    this.drawProjectedEllipse(
      { x: obj.x, y: 0.1, z: obj.z },
      Math.max(7, this.zoom * 0.62),
      Math.max(3, this.zoom * 0.26),
      "#8f622f",
      "rgba(255, 230, 166, .46)",
      1
    );
    this.cuboid({ x: obj.x, z: obj.z, y: 0.12, w: 0.42, d: 0.42, h: 0.76, color: "#a66a2e" });

    const ctx = this.ctx;
    const top = this.project({ x: obj.x, y: 1.34, z: obj.z });
    const bottom = this.project({ x: obj.x, y: 0.72, z: obj.z });
    const rxTop = Math.max(15, this.zoom * obj.w * 0.58);
    const ryTop = Math.max(5.5, this.zoom * obj.d * 0.2);
    const rxBottom = rxTop * 0.52;
    const ryBottom = ryTop * 0.68;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(top.x - rxTop, top.y);
    ctx.bezierCurveTo(top.x - rxTop * 0.9, top.y + ryTop * 1.25, bottom.x - rxBottom, bottom.y + ryBottom * 0.2, bottom.x - rxBottom, bottom.y);
    ctx.quadraticCurveTo(bottom.x, bottom.y + ryBottom, bottom.x + rxBottom, bottom.y);
    ctx.bezierCurveTo(bottom.x + rxBottom, bottom.y + ryBottom * 0.2, top.x + rxTop * 0.9, top.y + ryTop * 1.25, top.x + rxTop, top.y);
    ctx.quadraticCurveTo(top.x, top.y + ryTop * 0.8, top.x - rxTop, top.y);
    ctx.closePath();
    ctx.fillStyle = "#b87934";
    ctx.strokeStyle = "rgba(92, 54, 25, .5)";
    ctx.lineWidth = 1.2;
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    this.drawProjectedEllipse(
      { x: obj.x, y: 1.36, z: obj.z },
      rxTop,
      ryTop,
      "#cf8b3b",
      "rgba(255, 237, 184, .8)",
      1.35
    );
    this.drawProjectedEllipse(
      { x: obj.x, y: 1.39, z: obj.z },
      rxTop * 0.72,
      ryTop * 0.56,
      "rgba(137, 205, 225, .92)",
      "rgba(255,255,255,.78)",
      0.95
    );
    this.drawProjectedEllipse(
      { x: obj.x - 0.25, y: 1.42, z: obj.z - 0.08 },
      rxTop * 0.28,
      ryTop * 0.2,
      "rgba(238, 255, 255, .38)"
    );
  }

  drawLampstand(obj) {
    this.addObjectHitRegion(obj, 14);
    this.cuboid({ x: obj.x, z: obj.z, y: 0, w: 0.8, d: 0.5, h: 0.18, color: "#c99123" });
    this.drawModelLine(
      [
        { x: obj.x, y: 0.16, z: obj.z },
        { x: obj.x, y: obj.h, z: obj.z }
      ],
      "#dca52d",
      2.6
    );
    [-0.65, -0.43, -0.22, 0.22, 0.43, 0.65].forEach(offset => {
      const side = Math.sign(offset);
      const startY = 0.95 + Math.abs(offset) * 0.55;
      this.drawModelLine(
        [
          { x: obj.x, y: startY, z: obj.z },
          { x: obj.x + side * Math.abs(offset) * 0.72, y: startY + 0.52, z: obj.z },
          { x: obj.x + offset, y: obj.h - Math.abs(offset) * 0.18, z: obj.z }
        ],
        "#e1b43d",
        2.25
      );
    });
    [-0.72, -0.48, -0.24, 0, 0.24, 0.48, 0.72].forEach(offset => {
      this.drawProjectedEllipse(
        { x: obj.x + offset, y: obj.h + 0.08, z: obj.z },
        3.6,
        2.3,
        "#fff0a8",
        "#b97718",
        0.8
      );
    });
  }

  drawShewbreadTable(obj) {
    this.cuboid({ ...obj, color: "#b77a2d", id: obj.id, label: obj.label });
    [-0.62, -0.36, -0.1, 0.16, 0.42, 0.68].forEach((offset, index) => {
      [-0.22, 0.22].forEach(row => {
        this.drawProjectedEllipse(
          { x: obj.x + offset, y: obj.h + 0.12, z: obj.z + row },
          2.2,
          1.3,
          index % 2 ? "#f0ce78" : "#f4dc92",
          "rgba(124, 80, 28, .35)",
          0.55
        );
      });
    });
    [-1, 1].forEach(dx => {
      [-1, 1].forEach(dz => {
        this.cuboid({
          x: obj.x + dx * 0.72,
          z: obj.z + dz * 0.28,
          y: -0.05,
          w: 0.12,
          d: 0.12,
          h: 0.85,
          color: "#8c571f"
        });
      });
    });
  }

  drawIncenseAltar(obj) {
    this.cuboid({ ...obj, color: "#c9932e", id: obj.id, label: obj.label });
    [-1, 1].forEach(dx => {
      [-1, 1].forEach(dz => {
        this.cuboid({
          x: obj.x + dx * 0.36,
          z: obj.z + dz * 0.36,
          y: obj.h,
          w: 0.16,
          d: 0.16,
          h: 0.28,
          color: "#f0c85a"
        });
      });
    });
    this.drawProjectedEllipse(
      { x: obj.x, y: obj.h + 0.2, z: obj.z },
      4.2,
      2.4,
      "rgba(80, 54, 34, .35)",
      "rgba(248, 223, 150, .55)",
      0.8
    );
    this.drawSmoke(obj.x, obj.z, obj.h + 0.15, -0.12);
  }

  drawArk(obj) {
    this.cuboid({ ...obj, color: "#c69524", id: obj.id, label: obj.label });
    const seat = [
      this.project({ x: obj.x - obj.w / 2 - 0.08, y: obj.h + 0.16, z: obj.z - obj.d / 2 - 0.08 }),
      this.project({ x: obj.x + obj.w / 2 + 0.08, y: obj.h + 0.16, z: obj.z - obj.d / 2 - 0.08 }),
      this.project({ x: obj.x + obj.w / 2 + 0.08, y: obj.h + 0.16, z: obj.z + obj.d / 2 + 0.08 }),
      this.project({ x: obj.x - obj.w / 2 - 0.08, y: obj.h + 0.16, z: obj.z + obj.d / 2 + 0.08 })
    ];
    this.polygon(seat, "#f3cc58", "rgba(255,255,255,.45)", 0.8);
    [-0.55, 0.55].forEach(offset => {
      this.drawModelLine(
        [
          { x: obj.x + offset, y: obj.h + 0.18, z: obj.z },
          { x: obj.x + offset * 0.55, y: obj.h + 0.88, z: obj.z - 0.16 },
          { x: obj.x, y: obj.h + 0.55, z: obj.z }
        ],
        "#fff0aa",
        1.8
      );
    });
  }

  drawSlaughterTable(x, z) {
    this.cuboid({ x, z, y: 0.5, w: 3.8, d: 1.65, h: 0.22, color: "#c49449" });
    [-1, 1].forEach(dx => {
      [-1, 1].forEach(dz => {
        this.cuboid({ x: x + dx * 1.45, z: z + dz * 0.58, w: 0.18, d: 0.18, h: 0.52, color: "#8b5b2b" });
      });
    });
  }

  drawPriest(x, z) {
    const hitPoints = [
      { x: x - 1.15, y: 0, z: z - 0.95 },
      { x: x + 1.15, y: 0, z: z - 0.95 },
      { x: x + 1.15, y: 0, z: z + 0.95 },
      { x: x - 1.15, y: 0, z: z + 0.95 },
      { x: x - 1.15, y: 4.15, z: z - 0.95 },
      { x: x + 1.15, y: 4.15, z: z - 0.95 },
      { x: x + 1.15, y: 4.15, z: z + 0.95 },
      { x: x - 1.15, y: 4.15, z: z + 0.95 }
    ].map(point => this.project(point));
    const minX = Math.min(...hitPoints.map(point => point.x));
    const maxX = Math.max(...hitPoints.map(point => point.x));
    const minY = Math.min(...hitPoints.map(point => point.y));
    const maxY = Math.max(...hitPoints.map(point => point.y));
    this.hitRegions.push({
      id: "priest",
      label: "The Priest in the Sanctuary",
      x: minX - 22,
      y: minY - 22,
      w: maxX - minX + 44,
      h: maxY - minY + 44,
      cx: (minX + maxX) / 2
    });
    this.priestPickRegion = {
      x: minX - 44,
      y: minY - 44,
      w: maxX - minX + 88,
      h: maxY - minY + 88
    };

    const ctx = this.ctx;
    const shadow = this.project({ x, y: 0.03, z });
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(shadow.x, shadow.y, Math.max(8, this.zoom * 0.8), Math.max(3, this.zoom * 0.28), -this.yaw, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(64, 43, 22, .18)";
    ctx.fill();
    ctx.restore();

    this.polygon(
      [
        this.project({ x: x - 0.42, y: 3.05, z }),
        this.project({ x: x + 0.42, y: 3.05, z }),
        this.project({ x: x + 0.72, y: 0.08, z: z + 0.05 }),
        this.project({ x: x - 0.72, y: 0.08, z: z + 0.05 })
      ],
      "rgba(250, 247, 237, .96)",
      "rgba(165, 126, 72, .38)",
      0.85
    );
    this.polygon(
      [
        this.project({ x: x - 0.1, y: 2.96, z: z + 0.01 }),
        this.project({ x: x + 0.14, y: 2.96, z: z + 0.01 }),
        this.project({ x: x + 0.18, y: 0.16, z: z + 0.04 }),
        this.project({ x: x - 0.16, y: 0.16, z: z + 0.04 })
      ],
      "rgba(50, 91, 166, .78)"
    );
    this.drawModelLine(
      [
        { x: x - 0.48, y: 2.62, z },
        { x: x - 0.96, y: 1.6, z: z + 0.12 }
      ],
      "rgba(232, 222, 202, .95)",
      2.4
    );
    this.drawModelLine(
      [
        { x: x + 0.48, y: 2.62, z },
        { x: x + 0.9, y: 1.6, z: z - 0.08 }
      ],
      "rgba(232, 222, 202, .95)",
      2.4
    );

    const head = this.project({ x, y: 3.5, z });
    const radius = Math.max(5.2, this.zoom * 0.34);
    ctx.save();
    ctx.beginPath();
    ctx.arc(head.x, head.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#b97743";
    ctx.fill();
    ctx.strokeStyle = "rgba(83, 45, 25, .26)";
    ctx.stroke();
    const turban = this.project({ x, y: 3.8, z });
    ctx.beginPath();
    ctx.ellipse(turban.x, turban.y, radius * 1.15, radius * 0.42, -this.yaw, 0, Math.PI * 2);
    ctx.fillStyle = "#f4eee0";
    ctx.fill();
    ctx.strokeStyle = "rgba(126, 94, 58, .28)";
    ctx.stroke();
    ctx.restore();
  }

  drawCourtyardFurniture() {
    const tablePositions = [
      [15, -9],
      [15, 9],
      [33, -11],
      [33, 11],
      [41, -6],
      [41, 6]
    ];
    tablePositions.forEach(([x, z]) => this.drawSlaughterTable(x, z));
    this.drawSmoke(25, 0, 2.2, 0.35);
    this.drawPriest(10.5, 3.6);
  }

  drawObjects() {
    const sorted = [...sceneObjects].sort((a, b) => this.project({ x: a.x, z: a.z }).depth - this.project({ x: b.x, z: b.z }).depth);
    sorted.forEach(obj => {
      if (obj.hidden || obj.gate) return;
      this.drawObjectFocusGlow(obj);
      if (obj.id === "altar") this.drawAltar(obj);
      else if (obj.id === "laver") this.drawLaver(obj);
      else if (obj.id === "lampstand") this.drawLampstand(obj);
      else if (obj.id === "shewbread") this.drawShewbreadTable(obj);
      else if (obj.id === "incense") this.drawIncenseAltar(obj);
      else if (obj.id === "ark") this.drawArk(obj);
      else this.cuboid({ ...obj, id: obj.id, label: obj.label });
    });
  }

  roundRect(x, y, w, h, r) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  draw() {
    this.hitRegions = [];
    this.priestPickRegion = null;
    this.drawGround();
    this.drawCampTents();
    this.drawCourtyard();
    this.drawTabernacle();
    this.drawCourtyardFurniture();
    this.drawObjects();
  }

  animate() {
    if (this.needsDraw) {
      this.draw();
      this.needsDraw = false;
    }
    requestAnimationFrame(() => this.animate());
  }
}

function init() {
  renderPhases();
  renderMinistry();
  renderPriestlyAttire();
  renderFeastTabs();
  renderChronicles();
  renderFocus1844();
  renderFaq();
  bindUi();
  scene = new SanctuaryThreeScene(qs("#sanctuary-canvas"), {
    openArticle,
    isActive: () => currentView === "map"
  });
}

init();
