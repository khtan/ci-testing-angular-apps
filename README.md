[![CircleCI Status](https://circleci.com/gh/khtan/khtan.svg?style=shield)](https://circleci.com/gh/khtan/ci-testing-angular-apps)

# [Temporary Fork for Testing Angular Applications](https://www.manning.com/books/testing-angular-applications)

Jesse Palmer, Corinna Cohn, Michael Giambalvo, Craig Nishina

[Manning Publications](https://www.manning.com/books/testing-angular-applications)

<img src="https://images.manning.com/270/360/resize/book/4/e4907e3-04ec-4790-986b-b6a7cb949517/Palmer-TAA-MEAP.png" alt="Manning Testing Angular Applications">

# Introduction and reason for fork
Section 11.2 of "Testing Angular Applications" is a small section that introduced CircleCI as the CICD automation
platform framework. However the .circleci/config.yml had some problems and did not work for me.

This fork contains all the fixes I made so that I could have a working CircleCI.
#  Goals
  1. Get CircleCI working for Testing Angular Application testcases using Linux docker machines
  2. Get CircleCI working for Testing Angular Application testcases using Windows VM machines

# Summary of changes
I have followed the following guidelines so that it is easier to fold the changes back to the original project.

1. Make no changes to the source code
2. Only update the configuration files in order to support CircleCI better
   a. Standardize the outputs for unit tests ( karma-results ) and e2e tests ( protractor-results )
   b. Add a chapter folder in the output so that CircleCI can identify which tests come from which folders
   c. Use junit-reporter for CircleCI test parsing
   d. Continued use of yarn in .circleci/config.yml ( instead of npm )


