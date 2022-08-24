import { useEffect, useRef } from "react";
import "./detail.css"

function Detail({target}) {
    const detail =useRef();
    /*
    useEffect(()=> {
        detail.current.scrollIntoView({behavior:"smooth"});
    },[target])
    */
    return (<div className="detail" ref={detail}>
    <h2 className="title">
        {target.kindCd} (<small>{target.colorCd}</small>)
    </h2>
    <div className="metadata">
        <img src={target.popfile} alt="popfile" className="popfile" />
        <ul>
            <li><b>접수일</b> : {target.happenDt }</li>
            <li><b>발견장소</b> : {target.orgNm} {target.happenPlace}</li>
            <li><b>나이</b> : {target.age}</li>
            <li><b>체중</b> : {target.weight}</li>
            <li><b>성별</b> : {target.sexCd}</li>
            <li><b>특징</b> : {target.specialMark}</li>
            <li><b>공고번호</b> : {target.noticeNo}</li>
            <li><b>공고기간</b> :  {target.noticeSdt} ~ {target.noticeEdt} </li>
            <li><b>상태</b> : {target.processState}</li>
            <li><b>보호소</b> : {target.careNm} ({target.careTel}) / {target.careAddr}</li>
            <li><b>관활기간</b> : {target.orgNm} {target.chargeNm} ({target.officetel})</li>
        </ul>
    </div>
    </div>);
}

export default Detail;