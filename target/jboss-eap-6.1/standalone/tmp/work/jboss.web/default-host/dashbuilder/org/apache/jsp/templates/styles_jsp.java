package org.apache.jsp.templates;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class styles_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fproperty_0026_005fproperty_005fid_005fbean;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fresource_005flink_0026_005fresourceId_005fcategory_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005ffactory_005fproperty_0026_005fproperty_005fid_005fbean = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fresource_005flink_0026_005fresourceId_005fcategory_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005ffactory_005fproperty_0026_005fproperty_005fid_005fbean.release();
    _005fjspx_005ftagPool_005fresource_005flink_0026_005fresourceId_005fcategory_005fnobody.release();
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

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      //  factory:property
      org.jboss.dashboard.ui.taglib.factory.PropertyTag _jspx_th_factory_005fproperty_005f0 = (org.jboss.dashboard.ui.taglib.factory.PropertyTag) _005fjspx_005ftagPool_005ffactory_005fproperty_0026_005fproperty_005fid_005fbean.get(org.jboss.dashboard.ui.taglib.factory.PropertyTag.class);
      _jspx_th_factory_005fproperty_005f0.setPageContext(_jspx_page_context);
      _jspx_th_factory_005fproperty_005f0.setParent(null);
      // /templates/styles.jsp(22,0) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_factory_005fproperty_005f0.setBean("org.jboss.dashboard.ui.NavigationManager");
      // /templates/styles.jsp(22,0) name = property type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_factory_005fproperty_005f0.setProperty("showingConfig");
      // /templates/styles.jsp(22,0) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_factory_005fproperty_005f0.setId("showingConfig");
      int _jspx_eval_factory_005fproperty_005f0 = _jspx_th_factory_005fproperty_005f0.doStartTag();
      if (_jspx_eval_factory_005fproperty_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
        java.lang.Object showingConfig = null;
        if (_jspx_eval_factory_005fproperty_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.pushBody();
          _jspx_th_factory_005fproperty_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
          _jspx_th_factory_005fproperty_005f0.doInitBody();
        }
        showingConfig = (java.lang.Object) _jspx_page_context.findAttribute("showingConfig");
        do {
          out.write('\n');
 if(Boolean.TRUE.equals(showingConfig)){
          out.write("\n");
          out.write("        <meta http-equiv=\"Page-Enter\"\n");
          out.write("              content=\"progid:DXImageTransform.Microsoft.Zigzag(duration=0)\">\n");
          out.write("            <meta http-equiv=\"Page-Exit\"\n");
          out.write("              content=\"progid:DXImageTransform.Microsoft.Zigzag(duration=0)\">\n");
}
          out.write('\n');
          int evalDoAfterBody = _jspx_th_factory_005fproperty_005f0.doAfterBody();
          showingConfig = (java.lang.Object) _jspx_page_context.findAttribute("showingConfig");
          if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
            break;
        } while (true);
        if (_jspx_eval_factory_005fproperty_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.popBody();
        }
      }
      if (_jspx_th_factory_005fproperty_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005ffactory_005fproperty_0026_005fproperty_005fid_005fbean.reuse(_jspx_th_factory_005fproperty_005f0);
        return;
      }
      _005fjspx_005ftagPool_005ffactory_005fproperty_0026_005fproperty_005fid_005fbean.reuse(_jspx_th_factory_005fproperty_005f0);
      out.write("\n");
      out.write("<link rel=\"stylesheet\" href='");
      if (_jspx_meth_resource_005flink_005f0(_jspx_page_context))
        return;
      out.write("' type=\"text/css\">\n");
      out.write("<link rel=\"stylesheet\" href='");
      if (_jspx_meth_resource_005flink_005f1(_jspx_page_context))
        return;
      out.write("' type=\"text/css\">\n");
      out.write("<link REL=\"icon\" HREF=\"");
      if (_jspx_meth_mvc_005fcontext_005f0(_jspx_page_context))
        return;
      out.write("\" TYPE=\"image/x-icon\">\n");
      out.write("<link rel=\"shortcut icon\" href=\"");
      if (_jspx_meth_mvc_005fcontext_005f1(_jspx_page_context))
        return;
      out.write("\" type=\"image/x-icon\">\n");
      out.write("\n");
      out.write("<style type=\"text/css\">\n");
      out.write(".dropOnRegion {\n");
      out.write("background-color:gold;\n");
      out.write("}\n");
      out.write(".regionTitle {\n");
      out.write("background-color:#0099FF;\n");
      out.write("}\n");
      out.write("\n");
      out.write("/* Chart related styles */\n");
      out.write(".skn-chart-table {  padding:10px; margin:5px;border:1px solid #eeeeee; }\n");
      out.write(".skn-chart-title { text-align:center; font-size: 120%; font-weight: bold;padding-bottom:10px; }\n");
      out.write(".skn-chart-tooltip { text-align:center; font-size: 100%; font-weight: bold; height:25px}\n");
      out.write("\n");
      out.write("</style>\n");
      out.write("\n");
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

  private boolean _jspx_meth_resource_005flink_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  resource:link
    org.jboss.dashboard.ui.taglib.ResourceLinkTag _jspx_th_resource_005flink_005f0 = (org.jboss.dashboard.ui.taglib.ResourceLinkTag) _005fjspx_005ftagPool_005fresource_005flink_0026_005fresourceId_005fcategory_005fnobody.get(org.jboss.dashboard.ui.taglib.ResourceLinkTag.class);
    _jspx_th_resource_005flink_005f0.setPageContext(_jspx_page_context);
    _jspx_th_resource_005flink_005f0.setParent(null);
    // /templates/styles.jsp(30,29) name = category type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_resource_005flink_005f0.setCategory("skin");
    // /templates/styles.jsp(30,29) name = resourceId type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_resource_005flink_005f0.setResourceId("CSS");
    int _jspx_eval_resource_005flink_005f0 = _jspx_th_resource_005flink_005f0.doStartTag();
    if (_jspx_th_resource_005flink_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fresource_005flink_0026_005fresourceId_005fcategory_005fnobody.reuse(_jspx_th_resource_005flink_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fresource_005flink_0026_005fresourceId_005fcategory_005fnobody.reuse(_jspx_th_resource_005flink_005f0);
    return false;
  }

  private boolean _jspx_meth_resource_005flink_005f1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  resource:link
    org.jboss.dashboard.ui.taglib.ResourceLinkTag _jspx_th_resource_005flink_005f1 = (org.jboss.dashboard.ui.taglib.ResourceLinkTag) _005fjspx_005ftagPool_005fresource_005flink_0026_005fresourceId_005fcategory_005fnobody.get(org.jboss.dashboard.ui.taglib.ResourceLinkTag.class);
    _jspx_th_resource_005flink_005f1.setPageContext(_jspx_page_context);
    _jspx_th_resource_005flink_005f1.setParent(null);
    // /templates/styles.jsp(31,29) name = category type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_resource_005flink_005f1.setCategory("envelope");
    // /templates/styles.jsp(31,29) name = resourceId type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_resource_005flink_005f1.setResourceId("CSS");
    int _jspx_eval_resource_005flink_005f1 = _jspx_th_resource_005flink_005f1.doStartTag();
    if (_jspx_th_resource_005flink_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fresource_005flink_0026_005fresourceId_005fcategory_005fnobody.reuse(_jspx_th_resource_005flink_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fresource_005flink_0026_005fresourceId_005fcategory_005fnobody.reuse(_jspx_th_resource_005flink_005f1);
    return false;
  }

  private boolean _jspx_meth_mvc_005fcontext_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:context
    org.jboss.dashboard.ui.taglib.ContextTag _jspx_th_mvc_005fcontext_005f0 = (org.jboss.dashboard.ui.taglib.ContextTag) _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.get(org.jboss.dashboard.ui.taglib.ContextTag.class);
    _jspx_th_mvc_005fcontext_005f0.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005fcontext_005f0.setParent(null);
    // /templates/styles.jsp(32,23) name = uri type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fcontext_005f0.setUri("/favicon.ico");
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
    // /templates/styles.jsp(33,32) name = uri type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fcontext_005f1.setUri("/favicon.ico");
    int _jspx_eval_mvc_005fcontext_005f1 = _jspx_th_mvc_005fcontext_005f1.doStartTag();
    if (_jspx_th_mvc_005fcontext_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f1);
    return false;
  }
}
