// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Bash',
    competency: 1,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Flask',
    competency: 1,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git/Mercurial',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Data Science', 'Deep Learning', 'Python'],
  },
  {
    title: 'Pytorch',
    competency: 3,
    category: ['Data Science', 'Deep Learning', 'Python'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C/C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
