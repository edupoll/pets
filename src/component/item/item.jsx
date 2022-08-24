import "./item.css"

function Item( {data, onSelected} ) {


    return (<div className="item" onClick={()=> onSelected(data) }>
        <img src={data.filename} alt="thumbnail" className="thumbnail"/>
        <div className="inform">
            <div className="inform-title">
                {data.kindCd} ({data.colorCd})
            </div>
            <div className="inform-content">
                <p>
                {data.orgNm} {data.happenPlace} 에서 발견
                </p>
                <p>
                {data.happenDt}
                </p>
            </div>
        </div>
    </div>);
}

export default Item;