import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation() {
      var newRequest = this.store.createRecord('request', {
        email: this.get('emailAddress'),
      });
      newRequest.save();
      this.transitionToRoute('requester');
      this.set('responseMessage', `Thank you! Bellow is people are invited this website.`);
    }
  }

});