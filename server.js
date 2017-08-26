var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 "article-one":   {
    title: "Article One",
    heading: "Article One",
    Content: "Content for the page goes here.This is my first article."
                },
 "article-two":   {
     title: "Article Two",
    heading: "Article Two",
    Content: "Content for the page goes here.This is my Second article."
 },
 "article-three": {
     title: "Article Three",
    heading: "Article Three",
    Content: "Content for the page goes here.This is my Third article."
 }
};

function createTemplate (data){
var title=data.title;
var heading= data.heading;
var content= data.content;
var htmltemplate =
    `<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
        <body>
            <div class=container>
            <div>
            <a href="/">Home</a>
            </div>
                <div>
                <h3>
                ${heading}
                </h3>
                    <p>
                       ${content}
                    </p>
                </div>
            </div>    
        </body>
    </html>
`;
        return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName', function (req, res) {
 //res.sendFile(path.join(__dirname, 'ui', 'header-home.html'));
 // article name will be article-one
 res.send(createTemplate(articles[articleName]));
 // content will be articles[articleName] == content for article one
});



app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
