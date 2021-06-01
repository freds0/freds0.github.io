// TODO Add a couple lines about each project
const data = [
  {
    title: 'Vox_fala',
    subtitle: 'A Text-to-Speech System',
    link: 'https://cybervox.ai/',
    image: '/images/projects/vox_fala.png',
    date: '2020-11-01',
    desc:
      'Vox_fala is a system for speech synthesis in Brazilian Portuguese.'
      + 'Uses deep neural networks to achieve a quality similar to natural speech.'
      + 'We work with models like Tacotron-2 and GST-Tacotron.',
  },
  {
    title: 'Vox_txto',
    subtitle: 'A Speech-To-Text System',
    link: 'https://cybervox.ai/',
    image: '/images/projects/vox_txt.png',
    date: '2020-12-01',
    desc:
      'Vox_txto is a system for speech recognition in Brazilian Portuguese.'
      + 'our model is already a worthy competitor to the main ones in the market.'
      + 'We work with models like DeepSpeech2, Jasper, Listen-Attend-and-Spell (LAS), Wave2Letter, and Wav2vec',
  },
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
