package org.apache.jsp.components.bam.dashboard_005ffilter.short_;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.jboss.dashboard.LocaleManager;
import org.jboss.dashboard.ui.components.DashboardFilterHandler;
import org.jboss.dashboard.ui.formatters.DashboardFilterFormatter;
import org.apache.commons.lang.StringUtils;

public final class properties_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.release();
    _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.release();
    _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.release();
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.release();
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.release();
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

    java.lang.Object _jspx_propertyId_1 = null;
    java.lang.Object _jspx_selected_2 = null;
    java.lang.Object _jspx_keys_3 = null;
    java.lang.Object _jspx_values_4 = null;
    java.lang.Object _jspx_submitOnChange_5 = null;
    java.lang.Object _jspx_dataProviderCode_1 = null;
    java.lang.Object _jspx_minValue_2 = null;
    java.lang.Object _jspx_maxValue_3 = null;
    java.lang.Object _jspx_submitOnChange_4 = null;
    java.lang.Object _jspx_value_5 = null;

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
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      //  i18n:bundle
      java.util.ResourceBundle bundle = null;
      org.apache.taglibs.i18n.BundleTag _jspx_th_i18n_005fbundle_005f0 = (org.apache.taglibs.i18n.BundleTag) _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.get(org.apache.taglibs.i18n.BundleTag.class);
      _jspx_th_i18n_005fbundle_005f0.setPageContext(_jspx_page_context);
      _jspx_th_i18n_005fbundle_005f0.setParent(null);
      // /components/bam/dashboard_filter/short/properties.jsp(28,0) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setId("bundle");
      // /components/bam/dashboard_filter/short/properties.jsp(28,0) name = baseName type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setBaseName("org.jboss.dashboard.ui.components.filter.messages");
      // /components/bam/dashboard_filter/short/properties.jsp(28,0) name = locale type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_i18n_005fbundle_005f0.setLocale(LocaleManager.currentLocale());
      int _jspx_eval_i18n_005fbundle_005f0 = _jspx_th_i18n_005fbundle_005f0.doStartTag();
      bundle = (java.util.ResourceBundle) _jspx_page_context.findAttribute("bundle");
      if (_jspx_th_i18n_005fbundle_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.reuse(_jspx_th_i18n_005fbundle_005f0);
        return;
      }
      bundle = (java.util.ResourceBundle) _jspx_page_context.findAttribute("bundle");
      _005fjspx_005ftagPool_005fi18n_005fbundle_0026_005flocale_005fid_005fbaseName_005fnobody.reuse(_jspx_th_i18n_005fbundle_005f0);
      out.write("\r\n");
      out.write("\r\n");
      //  mvc:formatter
      org.jboss.dashboard.ui.taglib.formatter.FormatterTag _jspx_th_mvc_005fformatter_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FormatterTag) _005fjspx_005ftagPool_005fmvc_005fformatter_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FormatterTag.class);
      _jspx_th_mvc_005fformatter_005f0.setPageContext(_jspx_page_context);
      _jspx_th_mvc_005fformatter_005f0.setParent(null);
      // /components/bam/dashboard_filter/short/properties.jsp(30,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_mvc_005fformatter_005f0.setName("org.jboss.dashboard.ui.formatters.DashboardFilterFormatter");
      int _jspx_eval_mvc_005fformatter_005f0 = _jspx_th_mvc_005fformatter_005f0.doStartTag();
      if (_jspx_eval_mvc_005fformatter_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
        if (_jspx_eval_mvc_005fformatter_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
          out = _jspx_page_context.pushBody();
          _jspx_th_mvc_005fformatter_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
          _jspx_th_mvc_005fformatter_005f0.doInitBody();
        }
        do {
          out.write("\r\n");
          out.write("    ");
          //  mvc:formatterParam
          org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag _jspx_th_mvc_005fformatterParam_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag) _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag.class);
          _jspx_th_mvc_005fformatterParam_005f0.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005fformatterParam_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /components/bam/dashboard_filter/short/properties.jsp(31,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005fformatterParam_005f0.setName(DashboardFilterFormatter.PARAM_RENDER_TYPE);
          // /components/bam/dashboard_filter/short/properties.jsp(31,4) name = value type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005fformatterParam_005f0.setValue(DashboardFilterFormatter.RENDER_TYPE_PROPERTIES);
          int _jspx_eval_mvc_005fformatterParam_005f0 = _jspx_th_mvc_005fformatterParam_005f0.doStartTag();
          if (_jspx_th_mvc_005fformatterParam_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_mvc_005fformatterParam_005f0);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_mvc_005fformatterParam_005f0);
          out.write("\r\n");
          out.write("    ");
          //  mvc:formatterParam
          org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag _jspx_th_mvc_005fformatterParam_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag) _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FormatterParamTag.class);
          _jspx_th_mvc_005fformatterParam_005f1.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005fformatterParam_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /components/bam/dashboard_filter/short/properties.jsp(32,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005fformatterParam_005f1.setName(DashboardFilterFormatter.PARAM_COMPONENT_CODE);
          // /components/bam/dashboard_filter/short/properties.jsp(32,4) name = value type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005fformatterParam_005f1.setValue(request.getAttribute("componentCode"));
          int _jspx_eval_mvc_005fformatterParam_005f1 = _jspx_th_mvc_005fformatterParam_005f1.doStartTag();
          if (_jspx_th_mvc_005fformatterParam_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
            _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_mvc_005fformatterParam_005f1);
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005fformatterParam_0026_005fvalue_005fname_005fnobody.reuse(_jspx_th_mvc_005fformatterParam_005f1);
          out.write("\r\n");
          out.write("\r\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f0(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\r\n");
          out.write("\r\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f1.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /components/bam/dashboard_filter/short/properties.jsp(38,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f1.setName("outputEmpty");
          int _jspx_eval_mvc_005ffragment_005f1 = _jspx_th_mvc_005ffragment_005f1.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f1.doInitBody();
            }
            do {
              out.write("\r\n");
              out.write("        <tr>\r\n");
              out.write("            <td width=\"100%\">\r\n");
              out.write("                <span class=\"skn_error\">\r\n");
              out.write("                    ");
              //  i18n:message
              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f0 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey.get(org.apache.taglibs.i18n.MessageTag.class);
              _jspx_th_i18n_005fmessage_005f0.setPageContext(_jspx_page_context);
              _jspx_th_i18n_005fmessage_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f1);
              // /components/bam/dashboard_filter/short/properties.jsp(42,20) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_i18n_005fmessage_005f0.setKey(DashboardFilterHandler.I18N_PREFFIX + "noProperties");
              int _jspx_eval_i18n_005fmessage_005f0 = _jspx_th_i18n_005fmessage_005f0.doStartTag();
              if (_jspx_eval_i18n_005fmessage_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                if (_jspx_eval_i18n_005fmessage_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_i18n_005fmessage_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_i18n_005fmessage_005f0.doInitBody();
                }
                do {
                  out.write("!!! No hay propiedades seleccionadas");
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
              out.write("\r\n");
              out.write("                </span>\r\n");
              out.write("            </td>\r\n");
              out.write("        </tr>\r\n");
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
          out.write("\r\n");
          out.write("\r\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f2(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\r\n");
          out.write("\r\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f3(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\r\n");
          out.write("\r\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f4 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f4.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /components/bam/dashboard_filter/short/properties.jsp(58,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f4.setName("outputPropertyName");
          int _jspx_eval_mvc_005ffragment_005f4 = _jspx_th_mvc_005ffragment_005f4.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f4 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f4 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f4.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f4.doInitBody();
            }
            do {
              out.write("\r\n");
              out.write("\r\n");
              out.write("            <div style=\"padding-bottom:3px; white-space:nowrap;\">");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f0.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f4);
              // /components/bam/dashboard_filter/short/properties.jsp(60,65) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f0.setName("propertyName");
              int _jspx_eval_mvc_005ffragmentValue_005f0 = _jspx_th_mvc_005ffragmentValue_005f0.doStartTag();
              if (_jspx_th_mvc_005ffragmentValue_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f0);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f0);
              out.write(":</div>\r\n");
              out.write("\r\n");
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
          out.write("\r\n");
          out.write("\r\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f5(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\r\n");
          out.write("\r\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f6 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f6.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /components/bam/dashboard_filter/short/properties.jsp(68,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f6.setName("outputErrorPropertyName");
          int _jspx_eval_mvc_005ffragment_005f6 = _jspx_th_mvc_005ffragment_005f6.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f6 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f6 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f6.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f6.doInitBody();
            }
            do {
              out.write("\r\n");
              out.write("\r\n");
              out.write("            <span class=\"skn-error\">");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f1 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f1.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f6);
              // /components/bam/dashboard_filter/short/properties.jsp(70,36) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f1.setName("propertyName");
              int _jspx_eval_mvc_005ffragmentValue_005f1 = _jspx_th_mvc_005ffragmentValue_005f1.doStartTag();
              if (_jspx_th_mvc_005ffragmentValue_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f1);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f1);
              out.write("</span>\r\n");
              out.write("\r\n");
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
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f6);
          out.write("\r\n");
          out.write("\r\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f7 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f7.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /components/bam/dashboard_filter/short/properties.jsp(74,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f7.setName("outputPropertyTypeLabel");
          int _jspx_eval_mvc_005ffragment_005f7 = _jspx_th_mvc_005ffragment_005f7.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f7 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f7 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f7.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f7.doInitBody();
            }
            do {
              out.write("\r\n");
              out.write("        ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f2 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f2.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f7);
              // /components/bam/dashboard_filter/short/properties.jsp(75,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f2.setName("dataProviderCode");
              // /components/bam/dashboard_filter/short/properties.jsp(75,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f2.setId("dataProviderCode");
              int _jspx_eval_mvc_005ffragmentValue_005f2 = _jspx_th_mvc_005ffragmentValue_005f2.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object dataProviderCode = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f2.doInitBody();
                }
                dataProviderCode = (java.lang.Object) _jspx_page_context.findAttribute("dataProviderCode");
                do {
                  out.write("\r\n");
                  out.write("        ");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f3 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f3.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f2);
                  // /components/bam/dashboard_filter/short/properties.jsp(76,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f3.setName("propertyId");
                  // /components/bam/dashboard_filter/short/properties.jsp(76,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f3.setId("propertyId");
                  int _jspx_eval_mvc_005ffragmentValue_005f3 = _jspx_th_mvc_005ffragmentValue_005f3.doStartTag();
                  if (_jspx_eval_mvc_005ffragmentValue_005f3 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                    java.lang.Object propertyId = null;
                    if (_jspx_eval_mvc_005ffragmentValue_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.pushBody();
                      _jspx_th_mvc_005ffragmentValue_005f3.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                      _jspx_th_mvc_005ffragmentValue_005f3.doInitBody();
                    }
                    propertyId = (java.lang.Object) _jspx_page_context.findAttribute("propertyId");
                    do {
                      out.write("\r\n");
                      out.write("        ");
                      //  mvc:fragmentValue
                      org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f4 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                      _jspx_th_mvc_005ffragmentValue_005f4.setPageContext(_jspx_page_context);
                      _jspx_th_mvc_005ffragmentValue_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f3);
                      // /components/bam/dashboard_filter/short/properties.jsp(77,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f4.setName("selected");
                      // /components/bam/dashboard_filter/short/properties.jsp(77,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f4.setId("selected");
                      int _jspx_eval_mvc_005ffragmentValue_005f4 = _jspx_th_mvc_005ffragmentValue_005f4.doStartTag();
                      if (_jspx_eval_mvc_005ffragmentValue_005f4 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                        java.lang.Object selected = null;
                        if (_jspx_eval_mvc_005ffragmentValue_005f4 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                          out = _jspx_page_context.pushBody();
                          _jspx_th_mvc_005ffragmentValue_005f4.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                          _jspx_th_mvc_005ffragmentValue_005f4.doInitBody();
                        }
                        selected = (java.lang.Object) _jspx_page_context.findAttribute("selected");
                        do {
                          out.write("\r\n");
                          out.write("        ");
                          //  mvc:fragmentValue
                          org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f5 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                          _jspx_th_mvc_005ffragmentValue_005f5.setPageContext(_jspx_page_context);
                          _jspx_th_mvc_005ffragmentValue_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f4);
                          // /components/bam/dashboard_filter/short/properties.jsp(78,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                          _jspx_th_mvc_005ffragmentValue_005f5.setName("keys");
                          // /components/bam/dashboard_filter/short/properties.jsp(78,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                          _jspx_th_mvc_005ffragmentValue_005f5.setId("keys");
                          int _jspx_eval_mvc_005ffragmentValue_005f5 = _jspx_th_mvc_005ffragmentValue_005f5.doStartTag();
                          if (_jspx_eval_mvc_005ffragmentValue_005f5 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                            java.lang.Object keys = null;
                            if (_jspx_eval_mvc_005ffragmentValue_005f5 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_mvc_005ffragmentValue_005f5.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_mvc_005ffragmentValue_005f5.doInitBody();
                            }
                            keys = (java.lang.Object) _jspx_page_context.findAttribute("keys");
                            do {
                              out.write("\r\n");
                              out.write("            ");
                              //  mvc:fragmentValue
                              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f6 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                              _jspx_th_mvc_005ffragmentValue_005f6.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragmentValue_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f5);
                              // /components/bam/dashboard_filter/short/properties.jsp(79,12) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f6.setName("values");
                              // /components/bam/dashboard_filter/short/properties.jsp(79,12) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f6.setId("values");
                              int _jspx_eval_mvc_005ffragmentValue_005f6 = _jspx_th_mvc_005ffragmentValue_005f6.doStartTag();
                              if (_jspx_eval_mvc_005ffragmentValue_005f6 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              java.lang.Object values = null;
                              if (_jspx_eval_mvc_005ffragmentValue_005f6 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_mvc_005ffragmentValue_005f6.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_mvc_005ffragmentValue_005f6.doInitBody();
                              }
                              values = (java.lang.Object) _jspx_page_context.findAttribute("values");
                              do {
                              out.write("\r\n");
                              out.write("                ");
                              //  mvc:fragmentValue
                              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f7 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                              _jspx_th_mvc_005ffragmentValue_005f7.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragmentValue_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f6);
                              // /components/bam/dashboard_filter/short/properties.jsp(80,16) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f7.setName("submitOnChange");
                              // /components/bam/dashboard_filter/short/properties.jsp(80,16) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f7.setId("submitOnChange");
                              int _jspx_eval_mvc_005ffragmentValue_005f7 = _jspx_th_mvc_005ffragmentValue_005f7.doStartTag();
                              if (_jspx_eval_mvc_005ffragmentValue_005f7 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              java.lang.Object submitOnChange = null;
                              if (_jspx_eval_mvc_005ffragmentValue_005f7 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_mvc_005ffragmentValue_005f7.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_mvc_005ffragmentValue_005f7.doInitBody();
                              }
                              submitOnChange = (java.lang.Object) _jspx_page_context.findAttribute("submitOnChange");
                              do {
                              out.write("\r\n");
                              out.write("                   <select class=\"skn-input\" style=\"width:172px;\" name=\"");
                              out.print(DashboardFilterHandler.PARAM_VALUE +"_"+ propertyId);
                              out.write("\"\r\n");
                              out.write("                           title=\"\"\r\n");
                              out.write("                            onchange=\"\r\n");
                              out.write("                                    var element = document.getElementById('");
                              //  panel:encode
                              org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f0 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
                              _jspx_th_panel_005fencode_005f0.setPageContext(_jspx_page_context);
                              _jspx_th_panel_005fencode_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f7);
                              // /components/bam/dashboard_filter/short/properties.jsp(84,75) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_panel_005fencode_005f0.setName("CustomStringFor/"+dataProviderCode+"/"+propertyId);
                              int _jspx_eval_panel_005fencode_005f0 = _jspx_th_panel_005fencode_005f0.doStartTag();
                              if (_jspx_th_panel_005fencode_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f0);
                              return;
                              }
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f0);
                              out.write("');\r\n");
                              out.write("                                    if (this.options[this.selectedIndex].value == '");
                              out.print(DashboardFilterHandler.PARAM_CUSTOM_VALUE);
                              out.write("') element.style.display = 'inline';\r\n");
                              out.write("                                    else if (this.options[this.selectedIndex].value == '");
                              out.print(DashboardFilterHandler.PARAM_NULL_VALUE);
                              out.write("') element.style.display = 'none';\r\n");
                              out.write("                                    else {\r\n");
                              out.write("                                        element.style.display = 'none';\r\n");
                              out.write("                                        ");
 if (submitOnChange != null && ((Boolean)submitOnChange).booleanValue()) {
                              out.write("\r\n");
                              out.write("                                            submitAjaxForm(this.form);\r\n");
                              out.write("                                        ");
 } 
                              out.write("\r\n");
                              out.write("                                    }\">\r\n");
                              out.write("                        }\r\n");
                              out.write("                        ");

                            String[] strKeys = (String[]) keys;
                            String[] strValues = (String[]) values;
                            for (int x = 0; x < strKeys.length; x++) {
                                String key = strKeys[x];
                                if (key == null) continue;
                                String value = strValues[x];
                                boolean optionSelected = false;
                                if (key.equals(selected)) optionSelected = true;
                        
                              out.write("\r\n");
                              out.write("                        <option title=\"");
                              out.print(value);
                              out.write("\" value=\"");
                              out.print(key);
                              out.write('"');
                              out.write(' ');
                              out.print(optionSelected ? "selected" : "");
                              out.write('>');
                              out.write(' ');
                              out.print(value);
                              out.write(" </option>\r\n");
                              out.write("                        ");

                            }
                        
                              out.write("\r\n");
                              out.write("                    </select>\r\n");
                              out.write("                    <div id=\"");
                              //  panel:encode
                              org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f1 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
                              _jspx_th_panel_005fencode_005f1.setPageContext(_jspx_page_context);
                              _jspx_th_panel_005fencode_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f7);
                              // /components/bam/dashboard_filter/short/properties.jsp(109,29) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_panel_005fencode_005f1.setName("CustomStringFor/"+dataProviderCode+"/"+propertyId);
                              int _jspx_eval_panel_005fencode_005f1 = _jspx_th_panel_005fencode_005f1.doStartTag();
                              if (_jspx_th_panel_005fencode_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f1);
                              return;
                              }
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f1);
                              out.write("\" style=\"display:none; white-space:nowrap;\">\r\n");
                              out.write("                        <div style=\"height:5px;\"></div>\r\n");
                              out.write("                        <input class=\"skn-input\" style=\"width:148px;\" type=\"text\" name='");
                              out.print(DashboardFilterHandler.PARAM_CUSTOM_VALUE+"_"+ propertyId);
                              out.write("'>\r\n");
                              out.write("                        <a style=\"height:20px; vertical-align:bottom;\" href=\"#\" onclick=\"window.");
                              //  panel:encode
                              org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f2 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
                              _jspx_th_panel_005fencode_005f2.setPageContext(_jspx_page_context);
                              _jspx_th_panel_005fencode_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f7);
                              // /components/bam/dashboard_filter/short/properties.jsp(112,96) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_panel_005fencode_005f2.setName("helpForProperty_" + StringUtils.deleteWhitespace((String)propertyId) + "_function");
                              int _jspx_eval_panel_005fencode_005f2 = _jspx_th_panel_005fencode_005f2.doStartTag();
                              if (_jspx_th_panel_005fencode_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f2);
                              return;
                              }
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f2);
                              out.write("(); return false;\">\r\n");
                              out.write("                             <img src=\"");
                              if (_jspx_meth_static_005fimage_005f0(_jspx_th_mvc_005ffragmentValue_005f7, _jspx_page_context))
                              return;
                              out.write("\" border=\"0\" >\r\n");
                              out.write("                        </a>\r\n");
                              out.write("                       ");
 request.setAttribute("propertyId",propertyId); 
                              out.write("\r\n");
                              out.write("                        ");
                              if (_jspx_meth_mvc_005finclude_005f0(_jspx_th_mvc_005ffragmentValue_005f7, _jspx_page_context))
                              return;
                              out.write("\r\n");
                              out.write("                    </div>\r\n");
                              out.write("\r\n");
                              out.write("            ");
                              int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f7.doAfterBody();
                              submitOnChange = (java.lang.Object) _jspx_page_context.findAttribute("submitOnChange");
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_mvc_005ffragmentValue_005f7 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_mvc_005ffragmentValue_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f7);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f7);
                              out.write("\r\n");
                              out.write("            ");
                              int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f6.doAfterBody();
                              values = (java.lang.Object) _jspx_page_context.findAttribute("values");
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
                              out.write("\r\n");
                              out.write("        ");
                              int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f5.doAfterBody();
                              keys = (java.lang.Object) _jspx_page_context.findAttribute("keys");
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
                          out.write("\r\n");
                          out.write("        ");
                          int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f4.doAfterBody();
                          selected = (java.lang.Object) _jspx_page_context.findAttribute("selected");
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
                      out.write("\r\n");
                      out.write("        ");
                      int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f3.doAfterBody();
                      propertyId = (java.lang.Object) _jspx_page_context.findAttribute("propertyId");
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
                  out.write("\r\n");
                  out.write("        ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f2.doAfterBody();
                  dataProviderCode = (java.lang.Object) _jspx_page_context.findAttribute("dataProviderCode");
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
              out.write("\r\n");
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
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f7);
          out.write("\r\n");
          out.write("\r\n");
          out.write("\r\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f8 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f8.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f8.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /components/bam/dashboard_filter/short/properties.jsp(128,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f8.setName("outputPropertyTypeDate");
          int _jspx_eval_mvc_005ffragment_005f8 = _jspx_th_mvc_005ffragment_005f8.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f8 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f8 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f8.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f8.doInitBody();
            }
            do {
              out.write("\r\n");
              out.write("        ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f8 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f8.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f8.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f8);
              // /components/bam/dashboard_filter/short/properties.jsp(129,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f8.setName("propertyId");
              // /components/bam/dashboard_filter/short/properties.jsp(129,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f8.setId("propertyId");
              int _jspx_eval_mvc_005ffragmentValue_005f8 = _jspx_th_mvc_005ffragmentValue_005f8.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f8 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object propertyId = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f8 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f8.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f8.doInitBody();
                }
                propertyId = (java.lang.Object) _jspx_page_context.findAttribute("propertyId");
                do {
                  out.write("\r\n");
                  out.write("            ");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f9 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f9.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f9.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f8);
                  // /components/bam/dashboard_filter/short/properties.jsp(130,12) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f9.setName("dataProviderCode");
                  // /components/bam/dashboard_filter/short/properties.jsp(130,12) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f9.setId("dataProviderCode");
                  int _jspx_eval_mvc_005ffragmentValue_005f9 = _jspx_th_mvc_005ffragmentValue_005f9.doStartTag();
                  if (_jspx_eval_mvc_005ffragmentValue_005f9 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                    java.lang.Object dataProviderCode = null;
                    if (_jspx_eval_mvc_005ffragmentValue_005f9 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.pushBody();
                      _jspx_th_mvc_005ffragmentValue_005f9.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                      _jspx_th_mvc_005ffragmentValue_005f9.doInitBody();
                    }
                    dataProviderCode = (java.lang.Object) _jspx_page_context.findAttribute("dataProviderCode");
                    do {
                      out.write("\r\n");
                      out.write("                ");
                      //  mvc:fragmentValue
                      org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f10 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                      _jspx_th_mvc_005ffragmentValue_005f10.setPageContext(_jspx_page_context);
                      _jspx_th_mvc_005ffragmentValue_005f10.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f9);
                      // /components/bam/dashboard_filter/short/properties.jsp(131,16) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f10.setName("minValue");
                      // /components/bam/dashboard_filter/short/properties.jsp(131,16) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f10.setId("minValue");
                      int _jspx_eval_mvc_005ffragmentValue_005f10 = _jspx_th_mvc_005ffragmentValue_005f10.doStartTag();
                      if (_jspx_eval_mvc_005ffragmentValue_005f10 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                        java.lang.Object minValue = null;
                        if (_jspx_eval_mvc_005ffragmentValue_005f10 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                          out = _jspx_page_context.pushBody();
                          _jspx_th_mvc_005ffragmentValue_005f10.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                          _jspx_th_mvc_005ffragmentValue_005f10.doInitBody();
                        }
                        minValue = (java.lang.Object) _jspx_page_context.findAttribute("minValue");
                        do {
                          out.write("\r\n");
                          out.write("                    ");
                          //  mvc:fragmentValue
                          org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f11 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                          _jspx_th_mvc_005ffragmentValue_005f11.setPageContext(_jspx_page_context);
                          _jspx_th_mvc_005ffragmentValue_005f11.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f10);
                          // /components/bam/dashboard_filter/short/properties.jsp(132,20) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                          _jspx_th_mvc_005ffragmentValue_005f11.setName("maxValue");
                          // /components/bam/dashboard_filter/short/properties.jsp(132,20) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                          _jspx_th_mvc_005ffragmentValue_005f11.setId("maxValue");
                          int _jspx_eval_mvc_005ffragmentValue_005f11 = _jspx_th_mvc_005ffragmentValue_005f11.doStartTag();
                          if (_jspx_eval_mvc_005ffragmentValue_005f11 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                            java.lang.Object maxValue = null;
                            if (_jspx_eval_mvc_005ffragmentValue_005f11 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_mvc_005ffragmentValue_005f11.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_mvc_005ffragmentValue_005f11.doInitBody();
                            }
                            maxValue = (java.lang.Object) _jspx_page_context.findAttribute("maxValue");
                            do {
                              out.write("\r\n");
                              out.write("                        ");
                              //  mvc:fragmentValue
                              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f12 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                              _jspx_th_mvc_005ffragmentValue_005f12.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragmentValue_005f12.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f11);
                              // /components/bam/dashboard_filter/short/properties.jsp(133,24) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f12.setName("submitOnChange");
                              // /components/bam/dashboard_filter/short/properties.jsp(133,24) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f12.setId("submitOnChange");
                              int _jspx_eval_mvc_005ffragmentValue_005f12 = _jspx_th_mvc_005ffragmentValue_005f12.doStartTag();
                              if (_jspx_eval_mvc_005ffragmentValue_005f12 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                              java.lang.Object submitOnChange = null;
                              if (_jspx_eval_mvc_005ffragmentValue_005f12 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_mvc_005ffragmentValue_005f12.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_mvc_005ffragmentValue_005f12.doInitBody();
                              }
                              submitOnChange = (java.lang.Object) _jspx_page_context.findAttribute("submitOnChange");
                              do {
                              out.write("\r\n");
                              out.write("                            <select class=\"skn-input\" style=\"width:172px;\" name=\"");
                              out.print(DashboardFilterHandler.PARAM_VALUE +"_"+ propertyId);
                              out.write("\"\r\n");
                              out.write("                                    onchange=\"\r\n");
                              out.write("                                    var element = document.getElementById('");
                              //  panel:encode
                              org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f3 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
                              _jspx_th_panel_005fencode_005f3.setPageContext(_jspx_page_context);
                              _jspx_th_panel_005fencode_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(136,75) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_panel_005fencode_005f3.setName("CustomDateFor/"+dataProviderCode+"/"+propertyId);
                              int _jspx_eval_panel_005fencode_005f3 = _jspx_th_panel_005fencode_005f3.doStartTag();
                              if (_jspx_th_panel_005fencode_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f3);
                              return;
                              }
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f3);
                              out.write("');\r\n");
                              out.write("                                    if (this.options[this.selectedIndex].value == '");
                              out.print(DashboardFilterHandler.PARAM_CUSTOM_VALUE);
                              out.write("') element.style.display = 'inline';\r\n");
                              out.write("                                    else if (this.options[this.selectedIndex].value == '");
                              out.print(DashboardFilterHandler.PARAM_NULL_VALUE);
                              out.write("') element.style.display = 'none';\r\n");
                              out.write("                                    else {\r\n");
                              out.write("                                        element.style.display = 'none';\r\n");
                              out.write("                                        ");
 if (submitOnChange != null && ((Boolean)submitOnChange).booleanValue()) {
                              out.write("\r\n");
                              out.write("                                            submitAjaxForm(this.form);\r\n");
                              out.write("                                        ");
 } 
                              out.write("\r\n");
                              out.write("                                    }\">\r\n");
                              out.write("                                }\r\n");
                              out.write("                                <option title=\"- ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f1 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f1.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(146,49) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f1.setKey(DashboardFilterHandler.I18N_PREFFIX + "select");
                              int _jspx_eval_i18n_005fmessage_005f1 = _jspx_th_i18n_005fmessage_005f1.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f1);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f1);
                              out.write(' ');
                              //  mvc:fragmentValue
                              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f13 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                              _jspx_th_mvc_005ffragmentValue_005f13.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragmentValue_005f13.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(146,123) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f13.setName("propertyName");
                              int _jspx_eval_mvc_005ffragmentValue_005f13 = _jspx_th_mvc_005ffragmentValue_005f13.doStartTag();
                              if (_jspx_th_mvc_005ffragmentValue_005f13.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f13);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f13);
                              out.write(" -\"\r\n");
                              out.write("                                        value=\"");
                              out.print(DashboardFilterHandler.PARAM_NULL_VALUE);
                              out.write("\"\r\n");
                              out.write("                                        ");
                              out.print(minValue == null && maxValue == null ? "selected" : "");
                              out.write("> - ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f2 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f2.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(148,103) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f2.setKey(DashboardFilterHandler.I18N_PREFFIX + "select");
                              int _jspx_eval_i18n_005fmessage_005f2 = _jspx_th_i18n_005fmessage_005f2.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f2);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f2);
                              out.write(' ');
                              //  mvc:fragmentValue
                              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f14 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                              _jspx_th_mvc_005ffragmentValue_005f14.setPageContext(_jspx_page_context);
                              _jspx_th_mvc_005ffragmentValue_005f14.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(148,177) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_mvc_005ffragmentValue_005f14.setName("propertyName");
                              int _jspx_eval_mvc_005ffragmentValue_005f14 = _jspx_th_mvc_005ffragmentValue_005f14.doStartTag();
                              if (_jspx_th_mvc_005ffragmentValue_005f14.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f14);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fnobody.reuse(_jspx_th_mvc_005ffragmentValue_005f14);
                              out.write(" - </option>\r\n");
                              out.write("                                <option value=\"");
                              out.print(DashboardFilterHandler.PARAM_CUSTOM_VALUE);
                              out.write("\"\r\n");
                              out.write("                                        ");
                              out.print(minValue != null || maxValue != null ? "selected": "");
                              out.write("> - ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f3 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f3.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(150,102) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f3.setKey(DashboardFilterHandler.I18N_PREFFIX + "custom");
                              int _jspx_eval_i18n_005fmessage_005f3 = _jspx_th_i18n_005fmessage_005f3.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f3);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f3);
                              out.write(" - </option>\r\n");
                              out.write("                                <option value=\"");
                              out.print(DashboardFilterHandler.PARAM_LAST_HOUR);
                              out.write("\" > ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f4 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f4.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(151,94) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f4.setKey(DashboardFilterHandler.I18N_PREFFIX + "lastHour");
                              int _jspx_eval_i18n_005fmessage_005f4 = _jspx_th_i18n_005fmessage_005f4.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f4);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f4);
                              out.write(" </option>\r\n");
                              out.write("                                <option value=\"");
                              out.print(DashboardFilterHandler.PARAM_LAST_12HOURS);
                              out.write("\" > ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f5 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f5.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(152,97) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f5.setKey(DashboardFilterHandler.I18N_PREFFIX + "last12Hours");
                              int _jspx_eval_i18n_005fmessage_005f5 = _jspx_th_i18n_005fmessage_005f5.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f5);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f5);
                              out.write(" </option>\r\n");
                              out.write("                                <option value=\"");
                              out.print(DashboardFilterHandler.PARAM_TODAY);
                              out.write("\" > ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f6 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f6.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(153,90) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f6.setKey(DashboardFilterHandler.I18N_PREFFIX + "today");
                              int _jspx_eval_i18n_005fmessage_005f6 = _jspx_th_i18n_005fmessage_005f6.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f6);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f6);
                              out.write(" </option>\r\n");
                              out.write("                                <option value=\"");
                              out.print(DashboardFilterHandler.PARAM_YESTERDAY);
                              out.write("\" > ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f7 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f7.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(154,94) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f7.setKey(DashboardFilterHandler.I18N_PREFFIX + "yesterday");
                              int _jspx_eval_i18n_005fmessage_005f7 = _jspx_th_i18n_005fmessage_005f7.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f7);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f7);
                              out.write(" </option>\r\n");
                              out.write("                                <option value=\"");
                              out.print(DashboardFilterHandler.PARAM_LAST_7DAYS);
                              out.write("\" > ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f8 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f8.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f8.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(155,95) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f8.setKey(DashboardFilterHandler.I18N_PREFFIX + "last7Days");
                              int _jspx_eval_i18n_005fmessage_005f8 = _jspx_th_i18n_005fmessage_005f8.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f8);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f8);
                              out.write(" </option>\r\n");
                              out.write("                                <option value=\"");
                              out.print(DashboardFilterHandler.PARAM_LAST_MONTH);
                              out.write("\" > ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f9 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f9.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f9.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(156,95) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f9.setKey(DashboardFilterHandler.I18N_PREFFIX + "lastMonth");
                              int _jspx_eval_i18n_005fmessage_005f9 = _jspx_th_i18n_005fmessage_005f9.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f9.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f9);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f9);
                              out.write(" </option>\r\n");
                              out.write("                                <option value=\"");
                              out.print(DashboardFilterHandler.PARAM_THIS_MONTH);
                              out.write("\" > ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f10 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f10.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f10.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(157,95) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f10.setKey(DashboardFilterHandler.I18N_PREFFIX + "thisMonth");
                              int _jspx_eval_i18n_005fmessage_005f10 = _jspx_th_i18n_005fmessage_005f10.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f10.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f10);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f10);
                              out.write(" </option>\r\n");
                              out.write("                                <option value=\"");
                              out.print(DashboardFilterHandler.PARAM_THIS_QUARTER);
                              out.write("\" > ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f11 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f11.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f11.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(158,97) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f11.setKey(DashboardFilterHandler.I18N_PREFFIX + "thisQuarter");
                              int _jspx_eval_i18n_005fmessage_005f11 = _jspx_th_i18n_005fmessage_005f11.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f11.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f11);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f11);
                              out.write(" </option>\r\n");
                              out.write("                                <option value=\"");
                              out.print(DashboardFilterHandler.PARAM_LAST_QUARTER);
                              out.write("\" > ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f12 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f12.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f12.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(159,97) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f12.setKey(DashboardFilterHandler.I18N_PREFFIX + "lastQuarter");
                              int _jspx_eval_i18n_005fmessage_005f12 = _jspx_th_i18n_005fmessage_005f12.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f12.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f12);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f12);
                              out.write(" </option>\r\n");
                              out.write("                                <option value=\"");
                              out.print(DashboardFilterHandler.PARAM_LAST_6MONTHS);
                              out.write("\" > ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f13 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f13.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f13.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(160,97) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f13.setKey(DashboardFilterHandler.I18N_PREFFIX + "last6Months");
                              int _jspx_eval_i18n_005fmessage_005f13 = _jspx_th_i18n_005fmessage_005f13.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f13.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f13);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f13);
                              out.write(" </option>\r\n");
                              out.write("                                <option value=\"");
                              out.print(DashboardFilterHandler.PARAM_THIS_YEAR);
                              out.write("\" > ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f14 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f14.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f14.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(161,94) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f14.setKey(DashboardFilterHandler.I18N_PREFFIX + "thisYear");
                              int _jspx_eval_i18n_005fmessage_005f14 = _jspx_th_i18n_005fmessage_005f14.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f14.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f14);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f14);
                              out.write(" </option>\r\n");
                              out.write("                                <option value=\"");
                              out.print(DashboardFilterHandler.PARAM_LAST_YEAR);
                              out.write("\" > ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f15 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f15.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f15.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(162,94) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f15.setKey(DashboardFilterHandler.I18N_PREFFIX + "lastYear");
                              int _jspx_eval_i18n_005fmessage_005f15 = _jspx_th_i18n_005fmessage_005f15.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f15.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f15);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f15);
                              out.write(" </option>\r\n");
                              out.write("                            </select>\r\n");
                              out.write("                            <div id=\"");
                              //  panel:encode
                              org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f4 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
                              _jspx_th_panel_005fencode_005f4.setPageContext(_jspx_page_context);
                              _jspx_th_panel_005fencode_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(164,37) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_panel_005fencode_005f4.setName("CustomDateFor/"+dataProviderCode+"/"+propertyId);
                              int _jspx_eval_panel_005fencode_005f4 = _jspx_th_panel_005fencode_005f4.doStartTag();
                              if (_jspx_th_panel_005fencode_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f4);
                              return;
                              }
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f4);
                              out.write("\" style=\"display:none; white-space:nowrap;\">\r\n");
                              out.write("                                 <div style=\"height:5px;\"></div>\r\n");
                              out.write("                                 <input class=\"skn-input\" style=\"width:43px;\" id=\"");
                              //  panel:encode
                              org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f5 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
                              _jspx_th_panel_005fencode_005f5.setPageContext(_jspx_page_context);
                              _jspx_th_panel_005fencode_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(166,82) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_panel_005fencode_005f5.setName("dateInputMin_" + dataProviderCode + "/" + propertyId);
                              int _jspx_eval_panel_005fencode_005f5 = _jspx_th_panel_005fencode_005f5.doStartTag();
                              if (_jspx_th_panel_005fencode_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f5);
                              return;
                              }
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f5);
                              out.write("\"\r\n");
                              out.write("                                        name='");
                              out.print(DashboardFilterHandler.PARAM_VALUE_MIN + "_" + propertyId);
                              out.write("'\r\n");
                              out.write("                                        value='");
                              out.print(minValue == null ? "" : minValue);
                              out.write("'>\r\n");
                              out.write("                                 <a style=\"height:20px; vertical-align:bottom;\" href=\"#\" onclick=\"NewCal('");
                              //  panel:encode
                              org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f6 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
                              _jspx_th_panel_005fencode_005f6.setPageContext(_jspx_page_context);
                              _jspx_th_panel_005fencode_005f6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(169,106) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_panel_005fencode_005f6.setName("dateInputMin_" + dataProviderCode + "/" + propertyId);
                              int _jspx_eval_panel_005fencode_005f6 = _jspx_th_panel_005fencode_005f6.doStartTag();
                              if (_jspx_th_panel_005fencode_005f6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f6);
                              return;
                              }
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f6);
                              out.write("','ddmmyyyy',true); return false; \">\r\n");
                              out.write("                                     <img src=\"");
                              if (_jspx_meth_static_005fimage_005f1(_jspx_th_mvc_005ffragmentValue_005f12, _jspx_page_context))
                              return;
                              out.write("\" border=\"0\">\r\n");
                              out.write("                                 </a>\r\n");
                              out.write("                                 ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f16 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f16.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f16.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(172,33) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f16.setKey(DashboardFilterHandler.I18N_PREFFIX + "to");
                              int _jspx_eval_i18n_005fmessage_005f16 = _jspx_th_i18n_005fmessage_005f16.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f16.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f16);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f16);
                              out.write("\r\n");
                              out.write("                                <input class=\"skn-input\" style=\"width:43px;\" id=\"");
                              //  panel:encode
                              org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f7 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
                              _jspx_th_panel_005fencode_005f7.setPageContext(_jspx_page_context);
                              _jspx_th_panel_005fencode_005f7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(173,81) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_panel_005fencode_005f7.setName("dateInputMax_" + dataProviderCode + "/" + propertyId);
                              int _jspx_eval_panel_005fencode_005f7 = _jspx_th_panel_005fencode_005f7.doStartTag();
                              if (_jspx_th_panel_005fencode_005f7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f7);
                              return;
                              }
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f7);
                              out.write("\"\r\n");
                              out.write("                                        name='");
                              out.print(DashboardFilterHandler.PARAM_VALUE_MAX + "_" + propertyId);
                              out.write("'\r\n");
                              out.write("                                        value='");
                              out.print(maxValue == null ? "" : maxValue);
                              out.write("'>\r\n");
                              out.write("                                 <a style=\"height:20px; vertical-align:bottom;\" href=\"#\" onclick=\"NewCal('");
                              //  panel:encode
                              org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f8 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
                              _jspx_th_panel_005fencode_005f8.setPageContext(_jspx_page_context);
                              _jspx_th_panel_005fencode_005f8.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
                              // /components/bam/dashboard_filter/short/properties.jsp(176,106) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_panel_005fencode_005f8.setName("dateInputMax_" + dataProviderCode + "/" + propertyId);
                              int _jspx_eval_panel_005fencode_005f8 = _jspx_th_panel_005fencode_005f8.doStartTag();
                              if (_jspx_th_panel_005fencode_005f8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f8);
                              return;
                              }
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f8);
                              out.write("','ddmmyyyy',true); return false; \">\r\n");
                              out.write("                                     <img src=\"");
                              if (_jspx_meth_static_005fimage_005f2(_jspx_th_mvc_005ffragmentValue_005f12, _jspx_page_context))
                              return;
                              out.write("\" border=\"0\">\r\n");
                              out.write("                                 </a>\r\n");
                              out.write("                            </div>\r\n");
                              out.write("\r\n");
                              out.write("            ");
                              int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f12.doAfterBody();
                              submitOnChange = (java.lang.Object) _jspx_page_context.findAttribute("submitOnChange");
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                              } while (true);
                              if (_jspx_eval_mvc_005ffragmentValue_005f12 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                              }
                              }
                              if (_jspx_th_mvc_005ffragmentValue_005f12.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f12);
                              return;
                              }
                              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f12);
                              out.write("\r\n");
                              out.write("            ");
                              int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f11.doAfterBody();
                              maxValue = (java.lang.Object) _jspx_page_context.findAttribute("maxValue");
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                            } while (true);
                            if (_jspx_eval_mvc_005ffragmentValue_005f11 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                            }
                          }
                          if (_jspx_th_mvc_005ffragmentValue_005f11.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                            _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f11);
                            return;
                          }
                          _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f11);
                          out.write("\r\n");
                          out.write("            ");
                          int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f10.doAfterBody();
                          minValue = (java.lang.Object) _jspx_page_context.findAttribute("minValue");
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
                      out.write("\r\n");
                      out.write("            ");
                      int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f9.doAfterBody();
                      dataProviderCode = (java.lang.Object) _jspx_page_context.findAttribute("dataProviderCode");
                      if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                        break;
                    } while (true);
                    if (_jspx_eval_mvc_005ffragmentValue_005f9 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.popBody();
                    }
                  }
                  if (_jspx_th_mvc_005ffragmentValue_005f9.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                    _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f9);
                    return;
                  }
                  _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f9);
                  out.write("\r\n");
                  out.write("        ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f8.doAfterBody();
                  propertyId = (java.lang.Object) _jspx_page_context.findAttribute("propertyId");
                  if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                    break;
                } while (true);
                if (_jspx_eval_mvc_005ffragmentValue_005f8 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.popBody();
                }
              }
              if (_jspx_th_mvc_005ffragmentValue_005f8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f8);
                return;
              }
              _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f8);
              out.write("\r\n");
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
            return;
          }
          _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f8);
          out.write("\r\n");
          out.write("\r\n");
          out.write("\r\n");
          out.write("    ");
          //  mvc:fragment
          org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f9 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
          _jspx_th_mvc_005ffragment_005f9.setPageContext(_jspx_page_context);
          _jspx_th_mvc_005ffragment_005f9.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
          // /components/bam/dashboard_filter/short/properties.jsp(189,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
          _jspx_th_mvc_005ffragment_005f9.setName("outputPropertyTypeNumeric");
          int _jspx_eval_mvc_005ffragment_005f9 = _jspx_th_mvc_005ffragment_005f9.doStartTag();
          if (_jspx_eval_mvc_005ffragment_005f9 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
            if (_jspx_eval_mvc_005ffragment_005f9 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
              out = _jspx_page_context.pushBody();
              _jspx_th_mvc_005ffragment_005f9.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
              _jspx_th_mvc_005ffragment_005f9.doInitBody();
            }
            do {
              out.write("\r\n");
              out.write("        ");
              //  mvc:fragmentValue
              org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f15 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
              _jspx_th_mvc_005ffragmentValue_005f15.setPageContext(_jspx_page_context);
              _jspx_th_mvc_005ffragmentValue_005f15.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragment_005f9);
              // /components/bam/dashboard_filter/short/properties.jsp(190,8) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f15.setName("propertyId");
              // /components/bam/dashboard_filter/short/properties.jsp(190,8) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
              _jspx_th_mvc_005ffragmentValue_005f15.setId("propertyId");
              int _jspx_eval_mvc_005ffragmentValue_005f15 = _jspx_th_mvc_005ffragmentValue_005f15.doStartTag();
              if (_jspx_eval_mvc_005ffragmentValue_005f15 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                java.lang.Object propertyId = null;
                if (_jspx_eval_mvc_005ffragmentValue_005f15 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                  out = _jspx_page_context.pushBody();
                  _jspx_th_mvc_005ffragmentValue_005f15.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                  _jspx_th_mvc_005ffragmentValue_005f15.doInitBody();
                }
                propertyId = (java.lang.Object) _jspx_page_context.findAttribute("propertyId");
                do {
                  out.write("\r\n");
                  out.write("            ");
                  //  mvc:fragmentValue
                  org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f16 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                  _jspx_th_mvc_005ffragmentValue_005f16.setPageContext(_jspx_page_context);
                  _jspx_th_mvc_005ffragmentValue_005f16.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f15);
                  // /components/bam/dashboard_filter/short/properties.jsp(191,12) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f16.setName("dataProviderCode");
                  // /components/bam/dashboard_filter/short/properties.jsp(191,12) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                  _jspx_th_mvc_005ffragmentValue_005f16.setId("dataProviderCode");
                  int _jspx_eval_mvc_005ffragmentValue_005f16 = _jspx_th_mvc_005ffragmentValue_005f16.doStartTag();
                  if (_jspx_eval_mvc_005ffragmentValue_005f16 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                    java.lang.Object dataProviderCode = null;
                    if (_jspx_eval_mvc_005ffragmentValue_005f16 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                      out = _jspx_page_context.pushBody();
                      _jspx_th_mvc_005ffragmentValue_005f16.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                      _jspx_th_mvc_005ffragmentValue_005f16.doInitBody();
                    }
                    dataProviderCode = (java.lang.Object) _jspx_page_context.findAttribute("dataProviderCode");
                    do {
                      out.write("\r\n");
                      out.write("                ");
                      //  mvc:fragmentValue
                      org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f17 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                      _jspx_th_mvc_005ffragmentValue_005f17.setPageContext(_jspx_page_context);
                      _jspx_th_mvc_005ffragmentValue_005f17.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f16);
                      // /components/bam/dashboard_filter/short/properties.jsp(192,16) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f17.setName("minValue");
                      // /components/bam/dashboard_filter/short/properties.jsp(192,16) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                      _jspx_th_mvc_005ffragmentValue_005f17.setId("minValue");
                      int _jspx_eval_mvc_005ffragmentValue_005f17 = _jspx_th_mvc_005ffragmentValue_005f17.doStartTag();
                      if (_jspx_eval_mvc_005ffragmentValue_005f17 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                        java.lang.Object minValue = null;
                        if (_jspx_eval_mvc_005ffragmentValue_005f17 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                          out = _jspx_page_context.pushBody();
                          _jspx_th_mvc_005ffragmentValue_005f17.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                          _jspx_th_mvc_005ffragmentValue_005f17.doInitBody();
                        }
                        minValue = (java.lang.Object) _jspx_page_context.findAttribute("minValue");
                        do {
                          out.write("\r\n");
                          out.write("                    ");
                          //  mvc:fragmentValue
                          org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag _jspx_th_mvc_005ffragmentValue_005f18 = (org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag) _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.get(org.jboss.dashboard.ui.taglib.formatter.FragmentValueTag.class);
                          _jspx_th_mvc_005ffragmentValue_005f18.setPageContext(_jspx_page_context);
                          _jspx_th_mvc_005ffragmentValue_005f18.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f17);
                          // /components/bam/dashboard_filter/short/properties.jsp(193,20) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                          _jspx_th_mvc_005ffragmentValue_005f18.setName("maxValue");
                          // /components/bam/dashboard_filter/short/properties.jsp(193,20) name = id type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                          _jspx_th_mvc_005ffragmentValue_005f18.setId("maxValue");
                          int _jspx_eval_mvc_005ffragmentValue_005f18 = _jspx_th_mvc_005ffragmentValue_005f18.doStartTag();
                          if (_jspx_eval_mvc_005ffragmentValue_005f18 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
                            java.lang.Object maxValue = null;
                            if (_jspx_eval_mvc_005ffragmentValue_005f18 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.pushBody();
                              _jspx_th_mvc_005ffragmentValue_005f18.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
                              _jspx_th_mvc_005ffragmentValue_005f18.doInitBody();
                            }
                            maxValue = (java.lang.Object) _jspx_page_context.findAttribute("maxValue");
                            do {
                              out.write("\r\n");
                              out.write("                        <div style=\"white-space:nowrap;\">\r\n");
                              out.write("                           <input class=\"skn-input\" style=\"width:63px; overflow:hidden;\" type=\"text\" id=\"");
                              //  panel:encode
                              org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f9 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
                              _jspx_th_panel_005fencode_005f9.setPageContext(_jspx_page_context);
                              _jspx_th_panel_005fencode_005f9.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f18);
                              // /components/bam/dashboard_filter/short/properties.jsp(195,105) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_panel_005fencode_005f9.setName("numericInputMin_" + dataProviderCode + "/" + propertyId);
                              int _jspx_eval_panel_005fencode_005f9 = _jspx_th_panel_005fencode_005f9.doStartTag();
                              if (_jspx_th_panel_005fencode_005f9.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f9);
                              return;
                              }
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f9);
                              out.write("\"\r\n");
                              out.write("                                   name=\"");
                              out.print(DashboardFilterHandler.PARAM_VALUE_MIN + "_" +propertyId);
                              out.write("\"\r\n");
                              out.write("                                    value=\"");
                              out.print(minValue == null ? "" : minValue);
                              out.write("\">\r\n");
                              out.write("                            ");
                              //  i18n:message
                              org.apache.taglibs.i18n.MessageTag _jspx_th_i18n_005fmessage_005f17 = (org.apache.taglibs.i18n.MessageTag) _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.get(org.apache.taglibs.i18n.MessageTag.class);
                              _jspx_th_i18n_005fmessage_005f17.setPageContext(_jspx_page_context);
                              _jspx_th_i18n_005fmessage_005f17.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f18);
                              // /components/bam/dashboard_filter/short/properties.jsp(198,28) name = key type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_i18n_005fmessage_005f17.setKey(DashboardFilterHandler.I18N_PREFFIX + "to");
                              int _jspx_eval_i18n_005fmessage_005f17 = _jspx_th_i18n_005fmessage_005f17.doStartTag();
                              if (_jspx_th_i18n_005fmessage_005f17.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f17);
                              return;
                              }
                              _005fjspx_005ftagPool_005fi18n_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_i18n_005fmessage_005f17);
                              out.write("\r\n");
                              out.write("                            <input class=\"skn-input\" style=\"width:63px; overflow:hidden;\" type=\"text\" id=\"");
                              //  panel:encode
                              org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f10 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
                              _jspx_th_panel_005fencode_005f10.setPageContext(_jspx_page_context);
                              _jspx_th_panel_005fencode_005f10.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f18);
                              // /components/bam/dashboard_filter/short/properties.jsp(199,106) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
                              _jspx_th_panel_005fencode_005f10.setName("numericInputMax_" + dataProviderCode + "/" + propertyId);
                              int _jspx_eval_panel_005fencode_005f10 = _jspx_th_panel_005fencode_005f10.doStartTag();
                              if (_jspx_th_panel_005fencode_005f10.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f10);
                              return;
                              }
                              _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f10);
                              out.write("\"\r\n");
                              out.write("                                   name=\"");
                              out.print(DashboardFilterHandler.PARAM_VALUE_MAX + "_" + propertyId);
                              out.write("\"\r\n");
                              out.write("                                    value=\"");
                              out.print(maxValue == null ? "" : maxValue);
                              out.write("\">\r\n");
                              out.write("                        </div>\r\n");
                              out.write("\r\n");
                              out.write("        ");
                              int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f18.doAfterBody();
                              maxValue = (java.lang.Object) _jspx_page_context.findAttribute("maxValue");
                              if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                              break;
                            } while (true);
                            if (_jspx_eval_mvc_005ffragmentValue_005f18 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                              out = _jspx_page_context.popBody();
                            }
                          }
                          if (_jspx_th_mvc_005ffragmentValue_005f18.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                            _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f18);
                            return;
                          }
                          _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f18);
                          out.write("\r\n");
                          out.write("        ");
                          int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f17.doAfterBody();
                          minValue = (java.lang.Object) _jspx_page_context.findAttribute("minValue");
                          if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
                            break;
                        } while (true);
                        if (_jspx_eval_mvc_005ffragmentValue_005f17 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
                          out = _jspx_page_context.popBody();
                        }
                      }
                      if (_jspx_th_mvc_005ffragmentValue_005f17.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
                        _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f17);
                        return;
                      }
                      _005fjspx_005ftagPool_005fmvc_005ffragmentValue_0026_005fname_005fid.reuse(_jspx_th_mvc_005ffragmentValue_005f17);
                      out.write("\r\n");
                      out.write("        ");
                      int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f16.doAfterBody();
                      dataProviderCode = (java.lang.Object) _jspx_page_context.findAttribute("dataProviderCode");
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
                  out.write("\r\n");
                  out.write("        ");
                  int evalDoAfterBody = _jspx_th_mvc_005ffragmentValue_005f15.doAfterBody();
                  propertyId = (java.lang.Object) _jspx_page_context.findAttribute("propertyId");
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
              out.write("\r\n");
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
          out.write("\r\n");
          out.write("\r\n");
          out.write("    ");
          if (_jspx_meth_mvc_005ffragment_005f10(_jspx_th_mvc_005fformatter_005f0, _jspx_page_context))
            return;
          out.write("\r\n");
          out.write("\r\n");
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

  private boolean _jspx_meth_mvc_005ffragment_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f0 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f0.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /components/bam/dashboard_filter/short/properties.jsp(34,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f0.setName("outputStart");
    int _jspx_eval_mvc_005ffragment_005f0 = _jspx_th_mvc_005ffragment_005f0.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f0.doInitBody();
      }
      do {
        out.write("\r\n");
        out.write("        <table cellpadding=\"0\" cellspacing=\"10\" border=\"0\" width=\"100%\">\r\n");
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

  private boolean _jspx_meth_mvc_005ffragment_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f2 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f2.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /components/bam/dashboard_filter/short/properties.jsp(48,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f2.setName("outputStartRow");
    int _jspx_eval_mvc_005ffragment_005f2 = _jspx_th_mvc_005ffragment_005f2.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f2.doInitBody();
      }
      do {
        out.write("\r\n");
        out.write("        <tr>\r\n");
        out.write("            <td>\r\n");
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
    // /components/bam/dashboard_filter/short/properties.jsp(53,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f3.setName("outputEndRow");
    int _jspx_eval_mvc_005ffragment_005f3 = _jspx_th_mvc_005ffragment_005f3.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f3 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f3 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f3.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f3.doInitBody();
      }
      do {
        out.write("\r\n");
        out.write("            </td>\r\n");
        out.write("        </tr>\r\n");
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
    // /components/bam/dashboard_filter/short/properties.jsp(64,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f5.setName("outputNewColumn");
    int _jspx_eval_mvc_005ffragment_005f5 = _jspx_th_mvc_005ffragment_005f5.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f5 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f5 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f5.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f5.doInitBody();
      }
      do {
        out.write("\r\n");
        out.write("\r\n");
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

  private boolean _jspx_meth_static_005fimage_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f7, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f0 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f0.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f7);
    // /components/bam/dashboard_filter/short/properties.jsp(113,39) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f0.setRelativePath("general/16x16/ico-info.png");
    int _jspx_eval_static_005fimage_005f0 = _jspx_th_static_005fimage_005f0.doStartTag();
    if (_jspx_th_static_005fimage_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f0);
    return false;
  }

  private boolean _jspx_meth_mvc_005finclude_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f7, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:include
    org.jboss.dashboard.ui.taglib.JSPIncludeTag _jspx_th_mvc_005finclude_005f0 = (org.jboss.dashboard.ui.taglib.JSPIncludeTag) _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.get(org.jboss.dashboard.ui.taglib.JSPIncludeTag.class);
    _jspx_th_mvc_005finclude_005f0.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005finclude_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f7);
    // /components/bam/dashboard_filter/short/properties.jsp(116,24) name = page type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005finclude_005f0.setPage("../filter_help.jsp");
    int _jspx_eval_mvc_005finclude_005f0 = _jspx_th_mvc_005finclude_005f0.doStartTag();
    if (_jspx_th_mvc_005finclude_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.reuse(_jspx_th_mvc_005finclude_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005finclude_0026_005fpage_005fnobody.reuse(_jspx_th_mvc_005finclude_005f0);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f12, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f1 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f1.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
    // /components/bam/dashboard_filter/short/properties.jsp(170,47) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f1.setRelativePath("general/16x16/ico-calendar.png");
    int _jspx_eval_static_005fimage_005f1 = _jspx_th_static_005fimage_005f1.doStartTag();
    if (_jspx_th_static_005fimage_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f1);
    return false;
  }

  private boolean _jspx_meth_static_005fimage_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005ffragmentValue_005f12, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  static:image
    org.jboss.dashboard.ui.taglib.resource.ImageResolverTag _jspx_th_static_005fimage_005f2 = (org.jboss.dashboard.ui.taglib.resource.ImageResolverTag) _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.get(org.jboss.dashboard.ui.taglib.resource.ImageResolverTag.class);
    _jspx_th_static_005fimage_005f2.setPageContext(_jspx_page_context);
    _jspx_th_static_005fimage_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005ffragmentValue_005f12);
    // /components/bam/dashboard_filter/short/properties.jsp(177,47) name = relativePath type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_static_005fimage_005f2.setRelativePath("general/16x16/ico-calendar.png");
    int _jspx_eval_static_005fimage_005f2 = _jspx_th_static_005fimage_005f2.doStartTag();
    if (_jspx_th_static_005fimage_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fstatic_005fimage_0026_005frelativePath_005fnobody.reuse(_jspx_th_static_005fimage_005f2);
    return false;
  }

  private boolean _jspx_meth_mvc_005ffragment_005f10(javax.servlet.jsp.tagext.JspTag _jspx_th_mvc_005fformatter_005f0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:fragment
    org.jboss.dashboard.ui.taglib.formatter.FragmentTag _jspx_th_mvc_005ffragment_005f10 = (org.jboss.dashboard.ui.taglib.formatter.FragmentTag) _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.get(org.jboss.dashboard.ui.taglib.formatter.FragmentTag.class);
    _jspx_th_mvc_005ffragment_005f10.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005ffragment_005f10.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_mvc_005fformatter_005f0);
    // /components/bam/dashboard_filter/short/properties.jsp(210,4) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005ffragment_005f10.setName("outputEnd");
    int _jspx_eval_mvc_005ffragment_005f10 = _jspx_th_mvc_005ffragment_005f10.doStartTag();
    if (_jspx_eval_mvc_005ffragment_005f10 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_mvc_005ffragment_005f10 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_mvc_005ffragment_005f10.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_mvc_005ffragment_005f10.doInitBody();
      }
      do {
        out.write("\r\n");
        out.write("        </table>\r\n");
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
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005ffragment_0026_005fname.reuse(_jspx_th_mvc_005ffragment_005f10);
    return false;
  }
}
