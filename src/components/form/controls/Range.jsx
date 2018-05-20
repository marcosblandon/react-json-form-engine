import PropTypes from 'prop-types';
import React from 'react';
import { Flex } from '../../common';
import { __hasValue } from '../../../common/common';

const Range = ({ id, field, value, onUpdate }) => (
    <Flex column>
        <Flex hAlignCenter>{__hasValue(value) ? value : 'N/A'}</Flex>
        <Flex>
            <div style={style.minMax}>{field.min}</div>
            <Flex flex={1}>
                <input
                    className="full-width"
                    name={id}
                    id={id}
                    type="range"
                    value={__hasValue(value) ? value : ''}
                    max={field.max}
                    min={field.min}
                    onChange={onUpdate}
                />
            </Flex>
            <div style={style.minMax}>{field.max}</div>
        </Flex>
    </Flex>
);

const style = {
    minMax: {
        margin: '0 10px',
        fontSize: 12,
        color: '#757575',
        fontWeight: 500
    }
};

Range.propTypes = {
    id: PropTypes.string.isRequired,
    field: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    value: PropTypes.number
};

export default Range;
