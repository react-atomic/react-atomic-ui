import React, {PureComponent} from 'react';

import {Button} from 'react-atomic-molecule';
import {dispatch, Return} from 'reshow';

const DialogResult = ({dialogReturn}) =>
  'undefined' !== typeof dialogReturn ? 'Dialog: ' + dialogReturn : null;

class ReshowMessageExample extends PureComponent {
  handleAddAlert = e => {
    dispatch('alert/add', {
      message: 'test',
    });
  };

  handleResetAlert = e => {
    dispatch('alert/reset', {
      alerts: [1, 2, 3],
    });
  };

  handleCleanAlert = e => {
    dispatch('alert/reset', {
      alerts: null,
    });
  };

  handleOpenDialog = e => {
    dispatch('dialog/start', {
      dialog: 'how are u',
    });
  };

  render() {
    return (
      <div>
        <p>
          <Button onClick={this.handleAddAlert}>Add alert</Button>
          <Button onClick={this.handleResetAlert}>Reset alert</Button>
          <Button onClick={this.handleCleanAlert}>Clean all alerts</Button>
        </p>
        <p>
          <Button onClick={this.handleOpenDialog}>Open Dialog</Button>
          <Return initStates={['dialogReturn']}>
            <DialogResult />
          </Return>
        </p>
      </div>
    );
  }
}

export default ReshowMessageExample;
