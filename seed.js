const db = require('./models');

let singleUser =
{
    name:"Natalie",
    email:"natalieplsn@gmail.com",
    password:"cowboys",
}

// let userList = [
//     {
//     name: "Natalie",
//     email: "natalieplsn@gmail.com",
//     password: "cowboys"
//     },
//     {
//     name: "Alan",
//     email: "a386226@gmail.com",
//     password: "niners"
//     }
// ]

let legacyList = {
    name: "In-N-Out Burger",
    address: "9333 Jefferson St, San Francisco, CA 94133",
    yearOpened: 1948,
    coordinates: [37.8077, -122.4185],
    website:"https://locations.in-n-out.com/154-San-Francisco"
}

// let legacyList = [
//     {
//         name: "In-N-Out Burger",
//         address: "9333 Jefferson St, San Francisco, CA 94133",
//         yearOpened: 1948,
//         coordinates: [37.8077, -122.4185],
//         website:"https://locations.in-n-out.com/154-San-Francisco"
//     }
// ];

let heritageList = [
    {
    name: "Tadich Grill",
    address: "240 California St, San Francisco, CA 94111",
    yearOpened: "1849",
    website:"https://tadichgrillsf.com/",
    coordinates: [37.7934,-122.3995]
    },
    {
    name: "Tosca Cafe",
    address: "242 Columbus Ave, San Francisco, CA 94133",
    yearOpened: "1919",
    website:"http://toscacafesf.com/",
    coordinates: [37.7976,-122.4059]
    },
    {
    name: "Sam Wo Restaurant",
    address: "2713 Clay St, San Francisco, CA 94108",
    yearOpened: "1912",
    website:"http://www.samworestaurant.com/",
    coordinates: [37.7942, -122.4051]
    },
    {
    name: "Cliff House",
    address: "1090 Point Lobos Ave, San Francisco, CA 94121",
    yearOpened: "1858",
    website:"https://cliffhouse.com/",
    coordinates: [37.7785, -122.5140]
    },
    { 
    name: "Alioto's Restaurant",
    address: "8 Fisherman’s Wharf, San Francisco, CA 94133",
    yearOpened: "1925",
    website:"http://aliotos.com/",
    coordinates: [37.809461,-122.4167201]
    }, 
    { 
    name: "Anchor Steam Brewery",
    address: "1705 Mariposa Street, San Francisco, CA 94107",
    yearOpened: "1871",
    website:"http://www.anchorbrewing.com/beer/anchor_steam",
    coordinates: [37.763304,-122.4007997]
    }, 
    { 
    name: "Art's Cafe",
    address: "747 Irving Street, San Francisco, CA 94122",
    yearOpened: "1950s",
    website:"https://www.yelp.com/biz/arts-cafe-san-francisco",
    coordinates: [37.763933,-122.4660473]
    }, 
    { 
    name: "Zam Zam",
    address: "1633 Haight Street, San Francisco, CA 94117",
    yearOpened: "1942",
    website:"https://www.yelp.com/biz/zam-zam-san-francisco",
    coordinates: [37.769619,-122.449291]
    }, 
    { 
    name: "Balboa Cafe",
    address: "3199 Fillmore Street, San Francisco, CA 94123",
    yearOpened: "1913",
    website:"http://www.balboacafe.com/san-francisco/",
    coordinates: [37.7988167,-122.4360935]
    },
    { 
    name: "Beep's Burgers",
    address: "1051 Ocean Avenue, San Francisco, CA 94112",
    yearOpened: "1962",
    website:"https://www.beepsburgers.com/",
    coordinates: [37.7232086,-122.4538672]
    }, 
    {			
    name: "Benkyodo Co",		
    address: "1747 Buchanan Street, San Francisco, CA 94115",		
    yearOpened: "1906",		
    website: "http://www.benkyodocompany.com/",
    coordinates: [37.7863576,-122.4302457]		
    },		
    {		
    name: "Bill's Place",		
    address: "2315 Clement Street, San Francisco, CA 94121",		
    yearOpened: "1960",		
    website: "https://www.yelp.com/biz/bills-place-san-francisco",
    coordinates: [37.7818522,-122.4841716]		
    },		
    {		
    name: "Bimbo's 365 Club",		
    address: "1025 Columbus Avenue, San Francisco, CA 94133",		
    yearOpened: "1931",		
    website: "http://www.bimbos365club.com/",
    coordinates: [37.8036989,-122.4156675]		
    },		
    {		
    name: "Bruno's",		
    address: "2389 Mission Street, San Francisco, CA 94110",		
    yearOpened: "1950s",		
    website: "http://www.brunossf.com/",
    coordinates: [37.7589582,-122.4188289]		
    },		
    {		
    name: "The Buena Vista",		
    address: "2765 Hyde Street, San Francisco, CA 94109",		
    yearOpened: "1916",		
    website: "http://www.thebuenavista.com/home/home.html",
    coordinates: [37.8065278,-122.4207822]		
    },		
    {		
    name: "Bus Stop Bar",		
    address: "1901 Union Street, San Francisco, CA 94123",		
    yearOpened: "1901",		
    website: "http://www.busstop-sf.com/",
    coordinates: [37.7976083,-122.4306986]		
    },		
    {		
    name: "Cafe Du Nord",		
    address: "2170 Market Street, San Francisco, CA 94114",		
    yearOpened: "1907",		
    website: "https://www.swedishamericanhall.com/cafe-du-nord",
    coordinates: [37.7667547,-122.4305017]		
    },		
    {		
    name: "Flore on Market",		
    address: "2298 Market Street, San Francisco, CA 94114",		
    yearOpened: "1973",		
    website: "https://flore415.com/",
    coordinates: [37.7646778,-122.4329332]		
    },		
    {		
    name: "Café La Bohème",		
    address: "3318 24th Street, San Francisco, CA 94110",		
    yearOpened: "1973",		
    website: "http://www.cafelabohemesanfrancisco.com/",
    coordinates: [37.7523283,-122.418971]		
    },		
    {		
    name: "Caffe Sport",		
    address: "574 Green Street, San Francisco, CA 94133",		
    yearOpened: "1969",		
    website: "https://www.caffesportsf.com/",
    coordinates: [37.799676,-122.4087078]		
    },		
    {		
    name: "Caffe Trieste",		
    address: "601 Vallejo Street, San Francisco, CA 94133",		
    yearOpened: "1956",		
    website: "http://coffee.caffetrieste.com/",
    coordinates: [37.7986407,-122.4073436]		
    },		
    {		
    name: "Capurro's Restaurant and Bar",		
    address: "498 Jefferson Street, San Francisco, CA 94109",		
    yearOpened: "1946",		
    website: "http://capurros.com/",
    coordinates: [37.8078414,-122.4202248]		
    },		
    {		
    name: "Casa Sanchez",		
    address: "2778 24th Street, San Francisco, CA 94110",		
    yearOpened: "1924",		
    website: "https://casasanchezsf.com/",
    coordinates: [37.7530499,-122.4078135]		
    },		
    {		
    name: "Castagnola's Restaurant",		
    address: "286 Jefferson Street, San Francisco, CA 94133",		
    yearOpened: "1916",		
    website: "http://www.castagnolassf.com/",
    coordinates: [37.8082114,-122.4175701]		
    },		
    {		
    name: "Cha Cha Cha",		
    address: "2327 Mission Street, San Francisco, CA 94110",		
    yearOpened: "1933",		
    website: "http://chachachasf.com/",
    coordinates: [37.7597878,-122.4189638]		
    },		
    {		
    name: "Columbus Cafe",		
    address: "562 Green Street, San Francisco, CA 94133",		
    yearOpened: "1936",		
    website: "https://www.columbuscafesf.com/",
    coordinates: [37.7997155,-122.4084128]		
    },		
    {		
    name: "Comstock Saloon",		
    address: "155 Columbus Avenue, San Francisco, CA 94133",		
    yearOpened: "1907",		
    website: "https://comstocksaloon.com/",
    coordinates: [37.7969298,-122.4055622]		
    },		
    {		
    name: "Cordon Bleu Vietnamese Restaurant",		
    address: "1574 California Street, San Francisco, CA 94109",		
    yearOpened: "1968",		
    website: "https://www.yelp.com/biz/cordon-bleu-san-francisco",
    coordinates: [37.7908834,-122.4202168]		
    },		
    {		
    name: "Dianda's Italian American Pastry",		
    address: "2883 Mission Street, San Francisco, CA 94110",		
    yearOpened: "1962",		
    website: "https://www.diandasbakery.com/",
    coordinates: [37.7509882,-122.4180347]		
    },		
    {		
    name: "Dogpatch Saloon",		
    address: "2496 3rd Street, San Francisco, CA 94107",		
    yearOpened: "1912",		
    website: "http://dogpatchsaloon.com/",
    coordinates: [37.7580415,-122.3885164]		
    },		
    {		
    name: "Don Ramon's Mexican Restaurant",		
    address: "221 11th Street, San Francisco, CA 94103",		
    yearOpened: "1967",		
    website: "http://www.donramonsrestaurante.com/",
    coordinates: [37.772882,-122.4150134]		
    },		
    {		
    name: "Double Play bar and grill",		
    address: "2401 16th Street, San Francisco, CA 94103",		
    yearOpened: "1909",		
    website: "https://www.yelp.com/biz/double-play-bar-and-grill-san-francisco",
    coordinates: [37.7654995,-122.4106267]		
    },		
    {		
    name: "Eagle Cafe",		
    address: "Pier 39, Suite 103, San Francisco, CA 94133",		
    yearOpened: "1928",		
    website: "https://www.eaglecafe.com/",
    coordinates: [37.8087731,-122.4103237]		
    },		
    {		
    name: "Edinburgh Castle Pub",		
    address: "950 Geary Street, San Francisco, CA 94109",		
    yearOpened: "1960s",		
    website: "https://www.yelp.com/biz/edinburgh-castle-pub-san-francisco-2",
    coordinates: [37.7861924,-122.4189859]		
    },		
    {		
    name: "Elbo Room",		
    address: "647 Valencia Street, San Francisco, CA 94110",		
    yearOpened: "1935",		
    website: "https://www.elbo.com/san-francisco-home",
    coordinates: [37.7625064,-122.4214116]		
    },		
    {		
    name: "Elixir",		
    address: "3200 16th Street, San Francisco, CA 94103",		
    yearOpened: "1858",		
    website: "https://www.elixirsf.com/",
    coordinates: [37.7649919,-122.4243173]		
    },		
    {		
    name: "El Toreador",		
    address: "50 West Portal Avenue, San Francisco, CA 94127",		
    yearOpened: "1957",		
    website: "http://www.eltoreadorsf.com/",
    coordinates: [37.7403871,-122.4666158]		
    },		
    {		
    name: "Far East Cafe",		
    address: "631 Grant Avenue, San Francisco, CA 94108",		
    yearOpened: "1920",		
    website: "http://www.fareastcafesf.com/index.html",
    coordinates: [37.7929902,-122.4061354]		
    },		
    {		
    name: "Fior d'Italia",		
    address: "2237 Mason Street, San Francisco, CA 94133",		
    yearOpened: "1886",		
    website: "http://www.fior.com/",
    coordinates: [37.8043012,-122.4135879]		
    },		
    {		
    name: "The Grotto (replaced Fisherman's No 9)",		
    address: "2847 Taylor Street, San Francisco, CA 94133",		
    yearOpened: "1935",		
    website: "http://thegrottosf.com/",
    coordinates: [37.8089738,-122.4158486]		
    },		
    {		
    name: "The Fly Trap",		
    address: "606 Folsom Street, San Francisco, CA 94107",		
    yearOpened: "1883",		
    website: "https://flytrapsf.com/",
    coordinates: [37.785485,-122.397216]		
    },		
    {		
    name: "The Garden Court",		
    address: "2 New Montgomery Street, San Francisco, CA 94105",		
    yearOpened: "1909",		
    website: "https://www.sfpalace.com/garden-court/",
    coordinates: [37.7884503,-122.4020449]		
    },		
    {		
    name: "Gino & Carlo",		
    address: "548 Green Street, San Francisco, CA 94133",		
    yearOpened: "1942",		
    website: "https://www.ginoandcarlo.com/",
    coordinates: [37.7998836,-122.4081675]		
    },		
    {		
    name: "Gold Dust Karaoke & Bar Lounge",		
    address: "165 Jefferson Street, San Francisco, CA 94133",		
    yearOpened: "1967",		
    website: "http://www.golddustsf.com/",
    coordinates: [37.8079619,-122.4153359]		
    },		
    {		
    name: "The Gold Mirror Italian Restaurant",		
    address: "800 Taraval Street, San Francisco, CA 94116",		
    yearOpened: "1969",		
    website: "https://goldmirrorrestaurant.com/",
    coordinates: [37.7433015,-122.4748302]		
    },		
    {		
    name: "Great American Music Hall",		
    address: "859 O’Farrell Street, San Francisco, CA 94109",		
    yearOpened: "1907",		
    website: "http://www.slimspresents.com/great-american-music-hall/",
    coordinates: [37.7848325,-122.418809]		
    },		
    {		
    name: "The Grubstake",		
    address: "1525 Pine Street, San Francisco, CA 94109",		
    yearOpened: "1927",		
    website: "http://sfgrubstake.com/",
    coordinates: [37.789368,-122.4208221]		
    },		
    {		
    name: "Guerra Quality Meats",		
    address: "490 Taraval Street, San Francisco, CA 94116",		
    yearOpened: "1954",		
    website: "http://guerrameats.com/default.aspx",
    coordinates: [37.7434606,-122.4711994]		
    },		
    {		
    name: "Hang Ah Dim Sum Tea House",		
    address: "1 Pagoda Place, San Francisco, CA 94108",		
    yearOpened: "1920",		
    website: "http://www.hangah1920.com/",
    coordinates: [37.7933928,-122.4075003]		
    },		
    {		
    name: "Hara Club",		
    address: "875 Geary Street, San Francisco, CA 94109",		
    yearOpened: "1947",		
    website: "http://www.harasf.com/",
    coordinates: [37.785953,-122.417622]		
    },		
    {		
    name: "Harrington's Bar and Grill",		
    address: "245 Front Street, San Francisco, CA 94111",		
    yearOpened: "1935",		
    website: "http://www.harringtonsbarandgrill.com/",
    coordinates: [37.794057,-122.3991919]		
    },		
    {		
    name: "Henry’s Hunan",		
    address: "924 Sansome Street, San Francisco, CA 94111",		
    yearOpened: "1974",		
    website: "http://henryshunan.com/",
    coordinates: [37.7990559,-122.402083]		
    },		
    {		
    name: "Hi Dive Bar",		
    address: "Pier 28, The Embarcadero, San Francisco, CA 94105",		
    yearOpened: "1916",		
    website: "http://www.hidivesf.com/",
    coordinates: [37.787962,-122.3874212]		
    },		
    {		
    name: "The Hotel Utah Saloon",		
    address: "500 4th Street, San Francisco, CA 94107",		
    yearOpened: "1908",		
    website: "https://www.hotelutah.com/",
    coordinates: [37.7793954,-122.3980837]		
    },		
    {		
    name: "House of Prime Rib",		
    address: "1906 Van Ness Avenue, San Francisco, CA 94109",		
    yearOpened: "1949",		
    website: "http://houseofprimerib.net/",
    coordinates: [37.7934402,-122.4225255]		
    },		
    {		
    name: "The House Of Shields",		
    address: "39 New Montgomery Street, San Francisco, CA 94105",		
    yearOpened: "1908",		
    website: "http://www.thehouseofshields.com/",
    coordinates: [37.7882737,-122.4013083]		
    },		
    {		
    name: "The Irish Bank",		
    address: "10 Mark Lane, San Francisco, CA 94108",		
    yearOpened: "1908",		
    website: "http://www.theirishbank.com/",
    coordinates: [37.7904802,-122.4046843]		
    },		
    {		
    name: "It's Tops Coffee Shop",		
    address: "1801 Market Street, San Francisco, CA 94103",		
    yearOpened: "1935",		
    website: "http://www.itstopscoffeeshop.com/",
    coordinates: [37.7713711,-122.4237001]		
    },		
    {		
    name: "Java House Restaurant",		
    address: "Pier 40, The Embarcadero, San Francisco, CA 94107",		
    yearOpened: "1912",		
    website: "http://www.javahousesf.com/",
    coordinates: [37.7819503,-122.3878795]		
    },		
    {		
    name: "John's Grill",		
    address: "63 Ellis Street, San Francisco, CA 94102",		
    yearOpened: "1908",		
    website: "https://www.johnsgrill.com/",
    coordinates: [37.785433,-122.407233]		
    },		
    {		
    name: "Kezar Pub",		
    address: "770 Stanyan Street, San Francisco, CA 94117",		
    yearOpened: "1969",		
    website: "https://kezar.pub/",
    coordinates: [37.7678869,-122.4528942]		
    },		
    {		
    name: "La Rocca's Corner",		
    address: "957 Columbus Avenue, San Francisco, CA 94133",		
    yearOpened: "1930s",		
    website: "https://www.yelp.com/biz/la-roccas-corner-san-francisco",
    coordinates: [37.8031815,-122.4146277]		
    },		
    {		
    name: "Laurel Court Restaurant & Bar",		
    address: "950 Mason Street, San Francisco, CA 94108",		
    yearOpened: "1907",		
    website: "https://www.fairmont.com/san-francisco/dining/laurel-court-restaurant-and-bar/",
    coordinates: [37.7923883,-122.4100923]		
    },		
    {		
    name: "Le Central",		
    address: "453 Bush Street, San Francisco, CA 94108",		
    yearOpened: "1974",		
    website: "http://lecentralbistro.com/",
    coordinates: [37.7904658,-122.4050258]		
    },		
    {		
    name: "Liguria Bakery",		
    address: "1700 Stockton Street, San Francisco, CA 94133",		
    yearOpened: "1911",		
    website: "https://www.yelp.com/biz/liguria-bakery-san-francisco",
    coordinates: [37.8015477,-122.4092596]		
    },		
    {		
    name: "Li Po Cocktail Lounge",		
    address: "916 Grant Avenue, San Francisco, CA 94108",		
    yearOpened: "1937",		
    website: "http://www.lipolounge.com/",
    coordinates: [37.7954238,-122.4064344]		
    },		
    {		
    name: "Little Shamrock",		
    address: "807 Lincoln Way, San Francisco, CA 94122",		
    yearOpened: "1890s",		
    website: "https://www.yelp.com/biz/the-little-shamrock-san-francisco",
    coordinates: [37.7656707,-122.4667374]		
    },		
    {		
    name: "Lucca Delicatessen",		
    address: "2120 Chestnut Street, San Francisco, CA 94123",		
    yearOpened: "1929",		
    website: "http://www.luccadeli.com/",
    coordinates: [37.8006904,-122.4383892]		
    },		
    {		
    name: "Mario's Bohemian Cigar Store Cafe",		
    address: "566 Columbus Ave, San Francisco, CA 94133",		
    yearOpened: "1971",		
    website: "https://www.yelp.com/biz/marios-bohemian-cigar-store-cafe-san-francisco",
    coordinates: [37.8002499,-122.4097803]		
    },		
    {		
    name: "Mauna Loa Club",		
    address: "3009 Fillmore Street, San Francisco, CA 94123",		
    yearOpened: "1939",		
    website: "https://www.yelp.com/biz/mauna-loa-club-san-francisco",
    coordinates: [37.7973143,-122.4357177]		
    },		
    {		
    name: "Mitchell's Ice Cream",		
    address: "688 San Jose Avenue, San Francisco, CA 94110",		
    yearOpened: "1953",		
    website: "https://mitchellsicecream.com/",
    coordinates: [37.7440901,-122.4228578]		
    },		
    {		
    name: "Mr. Bing's",		
    address: "201 Columbus Avenue, San Francisco, CA 94133",		
    yearOpened: "1967",		
    website: "https://www.yelp.com/biz/mr-bings-san-francisco",
    coordinates: [37.7971443,-122.4059188]		
    },		
    {		
    name: "Murio's Trophy Room",		
    address: "1811 Haight Street, San Francisco, CA 94117",		
    yearOpened: "1959",		
    website: "https://www.yelp.com/biz/murios-trophy-room-san-francisco",
    coordinates: [37.7691469,-122.4521865]		
    },		
    {		
    name: "NorthStar Cafe",		
    address: "1560 Powell Street, San Francisco, CA 94133",		
    yearOpened: "1882",		
    website: "https://www.yelp.com/biz/northstar-cafe-san-francisco",
    coordinates: [37.7992211,-122.4104132]		
    },		
    {		
    name: "Oak Room",		
    address: "335 Powell Street, San Francisco, CA 94102",		
    yearOpened: "1904",		
    website: "https://www.westinstfrancis.com/dining/oak-room-restaurant/",
    coordinates: [37.7878279,-122.4087315]		
    },		
    {		
    name: "The Old Clam House",		
    address: "299 Bayshore Boulevard, San Francisco, CA 94124",		
    yearOpened: "1861",		
    website: "https://theoldclamhousesf.com/",
    coordinates: [37.7430863,-122.4048488]		
    },		
    {		
    name: "The Old Ship Saloon",		
    address: "298 Pacific Avenue, San Francisco, CA 94111",		
    yearOpened: "1851",		
    website: "https://www.theoldshipsf.com/",
    coordinates: [37.7978382,-122.4007776]		
    },		
    {		
    name: "Original Joe's",		
    address: "601 Union Street, San Francisco, CA 94133",		
    yearOpened: "1937",		
    website: "http://originaljoessf.com/",
    coordinates: [37.8002488,-122.4093401]		
    },		
    {		
    name: "Original U.S. Restaurant",		
    address: "515 Columbus Avenue, San Francisco, CA 94133",		
    yearOpened: "1970s",		
    website: "http://originalusrestaurant.com/",
    coordinates: [37.7997274,-122.4096048]		
    },		
    {		
    name: "Perry's on Union",		
    address: "1944 Union Street, San Francisco, CA 94123",		
    yearOpened: "1969",		
    website: "https://www.perryssf.com/",
    coordinates: [37.7978273,-122.4313074]		
    },		
    {		
    name: "Philosopher's Club",		
    address: "824 Ulloa Street, San Francisco, CA 94127",		
    yearOpened: "1960",		
    website: "https://www.yelp.com/biz/philosophers-club-san-francisco",
    coordinates: [37.7408929,-122.4653664]		
    },		
    {		
    name: "Pied Piper Bar and Grill",		
    address: "2 New Montgomery Street, San Francisco, CA 94105",		
    yearOpened: "1909",		
    website: "https://www.sfpalace.com/pied-piper-bar-and-grill/",
    coordinates: [37.7884503,-122.4020449]		
    },		
    {		
    name: "Pier 23 Cafe",		
    address: "Pier 23, The Embarcadero, San Francisco, CA 94111",		
    yearOpened: "1937",		
    website: "http://pier23cafe.com/",
    coordinates: [37.8037388,-122.3995606]		
    },		
    {		
    name: "Puerto Alegre",		
    address: "546 Valencia Street, San Francisco, CA 94110",		
    yearOpened: "1970",		
    website: "https://www.puertoalegresf.net/",
    coordinates: [37.7641345,-122.4220234]		
    },		
    {		
    name: "Red’s Java House",		
    address: "Pier 30, The Embarcadero, San Francisco, CA 94105",		
    yearOpened: "1930s",		
    website: "http://www.redsjavahouse.com/",
    coordinates: [37.7872246,-122.3877934]		
    },		
    {		
    name: "Red's Java House",		
    address: "672 Jackson Street, San Francisco, CA 94108",		
    yearOpened: "1940s",		
    website: "https://www.yelp.com/biz/reds-place-san-francisco",
    coordinates: [37.79615,-122.406447]		
    },		
    {		
    name: "Redwood Room",		
    address: "495 Geary Street, San Francisco, CA 94102",		
    yearOpened: "1933",		
    website: "https://www.sonesta.com/us/california/san-francisco/clift-royal-sonesta-hotel/dining",
    coordinates: [37.7867731,-122.4112871]		
    },		
    {		
    name: "Roosevelt Tamale Parlor",		
    address: "2817 24th Street, San Francisco, CA 94110",		
    yearOpened: "1919",		
    website: "https://www.rooseveltsipneat.com/",
    coordinates: [37.7526561,-122.40861]		
    },		
    {		
    name: "Sabella & La Torre",		
    address: "2809 Taylor Street, San Francisco, CA 94133",		
    yearOpened: "1927",		
    website: "http://www.sabellalatorre.com/Home",
    coordinates: [37.8084592,-122.4159347]		
    },		
    {		
    name: "Sam's Grill & Seafood Restaurant",		
    address: "374 Bush Street, San Francisco, CA 94104",		
    yearOpened: "1867",		
    website: "http://www.samsgrillsf.com/",
    coordinates: [37.7910009,-122.4035876]		
    },		
    {		
    name: "Sam Jordan's Bar and Grill",		
    address: "4004 3rd Street, San Francisco, CA 94123",		
    yearOpened: "1959",		
    website: "http://samjordanbar.com/",
    coordinates: [37.7410475,-122.3888398]		
    },		
    {		
    name: "Sam’s Pizza & Burgers",		
    address: "618 Broadway, San Francisco, CA 94133",		
    yearOpened: "1966",		
    website: "https://www.yelp.com/biz/sams-san-francisco",
    coordinates: [37.7979623,-122.4074263]		
    },		
    {		
    name: "The Sausage Factory",		
    address: "517 Castro Street, San Francisco, CA 94114",		
    yearOpened: "1968",		
    website: "https://thesausagefactorysf.com/",
    coordinates: [37.7605183,-122.4346253]		
    },		
    {		
    name: "Savoy Tivoli",		
    address: "1434 Grant Avenue, San Francisco, CA 94133",		
    yearOpened: "1907",		
    website: "https://www.yelp.com/biz/savoy-tivoli-san-francisco-2",
    coordinates: [37.8002402,-122.407371]		
    },		
    {		
    name: "Schroeder's",		
    address: "240 Front Street, San Francisco, CA 94111",		
    yearOpened: "1893",		
    website: "http://www.schroederssf.com/",
    coordinates: [37.7939747,-122.3986977]		
    },		
    {		
    name: "Scoma's",		
    address: "1 Al Scoma Way, San Francisco, CA 94133",		
    yearOpened: "1965",		
    website: "https://scomas.com/",
    coordinates: [37.8079493,-122.4180291]		
    },		
    {		
    name: "Seal Rock Inn",		
    address: "545 Point Lobos, San Francisco, CA 94121",		
    yearOpened: "1959",		
    website: "http://sealrockinn.com/",
    coordinates: [37.7795829,-122.5092287]		
    },		
    {		
    name: "Sears Fine Food",		
    address: "439 Powell Street, San Francisco, CA 94102",		
    yearOpened: "1938",		
    website: "http://www.searsfinefood.com/",
    coordinates: [37.7887986,-122.4088755]		
    },		
    {		
    name: "Shotwell's",		
    address: "3349 20th Street, San Francisco, CA 94110",		
    yearOpened: "1891",		
    website: "http://www.shotwellsbar.com/",
    coordinates: [37.75874,-122.4156501]		
    },		
    {		
    name: "Silver Crest Donut Shop",		
    address: "340 Bayshore Boulevard, San Francisco, CA 94124",		
    yearOpened: "1970",		
    website: "https://www.yelp.com/biz/silver-crest-donut-shop-san-francisco",
    coordinates: [37.7423314,-122.4061541]		
    },		
    {		
    name: "Specs' Twelve Adler Museum Cafe",		
    address: "12 Saroyan Place, San Francisco, CA 94133",		
    yearOpened: "1968",		
    website: "https://www.yelp.com/biz/specs-twelve-adler-museum-cafe-san-francisco-2",
    coordinates: [37.7976098,-122.4059625]		
    },		
    {		
    name: "St. Francis Fountain",		
    address: "2801 24th Street, San Francisco, CA 94110",		
    yearOpened: "1918",		
    website: "https://stfrancisfountainsf.com/",
    coordinates: [37.7526817,-122.4083862]		
    },		
    {		
    name: "St. Mary's Pub",		
    address: "3845 Mission Street, San Francisco, CA 94110",		
    yearOpened: "1950",		
    website: "http://stmaryspub.com/",
    coordinates: [37.7354741,-122.4244058]		
    },		
    {		
    name: "Swan Oyster Depot",		
    address: "1517 Polk Street, San Francisco, CA 94109",		
    yearOpened: "1912",		
    website: "http://swanoysterdepot.us/",
    coordinates: [37.7908308,-122.420964]		
    },		
    {		
    name: "Swensen's Grill & Ice Cream Parlor",		
    address: "1999 Hyde Street, San Francisco, CA 94109",		
    yearOpened: "1948",		
    website: "http://www.swensensicecream.com/",
    coordinates: [37.7990839,-122.419181]		
    },		
    {		
    name: "Taqueria La Cumbre",		
    address: "515 Valencia Street, San Francisco, CA 94110",		
    yearOpened: "1972",		
    website: "http://www.taquerialacumbre.com/",
    coordinates: [37.7645809,-122.4216212]		
    },		
    {		
    name: "Tarantino's Restaurant",		
    address: "206 Jefferson Street, San Francisco, CA 94133",		
    yearOpened: "1946",		
    website: "http://www.tarantinosrestaurant.com/",
    coordinates: [37.8083565,-122.4162541]		
    },		
    {		
    name: "Thanh Long Restaurant",		
    address: "4101 Judah Street, San Francisco, CA 94122",		
    yearOpened: "1971",		
    website: "http://thanhlongsf.com/",
    coordinates: [37.7601637,-122.50609]		
    },		
    {		
    name: "The EndUp",		
    address: "401 6th Street, San Francisco, CA 94103",		
    yearOpened: "1973",		
    website: "https://theendupsf.com/",
    coordinates: [37.7772436,-122.4037707]		
    },		
    {		
    name: "Hearth",		
    address: "4701 Geary Boulevard, San Francisco, CA 94118",		
    yearOpened: "1967",		
    website: "https://www.yelp.com/biz/the-hearth-san-francisco",
    coordinates: [37.7804951,-122.4698331]		
    },		
    {		
    name: "The Homestead",		
    address: "2301 Folsom Street, San Francisco, CA 94110",		
    yearOpened: "1902",		
    website: "http://www.homesteadsf.com/",
    coordinates: [37.7604123,-122.4146016]		
    },		
    {		
    name: "The Horseshoe Tavern",		
    address: "2024 Chestnut Street, San Francisco, CA 94123",		
    yearOpened: "1934",		
    website: "http://horseshoetavern-sf.com/",
    coordinates: [37.8009246,-122.436903]		
    },		
    {		
    name: "The Ramp",		
    address: "855 Terry A. Francois Boulevard, San Francisco, CA 94107",		
    yearOpened: "1950",		
    website: "http://www.rampsf.com/",
    coordinates: [37.764077,-122.3871912]		
    },		
    {		
    name: "Royal Exchange",		
    address: "301 Sacramento Street, San Francisco, CA 94111",		
    yearOpened: "1972",		
    website: "http://royalexchange.com/",
    coordinates: [37.7941424,-122.3992059]		
    },		
    {		
    name: "The Saloon",		
    address: "1232 Grant Avenue, San Francisco, CA 94133",		
    yearOpened: "1861",		
    website: "http://sfblues.weebly.com/saloon-schedule.html",
    coordinates: [37.7985867,-122.4070229]		
    },		
    {		
    name: "Tommaso's",		
    address: "1042 Kearny Street, San Francisco, CA 94133",		
    yearOpened: "1935",		
    website: "http://www.tommasos.com/",
    coordinates: [37.7977906,-122.4052913]		
    },		
    {		
    name: "Tommy's Joynt",		
    address: "1101 Geary Boulevard, San Francisco, CA 94109",		
    yearOpened: "1947",		
    website: "http://tommysjoynt.com/",
    coordinates: [37.785533,-122.4217955]		
    },		
    {		
    name: "Tommy's Mexican Restaurant",		
    address: "5929 Geary Boulevard, San Francisco, CA 94121",		
    yearOpened: "1965",		
    website: "http://tommysmexican.com/",
    coordinates: [37.7798531,-122.4831435]		
    },		
    {		
    name: "Tonga Room & Hurricane Bar",		
    address: "950 Mason Street, San Francisco, CA 94108",		
    yearOpened: "1945",		
    website: "https://www.tongaroom.com/",
    coordinates: [37.7923883,-122.4100923]		
    },		
    {		
    name: "Tony's Cable Car Restaurant",		
    address: "2500 Geary Boulevard, San Francisco, CA 94115",		
    yearOpened: "1972",		
    website: "http://www.tonyscablecar.com/",
    coordinates: [37.7828683,-122.4451313]		
    },		
    {		
    name: "Tony Nik's",		
    address: "1534 Stockton Street, San Francisco, CA 94133",		
    yearOpened: "1933",		
    website: "https://www.tonyniks.com/",
    coordinates: [37.8000496,-122.4088995]		
    },		
    {		
    name: "Top of the Mark",		
    address: "999 California Street, San Francisco, CA 94108",		
    yearOpened: "1939",		
    website: "http://www.intercontinentalmarkhopkins.com/top-of-the-mark.aspx",
    coordinates: [37.7915187,-122.4101366]		
    },		
    {		
    name: "Trad'r Sam",		
    address: "6150 Geary Boulevard, San Francisco, CA 94121",		
    yearOpened: "1937",		
    website: "https://www.yelp.com/biz/tradr-sam-san-francisco-2",
    coordinates: [37.7803547,-122.4856197]		
    },		
    {		
    name: "Twin Peaks Tavern",		
    address: "401 Castro Street, San Francisco, CA 94114",		
    yearOpened: "1972",		
    website: "http://www.twinpeakstavern.com/",
    coordinates: [37.7622826,-122.4349365]		
    },		
    {		
    name: "Uptown",		
    address: "200 Capp Street, San Francisco, CA 94110",		
    yearOpened: "1909",		
    website: "https://www.yelp.com/biz/uptown-san-francisco",
    coordinates: [37.7631901,-122.4186065]		
    },		
    {		
    name: "Vesuvio Cafe",		
    address: "255 Columbus Avenue, San Francisco, CA 94133",		
    yearOpened: "1948",		
    website: "http://www.vesuvio.com/",
    coordinates: [37.7974835,-122.4065082]		
    },		
    {		
    name: "Whiz Burgers Drive-In",		
    address: "700 South Van Ness Avenue, San Francisco, CA 94110",		
    yearOpened: "1955",		
    website: "https://www.yelp.com/biz/whiz-burgers-drive-in-san-francisco",
    coordinates: [37.761814,-122.4174595]		
    },		
    {		
    name: "Wild Side West",		
    address: "424 Cortland Avenue, San Francisco, CA 94110",		
    yearOpened: "1962",		
    website: "https://www.wildsidewest.com/",
    coordinates: [37.7389698,-122.4172101]		
    },		
    {		
    name: "The Big 4",		
    address: "1057 California Street, San Francisco, CA 94108",		
    yearOpened: "1976",		
    website: "http://www.big4restaurant.com/",
    coordinates: [37.7917192,-122.4117847]		
    },		
    {		
    name: "The Eagle Tavern",		
    address: "398 12th Street, San Francisco, CA 94103",		
    yearOpened: "1980s",		
    website: "http://sf-eagle.com/",
    coordinates: [37.769982,-122.41342]		
    },		
    {		
    name: "Ebisu Restaurant",		
    address: "1283 9th Avenue, San Francisco, CA 94122",		
    yearOpened: "1982",		
    website: "https://ebisusushi.com/",
    coordinates: [37.7644571,-122.46666]		
    },		
    {		
    name: "Harris'",		
    address: "2100 Van Ness Avenue, San Francisco, CA 94109",		
    yearOpened: "1984",		
    website: "http://www.harrisrestaurant.com/",
    coordinates: [37.7950668,-122.4229237]		
    },		
    {		
    name: "Harry's Bar",		
    address: "2020 Fillmore Street, San Francisco, CA 94115",		
    yearOpened: "1976",		
    website: "http://harrysbarsf.com/",
    coordinates: [37.7883547,-122.4334309]		
    },		
    {		
    name: "Hayes Street Grill",		
    address: "320 Hayes Street, San Francisco, CA 94102",		
    yearOpened: "1979",		
    website: "http://www.hayesstreetgrill.com/",
    coordinates: [37.7771762,-122.4218286]		
    },		
    {		
    name: "Orphan Andy's",		
    address: "3991 17th Street, San Francisco, CA 94114",		
    yearOpened: "1977",		
    website: "https://www.yelp.com/biz/orphan-andys-san-francisco",
    coordinates: [37.762326,-122.4348896]		
    },		
    {		
    name: "Toronado",		
    address: "547 Haight Street, San Francisco, CA 94117",		
    yearOpened: "1989",		
    website: "http://www.toronado.com/",
    coordinates: [37.7718304,-122.4311305]		
    },		
    {		
    name: "Villa D'Este",		
    address: "2623 Ocean Avenue, San Francisco, CA 94132",		
    yearOpened: "1978",		
    website: "http://www.villadesterestaurantsf.com/",
    coordinates: [37.7315966,-122.4738522]		
    },		
    {		
    name: "Zuni Café",		
    address: "1658 Market Street, San Francisco, CA 94102",		
    yearOpened: "1979",		
    website: "http://zunicafe.com/",
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

// db.User.deleteMany( {} , (err, removed) => {
//     console.log('deleted');
//     db.User.create(singleUser, (err, savedUser) => {
//         if (err) {console.log(err)};
//         db.Legacy.deleteMany ( {}, (err, removedLegacy) => {
//             console.log("legacy deleted");
//             db.Legacy.create (singleLegacy, (err, savedLegacy) => {
//                 if (err){console.log(err)};
//                 savedUser.legacy.push(savedLegacy)
//                 savedUser.save((err, saveUserLegacy) => {
//                     if(err){console.log(err)}
//                     else{console.log(saveUserLegacy)}
//                 })
//             })
//         })
//     })
// })


