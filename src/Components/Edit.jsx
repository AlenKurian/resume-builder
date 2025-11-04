import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaRegEdit } from "react-icons/fa";
import { TextField } from '@mui/material';
import { editResumeAPI, getResumeAPI } from '../services/allAPI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit({resumeId, setUpdateResume}) {
  // console.log(resumeId);
  const [userInput,setUserInput] = React.useState({})
  const [userSkill,setUserSkill] = React.useState("")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // getEditResumeDetails
  const getEditResumeDetails = async () => {
    try{
      const result = await getResumeAPI(resumeId)
      setUserInput(result?.data)
    }catch(err){
      console.log(err);
    }
  }

  React.useEffect(() => {
    resumeId && getEditResumeDetails()
  },[resumeId])
  // console.log(userInput)

  const addSkill = (userSkill) => {
    if (userSkill) {
      const trimmedSkill = userSkill.trim().toUpperCase();
      if (formik.values.skills.includes(trimmedSkill)) {
        swal("Duplicate", "Skill already exists", "warning");
      } else {
        formik.setFieldValue('skills', [...formik.values.skills, trimmedSkill]);
        if (userSkillRef.current) {
          userSkillRef.current.value = '';
        }
      }
    }
  };

  const removeSkill = (skill) => {
    formik.setFieldValue(
      'skills',
      formik.values.skills.filter((item) => item !== skill)
    );
  };

  const handleUpdateResume = async() => {
    try{
      const result = await editResumeAPI(userInput?.id,userInput)
      console.log(result);
      setUpdateResume(result?.data)
        swal('success','Resume Updated','success');
      handleClose()
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      <button onClick={handleOpen} className='btn text-primary fs-1'><FaRegEdit /></button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* {personal details} */}
            <h3>Personal Details</h3>
            <div className='d-flex row p-3'>
              <TextField id="standard-basic"
                name="personalDetails.name"
                label="Full Name"
                variant="standard"
                value={formik.values.personalDetails.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.personalDetails?.name &&
                  Boolean(formik.errors.personalDetails?.name)
                }
                helperText={
                  formik.touched.personalDetails?.name &&
                  formik.errors.personalDetails?.name
                }
                fullWidth
                margin="normal" />
              <TextField id="standard-basic" 
                name="personalDetails.jobTitle"
                label="Job Title"
                variant="standard"
                value={formik.values.personalDetails.jobTitle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.personalDetails?.jobTitle &&
                  Boolean(formik.errors.personalDetails?.jobTitle)
                }
                helperText={
                  formik.touched.personalDetails?.jobTitle &&
                  formik.errors.personalDetails?.jobTitle
                }
                fullWidth
                margin="normal"/>
              <TextField id="standard-basic" 
                name="personalDetails.location"
                label="Location"
                variant="standard"
                value={formik.values.personalDetails.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.personalDetails?.location &&
                  Boolean(formik.errors.personalDetails?.location)
                }
                helperText={
                  formik.touched.personalDetails?.location &&
                  formik.errors.personalDetails?.location
                }
                fullWidth
                margin="normal" />
            </div>
            {/* {contact details} */}
            <h3>Contact Details</h3>
            <div className='d-flex row p-3'>
              <TextField id="standard-basic" 
                name="personalDetails.email"
                label="Email"
                variant="standard"
                value={formik.values.personalDetails.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.personalDetails?.email &&
                  Boolean(formik.errors.personalDetails?.email)
                }
                helperText={
                  formik.touched.personalDetails?.email &&
                  formik.errors.personalDetails?.email
                }
                fullWidth
                margin="normal" />
              <TextField id="standard-basic" 
              name="personalDetails.phone"
                label="Phone Number"
                variant="standard"
                value={formik.values.personalDetails.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.personalDetails?.phone &&
                  Boolean(formik.errors.personalDetails?.phone)
                }
                helperText={
                  formik.touched.personalDetails?.phone &&
                  formik.errors.personalDetails?.phone
                }
                fullWidth
                margin="normal" />
              <TextField id="standard-basic" 
                name="personalDetails.github"
                label="Github Profile Link"
                variant="standard"
                value={formik.values.personalDetails.github}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.personalDetails?.github &&
                  Boolean(formik.errors.personalDetails?.github)
                }
                helperText={
                  formik.touched.personalDetails?.github &&
                  formik.errors.personalDetails?.github
                }
                fullWidth
                margin="normal" />
              <TextField id="standard-basic" 
                name="personalDetails.linkedIn"
                label="LinkedIn Profile Link"
                variant="standard"
                value={formik.values.personalDetails.linkedIn}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.personalDetails?.linkedIn &&
                  Boolean(formik.errors.personalDetails?.linkedIn)
                }
                helperText={
                  formik.touched.personalDetails?.linkedIn &&
                  formik.errors.personalDetails?.linkedIn
                }
                fullWidth
                margin="normal" />
              <TextField id="standard-basic" 
                name="personalDetails.portfolio"
                label="Portfolio Link"
                variant="standard"
                value={formik.values.personalDetails.portfolio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.personalDetails?.portfolio &&
                  Boolean(formik.errors.personalDetails?.portfolio)
                }
                helperText={
                  formik.touched.personalDetails?.portfolio &&
                  formik.errors.personalDetails?.portfolio
                }
                fullWidth
                margin="normal" />
            </div>
            {/* {education details} */}
            <h3>Education Details</h3>
            <div className='d-flex row p-3'>
              <TextField id="standard-basic" label="Course Name" variant="standard" />
              <TextField id="standard-basic" label="Course Name" variant="standard" />
              <TextField id="standard-basic" label="University" variant="standard" />
              <TextField id="standard-basic" label="Year of Passout" variant="standard" />
            </div>
            {/* {professional details} */}
            <h3>Professional Details</h3>
            <div className='d-flex row p-3'>
              <TextField id="standard-basic" label="Job or internship" variant="standard" />
              <TextField id="standard-basic" label="Company Name" variant="standard" />
              <TextField id="standard-basic" label="location" variant="standard" />
              <TextField id="standard-basic" label="Duration" variant="standard" />
            </div>
            {/* {skills} */}
            <h3>Skills</h3>
            <div spacing={2} className="d-flex flex-wrap align-items-center justify-content-between">
              <TextField id='standard-basic' label='Add Skill' variant='standard' onChange={e => setUserSkill(e.target.value)} value={userSkill} />

              <Button className='me-3 mt-4' variant='text' sx={{ maxWidth: '40px' }} onClick={addSkill}>Add</Button>
            </div>
            {/* {added skills} */}
            <h5>Added Skills : </h5>
            <div className='d-flex flex-wrap justify-content-between'>
              { userInput?.skils?.length>0 && userInput?.skills?.map(skill => (
                <span className='btn btn-primary d-flex justify-content-center'>{skill}<button className='btn text-light fs-5'>X</button></span>
              ))}
            </div>
            <h3>Professional Summary</h3>
            <div className='d-flex row p-3'>
              <TextField id="standard-multiline-static" label="Write a short summary of yourself" multiline rows={4} defaultValue="Eg: I'm a passionate full-stack developer with hands-on experience in React,Node ..." variant="standard" value={""} />
            </div>
            <Button onClick={handleUpdateResume}>Update</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
