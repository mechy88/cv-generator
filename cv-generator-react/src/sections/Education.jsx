import './Education.css'

function Education() {
    return (

        <div id='education'>
            <h3 id='heading-education'>Education</h3>
            {/* one degree */}
            <div>
                {/* two columns */}
                {/* primary - position, duration, company; secondary - bulleted info */}
                <div className='primary'>
                    <div className='column-one'>
                        <p><strong>Organization</strong></p>
                        <p><strong>Position</strong></p>
                    </div>
                    <div className='column-two'>
                        <p>City, State</p>
                        <p>Month Year </p>
                        <p>Month Year – Month Year</p>
                    </div>
                </div>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </div>
        </div>
    )
}

export default Education;
