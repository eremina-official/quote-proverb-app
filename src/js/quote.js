const quoteModule = (function() {

  //declare variables
  const DOM = {};

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
    DOM.$showQuotes.on('click', showQuotes);
    DOM.$nextQuote.on('click', showNextQuote);
  }
  function callAjax() {
      $.ajax({
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      cache: false /* when set to false it forces the requested page not to be cached by the browser */
    })
    .done(function(responce) {
      //console.log(responce);
      DOM.$proverb.html(responce[0].content);
      DOM.$author.html(responce[0].title);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      //console.log(jqXHR);
      //console.log(textStatus);
      //console.log(errorThrown);
      DOM.$proverb.html('Connection error');
    });
  }
  function showQuotes() {
    DOM.$proverb.html('');
    showNextQuote();
    DOM.$proverb.removeClass('largefont');
    DOM.$showProverbs.removeClass('active');
    $(this).addClass('active');
    DOM.$nextProverb.hide();
    DOM.$nextQuote.show();
  }
  function showNextQuote() {
    callAjax();
    backgroundModule.loadNextImage();
  }

  //public functions
  function init() {
    cacheDom();
    bindEvents();
  }

  return {
    init: init
  };

})(); //quoteModule