'use strict';

var React = require('react'),
    FieldEditor = require('./fieldEditor');

var WorkspaceField = React.createClass({
    propTypes: {
        data: React.PropTypes.object.isRequired,
        metadata: React.PropTypes.object.isRequired,
    },
    createChildFields: function () {
        var childFields = null,
            i = 0;

        if (typeof this.props.data.children !== 'undefined') {
            childFields = [];

            for (i; i < this.props.data.children.length; i +=1) {
                childFields.push(
                    <WorkspaceField
                        key={i}
                        data={this.props.data.children[i]}
                        metadata={this.props.metadata}
                        updateFieldData={this.props.updateFieldData} />
                );
            };
        }

        return childFields;
    },
    render: function () {
        var childFields = this.createChildFields();

        return (
            <div className="nl-component nl-workspace-field">
                <h3>{this.props.data.ClassName}</h3>
                <FieldEditor
                    data={this.props.data}
                    metadata={this.props.metadata}
                    updateFieldData={this.props.updateFieldData} />

                {childFields}
            </div>
        );
    }
});

module.exports = WorkspaceField;
