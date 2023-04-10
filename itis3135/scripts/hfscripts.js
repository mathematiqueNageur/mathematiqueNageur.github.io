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
            "url": "stuff/Wh@t The CRAP.htm",
            "text": "CRAPpy Page",
            "alt": "A Terrible Webpage"
        },
        "2": {
            "url": "exercise/calculator_try.html",
            "text": "Calculator Attempt",
            "alt": "Calculator Attempt Page"
        },
        "3": {
            "url": "exercise/calculator_fcc.html",
            "text": "Calculator FCC",
            "alt": "FCC Calculator Page"
        },
        "4": {
            "url": "exercise/calculator_pt2.html",
            "text": "Calculator Part 2",
            "alt": "Another Calculator Page"
        },
        "5": {
            "url": "exercise/hagen-activity6.html",
            "text": "Polygons",
            "alt": "Polygons Page"
        },
        "6": {
            "url": "hobby/midtermhobbysite.html",
            "text": "Hobby",
            "alt": "Hobby Page"
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

    $('#headerOtherLinks').html(htmlString);
});

$(function() {
    const links = {
        "1": {
            "url": "https://webpages.charlotte.edu/dhagen3/",
            "text": "UNCC Home",
            "alt": "UNCC Home"
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
            "url": "https://mathematiqueNageur.github.io/itis3135/index.html",
            "text": "Course.io",
            "alt": "mathematiqueNageur's ITIS 3135 GitHub.io Page"
        },
        "5": {
            "url": "https://www.freecodecamp.org/dxhagen",
            "text": "freecodecamp",
            "alt": "My freecodecamp Page"
        },
        "6": {
            "url": "https://www.codecademy.com/profiles/dxhagen",
            "text": "Codecademy",
            "alt": "My Codecademy Page"
        },
        "7": {
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

document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
