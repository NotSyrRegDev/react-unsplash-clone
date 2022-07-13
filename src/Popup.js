import React  from 'react'

const Popup = ({author  , download_url}) => {
    // const [hover , setHover] = useState(false);
    return (
        <div className="previw-div d-none">
            <img src={`${download_url}`} alt="" className="welcoming--image" />
            <h1 className="welcoming--author" >{author}</h1>


        </div>
    )
}

export default Popup;
