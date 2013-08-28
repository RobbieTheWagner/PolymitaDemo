package org.apache.jsp.envelopes.Default_005fEnvelope;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.jboss.dashboard.ui.SessionManager;
import org.jboss.dashboard.workspace.*;
import org.jboss.dashboard.security.WorkspacePermission;
import java.security.AllPermission;
import java.security.Permission;
import java.util.Locale;
import org.jboss.dashboard.LocaleManager;
import org.jboss.dashboard.ui.NavigationManager;
import org.jboss.dashboard.factory.Factory;
import org.jboss.dashboard.Application;

public final class shared_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList(1);
    _jspx_dependants.add("/common/global.jsp");
  }

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fproperty_0026_005fproperty_005fbean_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fpanel_005fenvelopeHead_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fpanel_005fpropertyRead_0026_005fproperty_005fobject_005flocalize_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fpanel_005fenvelopeContent_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fpanel_005fenvelopeFooter_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fproperty_0026_005fproperty_005fbean_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fpanel_005fenvelopeHead_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fpanel_005fpropertyRead_0026_005fproperty_005fobject_005flocalize_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fpanel_005fenvelopeContent_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fpanel_005fenvelopeFooter_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005fproperty_0026_005fproperty_005fbean_005fnobody.release();
    _005fjspx_005ftagPool_005fpanel_005fenvelopeHead_005fnobody.release();
    _005fjspx_005ftagPool_005fpanel_005fpropertyRead_0026_005fproperty_005fobject_005flocalize_005fnobody.release();
    _005fjspx_005ftagPool_005fpanel_005fenvelopeContent_005fnobody.release();
    _005fjspx_005ftagPool_005fpanel_005fenvelopeFooter_005fnobody.release();
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
      // /common/global.jsp(40,0) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setId("bundle");
      // /common/global.jsp(40,0) name = baseName type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setBaseName("org.jboss.dashboard.ui.messages");
      // /common/global.jsp(40,0) name = locale type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
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
      out.write("<html lang=\"");
      //  factory:property
      org.jboss.dashboard.ui.taglib.factory.PropertyTag _jspx_th_factory_005fproperty_005f0 = (org.jboss.dashboard.ui.taglib.factory.PropertyTag) _005fjspx_005ftagPool_005ffactory_005fproperty_0026_005fproperty_005fbean_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.PropertyTag.class);
      _jspx_th_factory_005fproperty_005f0.setPageContext(_jspx_page_context);
      _jspx_th_factory_005fproperty_005f0.setParent(null);
      // /envelopes/Default_Envelope/shared.jsp(21,12) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_factory_005fproperty_005f0.setBean("org.jboss.dashboard.LocaleManager");
      // /envelopes/Default_Envelope/shared.jsp(21,12) name = property type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_factory_005fproperty_005f0.setProperty("currentLang");
      int _jspx_eval_factory_005fproperty_005f0 = _jspx_th_factory_005fproperty_005f0.doStartTag();
      if (_jspx_th_factory_005fproperty_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005ffactory_005fproperty_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fproperty_005f0);
        return;
      }
      _005fjspx_005ftagPool_005ffactory_005fproperty_0026_005fproperty_005fbean_005fnobody.reuse(_jspx_th_factory_005fproperty_005f0);
      out.write("\">\n");
      out.write("<head>\n");
      out.write("    ");
      if (_jspx_meth_panel_005fenvelopeHead_005f0(_jspx_page_context))
        return;
      out.write("\n");
      out.write("    <title>");
      if (_jspx_meth_panel_005fpropertyRead_005f0(_jspx_page_context))
        return;
      out.write(' ');
      out.write('-');
      out.write(' ');
      if (_jspx_meth_panel_005fpropertyRead_005f1(_jspx_page_context))
        return;
      out.write("</title>\n");
      out.write("    <meta http-equiv=\"Page-Enter\"\n");
      out.write("          content=\"progid:DXImageTransform.Microsoft.Zigzag(duration=0)\">\n");
      out.write("        <meta http-equiv=\"Page-Exit\"\n");
      out.write("          content=\"progid:DXImageTransform.Microsoft.Zigzag(duration=0)\">\n");
      out.write("\n");
      out.write("</head>\n");
      out.write("<body style=\"background:white;\" align=\"center\">\n");
      if (_jspx_meth_panel_005fenvelopeContent_005f0(_jspx_page_context))
        return;
      out.write("\n");
      out.write("<br><p align=\"center\">");
      out.print( Application.lookup().getCopyright() );
      out.write("</p>\n");
      if (_jspx_meth_panel_005fenvelopeFooter_005f0(_jspx_page_context))
        return;
      out.write("\n");
      out.write("</body>\n");
      out.write("</html>");
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

  private boolean _jspx_meth_panel_005fenvelopeHead_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:envelopeHead
    org.jboss.dashboard.ui.taglib.EnvelopeHeadTag _jspx_th_panel_005fenvelopeHead_005f0 = (org.jboss.dashboard.ui.taglib.EnvelopeHeadTag) _005fjspx_005ftagPool_005fpanel_005fenvelopeHead_005fnobody.get(org.jboss.dashboard.ui.taglib.EnvelopeHeadTag.class);
    _jspx_th_panel_005fenvelopeHead_005f0.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fenvelopeHead_005f0.setParent(null);
    int _jspx_eval_panel_005fenvelopeHead_005f0 = _jspx_th_panel_005fenvelopeHead_005f0.doStartTag();
    if (_jspx_th_panel_005fenvelopeHead_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fenvelopeHead_005fnobody.reuse(_jspx_th_panel_005fenvelopeHead_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fenvelopeHead_005fnobody.reuse(_jspx_th_panel_005fenvelopeHead_005f0);
    return false;
  }

  private boolean _jspx_meth_panel_005fpropertyRead_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:propertyRead
    org.jboss.dashboard.ui.taglib.PropertyReadTag _jspx_th_panel_005fpropertyRead_005f0 = (org.jboss.dashboard.ui.taglib.PropertyReadTag) _005fjspx_005ftagPool_005fpanel_005fpropertyRead_0026_005fproperty_005fobject_005flocalize_005fnobody.get(org.jboss.dashboard.ui.taglib.PropertyReadTag.class);
    _jspx_th_panel_005fpropertyRead_005f0.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fpropertyRead_005f0.setParent(null);
    // /envelopes/Default_Envelope/shared.jsp(24,11) name = localize type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fpropertyRead_005f0.setLocalize(new Boolean(true));
    // /envelopes/Default_Envelope/shared.jsp(24,11) name = object type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fpropertyRead_005f0.setObject("workspace");
    // /envelopes/Default_Envelope/shared.jsp(24,11) name = property type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fpropertyRead_005f0.setProperty("title");
    int _jspx_eval_panel_005fpropertyRead_005f0 = _jspx_th_panel_005fpropertyRead_005f0.doStartTag();
    if (_jspx_th_panel_005fpropertyRead_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fpropertyRead_0026_005fproperty_005fobject_005flocalize_005fnobody.reuse(_jspx_th_panel_005fpropertyRead_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fpropertyRead_0026_005fproperty_005fobject_005flocalize_005fnobody.reuse(_jspx_th_panel_005fpropertyRead_005f0);
    return false;
  }

  private boolean _jspx_meth_panel_005fpropertyRead_005f1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:propertyRead
    org.jboss.dashboard.ui.taglib.PropertyReadTag _jspx_th_panel_005fpropertyRead_005f1 = (org.jboss.dashboard.ui.taglib.PropertyReadTag) _005fjspx_005ftagPool_005fpanel_005fpropertyRead_0026_005fproperty_005fobject_005flocalize_005fnobody.get(org.jboss.dashboard.ui.taglib.PropertyReadTag.class);
    _jspx_th_panel_005fpropertyRead_005f1.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fpropertyRead_005f1.setParent(null);
    // /envelopes/Default_Envelope/shared.jsp(24,87) name = localize type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fpropertyRead_005f1.setLocalize(new Boolean(true));
    // /envelopes/Default_Envelope/shared.jsp(24,87) name = object type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fpropertyRead_005f1.setObject("section");
    // /envelopes/Default_Envelope/shared.jsp(24,87) name = property type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fpropertyRead_005f1.setProperty("title");
    int _jspx_eval_panel_005fpropertyRead_005f1 = _jspx_th_panel_005fpropertyRead_005f1.doStartTag();
    if (_jspx_th_panel_005fpropertyRead_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fpropertyRead_0026_005fproperty_005fobject_005flocalize_005fnobody.reuse(_jspx_th_panel_005fpropertyRead_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fpropertyRead_0026_005fproperty_005fobject_005flocalize_005fnobody.reuse(_jspx_th_panel_005fpropertyRead_005f1);
    return false;
  }

  private boolean _jspx_meth_panel_005fenvelopeContent_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:envelopeContent
    org.jboss.dashboard.ui.taglib.EnvelopeContentTag _jspx_th_panel_005fenvelopeContent_005f0 = (org.jboss.dashboard.ui.taglib.EnvelopeContentTag) _005fjspx_005ftagPool_005fpanel_005fenvelopeContent_005fnobody.get(org.jboss.dashboard.ui.taglib.EnvelopeContentTag.class);
    _jspx_th_panel_005fenvelopeContent_005f0.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fenvelopeContent_005f0.setParent(null);
    int _jspx_eval_panel_005fenvelopeContent_005f0 = _jspx_th_panel_005fenvelopeContent_005f0.doStartTag();
    if (_jspx_th_panel_005fenvelopeContent_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fenvelopeContent_005fnobody.reuse(_jspx_th_panel_005fenvelopeContent_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fenvelopeContent_005fnobody.reuse(_jspx_th_panel_005fenvelopeContent_005f0);
    return false;
  }

  private boolean _jspx_meth_panel_005fenvelopeFooter_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:envelopeFooter
    org.jboss.dashboard.ui.taglib.EnvelopeFooterTag _jspx_th_panel_005fenvelopeFooter_005f0 = (org.jboss.dashboard.ui.taglib.EnvelopeFooterTag) _005fjspx_005ftagPool_005fpanel_005fenvelopeFooter_005fnobody.get(org.jboss.dashboard.ui.taglib.EnvelopeFooterTag.class);
    _jspx_th_panel_005fenvelopeFooter_005f0.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fenvelopeFooter_005f0.setParent(null);
    int _jspx_eval_panel_005fenvelopeFooter_005f0 = _jspx_th_panel_005fenvelopeFooter_005f0.doStartTag();
    if (_jspx_th_panel_005fenvelopeFooter_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fenvelopeFooter_005fnobody.reuse(_jspx_th_panel_005fenvelopeFooter_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fenvelopeFooter_005fnobody.reuse(_jspx_th_panel_005fenvelopeFooter_005f0);
    return false;
  }
}
