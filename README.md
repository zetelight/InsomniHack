# CIS graduation planner (InsomniHack)

## Author (Order by last name and role)
Xin Chen, Linshu Huang, Xiaodong Quan, Qianzhi Zhao, Ziming Guo(Mentor)

## Introduction

This project is aimed to help students schedule all courses schedules until graduation.

## Rules

* Users are only allowed to opearte the lastest term.
  * For example, if we already have planned ``term 1``, ``term 2`` and ``term 3``, only term 3 are droppable.

* If we want to drop a new class at the term but there's one of its prerequisite in the term as well, the drop opeartion are not allowed.
  * For example, after we drop CIS 210 in the term 1, we cannot drop CIS 211 in the term 1.

* Each term has up to 5 classes

## How to use

``` bash
git clone https://github.com/zetelight/InsomniHack.git
cd InsomniHack
npm install
npm start
```
