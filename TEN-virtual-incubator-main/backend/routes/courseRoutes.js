// import { Router } from 'express';
// import { createCourse, getAllCourses, getCourseByID } from '../controllers/courseControllers.js';
// import upload from '../config/multerConfig.js'; 


// const courseRoute = Router();

// courseRoute.post('/course', upload.single('imgSrc'), createCourse); 
// courseRoute.get('/courses', getAllCourses);
// courseRoute.get('/coursedetails/:id', getCourseByID);

// export default courseRoute;
















import {Router} from 'express'
import { createCourse,getallcourses,getcoursesByID } from '../controllers/courseControllers.js';

const courseRoute = Router()
courseRoute.post('/course',createCourse)
courseRoute.get('/courses',getallcourses)
courseRoute.get('/coursedetails/:id',getcoursesByID)

export default courseRoute;
