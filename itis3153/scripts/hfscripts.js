// Header Function
$(function() {
    const pathname = String(location.pathname.split("/").splice(-1));
    
    const links = {
        "1": {
            "url": "index.html",
            "text": "Home",
            "alt": "Homepage"
        },
        "2": {
            "url": "introduction.html",
            "text": "Introduction",
            "alt": "Introduction Page"
        },
        "3": {
            "url": "contract.html",
            "text": "Contract",
            "alt": "Contract Page"
        },
        "4": {
            "url": "tables.html",
            "text": "Tables",
            "alt": "Tables Page"
        },
        "5": {
            "url": "forms.html",
            "text": "Forms",
            "alt": "Forms Page"
        },
        "6": {
            "url": "website_evaluations.html",
            "text": "Website Evaluations",
            "alt": "Website Evaluations Page"
        },
        "7": {
            "url": "firstscripts.html",
            "text": "First Scripts",
            "alt": "First Scripts Page"
        }
    };

    const linkSeperator = "] [";
    let htmlString = "[";

    for (var id in links) {
        if (pathname === links[id]['url']) {
            htmlString += links[id]['text'];
        } else {
            htmlString += '<a href="'+links[id]['url']+'" alt="'+links[id]['alt']+'">'+links[id]['text']+'</a>';
        }
        if(Number(id) < Object.keys(links).length) {
            htmlString += linkSeperator;
        } else {
            htmlString += ']'
        }
    }

    $('#headerSiteLinks').html(htmlString);
});

$(function() {
    const pathname = String(location.pathname.split("/").splice(-1));
    
    const links = {
        "1": {
            "url": "https://webpages.charlotte.edu/dhagen3/",
            "text": "CIT Webspace",
            "alt": "CIT Webspace"
        },
        "2": {
            "url": "https://github.com/mathematiqueNageur",
            "text": "My GitHub",
            "alt": "My GitHub Home"
        },
        "3": {
            "url": "https://mathematiqueNageur.github.io",
            "text": "GitHub.io",
            "alt": "mathematiqueNageur's GitHub.io Page"
        },
        "4": {
            "url": "https://www.freecodecamp.org/dxhagen",
            "text": "freecodecamp",
            "alt": "My freecodecamp Page"
        },
        "5": {
            "url": "https://www.codecademy.com/profiles/dxhagen",
            "text": "Codecademy",
            "alt": "My Codecademy Page"
        },
        "6": {
            "url": "https://www.linkedin.com/in/dalehagen/",
            "text": "LinkedIn",
            "alt": "My LinkedIn Page"
        }
    };

    const linkSeperator = "] [";
    let htmlString = "[";

    for (var id in links) {
        htmlString += '<a href="'+links[id]['url']+'" alt="'+links[id]['alt']+'">'+links[id]['text']+'</a>';
        if(Number(id) < Object.keys(links).length) {
            htmlString += linkSeperator;
        } else {
            htmlString += ']'
        }
    }

    $('#footerLinks').html(htmlString);
});