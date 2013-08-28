package org.apache.jsp.section;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.jboss.dashboard.workspace.Panel;
import java.util.Properties;
import org.jboss.dashboard.ui.SessionManager;
import org.jboss.dashboard.workspace.*;
import org.jboss.dashboard.security.WorkspacePermission;
import java.security.AllPermission;
import java.security.Permission;
import java.util.Locale;
import org.jboss.dashboard.LocaleManager;
import org.jboss.dashboard.ui.NavigationManager;
import org.jboss.dashboard.factory.Factory;
import org.jboss.dashboard.workspace.Panel;
import org.jboss.dashboard.workspace.Parameters;
import org.jboss.dashboard.workspace.Panel;
import org.jboss.dashboard.workspace.Parameters;

public final class render_005ftabbed_005fregion_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList(2);
    _jspx_dependants.add("/section/../common/global.jsp");
    _jspx_dependants.add("/section/render_panel_content.jsp");
  }

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fflush_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fflush_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.release();
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.release();
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.release();
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.release();
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

    java.lang.Object _jspx_regionId_1 = null;
    java.lang.Object _jspx_regionDescription_2 = null;
    java.lang.Object _jspx_value_3 = null;
    java.lang.Object _jspx_selected_1 = null;
    java.lang.Object _jspx_value_2 = null;
    java.lang.Object _jspx_value_1 = null;
    java.lang.Object _jspx_jsp_1 = null;
    java.lang.Object _jspx_panelTitle_1 = null;
    java.lang.Object _jspx_editMode_2 = null;
    java.lang.Object _jspx_jsp_3 = null;
    java.lang.Object _jspx_index_1 = null;

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
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");

    LocaleManager localeManager = LocaleManager.lookup();
    NavigationManager navigationManager = NavigationManager.lookup();
    Section currentSection = navigationManager.getCurrentSection();
    Workspace currentWorkspace = navigationManager.getCurrentWorkspace();
    Locale currentLocale = localeManager.getCurrentLocale();
    boolean adminMode = navigationManager.userIsAdminInCurrentWorkspace();

      out.write('\n');
      //  i18n:bundle
      java.util.ResourceBundle bundle = null;
      org.apache.taglibs.i18n.BundleTag _jspx_th_i18n_005fbundle_005f0 = (org.apache.taglibs.i18n.BundleTag) _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.get(org.apache.taglibs.i18n.BundleTag.class);
      _jspx_th_i18n_005fbundle_005f0.setPageContext(_jspx_page_context);
      _jspx_th_i18n_005fbundle_005f0.setParent(null);
      // /section/../common/global.jsp(40,0) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setId("bundle");
      // /section/../common/global.jsp(40,0) name = baseName type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setBaseName("org.jboss.dashboard.ui.messages");
      // /section/../common/global.jsp(40,0) name = locale type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setLocale(localeManager.getCurrentLocale());
      int _jspx_eval_i18n_005fbundle_005f0 = _jspx_th_i18n_005fbundle_005f0.doStartTag();
      bundle = (java.util.ResourceBundle) _jspx_page_context.findAttribute("bundle");
      if (_jspx_th_i18n_005fbundle_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.reuse(_jspx_th_i18n_005fbundle_005f0);
        return;
      }
      bundle = (java.util.ResourceBundle) _jspx_page_context.findAttribute("bundle");
      _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.reuse(_jspx_th_i18n_005fbundle_005f0);
      out.write('\n');
      out.write('\n');
      out.write('\n');
      out.write('\n');
      //  mvc:formatter
      org.jboss.dashboard.ui.taglib.formatter.FormatterTag _jspx_th_mvc_005fformatter_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FormatterTag) _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FormatterTag.class);
      _jspx_th_mvc_005fformatter_005f0.setPageContext(_jspx_page_context);
      _jspx_th_mvc_005fformatter_005f0.setParent(null);
      // /section/render_tabbed_region.jsp(25,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_mvc_005fformatter_005f0.setName("org.jboss.dashboard.ui.formatters.RenderTabbedRegionFormatter");
      int _jspx_eval_mvc_005fformatter_005f0 = _jspx_th_mvc_005fformatter_005f0.doStartTag();
      if (_jspx_eval_mvc_005fformatter_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
        if (_jspx_eval_mvc_005fformatter_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.pushBody();
          _jspx_th_mvc_005fformatter_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
          _jspx_th_mvc_005fformatter_005f0.doInitBody();
        }
        do {
          out.write("\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f0.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /section/render_tabbed_region.jsp(26,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f0.setName("regionStartWithoutTitle");
          int _jspx_eval_mvc_005ffragment_005f0 = _jspx_th_mvc_005ffragment_005f0.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f0.doInitBody();
            }
            do {
              out.write("\n");
              out.write("<table cellpadding=\"0\" cellspacing=\"");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f0.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f0);
              // /section/render_tabbed_region.jsp(27,36) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f0.setName("cellspacingPanels");
              int _jspx_eval_mvc_005ffragmentValue_005f0 = _jspx_th_mvc_005ffragmentValue_005f0.doStartTag();
              if (_jspx_th_mvc_005ffragmentValue_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f0);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f0);
              out.write("\" border=\"0\" width=\"100%\" >\n");
              out.write("    ");
              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f0.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_mvc_005ffragment_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_mvc_005ffragment_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f0);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f0);
          out.write("\n");
          out.write("    ");
          out.write("\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f1.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /section/render_tabbed_region.jsp(30,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f1.setName("regionStartWithTitle");
          int _jspx_eval_mvc_005ffragment_005f1 = _jspx_th_mvc_005ffragment_005f1.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f1.doInitBody();
            }
            do {
              out.write("\n");
              out.write("        ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f1.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f1);
              // /section/render_tabbed_region.jsp(31,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f1.setName("numPanels");
              // /section/render_tabbed_region.jsp(31,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f1.setId("numPanels");
              int _jspx_eval_mvc_005ffragmentValue_005f1 = _jspx_th_mvc_005ffragmentValue_005f1.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object numPanels = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f1.doInitBody();
                }
                numPanels = (java.lang.Object) _jspx_page_context.findAttribute("numPanels");
                do {
                  out.write("\n");
                  out.write("            ");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f2 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f2.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f1);
                  // /section/render_tabbed_region.jsp(32,12) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f2.setName("regionId");
                  // /section/render_tabbed_region.jsp(32,12) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f2.setId("regionId");
                  int _jspx_eval_mvc_005ffragmentValue_005f2 = _jspx_th_mvc_005ffragmentValue_005f2.doStartTag();
                  if (_jspx_eval_mvc_005ffragmentValue_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                    java.lang.Object regionId = null;
                    if (_jspx_eval_mvc_005ffragmentValue_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.pushBody();
                      _jspx_th_mvc_005ffragmentValue_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                      _jspx_th_mvc_005ffragmentValue_005f2.doInitBody();
                    }
                    regionId = (java.lang.Object) _jspx_page_context.findAttribute("regionId");
                    do {
                      out.write("\n");
                      out.write("                ");
                      //  mvc:fragmentValue
                      org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f3 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                      _jspx_th_mvc_005ffragmentValue_005f3.setPageContext(_jspx_page_context);
                      _jspx_th_mvc_005ffragmentValue_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f2);
                      // /section/render_tabbed_region.jsp(33,16) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f3.setName("regionDescription");
                      // /section/render_tabbed_region.jsp(33,16) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f3.setId("regionDescription");
                      int _jspx_eval_mvc_005ffragmentValue_005f3 = _jspx_th_mvc_005ffragmentValue_005f3.doStartTag();
                      if (_jspx_eval_mvc_005ffragmentValue_005f3 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                        java.lang.Object regionDescription = null;
                        if (_jspx_eval_mvc_005ffragmentValue_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                          out = _jspx_page_context.pushBody();
                          _jspx_th_mvc_005ffragmentValue_005f3.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                          _jspx_th_mvc_005ffragmentValue_005f3.doInitBody();
                        }
                        regionDescription = (java.lang.Object) _jspx_page_context.findAttribute("regionDescription");
                        do {
                          out.write("\n");
                          out.write("<div>\n");
                          out.write("    <div style=\" display:none;  background-color: #404040;\" id=\"regionDropZoneContainer");
                          out.print(regionId);
                          out.write("\">\n");
                          out.write("        <div id=\"regionDropZone_");
                          out.print(regionId);
                          out.write("\" style=\"padding:1px; height:18px; vertical-align:bottom; text-align:left;\">\n");
                          out.write("            <b style=\"padding:4px 0 0 10px; color: #FFFFFF;\">");
                          out.print(regionDescription);
                          out.write("</b>\n");
                          out.write("        </div>\n");
                          out.write("        ");
 if (((Integer) numPanels).intValue() == 0) {
                          out.write("\n");
                          out.write("        <div style=\"Background-Color: #ECECEC; height:30px; text-align:center; padding:5px; padding-top:10px;\">\n");
                          out.write("            ");
                          if (_jspx_meth_i18n_005fmessage_005f0(_jspx_th_mvc_005ffragmentValue_005f3, _jspx_page_context))
                            return;
                          out.write("\n");
                          out.write("        </div>\n");
                          out.write("        ");
}
                          out.write("\n");
                          out.write("    </div>\n");
                          out.write("    <script type=\"text/javascript\" language=\"javascript\" defer=\"defer\">\n");
                          out.write("        setTimeout(\"doDropable('regionDropZone_");
                          out.print(regionId);
                          out.write("', '");
                          out.print(regionId);
                          out.write("', '");
                          out.print(numPanels);
                          out.write("');\",10);\n");
                          out.write("    </script>\n");
                          out.write("</div>\n");
                          out.write("<table cellpadding=\"0\" cellspacing=\"");
                          //  mvc:fragmentValue
                          org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f4 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                          _jspx_th_mvc_005ffragmentValue_005f4.setPageContext(_jspx_page_context);
                          _jspx_th_mvc_005ffragmentValue_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
                          // /section/render_tabbed_region.jsp(49,36) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                          _jspx_th_mvc_005ffragmentValue_005f4.setName("cellspacingPanels");
                          int _jspx_eval_mvc_005ffragmentValue_005f4 = _jspx_th_mvc_005ffragmentValue_005f4.doStartTag();
                          if (_jspx_th_mvc_005ffragmentValue_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                            _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f4);
                            return;
                          }
                          _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f4);
                          out.write("\" border=\"0\" width=\"100%\" >\n");
                          out.write("                ");
                          int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f3.doAfterBody();
                          regionDescription = (java.lang.Object) _jspx_page_context.findAttribute("regionDescription");
                          if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                            break;
                        } while (true);
                        if (_jspx_eval_mvc_005ffragmentValue_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                          out = _jspx_page_context.popBody();
                        }
                      }
                      if (_jspx_th_mvc_005ffragmentValue_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                        _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f3);
                        return;
                      }
                      _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f3);
                      out.write("\n");
                      out.write("            ");
                      int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f2.doAfterBody();
                      regionId = (java.lang.Object) _jspx_page_context.findAttribute("regionId");
                      if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                        break;
                    } while (true);
                    if (_jspx_eval_mvc_005ffragmentValue_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.popBody();
                    }
                  }
                  if (_jspx_th_mvc_005ffragmentValue_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f2);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f2);
                  out.write("\n");
                  out.write("        ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f1.doAfterBody();
                  numPanels = (java.lang.Object) _jspx_page_context.findAttribute("numPanels");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f1);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f1);
              out.write("\n");
              out.write("    ");
              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f1.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_mvc_005ffragment_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_mvc_005ffragment_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f1);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f1);
          out.write("\n");
          out.write("    ");
          out.write("\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f2(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("    ");
          out.write("\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f3(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("    ");
          out.write("\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f4 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f4.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /section/render_tabbed_region.jsp(66,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f4.setName("outputTab");
          int _jspx_eval_mvc_005ffragment_005f4 = _jspx_th_mvc_005ffragment_005f4.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f4 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f4 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f4.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f4.doInitBody();
            }
            do {
              out.write("\n");
              out.write("        ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f5 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f5.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f4);
              // /section/render_tabbed_region.jsp(67,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f5.setName("panel");
              // /section/render_tabbed_region.jsp(67,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f5.setId("panel");
              int _jspx_eval_mvc_005ffragmentValue_005f5 = _jspx_th_mvc_005ffragmentValue_005f5.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f5 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object panel = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f5 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f5.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f5.doInitBody();
                }
                panel = (java.lang.Object) _jspx_page_context.findAttribute("panel");
                do {
                  out.write("\n");
                  out.write("            ");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f6 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f6.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                  // /section/render_tabbed_region.jsp(68,12) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f6.setName("selected");
                  // /section/render_tabbed_region.jsp(68,12) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f6.setId("selected");
                  int _jspx_eval_mvc_005ffragmentValue_005f6 = _jspx_th_mvc_005ffragmentValue_005f6.doStartTag();
                  if (_jspx_eval_mvc_005ffragmentValue_005f6 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                    java.lang.Object selected = null;
                    if (_jspx_eval_mvc_005ffragmentValue_005f6 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.pushBody();
                      _jspx_th_mvc_005ffragmentValue_005f6.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                      _jspx_th_mvc_005ffragmentValue_005f6.doInitBody();
                    }
                    selected = (java.lang.Object) _jspx_page_context.findAttribute("selected");
                    do {
                      out.write("\n");
                      out.write("                        <td\n");

    if (((Boolean) selected).booleanValue()) {

                      out.write("\n");
                      out.write("                            class=\"current\"\n");

    }

                      out.write("\n");
                      out.write("                        >\n");
                      out.write("                            <div id='Tab_For_Panel");
                      out.print(((Panel)panel).getPanelId());
                      out.write('\'');
                      out.write('\n');

    if (adminMode) {

                      out.write("\n");
                      out.write("                                 class=\"popupDraggable\" style=\"cursor:move; position:relative;\"\n");

    }

                      out.write("\n");
                      out.write("                            >\n");
                      out.write("                                <span style=\"display:none\">Panel:");
                      out.print(((Panel)panel).getPanelId());
                      out.write("</span>\n");
                      out.write("                                <a id=\"");
                      //  factory:encode
                      org.jboss.dashboard.ui.taglib.factory.EncodeTag _jspx_th_factory_005fencode_005f0 = (org.jboss.dashboard.ui.taglib.factory.EncodeTag) _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.EncodeTag.class);
                      _jspx_th_factory_005fencode_005f0.setPageContext(_jspx_page_context);
                      _jspx_th_factory_005fencode_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f6);
                      // /section/render_tabbed_region.jsp(88,39) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_factory_005fencode_005f0.setName("region_tab_" + ((Panel)panel).getPanelId());
                      int _jspx_eval_factory_005fencode_005f0 = _jspx_th_factory_005fencode_005f0.doStartTag();
                      if (_jspx_th_factory_005fencode_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                        _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f0);
                        return;
                      }
                      _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f0);
                      out.write("\"\n");
                      out.write("                                    href=\"");
                      //  mvc:fragmentValue
                      org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f7 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                      _jspx_th_mvc_005ffragmentValue_005f7.setPageContext(_jspx_page_context);
                      _jspx_th_mvc_005ffragmentValue_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f6);
                      // /section/render_tabbed_region.jsp(89,42) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f7.setName("url");
                      int _jspx_eval_mvc_005ffragmentValue_005f7 = _jspx_th_mvc_005ffragmentValue_005f7.doStartTag();
                      if (_jspx_th_mvc_005ffragmentValue_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                        _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f7);
                        return;
                      }
                      _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f7);
                      out.write("\"\n");
                      out.write("                                    onclick=\"if ( window.disableMenuForPanel ) {\n");
                      out.write("                                        window.disableMenuForPanel = false; return false;\n");
                      out.write("                                        } else\n");
                      out.write("                                        return true\">\n");
                      out.write("                                    <span>");
                      //  mvc:fragmentValue
                      org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f8 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                      _jspx_th_mvc_005ffragmentValue_005f8.setPageContext(_jspx_page_context);
                      _jspx_th_mvc_005ffragmentValue_005f8.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f6);
                      // /section/render_tabbed_region.jsp(94,42) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f8.setName("tabTitle");
                      int _jspx_eval_mvc_005ffragmentValue_005f8 = _jspx_th_mvc_005ffragmentValue_005f8.doStartTag();
                      if (_jspx_th_mvc_005ffragmentValue_005f8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                        _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f8);
                        return;
                      }
                      _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f8);
                      out.write("</span>\n");
                      out.write("                                </a>\n");
                      out.write("                            </div>\n");
                      out.write("                            <script type=\"text/javascript\" defer>\n");
                      out.write("                                if (!IE) setAjax('");
                      //  factory:encode
                      org.jboss.dashboard.ui.taglib.factory.EncodeTag _jspx_th_factory_005fencode_005f1 = (org.jboss.dashboard.ui.taglib.factory.EncodeTag) _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.EncodeTag.class);
                      _jspx_th_factory_005fencode_005f1.setPageContext(_jspx_page_context);
                      _jspx_th_factory_005fencode_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f6);
                      // /section/render_tabbed_region.jsp(98,50) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_factory_005fencode_005f1.setName("region_tab_" + ((Panel)panel).getPanelId());
                      int _jspx_eval_factory_005fencode_005f1 = _jspx_th_factory_005fencode_005f1.doStartTag();
                      if (_jspx_th_factory_005fencode_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                        _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f1);
                        return;
                      }
                      _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f1);
                      out.write("');\n");

    if(adminMode) {

                      out.write("\n");
                      out.write("                                setTimeout(\"doDraggable('Tab_For_Panel");
                      out.print(((Panel)panel).getPanelId());
                      out.write("')\",10);\n");

    }

                      out.write("\n");
                      out.write("                            </script>\n");
                      out.write("                        </td>\n");
                      out.write("            ");
                      int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f6.doAfterBody();
                      selected = (java.lang.Object) _jspx_page_context.findAttribute("selected");
                      if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                        break;
                    } while (true);
                    if (_jspx_eval_mvc_005ffragmentValue_005f6 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.popBody();
                    }
                  }
                  if (_jspx_th_mvc_005ffragmentValue_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f6);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f6);
                  out.write("\n");
                  out.write("        ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f5.doAfterBody();
                  panel = (java.lang.Object) _jspx_page_context.findAttribute("panel");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f5 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f5);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f5);
              out.write("\n");
              out.write("    ");
              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f4.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_mvc_005ffragment_005f4 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_mvc_005ffragment_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f4);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f4);
          out.write("\n");
          out.write("    ");
          out.write("\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f5(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("    ");
          out.write("\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f6(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("    ");
          out.write("\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f7(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("    ");
          out.write("\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f8(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("    ");
          out.write("\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f9 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f9.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f9.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /section/render_tabbed_region.jsp(131,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f9.setName("panelOutputStart");
          int _jspx_eval_mvc_005ffragment_005f9 = _jspx_th_mvc_005ffragment_005f9.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f9 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f9 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f9.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f9.doInitBody();
            }
            do {
              out.write("\n");
              out.write("    <tr>\n");
              out.write("        <td valign=\"top\" align=\"left\" height=\"100%\" width=\"");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f9 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f9.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f9.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f9);
              // /section/render_tabbed_region.jsp(133,59) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f9.setName("recommendedWidth");
              int _jspx_eval_mvc_005ffragmentValue_005f9 = _jspx_th_mvc_005ffragmentValue_005f9.doStartTag();
              if (_jspx_th_mvc_005ffragmentValue_005f9.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f9);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f9);
              out.write("\">\n");
              out.write("    ");
              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f9.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_mvc_005ffragment_005f9 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_mvc_005ffragment_005f9.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f9);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f9);
          out.write("\n");
          out.write("    ");
          out.write("\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f10 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f10.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f10.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /section/render_tabbed_region.jsp(136,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f10.setName("panelContentWithoutMenu");
          int _jspx_eval_mvc_005ffragment_005f10 = _jspx_th_mvc_005ffragment_005f10.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f10 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f10 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f10.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f10.doInitBody();
            }
            do {
              out.write("\n");
              out.write("        ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f10 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f10.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f10.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f10);
              // /section/render_tabbed_region.jsp(137,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f10.setName("panel");
              // /section/render_tabbed_region.jsp(137,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f10.setId("panel");
              int _jspx_eval_mvc_005ffragmentValue_005f10 = _jspx_th_mvc_005ffragmentValue_005f10.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f10 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object panel = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f10 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f10.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f10.doInitBody();
                }
                panel = (java.lang.Object) _jspx_page_context.findAttribute("panel");
                do {
                  out.write("\n");
                  out.write("            <div id=\"Region_Panel_Container_");
                  out.print(((Panel)panel).getPanelId());
                  out.write("\"\n");
                  out.write("                    ");
                  out.print(((Panel) panel).getHeight() > 0 ? "style=\"height:" + ((Panel) panel).getHeight() + "\"" : "");
                  out.write(">\n");
                  out.write("                ");
                  out.write("\n");
                  out.write("\n");
                  out.write("\n");
                  out.write("\n");
                  out.write("\n");
                  out.write("\n");
                  out.write("\n");
                  //  mvc:formatter
                  org.jboss.dashboard.ui.taglib.formatter.FormatterTag _jspx_th_mvc_005fformatter_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FormatterTag) _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FormatterTag.class);
                  _jspx_th_mvc_005fformatter_005f1.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005fformatter_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
                  // /section/render_panel_content.jsp(24,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005fformatter_005f1.setName("org.jboss.dashboard.ui.formatters.RenderPanelContentFormatter");
                  int _jspx_eval_mvc_005fformatter_005f1 = _jspx_th_mvc_005fformatter_005f1.doStartTag();
                  if (_jspx_eval_mvc_005fformatter_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                    if (_jspx_eval_mvc_005fformatter_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.pushBody();
                      _jspx_th_mvc_005fformatter_005f1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                      _jspx_th_mvc_005fformatter_005f1.doInitBody();
                    }
                    do {
                      out.write("\n");
                      out.write("    ");
                      //  mvc:formatterParam
                      org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag _jspx_th_mvc_005fformatterParam_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag) _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag.class);
                      _jspx_th_mvc_005fformatterParam_005f0.setPageContext(_jspx_page_context);
                      _jspx_th_mvc_005fformatterParam_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f1);
                      // /section/render_panel_content.jsp(25,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005fformatterParam_005f0.setName("panel");
                      // /section/render_panel_content.jsp(25,4) name = value type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005fformatterParam_005f0.setValue(panel);
                      int _jspx_eval_mvc_005fformatterParam_005f0 = _jspx_th_mvc_005fformatterParam_005f0.doStartTag();
                      if (_jspx_th_mvc_005fformatterParam_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                        _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_mvc_005fformatterParam_005f0);
                        return;
                      }
                      _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_mvc_005fformatterParam_005f0);
                      out.write("\n");
                      out.write("    ");
                      if (_jspx_meth_mvc_005ffragment_005f11(_jspx_th_mvc_005fformatter_005f1, _jspx_page_context))
                        return;
                      out.write("\n");
                      out.write("    ");
                      //  mvc:fragment
                      org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f12 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
                      _jspx_th_mvc_005ffragment_005f12.setPageContext(_jspx_page_context);
                      _jspx_th_mvc_005ffragment_005f12.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f1);
                      // /section/render_panel_content.jsp(33,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragment_005f12.setName("outputStart");
                      int _jspx_eval_mvc_005ffragment_005f12 = _jspx_th_mvc_005ffragment_005f12.doStartTag();
                      if (_jspx_eval_mvc_005ffragment_005f12 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                        if (_jspx_eval_mvc_005ffragment_005f12 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                          out = _jspx_page_context.pushBody();
                          _jspx_th_mvc_005ffragment_005f12.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                          _jspx_th_mvc_005ffragment_005f12.doInitBody();
                        }
                        do {
                          out.write("\n");
                          out.write("        <table class=\"");
                          //  mvc:fragmentValue
                          org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f11 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                          _jspx_th_mvc_005ffragmentValue_005f11.setPageContext(_jspx_page_context);
                          _jspx_th_mvc_005ffragmentValue_005f11.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f12);
                          // /section/render_panel_content.jsp(34,22) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                          _jspx_th_mvc_005ffragmentValue_005f11.setName("tableClass");
                          int _jspx_eval_mvc_005ffragmentValue_005f11 = _jspx_th_mvc_005ffragmentValue_005f11.doStartTag();
                          if (_jspx_th_mvc_005ffragmentValue_005f11.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                            _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f11);
                            return;
                          }
                          _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f11);
                          out.write("\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">\n");
                          out.write("        <tr>\n");
                          out.write("        <td width=\"100%\"  height=\"100%\" valign=\"top\" align=\"left\" id=\"");
                          //  mvc:fragmentValue
                          org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f12 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                          _jspx_th_mvc_005ffragmentValue_005f12.setPageContext(_jspx_page_context);
                          _jspx_th_mvc_005ffragmentValue_005f12.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f12);
                          // /section/render_panel_content.jsp(36,70) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                          _jspx_th_mvc_005ffragmentValue_005f12.setName("panelUID");
                          int _jspx_eval_mvc_005ffragmentValue_005f12 = _jspx_th_mvc_005ffragmentValue_005f12.doStartTag();
                          if (_jspx_th_mvc_005ffragmentValue_005f12.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                            _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f12);
                            return;
                          }
                          _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f12);
                          out.write("\">\n");
                          out.write("    ");
                          int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f12.doAfterBody();
                          if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                            break;
                        } while (true);
                        if (_jspx_eval_mvc_005ffragment_005f12 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                          out = _jspx_page_context.popBody();
                        }
                      }
                      if (_jspx_th_mvc_005ffragment_005f12.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                        _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f12);
                        return;
                      }
                      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f12);
                      out.write("\n");
                      out.write("    ");
                      if (_jspx_meth_mvc_005ffragment_005f13(_jspx_th_mvc_005fformatter_005f1, _jspx_page_context))
                        return;
                      out.write("\n");
                      out.write("    ");
                      if (_jspx_meth_mvc_005ffragment_005f14(_jspx_th_mvc_005fformatter_005f1, _jspx_page_context))
                        return;
                      out.write("\n");
                      out.write("    ");
                      //  mvc:fragment
                      org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f15 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
                      _jspx_th_mvc_005ffragment_005f15.setPageContext(_jspx_page_context);
                      _jspx_th_mvc_005ffragment_005f15.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f1);
                      // /section/render_panel_content.jsp(48,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragment_005f15.setName("output");
                      int _jspx_eval_mvc_005ffragment_005f15 = _jspx_th_mvc_005ffragment_005f15.doStartTag();
                      if (_jspx_eval_mvc_005ffragment_005f15 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                        if (_jspx_eval_mvc_005ffragment_005f15 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                          out = _jspx_page_context.pushBody();
                          _jspx_th_mvc_005ffragment_005f15.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                          _jspx_th_mvc_005ffragment_005f15.doInitBody();
                        }
                        do {
                          out.write("\n");
                          out.write("    ");
                          //  mvc:fragmentValue
                          org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f13 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                          _jspx_th_mvc_005ffragmentValue_005f13.setPageContext(_jspx_page_context);
                          _jspx_th_mvc_005ffragmentValue_005f13.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f15);
                          // /section/render_panel_content.jsp(49,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                          _jspx_th_mvc_005ffragmentValue_005f13.setName("jsp");
                          // /section/render_panel_content.jsp(49,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                          _jspx_th_mvc_005ffragmentValue_005f13.setId("jsp");
                          int _jspx_eval_mvc_005ffragmentValue_005f13 = _jspx_th_mvc_005ffragmentValue_005f13.doStartTag();
                          if (_jspx_eval_mvc_005ffragmentValue_005f13 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                            java.lang.Object jsp = null;
                            if (_jspx_eval_mvc_005ffragmentValue_005f13 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_mvc_005ffragmentValue_005f13.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_mvc_005ffragmentValue_005f13.doInitBody();
                            }
                            jsp = (java.lang.Object) _jspx_page_context.findAttribute("jsp");
                            do {
                              out.write("\n");
                              out.write("        ");
                              if (_jspx_meth_mvc_005finclude_005f0(_jspx_th_mvc_005ffragmentValue_005f13, _jspx_page_context))
                              return;
                              out.write("\n");
                              out.write("        ");
                              if (_jspx_meth_mvc_005finclude_005f1(_jspx_th_mvc_005ffragmentValue_005f13, _jspx_page_context))
                              return;
                              out.write("\n");
                              out.write("        ");
 try { 
                              out.write("\n");
                              out.write("            ");
                              //  mvc:include
                              org.jboss.dashboard.ui.taglib.JSPIncludeTag _jspx_th_mvc_005finclude_005f2 = (org.jboss.dashboard.ui.taglib.JSPIncludeTag) _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fflush_005fnobody.get(org.jboss.dashboard.ui.taglib.JSPIncludeTag.class);
                              _jspx_th_mvc_005finclude_005f2.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005finclude_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f13);
                              // /section/render_panel_content.jsp(53,12) name = page type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005finclude_005f2.setPage( (String)jsp );
                              // /section/render_panel_content.jsp(53,12) name = flush type = java.lang.String reqTime = false required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005finclude_005f2.setFlush(new Boolean(true));
                              int _jspx_eval_mvc_005finclude_005f2 = _jspx_th_mvc_005finclude_005f2.doStartTag();
                              if (_jspx_th_mvc_005finclude_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fflush_005fnobody.reuse(_jspx_th_mvc_005finclude_005f2);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fflush_005fnobody.reuse(_jspx_th_mvc_005finclude_005f2);
                              out.write("\n");
                              out.write("        ");
 } finally {
            try {
                // Always end panel rendering. 
                              out.write("\n");
                              out.write("                ");
                              if (_jspx_meth_mvc_005finclude_005f3(_jspx_th_mvc_005ffragmentValue_005f13, _jspx_page_context))
                              return;

                ((Panel)panel).getProvider().getDriver().fireAfterRenderPanel((Panel)panel, request, response);
            } finally {
                // Always reset current panel variable.
                request.removeAttribute(Parameters.RENDER_PANEL);
            }
        } 
                              out.write("\n");
                              out.write("    ");
                              int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f13.doAfterBody();
                              jsp = (java.lang.Object) _jspx_page_context.findAttribute("jsp");
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                            } while (true);
                            if (_jspx_eval_mvc_005ffragmentValue_005f13 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                            }
                          }
                          if (_jspx_th_mvc_005ffragmentValue_005f13.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                            _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f13);
                            return;
                          }
                          _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f13);
                          out.write("\n");
                          out.write("    ");
                          int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f15.doAfterBody();
                          if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                            break;
                        } while (true);
                        if (_jspx_eval_mvc_005ffragment_005f15 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                          out = _jspx_page_context.popBody();
                        }
                      }
                      if (_jspx_th_mvc_005ffragment_005f15.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                        _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f15);
                        return;
                      }
                      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f15);
                      out.write("\n");
                      out.write("    ");
                      if (_jspx_meth_mvc_005ffragment_005f16(_jspx_th_mvc_005fformatter_005f1, _jspx_page_context))
                        return;
                      out.write('\n');
                      int evalDoAfterBody = _jspx_th_mvc_005fformatter_005f1.doAfterBody();
                      if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                        break;
                    } while (true);
                    if (_jspx_eval_mvc_005fformatter_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.popBody();
                    }
                  }
                  if (_jspx_th_mvc_005fformatter_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.reuse(_jspx_th_mvc_005fformatter_005f1);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.reuse(_jspx_th_mvc_005fformatter_005f1);
                  out.write("\n");
                  out.write("            </div>\n");
                  out.write("        ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f10.doAfterBody();
                  panel = (java.lang.Object) _jspx_page_context.findAttribute("panel");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f10 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f10.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f10);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f10);
              out.write("\n");
              out.write("    ");
              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f10.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_mvc_005ffragment_005f10 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_mvc_005ffragment_005f10.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f10);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f10);
          out.write("\n");
          out.write("    ");
          out.write("\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f17 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f17.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f17.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /section/render_tabbed_region.jsp(145,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f17.setName("panelContentWithMenu");
          int _jspx_eval_mvc_005ffragment_005f17 = _jspx_th_mvc_005ffragment_005f17.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f17 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f17 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f17.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f17.doInitBody();
            }
            do {
              out.write("\n");
              out.write("        ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f14 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f14.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f14.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f17);
              // /section/render_tabbed_region.jsp(146,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f14.setName("panel");
              // /section/render_tabbed_region.jsp(146,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f14.setId("panel");
              int _jspx_eval_mvc_005ffragmentValue_005f14 = _jspx_th_mvc_005ffragmentValue_005f14.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f14 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object panel = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f14 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f14.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f14.doInitBody();
                }
                panel = (java.lang.Object) _jspx_page_context.findAttribute("panel");
                do {
                  out.write("\n");
                  out.write("            ");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f15 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f15.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f15.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f14);
                  // /section/render_tabbed_region.jsp(147,12) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f15.setName("panelTitle");
                  // /section/render_tabbed_region.jsp(147,12) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f15.setId("panelTitle");
                  int _jspx_eval_mvc_005ffragmentValue_005f15 = _jspx_th_mvc_005ffragmentValue_005f15.doStartTag();
                  if (_jspx_eval_mvc_005ffragmentValue_005f15 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                    java.lang.Object panelTitle = null;
                    if (_jspx_eval_mvc_005ffragmentValue_005f15 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.pushBody();
                      _jspx_th_mvc_005ffragmentValue_005f15.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                      _jspx_th_mvc_005ffragmentValue_005f15.doInitBody();
                    }
                    panelTitle = (java.lang.Object) _jspx_page_context.findAttribute("panelTitle");
                    do {
                      out.write("\n");
                      out.write("                ");
                      //  mvc:fragmentValue
                      org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f16 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                      _jspx_th_mvc_005ffragmentValue_005f16.setPageContext(_jspx_page_context);
                      _jspx_th_mvc_005ffragmentValue_005f16.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f15);
                      // /section/render_tabbed_region.jsp(148,16) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f16.setName("editMode");
                      // /section/render_tabbed_region.jsp(148,16) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f16.setId("editMode");
                      int _jspx_eval_mvc_005ffragmentValue_005f16 = _jspx_th_mvc_005ffragmentValue_005f16.doStartTag();
                      if (_jspx_eval_mvc_005ffragmentValue_005f16 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                        java.lang.Object editMode = null;
                        if (_jspx_eval_mvc_005ffragmentValue_005f16 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                          out = _jspx_page_context.pushBody();
                          _jspx_th_mvc_005ffragmentValue_005f16.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                          _jspx_th_mvc_005ffragmentValue_005f16.doInitBody();
                        }
                        editMode = (java.lang.Object) _jspx_page_context.findAttribute("editMode");
                        do {
                          out.write("\n");
                          out.write("                    <div id=\"Region_Panel_Link_Container");
                          out.print(((Panel)panel).getPanelId());
                          out.write("\"\n");
                          out.write("                         style=\"height:0px; position:relative\">\n");
                          out.write("                        <div id=\"Region_Panel_Menu_Link");
                          out.print(((Panel)panel).getPanelId());
                          out.write("\"\n");
                          out.write("                             style=\"text-align: right; height:0px; width:100%; border:none; position: absolute; top:-4px; left:4px; opacity: 0.2;\"\n");
                          out.write("                             onmouseover=\"$('Region_Panel_Menu_Link");
                          out.print(((Panel)panel).getPanelId());
                          out.write("').setOpacity(1);\"\n");
                          out.write("                             onmouseout=\"$('Region_Panel_Menu_Link");
                          out.print(((Panel)panel).getPanelId());
                          out.write("').setOpacity(0.2);\">\n");
                          out.write("                            ");

                                request.setAttribute("panel", panel);
                                String configString = ((Properties) Factory.lookup("org.jboss.dashboard.ui.formatters.DisplayConfiguration")).getProperty("panelMenuRenderPage");
                            
                          out.write("\n");
                          out.write("                            ");
                          org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, configString + ((configString).indexOf('?')>0? '&': '?') + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode(String.valueOf(String.valueOf(panelTitle)), request.getCharacterEncoding()), out, true);
                          out.write("\n");
                          out.write("                            ");

                                request.removeAttribute("panel");
                            
                          out.write("\n");
                          out.write("                        </div>\n");
                          out.write("                    </div>\n");
                          out.write("                    <div id=\"Region_Panel_Container_");
                          out.print(((Panel)panel).getPanelId());
                          out.write("\"\n");
                          out.write("                         style=\" ");
                          out.print(Boolean.TRUE.equals(editMode) ? "" : "border: solid 1px #CCCCCC; ");
                          out.write("margin: 0; ");
                          out.print(((Panel)panel).getHeight()>0?"height: "+((Panel)panel).getHeight():"");
                          out.write("\">\n");
                          out.write("                        ");
                          out.write("\n");
                          out.write("\n");
                          out.write("\n");
                          out.write("\n");
                          out.write("\n");
                          out.write("\n");
                          out.write("\n");
                          //  mvc:formatter
                          org.jboss.dashboard.ui.taglib.formatter.FormatterTag _jspx_th_mvc_005fformatter_005f2 = (org.jboss.dashboard.ui.taglib.formatter.FormatterTag) _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FormatterTag.class);
                          _jspx_th_mvc_005fformatter_005f2.setPageContext(_jspx_page_context);
                          _jspx_th_mvc_005fformatter_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f16);
                          // /section/render_panel_content.jsp(24,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                          _jspx_th_mvc_005fformatter_005f2.setName("org.jboss.dashboard.ui.formatters.RenderPanelContentFormatter");
                          int _jspx_eval_mvc_005fformatter_005f2 = _jspx_th_mvc_005fformatter_005f2.doStartTag();
                          if (_jspx_eval_mvc_005fformatter_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                            if (_jspx_eval_mvc_005fformatter_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_mvc_005fformatter_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_mvc_005fformatter_005f2.doInitBody();
                            }
                            do {
                              out.write("\n");
                              out.write("    ");
                              //  mvc:formatterParam
                              org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag _jspx_th_mvc_005fformatterParam_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag) _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag.class);
                              _jspx_th_mvc_005fformatterParam_005f1.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005fformatterParam_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f2);
                              // /section/render_panel_content.jsp(25,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005fformatterParam_005f1.setName("panel");
                              // /section/render_panel_content.jsp(25,4) name = value type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005fformatterParam_005f1.setValue(panel);
                              int _jspx_eval_mvc_005fformatterParam_005f1 = _jspx_th_mvc_005fformatterParam_005f1.doStartTag();
                              if (_jspx_th_mvc_005fformatterParam_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_mvc_005fformatterParam_005f1);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_mvc_005fformatterParam_005f1);
                              out.write("\n");
                              out.write("    ");
                              if (_jspx_meth_mvc_005ffragment_005f18(_jspx_th_mvc_005fformatter_005f2, _jspx_page_context))
                              return;
                              out.write("\n");
                              out.write("    ");
                              //  mvc:fragment
                              org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f19 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
                              _jspx_th_mvc_005ffragment_005f19.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragment_005f19.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f2);
                              // /section/render_panel_content.jsp(33,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragment_005f19.setName("outputStart");
                              int _jspx_eval_mvc_005ffragment_005f19 = _jspx_th_mvc_005ffragment_005f19.doStartTag();
                              if (_jspx_eval_mvc_005ffragment_005f19 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_mvc_005ffragment_005f19 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_mvc_005ffragment_005f19.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_mvc_005ffragment_005f19.doInitBody();
                              }
                              do {
                              out.write("\n");
                              out.write("        <table class=\"");
                              //  mvc:fragmentValue
                              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f17 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                              _jspx_th_mvc_005ffragmentValue_005f17.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragmentValue_005f17.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f19);
                              // /section/render_panel_content.jsp(34,22) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f17.setName("tableClass");
                              int _jspx_eval_mvc_005ffragmentValue_005f17 = _jspx_th_mvc_005ffragmentValue_005f17.doStartTag();
                              if (_jspx_th_mvc_005ffragmentValue_005f17.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f17);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f17);
                              out.write("\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">\n");
                              out.write("        <tr>\n");
                              out.write("        <td width=\"100%\"  height=\"100%\" valign=\"top\" align=\"left\" id=\"");
                              //  mvc:fragmentValue
                              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f18 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                              _jspx_th_mvc_005ffragmentValue_005f18.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragmentValue_005f18.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f19);
                              // /section/render_panel_content.jsp(36,70) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f18.setName("panelUID");
                              int _jspx_eval_mvc_005ffragmentValue_005f18 = _jspx_th_mvc_005ffragmentValue_005f18.doStartTag();
                              if (_jspx_th_mvc_005ffragmentValue_005f18.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f18);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f18);
                              out.write("\">\n");
                              out.write("    ");
                              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f19.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_mvc_005ffragment_005f19 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_mvc_005ffragment_005f19.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f19);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f19);
                              out.write("\n");
                              out.write("    ");
                              if (_jspx_meth_mvc_005ffragment_005f20(_jspx_th_mvc_005fformatter_005f2, _jspx_page_context))
                              return;
                              out.write("\n");
                              out.write("    ");
                              if (_jspx_meth_mvc_005ffragment_005f21(_jspx_th_mvc_005fformatter_005f2, _jspx_page_context))
                              return;
                              out.write("\n");
                              out.write("    ");
                              //  mvc:fragment
                              org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f22 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
                              _jspx_th_mvc_005ffragment_005f22.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragment_005f22.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f2);
                              // /section/render_panel_content.jsp(48,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragment_005f22.setName("output");
                              int _jspx_eval_mvc_005ffragment_005f22 = _jspx_th_mvc_005ffragment_005f22.doStartTag();
                              if (_jspx_eval_mvc_005ffragment_005f22 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_mvc_005ffragment_005f22 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_mvc_005ffragment_005f22.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_mvc_005ffragment_005f22.doInitBody();
                              }
                              do {
                              out.write("\n");
                              out.write("    ");
                              //  mvc:fragmentValue
                              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f19 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                              _jspx_th_mvc_005ffragmentValue_005f19.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragmentValue_005f19.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f22);
                              // /section/render_panel_content.jsp(49,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f19.setName("jsp");
                              // /section/render_panel_content.jsp(49,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f19.setId("jsp");
                              int _jspx_eval_mvc_005ffragmentValue_005f19 = _jspx_th_mvc_005ffragmentValue_005f19.doStartTag();
                              if (_jspx_eval_mvc_005ffragmentValue_005f19 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              java.lang.Object jsp = null;
                              if (_jspx_eval_mvc_005ffragmentValue_005f19 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_mvc_005ffragmentValue_005f19.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_mvc_005ffragmentValue_005f19.doInitBody();
                              }
                              jsp = (java.lang.Object) _jspx_page_context.findAttribute("jsp");
                              do {
                              out.write("\n");
                              out.write("        ");
                              if (_jspx_meth_mvc_005finclude_005f4(_jspx_th_mvc_005ffragmentValue_005f19, _jspx_page_context))
                              return;
                              out.write("\n");
                              out.write("        ");
                              if (_jspx_meth_mvc_005finclude_005f5(_jspx_th_mvc_005ffragmentValue_005f19, _jspx_page_context))
                              return;
                              out.write("\n");
                              out.write("        ");
 try { 
                              out.write("\n");
                              out.write("            ");
                              //  mvc:include
                              org.jboss.dashboard.ui.taglib.JSPIncludeTag _jspx_th_mvc_005finclude_005f6 = (org.jboss.dashboard.ui.taglib.JSPIncludeTag) _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fflush_005fnobody.get(org.jboss.dashboard.ui.taglib.JSPIncludeTag.class);
                              _jspx_th_mvc_005finclude_005f6.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005finclude_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f19);
                              // /section/render_panel_content.jsp(53,12) name = page type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005finclude_005f6.setPage( (String)jsp );
                              // /section/render_panel_content.jsp(53,12) name = flush type = java.lang.String reqTime = false required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005finclude_005f6.setFlush(new Boolean(true));
                              int _jspx_eval_mvc_005finclude_005f6 = _jspx_th_mvc_005finclude_005f6.doStartTag();
                              if (_jspx_th_mvc_005finclude_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fflush_005fnobody.reuse(_jspx_th_mvc_005finclude_005f6);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fflush_005fnobody.reuse(_jspx_th_mvc_005finclude_005f6);
                              out.write("\n");
                              out.write("        ");
 } finally {
            try {
                // Always end panel rendering. 
                              out.write("\n");
                              out.write("                ");
                              if (_jspx_meth_mvc_005finclude_005f7(_jspx_th_mvc_005ffragmentValue_005f19, _jspx_page_context))
                              return;

                ((Panel)panel).getProvider().getDriver().fireAfterRenderPanel((Panel)panel, request, response);
            } finally {
                // Always reset current panel variable.
                request.removeAttribute(Parameters.RENDER_PANEL);
            }
        } 
                              out.write("\n");
                              out.write("    ");
                              int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f19.doAfterBody();
                              jsp = (java.lang.Object) _jspx_page_context.findAttribute("jsp");
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_mvc_005ffragmentValue_005f19 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_mvc_005ffragmentValue_005f19.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f19);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f19);
                              out.write("\n");
                              out.write("    ");
                              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f22.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_mvc_005ffragment_005f22 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_mvc_005ffragment_005f22.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f22);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f22);
                              out.write("\n");
                              out.write("    ");
                              if (_jspx_meth_mvc_005ffragment_005f23(_jspx_th_mvc_005fformatter_005f2, _jspx_page_context))
                              return;
                              out.write('\n');
                              int evalDoAfterBody = _jspx_th_mvc_005fformatter_005f2.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                            } while (true);
                            if (_jspx_eval_mvc_005fformatter_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                            }
                          }
                          if (_jspx_th_mvc_005fformatter_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                            _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.reuse(_jspx_th_mvc_005fformatter_005f2);
                            return;
                          }
                          _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.reuse(_jspx_th_mvc_005fformatter_005f2);
                          out.write("\n");
                          out.write("                    </div>\n");
                          out.write("                ");
                          int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f16.doAfterBody();
                          editMode = (java.lang.Object) _jspx_page_context.findAttribute("editMode");
                          if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                            break;
                        } while (true);
                        if (_jspx_eval_mvc_005ffragmentValue_005f16 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                          out = _jspx_page_context.popBody();
                        }
                      }
                      if (_jspx_th_mvc_005ffragmentValue_005f16.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                        _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f16);
                        return;
                      }
                      _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f16);
                      out.write("\n");
                      out.write("            ");
                      int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f15.doAfterBody();
                      panelTitle = (java.lang.Object) _jspx_page_context.findAttribute("panelTitle");
                      if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                        break;
                    } while (true);
                    if (_jspx_eval_mvc_005ffragmentValue_005f15 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.popBody();
                    }
                  }
                  if (_jspx_th_mvc_005ffragmentValue_005f15.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f15);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f15);
                  out.write("\n");
                  out.write("        ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f14.doAfterBody();
                  panel = (java.lang.Object) _jspx_page_context.findAttribute("panel");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f14 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f14.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f14);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f14);
              out.write("\n");
              out.write("    ");
              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f17.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_mvc_005ffragment_005f17 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_mvc_005ffragment_005f17.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f17);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f17);
          out.write("\n");
          out.write("    ");
          out.write("\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f24 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f24.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f24.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /section/render_tabbed_region.jsp(176,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f24.setName("panelDropRegion");
          int _jspx_eval_mvc_005ffragment_005f24 = _jspx_th_mvc_005ffragment_005f24.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f24 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f24 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f24.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f24.doInitBody();
            }
            do {
              out.write("\n");
              out.write("        ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f20 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f20.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f20.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f24);
              // /section/render_tabbed_region.jsp(177,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f20.setName("regionId");
              // /section/render_tabbed_region.jsp(177,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f20.setId("regionId");
              int _jspx_eval_mvc_005ffragmentValue_005f20 = _jspx_th_mvc_005ffragmentValue_005f20.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f20 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object regionId = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f20 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f20.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f20.doInitBody();
                }
                regionId = (java.lang.Object) _jspx_page_context.findAttribute("regionId");
                do {
                  out.write("\n");
                  out.write("            ");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f21 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f21.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f21.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f20);
                  // /section/render_tabbed_region.jsp(178,12) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f21.setName("index");
                  // /section/render_tabbed_region.jsp(178,12) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f21.setId("index");
                  int _jspx_eval_mvc_005ffragmentValue_005f21 = _jspx_th_mvc_005ffragmentValue_005f21.doStartTag();
                  if (_jspx_eval_mvc_005ffragmentValue_005f21 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                    java.lang.Object index = null;
                    if (_jspx_eval_mvc_005ffragmentValue_005f21 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.pushBody();
                      _jspx_th_mvc_005ffragmentValue_005f21.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                      _jspx_th_mvc_005ffragmentValue_005f21.doInitBody();
                    }
                    index = (java.lang.Object) _jspx_page_context.findAttribute("index");
                    do {
                      out.write("\n");
                      out.write("                <div style=\"overflow:hidden; background-color: #BBBBBB;border: 1px dashed #404040 ;display:none;\n");
                      out.write("                        height:");
                      //  mvc:fragmentValue
                      org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f22 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                      _jspx_th_mvc_005ffragmentValue_005f22.setPageContext(_jspx_page_context);
                      _jspx_th_mvc_005ffragmentValue_005f22.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f21);
                      // /section/render_tabbed_region.jsp(180,31) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f22.setName("height");
                      int _jspx_eval_mvc_005ffragmentValue_005f22 = _jspx_th_mvc_005ffragmentValue_005f22.doStartTag();
                      if (_jspx_th_mvc_005ffragmentValue_005f22.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                        _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f22);
                        return;
                      }
                      _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f22);
                      out.write(";\n");
                      out.write("                        width:");
                      //  mvc:fragmentValue
                      org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f23 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                      _jspx_th_mvc_005ffragmentValue_005f23.setPageContext(_jspx_page_context);
                      _jspx_th_mvc_005ffragmentValue_005f23.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f21);
                      // /section/render_tabbed_region.jsp(181,30) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f23.setName("width");
                      int _jspx_eval_mvc_005ffragmentValue_005f23 = _jspx_th_mvc_005ffragmentValue_005f23.doStartTag();
                      if (_jspx_th_mvc_005ffragmentValue_005f23.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                        _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f23);
                        return;
                      }
                      _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f23);
                      out.write(";\n");
                      out.write("                        \" id=\"");
                      out.print("panelDropZoneContainer_" + regionId + "_" + index);
                      out.write("\">\n");
                      out.write("                    <div id=\"");
                      out.print("panelDropZone_" + regionId + "_" + index);
                      out.write("\"\n");
                      out.write("                         style=\"width:100%; height:100%; vertical-align:bottom; text-align:left; overflow:hidden; \">\n");
                      out.write("                        &nbsp;<br>\n");
                      out.write("                    </div>\n");
                      out.write("                </div>\n");
                      out.write("                <script type=\"text/javascript\" language=\"javascript\" defer=\"defer\">\n");
                      out.write("                    setTimeout(\"doDropable('");
                      out.print("panelDropZone_" + regionId + "_" + index);
                      out.write("', '");
                      out.print(regionId);
                      out.write("', '");
                      out.print(index);
                      out.write("');\",10);\n");
                      out.write("                </script>\n");
                      out.write("            ");
                      int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f21.doAfterBody();
                      index = (java.lang.Object) _jspx_page_context.findAttribute("index");
                      if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                        break;
                    } while (true);
                    if (_jspx_eval_mvc_005ffragmentValue_005f21 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.popBody();
                    }
                  }
                  if (_jspx_th_mvc_005ffragmentValue_005f21.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f21);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f21);
                  out.write("\n");
                  out.write("        ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f20.doAfterBody();
                  regionId = (java.lang.Object) _jspx_page_context.findAttribute("regionId");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f20 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f20.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f20);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f20);
              out.write("\n");
              out.write("    ");
              int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f24.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_mvc_005ffragment_005f24 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_mvc_005ffragment_005f24.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f24);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f24);
          out.write("\n");
          out.write("    ");
          out.write("\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f25(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("    ");
          out.write("\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f26(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write('\n');
          int evalDoAfterBody = _jspx_th_mvc_005fformatter_005f0.doAfterBody();
          if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
            break;
        } while (true);
        if (_jspx_eval_mvc_005fformatter_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.popBody();
        }
      }
      if (_jspx_th_mvc_005fformatter_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.reuse(_jspx_th_mvc_005fformatter_005f0);
        return;
      }
      _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.reuse(_jspx_th_mvc_005fformatter_005f0);
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

  private boolean _jspx_meth_i18n_005fmessage_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f0 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f0.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
    // /section/render_tabbed_region.jsp(41,12) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f0.setKey("ui.sections.noPanelsInRegion");
    int _jspx_eval_i18n_005fmessage_005f0 = _jspx_th_i18n_005fmessage_005f0.doStartTag();
    if (_jspx_th_i18n_005fmessage_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f0);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f2 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f2.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /section/render_tabbed_region.jsp(55,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f2.setName("Region Panels Start");
    int _jspx_eval_mvc_005ffragment_005f2 = _jspx_th_mvc_005ffragment_005f2.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f2.doInitBody();
      }
      do {
        out.write("\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f2.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f2);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f3(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f3 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f3.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /section/render_tabbed_region.jsp(58,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f3.setName("beforeTabs");
    int _jspx_eval_mvc_005ffragment_005f3 = _jspx_th_mvc_005ffragment_005f3.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f3 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f3.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f3.doInitBody();
      }
      do {
        out.write("\n");
        out.write("    <tr>\n");
        out.write("        <td>\n");
        out.write("            <div style=\"width: 100%;\" class=\"menup\">\n");
        out.write("                <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">\n");
        out.write("                    <tr>\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f3.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f3);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f5(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f5 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f5.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /section/render_tabbed_region.jsp(112,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f5.setName("outputStartTab");
    int _jspx_eval_mvc_005ffragment_005f5 = _jspx_th_mvc_005ffragment_005f5.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f5 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f5 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f5.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f5.doInitBody();
      }
      do {
        out.write("\n");
        out.write("                        <td>\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f5.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f5 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f5);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f5);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f6(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f6 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f6.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /section/render_tabbed_region.jsp(116,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f6.setName("outputEndTab");
    int _jspx_eval_mvc_005ffragment_005f6 = _jspx_th_mvc_005ffragment_005f6.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f6 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f6 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f6.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f6.doInitBody();
      }
      do {
        out.write("\n");
        out.write("                        </td>\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f6.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f6 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f6);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f6);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f7(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f7 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f7.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /section/render_tabbed_region.jsp(120,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f7.setName("afterTabs");
    int _jspx_eval_mvc_005ffragment_005f7 = _jspx_th_mvc_005ffragment_005f7.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f7 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f7 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f7.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f7.doInitBody();
      }
      do {
        out.write("\n");
        out.write("                    </tr>\n");
        out.write("                </table>\n");
        out.write("            </div>\n");
        out.write("        </td>\n");
        out.write("    </tr>\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f7.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f7 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f7);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f7);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f8(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f8 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f8.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f8.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /section/render_tabbed_region.jsp(128,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f8.setName("Region Panels End");
    int _jspx_eval_mvc_005ffragment_005f8 = _jspx_th_mvc_005ffragment_005f8.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f8 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f8 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f8.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f8.doInitBody();
      }
      do {
        out.write("\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f8.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f8 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f8);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f8);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f11(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f11 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f11.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f11.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f1);
    // /section/render_panel_content.jsp(26,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f11.setName("minimized");
    int _jspx_eval_mvc_005ffragment_005f11 = _jspx_th_mvc_005ffragment_005f11.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f11 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f11 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f11.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f11.doInitBody();
      }
      do {
        out.write("\n");
        out.write("        <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" height=\"100%\" border=\"0\">\n");
        out.write("            <tr>\n");
        out.write("                <td width=\"100%\" valign=\"top\"></td>\n");
        out.write("            </tr>\n");
        out.write("        </table>\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f11.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f11 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f11.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f11);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f11);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f13(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f13 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f13.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f13.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f1);
    // /section/render_panel_content.jsp(38,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f13.setName("outputNotWellConfigured");
    int _jspx_eval_mvc_005ffragment_005f13 = _jspx_th_mvc_005ffragment_005f13.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f13 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f13 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f13.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f13.doInitBody();
      }
      do {
        out.write("\n");
        out.write("        <center><br>\n");
        out.write("            <font class=\"skn-error\">");
        if (_jspx_meth_i18n_005fmessage_005f1(_jspx_th_mvc_005ffragment_005f13, _jspx_page_context))
          return true;
        out.write("</font>\n");
        out.write("            <br></center><br>\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f13.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f13 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f13.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f13);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f13);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f13, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f1 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f1.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f13);
    // /section/render_panel_content.jsp(40,36) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f1.setKey("ui.panel.notWellConfigured");
    int _jspx_eval_i18n_005fmessage_005f1 = _jspx_th_i18n_005fmessage_005f1.doStartTag();
    if (_jspx_th_i18n_005fmessage_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f1);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f14(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f14 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f14.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f14.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f1);
    // /section/render_panel_content.jsp(43,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f14.setName("outputNotRegistered");
    int _jspx_eval_mvc_005ffragment_005f14 = _jspx_th_mvc_005ffragment_005f14.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f14 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f14 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f14.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f14.doInitBody();
      }
      do {
        out.write("\n");
        out.write("        <center><br>\n");
        out.write("            <font class=\"skn-error\">");
        if (_jspx_meth_i18n_005fmessage_005f2(_jspx_th_mvc_005ffragment_005f14, _jspx_page_context))
          return true;
        out.write("</font>\n");
        out.write("            <br></center><br>\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f14.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f14 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f14.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f14);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f14);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f14, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f2 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f2.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f14);
    // /section/render_panel_content.jsp(45,36) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f2.setKey("ui.panel.notLicensed");
    int _jspx_eval_i18n_005fmessage_005f2 = _jspx_th_i18n_005fmessage_005f2.doStartTag();
    if (_jspx_th_i18n_005fmessage_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f2);
    return false;
  }

  private boolean _jspx_meth_mvc_005finclude_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f13, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:include
    org.jboss.dashboard.ui.taglib.JSPIncludeTag _jspx_th_mvc_005finclude_005f0 = (org.jboss.dashboard.ui.taglib.JSPIncludeTag) _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.get(org.jboss.dashboard.ui.taglib.JSPIncludeTag.class);
    _jspx_th_mvc_005finclude_005f0.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005finclude_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f13);
    // /section/render_panel_content.jsp(50,8) name = page type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005finclude_005f0.setPage("/common/panels/commonRefreshFormPanels.jsp");
    int _jspx_eval_mvc_005finclude_005f0 = _jspx_th_mvc_005finclude_005f0.doStartTag();
    if (_jspx_th_mvc_005finclude_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.reuse(_jspx_th_mvc_005finclude_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.reuse(_jspx_th_mvc_005finclude_005f0);
    return false;
  }

  private boolean _jspx_meth_mvc_005finclude_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f13, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:include
    org.jboss.dashboard.ui.taglib.JSPIncludeTag _jspx_th_mvc_005finclude_005f1 = (org.jboss.dashboard.ui.taglib.JSPIncludeTag) _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.get(org.jboss.dashboard.ui.taglib.JSPIncludeTag.class);
    _jspx_th_mvc_005finclude_005f1.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005finclude_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f13);
    // /section/render_panel_content.jsp(51,8) name = page type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005finclude_005f1.setPage("/common/panels/beforePanel.jsp");
    int _jspx_eval_mvc_005finclude_005f1 = _jspx_th_mvc_005finclude_005f1.doStartTag();
    if (_jspx_th_mvc_005finclude_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.reuse(_jspx_th_mvc_005finclude_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.reuse(_jspx_th_mvc_005finclude_005f1);
    return false;
  }

  private boolean _jspx_meth_mvc_005finclude_005f3(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f13, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:include
    org.jboss.dashboard.ui.taglib.JSPIncludeTag _jspx_th_mvc_005finclude_005f3 = (org.jboss.dashboard.ui.taglib.JSPIncludeTag) _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.get(org.jboss.dashboard.ui.taglib.JSPIncludeTag.class);
    _jspx_th_mvc_005finclude_005f3.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005finclude_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f13);
    // /section/render_panel_content.jsp(57,16) name = page type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005finclude_005f3.setPage("/common/panels/afterPanel.jsp");
    int _jspx_eval_mvc_005finclude_005f3 = _jspx_th_mvc_005finclude_005f3.doStartTag();
    if (_jspx_th_mvc_005finclude_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.reuse(_jspx_th_mvc_005finclude_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.reuse(_jspx_th_mvc_005finclude_005f3);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f16(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f16 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f16.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f16.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f1);
    // /section/render_panel_content.jsp(66,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f16.setName("outputEnd");
    int _jspx_eval_mvc_005ffragment_005f16 = _jspx_th_mvc_005ffragment_005f16.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f16 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f16 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f16.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f16.doInitBody();
      }
      do {
        out.write("\n");
        out.write("        </td>\n");
        out.write("        </tr>\n");
        out.write("        </table>\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f16.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f16 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f16.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f16);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f16);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f18(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f18 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f18.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f18.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f2);
    // /section/render_panel_content.jsp(26,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f18.setName("minimized");
    int _jspx_eval_mvc_005ffragment_005f18 = _jspx_th_mvc_005ffragment_005f18.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f18 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f18 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f18.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f18.doInitBody();
      }
      do {
        out.write("\n");
        out.write("        <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" height=\"100%\" border=\"0\">\n");
        out.write("            <tr>\n");
        out.write("                <td width=\"100%\" valign=\"top\"></td>\n");
        out.write("            </tr>\n");
        out.write("        </table>\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f18.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f18 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f18.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f18);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f18);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f20(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f20 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f20.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f20.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f2);
    // /section/render_panel_content.jsp(38,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f20.setName("outputNotWellConfigured");
    int _jspx_eval_mvc_005ffragment_005f20 = _jspx_th_mvc_005ffragment_005f20.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f20 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f20 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f20.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f20.doInitBody();
      }
      do {
        out.write("\n");
        out.write("        <center><br>\n");
        out.write("            <font class=\"skn-error\">");
        if (_jspx_meth_i18n_005fmessage_005f3(_jspx_th_mvc_005ffragment_005f20, _jspx_page_context))
          return true;
        out.write("</font>\n");
        out.write("            <br></center><br>\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f20.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f20 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f20.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f20);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f20);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f3(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f20, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f3 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f3.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f20);
    // /section/render_panel_content.jsp(40,36) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f3.setKey("ui.panel.notWellConfigured");
    int _jspx_eval_i18n_005fmessage_005f3 = _jspx_th_i18n_005fmessage_005f3.doStartTag();
    if (_jspx_th_i18n_005fmessage_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f3);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f21(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f21 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f21.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f21.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f2);
    // /section/render_panel_content.jsp(43,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f21.setName("outputNotRegistered");
    int _jspx_eval_mvc_005ffragment_005f21 = _jspx_th_mvc_005ffragment_005f21.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f21 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f21 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f21.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f21.doInitBody();
      }
      do {
        out.write("\n");
        out.write("        <center><br>\n");
        out.write("            <font class=\"skn-error\">");
        if (_jspx_meth_i18n_005fmessage_005f4(_jspx_th_mvc_005ffragment_005f21, _jspx_page_context))
          return true;
        out.write("</font>\n");
        out.write("            <br></center><br>\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f21.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f21 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f21.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f21);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f21);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f4(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f21, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f4 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f4.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f21);
    // /section/render_panel_content.jsp(45,36) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f4.setKey("ui.panel.notLicensed");
    int _jspx_eval_i18n_005fmessage_005f4 = _jspx_th_i18n_005fmessage_005f4.doStartTag();
    if (_jspx_th_i18n_005fmessage_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f4);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f4);
    return false;
  }

  private boolean _jspx_meth_mvc_005finclude_005f4(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f19, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:include
    org.jboss.dashboard.ui.taglib.JSPIncludeTag _jspx_th_mvc_005finclude_005f4 = (org.jboss.dashboard.ui.taglib.JSPIncludeTag) _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.get(org.jboss.dashboard.ui.taglib.JSPIncludeTag.class);
    _jspx_th_mvc_005finclude_005f4.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005finclude_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f19);
    // /section/render_panel_content.jsp(50,8) name = page type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005finclude_005f4.setPage("/common/panels/commonRefreshFormPanels.jsp");
    int _jspx_eval_mvc_005finclude_005f4 = _jspx_th_mvc_005finclude_005f4.doStartTag();
    if (_jspx_th_mvc_005finclude_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.reuse(_jspx_th_mvc_005finclude_005f4);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.reuse(_jspx_th_mvc_005finclude_005f4);
    return false;
  }

  private boolean _jspx_meth_mvc_005finclude_005f5(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f19, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:include
    org.jboss.dashboard.ui.taglib.JSPIncludeTag _jspx_th_mvc_005finclude_005f5 = (org.jboss.dashboard.ui.taglib.JSPIncludeTag) _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.get(org.jboss.dashboard.ui.taglib.JSPIncludeTag.class);
    _jspx_th_mvc_005finclude_005f5.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005finclude_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f19);
    // /section/render_panel_content.jsp(51,8) name = page type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005finclude_005f5.setPage("/common/panels/beforePanel.jsp");
    int _jspx_eval_mvc_005finclude_005f5 = _jspx_th_mvc_005finclude_005f5.doStartTag();
    if (_jspx_th_mvc_005finclude_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.reuse(_jspx_th_mvc_005finclude_005f5);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.reuse(_jspx_th_mvc_005finclude_005f5);
    return false;
  }

  private boolean _jspx_meth_mvc_005finclude_005f7(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f19, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:include
    org.jboss.dashboard.ui.taglib.JSPIncludeTag _jspx_th_mvc_005finclude_005f7 = (org.jboss.dashboard.ui.taglib.JSPIncludeTag) _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.get(org.jboss.dashboard.ui.taglib.JSPIncludeTag.class);
    _jspx_th_mvc_005finclude_005f7.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005finclude_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f19);
    // /section/render_panel_content.jsp(57,16) name = page type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005finclude_005f7.setPage("/common/panels/afterPanel.jsp");
    int _jspx_eval_mvc_005finclude_005f7 = _jspx_th_mvc_005finclude_005f7.doStartTag();
    if (_jspx_th_mvc_005finclude_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.reuse(_jspx_th_mvc_005finclude_005f7);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.reuse(_jspx_th_mvc_005finclude_005f7);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f23(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f23 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f23.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f23.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f2);
    // /section/render_panel_content.jsp(66,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f23.setName("outputEnd");
    int _jspx_eval_mvc_005ffragment_005f23 = _jspx_th_mvc_005ffragment_005f23.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f23 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f23 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f23.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f23.doInitBody();
      }
      do {
        out.write("\n");
        out.write("        </td>\n");
        out.write("        </tr>\n");
        out.write("        </table>\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f23.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f23 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f23.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f23);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f23);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f25(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f25 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f25.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f25.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /section/render_tabbed_region.jsp(195,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f25.setName("panelOutputEnd");
    int _jspx_eval_mvc_005ffragment_005f25 = _jspx_th_mvc_005ffragment_005f25.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f25 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f25 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f25.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f25.doInitBody();
      }
      do {
        out.write("\n");
        out.write("        </td>\n");
        out.write("    </tr>\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f25.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f25 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f25.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f25);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f25);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f26(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f26 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f26.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f26.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /section/render_tabbed_region.jsp(200,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f26.setName("regionEnd");
    int _jspx_eval_mvc_005ffragment_005f26 = _jspx_th_mvc_005ffragment_005f26.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f26 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f26 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f26.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f26.doInitBody();
      }
      do {
        out.write("\n");
        out.write("</table>\n");
        out.write("    ");
        int evalDoAfterBody = _jspx_th_mvc_005ffragment_005f26.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_mvc_005ffragment_005f26 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_mvc_005ffragment_005f26.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f26);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f26);
    return false;
  }
}
