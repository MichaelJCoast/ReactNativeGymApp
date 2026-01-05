// server.js - Backend para WhatListen
const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const yts = require('yt-search');

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint de pesquisa
app.get('/api/search', async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ error: 'Query obrigatória' });
    }

    const results = await yts(query);
    
    // Formata resultados para o teu app
    const tracks = results.videos.slice(0, 20).map(video => ({
      id: video.videoId,
      name: video.title,
      artist_name: video.author.name,
      image: video.thumbnail,
      duration: video.timestamp ? 
        video.timestamp.split(':').reduce((acc, time) => (60 * acc) + +time, 0) : 
        video.seconds,
      videoId: video.videoId
    }));

    res.json({ results: tracks });
  } catch (error) {
    console.error('Erro na pesquisa:', error);
    res.status(500).json({ error: 'Erro ao pesquisar' });
  }
});

// Endpoint para pegar URL de streaming
app.get('/api/stream/:videoId', async (req, res) => {
  try {
    const { videoId } = req.params;
    
    if (!ytdl.validateURL(`https://www.youtube.com/watch?v=${videoId}`)) {
      return res.status(400).json({ error: 'ID de vídeo inválido' });
    }

    const info = await ytdl.getInfo(videoId);
    
    // Pega o melhor formato de áudio
    const audioFormat = ytdl.chooseFormat(info.formats, { 
      quality: 'highestaudio',
      filter: 'audioonly'
    });

    res.json({ 
      url: audioFormat.url,
      title: info.videoDetails.title,
      author: info.videoDetails.author.name,
      thumbnail: info.videoDetails.thumbnails[0].url
    });
  } catch (error) {
    console.error('Erro ao pegar stream:', error);
    res.status(500).json({ error: 'Erro ao pegar áudio' });
  }
});

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'WhatListen Backend OK' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🎵 Servidor rodando na porta ${PORT}`);
});

// package.json
/*
{
  "name": "whatlisten-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "ytdl-core": "^4.11.5",
    "yt-search": "^2.10.4"
  },
  "engines": {
    "node": ">=16.0.0"
  }
}
*/