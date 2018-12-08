const quoteModule = (function() {

  //declare variables
  const DOM = {};
  let uniqueUrlCounter = 1;


  //private functions
  function cacheDom() {
    DOM.$showQuotes = $('#show-quotes');
    DOM.$showProverbs = $('#show-proverbs');
    DOM.$proverb = $('#proverb');
    DOM.$nextProverb = $('#next');
    DOM.$nextQuote = $('#next-quote');
    DOM.$author = $('#author');
  }
  function bindEvents() {
    DOM.$showQuotes.on('click', showNextQuote);
    DOM.$nextQuote.on('click', showNextQuote);
  }
  function callAjax() {
    let uniqueUrl = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1?sig=' + uniqueUrlCounter;
    $.ajax({
      url: uniqueUrl
    })
    .done(function(responce) {
      //console.log(responce);
      DOM.$proverb.html(responce[0].content);
      DOM.$author.html(responce[0].title);
    });
    uniqueUrlCounter++;
    console.log(uniqueUrl);
  }
  function showNextQuote() {
    DOM.$showProverbs.removeClass('active');
    $(this).addClass('active');
    DOM.$proverb.removeClass('largefont');
    DOM.$nextProverb.hide();
    DOM.$nextQuote.show();
    callAjax();
    backgroundModule.loadNextImage();
  }

  //public functions
  function init() {
    cacheDom();
    bindEvents();
    //callAjax();
  }

  return {
    init: init
  };




})(); //quoteModule