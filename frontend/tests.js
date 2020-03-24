import { bootstrapTmpl, replaceTmplVal } from './libs/template';
import { getAllTests, JQuerySerializeArrayToJSON, postATest } from './libs/api';

const TestPage = {
  TEST_TABLE: null,
  TEST_FORM: null,
  TMPL_TEST_ROW: null,
  tests: [],

  initTestPage: function() {
    this.TEST_TABLE = $('#testpage-testtable');
    this.TMPL_TEST_ROW = bootstrapTmpl('.tmpl-testrow');
    this.TEST_FORM = $('#testpage-formadd');

    this.TEST_FORM.on('submit', e => {
      this.submitForm(e);
    });

    this.updateTest().finally();
  },
  updateTest: async function() {
    $('tbody > tr', this.TEST_TABLE).remove();

    try {
      this.tests = await getAllTests();
      this.tests.forEach(test => {
        let row = this.TMPL_TEST_ROW.clone();
        row = replaceTmplVal(row, 'id', test.id);
        row = replaceTmplVal(row, 'startDate', test.startHourDate);
        row = replaceTmplVal(row, 'endDate', test.endHourDate);
        row = replaceTmplVal(row, 'feedback', test.feedback);
        row = replaceTmplVal(row, 'edition', test.edition);
        row = replaceTmplVal(row, 'product', test.product);
        $('tbody', this.TEST_TABLE).append(row);
      });
    } catch (err) {
      console.error(err);
    }
  },
  submitForm: function(e) {
    e.preventDefault();
    let test = JQuerySerializeArrayToJSON(this.TEST_FORM.serializeArray());

    // TODO: Validation

    postATest(test)
      .then(() => {})
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        this.updateTest();
      });
  }
};

export { TestPage };
