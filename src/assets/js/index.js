import Hello from './modules/Hello';

let TEMPLATE = TEMPLATE || {};

TEMPLATE = {
  init: function() {
    this.setParam();
    // this.prepare();
    this.bind();
  },
  setParam: function() {
    this.ctHello = null;
  },
  bind: function() {
    this.ctHello = new Hello();
    // console.log("hello");
  },
  // prepare: function() {},
  // bindSp: function() {
  //   this.spFlag = true;
  // },
  // bindPc: function() {
  //   this.spFlag = false;
  // },
  // judgementView: function(force) {
  //   if(force) {
  //     if (window.matchMedia('(max-width: 820px)').matches) {
  //       this.bindSp();
  //     }else {
  //       this.bindPc();
  //     }
  //   } else {
  //     if (window.matchMedia('(max-width: 820px)').matches && !this.spFlag) {
  //       this.bindSp();
  //     } else if (!window.matchMedia('(max-width: 820px)').matches && this.spFlag) {
  //       this.bindPc();
  //     }
  //   }
  // },
  // bindResize: function() {
  //   // this.elWindow.addEventListener('resize', this.judgementView.bind(this, false));
  // }
};

window.addEventListener('DOMContentLoaded', () => {
  TEMPLATE.init();
});