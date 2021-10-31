import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {
 

    return (
        <header className='header'>
            <h1>Medical Details</h1>
            <Button 
            color={showAdd ? 'black' : "green"} 
            text={showAdd? 'close': 'Add'}
            onClick={onAdd}
            />
        </header>
    )
}

Header.defaultProps = {

    title : ' This Tracker',
}

Header.propTypes  = {
    title : PropTypes.string.isRequired,
}

export default Header