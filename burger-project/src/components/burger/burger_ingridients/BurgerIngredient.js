import React, { Component } from 'react'
import './BurgerIngredients.css'
import PropTypes from 'prop-types'
import BurgerBuilder from '../../../containers/burgerbuilder/BurgerBuilder'
class BurgerIngredient extends Component {
    render() {

        let ingredient = null
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className='BreadBottom' ></div>
                break;
            case ('bread-top'):
                ingredient = <div className='BreadTop' >
                    <div className='Seeds1'></div>
                    <div className='Seeds2'></div>
                </div>
                break;
            case ('meat'):
                ingredient = <div className='Meat' ></div>
                break;
            case ('cheese'):
                ingredient = <div className='Cheese' ></div>
                break;
            case ('beacon'):
                ingredient = <div className='Beacon' ></div>
                break;
            case ('salad'):
                ingredient = <div className='Salad' ></div>
                break;
            default:
                ingredient = null
                break;
        }
        return ingredient

    }

}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient