import React from 'react'
import ThemeContext from '../context/ThemeContext'

export default () => {
    return (
        <ThemeContext.Consumer>
        {(theme) => {
            return (
                <p>{theme === 'dark' ? 'Dark' : 'Light'} Mode</p>
            )
        }
        }
        </ThemeContext.Consumer>
    )
}
