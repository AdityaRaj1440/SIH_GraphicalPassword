import CatImage from './ImageList'

const PasswordGenerator = () => {    
    return (
        <>
        <div>
        <h3>Password Generator</h3>
        <h4>Choose 5 images.</h4>
        <CatImage cat= "Movies" />
        <br/><br/>
        <CatImage cat= "Series"/>
        </div>
        </>
    )
}

export default PasswordGenerator