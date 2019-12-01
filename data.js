module.exports = [
  {
    name: "What do you do for a living?",
    options: [
      {
        text: "I work",
        nest: {
          name: "Where do you work?",
          options: [
            {
                text: "Manufacturing and industry",
                answer: "Years of under-investment and neglect by Westminster have left entire communities and industries behind with low quality jobs and slow growth. A Green Industrial Revolution, backed by a £400 billion National Transformation Fund, is revitalizing manufacturing and other sectors with good, well-paid, green jobs."
            },
            {
                text: "Service sector",
                answer: "Working in the service sector the pay often isn't enough to pay the rent, and you might not even know your shift from week to week. With zero-hour contracts banned and a guaranteed £10 minimum wage, you have decent pay and more secure conditions."
            },
            {
              text: "Public sector",
              nest: {
                name: "Where in the public sector do you work?",
                options: [
                  {
                    text: "Healthcare",
                    answer: "As a care worker, you've seen how a decade of Tory health cuts and privatisations has pushed our greatest institution to the brink. With more investment into the NHS, you have real-terms pay increases every year, more colleagues and a training bursary, ensuring you are fairly rewarded for your work."
                  },
                  {
                    text: "Education",
                    answer: "As a teacher you're under immense pressure from Tory cuts and the obsession with testing and Ofsted inspections. With Ofsted and excessive testing cancelled, and with funds for training and non-contact time, you now teach in a supportive, enriching and creative classroom."
                  },
                  {
                    text: "Police",
                    answer: "As a police officer, you experienced how the Tories kept the police force underfunded and understaffed. Labour will put 2,000 more front line officers on the street than the Tories planned and provide the necessary funds for the modernisation of our police force."
                  },
                  {
                    text: "Fire and Rescue Service",
                    answer: "The Tory cuts have devastated our Fire and Rescue Service. We will recruit at least 5,000 new firefighters and create a public Fire and Rescue College to provide outstanding training for fire and rescue forces."
                  },
                  {
                    text: "Other public sector",
                    answer: "As a public sector worker you've had your pay held back and been forced to work in declining services. With the public sector pay cap gone and public services back in house, you now have a decent job in a quality service."
                  }
                ]
              }
            },
            {
              text: "Self-employed",
              answer: "While being self-employed means you have more freedom and autonomy, it can also be insecure work. You now have better protections for your work and income alongside access to a mortgage and a pension scheme."
            }
          ]
        }
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
    all: true,
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
  },
  {
    name: "Where do you live",
    map: true,
    options: [
      {
        text: "East of England",
        answer: "Something about East of England",
        districts: [
          "PE",
          "AL",
          "CB",
          "CM",
          "CO",
          "HP",
          "IP",
          "LU",
          "NR",
          "SG",
          "SS",
        ]
      },
      {
        text: "East Midlands",
        answer: "Something about East Midlands",
        districts: [
          'DE',
          'DN',
          'LE',
          'LN',
          'NG',
          'S',
        ]
      },
      {
        text: "London",
        answer: "Something about London",
        districts: [
          "BR",
          "CR",
          "DA",
          "E",
          "EC",
          "EN",
          "HA",
          "IG",
          "KT",
          "N",
          "NW",
          "RM",
          "SE",
          "SM",
          "SW",
          "TW",
          "UB",
          "W",
          "WC",
          "WD",
        ]
      },
      {
        text: "North East",
        answer: "Something about North East",
        districts: [
          "DH",
          "DL",
          "NE",
          "SR",
          "TS",
        ]
      },
      {
        text: "North West",
        answer: "Something about North West",
        districts: [
          "BB",
          "BD",
          "BL",
          "CA",
          "CH",
          "CW",
          "FY",
          "HD",
          "HX",
          "L",
          "LA",
          "M",
          "OL",
          "PR",
          "SK",
          "WA",
          "WN",
        ]
      },
      {
        text: "Northern Ireland",
        answer: "Something about Northern Ireland",
        districts: [
          "BT",
        ]
      },
      {
        text: "Scotland",
        answer: "Something about Scotland",
        districts: [
          "AB",
          "DD",
          "DG",
          "EH",
          "FK",
          "G",
          "HS",
          "IV",
          "KA",
          "KW",
          "KY",
          "ML",
          "PA",
          "PH",
          "TD",
          "ZE",
        ]
      },
      {
        text: "South East",
        answer: "Something about South East",
        districts: [
          "BN",
          "CT",
          "GU",
          "ME",
          "MK",
          "OX",
          "PO",
          "RG",
          "RH",
          "SL",
          "SO",
          "TN",
        ]
      },
      {
        text: "South West",
        answer: "Something about South West",
        districts: [
          "BA",
          "BH",
          "BS",
          "DT",
          "EX",
          "GL",
          "PL",
          "SN",
          "SP",
          "TA",
          "TQ",
          "TR",
        ]
      },
      {
        text: "Wales",
        answer: "Something about Wales",
        districts: [
          "CF",
          "LD",
          "LL",
          "NP",
          "SA",
          "SY",
        ]
      },
      {
        text: "West Midlands",
        answer: "Something about West Midlands",
        districts: [
          "B",
          "CV",
          "DY",
          "HR",
          "NN",
          "ST",
          "TF",
          "WR",
          "WS",
          "WV",
        ]
      },
      {
        text: "Yorkshire and the Humber",
        answer: "Something about Yorkshire and the Humber",
        districts: [
          "HG",
          "HU",
          "LS",
          "WF",
          "YO",
        ]
      },
      {
        text: "Other", // Non geographic postcodes (BF etc)
        answer: "Something about National",
        districts: [
          "BF",
          "BX",
          "GIR",
          "QC",
          "XX",
        ]
      },
    ]
  }
];
