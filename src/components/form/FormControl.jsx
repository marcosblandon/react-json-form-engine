import React from 'react';
import PropTypes from 'prop-types';
import Maybe from 'maybe-baby';
import _isEmpty from 'lodash/isEmpty';

import FormControlTitle from './helpers/FormControlTitle';
import FormControlHint from './helpers/FormControlHint';
import ValidationFieldError from './validation/ValidationFieldError';

class FormControl extends React.Component {
    /**
     * Determine if the component should call render() to update itself.
     *
     * Right now, we'll always re-render the component if it contains
     * children. Those components themselves will call this method to
     * determine if they should re-render themselves. If this becomes
     * a performance issue, we could potentially before a deep comparison
     * between the prop trees, but that seems excessive right now.
     *
     * @param nextProps
     * @returns {boolean} true if the component should call render()
     */
    shouldComponentUpdate(nextProps) {
        if (!this._hasFieldChildren(nextProps.field)) {
            return nextProps.value !== this.props.value || nextProps.hasError !== this.props.hasError;
        }
        return true;
    }

    render() {
        const { id, value, field, instance, onUpdate } = this.props;
        const { component, uiDecorators } = field;

        if (!component || !component.element) {
            console.error(`Field of type "${field.type}" is missing required "component" (id: ${id})`);
            return <ValidationFieldError id={field.id} />;
        }

        console.log('Render FormControl', id);

        const Control = component.element;

        const hasError = instance.fieldHasError(id);

        return (
            <span>
                <FormControlTitle field={field} decorators={uiDecorators} />
                <div className="control">
                    <Control
                        id={id}
                        value={value}
                        field={field}
                        hasError={hasError}
                        uiDecorators={uiDecorators}
                        onUpdate={onUpdate}
                        instance={instance}
                    />
                </div>
                {this._maybeRenderHint(uiDecorators)}
                {hasError ? this._maybeRenderError(id, instance) : null}
            </span>
        );
    }

    _maybeRenderHint(uiDecorators) {
        if (
            Maybe.of(uiDecorators)
                .prop('hint')
                .isJust()
        ) {
            return <FormControlHint text={uiDecorators.hint} />;
        }
    }

    _maybeRenderError(id, instance) {
        const { messages } = instance.getValidationResultByTag(id);
        return Object.keys(messages).map(key => (
            <FormControlHint
                key={key}
                icon="exclamation-triangle"
                className="is-danger"
                text={messages[key].message}
            />
        ));
    }

    /**
     * Check for child fields, or option fields with children
     * @param field
     * @returns {boolean}
     */
    _hasFieldChildren(field) {
        if (!_isEmpty(field.fields)) {
            return true;
        }
        if (!_isEmpty(field.options)) {
            return field.options.some(option => !_isEmpty(option.fields));
        }
        return false;
    }
}

FormControl.propTypes = {
    id: PropTypes.string.isRequired,
    field: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    hasError: PropTypes.bool.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.array,
        PropTypes.object
    ]),
    instance: PropTypes.object.isRequired
};

export default FormControl;
