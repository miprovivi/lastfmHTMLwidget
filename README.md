# lastfmHTMLwidget
a simple widget anyone can add to their website in as little as 5 minutes to display their last song and associated artist ! 

to use, simply go over https://www.last.fm/api and get yourself an api key (free). You can then input that key and your username at the start of the lasfmHTML.js file :
```js
    const user = "USERNAME";
    const apiKey = "API_KEY";
```
you the need to add that file anywhere in your website along with these elements on your page : 
```html
      <p id="lastplayed">Last Played : ...</p>
      <p id="byart">By ... </p>
      <script  src="PATH_TO/lastfmHTML.js"></script>
```



