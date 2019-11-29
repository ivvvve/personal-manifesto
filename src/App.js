import React, { Component } from 'react';
import './App.css';
import Policy from './Policy.js';
import Choices from './Choices.js';

class App extends Component {
  
  
  constructor(props){
    super(props)
    this.state = {
      policies: [
        {
          name: "What do you do for a living?",
          options: [
            {
              text: "I work",
              answer: "[Use sentence from branch 1A]"
            },
            {
              text: "I study",
              answer: "The Tories have tripled tuition fees, leaving students burdened with tens of thousands of pounds of debt-- a huge stress for starting out in life. You won't be paying tuition fees because they have been eliminated."
            },
            {
              text: "I care for others",
              answer: "Caring for loved ones and others is so vital to our social fabric but can be challenging for carers without the right supports. The new National Care Service will support care workers with a higher allowance and training."
            },
            {
              text: "I'm unemployed",
              answer: "Under the Tories, it seems like more of us are out of work while others are working more than ever. With Universal Credit gone, the benefits system will treat you with the dignity and respect you deserve, allowing you to lead a dignified life whatever your circumstances."
            },
            {
              text: "I'm retired",
              answer: "The Tories have cut pensions and increased the state pension age, making retirement shorter and less secure. Retirement will be more dignified with the state pension age at 66, maintain the ‘triple lock’ on pensions and provide Winter Fuel Payments, free TV licences and free bus passes, giving you the decent retirement you deserve."
            }
          ]
        },
        {
          name: "What is your biggest immediate concern?",
          options: [
            {
              text: "My job",
              answer: "The economy will be recharged with thousands of new jobs and rising wages as workers finally share in growth. It'll be easier to join and benefit from a union, workers in big companies will have a share and a say, and you'll be looking forward to a four-day workweek that shares the work and gives everyone more free time."
            },
            {
              text: "Brexit",
              answer: "You will get the final say on Brexit within six months, a genuine choice between a credible leave deal or remain."
            },
            {
              text: "Crime",
              answer: "Thousands more police officers will be on the streets to tackle crime, but they will be working differently – accountable to communities, better trained, actively challenging discrimination."
            },
            {
              text: "Neglect of where I live",
              answer: "Investment, jobs and services will be spread around the entire UK, ensuring that no region is left behind again."
            },
            {
              text: "Housing",
              answer: "More than 100,000 new council and social homes will be built every year and rent increases capped at inflation, bringing housing costs down and ensuring a decent, affordable home for all."
            },
            {
              text: "Making ends meet",
              answer: "No one should live in poverty. A Labour government will undo the damage of Universal Credit, expand services for all paid for by those who have benefited from inequality the most and guarantee a Real Living Wage."
            }
          ]
        },
        {
          name: "Which of these services do you rely on most?",
          options: [
            {
              text: "NHS, Care",
              answer: "Modern, accessible, and community-oriented care will be delivered by a rebuilt, properly funded NHS alongside a new National Care Service."
            },
            {
              text: "Transport (rail, tube, bus..)",
              answer: "Renationalized rail and bus services will offer more service for lower fares, including free bus travel for under-25s."
            },
            {
              text: "Council housing",
              answer: "No longer neglected and sold off, council and social housing will be revitalized with its biggest expansion in decades."
            },
            {
              text: "Internet access",
              answer: "Free, high-speed broadband will reach every household in Britain."
            },
            {
              text: "Community centres, youth centres, libraries",
              answer: "After years of cuts and closures, communities have the well-funded, accessible social infrastructure they deserve."
            }
          ]
        },
        {
          name: "What do you like to do in your spare time?",
          options: [
            {
              text: "Sports",
              answer: "Sports will be accessible and run in the interest of those who participate in and love them."
            },
            {
              text: "Shopping on the High Street",
              answer: "Your High Street will regain its life and character. Those empty shops will be put to good use again."
            },
            {
              text: "Arts and culture",
              answer: "Libraries, museums and galleries will be well-funded and freely accessible to you and your friends."
            },
            {
              text: "Going to the pub",
              answer: "You can relax with friends in the pub, and if it is under threat a community group will have the first chance to buy it."
            },
            {
              text: "Time in nature and green spaces",
              answer: "You will live in a green Britain, where nature is being recovered, wildlife is protected and we are on a rapid, just transition to a clean economy."
            },
            {
              text: "Social media, gaming, internet",
              answer: "You and your friends will enjoy the full benefits of full-fibre broadband."
            },
          ]
        },
        {
          name: "What broader issues concern you most?",
          options: [

            {
              text: "Inequality",
              answer: "You live in a Britain that works for the many not only the few."
            },
            {
              text: "Democracy at risk",
              answer: "Power is put in your hands: You can participate in the UK-wide Constitutional Conventions and your local democracy is strenghened."
            },
            {
              text: "Climate change",
              answer: "Vital action is taken to stop climate change low-carbon economy with well-paid jobs"
            },
            {
              text: "Discrimination",
              answer: "remove institutional biases in policing"
            },
            {
              text: "Conflicts around the world",
              answer: "Britain is pursuing a very different foreign policy centered on peace and diplomacy."
            },
          ]
        },
        {
          name: "If you have children, how old are they?",
          options: [
            {
              text: "No children",
              answer: "[Nothing needed?]"
            },
            {
              text: "Under 5",
              answer: "Young children like yours will be be entitled to free preschool: 30 hours per week for all 2 to 4 year olds and more hours at affordable, subsidised rates linked to income."
            },
            {
              text: "5 to 15 years old",
              answer: "A new National Education Service will ensure that school-age children ...."
            },
            {
              text: "16 and older",
              answer: "As your children age into young adulthood, you won't have to worry"
            }
          ]
        },
        {
          name: "How much do you earn?",
          options: [
            {
              text: "Benefits",
              answer: "reform universal credit"
            },
            {
              text: "Minimum wage",
              answer: "Guarantee living wage of L10 per hour"
            },
            {
              text: "Less than L80K",
              answer: "more services for no increase in tax"
            },
            {
              text: "More than L80K",
              answer: "asking you to pay a little more"
            },
            {
              text: "Billionaire",
              answer: "you will be paying more tax but only because your taxes have been repeatedly cut as inequality has exploded. This is the price of living in society."
            }
          ]
        }
      ],
      pos: -1,
      choices: []
    }
    this.posUp = this.posUp.bind(this);
    this.posDown = this.posDown.bind(this);
    this.rePos = this.rePos.bind(this);
    this.addChoice = this.addChoice.bind(this);
  }
  
  posUp() {
    if (this.state.pos < this.state.policies.length + 1) {
      this.setState({pos: this.state.pos + 1})
    }
  };
  
  posDown() {
    if (this.state.pos >= 0 ){
      this.setState({ pos: this.state.pos - 1 })
      this.state.choices.pop();
    }
  }

  rePos() {
    this.setState({ choices: []});
    this.setState({ pos: -1 });
  }

  addChoice(event) {
    this.state.choices.push(event.target.attributes[0].value);
    this.posUp();
  }

  render() {
    if (this.state.pos === -1) {
      return (
        <div class="wrapper" id="intro">
        <h1>Personal manifesto</h1>
        <p>
          Est reprehenderit eu nisi occaecat enim reprehenderit magna. Non laborum Lorem laborum et do velit velit est ex eu velit esse cupidatat. Incididunt commodo sit culpa nulla ut proident nisi ad cillum est enim id nisi incididunt. Nisi incididunt do aliquip veniam reprehenderit eiusmod.
        </p>
        <p class="btn" onClick={this.posUp}>Continue ↷</p>
      </div>
      )
    } else if (this.state.pos < this.state.policies.length) {
      return(<Policy inc={this.addChoice} dec={this.posDown}policy={this.state.policies[this.state.pos]}></Policy>)
    } else {
      return (
        <Choices rePos={this.rePos} choices={this.state.choices}></Choices>
      )
    }
  }
}

export default App;
