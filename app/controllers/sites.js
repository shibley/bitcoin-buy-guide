import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('site', { city: param });
      }
      else {
        return this.get('store')
        .findAll('site').then((results) => {
          return { query: param, results: results };
        });
      }
    }
  }
});
