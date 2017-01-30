export const DATA_TYPE = {
    ARRAY  : 'array',
    STRING : 'string',
    BOOLEAN: 'boolean',
    NUMBER : 'number',
    DATE   : 'date'
};

export const COMPONENT_TYPE = {
    TEXT         : 'text',
    TEXTAREA     : 'textarea',
    CHECKBOX     : 'checkbox',
    CHECKBOXGROUP: 'checkboxgroup',
    RADIO        : 'radio',
    NUMBER       : 'number',
    RANGE        : 'range',
    SELECT       : 'select',
    DATE         : 'date',
    SUM          : 'sum',
    LABEL        : 'label'
};

export const FORM_STATE = {
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR  : 'error',
    OK     : 'OK'
};

export const COMPONENT_DECORATORS = {
    [COMPONENT_TYPE.CHECKBOX]: {
        hideControlLabel: true
    }
};

const COMMON_PROPERTY = {
    ID        : 'id',
    TITLE     : 'title',
    SUBTITLE  : 'subtitle',
    TYPE      : 'type',
    SORT_ORDER: 'sortOrder'
};

export const NO_VALUE = undefined;

export const PROPERTY = {
    CALCULATIONS: {
        EXPRESSION_MAP: 'expressionMap',
        TRIGGER_MAP   : 'triggerMap'
    },
    FIELD: {
        ...COMMON_PROPERTY,
        PARENT        : 'parent',
        ACTIONS       : 'actions',
        UI_DECORATORS : 'uiDecorators',
        COMPONENT     : 'component',
        FIELDS        : 'fields',
        OPTIONS       : 'options',
        MIN           : 'min',
        MAX           : 'max',
        REQUIRED      : 'required',
        PLACEHOLDER   : 'placeholder',
        SHOW_CONDITION: 'showCondition',
        PATTERN       : 'pattern'
    },
    SUBSECTION: {
        ...COMMON_PROPERTY,
        FIELDS: 'fields'
    },
    SECTION: {
        ...COMMON_PROPERTY,
        SUBSECTIONS: 'subsections'
    },
    DEFINITION: {
        ...COMMON_PROPERTY,
        SECTIONS              : 'sections',
        DECORATORS            : 'decorators',
        CALCULATIONS          : 'calculations',
        DEFAULT_VALUE_TRIGGERS: 'defaultValueTriggers'
    }
};

export default {
    DATA_TYPE,
    COMPONENT_TYPE,
    COMPONENT_DECORATORS,
    FORM_STATE,
    PROPERTY,
    NO_VALUE
};
