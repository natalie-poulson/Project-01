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
    name: "Alfred’s Steak House",
    address: "659 Merchant Street, San Francisco, CA 94111",
    yearOpened: "1928",
    coordinates: [37.7948413,-122.4042826]
    }, 
    { 
    name: "Alioto’s Restaurant",
    address: "8 Fisherman’s Wharf, San Francisco, CA 94133",
    yearOpened: "1925",
    coordinates: [37.809461,-122.4167201]
    }, 
    { 
    name: "Anchor Steam Brewery",
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
    name: "Beep’s Burgers",
    address: "1051 Ocean Avenue, San Francisco, CA 94112",
    yearOpened: "1960s",
    coordinates: [37.7232086,-122.4538672]
    }, 
    { 
    name: "Benkyodo Company",
    address: "1747 Buchanan Street, San Francisco, CA 94115",
    yearOpened: "1906",
    coordinates: [37.7863576,-122.4302457]
    }, 
    { 
    name: "Bill’s Place",
    address: "2315 Clement Street, San Francisco, CA 94121",
    yearOpened: "1969",
    coordinates: [37.7818522,-122.4841716]
    }, 
    { 
    name: "Bimbo’s 365 Club",
    address: "1025 Columbus Avenue, San Francisco, CA 94133",
    yearOpened: "1931",
    coordinates: [37.8036989,-122.4156675]
    }, 
    { 
    name: "Bruno’s",
    address: "2389 Mission Street, San Francisco, CA 94110",
    yearOpened: "1950s",
    coordinates: [37.7589582,-122.4188289]
    }, 
    { 
    name: "Buena Vista Café",
    address: "2765 Hyde Street, San Francisco, CA 94109",
    yearOpened: "1916",
    coordinates: [37.8065278,-122.4207822]
    }, 
    { 
    name: "Bus Stop Bar",
    address: "1901 Union Street, San Francisco, CA 94123",
    yearOpened: "1900",
    coordinates: [37.7976083,-122.4306986]
    }, 
    { 
    name: "Café Du Nord",
    address: "2170 Market Street, San Francisco, CA 94114",
    yearOpened: "1907",
    coordinates: [37.7667547,-122.4305017]
    }, 
    { 
    name: "Café Flore",
    address: "2298 Market Street, San Francisco, CA 94114",
    yearOpened: "1973",
    coordinates: [37.7646778,-122.4329332]
    }, 
    { 
    name: "Café La Boheme",
    address: "3318 24th Street, San Francisco, CA 94110",
    yearOpened: "1973",
    coordinates: [37.7523283,-122.418971]
    }, 
    { 
    name: "Café Sport",
    address: "574 Green Street, San Francisco, CA 94133",
    yearOpened: "1969",
    coordinates: [37.799676,-122.4087078]
    }, 
    { 
    name: "Caffe Trieste",
    address: "601 Vallejo Street, San Francisco, CA 94133",
    yearOpened: "1956",
    coordinates: [37.7986407,-122.4073436]
    }, 
    { 
    name: "Capp’s Corner",
    address: "1600 Powell Street, San Francisco, CA 94133",
    yearOpened: "1963",
    coordinates: [37.7994503,-122.4104242]
    }, 
    { 
    name: "Capurro’s Restaurant",
    address: "498 Jefferson Street, San Francisco, CA 94109",
    yearOpened: "1946",
    coordinates: [37.8078414,-122.4202248]
    }, 
    { 
    name: "Casa Sanchez",
    address: "2778 24th Street, San Francisco, CA 94110",
    yearOpened: "1924",
    coordinates: [37.7530499,-122.4078135]
    }, 
    { 
    name: "Castagnola’s",
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
    name: "Columbus Café",
    address: "562 Green Street, San Francisco, CA 94133",
    yearOpened: "1936",
    coordinates: [37.7997155,-122.4084128]
    }, 
    { 
    name: "Comstock Saloon",
    address: "155 Columbus Avenue, San Francisco, CA 94133",
    yearOpened: "1907",
    coordinates: [37.7969298,-122.4055622]
    }, 
    { 
    name: "Cordon Bleu Vietnamese Restaurant",
    address: "1574 California Street, San Francisco, CA 94109",
    yearOpened: "1968",
    coordinates: [37.7908834,-122.4202168]
    }, 
    { 
    name: "Dianda’s Italian American Pastry",
    address: "2883 Mission Street, San Francisco, CA 94110",
    yearOpened: "1962",
    coordinates: [37.7509882,-122.4180347]
    }, 
    { 
    name: "Dogpatch Saloon",
    address: "2496 3rd Street, San Francisco, CA 94107",
    yearOpened: "1912",
    coordinates: [37.7580415,-122.3885164]
    }, 
    { 
    name: "Don Ramon’s Mexican Restaurant",
    address: "221 11th Street, San Francisco, CA 94103",
    yearOpened: "1967",
    coordinates: [37.772882,-122.4150134]
    }, 
    { 
    name: "Double Play",
    address: "2401 16th Street, San Francisco, CA 94103",
    yearOpened: "1909",
    coordinates: [37.7654995,-122.4106267]
    }, 
    { 
    name: "Eagle Café",
    address: "Pier 39, Suite 103, San Francisco, CA 94133",
    yearOpened: "1928",
    coordinates: [37.8087731,-122.4103237]
    }, 
    { 
    name: "Edinburgh Castle Pub",
    address: "950 Geary Street, San Francisco, CA 94109",
    yearOpened: "1960s",
    coordinates: [37.7861924,-122.4189859]
    }, 
    { 
    name: "Elbo Room",
    address: "647 Valencia Street, San Francisco, CA 94110",
    yearOpened: "1935",
    coordinates: [37.7625064,-122.4214116]
    }, 
    { 
    name: "Elixir",
    address: "3200 16th Street, San Francisco, CA 94103",
    yearOpened: "1858",
    coordinates: [37.7649919,-122.4243173]
    }, 
    { 
    name: "El Toreador",
    address: "50 West Portal Avenue, San Francisco, CA 94127",
    yearOpened: "1940s",
    coordinates: [37.7403871,-122.4666158]
    }, 
    { 
    name: "Empress of China",
    address: "838 Grant Avenue, San Francisco, CA 94108",
    yearOpened: "1965",
    coordinates: [37.7948544,-122.4060656]
    }, 
    { 
    name: "Far East Café",
    address: "631 Grant Avenue, San Francisco, CA 94108",
    yearOpened: "1920",
    coordinates: [37.7929902,-122.4061354]
    }, 
    { 
    name: "Fior d’Italia",
    address: "2237 Mason Street, San Francisco, CA 94133",
    yearOpened: "1886",
    coordinates: [37.8043012,-122.4135879]
    }, 
    { 
    name: "Fishermen’s Grotto",
    address: "2847 Taylor Street, San Francisco, CA 94133",
    yearOpened: "1935",
    coordinates: [37.8089738,-122.4158486]
    }, 
    { 
    name: "Fly Trap",
    address: "606 Folsom Street, San Francisco, CA 94107",
    yearOpened: "1883",
    coordinates: [37.785485,-122.397216]
    }, 
    { 
    name: "Frank’s 21 Club",
    address: "98 Turk Street, San Francisco, CA 94102",
    yearOpened: "1973",
    coordinates: [37.783492,-122.4105791]
    }, 
    { 
    name: "Gangway Bar",
    address: "841 Larkin Street, San Francisco, CA 94109",
    yearOpened: "1910",
    coordinates: [37.7858289,-122.4183209]
    }, 
    { 
    name: "Garden Court",
    address: "2 New Montgomery Street, San Francisco, CA 94105",
    yearOpened: "1909",
    coordinates: [37.7884503,-122.4020449]
    }, 
    { 
    name: "Gino & Carlo",
    address: "548 Green Street, San Francisco, CA 94133",
    yearOpened: "1942",
    coordinates: [37.7998836,-122.4081675]
    }, 
    { 
    name: "Gold Dust Lounge",
    address: "165 Jefferson Street, San Francisco, CA 94133",
    yearOpened: "1967",
    coordinates: [37.8079619,-122.4153359]
    }, 
    { 
    name: "Gold Mirror",
    address: "800 Taraval Street, San Francisco, CA 94116",
    yearOpened: "1969",
    coordinates: [37.7433015,-122.4748302]
    }, 
    { 
    name: "Great American Music Hall",
    address: "859 O’Farrell Street, San Francisco, CA 94109",
    yearOpened: "1907",
    coordinates: [37.7848325,-122.418809]
    }, 
    { 
    name: "Grubstake",
    address: "1525 Pine Street, San Francisco, CA 94109",
    yearOpened: "1927",
    coordinates: [37.789368,-122.4208221]
    }, 
    { 
    name: "Guerra’s Quality Meats",
    address: "490 Taraval Street, San Francisco, CA 94116",
    yearOpened: "1954",
    coordinates: [37.7434606,-122.4711994]
    }, 
    { 
    name: "Hang Ah Tea Room",
    address: "1 Pagoda Place, San Francisco, CA 94108",
    yearOpened: "1920",
    coordinates: [37.7933928,-122.4075003]
    }, 
    { 
    name: "Ha-Ra Club",
    address: "875 Geary Street, San Francisco, CA 94109",
    yearOpened: "1947",
    coordinates: [37.785953,-122.417622]
    }, 
    { 
    name: "Harrington’s Bar and Grill",
    address: "245 Front Street, San Francisco, CA 94111",
    yearOpened: "1935",
    coordinates: [37.794057,-122.3991919]
    }, 
    { 
    name: "Henry’s Hunan",
    address: "924 Sansome Street, San Francisco, CA 94111",
    yearOpened: "1974",
    coordinates: [37.7990559,-122.402083]
    }, 
    { 
    name: "Hi Dive",
    address: "Pier 28, The Embarcadero, San Francisco, CA 94105",
    yearOpened: "1916",
    coordinates: [37.787962,-122.3874212]
    }, 
    { 
    name: "Hotel Utah Saloon",
    address: "500 4th Street, San Francisco, CA 94107",
    yearOpened: "1908",
    coordinates: [37.7793954,-122.3980837]
    }, 
    { 
    name: "House of Prime Rib",
    address: "1906 Van Ness Avenue, San Francisco, CA 94109",
    yearOpened: "1949",
    coordinates: [37.7934402,-122.4225255]
    }, 
    { 
    name: "House of Shields",
    address: "39 New Montgomery Street, San Francisco, CA 94105",
    yearOpened: "1908",
    coordinates: [37.7882737,-122.4013083]
    }, 
    { 
    name: "Irish Bank Bar",
    address: "10 Mark Lane, San Francisco, CA 94108",
    yearOpened: "1908",
    coordinates: [37.7904802,-122.4046843]
    }, 
    { 
    name: "It’s Tops Coffee Shop",
    address: "1801 Market Street, San Francisco, CA 94103",
    yearOpened: "1935",
    coordinates: [37.7713711,-122.4237001]
    }, 
    { 
    name: "Java House Restaurant",
    address: "Pier 40, The Embarcadero, San Francisco, CA 94107",
    yearOpened: "1912",
    coordinates: [37.7819503,-122.3878795]
    }, 
    { 
    name: "John’s Grill",
    address: "63 Ellis Street, San Francisco, CA 94102",
    yearOpened: "1908",
    coordinates: [37.785433,-122.407233]
    }, 
    { 
    name: "Kezar Pub",
    address: "770 Stanyan Street, San Francisco, CA 94117",
    yearOpened: "1969",
    coordinates: [37.7678869,-122.4528942]
    }, 
    { 
    name: "La Rocca’s Corner",
    address: "957 Columbus Avenue, San Francisco, CA 94133",
    yearOpened: "1930s",
    coordinates: [37.8031815,-122.4146277]
    }, 
    { 
    name: "La Rondalla",
    address: "901 Valencia Street, San Francisco, CA 94110",
    yearOpened: "1952",
    coordinates: [37.7584215,-122.4210765]
    }, 
    { 
    name: "La Victoria Bakery",
    address: "2937 24th Street, San Francisco, CA 94110",
    yearOpened: "1951",
    coordinates: [37.7525985,-122.4108534]
    }, 
    { 
    name: "Laurel Court Restaurant and Bar",
    address: "950 Mason Street, San Francisco, CA 94108",
    yearOpened: "1907",
    coordinates: [37.7923883,-122.4100923]
    }, 
    { 
    name: "Le Central",
    address: "453 Bush Street, San Francisco, CA 94108",
    yearOpened: "1974",
    coordinates: [37.7904658,-122.4050258]
    }, 
    { 
    name: "Lefty O’Doul’s",
    address: "333 Geary Street, San Francisco, CA 94102",
    yearOpened: "1958",
    coordinates: [37.7871974,-122.4087708]
    }, 
    { 
    name: "Liguria Bakery",
    address: "1700 Stockton Street, San Francisco, CA 94133",
    yearOpened: "1911",
    coordinates: [37.8015477,-122.4092596]
    }, 
    { 
    name: "Li Po Cocktail Lounge",
    address: "916 Grant Avenue, San Francisco, CA 94108",
    yearOpened: "1937",
    coordinates: [37.7954238,-122.4064344]
    }, 
    { 
    name: "Little Shamrock",
    address: "807 Lincoln Way, San Francisco, CA 94122",
    yearOpened: "1890s",
    coordinates: [37.7656707,-122.4667374]
    }, 
    { 
    name: "Liverpool Lil’s",
    address: "2942 Lyon Street, San Francisco, CA 94123",
    yearOpened: "1973",
    coordinates: [37.7982085,-122.4470224]
    }, 
    { 
    name: "Lucca Delicatessen",
    address: "2120 Chestnut Street, San Francisco, CA 94123",
    yearOpened: "1929",
    coordinates: [37.8006904,-122.4383892]
    }, 
    { 
    name: "Manor Coffee Shop",
    address: "321 West Portal Avenue #A, San Francisco, CA 94127",
    yearOpened: "1967",
    coordinates: [37.7375309,-122.4691808]
    }, 
    { 
    name: "Mario’s Bohemian Cigar Store Café",
    address: "566 Columbus Ave, San Francisco, CA 94133",
    yearOpened: "1971",
    coordinates: [37.8002499,-122.4097803]
    }, 
    { 
    name: "Mauna Loa",
    address: "3009 Fillmore Street, San Francisco, CA 94123",
    yearOpened: "1939",
    coordinates: [37.7973143,-122.4357177]
    }, 
    { 
    name: "May’s Coffee Shop",
    address: "1737 Post Street, San Francisco, CA 94115",
    yearOpened: "1973",
    coordinates: [37.785329,-122.430369]
    }, 
    { 
    name: "Mitchell’s Ice Cream",
    address: "688 San Jose Avenue, San Francisco, CA 94110",
    yearOpened: "1953",
    coordinates: [37.7440901,-122.4228578]
    }, 
    { 
    name: "Mr. Bing’s",
    address: "201 Columbus Avenue, San Francisco, CA 94133",
    yearOpened: "1967",
    coordinates: [37.7971443,-122.4059188]
    }, 
    { 
    name: "Murio’s Trophy Room",
    address: "1811 Haight Street, San Francisco, CA 94117",
    yearOpened: "1959",
    coordinates: [37.7691469,-122.4521865]
    }, 
    { 
    name: "Northstar Café",
    address: "1560 Powell Street, San Francisco, CA 94133",
    yearOpened: "1882",
    coordinates: [37.7992211,-122.4104132]
    }, 
    { 
    name: "Oak Room",
    address: "335 Powell Street, San Francisco, CA 94102",
    yearOpened: "1904",
    coordinates: [37.7878279,-122.4087315]
    }, 
    { 
    name: "Old Clam House",
    address: "299 Bayshore Boulevard, San Francisco, CA 94124",
    yearOpened: "1861",
    coordinates: [37.7430863,-122.4048488]
    }, 
    { 
    name: "Old Ship Saloon",
    address: "298 Pacific Avenue, San Francisco, CA 94111",
    yearOpened: "1851",
    coordinates: [37.7978382,-122.4007776]
    }, 
    { 
    name: "Original Joe’s",
    address: "601 Union Street, San Francisco, CA 94133",
    yearOpened: "1937",
    coordinates: [37.8002488,-122.4093401]
    }, 
    { 
    name: "Original US Restaurant",
    address: "515 Columbus Avenue, San Francisco, CA 94133",
    yearOpened: "1970s",
    coordinates: [37.7997274,-122.4096048]
    }, 
    { 
    name: "Perry’s",
    address: "1944 Union Street, San Francisco, CA 94123",
    yearOpened: "1969",
    coordinates: [37.7978273,-122.4313074]
    }, 
    { 
    name: "Philosopher’s Club",
    address: "824 Ulloa Street, San Francisco, CA 94127",
    yearOpened: "1960",
    coordinates: [37.7408929,-122.4653664]
    }, 
    { 
    name: "Pied Piper Bar and Grill",
    address: "2 New Montgomery Street, San Francisco, CA 94105",
    yearOpened: "1909",
    coordinates: [37.7884503,-122.4020449]
    }, 
    { 
    name: "Pier 23 Café",
    address: "Pier 23, The Embarcadero, San Francisco, CA 94111",
    yearOpened: "1937",
    coordinates: [37.8037388,-122.3995606]
    }, 
    { 
    name: "Puerto Alegre",
    address: "546 Valencia Street, San Francisco, CA 94110",
    yearOpened: "1970",
    coordinates: [37.7641345,-122.4220234]
    }, 
    { 
    name: "Red’s Java House",
    address: "Pier 30, The Embarcadero, San Francisco, CA 94105",
    yearOpened: "1930s",
    coordinates: [37.7872246,-122.3877934]
    }, 
    { 
    name: "Red’s Place",
    address: "672 Jackson Street, San Francisco, CA 94108",
    yearOpened: "1940s",
    coordinates: [37.79615,-122.406447]
    }, 
    { 
    name: "Redwood Room",
    address: "495 Geary Street, San Francisco, CA 94102",
    yearOpened: "1933",
    coordinates: [37.7867731,-122.4112871]
    }, 
    { 
    name: "Roosevelt Tamale Parlor",
    address: "2817 24th Street, San Francisco, CA 94110",
    yearOpened: "1919",
    coordinates: [37.7526561,-122.40861]
    }, 
    { 
    name: "Sabella & La Torre",
    address: "2809 Taylor Street, San Francisco, CA 94133",
    yearOpened: "1927",
    coordinates: [37.8084592,-122.4159347]
    }, 
    { 
    name: "Sam’s Grill",
    address: "374 Bush Street, San Francisco, CA 94104",
    yearOpened: "1867",
    coordinates: [37.7910009,-122.4035876]
    }, 
    { 
    name: "Sam Jordan’s Bar and Grill",
    address: "4004 3rd Street, San Francisco, CA 94123",
    yearOpened: "1959",
    coordinates: [37.7410475,-122.3888398]
    }, 
    { 
    name: "Sam’s Pizza and Burgers",
    address: "618 Broadway, San Francisco, CA 94133",
    yearOpened: "1966",
    coordinates: [37.7979623,-122.4074263]
    }, 
    { 
    name: "Sausage Factory",
    address: "517 Castro Street, San Francisco, CA 94114",
    yearOpened: "1968",
    coordinates: [37.7605183,-122.4346253]
    }, 
    { 
    name: "Savoy Tivoli",
    address: "1434 Grant Avenue, San Francisco, CA 94133",
    yearOpened: "1907",
    coordinates: [37.8002402,-122.407371]
    }, 
    { 
    name: "Schroeder’s",
    address: "240 Front Street, San Francisco, CA 94111",
    yearOpened: "1893",
    coordinates: [37.7939747,-122.3986977]
    }, 
    { 
    name: "Scoma’s",
    address: "1 Al Scoma Way, San Francisco, CA 94133",
    yearOpened: "1965",
    coordinates: [37.8079493,-122.4180291]
    }, 
    { 
    name: "Seal Rock Inn",
    address: "545 Point Lobos, San Francisco, CA 94121",
    yearOpened: "1959",
    coordinates: [37.7795829,-122.5092287]
    }, 
    { 
    name: "Sears Fine Food",
    address: "439 Powell Street, San Francisco, CA 94102",
    yearOpened: "1938",
    coordinates: [37.7887986,-122.4088755]
    }, 
    { 
    name: "Shotwells",
    address: "3349 20th Street, San Francisco, CA 94110",
    yearOpened: "1891",
    coordinates: [37.75874,-122.4156501]
    }, 
    { 
    name: "Silver Crest Donut Shop",
    address: "340 Bayshore Boulevard, San Francisco, CA 94124",
    yearOpened: "1970",
    coordinates: [37.7423314,-122.4061541]
    }, 
    { 
    name: "SB40 (Carmen’s)",
    address: "Pier 40, The Embarcadero, San Francisco, CA 94107",
    yearOpened: "1957",
    coordinates: [37.7819503,-122.3878795]
    }, 
    { 
    name: "Spec’s Twelve Adler Museum Café",
    address: "12 Saroyan Place, San Francisco, CA 94133",
    yearOpened: "1968",
    coordinates: [37.7976098,-122.4059625]
    }, 
    { 
    name: "St. Francis Fountain",
    address: "2801 24th Street, San Francisco, CA 94110",
    yearOpened: "1918",
    coordinates: [37.7526817,-122.4083862]
    }, 
    { 
    name: "St. Mary’s Pub",
    address: "3845 Mission Street, San Francisco, CA 94110",
    yearOpened: "1950",
    coordinates: [37.7354741,-122.4244058]
    }, 
    { 
    name: "Swan Oyster Depot",
    address: "1517 Polk Street, San Francisco, CA 94109",
    yearOpened: "1912",
    coordinates: [37.7908308,-122.420964]
    }, 
    { 
    name: "Swensen’s Grill & Ice Cream",
    address: "1999 Hyde Street, San Francisco, CA 94109",
    yearOpened: "1948",
    coordinates: [37.7990839,-122.419181]
    }, 
    { 
    name: "Taquería La Cumbre",
    address: "515 Valencia Street, San Francisco, CA 94110",
    yearOpened: "1972",
    coordinates: [37.7645809,-122.4216212]
    }, 
    { 
    name: "Tarantino’s Restaurant",
    address: "206 Jefferson Street, San Francisco, CA 94133",
    yearOpened: "1946",
    coordinates: [37.8083565,-122.4162541]
    }, 
    { 
    name: "Terry’s Lodge",
    address: "1368 Irving Street, San Francisco, CA 94122",
    yearOpened: "1973",
    coordinates: [37.7639853,-122.4726867]
    }, 
    { 
    name: "Thanh Long",
    address: "4101 Judah Street, San Francisco, CA 94122",
    yearOpened: "1971",
    coordinates: [37.7601637,-122.50609]
    }, 
    { 
    name: "The Doctor’s Lounge",
    address: "4826 Mission Street, San Francisco, CA 94112",
    yearOpened: "1951",
    coordinates: [37.7209469,-122.4378547]
    }, 
    { 
    name: "The End Up",
    address: "401 6th Street, San Francisco, CA 94103",
    yearOpened: "1973",
    coordinates: [37.7772436,-122.4037707]
    }, 
    { 
    name: "The Hearth",
    address: "4701 Geary Boulevard, San Francisco, CA 94118",
    yearOpened: "1967",
    coordinates: [37.7804951,-122.4698331]
    }, 
    { 
    name: "The Homestead",
    address: "2301 Folsom Street, San Francisco, CA 94110",
    yearOpened: "1902",
    coordinates: [37.7604123,-122.4146016]
    }, 
    { 
    name: "The Horseshoe Tavern",
    address: "2024 Chestnut Street, San Francisco, CA 94123",
    yearOpened: "1934",
    coordinates: [37.8009246,-122.436903]
    }, 
    { 
    name: "The Ramp",
    address: "855 Terry A. Francois Boulevard, San Francisco, CA 94107",
    yearOpened: "1950",
    coordinates: [37.764077,-122.3871912]
    }, 
    { 
    name: "The Royal Exchange",
    address: "301 Sacramento Street, San Francisco, CA 94111",
    yearOpened: "1972",
    coordinates: [37.7941424,-122.3992059]
    }, 
    { 
    name: "The Saloon",
    address: "1232 Grant Avenue, San Francisco, CA 94133",
    yearOpened: "1861",
    coordinates: [37.7985867,-122.4070229]
    }, 
    { 
    name: "Tommaso’s",
    address: "1042 Kearny Street, San Francisco, CA 94133",
    yearOpened: "1935",
    coordinates: [37.7977906,-122.4052913]
    }, 
    { 
    name: "Tommy’s Joynt",
    address: "1101 Geary Boulevard, San Francisco, CA 94109",
    yearOpened: "1947",
    coordinates: [37.785533,-122.4217955]
    }, 
    { 
    name: "Tommy’s Mexican Restaurant",
    address: "5929 Geary Boulevard, San Francisco, CA 94121",
    yearOpened: "1965",
    coordinates: [37.7798531,-122.4831435]
    }, 
    { 
    name: "Tonga Room",
    address: "950 Mason Street, San Francisco, CA 94108",
    yearOpened: "1945",
    coordinates: [37.7923883,-122.4100923]
    }, 
    { 
    name: "Tony’s Cable Car",
    address: "2500 Geary Boulevard, San Francisco, CA 94115",
    yearOpened: "1972",
    coordinates: [37.7828683,-122.4451313]
    }, 
    { 
    name: "Tony Nik’s",
    address: "1534 Stockton Street, San Francisco, CA 94133",
    yearOpened: "1933",
    coordinates: [37.8000496,-122.4088995]
    }, 
    { 
    name: "Top of the Mark",
    address: "999 California Street, San Francisco, CA 94108",
    yearOpened: "1939",
    coordinates: [37.7915187,-122.4101366]
    }, 
    { 
    name: "Trad’r Sam",
    address: "6150 Geary Boulevard, San Francisco, CA 94121",
    yearOpened: "1937",
    coordinates: [37.7803547,-122.4856197]
    }, 
    { 
    name: "Twin Peaks Tavern",
    address: "401 Castro Street, San Francisco, CA 94114",
    yearOpened: "1972",
    coordinates: [37.7622826,-122.4349365]
    }, 
    { 
    name: "Uptown",
    address: "200 Capp Street, San Francisco, CA 94110",
    yearOpened: "1909",
    coordinates: [37.7631901,-122.4186065]
    }, 
    { 
    name: "Vesuvio Café",
    address: "255 Columbus Avenue, San Francisco, CA 94133",
    yearOpened: "1948",
    coordinates: [37.7974835,-122.4065082]
    }, 
    { 
    name: "Whiz Burger",
    address: "700 South Van Ness Avenue, San Francisco, CA 94110",
    yearOpened: "1955",
    coordinates: [37.761814,-122.4174595]
    }, 
    { 
    name: "Wild Side West",
    address: "424 Cortland Avenue, San Francisco, CA 94110",
    yearOpened: "1962",
    coordinates: [37.7389698,-122.4172101]
    }, 
    { 
    name: "Chick-N-Coop",
    address: "4500 Mission Street, San Francisco, CA 94112",
    yearOpened: "1980",
    coordinates: [37.725775,-122.434341]
    }, 
    { 
    name: "Big Four Restaurant",
    address: "1057 California Street, San Francisco, CA 94108",
    yearOpened: "1976",
    coordinates: [37.7917192,-122.4117847]
    }, 
    { 
    name: "Eagle Tavern",
    address: "398 12th Street, San Francisco, CA 94103",
    yearOpened: "1980s",
    coordinates: [37.769982,-122.41342]
    }, 
    { 
    name: "Ebisu",
    address: "1283 9th Avenue, San Francisco, CA 94122",
    yearOpened: "1982",
    coordinates: [37.7644571,-122.46666]
    }, 
    { 
    name: "Harris’ Steakhouse",
    address: "2100 Van Ness Avenue, San Francisco, CA 94109",
    yearOpened: "1984",
    coordinates: [37.7950668,-122.4229237]
    }, 
    { 
    name: "Harry’s Bar",
    address: "2020 Fillmore Street, San Francisco, CA 94115",
    yearOpened: "1976",
    coordinates: [37.7883547,-122.4334309]
    }, 
    { 
    name: "Hayes Street Grill",
    address: "320 Hayes Street, San Francisco, CA 94102",
    yearOpened: "1979",
    coordinates: [37.7771762,-122.4218286]
    }, 
    { 
    name: "Kuleto’s",
    address: "221 Powell Street, San Francisco, CA 94102",
    yearOpened: "1986",
    coordinates: [37.7867415,-122.4083384]
    }, 
    { 
    name: "Orphan Andy’s",
    address: "3991 17th Street, San Francisco, CA 94114",
    yearOpened: "1977",
    coordinates: [37.762326,-122.4348896]
    }, 
    { 
    name: "Toronado",
    address: "547 Haight Street, San Francisco, CA 94117",
    yearOpened: "1989",
    coordinates: [37.7718304,-122.4311305]
    }, 
    { 
    name: "Villa D’Este",
    address: "2623 Ocean Avenue, San Francisco, CA 94132",
    yearOpened: "1978",
    coordinates: [37.7315966,-122.4738522]
    }, 
    { 
    name: "Zuni Café",
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


