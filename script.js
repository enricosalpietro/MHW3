const apikey_news = 'iXFfAefJycKnRJe7yceKVYctaWRuwVOt1SPgYe_NyN0XHQUY';

const endpoint_news = 'https://api.currentsapi.services/v1/search?' 
const req = endpoint_news + 'category=sports&' +'keywords=formula%201&' + 'language=it&' +'apiKey=' + apikey_news;

fetch(req).then(onResponse).then(onJsonNews)

function onResponse(resp){
    console.log(resp);
    return resp.json();
}

function onJsonNews(json) {

    console.log(json);


    const result = json.news;
    let num_result = result.length;
    if(num_result > 2) num_result = 2;

    for(let i = 0; i < num_result; i++){
        const data_article = result[i];
        const art_title = data_article.title;
        const art_img = data_article.image;       
        const art_des = data_article.description;
        

        const article = document.createElement("div");
        article.classList.add("article");

        const img = document.createElement("img");
        img.src = art_img;
        const title = document.createElement("h3");
        title.textContent = art_title;
        const content = document.createElement("p");
        content.textContent = art_des;
        article.appendChild(img);
        article.appendChild(title);
        article.appendChild(content);
        

        document.querySelector("#news .articles").appendChild(article);
    }
}

rest_url = 'http://ergast.com/api/f1/current/driverStandings.json'

fetch(rest_url).then(onResponse).then(onJsonStand)

function onJsonStand(json){
    console.log(json.MRData.StandingsTable.StandingsLists[0]);

    const result = json.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    let num_piloti = result.length;

    if(num_piloti > 10) num_piloti = 10;

    for(let i=0; i< num_piloti; i++){
        const data = result[i];
        const data_posiz = data.positionText;
        const data_punti = data.points;
        const data_cognome_pilota = data.Driver.familyName;
        const data_nome_pilota = data.Driver.givenName;

        const risultati = document.createElement("div");
        risultati.classList.add("risultati");

        const new_p = document.createElement("p");
        new_p.textContent = data_posiz + " " + data_nome_pilota + " " + data_cognome_pilota + " Punti: " + data_punti;

        risultati.appendChild(new_p);

        document.querySelector("#standing .classifica").appendChild(risultati);

    }

}