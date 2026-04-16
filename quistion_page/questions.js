// const questions = [

// {
// question: "In computer networking, a protocol defines rules for communication between devices. Which of the following protocols is primarily responsible for reliable data transmission, ensuring packets arrive in correct order and without loss over the internet?",
// options: [
// "HTTP Protocol used for web communication",
// "TCP Protocol used for reliable transmission",
// "FTP Protocol used for file transfer",
// "IP Protocol used for addressing"
// ],
// answer: 1
// }

// question.js

// let questions = [
//   {
//     question: "Who is father of C language?",
//     options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido"],
//     answer: 0,
//     explanation: "Dennis Ritchie developed C language."
//   }
// ];
// let questions = [
//   {
//     question: "Which data structure uses FIFO (First In First Out)?",
//     options: ["Stack", "Queue", "Tree", "Graph"],
//     answer: 1,
//     explanation: "Queue follows FIFO where the first inserted element is the first to be removed."
//   },

//   {
//     question: "Which protocol is used to send emails?",
//     options: ["HTTP", "FTP", "SMTP", "TCP"],
//     answer: 2,
//     explanation: "SMTP (Simple Mail Transfer Protocol) is used for sending emails."
//   },

//   {
//     question: "What is the time complexity of binary search?",
//     options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
//     answer: 1,
//     explanation: "Binary search divides the array into halves repeatedly, giving O(log n)."
//   },

//   {
//     question: "Which normal form removes partial dependency in DBMS?",
//     options: ["1NF", "2NF", "3NF", "BCNF"],
//     answer: 1,
//     explanation: "2NF removes partial dependency from the table."
//   },

//   {
//     question: "Which AI technique is used for decision-making problems?",
//     options: ["Searching", "Sorting", "Compression", "Encryption"],
//     answer: 0,
//     explanation: "Searching algorithms like BFS and DFS are used in AI decision-making."
//   },

//   // 🔥 Long paragraph question (CN)
//   {
//     question: "In computer networks, data communication between devices occurs using layered architecture. The OSI model consists of seven layers, each having a specific function such as data representation, session management, and routing. Which layer of the OSI model is responsible for routing packets from source to destination across multiple networks?",
//     options: ["Transport Layer", "Network Layer", "Session Layer", "Presentation Layer"],
//     answer: 1,
//     explanation: "The Network Layer is responsible for routing packets between devices across networks."
//   },

//   // 🔥 Long paragraph question (DBMS)
//   {
//     question: "A database system ensures that data is stored efficiently and can be retrieved without redundancy. To achieve this, normalization is applied. Consider a table where some attributes depend only on part of a composite primary key instead of the whole key. This violates which normal form?",
//     options: ["1NF", "2NF", "3NF", "4NF"],
//     answer: 1,
//     explanation: "Partial dependency violates 2NF."
//   },

//   {
//     question: "Which data structure is used in recursion?",
//     options: ["Queue", "Stack", "Linked List", "Heap"],
//     answer: 1,
//     explanation: "Stack is used in recursion because function calls are stored in call stack."
//   },

//   // 🔥 Long paragraph question (AI)
//   {
//     question: "Artificial Intelligence systems often rely on learning from past data to make predictions. Machine learning is a subset of AI where systems improve automatically through experience. Which type of machine learning involves training a model using labeled data?",
//     options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Deep Learning"],
//     answer: 1,
//     explanation: "Supervised learning uses labeled datasets to train models."
//   },

//   {
//     question: "Which algorithm is used to find the shortest path in a graph?",
//     options: ["DFS", "BFS", "Dijkstra", "Merge Sort"],
//     answer: 2,
//     explanation: "Dijkstra's algorithm is used to find the shortest path in weighted graphs."
//   }
// ];

let questions = [
{
question: "Which data structure is best for implementing recursion?",
options: ["Queue", "Stack", "Array", "Linked List"],
answer: 1,
explanation: "Recursion internally uses stack data structure because function calls are stored in a last-in, first-out manner, allowing proper tracking of execution flow and returning control after each recursive call completes."
},
{
question: "What will be the output of: printf(\"%d\", ++i + i++); (i = 5)?",
options: ["11", "12", "Undefined", "10"],
answer: 2,
explanation: "The expression modifies variable i multiple times without sequence points, leading to undefined behavior in C. Compiler may produce unpredictable results, so output cannot be determined reliably."
},
{
question: "Which normal form eliminates transitive dependency?",
options: ["1NF", "2NF", "3NF", "BCNF"],
answer: 2,
explanation: "Third Normal Form removes transitive dependency by ensuring non-key attributes depend only on primary key. This reduces redundancy and improves database consistency by structuring relations efficiently and logically."
},
{
question: "Which algorithm has worst-case time complexity O(n log n)?",
options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Selection Sort"],
answer: 2,
explanation: "Merge sort always divides array into equal halves and merges them in sorted order, ensuring worst-case time complexity remains O(n log n), unlike quick sort which can degrade to O(n^2)."
},
{
question: "Which OS scheduling algorithm may cause starvation?",
options: ["FCFS", "Round Robin", "Priority Scheduling", "SJF"],
answer: 2,
explanation: "Priority scheduling may cause starvation when low-priority processes wait indefinitely if higher-priority processes keep arriving continuously, preventing fair CPU allocation and execution for all processes in system."
},
{
question: "Which layer of OSI model is responsible for encryption?",
options: ["Transport", "Presentation", "Session", "Application"],
answer: 1,
explanation: "Presentation layer handles data encryption, compression, and translation. It ensures that data is converted into readable format and secured before transmission between different systems over network communication."
},
{
question: "Which traversal technique uses a queue data structure?",
options: ["DFS", "Inorder", "Preorder", "BFS"],
answer: 3,
explanation: "Breadth First Search uses a queue to explore nodes level by level. It ensures all nodes at current depth are visited before moving deeper into the graph or tree structure."
},
{
question: "Which SQL command is used to remove duplicate records?",
options: ["DELETE", "REMOVE", "DISTINCT", "UNIQUE"],
answer: 2,
explanation: "DISTINCT keyword is used in SELECT queries to eliminate duplicate records from result set, ensuring only unique values are returned based on specified columns in database queries."
},
{
question: "Which concept allows multiple functions with same name but different parameters?",
options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
answer: 2,
explanation: "Polymorphism allows functions to have same name with different parameters or behavior. It enhances flexibility and reusability in object-oriented programming by enabling method overloading and overriding concepts."
},
{
question: "Which data structure provides fastest search in average case?",
options: ["Array", "Binary Search Tree", "Hash Table", "Linked List"],
answer: 2,
explanation: "Hash tables provide average O(1) time complexity for search operations using hash functions. They map keys to indices efficiently, making lookup extremely fast compared to other data structures."
}
];



questions.push(

{
question: "Which protocol is used to transfer web pages over internet?",
options: ["FTP", "HTTP", "SMTP", "SNMP"],
answer: 1,
explanation: "HTTP protocol is used to transfer web pages between client and server. It defines communication rules for browsers and web servers to exchange hypertext documents over internet."
},

{
question: "Which device operates at network layer in OSI model?",
options: ["Switch", "Hub", "Router", "Repeater"],
answer: 2,
explanation: "Router works at network layer and is responsible for routing packets based on IP address. It connects multiple networks and determines best path for data transmission."
},

{
question: "What is the main function of an operating system?",
options: ["Compile code", "Manage resources", "Design UI", "Execute SQL"],
answer: 1,
explanation: "Operating system manages hardware resources like CPU, memory, and I/O devices. It acts as interface between user and system ensuring efficient program execution and resource allocation."
},

{
question: "Which number system uses only 0 and 1 digits?",
options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
answer: 1,
explanation: "Binary system uses only digits 0 and 1. It is fundamental for digital systems because computers operate using binary signals representing ON and OFF states internally."
},

{
question: "Which HTML tag is used to create hyperlink?",
options: ["<link>", "<a>", "<href>", "<url>"],
answer: 1,
explanation: "Anchor tag <a> is used to create hyperlinks in HTML. It connects one webpage to another using href attribute, enabling navigation across web resources."
},

// ---------- LONG QUESTIONS START ----------

{
question: "In computer networks, which protocol ensures reliable data transmission by using acknowledgments, retransmission mechanisms, and proper sequencing of packets across unreliable communication channels?",
options: [
"Hypertext Transfer Protocol used for web page transfer",
"Transmission Control Protocol ensuring reliable ordered delivery",
"User Datagram Protocol providing connectionless fast communication",
"Simple Mail Transfer Protocol used for sending emails",
"Internet Control Message Protocol for error reporting messages"
],
answer: 1,
explanation: "TCP ensures reliable communication by using acknowledgments, retransmissions, and sequencing. It guarantees ordered data delivery even if packets are lost or arrive out of sequence during transmission."
},

{
question: "Which operating system scheduling algorithm selects the process with the shortest execution time remaining and may lead to starvation of longer processes in continuous job arrival scenarios?",
options: [
"First Come First Serve scheduling without priority handling",
"Round Robin scheduling using time quantum cycles",
"Shortest Job First selecting smallest burst time process",
"Priority scheduling assigning importance to each process",
"Multilevel queue scheduling dividing processes into categories"
],
answer: 2,
explanation: "Shortest Job First selects smallest execution time process. It improves average waiting time but may cause starvation for longer processes if shorter jobs continuously arrive in system."
},

{
question: "In digital electronics, which logic gate produces output true only when both input signals are true and is commonly used in arithmetic circuits and decision making logic designs?",
options: [
"OR gate producing true if any input true",
"AND gate producing true when both inputs true",
"NOT gate inverting input signal logic value",
"NAND gate combining AND followed by negation",
"XOR gate producing true when inputs differ"
],
answer: 1,
explanation: "AND gate outputs true only when both inputs are true. It is widely used in arithmetic circuits, control logic, and decision-making operations in digital systems design."
},

{
question: "Which layer in OSI model is responsible for establishing maintaining and terminating communication sessions between applications ensuring synchronization and dialog control between communicating systems?",
options: [
"Transport layer ensuring end to end delivery reliability",
"Session layer managing connection establishment and termination",
"Network layer handling logical addressing and routing",
"Presentation layer responsible for data formatting encryption",
"Application layer providing services to end users"
],
answer: 1,
explanation: "Session layer manages communication sessions including setup, synchronization, and termination. It ensures proper coordination between systems during data exchange in network communication process."
},

{
question: "In web technology, which JavaScript concept allows functions to access variables from their parent scope even after the parent function has finished execution creating persistent lexical environments?",
options: [
"Callback functions handling asynchronous operations in JavaScript",
"Closures preserving outer function variables for later use",
"Promises managing asynchronous execution with chaining",
"Event listeners responding to user interactions in browser",
"Arrow functions simplifying syntax of function expressions"
],
answer: 1,
explanation: "Closures allow functions to access variables from outer scope even after execution ends. They maintain lexical environment enabling data persistence and powerful functional programming patterns."
},

// ---------- MORE MIX QUESTIONS ----------

{
question: "Which memory is volatile in nature?",
options: ["ROM", "RAM", "Hard Disk", "SSD"],
answer: 1,
explanation: "RAM is volatile memory meaning data is lost when power is turned off. It is used for temporary storage during program execution for faster processing."
},

{
question: "Which protocol is used for sending emails?",
options: ["HTTP", "FTP", "SMTP", "SNMP"],
answer: 2,
explanation: "SMTP protocol is used for sending emails over network. It defines rules for mail transfer between servers ensuring proper delivery of electronic messages."
},

{
question: "Which data structure uses LIFO principle?",
options: ["Queue", "Stack", "Tree", "Graph"],
answer: 1,
explanation: "Stack follows Last In First Out principle where last inserted element is removed first. It is used in recursion, expression evaluation, and backtracking algorithms."
},

{
question: "Which device broadcasts data to all ports?",
options: ["Switch", "Router", "Hub", "Bridge"],
answer: 2,
explanation: "Hub broadcasts incoming data to all connected devices without filtering. It operates at physical layer and does not maintain any address table for forwarding decisions."
},

// ---------- Continue up to 60 ----------

{
question: "Which CSS property is used to change text color?",
options: ["font-color", "text-color", "color", "background-color"],
answer: 2,
explanation: "Color property is used to change text color in CSS. It accepts different formats like names, hex values, RGB, and HSL to style webpage content visually."
},

{
question: "Which topology connects all devices to central node?",
options: ["Ring", "Bus", "Star", "Mesh"],
answer: 2,
explanation: "Star topology connects all devices to a central hub or switch. It is easy to manage and isolate faults but depends heavily on central node functionality."
},

{
question: "Which type of signal is used in digital systems?",
options: ["Analog", "Continuous", "Discrete", "Random"],
answer: 2,
explanation: "Digital systems use discrete signals representing binary values. These signals have finite states like 0 and 1 making them reliable for computation and data processing."
},

{
question: "Which HTTP method is used to send data to server?",
options: ["GET", "POST", "DELETE", "PUT"],
answer: 1,
explanation: "POST method sends data to server securely in request body. It is commonly used in form submissions where sensitive data should not be exposed in URL."
},

// Add filler to reach 60 total

{
question: "Which OS component manages files?",
options: ["Kernel", "File System", "Shell", "Compiler"],
answer: 1,
explanation: "File system manages storage organization, file access, and retrieval. It ensures data is stored efficiently and accessed securely in operating system environment."
},

{
question: "Which number system has base 16?",
options: ["Binary", "Decimal", "Octal", "Hexadecimal"],
answer: 3,
explanation: "Hexadecimal system has base 16 using digits 0-9 and letters A-F. It is widely used in computing for memory representation and compact binary expression."
}

);

questions.push(

{
question: "In computer networks, which addressing method uniquely identifies a device on internet using logical addressing scheme assigned by network administrator or ISP for communication?",
options: [
"MAC address identifying hardware interface uniquely",
"IP address used for logical device identification",
"Port number identifying specific service on device",
"URL used for locating resources on web",
"Subnet mask defining network and host parts"
],
answer: 1,
explanation: "IP address uniquely identifies a device on network using logical addressing. It enables communication between systems across internet by defining source and destination for packet routing."
},

{
question: "Which multimedia component is responsible for representing visual information through sequence of images displayed rapidly to create illusion of motion in digital systems?",
options: [
"Audio signals carrying sound information digitally",
"Text representing characters and readable content",
"Video displaying frames to simulate motion effect",
"Graphics showing still images and illustrations",
"Animation using frames for dynamic visual effects"
],
answer: 2,
explanation: "Video consists of sequence of frames displayed rapidly creating motion illusion. It is widely used in multimedia systems for communication, entertainment, and visualization of dynamic content."
},

{
question: "Which digital system component is responsible for storing binary information temporarily during processing and allows quick access by CPU for execution of instructions?",
options: [
"ALU performing arithmetic and logical operations",
"Register storing small amount of fast data",
"Hard disk storing permanent large data",
"Cache memory storing frequently accessed data",
"ROM storing permanent non-volatile instructions"
],
answer: 1,
explanation: "Registers store small amounts of data temporarily for CPU operations. They provide fastest access compared to other memory types and are essential for efficient instruction execution."
},

{
question: "Which web technology allows asynchronous communication between client and server without refreshing entire webpage improving user experience in modern web applications?",
options: [
"HTML structuring content of web pages",
"CSS styling layout and visual appearance",
"AJAX enabling asynchronous data exchange dynamically",
"XML storing structured data in hierarchical format",
"JavaScript handling client side logic execution"
],
answer: 2,
explanation: "AJAX enables asynchronous communication between client and server without full page reload. It improves user experience by updating only required parts dynamically."
},

{
question: "Which operating system concept allows multiple processes to execute simultaneously by sharing CPU time and improving system utilization efficiency effectively?",
options: [
"Multitasking executing multiple processes simultaneously",
"Multiprocessing using multiple CPUs for execution",
"Time sharing allocating CPU time among users",
"Batch processing executing jobs without interaction",
"Virtual memory extending RAM using disk space"
],
answer: 0,
explanation: "Multitasking allows multiple processes to run concurrently by sharing CPU time. It improves system utilization and provides better responsiveness for users executing different applications simultaneously."
},

// ---- more long ----

{
question: "In networking, which device filters data packets based on MAC addresses and forwards them intelligently within a local network improving performance compared to broadcasting devices?",
options: [
"Hub broadcasting signals to all connected devices",
"Switch forwarding frames using MAC address table",
"Router routing packets between different networks",
"Repeater amplifying signals without filtering data",
"Bridge connecting two networks with filtering capability"
],
answer: 1,
explanation: "Switch uses MAC address table to forward frames efficiently. It reduces unnecessary traffic by sending data only to intended device improving network performance significantly."
},

{
question: "Which type of memory retains its data even after power is turned off and is commonly used to store firmware and permanent instructions in computer systems?",
options: [
"RAM storing temporary data during execution",
"Cache storing frequently accessed data quickly",
"ROM storing permanent instructions non-volatile",
"Register storing data for CPU operations",
"Virtual memory extending storage using disk"
],
answer: 2,
explanation: "ROM is non-volatile memory retaining data even without power. It stores firmware and essential instructions required to boot system and initialize hardware components."
},

{
question: "Which protocol is used to securely transfer data over internet by encrypting communication between client and server ensuring confidentiality and data integrity?",
options: [
"HTTP transferring web pages without encryption",
"HTTPS using encryption for secure communication",
"FTP transferring files without secure encryption",
"SMTP sending emails across network servers",
"Telnet providing remote access without security"
],
answer: 1,
explanation: "HTTPS uses encryption protocols like SSL/TLS to secure communication. It ensures confidentiality and integrity of data exchanged between client and server over internet."
},

{
question: "Which concept in operating system allows process to use more memory than physically available by using disk space as extension of RAM?",
options: [
"Paging dividing memory into fixed size blocks",
"Segmentation dividing memory into logical units",
"Virtual memory extending RAM using disk storage",
"Swapping moving processes between RAM and disk",
"Thrashing excessive swapping degrading performance"
],
answer: 2,
explanation: "Virtual memory allows system to use disk space as extension of RAM. It enables execution of large programs even when physical memory is limited."
},

{
question: "Which digital logic circuit is used to select one input from multiple inputs based on control signals and forward it to output line efficiently?",
options: [
"Decoder converting binary input into multiple outputs",
"Encoder converting multiple inputs into binary code",
"Multiplexer selecting one input using control signals",
"Demultiplexer distributing input into multiple outputs",
"Flip flop storing single bit of data state"
],
answer: 2,
explanation: "Multiplexer selects one input from many using control signals. It is widely used in communication systems and digital circuits for efficient data routing."
},

// ---- short mixed ----

{
question: "Which topology has highest redundancy?",
options: ["Bus", "Ring", "Star", "Mesh"],
answer: 3,
explanation: "Mesh topology provides high redundancy as each device connects to multiple devices. Failure of one link does not affect communication making network highly reliable."
},

{
question: "Which HTML tag is used for images?",
options: ["<img>", "<image>", "<src>", "<pic>"],
answer: 0,
explanation: "Image tag <img> is used to embed images in HTML. It uses src attribute to define image source and alt attribute for alternative text."
},

{
question: "Which scheduling algorithm uses time quantum?",
options: ["FCFS", "SJF", "Round Robin", "Priority"],
answer: 2,
explanation: "Round Robin scheduling assigns fixed time quantum to each process. It ensures fair CPU sharing and prevents starvation in multitasking operating systems."
},

{
question: "Which gate is universal?",
options: ["AND", "OR", "NAND", "XOR"],
answer: 2,
explanation: "NAND gate is universal because any logical operation can be implemented using only NAND gates. It is widely used in digital circuit design."
},

{
question: "Which protocol is connectionless?",
options: ["TCP", "UDP", "HTTP", "FTP"],
answer: 1,
explanation: "UDP is connectionless protocol that sends data without establishing connection. It is faster but less reliable compared to TCP."
},

{
question: "Which CSS property controls spacing inside element?",
options: ["margin", "padding", "border", "spacing"],
answer: 1,
explanation: "Padding controls space inside element between content and border. It improves layout design and spacing in web pages."
},

{
question: "Which device connects different networks?",
options: ["Switch", "Hub", "Router", "Bridge"],
answer: 2,
explanation: "Router connects different networks and routes data packets between them using IP addresses ensuring communication across networks."
},

{
question: "Which memory is fastest?",
options: ["RAM", "Cache", "Register", "ROM"],
answer: 2,
explanation: "Registers are fastest memory located inside CPU. They provide immediate access to data required for processing instructions efficiently."
},

{
question: "Which language runs in browser?",
options: ["C++", "Java", "Python", "JavaScript"],
answer: 3,
explanation: "JavaScript runs in browser enabling dynamic and interactive web pages. It is essential for client-side scripting in modern web development."
},

{
question: "Which layer handles routing?",
options: ["Transport", "Network", "Session", "Data Link"],
answer: 1,
explanation: "Network layer handles routing of packets between networks using logical addressing ensuring correct path selection for data transmission."
}

);

localStorage.setItem("questions", JSON.stringify(questions));