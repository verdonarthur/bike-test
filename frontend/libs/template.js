export function initTemplate() {
  $('.tmpl').hide();  
}

export function bootstrapTmpl(initTestPage) {
  let ele = $(initTestPage);
  $(initTestPage).remove();
  
  ele.removeClass([initTestPage.replace('.',''), 'tmpl']);
  ele.show();
  return ele;
}

export function replaceTmplVal(ele, name, val) {
  return ele.html(ele.html().replace(`{{${name}}}`, val))
}
