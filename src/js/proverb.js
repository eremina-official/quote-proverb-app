const proverbQuoteModule = (function() {

  //cache DOM, initialise variables
  const DOM = {};
  
  const proverbArray = [
    'text1',
    'text2',
    'text3'
  ];

  //private functions
  function cacheDom() {
    DOM.$proverb = $('#proverb');
    DOM.$next = $('#next');
  }
  function bindEvents() {
    DOM.$next.on('click', showNextProverb);
  }

  function showProverb() {
    DOM.$proverb.html(proverbArray[0]);
  }
  function showNextProverb() {
    const proverbArrayLength = proverbArray.length;
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

})(); //proverbQuoteModule