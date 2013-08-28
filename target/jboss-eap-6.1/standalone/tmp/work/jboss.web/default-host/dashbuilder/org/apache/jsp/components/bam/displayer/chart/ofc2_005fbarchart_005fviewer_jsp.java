package org.apache.jsp.components.bam.displayer.chart;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.jboss.dashboard.factory.Factory;
import org.jboss.dashboard.ui.components.chart.OFC2ChartViewer;

public final class ofc2_005fbarchart_005fviewer_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fflush_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fflush_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fflush_005fnobody.release();
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

    OFC2ChartViewer viewer = (OFC2ChartViewer) Factory.lookup("org.jboss.dashboard.ui.components.BarChartViewer_ofc2");
    request.setAttribute("viewer", viewer);

      out.write('\n');
      if (_jspx_meth_mvc_005finclude_005f0(_jspx_page_context))
        return;
      out.write('\n');
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

  private boolean _jspx_meth_mvc_005finclude_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:include
    org.jboss.dashboard.ui.taglib.JSPIncludeTag _jspx_th_mvc_005finclude_005f0 = (org.jboss.dashboard.ui.taglib.JSPIncludeTag) _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fflush_005fnobody.get(org.jboss.dashboard.ui.taglib.JSPIncludeTag.class);
    _jspx_th_mvc_005finclude_005f0.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005finclude_005f0.setParent(null);
    // /components/bam/displayer/chart/ofc2_barchart_viewer.jsp(25,0) name = page type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005finclude_005f0.setPage("ofc2_chart.jsp");
    // /components/bam/displayer/chart/ofc2_barchart_viewer.jsp(25,0) name = flush type = java.lang.String reqTime = false required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005finclude_005f0.setFlush(new Boolean(true));
    int _jspx_eval_mvc_005finclude_005f0 = _jspx_th_mvc_005finclude_005f0.doStartTag();
    if (_jspx_th_mvc_005finclude_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fflush_005fnobody.reuse(_jspx_th_mvc_005finclude_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fflush_005fnobody.reuse(_jspx_th_mvc_005finclude_005f0);
    return false;
  }
}
