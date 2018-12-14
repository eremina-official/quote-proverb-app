const proverbModule = (function() {

  //cache DOM, declare variables
  const DOM = {};
  
  const proverbArray = [
    'If you can\'t beat \'em, join \'em',
    'Don\'t count your chickens before they hatch',
    'Actions speak louder than words',
    'The leopard does not change his spots',
    'A journey of a thousand miles begins with a single step',
    'Don\'t bite the hand that feeds you',
    'Don\'t put off until tomorrow what you can do today',
    'No man is an island',
    'The early bird gets the worm',
    'The enemy of my enemy is my friend',
    'A poor workman always blames his tools',
    'A person is known by the company he keeps',
    'Don\'t burn your bridges behind you'
  ];

  const lastProverbIndex = proverbArray.length - 1;

  //private functions
  function cacheDom() {
    DOM.$showQuotes = $('#show-quotes');
    DOM.$showProverbs = $('#show-proverbs');
    DOM.$proverb = $('#proverb');
    DOM.$author = $('#author');
    DOM.$nextQuote = $('#next-quote');
    DOM.$nextProverb = $('#next');
  }
  function bindEvents() {
    DOM.$showProverbs.on('click', goToProverb);
    DOM.$nextProverb.on('click', showNextProverb);
  }
  function showProverb() {
    DOM.$proverb.html(proverbArray[0]);
  }
  function showNextProverb() {
    let currentProverb = DOM.$proverb.html();
    let currentIndex = proverbArray.indexOf(currentProverb);
    let indexToShow = (currentIndex === lastProverbIndex) ? 0 : currentIndex + 1;
    DOM.$proverb.html(proverbArray[indexToShow]);
    backgroundModule.loadNextImage();
  }
  function goToProverb() {
    DOM.$proverb.html('');
    DOM.$author.html('');
    DOM.$proverb.addClass('largefont');
    DOM.$showQuotes.removeClass('active');
    $(this).addClass('active');
    DOM.$nextQuote.hide();
    DOM.$nextProverb.show();
    showProverb();
    backgroundModule.loadNextImage();
  }

  //public functions
  function init() {
    cacheDom();
    bindEvents();
    showProverb();
  }

  return {
    init: init
  };

})(); //proverbModule