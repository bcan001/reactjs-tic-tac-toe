App.players = App.cable.subscriptions.create('PlayersChannel', {  
  received: function(data) {
    // console.log(data);
  }
});