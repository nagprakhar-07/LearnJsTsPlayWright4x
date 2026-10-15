# LearnJsTsPlayWright4x

A collection of small, standalone JavaScript examples for learning the language step by step. The lessons are organized into chapter folders, and many files demonstrate a single concept or include short practice questions.

## Chapters

| Folder | Topics |
| --- | --- |
| `01_chapter_JS_Basics` | Hello World and basic math |
| `02_chapter_JS_Keywords_Identifiers` | JavaScript engine basics, keywords, identifiers, naming rules, and comments |
| `03_chapter_JS_Literals` | Literals, numbers, `null`, and `undefined` |
| `04_chapter_JS_Operators` | Assignment, arithmetic, comparison, logical, string, ternary, and `typeof` operators |
| `05_chapter_JS_Incre_Decr_Op` | Prefix and postfix increment/decrement, practice questions, and the nullish coalescing operator |
| `06_chatper_if_else_statement_Condition` | `if`, `if/else`, nested conditions, and multiple branches |
| `07_chapter_switch` | `switch` statements, grouped cases, and practice questions |
| `08_chapter_UserInput` | Browser prompts and reading user input in Node.js |

## Getting started

Install [Node.js](https://nodejs.org/) to run the Node.js examples. Most lessons use built-in JavaScript and Node.js features and do not need additional packages.

Clone the repository:

```bash
git clone https://github.com/nagprakhar-07/LearnJsTsPlayWright4x.git
cd LearnJsTsPlayWright4x
```

Run an individual lesson from the repository root:

```bash
node .\01_chapter_JS_Basics\01_HelloWorld.js
```

Each `.js` file is intended to be run independently. Browse a chapter folder and pass the desired file path to `node`; the output appears in the terminal.

The user-input chapter includes examples with different runtimes: `59_UI.js` uses the browser's `prompt()` and should be run in a browser, while the other examples use Node.js input APIs. `61_Prompt_sync.js` additionally requires the `prompt-sync` package.
