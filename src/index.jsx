import App from './App.jsx'


if (module.hot) {
    module.hot.accept(error => {
        if (error) {
            console.log('something went wrong!')
        }
    } )
}