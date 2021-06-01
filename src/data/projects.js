// TODO Add a couple lines about each project
const data = [
  {
    title: 'KATube',
    subtitle: 'KATube Audio dataset creator from youTube',
    link: 'https://github.com/freds0/katube',
    image: '/images/projects/katube-process.png',
    date: '2020-11-20',
    desc:
      'KATube is a tool to automate the process of creating datasets'
      + 'It is based on the work of Pansori [https://arxiv.org/abs/1812.09798].'
      + 'KATube downloads all audios from YouTube and their subtitles, segments the audios, performing audio-text alignment.',
  },
  {
    title: 'KABooks',
    subtitle: 'KABooks Audiobooks dataset creator',
    link: 'https://github.com/freds0/kabooks',
    image: '/images/projects/kabooks-process.png',
    date: '2020-12-20',
    desc:
      'KABooks is a tool to automate the process of creating datasets. '
      + 'Receiving an audio file and the corresponding text as input, KABooks will clean the text, dividing it into sentences. ',
  },
];

export default data;
