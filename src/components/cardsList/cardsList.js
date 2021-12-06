import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';



const Cards = ({ data, resolve, block, type }) => {

    return (
        <div>
            {
                data?.map(item => {
                    return (
                        <>
                            <Card key={item.id} handleBlockPress={block} isBlock={!(type === 'report')} handleResolvePress={resolve} element={item} />
                        </>)
                })}
        </div>
    )
};

Cards.propTypes = {
    data: PropTypes.array.isRequired,
    resolve: PropTypes.func.isRequired,
    block: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
};

Cards.defaultPropTypes = {
    color: 'white'
}


export default Cards;