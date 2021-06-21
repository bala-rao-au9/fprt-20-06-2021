import React from "react";
import Header from './Header';
import ButtonPanel from './ButtonPanel';
import Basic from './Basic';
import Contacts from './Contacts';
import Avatar from './Avatar';
import Finish from './Finish';

import validation from './validation';

export default class App extends React.Component {

  state = {
    currentStep: 1,
    user: {
      firstName: '',
      lastName: '',
      password: '',
      passwordRepeat: '',
      gender: 'female',
      age: 18,
      email: '',
      phone: '',
      country: 0,
      city: '',
    },
    errors: {},
    steps: [
      {
        number: 1,
        label: 'Basic',
        completed: false,
      },
      {
        number: 2,
        label: 'Contacts',
        completed: false,
      },
      {
        number: 3,
        label: 'Avatar',
        completed: false,
      },
      {
        number: 4,
        label: 'Finish',
        completed: false,
      },
    ],
  }

  onChangeInput = e => {
    const {name, value} = e.target;
    if (name === 'country') {
      this.setState(state => ({
        user: {
          ...state.user,
          city: '',
        }
      }));
    }
    this.setState(state => ({
      user: {
        ...state.user,
        [name]: value,
      },
      errors: {
        ...state.errors,
        [name]: null,
      },
    }));
  }

  onNextButtonClick = () => {
    const { currentStep, user } = this.state;
    const errors = validation(currentStep, user);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      let newSteps = [...this.state.steps ];
      let step = newSteps.find(el => el.number === currentStep);
      step.completed = true;
      this.setState({ currentStep: currentStep + 1, steps: newSteps });
    }
  }

  onPreviousButtonClick = () => {
    let newSteps = [...this.state.steps ];
    let step = newSteps.find(el => el.number === (this.state.currentStep - 1));
    step.completed = false;
    this.setState({ currentStep: this.state.currentStep - 1, steps: newSteps });
  }

  onResetButtonClick = () => {
    window.location.reload();
  }

  render() {
    const { currentStep, steps, user, errors } = this.state;
    return (
      <div className="form-container card">
        <Header step={currentStep} steps={steps}/>
        <form className="form card-body" >
          {
            currentStep === 1 &&
            <Basic
              user={user}
              onChangeInput={this.onChangeInput}
              errors={errors}
            />
          }
          {
            currentStep === 2 &&
            <Contacts
              user={user}
              onChangeInput={this.onChangeInput}
              errors={errors}
            />
          }
          {
            currentStep === 3 &&
            <Avatar
              user={user}
              onChangeInput={this.onChangeInput}
              errors={errors}
            />
          }
          {
            currentStep === 4 &&
            <Finish user={user} />
          }
          <ButtonPanel
            currentStep={currentStep}
            steps={steps}
            onNextButtonClick={this.onNextButtonClick}
            onPreviousButtonClick={this.onPreviousButtonClick}
            onResetButtonClick={this.onResetButtonClick}
          />
        </form>
      </div>
    );
  }
}
