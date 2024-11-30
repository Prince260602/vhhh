// // import { Course } from '../models/courseModel.js';

// // export const createCourse = async (req, res) => {
// //   try {
// //     const { title, description, price, category } = req.body;
// //     const imgSrc = req.file.path; 
// //     const course = await Course.create({ title, description, price, imgSrc, category });
// //     res.status(201).json({ success: true, msg: 'Course Added', data: course });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ success: false, msg: `Course creation error: ${error.message}` });
// //   }
// // };

// // export const getAllCourses = async (req, res) => {
// //   try {
// //     const courses = await Course.find({});
// //     if (!courses || courses.length === 0) {
// //       return res.status(200).json({ success: false, msg: 'No courses available', data: [] });
// //     }
// //     res.status(200).json({ success: true, data: courses });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ success: false, msg: `Error retrieving courses: ${error.message}` });
// //   }
// // };

// // export const getCourseByID = async (req, res) => {
// //   try {
// //     const courseDetails = await Course.findById(req.params.id);
// //     if (!courseDetails) {
// //       return res.status(200).json({ success: false, msg: 'Course not found', courseDetails: null });
// //     }
// //     res.status(200).json({ success: true, courseDetails });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ success: false, msg: `Error retrieving course: ${error.message}` });
// //   }
// // };








// import { Course } from "../models/courseModel.js";

// export const createCourse = async(req,res)=>{
//     console.log(req.body)
//     try {
//         const {title,description,price,imgSrc,category} = req.body

//         const course = await Course.create({
//             title,
//             description,
//             price,
//             imgSrc,
//             category,
//         })
//         // console.log(course);
//         res.status(201).json({success:true,msg:"Course Added",data:course})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({success:false,msg:`${error}- Cousre creation error`})
//     }
// }
// export const getallcourses = async (req, res) => {
//   try {
//       const courses = await Course.find({});
//       console.log(courses);
//       res.status(200).json({ success: true, data: courses });
//   } catch (error) {
//       console.error(error); // Log the error for debugging
//       res.status(500).json({ success: false, msg: "Courses not present" });
//   }
// };

// export const getcoursesByID = async (req, res) => {
//   try {
//       const courseDetails = await Course.findById(req.params.id);
//       if (!courseDetails) {
//           return res.status(404).json({ success: false, msg: "Course not found" });
//       }
//       res.status(200).json({ success: true, courseDetails });
//   } catch (error) {
//       console.error(error); // Log the error for debugging
//       res.status(500).json({ success: false, msg: "Error retrieving course" });
//   }
// };






















import { Course } from "../models/courseModel.js";

export const createCourse = async(req,res)=>{
    console.log(req.body)
    try {
        const {title,description,price,imgSrc,category} = req.body

        const course = await Course.create({
            title,
            description,
            price,
            imgSrc,
            category,
        })
        // console.log(course);
        res.status(201).json({success:true,msg:"Course Added",data:course})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,msg:`${error}- Cousre creation error`})
    }
}

export const getallcourses = async(req,res)=>{
   try {
    const courses = await Course.find({})
    console.log(courses)
    res.status(201).json({success:true,data:courses})
   } catch (error) {
    res.status(500).json({success:false,msg:"courses not present"})
   }

}

export const getcoursesByID = async(req,res)=>{
    try {
        const courseDetails = await Course.findById(req.params.id)
        if(!courseDetails){
            return res.status(404).json({success:true,msg:"Course not found"})
        }
        res.status(200).json({
            success:true,
            courseDetails
        })
    } catch (error) {
        
    }
} 
