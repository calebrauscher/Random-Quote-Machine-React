import React from 'react';
import Button from './Button';
import Twitter from './Twitter';

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => {
    return(
    <div>
        <div id='text'>{ selectedQuote.quote }</div> <div id='author'>-{ selectedQuote.author }</div>
        <div className='buttons'>
            <Button buttonDisplayName='Next Quote' clickHandler={assignNewQuoteIndex} />
            <Twitter />
        </div>
    </div>
    )
};

export default QuoteMachine