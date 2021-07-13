var $resultsList = document.querySelector('#results-list');

var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v4/manga?q=henshin");
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v4/manga?q=henshin?sfw");

// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v4/anime?q=boku");

// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v4/anime?q=gundam");
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v4/seasons/2021/spring");

// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v4/manga?q=star");

// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/search/anime?q=Boku&page=1");
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/search/manga?q=jojo&page=1&genre_exclude=12");

xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v4/manga?q=jojo');

// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/search/anime?q=&page=1&genre=1,10&order_by=start_date&sort=desc");
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/search/anime?q=Boku&genre_exclude=0");
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/search/anime?q=Boku&genre=12&genre_exclude=0&page=1");

// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/search/anime?q=boku&page=1&genre=12&genre_exclude=0");

// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/search/anime?q=Boku&page=1&genre=12&genre_exclude=0");
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/season/2021/winter");
xhr.setRequestHeader('token', 'abc123');
xhr.setRequestHeader('genre', 12);
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  // var results = xhr.response.results;
  // var results = xhr.response.anime;
  var results = xhr.response.data;
  // console.log('var Results:', results);

  for (var a = 0; a < results.length; a++) {
    var seriesObj = {};
    seriesObj = results[a];

    var entry = document.createElement('li');

    var title = document.createElement('div');
    title.textContent = seriesObj.title;
    entry.appendChild(title);

    var img = document.createElement('img');
    var imageObj = seriesObj.images;
    console.log('imageObj', imageObj);
    var jpg = imageObj.jpg;
    console.log('jpg', jpg);
    var imageUrl = jpg.image_url;
    console.log('imageUrl', imageUrl);
    // img.setAttribute('src', seriesObj.image_url);
    img.setAttribute('src', imageUrl);
    entry.appendChild(img);

    $resultsList.appendChild(entry);
  }

  // for (var a = 0; a < results.length; a++) {
  //   var seriesObj = {};
  //   seriesObj = results[a];

  //   var entry = document.createElement('li');

  //   var title = document.createElement('div');
  //   title.textContent = seriesObj.title;
  //   entry.appendChild(title);

  //   var img = document.createElement('img');
  //   img.setAttribute('src', seriesObj.image_url);
  //   entry.appendChild(img);

  //   $resultsList.appendChild(entry);
  // }

  // remove nsfw results from season search
  // for (var a = 0; a < results.length; a++){
  //   var seriesObj = {};
  //   seriesObj = results[a];
  //   if (seriesObj.r18 === false){
  //     var seriesObj = {};
  //     seriesObj = results[a];

  //     var entry = document.createElement('li');

  //     var title = document.createElement('div');
  //     title.textContent = seriesObj.title;
  //     entry.appendChild(title);

  //     var img = document.createElement('img');
  //     img.setAttribute('src', seriesObj.image_url);
  //     entry.appendChild(img);

  //     $resultsList.appendChild(entry);
  //   }
  // }

  // remove nsfw results from anime term search
  //   for (var a = 0; a < results.length; a++){
  //   var seriesObj = {};
  //   seriesObj = results[a];
  //   if (seriesObj.rated !== "Rx"){
  //     var seriesObj = {};
  //     seriesObj = results[a];

  //     var entry = document.createElement('li');

  //     var title = document.createElement('div');
  //     title.textContent = seriesObj.title;
  //     entry.appendChild(title);

  //     var img = document.createElement('img');
  //     img.setAttribute('src', seriesObj.image_url);
  //     entry.appendChild(img);

  //     $resultsList.appendChild(entry);
  //   }
  // }

  //   for (var a = 0; a < results.length; a++){
  //     var seriesObj = [];
  //     seriesObj = results[a];
  //     var currentID = seriesObj.mal_id;

  //     xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/manga/' + currentID);
  //     xhr.setRequestHeader('token', 'abc123');
  //     xhr.responseType = 'json';
  //     xhr.addEventListener('load', function () {
  //   }

});
xhr.send();
