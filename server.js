const express 	= require('express');
const cors 		= require('cors');
const instagram	= require('instagram-user');
const app 		= express();

app.use(cors());

app.listen(4000, () => {
	console.log('Server works!');
});

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('public/index.html');
});

app.get('/download', (req, res) => {
	var URL = req.query.URL;
	(async () => {
		let profile = await instagram(URL);
		console.log(profile);
		res.redirect(profile.profile_pic_url_hd);
	})();
});