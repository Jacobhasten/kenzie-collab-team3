import React from 'react';
import './Toggle.scss';

export default class Toggle2 extends React.Component {
    render() {
      return (
<>
    <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
          checked={this.props.checked}
          onChange={e => this.props.onChange(e.target.checked)}
        />
        <label className="toggle-switch-label" htmlFor={this.props.Name}>
          <span className="toggle-switch-inner"/>
          <span className="toggle-switch-switch" />
        </label>
      </div>
</>);
}}