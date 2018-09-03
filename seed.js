const db = require('./models');

let userList = [
    {
    name: "Natalie",
    email: "natalieplsn@gmail.com",
    password: "cowboys"
    }
]

let legacyList = [
    {
        name: "Tonga Room & Hurricane Bar",
        address: "950 Mason St, San Francisco, CA 94108",
        yearOpened: 1945,
        coordinates: [37.7921,-122.4100],
        // user: {
        //     type: mongoose.Schema.Types.ObjectId, 
        //     ref: 'User'
        // }
    }
];

let heritageList = [
    {
    name: "<a href='https://tadichgrillsf.com/' target='_blank'>Tadich Grill</a>",
    address: "240 California St, San Francisco, CA 94111",
    yearOpened: "1849",
    coordinates: [37.7934,-122.3995]
    },
    {
    name: "<a href='http://toscacafesf.com/' target='_blank'>Tosca Cafe</a>",
    address: "242 Columbus Ave, San Francisco, CA 94133",
    yearOpened: "1919",
    coordinates: [37.7976,-122.4059]
    },
    {
    name: "<a href='http://www.samworestaurant.com/' target='_blank'>Sam Wo</a>",
    address: "2713 Clay St, San Francisco, CA 94108",
    yearOpened: "1912",
    coordinates: [37.7942, -122.4051]
    },
    {
    name: "<a href='https://cliffhouse.com/' target='_blank'>Cliff House</a>",
    address: "1090 Point Lobos Ave, San Francisco, CA 94121",
    yearOpened: "1858",
    coordinates: [37.7785, -122.5140]
    },
    { 
    name: "<a href='http://aliotos.com/' target='_blank'>Alioto’s Restaurant</a>",
    address: "8 Fisherman’s Wharf, San Francisco, CA 94133",
    yearOpened: "1925",
    coordinates: [37.809461,-122.4167201]
    }, 
    { 
    name: "<a href='http://www.anchorbrewing.com/beer/anchor_steam' target='_blank'>Anchor Steam Brewery</a>",
    address: "1705 Mariposa Street, San Francisco, CA 94107",
    yearOpened: "1871",
    coordinates: [37.763304,-122.4007997]
    }, 
    { 
    name: "Art’s Café",
    address: "747 Irving Street, San Francisco, CA 94122",
    yearOpened: "1950s",
    coordinates: [37.763933,-122.4660473]
    }, 
    { 
    name: "Aub Zam Zam",
    address: "1633 Haight Street, San Francisco, CA 94117",
    yearOpened: "1942",
    coordinates: [37.769619,-122.449291]
    }, 
    { 
    name: "Balboa Café",
    address: "3199 Fillmore Street, San Francisco, CA 94123",
    yearOpened: "1913",
    coordinates: [37.7988167,-122.4360935]
    }, 
    { 
    name: "<a href='https://www.beepsburgers.com/' target='_blank'>Beep’s Burgers</a>",
    address: "1051 Ocean Avenue, San Francisco, CA 94112",
    yearOpened: "1962",
    coordinates: [37.7232086,-122.4538672]
    }, 
    { 
    name: "<a href='http://www.benkyodocompany.com/' target='_blank'>Benkyodo Company</a>",
    address: "1747 Buchanan Street, San Francisco, CA 94115",
    yearOpened: "1906",
    coordinates: [37.7863576,-122.4302457]
    }, 
    { 
    name: "Bill’s Place",
    address: "2315 Clement Street, San Francisco, CA 94121",
    yearOpened: "1960",
    coordinates: [37.7818522,-122.4841716]
    }, 
    { 
    name: "<a href='http://www.bimbos365club.com/' target='_blank'>Bimbo’s 365 Club</a>",
    address: "1025 Columbus Avenue, San Francisco, CA 94133",
    yearOpened: "1931",
    coordinates: [37.8036989,-122.4156675]
    }, 
    { 
    name: "<a href='http://www.brunossf.com/' target='_blank'>Bruno’s</a>",
    address: "2389 Mission Street, San Francisco, CA 94110",
    yearOpened: "1950s",
    coordinates: [37.7589582,-122.4188289]
    }, 
    { 
    name: "<a href='http://www.thebuenavista.com/home/home.html' target='_blank'>Buena Vista Café</a>",
    address: "2765 Hyde Street, San Francisco, CA 94109",
    yearOpened: "1916",
    coordinates: [37.8065278,-122.4207822]
    }, 
    { 
    name: "<a href='http://www.busstop-sf.com/' target='_blank'>Bus Stop Bar</a>",
    address: "1901 Union Street, San Francisco, CA 94123",
    yearOpened: "1901",
    coordinates: [37.7976083,-122.4306986]
    }, 
    { 
    name: "<a href='https://www.swedishamericanhall.com/cafe-du-nord' target='_blank'>Café Du Nord</a>",
    address: "2170 Market Street, San Francisco, CA 94114",
    yearOpened: "1907",
    coordinates: [37.7667547,-122.4305017]
    }, 
    { 
    name: "<a href='https://flore415.com/' target='_blank'>Café Flore</a>",
    address: "2298 Market Street, San Francisco, CA 94114",
    yearOpened: "1973",
    coordinates: [37.7646778,-122.4329332]
    }, 
    { 
    name: "<a href='http://www.cafelabohemesanfrancisco.com/' target='_blank'>Café La Boheme</a>",
    address: "3318 24th Street, San Francisco, CA 94110",
    yearOpened: "1973",
    coordinates: [37.7523283,-122.418971]
    }, 
    { 
    name: "<a href='https://www.caffesportsf.com/' target='_blank'>Caffé Sport</a>",
    address: "574 Green Street, San Francisco, CA 94133",
    yearOpened: "1969",
    coordinates: [37.799676,-122.4087078]
    }, 
    { 
    name: "<a href='http://coffee.caffetrieste.com/' target='_blank'>Caffe Trieste</a>",
    address: "601 Vallejo Street, San Francisco, CA 94133",
    yearOpened: "1956",
    coordinates: [37.7986407,-122.4073436]
    }, 
    { 
    name: "<a href='http://capurros.com/' target='_blank'>Capurro’s Restaurant</a>",
    address: "498 Jefferson Street, San Francisco, CA 94109",
    yearOpened: "1946",
    coordinates: [37.8078414,-122.4202248]
    }, 
    { 
    name: "<a href='https://casasanchezsf.com/' target='_blank'>Casa Sanchez</a>",
    address: "2778 24th Street, San Francisco, CA 94110",
    yearOpened: "1924",
    coordinates: [37.7530499,-122.4078135]
    }, 
    { 
    name: "<a href='http://www.castagnolassf.com/' target='_blank'>Castagnola’s</a>",
    address: "286 Jefferson Street, San Francisco, CA 94133",
    yearOpened: "1916",
    coordinates: [37.8082114,-122.4175701]
    }, 
    { 
    name: "Cha Cha Cha/Original McCarthy’s",
    address: "2327 Mission Street, San Francisco, CA 94110",
    yearOpened: "1933",
    coordinates: [37.7597878,-122.4189638]
    }, 
    { 
    name: "<a href='https://www.columbuscafesf.com/' target='_blank'>Columbus Café</a>",
    address: "562 Green Street, San Francisco, CA 94133",
    yearOpened: "1936",
    coordinates: [37.7997155,-122.4084128]
    }, 
    { 
    name: "<a href='https://comstocksaloon.com/' target='_blank'>Comstock Saloon</a>",
    address: "155 Columbus Avenue, San Francisco, CA 94133",
    yearOpened: "1907",
    coordinates: [37.7969298,-122.4055622]
    }, 
    { 
    name: "<a href='' target='_blank'>Cordon Bleu Vietnamese Restaurant</a>",
    address: "1574 California Street, San Francisco, CA 94109",
    yearOpened: "1968",
    coordinates: [37.7908834,-122.4202168]
    }, 
    { 
    name: "<a href='https://www.diandasbakery.com/' target='_blank'>Dianda’s Italian American Pastry</a>",
    address: "2883 Mission Street, San Francisco, CA 94110",
    yearOpened: "1962",
    coordinates: [37.7509882,-122.4180347]
    }, 
    { 
    name: "<a href='http://dogpatchsaloon.com/' target='_blank'>Dogpatch Saloon</a>",
    address: "2496 3rd Street, San Francisco, CA 94107",
    yearOpened: "1912",
    coordinates: [37.7580415,-122.3885164]
    }, 
    { 
    name: "<a href='http://www.donramonsrestaurante.com/' target='_blank'>Don Ramon’s Mexican Restaurant</a>",
    address: "221 11th Street, San Francisco, CA 94103",
    yearOpened: "1967",
    coordinates: [37.772882,-122.4150134]
    }, 
    { 
    name: "<a href='' target='_blank'>Double Play</a>",
    address: "2401 16th Street, San Francisco, CA 94103",
    yearOpened: "1909",
    coordinates: [37.7654995,-122.4106267]
    }, 
    { 
    name: "<a href='https://www.eaglecafe.com/' target='_blank'>Eagle Café</a>",
    address: "Pier 39, Suite 103, San Francisco, CA 94133",
    yearOpened: "1928",
    coordinates: [37.8087731,-122.4103237]
    }, 
    { 
    name: "<a href='' target='_blank'>Edinburgh Castle Pub</a>",
    address: "950 Geary Street, San Francisco, CA 94109",
    yearOpened: "1960s",
    coordinates: [37.7861924,-122.4189859]
    }, 
    { 
    name: "<a href='https://www.elbo.com/san-francisco-home' target='_blank'>Elbo Room</a>",
    address: "647 Valencia Street, San Francisco, CA 94110",
    yearOpened: "1935",
    coordinates: [37.7625064,-122.4214116]
    }, 
    { 
    name: "<a href='https://www.elixirsf.com/' target='_blank'>Elixir</a>",
    address: "3200 16th Street, San Francisco, CA 94103",
    yearOpened: "1858",
    coordinates: [37.7649919,-122.4243173]
    }, 
    { 
    name: "<a href='http://www.eltoreadorsf.com/' target='_blank'>El Toreador</a>",
    address: "50 West Portal Avenue, San Francisco, CA 94127",
    yearOpened: "1957",
    coordinates: [37.7403871,-122.4666158]
    }, 
    { 
    name: "<a href='http://www.fareastcafesf.com/index.html' target='_blank'>Far East Café</a>",
    address: "631 Grant Avenue, San Francisco, CA 94108",
    yearOpened: "1920",
    coordinates: [37.7929902,-122.4061354]
    }, 
    { 
    name: "<a href='http://www.fior.com/' target='_blank'>Fior d’Italia</a>",
    address: "2237 Mason Street, San Francisco, CA 94133",
    yearOpened: "1886",
    coordinates: [37.8043012,-122.4135879]
    }, 
    { 
    name: "<a href='http://thegrottosf.com/' target='_blank'>Fishermen’s Grotto</a>",
    address: "2847 Taylor Street, San Francisco, CA 94133",
    yearOpened: "1935",
    coordinates: [37.8089738,-122.4158486]
    }, 
    { 
    name: "<a href='https://flytrapsf.com/' target='_blank'>Fly Trap</a>",
    address: "606 Folsom Street, San Francisco, CA 94107",
    yearOpened: "1883",
    coordinates: [37.785485,-122.397216]
    }, 
    { 
    name: "<a href='https://www.sfpalace.com/garden-court/' target='_blank'>Garden Court</a>",
    address: "2 New Montgomery Street, San Francisco, CA 94105",
    yearOpened: "1909",
    coordinates: [37.7884503,-122.4020449]
    }, 
    { 
    name: "<a href='https://www.ginoandcarlo.com/' target='_blank'>Gino & Carlo</a>",
    address: "548 Green Street, San Francisco, CA 94133",
    yearOpened: "1942",
    coordinates: [37.7998836,-122.4081675]
    }, 
    { 
    name: "<a href='http://www.golddustsf.com/' target='_blank'>Gold Dust Lounge</a>",
    address: "165 Jefferson Street, San Francisco, CA 94133",
    yearOpened: "1967",
    coordinates: [37.8079619,-122.4153359]
    }, 
    { 
    name: "<a href='https://goldmirrorrestaurant.com/' target='_blank'>Gold Mirror</a>",
    address: "800 Taraval Street, San Francisco, CA 94116",
    yearOpened: "1969",
    coordinates: [37.7433015,-122.4748302]
    }, 
    { 
    name: "<a href='http://www.slimspresents.com/great-american-music-hall/' target='_blank'>Great American Music Hall</a>",
    address: "859 O’Farrell Street, San Francisco, CA 94109",
    yearOpened: "1907",
    coordinates: [37.7848325,-122.418809]
    }, 
    { 
    name: "<a href='http://sfgrubstake.com/' target='_blank'>Grubstake</a>",
    address: "1525 Pine Street, San Francisco, CA 94109",
    yearOpened: "1927",
    coordinates: [37.789368,-122.4208221]
    }, 
    { 
    name: "<a href='http://guerrameats.com/default.aspx' target='_blank'>Guerra’s Quality Meats</a>",
    address: "490 Taraval Street, San Francisco, CA 94116",
    yearOpened: "1954",
    coordinates: [37.7434606,-122.4711994]
    }, 
    { 
    name: "<a href='http://www.hangah1920.com/' target='_blank'>Hang Ah Tea Room</a>",
    address: "1 Pagoda Place, San Francisco, CA 94108",
    yearOpened: "1920",
    coordinates: [37.7933928,-122.4075003]
    }, 
    { 
    name: "<a href='http://www.harasf.com/' target='_blank'>Ha-Ra Club</a>",
    address: "875 Geary Street, San Francisco, CA 94109",
    yearOpened: "1947",
    coordinates: [37.785953,-122.417622]
    }, 
    { 
    name: "<a href='http://www.harringtonsbarandgrill.com/' target='_blank'>Harrington’s Bar and Grill</a>",
    address: "245 Front Street, San Francisco, CA 94111",
    yearOpened: "1935",
    coordinates: [37.794057,-122.3991919]
    }, 
    { 
    name: "<a href='http://henryshunan.com/' target='_blank'>Henry’s Hunan</a>",
    address: "924 Sansome Street, San Francisco, CA 94111",
    yearOpened: "1974",
    coordinates: [37.7990559,-122.402083]
    }, 
    { 
    name: "<a href='http://www.hidivesf.com/' target='_blank'>Hi Dive</a>",
    address: "Pier 28, The Embarcadero, San Francisco, CA 94105",
    yearOpened: "1916",
    coordinates: [37.787962,-122.3874212]
    }, 
    { 
    name: "<a href='https://www.hotelutah.com/' target='_blank'>Hotel Utah Saloon</a>",
    address: "500 4th Street, San Francisco, CA 94107",
    yearOpened: "1908",
    coordinates: [37.7793954,-122.3980837]
    }, 
    { 
    name: "<a href='http://houseofprimerib.net/' target='_blank'>House of Prime Rib</a>",
    address: "1906 Van Ness Avenue, San Francisco, CA 94109",
    yearOpened: "1949",
    coordinates: [37.7934402,-122.4225255]
    }, 
    { 
    name: "<a href='http://www.thehouseofshields.com/' target='_blank'>House of Shields</a>",
    address: "39 New Montgomery Street, San Francisco, CA 94105",
    yearOpened: "1908",
    coordinates: [37.7882737,-122.4013083]
    }, 
    { 
    name: "<a href='http://www.theirishbank.com/' target='_blank'>Irish Bank Bar</a>",
    address: "10 Mark Lane, San Francisco, CA 94108",
    yearOpened: "1908",
    coordinates: [37.7904802,-122.4046843]
    }, 
    { 
    name: "<a href='http://www.itstopscoffeeshop.com/' target='_blank'>It’s Tops Coffee Shop</a>",
    address: "1801 Market Street, San Francisco, CA 94103",
    yearOpened: "1935",
    coordinates: [37.7713711,-122.4237001]
    }, 
    { 
    name: "<a href='http://www.javahousesf.com/' target='_blank'>Java House Restaurant</a>",
    address: "Pier 40, The Embarcadero, San Francisco, CA 94107",
    yearOpened: "1912",
    coordinates: [37.7819503,-122.3878795]
    }, 
    { 
    name: "<a href='https://www.johnsgrill.com/' target='_blank'>John’s Grill</a>",
    address: "63 Ellis Street, San Francisco, CA 94102",
    yearOpened: "1908",
    coordinates: [37.785433,-122.407233]
    }, 
    { 
    name: "<a href='https://kezar.pub/' target='_blank'>Kezar Pub</a>",
    address: "770 Stanyan Street, San Francisco, CA 94117",
    yearOpened: "1969",
    coordinates: [37.7678869,-122.4528942]
    }, 
    { 
    name: "<a href='' target='_blank'>La Rocca’s Corner</a>",
    address: "957 Columbus Avenue, San Francisco, CA 94133",
    yearOpened: "1930s",
    coordinates: [37.8031815,-122.4146277]
    }, 
    { 
    name: "<a href='https://www.fairmont.com/san-francisco/dining/laurel-court-restaurant-and-bar/' target='_blank'>Laurel Court Restaurant and Bar</a>",
    address: "950 Mason Street, San Francisco, CA 94108",
    yearOpened: "1907",
    coordinates: [37.7923883,-122.4100923]
    }, 
    { 
    name: "<a href='http://lecentralbistro.com/' target='_blank'>Le Central</a>",
    address: "453 Bush Street, San Francisco, CA 94108",
    yearOpened: "1974",
    coordinates: [37.7904658,-122.4050258]
    }, 
    { 
    name: "<a href='' target='_blank'>Liguria Bakery</a>",
    address: "1700 Stockton Street, San Francisco, CA 94133",
    yearOpened: "1911",
    coordinates: [37.8015477,-122.4092596]
    }, 
    { 
    name: "<a href='http://www.lipolounge.com/' target='_blank'>Li Po Cocktail Lounge</a>",
    address: "916 Grant Avenue, San Francisco, CA 94108",
    yearOpened: "1937",
    coordinates: [37.7954238,-122.4064344]
    }, 
    { 
    name: "<a href='' target='_blank'>Little Shamrock</a>",
    address: "807 Lincoln Way, San Francisco, CA 94122",
    yearOpened: "1890s",
    coordinates: [37.7656707,-122.4667374]
    }, 
    { 
    name: "<a href='http://www.luccadeli.com/' target='_blank'>Lucca Delicatessen</a>",
    address: "2120 Chestnut Street, San Francisco, CA 94123",
    yearOpened: "1929",
    coordinates: [37.8006904,-122.4383892]
    }, 
    { 
    name: "<a href='' target='_blank'>Mario’s Bohemian Cigar Store Café</a>",
    address: "566 Columbus Ave, San Francisco, CA 94133",
    yearOpened: "1971",
    coordinates: [37.8002499,-122.4097803]
    }, 
    { 
    name: "<a href='' target='_blank'>Mauna Loa</a>",
    address: "3009 Fillmore Street, San Francisco, CA 94123",
    yearOpened: "1939",
    coordinates: [37.7973143,-122.4357177]
    }, 
    { 
    name: "<a href='https://mitchellsicecream.com/' target='_blank'>Mitchell’s Ice Cream</a>",
    address: "688 San Jose Avenue, San Francisco, CA 94110",
    yearOpened: "1953",
    coordinates: [37.7440901,-122.4228578]
    }, 
    { 
    name: "<a href='' target='_blank'>Mr. Bing’s</a>",
    address: "201 Columbus Avenue, San Francisco, CA 94133",
    yearOpened: "1967",
    coordinates: [37.7971443,-122.4059188]
    }, 
    { 
    name: "<a href='' target='_blank'>Murio’s Trophy Room</a>",
    address: "1811 Haight Street, San Francisco, CA 94117",
    yearOpened: "1959",
    coordinates: [37.7691469,-122.4521865]
    }, 
    { 
    name: "<a href='' target='_blank'>Northstar Café</a>",
    address: "1560 Powell Street, San Francisco, CA 94133",
    yearOpened: "1882",
    coordinates: [37.7992211,-122.4104132]
    }, 
    { 
    name: "<a href='https://www.westinstfrancis.com/dining/oak-room-restaurant/' target='_blank'>Oak Room</a>",
    address: "335 Powell Street, San Francisco, CA 94102",
    yearOpened: "1904",
    coordinates: [37.7878279,-122.4087315]
    }, 
    { 
    name: "<a href='https://theoldclamhousesf.com/' target='_blank'>Old Clam House</a>",
    address: "299 Bayshore Boulevard, San Francisco, CA 94124",
    yearOpened: "1861",
    coordinates: [37.7430863,-122.4048488]
    }, 
    { 
    name: "<a href='https://www.theoldshipsf.com/' target='_blank'>Old Ship Saloon</a>",
    address: "298 Pacific Avenue, San Francisco, CA 94111",
    yearOpened: "1851",
    coordinates: [37.7978382,-122.4007776]
    }, 
    { 
    name: "<a href='http://originaljoessf.com/' target='_blank'>Original Joe’s</a>",
    address: "601 Union Street, San Francisco, CA 94133",
    yearOpened: "1937",
    coordinates: [37.8002488,-122.4093401]
    }, 
    { 
    name: "<a href='http://originalusrestaurant.com/' target='_blank'>Original US Restaurant</a>",
    address: "515 Columbus Avenue, San Francisco, CA 94133",
    yearOpened: "1970s",
    coordinates: [37.7997274,-122.4096048]
    }, 
    { 
    name: "<a href='https://www.perryssf.com/' target='_blank'>Perry’s</a>",
    address: "1944 Union Street, San Francisco, CA 94123",
    yearOpened: "1969",
    coordinates: [37.7978273,-122.4313074]
    }, 
    { 
    name: "<a href='' target='_blank'>Philosopher’s Club</a>",
    address: "824 Ulloa Street, San Francisco, CA 94127",
    yearOpened: "1960",
    coordinates: [37.7408929,-122.4653664]
    }, 
    { 
    name: "<a href='https://www.sfpalace.com/pied-piper-bar-and-grill/' target='_blank'>Pied Piper Bar and Grill</a>",
    address: "2 New Montgomery Street, San Francisco, CA 94105",
    yearOpened: "1909",
    coordinates: [37.7884503,-122.4020449]
    }, 
    { 
    name: "<a href='http://pier23cafe.com/' target='_blank'>Pier 23 Café</a>",
    address: "Pier 23, The Embarcadero, San Francisco, CA 94111",
    yearOpened: "1937",
    coordinates: [37.8037388,-122.3995606]
    }, 
    { 
    name: "<a href='https://www.puertoalegresf.net/' target='_blank'>Puerto Alegre</a>",
    address: "546 Valencia Street, San Francisco, CA 94110",
    yearOpened: "1970",
    coordinates: [37.7641345,-122.4220234]
    }, 
    { 
    name: "<a href='' target='_blank'>Red’s Java House</a>",
    address: "Pier 30, The Embarcadero, San Francisco, CA 94105",
    yearOpened: "1930s",
    coordinates: [37.7872246,-122.3877934]
    }, 
    { 
    name: "<a href='http://www.redsjavahouse.com/' target='_blank'>Red’s Place</a>",
    address: "672 Jackson Street, San Francisco, CA 94108",
    yearOpened: "1940s",
    coordinates: [37.79615,-122.406447]
    }, 
    { 
    name: "<a href='https://www.sonesta.com/us/california/san-francisco/clift-royal-sonesta-hotel/dining' target='_blank'>Redwood Room</a>",
    address: "495 Geary Street, San Francisco, CA 94102",
    yearOpened: "1933",
    coordinates: [37.7867731,-122.4112871]
    }, 
    { 
    name: "<a href='https://www.rooseveltsipneat.com/' target='_blank'>Roosevelt Tamale Parlor</a>",
    address: "2817 24th Street, San Francisco, CA 94110",
    yearOpened: "1919",
    coordinates: [37.7526561,-122.40861]
    }, 
    { 
    name: "<a href='http://www.sabellalatorre.com/Home' target='_blank'>Sabella & La Torre</a>",
    address: "2809 Taylor Street, San Francisco, CA 94133",
    yearOpened: "1927",
    coordinates: [37.8084592,-122.4159347]
    }, 
    { 
    name: "<a href='http://www.samsgrillsf.com/' target='_blank'>Sam’s Grill</a>",
    address: "374 Bush Street, San Francisco, CA 94104",
    yearOpened: "1867",
    coordinates: [37.7910009,-122.4035876]
    }, 
    { 
    name: "<a href='http://samjordanbar.com/' target='_blank'>Sam Jordan’s Bar and Grill</a>",
    address: "4004 3rd Street, San Francisco, CA 94123",
    yearOpened: "1959",
    coordinates: [37.7410475,-122.3888398]
    }, 
    { 
    name: "<a href='' target='_blank'>Sam’s Pizza and Burgers</a>",
    address: "618 Broadway, San Francisco, CA 94133",
    yearOpened: "1966",
    coordinates: [37.7979623,-122.4074263]
    }, 
    { 
    name: "<a href='https://thesausagefactorysf.com/' target='_blank'>Sausage Factory</a>",
    address: "517 Castro Street, San Francisco, CA 94114",
    yearOpened: "1968",
    coordinates: [37.7605183,-122.4346253]
    }, 
    { 
    name: "<a href='' target='_blank'>Savoy Tivoli</a>",
    address: "1434 Grant Avenue, San Francisco, CA 94133",
    yearOpened: "1907",
    coordinates: [37.8002402,-122.407371]
    }, 
    { 
    name: "<a href='http://www.schroederssf.com/' target='_blank'>Schroeder’s</a>",
    address: "240 Front Street, San Francisco, CA 94111",
    yearOpened: "1893",
    coordinates: [37.7939747,-122.3986977]
    }, 
    { 
    name: "<a href='https://scomas.com/' target='_blank'>Scoma’s</a>",
    address: "1 Al Scoma Way, San Francisco, CA 94133",
    yearOpened: "1965",
    coordinates: [37.8079493,-122.4180291]
    }, 
    { 
    name: "<a href='http://sealrockinn.com/' target='_blank'>Seal Rock Inn</a>",
    address: "545 Point Lobos, San Francisco, CA 94121",
    yearOpened: "1959",
    coordinates: [37.7795829,-122.5092287]
    }, 
    { 
    name: "<a href='http://www.searsfinefood.com/' target='_blank'>Sears Fine Food</a>",
    address: "439 Powell Street, San Francisco, CA 94102",
    yearOpened: "1938",
    coordinates: [37.7887986,-122.4088755]
    }, 
    { 
    name: "<a href='http://www.shotwellsbar.com/' target='_blank'>Shotwells</a>",
    address: "3349 20th Street, San Francisco, CA 94110",
    yearOpened: "1891",
    coordinates: [37.75874,-122.4156501]
    }, 
    { 
    name: "<a href='' target='_blank'>Silver Crest Donut Shop</a>",
    address: "340 Bayshore Boulevard, San Francisco, CA 94124",
    yearOpened: "1970",
    coordinates: [37.7423314,-122.4061541]
    }, 
    { 
    name: "<a href='' target='_blank'>Spec’s Twelve Adler Museum Café</a>",
    address: "12 Saroyan Place, San Francisco, CA 94133",
    yearOpened: "1968",
    coordinates: [37.7976098,-122.4059625]
    }, 
    { 
    name: "<a href='https://stfrancisfountainsf.com/' target='_blank'>St. Francis Fountain</a>",
    address: "2801 24th Street, San Francisco, CA 94110",
    yearOpened: "1918",
    coordinates: [37.7526817,-122.4083862]
    }, 
    { 
    name: "<a href='http://stmaryspub.com/' target='_blank'>St. Mary’s Pub</a>",
    address: "3845 Mission Street, San Francisco, CA 94110",
    yearOpened: "1950",
    coordinates: [37.7354741,-122.4244058]
    }, 
    { 
    name: "<a href='http://swanoysterdepot.us/' target='_blank'>Swan Oyster Depot</a>",
    address: "1517 Polk Street, San Francisco, CA 94109",
    yearOpened: "1912",
    coordinates: [37.7908308,-122.420964]
    }, 
    { 
    name: "<a href='http://www.swensensicecream.com/' target='_blank'>Swensen’s Grill & Ice Cream</a>",
    address: "1999 Hyde Street, San Francisco, CA 94109",
    yearOpened: "1948",
    coordinates: [37.7990839,-122.419181]
    }, 
    { 
    name: "<a href='http://www.taquerialacumbre.com/' target='_blank'>Taquería La Cumbre</a>",
    address: "515 Valencia Street, San Francisco, CA 94110",
    yearOpened: "1972",
    coordinates: [37.7645809,-122.4216212]
    }, 
    { 
    name: "<a href='http://www.tarantinosrestaurant.com/' target='_blank'>Tarantino’s Restaurant</a>",
    address: "206 Jefferson Street, San Francisco, CA 94133",
    yearOpened: "1946",
    coordinates: [37.8083565,-122.4162541]
    }, 
    { 
    name: "<a href='http://thanhlongsf.com/' target='_blank'>Thanh Long</a>",
    address: "4101 Judah Street, San Francisco, CA 94122",
    yearOpened: "1971",
    coordinates: [37.7601637,-122.50609]
    }, 
    { 
    name: "<a href='https://theendupsf.com/' target='_blank'>The End Up</a>",
    address: "401 6th Street, San Francisco, CA 94103",
    yearOpened: "1973",
    coordinates: [37.7772436,-122.4037707]
    }, 
    { 
    name: "<a href='' target='_blank'>The Hearth</a>",
    address: "4701 Geary Boulevard, San Francisco, CA 94118",
    yearOpened: "1967",
    coordinates: [37.7804951,-122.4698331]
    }, 
    { 
    name: "<a href='http://www.homesteadsf.com/' target='_blank'>The Homestead</a>",
    address: "2301 Folsom Street, San Francisco, CA 94110",
    yearOpened: "1902",
    coordinates: [37.7604123,-122.4146016]
    }, 
    { 
    name: "<a href='http://horseshoetavern-sf.com/' target='_blank'>The Horseshoe Tavern</a>",
    address: "2024 Chestnut Street, San Francisco, CA 94123",
    yearOpened: "1934",
    coordinates: [37.8009246,-122.436903]
    }, 
    { 
    name: "<a href='http://www.rampsf.com/' target='_blank'>The Ramp</a>",
    address: "855 Terry A. Francois Boulevard, San Francisco, CA 94107",
    yearOpened: "1950",
    coordinates: [37.764077,-122.3871912]
    }, 
    { 
    name: "<a href='http://royalexchange.com/' target='_blank'>The Royal Exchange</a>",
    address: "301 Sacramento Street, San Francisco, CA 94111",
    yearOpened: "1972",
    coordinates: [37.7941424,-122.3992059]
    }, 
    { 
    name: "<a href='http://sfblues.weebly.com/saloon-schedule.html' target='_blank'>The Saloon</a>",
    address: "1232 Grant Avenue, San Francisco, CA 94133",
    yearOpened: "1861",
    coordinates: [37.7985867,-122.4070229]
    }, 
    { 
    name: "<a href='http://www.tommasos.com/' target='_blank'>Tommaso’s</a>",
    address: "1042 Kearny Street, San Francisco, CA 94133",
    yearOpened: "1935",
    coordinates: [37.7977906,-122.4052913]
    }, 
    { 
    name: "<a href='http://tommysjoynt.com/' target='_blank'>Tommy’s Joynt</a>",
    address: "1101 Geary Boulevard, San Francisco, CA 94109",
    yearOpened: "1947",
    coordinates: [37.785533,-122.4217955]
    }, 
    { 
    name: "<a href='http://tommysmexican.com/' target='_blank'>Tommy’s Mexican Restaurant</a>",
    address: "5929 Geary Boulevard, San Francisco, CA 94121",
    yearOpened: "1965",
    coordinates: [37.7798531,-122.4831435]
    }, 
    { 
    name: "<a href='https://www.tongaroom.com/' target='_blank'>Tonga Room</a>",
    address: "950 Mason Street, San Francisco, CA 94108",
    yearOpened: "1945",
    coordinates: [37.7923883,-122.4100923]
    }, 
    { 
    name: "<a href='http://www.tonyscablecar.com/' target='_blank'>Tony’s Cable Car</a>",
    address: "2500 Geary Boulevard, San Francisco, CA 94115",
    yearOpened: "1972",
    coordinates: [37.7828683,-122.4451313]
    }, 
    { 
    name: "<a href='https://www.tonyniks.com/' target='_blank'>Tony Nik’s</a>",
    address: "1534 Stockton Street, San Francisco, CA 94133",
    yearOpened: "1933",
    coordinates: [37.8000496,-122.4088995]
    }, 
    { 
    name: "<a href='http://www.intercontinentalmarkhopkins.com/top-of-the-mark.aspx' target='_blank'>Top of the Mark</a>",
    address: "999 California Street, San Francisco, CA 94108",
    yearOpened: "1939",
    coordinates: [37.7915187,-122.4101366]
    }, 
    { 
    name: "<a href='' target='_blank'>Trad’r Sam</a>",
    address: "6150 Geary Boulevard, San Francisco, CA 94121",
    yearOpened: "1937",
    coordinates: [37.7803547,-122.4856197]
    }, 
    { 
    name: "<a href='http://www.twinpeakstavern.com/' target='_blank'>Twin Peaks Tavern</a>",
    address: "401 Castro Street, San Francisco, CA 94114",
    yearOpened: "1972",
    coordinates: [37.7622826,-122.4349365]
    }, 
    { 
    name: "<a href='' target='_blank'>Uptown</a>",
    address: "200 Capp Street, San Francisco, CA 94110",
    yearOpened: "1909",
    coordinates: [37.7631901,-122.4186065]
    }, 
    { 
    name: "<a href='http://www.vesuvio.com/' target='_blank'>Vesuvio Café</a>",
    address: "255 Columbus Avenue, San Francisco, CA 94133",
    yearOpened: "1948",
    coordinates: [37.7974835,-122.4065082]
    }, 
    { 
    name: "<a href='' target='_blank'>Whiz Burger</a>",
    address: "700 South Van Ness Avenue, San Francisco, CA 94110",
    yearOpened: "1955",
    coordinates: [37.761814,-122.4174595]
    }, 
    { 
    name: "<a href='https://www.wildsidewest.com/' target='_blank'>Wild Side West</a>",
    address: "424 Cortland Avenue, San Francisco, CA 94110",
    yearOpened: "1962",
    coordinates: [37.7389698,-122.4172101]
    }, 
    { 
    name: "<a href='http://www.big4restaurant.com/' target='_blank'>Big Four Restaurant</a>",
    address: "1057 California Street, San Francisco, CA 94108",
    yearOpened: "1976",
    coordinates: [37.7917192,-122.4117847]
    }, 
    { 
    name: "<a href='http://sf-eagle.com/' target='_blank'>Eagle Tavern</a>",
    address: "398 12th Street, San Francisco, CA 94103",
    yearOpened: "1980s",
    coordinates: [37.769982,-122.41342]
    }, 
    { 
    name: "<a href='https://ebisusushi.com/' target='_blank'>Ebisu</a>",
    address: "1283 9th Avenue, San Francisco, CA 94122",
    yearOpened: "1982",
    coordinates: [37.7644571,-122.46666]
    }, 
    { 
    name: "<a href='http://www.harrisrestaurant.com/' target='_blank'>Harris’ Steakhouse</a>",
    address: "2100 Van Ness Avenue, San Francisco, CA 94109",
    yearOpened: "1984",
    coordinates: [37.7950668,-122.4229237]
    }, 
    { 
    name: "<a href='http://harrysbarsf.com/' target='_blank'>Harry’s Bar</a>",
    address: "2020 Fillmore Street, San Francisco, CA 94115",
    yearOpened: "1976",
    coordinates: [37.7883547,-122.4334309]
    }, 
    { 
    name: "<a href='http://www.hayesstreetgrill.com/' target='_blank'>Hayes Street Grill</a>",
    address: "320 Hayes Street, San Francisco, CA 94102",
    yearOpened: "1979",
    coordinates: [37.7771762,-122.4218286]
    }, 
    { 
    name: "<a href='' target='_blank'>Orphan Andy’s</a>",
    address: "3991 17th Street, San Francisco, CA 94114",
    yearOpened: "1977",
    coordinates: [37.762326,-122.4348896]
    }, 
    { 
    name: "<a href='http://www.toronado.com/' target='_blank'>Toronado</a>",
    address: "547 Haight Street, San Francisco, CA 94117",
    yearOpened: "1989",
    coordinates: [37.7718304,-122.4311305]
    }, 
    { 
    name: "<a href='http://www.villadesterestaurantsf.com/' target='_blank'>Villa D’Este</a>",
    address: "2623 Ocean Avenue, San Francisco, CA 94132",
    yearOpened: "1978",
    coordinates: [37.7315966,-122.4738522]
    }, 
    { 
    name: "<a href='http://zunicafe.com/' target='_blank'>Zuni Café</a>",
    address: "1658 Market Street, San Francisco, CA 94102",
    yearOpened: "1979",
    coordinates: [37.773614,-122.4216406]
    }
];

db.Heritage.remove( {} , (req,res) => {
    db.Heritage.create(heritageList, (err, newBusiness) => {
        if(err){
            console.log(err);
        }
        console.log("Created a new heritage bar or restaraunt", newBusiness);
        
        db.Legacy.remove( {} , (req,res) => {
            db.Legacy.create(legacyList, (err, newLegacyBusiness) => {
                if(err){
                    console.log(err);
                }
                console.log("Created a new legacy bar or restaraunt", newLegacyBusiness);
        
                db.User.remove( {} , (req,res) => {
                    db.User.create(userList, (err, newUser) => {
                        if(err){
                            console.log(err);
                        }
                        console.log("Created a new user", newUser);
                        process.exit();
                    });
                });
            });
        }); 
    });
});


