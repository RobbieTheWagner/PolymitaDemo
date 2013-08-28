package org.apache.jsp.panels.advanced_005fhtml;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.jboss.dashboard.ui.panel.advancedHTML.HTMLDriver;
import java.util.Map;

public final class show_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fpanel_005fdefineObjects_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fpanel_005flocalize_0026_005fvalueIsHTML_005fuseDefaults_005fdata_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fpanel_005fdefineObjects_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fpanel_005flocalize_0026_005fvalueIsHTML_005fuseDefaults_005fdata_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fpanel_005fdefineObjects_005fnobody.release();
    _005fjspx_005ftagPool_005fpanel_005flocalize_0026_005fvalueIsHTML_005fuseDefaults_005fdata_005fnobody.release();
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
      //  panel:defineObjects
      org.jboss.dashboard.workspace.Section currentSection = null;
      org.jboss.dashboard.workspace.WorkspaceImpl currentWorkspace = null;
      java.lang.String currentPanelId = null;
      org.jboss.dashboard.workspace.Panel currentPanel = null;
      org.jboss.dashboard.workspace.PanelSession panelSession = null;
      org.jboss.dashboard.ui.panel.PanelProvider panelProvider = null;
      org.jboss.dashboard.ui.panel.PanelDriver panelDriver = null;
      java.util.Locale currentLocale = null;
      java.lang.Boolean isAdminMode = null;
      org.jboss.dashboard.ui.taglib.DefineObjectsTag _jspx_th_panel_005fdefineObjects_005f0 = (org.jboss.dashboard.ui.taglib.DefineObjectsTag) _005fjspx_005ftagPool_005fpanel_005fdefineObjects_005fnobody.get(org.jboss.dashboard.ui.taglib.DefineObjectsTag.class);
      _jspx_th_panel_005fdefineObjects_005f0.setPageContext(_jspx_page_context);
      _jspx_th_panel_005fdefineObjects_005f0.setParent(null);
      int _jspx_eval_panel_005fdefineObjects_005f0 = _jspx_th_panel_005fdefineObjects_005f0.doStartTag();
      currentSection = (org.jboss.dashboard.workspace.Section) _jspx_page_context.findAttribute("currentSection");
      currentWorkspace = (org.jboss.dashboard.workspace.WorkspaceImpl) _jspx_page_context.findAttribute("currentWorkspace");
      currentPanelId = (java.lang.String) _jspx_page_context.findAttribute("currentPanelId");
      currentPanel = (org.jboss.dashboard.workspace.Panel) _jspx_page_context.findAttribute("currentPanel");
      panelSession = (org.jboss.dashboard.workspace.PanelSession) _jspx_page_context.findAttribute("panelSession");
      panelProvider = (org.jboss.dashboard.ui.panel.PanelProvider) _jspx_page_context.findAttribute("panelProvider");
      panelDriver = (org.jboss.dashboard.ui.panel.PanelDriver) _jspx_page_context.findAttribute("panelDriver");
      currentLocale = (java.util.Locale) _jspx_page_context.findAttribute("currentLocale");
      isAdminMode = (java.lang.Boolean) _jspx_page_context.findAttribute("isAdminMode");
      if (_jspx_th_panel_005fdefineObjects_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fpanel_005fdefineObjects_005fnobody.reuse(_jspx_th_panel_005fdefineObjects_005f0);
        return;
      }
      currentSection = (org.jboss.dashboard.workspace.Section) _jspx_page_context.findAttribute("currentSection");
      currentWorkspace = (org.jboss.dashboard.workspace.WorkspaceImpl) _jspx_page_context.findAttribute("currentWorkspace");
      currentPanelId = (java.lang.String) _jspx_page_context.findAttribute("currentPanelId");
      currentPanel = (org.jboss.dashboard.workspace.Panel) _jspx_page_context.findAttribute("currentPanel");
      panelSession = (org.jboss.dashboard.workspace.PanelSession) _jspx_page_context.findAttribute("panelSession");
      panelProvider = (org.jboss.dashboard.ui.panel.PanelProvider) _jspx_page_context.findAttribute("panelProvider");
      panelDriver = (org.jboss.dashboard.ui.panel.PanelDriver) _jspx_page_context.findAttribute("panelDriver");
      currentLocale = (java.util.Locale) _jspx_page_context.findAttribute("currentLocale");
      isAdminMode = (java.lang.Boolean) _jspx_page_context.findAttribute("isAdminMode");
      _005fjspx_005ftagPool_005fpanel_005fdefineObjects_005fnobody.reuse(_jspx_th_panel_005fdefineObjects_005f0);
      out.write('\n');
      out.write('\n');

    HTMLDriver htmlDriver = (HTMLDriver) panelDriver;
    Map html = htmlDriver.getHtmlCode(currentPanel);

      out.write('\n');
      out.write('\n');
      //  panel:localize
      org.jboss.dashboard.ui.taglib.LocalizeTag _jspx_th_panel_005flocalize_005f0 = (org.jboss.dashboard.ui.taglib.LocalizeTag) _005fjspx_005ftagPool_005fpanel_005flocalize_0026_005fvalueIsHTML_005fuseDefaults_005fdata_005fnobody.get(org.jboss.dashboard.ui.taglib.LocalizeTag.class);
      _jspx_th_panel_005flocalize_005f0.setPageContext(_jspx_page_context);
      _jspx_th_panel_005flocalize_005f0.setParent(null);
      // /panels/advanced_html/show.jsp(32,0) name = data type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_panel_005flocalize_005f0.setData(html);
      // /panels/advanced_html/show.jsp(32,0) name = valueIsHTML type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_panel_005flocalize_005f0.setValueIsHTML(true);
      // /panels/advanced_html/show.jsp(32,0) name = useDefaults type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_panel_005flocalize_005f0.setUseDefaults(htmlDriver.isUsingDefaultLanguage(currentPanel) );
      int _jspx_eval_panel_005flocalize_005f0 = _jspx_th_panel_005flocalize_005f0.doStartTag();
      if (_jspx_th_panel_005flocalize_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fpanel_005flocalize_0026_005fvalueIsHTML_005fuseDefaults_005fdata_005fnobody.reuse(_jspx_th_panel_005flocalize_005f0);
        return;
      }
      _005fjspx_005ftagPool_005fpanel_005flocalize_0026_005fvalueIsHTML_005fuseDefaults_005fdata_005fnobody.reuse(_jspx_th_panel_005flocalize_005f0);
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
}
