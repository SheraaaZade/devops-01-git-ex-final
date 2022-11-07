var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');

const months = ["January","February", "March", "April", "May", "June","July", "August", "September","October", "November", "December"];
const currentMonth = new Date().getMonth();
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"];
const currentDay = new Date().getDay();
const currentNumDay = new Date().getDate();

// View Engine Setup
app.set('views', path.join(__dirname))
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
	res.render('./views/Home', {
		title: 'Welcome buddy !',
		month: months[currentMonth],
		day : days[currentDay],
		dayDate: currentNumDay,
		cards: [
			{
				title: 'Our Changing Planet',
				author: 'Kurt Wagner',
				desc: 'Visit ten places on our planet that are undergoing the biggest changes today',
				imageUrl: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg'
			},
			{
				title: 'Our Changing Planet',
				author: 'Kurt Wagner',
				desc: 'Visit ten places on our planet that are undergoing the biggest changes today',
				imageUrl: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/3.jpg'
			},
			{
				title: 'Our Changing Planet',
				author: 'Kurt Wagner',
				desc: 'Visit ten places on our planet that are undergoing the biggest changes today',
				imageUrl: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/1.jpg'
			}
		]
	 })
});

app.get('/about', function (req,res) {
	res.render("./views/About", {
		title: 'About us',
		values: [
			{
				name:"Independant",
				desc: "One of the characteristics of Agile Methodologies such as Scrum, Kanban or XP is the ability to move PBIs around, taking into account, amongst other criteria, their relative priority. When PBIs are tightly dependent, it might be possible to combine them into a single PBI. ",
			},
			{
				name: "Negotiable",
				desc: "According to Agile methodology, while the PBI lies in the product backlog it can be rewritten or even discarded, depending on business, market, technical or any other type of requirement by team members. ",
			}
		]
	})
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});