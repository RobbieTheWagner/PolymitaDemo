package org.apache.jsp.components.colorpicker.js;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class colorPicker_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.release();
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      response.addHeader("X-Powered-By", "JSP/2.2");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write('\n');
 try{ 
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("var CROSSHAIRS_LOCATION = '");
      if (_jspx_meth_mvc_005fcontext_005f0(_jspx_page_context))
        return;
      out.write("';\n");
      out.write("var HUE_SLIDER_LOCATION = '");
      if (_jspx_meth_mvc_005fcontext_005f1(_jspx_page_context))
        return;
      out.write("';\n");
      out.write("var HUE_SLIDER_ARROWS_LOCATION = '");
      if (_jspx_meth_mvc_005fcontext_005f2(_jspx_page_context))
        return;
      out.write("';\n");
      out.write("var SAT_VAL_SQUARE_LOCATION = '");
      if (_jspx_meth_mvc_005fcontext_005f3(_jspx_page_context))
        return;
      out.write("';\n");
      out.write("var BUTON_CLOSE_LOCATION='");
      if (_jspx_meth_mvc_005fcontext_005f4(_jspx_page_context))
        return;
      out.write("';\n");
      out.write("var HEIGHT_OF_OBJ=25;\n");
      out.write("var WIDTH_OF_OBJ=150;\n");
      out.write("var inputObject=null;\n");
      out.write("\n");
      out.write("var is_div_init=false;\n");
      out.write("function hexToRgb(hex_string, default_)\n");
      out.write("{\n");
      out.write("    if (default_ == undefined)\n");
      out.write("    {\n");
      out.write("        default_ = null;\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    if (hex_string.substr(0, 1) == '#')\n");
      out.write("    {\n");
      out.write("        hex_string = hex_string.substr(1);\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    var r;\n");
      out.write("    var g;\n");
      out.write("    var b;\n");
      out.write("    if (hex_string.length == 3)\n");
      out.write("    {\n");
      out.write("        r = hex_string.substr(0, 1);\n");
      out.write("        r += r;\n");
      out.write("        g = hex_string.substr(1, 1);\n");
      out.write("        g += g;\n");
      out.write("        b = hex_string.substr(2, 1);\n");
      out.write("        b += b;\n");
      out.write("    }\n");
      out.write("    else if (hex_string.length == 6)\n");
      out.write("    {\n");
      out.write("        r = hex_string.substr(0, 2);\n");
      out.write("        g = hex_string.substr(2, 2);\n");
      out.write("        b = hex_string.substr(4, 2);\n");
      out.write("    }\n");
      out.write("    else\n");
      out.write("    {\n");
      out.write("        return default_;\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    r = parseInt(r, 16);\n");
      out.write("    g = parseInt(g, 16);\n");
      out.write("    b = parseInt(b, 16);\n");
      out.write("    if (isNaN(r) || isNaN(g) || isNaN(b))\n");
      out.write("    {\n");
      out.write("        return default_;\n");
      out.write("    }\n");
      out.write("    else\n");
      out.write("    {\n");
      out.write("        return {r: r / 255, g: g / 255, b: b / 255};\n");
      out.write("    }\n");
      out.write("}\n");
      out.write("\n");
      out.write("function rgbToHex(r, g, b, includeHash)\n");
      out.write("{\n");
      out.write("    r = Math.round(r * 255);\n");
      out.write("    g = Math.round(g * 255);\n");
      out.write("    b = Math.round(b * 255);\n");
      out.write("    if (includeHash == undefined)\n");
      out.write("    {\n");
      out.write("        includeHash = true;\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    r = r.toString(16);\n");
      out.write("    if (r.length == 1)\n");
      out.write("    {\n");
      out.write("        r = '0' + r;\n");
      out.write("    }\n");
      out.write("    g = g.toString(16);\n");
      out.write("    if (g.length == 1)\n");
      out.write("    {\n");
      out.write("        g = '0' + g;\n");
      out.write("    }\n");
      out.write("    b = b.toString(16);\n");
      out.write("    if (b.length == 1)\n");
      out.write("    {\n");
      out.write("        b = '0' + b;\n");
      out.write("    }\n");
      out.write("    return ((includeHash ? '#' : '') + r + g + b).toUpperCase();\n");
      out.write("}\n");
      out.write("\n");
      out.write("var arVersion = navigator.appVersion.split(\"MSIE\");\n");
      out.write("var version = parseFloat(arVersion[1]);\n");
      out.write("\n");
      out.write("function fixPNG(myImage)\n");
      out.write("{\n");
      out.write("    if ((version >= 5.5) && (version < 7) && (document.body.filters))\n");
      out.write("    {\n");
      out.write("        var node = document.createElement('span');\n");
      out.write("        node.id = myImage.id;\n");
      out.write("        node.className = myImage.className;\n");
      out.write("        node.title = myImage.title;\n");
      out.write("        node.style.cssText = myImage.style.cssText;\n");
      out.write("        node.style.setAttribute('filter', \"progid:DXImageTransform.Microsoft.AlphaImageLoader\"\n");
      out.write("                                        + \"(src=\\'\" + myImage.src + \"\\', sizingMethod='scale')\");\n");
      out.write("        node.style.fontSize = '0';\n");
      out.write("        node.style.width = myImage.width.toString() + 'px';\n");
      out.write("        node.style.height = myImage.height.toString() + 'px';\n");
      out.write("        node.style.display = 'inline-block';\n");
      out.write("        return node;\n");
      out.write("    }\n");
      out.write("    else\n");
      out.write("    {\n");
      out.write("        return myImage.cloneNode(false);\n");
      out.write("    }\n");
      out.write("}\n");
      out.write("\n");
      out.write("function trackDrag(node, handler)\n");
      out.write("{\n");
      out.write("    function fixCoords(x, y)\n");
      out.write("    {\n");
      out.write("        var nodePageCoords = pageCoords(node);\n");
      out.write("        x = (x - nodePageCoords.x) + document.documentElement.scrollLeft;\n");
      out.write("        y = (y - nodePageCoords.y) + document.documentElement.scrollTop;\n");
      out.write("        if (x < 0) x = 0;\n");
      out.write("        if (y < 0) y = 0;\n");
      out.write("        if (x > node.offsetWidth - 1) x = node.offsetWidth - 1;\n");
      out.write("        if (y > node.offsetHeight - 1) y = node.offsetHeight - 1;\n");
      out.write("        return {x: x, y: y};\n");
      out.write("    }\n");
      out.write("    function mouseDown(ev)\n");
      out.write("    {\n");
      out.write("        var coords = fixCoords(ev.clientX, ev.clientY);\n");
      out.write("        var lastX = coords.x;\n");
      out.write("        var lastY = coords.y;\n");
      out.write("        handler(coords.x, coords.y);\n");
      out.write("\n");
      out.write("        function moveHandler(ev)\n");
      out.write("        {\n");
      out.write("            var coords = fixCoords(ev.clientX, ev.clientY);\n");
      out.write("            if (coords.x != lastX || coords.y != lastY)\n");
      out.write("            {\n");
      out.write("                lastX = coords.x;\n");
      out.write("                lastY = coords.y;\n");
      out.write("                handler(coords.x, coords.y);\n");
      out.write("            }\n");
      out.write("        }\n");
      out.write("        function upHandler(ev)\n");
      out.write("        {\n");
      out.write("            myRemoveEventListener(document, 'mouseup', upHandler);\n");
      out.write("            myRemoveEventListener(document, 'mousemove', moveHandler);\n");
      out.write("            myAddEventListener(node, 'mousedown', mouseDown);\n");
      out.write("            inputObject.onchange();\n");
      out.write("        }\n");
      out.write("        myAddEventListener(document, 'mouseup', upHandler);\n");
      out.write("        myAddEventListener(document, 'mousemove', moveHandler);\n");
      out.write("        myRemoveEventListener(node, 'mousedown', mouseDown);\n");
      out.write("        if (ev.preventDefault) ev.preventDefault();\n");
      out.write("    }\n");
      out.write("    myAddEventListener(node, 'mousedown', mouseDown);\n");
      out.write("    node.onmousedown = function(e) { return false; };\n");
      out.write("    node.onselectstart = function(e) { return false; };\n");
      out.write("    node.ondragstart = function(e) { return false; };\n");
      out.write("}\n");
      out.write("\n");
      out.write("var eventListeners = [];\n");
      out.write("\n");
      out.write("function findEventListener(node, event, handler)\n");
      out.write("{\n");
      out.write("    var i;\n");
      out.write("    for (i in eventListeners)\n");
      out.write("    {\n");
      out.write("        if (eventListeners[i].node == node && eventListeners[i].event == event\n");
      out.write("         && eventListeners[i].handler == handler)\n");
      out.write("        {\n");
      out.write("            return i;\n");
      out.write("        }\n");
      out.write("    }\n");
      out.write("    return null;\n");
      out.write("}\n");
      out.write("function myAddEventListener(node, event, handler)\n");
      out.write("{\n");
      out.write("    if (findEventListener(node, event, handler) != null)\n");
      out.write("    {\n");
      out.write("        return;\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    if (!node.addEventListener)\n");
      out.write("    {\n");
      out.write("        node.attachEvent('on' + event, handler);\n");
      out.write("    }\n");
      out.write("    else\n");
      out.write("    {\n");
      out.write("        node.addEventListener(event, handler, false);\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    eventListeners.push({node: node, event: event, handler: handler});\n");
      out.write("}\n");
      out.write("\n");
      out.write("function removeEventListenerIndex(index)\n");
      out.write("{\n");
      out.write("    var eventListener = eventListeners[index];\n");
      out.write("    delete eventListeners[index];\n");
      out.write("\n");
      out.write("    if (!eventListener.node.removeEventListener)\n");
      out.write("    {\n");
      out.write("        eventListener.node.detachEvent('on' + eventListener.event,\n");
      out.write("                                       eventListener.handler);\n");
      out.write("    }\n");
      out.write("    else\n");
      out.write("    {\n");
      out.write("        eventListener.node.removeEventListener(eventListener.event,\n");
      out.write("                                               eventListener.handler, false);\n");
      out.write("    }\n");
      out.write("}\n");
      out.write("\n");
      out.write("function myRemoveEventListener(node, event, handler)\n");
      out.write("{\n");
      out.write("    removeEventListenerIndex(findEventListener(node, event, handler));\n");
      out.write("}\n");
      out.write("\n");
      out.write("function cleanupEventListeners()\n");
      out.write("{\n");
      out.write("    var i;\n");
      out.write("    for (i = eventListeners.length; i > 0; i--)\n");
      out.write("    {\n");
      out.write("        if (eventListeners[i] != undefined)\n");
      out.write("        {\n");
      out.write("            removeEventListenerIndex(i);\n");
      out.write("        }\n");
      out.write("    }\n");
      out.write("}\n");
      out.write("myAddEventListener(window, 'unload', cleanupEventListeners);\n");
      out.write("\n");
      out.write("function hsvToRgb(hue, saturation, value)\n");
      out.write("{\n");
      out.write("    var red;\n");
      out.write("    var green;\n");
      out.write("    var blue;\n");
      out.write("    if (value == 0.0)\n");
      out.write("    {\n");
      out.write("        red = 0;\n");
      out.write("        green = 0;\n");
      out.write("        blue = 0;\n");
      out.write("    }\n");
      out.write("    else\n");
      out.write("    {\n");
      out.write("        var i = Math.floor(hue * 6);\n");
      out.write("        var f = (hue * 6) - i;\n");
      out.write("        var p = value * (1 - saturation);\n");
      out.write("        var q = value * (1 - (saturation * f));\n");
      out.write("        var t = value * (1 - (saturation * (1 - f)));\n");
      out.write("        switch (i)\n");
      out.write("        {\n");
      out.write("            case 1: red = q; green = value; blue = p; break;\n");
      out.write("            case 2: red = p; green = value; blue = t; break;\n");
      out.write("            case 3: red = p; green = q; blue = value; break;\n");
      out.write("            case 4: red = t; green = p; blue = value; break;\n");
      out.write("            case 5: red = value; green = p; blue = q; break;\n");
      out.write("            case 6:\n");
      out.write("            case 0: red = value; green = t; blue = p; break;\n");
      out.write("        }\n");
      out.write("    }\n");
      out.write("    return {r: red, g: green, b: blue};\n");
      out.write("}\n");
      out.write("\n");
      out.write("function rgbToHsv(red, green, blue)\n");
      out.write("{\n");
      out.write("    var max = Math.max(Math.max(red, green), blue);\n");
      out.write("    var min = Math.min(Math.min(red, green), blue);\n");
      out.write("    var hue;\n");
      out.write("    var saturation;\n");
      out.write("    var value = max;\n");
      out.write("    if (min == max)\n");
      out.write("    {\n");
      out.write("        hue = 0;\n");
      out.write("        saturation = 0;\n");
      out.write("    }\n");
      out.write("    else\n");
      out.write("    {\n");
      out.write("        var delta = (max - min);\n");
      out.write("        saturation = delta / max;\n");
      out.write("        if (red == max)\n");
      out.write("        {\n");
      out.write("            hue = (green - blue) / delta;\n");
      out.write("        }\n");
      out.write("        else if (green == max)\n");
      out.write("        {\n");
      out.write("            hue = 2 + ((blue - red) / delta);\n");
      out.write("        }\n");
      out.write("        else\n");
      out.write("        {\n");
      out.write("            hue = 4 + ((red - green) / delta);\n");
      out.write("        }\n");
      out.write("        hue /= 6;\n");
      out.write("        if (hue < 0)\n");
      out.write("        {\n");
      out.write("            hue += 1;\n");
      out.write("        }\n");
      out.write("        if (hue > 1)\n");
      out.write("        {\n");
      out.write("            hue -= 1;\n");
      out.write("        }\n");
      out.write("    }\n");
      out.write("    return {\n");
      out.write("        h: hue,\n");
      out.write("        s: saturation,\n");
      out.write("        v: value\n");
      out.write("    };\n");
      out.write("}\n");
      out.write("\n");
      out.write("function pageCoords(node)\n");
      out.write("{\n");
      out.write("    var x = node.offsetLeft;\n");
      out.write("    var y = node.offsetTop;\n");
      out.write("    var parent = node.offsetParent;\n");
      out.write("    while (parent != null)\n");
      out.write("    {\n");
      out.write("        x += parent.offsetLeft;\n");
      out.write("        y += parent.offsetTop;\n");
      out.write("        parent = parent.offsetParent;\n");
      out.write("    }\n");
      out.write("    return {x: x, y: y};\n");
      out.write("}\n");
      out.write("\n");
      out.write("var huePositionImg = document.createElement('img');\n");
      out.write("huePositionImg.galleryImg = false;\n");
      out.write("huePositionImg.width = 35;\n");
      out.write("huePositionImg.height = 11;\n");
      out.write("huePositionImg.src = HUE_SLIDER_ARROWS_LOCATION;\n");
      out.write("huePositionImg.style.position = 'absolute';\n");
      out.write("\n");
      out.write("var hueSelectorImg = document.createElement('img');\n");
      out.write("hueSelectorImg.galleryImg = false;\n");
      out.write("hueSelectorImg.width = 35;\n");
      out.write("hueSelectorImg.height = 200;\n");
      out.write("hueSelectorImg.src = HUE_SLIDER_LOCATION;\n");
      out.write("hueSelectorImg.style.display = 'block';\n");
      out.write("\n");
      out.write("var satValImg = document.createElement('img');\n");
      out.write("satValImg.galleryImg = false;\n");
      out.write("satValImg.width = 200;\n");
      out.write("satValImg.height = 200;\n");
      out.write("satValImg.src = SAT_VAL_SQUARE_LOCATION;\n");
      out.write("satValImg.style.display = 'block';\n");
      out.write("\n");
      out.write("var crossHairsImg = document.createElement('img');\n");
      out.write("crossHairsImg.galleryImg = false;\n");
      out.write("crossHairsImg.width = 21;\n");
      out.write("crossHairsImg.height = 21;\n");
      out.write("crossHairsImg.src = CROSSHAIRS_LOCATION;\n");
      out.write("crossHairsImg.style.position = 'absolute';\n");
      out.write("var buttonCloseImg = document.createElement('img');\n");
      out.write("buttonCloseImg.galleryImg = false;\n");
      out.write("buttonCloseImg.width = 16;\n");
      out.write("buttonCloseImg.height = 16;\n");
      out.write("buttonCloseImg.src = BUTON_CLOSE_LOCATION;\n");
      out.write("buttonCloseImg.style.position = 'absolute';\n");
      out.write("buttonCloseImg.style.cursor='pointer';\n");
      out.write("buttonCloseImg.onclick=hideColorPicker;\n");
      out.write("function makeColorSelector(inputBox)\n");
      out.write("{\n");
      out.write("    var rgb, hsv\n");
      out.write("\n");
      out.write("    function colorChanged()\n");
      out.write("    {\n");
      out.write("\t\tis_div_init=false;\n");
      out.write("        var hex = rgbToHex(rgb.r, rgb.g, rgb.b);\n");
      out.write("\n");
      out.write("        var hueRgb = hsvToRgb(hsv.h, 1, 1);\n");
      out.write("        var hueHex = rgbToHex(hueRgb.r, hueRgb.g, hueRgb.b);\n");
      out.write("\t\tinputBox.style.background = hex;\n");
      out.write("       inputBox.value =hex;\n");
      out.write("\t\tif(((rgb.r*100+rgb.g*100+rgb.b*100)/3)<65)\n");
      out.write("\tinputBox.style.color=\"#fff\";\n");
      out.write("\t\telse inputBox.style.color=\"#000\";\n");
      out.write("\n");
      out.write("\n");
      out.write("        satValDiv.style.background = hueHex;\n");
      out.write("        crossHairs.style.left = ((hsv.v*199)-10).toString() + 'px';\n");
      out.write("       crossHairs.style.top = (((1-hsv.s)*199)-10).toString() + 'px';\n");
      out.write("       huePos.style.top = ((hsv.h*199)-5).toString() + 'px';\n");
      out.write("\t   is_div_init=true;\n");
      out.write("    }\n");
      out.write("    function rgbChanged()\n");
      out.write("    {\n");
      out.write("        hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);\n");
      out.write("        colorChanged();\n");
      out.write("    }\n");
      out.write("    function hsvChanged()\n");
      out.write("    {\n");
      out.write("        rgb = hsvToRgb(hsv.h, hsv.s, hsv.v);\n");
      out.write("        colorChanged();\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    var colorSelectorDiv = document.createElement('div');\n");
      out.write("    colorSelectorDiv.style.paddingLeft = '5px';\n");
      out.write("\t    colorSelectorDiv.style.paddingRight = '5px';\n");
      out.write("\t\t    colorSelectorDiv.style.paddingBottom = '5px';\n");
      out.write("    colorSelectorDiv.style.position = 'relative';\n");
      out.write("\tcolorSelectorDiv.style.diplay=\"inline\";\n");
      out.write("   colorSelectorDiv.style.height = '220px';\n");
      out.write("    colorSelectorDiv.style.width = '210px';\n");
      out.write("\n");
      out.write(" var butonclose = document.createElement('div');\n");
      out.write("\n");
      out.write("    butonclose.style.position = 'relative';\n");
      out.write("\tbutonclose.style.diplay=\"inline\";\n");
      out.write("    butonclose.style.height = '16px';\n");
      out.write("    butonclose.style.width = '16px';\n");
      out.write("butonclose.style.left=\"223px\";\n");
      out.write(" butonclose.appendChild(buttonCloseImg);\n");
      out.write("\n");
      out.write("colorSelectorDiv.appendChild(butonclose);\n");
      out.write("\n");
      out.write("    var satValDiv = document.createElement('div');\n");
      out.write("    satValDiv.style.position = 'relative';\n");
      out.write("\tsatValDiv.style.diplay=\"inline\";\n");
      out.write("\tsatValDiv.style.top = '10px';\n");
      out.write("    satValDiv.style.width = '200px';\n");
      out.write("  satValDiv.style.height = '200px';\n");
      out.write("    var newSatValImg = fixPNG(satValImg);\n");
      out.write("    satValDiv.appendChild(newSatValImg);\n");
      out.write("    var crossHairs = crossHairsImg.cloneNode(false);\n");
      out.write("    satValDiv.appendChild(crossHairs);\n");
      out.write("    function satValDragged(x, y)\n");
      out.write("    {\n");
      out.write("        hsv.s = 1-(y/199);\n");
      out.write("        hsv.v = (x/199);\n");
      out.write("        hsvChanged();\n");
      out.write("    }\n");
      out.write("    trackDrag(satValDiv, satValDragged)\n");
      out.write("\n");
      out.write("    colorSelectorDiv.appendChild(satValDiv);\n");
      out.write("\n");
      out.write("    var hueDiv = document.createElement('div');\n");
      out.write("    hueDiv.style.position = 'absolute';\n");
      out.write("\thueDiv.style.diplay=\"inline\";\n");
      out.write("    hueDiv.style.left = '210px';\n");
      out.write("    hueDiv.style.top = '27px';\n");
      out.write("    hueDiv.style.width = '35px';\n");
      out.write("    hueDiv.style.height = '200px';\n");
      out.write("    var huePos = fixPNG(huePositionImg);\n");
      out.write("    hueDiv.appendChild(hueSelectorImg.cloneNode(false));\n");
      out.write("    hueDiv.appendChild(huePos);\n");
      out.write("    function hueDragged(x, y)\n");
      out.write("    {\n");
      out.write("\t\tis_div_init=false;\n");
      out.write("        hsv.h = y/199;\n");
      out.write("        hsvChanged();\n");
      out.write("    }\n");
      out.write("    trackDrag(hueDiv, hueDragged);\n");
      out.write("    colorSelectorDiv.appendChild(hueDiv);\n");
      out.write("\n");
      out.write("    function inputBoxChanged()\n");
      out.write("    {\n");
      out.write("        rgb = hexToRgb(inputBox.value, {r: 0, g: 0, b: 0});\n");
      out.write("        rgbChanged();\n");
      out.write("    }\n");
      out.write("    myAddEventListener(inputBox, 'change', inputBoxChanged);\n");
      out.write("\n");
      out.write("    inputBoxChanged();\n");
      out.write("\n");
      out.write("    return colorSelectorDiv;\n");
      out.write("}\n");
      out.write("\n");
      out.write("\n");
      out.write("function colorPickerGetTopPos(inputObj)\n");
      out.write("\t{\n");
      out.write("\n");
      out.write("\t  var returnValue = inputObj.offsetTop;\n");
      out.write("\t  while((inputObj = inputObj.offsetParent) != null){\n");
      out.write("\t  \treturnValue += inputObj.offsetTop;\n");
      out.write("\t  }\n");
      out.write("\t  return returnValue-HEIGHT_OF_OBJ;\n");
      out.write("\t}\n");
      out.write("\n");
      out.write("\tfunction colorPickerGetLeftPos(inputObj)\n");
      out.write("\t{\n");
      out.write("\t  var returnValue = inputObj.offsetLeft;\n");
      out.write("\t  while((inputObj = inputObj.offsetParent) != null)returnValue += inputObj.offsetLeft;\n");
      out.write("\t  return returnValue+WIDTH_OF_OBJ;\n");
      out.write("\t}\n");
      out.write("function startColorPicker(inputObj)\n");
      out.write("{\n");
      out.write("       inputObject = inputObj;\n");
      out.write("       hideColorPicker();\n");
      out.write("\t   var color_picker_div = document.createElement('DIV');\n");
      out.write("\t   color_picker_div.style.left = colorPickerGetLeftPos(inputObj) + 'px';\n");
      out.write("\t   color_picker_div.style.width='250px';\n");
      out.write("\t   color_picker_div.style.heigth='190px';\n");
      out.write("\t   color_picker_div.style.top = colorPickerGetTopPos(inputObj) + inputObj.offsetHeight + 2 + 'px';\n");
      out.write("       color_picker_div.style.position = 'absolute';\n");
      out.write("       color_picker_div.id = 'The_colorPicker';\n");
      out.write("\t   color_picker_div.style.display='block';\n");
      out.write("       color_picker_div.style.zIndex=20000031;\n");
      out.write("\t   color_picker_div.appendChild(makeColorSelector(inputObj));\n");
      out.write("\t   document.body.appendChild(color_picker_div);\n");
      out.write("\t   is_div_init=true;\n");
      out.write("}\n");
      out.write("function hideColorPicker()\n");
      out.write("{\n");
      out.write("\n");
      out.write("\tif (is_div_init){\n");
      out.write("\t\t is_div_init=false;\n");
      out.write("\t\t  document.body.removeChild(document.getElementById('The_colorPicker'));\n");
      out.write("    }\n");
      out.write("}\n");
      out.write("\n");
      out.write("function maskedHex(input)\n");
      out.write("{\n");
      out.write("\tvar mask = '#[0-9a-fA-F]{7}';\n");
      out.write(" input.value=input.value.replace(mask,\"\");\n");
      out.write("}\n");
} catch (Throwable t) {t.printStackTrace();} 
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }

  private boolean _jspx_meth_mvc_005fcontext_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:context
    org.jboss.dashboard.ui.taglib.ContextTag _jspx_th_mvc_005fcontext_005f0 = (org.jboss.dashboard.ui.taglib.ContextTag) _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.get(org.jboss.dashboard.ui.taglib.ContextTag.class);
    _jspx_th_mvc_005fcontext_005f0.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005fcontext_005f0.setParent(null);
    // /components/colorpicker/js/colorPicker.jsp(21,27) name = uri type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fcontext_005f0.setUri("/components/colorpicker/images/crosshairs.png");
    int _jspx_eval_mvc_005fcontext_005f0 = _jspx_th_mvc_005fcontext_005f0.doStartTag();
    if (_jspx_th_mvc_005fcontext_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f0);
    return false;
  }

  private boolean _jspx_meth_mvc_005fcontext_005f1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:context
    org.jboss.dashboard.ui.taglib.ContextTag _jspx_th_mvc_005fcontext_005f1 = (org.jboss.dashboard.ui.taglib.ContextTag) _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.get(org.jboss.dashboard.ui.taglib.ContextTag.class);
    _jspx_th_mvc_005fcontext_005f1.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005fcontext_005f1.setParent(null);
    // /components/colorpicker/js/colorPicker.jsp(22,27) name = uri type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fcontext_005f1.setUri("/components/colorpicker/images/h.png");
    int _jspx_eval_mvc_005fcontext_005f1 = _jspx_th_mvc_005fcontext_005f1.doStartTag();
    if (_jspx_th_mvc_005fcontext_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f1);
    return false;
  }

  private boolean _jspx_meth_mvc_005fcontext_005f2(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:context
    org.jboss.dashboard.ui.taglib.ContextTag _jspx_th_mvc_005fcontext_005f2 = (org.jboss.dashboard.ui.taglib.ContextTag) _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.get(org.jboss.dashboard.ui.taglib.ContextTag.class);
    _jspx_th_mvc_005fcontext_005f2.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005fcontext_005f2.setParent(null);
    // /components/colorpicker/js/colorPicker.jsp(23,34) name = uri type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fcontext_005f2.setUri("/components/colorpicker/images/position.png");
    int _jspx_eval_mvc_005fcontext_005f2 = _jspx_th_mvc_005fcontext_005f2.doStartTag();
    if (_jspx_th_mvc_005fcontext_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f2);
    return false;
  }

  private boolean _jspx_meth_mvc_005fcontext_005f3(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:context
    org.jboss.dashboard.ui.taglib.ContextTag _jspx_th_mvc_005fcontext_005f3 = (org.jboss.dashboard.ui.taglib.ContextTag) _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.get(org.jboss.dashboard.ui.taglib.ContextTag.class);
    _jspx_th_mvc_005fcontext_005f3.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005fcontext_005f3.setParent(null);
    // /components/colorpicker/js/colorPicker.jsp(24,31) name = uri type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fcontext_005f3.setUri("/components/colorpicker/images/sv.png");
    int _jspx_eval_mvc_005fcontext_005f3 = _jspx_th_mvc_005fcontext_005f3.doStartTag();
    if (_jspx_th_mvc_005fcontext_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f3);
    return false;
  }

  private boolean _jspx_meth_mvc_005fcontext_005f4(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:context
    org.jboss.dashboard.ui.taglib.ContextTag _jspx_th_mvc_005fcontext_005f4 = (org.jboss.dashboard.ui.taglib.ContextTag) _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.get(org.jboss.dashboard.ui.taglib.ContextTag.class);
    _jspx_th_mvc_005fcontext_005f4.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005fcontext_005f4.setParent(null);
    // /components/colorpicker/js/colorPicker.jsp(25,26) name = uri type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fcontext_005f4.setUri("/components/colorpicker/images/close.gif");
    int _jspx_eval_mvc_005fcontext_005f4 = _jspx_th_mvc_005fcontext_005f4.doStartTag();
    if (_jspx_th_mvc_005fcontext_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f4);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f4);
    return false;
  }
}
