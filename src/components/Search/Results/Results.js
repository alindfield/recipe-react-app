import React from 'react';
import classes from './Results.css';
import Spinner from '../../UI/Spinner/Spinner';
import Recipes from '../../Recipes/Recipes';

const results = (props) => {

    let output = null;

    if (props.searching) {
        output = <Spinner />
    }

    if (props.recipes && props.recipes !== null) {
        output = <Recipes recipes={props.recipes} clicked={props.clicked}/>
    };

    return (
        <div className={classes.Results}>
            {output}
        </div>
    );
}

export default results;