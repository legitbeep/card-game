import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setParam } from '../redux/appSlice'

import reactLogo from '../assets/react.svg'
import reduxLogo from '../assets/redux.svg'
import Resource from '../assets/captions.json'

import classes from './Home.module.css'

import HomeIcon from '../icons/House'
import ThemeContext from '../context/ThemeContext'
import useCaption from '../hooks/useCaption'
import CustomMode from '../components/CustomMode'

function Home() {

    const theme = React.useContext(ThemeContext)

    const someValue = useSelector((state) => state.app.someValue)
    const dispatch = useDispatch()

    const caption = useCaption(Resource)
  
    const handleChange = () => {
        const value = 100 + Math.floor(900 * Math.random())
        dispatch(setParam({someValue: value}))
    }

    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.logoContainer}>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={`${import.meta.env.BASE_URL}vite.svg`} className={classes.logo} alt="Vite logo" />
                    </a>
                    <a href="https://reactjs.org" target="_blank">
                        <img src={reactLogo} className={[classes.logo, classes.react].join(' ')} alt="React logo" />
                    </a>
                    <a href="https://react-redux.js.org" target="_blank">
                        <img src={reduxLogo} className={classes.logo} alt="Redux logo" />
                    </a>
                </div>
                <h1 className={classes.title}>Vite+React+Redux Starter Kit </h1>
                <div className={classes.iconContainer}>
                    <HomeIcon color={theme === 'dark' ? '#fff' : '#242424'} />
                </div>
                <div className={classes.card}>
                    <p><button onClick={handleChange}>SomeValue: {someValue}</button></p>
                    <p>{caption('greeting')}</p>
                    <p>{[import.meta.env.MODE, import.meta.env.VITE_APP_MODE].join(', ')}</p>
                    <p>{import.meta.env.BASE_URL}</p>
                    <p>{import.meta.env.VITE_APP_NAME}</p>
                    <p>Version {import.meta.env.VITE_APP_VERSION}</p>
                    <CustomMode />
                </div>
                <p className={classes.readTheDocs}>
                    Click on the Vite and React logos to learn more
                </p>
            </div>
        </div>
    )
}

export default Home
