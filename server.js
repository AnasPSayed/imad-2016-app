var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-One': {
        title: 'Article One - Anas P Sayed',
        heading: 'Article One',
        date: '6-10-2016',
        content: `  
            <p>
                    This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.
                </p>
                
                <p>
                    This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.
                </p>
                
                <p>
                    This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.This is the content of the article one.
                </p>`
    },
     'article-Two': {
        title: 'Article Two - Anas P Sayed',
        heading: 'Article Two',
        date: '6-10-2016',
        content: `
                
                <p>
                    This is the content of the article Two.
                </p>`
    },
     'article-Three': {
        title: 'Article Three - Anas P Sayed',
        heading: 'Article Three',
        date: '6-10-2016',
        content: ` 
                
                <p>
                    This is the content of the article three.
                </p>`
    }
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            ${title}
            <link href="ui/style.css" rel="stylesheet"/>
        </head>
        
        <body>
            <div class="container">
                <div>
                    <a href="/">HOME</a>
                </div>
                <h3>
                    ${heading}
                    </h3>
                <div>
                    ${date}
                </div>
                ${content}
            </div>
        </body>
    </html>`
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
})


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
