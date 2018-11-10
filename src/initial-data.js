const initialData = {
    cisCourses: {
        'cis210':
        {
            id: 'cis210', 
            context: 'Basic concepts and practices of computer science (basic Python).',
            preReq: []
        },
        'cis211':
        {
            id: 'cis211',
            context: 'Basic concepts and practices of computer science (extend Python).',
            preReq: ['cis210']
        },
        'cis212':
        {
            id: 'cis212',
            context: 'Basic concepts and practices of computer science (basic language C).',
            preReq: ['cis211']
        },
        'cis313':
        {
            id: 'cis313',
            context: 'Design and analysis of data structures as means of engineering efficient software.',
            preReq: ['cis210', 'cis211', 'cis212']
        },
        'cis314':
        {
            id: 'cis314',
            context: 'Introduction to computer organization and instruction-set architecture--digital logic design, binary arithmetic, design of central processing unit and memory, machine-level programming.',
            preReq: ['cis210', 'cis211', 'cis212']
        },
        'cis315':
        {
            id: 'cis315',
            context: 'Algorithm design, worst-case and average-behavior analysis, correctness, computational complexity.',
            preReq: ['cis313']
        },
        'cis322':
        {
            id: 'cis322',
            context: 'A project-intensive introduction to software engineering intended to build skills, knowledge, and habits of mind that prepare students for 400-level computer science courses, internships, and other software.',
            preReq: ['cis210', 'cis211', 'cis212']
        },
        'cis330':
        {
            id: 'cis330',
            context: 'Practical software design and programming activities in a C/C++ and Unix environment, with emphasis on the details of C/C++ and good programming style and practices.',
            preReq: ['cis314']
        },
        'cis399':
        {
            id: 'cis399',
            context: 'Different Topic',
            preReq: ['cis212']
        },
        'cis407':
        {
            id: 'cis407',
            context: 'This seminar focuses on careers and internships for CIS students. It will cover resume preparation and polishing, interviewing skills, and will have talks by local companies on work environments, career choices, internship opportunities, and how best to prepare for a career in Computer Science. We will also read articles about the current job market and CS related job prospects.',
            preReq: []
        },
        'cis415':
        {
            id: 'cis415',
            context: 'Principles of operating system design. Process and memory management, concurrency, scheduling, input-output and file systems, security.',
            preReq: ['cis313', 'cis330']
        },
        'cis425':
        {
            id: 'cis425',
            context: 'Syntax and semantics. Scope rules, environments, stores, denoted and expressed values, procedures, and parameters. Definitional interpreters. Types, overloading, parametric polymorphism, and inheritance. Varieties of abstraction.',
            preReq: ['cis315']
        },
        'cis410':
        {
            id: 'cis410',
            context: 'Different Topic',
            preReq: []
        },
        'cis413':
        {
            id: 'cis413',
            context: 'Complex structures, storage management, sorting and searching, hashing, storage of texts, and information compression.',
            preReq: ['cis315']
        },
        'cis420':
        {
            id: 'cis420',
            context: 'Provides a mathematical basis for computability and complexity. Models of computation, formal languages, Turing machines, solvability. Nondeterminism and complexity classes.',
            preReq: ['cis315']
        },
        'cis422':
        {
            id: 'cis422',
            context: 'Technical and nontechnical aspects of software development, including specification, planning, design, development, management and maintenance of software projects. Student teams complete projects.',
            preReq: ['cis313']
        },
        'cis427':
        {
            id: 'cis427',
            context: 'Basic notions of logic: propositional logic, first-order logic, Hilbert systems, sequent calculus, natural deduction. Soundness, completeness, undecidability. Current research in logic frameworks, automated deduction, Curry-Howard isomorphism.',
            preReq: ['cis315', 'cis425']
        },
        'cis431':
        {
            id: 'cis413',
            context: 'Parallel architecture, theory, algorithms, and programming with emphasis on parallel programming, focusing on models, languages, libraries, and runtime systems.',
            preReq: ['cis330']
        },
        'cis432':
        {
            id: 'cis432',
            context: 'Principles of computer network design. Link technologies, packet switching, routing, inter-networking, reliability. Internet protocols. Programming assignments focus on protocol design.',
            preReq: ['cis330', 'cis415']
        },
        'cis433':
        {
            id: 'cis433',
            context: 'Security for various aspects of computers and networks. Elementary cryptography, program security, trusted operating systems, network security, privacy, and legal and ethical issues.',
            preReq: ['cis415']
        },
        'cis441':
        {
            id: 'cis441',
            context: 'Introduction to the hardware, geometrical transforms, interaction techniques, and shape representation schemes that are important in interactive computer graphics. Programming assignments using contemporary graphics hardware and software systems.',
            preReq: ['cis330']
        },
        'cis443':
        {
            id: 'cis443',
            context: 'Introduction to user interface software engineering. Emphasis on theory of interface design, understanding the behavior of the user, and implementing programs on advanced systems.',
            preReq: ['cis313']
        },
        'cis445':
        {
            id: 'cis445',
            context: 'Theoretical foundations and practical problems for the modeling and computer simulation of discrete and continuous systems. Simulation languages, empirical validation, applications in computer science.',
            preReq: ['cis315', 'cis330']
        },
        'cis451':
        {
            id: 'cis451',
            context: 'Fundamental concepts of DBMS. Data modeling, relational models and normal forms. File organization and index structures. SQL, embedded SQL, and concurrency control.',
            preReq: ['cis313', 'cis314']
        },
        'cis453':
        {
            id: 'cis453',
            context: 'Databases, machine learning, artificial intelligence, statistics, and data visualization. Examines data warehouses, data preprocessing, association and classification rule mining, and cluster analysis.',
            preReq: ['cis451']
        },
        'cis461':
        {
            id: 'cis461',
            context: 'Lexical analysis, parsing, attribution, code generation. (cis420 strongly recommended)',
            preReq: ['cis314', 'cis425']
        },
        'cis471':
        {
            id: 'cis471',
            context: 'Basic themes, issues, and techniques of artificial intelligence, including agent architecture, knowledge representation and reasoning, problem solving and planning, game playing, and learning.',
            preReq: ['cis315']
        },
        'cis472':
        {
            id: 'cis472',
            context: 'A broad introduction to machine learning and its established algorithms. Topics include concept learning, decision trees, neural network.',
            preReq: ['cis315']
        }

    }
};

export default initialData;