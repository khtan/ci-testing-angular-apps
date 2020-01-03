[![CircleCI Status](https://circleci.com/gh/khtan/khtan.svg?style=shield)](https://circleci.com/gh/khtan/ci-testing-angular-apps)

# [Temporary Fork for Testing Angular Applications](https://www.manning.com/books/testing-angular-applications)

Jesse Palmer, Corinna Cohn, Michael Giambalvo, Craig Nishina

[Manning Publications](https://www.manning.com/books/testing-angular-applications)

<img src="https://images.manning.com/270/360/resize/book/4/e4907e3-04ec-4790-986b-b6a7cb949517/Palmer-TAA-MEAP.png" alt="Manning Testing Angular Applications">

# Introduction and reason for fork
Section 11.2 of "Testing Angular Applications" is a small section that introduced CircleCI as the CICD automation
platform framework. However the .circleci/config.yml had some problems and did not work for me.

This fork contains all the fixes I made so that I could have a working CircleCI.

In time, I hope to get the changes folded back to the original project.
#  Goals
  - [x] Get CircleCI working for Testing Angular Application testcases using Linux docker machines
  - [ ] (partial) Get CircleCI working for Testing Angular Application testcases using Windows VM machines
     1. Windows VM can run bash
     2. Windows VM does not have Chrome installed, and hence Karma and Protractor runs fail.
        See https://ideas.circleci.com/ideas/CCI-I-1311

# Summary of changes
I have followed the following guidelines so that it is easier to fold the changes back to the original project.

- Make no changes to the source code
- Only update the configuration files in order to support CircleCI better
   1. Standardize the outputs for unit tests ( karma-results ) and e2e tests ( protractor-results )
   2. Add a chapter folder in the output so that CircleCI can identify which tests come from which folders
   3. Use junit-reporter for CircleCI test parsing
   4. Continued use of yarn in .circleci/config.yml ( instead of npm )

# Other problems not fixed
  e2e tests failed for chapter10/test_screenshot and chapter10/test_experimental. 
  I have just skipped over them and did not dig deeper.

# CircleCI details
I am using the free memebership of Cloud-based CircleCI. The advertised features are :
   - 2500 free credits/week
   - Run 1 job at a time
   - Build on Linux and Windows

The Linux machines are provided as Docker images while the Windows machines are provisioned as virtual Windows Server 2019,
with Visual Studio 2019.

Since Windows also support Docker, I am waiting for CircleCI to make available Windows Docker machines with Windows Subsystem for Linux (WSL). When that happens, the same CircleCI configuration should work for both Linux and Windows, provided I keep the code to the bash commonality between the two.

# References
- Testing Angular Application's github : https://github.com/testing-angular-applications/testing-angular-applications
- My forked github :                  https://github.com/khtan/ci-testing-angular-apps
- My CircleCI project :               https://circleci.com/gh/khtan



