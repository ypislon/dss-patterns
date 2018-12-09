
var data = {a: 1};

var app = new Vue({
  data: data,
  el: '#navbar'
});

Vue.component('navbar', {
  data: {a: 1},
  template: './components/templates/navbar.html'
});
