import { Box, Divider, Paper, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDownloadForOffline } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import Edit from '../Components/Edit'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { addDownloadHistoryAPI } from '../services/allAPI';

function Preview({userInput, finish, resumeId, setUserInput}) {

  const[downloadStatus,setDownloadStatus] = useState(false)

  console.log(userInput);

  const downloadCV = async () => {
    // getElement for screenshot
    const input = document.getElementById('result')
    const canvas = await html2canvas(input,{scale:2})
    const imgUrl = canvas.toDataURL('image/png')

    const pdf = new jsPDF()
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
      pdf.addImage(imgUrl,'PNG',0,0,pdfWidth,pdfHeight)
      pdf.save('resume.pdf')

      // getDate
      const localTimeData = new Date()
      const timeStamp = `${localTimeData.toLocaleDateString()},${localTimeData.toLocaleTimeString()}`

      try{
        const result = await addDownloadHistoryAPI({...userInput,imgUrl,timeStamp})
        console.log(result);
        setDownloadStatus(true)
      }catch(err){
        console.log(err);
      }
  }
  
  return (
    <div>

    <div style={{marginTop:'100px'}}>
      {userInput.personalDetails.name!="" &&
      <div className='flex-column'>
        {finish&&
        <div className="d-flex justify-content-end align-items-center">
        {/* {download} */}
        <button onClick={downloadCV} className='btn text-primary fs-1'><MdDownloadForOffline/></button>
        {/* {edit} */}
        <div>
          <Edit resumeId={resumeId} setUpdateResume={setUserInput} />
        </div>
        {/* {history} */}
        { downloadStatus &&<>
          <Link to={'/history'} className='btn text-primary fs-2'><FaHistory/></Link></>
        }
        {/* {back} */}
        <Link to={'/resume-generator'} className='text-primary fs-4'>Back</Link>
        </div>}
              <Box>
        <Paper elevation={5} id='result'>
          <Typography varient='h4' align='center' component='h2'>
            <h2>Name:{userInput.personalDetails.name}</h2>
          </Typography>
          <Typography varient='subtitle1' align='center' color='#00b0ff'>
            <p>Job title:{userInput.personalDetails.jobTitle}</p>
          </Typography>
          <Typography variant='body2' align='center'>
            {userInput.personalDetails.location} | {userInput.personalDetails.email} | {userInput.personalDetails.phone}
          </Typography>
          <Typography variant='body2' align='center' mb={4}>
            <Link href={userInput.personalDetails.github} target='_blank'>Github</Link>
            <Link href={userInput.personalDetails.linkedIn} target='_blank'>LinkedIn</Link>
            <Link href={userInput.personalDetails.portfolio} target='_blank'>Portfolio</Link>
          </Typography>
          <Divider>Summary</Divider>
          <Typography mb={3}></Typography>
            <p>{userInput.summary}</p>
          <Divider>Education</Divider>
          <Typography variant='h6' align='center'>
            <h5>{userInput.education.course}</h5>
            <p><span>{userInput.education.college}</span> | <span>{userInput.education.university}</span> | <span>{userInput.education.year}</span></p>
          </Typography>
          <Typography variant='body2' align='center' mb={4}></Typography>
          <Divider>Professional Experience</Divider>
          <Typography variant='h6' align='center'>
            <h5>{userInput.experience.job}</h5>
            <p><span>{userInput.experience.company}</span> | <span>{userInput.experience.location}</span> | <span>{userInput.experience.duration}</span></p>
          </Typography>
          <Typography variant='body2' align='center' mb={4}></Typography>
          
          <Divider>Skills</Divider>
          <Stack spacing={2} direction="row" sx={{flexWrap:'wrap',gap:'10px',padding:'10px'}}>
            {
              userInput.skills.map(skill => (
                <Button variant="contained">{skill}</Button>
              ))
            }
          </Stack>
        </Paper>
      </Box>
      </div>
      }
      </div>
    </div>
  )
}

export default Preview
