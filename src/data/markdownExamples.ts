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

---

**#markdown #web-development #creativity #code #art**`
  }
];

export const getExampleById = (id: string): MarkdownExample | undefined => {
  return markdownExamples.find(example => example.id === id);
};

export const getExampleTitles = (): string[] => {
  return markdownExamples.map(example => example.title);
}; 