import './Activities.css'

function Activities() {
    return (

        <div>
            <h3>Leadership & Activities</h3>
            {/* one degree */}
            <div>
                {/* two columns */}
                {/* primary - position, duration, company; secondary - bulleted info */}
                <div className='primary'>
                    <div className='column-one'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid tempora fuga aut ducimus earum dicta, minima dolorum illo totam?</div>
                    <div className='column-two'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, error.</div>
                </div>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </div>
        </div>
    )
}

export default Activities;
