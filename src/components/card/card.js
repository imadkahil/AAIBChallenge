import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import './card.scss'
import Button from '@mui/material/Button';

const Card = ({ element, handleBlockPress, handleResolvePress, isBlock, color }) => {

    return (
        <div className='container' style={{ backgroundColor: color }}>
            <div className="cards">
                <ListItem>
                    <ListItemText primary="id" secondary={element.id} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="state" secondary={element.state} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="type" secondary={element?.payload?.reportType} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Message" secondary={element?.payload?.message} />
                </ListItem>
                {
                    (!isBlock) && <ListItem>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained" onClick={() => { handleResolvePress(element) }}>Resolve</Button>
                            <Button variant="outlined" onClick={() => { handleBlockPress(element) }}>Block</Button>
                        </Stack>
                    </ListItem>
                }

            </div>
        </div>
    );
};

Card.propTypes = {
    element: PropTypes.object.isRequired,
    handleBlockPress: PropTypes.func.isRequired,
    handleResolvePress: PropTypes.func.isRequired,
    isBlock:PropTypes.bool.isRequired,
    color:PropTypes.string
};

Card.defaultPropTypes = {
    color: 'white'
}

export default Card;