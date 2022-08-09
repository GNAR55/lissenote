
import './teamComponent.css';
import linked from '../assets/linkedin.png';
import git from '../assets/github.png';
import mail from '../assets/mail.png';

function teamComponent(props) {
    return (
        <div className='con'>
            <img className='pfp' src={props.pfp} alt="Team-members"/>
            <p className='name'>{props.name}</p>
            <div className='links'>
                <a className='linked' href={props.linked}>
                    <img className='linkedin' src={linked} alt="linkedin"/>
                </a>
                <a href='#'>
                    <img className='mail' src={mail} alt="linkedin"/>
                </a>
                <a href='#'>
                    <img className='git' src={git} alt="linkedin"/>
                </a>
            </div>
        </div>
    );
}


export default teamComponent;