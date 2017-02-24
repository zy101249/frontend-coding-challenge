import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { Button, Glyphicon } from 'react-bootstrap';
import moment from 'moment';

class CreateEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      startDate: moment(),
      endDate: moment().add(29, 'days'),
    }
    this.update = this.update.bind(this);
    this.handleApply = this.handleApply.bind(this);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleApply(e, picker, field) {
    e.preventDefault();
    this.setState({
      startDate: picker.startDate,
      endDate: picker.endDate
    });
  }

  handleCreateEvent(e) {
    e.preventDefault();
  }

  render() {
    const { title, description, startDate, endDate } = this.state;

    return(
      <div className="create-event-form">
        <div className="create-event-form-header">
          Create Event
        </div>
        <form>
          <input
            type="text"
            className="create-event-form-title"
            placeholder="Title"
            value={title}
            onChange={ (e) => this.update("title") }/>
          <textarea
            className="create-event-form-description"
            placeholder="Description"
            value={description}
            onChange={ (e) => this.update("description") }/>
          <DateRangePicker
            showDropdowns={true}
            startDate={startDate}
            minDate={startDate}
            opens={"center"}
            onApply={this.handleApply}
            timePickerIncrement={15}
            timePicker
            singleDatePicker={true}>
						<Button className="selected-date-button" style={{width:'80%'}}>
							<div className="pull-left"><Glyphicon glyph="calendar" /></div>
							<div className="pull-right">
								<span>
                  { startDate.format("MM/DD/YYYY, hh:mm a")}
								</span>
							</div>
						</Button>
  				</DateRangePicker>
          <DateRangePicker
            showDropdowns={true}
            startDate={endDate}
            minDate={startDate}
            opens={"center"}
            onApply={this.handleApply}
            timePickerIncrement={15}
            timePicker
            singleDatePicker={true}>
						<Button className="selected-date-button" style={{width:'80%'}}>
							<div className="pull-left"><Glyphicon glyph="calendar" /></div>
							<div className="pull-right">
								<span>
                  { endDate.format("MM/DD/YYYY, hh:mm a")}
								</span>
							</div>
						</Button>
  				</DateRangePicker>
          <input
            type="submit"
            value="Create Event"
            onClick={this.handleCreateEvent}
            />
        </form>
      </div>
    )
  }
}

export default CreateEventForm;
