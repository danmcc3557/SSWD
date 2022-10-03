const apiKey = '6b39991623c249e284bd45d57dd120db';

const headers = new Headers();
const reqInit = { method: 'GET', headers, mode: 'cors', cache: 'default'};

const defaultSource = 'the-irish-times';

async function getNewsData(source = defaultSource) {

    const url = `https://newsapi.org/v2/top-headlines/sources=${source}&apiKey=${apiKey}`;

    try {

        const response = await fetch(url, reqInit);

        const json = await response.json();

        console.log(json);
        
        displayData(json.articles);

    } catch (err) {
        console.log(err);
    }
}

getNewsData('the-irish-times');

console.log("Has getnewsData() finished yet?");

function displayData(articles) {

    console.log(articles);

    document.getElementById('source').innerHTML = articles[0].source.name;

    let output = articles.map(article => {

        return `<article>
                <h4>${article.title}</h4>
                <p>${article.author}</p>
                <p>${article.publishedAt}</p>
                <img src=${article.urlToImage} alt='article image>
                <p>${article.description}</p>
                <p><a href='http://#'>Read More</a></p>
                </article>`;
    });

    let articlesElement = document.getElementById('articles');
    articlesElement.innerHTML = output;

}