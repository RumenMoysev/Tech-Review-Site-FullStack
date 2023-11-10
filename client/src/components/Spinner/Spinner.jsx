import './Spinner.css'

export default function Spinner() {
    return (
        <div className="spinner">
            <div className="ring"></div>
            <span>loading...</span>
        </div>
    )
}