var mainSVG;
function drawIntro(svg) { 
    
    var img = svg.image(0, 0, "100%", "100%", 
                        "content/example.jpg",
                       {"preserveAspectRatio": "xMinYMin"});

    $("#cont").click(clickedSVG);
    mainSVG = svg;
    container = $("#cont").toArray()[0];
}

var prevClick = null;
var lineGroup = null;
var container = null;
function clickedSVG(event) {
    var offset = $(container).offset();
    console.log(offset);
    var x = event.clientX - offset["left"];
    var y = event.clientY - offset["top"];

    if (prevClick)
    {
        mainSVG.line(lineGroup, prevClick[0], prevClick[1], x, y);
        prevClick = event;
    }
    else
    {
        lineGroup = mainSVG.group({stroke: 'red', strokeWidth: 2});    
    }

    prevClick = [x,y];
    
}

function annotateRegion(name) {
    lineGroup = null;
    prevClick = null;
}

function onloadGather() {
    var svg = $('#cont').svg({onLoad: drawIntro});
}

$(onloadGather);