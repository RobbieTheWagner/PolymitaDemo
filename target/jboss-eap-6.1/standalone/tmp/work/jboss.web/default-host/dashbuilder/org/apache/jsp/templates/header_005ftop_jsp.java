package org.apache.jsp.templates;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.apache.commons.lang.StringUtils;
import org.jboss.dashboard.LocaleManager;
import org.jboss.dashboard.ui.SessionManager;
import org.jboss.dashboard.workspace.*;
import org.jboss.dashboard.security.WorkspacePermission;
import java.security.AllPermission;
import java.security.Permission;
import java.util.Locale;
import org.jboss.dashboard.LocaleManager;
import org.jboss.dashboard.ui.NavigationManager;
import org.jboss.dashboard.factory.Factory;

public final class header_005ftop_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList(1);
    _jspx_dependants.add("/templates/../common/global.jsp");
  }

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.release();
    _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.release();
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.release();
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.release();
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody.release();
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.release();
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

    java.lang.Object _jspx_locale_1 = null;

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
      out.write("<link rel=\"StyleSheet\" media=\"screen\" type=\"text/css\" href=\"");
      if (_jspx_meth_mvc_005fcontext_005f0(_jspx_page_context))
        return;
      out.write("\">\n");
      out.write("\n");
      out.write("<div id=\"menuShow\">\n");
      out.write("\n");
      out.write("    <table id=\"administrationMenuTable\">\n");
      out.write("                    <tr>\n");
      out.write("                       ");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "workspace_selector.jsp", out, true);
      out.write("\n");
      out.write("                        ");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "section_selector.jsp", out, true);
      out.write("\n");
      out.write("                        <td class=\"Right\">\n");
      out.write("                          <div class=\"select\">\n");
      out.write("                            <form action=\"");
      if (_jspx_meth_factory_005fformUrl_005f0(_jspx_page_context))
        return;
      out.write("\" method=\"POST\">\n");
      out.write("                                    ");
      if (_jspx_meth_factory_005fhandler_005f0(_jspx_page_context))
        return;
      out.write("\n");
      out.write("                                    ");
      //  mvc:formatter
      org.jboss.dashboard.ui.taglib.formatter.FormatterTag _jspx_th_mvc_005fformatter_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FormatterTag) _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FormatterTag.class);
      _jspx_th_mvc_005fformatter_005f0.setPageContext(_jspx_page_context);
      _jspx_th_mvc_005fformatter_005f0.setParent(null);
      // /templates/header_top.jsp(40,36) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_mvc_005fformatter_005f0.setName("org.jboss.dashboard.ui.formatters.ForFormatter");
      int _jspx_eval_mvc_005fformatter_005f0 = _jspx_th_mvc_005fformatter_005f0.doStartTag();
      if (_jspx_eval_mvc_005fformatter_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
        if (_jspx_eval_mvc_005fformatter_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.pushBody();
          _jspx_th_mvc_005fformatter_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
          _jspx_th_mvc_005fformatter_005f0.doInitBody();
        }
        do {
          out.write("\n");
          out.write("                                        ");
          if (_jspx_meth_mvc_005fformatterParam_005f0(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("                                        ");
          if (_jspx_meth_mvc_005fformatterParam_005f1(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("                                        ");
          if (_jspx_meth_mvc_005ffragment_005f0(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("                                        ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f1.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /templates/header_top.jsp(47,40) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f1.setName("output");
          int _jspx_eval_mvc_005ffragment_005f1 = _jspx_th_mvc_005ffragment_005f1.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f1.doInitBody();
            }
            do {
              out.write("\n");
              out.write("                                            ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f0.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f1);
              // /templates/header_top.jsp(48,44) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f0.setName("index");
              // /templates/header_top.jsp(48,44) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f0.setId("index");
              int _jspx_eval_mvc_005ffragmentValue_005f0 = _jspx_th_mvc_005ffragmentValue_005f0.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object index = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f0.doInitBody();
                }
                index = (java.lang.Object) _jspx_page_context.findAttribute("index");
                do {
                  out.write("\n");
                  out.write("                                                ");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f1.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f0);
                  // /templates/header_top.jsp(49,48) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f1.setName("element");
                  // /templates/header_top.jsp(49,48) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f1.setId("locale");
                  int _jspx_eval_mvc_005ffragmentValue_005f1 = _jspx_th_mvc_005ffragmentValue_005f1.doStartTag();
                  if (_jspx_eval_mvc_005ffragmentValue_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                    java.lang.Object locale = null;
                    if (_jspx_eval_mvc_005ffragmentValue_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.pushBody();
                      _jspx_th_mvc_005ffragmentValue_005f1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                      _jspx_th_mvc_005ffragmentValue_005f1.doInitBody();
                    }
                    locale = (java.lang.Object) _jspx_page_context.findAttribute("locale");
                    do {
                      out.write("\n");
                      out.write("                                                    ");
  String selected;
                                                        if (((Locale) locale).toString().equals(LocaleManager.currentLang())) selected = "selected class=\"skn-important\"";
                                                        else selected="";
                                                    
                      out.write("\n");
                      out.write("                                                    <option ");
                      out.print(selected);
                      out.write("  value=\"");
                      out.print(((Locale)locale).toString());
                      out.write("\">\n");
                      out.write("                                                        ");
                      out.print(StringUtils.capitalize(((Locale)locale).getDisplayName((Locale)locale)));
                      out.write("\n");
                      out.write("                                                    </option>\n");
                      out.write("                                                ");
                      int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f1.doAfterBody();
                      locale = (java.lang.Object) _jspx_page_context.findAttribute("locale");
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
                  out.write("                                            ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f0.doAfterBody();
                  index = (java.lang.Object) _jspx_page_context.findAttribute("index");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f0);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f0);
              out.write("\n");
              out.write("                                        ");
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
          out.write("                                        ");
          if (_jspx_meth_mvc_005ffragment_005f2(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("                                    ");
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
      out.write("\n");
      out.write("                            ");
      //  i18n:message
      org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f0 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
      _jspx_th_i18n_005fmessage_005f0.setPageContext(_jspx_page_context);
      _jspx_th_i18n_005fmessage_005f0.setParent(null);
      // /templates/header_top.jsp(64,28) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fmessage_005f0.setKey("ui.configuration");
      // /templates/header_top.jsp(64,28) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fmessage_005f0.setId("configModeMsg");
      int _jspx_eval_i18n_005fmessage_005f0 = _jspx_th_i18n_005fmessage_005f0.doStartTag();
      if (_jspx_th_i18n_005fmessage_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f0);
        return;
      }
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f0);
      java.lang.String configModeMsg = null;
      configModeMsg = (java.lang.String) _jspx_page_context.findAttribute("configModeMsg");
      out.write("\n");
      out.write("                            <a href=\"");
      if (_jspx_meth_factory_005furl_005f0(_jspx_page_context))
        return;
      out.write("\">\n");
      out.write("                            <img  border=\"0\" src=\"");
      if (_jspx_meth_static_005fimage_005f0(_jspx_page_context))
        return;
      out.write("\" title=\"");
      out.print(configModeMsg);
      out.write("\"/>\n");
      out.write("                            </a>\n");
      out.write("\t\t\t\t\t\t\t\t");
      //  i18n:message
      org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f1 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
      _jspx_th_i18n_005fmessage_005f1.setPageContext(_jspx_page_context);
      _jspx_th_i18n_005fmessage_005f1.setParent(null);
      // /templates/header_top.jsp(68,8) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fmessage_005f1.setKey("ui.logout");
      // /templates/header_top.jsp(68,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fmessage_005f1.setId("loginLogoutMsg");
      int _jspx_eval_i18n_005fmessage_005f1 = _jspx_th_i18n_005fmessage_005f1.doStartTag();
      if (_jspx_th_i18n_005fmessage_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f1);
        return;
      }
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fid_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f1);
      java.lang.String loginLogoutMsg = null;
      loginLogoutMsg = (java.lang.String) _jspx_page_context.findAttribute("loginLogoutMsg");
      out.write("\n");
      out.write("\t\t\t\t\t\t\t\t<a href=\"");
      if (_jspx_meth_factory_005furl_005f1(_jspx_page_context))
        return;
      out.write("\" onclick=\"return confirm('");
      if (_jspx_meth_i18n_005fmessage_005f2(_jspx_page_context))
        return;
      out.write("')\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<img src=\"");
      if (_jspx_meth_static_005fimage_005f1(_jspx_page_context))
        return;
      out.write("\"   border=\"0\" title=\"");
      out.print(loginLogoutMsg);
      out.write("\"/>\n");
      out.write("                            </a>\n");
      out.write("                       </form>\n");
      out.write("                       </div>\n");
      out.write("                        </td>\n");
      out.write("                    </tr>\n");
      out.write("                    <tr>\n");
      out.write("                        <td class=\"shadow\" colspan=\"3\"><a href=\"#\" onClick=\"moveOffMenu();moveOnSelector();return false;\"><img src=\"");
      if (_jspx_meth_static_005fimage_005f2(_jspx_page_context))
        return;
      out.write("\" title=\"");
      if (_jspx_meth_i18n_005fmessage_005f3(_jspx_page_context))
        return;
      out.write("\"></a></td>\n");
      out.write("                    </tr>\n");
      out.write("    </table>\n");
      out.write("\n");
      out.write("</div>\n");
      out.write("\n");
      out.write("<div id=\"menuSelect\"></div>\n");
      out.write("\n");
      out.write("<div id=\"menuOn\">\n");
      out.write("<table>\n");
      out.write("    <tr>\n");
      out.write("        <td class=\"shadow\"><a href=\"#\" onClick=\"moveOnMenu();moveOffSelector();return false;\"><img src=\"");
      if (_jspx_meth_static_005fimage_005f3(_jspx_page_context))
        return;
      out.write("\" title=\"");
      if (_jspx_meth_i18n_005fmessage_005f4(_jspx_page_context))
        return;
      out.write("\"></a></td>\n");
      out.write("    </tr>\n");
      out.write("</table>\n");
      out.write("</div>\n");
      out.write("\n");
      out.write("\n");
      out.write("<SCRIPT LANGUAGE=\"JavaScript\">\n");
      out.write("    var spacerNode = document.createElement(\"div\");\n");
      out.write("    spacerNode.style.height=\"24px\";\n");
      out.write("    spacerNode.style.padding=\"0px\";\n");
      out.write("    spacerNode.style.margin=\"6px\";\n");
      out.write("    spacerNode.style.border=\"none 0px\";\n");
      out.write("    spacerNode.id=\"spacer\";\n");
      out.write("    document.body.insertBefore(spacerNode, document.body.childNodes[0]);\n");
      out.write("    document.body.insertBefore(document.getElementById(\"menuShow\"),document.body.childNodes[0]);\n");
      out.write("</SCRIPT>\n");
      out.write("\n");
      out.write("<!--\n");
      out.write("Put the following script immediately *after* the\n");
      out.write("<div>'s (above) in your page. Set the variables as\n");
      out.write("indicated in the script.\n");
      out.write("//-->\n");
      out.write("\n");
      out.write("<SCRIPT LANGUAGE=\"JavaScript\">\n");
      out.write("\n");
      out.write("Show =\"yes\";\n");
      out.write("\n");
      out.write("var OffX = -100;\n");
      out.write("\n");
      out.write("// Set the PosX and PosY variables\n");
      out.write("// to the location on the screen where the\n");
      out.write("// menu should position (in pixels) when stopped.\n");
      out.write("\n");
      out.write("var PosX =  0;\n");
      out.write("var PosY =  0;\n");
      out.write("\n");
      out.write("// Usually, use the settings shown; but you can\n");
      out.write("// change the speed and the increment of motion\n");
      out.write("// across the screen, below.\n");
      out.write("\n");
      out.write("var speed        = 1;\n");
      out.write("var increment    = 5;\n");
      out.write("var incrementNS4 = 25; // for slower NS4 browsers\n");
      out.write("\n");
      out.write("// do not edit below this line\n");
      out.write("// ===========================\n");
      out.write("\n");
      out.write("var is_NS = navigator.appName==\"Netscape\";\n");
      out.write("var is_Ver = parseInt(navigator.appVersion);\n");
      out.write("var is_NS4 = is_NS&&is_Ver>=4&&is_Ver<5;\n");
      out.write("var is_NS5up = is_NS&&is_Ver>=5;\n");
      out.write("\n");
      out.write("var MenuX = OffX;\n");
      out.write("var SelX = PosX;\n");
      out.write("var sPosX = PosX;\n");
      out.write("var sOffX = OffX;\n");
      out.write("\n");
      out.write("if (Show == \"yes\") {\n");
      out.write("sPosX = OffX;\n");
      out.write("sOffX = PosX;\n");
      out.write("MenuX = sOffX;\n");
      out.write("SelX = sPosX;\n");
      out.write("}\n");
      out.write("\n");
      out.write("if (is_NS4) {\n");
      out.write("increment = incrementNS4;\n");
      out.write("Lq = \"document.layers.\";\n");
      out.write("Sq = \"\";\n");
      out.write("eval(Lq+'menuSelect'+Sq+'.left=sPosX');\n");
      out.write("eval(Lq+'menuShow'+Sq+'.left=sOffX');\n");
      out.write("eval(Lq+'menuSelect'+Sq+'.top=PosY');\n");
      out.write("eval(Lq+'menuShow'+Sq+'.top=PosY');\n");
      out.write("} else {\n");
      out.write("Lq = \"document.all.\";\n");
      out.write("Sq = \".style\";\n");
      out.write("document.getElementById('menuSelect').style.left = sPosX+\"px\";\n");
      out.write("document.getElementById('menuShow').style.left = sOffX+\"px\";\n");
      out.write("document.getElementById('menuSelect').style.top = PosY+\"px\";\n");
      out.write("document.getElementById('menuShow').style.top = PosY+\"px\";\n");
      out.write("}\n");
      out.write("\n");
      out.write("function moveOnMenu() {\n");
      out.write("if (MenuX < PosX) {\n");
      out.write("MenuX = MenuX + increment;\n");
      out.write("if (is_NS5up) {\n");
      out.write("document.getElementById('menuShow').style.top = MenuX+\"px\";\n");
      out.write("} else {\n");
      out.write("eval(Lq+'menuShow'+Sq+'.top=MenuX');\n");
      out.write("}\n");
      out.write("setTimeout('moveOnMenu()',speed);\n");
      out.write("   }\n");
      out.write("}\n");
      out.write("\n");
      out.write("function moveOffMenu() {\n");
      out.write("if (MenuX > OffX) {\n");
      out.write("MenuX = MenuX - increment;\n");
      out.write("if (is_NS5up) {\n");
      out.write("document.getElementById('menuShow').style.top = MenuX+\"px\";\n");
      out.write("} else {\n");
      out.write("eval(Lq+'menuShow'+Sq+'.top=MenuX');\n");
      out.write("}\n");
      out.write("setTimeout('moveOffMenu()',speed);\n");
      out.write("   }\n");
      out.write("}\n");
      out.write("\n");
      out.write("function moveOffSelector() {\n");
      out.write("    if (SelX > OffX) {\n");
      out.write("        SelX = SelX - increment;\n");
      out.write("        if (is_NS5up) {\n");
      out.write("            document.getElementById('menuSelect').style.top = SelX+\"px\";\n");
      out.write("            //document.getElementById('spacer').style.height += increment;\n");
      out.write("        } else {\n");
      out.write("            eval(Lq+'menuSelect'+Sq+'.top=SelX');\n");
      out.write("            var spacer = document.getElementById('spacer');\n");
      out.write("            spacer.style.pixelHeight += increment;\n");
      out.write("            if( spacer.style.pixelHeight > 0)\n");
      out.write("                spacer.style.display='block';\n");
      out.write("            else\n");
      out.write("                spacer.style.display='none';\n");
      out.write("        }\n");
      out.write("        setTimeout('moveOffSelector()',speed);\n");
      out.write("    }\n");
      out.write("    else{\n");
      out.write("        document.getElementById('spacer').style.display='block';\n");
      out.write("    }\n");
      out.write("}\n");
      out.write("\n");
      out.write("function moveOnSelector() {\n");
      out.write("    if (SelX < PosX) {\n");
      out.write("        SelX = SelX + increment;\n");
      out.write("        if (is_NS5up) {\n");
      out.write("            document.getElementById('menuSelect').style.top = SelX+\"px\";\n");
      out.write("            //document.getElementById('spacer').style.height -= increment;\n");
      out.write("        } else {\n");
      out.write("            eval(Lq+'menuSelect'+Sq+'.top=SelX');\n");
      out.write("            var spacer = document.getElementById('spacer');\n");
      out.write("            spacer.style.pixelHeight -= increment;\n");
      out.write("            if( spacer.style.pixelHeight > 0)\n");
      out.write("                spacer.style.display='block';\n");
      out.write("            else\n");
      out.write("                spacer.style.display='none';\n");
      out.write("        }\n");
      out.write("        setTimeout('moveOnSelector()',speed);\n");
      out.write("    }\n");
      out.write("    else{\n");
      out.write("        document.getElementById('spacer').style.display='none';\n");
      out.write("    }\n");
      out.write("}\n");
      out.write("//  End -->\n");
      out.write("</script>\n");
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

  private boolean _jspx_meth_mvc_005fcontext_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:context
    org.jboss.dashboard.ui.taglib.ContextTag _jspx_th_mvc_005fcontext_005f0 = (org.jboss.dashboard.ui.taglib.ContextTag) _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.get(org.jboss.dashboard.ui.taglib.ContextTag.class);
    _jspx_th_mvc_005fcontext_005f0.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005fcontext_005f0.setParent(null);
    // /templates/header_top.jsp(28,60) name = uri type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fcontext_005f0.setUri("/templates/css/administration_bar.css");
    int _jspx_eval_mvc_005fcontext_005f0 = _jspx_th_mvc_005fcontext_005f0.doStartTag();
    if (_jspx_th_mvc_005fcontext_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f0);
    return false;
  }

  private boolean _jspx_meth_factory_005fformUrl_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:formUrl
    org.jboss.dashboard.ui.taglib.factory.FormURLTag _jspx_th_factory_005fformUrl_005f0 = (org.jboss.dashboard.ui.taglib.factory.FormURLTag) _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.FormURLTag.class);
    _jspx_th_factory_005fformUrl_005f0.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fformUrl_005f0.setParent(null);
    int _jspx_eval_factory_005fformUrl_005f0 = _jspx_th_factory_005fformUrl_005f0.doStartTag();
    if (_jspx_th_factory_005fformUrl_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody.reuse(_jspx_th_factory_005fformUrl_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fformUrl_005fnobody.reuse(_jspx_th_factory_005fformUrl_005f0);
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
    // /templates/header_top.jsp(39,36) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fhandler_005f0.setBean("org.jboss.dashboard.ui.config.TreeShortcutHandler");
    // /templates/header_top.jsp(39,36) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fhandler_005f0.setAction("changeLanguage");
    int _jspx_eval_factory_005fhandler_005f0 = _jspx_th_factory_005fhandler_005f0.doStartTag();
    if (_jspx_th_factory_005fhandler_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005fhandler_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005fhandler_005f0);
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
    // /templates/header_top.jsp(41,40) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fformatterParam_005f0.setName("factoryElement");
    // /templates/header_top.jsp(41,40) name = value type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fformatterParam_005f0.setValue("org.jboss.dashboard.LocaleManager");
    int _jspx_eval_mvc_005fformatterParam_005f0 = _jspx_th_mvc_005fformatterParam_005f0.doStartTag();
    if (_jspx_th_mvc_005fformatterParam_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_mvc_005fformatterParam_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_mvc_005fformatterParam_005f0);
    return false;
  }

  private boolean _jspx_meth_mvc_005fformatterParam_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:formatterParam
    org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag _jspx_th_mvc_005fformatterParam_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag) _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag.class);
    _jspx_th_mvc_005fformatterParam_005f1.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005fformatterParam_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /templates/header_top.jsp(42,40) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fformatterParam_005f1.setName("property");
    // /templates/header_top.jsp(42,40) name = value type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fformatterParam_005f1.setValue("platformAvailableLocales");
    int _jspx_eval_mvc_005fformatterParam_005f1 = _jspx_th_mvc_005fformatterParam_005f1.doStartTag();
    if (_jspx_th_mvc_005fformatterParam_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_mvc_005fformatterParam_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_mvc_005fformatterParam_005f1);
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
    // /templates/header_top.jsp(43,40) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f0.setName("outputStart");
    int _jspx_eval_mvc_005ffragment_005f0 = _jspx_th_mvc_005ffragment_005f0.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f0.doInitBody();
      }
      do {
        out.write("\n");
        out.write("                                           <div class=\"select\"><select class=\"select\" onchange=\"this.form.submit();\" name=\"lang\" >\n");
        out.write("\n");
        out.write("                                        ");
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

  private boolean _jspx_meth_mvc_005ffragment_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f2 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f2.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /templates/header_top.jsp(60,40) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f2.setName("outputEnd");
    int _jspx_eval_mvc_005ffragment_005f2 = _jspx_th_mvc_005ffragment_005f2.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f2.doInitBody();
      }
      do {
        out.write("\n");
        out.write("                                            </select></div>\n");
        out.write("                                        ");
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

  private boolean _jspx_meth_factory_005furl_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:url
    org.jboss.dashboard.ui.taglib.factory.URLTag _jspx_th_factory_005furl_005f0 = (org.jboss.dashboard.ui.taglib.factory.URLTag) _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.URLTag.class);
    _jspx_th_factory_005furl_005f0.setPageContext(_jspx_page_context);
    _jspx_th_factory_005furl_005f0.setParent(null);
    // /templates/header_top.jsp(65,37) name = friendly type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f0.setFriendly(false);
    // /templates/header_top.jsp(65,37) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f0.setBean("org.jboss.dashboard.ui.NavigationManager");
    // /templates/header_top.jsp(65,37) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f0.setAction("config");
    int _jspx_eval_factory_005furl_005f0 = _jspx_th_factory_005furl_005f0.doStartTag();
    if (_jspx_th_factory_005furl_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005ffriendly_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f0);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f0 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f0.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f0.setParent(null);
    // /templates/header_top.jsp(66,50) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f0.setRelativePath("adminHeader/processes.png");
    int _jspx_eval_static_005fimage_005f0 = _jspx_th_static_005fimage_005f0.doStartTag();
    if (_jspx_th_static_005fimage_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f0);
    return false;
  }

  private boolean _jspx_meth_factory_005furl_005f1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:url
    org.jboss.dashboard.ui.taglib.factory.URLTag _jspx_th_factory_005furl_005f1 = (org.jboss.dashboard.ui.taglib.factory.URLTag) _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.URLTag.class);
    _jspx_th_factory_005furl_005f1.setPageContext(_jspx_page_context);
    _jspx_th_factory_005furl_005f1.setParent(null);
    // /templates/header_top.jsp(69,17) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f1.setBean("org.jboss.dashboard.ui.components.LogoutComponent");
    // /templates/header_top.jsp(69,17) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f1.setAction("logout");
    int _jspx_eval_factory_005furl_005f1 = _jspx_th_factory_005furl_005f1.doStartTag();
    if (_jspx_th_factory_005furl_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f1);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f2(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f2 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f2.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f2.setParent(null);
    // /templates/header_top.jsp(69,131) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f2.setKey("ui.workspace.confirmLogout");
    int _jspx_eval_i18n_005fmessage_005f2 = _jspx_th_i18n_005fmessage_005f2.doStartTag();
    if (_jspx_eval_i18n_005fmessage_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_i18n_005fmessage_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_i18n_005fmessage_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_i18n_005fmessage_005f2.doInitBody();
      }
      do {
        out.write("!!!Desea desconectarse");
        int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f2.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_i18n_005fmessage_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_i18n_005fmessage_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f2);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f1 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f1.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f1.setParent(null);
    // /templates/header_top.jsp(70,19) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f1.setRelativePath("adminHeader/login-logout.png");
    int _jspx_eval_static_005fimage_005f1 = _jspx_th_static_005fimage_005f1.doStartTag();
    if (_jspx_th_static_005fimage_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f1);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f2(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f2 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f2.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f2.setParent(null);
    // /templates/header_top.jsp(77,132) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f2.setRelativePath("adminHeader/admin_up.png");
    int _jspx_eval_static_005fimage_005f2 = _jspx_th_static_005fimage_005f2.doStartTag();
    if (_jspx_th_static_005fimage_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f2);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f3(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f3 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f3.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f3.setParent(null);
    // /templates/header_top.jsp(77,196) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f3.setKey("ui.hideAdminMenu");
    int _jspx_eval_i18n_005fmessage_005f3 = _jspx_th_i18n_005fmessage_005f3.doStartTag();
    if (_jspx_th_i18n_005fmessage_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f3);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f3(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f3 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f3.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f3.setParent(null);
    // /templates/header_top.jsp(88,104) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f3.setRelativePath("adminHeader/admin_up.png");
    int _jspx_eval_static_005fimage_005f3 = _jspx_th_static_005fimage_005f3.doStartTag();
    if (_jspx_th_static_005fimage_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f3);
    return false;
  }

  private boolean _jspx_meth_i18n_005fmessage_005f4(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  i18n:message
    org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f4 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
    _jspx_th_i18n_005fmessage_005f4.setPageContext(_jspx_page_context);
    _jspx_th_i18n_005fmessage_005f4.setParent(null);
    // /templates/header_top.jsp(88,168) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_i18n_005fmessage_005f4.setKey("ui.showAdminMenu");
    int _jspx_eval_i18n_005fmessage_005f4 = _jspx_th_i18n_005fmessage_005f4.doStartTag();
    if (_jspx_th_i18n_005fmessage_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f4);
      return true;
    }
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f4);
    return false;
  }
}
