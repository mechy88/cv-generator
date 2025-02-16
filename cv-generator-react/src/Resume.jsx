import './Resume.css'
import Personal from './sections/Personal'

function Resume() {
    return (
        <div id="Resume">
            <Personal />

            {/* Education */}
            <div>
                {/* one degree */}
                <div>
                    {/* two columns */}
                    {/* primary - position, duration, company; secondary - bulleted info */}
                    <div className='primary'>
                        <div className='column-one'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid tempora fuga aut ducimus earum dicta, minima dolorum illo totam?</div>
                        <div className='column-two'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, error.</div>
                    </div>
                </div>
            </div>

            {/* 
            <Personal /> - stores all personal information like name, contact, etc.
            <Experience /> stores all work experiences
            <Leadership & Activities /> stores other experiences
            <Skills /> stores all skills
            */}
        </div>
    )
}

export default Resume
