import './usecase.css';
import "../examples/examples.css";

function usecase(props) {
    return (
        <div className='com'>
            <div className='usecase-box'>
                <p className='top-text'>{props.title}</p>
                <div className='list'>
                    {props.content}
                </div>
            </div>
            <div className='color'></div>
        </div>
    );
}


export default usecase;