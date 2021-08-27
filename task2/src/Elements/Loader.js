const Loader = ({ load }) => {
    return (
        (load) ?
            <div className="loader_container"> <div className="loader"></div></div> : ""
    )
}
export default Loader;