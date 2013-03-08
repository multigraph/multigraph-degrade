var generateFlashObject = function (swfLoc, muglLoc, graphWidth, graphHeight) {
    //TODO: Generate a unique id for each object
    var object = document.createElement("object");
    object.setAttribute("id", "mgid");
    object.setAttribute("name", "mgid");
    object.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
    object.setAttribute("width", graphWidth);
    object.setAttribute("height", graphHeight);
    object.setAttribute("codebase", "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0");

    object.appendChild(generateFlashParam("quality", "best"));
    object.appendChild(generateFlashParam("scale", "exactfit"));
    object.appendChild(generateFlashParam("wmode", "opaque"));
    object.appendChild(generateFlashParam("bgcolor", "#ffffff"));
    object.appendChild(generateFlashParam("src", swfLoc));
    object.appendChild(generateFlashParam("name", "mgid"));
    object.appendChild(generateFlashParam("allowfullscreen", "false"));
    object.appendChild(generateFlashParam("allowScriptAccess", "sameDomain"));
    object.appendChild(generateFlashParam("flashvars", "muglfile=" + muglLoc + "&swfname=mgid"));
    object.appendChild(generateFlashParam("align", "middle"));

    var embed = document.createElement("embed");
    embed.setAttribute("id", "mgid");
    embed.setAttribute("type", "application/x-shockwave-flash");
    embed.setAttribute("width", graphWidth);
    embed.setAttribute("height", graphHeight);
    embed.setAttribute("src", swfLoc);
    embed.setAttribute("name", "mgid");
    embed.setAttribute("bgcolor", "#ffffff");
    embed.setAttribute("wmode", "opaque");
    embed.setAttribute("scale", "exactfit");
    embed.setAttribute("quality", "best");
    embed.setAttribute("allowfullscreen", "false");
    embed.setAttribute("allowscriptaccess", "sameDomain");
    embed.setAttribute("flashvars", "muglfile=" + muglLoc + "&swfname=mgid");
    embed.setAttribute("align", "middle");

    object.appendChild(embed);

    return object;
};

var generateFlashParam = function (name, value) {
    var param = document.createElement("param");
    param.setAttribute("name", name);
    param.setAttribute("value", value);
    return param;
};

var supportsSVG = function () {
    return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect;
};

//if (!supportsSVG()) {
if (true) {
    window.multigraph.core.Multigraph.createGraph = function (options) {
        var swfLoc = options.swf ||
                     options.div.getAttribute("data-swf") ||
                     "http://multigraph.github.com/archive/Multigraph-3.3rc1.swf";
        var style = window.getComputedStyle(options.div);
        options.div.appendChild(generateFlashObject(swfLoc,
                                                    options.mugl,
                                                    parseInt(style.width, 10),
                                                    parseInt(style.height, 10)
                                                   )
                               );
    };
    window.multigraph.create = window.multigraph.core.Multigraph.createGraph;
}

/*
    return '<object' +
        '    id="mgid"' +
        '    classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ' +
        '    width="' + graphWidth + '"' +
        '    height="' + graphHeight + '"' +
        '    codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"' +
        '    >' +
        '  <param name="quality" value="best" />' +
        '  <param name="scale" value="exactfit" />' +
        '  <param name="wmode" value="opaque" />' +
        '  <param name="bgcolor" value="#ffffff" />' +
        '  <param name="src" value="' + swfLoc + '"/>' +
        '  <param name="name" value="mgid" />' +
        '  <param name="allowfullscreen" value="false" />' +
        '  <param name="allowScriptAccess" value="sameDomain" />' +
        '  <param name="flashvars" value="muglfile=' + muglLoc + '"/>' +
        '  <param name="align" value="middle" />' +
        '  <embed' +
        '      id="mgid"' +
        '      type="application/x-shockwave-flash"' +
        '      width="' + graphWidth + '"' +
        '      height="' + graphHeight + '"' +
        '      src="' + swfLoc + '"' +
        '      name="mgid"' +
        '      bgcolor="#ffffff"' +
        '      wmode="opaque"' +
        '      scale="exactfit"' +
        '      quality="best"' +
        '      allowfullscreen="false"' +
        '      allowscriptaccess="sameDomain"' +
        '      flashvars="muglfile=' + muglLoc + '"' +
        '      align="middle"' +
        '      >' +
        '  </embed>' +
        '</object>';
*/
