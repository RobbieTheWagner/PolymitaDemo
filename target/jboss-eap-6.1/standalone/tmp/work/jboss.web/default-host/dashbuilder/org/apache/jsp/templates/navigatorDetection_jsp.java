package org.apache.jsp.templates;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class navigatorDetection_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
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

      out.write("\n");
      out.write("var IE = false;\n");
      out.write("var NS = false;\n");
      out.write("var FX = false;\n");
      out.write("var OP = false;\n");
      out.write("var CH = false;\n");
      out.write("var DHTML_support = false;\n");
      out.write("var navigatorVersion = 0;\n");
      out.write("checkBrowser();\n");
      out.write("\n");
      out.write("function checkBrowser() {\n");
      out.write("    var userAgent = navigator.userAgent;\n");
      out.write("    if (userAgent.indexOf('Netscape') != -1) {\n");
      out.write("        navigatorVersion = parseFloat(userAgent.substring(userAgent.indexOf('Netscape') + 9, userAgent.length));\n");
      out.write("        NS = true;\n");
      out.write("    }\n");
      out.write("    else if (userAgent.indexOf('MSIE') != -1) {\n");
      out.write("        navigatorVersion = parseFloat(userAgent.substring(userAgent.indexOf('MSIE') + 4, userAgent.length));\n");
      out.write("        IE = true;\n");
      out.write("        DHTML_support = navigatorVersion >= 5;\n");
      out.write("    }\n");
      out.write("    else if (userAgent.indexOf('Firefox') != -1) {\n");
      out.write("        navigatorVersion = parseFloat(userAgent.substring(userAgent.indexOf('Firefox') + 1, userAgent.length));\n");
      out.write("        FX = true;\n");
      out.write("    }\n");
      out.write("    else if (userAgent.indexOf('Opera') != -1) {\n");
      out.write("        navigatorVersion = parseFloat(userAgent.substring(userAgent.indexOf('Opera') + 1, userAgent.length));\n");
      out.write("        OP = true;\n");
      out.write("    }\n");
      out.write("    else if (userAgent.indexOf('Chrome') != -1) {\n");
      out.write("        var startPos = userAgent.indexOf('Chrome') + 1;\n");
      out.write("        var endPos = userAgent.indexOf(\" \", startPos);\n");
      out.write("        navigatorVersion = parseFloat(userAgent.substring(startPos, endPos));\n");
      out.write("        \n");
      out.write("        CH = true;\n");
      out.write("    }\n");
      out.write("};\n");
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
}
