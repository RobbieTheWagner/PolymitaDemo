package org.apache.jsp.panels.kpi;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class show_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fuseComponent_0026_005fbean_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005ffactory_005fuseComponent_0026_005fbean_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005ffactory_005fuseComponent_0026_005fbean_005fnobody.release();
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
      out.write('\n');
      if (_jspx_meth_factory_005fuseComponent_005f0(_jspx_page_context))
        return;
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

  private boolean _jspx_meth_factory_005fuseComponent_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:useComponent
    org.jboss.dashboard.ui.taglib.factory.UseComponentTag _jspx_th_factory_005fuseComponent_005f0 = (org.jboss.dashboard.ui.taglib.factory.UseComponentTag) _005fjspx_005ftagPool_005ffactory_005fuseComponent_0026_005fbean_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.UseComponentTag.class);
    _jspx_th_factory_005fuseComponent_005f0.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fuseComponent_005f0.setParent(null);
    // /panels/kpi/show.jsp(19,0) name = bean type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fuseComponent_005f0.setBean("org.jboss.dashboard.ui.components.KPIViewer");
    int _jspx_eval_factory_005fuseComponent_005f0 = _jspx_th_factory_005fuseComponent_005f0.doStartTag();
    if (_jspx_th_factory_005fuseComponent_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fuseComponent_0026_005fbean_005fnobody.reuse(_jspx_th_factory_005fuseComponent_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fuseComponent_0026_005fbean_005fnobody.reuse(_jspx_th_factory_005fuseComponent_005f0);
    return false;
  }
}
