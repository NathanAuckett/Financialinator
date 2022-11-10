export let CATEGORIES = new Map();

//CATEGORIES[Category name] = [Comma seperate list of key words to look for] - Not case sensitive.
CATEGORIES["Gifts"] = ["birthday", "bday", "farthers day", "THE BODY SHOP", "Dusk", "Merry"];
CATEGORIES["Investments"] = ["superhero", "investment", "DIVIDEND"];
CATEGORIES["Phone"] = ["boost", "TELSTRA"];
CATEGORIES["Internet"] = ["tangerine", "internet"];
CATEGORIES["Rent"] = ["rent", "Board", "RENTAL BOND"];
CATEGORIES["Haircuts"] = ["BARBER", "STATE"];
CATEGORIES["Electricity"] = ["ENERGY LOCALS", "Tricity", "electricity"];
CATEGORIES["Credit Card Payoff"] = ["credit card", "payoff"];
CATEGORIES["Internal Account Transfers"] = ["transfer", "Credit Bonus Trans", "Bank system error"];
CATEGORIES["Salary/Income"] = ["salary", "PACKT"];
CATEGORIES["Education"] = ["INSTITUTE OF DATA", "PRO DIVE", "IOD"];
CATEGORIES["Car/rego"] = ["SERVICE NSW", "ALLIANZ", "MPH PARTS PTY", "REPCO", "car"];
CATEGORIES["Credits/Repayments"] = ["CREDIT TO ACCOUNT", "Repay"];
CATEGORIES["Clothing"] = ["INDUSTRIE", "BIG W", "JAY JAYS", "GHANDA", "CONNOR CLOTHING"];
CATEGORIES["Fuel"] = ["fuel", "Petrol", "Ampol", "EG GROUP", "EG FUELCO", "CALTEX", "7-ELEVEN", "SHELL"];
CATEGORIES["Interest"] = ["INTEREST"];
CATEGORIES["Games"] = ["STEAM GAMES", "GAMIVOCOM", "game"];
CATEGORIES["Furniture/Houshold Items"] = ["Amart", "FREDOM FURNTRE", "HOUSE", "KIMS KITCHENWARE", "BED BATH N TABLE", "HOME AND BEYOND"];
CATEGORIES["Misc Items"] = ["BUNNINGS", "THE REJECT SHOP", "SPOTLIGHT", "OFFICEWORKS", "KMART", "THE BASE WARHSE", "EB GAMES", "TYPO", "REBEL",
                            "MYER", "TARGET", "ANACONDA"];
CATEGORIES["Electronics"] = ["laptop", "Bing Lee", "DYSON", "HARVEY NORMAN", "Samsung"];
CATEGORIES["Entertainment"] = ["movie", "CINEMA", "ticket", "tickets", "bbq", "PAX", "HOYTS", "Enmore Theatre", "GOSFORD CITY TENPI",
                            "Erina Ice", "Paintball", "holy Moley", "FORTRESS", "SEA LIFE"];
CATEGORIES["Food"] = ["food", "hello fresh", "shopping", "groceries", "woolies", "pizza", "Hungry Wolfs", "GYG", "chinese", "MCDONALDS",
                        "Maccas", "WOOLWORTHS", "Coles", "Grilld", "Frederico's", "IGA", "KFC", "CAFE", "ALDI", "FOODWORKS",
                        "SWEET CAROLINE", "Rhonda's", "MAD MEX", "South End Social", "Charcoal", "DONUT KING", "Subway", "Dominos",
                        "THE BON PAVILION", "MENULOGPTYL", "KAFICH", "MUMBO JUMBOS TERRIGAL", "The Bayview", "The Grange Hotel", "Milky Lane",
                        "dinner", "yum", "CHOCOLATERIA SAN C", "Zero Fox",  "TAKEAWAY", "COFFEE", "CANDY", "KSP GROUP PTY LTD", "thai", "Brekkie",
                        "Fud", "Saporito", "HAKATA GENSUKE", "Doughnuts", "SCHNITZ", "RWS SOUTH WHARF", "Zero Gradi Crown", "HOKKA HOKKA", "Breakfast",
                        "breaky", "Five Guys", "Korean Barbecue", "indian"];
CATEGORIES["Alcohol"] = ["alcohol", "alchohol", "BWS", "DAN MURPHY'S", "LIQUORLAND", "CELLARS", "BAR", "beer", "jug", "OZT*DRIFTERS", "Lyons Den",
                            "Hotel Gosford", "Hillbilly Cider", "Bay Rd Brewing", "THE TERRIGAL HOTEL", "Settlers Tavern", "Hope Estate",
                            "RSL", "ELANORA HOTEL", "CTRL COAST LEAGUES", "SKYBUS", "MEXICAN", "GOZLEME"];
CATEGORIES["Travel/Transport/Accommodation"] = ["TRAVEL", "Flight", "Flights", "TRANSPORTFORNSW", "TAXI", "uber", "Hotel", "KIMS TOOWOON BAY", "AIRPORT", "trip", "Cab"];
CATEGORIES["Misc Online Purchases"] = ["paypal", "AMZN", "AMAZON"];
CATEGORIES["Tax"] = ["tax", "JAMES RYAN PARTNER", "JamesRyanPartner"];




const defaultCategoryName = "Uncategorised";

export function getCategory(str){
    let category = defaultCategoryName;
    for (let cat in CATEGORIES){
        let words = CATEGORIES[cat].length;
        for (let i = 0; i < words; i ++){
            let word = CATEGORIES[cat][i].toLowerCase();
            if (str.toLowerCase().includes(word)){
                category = cat;
                break;
            }
        }
        if (category != defaultCategoryName){
            break;
        }
    }

    return category;
}