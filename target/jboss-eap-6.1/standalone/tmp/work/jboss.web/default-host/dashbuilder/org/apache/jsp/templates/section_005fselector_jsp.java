package org.apache.jsp.templates;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.jboss.dashboard.security.SectionPermission;
import org.jboss.dashboard.ui.SessionManager;
import org.jboss.dashboard.workspace.*;
import org.jboss.dashboard.security.WorkspacePermission;
import java.security.AllPermission;
import java.security.Permission;
import java.util.Locale;
import org.jboss.dashboard.LocaleManager;
import org.jboss.dashboard.ui.NavigationManager;
import org.jboss.dashboard.factory.Factory;

public final class section_005fselector_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList(1);
    _jspx_dependants.add("/templates/../common/global.jsp");
  }

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fsecurity_005fcheckpermission_0026_005fpermission;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fsecurity_005fcheckpermission_0026_005fpermission = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.release();
    _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.release();
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005fsecurity_005fcheckpermission_0026_005fpermission.release();
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.release();
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction.release();
    _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody.release();
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
      // /templates/../common/global.jsp(40,0) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setId("bundle");
      // /templates/../common/global.jsp(40,0) name = baseName type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setBaseName("org.jboss.dashboard.ui.messages");
      // /templates/../common/global.jsp(40,0) name = locale type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
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
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<td>\n");
      out.write("    <form action=\"");
      if (_jspx_meth_factory_005fformUrl_005f0(_jspx_page_context))
        return;
      out.write("\" method=\"POST\" style=\"margin:0px\"\n");
      out.write("        name=\"sectionSelectorForm\" id=\"sectionSelectorForm\" >\n");
      out.write("        ");
      if (_jspx_meth_factory_005fhandler_005f0(_jspx_page_context))
        return;
      out.write("\n");
      out.write("        <input type=\"hidden\"\n");
      out.write("               name=\"");
      if (_jspx_meth_factory_005fbean_005f0(_jspx_page_context))
        return;
      out.write("\"\n");
      out.write("               value=\"\">\n");
      out.write("    </form>\n");
      out.write("     <div class=\"select\">\n");
      out.write("    <form action=\"\" method=\"post\">\n");
      //  mvc:formatter
      org.jboss.dashboard.ui.taglib.formatter.FormatterTag _jspx_th_mvc_005fformatter_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FormatterTag) _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FormatterTag.class);
      _jspx_th_mvc_005fformatter_005f0.setPageContext(_jspx_page_context);
      _jspx_th_mvc_005fformatter_005f0.setParent(null);
      // /templates/section_selector.jsp(36,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_mvc_005fformatter_005f0.setName("org.jboss.dashboard.ui.formatters.RenderIndentedSectionsFormatter");
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
          if (_jspx_meth_mvc_005fformatterParam_005f0(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f0(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f1(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f2 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f2.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /templates/section_selector.jsp(52,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f2.setName("output");
          int _jspx_eval_mvc_005ffragment_005f2 = _jspx_th_mvc_005ffragment_005f2.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f2.doInitBody();
            }
            do {
              out.write("\n");
              out.write("            <option value=\"");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f0.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f2);
              // /templates/section_selector.jsp(53,27) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f0.setName("url");
              int _jspx_eval_mvc_005ffragmentValue_005f0 = _jspx_th_mvc_005ffragmentValue_005f0.doStartTag();
              if (_jspx_th_mvc_005ffragmentValue_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f0);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f0);
              out.write('"');
              out.write('>');
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f1.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f2);
              // /templates/section_selector.jsp(53,60) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f1.setName("title");
              int _jspx_eval_mvc_005ffragmentValue_005f1 = _jspx_th_mvc_005ffragmentValue_005f1.doStartTag();
              if (_jspx_th_mvc_005ffragmentValue_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f1);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f1);
              out.write("</option>\n");
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
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f2);
          out.write("\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f3 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f3.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /templates/section_selector.jsp(55,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f3.setName("outputSelected");
          int _jspx_eval_mvc_005ffragment_005f3 = _jspx_th_mvc_005ffragment_005f3.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f3 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f3.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f3.doInitBody();
            }
            do {
              out.write("\n");
              out.write("            <option selected class=\"skn-important\" value=\"\">");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f2 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f2.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f3);
              // /templates/section_selector.jsp(56,60) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f2.setName("title");
              int _jspx_eval_mvc_005ffragmentValue_005f2 = _jspx_th_mvc_005ffragmentValue_005f2.doStartTag();
              if (_jspx_th_mvc_005ffragmentValue_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f2);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f2);
              out.write("</option>\n");
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
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f3);
          out.write("\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f4(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f5(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
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
      out.write('\n');

    if (adminMode) {
        WorkspacePermission createPerm = WorkspacePermission.newInstance(currentWorkspace, WorkspacePermission.ACTION_CREATE_PAGE);


      out.write('\n');
      //  security:checkpermission
      org.jboss.dashboard.ui.taglib.CheckPermissionTag _jspx_th_security_005fcheckpermission_005f0 = (org.jboss.dashboard.ui.taglib.CheckPermissionTag) _005fjspx_005ftagPool_005fsecurity_005fcheckpermission_0026_005fpermission.get(org.jboss.dashboard.ui.taglib.CheckPermissionTag.class);
      _jspx_th_security_005fcheckpermission_005f0.setPageContext(_jspx_page_context);
      _jspx_th_security_005fcheckpermission_005f0.setParent(null);
      // /templates/section_selector.jsp(70,0) name = permission type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_security_005fcheckpermission_005f0.setPermission( createPerm );
      int _jspx_eval_security_005fcheckpermission_005f0 = _jspx_th_security_005fcheckpermission_005f0.doStartTag();
      if (_jspx_eval_security_005fcheckpermission_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
        if (_jspx_eval_security_005fcheckpermission_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.pushBody();
          _jspx_th_security_005fcheckpermission_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
          _jspx_th_security_005fcheckpermission_005f0.doInitBody();
        }
        do {
          out.write("\n");
          out.write("    ");
          //  i18n:message
          org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f3 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
          _jspx_th_i18n_005fmessage_005f3.setPageContext(_jspx_page_context);
          _jspx_th_i18n_005fmessage_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_security_005fcheckpermission_005f0);
          // /templates/section_selector.jsp(71,4) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_i18n_005fmessage_005f3.setKey("ui.sections.createNew");
          // /templates/section_selector.jsp(71,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_i18n_005fmessage_005f3.setId("newSectionMsg");
          int _jspx_eval_i18n_005fmessage_005f3 = _jspx_th_i18n_005fmessage_005f3.doStartTag();
          if (_jspx_th_i18n_005fmessage_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f3);
            return;
          }
          _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f3);
          java.lang.String newSectionMsg = null;
          newSectionMsg = (java.lang.String) _jspx_page_context.findAttribute("newSectionMsg");
          out.write("\n");
          out.write("    <a target=_top href=\"");
          if (_jspx_meth_factory_005furl_005f0(_jspx_th_security_005fcheckpermission_005f0, _jspx_page_context))
            return;
          out.write("\"><img src=\"");
          if (_jspx_meth_static_005fimage_005f0(_jspx_th_security_005fcheckpermission_005f0, _jspx_page_context))
            return;
          out.write("\" title=\"");
          out.print(newSectionMsg);
          out.write("\"></a>\n");
          int evalDoAfterBody = _jspx_th_security_005fcheckpermission_005f0.doAfterBody();
          if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
            break;
        } while (true);
        if (_jspx_eval_security_005fcheckpermission_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.popBody();
        }
      }
      if (_jspx_th_security_005fcheckpermission_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fsecurity_005fcheckpermission_0026_005fpermission.reuse(_jspx_th_security_005fcheckpermission_005f0);
        return;
      }
      _005fjspx_005ftagPool_005fsecurity_005fcheckpermission_0026_005fpermission.reuse(_jspx_th_security_005fcheckpermission_005f0);
      out.write('\n');

    if (currentSection != null) {
        SectionPermission editPerm = SectionPermission.newInstance(currentSection, SectionPermission.ACTION_EDIT);
        SectionPermission delPerm = SectionPermission.newInstance(currentSection, SectionPermission.ACTION_DELETE);

      out.write('\n');
      //  security:checkpermission
      org.jboss.dashboard.ui.taglib.CheckPermissionTag _jspx_th_security_005fcheckpermission_005f1 = (org.jboss.dashboard.ui.taglib.CheckPermissionTag) _005fjspx_005ftagPool_005fsecurity_005fcheckpermission_0026_005fpermission.get(org.jboss.dashboard.ui.taglib.CheckPermissionTag.class);
      _jspx_th_security_005fcheckpermission_005f1.setPageContext(_jspx_page_context);
      _jspx_th_security_005fcheckpermission_005f1.setParent(null);
      // /templates/section_selector.jsp(79,0) name = permission type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_security_005fcheckpermission_005f1.setPermission( editPerm );
      int _jspx_eval_security_005fcheckpermission_005f1 = _jspx_th_security_005fcheckpermission_005f1.doStartTag();
      if (_jspx_eval_security_005fcheckpermission_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
        if (_jspx_eval_security_005fcheckpermission_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.pushBody();
          _jspx_th_security_005fcheckpermission_005f1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
          _jspx_th_security_005fcheckpermission_005f1.doInitBody();
        }
        do {
          out.write("\n");
          out.write("    ");
          //  i18n:message
          org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f4 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
          _jspx_th_i18n_005fmessage_005f4.setPageContext(_jspx_page_context);
          _jspx_th_i18n_005fmessage_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_security_005fcheckpermission_005f1);
          // /templates/section_selector.jsp(80,4) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_i18n_005fmessage_005f4.setKey("ui.sections.editProperties");
          // /templates/section_selector.jsp(80,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_i18n_005fmessage_005f4.setId("editSectionMsg");
          int _jspx_eval_i18n_005fmessage_005f4 = _jspx_th_i18n_005fmessage_005f4.doStartTag();
          if (_jspx_th_i18n_005fmessage_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f4);
            return;
          }
          _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f4);
          java.lang.String editSectionMsg = null;
          editSectionMsg = (java.lang.String) _jspx_page_context.findAttribute("editSectionMsg");
          out.write("\n");
          out.write("    <a target=_top href=\"");
          if (_jspx_meth_factory_005furl_005f1(_jspx_th_security_005fcheckpermission_005f1, _jspx_page_context))
            return;
          out.write("\"><img src=\"");
          if (_jspx_meth_static_005fimage_005f1(_jspx_th_security_005fcheckpermission_005f1, _jspx_page_context))
            return;
          out.write("\" title=\"");
          out.print(editSectionMsg);
          out.write("\"></a>\n");
          int evalDoAfterBody = _jspx_th_security_005fcheckpermission_005f1.doAfterBody();
          if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
            break;
        } while (true);
        if (_jspx_eval_security_005fcheckpermission_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.popBody();
        }
      }
      if (_jspx_th_security_005fcheckpermission_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fsecurity_005fcheckpermission_0026_005fpermission.reuse(_jspx_th_security_005fcheckpermission_005f1);
        return;
      }
      _005fjspx_005ftagPool_005fsecurity_005fcheckpermission_0026_005fpermission.reuse(_jspx_th_security_005fcheckpermission_005f1);
      out.write('\n');
      //  security:checkpermission
      org.jboss.dashboard.ui.taglib.CheckPermissionTag _jspx_th_security_005fcheckpermission_005f2 = (org.jboss.dashboard.ui.taglib.CheckPermissionTag) _005fjspx_005ftagPool_005fsecurity_005fcheckpermission_0026_005fpermission.get(org.jboss.dashboard.ui.taglib.CheckPermissionTag.class);
      _jspx_th_security_005fcheckpermission_005f2.setPageContext(_jspx_page_context);
      _jspx_th_security_005fcheckpermission_005f2.setParent(null);
      // /templates/section_selector.jsp(83,0) name = permission type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_security_005fcheckpermission_005f2.setPermission( delPerm );
      int _jspx_eval_security_005fcheckpermission_005f2 = _jspx_th_security_005fcheckpermission_005f2.doStartTag();
      if (_jspx_eval_security_005fcheckpermission_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
        if (_jspx_eval_security_005fcheckpermission_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.pushBody();
          _jspx_th_security_005fcheckpermission_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
          _jspx_th_security_005fcheckpermission_005f2.doInitBody();
        }
        do {
          out.write("\n");
          out.write("    ");
          //  i18n:message
          org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f5 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
          _jspx_th_i18n_005fmessage_005f5.setPageContext(_jspx_page_context);
          _jspx_th_i18n_005fmessage_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_security_005fcheckpermission_005f2);
          // /templates/section_selector.jsp(84,4) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_i18n_005fmessage_005f5.setKey("ui.sections.deleteCurrent");
          // /templates/section_selector.jsp(84,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_i18n_005fmessage_005f5.setId("deleteSectionMsg");
          int _jspx_eval_i18n_005fmessage_005f5 = _jspx_th_i18n_005fmessage_005f5.doStartTag();
          if (_jspx_th_i18n_005fmessage_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f5);
            return;
          }
          _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f5);
          java.lang.String deleteSectionMsg = null;
          deleteSectionMsg = (java.lang.String) _jspx_page_context.findAttribute("deleteSectionMsg");
          out.write("\n");
          out.write("    ");
          //  i18n:message
          org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f6 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
          _jspx_th_i18n_005fmessage_005f6.setPageContext(_jspx_page_context);
          _jspx_th_i18n_005fmessage_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_security_005fcheckpermission_005f2);
          // /templates/section_selector.jsp(85,4) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_i18n_005fmessage_005f6.setKey("ui.sections.confirmDeleteCurrent");
          // /templates/section_selector.jsp(85,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_i18n_005fmessage_005f6.setId("confirmDeleteMsg");
          int _jspx_eval_i18n_005fmessage_005f6 = _jspx_th_i18n_005fmessage_005f6.doStartTag();
          if (_jspx_th_i18n_005fmessage_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f6);
            return;
          }
          _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f6);
          java.lang.String confirmDeleteMsg = null;
          confirmDeleteMsg = (java.lang.String) _jspx_page_context.findAttribute("confirmDeleteMsg");
          out.write("\n");
          out.write("    <a target=_top\n");
          out.write("       href=\"");
          //  factory:url
          org.jboss.dashboard.ui.taglib.factory.URLTag _jspx_th_factory_005furl_005f2 = (org.jboss.dashboard.ui.taglib.factory.URLTag) _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction.get(org.jboss.dashboard.ui.taglib.factory.URLTag.class);
          _jspx_th_factory_005furl_005f2.setPageContext(_jspx_page_context);
          _jspx_th_factory_005furl_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_security_005fcheckpermission_005f2);
          // /templates/section_selector.jsp(87,13) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_factory_005furl_005f2.setBean("org.jboss.dashboard.ui.components.SectionsHandler");
          // /templates/section_selector.jsp(87,13) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_factory_005furl_005f2.setAction("delete");
          // /templates/section_selector.jsp(87,13) name = friendly type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_factory_005furl_005f2.setFriendly(false);
          int _jspx_eval_factory_005furl_005f2 = _jspx_th_factory_005furl_005f2.doStartTag();
          if (_jspx_eval_factory_005furl_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_factory_005furl_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_factory_005furl_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_factory_005furl_005f2.doInitBody();
            }
            do {
              out.write("\n");
              out.write("       ");
              //  factory:param
              org.jboss.dashboard.ui.taglib.factory.ParamTag _jspx_th_factory_005fparam_005f0 = (org.jboss.dashboard.ui.taglib.factory.ParamTag) _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.ParamTag.class);
              _jspx_th_factory_005fparam_005f0.setPageContext(_jspx_page_context);
              _jspx_th_factory_005fparam_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_factory_005furl_005f2);
              // /templates/section_selector.jsp(88,7) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_factory_005fparam_005f0.setName("id");
              // /templates/section_selector.jsp(88,7) name = value type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_factory_005fparam_005f0.setValue(currentSection.getId());
              int _jspx_eval_factory_005fparam_005f0 = _jspx_th_factory_005fparam_005f0.doStartTag();
              if (_jspx_th_factory_005fparam_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_factory_005fparam_005f0);
                return;
              }
              _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_factory_005fparam_005f0);
              out.write("\n");
              out.write("       ");
              int evalDoAfterBody = _jspx_th_factory_005furl_005f2.doAfterBody();
              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                break;
            } while (true);
            if (_jspx_eval_factory_005furl_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.popBody();
            }
          }
          if (_jspx_th_factory_005furl_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction.reuse(_jspx_th_factory_005furl_005f2);
            return;
          }
          _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction.reuse(_jspx_th_factory_005furl_005f2);
          out.write("\"\n");
          out.write("       onClick=\"if( window.confirm('");
          out.print(confirmDeleteMsg);
          out.write("' ) ){ var form=document.forms['sectionSelectorForm']; form.elements['");
          if (_jspx_meth_factory_005fbean_005f1(_jspx_th_security_005fcheckpermission_005f2, _jspx_page_context))
            return;
          out.write("'].value='delete'; form.submit();  } return false;\"><img src=\"");
          if (_jspx_meth_static_005fimage_005f2(_jspx_th_security_005fcheckpermission_005f2, _jspx_page_context))
            return;
          out.write("\" title=\"");
          out.print(deleteSectionMsg);
          out.write("\"></a>\n");
          int evalDoAfterBody = _jspx_th_security_005fcheckpermission_005f2.doAfterBody();
          if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
            break;
        } while (true);
        if (_jspx_eval_security_005fcheckpermission_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.popBody();
        }
      }
      if (_jspx_th_security_005fcheckpermission_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fsecurity_005fcheckpermission_0026_005fpermission.reuse(_jspx_th_security_005fcheckpermission_005f2);
        return;
      }
      _005fjspx_005ftagPool_005fsecurity_005fcheckpermission_0026_005fpermission.reuse(_jspx_th_security_005fcheckpermission_005f2);
      out.write('\n');
      out.write('\n');
      //  security:checkpermission
      org.jboss.dashboard.ui.taglib.CheckPermissionTag _jspx_th_security_005fcheckpermission_005f3 = (org.jboss.dashboard.ui.taglib.CheckPermissionTag) _005fjspx_005ftagPool_005fsecurity_005fcheckpermission_0026_005fpermission.get(org.jboss.dashboard.ui.taglib.CheckPermissionTag.class);
      _jspx_th_security_005fcheckpermission_005f3.setPageContext(_jspx_page_context);
      _jspx_th_security_005fcheckpermission_005f3.setParent(null);
      // /templates/section_selector.jsp(93,0) name = permission type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_security_005fcheckpermission_005f3.setPermission( createPerm );
      int _jspx_eval_security_005fcheckpermission_005f3 = _jspx_th_security_005fcheckpermission_005f3.doStartTag();
      if (_jspx_eval_security_005fcheckpermission_005f3 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
        if (_jspx_eval_security_005fcheckpermission_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.pushBody();
          _jspx_th_security_005fcheckpermission_005f3.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
          _jspx_th_security_005fcheckpermission_005f3.doInitBody();
        }
        do {
          out.write("\n");
          out.write("    ");
          //  i18n:message
          org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f7 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
          _jspx_th_i18n_005fmessage_005f7.setPageContext(_jspx_page_context);
          _jspx_th_i18n_005fmessage_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_security_005fcheckpermission_005f3);
          // /templates/section_selector.jsp(94,4) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_i18n_005fmessage_005f7.setKey("ui.sections.duplicateCurrent");
          // /templates/section_selector.jsp(94,4) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_i18n_005fmessage_005f7.setId("duplicateSectionMsg");
          int _jspx_eval_i18n_005fmessage_005f7 = _jspx_th_i18n_005fmessage_005f7.doStartTag();
          if (_jspx_th_i18n_005fmessage_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f7);
            return;
          }
          _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f7);
          java.lang.String duplicateSectionMsg = null;
          duplicateSectionMsg = (java.lang.String) _jspx_page_context.findAttribute("duplicateSectionMsg");
          out.write("\n");
          out.write("    <a target=_top href=\"");
          if (_jspx_meth_factory_005furl_005f3(_jspx_th_security_005fcheckpermission_005f3, _jspx_page_context))
            return;
          out.print("&id=" + currentSection.getId() );
          out.write("\"><img src=\"");
          if (_jspx_meth_static_005fimage_005f3(_jspx_th_security_005fcheckpermission_005f3, _jspx_page_context))
            return;
          out.write("\" title=\"");
          out.print(duplicateSectionMsg);
          out.write("\"></a>\n");
          int evalDoAfterBody = _jspx_th_security_005fcheckpermission_005f3.doAfterBody();
          if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
            break;
        } while (true);
        if (_jspx_eval_security_005fcheckpermission_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.popBody();
        }
      }
      if (_jspx_th_security_005fcheckpermission_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fsecurity_005fcheckpermission_0026_005fpermission.reuse(_jspx_th_security_005fcheckpermission_005f3);
        return;
      }
      _005fjspx_005ftagPool_005fsecurity_005fcheckpermission_0026_005fpermission.reuse(_jspx_th_security_005fcheckpermission_005f3);
      out.write("\n");
      out.write("\n");
      out.write("<a title=\"");
      if (_jspx_meth_i18n_005fmessage_005f8(_jspx_page_context))
        return;
      out.write("\" id=\"");
      if (_jspx_meth_factory_005fencode_005f0(_jspx_page_context))
        return;
      out.write("\" href=\"");
      if (_jspx_meth_factory_005furl_005f4(_jspx_page_context))
        return;
      out.write("\">\n");
      out.write("    <img src=\"");
      if (_jspx_meth_static_005fimage_005f4(_jspx_page_context))
        return;
      out.write("\" border=0>\n");
      out.write("</a>\n");
      out.write("<script type=\"text/javascript\" defer=\"defer\">\n");
      out.write("    setAjax(\"");
      if (_jspx_meth_factory_005fencode_005f1(_jspx_page_context))
        return;
      out.write("\");\n");
      out.write("</script>\n");

        }
    }

      out.write("\n");
      out.write("</form>\n");
      out.write("    </div>\n");
      out.write("    <form method=\"POST\" name=\"instanceDragAndDropToRegion\" style=\"display:none\"\n");
      out.write("          action=\"");
      if (_jspx_meth_factory_005furl_005f5(_jspx_page_context))
        return;
      out.write("\">\n");
      out.write("        <input type='hidden' name=\"panelId\">\n");
      out.write("        <input type='hidden' name=\"region\">\n");
      out.write("        <input type='hidden' name=\"position\">\n");
      out.write("    </form>\n");
      out.write("    <form method=\"POST\" name=\"panelDragAndDropToRegion\" style=\"display:none\"\n");
      out.write("          action=\"");
      if (_jspx_meth_factory_005furl_005f6(_jspx_page_context))
        return;
      out.write("\">\n");
      out.write("        <input type='hidden' name=\"panelId\">\n");
      out.write("        <input type='hidden' name=\"region\">\n");
      out.write("        <input type='hidden' name=\"position\">\n");
      out.write("    </form>\n");
      out.write("\n");
      out.write("</td>\n");
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

  private boolean _jspx_meth_factory_005fformUrl_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:formUrl
    org.jboss.dashboard.ui.taglib.factory.FormURLTag _jspx_th_factory_005fformUrl_005f0 = (org.jboss.dashboard.ui.taglib.factory.FormURLTag) _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.FormURLTag.class);
    _jspx_th_factory_005fformUrl_005f0.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fformUrl_005f0.setParent(null);
    // /templates/section_selector.jsp(27,18) name = friendly type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fformUrl_005f0.setFriendly(false);
    int _jspx_eval_factory_005fformUrl_005f0 = _jspx_th_factory_005fformUrl_005f0.doStartTag();
    if (_jspx_th_factory_005fformUrl_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody.reuse(_jspx_th_factory_005fformUrl_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody.reuse(_jspx_th_factory_005fformUrl_005f0);
    return false;
  }

  private boolean _jspx_meth_factory_005fhandler_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:handler
    org.jboss.dashboard.ui.taglib.factory.HandlerTag _jspx_th_factory_005fhandler_005f0 = (org.jboss.dashboard.ui.taglib.factory.HandlerTag) _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.HandlerTag.class);
    _jspx_th_factory_005fhandler_005f0.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fhandler_005f0.setParent(null);
    // /templates/section_selector.jsp(29,8) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fhandler_005f0.setBean("org.jboss.dashboard.ui.components.SectionsHandler");
    // /templates/section_selector.jsp(29,8) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fhandler_005f0.setAction("onSection");
    int _jspx_eval_factory_005fhandler_005f0 = _jspx_th_factory_005fhandler_005f0.doStartTag();
    if (_jspx_th_factory_005fhandler_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005fhandler_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005fhandler_005f0);
    return false;
  }

  private boolean _jspx_meth_factory_005fbean_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:bean
    org.jboss.dashboard.ui.taglib.factory.BeanTag _jspx_th_factory_005fbean_005f0 = (org.jboss.dashboard.ui.taglib.factory.BeanTag) _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.BeanTag.class);
    _jspx_th_factory_005fbean_005f0.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fbean_005f0.setParent(null);
    // /templates/section_selector.jsp(31,21) name = property type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f0.setProperty("operationName");
    // /templates/section_selector.jsp(31,21) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f0.setBean("org.jboss.dashboard.ui.components.SectionsHandler");
    int _jspx_eval_factory_005fbean_005f0 = _jspx_th_factory_005fbean_005f0.doStartTag();
    if (_jspx_th_factory_005fbean_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f0);
    return false;
  }

  private boolean _jspx_meth_mvc_005fformatterParam_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:formatterParam
    org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag _jspx_th_mvc_005fformatterParam_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag) _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag.class);
    _jspx_th_mvc_005fformatterParam_005f0.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005fformatterParam_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /templates/section_selector.jsp(37,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fformatterParam_005f0.setName("preffix");
    // /templates/section_selector.jsp(37,4) name = value type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fformatterParam_005f0.setValue("&nbsp;&nbsp;");
    int _jspx_eval_mvc_005fformatterParam_005f0 = _jspx_th_mvc_005fformatterParam_005f0.doStartTag();
    if (_jspx_th_mvc_005fformatterParam_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_mvc_005fformatterParam_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_mvc_005fformatterParam_005f0);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f0.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /templates/section_selector.jsp(38,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f0.setName("empty");
    int _jspx_eval_mvc_005ffragment_005f0 = _jspx_th_mvc_005ffragment_005f0.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f0.doInitBody();
      }
      do {
        out.write("\n");
        out.write("        <span class=\"skn-title3 skn-error\">\n");
        out.write("            ");
        if (_jspx_meth_i18n_005fmessage_005f0(_jspx_th_mvc_005ffragment_005f0, _jspx_page_context))
          return true;
        out.write("\n");
        out.write("        </span>\n");
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
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f0);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f0 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f0.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f0);
    // /templates/section_selector.jsp(40,12) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f0.setKey("ui.sections.noSections");
    int _jspx_eval_i18n_005fmessage_005f0 = _jspx_th_i18n_005fmessage_005f0.doStartTag();
    if (_jspx_th_i18n_005fmessage_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f0);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f1.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /templates/section_selector.jsp(43,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f1.setName("outputStart");
    int _jspx_eval_mvc_005ffragment_005f1 = _jspx_th_mvc_005ffragment_005f1.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f1.doInitBody();
      }
      do {
        out.write("\n");
        out.write("    ");
        if (_jspx_meth_i18n_005fmessage_005f1(_jspx_th_mvc_005ffragment_005f1, _jspx_page_context))
          return true;
        out.write(":&nbsp;\n");
        out.write("    <select id=\"sectionSelect\" class=\"select\" name=\"section\"\n");
        out.write("        onchange=\"if(this.options[this.selectedIndex].value){\n");
        out.write("            this.form.action = this.options[this.selectedIndex].value;\n");
        out.write("            this.form.submit();\n");
        out.write("            return false;\n");
        out.write("        } else return false;\">\n");
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
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f1);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f1 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f1.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f1);
    // /templates/section_selector.jsp(44,4) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f1.setKey("ui.sections.section");
    int _jspx_eval_i18n_005fmessage_005f1 = _jspx_th_i18n_005fmessage_005f1.doStartTag();
    if (_jspx_th_i18n_005fmessage_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f1);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f4(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f4 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f4.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /templates/section_selector.jsp(58,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f4.setName("outputNoneSelected");
    int _jspx_eval_mvc_005ffragment_005f4 = _jspx_th_mvc_005ffragment_005f4.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f4 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f4 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f4.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f4.doInitBody();
      }
      do {
        out.write("\n");
        out.write("            <option selected disabled class=\"skn-disabled\" value=\"\">-- ");
        if (_jspx_meth_i18n_005fmessage_005f2(_jspx_th_mvc_005ffragment_005f4, _jspx_page_context))
          return true;
        out.write(" --</option>\n");
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
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f4);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f4, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f2 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f2.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f4);
    // /templates/section_selector.jsp(59,71) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f2.setKey("ui.noOne");
    int _jspx_eval_i18n_005fmessage_005f2 = _jspx_th_i18n_005fmessage_005f2.doStartTag();
    if (_jspx_th_i18n_005fmessage_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f2);
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
    // /templates/section_selector.jsp(61,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f5.setName("outputEnd");
    int _jspx_eval_mvc_005ffragment_005f5 = _jspx_th_mvc_005ffragment_005f5.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f5 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f5 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f5.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f5.doInitBody();
      }
      do {
        out.write("\n");
        out.write("        </select>&nbsp;&nbsp;\n");
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

  private boolean _jspx_meth_factory_005furl_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_security_005fcheckpermission_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:url
    org.jboss.dashboard.ui.taglib.factory.URLTag _jspx_th_factory_005furl_005f0 = (org.jboss.dashboard.ui.taglib.factory.URLTag) _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.URLTag.class);
    _jspx_th_factory_005furl_005f0.setPageContext(_jspx_page_context);
    _jspx_th_factory_005furl_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_security_005fcheckpermission_005f0);
    // /templates/section_selector.jsp(72,25) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f0.setBean("org.jboss.dashboard.ui.config.TreeShortcutHandler");
    // /templates/section_selector.jsp(72,25) name = friendly type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f0.setFriendly(false);
    // /templates/section_selector.jsp(72,25) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f0.setAction("NewPage");
    int _jspx_eval_factory_005furl_005f0 = _jspx_th_factory_005furl_005f0.doStartTag();
    if (_jspx_th_factory_005furl_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f0);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_security_005fcheckpermission_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f0 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f0.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_security_005fcheckpermission_005f0);
    // /templates/section_selector.jsp(72,142) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f0.setRelativePath("adminHeader/new-section.png");
    int _jspx_eval_static_005fimage_005f0 = _jspx_th_static_005fimage_005f0.doStartTag();
    if (_jspx_th_static_005fimage_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f0);
    return false;
  }

  private boolean _jspx_meth_factory_005furl_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_security_005fcheckpermission_005f1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:url
    org.jboss.dashboard.ui.taglib.factory.URLTag _jspx_th_factory_005furl_005f1 = (org.jboss.dashboard.ui.taglib.factory.URLTag) _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.URLTag.class);
    _jspx_th_factory_005furl_005f1.setPageContext(_jspx_page_context);
    _jspx_th_factory_005furl_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_security_005fcheckpermission_005f1);
    // /templates/section_selector.jsp(81,25) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f1.setBean("org.jboss.dashboard.ui.config.TreeShortcutHandler");
    // /templates/section_selector.jsp(81,25) name = friendly type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f1.setFriendly(false);
    // /templates/section_selector.jsp(81,25) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f1.setAction("PageConfig");
    int _jspx_eval_factory_005furl_005f1 = _jspx_th_factory_005furl_005f1.doStartTag();
    if (_jspx_th_factory_005furl_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f1);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_security_005fcheckpermission_005f1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f1 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f1.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_security_005fcheckpermission_005f1);
    // /templates/section_selector.jsp(81,145) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f1.setRelativePath("adminHeader/edit.png");
    int _jspx_eval_static_005fimage_005f1 = _jspx_th_static_005fimage_005f1.doStartTag();
    if (_jspx_th_static_005fimage_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f1);
    return false;
  }

  private boolean _jspx_meth_factory_005fbean_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_security_005fcheckpermission_005f2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:bean
    org.jboss.dashboard.ui.taglib.factory.BeanTag _jspx_th_factory_005fbean_005f1 = (org.jboss.dashboard.ui.taglib.factory.BeanTag) _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.BeanTag.class);
    _jspx_th_factory_005fbean_005f1.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fbean_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_security_005fcheckpermission_005f2);
    // /templates/section_selector.jsp(90,127) name = property type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f1.setProperty("operationName");
    // /templates/section_selector.jsp(90,127) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fbean_005f1.setBean("org.jboss.dashboard.ui.components.SectionsHandler");
    int _jspx_eval_factory_005fbean_005f1 = _jspx_th_factory_005fbean_005f1.doStartTag();
    if (_jspx_th_factory_005fbean_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fbean_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fbean_005f1);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_security_005fcheckpermission_005f2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f2 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f2.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_security_005fcheckpermission_005f2);
    // /templates/section_selector.jsp(90,286) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f2.setRelativePath("adminHeader/remove.png");
    int _jspx_eval_static_005fimage_005f2 = _jspx_th_static_005fimage_005f2.doStartTag();
    if (_jspx_th_static_005fimage_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f2);
    return false;
  }

  private boolean _jspx_meth_factory_005furl_005f3(javax.servlet.jsp.tagext.JspTag _jspx_th_security_005fcheckpermission_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:url
    org.jboss.dashboard.ui.taglib.factory.URLTag _jspx_th_factory_005furl_005f3 = (org.jboss.dashboard.ui.taglib.factory.URLTag) _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.URLTag.class);
    _jspx_th_factory_005furl_005f3.setPageContext(_jspx_page_context);
    _jspx_th_factory_005furl_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_security_005fcheckpermission_005f3);
    // /templates/section_selector.jsp(95,25) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f3.setBean("org.jboss.dashboard.ui.config.TreeShortcutHandler");
    // /templates/section_selector.jsp(95,25) name = friendly type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f3.setFriendly(false);
    // /templates/section_selector.jsp(95,25) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f3.setAction("duplicatePage");
    int _jspx_eval_factory_005furl_005f3 = _jspx_th_factory_005furl_005f3.doStartTag();
    if (_jspx_th_factory_005furl_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f3);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f3(javax.servlet.jsp.tagext.JspTag _jspx_th_security_005fcheckpermission_005f3, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f3 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f3.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_security_005fcheckpermission_005f3);
    // /templates/section_selector.jsp(95,185) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f3.setRelativePath("adminHeader/duplicate-section.png");
    int _jspx_eval_static_005fimage_005f3 = _jspx_th_static_005fimage_005f3.doStartTag();
    if (_jspx_th_static_005fimage_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f3);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f8(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f8 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f8.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f8.setParent(null);
    // /templates/section_selector.jsp(98,10) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f8.setKey("ui.panels.createNewInstanceInSection");
    int _jspx_eval_i18n_005fmessage_005f8 = _jspx_th_i18n_005fmessage_005f8.doStartTag();
    if (_jspx_th_i18n_005fmessage_005f8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f8);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f8);
    return false;
  }

  private boolean _jspx_meth_factory_005fencode_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:encode
    org.jboss.dashboard.ui.taglib.factory.EncodeTag _jspx_th_factory_005fencode_005f0 = (org.jboss.dashboard.ui.taglib.factory.EncodeTag) _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.EncodeTag.class);
    _jspx_th_factory_005fencode_005f0.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fencode_005f0.setParent(null);
    // /templates/section_selector.jsp(98,74) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fencode_005f0.setName("addNewComponentToSection");
    int _jspx_eval_factory_005fencode_005f0 = _jspx_th_factory_005fencode_005f0.doStartTag();
    if (_jspx_th_factory_005fencode_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f0);
    return false;
  }

  private boolean _jspx_meth_factory_005furl_005f4(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:url
    org.jboss.dashboard.ui.taglib.factory.URLTag _jspx_th_factory_005furl_005f4 = (org.jboss.dashboard.ui.taglib.factory.URLTag) _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.URLTag.class);
    _jspx_th_factory_005furl_005f4.setPageContext(_jspx_page_context);
    _jspx_th_factory_005furl_005f4.setParent(null);
    // /templates/section_selector.jsp(98,131) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f4.setBean("org.jboss.dashboard.ui.panel.PopupPanelsHandler");
    // /templates/section_selector.jsp(98,131) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f4.setAction("getPanelsPopupPage");
    // /templates/section_selector.jsp(98,131) name = friendly type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f4.setFriendly(false);
    int _jspx_eval_factory_005furl_005f4 = _jspx_th_factory_005furl_005f4.doStartTag();
    if (_jspx_th_factory_005furl_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f4);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f4);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f4(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f4 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f4.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f4.setParent(null);
    // /templates/section_selector.jsp(99,14) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f4.setRelativePath("adminHeader/new-panel.png");
    int _jspx_eval_static_005fimage_005f4 = _jspx_th_static_005fimage_005f4.doStartTag();
    if (_jspx_th_static_005fimage_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f4);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f4);
    return false;
  }

  private boolean _jspx_meth_factory_005fencode_005f1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:encode
    org.jboss.dashboard.ui.taglib.factory.EncodeTag _jspx_th_factory_005fencode_005f1 = (org.jboss.dashboard.ui.taglib.factory.EncodeTag) _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.EncodeTag.class);
    _jspx_th_factory_005fencode_005f1.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fencode_005f1.setParent(null);
    // /templates/section_selector.jsp(102,13) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fencode_005f1.setName("addNewComponentToSection");
    int _jspx_eval_factory_005fencode_005f1 = _jspx_th_factory_005fencode_005f1.doStartTag();
    if (_jspx_th_factory_005fencode_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f1);
    return false;
  }

  private boolean _jspx_meth_factory_005furl_005f5(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:url
    org.jboss.dashboard.ui.taglib.factory.URLTag _jspx_th_factory_005furl_005f5 = (org.jboss.dashboard.ui.taglib.factory.URLTag) _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.URLTag.class);
    _jspx_th_factory_005furl_005f5.setPageContext(_jspx_page_context);
    _jspx_th_factory_005furl_005f5.setParent(null);
    // /templates/section_selector.jsp(111,18) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f5.setBean("org.jboss.dashboard.ui.components.PanelsHandler");
    // /templates/section_selector.jsp(111,18) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f5.setAction("putInstanceToRegion");
    int _jspx_eval_factory_005furl_005f5 = _jspx_th_factory_005furl_005f5.doStartTag();
    if (_jspx_th_factory_005furl_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f5);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f5);
    return false;
  }

  private boolean _jspx_meth_factory_005furl_005f6(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:url
    org.jboss.dashboard.ui.taglib.factory.URLTag _jspx_th_factory_005furl_005f6 = (org.jboss.dashboard.ui.taglib.factory.URLTag) _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.URLTag.class);
    _jspx_th_factory_005furl_005f6.setPageContext(_jspx_page_context);
    _jspx_th_factory_005furl_005f6.setParent(null);
    // /templates/section_selector.jsp(117,18) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f6.setBean("org.jboss.dashboard.ui.components.PanelsHandler");
    // /templates/section_selector.jsp(117,18) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f6.setAction("moveToRegion");
    int _jspx_eval_factory_005furl_005f6 = _jspx_th_factory_005furl_005f6.doStartTag();
    if (_jspx_th_factory_005furl_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f6);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f6);
    return false;
  }
}
