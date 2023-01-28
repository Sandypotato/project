function generateWords(num){
    const wordList=[ 
      'afforest',
      'aftermath',
      'blithesome',
      'blithesome',
      'blithesome',
      'blithesome',
      'broadsheet',
      'buffoonish',
      'caprice',
      'capricious',
      'causerie',
      'chivalrous',
      'congratulatory',
      'dapper',
      'debonaire',
      'devil-may-care',
      'emblazon',
      'eudaemonia',
      'extremum',
      'exultant',
      'featherbrained',
      'felicity',
      'fiddle-faddle',
      'trivial nonsense',
      'gabbley',
      'gallant',
      'gilt',
      'gleeful',
      'halcyon',
      'happy-go-lucky',
      'heyday',
      'hotheaded',
      'indefinite',
      ' quantity',
      'estimated' ,
      'quantity',
      'madcap',
      'majestic',
      'merry andrew',
      'natty',
      'noble-minded',
      'nuance',
      'phantasy',
      'pollyannaish',
      'pleasantly optimistic',
      'prate',
      'salad days',
      'sappy',
      'snappy',
      'soda pop',
      'spiffy',
      'stunner',
      'timberland',
      'timbre',
      'tittle-tattle',
      'twaddle',
      'vividness',
      'wearisome',
      'whimsicalt',
      'whimsy',
      'zippy']
      var b=''
      for(var i=0;i<num;i++){
         let a = Math.floor(Math.random() *60)
         b += wordList[a];
         b+=','
      }
      return b;
  }
  const words = generateWords(10)

  module.exports = words
