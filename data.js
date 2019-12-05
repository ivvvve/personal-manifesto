module.exports = [

  {
    name: "What do you do for a living?",
    qid: 1,
    options: [
      {
        text: "I'm an employee",
        nest: {
          name: "Where do you work?",
          qid: 2,
          options: [
            {
              text: "Manufacturing and industry",
              aid: 1,
              answer: "Years of under-investment and neglect have left entire communities and industries behind with low quality jobs and slow growth. Labour's Green Industrial Revolution, backed by a £250 billion Green Transformation Fund  will revitalize manufacturing and other sectors with good, well-paid, green jobs."
            },
            {
              text: "Construction",
              aid: 2,
              answer: "Construction workers are essential to improving and greening our country's infrastructure. Labour's plans to build a million new homes as well as retrofitting existing ones to make them carbon neutral would create hundreds of thousands of highly skilled and highly paid jobs in the construction sector. Labour would also introduce a brand new climate apprenticeship scheme."
            },
            {
              text: "Transport",
              aid: 3,
              answer: "Transport is an essential service that should be run by and for the public, rather than greedy corporations. Labour's plans to bring rail and many bus services back into public ownership will secure democratic control of these services, ensuring safe staffing levels and ending the race to the bottom in working conditions for transport workers."
            },
            {
              text: "Technology and communications",
              aid: 4,
              answer: "As we become ever more dependent on digital technology, Labour will deliver full-fibre broadband free to every home and business in the UK, and ensuring that every community and industry can maximise connectivity. Labour will also overhaul our cybersecurity by creating a coordinating minister and regular reviews of cyber-readiness. "
            },
            {
              text: "Service sector",
              aid: 5,
              answer: "Working in the service sector the pay often isn't enough to pay the rent, and you might not even know your shift from week to week. Labour will ban zero-hour contracts, bring in a £10 Real Living Wage for all workers and expand union rights, making work better paid and more secure."
            },
            {
              text: "Business",
              aid: 6,
              answer: "Labour will create a National Investment Bank, backed up by a network of Regional Development Banks, to provide £250 billion of lending for enterprise, infrastructure and innovation over 10 years. Labour will also level the tax playing field by making sure that multi-national corporations pay their fair share so that smaller and medium-sized business are not disadvantaged."
            },
            {
              text: "Public sector",
              nest: {
                name: "Where in the public sector do you work?",
                qid: 7,
                options: [
                  {
                    text: "Healthcare",
                    aid: 8,
                    answer: "As a health worker, you've seen how a decade of Tory health cuts and privatisations has pushed our greatest institution to the brink. By boosting NHS investment, Labour will ensure that you have real-terms pay increases every year, more colleagues and a training bursary as well as making sure that everyone gets the care that they deserve."
                  },
                  {
                    text: "Education",
                    aid: 9,
                    answer: "As an education worker you'll be aware of how Tory cuts and over-assessment in schools, as well as marketisation in universities, have put education workers under immense pressure. Labour will cancel Ofsted and excessive testing and increase funds for training and non-contact time for teachers, as well as scrapping tuition fees and overhauling the Tories' failed assessment of reserach and teaching quality in universities."
                  },
                  {
                    text: "Police",
                    aid: 10,
                    answer: "As a police officer, you've experienced how the Tories have kept the police force underfunded and understaffed. Labour will put 2,000 more front line officers on the street than the Tories have planned, and provide the necessary funds for the modernisation of our police force."
                  },
                  {
                    text: "Fire and Rescue Service",
                    aid: 11,
                    answer: "Tory cuts have devastated our Fire and Rescue Service. We will recruit at least 5,000 new firefighters and create a public Fire and Rescue College to provide high-quality training for fire and rescue forces."
                  },
                  {
                    text: "Other public sector",
                    aid: 12,
                    answer: "As a public sector worker you've had your pay held back and been forced to work in declining services. Labour will lift the public sector pay cap and bring public services back in house, creating decent jobs in quality services."
                  }
                ]
              }
            },
            {
              text: "Self-employed",
              aid: 13,
              answer: "While being self-employed means you have more freedom and autonomy, it can also be insecure work. You now have better protections for your work and income alongside access to a mortgage and a pension scheme."
            }
          ]
        }
      },
      {
        text: "I study",
        aid: 14,
        answer: "The Tories have tripled tuition fees, leaving students burdened with tens of thousands of pounds of debt-- a huge stress for starting out in life. You won't be paying tuition fees because they have been eliminated."
      },
      {
        text: "I care for others",
        aid: 15,
        answer: "Caring for loved ones and others is so vital to our social fabric but can be challenging for carers without the right supports. The new National Care Service will support care workers with a higher allowance and training."
      },
      {
        text: "I'm unemployed",
        aid: 16,
        answer: "Under the Tories, it seems like more of us are out of work while others are working more than ever. With Universal Credit gone, the benefits system will treat you with the dignity and respect you deserve, allowing you to lead a dignified life whatever your circumstances."
      },
      {
        text: "I'm retired",
        aid: 17,
        answer: "The Tories have cut pensions and increased the state pension age, making retirement shorter and less secure. Retirement will be more dignified with the state pension age at 66, maintain the ‘triple lock’ on pensions and provide Winter Fuel Payments, free TV licences and free bus passes, giving you the decent retirement you deserve."
      }
    ]
  },
  {
    name: "What is your biggest immediate concern?",
    all: true,
    qid: 2,
    options: [
      {
        text: "My job",
        aid: 1,
        answer: "It's only fair that workers share in the growth of the economy - you create the wealth after all! Under a Labour government, joining and benefiting from a union will be easier, employees in big companies will have a share and a say, and workers will benefit from the introduction of a real living wage."
      },
      {
        text: "Brexit",
        aid: 2,
        answer: "Within six months of the election, you will get to cast your vote in a legally binding referendum – a final say between remain and a credible leave deal that protects workers rights, consumer standards and the environment."
      },
      {
        text: "Crime",
        aid: 3,
        answer: "The past ten years have seen 20,000 police officers lost to Tory cuts. Labour will not just replace them, but also equip them better to serve the public – they will be accountable to your community, will be better trained, and actively challenge discrimination."
      },
      {
        text: "Neglect of where I live",
        aid: 4,
        answer: "Through our investment programme backed by a £400 billion National Transformation Fund, Labour will bring more public services, stronger infrastructure, research and innovation and new, green industries creating decent jobs around the UK, ensuring that no region is left behind again. Check out the regional manifesto for what is planned in your area"
      },
      {
        text: "Climate change",
        aid: 5,
        answer: "We need a Green Industrial Revolution to get to a net-zero carbon world. With a Labour government, you will benefit from the £250 billion Green Transformation Fund that will help create one million highly-skilled, well-paid, green jobs. And we will all benefit from a cleaner economy and greener future."
      },
      {
        text: "Housing",
        aid: 6,
        answer: "We will build more than 100,000 new council and social homes every year. Rents will be capped, bringing housing costs down and ensuring you will have acccess to a decent, affordable home."
      },
      {
        text: "Healthcare",
        aid: 7,
        answer: "Labour will end NHS privatisation, and rebuild and properly fund the NHS with a £26bn boost - creating more doctors, nurses and community mental health hubs across the UK."
      },
      {
        text: "Making ends meet",
        aid: 8,
        answer: "No one should live in poverty. Alongside introducing a £10 Real Living Wage, a Labour government will undo the damage of Universal Credit and expand public services. This will be paid for by taxes on the rishest 5% and large corporations, who can afford to pay a bit more."
      }
    ]
  },
  {
    name: "Which of these services do you rely on most?",
    all: true,
    qid: 3,
    options: [
      {
        text: "NHS, Care",
        aid: 1,
        answer: "Labour's huge NHS investment plan will give patients the qualty care they deserve. On top of this, a joined-up community care model will ensure that health and care become more accessible, more personal and more preventative."
      },
      {
        text: "Transport (rail, tube, bus..)",
        aid: 2,
        answer: "Under Labour, renationalised rail and bus services would offer better quality service for lower fares, including free bus travel for under-25s."
      },
      {
        text: "Council housing",
        aid: 3,
        answer: "Labour will build 100, 000 council and social homes per year, expanding access to good quality council housing for the many.No more neglect and selling off of council housing- this will be the biggest expansion of social housing in decades."
      },
      {
        text: "Internet access",
        aid: 4,
        answer: "You shouldn't be part of the internet postcode lottery. Labour will ensure free, high-speed broadband reaches every household in Britain."
      },
      {
        text: "Community centres, youth centres, libraries",
        aid: 5,
        answer: "After years of cuts and closures, a Labour government will fund community centres, giving you the accessible social infrastructure your community deserves."
      }
    ]
  },
  {
    name: "What do you like to do in your spare time?",
    qid: 4,
    options: [
      {
        text: "Football",
        aid: 1,
        answer: "Labour will ensure that accredited football supporters' trusts have more say over their clubs, review the state of the game to create greater equality and distribute a share of Premiership television rights income to grassroots football facilities."
      },
      {
        text: "Shopping on the High Street",
        aid: 2,
        answer: "Your town's high street is a central space for your community and people's livelihoods. Labour will revive high streets by stopping bank branch closures, banning ATM charges         and giving local government power to put empty shops to good use"
      },
      {
        text: "Arts and culture",
        aid: 3,
        answer: "Libraries, museums and galleries will be well-funded and freely accessible to you and your friends under a Labour government."
      },
      {
        text: "Going to the pub",
        aid: 4,
        answer: "You can relax with friends in the pub, and if it is under threat a community group will have the first chance to buy it."
      },
      {
        text: "Time in nature and green spaces",
        aid: 5,
        answer: "Labour will make sure we live in a country where nature is protected, wildlife is preserved, and economic wellbeing for all doesn't cost the earth."
      },
    ]
  },
  {
    name: "If you have children, how old are they?",
    qid: 6,
    options: [
      {
        text: "No children",
      },
      {
        text: "Under 5",
        aid: 1,
        answer: "Labour will offer free childcare of 30 hours a week for all 2 to 4 year olds. Any extra care you require will be made available according to your income, so it's always within your means."
      },
      {
        text: "5 to 15 years old",
        aid: 2,
        answer: "Labour will reverse cuts to school budgets and introduce a National Education Service. Free school meals, freedom for outdoor play and zones around schools with cleaner air will make sure our children can grow up safe, healthy, and happy."
      },
      {
        text: "16 and older",
        aid: 3,
        answer: "Your kids don't have to worry about affording university tuition - Labour will scrap fees and offer free lifelong education to all."
      }
    ]
  },
  {
    name: "How much do you earn?",
    qid: 7,
    options: [
      {
        text: "I'm on benefits",
        aid: 1,
        answer: "Your benefits should help you manage your living costs and get support in finding a job. Labour will transition unemployment benefit from a punishment to a positive, helping you back into work."
      },
      {
        text: "I'm on minimum wage",
        aid: 2,
        answer: "You will get an immediate pay raise of between £3,444 and £5,986 with Labour's Real Living Wage of £10 per hour."
      },
      {
        text: "I'm on less than £80k",
        aid: 3,
        answer: "You won't have to pay any more tax for any of these public services. You've footed the bill for 10 years of austerity. We can rebuild Britain for the many, not the few."
      },
      {
        text: "I'm on more than £80K",
        aid: 4,
        answer: "You are asked to pay a bit more in tax on income over £80,000. In return you'll live in a more equal society, benefit from a better NHS, schools and other services, your children will be protected from catastrophic climate change"
      },
      {
        text: "Billionaire",
        aid: 5,
        answer: "You have benefitted from a rigged system for too long under the Tories! We're going to tax you properly and give the money to those who need it most."
      }
    ]
  },
{
    name: "Where do you live?",
    map: true,
    qid: 8,
    options: [
      {
        text: "East of England",
        aid: 1,
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
        aid: 2,
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
        aid: 3,
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
        aid: 4,
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
        aid: 5,
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
        aid: 6,
        answer: "Something about Northern Ireland",
        districts: [
          "BT",
        ]
      },
      {
        text: "Scotland",
        aid: 7,
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
        aid: 8,
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
        aid: 9,
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
        aid: 10,
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
        aid: 11,
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
        aid: 12,
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
