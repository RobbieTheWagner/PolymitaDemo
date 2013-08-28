package org.apache.jsp.components.bam;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class kpi_005fform_005fmanagement_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("\n");
      out.write("<script type=\"text/javascript\"  defer=\"true\">\n");
      out.write("    function bam_kpiedit_submitProperties(myfield) {\n");
      out.write("        // Get the form.\n");
      out.write("        var element = null;\n");
      out.write("        if (myfield.nodeName.toLowerCase() == \"form\") element = myfield;\n");
      out.write("        else element = myfield.form;\n");
      out.write("\n");
      out.write("        // Set a variable to the form.\n");
      out.write("        var isRequestInProgress = element.isRequestInProgress;\n");
      out.write("        if (!isRequestInProgress) {\n");
      out.write("          element.isRequestInProgress = 'true';\n");
      out.write("          //  //IE: variable defined in -> /templates/navigatorDetection.jsp\n");
      out.write("            if(IE){\n");
      out.write("                element.submit();\n");
      out.write("            }else{\n");
      out.write("                submitAjaxForm(element);\n");
      out.write("            }\n");
      out.write("        }\n");
      out.write("        return false;\n");
      out.write("    }\n");
      out.write("</script>");
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
