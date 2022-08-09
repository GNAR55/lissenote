import './exampleSide.css';

function Text(props) {
    return (
      <div ><p className='text'>{props.text} <span className='text2'>{props.text2}</span><span className='text3'>{props.text3}</span></p>
      </div>
    );
}


export default Text;
