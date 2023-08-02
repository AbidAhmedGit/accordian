import './card.css';
const Card = ({ monster }) => {
    const { title, Tags, metr, id, author, lookerUrl } = monster;
    const lookerUrlWithParam = `${lookerUrl}?allow_login_screen=true`
    return (
        <div className="card-container" key={id}>
            <div className="card-container-tl-tm">
                <a href={`dashboard/${id}`} className="dashboard-link">
                    <h2 className='tl'>{title}</h2>
                    <p className='tl'><i>{`by ${author}`}</i></p>
                    <div className='tm'>
                        <p className='tmp'>{`Tags: ${Tags}`}</p>
                        <p className='tmp'>{`Metrics: ${metr}`}</p>
                    </div>
                </a>
            </div>

            <a href={`dashboard/${id}`}>
                <img src="/pic.svg"></img>
            </a>

            <br />
        </div>
    );
};

export default Card;


