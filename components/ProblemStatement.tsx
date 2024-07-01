import React from "react";

export default function ProblemStatement() {
  return (
    <div className="p-4 bg-white rounded-xl gap-4 flex flex-col">
      <h2 className="font-bold text-3xl">Course Schedule</h2>
      <p>
        There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
        You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates
        that you must take course bi first if you want to take course ai.
      </p>
      <ul className="list-disc ps-8">
        <li>For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.</li>
      </ul>
      <p>
        Return true if you can finish all courses. Otherwise, return false.
      </p>

      <br />

      <h4 className="font-bold">Example 1:</h4>
      <div>
        <p>Input: numCourses = 2, prerequisites = [[1,0]]</p>
        <p>Output: true</p>
        <p>Explanation: There are a total of 2 courses to take.</p>
        <p>To take course 1 you should have finished course 0. So it is possible.</p>
      </div>

      <h4 className="font-bold">Example 2:</h4>
      <div>
        <p>Input: numCourses = 2, prerequisites = [[1,0],[0,1]]</p>
        <p>Output: false</p>
        <p>Explanation: There are a total of 2 courses to take.</p>
        <p>To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.</p>
      </div>

    </div>
  );
}