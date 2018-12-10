const backgroundModule = (function() {
  
  //$('#background').css('background-image', 'url("https://source.unsplash.com/daily")');
  //$('#image').attr('src', 'src/js/ara-3695678_640.jpg');
  
  'use strict';
  
  //cache DOM, declare variables
  const DOM = {};
  let uniqueUrl = 1;

  //private functions
  function cacheDOM() {
    DOM.$image = $('#image');
  }

  /*    DOM.$image and DOM.$next are set to undefined, 
  because at this step these variables are in memory, 
  but the cacheDOM function did not run yet. 
  Why DOM has its properties set and available from here?

  const testdom = {};
  testdom.key = 'value';
  function changetestdom() { testdom.key = 'value1'; }
  console.log(testdom);

  console.log(DOM.$next);
  console.log(DOM);
  let testjQobj = $('#proverb');
  console.log(testjQobj);
  let testjsobj = document.querySelector('#proverb');
  console.log(testjsobj);
  console.log(this); */

  function loadImage() {
    let source = 'https://source.unsplash.com/1920x1080?nature?sig=' + uniqueUrl; 
    /* URL should be unique with each request, otherwise browser does not fetch 
    a new image but uses the cached one instead. 
    To make the URL unique add ?sig=any-number at the end. 
    ?sig= is ignored by a server */
    DOM.$image.attr('src', source);
    uniqueUrl++;
    DOM.$image.on('load', function() {
      //console.log($(this));
      $(this).fadeIn('600', 'linear');
    });
  }
  function loadNextImage() {
    DOM.$image.attr('src', '');
    DOM.$image.css('display', 'none');
    loadImage();
  }
    
    //public functions
  function init() {
    cacheDOM();
    loadImage();
    bindEvents();
    //changetestdom();
  }

  return {
    init: init,
    loadNextImage: loadNextImage
  };
    
})(); //backgroundModule
  
