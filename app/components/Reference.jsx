/**
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

// external packages
import React from 'react';
// import Rules from 'atomizer/src/rules';

// components
import SearchBox from './SearchBox';
import ConfigBox from './ConfigBox';
import ReferenceRules from './ReferenceRules';
import ReferenceHelpers from './ReferenceHelpers';
import AtomicCssOutputBox from './AtomicCssOutputBox';

// stores
import ReferenceStore from '../stores/ReferenceStore';

// mixins
import {FluxibleMixin} from 'fluxible/addons';

var Reference = React.createClass({
    mixins: [FluxibleMixin],
    statics: {
        storeListeners: [ReferenceStore]
    },

    getInitialState: function () {
        this.store = this.getStore(ReferenceStore);
        return this.store.getState();
    },

    onChange: function () {
        var state = this.store.getState();
        this.setState(state);
    },

    render: function () {
        var hasConfig = !!this.state.customConfig;
        return (
            <div>
                <SearchBox />
                <h2 id="atomic-classes">Atomic Classes</h2>
                <ReferenceRules />

                <h2 id="helper-classes">Helper Classes</h2>
                <ReferenceHelpers />

                <AtomicCssOutputBox className={hasConfig ? '' : 'D(n)'} />
            </div>
        );
    }
});

export default Reference;
