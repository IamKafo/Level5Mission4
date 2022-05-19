import React from 'react'
import "./Results.css"

const Results = ({ results }) => {
    
    

    if (results && results.webPages) {
        return (
            <div className='results-container'>
                {results.webPages.value.map((result) => (
                    <div className='results-card'>
                        <a href={result.url} 
                        className='results-link'>
                            <h4 className='result-title'>{result.name}</h4>
                            <h4 className='result-url'>{result.url}</h4>
                            <h4 className='result-snippet'>{result.snippet}</h4>
                        </a>
                    </div>
                    
                ))}
            </div>
        )
    }
}



export default Results