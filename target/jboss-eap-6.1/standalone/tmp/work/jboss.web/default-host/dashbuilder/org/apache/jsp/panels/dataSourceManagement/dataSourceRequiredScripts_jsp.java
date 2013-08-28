package org.apache.jsp.panels.dataSourceManagement;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class dataSourceRequiredScripts_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<script language=\"javascript\" type=\"text/javascript\">\n");
      out.write("    //script for datasource management panel\n");
      out.write("    var testQuerys = new Array();\n");
      out.write("\n");
      out.write("\t\ttestQuerys[0]= \"\";\n");
      out.write("    testQuerys[1]= \"SELECT 1\"; ");
      out.write("\n");
      out.write("    testQuerys[2]= \"SELECT 1\"; ");
      out.write("\n");
      out.write("    testQuerys[3]= \"SELECT SYSDATE FROM DUAL\"; ");
      out.write("\n");
      out.write("    testQuerys[4]= \"SELECT 1\"; ");
      out.write("\n");
      out.write("\t\ttestQuerys[5]= \"SELECT 1\"; ");
      out.write("\n");
      out.write("\n");
      out.write("    function changeTestQuery(select, id) {\n");
      out.write("        var textArea = document.getElementById(id);\n");
      out.write("        textArea.value = testQuerys[select.selectedIndex]\n");
      out.write("    }\n");
      out.write("\t\tfunction changeDriverClass(select, id) {\n");
      out.write("\t\t\tvar className=select.options[select.selectedIndex].value;\n");
      out.write("\t\t\tvar input=document.getElementById(id);\n");
      out.write("\t\t\tinput.value=className;\n");
      out.write("\t\t}\n");
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
