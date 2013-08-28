package org.apache.jsp.components.bam.provider.manager;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.jboss.dashboard.LocaleManager;
import org.jboss.dashboard.ui.components.DataProviderHandler;

public final class data_005fprovider_005fshow_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.release();
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.release();
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.release();
    _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody.release();
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.release();
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction.release();
    _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.release();
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

    java.lang.Object _jspx_canEdit_1 = null;
    java.lang.Object _jspx_canEditProperties_2 = null;
    java.lang.Object _jspx_code_3 = null;
    java.lang.Object _jspx_index_4 = null;
    java.lang.Object _jspx_usedByOtherKpis_5 = null;
    java.lang.Object _jspx_value_6 = null;

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
      //  i18n:bundle
      java.util.ResourceBundle bundle = null;
      org.apache.taglibs.i18n.BundleTag _jspx_th_i18n_005fbundle_005f0 = (org.apache.taglibs.i18n.BundleTag) _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.get(org.apache.taglibs.i18n.BundleTag.class);
      _jspx_th_i18n_005fbundle_005f0.setPageContext(_jspx_page_context);
      _jspx_th_i18n_005fbundle_005f0.setParent(null);
      // /components/bam/provider/manager/data_provider_show.jsp(26,0) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setId("bundle");
      // /components/bam/provider/manager/data_provider_show.jsp(26,0) name = baseName type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setBaseName("org.jboss.dashboard.displayer.messages");
      // /components/bam/provider/manager/data_provider_show.jsp(26,0) name = locale type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setLocale(LocaleManager.currentLocale());
      int _jspx_eval_i18n_005fbundle_005f0 = _jspx_th_i18n_005fbundle_005f0.doStartTag();
      bundle = (java.util.ResourceBundle) _jspx_page_context.findAttribute("bundle");
      if (_jspx_th_i18n_005fbundle_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.reuse(_jspx_th_i18n_005fbundle_005f0);
        return;
      }
      bundle = (java.util.ResourceBundle) _jspx_page_context.findAttribute("bundle");
      _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.reuse(_jspx_th_i18n_005fbundle_005f0);
      out.write('\n');
      //  mvc:formatter
      org.jboss.dashboard.ui.taglib.formatter.FormatterTag _jspx_th_mvc_005fformatter_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FormatterTag) _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FormatterTag.class);
      _jspx_th_mvc_005fformatter_005f0.setPageContext(_jspx_page_context);
      _jspx_th_mvc_005fformatter_005f0.setParent(null);
      // /components/bam/provider/manager/data_provider_show.jsp(27,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_mvc_005fformatter_005f0.setName("org.jboss.dashboard.ui.formatters.DataProviderFormatter");
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
          if (_jspx_meth_mvc_005ffragment_005f0(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f1.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /components/bam/provider/manager/data_provider_show.jsp(32,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f1.setName("outputEmpty");
          int _jspx_eval_mvc_005ffragment_005f1 = _jspx_th_mvc_005ffragment_005f1.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f1.doInitBody();
            }
            do {
              out.write("\n");
              out.write("        <tr>\n");
              out.write("            <td width=\"100%\">\n");
              out.write("                <span class=\"skn_error\">\n");
              out.write("                    ");
              //  i18n:message
              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f0 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
              _jspx_th_i18n_005fmessage_005f0.setPageContext(_jspx_page_context);
              _jspx_th_i18n_005fmessage_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f1);
              // /components/bam/provider/manager/data_provider_show.jsp(36,20) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_i18n_005fmessage_005f0.setKey(DataProviderHandler.I18N_PREFFIX + "noDataProviders");
              int _jspx_eval_i18n_005fmessage_005f0 = _jspx_th_i18n_005fmessage_005f0.doStartTag();
              if (_jspx_eval_i18n_005fmessage_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                if (_jspx_eval_i18n_005fmessage_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_i18n_005fmessage_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_i18n_005fmessage_005f0.doInitBody();
                }
                do {
                  out.write("!!no hay proveedores de datos");
                  int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f0.doAfterBody();
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_i18n_005fmessage_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_i18n_005fmessage_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f0);
                return;
              }
              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f0);
              out.write("\n");
              out.write("                </span>\n");
              out.write("            </td>\n");
              out.write("        </tr>\n");
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
          out.write("\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f2 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f2.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /components/bam/provider/manager/data_provider_show.jsp(42,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f2.setName("outputNewDataProvider");
          int _jspx_eval_mvc_005ffragment_005f2 = _jspx_th_mvc_005ffragment_005f2.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f2.doInitBody();
            }
            do {
              out.write("\n");
              out.write("           <tr><td width=\"100%\"><table align=\"center\" width=\"100%\" cellspacing=\"0\" cellpadding=\"4\" border=\"0\">\n");
              out.write("                <tr style=\"display:table-row; width:12px;\">\n");
              out.write("                    <td class=\"skn-table_border\">\n");
              out.write("                       <a id=\"");
              if (_jspx_meth_factory_005fencode_005f0(_jspx_th_mvc_005ffragment_005f2, _jspx_page_context))
                return;
              out.write("\" href=\"");
              if (_jspx_meth_factory_005furl_005f0(_jspx_th_mvc_005ffragment_005f2, _jspx_page_context))
                return;
              out.write("\">\n");
              out.write("                            <img style=\"border:none; vertical-align:middle;\" src=\"");
              if (_jspx_meth_static_005fimage_005f0(_jspx_th_mvc_005ffragment_005f2, _jspx_page_context))
                return;
              out.write("\" alt=\"");
              //  i18n:message
              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f1 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
              _jspx_th_i18n_005fmessage_005f1.setPageContext(_jspx_page_context);
              _jspx_th_i18n_005fmessage_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f2);
              // /components/bam/provider/manager/data_provider_show.jsp(47,145) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_i18n_005fmessage_005f1.setKey(DataProviderHandler.I18N_PREFFIX + "createNewDataProvider");
              int _jspx_eval_i18n_005fmessage_005f1 = _jspx_th_i18n_005fmessage_005f1.doStartTag();
              if (_jspx_eval_i18n_005fmessage_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                if (_jspx_eval_i18n_005fmessage_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_i18n_005fmessage_005f1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_i18n_005fmessage_005f1.doInitBody();
                }
                do {
                  out.write("!!create");
                  int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f1.doAfterBody();
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_i18n_005fmessage_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_i18n_005fmessage_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f1);
                return;
              }
              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f1);
              out.write("\" title=\"");
              //  i18n:message
              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f2 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
              _jspx_th_i18n_005fmessage_005f2.setPageContext(_jspx_page_context);
              _jspx_th_i18n_005fmessage_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f2);
              // /components/bam/provider/manager/data_provider_show.jsp(47,261) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_i18n_005fmessage_005f2.setKey(DataProviderHandler.I18N_PREFFIX + "createNewDataProvider");
              int _jspx_eval_i18n_005fmessage_005f2 = _jspx_th_i18n_005fmessage_005f2.doStartTag();
              if (_jspx_eval_i18n_005fmessage_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                if (_jspx_eval_i18n_005fmessage_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_i18n_005fmessage_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_i18n_005fmessage_005f2.doInitBody();
                }
                do {
                  out.write("!!create");
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
                return;
              }
              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f2);
              out.write("\">\n");
              out.write("                            ");
              //  i18n:message
              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f3 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
              _jspx_th_i18n_005fmessage_005f3.setPageContext(_jspx_page_context);
              _jspx_th_i18n_005fmessage_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f2);
              // /components/bam/provider/manager/data_provider_show.jsp(48,28) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_i18n_005fmessage_005f3.setKey(DataProviderHandler.I18N_PREFFIX + "createNewDataProvider");
              int _jspx_eval_i18n_005fmessage_005f3 = _jspx_th_i18n_005fmessage_005f3.doStartTag();
              if (_jspx_eval_i18n_005fmessage_005f3 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                if (_jspx_eval_i18n_005fmessage_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_i18n_005fmessage_005f3.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_i18n_005fmessage_005f3.doInitBody();
                }
                do {
                  out.write("!!create");
                  int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f3.doAfterBody();
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_i18n_005fmessage_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_i18n_005fmessage_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f3);
                return;
              }
              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f3);
              out.write("\n");
              out.write("                       </a>&nbsp;\n");
              out.write("                       <script defer>\n");
              out.write("                           setAjax('");
              if (_jspx_meth_factory_005fencode_005f1(_jspx_th_mvc_005ffragment_005f2, _jspx_page_context))
                return;
              out.write("');\n");
              out.write("                       </script>\n");
              out.write("                    </td>\n");
              out.write("                </tr>\n");
              out.write("            </table></td></tr>\n");
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
          // /components/bam/provider/manager/data_provider_show.jsp(57,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f3.setName("outputStartDataProviders");
          int _jspx_eval_mvc_005ffragment_005f3 = _jspx_th_mvc_005ffragment_005f3.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f3 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f3.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f3.doInitBody();
            }
            do {
              out.write("\n");
              out.write("        <tr><td width=\"100%\">\n");
              out.write("        <table class=\"skn-table_border\" cellspacing=\"1\" cellpadding=\"4\" border=\"0\" align=\"center\" width=\"100%\">\n");
              out.write("        <tr class=\"skn-table_header\">\n");
              out.write("            <td colspan=\"3\">\n");
              out.write("                ");
              //  i18n:message
              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f4 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
              _jspx_th_i18n_005fmessage_005f4.setPageContext(_jspx_page_context);
              _jspx_th_i18n_005fmessage_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f3);
              // /components/bam/provider/manager/data_provider_show.jsp(62,16) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_i18n_005fmessage_005f4.setKey(DataProviderHandler.I18N_PREFFIX + "header_actions");
              int _jspx_eval_i18n_005fmessage_005f4 = _jspx_th_i18n_005fmessage_005f4.doStartTag();
              if (_jspx_eval_i18n_005fmessage_005f4 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                if (_jspx_eval_i18n_005fmessage_005f4 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_i18n_005fmessage_005f4.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_i18n_005fmessage_005f4.doInitBody();
                }
                do {
                  out.write("!!! Acciones");
                  int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f4.doAfterBody();
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_i18n_005fmessage_005f4 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_i18n_005fmessage_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f4);
                return;
              }
              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f4);
              out.write("\n");
              out.write("            </td>\n");
              out.write("            <td>\n");
              out.write("                ");
              //  i18n:message
              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f5 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
              _jspx_th_i18n_005fmessage_005f5.setPageContext(_jspx_page_context);
              _jspx_th_i18n_005fmessage_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f3);
              // /components/bam/provider/manager/data_provider_show.jsp(65,16) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_i18n_005fmessage_005f5.setKey(DataProviderHandler.I18N_PREFFIX + "header_dataProviderName");
              int _jspx_eval_i18n_005fmessage_005f5 = _jspx_th_i18n_005fmessage_005f5.doStartTag();
              if (_jspx_eval_i18n_005fmessage_005f5 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                if (_jspx_eval_i18n_005fmessage_005f5 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_i18n_005fmessage_005f5.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_i18n_005fmessage_005f5.doInitBody();
                }
                do {
                  out.write("!!! Nombre");
                  int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f5.doAfterBody();
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_i18n_005fmessage_005f5 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_i18n_005fmessage_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f5);
                return;
              }
              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f5);
              out.write("\n");
              out.write("            </td>\n");
              out.write("            <td>\n");
              out.write("                ");
              //  i18n:message
              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f6 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
              _jspx_th_i18n_005fmessage_005f6.setPageContext(_jspx_page_context);
              _jspx_th_i18n_005fmessage_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f3);
              // /components/bam/provider/manager/data_provider_show.jsp(68,16) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_i18n_005fmessage_005f6.setKey(DataProviderHandler.I18N_PREFFIX + "selectProviderType");
              int _jspx_eval_i18n_005fmessage_005f6 = _jspx_th_i18n_005fmessage_005f6.doStartTag();
              if (_jspx_eval_i18n_005fmessage_005f6 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                if (_jspx_eval_i18n_005fmessage_005f6 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_i18n_005fmessage_005f6.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_i18n_005fmessage_005f6.doInitBody();
                }
                do {
                  out.write("!!! Tipo");
                  int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f6.doAfterBody();
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_i18n_005fmessage_005f6 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_i18n_005fmessage_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f6);
                return;
              }
              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f6);
              out.write("\n");
              out.write("            </td>\n");
              out.write("        </tr>\n");
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
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f4 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f4.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /components/bam/provider/manager/data_provider_show.jsp(72,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f4.setName("outputDataProvider");
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
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f0.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f4);
              // /components/bam/provider/manager/data_provider_show.jsp(73,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f0.setName("canDelete");
              // /components/bam/provider/manager/data_provider_show.jsp(73,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f0.setId("canDelete");
              int _jspx_eval_mvc_005ffragmentValue_005f0 = _jspx_th_mvc_005ffragmentValue_005f0.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object canDelete = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f0.doInitBody();
                }
                canDelete = (java.lang.Object) _jspx_page_context.findAttribute("canDelete");
                do {
                  out.write("\n");
                  out.write("        ");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f1.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f0);
                  // /components/bam/provider/manager/data_provider_show.jsp(74,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f1.setName("canEdit");
                  // /components/bam/provider/manager/data_provider_show.jsp(74,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f1.setId("canEdit");
                  int _jspx_eval_mvc_005ffragmentValue_005f1 = _jspx_th_mvc_005ffragmentValue_005f1.doStartTag();
                  if (_jspx_eval_mvc_005ffragmentValue_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                    java.lang.Object canEdit = null;
                    if (_jspx_eval_mvc_005ffragmentValue_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.pushBody();
                      _jspx_th_mvc_005ffragmentValue_005f1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                      _jspx_th_mvc_005ffragmentValue_005f1.doInitBody();
                    }
                    canEdit = (java.lang.Object) _jspx_page_context.findAttribute("canEdit");
                    do {
                      out.write("\n");
                      out.write("        ");
                      //  mvc:fragmentValue
                      org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f2 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                      _jspx_th_mvc_005ffragmentValue_005f2.setPageContext(_jspx_page_context);
                      _jspx_th_mvc_005ffragmentValue_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f1);
                      // /components/bam/provider/manager/data_provider_show.jsp(75,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f2.setName("canEditProperties");
                      // /components/bam/provider/manager/data_provider_show.jsp(75,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f2.setId("canEditProperties");
                      int _jspx_eval_mvc_005ffragmentValue_005f2 = _jspx_th_mvc_005ffragmentValue_005f2.doStartTag();
                      if (_jspx_eval_mvc_005ffragmentValue_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                        java.lang.Object canEditProperties = null;
                        if (_jspx_eval_mvc_005ffragmentValue_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                          out = _jspx_page_context.pushBody();
                          _jspx_th_mvc_005ffragmentValue_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                          _jspx_th_mvc_005ffragmentValue_005f2.doInitBody();
                        }
                        canEditProperties = (java.lang.Object) _jspx_page_context.findAttribute("canEditProperties");
                        do {
                          out.write("\n");
                          out.write("        ");
                          //  mvc:fragmentValue
                          org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f3 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                          _jspx_th_mvc_005ffragmentValue_005f3.setPageContext(_jspx_page_context);
                          _jspx_th_mvc_005ffragmentValue_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f2);
                          // /components/bam/provider/manager/data_provider_show.jsp(76,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                          _jspx_th_mvc_005ffragmentValue_005f3.setName("code");
                          // /components/bam/provider/manager/data_provider_show.jsp(76,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                          _jspx_th_mvc_005ffragmentValue_005f3.setId("code");
                          int _jspx_eval_mvc_005ffragmentValue_005f3 = _jspx_th_mvc_005ffragmentValue_005f3.doStartTag();
                          if (_jspx_eval_mvc_005ffragmentValue_005f3 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                            java.lang.Object code = null;
                            if (_jspx_eval_mvc_005ffragmentValue_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_mvc_005ffragmentValue_005f3.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_mvc_005ffragmentValue_005f3.doInitBody();
                            }
                            code = (java.lang.Object) _jspx_page_context.findAttribute("code");
                            do {
                              out.write("\n");
                              out.write("        ");
                              //  mvc:fragmentValue
                              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f4 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                              _jspx_th_mvc_005ffragmentValue_005f4.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragmentValue_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
                              // /components/bam/provider/manager/data_provider_show.jsp(77,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f4.setName("index");
                              // /components/bam/provider/manager/data_provider_show.jsp(77,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f4.setId("index");
                              int _jspx_eval_mvc_005ffragmentValue_005f4 = _jspx_th_mvc_005ffragmentValue_005f4.doStartTag();
                              if (_jspx_eval_mvc_005ffragmentValue_005f4 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              java.lang.Object index = null;
                              if (_jspx_eval_mvc_005ffragmentValue_005f4 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_mvc_005ffragmentValue_005f4.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_mvc_005ffragmentValue_005f4.doInitBody();
                              }
                              index = (java.lang.Object) _jspx_page_context.findAttribute("index");
                              do {
                              out.write("\n");
                              out.write("        ");
                              //  mvc:fragmentValue
                              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f5 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                              _jspx_th_mvc_005ffragmentValue_005f5.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragmentValue_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f4);
                              // /components/bam/provider/manager/data_provider_show.jsp(78,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f5.setName("usedByOtherKpis");
                              // /components/bam/provider/manager/data_provider_show.jsp(78,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f5.setId("usedByOtherKpis");
                              int _jspx_eval_mvc_005ffragmentValue_005f5 = _jspx_th_mvc_005ffragmentValue_005f5.doStartTag();
                              if (_jspx_eval_mvc_005ffragmentValue_005f5 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              java.lang.Object usedByOtherKpis = null;
                              if (_jspx_eval_mvc_005ffragmentValue_005f5 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_mvc_005ffragmentValue_005f5.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_mvc_005ffragmentValue_005f5.doInitBody();
                              }
                              usedByOtherKpis = (java.lang.Object) _jspx_page_context.findAttribute("usedByOtherKpis");
                              do {
                              out.write("\n");
                              out.write("            ");

                String className, altClass;
                if (((Integer) index).intValue() % 2 == 0) {
                    className = "skn-even_row";
                    altClass = "skn-even_row_alt";
                } else {
                    className = "skn-odd_row";
                    altClass = "skn-odd_row_alt";
                }
            
                              out.write("\n");
                              out.write("            <tr class=\"");
                              out.print(className);
                              out.write("\" onmouseover=\"className='");
                              out.print(altClass);
                              out.write("'\" onmouseout=\"className='");
                              out.print(className);
                              out.write("'\">\n");
                              out.write("                    <td align=\"center\" width=\"1\">\n");
                              out.write("                        ");
 if (((Boolean)canEdit).booleanValue()) { 
                              out.write("\n");
                              out.write("                        <a title=\"");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f7 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f7.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(92,34) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f7.setKey(DataProviderHandler.I18N_PREFFIX + "editDataProvider");
                              int _jspx_eval_i18n_005fmessage_005f7 = _jspx_th_i18n_005fmessage_005f7.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f7 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f7 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f7.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f7.doInitBody();
                              }
                              do {
                              out.write("!!!Editar");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f7.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f7 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f7);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f7);
                              out.write("\"\n");
                              out.write("                            href=\"");
                              //  factory:url
                              org.jboss.dashboard.ui.taglib.factory.URLTag _jspx_th_factory_005furl_005f1 = (org.jboss.dashboard.ui.taglib.factory.URLTag) _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction.get(org.jboss.dashboard.ui.taglib.factory.URLTag.class);
                              _jspx_th_factory_005furl_005f1.setPageContext(_jspx_page_context);
                              _jspx_th_factory_005furl_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(93,34) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005furl_005f1.setBean("org.jboss.dashboard.ui.components.DataProviderHandler");
                              // /components/bam/provider/manager/data_provider_show.jsp(93,34) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005furl_005f1.setAction("editDataProvider");
                              int _jspx_eval_factory_005furl_005f1 = _jspx_th_factory_005furl_005f1.doStartTag();
                              if (_jspx_eval_factory_005furl_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_factory_005furl_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_factory_005furl_005f1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_factory_005furl_005f1.doInitBody();
                              }
                              do {
                              out.write(' ');
                              //  factory:param
                              org.jboss.dashboard.ui.taglib.factory.ParamTag _jspx_th_factory_005fparam_005f0 = (org.jboss.dashboard.ui.taglib.factory.ParamTag) _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.ParamTag.class);
                              _jspx_th_factory_005fparam_005f0.setPageContext(_jspx_page_context);
                              _jspx_th_factory_005fparam_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_factory_005furl_005f1);
                              // /components/bam/provider/manager/data_provider_show.jsp(93,135) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005fparam_005f0.setName(DataProviderHandler.PARAM_PROVIDER_CODE);
                              // /components/bam/provider/manager/data_provider_show.jsp(93,135) name = value type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005fparam_005f0.setValue(code);
                              int _jspx_eval_factory_005fparam_005f0 = _jspx_th_factory_005fparam_005f0.doStartTag();
                              if (_jspx_th_factory_005fparam_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_factory_005fparam_005f0);
                              return;
                              }
                              _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_factory_005fparam_005f0);
                              int evalDoAfterBody = _jspx_th_factory_005furl_005f1.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_factory_005furl_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_factory_005furl_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction.reuse(_jspx_th_factory_005furl_005f1);
                              return;
                              }
                              _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction.reuse(_jspx_th_factory_005furl_005f1);
                              out.write("\"\n");
                              out.write("                            id=\"");
                              //  factory:encode
                              org.jboss.dashboard.ui.taglib.factory.EncodeTag _jspx_th_factory_005fencode_005f2 = (org.jboss.dashboard.ui.taglib.factory.EncodeTag) _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.EncodeTag.class);
                              _jspx_th_factory_005fencode_005f2.setPageContext(_jspx_page_context);
                              _jspx_th_factory_005fencode_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(94,32) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005fencode_005f2.setName("editLink"+code);
                              int _jspx_eval_factory_005fencode_005f2 = _jspx_th_factory_005fencode_005f2.doStartTag();
                              if (_jspx_th_factory_005fencode_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f2);
                              return;
                              }
                              _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f2);
                              out.write("\">\n");
                              out.write("                                <img style=\"border:none; vertical-align:middle;\" src=\"");
                              if (_jspx_meth_static_005fimage_005f1(_jspx_th_mvc_005ffragmentValue_005f5, _jspx_page_context))
                              return;
                              out.write("\" alt=\"");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f8 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f8.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f8.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(95,157) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f8.setKey(DataProviderHandler.I18N_PREFFIX + "editDataProvider");
                              int _jspx_eval_i18n_005fmessage_005f8 = _jspx_th_i18n_005fmessage_005f8.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f8 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f8 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f8.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f8.doInitBody();
                              }
                              do {
                              out.write("!!!Editar");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f8.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f8 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f8);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f8);
                              out.write("\" title=\"");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f9 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f9.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f9.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(95,269) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f9.setKey(DataProviderHandler.I18N_PREFFIX + "editDataProvider");
                              int _jspx_eval_i18n_005fmessage_005f9 = _jspx_th_i18n_005fmessage_005f9.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f9 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f9 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f9.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f9.doInitBody();
                              }
                              do {
                              out.write("!!!Editar");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f9.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f9 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f9.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f9);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f9);
                              out.write("\">\n");
                              out.write("\n");
                              out.write("                           </a>\n");
                              out.write("                        ");
 } else { 
                              out.write("\n");
                              out.write("                                <img style=\"opacity: 0.5; -moz-opacity: 0.5; filter: alpha( opacity = 50 ); border:none; vertical-align:middle;\" src=\"");
                              if (_jspx_meth_static_005fimage_005f2(_jspx_th_mvc_005ffragmentValue_005f5, _jspx_page_context))
                              return;
                              out.write("\" alt=\"");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f10 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f10.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f10.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(99,221) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f10.setKey(DataProviderHandler.I18N_PREFFIX + "editDataProvider");
                              int _jspx_eval_i18n_005fmessage_005f10 = _jspx_th_i18n_005fmessage_005f10.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f10 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f10 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f10.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f10.doInitBody();
                              }
                              do {
                              out.write("!!!Editar");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f10.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f10 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f10.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f10);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f10);
                              out.write("\" title=\"");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f11 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f11.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f11.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(99,333) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f11.setKey(DataProviderHandler.I18N_PREFFIX + "editDataProvider");
                              int _jspx_eval_i18n_005fmessage_005f11 = _jspx_th_i18n_005fmessage_005f11.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f11 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f11 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f11.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f11.doInitBody();
                              }
                              do {
                              out.write("!!!Editar");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f11.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f11 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f11.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f11);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f11);
                              out.write("\">\n");
                              out.write("                        ");
 } 
                              out.write("\n");
                              out.write("                    <script defer>\n");
                              out.write("                        setAjax('");
                              //  factory:encode
                              org.jboss.dashboard.ui.taglib.factory.EncodeTag _jspx_th_factory_005fencode_005f3 = (org.jboss.dashboard.ui.taglib.factory.EncodeTag) _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.EncodeTag.class);
                              _jspx_th_factory_005fencode_005f3.setPageContext(_jspx_page_context);
                              _jspx_th_factory_005fencode_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(102,33) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005fencode_005f3.setName("editLink"+code);
                              int _jspx_eval_factory_005fencode_005f3 = _jspx_th_factory_005fencode_005f3.doStartTag();
                              if (_jspx_th_factory_005fencode_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f3);
                              return;
                              }
                              _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f3);
                              out.write("');\n");
                              out.write("                    </script>\n");
                              out.write("                    </td>\n");
                              out.write("                    <td align=\"center\" width=\"1\">\n");
                              out.write("                        ");
 if (((Boolean)canEditProperties).booleanValue()) { 
                              out.write("\n");
                              out.write("                        <a title=\"");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f12 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f12.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f12.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(107,34) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f12.setKey(DataProviderHandler.I18N_PREFFIX + "editDataProviderProperties");
                              int _jspx_eval_i18n_005fmessage_005f12 = _jspx_th_i18n_005fmessage_005f12.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f12 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f12 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f12.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f12.doInitBody();
                              }
                              do {
                              out.write("!!!Editar propiedades");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f12.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f12 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f12.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f12);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f12);
                              out.write("\"\n");
                              out.write("                            href=\"");
                              //  factory:url
                              org.jboss.dashboard.ui.taglib.factory.URLTag _jspx_th_factory_005furl_005f2 = (org.jboss.dashboard.ui.taglib.factory.URLTag) _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction.get(org.jboss.dashboard.ui.taglib.factory.URLTag.class);
                              _jspx_th_factory_005furl_005f2.setPageContext(_jspx_page_context);
                              _jspx_th_factory_005furl_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(108,34) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005furl_005f2.setBean("org.jboss.dashboard.ui.components.DataProviderHandler");
                              // /components/bam/provider/manager/data_provider_show.jsp(108,34) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005furl_005f2.setAction("editDataProviderProperties");
                              int _jspx_eval_factory_005furl_005f2 = _jspx_th_factory_005furl_005f2.doStartTag();
                              if (_jspx_eval_factory_005furl_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_factory_005furl_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_factory_005furl_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_factory_005furl_005f2.doInitBody();
                              }
                              do {
                              out.write(' ');
                              //  factory:param
                              org.jboss.dashboard.ui.taglib.factory.ParamTag _jspx_th_factory_005fparam_005f1 = (org.jboss.dashboard.ui.taglib.factory.ParamTag) _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.ParamTag.class);
                              _jspx_th_factory_005fparam_005f1.setPageContext(_jspx_page_context);
                              _jspx_th_factory_005fparam_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_factory_005furl_005f2);
                              // /components/bam/provider/manager/data_provider_show.jsp(108,145) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005fparam_005f1.setName(DataProviderHandler.PARAM_PROVIDER_CODE);
                              // /components/bam/provider/manager/data_provider_show.jsp(108,145) name = value type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005fparam_005f1.setValue(code);
                              int _jspx_eval_factory_005fparam_005f1 = _jspx_th_factory_005fparam_005f1.doStartTag();
                              if (_jspx_th_factory_005fparam_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_factory_005fparam_005f1);
                              return;
                              }
                              _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_factory_005fparam_005f1);
                              int evalDoAfterBody = _jspx_th_factory_005furl_005f2.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_factory_005furl_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_factory_005furl_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction.reuse(_jspx_th_factory_005furl_005f2);
                              return;
                              }
                              _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction.reuse(_jspx_th_factory_005furl_005f2);
                              out.write("\"\n");
                              out.write("                            id=\"");
                              //  factory:encode
                              org.jboss.dashboard.ui.taglib.factory.EncodeTag _jspx_th_factory_005fencode_005f4 = (org.jboss.dashboard.ui.taglib.factory.EncodeTag) _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.EncodeTag.class);
                              _jspx_th_factory_005fencode_005f4.setPageContext(_jspx_page_context);
                              _jspx_th_factory_005fencode_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(109,32) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005fencode_005f4.setName("editPropertiesLink"+code);
                              int _jspx_eval_factory_005fencode_005f4 = _jspx_th_factory_005fencode_005f4.doStartTag();
                              if (_jspx_th_factory_005fencode_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f4);
                              return;
                              }
                              _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f4);
                              out.write("\">\n");
                              out.write("                                <img style=\"border:none; vertical-align:middle;\" src=\"");
                              if (_jspx_meth_static_005fimage_005f3(_jspx_th_mvc_005ffragmentValue_005f5, _jspx_page_context))
                              return;
                              out.write("\" alt=\"");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f13 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f13.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f13.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(110,157) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f13.setKey(DataProviderHandler.I18N_PREFFIX + "editDataProviderProperties");
                              int _jspx_eval_i18n_005fmessage_005f13 = _jspx_th_i18n_005fmessage_005f13.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f13 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f13 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f13.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f13.doInitBody();
                              }
                              do {
                              out.write("!!!Editar propiedades");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f13.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f13 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f13.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f13);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f13);
                              out.write("\" title=\"");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f14 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f14.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f14.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(110,291) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f14.setKey(DataProviderHandler.I18N_PREFFIX + "editDataProviderProperties");
                              int _jspx_eval_i18n_005fmessage_005f14 = _jspx_th_i18n_005fmessage_005f14.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f14 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f14 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f14.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f14.doInitBody();
                              }
                              do {
                              out.write("!!!Editar propiedades");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f14.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f14 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f14.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f14);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f14);
                              out.write("\">\n");
                              out.write("                               \n");
                              out.write("                           </a>\n");
                              out.write("                        ");
 } else { 
                              out.write("\n");
                              out.write("                                <img style=\"opacity: 0.5; -moz-opacity: 0.5; filter: alpha( opacity = 50 ); border:none; vertical-align:middle;\" src=\"");
                              if (_jspx_meth_static_005fimage_005f4(_jspx_th_mvc_005ffragmentValue_005f5, _jspx_page_context))
                              return;
                              out.write("\" alt=\"");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f15 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f15.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f15.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(114,221) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f15.setKey(DataProviderHandler.I18N_PREFFIX + "editDataProviderProperties");
                              int _jspx_eval_i18n_005fmessage_005f15 = _jspx_th_i18n_005fmessage_005f15.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f15 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f15 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f15.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f15.doInitBody();
                              }
                              do {
                              out.write("!!!Editar propiedades");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f15.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f15 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f15.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f15);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f15);
                              out.write("\" title=\"");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f16 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f16.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f16.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(114,355) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f16.setKey(DataProviderHandler.I18N_PREFFIX + "editDataProviderProperties");
                              int _jspx_eval_i18n_005fmessage_005f16 = _jspx_th_i18n_005fmessage_005f16.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f16 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f16 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f16.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f16.doInitBody();
                              }
                              do {
                              out.write("!!!Editar propiedades");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f16.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f16 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f16.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f16);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f16);
                              out.write("\">\n");
                              out.write("                        ");
 } 
                              out.write("\n");
                              out.write("                    <script defer>\n");
                              out.write("                        setAjax('");
                              //  factory:encode
                              org.jboss.dashboard.ui.taglib.factory.EncodeTag _jspx_th_factory_005fencode_005f5 = (org.jboss.dashboard.ui.taglib.factory.EncodeTag) _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.EncodeTag.class);
                              _jspx_th_factory_005fencode_005f5.setPageContext(_jspx_page_context);
                              _jspx_th_factory_005fencode_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(117,33) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005fencode_005f5.setName("editPropertiesLink"+code);
                              int _jspx_eval_factory_005fencode_005f5 = _jspx_th_factory_005fencode_005f5.doStartTag();
                              if (_jspx_th_factory_005fencode_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f5);
                              return;
                              }
                              _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f5);
                              out.write("');\n");
                              out.write("                    </script>\n");
                              out.write("                    </td>\n");
                              out.write("                    <td align=\"center\" width=\"1\">\n");
                              out.write("                        ");
 if (((Boolean)canDelete).booleanValue()) { 
                              out.write("\n");
                              out.write("                        <a title=\"");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f17 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f17.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f17.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(122,34) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f17.setKey(DataProviderHandler.I18N_PREFFIX + "deleteDataProvider");
                              int _jspx_eval_i18n_005fmessage_005f17 = _jspx_th_i18n_005fmessage_005f17.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f17 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f17 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f17.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f17.doInitBody();
                              }
                              do {
                              out.write("!!!Borrar");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f17.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f17 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f17.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f17);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f17);
                              out.write("\"\n");
                              out.write("                            href=\"");
                              //  factory:url
                              org.jboss.dashboard.ui.taglib.factory.URLTag _jspx_th_factory_005furl_005f3 = (org.jboss.dashboard.ui.taglib.factory.URLTag) _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction.get(org.jboss.dashboard.ui.taglib.factory.URLTag.class);
                              _jspx_th_factory_005furl_005f3.setPageContext(_jspx_page_context);
                              _jspx_th_factory_005furl_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(123,34) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005furl_005f3.setBean("org.jboss.dashboard.ui.components.DataProviderHandler");
                              // /components/bam/provider/manager/data_provider_show.jsp(123,34) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005furl_005f3.setAction("deleteDataProvider");
                              int _jspx_eval_factory_005furl_005f3 = _jspx_th_factory_005furl_005f3.doStartTag();
                              if (_jspx_eval_factory_005furl_005f3 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_factory_005furl_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_factory_005furl_005f3.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_factory_005furl_005f3.doInitBody();
                              }
                              do {
                              out.write(' ');
                              //  factory:param
                              org.jboss.dashboard.ui.taglib.factory.ParamTag _jspx_th_factory_005fparam_005f2 = (org.jboss.dashboard.ui.taglib.factory.ParamTag) _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.ParamTag.class);
                              _jspx_th_factory_005fparam_005f2.setPageContext(_jspx_page_context);
                              _jspx_th_factory_005fparam_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_factory_005furl_005f3);
                              // /components/bam/provider/manager/data_provider_show.jsp(123,137) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005fparam_005f2.setName(DataProviderHandler.PARAM_PROVIDER_CODE);
                              // /components/bam/provider/manager/data_provider_show.jsp(123,137) name = value type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005fparam_005f2.setValue(code);
                              int _jspx_eval_factory_005fparam_005f2 = _jspx_th_factory_005fparam_005f2.doStartTag();
                              if (_jspx_th_factory_005fparam_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_factory_005fparam_005f2);
                              return;
                              }
                              _005fjspx_005ftagPool_005ffactory_005fparam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_factory_005fparam_005f2);
                              int evalDoAfterBody = _jspx_th_factory_005furl_005f3.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_factory_005furl_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_factory_005furl_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction.reuse(_jspx_th_factory_005furl_005f3);
                              return;
                              }
                              _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction.reuse(_jspx_th_factory_005furl_005f3);
                              out.write("\"\n");
                              out.write("                            id=\"");
                              //  factory:encode
                              org.jboss.dashboard.ui.taglib.factory.EncodeTag _jspx_th_factory_005fencode_005f6 = (org.jboss.dashboard.ui.taglib.factory.EncodeTag) _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.EncodeTag.class);
                              _jspx_th_factory_005fencode_005f6.setPageContext(_jspx_page_context);
                              _jspx_th_factory_005fencode_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(124,32) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005fencode_005f6.setName("dropLinks"+code);
                              int _jspx_eval_factory_005fencode_005f6 = _jspx_th_factory_005fencode_005f6.doStartTag();
                              if (_jspx_th_factory_005fencode_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f6);
                              return;
                              }
                              _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f6);
                              out.write("\"\n");
                              out.write("                            ");
 if (usedByOtherKpis != null && ((Boolean)usedByOtherKpis).booleanValue()) { 
                              out.write("\n");
                              out.write("                                onclick=\"alert('");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f18 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f18.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f18.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(126,48) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f18.setKey(DataProviderHandler.I18N_PREFFIX + "cannotDelete");
                              int _jspx_eval_i18n_005fmessage_005f18 = _jspx_th_i18n_005fmessage_005f18.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f18 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f18 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f18.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f18.doInitBody();
                              }
                              do {
                              out.write("!!!cannot delete");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f18.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f18 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f18.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f18);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f18);
                              out.write("');return false;\"\n");
                              out.write("                            ");
 } else { 
                              out.write("\n");
                              out.write("                                onclick=\"return confirm('");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f19 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f19.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f19.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(128,57) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f19.setKey(DataProviderHandler.I18N_PREFFIX + "confirmDelete");
                              int _jspx_eval_i18n_005fmessage_005f19 = _jspx_th_i18n_005fmessage_005f19.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f19 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f19 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f19.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f19.doInitBody();
                              }
                              do {
                              out.write("!!!Sure to delete?");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f19.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f19 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f19.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f19);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f19);
                              out.write("');\"\n");
                              out.write("                            ");
 } 
                              out.write(" >\n");
                              out.write("\n");
                              out.write("                                <img style=\"border:none; vertical-align:middle;\" src=\"");
                              if (_jspx_meth_static_005fimage_005f5(_jspx_th_mvc_005ffragmentValue_005f5, _jspx_page_context))
                              return;
                              out.write("\" alt=\"");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f20 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f20.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f20.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(131,151) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f20.setKey(DataProviderHandler.I18N_PREFFIX + "deleteDataProvider");
                              int _jspx_eval_i18n_005fmessage_005f20 = _jspx_th_i18n_005fmessage_005f20.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f20 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f20 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f20.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f20.doInitBody();
                              }
                              do {
                              out.write("!!!Borrar");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f20.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f20 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f20.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f20);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f20);
                              out.write("\" title=\"");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f21 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f21.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f21.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(131,265) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f21.setKey(DataProviderHandler.I18N_PREFFIX + "deleteDataProvider");
                              int _jspx_eval_i18n_005fmessage_005f21 = _jspx_th_i18n_005fmessage_005f21.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f21 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f21 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f21.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f21.doInitBody();
                              }
                              do {
                              out.write("!!!Borrar");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f21.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f21 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f21.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f21);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f21);
                              out.write("\">\n");
                              out.write("\n");
                              out.write("                           </a>\n");
                              out.write("                        ");
 } else { 
                              out.write("\n");
                              out.write("                                <img style=\"opacity: 0.5; -moz-opacity: 0.5; filter: alpha( opacity = 50 ); border:none; vertical-align:middle;\" src=\"");
                              if (_jspx_meth_static_005fimage_005f6(_jspx_th_mvc_005ffragmentValue_005f5, _jspx_page_context))
                              return;
                              out.write("\" alt=\"");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f22 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f22.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f22.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(135,215) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f22.setKey(DataProviderHandler.I18N_PREFFIX + "deleteDataProvider");
                              int _jspx_eval_i18n_005fmessage_005f22 = _jspx_th_i18n_005fmessage_005f22.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f22 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f22 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f22.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f22.doInitBody();
                              }
                              do {
                              out.write("!!!Borrar");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f22.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f22 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f22.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f22);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f22);
                              out.write("\" title=\"");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f23 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f23.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f23.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(135,329) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f23.setKey(DataProviderHandler.I18N_PREFFIX + "deleteDataProvider");
                              int _jspx_eval_i18n_005fmessage_005f23 = _jspx_th_i18n_005fmessage_005f23.doStartTag();
                              if (_jspx_eval_i18n_005fmessage_005f23 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              if (_jspx_eval_i18n_005fmessage_005f23 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_i18n_005fmessage_005f23.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_i18n_005fmessage_005f23.doInitBody();
                              }
                              do {
                              out.write("!!!Borrar");
                              int evalDoAfterBody = _jspx_th_i18n_005fmessage_005f23.doAfterBody();
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_i18n_005fmessage_005f23 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_i18n_005fmessage_005f23.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f23);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.reuse(_jspx_th_i18n_005fmessage_005f23);
                              out.write("\">\n");
                              out.write("                        ");
 } 
                              out.write("\n");
                              out.write("                    <script defer>\n");
                              out.write("                        setAjax('");
                              //  factory:encode
                              org.jboss.dashboard.ui.taglib.factory.EncodeTag _jspx_th_factory_005fencode_005f7 = (org.jboss.dashboard.ui.taglib.factory.EncodeTag) _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.EncodeTag.class);
                              _jspx_th_factory_005fencode_005f7.setPageContext(_jspx_page_context);
                              _jspx_th_factory_005fencode_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(138,33) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_factory_005fencode_005f7.setName("dropLink"+code);
                              int _jspx_eval_factory_005fencode_005f7 = _jspx_th_factory_005fencode_005f7.doStartTag();
                              if (_jspx_th_factory_005fencode_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f7);
                              return;
                              }
                              _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f7);
                              out.write("');\n");
                              out.write("                    </script>\n");
                              out.write("                    </td>\n");
                              out.write("                    <td align=\"left\">\n");
                              out.write("                         <div style=\"width:360px; height:15px; text-align:left; overflow:hidden; vertical-align:middle\"\n");
                              out.write("                            title=\"");
                              //  mvc:fragmentValue
                              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f6 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                              _jspx_th_mvc_005ffragmentValue_005f6.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragmentValue_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(143,35) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f6.setName("dataProviderName");
                              int _jspx_eval_mvc_005ffragmentValue_005f6 = _jspx_th_mvc_005ffragmentValue_005f6.doStartTag();
                              if (_jspx_th_mvc_005ffragmentValue_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f6);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f6);
                              out.write("\">\n");
                              out.write("                             ");
                              //  mvc:fragmentValue
                              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f7 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                              _jspx_th_mvc_005ffragmentValue_005f7.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragmentValue_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(144,29) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f7.setName("dataProviderName");
                              int _jspx_eval_mvc_005ffragmentValue_005f7 = _jspx_th_mvc_005ffragmentValue_005f7.doStartTag();
                              if (_jspx_th_mvc_005ffragmentValue_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f7);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f7);
                              out.write("\n");
                              out.write("                         </div>\n");
                              out.write("                    </td>\n");
                              out.write("                    <td align=\"left\">\n");
                              out.write("                        <div style=\"width:140px; height:15px; text-align:left; overflow:hidden; vertical-align:middle\"\n");
                              out.write("                                                    title=\"");
                              //  mvc:fragmentValue
                              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f8 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                              _jspx_th_mvc_005ffragmentValue_005f8.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragmentValue_005f8.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(149,59) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f8.setName("dataProviderType");
                              int _jspx_eval_mvc_005ffragmentValue_005f8 = _jspx_th_mvc_005ffragmentValue_005f8.doStartTag();
                              if (_jspx_th_mvc_005ffragmentValue_005f8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f8);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f8);
                              out.write("\">\n");
                              out.write("                            ");
                              //  mvc:fragmentValue
                              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f9 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                              _jspx_th_mvc_005ffragmentValue_005f9.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragmentValue_005f9.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/provider/manager/data_provider_show.jsp(150,28) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f9.setName("dataProviderType");
                              int _jspx_eval_mvc_005ffragmentValue_005f9 = _jspx_th_mvc_005ffragmentValue_005f9.doStartTag();
                              if (_jspx_th_mvc_005ffragmentValue_005f9.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f9);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f9);
                              out.write("\n");
                              out.write("                         </div>\n");
                              out.write("                    </td>\n");
                              out.write("            </tr>\n");
                              out.write("\n");
                              out.write("        ");
                              int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f5.doAfterBody();
                              usedByOtherKpis = (java.lang.Object) _jspx_page_context.findAttribute("usedByOtherKpis");
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
                              out.write("        ");
                              int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f4.doAfterBody();
                              index = (java.lang.Object) _jspx_page_context.findAttribute("index");
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_mvc_005ffragmentValue_005f4 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_mvc_005ffragmentValue_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f4);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f4);
                              out.write("\n");
                              out.write("        ");
                              int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f3.doAfterBody();
                              code = (java.lang.Object) _jspx_page_context.findAttribute("code");
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
                          out.write("        ");
                          int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f2.doAfterBody();
                          canEditProperties = (java.lang.Object) _jspx_page_context.findAttribute("canEditProperties");
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
                      canEdit = (java.lang.Object) _jspx_page_context.findAttribute("canEdit");
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
                  out.write("        ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f0.doAfterBody();
                  canDelete = (java.lang.Object) _jspx_page_context.findAttribute("canDelete");
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
          if (_jspx_meth_mvc_005ffragment_005f5(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f6(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
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

  private boolean _jspx_meth_mvc_005ffragment_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f0.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /components/bam/provider/manager/data_provider_show.jsp(28,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
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
        out.write("      <table border=\"0\" cellspacing=\"0\" cellpadding=\"4\" width=\"650px\">\n");
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

  private boolean _jspx_meth_factory_005fencode_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:encode
    org.jboss.dashboard.ui.taglib.factory.EncodeTag _jspx_th_factory_005fencode_005f0 = (org.jboss.dashboard.ui.taglib.factory.EncodeTag) _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.EncodeTag.class);
    _jspx_th_factory_005fencode_005f0.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fencode_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f2);
    // /components/bam/provider/manager/data_provider_show.jsp(46,30) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fencode_005f0.setName("createNewDataProvider");
    int _jspx_eval_factory_005fencode_005f0 = _jspx_th_factory_005fencode_005f0.doStartTag();
    if (_jspx_th_factory_005fencode_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f0);
    return false;
  }

  private boolean _jspx_meth_factory_005furl_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:url
    org.jboss.dashboard.ui.taglib.factory.URLTag _jspx_th_factory_005furl_005f0 = (org.jboss.dashboard.ui.taglib.factory.URLTag) _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.URLTag.class);
    _jspx_th_factory_005furl_005f0.setPageContext(_jspx_page_context);
    _jspx_th_factory_005furl_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f2);
    // /components/bam/provider/manager/data_provider_show.jsp(46,84) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f0.setBean("org.jboss.dashboard.ui.components.DataProviderHandler");
    // /components/bam/provider/manager/data_provider_show.jsp(46,84) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005furl_005f0.setAction("StartCreateNewDataProvider");
    int _jspx_eval_factory_005furl_005f0 = _jspx_th_factory_005furl_005f0.doStartTag();
    if (_jspx_th_factory_005furl_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005furl_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005furl_005f0);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f0 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f0.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f2);
    // /components/bam/provider/manager/data_provider_show.jsp(47,82) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f0.setRelativePath("general/16x16/ico-add.png");
    int _jspx_eval_static_005fimage_005f0 = _jspx_th_static_005fimage_005f0.doStartTag();
    if (_jspx_th_static_005fimage_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f0);
    return false;
  }

  private boolean _jspx_meth_factory_005fencode_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragment_005f2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:encode
    org.jboss.dashboard.ui.taglib.factory.EncodeTag _jspx_th_factory_005fencode_005f1 = (org.jboss.dashboard.ui.taglib.factory.EncodeTag) _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.EncodeTag.class);
    _jspx_th_factory_005fencode_005f1.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fencode_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f2);
    // /components/bam/provider/manager/data_provider_show.jsp(51,36) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fencode_005f1.setName("createNewDataProvider");
    int _jspx_eval_factory_005fencode_005f1 = _jspx_th_factory_005fencode_005f1.doStartTag();
    if (_jspx_th_factory_005fencode_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_factory_005fencode_005f1);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f5, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f1 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f1.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
    // /components/bam/provider/manager/data_provider_show.jsp(95,86) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f1.setRelativePath("general/16x16/ico-edit_page01.png");
    int _jspx_eval_static_005fimage_005f1 = _jspx_th_static_005fimage_005f1.doStartTag();
    if (_jspx_th_static_005fimage_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f1);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f5, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f2 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f2.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
    // /components/bam/provider/manager/data_provider_show.jsp(99,150) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f2.setRelativePath("general/16x16/ico-edit_page01.png");
    int _jspx_eval_static_005fimage_005f2 = _jspx_th_static_005fimage_005f2.doStartTag();
    if (_jspx_th_static_005fimage_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f2);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f3(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f5, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f3 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f3.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
    // /components/bam/provider/manager/data_provider_show.jsp(110,86) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f3.setRelativePath("general/16x16/ico-edit_page02.png");
    int _jspx_eval_static_005fimage_005f3 = _jspx_th_static_005fimage_005f3.doStartTag();
    if (_jspx_th_static_005fimage_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f3);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f4(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f5, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f4 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f4.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
    // /components/bam/provider/manager/data_provider_show.jsp(114,150) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f4.setRelativePath("general/16x16/ico-edit_page01.png");
    int _jspx_eval_static_005fimage_005f4 = _jspx_th_static_005fimage_005f4.doStartTag();
    if (_jspx_th_static_005fimage_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f4);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f4);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f5(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f5, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f5 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f5.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
    // /components/bam/provider/manager/data_provider_show.jsp(131,86) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f5.setRelativePath("general/16x16/ico-trash.png");
    int _jspx_eval_static_005fimage_005f5 = _jspx_th_static_005fimage_005f5.doStartTag();
    if (_jspx_th_static_005fimage_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f5);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f5);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f6(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f5, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f6 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f6.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
    // /components/bam/provider/manager/data_provider_show.jsp(135,150) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f6.setRelativePath("general/16x16/ico-trash.png");
    int _jspx_eval_static_005fimage_005f6 = _jspx_th_static_005fimage_005f6.doStartTag();
    if (_jspx_th_static_005fimage_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f6);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f6);
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
    // /components/bam/provider/manager/data_provider_show.jsp(162,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f5.setName("outputEndDataProviders");
    int _jspx_eval_mvc_005ffragment_005f5 = _jspx_th_mvc_005ffragment_005f5.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f5 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f5 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f5.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f5.doInitBody();
      }
      do {
        out.write("\n");
        out.write("        </table></td></tr>\n");
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
    // /components/bam/provider/manager/data_provider_show.jsp(165,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f6.setName("outputEnd");
    int _jspx_eval_mvc_005ffragment_005f6 = _jspx_th_mvc_005ffragment_005f6.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f6 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f6 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f6.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f6.doInitBody();
      }
      do {
        out.write("\n");
        out.write("        </table>\n");
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
}
