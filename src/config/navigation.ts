import type { NavSection } from "@t/navigation";

export const navigation: NavSection[] = [
  {
    id: "math",
    label: "수학",
    items: [
      {
        id: "math-middle",
        label: "중학교",
        children: [
          { id: "math-middle-number", label: "수와 연산", path: "/math/middle/number-algebra" },
          { id: "math-middle-function", label: "함수", path: "/math/middle/function" },
          { id: "math-middle-geometry", label: "기하", path: "/math/middle/geometry" },
          { id: "math-middle-statistics", label: "통계", path: "/math/middle/statistics" },
        ],
      },
      {
        id: "math-high",
        label: "고등학교",
        children: [
          { id: "math-high-math1", label: "수학Ⅰ", path: "/math/high/math1" },
          { id: "math-high-math2", label: "수학Ⅱ", path: "/math/high/math2" },
          { id: "math-high-calculus", label: "미적분", path: "/math/high/calculus" },
          { id: "math-high-prob", label: "확률과 통계", path: "/math/high/probability-stats" },
          { id: "math-high-geometry", label: "기하", path: "/math/high/geometry" },
        ],
      },
      {
        id: "math-university",
        label: "대학교",
        children: [
          { id: "math-univ-calculus", label: "미적분학", path: "/math/university/calculus" },
          { id: "math-univ-linear", label: "선형대수학", path: "/math/university/linear-algebra" },
          { id: "math-univ-prob", label: "확률론", path: "/math/university/probability" },
          { id: "math-univ-stats", label: "통계학", path: "/math/university/statistics" },
          { id: "math-univ-ode", label: "미분방정식", path: "/math/university/ode" },
          { id: "math-univ-complex", label: "복소해석학", path: "/math/university/complex-analysis" },
          { id: "math-univ-real", label: "실해석학", path: "/math/university/real-analysis" },
          { id: "math-univ-numerical", label: "수치해석", path: "/math/university/numerical-analysis" },
        ],
      },
      {
        id: "math-discrete",
        label: "이산수학",
        children: [
          { id: "math-disc-logic", label: "논리와 증명", path: "/math/discrete/logic" },
          { id: "math-disc-set", label: "집합론", path: "/math/discrete/set-theory" },
          { id: "math-disc-graph", label: "그래프이론", path: "/math/discrete/graph-theory" },
          { id: "math-disc-comb", label: "조합론", path: "/math/discrete/combinatorics" },
          { id: "math-disc-number", label: "정수론", path: "/math/discrete/number-theory" },
        ],
      },
      {
        id: "math-engineering",
        label: "공학수학",
        children: [
          { id: "math-eng-laplace", label: "라플라스 변환", path: "/math/engineering-math/laplace" },
          { id: "math-eng-fourier", label: "푸리에 해석", path: "/math/engineering-math/fourier" },
          { id: "math-eng-pde", label: "편미분방정식", path: "/math/engineering-math/pde" },
        ],
      },
      {
        id: "math-ai",
        label: "AI를 위한 수학",
        children: [
          { id: "math-ai-linear", label: "선형대수", path: "/math/ai-math/linear-algebra" },
          { id: "math-ai-prob", label: "확률·통계", path: "/math/ai-math/probability-stats" },
          { id: "math-ai-opt", label: "최적화 이론", path: "/math/ai-math/optimization" },
          { id: "math-ai-info", label: "정보이론", path: "/math/ai-math/information-theory" },
          { id: "math-ai-calc", label: "미적분", path: "/math/ai-math/calculus" },
        ],
      },
    ],
  },
  {
    id: "science",
    label: "과학",
    items: [
      {
        id: "science-basic",
        label: "기초 과학",
        children: [
          { id: "sci-basic-matter", label: "물질의 성질", path: "/science/basic/matter" },
          { id: "sci-basic-energy", label: "에너지", path: "/science/basic/energy" },
          { id: "sci-basic-life", label: "생명과학 기초", path: "/science/basic/life" },
          { id: "sci-basic-earth", label: "지구와 우주", path: "/science/basic/earth-space" },
        ],
      },
      {
        id: "science-physics",
        label: "물리",
        children: [
          { id: "sci-phys-high", label: "고등 물리", path: "/science/physics/high" },
          { id: "sci-phys-mechanics", label: "고전역학", path: "/science/physics/university/classical-mechanics" },
          { id: "sci-phys-em", label: "전자기학", path: "/science/physics/university/electromagnetism" },
          { id: "sci-phys-qm", label: "양자역학", path: "/science/physics/university/quantum-mechanics" },
          { id: "sci-phys-stat", label: "통계역학", path: "/science/physics/university/statistical-mechanics" },
          { id: "sci-phys-rel", label: "상대성이론", path: "/science/physics/university/relativity" },
        ],
      },
      {
        id: "science-chemistry",
        label: "화학",
        children: [
          { id: "sci-chem-high", label: "고등 화학", path: "/science/chemistry/high" },
          { id: "sci-chem-general", label: "일반화학", path: "/science/chemistry/university/general-chemistry" },
          { id: "sci-chem-organic", label: "유기화학", path: "/science/chemistry/university/organic-chemistry" },
          { id: "sci-chem-physical", label: "물리화학", path: "/science/chemistry/university/physical-chemistry" },
        ],
      },
      {
        id: "science-biology",
        label: "생물",
        children: [
          { id: "sci-bio-high", label: "고등 생물", path: "/science/biology/high" },
          { id: "sci-bio-molecular", label: "분자생물학", path: "/science/biology/university/molecular-biology" },
          { id: "sci-bio-genetics", label: "유전학", path: "/science/biology/university/genetics" },
          { id: "sci-bio-biochem", label: "생화학", path: "/science/biology/university/biochemistry" },
        ],
      },
      {
        id: "science-earth",
        label: "지구과학",
        children: [
          { id: "sci-earth-high", label: "고등 지구과학", path: "/science/earth-science/high" },
          { id: "sci-earth-geo", label: "지구물리학", path: "/science/earth-science/university/geophysics" },
          { id: "sci-earth-astro", label: "천체물리학", path: "/science/advanced/astrophysics" },
        ],
      },
    ],
  },
];
