type Tour = {
  id: string;
  title: string;
  desc: string[];
  cover: string;
  imgs: { src: string; alt: string; ar: "3:4" | "4:3" }[];
  book: string;
};

export const tours: Tour[] = [
  {
    id: "ChichenItza",
    title: "Chichen Itzá",
    desc: [
      "Come to Chichen Itzá and visit the amazing Kukulcan pyramid right in the middle of this impressive archaeological site in the state of Yucatán, Mexico.",
      "It was recently discovered this pyramid was built above a huge Cenote (sinkhole) making the construction of this building a real feat.",
      "You can not miss visiting and knowing the history of this marvelous Mayan Toltec city.  You will also visit other impressive buildings like the biggest prehispanic ball court in America,  the great Planetarium, the Venus Platform and many other temples.",
      "Near Chichen Itzá, there are some wonderful refreshing Cenotes which are like an Oasis in the middle of this jungle, here you will be able to swim and snorkel and relax in the pristine waters of these natural swimming pools.",
      "Finally we are going to visit the beautiful colonial town of Valladolid where you will get to know more of the real Mexico, visiting old churches, markets, etc. This is also a great place for shopping pretty handicrafts or delicious chocolate.",
    ],
    cover:
      "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FChichenItza%2FChichenItzaPyramidAgain.jpg?alt=media",
    imgs: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FChichenItza%2FChichenItzaAceves.jpg?alt=media",
        alt: "Chichen Itzá Pryamid by Luis Aceves",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FChichenItza%2FMakingTortillas.JPG?alt=media",
        alt: "Couple making tortillas",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FChichenItza%2FChichenItzaRuins.jpg?alt=media",
        alt: "Chichen Itzá Ruins by Julie SD",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FChichenItza%2FCoupleAtChichenItzaAgain.jpg?alt=media",
        alt: "Couple at Chichen-Itzá",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FChichenItza%2FChichenItzaPyramidAgain.jpg?alt=media",
        alt: "Chichen Itzá Pryamid",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FChichenItza%2FTheMarket.jpg?alt=media",
        alt: "The Market at Chichen Itzá",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FChichenItza%2FCenoteIkKil.jpg?alt=media",
        alt: "Cenote Ik-Kil",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FChichenItza%2FValladolid.jpg?alt=media",
        alt: "Valladolid, Yucatán by Max Bohme",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FChichenItza%2FCoupleAtChichenItzaYetAgain.jpg?alt=media",
        alt: "Couple at Chichen Itzá",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FChichenItza%2FIguanaWatson.jpg?alt=media",
        alt: "Iguana at Chichen Itzá by Marv Watson",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FChichenItza%2FValladolidChurchAgain.jpg?alt=media",
        alt: "Women in front of Valladolid church",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FChichenItza%2FBallGameAveces.jpg?alt=media",
        alt: "'Juego de Pelota' at Chichen Itzá",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FChichenItza%2FEatingAsMayans.JPG?alt=media",
        alt: "Couple eating Mayan food",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FChichenItza%2FFamilyAtChichenItza.jpg?alt=media",
        alt: "Family at Chichen Itzá",
        ar: "4:3",
      },
    ],
    book: "188272",
  },
  {
    id: "YolasBiking",
    title: "Yola's Biking",
    desc: [
      "If you like fun, adventure and exercise, join us in our exciting ride into the Mayan jungle, an amazing place full of natural wonders such as beautiful trees, colorful birds and breathtaking cenotes (crystal clear water sinkholes or natural pools).",
      "We start by riding 10 kms into a beautiful dirt road and we stop to enjoy, swim, snorkel or just relay in a very nice semi open cenote with pristine water. Then we ride back and we visit another breathtaking underground river cenote full of stalactites, stalagmites and rock formations. Then we will enjoy some fruit and drinks and finally back to the meeting point.",
    ],
    cover:
      "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FYolasBiking%2FGuidesInJungle.png?alt=media&token=ea94e3df-d9a6-4873-9d43-72fd614636ca",
    imgs: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FYolasBiking%2FGuidesInJungle.png?alt=media&token=ea94e3df-d9a6-4873-9d43-72fd614636ca",
        alt: "Guides in the jungle",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FYolasBiking%2FBikingGroup.jpg?alt=media&token=10b17b35-6bf7-4a75-8621-d0e80614f48c",
        alt: "Group biking in the jungle",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FYolasBiking%2FGuidesInCenote.jpeg?alt=media&token=70c85110-b5cc-40f0-a33d-98733cc26b03",
        alt: "Guides in cenote",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FYolasBiking%2FWomenBiking.jpg?alt=media&token=61e62169-d856-40a8-8ded-de11c687f507",
        alt: "Women biking in the jungle",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FYolasBiking%2FGuidesSittingInCenote.jpeg?alt=media&token=3eb9fd69-ac53-40b3-8cd9-b163131ef82b",
        alt: "Guides sitting in cenote",
        ar: "3:4",
      },
    ],
    book: "188290",
  },
  {
    id: "Tulum",
    title: "Tulum",
    desc: [
      "Tulum, the most precious Pearl in the Caribbean sea, it is a beautiful Mayan city where you will be able to know more about the Mayan culture and admire the magnificent views of the turquoise Caribbean sea.",
      "After visiting Tulum, we are going to snorkel in one of the most amazing open cenotes with crystal clear waters surrounded by mangroves or limestone where you can watch fish and birds.",
      "Then we will swim in a spectacular underground river in a cave cenote in which we can watch impressive rock formations like stalactites and stalagmites.",
    ],
    cover:
      "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FTulum%2FTulumCliche.jpg?alt=media",
    imgs: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FTulum%2FTulumBohme.jpg?alt=media",
        alt: "Tulum Ruins by Max Bohme",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FTulum%2FCoupleAtTulum.jpg?alt=media",
        alt: "Couple at Tulum",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FTulum%2FTulumBeach.jpg?alt=media",
        alt: "Tulum Beach from above by Dan Gold",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FTulum%2FTulumCliche.jpg?alt=media",
        alt: "Tulum Ruins by Austin Kindred",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FTulum%2FTulumRuinsCastelino.jpg?alt=media",
        alt: "Tulum Ruins by Castelino",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FTulum%2FGroupAtTulumAgain.jpg?alt=media",
        alt: "Family at Tulum",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FTulum%2FWomenExploring.jpg?alt=media",
        alt: "Women exploring the ruins",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FTulum%2FTulumFarTulum.jpg?alt=media",
        alt: "Tulum, far Tulum",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FTulum%2FTulumRuinsYaroslav.jpg?alt=media",
        alt: "Tulum Ruins by Yaroslav Muzychenko",
        ar: "4:3",
      },
    ],
    book: "188281",
  },
  {
    id: "Cenotes",
    title: "Cenotes",
    desc: [
      "Swimming and snorkeling in Cenotes is a lifetime experience which can only be done in this part of the world. We have chosen the best cenotes (caves and sinkholes) for you to enjoy.",
      "You are going to explore 3 amazing cenotes, some of them full of beautiful fish, some others with interesting sea fossils, other ones full of stalactites, stalagmites and rock formations; but all of them with crystal clear water.",
    ],
    cover:
      "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCenotes%2FKidJumping.png?alt=media",
    imgs: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCenotes%2FWomenSplashing.png?alt=media",
        alt: "Women splashing at cenote",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCenotes%2FKidJumping.png?alt=media",
        alt: "Kid jumping to cenote",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCenotes%2FOpenCenote.jpg?alt=media",
        alt: "Open cenote",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCenotes%2FExploringCenote.jpg?alt=media",
        alt: "Group exploring closed cenote with one of our guides",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCenotes%2FCoupleAndTwoGuidesInCenote.jpg?alt=media",
        alt: "Couple at cenote with two of our guides",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCenotes%2FCasaCenote.jpg?alt=media",
        alt: "Open cenote",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCenotes%2FGroupAtCenote.jpg?alt=media",
        alt: "Group at cenote",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCenotes%2FGuidePraisingSol.jpg?alt=media",
        alt: "Guide praising the sun",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCenotes%2FPersonFloatingInCenote.jpg?alt=media",
        alt: "Person floating in cenote",
        ar: "3:4",
      },
    ],
    book: "188288",
  },
  {
    id: "Coba",
    title: "Coba",
    desc: [
      "In this amazing Mayan city you are allowed to climb the second highest Mayan pyramid in Mexico with 120 steps. You will enjoy the tour riding bikes or taking the Mayan limo. Here you will be able to combine history and adventure.",
      "Near Coba there are some spectacular cenotes with pristine waters where you will be able to dive or jump, or just swim in these refreshing waters. Finally we are going to have a delicious Mayan lunch in Coba village or in Tulum town.",
    ],
    cover:
      "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCoba%2FCobaPyramid.jpg?alt=media",
    imgs: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCoba%2FCobaPyramid.jpg?alt=media",
        alt: "Coba Pyramid by Robin Canfield",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCoba%2FCovidTimesAtCoba.jpg?alt=media",
        alt: "Family at Coba",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCoba%2FFamilyAtCoba.png?alt=media",
        alt: "Family at Coba with one of our guides",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCoba%2FCobaRuins.jpg?alt=media",
        alt: "Coba Ruins by Robin Canfield",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCoba%2FCobaRuinsTurgeon.jpg?alt=media",
        alt: "Coba Ruins by Chris Turgeon",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCoba%2FFamilyClimbingCoba.png?alt=media",
        alt: "Family climbing Coba Pyramid",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCoba%2FMayanFamily.jpg?alt=media",
        alt: "Mayan family",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FCoba%2FCoupleAtMayanLimo.png?alt=media",
        alt: "Mayan 'limo' in the way to Coba Pyramid",
        ar: "3:4",
      },
    ],
    book: "188287",
  },
  {
    id: "Akumal",
    title: "Akumal",
    desc: [
      "Swimming with turtles is a must-do experience, in this activity you will be able to snorkel with this amazing sea creatures in their natural habitat, you can also see stingrays, colorful fish and all kind of sea life.",
      "Afterwards we are going to swim and snorkel in a cenote.",
    ],
    cover:
      "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FAkumal%2FAnotherTurtleUderwater.jpg?alt=media",
    imgs: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FAkumal%2FPeopleSnorkeling.jpg?alt=media",
        alt: "Couple snorkeling at Akumal",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FAkumal%2FTurtleUnderwater.jpg?alt=media",
        alt: "Turtle at Akumal",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FAkumal%2FFamilyAtAkumal.jpg?alt=media",
        alt: "Family at Akumal Beach with one of our guides",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FAkumal%2FGirlsAtAkumal.jpg?alt=media",
        alt: "Group at Akumal Beach",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FAkumal%2FAnotherTurtleUderwater.jpg?alt=media",
        alt: "Turtle at Akumal",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FAkumal%2FSmGroupAtAkumal.jpg?alt=media",
        alt: "Family at Akumal",
        ar: "4:3",
      },
    ],
    book: "188289",
  },
  {
    id: "EkBalam",
    title: "Ek-Balam",
    desc: [
      "Ek Balam, the Mayan Gem, means Black Jaguar, it is not very well known however it is one of the most outstanding Mayan cities ever. It has an amazing acropolis that is 90 feet high and 450 feet long and 165 feet wide. In this building you can see some of the greatest mayan carvings.",
      "You are also allowed to climb and enter into most of the buildings like the Palace and Ball court.",
      "Then, you will take bikes to go to a wonderful Cenote with crystal clear waters where you can dive, jump or just swim and relax in its refreshing waters. Finally we are going to visit the beautiful colonial town of Valladolid where you will get to know more of this beautiful country named Mexico.",
    ],
    cover:
      "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FEkBalam%2FEkBalamFromAbove.jpg?alt=media",
    imgs: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FEkBalam%2FEkBalamFromAbove.jpg?alt=media",
        alt: "Ek Balam Ruins seen from above",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FEkBalam%2FCarvingsEkBalam.jpg?alt=media",
        alt: "Carvings at Ek Balam",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FEkBalam%2FGroupAtEkBalam.jpg?alt=media",
        alt: "Family at Ek Balam with one of our guides",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FEkBalam%2FCloudyEkBalam.png?alt=media",
        alt: "Cloudy day at Ek Balam Ruins",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FEkBalam%2FTunnelAtEkBalam.jpg?alt=media",
        alt: "Tunnel at Ek Balam Ruins",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FEkBalam%2FEkBalamRuins.jpg?alt=media",
        alt: "Ek Balam Ruins",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FEkBalam%2FEkBalamCrop2.jpg?alt=media",
        alt: "Sunny day at Ek Balam Ruins",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FEkBalam%2FEkBalamCrop1.jpg?alt=media",
        alt: "Sunny day at Ek Balam Ruins",
        ar: "3:4",
      },
    ],
    book: "188293",
  },
  {
    id: "SianKaan&PuntaAllen",
    title: "Sian Ka'an & Punta Allen",
    desc: [
      "If you love nature and enjoy watching wildlife this is the tour for you. Sian Ka'an means the place where heaven is born and it is a UNESCO World Heritage and a great place to visit.",
      "You will start your adventure in Paso Lagartos where you will take a boat in the beautiful Ascension lagoon  where you can see different type of birds like sea eagles, frigates, jabiru storks, cormorant, pelicans and if you are lucky enough some manatees. Then you will head where the lagoon and the ocean meet, that is the place in which you will see many dolphins.",
      "After this you will sail a little bit into the ocean to watch big sea turtles. Afterwards you will be taken to a section of the second longest reef in the world where you will do some great snorkeling watching all kind of beautiful fish and sea life. After this activity I will take you to a beautiful crystal clear shallow area of the sea just to relax and have some beers, sodas or water.",
      "Finally you will be having a delicious lunch in Punta Allen town.",
    ],
    cover:
      "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26PuntaAllen%2FDolphin.jpg?alt=media",
    imgs: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26PuntaAllen%2FDolphin.jpg?alt=media",
        alt: "Dolphins at Punta Allen",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26PuntaAllen%2FGirlStaringAtTurtle.jpg?alt=media",
        alt: "Kid in boat staring at turtle in Punta Allen",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26PuntaAllen%2FGroupInPuntaAllen.png?alt=media",
        alt: "Group at Punta Allen with one of our guides",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26PuntaAllen%2FDolphinJumping.jpg?alt=media",
        alt: "Dolphin jumping out of the water at Punta Allen",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26PuntaAllen%2FSianKaan.jpg?alt=media",
        alt: "Couple in boat at Sian Kaan",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26PuntaAllen%2FGroupSeeingDolphins.jpg?alt=media",
        alt: "People in boat seeing dolphins at Punta Allen",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26PuntaAllen%2FUglyGuide.jpg?alt=media",
        alt: "Guide at Punta Allen",
        ar: "3:4",
      },
    ],
    book: "188295",
  },
  {
    id: "SianKaan&Muyil",
    title: "Sian Ka'an & Muyil",
    desc: [
      "If you are looking for a great relaxing day, I invite you to go with me to this Amazing World Heritage site called Sian Ka’an (door to Heaven). Once we get there we are going to take a beautiful ride in a boat through two crystal clear turquoise lagoons.",
      "Then we are going to swim and just let go in a breathtaking lazy river for about 30 or 40 minutes, this experience is so relaxing only floating while watching birds, mangroves, trees, total contact with nature.",
      "On the way back we can visit the wonderful small Mayan city of Muyil if you want to learn about Mayan culture. And finally, a delicious ceviche in Tulum.",
    ],
    cover:
      "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26Muyil%2FSianKaanAtAfternoon.jpg?alt=media",
    imgs: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26Muyil%2FSianKaanAtAfternoon.jpg?alt=media",
        alt: "Sian Kaan at afternoon",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26Muyil%2FLazyRiver.jpg?alt=media",
        alt: "Mother a daughter in the lazy river",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26Muyil%2FGroupAtLalyRiverAgain.jpg?alt=media",
        alt: "Family in Sian Kaan",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26Muyil%2FCoupleAtLazyRiver.jpg?alt=media",
        alt: "Couple in the lazy river",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26Muyil%2FSiaanKaanGuideInBoat.jpg?alt=media",
        alt: "Guide in boat at Sian Kaan",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26Muyil%2FFamilyInBoat.jpg?alt=media",
        alt: "Family in boat at Sian Kaan with a guide",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26Muyil%2FGroupInBoat.jpg?alt=media",
        alt: "Group in boat at Sian Kaan",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26Muyil%2FGroupAtMuyil.jpg?alt=media",
        alt: "Family at Muyil Ruins",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FSianKaan%26Muyil%2FGroupAtLazyRiver.jpg?alt=media",
        alt: "Family in the lazy river",
        ar: "4:3",
      },
    ],
    book: "188291",
  },
  {
    id: "MayanAdventure",
    title: "Mayan Adventure",
    desc: [
      "If you want to spend a full day. of fun and adventure doing zip- lining, rappelling, rock-climbing, hiking and swimming in a breathtaking underground river.",
      "I invite you to explore the Mayan jungle with me and do all these activities. You will also enjoy a delicious Mayan lunch in this park. ",
    ],
    cover:
      "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FMayanAdventure%2FRidingATVS.jpg?alt=media",
    imgs: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FMayanAdventure%2FRidingATVS.jpg?alt=media",
        alt: "Guide rinding ATV",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FMayanAdventure%2FCrazyGuide.jpg?alt=media",
        alt: "One of our guides going upside down in a zipline",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FMayanAdventure%2FGroupRappel.jpg?alt=media",
        alt: "Group about to do rappel with one of our guides",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FMayanAdventure%2FGoinfDownTheZipLine.jpg?alt=media",
        alt: "Someone going down zip line",
        ar: "3:4",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FMayanAdventure%2FGroupZinLine.jpg?alt=media",
        alt: "Group in zip line tower",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FMayanAdventure%2FGroupInAdventure.jpg?alt=media",
        alt: "Family with one of our guides",
        ar: "4:3",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/boutique-tours-mexico.appspot.com/o/tours%2FMayanAdventure%2FGuyInZipLine.png?alt=media",
        alt: "Man in zip line",
        ar: "4:3",
      },
    ],
    book: "188300",
  },
];

export const getTourById = (id: string): Tour | undefined => {
  return tours.find((tour) => tour.id === id);
};
