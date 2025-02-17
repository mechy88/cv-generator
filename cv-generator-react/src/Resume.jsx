import './Resume.css'
import Personal from './sections/Personal'
import Education from './sections/Education'
import Activities from './sections/Activities'
import Skills from './sections/Skills'

function Resume() {
    return (
        <div id="Resume">
            <Personal />
            <Education />
            <Activities />
            <Skills />
            {/* 
            <Personal /> - stores all personal information like name, contact, etc.
            <Experience /> stores all work experiences
            <Activities /> stores other experiences
            <Skills /> stores all skills
            */}
        </div>
    )
}

export default Resume
