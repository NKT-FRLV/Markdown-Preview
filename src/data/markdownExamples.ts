export interface MarkdownExample {
  id: string;
  title: string;
  description: string;
  content: string;
  icon: string;
}

export const markdownExamples: MarkdownExample[] = [
  {
    id: 'code-example',
    title: '💻 Example with code',
    description: 'Demonstration of code syntax and blocks',
    icon: 'HiCode',
    content: `# 🚀 Programming guide

## Variables in JavaScript

\`\`\`javascript
// Variable declaration
const name = "Developer";
let age = 25;
var isActive = true;

// Greeting function
function greet(userName) {
    return \`Hello, \${userName}! Welcome to the world of code! 🎉\`;
}

console.log(greet(name));
\`\`\`

## Python code

\`\`\`python
# Class for working with users
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
    
    def get_info(self):
        return f"👤 {self.name} ({self.email})"

# Creating a user
user = User("Анна", "anna@example.com")
print(user.get_info())
\`\`\`

## Inline code

Use \`npm install\` to install packages or \`git commit -m "message"\` to commit.

> 💡 **Tip**: Always use meaningful variable names!`
  },
  {
    id: 'complex-example',
    title: '🎨 Complex elements',
    description: 'Tables, lists, links and media',
    icon: 'HiCollection',
    content: `# 📊 Complex documentation

## 📋 Task list

- [x] ✅ Create a repository
- [x] ✅ Configure CI/CD
	- [ ] 🔄 Write tests
	- [ ] 📝 Update documentation
	- [ ] 🚀 Deploy to production

## 📈 Metrics table

| Metric | Value | Status | Note |
|---------|----------|---------|------------|
| **Performance** | 95% | 🟢 Excellent | Optimized |
| **Доступность** | 87% | 🟡 Хорошо | Нужны улучшения |
| **SEO** | 92% | 🟢 Excellent | All is good |
| **Security** | 98% | 🟢 Excellent | Regular audits |

## 🔗 Useful links

- [React Documentation](https://reactjs.org/) - Official React documentation
- [TypeScript Handbook](https://www.typescriptlang.org/) - Learning TypeScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📝 Quotes

> "Code is poetry in motion. Every line should make sense."
> 
> — **Wise developer**

> ⚠️ **Important**: Always test your code before deployment!

## 🎯 Project goals

1. **Short-term (1-2 weeks)**
   - Fix critical bugs
   - Add new features
   - Improve UX

2. **Medium-term (1-3 months)**
   - Refactor codebase
   - Integrate with external APIs
   - Mobile version

3. **Long-term (3-6 months)**
   - Scaling architecture
   - Internationalization
   - AI integration

---

*Documentation updated: ${new Date().toLocaleDateString('en-US')}*`
  },
  {
    id: 'extreme-example',
    title: '🌟 Extreme example',
    description: 'All the possibilities of Markdown in one place',
    icon: 'HiSparkles',
    content: `# 🌈 EXTREME MARKDOWN EXPERIENCE 🚀

## 🎭 Welcome to the world of possibilities!

![Markdown Logo](https://markdown-here.com/img/icon256.png)

---

## 🎪 Mathematical formulas

Quadratic equation: $ax^2 + bx + c = 0$

Einstein's formula: $E = mc^2$

## 🎨 Interactive elements

### 🕵️ Secret data

| Parameter | Value |
|----------|----------|
| 🔐 Access code | \`MARKDOWN_MASTER_2024\` |
| 🎯 Level | **MAXIMUM** |

## 🎵 Emoji symphony

🎼 🎵 🎶 🎤 🎧 🎸 🥁 🎹 🎺 🎷 🪘 🎻

## 🌟 Advanced lists

### 📚 Books for study

1. **"Clean code"** - Robert Martin
   - ⭐ Rating: 5/5
   - 📖 Pages: 464
   - 🏷️ Tags: #architecture #quality #practices

2. **"Design patterns"** - Gang of Four
   - ⭐ Rating: 4.8/5
   - 📖 Pages: 395
   - 🏷️ Tags: #patterns #OOP #design

### 🛠️ Developer tools

- **IDE & Editors**
  - [ ] VS Code ⚡
  - [ ] WebStorm 🧠
  - [ ] Vim 🥷
  
- **Version control systems**
  - [x] Git 🌿
  - [ ] SVN 📚
  - [ ] Mercurial 🐍

## 🎯 Interactive elements

### 🔥 Progress bars (simulation)

**Frontend development:**
\`\`\`
████████████████████████████████████████ 100%
\`\`\`

**Backend development:**
\`\`\`
██████████████████████████████████░░░░░░  85%
\`\`\`

**DevOps:**
\`\`\`
████████████████████░░░░░░░░░░░░░░░░░░░░  50%
\`\`\`

## 🎪 Mix of everything

### 🧪 Chemical formula
H₂O + NaCl → Salt water 🧂

### 🎲 Random facts
- 🦋 Butterflies taste food with their paws
- 🐙 Octopus has three hearts
- 🍯 Honey never spoils

### 🎨 ASCII Art
\`\`\`
    🚀 MARKDOWN ROCKET 🚀
         /\\   /\\
        /  \\_/  \\
       |   o_o   |
        \\  \\_/  /
         \\_____/
           | |
          /   \\
         /_____\\
\`\`\`

## 🎊 Final chord

### 🏆 Congratulations! 🏆

**You've reached the end of the extreme example!**

🎉 🎊 🥳 🎈 🎁 🍾 🥂 ✨

---

*Created with ❤️ and boundless imagination*

> 🌟 **Remember**: Markdown is not just a markup, it's an art!

\`\`\`javascript
// Code for inspiration
const inspiration = {
  creativity: "∞",
  possibilities: "unlimited",
  fun: "maximum"
};

console.log("Keep coding! 🚀");
\`\`\`

## 🎨 UML Diagrams

### Sequence Diagram
\`\`\`mermaid
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    Bob-->>John: How about you John?
    Bob--x Alice: I am good thanks!
    Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.
    Bob-->Alice: Checking with John...
    Alice->John: Yes... John, how are you?
\`\`\`

### Flow Chart
\`\`\`mermaid
graph LR
    A[Square Rect] --> B((Circle))
    A --> C(Round Rect)
    B --> D{Rhombus}
    C --> D
\`\`\`

---

**#markdown #web-development #creativity #code #art #uml #mermaid**`
  },
  {
    id: 'uml-diagrams',
    title: '📊 UML Diagrams',
    description: 'Interactive diagrams with Mermaid',
    icon: 'HiCollection',
    content: `# 📊 UML Diagrams with Mermaid

## 🔄 Sequence Diagram
Perfect for showing interactions between different entities over time.

\`\`\`mermaid
sequenceDiagram
    participant A as Alice
    participant B as Bob
    participant J as John
    
    A->>+B: Hello Bob, how are you?
    B-->>-J: How about you John?
    B--x A: I am good thanks!
    B-x J: I am good thanks!
    
    Note right of J: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.
    
    B-->A: Checking with John...
    A->J: Yes... John, how are you?
    J-->>A: I'm fine, thanks!
\`\`\`

## 🌊 Flow Chart
Great for visualizing processes and decision flows.

\`\`\`mermaid
graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> E[Fix the issue]
    E --> F[Test again]
    F --> B
    C --> G[Deploy]
    G --> H[Monitor]
    H --> I[End]
\`\`\`

## 🏛️ Class Diagram
Perfect for showing object-oriented design.

\`\`\`mermaid
classDiagram
    class Animal {
        +String name
        +int age
        +speak()
        +move()
    }
    
    class Dog {
        +String breed
        +bark()
        +wagTail()
    }
    
    class Cat {
        +String color
        +meow()
        +purr()
    }
    
    class Bird {
        +String species
        +fly()
        +sing()
    }
    
    Animal <|-- Dog
    Animal <|-- Cat
    Animal <|-- Bird
    
    Dog : +Boolean isGoodBoy
    Cat : +Boolean isIndependent
    Bird : +Boolean canFly
\`\`\`

## 📅 Gantt Chart
Excellent for project management and timelines.

\`\`\`mermaid
gantt
    title Software Development Timeline
    dateFormat YYYY-MM-DD
    section Planning
    Requirements gathering :a1, 2024-01-01, 2024-01-07
    Design phase :a2, 2024-01-08, 2024-01-14
    section Development
    Backend development :a3, 2024-01-15, 2024-02-15
    Frontend development :a4, 2024-01-25, 2024-02-25
    Integration :a5, 2024-02-16, 2024-02-28
    section Testing
    Unit testing :a6, 2024-02-01, 2024-02-20
    Integration testing :a7, 2024-02-21, 2024-03-05
    User acceptance testing :a8, 2024-03-06, 2024-03-12
    section Deployment
    Production deployment :a9, 2024-03-13, 2024-03-15
    Monitoring setup :a10, 2024-03-16, 2024-03-20
\`\`\`

## 🗺️ User Journey
Visualize user experience and interactions.

\`\`\`mermaid
journey
    title User Shopping Journey
    section Discovery
      Visit website: 5: User
      Browse products: 4: User
      Read reviews: 3: User
    section Decision
      Compare prices: 2: User
      Add to cart: 5: User
      Apply coupon: 4: User
    section Purchase
      Checkout: 3: User
      Payment: 2: User
      Confirmation: 5: User
    section Post-purchase
      Delivery tracking: 4: User
      Receive product: 5: User
      Leave review: 3: User
\`\`\`

## 🎯 State Diagram
Show different states and transitions.

\`\`\`mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Processing: start
    Processing --> Success: complete
    Processing --> Error: fail
    Success --> Idle: reset
    Error --> Processing: retry
    Error --> Idle: cancel
    Success --> [*]
    Error --> [*]
\`\`\`

---

> 💡 **Pro tip**: Mermaid diagrams are interactive and can be exported as SVG or PNG!

**Features:**
- 🎨 **Visual**: Easy to understand complex relationships
- 📱 **Responsive**: Automatically adjusts to container size
- 🎯 **Interactive**: Click and explore diagram elements
- 📊 **Professional**: Perfect for documentation and presentations

*Perfect for software architecture, system design, and project planning!*`
  }
];

export const getExampleById = (id: string): MarkdownExample | undefined => {
  return markdownExamples.find(example => example.id === id);
};

export const getExampleTitles = (): string[] => {
  return markdownExamples.map(example => example.title);
}; 