import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { Button, Glyphicon } from 'react-bootstrap';
import moment from 'moment';

class CreateEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      startDate: this.roundMinutes(moment()),
      endDate: this.roundMinutes(moment()).add(29, 'days'),
      error_alert: ""
    }
    this.update = this.update.bind(this);
    this.updateStartDate = this.updateStartDate.bind(this);
    this.updateEndDate = this.updateEndDate.bind(this);
    this.handleCreateEvent = this.handleCreateEvent.bind(this);
  }

  roundMinutes(date) {
    const remainder = 15 - date.minute() % 15;
    return moment(date).add("minutes", remainder )
  }

  update(field) {
		return e => this.setState({
      [field]: e.currentTarget.value
		});
	}

  updateStartDate(e, picker) {
    this.setState({
      startDate: picker.startDate,
      endDate: picker.startDate
    })
  }

  updateEndDate(e, picker) {
    this.setState({ endDate: picker.endDate })
  }

  handleCreateEvent(e) {
    const { title } = this.state;

    if (title === "") {
      this.setState({ error_alert: 'error-alert' })
    } else {
      this.setState({ error_alert: "" })
      this.props.createEvent(this.state)
    }
  }

  render() {
    const { title, startDate, endDate, error_alert } = this.state;

    return(
      <div className="create-event-form">
        <div className="create-event-form-header">
          Create Event
        </div>
        <form>
          <input
            type="text"
            className={`create-event-form-title ${error_alert}`}
            placeholder="Title"
            value={title}
            onChange={this.update("title")}/>
          <DateRangePicker
            showDropdowns={true}
            startDate={startDate}
            minDate={startDate}
            opens={"center"}
            onApply={this.updateStartDate}
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
            onApply={this.updateEndDate}
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
          <Button
            bsStyle="primary"
            onClick={this.handleCreateEvent}>
            Create Event
          </Button>
        </form>
      </div>
    )
  }
}

export default CreateEventForm;
