const express = require('express');
const router = express.Router();//Обработчик маршрута
const fetch = require('node-fetch');

//Получение данных для запроса
router.get('/:platform/:gamertag', async (req, res) => {
    try {
        //Для авторизации на API третьей стороны необходим был их ключ в переменной headers
        const headers = {
            'TRN-Api-Key': process.env.TRACKER_API_KEY
                }
        const {platform, gamertag} = req.params;
        //Получение данных по URL
        const response = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`, {headers});
        //Внесение данных в переменную
        const data = await response.json();
        if(data.errors && data.errors.length > 0){
            return res.status(404).json({message: 'Profile not found'});
        }

        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'server error'})
    }
});

module.exports = router;