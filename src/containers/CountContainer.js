import { connect } from 'react-redux'
import { asyncDecrease, asyncIncrease } from '../actions/actions'
import CountComponent from '../components/CountComponent';

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        count:state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
        onPlusClick: () => {
            dispatch(asyncIncrease())
        },
        onMinusClick: () => {
            dispatch(asyncDecrease())
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(CountComponent)