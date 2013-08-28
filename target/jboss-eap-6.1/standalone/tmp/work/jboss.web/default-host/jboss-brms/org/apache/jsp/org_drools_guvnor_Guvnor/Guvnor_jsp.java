package org.apache.jsp.org_drools_guvnor_Guvnor;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class Guvnor_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      response.setContentType("text/html; charset=UTF-8");
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
      out.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n");
      out.write("<html>\n");
      out.write("<head>\n");
      out.write("<!-- \n");
      out.write("     Note you can append #asset=UUID to the end of the URL to preload a given asset.\n");
      out.write("     Also, if you append #asset=UUID&nochrome it will only show the asset without all the GUI \"chrome\"\n");
      out.write("-->\n");
      out.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
      out.write("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=EmulateIE7\" />\n");
      out.write("<meta name=\"gwt:property\" content=\"locale=");
      out.print(request.getLocale().toString());
      out.write("\">\n");
      out.write("<title>JBoss BRMS</title>\n");
      out.write("<link rel=\"shortcut icon\" href=\"images/drools.gif\" type=\"image/gif\" />\n");
      out.write("<link rel=\"icon\" href=\"images/drools.gif\" type=\"image/gif\" />\n");
      out.write("\n");
      out.write("<!--CSS for loading message at application Startup-->\n");
      out.write("<style type=\"text/css\">\n");
      out.write("#loading {\n");
      out.write("    position: absolute;\n");
      out.write("    left: 45%;\n");
      out.write("    top: 40%;\n");
      out.write("    padding: 2px;\n");
      out.write("    z-index: 20001;\n");
      out.write("    height: auto;\n");
      out.write("    border: 1px solid #ccc;\n");
      out.write("}\n");
      out.write("\n");
      out.write("#loading a {\n");
      out.write("    color: #225588;\n");
      out.write("}\n");
      out.write("\n");
      out.write("#loading .loading-indicator {\n");
      out.write("    background: white;\n");
      out.write("    color: #444;\n");
      out.write("    font: bold 13px tahoma, arial, helvetica;\n");
      out.write("    padding: 10px;\n");
      out.write("    margin: 0;\n");
      out.write("    height: auto;\n");
      out.write("}\n");
      out.write("\n");
      out.write("#loading-msg {\n");
      out.write("    font: normal 10px arial, tahoma, sans-serif;\n");
      out.write("}\n");
      out.write("</style>\n");
      out.write("\n");
      out.write("<link rel=\"stylesheet\" href=\"css/Guvnor.css\">\n");
      out.write("<link rel=\"stylesheet\" href=\"css/Guvnor_DecoratedPopupPanel.css\">\n");
      out.write("<link rel=\"stylesheet\" href=\"css/ruleflow.css\">\n");
      out.write("</head>\n");
      out.write("<body>\n");
      out.write("    <iframe id=\"__gwt_historyFrame\" style=\"width: 0; height: 0; border: 0\"></iframe>\n");
      out.write("\n");
      out.write("    <!--add loading indicator while the app is being loaded-->\n");
      out.write("    <div id=\"loading\">\n");
      out.write("        <div class=\"loading-indicator\">\n");
      out.write("            <img src=\"images/loading-icon.gif\" width=\"32\" height=\"32\"\n");
      out.write("                style=\"margin-right: 8px; float: left; vertical-align: top;\" />\n");
      out.write("            Please wait<br /> <span id=\"loading-msg\">Loading\n");
      out.write("                application...</span>\n");
      out.write("        </div>\n");
      out.write("    </div>\n");
      out.write("\n");
      out.write("    <!-- The GWT js file generated at run time -->\n");
      out.write("    <script type=\"text/javascript\"\n");
      out.write("        src='org.drools.guvnor.Guvnor.nocache.js'></script>\n");
      out.write("\n");
      out.write("</body>\n");
      out.write("</html>\n");
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
