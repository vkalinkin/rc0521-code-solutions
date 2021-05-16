console.log('Lodash is loaded:', typeof _ !== 'undefined');

// var players = [
//   {
//     name: 'Dante',
//     hand: []
//   },
//   {
//     name: 'Vergil',
//     hand: []
//   },
//   {
//     name: 'Nero',
//     hand: []
//   },
//   {
//     name: 'Trish',
//     hand: []
//   }
// ]

var deck = [
  {
    rank: 'Ace',
    suit: 'Clubs'
  },
  {
    rank: 2,
    suit: 'Clubs'
  },
  {
    rank: 3,
    suit: 'Clubs'
  },
  {
    rank: 4,
    suit: 'Clubs'
  },
  {
    rank: 5,
    suit: 'Clubs'
  },
  {
    rank: 6,
    suit: 'Clubs'
  },
  {
    rank: 7,
    suit: 'Clubs'
  },
  {
    rank: 8,
    suit: 'Clubs'
  },
  {
    rank: 9,
    suit: 'Clubs'
  },
  {
    rank: 10,
    suit: 'Clubs'
  },
  {
    rank: 'Jack',
    suit: 'Clubs'
  },
  {
    rank: 'Queen',
    suit: 'Clubs'
  },
  {
    rank: 'King',
    suit: 'Clubs'
  },

  {
    rank: 'Ace',
    suit: 'Spades'
  },
  {
    rank: 2,
    suit: 'Spades'
  },
  {
    rank: 3,
    suit: 'Spades'
  },
  {
    rank: 4,
    suit: 'Spades'
  },
  {
    rank: 5,
    suit: 'Spades'
  },
  {
    rank: 6,
    suit: 'Spades'
  },
  {
    rank: 7,
    suit: 'Spades'
  },
  {
    rank: 8,
    suit: 'Spades'
  },
  {
    rank: 9,
    suit: 'Spades'
  },
  {
    rank: 10,
    suit: 'Spades'
  },
  {
    rank: 'Jack',
    suit: 'Spades'
  },
  {
    rank: 'Queen',
    suit: 'Spades'
  },
  {
    rank: 'King',
    suit: 'Spades'
  },

  {
    rank: 'Ace',
    suit: 'Diamonds'
  },
  {
    rank: 2,
    suit: 'Diamonds'
  },
  {
    rank: 3,
    suit: 'Diamonds'
  },
  {
    rank: 4,
    suit: 'Diamonds'
  },
  {
    rank: 5,
    suit: 'Diamonds'
  },
  {
    rank: 6,
    suit: 'Diamonds'
  },
  {
    rank: 7,
    suit: 'Diamonds'
  },
  {
    rank: 8,
    suit: 'Diamonds'
  },
  {
    rank: 9,
    suit: 'Diamonds'
  },
  {
    rank: 10,
    suit: 'Diamonds'
  },
  {
    rank: 'Jack',
    suit: 'Diamonds'
  },
  {
    rank: 'Queen',
    suit: 'Diamonds'
  },
  {
    rank: 'King',
    suit: 'Diamonds'
  },

  {
    rank: 'Ace',
    suit: 'Hearts'
  },
  {
    rank: 2,
    suit: 'Hearts'
  },
  {
    rank: 3,
    suit: 'Hearts'
  },
  {
    rank: 4,
    suit: 'Hearts'
  },
  {
    rank: 5,
    suit: 'Hearts'
  },
  {
    rank: 6,
    suit: 'Hearts'
  },
  {
    rank: 7,
    suit: 'Hearts'
  },
  {
    rank: 8,
    suit: 'Hearts'
  },
  {
    rank: 9,
    suit: 'Hearts'
  },
  {
    rank: 10,
    suit: 'Hearts'
  },
  {
    rank: 'Jack',
    suit: 'Hearts'
  },
  {
    rank: 'Queen',
    suit: 'Hearts'
  },
  {
    rank: 'King',
    suit: 'Hearts'
  }
];
// function printPlayers(){
//   console.log(players);
// }

// function printDeck(){
//   console.log(deck);
// }

// function shuffleAndPullLastCard(){
//   deck = _.shuffle(deck);
//   var currrentCard = deck.pop()
//   console.log('card:', currrentCard);
// }

function onePlay(players, cardsPerHand) {
  deck = _.shuffle(deck);
  for (var p = 0; p < players.length; p++) {

    var currentPlayer = players[p];
    var playerPoints = 0;

    for (var a = 0; a < cardsPerHand; a++) {
      var currrentCard = deck.pop();

      currentPlayer.hand.push(currrentCard);
      if (currrentCard.rank === 'Ace') {
        playerPoints += 11;
      } else if (currrentCard.rank === 'King' || currrentCard.rank === 'Queen' || currrentCard.rank === 'Jack') {
        playerPoints += 10;
      } else {
        playerPoints += currrentCard.rank;
      }
    }

    currentPlayer.points = playerPoints;
  }
  console.log(players);
  var roundWinner = players[0];

  for (var b = 1; b < players.length; b++) {
    if (players[b].points > roundWinner.points) {
      roundWinner = players[b];
    }
  }

  console.log('The winner of the round was: ' + roundWinner.name + ' who won with ' + roundWinner.points + ' points!');
}

onePlay([{ name: 'Dante', hand: [] }, { name: 'Vergil', hand: [] }, { name: 'Nero', hand: [] }, { name: 'Trish', hand: [] }], 2);
