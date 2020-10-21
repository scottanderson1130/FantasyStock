# Contributing

Thank you in advance for your contribution. We are excited to see what you'll bring. To help make it easy for us to get things working from your contribution and changes, please follow the outlined guidelines below.
Happy coding!

## Getting SetUp

---

- Make sure you have a GitHub Account
- Make sure you have a Travic-ci account
- All travis access to build on the repository
- Fork the repository on Github
- Clone the repo
  <br>

### **Branches**

Make changes and commits on your branch, and make sure that you only make changes that are relevant to this branch.
<br>

#### **Branch naming conventions**

| Types   | Meaning                                          |
| ------- | ------------------------------------------------ |
| bug/    | code reacting in an unintended way               |
| feat/   | an addition to core application functionality    |
| test/   | code to ensure quality logic and functionality   |
| doc/    | edits or expansion on readme, or contributing md |
| update/ | updating or expanding on core functionality      |
| setup/  | neccessary code for the app                      |

<br>
### **Commits**
Commit messages should be written in the present tense and include a prefix. Prefix should correspond to the branch type. Acceptable prefixes are listed below.
#### **Prefixes:**
- (add) ...
- (fix) ...
- (cleanup) ...
## Getting Started
---
Pull with rebase from upstream to main
```
git pull --rebase upstream main
```
Install dependencies
```
npm install
```
Check out to branch
```
git checkout --branch <naming type>/<branch name>
```
Edit code and commit often using commit prefixes
## Pull Request
---
When you are finished with that branch's task, pull again to make sure no new changes conflict
```
git pull --rebase upstream main
```
Resolve conflicts as needed then push up
```
git push origin <branch name>
```
Use Github interface to make pull requests
