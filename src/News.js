export default function News(props)
{
    console.log(props);
    return(
        <div className="news">
            <div className="news-img">
                {
                    props.article.urlToImage!==null?
                    <img src={props.article.urlToImage}/>:
                    <img src="https://th.bing.com/th/id/OIP.bParXw-Br9nzpYj5xLG6nAAAAA?pid=ImgDet&w=185&h=185&c=7"/>
                }
                
            </div>

            <h1>{props.article.title?.substring(0,50)}</h1>
            <p>{props.article.description?.substring(0,100).concat("....")}<a href={props.article.url} target="_blank">Read More</a></p>
            
            <div className="source">
                <p>author:{props.article.author}</p>
                <p>{props.article.source.name}</p>
            </div>
        </div> 
    )
}