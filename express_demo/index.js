
const express = require('express');  // require('express') returns a function. calling the function returns an object of type Express:
const app = express();  // Express object has methods for get, post, put, delete
const Joi = require('joi');
app.use(express.json());  // this line lets us parse jsons in the body of requests, something that is disabled by default in express

const courses = [
    {id: 1, name: 'history of cricket'},
    {id: 2, name: 'optimising nutritional intake for high level darts performance'},
    {id: 3, name: 'transgender internet lexicon 101'},
];

//we can define new routes using app.get()
app.get('/', (req, res) => {  
    // first arg is our path (URL), second arg is our callback function which is called when there is an
    // http get request to this endpoint (the endpoint being the first arg)
    res.send('Hello World');
})

app.get('/api/courses', (req, res) => {
    res.send(courses);
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));  
    //req.params.id is a string, so we parseInt for the comparison to work. better to assign const or let, not var
    //if course doesn't exist, error 404
    if(!course) return res.status(404).send('error 404: this course does not exist boss');
    res.send(course);
})

app.post('/api/courses', (req, res) => {

    const {error} = validateCourse(req.body);
    // error is only not null if the request is invalid
    if (error) return res.status(400).send(error.details[0].message);
    

    const course = {
        id: courses.length + 1,
        name: req.body.name  // we assume here that the request body has an object, and that the object has a name attribute
    };

    courses.push(course);
    res.send(course);  // we return the object so the client knows its ID, since the ID is assigned by the server
});

app.put('/api/courses/:id', (req, res) => {
    // first we need to lookup the course corresponding to the id. if course doesn't exist, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));  
    if(!course) return res.status(404).send('error 404: this course does not exist boss');
    
    // if course does exist, validate. if invalid, return 400
    const {error} = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);



    // if all good, update course and return updated course to client
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    // lookup course id
    const course = courses.find(c => c.id === parseInt(req.params.id));
    // if course does not exist, return 404
    if(!course) return res.status(404).send('error 404: tried to delete a non-existent course');

    

    // else remove from courses. by convention, we also return the deleted course to the client.
    const index = courses.indexOf(course);
    courses.splice(index, 1);  // splice remove n number of items from an array beginning at a given index

    res.send(course);
});

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    const result = schema.validate(course);
    return result;
}

//set port environment variable
const port = process.env.PORT || 3000;  // port is an environment variable. we set to 3000 if 
app.listen(port, () => console.log(`listening on port ${port}...`));


