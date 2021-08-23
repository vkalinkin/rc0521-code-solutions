// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.waifu.pics/sfw/happy');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.status);
//   console.log(xhr.response);
// });
// xhr.send();

// GET / api / v3.asmx / getSets ? apiKey = string & userHash=string & params=string HTTP / 1.1

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://brickset.com/api/v3.asmx/getSets?apiKey=3-iYOD-KmJG-valyx&userHash=RAuIns3Xan&params={'theme':'space','year':'1978, 1979'} HTTP/1.1");
// // xhr.open('GET', "https://brickset.com/api/v3.asmx/getSets?apiKey=3-iYOD-KmJG-valyx&userHash=RAuIns3Xan&params={'theme':'space','year':'1978, 1979'}");
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.status);
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://brickset.com/api/v3.asmx/getSets?params={'theme':'space','year':'1978, 1979'} HTTP/1.1");
// xhr.setRequestHeader('Authorization', 'key 3-iYOD-KmJG-valyx&userHash=RAuIns3Xan&params')
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://brickset.com/api/v3.asmx/getSets?apiKey=3-iYOD-KmJG-valyx&userHash=RAuIns3Xan&params={'theme':'space','year':'1978, 1979'} HTTP/1.1");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// WORKS!
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/anime/80/episodes");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/anime/80");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/anime/1");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// WORKS!
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/manga/1");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// WORKS!
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/search/anime?q=Gundam&page=1");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/search/anime?q=Boku&page=1&genre=12&genre_exclude=0");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/search/anime?q=street-fighter");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/search/anime?q=berserk");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/search/manga?q=berserk");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// WORKS!
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/search/manga?q=Gundam&page=1");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/search/anime?start_date=2021-04-00&order_by=title");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// works...
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/search/anime?status=airing&order_by=title");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// WORKS!
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/season/2021/spring");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://api.jikan.moe/v3/season/2021/spring&order_by=title");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://rebrickable.com/api/v3/lego/colors/?key=c28b7dc8af7ffa9abe1d112bba0ea07e");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// WORKS!
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://rebrickable.com/api/v3/lego/colors/?key=c28b7dc8af7ffa9abe1d112bba0ea07e");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// WORKS!
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://rebrickable.com/api/v3/lego/colors/?key=c28b7dc8af7ffa9abe1d112bba0ea07e&page=2&ordering=-name%2Cid");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// WORKS!
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://rebrickable.com/api/v3/lego/part_categories/?key=c28b7dc8af7ffa9abe1d112bba0ea07e");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://rebrickable.com/api/v3/lego/parts/?part_nums=3001,3002,3003&inc_part_details=1/?key=c28b7dc8af7ffa9abe1d112bba0ea07e");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://rebrickable.com/api/v3/lego/sets/?key=c28b7dc8af7ffa9abe1d112bba0ea07e");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// WORKS
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=https://rebrickable.com/api/v3/lego/sets/?min_year=2019&min_parts=400&max_parts=1000');
// xhr.setRequestHeader('token', 'abc123');
// xhr.setRequestHeader('Authorization', 'key c28b7dc8af7ffa9abe1d112bba0ea07e');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://rebrickable.com/api/v3/lego/sets/?&min_year=2019&min_parts=400&max_parts=1000");
// xhr.setRequestHeader('Authorization', 'key c28b7dc8af7ffa9abe1d112bba0ea07e')
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://rebrickable.com/api/v3/lego/sets?min_year=2019&min_parts=400/?key=c28b7dc8af7ffa9abe1d112bba0ea07e");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// https://www.cheapshark.com/redirect?dealID={id}
// WORKS!
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://lfz-cors.herokuapp.com/?url=https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// WORKS!
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/deals?id=X8sebHhbc1Ga0dTkgg59WgyM506af9oNZZJLU9uSrX8%3D");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// WORKS!
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/games?title=batman&limit=60");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// WORKS!
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/games?title=devil-may-cry&upperPrice=30&limit=60");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/games?title=devil-may-cry&upperPrice=30&limit=60");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/deals?title=devil-may-cry&Price=30&upperPrice=40");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.cheapshark.com/api/1.0/deals?title=lego&lowerPrice=5upperPrice=20');
xhr.setRequestHeader('token', 'abc123');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.response);
});
xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/deals?title=street-fighter");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// 7JWDpApz3Yee5JDgO2UrtekSUc5XIOvkX6pwVcI % 2B9xQ % 3D
// https://www.cheapshark.com/api/1.0/deals?id=X8sebHhbc1Ga0dTkgg59WgyM506af9oNZZJLU9uSrX8%3D

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/deals?id=7JWDpApz3Yee5JDgO2UrtekSUc5XIOvkX6pwVcI%2B9xQ%3D");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/stores");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);

// });
// xhr.send();

// var storeArray = [];
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/stores");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
//   var responseArray = xhr.respone;
//   console.log(responseArray);
// });
// xhr.send();
// for (var a =0; a < xhr.response.length; a++){
//   console.log(xhr.response[a]);
// }

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/alerts?action=set&email=vakalinkin@hotmail.comg&gameID=147207&price=29.99");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/alerts?action=delete&email=vakalinkin@hotmail.comg&gameID=104221&price=29.99");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/alerts?action=manage&email=vakalinkin@hotmail.com");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/games?title=street-fighter&limit=60");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/games?title=metal-gear&limit=60");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/games?title=resident-evil&limit=60");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/deals?title=lego&lowerPrice=7");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://www.cheapshark.com/api/1.0/games?id=612");
// xhr.setRequestHeader('token', 'abc123');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
// });
// xhr.send();
