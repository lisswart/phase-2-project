import "./PoemTitles.css";

function PoemTitles({ titles, handleClick }) {
    
    return (
        <div>
            <h1 className="poetry-coll-heading">Poetry Collection</h1>
            <ol className="poem-titles">
                {Array.from(titles).map((title, index) => (
                    <li className="poem-container" key={index}>
                        {/* <a href="javascript:void(0)" onClick={handleClick(title.title)} className="click-title"> */}
                            <h2 className="title">
                                <i>{title.title}</i>
                            </h2>
                        {/* </a> */}
                        <h3 className="author">{title.author}</h3>
                        <p>linecount: {title.linecount}</p>                        
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default PoemTitles;

