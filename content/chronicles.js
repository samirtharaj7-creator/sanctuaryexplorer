export const chroniclePerspectiveInfo = {
  "priest": {
    "label": "Priest's Perspective",
    "title": "The Ministering Priest",
    "text": "Enter the priest's world of washing, fire, blood, incense, careful service, and responsibility for a waiting people."
  },
  "commoner": {
    "label": "Commoner's Perspective",
    "title": "The Commoner of Israel",
    "text": "Walk beside ordinary Israelite families as they bring questions, guilt, offerings, tears, and hope to the God who has made a way back."
  }
};

const chronicleScene = (timeLabel, title, narrative, scripture) => ({ timeLabel, title, narrative, scripture });

export const chronicleStories = [
  {
    "id": "priest-daily",
    "perspective": "priest",
    "serviceType": "daily",
    "serviceLabel": "Daily Service",
    "title": "Eliab and the Morning Fire",
    "subtitle": "A young priest discovers how easily familiar service can lose its holy weight.",
    "scenes": [
      {
        "timeLabel": "Before dawn",
        "title": "The Linen Wall in the Dark",
        "narrative": "My name is Eliab. I slip out before my little boy wakes, while the camp is still washed in the blue of early morning. In the half-light, the sanctuary wall seems almost to glow. My wife once asked whether I am still afraid when I serve there. I told her I am - and that I pray I never become too comfortable.",
        "scripture": "KJV: Exodus 27:9-19; Leviticus 6:8-13."
      },
      {
        "timeLabel": "At the gate",
        "title": "Do Not Hurry Holy Things",
        "narrative": "My father served before me. At the gate he would lay a hand on my shoulder and say, \"Do not rush what is holy.\" His voice returns to me every morning. The duties may become familiar, but God never becomes ordinary. Careless hands can teach the camp the terrible lie that sin is small and mercy costs little.",
        "scripture": "KJV: Leviticus 10:3; Hebrews 12:28."
      },
      {
        "timeLabel": "First light",
        "title": "Water for a Priest",
        "narrative": "I wash slowly at the laver. Water runs over the same fingers that will soon receive blood. My family name does not make me clean, and priestly clothing cannot wash the heart. Before I serve mercy to anyone else, the water reminds me that I live by mercy too.",
        "scripture": "KJV: Exodus 30:18-21; Hebrews 5:1-3."
      },
      {
        "timeLabel": "Morning embers",
        "title": "The Fire That Stayed Alive",
        "narrative": "The altar fire has survived the night. I stir the coals until heat presses against my face. Yesterday closed with sacrifice; this day opens the same way. While Israel sleeps, wakes, works, and fails, God keeps the sign of His provision burning in the center of the camp.",
        "scripture": "KJV: Leviticus 6:12-13; Exodus 29:38-42."
      },
      {
        "timeLabel": "Sunrise",
        "title": "The Morning Lamb",
        "narrative": "The morning lamb is led forward without noise. Nothing in its clear eyes belongs to guilt, and that is what makes the sight painful. Before anyone has argued a case or offered an excuse, the lamb already stands for the camp. God has provided a way for sinners to live.",
        "scripture": "KJV: Exodus 29:38-39; John 1:29."
      },
      {
        "timeLabel": "At the altar",
        "title": "Blood That Tells the Truth",
        "narrative": "I receive the blood and make myself look at it. It tells the truth without softening it: sin takes life. Yet it carries another truth just as plainly - God has given a life to answer death. The guilty are not safe because heaven overlooks guilt, but because a substitute has been accepted.",
        "scripture": "KJV: Leviticus 17:11; Romans 6:23."
      },
      {
        "timeLabel": "Rising smoke",
        "title": "A Sign Above the Camp",
        "narrative": "Smoke rises above the linen wall into the brightening sky. Somewhere outside, a child may point and ask what it means. I hope a mother answers, \"The offering has been received.\" Israel begins the morning beneath a mercy made visible.",
        "scripture": "KJV: Leviticus 1:9; Ephesians 5:2."
      },
      {
        "timeLabel": "Later morning",
        "title": "A Man at the Gate",
        "narrative": "Later, a man appears at the gate leading a goat. His eyes stay fixed on the ground. I recognize the stoop that guilt gives a person. \"I have sinned,\" he says, barely above a whisper. His wife stands beside him with a child who cannot understand why her father's voice is breaking.",
        "scripture": "KJV: Leviticus 4:27-29; Psalm 32:3-5."
      },
      {
        "timeLabel": "Confession",
        "title": "Hands on the Head",
        "narrative": "He rests his hands on the goat. The confession begins in fragments, then pours out as though a door has finally opened. The animal remains quiet beneath the burden of another person's story. God is drawing the sin into the light before it poisons the soul any longer.",
        "scripture": "KJV: Leviticus 4:29; Proverbs 28:13."
      },
      {
        "timeLabel": "The knife",
        "title": "No One Laughs Here",
        "narrative": "The blade falls, and the child buries her face against her mother. Every instinct in me wants to soften the moment, but the sanctuary refuses dishonesty. Sin wounds the innocent and costs more than the sinner imagined. Only then does forgiveness recover its wonder.",
        "scripture": "KJV: Leviticus 4:33; Isaiah 53:5."
      },
      {
        "timeLabel": "Blood ministry",
        "title": "I Go Where He Cannot",
        "narrative": "I take the blood and follow the command of God. The man remains where he is; he cannot carry his own guilt into holy space. The priest must move for him. As I serve, I remember that I am only a faint outline of the greater Priest who will carry sinners upon His own heart.",
        "scripture": "KJV: Leviticus 4:30-31; Hebrews 9:11-14."
      },
      {
        "timeLabel": "Assurance",
        "title": "You May Go in Peace",
        "narrative": "When the rite is complete, I speak the promise God has attached to it: he is forgiven and may go in peace. His face folds with relief. He came carrying what he could neither undo nor hide. He leaves because God received the substitute. News like that is not a small comfort. It is life returned.",
        "scripture": "KJV: Leviticus 4:31; Romans 5:1."
      },
      {
        "timeLabel": "Afterward",
        "title": "Small Hands, Heavy Work",
        "narrative": "After he goes, I look at my hands. They have been washed, yet they still tremble. I cannot renew a heart, restore the life that was taken, or erase guilt by wishing it away. Perhaps God lets priests feel their limits so we will long for the Priest who can truly finish the work.",
        "scripture": "KJV: Hebrews 7:26-28; Hebrews 10:11-14."
      },
      {
        "timeLabel": "Holy Place",
        "title": "Gold in the Quiet Room",
        "narrative": "Inside the tent, the sounds of the court fall away and the room glows softly with gold and lamplight. Pardon is not the end of God's purpose. He draws forgiven people near, gives them light and bread, and receives their prayers. Grace continues beyond the altar.",
        "scripture": "KJV: Exodus 26:33-35; Hebrews 9:2."
      },
      {
        "timeLabel": "Lampstand",
        "title": "A Flame for Tired Hearts",
        "narrative": "I trim a lamp whose wick has begun to smoke. A little neglect can dim the whole room. I think of mothers too exhausted to find words for prayer and men too ashamed to raise their eyes. God keeps light burning for people who have none in themselves. One day the true Light will come close enough for human hands to touch Him.",
        "scripture": "KJV: Exodus 27:20-21; John 8:12."
      },
      {
        "timeLabel": "Table",
        "title": "Bread for Every Tribe",
        "narrative": "The bread rests before the Lord - twelve loaves for twelve tribes, all remembered in His presence. I think of the hungry children scattered through the camp. The God who pardons also nourishes. A greater Bread will come, and no hungry soul who receives Him will find Him insufficient.",
        "scripture": "KJV: Leviticus 24:5-9; John 6:35."
      },
      {
        "timeLabel": "Incense",
        "title": "Prayers Made Sweet",
        "narrative": "At the golden altar, incense thickens the air. Israel has prayed today in anger, fear, grief, gratitude, and sometimes in silence because no words would come. Still the fragrance rises. Weak prayers are welcomed because mercy and mediation stand near the throne.",
        "scripture": "KJV: Exodus 30:7-8; Revelation 8:3-4."
      },
      {
        "timeLabel": "Afternoon",
        "title": "The People Outside",
        "narrative": "When I step back into the court, faces turn toward me. The people cannot see the lamps, bread, or incense, yet they trust that the ministry inside has been carried on for them. Much of God's work happens beyond the reach of our eyes. Faith rests on His word.",
        "scripture": "KJV: Luke 1:10; Hebrews 4:14-16."
      },
      {
        "timeLabel": "Evening",
        "title": "The Second Lamb",
        "narrative": "At sunset we offer the second lamb. The day ends where it began, with a life given for the guilty. Soon children will sleep and laborers will lie down weary. Above the tents, the evening smoke seems to say that the camp is held through the night by mercy.",
        "scripture": "KJV: Exodus 29:39; Psalm 4:8."
      },
      {
        "timeLabel": "Nightfall",
        "title": "Enough for Today",
        "narrative": "I return home tired enough to feel the weight in my bones. My little boy runs to me and asks, \"Papa, did God forgive anyone today?\" I gather him into my arms. \"Yes,\" I say. \"And one day He will send the Priest and Lamb who can complete what we only show in pictures.\" He falls asleep quickly. I remain awake for a while, grateful and very small.",
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
        "narrative": "My name is Shalem. The camp has gone quiet, but sleep will not come to me. My wife hears me turn again. \"Are you afraid?\" she asks. I tell her the truth. Tomorrow I must enter where no man walks casually and stand for all Israel. Yet I need mercy as surely as the youngest child beyond the gate.",
        "scripture": "KJV: Leviticus 16:2-6; Hebrews 5:1-3."
      },
      {
        "timeLabel": "Before sunrise",
        "title": "Plain Linen",
        "narrative": "The splendid garments are put away: no jeweled breastplate, no bells, no golden plate catching the sun. For this day there is only linen. Its simplicity searches me. Before the Holy One, office and beauty cannot carry a man. He approaches low, through the mercy God has provided.",
        "scripture": "KJV: Leviticus 16:4; Philippians 2:5-8."
      },
      {
        "timeLabel": "Washing",
        "title": "Cold Water and Prayer",
        "narrative": "The water is cold enough to make me catch my breath. I bathe carefully while a younger priest watches in silence. I can almost hear his question: if the high priest trembles, where can anyone find hope? Not in the priest. Hope rests in the God who appointed sacrifice, cleansing, and mercy.",
        "scripture": "KJV: Leviticus 16:4; Psalm 24:3-4."
      },
      {
        "timeLabel": "For my house",
        "title": "My Own Offering",
        "narrative": "The bull is brought for my household and me. As I look at it, memories come: impatience at home, pride hidden beneath sacred clothing, prayers spoken while the mind wandered elsewhere. I cannot carry Israel before God until I have first stood beneath mercy myself. The altar brings every priest low.",
        "scripture": "KJV: Leviticus 16:6, 11; Hebrews 7:27."
      },
      {
        "timeLabel": "Blood bowl",
        "title": "The Vessel in My Hands",
        "narrative": "The blood lies dark and warm in the bowl, and I grip the vessel more tightly than I mean to. This is no harmless religious prop. It is life poured out. A priest who forgets that is unfit to serve. Sin has brought death, yet God has made the blood of another speak on behalf of the guilty.",
        "scripture": "KJV: Leviticus 17:11; Hebrews 9:7."
      },
      {
        "timeLabel": "The goats",
        "title": "Two Animals, One Heavy Lesson",
        "narrative": "The two goats stand before the Lord. One will be slain; the other will be led away. Near the court, a boy asks his father why both are needed. The man bends down and answers, \"Because God intends to remove what He has forgiven.\" I carry that sentence into the rest of the day.",
        "scripture": "KJV: Leviticus 16:7-10; Psalm 103:12."
      },
      {
        "timeLabel": "For the Lord",
        "title": "The Goat That Dies",
        "narrative": "The goat chosen for the Lord is slain, and the watching people become completely still. Even the children seem to sense that this death concerns the whole camp. Its blood will pass within the veil. No excuse can meet judgment there; only the life God accepts.",
        "scripture": "KJV: Leviticus 16:15; Romans 3:24-26."
      },
      {
        "timeLabel": "Incense",
        "title": "A Cloud to Live In",
        "narrative": "I fill the censer with coals and take the incense in both hands. Soon the fragrance rises thick around me, forming the cloud God commanded for my protection. The mercy of that provision steadies my breathing. Even at His throne, the Lord remembers that we are dust.",
        "scripture": "KJV: Leviticus 16:12-13; Psalm 103:13-14."
      },
      {
        "timeLabel": "The veil",
        "title": "The Curtain Before Me",
        "narrative": "The inner curtain hangs motionless in the dim light, its blue, purple, scarlet, and white threads bright against the shadows. I reach toward it, then pause. Beyond it stand the ark, the law, and the mercy seat. I have no strength equal to that room. Only God's command and compassion carry me forward.",
        "scripture": "KJV: Exodus 26:31-34; Hebrews 9:3-5."
      },
      {
        "timeLabel": "Inside",
        "title": "The Silence of Gold",
        "narrative": "I pass through the veil. The room is small, yet it feels wider than the wilderness outside. Before me is the ark, with the law beneath and the mercy seat above. Here blood will speak where law has been broken. Courage is not what holds me upright. Obedience and grace do.",
        "scripture": "KJV: Exodus 25:21-22; Hebrews 9:4-5."
      },
      {
        "timeLabel": "Sprinkling",
        "title": "Blood Before the Mercy Seat",
        "narrative": "I sprinkle the blood exactly as commanded. Each drop seems to declare three things at once: sin is real, God's law is holy, and mercy has made a righteous way through. God is not discovering Israel's history. He is revealing how He can cleanse His people without pretending evil never mattered.",
        "scripture": "KJV: Leviticus 16:14-16; Daniel 7:9-10."
      },
      {
        "timeLabel": "The record",
        "title": "What the Sanctuary Has Carried",
        "narrative": "Throughout the year I have watched forgiven worshipers walk home with lighter faces. Their pardon was real. Yet the sanctuary carried the history of those confessed sins within the process of mercy. Today God deals with what His dwelling has borne. Forgiveness was always moving toward cleansing.",
        "scripture": "KJV: Leviticus 16:16; Daniel 8:14."
      },
      {
        "timeLabel": "Coming out",
        "title": "Still Alive",
        "narrative": "When I step back through the veil, strength drains from my legs. I am still alive. The congregation cannot see me yet, but I can feel the weight of their waiting. I want to reach every anxious mother and frightened child with the news that God has not cast His people away.",
        "scripture": "KJV: Leviticus 16:17; Hebrews 9:8."
      },
      {
        "timeLabel": "The altar",
        "title": "Mercy Cleans Its Own House",
        "narrative": "I place the blood on the altar's horns. All year this altar has heard the sobs and confessions of sinners; now it too is cleansed. God is setting His dwelling right, not because He has tired of His people, but because He desires to live among them with sin no longer standing between.",
        "scripture": "KJV: Leviticus 16:18-19; Revelation 21:3."
      },
      {
        "timeLabel": "The live goat",
        "title": "Both Hands",
        "narrative": "The live goat is brought, and I rest both hands on its head. As I name Israel's iniquities, transgressions, and sins, the words feel almost too heavy to speak. Yet the act is not theater. The Lord is showing the camp that what sacrificial blood has answered will not remain forever in His house.",
        "scripture": "KJV: Leviticus 16:20-21; Micah 7:19."
      },
      {
        "timeLabel": "Away from camp",
        "title": "The Goat Disappears",
        "narrative": "The appointed man begins the long walk toward the wilderness. Children rise on their toes; parents shade their eyes. The goat becomes a speck and then disappears into the desert. \"Will it come back?\" a little girl asks. \"No,\" her father says. The answer seems to let the entire camp breathe.",
        "scripture": "KJV: Leviticus 16:22; Psalm 103:12."
      },
      {
        "timeLabel": "The people",
        "title": "Tears Without Terror",
        "narrative": "Tears begin to move through the people, but they are not the tears of hopelessness. Fear has received an answer. The service has made sin look as terrible as it is, and God more wonderful than we had dared to hope. He has provided sacrifice, priesthood, cleansing, and removal.",
        "scripture": "KJV: Leviticus 16:30; Romans 8:33-34."
      },
      {
        "timeLabel": "Garments changed",
        "title": "Beauty After Cleansing",
        "narrative": "I lay aside the plain linen and put on the garments of glory again. They feel different after the day behind the veil. I know more clearly than ever that they cannot make me worthy. They testify that God clothes weak people for service after His cleansing work is done.",
        "scripture": "KJV: Leviticus 16:23-24; Revelation 19:8."
      },
      {
        "timeLabel": "Blessing",
        "title": "Hands Over Israel",
        "narrative": "I raise my hands over Israel, and my voice trembles as I speak the blessing. I am no savior; I can only bear witness. The Lord is the One who blesses, keeps, and turns His face toward His people. They will go home in peace because mercy, not priestly strength, has carried this day.",
        "scripture": "KJV: Numbers 6:24-26; Hebrews 9:13-14."
      },
      {
        "timeLabel": "Night",
        "title": "Waiting for the Last Day",
        "narrative": "After sunset I sit outside my tent beneath a sky that seems newly washed. Yet I know how soon sin will appear again among us. My heart reaches beyond this yearly service toward the true High Priest and the final cleansing - toward a world where no child will ever need to ask why blood must be shed.",
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
    "subtitle": "A family discovers how costly forgiveness is - and how gently God provides it.",
    "scenes": [
      {
        "timeLabel": "Morning",
        "title": "The Secret in My Hand",
        "narrative": "My name is Liora. I took a small bronze pin from our neighbor because sunlight flashed across it. In my hand it seemed like almost nothing. By the next morning, it felt heavier than a stone. I pushed it beneath my sleeping mat, but there was nowhere inside me where I could hide it.",
        "scripture": "KJV: Psalm 32:3-5; Leviticus 5:5."
      },
      {
        "timeLabel": "At home",
        "title": "Mama Knows",
        "narrative": "Mama found me crying before anyone had eaten. She sat down beside me without pressing for an answer and waited until I could speak. When the whole story came out, tears filled her eyes too. \"Sin never hurts only the person who does it,\" she said. \"But the Lord has made a way for hidden things to come into the light.\"",
        "scripture": "KJV: Proverbs 28:13; 1 John 1:9."
      },
      {
        "timeLabel": "The fold",
        "title": "Not That Lamb",
        "narrative": "Papa went to the fold and chose a little white lamb that often followed my brother around. \"Please, not that one,\" I said. He knelt until we were eye to eye. \"This is why sin brings sorrow,\" he answered. \"The innocent teaches us what guilt truly costs.\"",
        "scripture": "KJV: Leviticus 4:27-32; Isaiah 53:6."
      },
      {
        "timeLabel": "The walk",
        "title": "No One Scolds the Lamb",
        "narrative": "The lamb pulled against the rope as we walked, stopping once to smell a dry bush. My brother reached out to stroke it, remembered where we were going, and drew his hand back. Nobody could be angry with the lamb. It had done nothing wrong.",
        "scripture": "KJV: Leviticus 1:3-4; 1 Peter 1:18-19."
      },
      {
        "timeLabel": "The gate",
        "title": "A Door for Guilty People",
        "narrative": "The colored gate stirred in the wind - blue, purple, scarlet, and white. I had imagined it would seem angry when I arrived, but it stood open. Mama tightened her hand around mine. \"God does not open the way because sin is harmless,\" she said. \"He opens it because He is merciful.\"",
        "scripture": "KJV: Exodus 27:16; John 10:9."
      },
      {
        "timeLabel": "Waiting",
        "title": "Not Alone",
        "narrative": "Other people waited near the court. One man held two birds. A weary woman carried a child against her shoulder. Until then, I had thought I was the only person in the camp with something hidden. At the sanctuary I learned that every family needs mercy, and God does not turn needy people away.",
        "scripture": "KJV: Leviticus 5:7; Romans 3:23-24."
      },
      {
        "timeLabel": "Hands",
        "title": "Telling the Truth",
        "narrative": "Papa covered my hand with his and helped me rest it on the lamb's head. The wool was warm beneath my fingers. I said aloud what I had done. The words were bitter, but once they were spoken, breath came more freely. Hiding had made my world narrow. Confession brought me to the place where mercy could meet me.",
        "scripture": "KJV: Leviticus 5:5-6; Psalm 32:5."
      },
      {
        "timeLabel": "Transfer",
        "title": "The Lamb Stood Still",
        "narrative": "The lamb remained quiet under my hand. It knew nothing of my secret, yet it now bore the sign of my guilt. I cried harder, and Papa let me. \"Do not forget this,\" he whispered. \"The one who stands in your place is innocent. That is why forgiveness can break your heart and heal it at the same time.\"",
        "scripture": "KJV: Leviticus 4:29; 2 Corinthians 5:21."
      },
      {
        "timeLabel": "Death",
        "title": "When I Understood a Little",
        "narrative": "When the knife was raised, I turned away, but I could not close my ears. My legs trembled. Yesterday the bronze pin had seemed so small. Now I understood that no sin remains small when its cost falls on the innocent. The lamb died, and my heart learned what explanations had never taught it.",
        "scripture": "KJV: Leviticus 4:33; Romans 6:23."
      },
      {
        "timeLabel": "Blood",
        "title": "Life for Life",
        "narrative": "The priest received the blood. It was not beautiful to look at, but Papa told me it was precious because life is in the blood. I gripped the pin and wished with all my strength that I could undo yesterday. I could not. Yet God had accepted a life where my guilt had stood.",
        "scripture": "KJV: Leviticus 17:11; Ephesians 1:7."
      },
      {
        "timeLabel": "The priest",
        "title": "Someone Went Near for Me",
        "narrative": "The priest took the blood farther than I was allowed to go. I followed him with my eyes until distance stopped me. I remained outside, but the ministry continued for me. Years later I would understand that the whole scene was teaching us to trust a greater Priest who could carry sinners into the very presence of God.",
        "scripture": "KJV: Leviticus 4:30-31; Hebrews 9:12."
      },
      {
        "timeLabel": "Smoke",
        "title": "A Smell I Remembered",
        "narrative": "Smoke climbed from the altar. I had expected it to smell only of sadness, but to me it also smelled like the end of secrecy. Mama dried my face. \"The offering has been accepted,\" she said. The lamb was gone, and somehow hope had drawn closer.",
        "scripture": "KJV: Leviticus 4:31; Psalm 51:17."
      },
      {
        "timeLabel": "Forgiven",
        "title": "The Word That Opened My Chest",
        "narrative": "The priest spoke gently: \"The Lord has provided atonement.\" I did not understand every part of his sentence, but I understood the kindness in his face. I was not being driven away as a thief. I was being sent home forgiven - and called to set right what I had damaged.",
        "scripture": "KJV: Leviticus 4:31; Romans 5:1."
      },
      {
        "timeLabel": "Restitution",
        "title": "Returning the Pin",
        "narrative": "We went directly to our neighbor. My hand shook as I returned the pin along with the added payment Papa carried. The neighbor looked at me for a long time before accepting it. Repairing the wrong was painful, but mercy had made me brave enough to do it.",
        "scripture": "KJV: Leviticus 6:1-5; Numbers 5:6-7."
      },
      {
        "timeLabel": "Questions",
        "title": "My Brother Asks Why",
        "narrative": "On the road home, my brother asked, \"Was the lamb angry with Liora?\" Papa stopped and answered carefully. \"No. It did not choose her wrong. God used its innocence to show that another can carry what the guilty person cannot.\" My brother reached for my hand and held it the rest of the way.",
        "scripture": "KJV: Isaiah 53:7; John 1:29."
      },
      {
        "timeLabel": "Afternoon",
        "title": "The Mat Feels Different",
        "narrative": "Back in our tent, the empty place beneath my sleeping mat kept drawing my eyes. The secret was no longer there. I still hurt when I remembered the lamb, but the ache was clean now, not poisonous. Guilt had made me afraid of being known. Forgiveness let me sit among my family without hiding.",
        "scripture": "KJV: Psalm 32:1; Romans 8:1."
      },
      {
        "timeLabel": "Evening smoke",
        "title": "Mercy for the Whole Camp",
        "narrative": "At sunset, smoke from the evening offering rose beyond the tents. Papa lifted me high enough to see it. \"That is for all Israel,\" he said. I laid my head on his shoulder. The God who had met one guilty child was holding the entire camp beneath His mercy.",
        "scripture": "KJV: Exodus 29:38-42; Lamentations 3:22-23."
      },
      {
        "timeLabel": "Night",
        "title": "Safe Enough to Sleep",
        "narrative": "That night Mama tucked the blanket around me. \"Will I always remember the lamb?\" I asked. She brushed my hair away from my eyes. \"I hope you remember,\" she said, \"but remember most of all why the Lord provided it. He wanted you to come near instead of running away.\"",
        "scripture": "KJV: Psalm 4:8; Psalm 103:11-12."
      },
      {
        "timeLabel": "Dreaming",
        "title": "A Better Lamb",
        "narrative": "As sleep came, I wondered whether God would one day provide a sacrifice so great that no other lamb would ever have to die. I did not know the Savior's name, but the sanctuary had planted the hope in me: God Himself would provide the Lamb.",
        "scripture": "KJV: John 1:29; Revelation 5:12."
      },
      {
        "timeLabel": "Morning after",
        "title": "Light in the Tent",
        "narrative": "The next morning our tent was full of ordinary sounds - grain grinding, my brother humming, Mama laughing at something Papa said. Ordinary life felt newly precious. Sin had locked me inside fear; mercy had opened the door, and I stepped into the day forgiven.",
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
    "subtitle": "A family waits through the solemn day and learns that forgiven sin will not remain forever.",
    "scenes": [
      {
        "timeLabel": "Before sunrise",
        "title": "No Breakfast Fire",
        "narrative": "My name is Noam. Most mornings our tent smells of warm bread, but today no cooking fire has been lit. Even my little sister speaks in a whisper. Papa says this is the Day of Atonement, when Israel remembers that sin cannot be allowed to live forever among the people of God.",
        "scripture": "KJV: Leviticus 16:29-31; Leviticus 23:27."
      },
      {
        "timeLabel": "Inside the tent",
        "title": "The Family Talks Low",
        "narrative": "We sit together on the woven mat while Mama asks whether anything needs to be confessed. At first the tent is silent. Then my sister admits she held on to anger, and I tell them how I mocked a smaller boy. Papa closes his eyes. \"The Lord already knows,\" he says. \"We confess because it is time for hiding to end.\"",
        "scripture": "KJV: Psalm 139:23-24; 1 John 1:9."
      },
      {
        "timeLabel": "Papa prays",
        "title": "Even Grown Men Need Mercy",
        "narrative": "Papa prays for each of us and then begins to confess his own harshness and pride. His voice breaks, and I stare at him. I had thought strength meant never appearing weak. That morning I learned something better: strong people need mercy too, and a home becomes safer when truth can be spoken without fear.",
        "scripture": "KJV: Psalm 130:3-4; James 5:16."
      },
      {
        "timeLabel": "The quiet camp",
        "title": "Walking Without Songs",
        "narrative": "We join other families walking toward the sanctuary. No one sings or bargains; only the sound of many feet moves through the sand. Ahead, the white court wall comes into view. I think of all the offerings carried there during the year. Worshipers returned home forgiven, while the sanctuary held their cases until this day of cleansing.",
        "scripture": "KJV: Leviticus 16:16; Daniel 8:14."
      },
      {
        "timeLabel": "The high priest",
        "title": "Plain Clothes for a Holy Day",
        "narrative": "The high priest appears in plain linen, and I am surprised. I had expected the brilliance of his usual garments. Mama leans close. \"Today even the high priest comes low,\" she says. Something inside me grows still. No one enters God's presence by displaying greatness.",
        "scripture": "KJV: Leviticus 16:4; Hebrews 5:1-3."
      },
      {
        "timeLabel": "His offering",
        "title": "The Priest Is Not the Savior",
        "narrative": "A bull is offered for the high priest and his household. \"Does he need mercy too?\" I whisper. Papa nods. \"Yes. That is why every earthly priest points beyond himself to Someone greater.\" The thought stays with me: priests may serve the plan, but only God can save.",
        "scripture": "KJV: Leviticus 16:6, 11; Hebrews 7:27."
      },
      {
        "timeLabel": "Two goats",
        "title": "One for Death, One for Away",
        "narrative": "Two goats are brought before the Lord and the lots are cast, one for the Lord and one for Azazel. My sister asks which goat is fortunate. Papa shakes his head. \"This is not chance,\" he says. \"God is teaching us that sin must be atoned for and then taken away.\"",
        "scripture": "KJV: Leviticus 16:7-10; Psalm 103:12."
      },
      {
        "timeLabel": "The first goat",
        "title": "For All of Us",
        "narrative": "The goat chosen for the Lord is slain, and silence settles over everyone. I remember how proud I felt when the other children laughed at the boy I mocked. Yesterday it seemed clever. In the shadow of the sacrifice, it looks cruel. The blood is for the whole camp because mercy is needed by us all.",
        "scripture": "KJV: Leviticus 16:15; Isaiah 53:6."
      },
      {
        "timeLabel": "The priest disappears",
        "title": "Behind the Curtain",
        "narrative": "The high priest disappears inside the tent and beyond the curtain. I rise on my toes, trying to see, until Mama draws me back. We cannot follow him or help with the work. We can only wait because God has promised that ministry is taking place beyond our sight.",
        "scripture": "KJV: Leviticus 16:17; Hebrews 9:24."
      },
      {
        "timeLabel": "Waiting",
        "title": "The Long Quiet",
        "narrative": "The silence becomes heavy enough to make every memory louder. Mean words, neglected duties, secret pride - things I had packed away in the mind begin to surface. It feels as though a chest has been opened after I had sat on the lid for months. I want it emptied, but I know I cannot empty it myself.",
        "scripture": "KJV: Jeremiah 17:9; Romans 3:19."
      },
      {
        "timeLabel": "Mama holds my hand",
        "title": "Still While Mercy Works",
        "narrative": "Mama takes my hand. \"Is the high priest safe?\" my sister asks. \"The Lord is merciful,\" Mama answers. We remain still. That day I learn that faith sometimes looks like waiting - trusting the work God has commanded when there is nothing our own hands can add.",
        "scripture": "KJV: Exodus 14:13; Hebrews 10:19-22."
      },
      {
        "timeLabel": "The mercy seat",
        "title": "Papa Explains the Ark",
        "narrative": "Papa kneels beside us and explains the ark: God's law inside, the mercy seat above it. \"Blood is sprinkled there,\" he says. \"Mercy does not throw the law away; it answers the broken law through a life given.\" In my mind I see red drops before gold and begin to understand why forgiveness can be both merciful and right.",
        "scripture": "KJV: Exodus 25:21-22; Romans 3:25-26."
      },
      {
        "timeLabel": "Cleansing",
        "title": "God Finishes What Forgiveness Began",
        "narrative": "Papa tells us the sanctuary is being cleansed. \"But weren't the people already forgiven?\" I ask. \"Yes,\" he says. \"Their forgiveness was real. Today God shows that the sins He has forgiven will not remain forever. He is carrying the story toward a clean ending.\"",
        "scripture": "KJV: Leviticus 16:16; Acts 3:19."
      },
      {
        "timeLabel": "Return",
        "title": "He Comes Out Alive",
        "narrative": "At last the high priest comes out. The whole congregation seems to exhale together, like wind moving through the camp. My sister lets out a small laugh, then covers her mouth because the day is still solemn. I feel the laugh inside me too. The priest is alive. The blood has been accepted. Hope remains among us.",
        "scripture": "KJV: Leviticus 16:20; Hebrews 9:12."
      },
      {
        "timeLabel": "The altar",
        "title": "Even Mercy Places Are Cleansed",
        "narrative": "Blood is applied to cleanse the altar, and the sight puzzles me. This is where sinners have found help all year; why would it need cleansing? Papa explains, \"The altar has carried the ministry of our confessed sins. God is showing that His whole dwelling will be made clean.\" I look at the sanctuary and begin to long for that kind of world.",
        "scripture": "KJV: Leviticus 16:18-19; Revelation 21:27."
      },
      {
        "timeLabel": "The live goat",
        "title": "All the Names of Sin",
        "narrative": "The live goat is brought forward. The high priest places both hands on its head and confesses over it. I cannot hear every word, but I know some of those sins belong to me. My chest tightens as they are named, then loosens. What is brought fully into the open can now be carried away.",
        "scripture": "KJV: Leviticus 16:21; Micah 7:19."
      },
      {
        "timeLabel": "Into the desert",
        "title": "Will It Come Back?",
        "narrative": "The goat is led toward the wilderness. My sister asks before anyone else can: \"Will it come back?\" Papa answers, \"No.\" I watch until the animal becomes a dark speck and then disappears. For the first time that day, the empty desert seems kind.",
        "scripture": "KJV: Leviticus 16:22; Psalm 103:12."
      },
      {
        "timeLabel": "Relief",
        "title": "The Camp Breathes",
        "narrative": "People begin to stir and whisper. Some weep; others hold each other without speaking. I feel as tired as if I had carried water across the camp, yet strangely light. The day has shown me how ugly sin is and how much more beautiful is the God who removes it.",
        "scripture": "KJV: Leviticus 16:30; Romans 8:33-34."
      },
      {
        "timeLabel": "Evening meal",
        "title": "Bread After Silence",
        "narrative": "When the solemn hours are over, Mama lights the cooking fire. The smell of bread returns like a promise. We eat slowly, still carrying the weight of the day. Then flour appears on my sister's cheek and Papa laughs softly. Cleansing has made room for joy again.",
        "scripture": "KJV: Leviticus 23:32; Psalm 30:5."
      },
      {
        "timeLabel": "Night",
        "title": "A World Without the Burden",
        "narrative": "That night I lie awake imagining a camp with no stolen goods, cruel laughter, angry fathers, frightened children, or animals led away to die. Papa says a day is coming when God will live with His people and nothing unclean will remain. I fall asleep wanting that world more than anything I have ever wanted.",
        "scripture": "KJV: Revelation 21:3-4; Hebrews 9:28."
      }
    ]
  }
];

export const chronicleCompanionNotes = {
  "priest-daily": [
    { promise: "Before Eliab can earn or accomplish anything, the day is already framed by God's mercy.", meaning: "The courtyard invites sinners near, but its ordered entrance teaches them to approach with reverence." },
    { promise: "Holy fear is healthy when it keeps the heart tender rather than driving it away from God.", meaning: "Priestly routines were meant to preserve wonder, never to make sacred service feel ordinary." },
    { promise: "The person who serves grace must remember that he also lives beneath it.", meaning: "At the laver, priests received cleansing before they ministered on behalf of anyone else." },
    { promise: "The altar fire survives the night because God's mercy does not go dark when the camp sleeps.", meaning: "Its continual flame signified an ongoing provision of atonement and covenant care." },
    { promise: "God provides the substitute before the sinner has found the words to explain the guilt.", meaning: "The morning lamb placed the entire camp beneath grace and pointed beyond itself to Christ." },
    { promise: "Blood tells the hard truth that sin kills, and the hopeful truth that a life has been given for the guilty.", meaning: "The blood ministry grounded forgiveness in a surrendered life standing in the sinner's place." },
    { promise: "Because the offering is accepted, Israel wakes beneath the kindness of God.", meaning: "The rising smoke signified God's reception of the sacrifice, not human effort climbing into heaven." },
    { promise: "Guilty people are not chased from the gate; God has made a place where their burden can be brought.", meaning: "Personal offerings carried individual guilt into the process of confession, sacrifice, and atonement." },
    { promise: "Confession is truth spoken in hope - the place where hidden sin finally meets mercy.", meaning: "The hand laid on the victim expressed identification, transfer, and genuine repentance." },
    { promise: "God makes the cost of sin visible so grace will never be mistaken for indifference.", meaning: "The substitute's death shows that forgiveness answers actual guilt with an actual life." },
    { promise: "When the worshiper can go no farther, the appointed mediator continues on his behalf.", meaning: "The priest's blood ministry taught representation and anticipated Christ's work in heaven." },
    { promise: "Peace does not come from talking ourselves out of guilt; it rests on what God has accepted.", meaning: "The worshiper leaves forgiven because sacrifice and priestly ministry have fulfilled God's word." },
    { promise: "Eliab's limitations awaken hope for a Priest greater than any son of Aaron.", meaning: "Earthly priests served as signs, and their weakness kept pointing beyond them to the Savior." },
    { promise: "God does not leave forgiven people at the gate; He draws them into light, nourishment, and prayer.", meaning: "The Holy Place reveals grace sustaining the life it has already pardoned." },
    { promise: "Christ supplies light to people who cannot kindle spiritual life from within themselves.", meaning: "The lampstand portrayed illumination from the Spirit and a witness meant to keep shining." },
    { promise: "The God who pardons His people also feeds them with the bread of life.", meaning: "The bread of the Presence kept all Israel represented and nourished before the Lord." },
    { promise: "Even halting prayers are welcomed because mediation stands near the throne.", meaning: "Incense taught that prayer is received through God's provision, not the speaker's eloquence." },
    { promise: "God continues working for His people in places their eyes cannot enter.", meaning: "The hidden ministry trained Israel to trust the priest who represented them." },
    { promise: "The evening closes beneath the same mercy that opened the morning.", meaning: "Morning and evening sacrifice placed the whole rhythm of Israel's day within atonement." },
    { promise: "A weary earthly priest can rest in the promise that the true Priest and Lamb will complete the work.", meaning: "Every part of the daily ministry reached forward to Christ's complete sacrifice and living intercession." }
  ],
  "priest-atonement": [
    { promise: "The high priest's fear becomes faith only when he rests his weight on God's mercy.", meaning: "The Day of Atonement opens with human need standing before divine provision." },
    { promise: "Near God's throne, humble dependence is safer than outward splendor.", meaning: "Plain linen clothed the high priest in the lessons of cleansing, lowliness, and dependence." },
    { promise: "Israel's hope never rested in a fearless priest, but in the God who opened the way.", meaning: "The bath before service showed that entrance into holy space required cleansing appointed by God." },
    { promise: "Before the priest can serve sinners, he must confess his own need for mercy.", meaning: "The bull offered for the priest exposed the need and imperfection of every earthly mediator." },
    { promise: "Where human worth cannot speak, the life poured out in blood can.", meaning: "Blood carried the meaning of atonement into the sanctuary's most solemn ministry." },
    { promise: "God's purpose reaches beyond pardon to the complete departure of sin.", meaning: "Together, the two goats portrayed atonement accomplished and sin finally removed." },
    { promise: "The court of heaven is answered by an accepted life, not by human excuses.", meaning: "The goat chosen for the Lord supplied the sacrificial blood used in sanctuary cleansing." },
    { promise: "God Himself provides the covering cloud for the servant who approaches in weakness.", meaning: "Incense shielded the high priest and portrayed mediation in the presence of the throne." },
    { promise: "The veil inspires fear, yet God has not left His people without an appointed way through.", meaning: "The inner curtain guarded access to the place of God's throne and covenant law." },
    { promise: "At the heart of holiness, the mercy seat rests above the law humanity has broken.", meaning: "Ark and mercy seat hold together God's justice, covenant, and saving presence." },
    { promise: "God opens the truth so that mercy can be recognized as righteous rather than careless.", meaning: "Blood before the mercy seat joined cleansing, judgment, and vindication in one scene." },
    { promise: "Pardon is moving toward a clean conclusion, not the endless storage of sin.", meaning: "The sanctuary carried the record associated with confessed sin until the annual cleansing." },
    { promise: "The high priest's return alive assures the congregation that God has not rejected them.", meaning: "His emergence from the tent gives the waiting people visible reassurance." },
    { promise: "God intends His dwelling with humanity to be free from every trace of sin.", meaning: "The cleansing of the altar showed that the sanctuary's own burden had to be resolved." },
    { promise: "What sacrificial blood has answered will not remain forever in God's house.", meaning: "Confession over the live goat made the transfer of sin for removal visible to the camp." },
    { promise: "What God carries away must not be welcomed back into the life.", meaning: "The goat disappearing into the wilderness pictured sin leaving the camp." },
    { promise: "When mercy has answered fear, even the deepest tears can turn into relief.", meaning: "For the congregation, cleansing was both solemn judgment and gracious release." },
    { promise: "Once the cleansing is complete, God clothes His servant again for service.", meaning: "The change of garments portrayed restoration after the atoning ministry had been completed." },
    { promise: "The priest does not manufacture the blessing; he only announces what comes from God.", meaning: "The priestly blessing declared God's favor over a people who had passed through atonement and cleansing." },
    { promise: "The true High Priest will end the need for sacrificial blood and bring His people home cleansed.", meaning: "The yearly service looked ahead to Christ's closing work of sanctuary cleansing." }
  ],
  "commoner-daily": [
    { promise: "The secret that grows heavy in the heart can still be carried to the place where mercy waits.", meaning: "Personal guilt begins to loosen its grip when it moves toward confession and sacrifice." },
    { promise: "God's way home allows sinners to speak the truth without being destroyed by it.", meaning: "Confession restores honesty before God and begins restoring honesty with the person who was harmed." },
    { promise: "The innocent substitute reveals both the grief sin causes and the tenderness of God's provision.", meaning: "The unblemished victim symbolically bore the guilt of the repentant worshiper." },
    { promise: "The lamb's innocence teaches the conscience what the stolen object never could.", meaning: "The walk to the sanctuary turns the cost of sin from an idea into a personal reality." },
    { promise: "The open gate announces mercy before the sinner feels deserving of it.", meaning: "The entrance marked the one way God had appointed into the court of atonement." },
    { promise: "At the sanctuary, no guilty person discovers that his family alone needs grace.", meaning: "Many kinds of sorrow and guilt gather within the same gracious court." },
    { promise: "Confession opens a heart that secrecy had cramped and darkened.", meaning: "Resting the hand on the victim while naming the wrong joined repentance to symbolic transfer." },
    { promise: "The innocent substitute stands quietly in the place the guilty person cannot safely occupy.", meaning: "Substitution shows that forgiveness is at once costly and compassionate." },
    { promise: "Mercy first hurts by telling the truth, then heals by providing another life.", meaning: "The victim's death revealed both the wages of sin and the answer God supplied." },
    { promise: "A life is given at the very place where guilt had stood.", meaning: "Because blood represented life, God appointed it as the means of sacrificial atonement." },
    { promise: "Mercy can continue acting for the sinner after the sinner has reached the limit of approach.", meaning: "The priest carried the sacrifice forward within the order God had established." },
    { promise: "Once God accepts the offering, even the altar's smoke can speak of hope.", meaning: "The burning on the altar signaled that the sacrifice had been received." },
    { promise: "A forgiven child returns home to live in truth rather than fear.", meaning: "Atonement gives assurance and calls the forgiven person into a changed life." },
    { promise: "Mercy supplies the courage required to repair what sin has damaged.", meaning: "Restitution shows that forgiveness reaches relationships as well as the conscience." },
    { promise: "A child's difficult question can become the beginning of understanding substitution.", meaning: "Families help the next generation grasp grace by explaining what the sanctuary rite means." },
    { promise: "When secrecy ends, the home can become a safe place again.", meaning: "Forgiveness restores belonging without pretending the wrong was unimportant." },
    { promise: "The mercy that reaches one child is the same mercy surrounding the entire camp.", meaning: "The evening lamb placed corporate grace around the whole community of Israel." },
    { promise: "Remembering the lamb protects the heart from treating forgiveness cheaply.", meaning: "After the worshiper returns home, the sacrifice continues shaping conscience and gratitude." },
    { promise: "God's promise moves toward a greater Lamb who will bring the long age of animal sacrifice to its goal.", meaning: "The continual offering pointed forward to Jesus, the Lamb of God." },
    { promise: "Forgiveness gives ordinary life back as something precious rather than assumed.", meaning: "Atonement returns the worshiper to daily life with peace and assurance." }
  ],
  "commoner-atonement": [
    { promise: "The silent day proclaims that sin will not always remain among God's people.", meaning: "The Day of Atonement called Israel into sacred rest, honest self-examination, and hope." },
    { promise: "God is safe enough for an entire family to stop hiding.", meaning: "Humbling the soul included bringing concealed wrong into honest confession before God." },
    { promise: "Mercy is needed by fathers and children, leaders and ordinary people alike.", meaning: "The whole household stands in need of God, not only the person whose failure is most visible." },
    { promise: "Forgiven sin is not dismissed or forgotten; God carries its history toward cleansing.", meaning: "The sanctuary's accumulated record explains why a yearly work of cleansing was necessary." },
    { promise: "Display cannot open God's presence; every person comes by mercy.", meaning: "The high priest's linen garments expressed humility on the annual cleansing day." },
    { promise: "Every earthly priest points beyond himself to the One who is truly able to save.", meaning: "The priest's own offering revealed the limits of all human mediation." },
    { promise: "God has provided an answer both for guilt's penalty and for sin's final removal.", meaning: "The two goats portrayed sacrificial atonement and the ultimate banishment of sin." },
    { promise: "The blood is offered for the whole camp because mercy is needed by everyone.", meaning: "The goat chosen for the Lord supplied the blood used to cleanse people and sanctuary." },
    { promise: "God's saving ministry continues even when worried eyes can no longer follow it.", meaning: "The high priest's hidden work trained Israel to trust the mediator God had appointed." },
    { promise: "The burden we cannot empty from ourselves can still be opened in God's presence.", meaning: "The long wait exposes the weight of sin and awakens the desire for cleansing." },
    { promise: "Waiting can itself be an act of faith when mercy is working beyond sight.", meaning: "The people remain outside while the priest carries out the central atoning ministry." },
    { promise: "Mercy does not abolish God's law; it answers its broken claims through sacrificial life.", meaning: "The ark brings together the covenant law and the mercy seat placed above it." },
    { promise: "God carries forgiveness forward until the work it began is complete.", meaning: "The cleansing service promised that sin's record would not remain forever." },
    { promise: "When the priest returns alive, hope moves through the waiting congregation.", meaning: "His return signals that the ministry within the veil has been accepted." },
    { promise: "God's purpose is a clean dwelling with His people, not consciences that are only temporarily relieved.", meaning: "The cleansing of the altar extended the atoning work to the sanctuary itself." },
    { promise: "Sin is named fully because God intends to send it away.", meaning: "The live goat received the confessed sins so they could be removed from the camp." },
    { promise: "What God has sent away should never be invited back into the heart.", meaning: "The goat's journey into the wilderness dramatized final separation from confessed sin." },
    { promise: "Relief becomes holy when it follows truth, judgment, and cleansing.", meaning: "The camp's release held judgment, mercy, and assurance together." },
    { promise: "Once cleansing has done its work, joy can return without denial.", meaning: "As the solemn day ends, ordinary life resumes beneath renewed assurance." },
    { promise: "God's final purpose is a world where no burden of sin remains between Him and His people.", meaning: "The Day of Atonement looked ahead to final restoration and God's unbroken dwelling with humanity." }
  ]
};

export const documentChronicleStories = [
  {
    id: "commoner-daily",
    perspective: "commoner",
    serviceType: "daily",
    serviceLabel: "Daily Service",
    title: "The Common Israelite Who Has Sinned",
    subtitle: "A failure kept hidden is finally confessed, placed on a substitute, and forgiven.",
    scenes: [
      chronicleScene(
        "The cloud above us",
        "The Cloud Did Not Comfort Me",
        "Our tents circled the tabernacle beneath their tribal banners, and above the sanctuary the cloud of the Lord rested where everyone could see it. Most days that sight steadied me. The day my hidden sin came into the light, it frightened me. The God who had chosen to live among us had been near all along.",
        "KJV: Numbers 2; Exodus 40:34-38."
      ),
      chronicleScene(
        "The swallowed testimony",
        "When Fear Closed My Mouth",
        "A man in our camp called for witnesses, and I had heard what others had not. Fear kept me silent. By refusing to speak, I failed my neighbor and became guilty before the Lord.",
        "KJV: Leviticus 5:1."
      ),
      chronicleScene(
        "The law names me",
        "No Softer Name",
        "I gave myself every excuse I could find: I was afraid; I wanted no quarrel; I had meant no harm. The law would not let me hide behind any of them. Once guilt became known, the next step was plain - I had to confess exactly how I had sinned.",
        "KJV: Leviticus 5:5."
      ),
      chronicleScene(
        "The goat from my flock",
        "A Whole Life for a Stained One",
        "I was an ordinary man, not a ruler, so no bull was required of me. I went to my flock and chose a female goat without defect, steady on her feet and clear-eyed. Nothing was wrong with her. The stain was mine.",
        "KJV: Leviticus 5:6; Leviticus 4:27-28."
      ),
      chronicleScene(
        "The walk inward",
        "Toward the Gate",
        "I led the goat through the camp toward the courtyard gate. Families watched from beneath their standards as we passed. Long before I arrived, the smell of old smoke reached me. Then I saw the altar standing between the open gate and the dwelling of God.",
        "KJV: Exodus 27:9-19; Leviticus 1:3."
      ),
      chronicleScene(
        "The court",
        "Blood, Fire, and Waiting People",
        "The bronze altar rose in front of me, its horns darkened by use. Beyond it stood the basin, and priests moved between court and tent with practiced care. Around us people waited with their offerings. I heard low prayers, restless animals, the crackle of flame, and the sound of grief held close.",
        "KJV: Exodus 27:1-8; Exodus 30:18-21."
      ),
      chronicleScene(
        "The place of slaughter",
        "Sin Does Not End in Talk",
        "The priest led me to the place of slaughter. My fingers tightened around the goat. Until that moment, I had spoken of sin as something invisible; there I saw that it cost a life.",
        "KJV: Leviticus 1:11; Leviticus 4:29."
      ),
      chronicleScene(
        "My hand upon her head",
        "The Innocent Beneath My Palm",
        "I laid my hand on the goat's head. Her coat was warm beneath my palm. She had not withheld the truth. She had harmed no one. I was the guilty one, yet she stood where I should have stood.",
        "KJV: Leviticus 4:29; Isaiah 53:6."
      ),
      chronicleScene(
        "The confession",
        "My Sin Is Mine",
        "I prayed, \"Lord, I heard the call for a witness, and I held back what I knew. I feared people more than I feared You. I protected myself while another was left exposed. The sin is mine. I confess it before You.\"",
        "KJV: Leviticus 5:5; Proverbs 28:13."
      ),
      chronicleScene(
        "The stroke",
        "The Cost Became Visible",
        "I killed her before the Lord. When her life ended because of my sin, shame cut deeper than the knife. I had tried to keep my wrong small, but the altar showed me what I had done.",
        "KJV: Leviticus 4:29; Leviticus 17:11."
      ),
      chronicleScene(
        "The priest's work",
        "Where I Could Not Go",
        "The priest touched some of the blood to the horns of the bronze altar and poured the rest at its base. He removed the fat and burned it on the fire. My part ended in the court. From there, God had appointed the priest to carry the ministry farther than I could go.",
        "KJV: Leviticus 4:30-31; Hebrews 5:1."
      ),
      chronicleScene(
        "The word that held me",
        "Forgiven, Not Hiding",
        "I waited until the rite was complete and held to the promise God had given: atonement had been made, and I was forgiven. I left grieving the sin I had once hidden, but I no longer hid from the God who had opened a way home.",
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
    subtitle: "The camp grows still as the sanctuary is cleansed and confessed sin is carried away.",
    scenes: [
      chronicleScene(
        "The evening begins",
        "The Camp Grows Still",
        "As the ninth day ended, ordinary work stopped and the Sabbath of solemn humility began. This appointed day felt unlike the others. The whole camp entered it quietly, knowing that atonement and cleansing would be made before the Lord.",
        "KJV: Leviticus 23:26-32."
      ),
      chronicleScene(
        "A quieter camp",
        "No One Wanted to Trifle",
        "The camp that usually rang with trade, hammers, trumpet calls, and children at play fell almost silent beneath the cloud. No one wanted to treat lightly a day on which Israel was called to humble itself before God.",
        "KJV: Leviticus 23:29-30."
      ),
      chronicleScene(
        "Old sins remembered",
        "Forgiven, Yet Remembering",
        "I remembered the goat I had once brought for my own guilt and thanked God that He had not cast me away. Yet this day reached beyond one person's forgiveness. The sanctuary, altar, priests, and people were all included in its cleansing.",
        "KJV: Leviticus 16:16-19."
      ),
      chronicleScene(
        "Soul laid low",
        "No Proud Words",
        "I fasted and searched my heart. Pride had little to say on a day that brought even forgiven sin into the light of God's holiness.",
        "KJV: Leviticus 16:29-31; Psalm 139:23-24."
      ),
      chronicleScene(
        "What we knew",
        "He Could Not Enter as He Pleased",
        "We knew the order Moses had given. The high priest would bathe, put on the holy linen garments, bring a bull for his household, and receive two goats and a ram from the congregation. He could not enter the inner room when he wished or as he wished. Every step had to follow God's command.",
        "KJV: Leviticus 16:3-6."
      ),
      chronicleScene(
        "The two goats",
        "One for the Lord, One for Removal",
        "News moved quietly through the waiting camp: the two goats had been presented before the Lord at the entrance of the tent. The lots had fallen, one for the Lord and the other for the live goat that would be sent away.",
        "KJV: Leviticus 16:7-10."
      ),
      chronicleScene(
        "The Lord's goat",
        "Blood for Cleansing",
        "The goat chosen for the Lord was slain as the people's purification offering. Its blood - not the life of the goat that remained - was taken into the sanctuary for the work of cleansing.",
        "KJV: Leviticus 16:15-16."
      ),
      chronicleScene(
        "Waiting outside",
        "The Veil Hid the Work",
        "The veil hid everything from us. That made the waiting heavier. We knew only that no other person could remain in the tent while the high priest entered to make atonement for the inner sanctuary, the tent, the altar, and the people.",
        "KJV: Leviticus 16:17."
      ),
      chronicleScene(
        "The long silence",
        "The Burden Confronted",
        "The camp waited, broken only by whispered prayers and the movement of bowed bodies. The sanctuary had stood among all our uncleanness throughout the year. Now that burden was being dealt with before God.",
        "KJV: Leviticus 16:16; Daniel 8:14."
      ),
      chronicleScene(
        "The live goat brought near",
        "Nothing Hidden, Everything Named",
        "At last the live goat was brought before us. The high priest placed both hands upon its head and confessed Israel's iniquities, rebellions, and sins. Hearing our evil named aloud was painful, but it was also a relief. Nothing was being hidden.",
        "KJV: Leviticus 16:20-21."
      ),
      chronicleScene(
        "The wilderness road",
        "Carried Away",
        "The appointed man led the goat away from the tents and toward the wilderness. With every step, the burden seemed to move farther from the camp. The goat had supplied no blood for atonement, but by God's command it carried the confessed sins to a place from which they would not return.",
        "KJV: Leviticus 16:21-22."
      ),
      chronicleScene(
        "Clean before the Lord",
        "Relief Like Cool Water",
        "When the service ended, relief washed over me. We were still people with a history of sin, yet the camp and sanctuary were clean, and the God who had chosen to dwell among us had not withdrawn.",
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
    subtitle: "Follow the daily priestly work of ashes, fire, washing, sacrifice, bread, light, and incense.",
    scenes: [
      chronicleScene(
        "Before dawn",
        "Gift and Burden",
        "I am one of Aaron's sons, though not the high priest. Before dawn I rise for work that feels like both privilege and weight. We bear responsibility for the sanctuary, and none of us forgets what careless nearness once cost.",
        "KJV: Numbers 18:1-7; Leviticus 10:1-3."
      ),
      chronicleScene(
        "Ashes first",
        "The Night's Offering",
        "Still dressed in linen, I go first to the altar. The night's burnt offering has burned down to ash. I gather the remains and place them beside the altar, then change garments and carry them outside the camp to a clean place.",
        "KJV: Leviticus 6:8-11."
      ),
      chronicleScene(
        "Fire never out",
        "A Mercy Kept Burning",
        "When I return, I arrange fresh wood on the altar. The fire must never go out. Each morning we feed it and prepare it to receive the offerings of the Lord.",
        "KJV: Leviticus 6:12-13."
      ),
      chronicleScene(
        "The morning lamb",
        "The Day Begins With Sacrifice",
        "At the entrance of the tent, we offer the morning lamb with its grain and drink offerings. Smoke rises in the place where God promised to meet His people. Before the camp is fully awake, sacrifice has already marked the day.",
        "KJV: Exodus 29:38-46."
      ),
      chronicleScene(
        "Water before blood",
        "Cold Water on Priest's Hands",
        "Before touching the altar again or entering the tent, I wash my hands and feet at the basin. The water bites in the morning cold. It reminds me that holy things must never be handled with careless hands or an unguarded life.",
        "KJV: Exodus 30:18-21; Exodus 40:30-32."
      ),
      chronicleScene(
        "Lamp, bread, and ordered light",
        "Inside the Holy Place",
        "Inside the Holy Place, the lampstand stands to the south and the table to the north. We tend the lamps so their light continues, and each Sabbath we replace the bread that remains before the Lord as a sign of His covenant care.",
        "KJV: Exodus 26:35; Leviticus 24:2-9."
      ),
      chronicleScene(
        "Incense",
        "Fragrance With Fear",
        "At morning and twilight, incense rises from the golden altar as the lamps are tended. Its fragrance fills the room, but I never receive it casually. My brothers once brought fire God had not commanded, and the memory of their judgment still lives among us.",
        "KJV: Exodus 30:7-8; Leviticus 10:1-2."
      ),
      chronicleScene(
        "The faces of Israel",
        "Tears Before Blood",
        "People come all day: some thankful, some fulfilling vows, some with the exhausted face of a person who has stopped arguing with conscience. Often I meet their tears and silence before I ever touch the blood.",
        "KJV: Leviticus 1-7; Psalm 51:17."
      ),
      chronicleScene(
        "A man with a she-goat",
        "The Breaking of Pride",
        "Today a common man came with a female goat, his face drawn with strain. When he laid his hand on the animal and confessed that he had withheld testimony, I heard pride give way to truth.",
        "KJV: Leviticus 5:1, 5-6."
      ),
      chronicleScene(
        "Blood and fat",
        "Mercy Is Costly Too",
        "He killed the goat, and I placed some of its blood on the altar's horns and poured the rest at the base. After burning the fat, I was reminded again that sin has a cost and mercy has one too.",
        "KJV: Leviticus 4:30-31."
      ),
      chronicleScene(
        "Bearing what is holy",
        "No Light Thing",
        "Because the blood of this offering was not carried into the Holy Place, the priest who made atonement ate the holy flesh within the sanctuary area. Even that meal was part of the ministry. It joined the priest to the responsibility of bearing what belonged to a repentant sinner.",
        "KJV: Leviticus 6:24-30; Leviticus 10:17-18."
      ),
      chronicleScene(
        "Twilight again",
        "Wonder at the End of the Day",
        "By evening I tend the lamps again as incense mingles with the day's smoke. My body is tired, yet I remain amazed that the Holy One has made a way for repentant sinners to stay near.",
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
    subtitle: "The high priest follows every instruction of Leviticus 16, aware that nothing in this service can be improvised.",
    scenes: [
      chronicleScene(
        "Memory of fire",
        "I May Not Come Whenever I Choose",
        "I speak as the high priest, and I do not begin this day casually. Nadab and Abihu are never far from my mind. After their deaths, the Lord warned that I could not enter behind the veil whenever I wished.",
        "KJV: Leviticus 16:1-2."
      ),
      chronicleScene(
        "Linen and water",
        "Only as God Commands",
        "I bathe before putting on the garments appointed for this day. They are plain linen, not the robes of public glory. Behind the veil, rank and reputation cannot carry me. I go only because God has commanded and provided the way.",
        "KJV: Leviticus 16:4."
      ),
      chronicleScene(
        "Animals and lots",
        "Two Goats Before the Lord",
        "A bull and ram are ready for my household, and the congregation has brought two goats and a ram. At the entrance of the tent, I cast lots over the goats: one for the Lord, the other for Azazel, the live goat of removal.",
        "KJV: Leviticus 16:3, 5, 7-10."
      ),
      chronicleScene(
        "First for my own house",
        "The Priest Also Needs Atonement",
        "I do not represent Israel as though I were without sin. The bull for my own purification offering is killed first; the priest nearest the sanctuary also lives by atonement.",
        "KJV: Leviticus 16:6, 11."
      ),
      chronicleScene(
        "Coals and incense",
        "The Cloud Before the Blood",
        "I take a censer filled with coals from the altar and two handfuls of finely ground incense. Then I pass behind the curtain. The tent is empty of every other person, while the whole camp waits outside. I walk where no one may walk except by God's command.",
        "KJV: Leviticus 16:12-13, 17."
      ),
      chronicleScene(
        "The covered mercy seat",
        "Fear and Obedience Breathe Together",
        "I put the incense on the coals, and its cloud covers the mercy seat above the covenant. The command is plain: the cloud must be there so that I do not die. In that hidden room, reverence and obedience leave no room for presumption.",
        "KJV: Leviticus 16:13; Exodus 25:21-22."
      ),
      chronicleScene(
        "Blood for the priesthood",
        "Blood Where Merit Cannot Stand",
        "I sprinkle the bull's blood on and before the mercy seat. Each drop reminds me that I enter by sacrifice, never by personal merit.",
        "KJV: Leviticus 16:14; Hebrews 9:7."
      ),
      chronicleScene(
        "Blood for the people",
        "The Lord's Goat Within the Veil",
        "Next I slaughter the goat chosen for the people and carry its blood behind the veil, sprinkling it as I did the bull's blood. In this way atonement is made for the inner sanctuary and the tent, which have stood among a people marked by impurity, transgression, and sin.",
        "KJV: Leviticus 16:15-16."
      ),
      chronicleScene(
        "The sanctuary and altar cleansed",
        "From Inner Shrine to Altar",
        "Outside the inner room, I apply the blood of the bull and goat to the altar as commanded. The cleansing moves from the innermost sanctuary outward, until the whole sacred space has been dealt with for the sake of the people among whom God dwells.",
        "KJV: Leviticus 16:18-19."
      ),
      chronicleScene(
        "Both hands on the live goat",
        "All the Sins Named",
        "Only after the sanctuary has been cleansed is the live goat brought near. I place both hands on its head and confess all Israel's wickedness, rebellion, and sins. Nothing is softened or left unnamed.",
        "KJV: Leviticus 16:20-21."
      ),
      chronicleScene(
        "Sent away and finished",
        "The Burden Leaves the Camp",
        "The appointed man leads the goat into the wilderness, taking the burden away from the camp. I lay aside the linen garments, bathe, put on my regular priestly clothing, and offer the burnt offerings for myself and the people. Outside the camp, the remains of the purification offerings are burned.",
        "KJV: Leviticus 16:21-28."
      ),
      chronicleScene(
        "When evening falls",
        "The Presence Still Rests Among Us",
        "At day's end I am exhausted and humbled by how near I have come. Yet gratitude outlasts the fear: the sanctuary is clean, the people have been met with mercy, and God's presence remains among us.",
        "KJV: Leviticus 16:30; Hebrews 9:23-28."
      )
    ]
  }
];

export const documentChronicleCompanionNotes = {
  "commoner-daily": [
    { promise: "God sees the guilt we hide, yet He still keeps the way of return open.", meaning: "The story opens beneath God's visible presence, where hidden sin cannot remain harmless." },
    { promise: "Confession begins when fear stops ruling the mouth.", meaning: "Leviticus names failure to testify as real guilt before God, not merely social weakness." },
    { promise: "God's law strips away excuses so His mercy can meet the real wound.", meaning: "The sanctuary names sin honestly and then leads the sinner toward confession." },
    { promise: "The innocent victim teaches what guilt has damaged.", meaning: "The unblemished goat makes the contrast painful: the animal is whole; the conscience is not." },
    { promise: "The gate stands open, but the worshiper still approaches through sacrifice.", meaning: "God welcomes the sinner, yet He orders the approach; the altar waits just inside the entrance." },
    { promise: "The sinner does not enter an empty court. Priests are already at work in the ministry of mercy.", meaning: "Altar, laver, priesthood, and waiting worshipers form one ordered path of return." },
    { promise: "Sin's cost becomes visible before relief is spoken.", meaning: "At the place of slaughter, the worshiper learns that guilt cannot be healed by words alone." },
    { promise: "The guilty hand rests on an innocent life.", meaning: "Hand-laying shows identification, confession, and the burden of substitution." },
    { promise: "God allows the sinner to speak the whole truth without being abandoned.", meaning: "Confession brings guilt out of hiding and into the mercy God has appointed." },
    { promise: "The innocent substitute dies so the guilty person may live - and learn to hate the sin that cost a life.", meaning: "The scene need not be graphic to be searching. The death itself makes sin's seriousness clear." },
    { promise: "Where the worshiper must stop, the priest continues the ministry on his behalf.", meaning: "The priest handles blood and fat exactly as God directed, because mercy is not careless." },
    { promise: "Forgiveness sends the sinner home honest, not hiding.", meaning: "God's provision completes the atonement, leaving the worshiper forgiven and no longer loyal to the sin." }
  ],
  "commoner-atonement": [
    { promise: "The solemn day begins with the hope that God will cleanse everything sin has touched.", meaning: "The Day of Atonement joins sacred rest, humility, and the promise of cleansing." },
    { promise: "Holy quiet helps the heart stop treating sin lightly.", meaning: "The stillness of the camp reflects the seriousness of standing before the Holy One." },
    { promise: "Forgiveness has been real throughout the year; the yearly cleansing brings the sanctuary story to completion.", meaning: "The service embraces the sanctuary, altar, priesthood, and people because sin has affected the whole covenant community." },
    { promise: "When sin and mercy meet, humility is the only honest posture.", meaning: "To humble the soul is not to despair. It is to stop pretending and depend wholly on God." },
    { promise: "Even the high priest enters only by command.", meaning: "Leviticus 16 guards the Most Holy Place from casual access." },
    { promise: "God teaches both atonement by blood and final removal.", meaning: "The two goats have distinct ritual roles." },
    { promise: "The Lord's goat supplies cleansing blood.", meaning: "The live goat supplies no atoning blood. Cleansing comes through the blood of the goat chosen for the Lord." },
    { promise: "God works for His people where they cannot see.", meaning: "The congregation can only wait while the high priest ministers alone inside the tent." },
    { promise: "The sanctuary carries the burden that God has promised to cleanse.", meaning: "The long silence teaches that forgiven sin will not be allowed to remain forever." },
    { promise: "Sin is named so it can be sent away.", meaning: "Both hands on the live goat make visible the transfer of confessed sin for removal." },
    { promise: "The burden carried away is not welcomed back.", meaning: "The wilderness road pictures final separation from confessed sin." },
    { promise: "To be clean before the Lord means that mercy has answered guilt and carried it toward removal.", meaning: "The day closes with assurance: the Holy One still chooses to dwell among His people." }
  ],
  "priest-daily": [
    { promise: "The priest serves because God permits nearness by mercy.", meaning: "Daily ministry is both privilege and weight; no priest can treat it as routine religious work." },
    { promise: "Even ashes belong to holy order.", meaning: "The priest begins with the remains of the night's sacrifice and carries them away exactly as God directed." },
    { promise: "Mercy is kept burning before the people wake.", meaning: "The continual fire shows ongoing covenant provision." },
    { promise: "The day opens under an accepted substitute.", meaning: "The morning lamb frames Israel's daily life with atonement." },
    { promise: "Clean hands must serve holy mercy.", meaning: "The laver calls the priest to cleansing before he serves at either altar or tent." },
    { promise: "Forgiven people are sustained by light and bread.", meaning: "Within the Holy Place, grace gives light for the mind and bread for the life." },
    { promise: "Sweet incense rises with holy fear.", meaning: "The golden altar joins prayer to appointed mediation, never to human presumption." },
    { promise: "The priest meets people before he handles their offerings.", meaning: "The sanctuary is not an abstract diagram. Real people bring tears, fear, gratitude, and shame into its court." },
    { promise: "Pride breaks where confession touches the substitute.", meaning: "The personal purification offering brings an individual's guilt into the process God has provided." },
    { promise: "Sin is costly, and mercy is costly too.", meaning: "Blood and fat are handled with care because atonement proceeds by God's word, not human invention." },
    { promise: "Priestly mediation humbles the one who serves.", meaning: "Eating certain purification offerings belongs to the priest's solemn responsibility in bearing the people's guilt." },
    { promise: "The priest ends the day weary, but still amazed that the Holy One makes room for sinners.", meaning: "Evening lamp and incense keep Israel's life before God." }
  ],
  "priest-atonement": [
    { promise: "Holy access is mercy, never entitlement.", meaning: "The deaths of Nadab and Abihu stand behind the warning that governs the high priest's approach." },
    { promise: "The highest priest comes low before God.", meaning: "Bathing and linen garments teach dependence, cleansing, and humility." },
    { promise: "God's order distinguishes blood atonement from removal.", meaning: "Bull, ram, two goats, and the casting of lots establish the order of Leviticus 16." },
    { promise: "The mediator himself needs atonement.", meaning: "The bull is offered first because the high priest and his household also need atonement." },
    { promise: "Incense prepares the way before blood is sprinkled.", meaning: "Incense covers the mercy seat so the high priest may approach and live." },
    { promise: "The mercy seat is reached only through the covering God Himself provides.", meaning: "Behind the veil, reverent fear and careful obedience belong together." },
    { promise: "Blood goes where human merit cannot stand.", meaning: "Bull blood is sprinkled for the priestly house." },
    { promise: "The people's blood ministry cleanses the sanctuary.", meaning: "The blood of the Lord's goat is brought within the veil to make atonement for Israel's impurities and sins." },
    { promise: "God cleanses His dwelling from the inside outward.", meaning: "From the inner room to the altar, the sanctuary is cleansed according to God's command." },
    { promise: "Only after the sanctuary is cleansed are Israel's sins confessed over the live goat.", meaning: "The live goat carries the confessed sins away; it is never the sacrifice that supplies cleansing blood." },
    { promise: "As the burden leaves the camp, the high priest returns to the remaining duties of the day.", meaning: "Removal, bathing, changed garments, burnt offerings, and the burning outside the camp bring the ritual to its close." },
    { promise: "God remains with a cleansed people.", meaning: "The high priest ends the day exhausted and humbled, yet grateful that mercy - not abandonment - has answered Israel's sin." }
  ]
};
