$(function() {
    console.log("made it here");
    const pathname = String(location.pathname.split("/").splice(-1));
    console.log(pathname);
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
            "url": "template.html",
            "text": "Template",
            "alt": "Template Page"
        }
    };

    const linkSeperator = " | ";
    let htmlString = "";

    for (var id in links) {
        if (pathname === links[id]['url']) {
            htmlString += links[id]['text'];
        } else {
            htmlString += '<a href="'+links[id]['url']+'" alt="'+links[id]['alt']+'">'+links[id]['text']+'</a>';
        }
        if(Number(id) < Object.keys(links).length) {
            htmlString += linkSeperator;
        }
    }

    $('#headerSiteLinks').html(htmlString);
});