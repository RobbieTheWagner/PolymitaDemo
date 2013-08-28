package org.apache.jsp.components.bam.dashboard_005ffilter;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.jboss.dashboard.LocaleManager;
import org.jboss.dashboard.ui.components.DashboardFilterHandler;
import org.apache.commons.lang.StringUtils;

public final class filter_005fhelp_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.release();
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.release();
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

      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      //  i18n:bundle
      java.util.ResourceBundle bundle = null;
      org.apache.taglibs.i18n.BundleTag _jspx_th_i18n_005fbundle_005f0 = (org.apache.taglibs.i18n.BundleTag) _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.get(org.apache.taglibs.i18n.BundleTag.class);
      _jspx_th_i18n_005fbundle_005f0.setPageContext(_jspx_page_context);
      _jspx_th_i18n_005fbundle_005f0.setParent(null);
      // /components/bam/dashboard_filter/filter_help.jsp(24,0) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setId("bundle");
      // /components/bam/dashboard_filter/filter_help.jsp(24,0) name = baseName type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setBaseName("org.jboss.dashboard.ui.components.filter.messages");
      // /components/bam/dashboard_filter/filter_help.jsp(24,0) name = locale type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setLocale(LocaleManager.currentLocale());
      int _jspx_eval_i18n_005fbundle_005f0 = _jspx_th_i18n_005fbundle_005f0.doStartTag();
      bundle = (java.util.ResourceBundle) _jspx_page_context.findAttribute("bundle");
      if (_jspx_th_i18n_005fbundle_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.reuse(_jspx_th_i18n_005fbundle_005f0);
        return;
      }
      bundle = (java.util.ResourceBundle) _jspx_page_context.findAttribute("bundle");
      _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.reuse(_jspx_th_i18n_005fbundle_005f0);
      out.write('\r');
      out.write('\n');

	String propId = StringUtils.deleteWhitespace((String) request.getAttribute("propertyId"));

      out.write("\r\n");
      out.write("<table border=\"0\" align=\"left\" cellpadding=\"10\" cellspacing=\"0\"  class=\"skn-table_border\" bgcolor=\"#ffffff\"\r\n");
      out.write("       style=\"display:none; position:absolute;\"\r\n");
      out.write("       id=\"");
      //  panel:encode
      org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f0 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
      _jspx_th_panel_005fencode_005f0.setPageContext(_jspx_page_context);
      _jspx_th_panel_005fencode_005f0.setParent(null);
      // /components/bam/dashboard_filter/filter_help.jsp(30,11) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_panel_005fencode_005f0.setName("helpForProperty_" + propId);
      int _jspx_eval_panel_005fencode_005f0 = _jspx_th_panel_005fencode_005f0.doStartTag();
      if (_jspx_th_panel_005fencode_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f0);
        return;
      }
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f0);
      out.write("\">\r\n");
      out.write("   <tr>\r\n");
      out.write("     <td align=\"left\">");
      //  i18n:message
      org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f0 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
      _jspx_th_i18n_005fmessage_005f0.setPageContext(_jspx_page_context);
      _jspx_th_i18n_005fmessage_005f0.setParent(null);
      // /components/bam/dashboard_filter/filter_help.jsp(32,22) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fmessage_005f0.setKey(DashboardFilterHandler.I18N_PREFFIX + "filterHelp");
      int _jspx_eval_i18n_005fmessage_005f0 = _jspx_th_i18n_005fmessage_005f0.doStartTag();
      if (_jspx_th_i18n_005fmessage_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f0);
        return;
      }
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f0);
      out.write("</td>\r\n");
      out.write("   </tr>\r\n");
      out.write("</table>\r\n");
      out.write("<script defer=\"defer\">\r\n");
      out.write("    window.");
      //  panel:encode
      org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f1 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
      _jspx_th_panel_005fencode_005f1.setPageContext(_jspx_page_context);
      _jspx_th_panel_005fencode_005f1.setParent(null);
      // /components/bam/dashboard_filter/filter_help.jsp(36,11) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_panel_005fencode_005f1.setName("helpForProperty_" + propId + "_function");
      int _jspx_eval_panel_005fencode_005f1 = _jspx_th_panel_005fencode_005f1.doStartTag();
      if (_jspx_th_panel_005fencode_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f1);
        return;
      }
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f1);
      out.write(" = function() {\r\n");
      out.write("        var element = document.getElementById('");
      //  panel:encode
      org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f2 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
      _jspx_th_panel_005fencode_005f2.setPageContext(_jspx_page_context);
      _jspx_th_panel_005fencode_005f2.setParent(null);
      // /components/bam/dashboard_filter/filter_help.jsp(37,47) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_panel_005fencode_005f2.setName("helpForProperty_" + propId);
      int _jspx_eval_panel_005fencode_005f2 = _jspx_th_panel_005fencode_005f2.doStartTag();
      if (_jspx_th_panel_005fencode_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f2);
        return;
      }
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f2);
      out.write("');\r\n");
      out.write("        if (element.style.display=='none') element.style.display = \"block\";\r\n");
      out.write("        else element.style.display = \"none\";\r\n");
      out.write("    }\r\n");
      out.write("</script>\r\n");
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
