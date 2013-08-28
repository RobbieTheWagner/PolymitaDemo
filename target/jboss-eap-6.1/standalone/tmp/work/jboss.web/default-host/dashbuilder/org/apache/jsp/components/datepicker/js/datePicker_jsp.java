package org.apache.jsp.components.datepicker.js;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.GregorianCalendar;
import java.text.SimpleDateFormat;
import org.jboss.dashboard.LocaleManager;
import java.util.Calendar;
import java.util.Locale;

public final class datePicker_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "datetimepicker.jsp", out, true);
      out.write("\n");
      out.write("\n");
      out.write("Calendar.prototype.SetYear = function(amount) {\n");
      out.write("    try{\n");
      out.write("        var year = parseInt(amount);\n");
      out.write("        if(!isNaN(year)) Cal.Year=year;\n");
      out.write("    } catch(e) {}\n");
      out.write("};\n");
      out.write("\n");
      out.write("    MonthName = [\n");
      out.write("            ");

            Locale currentLocale = LocaleManager.currentLocale();
            SimpleDateFormat sdf = new SimpleDateFormat("MMMM",currentLocale);
            Calendar calendar = GregorianCalendar.getInstance(currentLocale);
            calendar.set(GregorianCalendar.MONTH,GregorianCalendar.JANUARY);
            for(int i = 0; i< 12; i++){
                String monthName = sdf.format(calendar.getTime());
                calendar.add(GregorianCalendar.MONTH,1);

            
      out.write("\n");
      out.write("            ");
      out.print(i==0?"":", ");
      out.write('"');
      out.print(monthName);
      out.write("\"\n");
      out.write("            ");

            }
            
      out.write("];\n");
      out.write("\n");
      out.write("    WeekDayName");
      out.print(calendar.getFirstDayOfWeek());
      out.write(" = [\n");
      out.write("            ");

            sdf = new SimpleDateFormat("EE",currentLocale);
            calendar.set(GregorianCalendar.DAY_OF_WEEK, calendar.getFirstDayOfWeek());
            for(int i = 0; i< 7; i++){
                String monthName = sdf.format(calendar.getTime());
                calendar.add(GregorianCalendar.DAY_OF_WEEK,1);
            
      out.write("\n");
      out.write("            ");
      out.print(i==0?"":", ");
      out.write('"');
      out.print(monthName);
      out.write("\"\n");
      out.write("            ");

            }
            
      out.write("];\n");
      out.write("    MondayFirstDay=");
      out.print(calendar.getFirstDayOfWeek() == Calendar.MONDAY);
      out.write(";\n");
      out.write("\n");
      out.write("function NewCal(pCtrl, pFormat, pShowTime) {\n");
      out.write("    NewCssCal(pCtrl, pFormat, \"INPUTTEXT\", pShowTime, '24', false, null);\n");
      out.write("}\n");
      out.write("function NewCal(pCtrl, pFormat, pShowTime, clickEvent) {\n");
      out.write("    NewCssCal(pCtrl, pFormat, \"INPUTTEXT\", pShowTime, '24', false, clickEvent);\n");
      out.write("}\n");
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
