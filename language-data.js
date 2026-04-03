window.CODEMAP_LANGUAGES = {
  python: {
    label: 'Python',
    shortLabel: 'Python',
    icon: '🐍',
    hubTitle: 'Python Learning Hub',
    hubIntro: 'Choose how you want to learn Python: set up your environment, work through guided mini lessons, or practice reading documentation without getting overwhelmed.',
    recommendedFor: 'Students in intro programming, data analysis, automation, and engineering workflows who need a structured path from installation to practical application.',
    cards: {
      installation: 'Step-by-step setup guidance for Python, required tools, package managers, and environment verification.',
      tutorial: 'Guided explanations, mini checks, and saved progress that help students build real understanding.',
      documentation: 'Learn how Python documentation is structured, what to focus on first, and how to use it without feeling lost.'
    },
    install: {
      heroTitle: 'Python Installation Guide',
      heroText: 'Follow these steps to check your setup, install Python if needed, and confirm that you can run a simple file locally.',
      steps: [
        { title: 'Step 1: Check whether Python is already installed', text: 'Open a terminal and ask for the Python version first. If a version number appears, Python is already on the machine.', command: 'python --version' },
        { title: 'Step 2: Install Python if the command is not found', text: 'Use the installer your instructor or school recommends. During setup, make sure Python is added to the system path so the terminal can find it.' },
        { title: 'Step 3: Verify pip', text: 'pip is the package installer that many Python lessons use later. Check that it is available after Python finishes installing.', command: 'pip --version' },
        { title: 'Step 4: Create a project folder', text: 'Keep practice files in one clean folder so students do not lose track of scripts and saved work.', command: 'mkdir my-python-project\ncd my-python-project' },
        { title: 'Step 5: Run a first test file', text: 'Create a file named hello.py with a print statement and run it to confirm everything works.', command: 'python hello.py' }
      ]
    },
    docs: {
      heroTitle: 'Python Documentation Guide',
      heroText: 'Python documentation can look dense at first, but students can learn to scan it in a consistent order and find exactly what they need.',
      overviewTitle: 'Why documentation matters',
      overviewText: 'Documentation is where students confirm syntax, find examples, check what a function returns, and see which inputs are allowed.',
      structure: [
        { title: 'Function name', text: 'Start by identifying the tool or function the page is describing.' },
        { title: 'Parameters', text: 'Look at what inputs the function accepts and whether any are optional.' },
        { title: 'Return value', text: 'Check what comes back after the function runs.' },
        { title: 'Examples', text: 'Read short examples carefully because they show the function in real use.' }
      ],
      example: {
        title: 'Worked Example — len()',
        description: 'Students can practice reading documentation with a familiar built-in function.',
        code: 'names = ("Maya", "Leo", "Ana")\nprint(len(names))',
        bullets: [
          'The function name is len.',
          'It takes one object that has a length, such as a string or collection.',
          'It returns the number of items.',
          'Here the output is 3 because the collection has three names.'
        ]
      },
      strategy: [
        'Read the page title and first sentence before looking at examples.',
        'Underline or highlight the input and output information.',
        'Compare the documentation example to your own code.',
        'Test one small example instead of changing everything at once.'
      ],
      mistakes: [
        'Skipping the parameter list and guessing the syntax.',
        'Copying an example without checking what it returns.',
        'Ignoring whether the page is for a method, function, or module.'
      ],
      checklist: [
        'What is the function or topic called?',
        'What inputs does it expect?',
        'What does it return?',
        'Which example looks closest to my task?'
      ]
    },
    tutorial: {
      title: 'Python Variables and Data Types',
      tag: 'Python Tutorial',
      intro: 'This tutorial breaks Python fundamentals into four mini lessons so students can work in smaller, clearer steps and see real progress.',
      outcomes: ['Variable Basics', 'Data Types', 'Naming Rules', 'Reading Code'],
      lessons: [
        {
          id: 'lesson1',
          title: 'Mini Lesson 1 — Variable Basics',
          summary: 'A variable is a name that points to a value your program wants to remember and use later.',
          keyIdea: 'In Python, score = 10 means the variable named score is storing the value 10. The equals sign is used for assignment.',
          exampleTitle: 'Example',
          exampleCode: 'name = "Maya"\nage = 14\nscore = 10',
          questions: [
            { prompt: '1. What does a variable store?', placeholder: 'Type your answer here', accept: ['a value', 'value', 'data', 'information'], correctText: 'Correct! A variable stores a value or piece of data.' },
            { prompt: '2. Which symbol is used to assign a value in Python?', placeholder: 'Type your answer here', accept: ['=', 'equals sign'], correctText: 'Correct! Python uses the equals sign for assignment.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Mini Lesson 2 — Common Data Types',
          summary: 'Python treats numbers, text, and true-or-false values as different kinds of data.',
          keyIdea: 'Four beginner data types show up often: integers for whole numbers, floats for decimals, strings for text, and booleans for true-or-false values.',
          exampleTitle: 'Example',
          exampleCode: 'lives = 3\nprice = 3.14\ncity = "Rome"\nis_ready = True',
          questions: [
            { prompt: '1. What data type is the value 42?', placeholder: 'Type your answer here', accept: ['integer', 'int'], correctText: 'Correct! 42 is an integer.' },
            { prompt: '2. What data type is "hello"?', placeholder: 'Type your answer here', accept: ['string', 'str', 'text'], correctText: 'Correct! "hello" is a string.' }
          ]
        },
        {
          id: 'lesson3',
          title: 'Mini Lesson 3 — Naming Rules',
          summary: 'Good variable names make code easier to read and help students remember what each value means.',
          keyIdea: 'Python variable names should begin with a letter or underscore and then use letters, numbers, or underscores. Spaces are not allowed.',
          exampleTitle: 'Example',
          exampleCode: 'student_name = "Maya"\nquiz_score = 95\ncurrent_level = 3',
          questions: [
            { prompt: '1. Write a valid Python variable name for a student major.', placeholder: 'Type your answer here', validator: 'identifier', correctText: 'Correct! That works as a Python-style variable name.' },
            { prompt: '2. Can a Python variable name start with a number?', placeholder: 'Type your answer here', accept: ['no', 'nope', 'cannot', 'it cannot', 'false'], correctText: 'Correct! Variable names cannot start with a number.' }
          ]
        },
        {
          id: 'lesson4',
          title: 'Mini Lesson 4 — Reading Code',
          summary: 'Students should be able to read short assignments and predict the value stored after a line of code runs.',
          keyIdea: 'When Python sees score = score + 2, it takes the current value of score, adds 2, and stores the new result back into score.',
          exampleTitle: 'Example',
          exampleCode: 'score = 10\nscore = score + 2\nis_ready = True',
          questions: [
            { prompt: '1. If score starts at 10 and then runs score = score + 2, what is the new value of score?', placeholder: 'Type your answer here', accept: ['12', 'twelve'], correctText: 'Correct! score becomes 12.' },
            { prompt: '2. What data type is True?', placeholder: 'Type your answer here', accept: ['boolean', 'bool'], correctText: 'Correct! True is a boolean value.' }
          ]
        }
      ]
    }
  },
  cpp: {
    label: 'C++',
    shortLabel: 'C++',
    icon: '⚙️',
    hubTitle: 'C++ Learning Hub',
    hubIntro: 'Choose how you want to learn C++: set up a compiler, work through guided mini lessons, or practice reading reference-style documentation.',
    recommendedFor: 'Students working on data structures, systems concepts, memory-focused programming, and performance-oriented coursework.',
    cards: {
      installation: 'Step-by-step setup guidance for a compiler, terminal checks, building source files, and verifying output.',
      tutorial: 'Guided explanations, mini checks, and saved progress that help students understand core C++ ideas.',
      documentation: 'Learn how C++ references describe types, methods, headers, and example usage without overwhelming beginners.'
    },
    install: {
      heroTitle: 'C++ Installation Guide',
      heroText: 'Use these steps to confirm that a compiler is available and that you can build and run a simple source file.',
      steps: [
        { title: 'Step 1: Check for a compiler', text: 'Open a terminal and see whether g++ is already installed on the machine.', command: 'g++ --version' },
        { title: 'Step 2: Install a compiler if needed', text: 'Use the compiler toolchain recommended by your class, operating system, or lab image. Many courses use g++ or clang++.' },
        { title: 'Step 3: Make a project folder', text: 'Keep source files and executables in one folder so builds stay organized.', command: 'mkdir my-cpp-project\ncd my-cpp-project' },
        { title: 'Step 4: Compile a simple file', text: 'Create a file named main.cpp, then compile it into an executable.', command: 'g++ main.cpp -o app' },
        { title: 'Step 5: Run the executable', text: 'Run the compiled program to confirm the toolchain works from the terminal.', command: './app' }
      ]
    },
    docs: {
      heroTitle: 'C++ Documentation Guide',
      heroText: 'C++ documentation often looks more technical than beginner guides, but students can still scan it in a predictable order.',
      overviewTitle: 'Why documentation matters',
      overviewText: 'Students use documentation to check which header to include, which methods a type supports, what each method returns, and how example code is structured.',
      structure: [
        { title: 'Header', text: 'Many C++ pages tell you which header is required before you can use the feature.' },
        { title: 'Signature', text: 'Look at the function or method signature to see the accepted inputs and return type.' },
        { title: 'Notes', text: 'Reference pages often include behavior notes, edge cases, and performance details.' },
        { title: 'Examples', text: 'Examples help students connect the reference page to real code.' }
      ],
      example: {
        title: 'Worked Example — std::string::size()',
        description: 'Students can practice seeing what a method belongs to and what it returns.',
        code: 'std::string name = "Maya";\nstd::cout << name.size();',
        bullets: [
          'The type is std::string.',
          'The method being called is size().',
          'It returns how many characters are in the string.',
          'The output here is 4.'
        ]
      },
      strategy: [
        'Read the header and function or method signature first.',
        'Find out whether the page is about a free function, class, or class method.',
        'Notice the return type before copying the example.',
        'Translate one line of the example into plain English.'
      ],
      mistakes: [
        'Ignoring the header and wondering why the compiler cannot find the feature.',
        'Mixing up an object method with a standalone function.',
        'Reading only the example and not the return type.'
      ],
      checklist: [
        'What header do I need?',
        'What type or namespace does this belong to?',
        'What does it return?',
        'Which example looks closest to my code?'
      ]
    },
    tutorial: {
      title: 'C++ Foundations',
      tag: 'C++ Tutorial',
      intro: 'This tutorial breaks C++ foundations into four mini lessons so students can focus on one idea at a time and build progress clearly.',
      outcomes: ['Variables and Types', 'Input and Output', 'Conditionals', 'Loops'],
      lessons: [
        {
          id: 'lesson1',
          title: 'Mini Lesson 1 — Variables and Types',
          summary: 'A C++ variable stores a value that the program can use later.',
          keyIdea: 'C++ variables have names and types. The type tells the compiler what kind of data the variable will hold.',
          exampleTitle: 'Example',
          exampleCode: 'int score = 10;\ndouble price = 3.14;\nstd::string name = "Maya";',
          questions: [
            { prompt: '1. What does a variable store?', placeholder: 'Type your answer here', accept: ['a value', 'value', 'data', 'information'], correctText: 'Correct! A variable stores a value.' },
            { prompt: '2. Which symbol is used to assign a value in C++?', placeholder: 'Type your answer here', accept: ['=', 'equals sign'], correctText: 'Correct! C++ uses the equals sign for assignment.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Mini Lesson 2 — Input and Output',
          summary: 'C++ commonly uses stream objects to print output and read input.',
          keyIdea: 'std::cout sends output to the screen, while std::cin reads input from the user.',
          exampleTitle: 'Example',
          exampleCode: 'std::cout << "Enter age: ";\nstd::cin >> age;',
          questions: [
            { prompt: '1. Which object is commonly used to print text to the screen?', placeholder: 'Type your answer here', accept: ['std::cout', 'cout'], correctText: 'Correct! std::cout is the standard output stream.' },
            { prompt: '2. Which symbol pair is commonly used with cout to send output?', placeholder: 'Type your answer here', accept: ['<<', 'stream insertion operator'], correctText: 'Correct! cout usually uses << to send output.' }
          ]
        },
        {
          id: 'lesson3',
          title: 'Mini Lesson 3 — Conditionals',
          summary: 'Conditionals let a program make decisions based on whether something is true or false.',
          keyIdea: 'An if statement checks a condition. If the condition is true, the program runs the code inside that branch.',
          exampleTitle: 'Example',
          exampleCode: 'if (age > 18) {\n    std::cout << "Adult";\n}',
          questions: [
            { prompt: '1. Which keyword checks a condition in C++?', placeholder: 'Type your answer here', accept: ['if'], correctText: 'Correct! The if keyword starts a conditional check.' },
            { prompt: '2. If age is 20, is the condition age > 18 true or false?', placeholder: 'Type your answer here', accept: ['true', 'yes'], correctText: 'Correct! 20 is greater than 18, so the condition is true.' }
          ]
        },
        {
          id: 'lesson4',
          title: 'Mini Lesson 4 — Loops',
          summary: 'Loops repeat code so students do not need to write the same statement over and over.',
          keyIdea: 'A for loop is often used when the number of repetitions is known ahead of time.',
          exampleTitle: 'Example',
          exampleCode: 'for (int i = 0; i < 3; i++) {\n    std::cout << i;\n}',
          questions: [
            { prompt: '1. Which loop is commonly used when the number of repetitions is known?', placeholder: 'Type your answer here', accept: ['for', 'for loop'], correctText: 'Correct! A for loop is a common choice for counted repetition.' },
            { prompt: '2. How many times does the example loop run?', placeholder: 'Type your answer here', accept: ['3', 'three'], correctText: 'Correct! The loop runs three times.' }
          ]
        }
      ]
    }
  },
  matlab: {
    label: 'MATLAB',
    shortLabel: 'MATLAB',
    icon: '📐',
    hubTitle: 'MATLAB Learning Hub',
    hubIntro: 'Choose how you want to learn MATLAB: verify the environment, work through guided mini lessons, or learn how to read function pages and examples.',
    recommendedFor: 'Students in controls, signals, simulation, modeling, numerical methods, and engineering analysis courses.',
    cards: {
      installation: 'Step-by-step setup guidance for launching MATLAB, selecting a working folder, and running a test script.',
      tutorial: 'Guided explanations, mini checks, and saved progress that help students build MATLAB confidence.',
      documentation: 'Learn how MATLAB documentation is organized so students can find syntax, inputs, outputs, and examples quickly.'
    },
    install: {
      heroTitle: 'MATLAB Setup Guide',
      heroText: 'Use these steps to make sure MATLAB launches correctly and that you can run a simple script from your working folder.',
      steps: [
        { title: 'Step 1: Launch MATLAB', text: 'Open MATLAB through the campus license, lab computer image, or local installation your class provides.' },
        { title: 'Step 2: Confirm the working folder', text: 'Set the Current Folder to the place where you want to save scripts, data files, and figures.' },
        { title: 'Step 3: Create a new script', text: 'Make a script file so you can type and save commands instead of working only in the command window.' },
        { title: 'Step 4: Save a simple test program', text: 'Save a file with a few basic assignments and a display command.', command: 'x = 5;\ny = 2 * x;\ndisp(y);' },
        { title: 'Step 5: Run the script', text: 'Run the file and confirm that the command window shows the expected output.' }
      ]
    },
    docs: {
      heroTitle: 'MATLAB Documentation Guide',
      heroText: 'MATLAB documentation becomes much easier when students learn to focus on syntax, inputs, outputs, and the examples section.',
      overviewTitle: 'Why documentation matters',
      overviewText: 'Students use MATLAB docs to check function syntax, understand matrix dimensions, and compare their own code to short reference examples.',
      structure: [
        { title: 'Syntax block', text: 'The syntax block shows the main calling patterns for the function.' },
        { title: 'Description', text: 'The overview tells what the function does in plain language.' },
        { title: 'Inputs and outputs', text: 'These sections explain each argument and returned value.' },
        { title: 'Examples', text: 'Examples show how the function is used in practice.' }
      ],
      example: {
        title: 'Worked Example — length()',
        description: 'Students can practice matching the syntax block to an actual variable.',
        code: 'v = [2 4 6 8];\nn = length(v)',
        bullets: [
          'The function being used is length.',
          'It takes one array or vector as input.',
          'It returns the size of the longest dimension.',
          'Here the result is 4 because the vector has four elements.'
        ]
      },
      strategy: [
        'Read the syntax block first so you know the shape of the call.',
        'Compare your variables to the names used in the input section.',
        'Check the examples before changing your whole script.',
        'Test the function on a tiny input you understand.'
      ],
      mistakes: [
        'Skipping the syntax block and guessing the order of inputs.',
        'Ignoring the size or dimension expectations of the inputs.',
        'Copying a plotting example without changing the data.'
      ],
      checklist: [
        'What is the function name?',
        'What inputs are required?',
        'What output comes back?',
        'Which example looks most like my task?'
      ]
    },
    tutorial: {
      title: 'MATLAB Foundations',
      tag: 'MATLAB Tutorial',
      intro: 'This tutorial breaks MATLAB foundations into four mini lessons so students can understand one core idea at a time.',
      outcomes: ['Variables', 'Vectors and Matrices', 'Scripts and Functions', 'Plotting Basics'],
      lessons: [
        {
          id: 'lesson1',
          title: 'Mini Lesson 1 — Variables',
          summary: 'A MATLAB variable stores a value that can be reused in later commands.',
          keyIdea: 'MATLAB uses the equals sign to assign a value to a variable, just like many other programming tools students see early on.',
          exampleTitle: 'Example',
          exampleCode: 'mass = 12\nforce = 30\nvelocity = 4.5',
          questions: [
            { prompt: '1. What does a variable store?', placeholder: 'Type your answer here', accept: ['a value', 'value', 'data', 'information'], correctText: 'Correct! A variable stores a value.' },
            { prompt: '2. Which symbol is used to assign a value in MATLAB?', placeholder: 'Type your answer here', accept: ['=', 'equals sign'], correctText: 'Correct! MATLAB uses the equals sign for assignment.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Mini Lesson 2 — Vectors and Matrices',
          summary: 'MATLAB is especially strong at working with rows, columns, and rectangular grids of numbers.',
          keyIdea: 'A vector is a one-dimensional list of values, while a matrix stores values in rows and columns.',
          exampleTitle: 'Example',
          exampleCode: 'v = [1 2 3]\nA = [1 2; 3 4]',
          questions: [
            { prompt: '1. What do we call a one-dimensional list of values in MATLAB?', placeholder: 'Type your answer here', accept: ['vector', 'a vector'], correctText: 'Correct! That one-dimensional collection is a vector.' },
            { prompt: '2. What do we call values arranged in rows and columns?', placeholder: 'Type your answer here', accept: ['matrix', 'a matrix'], correctText: 'Correct! Rows and columns form a matrix.' }
          ]
        },
        {
          id: 'lesson3',
          title: 'Mini Lesson 3 — Scripts and Functions',
          summary: 'Students often begin with scripts, then move toward functions as work becomes more organized and reusable.',
          keyIdea: 'A script runs commands in order. A function usually takes inputs and returns outputs.',
          exampleTitle: 'Example',
          exampleCode: 'function y = doubleValue(x)\n    y = 2 * x;\nend',
          questions: [
            { prompt: '1. What keyword starts a MATLAB function file or function block?', placeholder: 'Type your answer here', accept: ['function'], correctText: 'Correct! MATLAB uses the function keyword.' },
            { prompt: '2. Does a script usually run commands in sequence from top to bottom?', placeholder: 'Type your answer here', accept: ['yes', 'true'], correctText: 'Correct! A script usually runs commands in order from top to bottom.' }
          ]
        },
        {
          id: 'lesson4',
          title: 'Mini Lesson 4 — Plotting Basics',
          summary: 'Plotting helps students connect equations and data to visible results.',
          keyIdea: 'The plot function is a common starting point for visualizing one variable against another.',
          exampleTitle: 'Example',
          exampleCode: 'x = 0:0.5:5\ny = x.^2\nplot(x, y)',
          questions: [
            { prompt: '1. Which MATLAB function is commonly used to make a basic x-y graph?', placeholder: 'Type your answer here', accept: ['plot'], correctText: 'Correct! plot is the standard basic graphing function.' },
            { prompt: '2. After editing a script, what should a student do to see the updated result?', placeholder: 'Type your answer here', accept: ['run it', 'run', 'execute it', 'execute'], correctText: 'Correct! The script needs to be run again to show the update.' }
          ]
        }
      ]
    }
  },
  ros2: {
    label: 'ROS2',
    shortLabel: 'ROS2',
    icon: '🤖',
    hubTitle: 'ROS2 Learning Hub',
    hubIntro: 'Choose how you want to learn ROS2: set up the environment, work through guided mini lessons, or practice reading package and command documentation.',
    recommendedFor: 'Students in robotics courses who need help with workspaces, nodes, topics, packages, and command-line workflows.',
    cards: {
      installation: 'Step-by-step setup guidance for sourcing the environment, creating a workspace, and building a first package.',
      tutorial: 'Guided explanations, mini checks, and saved progress that help students understand ROS2 concepts clearly.',
      documentation: 'Learn how ROS2 docs, package references, and command examples are organized so students can find what they need faster.'
    },
    install: {
      heroTitle: 'ROS2 Setup Guide',
      heroText: 'These steps assume your course has already chosen a ROS2 distribution and that the system image or machine is ready for robotics work.',
      steps: [
        { title: 'Step 1: Source the main ROS2 environment', text: 'Open a terminal and source the distribution setup file so ROS2 commands become available in that terminal session.', command: 'source /opt/ros/humble/setup.bash' },
        { title: 'Step 2: Check the ROS2 command', text: 'After sourcing, ask ROS2 for help or version information to confirm the command is available.', command: 'ros2 --help' },
        { title: 'Step 3: Create a workspace', text: 'A workspace is the main folder where your packages and build artifacts live.', command: 'mkdir -p ~/ros2_ws/src\ncd ~/ros2_ws' },
        { title: 'Step 4: Build the workspace', text: 'Build the workspace after packages are added so ROS2 can generate the needed files.', command: 'colcon build' },
        { title: 'Step 5: Source the workspace setup file', text: 'After building, source the install setup file so your terminal can find packages from this workspace.', command: 'source install/setup.bash' }
      ]
    },
    docs: {
      heroTitle: 'ROS2 Documentation Guide',
      heroText: 'ROS2 documentation can feel scattered across tutorials, package pages, and command references, so students need a repeatable reading strategy.',
      overviewTitle: 'Why documentation matters',
      overviewText: 'Students use ROS2 documentation to understand how commands work, how packages are organized, and how nodes, topics, services, and messages connect together.',
      structure: [
        { title: 'Command reference', text: 'Many pages focus on a command and show flags, arguments, and examples.' },
        { title: 'Package overview', text: 'Package pages explain what the package provides and how it fits into the system.' },
        { title: 'Message or interface info', text: 'These sections describe the data structure being passed between nodes.' },
        { title: 'Tutorial examples', text: 'Walkthroughs show the order of commands students should try in the terminal.' }
      ],
      example: {
        title: 'Worked Example — ros2 topic list',
        description: 'Students can practice separating the command name from the action and expected output.',
        code: 'ros2 topic list',
        bullets: [
          'ros2 is the main command prefix.',
          'topic selects the topic tools.',
          'list asks for the currently available topics.',
          'The result is a list of topic names active in the system.'
        ]
      },
      strategy: [
        'Read the full command first and separate it into prefix, tool, and action.',
        'Look for example terminal output so you know what success looks like.',
        'Check whether the page expects a sourced environment or built workspace.',
        'Run one command at a time instead of copying an entire long sequence blindly.'
      ],
      mistakes: [
        'Skipping the sourcing step and assuming the command is broken.',
        'Mixing commands from different distributions or workspaces.',
        'Ignoring whether a page is about a node, topic, service, or package.'
      ],
      checklist: [
        'What command or package is this page about?',
        'What setup is required first?',
        'What output should I expect?',
        'Which example should I try first?'
      ]
    },
    tutorial: {
      title: 'ROS2 Foundations',
      tag: 'ROS2 Tutorial',
      intro: 'This tutorial breaks ROS2 basics into four mini lessons so students can build a clean mental model of the workflow.',
      outcomes: ['Workspaces', 'Nodes and Topics', 'Packages and Build', 'Command Line Tools'],
      lessons: [
        {
          id: 'lesson1',
          title: 'Mini Lesson 1 — Workspaces',
          summary: 'A ROS2 workspace is the main folder that holds packages, source files, build output, and install files.',
          keyIdea: 'Students often work inside a workspace so build tools and package discovery stay organized.',
          exampleTitle: 'Example',
          exampleCode: 'mkdir -p ~/ros2_ws/src\ncd ~/ros2_ws',
          questions: [
            { prompt: '1. What is the main folder for ROS2 project work usually called?', placeholder: 'Type your answer here', accept: ['workspace', 'a workspace'], correctText: 'Correct! That main project folder is called a workspace.' },
            { prompt: '2. Why do students source a setup file in ROS2?', placeholder: 'Type your answer here', accept: ['to load the environment', 'load the environment', 'to set the environment', 'set the environment'], correctText: 'Correct! Sourcing loads the ROS2 environment into the current terminal.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Mini Lesson 2 — Nodes and Topics',
          summary: 'Nodes do work, and topics help nodes exchange streams of messages.',
          keyIdea: 'A node is a running program in ROS2. A topic is a named channel that nodes can publish to or subscribe to.',
          exampleTitle: 'Example',
          exampleCode: 'node A publishes sensor data\nnode B subscribes to sensor data',
          questions: [
            { prompt: '1. What is a node in ROS2?', placeholder: 'Type your answer here', accept: ['a program', 'running program', 'process', 'a process'], correctText: 'Correct! A node is a running program or process in ROS2.' },
            { prompt: '2. What does a topic carry between nodes?', placeholder: 'Type your answer here', accept: ['messages', 'data', 'message', 'information'], correctText: 'Correct! Topics carry messages or data between nodes.' }
          ]
        },
        {
          id: 'lesson3',
          title: 'Mini Lesson 3 — Packages and Build',
          summary: 'Packages organize code and metadata, while the build system prepares them for use.',
          keyIdea: 'ROS2 packages keep related code together. Students usually build a workspace with colcon after making or changing packages.',
          exampleTitle: 'Example',
          exampleCode: 'ros2 pkg create my_package\ncolcon build',
          questions: [
            { prompt: '1. Which tool is commonly used to build a ROS2 workspace?', placeholder: 'Type your answer here', accept: ['colcon', 'colcon build'], correctText: 'Correct! colcon is the common ROS2 build tool.' },
            { prompt: '2. What command family is used to create a package from the terminal?', placeholder: 'Type your answer here', accept: ['ros2 pkg create', 'pkg create', 'ros2 package create'], correctText: 'Correct! ros2 pkg create is the package creation command family.' }
          ]
        },
        {
          id: 'lesson4',
          title: 'Mini Lesson 4 — Command Line Tools',
          summary: 'ROS2 command line tools help students inspect the system and debug what is running.',
          keyIdea: 'Commands such as ros2 topic list let students see what is active without opening extra code files first.',
          exampleTitle: 'Example',
          exampleCode: 'ros2 topic list\nsource install/setup.bash',
          questions: [
            { prompt: '1. What main command prefix starts many ROS2 terminal commands?', placeholder: 'Type your answer here', accept: ['ros2'], correctText: 'Correct! ros2 is the main command prefix.' },
            { prompt: '2. After building a workspace, which setup file is commonly sourced so the workspace packages are found?', placeholder: 'Type your answer here', accept: ['install/setup.bash', 'source install/setup.bash'], correctText: 'Correct! Students commonly source install/setup.bash after building.' }
          ]
        }
      ]
    }
  },
  java: {
    label: 'Java',
    shortLabel: 'Java',
    icon: '☕',
    hubTitle: 'Java Learning Hub',
    hubIntro: 'Choose how you want to learn Java: set up the JDK, work through guided mini lessons, or practice reading API-style documentation.',
    recommendedFor: 'Students learning object-oriented programming, class structure, methods, and project-oriented coursework.',
    cards: {
      installation: 'Step-by-step setup guidance for a JDK, terminal checks, compiling source files, and running a first program.',
      tutorial: 'Guided explanations, mini checks, and saved progress that help students build Java fundamentals clearly.',
      documentation: 'Learn how Java API pages describe classes, methods, constructors, and return types in a predictable format.'
    },
    install: {
      heroTitle: 'Java Setup Guide',
      heroText: 'Use these steps to confirm that the Java runtime and compiler are available and that you can compile a simple class.',
      steps: [
        { title: 'Step 1: Check the Java runtime', text: 'Open a terminal and confirm that Java itself is available.', command: 'java -version' },
        { title: 'Step 2: Check the Java compiler', text: 'The compiler is what turns .java files into bytecode the runtime can execute.', command: 'javac -version' },
        { title: 'Step 3: Install a JDK if needed', text: 'Use the JDK version required by your course, not only a runtime package.' },
        { title: 'Step 4: Create and compile a simple class', text: 'Save a HelloWorld.java file and compile it from the terminal.', command: 'javac HelloWorld.java' },
        { title: 'Step 5: Run the compiled class', text: 'After compilation, run the class by name without the .class extension.', command: 'java HelloWorld' }
      ]
    },
    docs: {
      heroTitle: 'Java Documentation Guide',
      heroText: 'Java API documentation becomes much easier when students treat it as a map of classes, methods, constructors, and return types.',
      overviewTitle: 'Why documentation matters',
      overviewText: 'Students use Java documentation to see what methods belong to a class, what each method accepts, and what comes back after the call.',
      structure: [
        { title: 'Class name', text: 'Start by identifying which class the page describes.' },
        { title: 'Constructors and methods', text: 'Separate how an object is created from what it can do afterward.' },
        { title: 'Parameters and returns', text: 'Look at each method signature carefully to see inputs and outputs.' },
        { title: 'Examples', text: 'Examples help students connect the API page to code they can write themselves.' }
      ],
      example: {
        title: 'Worked Example — String.length()',
        description: 'Students can practice seeing which method belongs to which class.',
        code: 'String name = "Maya";\nSystem.out.println(name.length());',
        bullets: [
          'The class involved is String.',
          'The method is length().',
          'It returns how many characters are in the string.',
          'The output here is 4.'
        ]
      },
      strategy: [
        'Find the class name before reading any methods.',
        'Read the method signature slowly from left to right.',
        'Check the return type before using the method in an expression.',
        'Match one documentation example to one line in your own program.'
      ],
      mistakes: [
        'Confusing a constructor with a method.',
        'Ignoring the return type and using the result incorrectly.',
        'Looking at the class page but not the method details.'
      ],
      checklist: [
        'Which class am I on?',
        'Which method or constructor do I need?',
        'What inputs are required?',
        'What does the method return?'
      ]
    },
    tutorial: {
      title: 'Java Foundations',
      tag: 'Java Tutorial',
      intro: 'This tutorial breaks Java basics into four mini lessons so students can move from simple values to object-oriented thinking.',
      outcomes: ['Variables and Types', 'Classes and Objects', 'Methods', 'Conditionals and Loops'],
      lessons: [
        {
          id: 'lesson1',
          title: 'Mini Lesson 1 — Variables and Types',
          summary: 'Java variables store values, and their types tell the program what kind of value is expected.',
          keyIdea: 'Students often begin with int, double, boolean, and String. The type appears before the variable name in a declaration.',
          exampleTitle: 'Example',
          exampleCode: 'int score = 10;\ndouble price = 3.5;\nString name = "Maya";',
          questions: [
            { prompt: '1. What does a variable store?', placeholder: 'Type your answer here', accept: ['a value', 'value', 'data', 'information'], correctText: 'Correct! A variable stores a value.' },
            { prompt: '2. Which Java type is commonly used for whole numbers?', placeholder: 'Type your answer here', accept: ['int'], correctText: 'Correct! int is the common whole-number type.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Mini Lesson 2 — Classes and Objects',
          summary: 'Java organizes many programs around classes and the objects created from them.',
          keyIdea: 'A class is a blueprint. An object is an instance created from that blueprint.',
          exampleTitle: 'Example',
          exampleCode: 'class Student {\n    String name;\n}',
          questions: [
            { prompt: '1. What is the blueprint for creating objects called?', placeholder: 'Type your answer here', accept: ['class', 'a class'], correctText: 'Correct! The blueprint is called a class.' },
            { prompt: '2. What do we call a specific thing created from a class?', placeholder: 'Type your answer here', accept: ['object', 'instance', 'an object', 'an instance'], correctText: 'Correct! That created thing is an object or instance.' }
          ]
        },
        {
          id: 'lesson3',
          title: 'Mini Lesson 3 — Methods',
          summary: 'Methods group behavior so students can reuse code instead of repeating long blocks.',
          keyIdea: 'A method is a named block of code. Some methods take inputs, some return values, and some do both.',
          exampleTitle: 'Example',
          exampleCode: 'public static int doubleValue(int x) {\n    return x * 2;\n}',
          questions: [
            { prompt: '1. What is a method?', placeholder: 'Type your answer here', accept: ['a block of code', 'function', 'named block of code', 'behavior'], correctText: 'Correct! A method is a named block of code or behavior.' },
            { prompt: '2. What method name begins the main entry point of many Java programs?', placeholder: 'Type your answer here', accept: ['main', 'public static void main'], correctText: 'Correct! main is the program entry method name students usually see first.' }
          ]
        },
        {
          id: 'lesson4',
          title: 'Mini Lesson 4 — Conditionals and Loops',
          summary: 'Students use conditionals to make decisions and loops to repeat actions.',
          keyIdea: 'if handles decisions, while repeats while a condition stays true, and for is a common counted loop.',
          exampleTitle: 'Example',
          exampleCode: 'if (score > 90) {\n    System.out.println("Great job");\n}\nfor (int i = 0; i < 3; i++) {\n    System.out.println(i);\n}',
          questions: [
            { prompt: '1. Which keyword starts a conditional branch in Java?', placeholder: 'Type your answer here', accept: ['if'], correctText: 'Correct! if starts a conditional branch.' },
            { prompt: '2. Which loop is commonly used when the number of repetitions is known?', placeholder: 'Type your answer here', accept: ['for', 'for loop'], correctText: 'Correct! A for loop is the common counted loop.' }
          ]
        }
      ]
    }
  },
  javascript: {
    label: 'JavaScript',
    shortLabel: 'JavaScript',
    icon: '⚡',
    hubTitle: 'JavaScript Learning Hub',
    hubIntro: 'Choose how you want to learn JavaScript: set up a local runtime, work through guided mini lessons, or practice reading web-focused documentation.',
    recommendedFor: 'Students building web pages, interactive interfaces, small browser tools, and front-end projects for coursework.',
    cards: {
      installation: 'Step-by-step setup guidance for a browser workflow or local Node.js runtime and a first test script.',
      tutorial: 'Guided explanations, mini checks, and saved progress that help students build JavaScript fundamentals.',
      documentation: 'Learn how web and JavaScript documentation is structured so students can find syntax, methods, events, and examples quickly.'
    },
    install: {
      heroTitle: 'JavaScript Setup Guide',
      heroText: 'Use these steps to confirm that you can run JavaScript either in the browser console or with a local Node.js installation.',
      steps: [
        { title: 'Step 1: Choose how you will run JavaScript', text: 'Students often begin in the browser console or with Node.js for local files. Either path is fine for beginner practice.' },
        { title: 'Step 2: Check Node.js if you plan to run scripts locally', text: 'If your course uses local script files, confirm that Node.js is installed.', command: 'node --version' },
        { title: 'Step 3: Create a project folder', text: 'Keep your .js files together so it is easier to test and revise them.', command: 'mkdir my-js-project\ncd my-js-project' },
        { title: 'Step 4: Save a first test script', text: 'Create a file named app.js with a simple console.log statement.', command: 'console.log("Hello from JavaScript");' },
        { title: 'Step 5: Run the script', text: 'Run the file with Node.js or load it from an HTML page if you are working in the browser.', command: 'node app.js' }
      ]
    },
    docs: {
      heroTitle: 'JavaScript Documentation Guide',
      heroText: 'JavaScript documentation often mixes language features, browser APIs, and event-driven examples, so students need a clear reading plan.',
      overviewTitle: 'Why documentation matters',
      overviewText: 'Students use JavaScript documentation to understand syntax, method behavior, events, and how browser elements can be changed from code.',
      structure: [
        { title: 'Feature or API name', text: 'Start by identifying whether the page is about the language itself or a browser object.' },
        { title: 'Syntax', text: 'Syntax lines show how the feature is called and what arguments are accepted.' },
        { title: 'Parameters and return value', text: 'These sections explain what goes in and what comes back.' },
        { title: 'Examples', text: 'Examples often show the feature inside realistic browser code.' }
      ],
      example: {
        title: 'Worked Example — textContent',
        description: 'Students can practice reading a property update in plain English.',
        code: 'const title = document.getElementById("pageTitle");\ntitle.textContent = "Welcome";',
        bullets: [
          'document.getElementById finds an element on the page.',
          'textContent changes the text inside that element.',
          'The new displayed text becomes Welcome.',
          'This is a common beginner pattern for page updates.'
        ]
      },
      strategy: [
        'Identify whether the page is about a language feature or browser API.',
        'Read the syntax line before the example.',
        'Notice whether the feature returns a value or changes something directly.',
        'Try the smallest example possible before using it in a full page.'
      ],
      mistakes: [
        'Mixing up browser APIs and core language features.',
        'Skipping the return value section.',
        'Copying an example without matching the element or variable names.'
      ],
      checklist: [
        'What object or feature is this page about?',
        'What inputs does it expect?',
        'Does it return a value or change something directly?',
        'Which example can I test first?'
      ]
    },
    tutorial: {
      title: 'JavaScript Foundations',
      tag: 'JavaScript Tutorial',
      intro: 'This tutorial breaks JavaScript basics into four mini lessons so students can move from variables to simple interactive thinking.',
      outcomes: ['Variables', 'Functions', 'DOM and Events', 'Conditionals'],
      lessons: [
        {
          id: 'lesson1',
          title: 'Mini Lesson 1 — Variables',
          summary: 'JavaScript variables store values that code can reuse and update.',
          keyIdea: 'Students often begin with let for values that may change and const for values that should stay fixed.',
          exampleTitle: 'Example',
          exampleCode: 'let score = 10;\nconst siteName = "CodeMap";',
          questions: [
            { prompt: '1. What does a variable store?', placeholder: 'Type your answer here', accept: ['a value', 'value', 'data', 'information'], correctText: 'Correct! A variable stores a value.' },
            { prompt: '2. Which keyword is commonly used for a JavaScript variable that can change?', placeholder: 'Type your answer here', accept: ['let', 'var'], correctText: 'Correct! let is the modern common answer for a changeable variable.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Mini Lesson 2 — Functions',
          summary: 'Functions group behavior into reusable pieces of code.',
          keyIdea: 'A function can take inputs called parameters and can return a result after it runs.',
          exampleTitle: 'Example',
          exampleCode: 'function doubleValue(x) {\n    return x * 2;\n}',
          questions: [
            { prompt: '1. Which keyword is commonly used to define a standard JavaScript function?', placeholder: 'Type your answer here', accept: ['function'], correctText: 'Correct! The function keyword defines a standard function.' },
            { prompt: '2. What do we call the input names inside a function definition?', placeholder: 'Type your answer here', accept: ['parameters', 'parameter'], correctText: 'Correct! Those input names are parameters.' }
          ]
        },
        {
          id: 'lesson3',
          title: 'Mini Lesson 3 — DOM and Events',
          summary: 'JavaScript often interacts with the page by reading elements and responding to user actions.',
          keyIdea: 'The DOM is the document object model. Events, such as clicks, tell JavaScript when something happened on the page.',
          exampleTitle: 'Example',
          exampleCode: 'button.addEventListener("click", handleClick);',
          questions: [
            { prompt: '1. What does DOM stand for?', placeholder: 'Type your answer here', accept: ['document object model'], correctText: 'Correct! DOM stands for document object model.' },
            { prompt: '2. Which event name is often used when a button is pressed?', placeholder: 'Type your answer here', accept: ['click'], correctText: 'Correct! click is the common button event name.' }
          ]
        },
        {
          id: 'lesson4',
          title: 'Mini Lesson 4 — Conditionals',
          summary: 'Conditionals help JavaScript choose between different actions.',
          keyIdea: 'An if statement runs code only when its condition is true.',
          exampleTitle: 'Example',
          exampleCode: 'if (score > 50) {\n    console.log("Pass");\n}',
          questions: [
            { prompt: '1. Which keyword starts a conditional branch in JavaScript?', placeholder: 'Type your answer here', accept: ['if'], correctText: 'Correct! if starts a conditional branch.' },
            { prompt: '2. Which boolean value means the opposite of true?', placeholder: 'Type your answer here', accept: ['false'], correctText: 'Correct! false is the opposite of true.' }
          ]
        }
      ]
    }
  }
};