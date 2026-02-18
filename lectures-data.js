window.LECTURES_DATA = {
  1: {
    "subject": "Software Quality Assurance and Testing - Lecture 1",
    "topic": "Fundamentals of Software Testing & Bug Life Cycle",
    "questions": [
      {
        "id": 1,
        "question": "What is the primary definition of Software Testing?",
        "options": [
          "The process of writing code for the application",
          "The process of executing a program with the intent of finding errors",
          "The process of designing the user interface",
          "The process of fixing bugs found by users"
        ],
        "correct_answer": "The process of executing a program with the intent of finding errors"
      },
      {
        "id": 2,
        "question": "Which of the following statements about testing limitations is true? [cite: 4]",
        "options": [
          "Testing can prove the absence of bugs",
          "It is possible to completely test any non-trivial system",
          "Testing can only show the presence of bugs, not their absence",
          "Automated testing finds all bugs"
        ],
        "correct_answer": "Testing can only show the presence of bugs, not their absence"
      },
      {
        "id": 3,
        "question": "What is the difference between Verification and Validation? [cite: 8]",
        "options": [
          "Verification asks 'Are we building the right product?'; Validation asks 'Are we building the product right?'",
          "Verification asks 'Are we building the product right?'; Validation asks 'Are we building the right product?'",
          "Verification is manual; Validation is automated",
          "Verification is done by users; Validation is done by developers"
        ],
        "correct_answer": "Verification asks 'Are we building the product right?'; Validation asks 'Are we building the right product?'"
      },
      {
        "id": 4,
        "question": "Which fault handling technique involves 'Reviews' and 'Configuration Management'? [cite: 5]",
        "options": [
          "Fault Tolerance",
          "Fault Detection",
          "Fault Avoidance",
          "Fault Correction"
        ],
        "correct_answer": "Fault Avoidance"
      },
      {
        "id": 5,
        "question": "What is Black-Box Testing? [cite: 18]",
        "options": [
          "Testing with full knowledge of the internal structure and code",
          "Testing where the internal structure/design/implementation is not known to the tester",
          "Testing performed only by developers",
          "Testing focused on database schemas"
        ],
        "correct_answer": "Testing where the internal structure/design/implementation is not known to the tester"
      },
      {
        "id": 6,
        "question": "What is White-Box Testing? [cite: 21]",
        "options": [
          "Testing based on analysis of the internal structure of the component or system",
          "Testing based solely on requirements documents",
          "Testing performed by end-users",
          "Testing without looking at the code"
        ],
        "correct_answer": "Testing based on analysis of the internal structure of the component or system"
      },
      {
        "id": 7,
        "question": "Which of the following is an example of Functional Testing? [cite: 13]",
        "options": [
          "Performance Testing",
          "Unit Testing",
          "Stress Testing",
          "Usability Testing"
        ],
        "correct_answer": "Unit Testing"
      },
      {
        "id": 8,
        "question": "Which of the following is an example of Non-Functional Testing? [cite: 15]",
        "options": [
          "Integration Testing",
          "System Testing",
          "Performance Testing",
          "Acceptance Testing"
        ],
        "correct_answer": "Performance Testing"
      },
      {
        "id": 9,
        "question": "What is 'Smoke Testing'?",
        "options": [
          "Testing the application under heavy load",
          "Detailed testing of a specific feature",
          "A subset of test cases to ensure the most critical functions work (General Health Checkup)",
          "Testing done by the developer before checking in code"
        ],
        "correct_answer": "A subset of test cases to ensure the most critical functions work (General Health Checkup)"
      },
      {
        "id": 10,
        "question": "When is 'Sanity Testing' performed?",
        "options": [
          "Before the build is released to QA",
          "After receiving a software build with minor changes in code or functionality",
          "During the initial design phase",
          "Only when the system crashes"
        ],
        "correct_answer": "After receiving a software build with minor changes in code or functionality"
      },
      {
        "id": 11,
        "question": "What is the main goal of 'Regression Testing'?",
        "options": [
          "To check if the new code has broken existing functionality",
          "To test the user interface design",
          "To verify the requirements documentation",
          "To check the installation process"
        ],
        "correct_answer": "To check if the new code has broken existing functionality"
      },
      {
        "id": 12,
        "question": "Which testing type is also known as 'Glass Box' or 'Clear Box' testing? [cite: 21]",
        "options": [
          "Black-Box Testing",
          "White-Box Testing",
          "Grey-Box Testing",
          "Functional Testing"
        ],
        "correct_answer": "White-Box Testing"
      },
      {
        "id": 13,
        "question": "What is a 'Defect' or 'Bug'? [cite: 55]",
        "options": [
          "A mistake made by the developer",
          "The mechanical or algorithmic cause of an error",
          "A deviation of the observed behavior from the specified behavior",
          "A misunderstanding of requirements"
        ],
        "correct_answer": "The mechanical or algorithmic cause of an error"
      },
      {
        "id": 14,
        "question": "What is an 'Error' in testing terminology? [cite: 55]",
        "options": [
          "The system is in a state such that further processing will lead to a failure",
          "A deviation from specification",
          "A physical hardware fault",
          "A spelling mistake in documentation"
        ],
        "correct_answer": "The system is in a state such that further processing will lead to a failure"
      },
      {
        "id": 15,
        "question": "What is a 'Failure'? [cite: 55]",
        "options": [
          "A human action that produces an incorrect result",
          "Any deviation of the observed behavior from the specified behavior",
          "A bug in the code",
          "A warning from the compiler"
        ],
        "correct_answer": "Any deviation of the observed behavior from the specified behavior"
      },
      {
        "id": 16,
        "question": "According to the lecture, who tests the software 'gently' and is driven by 'delivery'? [cite: 57]",
        "options": [
          "The Independent Tester",
          "The Client",
          "The Developer",
          "The Manager"
        ],
        "correct_answer": "The Developer"
      },
      {
        "id": 17,
        "question": "What drives the 'Independent Tester'? [cite: 57]",
        "options": [
          "Delivery deadlines",
          "Understanding the system architecture",
          "Quality and attempting to break the system",
          "Writing code"
        ],
        "correct_answer": "Quality and attempting to break the system"
      },
      {
        "id": 18,
        "question": "What is the cost of fixing a bug found in the Maintenance phase compared to the Requirements phase? [cite: 10]",
        "options": [
          "It is cheaper",
          "It is the same cost",
          "It is significantly more expensive (up to 100x)",
          "It is free"
        ],
        "correct_answer": "It is significantly more expensive (up to 100x)"
      },
      {
        "id": 19,
        "question": "Which of the following is NOT a level of testing? [cite: 11]",
        "options": [
          "Unit Testing",
          "Integration Testing",
          "System Testing",
          "Marketing Testing"
        ],
        "correct_answer": "Marketing Testing"
      },
      {
        "id": 20,
        "question": "What is 'Static Testing'? [cite: 17]",
        "options": [
          "Executing the code",
          "Testing without executing the program (e.g., reviews, inspections)",
          "Testing static variables only",
          "Testing hardware components"
        ],
        "correct_answer": "Testing without executing the program (e.g., reviews, inspections)"
      },
      {
        "id": 21,
        "question": "What does 'Dynamic Testing' involve? [cite: 17]",
        "options": [
          "Validating requirements",
          "Executing the program with input data",
          "Code walkthroughs",
          "Reviewing design documents"
        ],
        "correct_answer": "Executing the program with input data"
      },
      {
        "id": 22,
        "question": "In the Bug Life Cycle, what status is assigned when a bug is first logged? [cite: 44]",
        "options": [
          "Open",
          "New",
          "Assigned",
          "Verified"
        ],
        "correct_answer": "New"
      },
      {
        "id": 23,
        "question": "What status does a bug get when a developer accepts it and starts working on it? [cite: 44]",
        "options": [
          "New",
          "Open",
          "Retest",
          "Closed"
        ],
        "correct_answer": "Open"
      },
      {
        "id": 24,
        "question": "If a developer thinks a reported bug is not a genuine defect, what status might they assign? [cite: 44]",
        "options": [
          "Deferred",
          "Rejected",
          "Duplicate",
          "Fixed"
        ],
        "correct_answer": "Rejected"
      },
      {
        "id": 25,
        "question": "What does the 'Deferred' status mean in the Bug Life Cycle? [cite: 44]",
        "options": [
          "The bug is fixed but not verified",
          "The bug is not valid",
          "The bug is expected to be fixed in the next release (low priority)",
          "The bug already exists in the database"
        ],
        "correct_answer": "The bug is expected to be fixed in the next release (low priority)"
      },
      {
        "id": 26,
        "question": "Which component of a Bug Report describes 'How to reproduce the bug'? [cite: 49]",
        "options": [
          "Bug ID",
          "Steps to Reproduce",
          "Summary",
          "Severity"
        ],
        "correct_answer": "Steps to Reproduce"
      },
      {
        "id": 27,
        "question": "What defines 'Severity' in a bug report? [cite: 52]",
        "options": [
          "How quickly the bug must be fixed",
          "The impact of the bug on the application's functionality",
          "The complexity of the code",
          "The time taken to fix the bug"
        ],
        "correct_answer": "The impact of the bug on the application's functionality"
      },
      {
        "id": 28,
        "question": "What defines 'Priority' in a bug report? [cite: 52]",
        "options": [
          "The order in which the bug should be fixed",
          "The damage caused to the system",
          "The technical difficulty of the fix",
          "The number of users affected"
        ],
        "correct_answer": "The order in which the bug should be fixed"
      },
      {
        "id": 29,
        "question": "Which of the following is an example of an 'Algorithmic Fault'? [cite: 56]",
        "options": [
          "Documentation does not match actual conditions",
          "Missing initialization or branching errors",
          "Stress or overload errors",
          "Mismatch between client needs and server offers"
        ],
        "correct_answer": "Missing initialization or branching errors"
      },
      {
        "id": 30,
        "question": "What type of error includes 'Stress or overload errors'? [cite: 56]",
        "options": [
          "Algorithmic Faults",
          "Mechanical Faults",
          "Interface Faults",
          "Capacity or boundary errors"
        ],
        "correct_answer": "Capacity or boundary errors"
      },
      {
        "id": 31,
        "question": "Sanity Testing is a subset of which testing type? [cite: 32]",
        "options": [
          "Unit Testing",
          "Regression Testing",
          "Integration Testing",
          "Stress Testing"
        ],
        "correct_answer": "Regression Testing"
      },
      {
        "id": 32,
        "question": "What is the key difference between Smoke and Sanity testing? [cite: 34]",
        "options": [
          "Smoke verifies critical functionalities; Sanity verifies specific functionality changes",
          "Smoke is done by testers; Sanity is done by developers",
          "Smoke is narrow and deep; Sanity is wide and shallow",
          "Smoke is done on stable builds; Sanity is done on unstable builds"
        ],
        "correct_answer": "Smoke verifies critical functionalities; Sanity verifies specific functionality changes"
      },
      {
        "id": 33,
        "question": "Which status indicates that the tester has verified the fix and the bug no longer exists? [cite: 44]",
        "options": [
          "Retest",
          "Fixed",
          "Closed",
          "Verified"
        ],
        "correct_answer": "Closed"
      },
      {
        "id": 34,
        "question": "What is 'Retest' in the Bug Life Cycle? [cite: 44]",
        "options": [
          "The developer is fixing the bug again",
          "The tester is verifying the fix provided by the developer",
          "The manager is reviewing the bug",
          "The bug is sent back to the developer"
        ],
        "correct_answer": "The tester is verifying the fix provided by the developer"
      },
      {
        "id": 35,
        "question": "Which testing type involves checking the system against the Requirements Specification? [cite: 13]",
        "options": [
          "White-Box Testing",
          "System Testing",
          "Unit Testing",
          "Integration Testing"
        ],
        "correct_answer": "System Testing"
      }
    ]
  },
  2: {
  "subject": "Software Quality Assurance and Testing - Lecture 2",
  "topic": "STLC and Testing Strategies",
  "questions": [
    {
      "id": 1,
      "question": "What does the abbreviation STLC stand for? [cite: 19]",
      "options": [
        "System Technical Life Cycle",
        "Software Testing Life Cycle",
        "Standard Testing Logic Code",
        "Software Technical Logic Cycle"
      ],
      "correct_answer": "Software Testing Life Cycle"
    },
    {
      "id": 2,
      "question": "STLC involves which two primary activities? [cite: 17]",
      "options": [
        "Coding and Debugging",
        "Verification and Validation",
        "Planning and Deletion",
        "Design and Implementation"
      ],
      "correct_answer": "Verification and Validation"
    },
    {
      "id": 3,
      "question": "Which of the following is NOT a phase of the STLC? [cite: 20-26]",
      "options": [
        "Requirement Analysis",
        "Test Planning",
        "Code Development",
        "Test Cycle Closure"
      ],
      "correct_answer": "Code Development"
    },
    {
      "id": 4,
      "question": "What is the definition of 'Entry Criteria' in STLC? [cite: 28]",
      "options": [
        "Items that must be completed before testing can conclude",
        "Prerequisite items that must be completed before testing can begin",
        "The list of defects found during testing",
        "The cost estimation for the project"
      ],
      "correct_answer": "Prerequisite items that must be completed before testing can begin"
    },
    {
      "id": 5,
      "question": "In an ideal world, when should you enter the next stage of STLC? [cite: 31]",
      "options": [
        "When the deadline is reached",
        "When the developers say the code is ready",
        "When the exit criteria for the previous stage is met",
        "When the budget allows it"
      ],
      "correct_answer": "When the exit criteria for the previous stage is met"
    },
    {
      "id": 6,
      "question": "What is the main purpose of the Requirement Traceability Matrix (RTM)? [cite: 49]",
      "options": [
        "To estimate the cost of the project",
        "To validate that all requirements are checked via test cases",
        "To assign tasks to developers",
        "To design the user interface"
      ],
      "correct_answer": "To validate that all requirements are checked via test cases"
    },
    {
      "id": 7,
      "question": "Which document is a deliverable of the Requirement Phase Testing? [cite: 43-45]",
      "options": [
        "Test Plan",
        "Defect Report",
        "Automation Feasibility Report",
        "Source Code"
      ],
      "correct_answer": "Automation Feasibility Report"
    },
    {
      "id": 8,
      "question": "Who typically determines the test plan strategy during the Test Planning phase? [cite: 152]",
      "options": [
        "The Client",
        "The Junior Tester",
        "The Senior QA Manager",
        "The Developer"
      ],
      "correct_answer": "The Senior QA Manager"
    },
    {
      "id": 9,
      "question": "Which of the following is an activity of the Test Planning phase? [cite: 158, 160]",
      "options": [
        "Executing test scripts",
        "Writing code for the application",
        "Resource planning and test effort estimation",
        "Fixing bugs"
      ],
      "correct_answer": "Resource planning and test effort estimation"
    },
    {
      "id": 10,
      "question": "What is the main activity during the Test Case Development Phase? [cite: 166]",
      "options": [
        "Creation and verification of test cases and scripts",
        "Negotiating the budget",
        "Installing the software on the server",
        "Closing the test cycle"
      ],
      "correct_answer": "Creation and verification of test cases and scripts"
    },
    {
      "id": 11,
      "question": "What allows the Test Case Development Phase to proceed in parallel with Test Environment Setup? [cite: 178]",
      "options": [
        "They are independent activities",
        "Test Environment Setup is a critical aspect done alongside development",
        "The project manager mandates it",
        "Test cases do not require an environment"
      ],
      "correct_answer": "Test Environment Setup is a critical aspect done alongside development"
    },
    {
      "id": 12,
      "question": "What type of test is performed to check the readiness of the test environment? [cite: 180]",
      "options": [
        "Regression Test",
        "Smoke Test",
        "Stress Test",
        "Unit Test"
      ],
      "correct_answer": "Smoke Test"
    },
    {
      "id": 13,
      "question": "Which activity is part of the Test Execution Phase? [cite: 196]",
      "options": [
        "Mapping defects to test cases in RTM",
        "Selecting test tools",
        "Writing the Test Plan",
        "Defining acceptance criteria"
      ],
      "correct_answer": "Mapping defects to test cases in RTM"
    },
    {
      "id": 14,
      "question": "What is a deliverable of the Test Execution Phase? [cite: 203]",
      "options": [
        "Test Plan Document",
        "Defect Reports",
        "Requirements Document",
        "Hardware Checklist"
      ],
      "correct_answer": "Defect Reports"
    },
    {
      "id": 15,
      "question": "What is the goal of the Test Cycle Closure phase? [cite: 207-208]",
      "options": [
        "To start coding the next feature",
        "To remove process bottlenecks for future test cycles",
        "To fire underperforming employees",
        "To increase the project budget"
      ],
      "correct_answer": "To remove process bottlenecks for future test cycles"
    },
    {
      "id": 16,
      "question": "Which layer is at the base of the Test Automation Pyramid? [cite: 284]",
      "options": [
        "UI Tests",
        "Integration Tests",
        "Unit Tests",
        "Manual Tests"
      ],
      "correct_answer": "Unit Tests"
    },
    {
      "id": 17,
      "question": "According to the Pyramid Strategy, which tests should be the most numerous? [cite: 341, 401]",
      "options": [
        "UI Tests",
        "Integration Tests",
        "Unit Tests",
        "Manual Tests"
      ],
      "correct_answer": "Unit Tests"
    },
    {
      "id": 18,
      "question": "What characterizes Unit Tests? [cite: 285-286]",
      "options": [
        "They test the entire system flow",
        "They rely on external dependencies",
        "They test isolated units of code and are small in scope",
        "They require a User Interface"
      ],
      "correct_answer": "They test isolated units of code and are small in scope"
    },
    {
      "id": 19,
      "question": "What is the focus of Integration Testing? [cite: 313]",
      "options": [
        "Testing isolated units of code",
        "Testing through a user interface",
        "Testing how different components of the system work together",
        "Manual exploratory testing"
      ],
      "correct_answer": "Testing how different components of the system work together"
    },
    {
      "id": 20,
      "question": "Which tests are at the top of the Test Automation Pyramid? [cite: 337]",
      "options": [
        "Unit Tests",
        "Integration Tests",
        "UI and Exploratory Tests (End-to-End)",
        "Database Tests"
      ],
      "correct_answer": "UI and Exploratory Tests (End-to-End)"
    },
    {
      "id": 21,
      "question": "Which type of test has the highest maintenance cost and slowest execution time? [cite: 390, 402, 403]",
      "options": [
        "Unit Tests",
        "Integration Tests",
        "End-to-End (E2E) Tests",
        "Component Tests"
      ],
      "correct_answer": "End-to-End (E2E) Tests"
    },
    {
      "id": 22,
      "question": "When should a test case be automated? [cite: 270, 275]",
      "options": [
        "When it is performed only once",
        "When the requirements are unstable",
        "When the task is repetitive and time-consuming",
        "When it requires human intuition"
      ],
      "correct_answer": "When the task is repetitive and time-consuming"
    },
    {
      "id": 23,
      "question": "What is the 'Ice-Cream Cone Anti-Pattern'? [cite: 410, 414]",
      "options": [
        "A strategy where Unit Tests are the majority",
        "A strategy where most testing is done manually and the pyramid is inverted",
        "A strategy focused solely on security testing",
        "A strategy that ignores Integration testing"
      ],
      "correct_answer": "A strategy where most testing is done manually and the pyramid is inverted"
    },
    {
      "id": 24,
      "question": "In the Ice-Cream Cone pattern, what happens to the team? [cite: 416]",
      "options": [
        "They become more efficient",
        "They are stretched thin with upper-level tests",
        "They stop writing code",
        "They focus only on Unit Tests"
      ],
      "correct_answer": "They are stretched thin with upper-level tests"
    },
    {
      "id": 25,
      "question": "In the Agile Quadrant Strategy, what does Quadrant 1 (Q1) focus on? [cite: 435, 448]",
      "options": [
        "Business-facing tests that critique the product",
        "Technology-facing tests that support the team",
        "Business-facing tests that support the team",
        "Technology-facing tests that critique the product"
      ],
      "correct_answer": "Technology-facing tests that support the team"
    },
    {
      "id": 26,
      "question": "Which types of tests are included in Agile Quadrant 1 (Q1)? [cite: 449]",
      "options": [
        "Unit Tests and Component Tests",
        "Functional Tests and Prototypes",
        "UAT and Usability Testing",
        "Performance and Security Testing"
      ],
      "correct_answer": "Unit Tests and Component Tests"
    },
    {
      "id": 27,
      "question": "What is the focus of Agile Quadrant 2 (Q2)? [cite: 436, 455]",
      "options": [
        "Technology-facing tests that critique the product",
        "Business-facing tests that support the team",
        "Technology-facing tests that support the team",
        "Manual exploratory testing only"
      ],
      "correct_answer": "Business-facing tests that support the team"
    },
    {
      "id": 28,
      "question": "Which tools are commonly used in Agile Quadrant 2 (Q2)? [cite: 460]",
      "options": [
        "jMeter and LoadRunner",
        "Eclipse and IntelliJ Idea",
        "Cucumber and Selenium",
        "Simulators and Emulators"
      ],
      "correct_answer": "Cucumber and Selenium"
    },
    {
      "id": 29,
      "question": "What does Agile Quadrant 3 (Q3) involve? [cite: 462, 463]",
      "options": [
        "Automated Unit Testing",
        "Performance and Load Testing",
        "Evaluating the product via user experience and critical thinking",
        "Writing code for features"
      ],
      "correct_answer": "Evaluating the product via user experience and critical thinking"
    },
    {
      "id": 30,
      "question": "Which tests belong to Agile Quadrant 3 (Q3)? [cite: 462]",
      "options": [
        "Exploratory Testing and User Acceptance Testing (UAT)",
        "Unit Testing and API Testing",
        "Security and Stability Testing",
        "Functional and Story Tests"
      ],
      "correct_answer": "Exploratory Testing and User Acceptance Testing (UAT)"
    },
    {
      "id": 31,
      "question": "What is the focus of Agile Quadrant 4 (Q4)? [cite: 438, 466]",
      "options": [
        "Business-facing tests that support the team",
        "Technology-facing tests that critique the product",
        "Manual regression testing",
        "Prototyping"
      ],
      "correct_answer": "Technology-facing tests that critique the product"
    },
    {
      "id": 32,
      "question": "Which 'ility' tests are covered in Agile Quadrant 4 (Q4)? [cite: 468]",
      "options": [
        "Usability and Readability",
        "Stability, Scalability, and Maintainability",
        "Traceability and Visibility",
        "Agility and Flexibility"
      ],
      "correct_answer": "Stability, Scalability, and Maintainability"
    },
    {
      "id": 33,
      "question": "In the Honeycomb Strategy, what are the two main optimization goals? [cite: 474, 482]",
      "options": [
        "Optimize for Speed and Cost",
        "Optimize for Coverage and Optimize for Value",
        "Optimize for Hardware and Software",
        "Optimize for Developers and Managers"
      ],
      "correct_answer": "Optimize for Coverage and Optimize for Value"
    },
    {
      "id": 34,
      "question": "Which testing type typically uses tools like jMeter and LoadRunner? [cite: 469]",
      "options": [
        "Q1 (Unit Testing)",
        "Q2 (Functional Testing)",
        "Q3 (UAT)",
        "Q4 (Performance & Load Testing)"
      ],
      "correct_answer": "Q4 (Performance & Load Testing)"
    },
    {
      "id": 35,
      "question": "What is the primary role of automation in testing? [cite: 282]",
      "options": [
        "To replace manual testers completely",
        "To increase the cost of the project",
        "To enhance testing and help testers do their job",
        "To make the code look better"
      ],
      "correct_answer": "To enhance testing and help testers do their job"
    }
  ]
},
  3: {
  "subject": "Software Quality Assurance and Testing - Lecture 3",
  "topic": "UI Test Automation with Selenium WebDriver",
  "questions": [
    {
      "id": 1,
      "question": "Which of the following best describes Selenium? [cite: 492]",
      "options": [
        "A database management tool",
        "A powerful tool for controlling web browsers through programs",
        "A tool for testing Windows desktop applications only",
        "A programming language for web development"
      ],
      "correct_answer": "A powerful tool for controlling web browsers through programs"
    },
    {
      "id": 2,
      "question": "Which of the following is NOT one of the four major components of Selenium? [cite: 494]",
      "options": [
        "Selenium IDE",
        "Selenium RC",
        "Selenium Server",
        "Selenium GRID"
      ],
      "correct_answer": "Selenium Server"
    },
    {
      "id": 3,
      "question": "What is Selenium IDE primarily used for? [cite: 499]",
      "options": [
        "Running tests on remote machines",
        "Writing complex automation scripts in Java",
        "Recording, editing, and debugging functional tests",
        "Managing browser drivers"
      ],
      "correct_answer": "Recording, editing, and debugging functional tests"
    },
    {
      "id": 4,
      "question": "Which Selenium component acts as a server that accepts commands via HTTP and is now considered legacy? [cite: 500]",
      "options": [
        "Selenium WebDriver",
        "Selenium RC (Remote Control)",
        "Selenium Grid",
        "Selenium IDE"
      ],
      "correct_answer": "Selenium RC (Remote Control)"
    },
    {
      "id": 5,
      "question": "How does Selenium WebDriver differ from Selenium RC? [cite: 502-503]",
      "options": [
        "It uses a JavaScript injection technique",
        "It sends commands directly to the browser via a browser-specific driver",
        "It requires a server to be running before execution",
        "It only supports Firefox"
      ],
      "correct_answer": "It sends commands directly to the browser via a browser-specific driver"
    },
    {
      "id": 6,
      "question": "What is the function of Selenium Grid? [cite: 505]",
      "options": [
        "To record user actions",
        "To allow tests to use web browser instances running on remote machines",
        "To compile Java code",
        "To generate test reports"
      ],
      "correct_answer": "To allow tests to use web browser instances running on remote machines"
    },
    {
      "id": 7,
      "question": "In the Selenium WebDriver Architecture, what protocol is used for communication between language bindings and browser drivers? [cite: 514, 516]",
      "options": [
        "TCP/IP",
        "JSON Wire Protocol over HTTP",
        "FTP",
        "SOAP"
      ],
      "correct_answer": "JSON Wire Protocol over HTTP"
    },
    {
      "id": 8,
      "question": "Which interface is at the top of the Selenium Browser Driver Class Hierarchy? [cite: 518]",
      "options": [
        "WebDriver",
        "RemoteWebDriver",
        "SearchContext",
        "ChromeDriver"
      ],
      "correct_answer": "SearchContext"
    },
    {
      "id": 9,
      "question": "Which of the following is an example of a headless browser supported by Selenium? [cite: 525]",
      "options": [
        "Google Chrome",
        "Mozilla Firefox",
        "HTMLUnit browser",
        "Opera"
      ],
      "correct_answer": "HTMLUnit browser"
    },
    {
      "id": 10,
      "question": "Which of the following is a major advantage of Selenium WebDriver regarding test execution time? [cite: 530]",
      "options": [
        "It runs on a supercomputer",
        "It supports parallel test execution",
        "It skips validation steps",
        "It uses a faster internet connection"
      ],
      "correct_answer": "It supports parallel test execution"
    },
    {
      "id": 11,
      "question": "Does Selenium WebDriver require a server to be started before executing test scripts? [cite: 533]",
      "options": [
        "Yes, always",
        "No, it is not required",
        "Only for Chrome",
        "Only for IE"
      ],
      "correct_answer": "No, it is not required"
    },
    {
      "id": 12,
      "question": "Which of the following is a limitation of Selenium WebDriver? [cite: 536-537]",
      "options": [
        "It cannot test web-based applications",
        "It cannot test Windows-based desktop applications",
        "It does not support Java",
        "It requires a paid license"
      ],
      "correct_answer": "It cannot test Windows-based desktop applications"
    },
    {
      "id": 13,
      "question": "What third-party tool is suggested for testing Windows-based applications alongside Selenium? [cite: 538]",
      "options": [
        "Sikuli",
        "AutoIt",
        "TestNG",
        "JUnit"
      ],
      "correct_answer": "AutoIt"
    },
    {
      "id": 14,
      "question": "How can image-based testing be performed with Selenium? [cite: 540]",
      "options": [
        "It is built-in to WebDriver",
        "By integrating Selenium with Sikuli",
        "By using XPath",
        "By using CSS Selectors"
      ],
      "correct_answer": "By integrating Selenium with Sikuli"
    },
    {
      "id": 15,
      "question": "Does Selenium WebDriver automatically generate test result files? [cite: 541]",
      "options": [
        "Yes, in PDF format",
        "Yes, in HTML format",
        "No, it needs integration with frameworks like TestNG or JUnit",
        "Yes, but only in the paid version"
      ],
      "correct_answer": "No, it needs integration with frameworks like TestNG or JUnit"
    },
    {
      "id": 16,
      "question": "Which elements cannot be automated using Selenium WebDriver? [cite: 543]",
      "options": [
        "Drop-down lists",
        "Radio buttons",
        "CAPTCHA, reCAPTCHA, and bar-code readers",
        "Checkboxes"
      ],
      "correct_answer": "CAPTCHA, reCAPTCHA, and bar-code readers"
    },
    {
      "id": 17,
      "question": "What is the recommended way to manage browser drivers automatically in the code? [cite: 579-581]",
      "options": [
        "Manually downloading executables",
        "Using WebDriverManager",
        "Using Selenium IDE",
        "Using Windows Update"
      ],
      "correct_answer": "Using WebDriverManager"
    },
    {
      "id": 18,
      "question": "Which locator strategies locate elements whose visible text matches the search value? [cite: 596]",
      "options": [
        "id and class name",
        "link text and partial link text",
        "css selector and xpath",
        "tag name and name"
      ],
      "correct_answer": "link text and partial link text"
    },
    {
      "id": 19,
      "question": "What is a key difference between XPath and CSS Selectors regarding traversal flow? [cite: 598-599]",
      "options": [
        "CSS allows bidirectional flow",
        "XPath allows bidirectional flow (parent to child and child to parent)",
        "Both allow only one directional flow",
        "XPath allows only parent to child flow"
      ],
      "correct_answer": "XPath allows bidirectional flow (parent to child and child to parent)"
    },
    {
      "id": 20,
      "question": "Which is generally faster in terms of performance? [cite: 600]",
      "options": [
        "XPath",
        "CSS Selector",
        "Both are equal",
        "It depends on the browser version"
      ],
      "correct_answer": "CSS Selector"
    },
    {
      "id": 21,
      "question": "Which feature does XPath have that CSS Selectors do not? [cite: 601-602]",
      "options": [
        "Identification by class name",
        "Identification by ID",
        "Identification by visible text using text() function",
        "Traversal from parent to child"
      ],
      "correct_answer": "Identification by visible text using text() function"
    },
    {
      "id": 22,
      "question": "In a customized CSS selector, what symbol represents the 'id' attribute? [cite: 604]",
      "options": [
        ". (dot)",
        "# (hash)",
        "@ (at symbol)",
        "// (double slash)"
      ],
      "correct_answer": "# (hash)"
    },
    {
      "id": 23,
      "question": "In a customized CSS selector, what symbol represents the 'class' attribute? [cite: 605]",
      "options": [
        ". (dot)",
        "# (hash)",
        "$ (dollar)",
        "* (asterisk)"
      ],
      "correct_answer": ". (dot)"
    },
    {
      "id": 24,
      "question": "Which of the following is a valid XPath expression format? [cite: 607]",
      "options": [
        "tagname[attribute = 'value']",
        "//tagname[@attribute = 'value']",
        "#tagname.attribute",
        "tagname > attribute"
      ],
      "correct_answer": "//tagname[@attribute = 'value']"
    },
    {
      "id": 25,
      "question": "What are the two types of XPath? [cite: 608]",
      "options": [
        "Static and Dynamic",
        "Absolute and Relative",
        "Internal and External",
        "Fast and Slow"
      ],
      "correct_answer": "Absolute and Relative"
    },
    {
      "id": 26,
      "question": "What characterizes a Dynamic Table in HTML? [cite: 613]",
      "options": [
        "Data is static and fixed",
        "Number of rows and columns are NOT fixed",
        "It contains images only",
        "It cannot be automated"
      ],
      "correct_answer": "Number of rows and columns are NOT fixed"
    },
    {
      "id": 27,
      "question": "Which class is used to launch the Chrome browser in Selenium WebDriver? [cite: 589]",
      "options": [
        "FirefoxDriver",
        "EdgeDriver",
        "ChromeDriver",
        "SafariDriver"
      ],
      "correct_answer": "ChromeDriver"
    },
    {
      "id": 28,
      "question": "What method is used to navigate to a specific URL in WebDriver? [cite: 595]",
      "options": [
        "driver.navigate()",
        "driver.goTo()",
        "driver.get(\"url\")",
        "driver.open(\"url\")"
      ],
      "correct_answer": "driver.get(\"url\")"
    },
    {
      "id": 29,
      "question": "In the Selenium Driver class hierarchy, RemoteWebDriver implements which interface? [cite: 518]",
      "options": [
        "SearchContext",
        "ChromeDriver",
        "WebDriver",
        "JavaBinding"
      ],
      "correct_answer": "WebDriver"
    },
    {
      "id": 30,
      "question": "Which tool enables the integration of Selenium with existing unit test frameworks to create automated tests? [cite: 501]",
      "options": [
        "Selenium IDE",
        "Selenium RC",
        "Selenium Grid",
        "Apache POI"
      ],
      "correct_answer": "Selenium RC"
    },
    {
      "id": 31,
      "question": "What file is used in Maven to manage dependencies like `selenium-java`? [cite: 546]",
      "options": [
        "build.gradle",
        "pom.xml",
        "selenium.config",
        "package.json"
      ],
      "correct_answer": "pom.xml"
    },
    {
      "id": 32,
      "question": "Which locator strategy locates elements matching a CSS selector? [cite: 596]",
      "options": [
        "xpath",
        "class name",
        "css selector",
        "tag name"
      ],
      "correct_answer": "css selector"
    }
  ]
},
  4: {
  "subject": "Software Quality Assurance and Testing - Lecture 4",
  "topic": "Advanced Selenium WebDriver",
  "questions": [
    {
      "id": 1,
      "question": "What is the primary purpose of Wait Commands in Selenium?",
      "options": [
        "To pause the test for manual intervention",
        "To observe and troubleshoot issues due to time lag and prevent ElementNotVisibleException",
        "To slow down the internet connection",
        "To wait for the developer to fix the code"
      ],
      "correct_answer": "To observe and troubleshoot issues due to time lag and prevent ElementNotVisibleException"
    },
    {
      "id": 2,
      "question": "Which exception is commonly encountered when a web element is delayed in loading?",
      "options": [
        "NullPointerException",
        "ElementNotVisibleException",
        "TimeOutException",
        "ClassCastException"
      ],
      "correct_answer": "ElementNotVisibleException"
    },
    {
      "id": 3,
      "question": "What does Implicit Wait do?",
      "options": [
        "It waits for a specific condition to be met",
        "It directs the WebDriver to wait for a certain measure of time before throwing an exception",
        "It waits only for the first element found",
        "It pauses the execution indefinitely"
      ],
      "correct_answer": "It directs the WebDriver to wait for a certain measure of time before throwing an exception"
    },
    {
      "id": 4,
      "question": "What is the scope of an Implicit Wait once set? [cite: 655]",
      "options": [
        "It applies only to the next line of code",
        "It stays in place for the entire duration the browser is open",
        "It applies only to button elements",
        "It must be reset after every command"
      ],
      "correct_answer": "It stays in place for the entire duration the browser is open"
    },
    {
      "id": 5,
      "question": "What is the default time setting for Implicit Wait? [cite: 656]",
      "options": [
        "5 seconds",
        "10 seconds",
        "0",
        "30 seconds"
      ],
      "correct_answer": "0"
    },
    {
      "id": 6,
      "question": "When is Explicit Wait most effective? [cite: 664, 726]",
      "options": [
        "When elements take a long time to load or require specific conditions",
        "When you want to apply a wait to all elements globally",
        "When testing static pages with no Ajax",
        "When you don't know the element ID"
      ],
      "correct_answer": "When elements take a long time to load or require specific conditions"
    },
    {
      "id": 7,
      "question": "Which class is used to declare an Explicit Wait?",
      "options": [
        "FluentWait",
        "ImplicitWait",
        "WebDriverWait",
        "SystemWait"
      ],
      "correct_answer": "WebDriverWait"
    },
    {
      "id": 8,
      "question": "What must be used in conjunction with Explicit Wait to define the wait criteria? [cite: 670]",
      "options": [
        "TimeOuts",
        "ExpectedConditions",
        "SystemProperties",
        "ThreadSleep"
      ],
      "correct_answer": "ExpectedConditions"
    },
    {
      "id": 9,
      "question": "Which of the following is NOT a valid ExpectedCondition? [cite: 673-682]",
      "options": [
        "alertIsPresent()",
        "elementToBeClickable()",
        "elementColorToBe()",
        "visibilityOfElementLocated()"
      ],
      "correct_answer": "elementColorToBe()"
    },
    {
      "id": 10,
      "question": "What is a key difference between Implicit and Explicit waits? [cite: 726]",
      "options": [
        "Implicit wait applies to all elements; Explicit wait applies to specific elements",
        "Explicit wait is faster than Implicit wait",
        "Implicit wait requires ExpectedConditions; Explicit wait does not",
        "They are exactly the same"
      ],
      "correct_answer": "Implicit wait applies to all elements; Explicit wait applies to specific elements"
    },
    {
      "id": 11,
      "question": "What characterizes a Fluent Wait? [cite: 700-701]",
      "options": [
        "It waits indefinitely until the browser closes",
        "It checks for a web element repeatedly at regular intervals until timeout or object found",
        "It is used only for checking page titles",
        "It cannot handle Ajax applications"
      ],
      "correct_answer": "It checks for a web element repeatedly at regular intervals until timeout or object found"
    },
    {
      "id": 12,
      "question": "What is another name for Fluent Waits? [cite: 706]",
      "options": [
        "Dumb waits",
        "Long waits",
        "Smart waits",
        "Quick waits"
      ],
      "correct_answer": "Smart waits"
    },
    {
      "id": 13,
      "question": "What does Page Object Model (POM) create? [cite: 728]",
      "options": [
        "An Object Repository for web UI elements",
        "A new database for the application",
        "A graphical user interface for the test runner",
        "A report of test execution"
      ],
      "correct_answer": "An Object Repository for web UI elements"
    },
    {
      "id": 14,
      "question": "What is a major advantage of using POM? [cite: 729]",
      "options": [
        "It increases code duplication",
        "It reduces code duplication and improves test maintenance",
        "It eliminates the need for Java",
        "It makes tests run slower"
      ],
      "correct_answer": "It reduces code duplication and improves test maintenance"
    },
    {
      "id": 15,
      "question": "In POM, what should correspond to each web page in the application? [cite: 730]",
      "options": [
        "A database table",
        "A Page Class",
        "A separate test project",
        "A CSS file"
      ],
      "correct_answer": "A Page Class"
    },
    {
      "id": 16,
      "question": "What is Page Factory in Selenium? [cite: 742]",
      "options": [
        "A third-party tool for generating reports",
        "An inbuilt, optimized Page Object Model framework concept",
        "A factory that produces Selenium code",
        "A deprecated feature"
      ],
      "correct_answer": "An inbuilt, optimized Page Object Model framework concept"
    },
    {
      "id": 17,
      "question": "Which annotation is used in Page Factory to find WebElements? [cite: 746]",
      "options": [
        "@SearchBy",
        "@Locate",
        "@FindBy",
        "@GetElement"
      ],
      "correct_answer": "@FindBy"
    },
    {
      "id": 18,
      "question": "Which method is used to initialize web elements in Page Factory? [cite: 747]",
      "options": [
        "startElements",
        "initElements",
        "createPage",
        "loadObjects"
      ],
      "correct_answer": "initElements"
    },
    {
      "id": 19,
      "question": "What is the Actions class used for in Selenium? [cite: 809]",
      "options": [
        "Handling database transactions",
        "Handling keyboard and mouse events",
        "Managing window alerts",
        "Taking screenshots"
      ],
      "correct_answer": "Handling keyboard and mouse events"
    },
    {
      "id": 20,
      "question": "Which method performs a right-click action? [cite: 822]",
      "options": [
        "rightClick()",
        "doubleClick()",
        "contextClick()",
        "clickAndHold()"
      ],
      "correct_answer": "contextClick()"
    },
    {
      "id": 21,
      "question": "Which Actions class method drags an element from one point and drops it to another? [cite: 820]",
      "options": [
        "moveAndDrop()",
        "dragAndDrop()",
        "clickAndDrag()",
        "shiftElement()"
      ],
      "correct_answer": "dragAndDrop()"
    },
    {
      "id": 22,
      "question": "Which method shifts the mouse pointer to the center of an element? [cite: 821]",
      "options": [
        "mouseHover()",
        "moveToElement()",
        "pointTo()",
        "focus()"
      ],
      "correct_answer": "moveToElement()"
    },
    {
      "id": 23,
      "question": "What is the syntax to invoke an Action class? [cite: 814]",
      "options": [
        "Actions action = new Actions(driver);",
        "Actions action = new Actions();",
        "WebDriver action = new Actions();",
        "Action action = driver.getAction();"
      ],
      "correct_answer": "Actions action = new Actions(driver);"
    },
    {
      "id": 24,
      "question": "The Select class in Selenium is used to interact with which HTML tag? [cite: 828]",
      "options": [
        "<input>",
        "<div>",
        "<select>",
        "<table>"
      ],
      "correct_answer": "<select>"
    },
    {
      "id": 25,
      "question": "Which method selects an option based on the text displayed to the user? [cite: 834]",
      "options": [
        "selectByIndex()",
        "selectByValue()",
        "selectByVisibleText()",
        "selectByText()"
      ],
      "correct_answer": "selectByVisibleText()"
    },
    {
      "id": 26,
      "question": "How does `selectByIndex` work? [cite: 843]",
      "options": [
        "It selects an option using its unique ID",
        "It selects an option using the integer index number",
        "It selects an option using the value attribute",
        "It selects the first available option"
      ],
      "correct_answer": "It selects an option using the integer index number"
    },
    {
      "id": 27,
      "question": "What does the `getOptions()` method return? [cite: 859]",
      "options": [
        "A single String",
        "A List of WebElements",
        "An integer count",
        "A boolean value"
      ],
      "correct_answer": "A List of WebElements"
    },
    {
      "id": 28,
      "question": "What is an iFrame? [cite: 867]",
      "options": [
        "A pop-up window",
        "A new browser tab",
        "An inline frame embedded in another web page",
        "A navigation bar"
      ],
      "correct_answer": "An inline frame embedded in another web page"
    },
    {
      "id": 29,
      "question": "Which of the following is NOT a valid way to switch to an iFrame? [cite: 878-881]",
      "options": [
        "By Index",
        "By Name or ID",
        "By Web Element",
        "By Page Title"
      ],
      "correct_answer": "By Page Title"
    },
    {
      "id": 30,
      "question": "What is the index of the first iFrame on a page? [cite: 884]",
      "options": [
        "1",
        "0",
        "-1",
        "100"
      ],
      "correct_answer": "0"
    },
    {
      "id": 31,
      "question": "How can you manually identify an iFrame on a web page? [cite: 871]",
      "options": [
        "Right click and look for 'This Frame' option",
        "Press Ctrl+F5",
        "Look for the <form> tag",
        "Click on the address bar"
      ],
      "correct_answer": "Right click and look for 'This Frame' option"
    },
    {
      "id": 32,
      "question": "Which command is used to perform a key release action? [cite: 825]",
      "options": [
        "keyDown()",
        "keyPress()",
        "keyUp()",
        "releaseKey()"
      ],
      "correct_answer": "keyUp()"
    },
    {
      "id": 33,
      "question": "Which Selenium class provides keys like `Keys.SHIFT` or `Keys.ARROW_UP`? [cite: 893-900]",
      "options": [
        "Keyboard",
        "Input",
        "Buttons",
        "Keys"
      ],
      "correct_answer": "Keys"
    }
  ]
},
  5: {
  "subject": "Software Quality Assurance and Testing - Lecture 5",
  "topic": "TestNG Framework",
  "questions": [
    {
      "id": 1,
      "question": "What does TestNG stand for?",
      "options": [
        "Test New Generation",
        "Testing New Guide",
        "Test Next Generation",
        "Technical Next Generation"
      ],
      "correct_answer": "Test Next Generation"
    },
    {
      "id": 2,
      "question": "Which framework inspired TestNG?",
      "options": [
        "NUnit",
        "JUnit",
        "PyTest",
        "Mocha"
      ],
      "correct_answer": "JUnit"
    },
    {
      "id": 3,
      "question": "Which of the following is NOT a feature of TestNG? [cite: 2004-2006]",
      "options": [
        "Grouping and sequencing",
        "Detailed HTML reports",
        "Built-in browser driver management",
        "Parametrization"
      ],
      "correct_answer": "Built-in browser driver management"
    },
    {
      "id": 4,
      "question": "Which annotation runs before every test method?",
      "options": [
        "@BeforeClass",
        "@BeforeTest",
        "@BeforeMethod",
        "@BeforeSuite"
      ],
      "correct_answer": "@BeforeMethod"
    },
    {
      "id": 5,
      "question": "Which annotation runs once before all tests in a specific suite?",
      "options": [
        "@BeforeClass",
        "@BeforeTest",
        "@BeforeMethod",
        "@BeforeSuite"
      ],
      "correct_answer": "@BeforeSuite"
    },
    {
      "id": 6,
      "question": "What does the `@Test(enabled = false)` attribute do? [cite: 2043]",
      "options": [
        "It prioritizes the test",
        "It skips the test execution",
        "It runs the test multiple times",
        "It marks the test as failed"
      ],
      "correct_answer": "It skips the test execution"
    },
    {
      "id": 7,
      "question": "Which attribute is used to run a test method multiple times? [cite: 2043]",
      "options": [
        "loopCount",
        "invocationCount",
        "repeat",
        "threadPoolSize"
      ],
      "correct_answer": "invocationCount"
    },
    {
      "id": 8,
      "question": "What is the purpose of the `priority` attribute in `@Test`? [cite: 2043]",
      "options": [
        "To define the severity of the defect",
        "To determine the order of execution (lower priorities run first)",
        "To set the timeout for the test",
        "To group tests together"
      ],
      "correct_answer": "To determine the order of execution (lower priorities run first)"
    },
    {
      "id": 9,
      "question": "Where are the default TestNG reports generated? [cite: 2049]",
      "options": [
        "In the `target` folder",
        "In the `src` folder",
        "In the `test-output` folder",
        "In the `logs` folder"
      ],
      "correct_answer": "In the `test-output` folder"
    },
    {
      "id": 10,
      "question": "Which file contains an index-like structure of different parts of the report (failed tests, passed tests, etc.)? [cite: 2056]",
      "options": [
        "emailable-report.html",
        "testng.xml",
        "index.html",
        "summary.html"
      ],
      "correct_answer": "index.html"
    },
    {
      "id": 11,
      "question": "Which built-in class in TestNG is used to log messages into the reports? [cite: 2062]",
      "options": [
        "Logger",
        "Reporter",
        "Printer",
        "Writer"
      ],
      "correct_answer": "Reporter"
    },
    {
      "id": 12,
      "question": "What is the correct syntax to log a message using the Reporter class?",
      "options": [
        "System.out.println(\"message\");",
        "Logger.log(\"message\");",
        "Reporter.log(\"message\");",
        "Reporter.print(\"message\");"
      ],
      "correct_answer": "Reporter.log(\"message\");"
    },
    {
      "id": 13,
      "question": "How are parameters passed to a TestNG test method usually defined? [cite: 2087]",
      "options": [
        "In a properties file",
        "In the TestNG XML file",
        "Hardcoded in the Java class",
        "In the command line"
      ],
      "correct_answer": "In the TestNG XML file"
    },
    {
      "id": 14,
      "question": "Which annotation is used to accept parameters in a test method? [cite: 2086]",
      "options": [
        "@DataProvider",
        "@Parameters",
        "@Args",
        "@Values"
      ],
      "correct_answer": "@Parameters"
    },
    {
      "id": 15,
      "question": "What is the purpose of Assertions in TestNG? [cite: 2090]",
      "options": [
        "To log messages to the console",
        "To verify that the expected result matches the actual result",
        "To run tests in parallel",
        "To generate HTML reports"
      ],
      "correct_answer": "To verify that the expected result matches the actual result"
    },
    {
      "id": 16,
      "question": "What happens if an assertion fails in a TestNG test case? [cite: 2091]",
      "options": [
        "The test continues to the next line",
        "The test is marked as passed",
        "The test is marked as failed overall",
        "The test is skipped"
      ],
      "correct_answer": "The test is marked as failed overall"
    },
    {
      "id": 17,
      "question": "Which of the following is an advantage of Parallel Testing? [cite: 2107]",
      "options": [
        "It increases the overall execution time",
        "It reduces the overall execution time",
        "It removes the need for assertions",
        "It guarantees sequential execution"
      ],
      "correct_answer": "It reduces the overall execution time"
    },
    {
      "id": 18,
      "question": "What is a disadvantage of Parallel Testing? [cite: 2110]",
      "options": [
        "It cannot be done with Selenium",
        "It fails on dependent modules that rely on each other",
        "It consumes less resources",
        "It is slower than serial execution"
      ],
      "correct_answer": "It fails on dependent modules that rely on each other"
    },
    {
      "id": 19,
      "question": "In the `testng.xml` file, which attribute is used to define the number of threads for parallel execution?",
      "options": [
        "thread-count",
        "parallel-count",
        "max-threads",
        "thread-pool"
      ],
      "correct_answer": "thread-count"
    },
    {
      "id": 20,
      "question": "What are Listeners in Selenium/TestNG? [cite: 2120]",
      "options": [
        "Background processes that slow down tests",
        "Interfaces that modify the default behavior of the system (logs, reports)",
        "Methods to listen to audio files",
        "Classes that replace the WebDriver"
      ],
      "correct_answer": "Interfaces that modify the default behavior of the system (logs, reports)"
    },
    {
      "id": 21,
      "question": "Which TestNG listener method is called on the failure of any test? [cite: 2133]",
      "options": [
        "onTestSuccess",
        "onTestFailure",
        "onTestSkipped",
        "onStart"
      ],
      "correct_answer": "onTestFailure"
    },
    {
      "id": 22,
      "question": "What is the main difference between WebDriver Listener and TestNG Listener? [cite: 2137]",
      "options": [
        "WebDriver Listener handles reporting; TestNG Listener handles events",
        "WebDriver Listener captures browser events; TestNG Listener generates reports/logs for test status",
        "They are the same thing",
        "TestNG Listener only works with JUnit"
      ],
      "correct_answer": "WebDriver Listener captures browser events; TestNG Listener generates reports/logs for test status"
    },
    {
      "id": 23,
      "question": "What is Log4j? [cite: 2140]",
      "options": [
        "A testing framework replacing TestNG",
        "A logging facade/implementation library",
        "A browser driver",
        "A build tool"
      ],
      "correct_answer": "A logging facade/implementation library"
    },
    {
      "id": 24,
      "question": "Which element is the root of a Log4j 2 configuration file? [cite: 2150]",
      "options": [
        "Appenders",
        "Configuration",
        "Loggers",
        "Root"
      ],
      "correct_answer": "Configuration"
    },
    {
      "id": 25,
      "question": "What does the `Appenders` element do in Log4j configuration? [cite: 2151]",
      "options": [
        "It defines the log level",
        "It configures where the logs are outputted (e.g., console, file)",
        "It starts the test execution",
        "It defines the test parameters"
      ],
      "correct_answer": "It configures where the logs are outputted (e.g., console, file)"
    },
    {
      "id": 26,
      "question": "What is ExtentReports? [cite: 2158]",
      "options": [
        "A closed-source tool for manual testing",
        "An open-source reporting library that generates interactive HTML reports",
        "A database for storing test results",
        "A plugin for Eclipse"
      ],
      "correct_answer": "An open-source reporting library that generates interactive HTML reports"
    },
    {
      "id": 27,
      "question": "Which file extension is used for the default TestNG emailable report? [cite: 2051]",
      "options": [
        ".xml",
        ".txt",
        ".html",
        ".json"
      ],
      "correct_answer": ".html"
    },
    {
      "id": 28,
      "question": "Which annotation is used for data-driven testing in TestNG? [cite: 2020]",
      "options": [
        "@Data",
        "@DataProvider",
        "@DataSource",
        "@Parameters"
      ],
      "correct_answer": "@DataProvider"
    },
    {
      "id": 29,
      "question": "What is the `threadPoolSize` attribute used for in `@Test`? [cite: 2043]",
      "options": [
        "To set the memory limit",
        "To specify the size of the thread pool for the method when invocationCount is used",
        "To count the number of threads in the CPU",
        "To define the priority of threads"
      ],
      "correct_answer": "To specify the size of the thread pool for the method when invocationCount is used"
    },
    {
      "id": 30,
      "question": "Which listener method is called when a test is skipped? [cite: 2134]",
      "options": [
        "onTestSuccess",
        "onTestFailure",
        "onTestSkipped",
        "onFinish"
      ],
      "correct_answer": "onTestSkipped"
    },
    {
      "id": 31,
      "question": "What is `EventFiringWebDriver` used for? [cite: 2126]",
      "options": [
        "To fire employees",
        "To implement the WebDriver interface and catch WebDriver events",
        "To start the browser in headless mode",
        "To run tests in parallel"
      ],
      "correct_answer": "To implement the WebDriver interface and catch WebDriver events"
    },
    {
      "id": 32,
      "question": "Which reporting class allows adding screenshots to the report? [cite: 2163]",
      "options": [
        "Reporter",
        "Logger",
        "ExtentTest",
        "Console"
      ],
      "correct_answer": "ExtentTest"
    },
    {
      "id": 33,
      "question": "What does `@BeforeGroups` do? [cite: 2036]",
      "options": [
        "Runs after all groups are finished",
        "Runs shortly before the first test method belonging to any of the specified groups",
        "Runs before every method in the group",
        "Runs only once per suite"
      ],
      "correct_answer": "Runs shortly before the first test method belonging to any of the specified groups"
    },
    {
      "id": 34,
      "question": "Which annotation guarantees a method runs after all test methods in the current class? [cite: 2040]",
      "options": [
        "@AfterMethod",
        "@AfterTest",
        "@AfterClass",
        "@AfterSuite"
      ],
      "correct_answer": "@AfterClass"
    },
    {
      "id": 35,
      "question": "What is the benefit of high-level logging using TestNG Reporter Log? [cite: 2080]",
      "options": [
        "It logs every single step and variable",
        "It logs only critical steps that the tester wants to see",
        "It is slower than Log4j",
        "It requires complex configuration"
      ],
      "correct_answer": "It logs only critical steps that the tester wants to see"
    }
  ]
},
  6: {
    "subject": "Software Quality Assurance and Testing - Lecture 6",
    "topic": "Cross-browser Testing & Data/Keyword Driven Frameworks",
    "questions": [
      {
        "id": 1,
        "question": "What is Cross-browser testing?",
        "options": [
          "A process to check if the application works on different hardware only",
          "A quality assurance process to check if a web-based application works as intended across multiple browsers and devices",
          "A method to test internet connection speed",
          "A technique to validate database consistency"
        ],
        "correct_answer": "A quality assurance process to check if a web-based application works as intended across multiple browsers and devices"
      },
      {
        "id": 2,
        "question": "Why is cross-browser testing important?",
        "options": [
          "Because all browsers render HTML, CSS, and JavaScript in the exact same way",
          "To ensure the website looks and behaves as intended on different browsers since vendors have unique interpretations of Web Standards",
          "To increase the website loading speed",
          "To reduce the cost of hosting"
        ],
        "correct_answer": "To ensure the website looks and behaves as intended on different browsers since vendors have unique interpretations of Web Standards"
      },
      {
        "id": 3,
        "question": "Which of the following is NOT typically part of a Cross-Browser Testing Checklist? [cite: 31-44]",
        "options": [
          "CSS and HTML validation",
          "Page validations with JavaScript enabled/disabled",
          "Database schema validation",
          "Page layout in different resolutions"
        ],
        "correct_answer": "Database schema validation"
      },
      {
        "id": 4,
        "question": "What is BrowserStack?",
        "options": [
          "A local server for testing",
          "A cloud-based testing tool for cross-browser testing of web and mobile applications",
          "A browser extension for blocking ads",
          "A database management tool"
        ],
        "correct_answer": "A cloud-based testing tool for cross-browser testing of web and mobile applications"
      },
      {
        "id": 5,
        "question": "Which command is used to set the BrowserStack username environment variable on Windows? [cite: 60]",
        "options": [
          "export BROWSERSTACK_USERNAME",
          "setx BROWSERSTACK_USERNAME \"value\"",
          "echo BROWSERSTACK_USERNAME",
          "env set BROWSERSTACK_USERNAME"
        ],
        "correct_answer": "setx BROWSERSTACK_USERNAME \"value\""
      },
      {
        "id": 6,
        "question": "What is a Data Driven Framework?",
        "options": [
          "A method where data is hardcoded in the test script",
          "A method of separating data sets from the test case to easily modify data without changing code",
          "A framework that only uses databases",
          "A manual testing process"
        ],
        "correct_answer": "A method of separating data sets from the test case to easily modify data without changing code"
      },
      {
        "id": 7,
        "question": "From which external sources does Data Driven Testing typically fetch data?",
        "options": [
          "Only from SQL databases",
          "Excel, .csv, .xml files, or database tables",
          "Word documents only",
          "The browser cache"
        ],
        "correct_answer": "Excel, .csv, .xml files, or database tables"
      },
      {
        "id": 8,
        "question": "What is a major advantage of Data-Driven Testing (DDT) regarding regression testing?",
        "options": [
          "It eliminates the need for regression testing",
          "It allows regression tests to run from end-to-end workflow for multiple data sets, increasing efficiency",
          "It makes regression testing slower",
          "It requires manual intervention for every data set"
        ],
        "correct_answer": "It allows regression tests to run from end-to-end workflow for multiple data sets, increasing efficiency"
      },
      {
        "id": 9,
        "question": "How does DDT enable clarity in testing? [cite: 104-105]",
        "options": [
          "By combining test scripts and data into one file",
          "By allowing clear logical separation of test scripts from the test data",
          "By writing all tests in a single long script",
          "By removing the need for documentation"
        ],
        "correct_answer": "By allowing clear logical separation of test scripts from the test data"
      },
      {
        "id": 10,
        "question": "Which of the following is a disadvantage of Data-Driven Testing?",
        "options": [
          "It is impossible to debug",
          "The test code written to read data can be slightly complicated",
          "It cannot handle positive and negative data",
          "It decreases documentation requirements"
        ],
        "correct_answer": "The test code written to read data can be slightly complicated"
      },
      {
        "id": 11,
        "question": "Why can debugging be tough for a tester in a DDT environment? [cite: 116-117]",
        "options": [
          "Because tools don't support debugging",
          "Due to potential lack of exposure to programming languages to identify logical errors",
          "Because there are no error messages",
          "Because the data is encrypted"
        ],
        "correct_answer": "Due to potential lack of exposure to programming languages to identify logical errors"
      },
      {
        "id": 12,
        "question": "What is a best practice regarding 'Testing with Positive and Negative Data' in DDT?",
        "options": [
          "Only test positive scenarios to save time",
          "Test cases should cover both positives and negatives (exceptions) that a system should handle",
          "Only test negative scenarios",
          "Ignore data validation"
        ],
        "correct_answer": "Test cases should cover both positives and negatives (exceptions) that a system should handle"
      },
      {
        "id": 13,
        "question": "Why is it important to avoid manual interventions (Checkpoints) in automated scripts? [cite: 130-131]",
        "options": [
          "Manual triggers are the most efficient way to test",
          "Because a manual trigger is never an efficient way to test a navigational flow",
          "It increases the cost of testing tools",
          "It makes the script too short"
        ],
        "correct_answer": "Because a manual trigger is never an efficient way to test a navigational flow"
      },
      {
        "id": 14,
        "question": "How is test data typically stored in Data-Driven Testing?",
        "options": [
          "In a columnar distribution or table structure mimicking a spreadsheet",
          "In unstructured text files",
          "Inside the Java class file only",
          "In the browser's local storage"
        ],
        "correct_answer": "In a columnar distribution or table structure mimicking a spreadsheet"
      },
      {
        "id": 15,
        "question": "What is Keyword Driven Test Automation also known as?",
        "options": [
          "Object Oriented Testing",
          "Table Driven Test Automation or Action Word Based Testing",
          "Scriptless Testing",
          "Manual Testing"
        ],
        "correct_answer": "Table Driven Test Automation or Action Word Based Testing"
      },
      {
        "id": 16,
        "question": "In Keyword Driven Development, what does 'Action on the Test Object' refer to?",
        "options": [
          "The name of the web page",
          "An action item performed on the object (e.g., Click, Open Browser)",
          "The test result",
          "The developer's name"
        ],
        "correct_answer": "An action item performed on the object (e.g., Click, Open Browser)"
      },
      {
        "id": 17,
        "question": "What is the purpose of the 'Object Repository' property file in KDT resources?",
        "options": [
          "To store the test results",
          "To store the html elements of the web application",
          "To store the list of keywords",
          "To store the user passwords"
        ],
        "correct_answer": "To store the html elements of the web application"
      },
      {
        "id": 18,
        "question": "What is a 'Keyword Function Library' in a Keyword Driven Framework?",
        "options": [
          "A library of books about testing",
          "A file maintained to call functions that mimic the working of an action",
          "A database of user emails",
          "A list of all possible errors"
        ],
        "correct_answer": "A file maintained to call functions that mimic the working of an action"
      },
      {
        "id": 19,
        "question": "What is a key feature of Keyword-Driven Development regarding code?",
        "options": [
          "Code is never reused",
          "Reusable Code: Independent modules and their test files can be reused for similar future modules",
          "Code is extremely complex and hard to maintain",
          "It requires a specific programming language"
        ],
        "correct_answer": "Reusable Code: Independent modules and their test files can be reused for similar future modules"
      },
      {
        "id": 20,
        "question": "What is the main difference between Data Driven Testing (DDT) and Keyword Driven Testing (KDT)? [cite: 187-190]",
        "options": [
          "DDT uses keywords; KDT uses data files",
          "DDT runs scripts with different data variables; KDT uses keywords to represent action items to drive a script",
          "DDT is manual; KDT is automated",
          "There is no difference"
        ],
        "correct_answer": "DDT runs scripts with different data variables; KDT uses keywords to represent action items to drive a script"
      },
      {
        "id": 21,
        "question": "What is Hybrid-Driven Development (HDD)?",
        "options": [
          "A framework that only works on hybrid cars",
          "A combination of both Data-Driven and Keyword-Driven frameworks",
          "A mix of manual and automated testing",
          "A framework using both Java and Python"
        ],
        "correct_answer": "A combination of both Data-Driven and Keyword-Driven frameworks"
      },
      {
        "id": 22,
        "question": "In a Hybrid Driven Framework, how are keywords and test data handled?",
        "options": [
          "They are hardcoded in the script",
          "They are externalized (Keywords in Java class, data in properties/excel files)",
          "They are ignored",
          "They are stored in the browser"
        ],
        "correct_answer": "They are externalized (Keywords in Java class, data in properties/excel files)"
      },
      {
        "id": 23,
        "question": "What is Apache POI?",
        "options": [
          "A web server",
          "A popular Java API that allows programmers to create, modify, and display MS Office files",
          "A testing framework for PHP",
          "A database engine"
        ],
        "correct_answer": "A popular Java API that allows programmers to create, modify, and display MS Office files"
      },
      {
        "id": 24,
        "question": "Apache POI is developed by which organization?",
        "options": [
          "Microsoft",
          "Google",
          "Apache Software Foundation",
          "Oracle"
        ],
        "correct_answer": "Apache Software Foundation"
      },
      {
        "id": 25,
        "question": "What is Apache MetaModel?",
        "options": [
          "A model for fashion shows",
          "A library that encapsulates differences and enhances capabilities of different datastores",
          "A tool for creating metadata",
          "A replacement for SQL"
        ],
        "correct_answer": "A library that encapsulates differences and enhances capabilities of different datastores"
      },
      {
        "id": 26,
        "question": "Which of the following is a key concept of Apache MetaModel? [cite: 220-223]",
        "options": [
          "DataContext",
          "WebDriver",
          "PageFactory",
          "TestNG"
        ],
        "correct_answer": "DataContext"
      },
      {
        "id": 27,
        "question": "In Keyword Driven Testing, what does the 'Data Sheet' excel file store?",
        "options": [
          "The HTML elements",
          "The data value needed by the object to perform an action item",
          "The list of all employees",
          "The source code of the application"
        ],
        "correct_answer": "The data value needed by the object to perform an action item"
      },
      {
        "id": 28,
        "question": "What is the 'Execution Engine' in KDT?",
        "options": [
          "The physical server running the test",
          "A test script that drives the test from the Excel sheet, linking functions and properties",
          "The browser engine (like V8)",
          "The compiler"
        ],
        "correct_answer": "A test script that drives the test from the Excel sheet, linking functions and properties"
      },
      {
        "id": 29,
        "question": "DDT reduces duplication of what?",
        "options": [
          "Developers",
          "Test scripts, variables, and data inputs",
          "Bugs",
          "Hardware resources"
        ],
        "correct_answer": "Test scripts, variables, and data inputs"
      },
      {
        "id": 30,
        "question": "What does 'Driving Dynamic Assertions' mean in the context of DDT best practices?",
        "options": [
          "Removing all assertions",
          "Using automated scripts that can augment assertions to include what was previously tested in current lines",
          "Manually checking every result",
          "Using static text for validation"
        ],
        "correct_answer": "Using automated scripts that can augment assertions to include what was previously tested in current lines"
      }
    ]
  },
  7: {
    "subject": "Software Quality Assurance and Testing - Lecture 7",
    "topic": "Database Testing and Performance Testing",
    "questions": [
      {
        "id": 1,
        "question": "What is the primary definition of Database Testing?",
        "options": [
          "Testing the user interface design",
          "A type of software testing that checks the schema, tables, triggers, and data integrity of the database",
          "Testing the network speed",
          "Writing code for the application"
        ],
        "correct_answer": "A type of software testing that checks the schema, tables, triggers, and data integrity of the database"
      },
      {
        "id": 2,
        "question": "Which acronym describes the four properties of a database transaction ensuring data reliability?",
        "options": [
          "BASE",
          "CRUD",
          "ACID",
          "SOLID"
        ],
        "correct_answer": "ACID"
      },
      {
        "id": 3,
        "question": "In ACID properties, what does 'Atomicity' imply?",
        "options": [
          "Data remains consistent after transaction",
          "Transactions are isolated from each other",
          "All-or-Nothing: operations are either completed entirely or not at all",
          "Data is permanently saved"
        ],
        "correct_answer": "All-or-Nothing: operations are either completed entirely or not at all"
      },
      {
        "id": 4,
        "question": "Which ACID property ensures that the database remains consistent before and after the transaction?",
        "options": [
          "Atomicity",
          "Consistency",
          "Isolation",
          "Durability"
        ],
        "correct_answer": "Consistency"
      },
      {
        "id": 5,
        "question": "What does 'Isolation' mean in the context of database transactions?",
        "options": [
          "Data is stored in a separate server",
          "Multiple transactions can occur concurrently without impacting one another",
          "Transactions are executed one by one",
          "The system is isolated from the internet"
        ],
        "correct_answer": "Multiple transactions can occur concurrently without impacting one another"
      },
      {
        "id": 6,
        "question": "What is 'Data Mapping' in database testing focused on?",
        "options": [
          "Drawing diagrams of the database",
          "Verifying data that passes back and forth between the application and the backend database",
          "Mapping the network topology",
          "Creating new tables"
        ],
        "correct_answer": "Verifying data that passes back and forth between the application and the backend database"
      },
      {
        "id": 7,
        "question": "What is Structural Database Testing?",
        "options": [
          "Testing the user flow",
          "Validating elements inside the data repository (tables, stored procedures) not directly manipulated by end-users",
          "Testing the physical structure of the server",
          "Load testing the database"
        ],
        "correct_answer": "Validating elements inside the data repository (tables, stored procedures) not directly manipulated by end-users"
      },
      {
        "id": 8,
        "question": "Which type of testing validates whether the mapping formats of tables/views/columns are compatible with the user interface?",
        "options": [
          "Load Testing",
          "Schema Testing (Mapping Testing)",
          "Security Testing",
          "Stress Testing"
        ],
        "correct_answer": "Schema Testing (Mapping Testing)"
      },
      {
        "id": 9,
        "question": "Which of the following is checked during Stored Procedures Testing?",
        "options": [
          "Network latency",
          "Coding standard conventions and exception handling",
          "User interface colors",
          "Browser compatibility"
        ],
        "correct_answer": "Coding standard conventions and exception handling"
      },
      {
        "id": 10,
        "question": "What is the main goal of Functional Database Testing?",
        "options": [
          "To validate functional requirements from the end-user's perspective regarding database transactions",
          "To check the internal structure of stored procedures",
          "To test the maximum load the database can handle",
          "To migrate data to a new system"
        ],
        "correct_answer": "To validate functional requirements from the end-user's perspective regarding database transactions"
      },
      {
        "id": 11,
        "question": "Which of the following falls under Non-Functional Database Testing?",
        "options": [
          "Schema Testing",
          "Trigger Testing",
          "Load Testing and Stress Testing",
          "Data Mapping"
        ],
        "correct_answer": "Load Testing and Stress Testing"
      },
      {
        "id": 12,
        "question": "What does JDBC stand for?",
        "options": [
          "Java Data Base Connection",
          "Java Database Connectivity",
          "Joint Database Connector",
          "Java Data Business Connectivity"
        ],
        "correct_answer": "Java Database Connectivity"
      },
      {
        "id": 13,
        "question": "Which Java class is used to establish a connection in JDBC?",
        "options": [
          "Statement",
          "ResultSet",
          "DriverManager",
          "SQLException"
        ],
        "correct_answer": "DriverManager"
      },
      {
        "id": 14,
        "question": "What does ETL stand for?",
        "options": [
          "Extract Transform Load",
          "Enter Test Log",
          "Evaluate Test Loop",
          "Extract Transfer Link"
        ],
        "correct_answer": "Extract Transform Load"
      },
      {
        "id": 15,
        "question": "What is the purpose of the 'Transform' phase in ETL?",
        "options": [
          "To extract data from the source",
          "To load data into the data warehouse",
          "To apply functions to conform data to a standard schema (cleanse, resolve conflicts)",
          "To delete all data"
        ],
        "correct_answer": "To apply functions to conform data to a standard schema (cleanse, resolve conflicts)"
      },
      {
        "id": 16,
        "question": "In ETL testing, what is a 'Completeness Issue' check?",
        "options": [
          "Ensuring all expected data is loaded into the target table (comparing record counts)",
          "Checking for spelling errors",
          "Checking date formats",
          "Verifying the primary key"
        ],
        "correct_answer": "Ensuring all expected data is loaded into the target table (comparing record counts)"
      },
      {
        "id": 17,
        "question": "What is Database Migration Testing?",
        "options": [
          "Moving the server to a new room",
          "Verification process of migrating a legacy system to a new system ensuring data integrity",
          "Testing the speed of the database",
          "Creating a backup of the database"
        ],
        "correct_answer": "Verification process of migrating a legacy system to a new system ensuring data integrity"
      },
      {
        "id": 18,
        "question": "What is Performance Testing?",
        "options": [
          "Checking if the code compiles",
          "A non-functional technique determining stability, speed, and scalability under workload",
          "Testing the functionality of buttons",
          "Checking for syntax errors"
        ],
        "correct_answer": "A non-functional technique determining stability, speed, and scalability under workload"
      },
      {
        "id": 19,
        "question": "Which type of performance testing identifies the breaking point of an application under extreme workloads?",
        "options": [
          "Load Testing",
          "Stress Testing",
          "Endurance Testing",
          "Volume Testing"
        ],
        "correct_answer": "Stress Testing"
      },
      {
        "id": 20,
        "question": "What is the objective of Spike Testing?",
        "options": [
          "To test reaction to sudden large spikes in user load",
          "To test behavior over a long period",
          "To test with large volumes of data",
          "To test normal user load"
        ],
        "correct_answer": "To test reaction to sudden large spikes in user load"
      },
      {
        "id": 21,
        "question": "What is 'Bottlenecking' in performance testing?",
        "options": [
          "The shape of the network cable",
          "Obstructions in a system (coding errors or hardware) that degrade overall performance",
          "The startup time of the application",
          "The maximum memory available"
        ],
        "correct_answer": "Obstructions in a system (coding errors or hardware) that degrade overall performance"
      },
      {
        "id": 22,
        "question": "What is Apache JMeter used for?",
        "options": [
          "Writing Java code",
          "Load testing functional behavior and measuring performance",
          "Managing project documentation",
          "Editing images"
        ],
        "correct_answer": "Load testing functional behavior and measuring performance"
      },
      {
        "id": 23,
        "question": "Which of the following is a common performance bottleneck?",
        "options": [
          "CPU utilization",
          "User interface color",
          "Code comments",
          "Variable names"
        ],
        "correct_answer": "CPU utilization"
      },
      {
        "id": 24,
        "question": "What is the purpose of 'Endurance Testing'?",
        "options": [
          "To check performance under sudden spikes",
          "To ensure software handles expected load over a long period of time",
          "To check the maximum limit of the database",
          "To verify data integrity"
        ],
        "correct_answer": "To ensure software handles expected load over a long period of time"
      },
      {
        "id": 25,
        "question": "Which tool is described as a cloud-based load testing tool that empowers teams to record & instantly playback load tests?",
        "options": [
          "JMeter",
          "LoadNinja",
          "HP LoadRunner",
          "HeadSpin"
        ],
        "correct_answer": "LoadNinja"
      },
      {
        "id": 26,
        "question": "In JDBC, which interface is used to execute a SQL query?",
        "options": [
          "DriverManager",
          "Statement",
          "Connection",
          "Driver"
        ],
        "correct_answer": "Statement"
      },
      {
        "id": 27,
        "question": "What does 'Durability' in ACID guarantee?",
        "options": [
          "Transactions are fast",
          "Transactions are isolated",
          "Committed modifications are kept permanently even if the system fails",
          "All transactions are atomic"
        ],
        "correct_answer": "Committed modifications are kept permanently even if the system fails"
      },
      {
        "id": 28,
        "question": "What is Volume Testing?",
        "options": [
          "Testing the sound volume of the app",
          "Testing the system behavior when a large amount of data is populated in the database",
          "Testing the number of concurrent users",
          "Testing the network bandwidth"
        ],
        "correct_answer": "Testing the system behavior when a large amount of data is populated in the database"
      },
      {
        "id": 29,
        "question": "In the context of Login Security testing, what should be verified?",
        "options": [
          "That the logo is displayed correctly",
          "That sensitive data like passwords are encrypted and not stored as plain text",
          "That the login page loads in 1 millisecond",
          "That the username field is blue"
        ],
        "correct_answer": "That sensitive data like passwords are encrypted and not stored as plain text"
      },
      {
        "id": 30,
        "question": "Which Java class is used to connect to a MongoDB database in the provided example?",
        "options": [
          "DriverManager",
          "MongoClient",
          "MongoConnection",
          "DBConnector"
        ],
        "correct_answer": "MongoClient"
      },
      {
        "id": 31,
        "question": "What is 'Scalability Testing' aimed at?",
        "options": [
          "Determining the application's effectiveness in 'scaling up' to support increased user load",
          "Measuring the size of the application on disk",
          "Checking if the application works on mobile devices",
          "Validating the database schema"
        ],
        "correct_answer": "Determining the application's effectiveness in 'scaling up' to support increased user load"
      },
      {
        "id": 32,
        "question": "What implies that 'if any operation is performed on data, it should be performed entirely or not at all'?",
        "options": [
          "Consistency",
          "Isolation",
          "Atomicity",
          "Durability"
        ],
        "correct_answer": "Atomicity"
      },
      {
        "id": 33,
        "question": "What is the result of 'Poor scalability'?",
        "options": [
          "The application cannot handle the expected number of users",
          "The application crashes immediately",
          "The database is deleted",
          "The UI becomes unresponsive"
        ],
        "correct_answer": "The application cannot handle the expected number of users"
      },
      {
        "id": 34,
        "question": "Which check is part of Data Quality in ETL testing?",
        "options": [
          "Check if the server is on",
          "Duplicate Check (validating unique keys)",
          "Checking the color of the text",
          "Verifying the font size"
        ],
        "correct_answer": "Duplicate Check (validating unique keys)"
      }
    ]
  },
  8: {
    "subject": "Software Quality Assurance and Testing - Lecture 8",
    "topic": "Behavior Driven Development (BDD) Framework & Cucumber",
    "questions": [
      {
        "id": 1,
        "question": "What does BDD stand for?",
        "options": [
          "Basic Data Development",
          "Behavior Driven Development",
          "Business Driven Design",
          "Binary Data Decryption"
        ],
        "correct_answer": "Behavior Driven Development"
      },
      {
        "id": 2,
        "question": "What is the primary language used to write test scenarios in BDD to make them understandable for non-technical members?",
        "options": [
          "Java",
          "Python",
          "Simple text language (English)",
          "SQL"
        ],
        "correct_answer": "Simple text language (English)"
      },
      {
        "id": 3,
        "question": "BDD evolved from which earlier development process?",
        "options": [
          "Waterfall Model",
          "Test Driven Development (TDD)",
          "Rapid Application Development",
          "Spiral Model"
        ],
        "correct_answer": "Test Driven Development (TDD)"
      },
      {
        "id": 4,
        "question": "What is Cucumber?",
        "options": [
          "A database management tool",
          "A tool that supports Behavior Driven Development (BDD)",
          "A programming language like Java",
          "A continuous integration server"
        ],
        "correct_answer": "A tool that supports Behavior Driven Development (BDD)"
      },
      {
        "id": 5,
        "question": "Which language is used by Cucumber to define test cases?",
        "options": [
          "XML",
          "JSON",
          "Gherkin",
          "HTML"
        ],
        "correct_answer": "Gherkin"
      },
      {
        "id": 6,
        "question": "What is the file extension for a Cucumber feature file?",
        "options": [
          ".java",
          ".xml",
          ".feature",
          ".gherkin"
        ],
        "correct_answer": ".feature"
      },
      {
        "id": 7,
        "question": "Which Gherkin keyword is used to describe the initial context or precondition (e.g., 'User is on login page')?",
        "options": [
          "When",
          "Then",
          "Given",
          "But"
        ],
        "correct_answer": "Given"
      },
      {
        "id": 8,
        "question": "Which Gherkin keyword describes an event or an action (e.g., 'User enters password')?",
        "options": [
          "Given",
          "When",
          "Then",
          "Background"
        ],
        "correct_answer": "When"
      },
      {
        "id": 9,
        "question": "Which Gherkin keyword describes the expected outcome or result?",
        "options": [
          "Given",
          "When",
          "Then",
          "Feature"
        ],
        "correct_answer": "Then"
      },
      {
        "id": 10,
        "question": "What keyword is used to group multiple scenarios?",
        "options": [
          "Feature",
          "Background",
          "Scenario Outline",
          "Examples"
        ],
        "correct_answer": "Feature"
      },
      {
        "id": 11,
        "question": "Which keyword is used to execute the same scenario multiple times with different sets of data?",
        "options": [
          "Scenario",
          "Background",
          "Scenario Outline",
          "But"
        ],
        "correct_answer": "Scenario Outline"
      },
      {
        "id": 12,
        "question": "What must accompany a 'Scenario Outline' to provide the data sets?",
        "options": [
          "Variables",
          "Examples",
          "Data Tables",
          "Hooks"
        ],
        "correct_answer": "Examples"
      },
      {
        "id": 13,
        "question": "Which keyword is used to define steps that run before each scenario in a feature file?",
        "options": [
          "Before",
          "Precondition",
          "Background",
          "Given"
        ],
        "correct_answer": "Background"
      },
      {
        "id": 14,
        "question": "What symbol is used to separate columns in a Data Table in Gherkin? [cite: 31]",
        "options": [
          "Comma (,)",
          "Pipe (|)",
          "Colon (:)",
          "Tab"
        ],
        "correct_answer": "Pipe (|)"
      },
      {
        "id": 15,
        "question": "Where is the actual code execution logic written to map Gherkin steps? [cite: 22]",
        "options": [
          "Feature File",
          "TestRunner Class",
          "Step Definition File",
          "pom.xml"
        ],
        "correct_answer": "Step Definition File"
      },
      {
        "id": 16,
        "question": "Which annotation is used in Cucumber to execute code before every scenario (Hooks)? [cite: 26]",
        "options": [
          "@BeforeClass",
          "@Before",
          "@Setup",
          "@Start"
        ],
        "correct_answer": "@Before"
      },
      {
        "id": 17,
        "question": "Which annotation is used to execute code after every scenario?",
        "options": [
          "@After",
          "@TearDown",
          "@End",
          "@Post"
        ],
        "correct_answer": "@After"
      },
      {
        "id": 18,
        "question": "What is the purpose of 'Tags' in Cucumber? [cite: 27]",
        "options": [
          "To comment out code",
          "To organize and group scenarios (e.g., @Smoke, @Regression)",
          "To define variables",
          "To link to Java classes"
        ],
        "correct_answer": "To organize and group scenarios (e.g., @Smoke, @Regression)"
      },
      {
        "id": 19,
        "question": "What class is used to run the Cucumber feature file and link it with step definitions? [cite: 25]",
        "options": [
          "Main Class",
          "TestRunner Class",
          "StepDef Class",
          "GherkinRunner"
        ],
        "correct_answer": "TestRunner Class"
      },
      {
        "id": 20,
        "question": "Which option in the TestRunner class checks if all steps in the feature file have corresponding step definitions without running them? [cite: 25]",
        "options": [
          "monochrome",
          "features",
          "glue",
          "dryRun"
        ],
        "correct_answer": "dryRun"
      },
      {
        "id": 21,
        "question": "Which option in the TestRunner class ensures the console output is readable (removes unreadable characters)?",
        "options": [
          "dryRun",
          "monochrome",
          "strict",
          "format"
        ],
        "correct_answer": "monochrome"
      },
      {
        "id": 22,
        "question": "Which keyword allows adding a negative condition or an additional step logically different from the previous one? [cite: 17]",
        "options": [
          "And",
          "Then",
          "But",
          "When"
        ],
        "correct_answer": "But"
      },
      {
        "id": 23,
        "question": "In a 'Scenario Outline', how are variables represented in the steps? [cite: 20]",
        "options": [
          "{variable}",
          "<variable>",
          "[variable]",
          "$variable"
        ],
        "correct_answer": "<variable>"
      },
      {
        "id": 24,
        "question": "What is the main advantage of using 'Background' in a feature file?",
        "options": [
          "It runs after every scenario",
          "It eliminates the need to repeat common steps (like login) in every scenario",
          "It defines the test data",
          "It generates the report"
        ],
        "correct_answer": "It eliminates the need to repeat common steps (like login) in every scenario"
      },
      {
        "id": 25,
        "question": "Which keyword is used to join multiple steps of the same type (e.g., multiple Givens or Thens)? [cite: 16]",
        "options": [
          "But",
          "Also",
          "And",
          "Plus"
        ],
        "correct_answer": "And"
      },
      {
        "id": 26,
        "question": "What does the 'glue' parameter in the TestRunner class specify? [cite: 25]",
        "options": [
          " The path to the feature files",
          "The path to the step definition files",
          "The path to the report folder",
          "The tags to be executed"
        ],
        "correct_answer": "The path to the step definition files"
      },
      {
        "id": 27,
        "question": "Which of the following is NOT an advantage of the BDD framework? [cite: 33-35]",
        "options": [
          "Coverage of User Stories",
          "Reusability of code",
          "Requires highly technical skills for everyone to understand",
          "Parameterization in Feature File"
        ],
        "correct_answer": "Requires highly technical skills for everyone to understand"
      },
      {
        "id": 28,
        "question": "What symbol is used for comments in a Gherkin feature file? [cite: 19]",
        "options": [
          "//",
          "/* */",
          "#",
          "--"
        ],
        "correct_answer": "#"
      },
      {
        "id": 29,
        "question": "Cucumber supports integration with which Continuous Integration tool mentioned in the lecture? [cite: 36]",
        "options": [
          "CircleCI",
          "Jenkins",
          "Travis CI",
          "TeamCity"
        ],
        "correct_answer": "Jenkins"
      },
      {
        "id": 30,
        "question": "What is the correct syntax for the 'Scenario' keyword?",
        "options": [
          "Scenario: [Description]",
          "Scenario [Description]",
          "@Scenario [Description]",
          "Scenario -> [Description]"
        ],
        "correct_answer": "Scenario: [Description]"
      },
      {
        "id": 31,
        "question": "In the TDD cycle, what is the first step?",
        "options": [
          "Write a passing test",
          "Refactor code",
          "Write a failing test",
          "Write production code"
        ],
        "correct_answer": "Write a failing test"
      },
      {
        "id": 32,
        "question": "Which file contains the mapping between the Gherkin steps and the Java methods?",
        "options": [
          "Feature File",
          "Step Definition File",
          "Runner File",
          "Config File"
        ],
        "correct_answer": "Step Definition File"
      }
    ]
  },
  9: {
    "subject": "Software Quality Assurance and Testing - Lecture 9",
    "topic": "API Testing, REST, SOAP, and Tools",
    "questions": [
      {
        "id": 1,
        "question": "What does API stand for?",
        "options": [
          "Application Programming Interface",
          "Automated Programming Interface",
          "Application Process Integration",
          "Automated Process Interaction"
        ],
        "correct_answer": "Application Programming Interface"
      },
      {
        "id": 2,
        "question": "Where does the API layer sit in software application development?",
        "options": [
          "Between the database and the server",
          "Between the presentation (UI) layer and the database layer",
          "Inside the user interface",
          "Within the database itself"
        ],
        "correct_answer": "Between the presentation (UI) layer and the database layer"
      },
      {
        "id": 3,
        "question": "Which of the following is a benefit of API testing regarding language independence?",
        "options": [
          "It only supports Java",
          "Data is exchanged via XML and JSON, so any language can be used for automation",
          "It requires C# for all tests",
          "It uses binary formats only"
        ],
        "correct_answer": "Data is exchanged via XML and JSON, so any language can be used for automation"
      },
      {
        "id": 4,
        "question": "How does API testing contribute to faster releases?",
        "options": [
          "It skips testing altogether",
          "It executes tests up to eight hours faster compared to UI testing",
          "It removes the need for developers",
          "It automates the UI design"
        ],
        "correct_answer": "It executes tests up to eight hours faster compared to UI testing"
      },
      {
        "id": 5,
        "question": "What is 'Fuzz testing' in the context of API testing?",
        "options": [
          "Testing the user interface design",
          "Forcibly inputting huge amounts of random data (noise) to create negative behavior",
          "Testing the documentation",
          "Verifying the correct product was built"
        ],
        "correct_answer": "Forcibly inputting huge amounts of random data (noise) to create negative behavior"
      },
      {
        "id": 6,
        "question": "Which type of testing is attacked by a person with limited knowledge of the API to analyze the attack vector from an outside perspective?",
        "options": [
          "Load testing",
          "Penetration testing",
          "Functional testing",
          "Reliability testing"
        ],
        "correct_answer": "Penetration testing"
      },
      {
        "id": 7,
        "question": "What does CRUD stand for?",
        "options": [
          "Create, Read, Update, Delete",
          "Connect, Read, Use, Destroy",
          "Create, Run, Update, Done",
          "Call, Return, Update, Delete"
        ],
        "correct_answer": "Create, Read, Update, Delete"
      },
      {
        "id": 8,
        "question": "Which HTTP method is used to implement a CREATE operation?",
        "options": [
          "GET",
          "POST",
          "PUT",
          "DELETE"
        ],
        "correct_answer": "POST"
      },
      {
        "id": 9,
        "question": "Which HTTP method is used to implement a READ operation?",
        "options": [
          "GET",
          "POST",
          "PATCH",
          "DELETE"
        ],
        "correct_answer": "GET"
      },
      {
        "id": 10,
        "question": "What is the difference between PUT and PATCH for the UPDATE operation?",
        "options": [
          "PUT updates the entire entry; PATCH updates only part of the entry",
          "PATCH updates the entire entry; PUT updates only part of the entry",
          "There is no difference",
          "PUT is for creating, PATCH is for deleting"
        ],
        "correct_answer": "PUT updates the entire entry; PATCH updates only part of the entry"
      },
      {
        "id": 11,
        "question": "Which SQL command corresponds to the READ operation?",
        "options": [
          "INSERT",
          "SELECT",
          "UPDATE",
          "DELETE"
        ],
        "correct_answer": "SELECT"
      },
      {
        "id": 12,
        "question": "Which category of HTTP status codes indicates 'Success'?",
        "options": [
          "1xx",
          "2xx",
          "4xx",
          "5xx"
        ],
        "correct_answer": "2xx"
      },
      {
        "id": 13,
        "question": "What does a 4xx HTTP status code indicate?",
        "options": [
          "Server Error",
          "Redirection",
          "Client Error",
          "Informational"
        ],
        "correct_answer": "Client Error"
      },
      {
        "id": 14,
        "question": "What does a 5xx HTTP status code indicate?",
        "options": [
          "Success",
          "Client Error",
          "Server Error",
          "Redirection"
        ],
        "correct_answer": "Server Error"
      },
      {
        "id": 15,
        "question": "Unlike SOAP, REST doesn't have to use XML. What other formats can REST use?",
        "options": [
          "Only HTML",
          "CSV, JSON, and RSS",
          "Binary only",
          "Standardized SOAP messages"
        ],
        "correct_answer": "CSV, JSON, and RSS"
      },
      {
        "id": 16,
        "question": "Which of the following is an advantage of REST over SOAP?",
        "options": [
          "It requires expensive tools",
          "It uses XML for all messages",
          "It requires extensive processing",
          "It is faster (no extensive processing required) and uses smaller message formats"
        ],
        "correct_answer": "It is faster (no extensive processing required) and uses smaller message formats"
      },
      {
        "id": 17,
        "question": "SOAP relies exclusively on which format to provide messaging services?",
        "options": [
          "JSON",
          "XML",
          "CSV",
          "YAML"
        ],
        "correct_answer": "XML"
      },
      {
        "id": 18,
        "question": "Which of the following is an advantage of SOAP compared to REST?",
        "options": [
          "It is language, platform, and transport independent (REST requires HTTP)",
          "It is faster than REST",
          "It uses JSON which is lightweight",
          "It has a smaller learning curve"
        ],
        "correct_answer": "It is language, platform, and transport independent (REST requires HTTP)"
      },
      {
        "id": 19,
        "question": "RestAssured is a library used to test REST APIs using which programming language?",
        "options": [
          "Python",
          "Java",
          "C#",
          "Ruby"
        ],
        "correct_answer": "Java"
      },
      {
        "id": 20,
        "question": "What is 'Load testing' in the context of API testing?",
        "options": [
          "Ensuring the API performs exactly as supposed to",
          "Checking consistent results between platforms",
          "Seeing how many calls an API can handle",
          "Validating encryption methods"
        ],
        "correct_answer": "Seeing how many calls an API can handle"
      },
      {
        "id": 21,
        "question": "Which testing type ensures the API produces consistent results and the connection between platforms is constant?",
        "options": [
          "Security testing",
          "Reliability testing",
          "Fuzz testing",
          "Validation testing"
        ],
        "correct_answer": "Reliability testing"
      },
      {
        "id": 22,
        "question": "In a NoSQL database like MongoDB, which method is used for the CREATE operation?",
        "options": [
          "add()",
          "insert()",
          "create()",
          "new()"
        ],
        "correct_answer": "insert()"
      },
      {
        "id": 23,
        "question": "Which protocol did Microsoft originally develop SOAP to replace?",
        "options": [
          "HTTP and FTP",
          "DCOM and CORBA",
          "TCP and IP",
          "SMTP and IMAP"
        ],
        "correct_answer": "DCOM and CORBA"
      },
      {
        "id": 24,
        "question": "What is a characteristic of 'Validation testing' in APIs?",
        "options": [
          "It focuses on whether the correct product was built and if the API behavior is correct",
          "It focuses only on security flaws",
          "It inputs random noise into the system",
          "It tests only the load capacity"
        ],
        "correct_answer": "It focuses on whether the correct product was built and if the API behavior is correct"
      },
      {
        "id": 25,
        "question": "What allows RestAssured to integrate well with project builds?",
        "options": [
          "Integration with Maven",
          "Integration with Photoshop",
          "It is a standalone executable",
          "It requires a paid license"
        ],
        "correct_answer": "Integration with Maven"
      },
      {
        "id": 26,
        "question": "Which HTTP status code range indicates 'Redirection'?",
        "options": [
          "1xx",
          "2xx",
          "3xx",
          "4xx"
        ],
        "correct_answer": "3xx"
      },
      {
        "id": 27,
        "question": "Which of the following is NOT a standard HTTP method used in REST?",
        "options": [
          "GET",
          "POST",
          "CHECK",
          "DELETE"
        ],
        "correct_answer": "CHECK"
      },
      {
        "id": 28,
        "question": "What is 'Security testing' often grouped with?",
        "options": [
          "Load testing and Unit testing",
          "Penetration testing and Fuzz testing",
          "UI testing and UX testing",
          "Functional testing and Validation testing"
        ],
        "correct_answer": "Penetration testing and Fuzz testing"
      },
      {
        "id": 29,
        "question": "Which tool is mentioned for API documentation and UI visualization?",
        "options": [
          "JMeter",
          "Swagger UI",
          "Selenium",
          "Appium"
        ],
        "correct_answer": "Swagger UI"
      },
      {
        "id": 30,
        "question": "What does 'GUI-independent' benefit of API testing imply?",
        "options": [
          "API testing can only be done after the UI is ready",
          "API testing can be performed prior to GUI testing, allowing early feedback",
          "API testing requires a graphical user interface",
          "API testing tests the GUI elements"
        ],
        "correct_answer": "API testing can be performed prior to GUI testing, allowing early feedback"
      }
    ]
  },
  10: {
    "subject": "Software Quality Assurance and Testing - Lecture 10",
    "topic": "Microservices Testing, Mocks/Stubs, WireMock, and CI/CD",
    "questions": [
      {
        "id": 1,
        "question": "What is a Microservices Architecture?",
        "options": [
          "A monolithic application design",
          "An application built as a collection of independent services",
          "A database management system",
          "A front-end development framework"
        ],
        "correct_answer": "An application built as a collection of independent services"
      },
      {
        "id": 2,
        "question": "How do microservices typically communicate with each other?",
        "options": [
          "Through shared memory",
          "Through direct database access",
          "Using Application Programming Interfaces (APIs)",
          "Via manual file transfer"
        ],
        "correct_answer": "Using Application Programming Interfaces (APIs)"
      },
      {
        "id": 3,
        "question": "Which of the following is NOT listed as a type of Microservices Testing in the lecture? [cite: 6]",
        "options": [
          "Unit Testing",
          "Contract Testing",
          "Beta Testing",
          "End-To-End Testing"
        ],
        "correct_answer": "Beta Testing"
      },
      {
        "id": 4,
        "question": "What is the primary goal of Unit Testing?",
        "options": [
          "To validate the performance of each component (or unit) of the software",
          "To test the entire application workflow",
          "To verify network configuration",
          "To test the database connection"
        ],
        "correct_answer": "To validate the performance of each component (or unit) of the software"
      },
      {
        "id": 5,
        "question": "Ideally, who should perform Unit Testing and when?",
        "options": [
          "QA team after development",
          "Developers during the development phase",
          "End-users during UAT",
          "Project managers before release"
        ],
        "correct_answer": "Developers during the development phase"
      },
      {
        "id": 6,
        "question": "What does Contract Testing define?",
        "options": [
          "The legal agreement between client and vendor",
          "The results or outputs expected for specific inputs to ensure services can communicate",
          "The salary of the testers",
          "The user interface design"
        ],
        "correct_answer": "The results or outputs expected for specific inputs to ensure services can communicate"
      },
      {
        "id": 7,
        "question": "In Contract Testing, how should service dependencies operate?",
        "options": [
          "They should be fully functional services",
          "They should be ignored",
          "They must operate as stubs that enable a service to function without interacting with other services",
          "They must be manually tested"
        ],
        "correct_answer": "They must operate as stubs that enable a service to function without interacting with other services"
      },
      {
        "id": 8,
        "question": "What is the goal of Integration Testing in microservices?",
        "options": [
          "To test a single unit in isolation",
          "To verify that microservices collaborate to achieve a joint operation as a subsystem",
          "To test the UI responsiveness",
          "To verify the contract between consumer and provider"
        ],
        "correct_answer": "To verify that microservices collaborate to achieve a joint operation as a subsystem"
      },
      {
        "id": 9,
        "question": "What does End-to-End (E2E) Testing verify?",
        "options": [
          "That the code is written in Java",
          "That individual units function correctly",
          "That the entire application works to achieve its business objectives",
          "That the database schema is correct"
        ],
        "correct_answer": "That the entire application works to achieve its business objectives"
      },
      {
        "id": 10,
        "question": "Why is End-to-End testing especially important for microservices architecture? [cite: 10]",
        "options": [
          "It is faster than unit testing",
          "It helps ensure there are no gaps between microservices and all work towards achieving their goal",
          "It requires less code",
          "It replaces integration testing"
        ],
        "correct_answer": "It helps ensure there are no gaps between microservices and all work towards achieving their goal"
      },
      {
        "id": 11,
        "question": "Which strategy suggests testing high-risk microservices extensively at the beginning of the cycle?",
        "options": [
          "Pick the High-Risk Services",
          "Test Last Strategy",
          "Low-Risk First Strategy",
          "Random Testing Strategy"
        ],
        "correct_answer": "Pick the High-Risk Services"
      },
      {
        "id": 12,
        "question": "What is 'Service Virtualization' used for?",
        "options": [
          "To increase hardware costs",
          "To mock out a service to avoid delays caused by pending dependencies",
          "To visualize the service in a diagram",
          "To deploy services to the cloud"
        ],
        "correct_answer": "To mock out a service to avoid delays caused by pending dependencies"
      },
      {
        "id": 13,
        "question": "What is an SLA in the context of testing strategies?",
        "options": [
          "Software License Agreement",
          "Service Level Agreement",
          "System Level Access",
          "Standard Load Average"
        ],
        "correct_answer": "Service Level Agreement"
      },
      {
        "id": 14,
        "question": "What are Mocks?",
        "options": [
          "Real objects used in production",
          "Objects that store method calls and verify interaction between Java classes",
          "Database tables",
          "User interface elements"
        ],
        "correct_answer": "Objects that store method calls and verify interaction between Java classes"
      },
      {
        "id": 15,
        "question": "What type of verification are Mocks generally used for?",
        "options": [
          "State verification",
          "Behavior verification",
          "Performance verification",
          "Security verification"
        ],
        "correct_answer": "Behavior verification"
      },
      {
        "id": 16,
        "question": "Which of the following is a mocking framework mentioned in the lecture?",
        "options": [
          "Mockito",
          "Selenium",
          "Appium",
          "Cucumber"
        ],
        "correct_answer": "Mockito"
      },
      {
        "id": 17,
        "question": "What are Stubs?",
        "options": [
          "Objects that hold predefined data and use it to give responses during tests",
          "Objects that verify behavior",
          "Dynamic wrappers for dependencies",
          "The real objects used in the application"
        ],
        "correct_answer": "Objects that hold predefined data and use it to give responses during tests"
      },
      {
        "id": 18,
        "question": "What type of verification are Stubs mainly used for?",
        "options": [
          "Behavior verification",
          "State verification",
          "Integration verification",
          "System verification"
        ],
        "correct_answer": "State verification"
      },
      {
        "id": 19,
        "question": "What is the key characteristic of a Stub's output?",
        "options": [
          "It is random every time",
          "It always returns the predefined output regardless of the input",
          "It depends on the system clock",
          "It is calculated dynamically"
        ],
        "correct_answer": "It always returns the predefined output regardless of the input"
      },
      {
        "id": 20,
        "question": "What are Spies?",
        "options": [
          "Secret agents",
          "Fully mock objects",
          "Partially mock objects that wrap the real object",
          "Database connections"
        ],
        "correct_answer": "Partially mock objects that wrap the real object"
      },
      {
        "id": 21,
        "question": "When are Spies useful? [cite: 17]",
        "options": [
          "When testing small classes",
          "When we have a huge class and want to mock only certain methods",
          "When we want to test the database",
          "When we want to test the UI"
        ],
        "correct_answer": "When we have a huge class and want to mock only certain methods"
      },
      {
        "id": 22,
        "question": "What is WireMock?",
        "options": [
          "A wireframing tool",
          "An HTTP mock server for stubbing and verification",
          "A unit testing framework",
          "A CI/CD tool"
        ],
        "correct_answer": "An HTTP mock server for stubbing and verification"
      },
      {
        "id": 23,
        "question": "Which of the following is a feature of WireMock?",
        "options": [
          "Compiling Java code",
          "Record/playback of interactions with other APIs",
          "Managing database schemas",
          "Designing user interfaces"
        ],
        "correct_answer": "Record/playback of interactions with other APIs"
      },
      {
        "id": 24,
        "question": "How can WireMock be used?",
        "options": [
          "Only as a standalone process",
          "Only as a library",
          "As a library by any JVM application or as a standalone process",
          "Only on a remote server"
        ],
        "correct_answer": "As a library by any JVM application or as a standalone process"
      },
      {
        "id": 25,
        "question": "WireMock's features are accessible via which interfaces?",
        "options": [
          "REST (JSON) interface and Java API",
          "SOAP interface only",
          "Command line only",
          "Graphical User Interface only"
        ],
        "correct_answer": "REST (JSON) interface and Java API"
      },
      {
        "id": 26,
        "question": "What capability does WireMock provide regarding faults?",
        "options": [
          "It fixes faults automatically",
          "It allows injection of faults and delays",
          "It prevents faults from happening",
          "It ignores all faults"
        ],
        "correct_answer": "It allows injection of faults and delays"
      },
      {
        "id": 27,
        "question": "What is Jenkins?",
        "options": [
          "A database",
          "An open-source automation tool written in Java for Continuous Integration",
          "A web browser",
          "A programming language"
        ],
        "correct_answer": "An open-source automation tool written in Java for Continuous Integration"
      },
      {
        "id": 28,
        "question": "What is the primary purpose of Jenkins?",
        "options": [
          "To write code",
          "To build and test software projects continuously",
          "To manage project requirements",
          "To design software architecture"
        ],
        "correct_answer": "To build and test software projects continuously"
      },
      {
        "id": 29,
        "question": "How does Jenkins accelerate the software development process? [cite: 27]",
        "options": [
          "By hiring more developers",
          "Through automation of build, test, and deploy processes",
          "By reducing the number of tests",
          "By writing code automatically"
        ],
        "correct_answer": "Through automation of build, test, and deploy processes"
      },
      {
        "id": 30,
        "question": "What is the default scope for the WireMock dependency in Maven?",
        "options": [
          "compile",
          "runtime",
          "test",
          "provided"
        ],
        "correct_answer": "test"
      },
      {
        "id": 31,
        "question": "What does a Spy do if a method is NOT stubbed?",
        "options": [
          "It returns null",
          "It throws an exception",
          "It calls the real method behavior",
          "It returns a random value"
        ],
        "correct_answer": "It calls the real method behavior"
      },
      {
        "id": 32,
        "question": "Which object resembles a real object with the minimum number of methods needed for a test?",
        "options": [
          "Mock",
          "Stub",
          "Spy",
          "Controller"
        ],
        "correct_answer": "Stub"
      },
      {
        "id": 33,
        "question": "What is the term for checking the correct methods and paths applied to objects in Mocking?",
        "options": [
          "State verification",
          "Behavior verification",
          "Path verification",
          "Logic verification"
        ],
        "correct_answer": "Behavior verification"
      },
      {
        "id": 34,
        "question": "Which Mockito method is used to create a spy object?",
        "options": [
          "mock()",
          "create()",
          "spy()",
          "stub()"
        ],
        "correct_answer": "spy()"
      },
      {
        "id": 35,
        "question": "In the context of CI/CD, what allows Jenkins to integrate with many technologies?",
        "options": [
          "Its database",
          "Its plugins",
          "Its operating system",
          "Its user interface"
        ],
        "correct_answer": "Its plugins"
      }
    ]
  },
};
