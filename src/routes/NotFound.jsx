import React from 'react'

const styles = {
    container: {
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },
    status: {
        position: 'relative',
        fontSize: '1.5em',
        fontWeight: 'bold',
        borderRight: '1px solid #999',
        paddingRight: '0.5em',
        marginRight: '0.5em',
    },
    message: {
        position: 'relative',
    }
}

export default () => {

    return (
        <>
            <div style={styles.container}>
                <div style={styles.content}>
                    <div style={styles.status}>404</div>
                    <div style={styles.message}>This page could not be found.</div>
                </div>
            </div>
        </>
    )
}