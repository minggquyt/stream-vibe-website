import './ViewMoreButton.css'

export default function ViewMoreButton({title}) {
    return (
        <div className="viewmorebutton">
            <span className='inter-400' >{title}</span>
            <img src="/header/headerarrow.webp" width="16px" height="16px" alt="" />
        </div>
    )
}   