
import {Storage} from 'aws-amplify';
import { useEffect, useState } from 'react';


function AWSImage(props) {
    const {src} = props;
    const [imgUrl, setImgUrl] = useState("")
    useEffect(() => {
        Storage.get(src).then(url => setImgUrl(url))
    }, [src])
    return (
    <img 
    className={props.className || ""}
    src={imgUrl} 
    onError={(e)=>{e.target.onerror = null; e.target.src="placeholder.png"}} />)
    
}

export default AWSImage;