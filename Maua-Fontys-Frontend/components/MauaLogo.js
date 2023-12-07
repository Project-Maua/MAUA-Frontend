import {Image} from 'react-native'

const MauaLogo = () => (
    <Image 
        source={require('../assets/logo-maua.png')} 
        style={{
            width: 90, 
            height: 40,
        }}
    />
)

export default MauaLogo